package hsl.core

import hsl.core.mentor.Mentor
import hsl.generators.MonsterGenerator
import hsl.generators.html.AttributeTableRowGenerator
import hsl.generators.html.MonsterCardGenerator
import hsl.generators.html.UpgradeButtonGenerator
import kotlinx.html.currentTimeMillis
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.clear
import kotlin.dom.hasClass
import kotlin.dom.removeClass

object Game {
    var Hero = Hero()
    private lateinit var CurrentMonster: Monster
    private lateinit var CurrentMonsterCard: HTMLDivElement
    private val fps = 60

    const val DEBUG: Boolean = false

    init {
        spawnMonster()
        refreshAttributeTable()
        initUpgradeButtons()
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
            val button = UpgradeButtonGenerator.generateUpgradeButton(upgrade)
            container.append(button)

            button.addEventListener("click", {
                println("clicked ${upgrade.name}")
                Mentor.buyUpgrade(Hero, id)
            })
        }
    }

    fun gameLoop() {
        handleAutoAttack()
        updateUpgradeButtons()

        window.requestAnimationFrame {
            gameLoop()
        }
    }

    private fun updateUpgradeButtons() {
        val masterTab = document.getElementById("master-tab") ?: return

        if(!masterTab.hasClass("active")) return

        val container = document.getElementById("upgradeButtonsContainer") ?: return

        container.getElementsByTagName("Button").asList().forEach {
            var id = it.getAttribute("upgrade-id") ?: return
            var upgrade = Mentor.upgrades[id.toInt()] ?: return

            if(upgrade.bought || upgrade.price > Hero.Xp) {
                it.setAttribute("disabled", "disabled")
            } else {
                it.removeAttribute("disabled")
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
            spawnMonster()
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


    var last = 0f


    private fun handleAutoAttack() {
        val aps = Hero.Attributes[AttributeType.APS]?.value ?: 0f

        if(aps <= 0) return

        val now = currentTimeMillis() / 1000f
        val delta = now - last

        if(delta >= 1f/aps) {
            handleMonsterAttack()

            last = now
        }
    }
}