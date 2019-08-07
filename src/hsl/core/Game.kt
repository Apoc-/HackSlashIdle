package hsl.core

import hsl.core.master.Master
import hsl.core.master.Upgrade
import hsl.core.world.World
import hsl.generators.MonsterGenerator
import hsl.generators.html.*
import hsl.util.IdNotFoundException
import hsl.util.Logger
import hsl.util.MsgType
import kotlinx.html.currentTimeMillis
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.clear
import kotlin.dom.hasClass
import kotlin.dom.removeClass
import kotlin.js.Date

object Game {
    fun addXp() {
        Hero.Xp += 1000
    }

    var Hero = Hero()
    var World = World()
    private var currentLocationId = 1

    val Logger = Logger("logContainer")
    private lateinit var CurrentMonster: Monster
    private var monsterIsSpawned = false
    private lateinit var CurrentMonsterCard: HTMLDivElement


    //TODO move unlocks and other save related stuff to a serializable gamestate class
    //region UNLOCKS
    private var firstStart: Boolean = true
    private var dungeonsUnlocked: Boolean = false
    private var masterUnlocked: Boolean = false
    //endregion

    private var isAtLocation: Boolean = false

    private var lastAutoAttack = 0f

    //timing
    private val fps = 30.0
    private val interval = 1000.0/fps
    private var lastTime = Date().getMilliseconds()
    private var currentTime = 0
    private var deltaTime = 0

    const val DEBUG: Boolean = false

    init {
        refreshAttributeTable()
        initUpgradeButtons()
        initLocationList()

        if(firstStart) {
            //hide attributeView
            //hide mainView
            //hide logView
            //show introView

            goToLocation(1)
        }
    }

    private fun initLocationList() {
        val locationList = document.getElementById("locationList") ?: throw IdNotFoundException("locationList")

        Game.World.getLocations().forEach {
            locationList.append(
                LocationListElementGenerator.generateElement(it)
            )
        }
    }

    var fCount = 0
    fun gameLoop() {
        window.requestAnimationFrame {
            gameLoop()
        }

        currentTime = Date().getMilliseconds()
        deltaTime = currentTime - lastTime

        if(deltaTime > interval) {
            fCount += 1

            updateUpgradeButtons()
        }

        //every 30 frames, update autoScrollContainers
        if(fCount%30 == 0) scrollAutoScrollContainers()

        if(!monsterIsSpawned && isAtLocation) {
            spawnMonster()
        }

        if(monsterIsSpawned && isAtLocation) {
            handleAutoAttack()
        }

        checkUnlocks()
    }

    fun goToLocation(locationId: Int) {
        document.getElementById("locationSelectionContainer")?.addClass("d-none")

        val locationContainer = document.getElementById("locationContainer")
        val locationElement = LocationElementGenerator.generateElement(World.getLocationById(locationId))

        locationContainer?.removeClass("d-none")
        locationContainer?.append(locationElement)

        isAtLocation = true
    }

    fun leaveCurrentLocation() {
        document.getElementById("locationSelectionContainer")?.removeClass("d-none")
        val locationContainer = document.getElementById("locationContainer")
        locationContainer?.addClass("d-none")
        locationContainer?.clear()

        despawnMonster()

        currentLocationId = 0
        isAtLocation = false
    }

    //region MONSTER

    private fun spawnMonster() {
        CurrentMonster = MonsterGenerator.generateMonster(1)
        CurrentMonsterCard = createMonsterCard(CurrentMonster)
        monsterIsSpawned = true;
    }

    private fun createMonsterCard(monster: Monster): HTMLDivElement {
        val cardDiv = MonsterCardGenerator.generateMonsterCard(monster)

        document.getElementById("monsterCardContainer")?.append(cardDiv)

        return cardDiv
    }

    fun handleMonsterAttack() {
        val died = Hero.attack(CurrentMonster)

        updateMonsterHealthBar(CurrentMonster)

        if(died) {
            destroyMonsterCard()
            monsterIsSpawned = false;
        }
    }

    private fun updateMonsterHealthBar(monster: Monster) {
        var bar = document.getElementById("monsterHealthBar") as HTMLDivElement

        var hpPercent = (monster.currentHealth / monster.maxHealth) * 100
        var str = "$hpPercent%"
        bar.style.width = str
    }

    private fun destroyMonsterCard() {
        CurrentMonsterCard.parentNode?.clear()
    }


    private fun despawnMonster() {
        destroyMonsterCard()
        monsterIsSpawned = false;
    }


    //endregion

    private fun checkUnlocks() {
        //master
        if(Hero.Xp >= 10 && !masterUnlocked) {
            document.getElementById("masterTabContainer")?.removeClass("d-none")
            Logger.logMsg(MsgType.EVENT, "Yay! From now on I have to be on call for teaching you skills and stuff... k thx.")

            masterUnlocked = true;
        }

        //dungeons
        if(Hero.Level >= 10 && !dungeonsUnlocked) {
            dungeonsUnlocked = true
        }
    }

    fun refreshAttributeTable() {
        val attributeTable = document.getElementById("attributeTableBody") ?: throw Exception("id: attributeTableBody not found")
        attributeTable.clear()

        Hero.Attributes.values.forEach {
            var attrRow = AttributeTableRowGenerator.generateAttributeTableRow(it)

            attributeTable.append(attrRow)
        }

        Hero.recalculateAttributes()
    }

    private fun initUpgradeButtons() {
        val container = document.getElementById("upgradeButtonsContainer") ?: return

        for (kvp in Master.upgrades) {
            val id = kvp.key
            val upgrade = kvp.value
            val upgradeContainer = UpgradeButtonGenerator.generateUpgradeButton(upgrade)
            val button = upgradeContainer.getElementsByClassName("upgrade-button").asList().first()
            container.append(upgradeContainer)

            button.addEventListener("click", {
                Master.buyUpgrade(Hero, id)
                updateUpgradeButton(upgrade, upgradeContainer, button as HTMLButtonElement)
            })

            upgrade.updatePriceTag()
        }
    }


    private fun scrollAutoScrollContainers() {
        var scrollContainer = document.getElementsByClassName("auto-scroll")

        scrollContainer.asList().forEach {
            val isScrolled = it.scrollHeight - it.clientHeight > it.scrollTop + 50

            if(!isScrolled) {
                it.scrollTop = (it.scrollHeight - it.clientHeight).toDouble()
            }
        }
    }

    private fun updateUpgradeButtons() {
        val masterTab = document.getElementById("master-tab") ?: return

        if(!masterTab.hasClass("active")) return

        val container = document.getElementById("upgradeButtonsContainer") ?: return

        container.getElementsByClassName("btn-group").asList().forEach {
            var button = it.getElementsByClassName("upgrade-button").asList().first()
            var id = button.getAttribute("upgrade-id") ?: return
            var upgrade = Master.upgrades[id.toInt()] ?: return

            if(upgrade.gradesBought >= upgrade.grades || upgrade.calculatePrice() > Hero.Xp) {
                button.setAttribute("disabled", "disabled")
            } else {
                button.removeAttribute("disabled")
            }

            if(!upgrade.enabled) {
                it.addClass("d-none")
            } else {
                it.removeClass("d-none")
            }
        }
    }


    private fun handleAutoAttack() {
        val aps = Hero.Attributes[AttributeType.APS]?.value ?: 0f

        if(aps <= 0) return

        val now = currentTimeMillis() / 1000f
        val delta = now - lastAutoAttack

        if(delta >= 1f/aps) {
            handleMonsterAttack()

            lastAutoAttack = now
        }
    }

    fun updateUpgradeButton(upgrade: Upgrade, upgradeContainer: HTMLElement, button: HTMLButtonElement) {
        if(upgrade.grades > 1) {
            button.innerHTML = "${upgrade.name} ${upgrade.gradesBought+1}"

            upgrade.updatePriceTag()
        }
    }
}