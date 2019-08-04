package hsl.generators.html

import hsl.core.world.Location
import kotlinx.html.*
import kotlinx.html.dom.create
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document

object LocationRowGenerator {
    fun generateLocationRow(location: Location): HTMLElement {
        var row = document.create.div(classes = "row") {
            id = "locationRow${location.name}"

            div(classes = "col-6") {
                + location.name
            }

            div(classes = "col") {
                button(classes = "btn btn-primary w-100") {
                    type = ButtonType.button

                    + "Fight Monsters"
                }
            }

            div(classes = "col") {
                button(classes = "btn btn-primary w-100") {
                    type = ButtonType.button

                    + "Explore"
                }
            }
        }

        return row
    }
}