package hsl.generators.html

import hsl.core.Game
import hsl.core.world.Location
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLElement
import kotlin.browser.document

/*<tr>
                                        <td>Meadows</td>
                                        <td>1-10</td>
                                        <td>0/3</td>
                                        <td><button type="button" class="btn btn-primary">Explore</button></td>
                                    </tr>*/

object LocationListElementGenerator {
    fun generateElement(location: Location): HTMLElement {
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
                        Game.goToLocation(location.id)
                    }
                }
            }
        }
    }
}