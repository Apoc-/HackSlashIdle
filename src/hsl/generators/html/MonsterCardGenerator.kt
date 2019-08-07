package hsl.generators.html

import hsl.core.Game
import hsl.core.Monster
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

object MonsterCardGenerator {
    fun generateMonsterCard(monster: Monster): HTMLDivElement {
        val card = document.create.div(classes = "card mx-auto") {
            style = "max-width: 20em"

            img (classes = "card-img-top img-fluid"){
                src = "gfx/monster.svg"
                alt = "Monster"
            }

            div(classes = "card-body") {
                h5(classes = "card-title") {
                    + "${monster.name} (Level ${monster.level})"
                }

                p (classes = "card-text") {
                    div(classes = "progress") {
                        div(classes = "progress-bar bg-danger") {
                            id = "monsterHealthBar"
                            role = "progressbar"
                            style = "width: 100%"

                            + "Health"
                        }
                    }
                }

                button (classes = "btn btn-danger") {
                    type = ButtonType.button
                    id = "monsterAttackButton"

                    onClickFunction = {
                        Game.handleMonsterAttack()
                    }

                    + "Attack"
                }
            }
        }

        return card
    }
}