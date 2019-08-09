package hsl.generators.html

import hsl.core.Game
import hsl.core.world.Location
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import kotlin.browser.document

object LocationElementGenerator {
    fun generateElement(location: Location, leaveLocationCallback: () -> Unit): HTMLElement {
        var element = document.create.div {
            div(classes = "row") {
                div(classes = "col-sm") {
                    + location.name
                }

                div(classes = "col-sm") {
                    id = "monsterCardContainer"
                }

                div(classes = "col-sm") {
                    button(classes = "btn btn-primary") {
                        type = ButtonType.button

                        + "Leave location"

                        onClickFunction = {
                            leaveLocationCallback()
                        }
                    }
                }
            }
        }

        return element
    }
}