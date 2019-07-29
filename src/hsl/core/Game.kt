package hsl.core

import org.w3c.dom.HTMLButtonElement
import kotlin.browser.document
import kotlin.browser.window

object Game {
    var Hero = Hero()
    var CurrentMonster = generateMonster()

    init {
        val button = document.getElementById("button") as HTMLButtonElement

        button.addEventListener("click", {
            Hero.Level += 1
            Hero.Xp += 2
            if(Hero.attack(CurrentMonster)) {
                CurrentMonster = generateMonster()
            }
            Hero.Attributes[AttributeType.PWR]?.ApplyAttributeEffect(AttributeEffect(Hero, AttributeEffectType.INCREMENT, 10f))
        })
    }

    var count: Int = 1
    private fun generateMonster(): Monster {
        return Monster("asd${count++}", 1)
    }

    fun gameLoop() {
        window.requestAnimationFrame {
            gameLoop()
        }
    }
}