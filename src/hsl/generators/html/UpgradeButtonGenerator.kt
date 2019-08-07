package hsl.generators.html

import hsl.core.master.Upgrade
import kotlinx.html.dom.create
import kotlinx.html.*
import org.w3c.dom.HTMLElement
import kotlin.browser.document

object UpgradeButtonGenerator {
    fun generateUpgradeButton(upgrade: Upgrade): HTMLElement {
        val button = document.create.div {
            var collapseId = "upgrade${upgrade.id}Collapse"

            id = "upgrade${upgrade.id}Container"

            div(classes = "btn-group btn-group-lg w-100") {
                role = "group"

                button(classes = "btn btn-primary w-75 upgrade-button") {
                    type = ButtonType.button

                    attributes["upgrade-id"] = upgrade.id.toString()

                    + upgrade.name
                }


                button(classes = "btn btn-secondary") {
                    attributes["data-toggle"] = "collapse"
                    attributes["data-target"] = "#$collapseId"

                    i(classes="fa fa-angle-down")
                }
            }

            div(classes = "collapse") {
                id = collapseId
                attributes["data-parent"] = "#upgradeButtonsContainer"

                + "XP Cost: "
                span {
                    id="upgrade${upgrade.id}PriceTag"
                }

                br
                + upgrade.tooltip
            }
        }
        return button
    }
}