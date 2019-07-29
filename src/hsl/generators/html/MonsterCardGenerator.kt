package hsl.generators.html

import hsl.core.Monster

object MonsterCardGenerator {
    fun generateMonsterCard(monster: Monster) {

    }

    val template: String = "<div class=\"card\" style=\"width: 18rem;\">\n" +
            "                                <img src=\"gfx/monster.svg\" class=\"card-img-top\" alt=\"Monster\">\n" +
            "                                <div class=\"card-body\">\n" +
            "                                    <h5 class=\"card-title\">{name}</h5>\n" +
            "                                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n" +
            "                                    <button type=\"button\" class=\"btn btn-danger\" id=\"button\">Attack</button>\n" +
            "                                </div>\n" +
            "                            </div>"
}