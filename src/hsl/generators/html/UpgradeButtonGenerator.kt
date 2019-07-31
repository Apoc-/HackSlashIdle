package hsl.generators.html

import hsl.core.Game
import hsl.core.mentor.Upgrade
import kotlinx.html.dom.create
import kotlinx.html.js.button
import kotlinx.html.*
import org.w3c.dom.HTMLButtonElement
import kotlin.browser.document

object UpgradeButtonGenerator {
    fun generateUpgradeButton(upgrade: Upgrade): HTMLButtonElement {
        val button = document.create.button(classes = "btn btn-primary btn-lg btn-block") {
            type = ButtonType.button

            attributes["upgrade-id"] = upgrade.id.toString()

            + upgrade.name
        }

        return button
    }
}