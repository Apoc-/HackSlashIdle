package hsl.core

import hsl.core.mentor.Mentor
import hsl.core.mentor.Upgrade
import hsl.core.world.World
import hsl.generators.MonsterGenerator
import hsl.generators.html.AttributeTableRowGenerator
import hsl.generators.html.MonsterCardGenerator
import hsl.generators.html.UpgradeButtonGenerator
import hsl.util.Logger
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

    private var lastAutoAttack = 0f

    //timing
    private val fps = 30.0
    private val interval = 1000.0/fps
    private var lastTime = Date().getMilliseconds()
    private var currentTime = 0
    private var deltaTime = 0

    const val DEBUG: Boolean = false

    init {
        if(currentLocationId != 0) {
            spawnMonster()
        }

        refreshAttributeTable()
        initUpgradeButtons()
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

        if(!monsterIsSpawned && currentLocationId != 0) {
            spawnMonster()
        }

        if(monsterIsSpawned && currentLocationId != 0) {
            handleAutoAttack()
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

        for (kvp in Mentor.upgrades) {
            val id = kvp.key
            val upgrade = kvp.value
            val upgradeContainer = UpgradeButtonGenerator.generateUpgradeButton(upgrade)
            val button = upgradeContainer.getElementsByClassName("upgrade-button").asList().first()
            container.append(upgradeContainer)

            button.addEventListener("click", {
                Mentor.buyUpgrade(Hero, id)
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
            var upgrade = Mentor.upgrades[id.toInt()] ?: return

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

    private fun spawnMonster() {
        CurrentMonster = MonsterGenerator.generateMonster(1)
        CurrentMonsterCard = createMonsterCard(CurrentMonster)

        val button = document.getElementById("monsterAttackButton") as HTMLButtonElement
        button.addEventListener("click", { handleMonsterAttack() })

        monsterIsSpawned = true;
    }

    private fun createMonsterCard(monster: Monster): HTMLDivElement {
        val cardDiv = MonsterCardGenerator.generateMonsterCard(monster)

        document.getElementById("monsterCardContainer")?.append(cardDiv)

        return cardDiv
    }

    private fun handleMonsterAttack() {
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
        var str = hpPercent.toString() + "%"
        bar.style.width = str
    }

    private fun destroyMonsterCard() {
        CurrentMonsterCard.parentNode?.clear()
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