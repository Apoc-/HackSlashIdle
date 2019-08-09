package hsl.generators.html

import hsl.core.gameviews.WorldGameView
import hsl.core.world.Location
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLElement
import kotlin.browser.document

object LocationListElementGenerator {
    fun generateElement(location: Location, view: WorldGameView): HTMLElement {
        return document.create.tr {
            td {
                + location.name
            }

            td {
                + "${location.level.first} to ${location.level.second}"
            }

            td {
                + "${location.dungeonsFound}/${location.dungeons}"
            }

            td {
                button(classes = "btn btn-primary") {
                    + "Explore"
                    type = ButtonType.button

                    onClickFunction = {
                        view.goToLocation(location.id)
                    }
                }
            }
        }
    }
}