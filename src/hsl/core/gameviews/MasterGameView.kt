package hsl.core.gameviews

import hsl.core.AbstractGameView
import hsl.core.Game
import hsl.core.data.Master
import hsl.core.data.Upgrade
import hsl.generators.html.UpgradeButtonGenerator
import hsl.util.IdNotFoundException
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.hasClass
import kotlin.dom.removeClass
import kotlin.js.Math
import kotlin.math.ceil

class MasterGameView : AbstractGameView("master-tab") {
    private var upgradeButtonsContainer: Element = document.getElementById("upgradeButtonsContainer") ?: throw IdNotFoundException("upgradeButtonsContainer")
    private var summonMentorContainer: Element = document.getElementById("summonMentorContainer") ?: throw IdNotFoundException("summonMentorContainer")

    override fun init() {
        initUpgradeButtons()

        upgradeButtonsContainer.addClass("d-none")

        document.getElementById("summonMasterButton")?.addEventListener("click", {
            Game.Hero.Xp -= ceil(Game.Hero.Xp * 0.1f).toInt()

            upgradeButtonsContainer.removeClass("d-none")
            summonMentorContainer.addClass("d-none")
        })
    }

    override fun onViewEnter() {
        updateUpgradeButtons()
        summonMentorContainer.removeClass("d-none")
    }

    override fun onViewExit() {
        upgradeButtonsContainer.addClass("d-none")
    }

    override fun update() {
        updateUpgradeButtons()
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
                Master.buyUpgrade(Game.Hero, id)
                updateUpgradeButtonCount(upgrade, upgradeContainer, button as HTMLButtonElement)
                updateUpgradeButtons()
            })

            upgrade.updatePriceTag()
        }
    }

    private fun updateUpgradeButtons() {
        val container = document.getElementById("upgradeButtonsContainer") ?: return

        container.getElementsByClassName("btn-group").asList().forEach {
            val button = it.getElementsByClassName("upgrade-button").asList().first()
            val id = button.getAttribute("upgrade-id") ?: return
            val upgrade = Master.upgrades[id.toInt()] ?: return

            if(upgrade.gradesBought >= upgrade.grades || upgrade.calculatePrice() > Game.Hero.Xp) {
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

    private fun updateUpgradeButtonCount(upgrade: Upgrade, upgradeContainer: HTMLElement, button: HTMLButtonElement) {
        if(upgrade.grades > 1) {
            button.innerHTML = "${upgrade.name} ${upgrade.gradesBought+1}"

            upgrade.updatePriceTag()
        }
    }
}