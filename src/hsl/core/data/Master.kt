package hsl.core.data

import hsl.core.*
import hsl.util.MsgType

object Master : AttributeEffectSource {
    val upgrades: Map<Int, Upgrade> = mapOf(
            (1 to Upgrade(
                    id = 1,
                    basePrice = 2,
                    enables = 2,
                    enabled = true,
                    name = "Automatic Attacks",
                    tooltip = "Teaches you to automatically attack.",
                    effect = {
                        it.addAttribute(0.1f, AttributeType.APS)
                    })),
            (2 to Upgrade(
                    id = 2,
                    basePrice = 10,
                    name = "Faster Attacks",
                    tooltip = "Increases your attacks per second by 0.1.",
                    grades = 100,
                    effect = {
                        it.addAttributeEffect(
                                AttributeType.APS,
                                AttributeEffect(this, AttributeEffectType.INCREMENT, 0.1f)
                        )
                    })),
            (3 to Upgrade(
                    id = 3,
                    basePrice = 1,
                    enabled = true,
                    name = "Harder Hits",
                    tooltip = "Increases your damage by 1.",
                    grades = 100,
                    effect = {
                        it.addAttributeEffect(
                                AttributeType.DMG,
                                AttributeEffect(this, AttributeEffectType.INCREMENT, 1f)
                        )
                    }))
    )

    fun buyUpgrade(hero: Hero, id: Int) {
        val upgrade = upgrades[id] ?: return
        if(upgrade.gradesBought >= upgrade.grades) return
        if(upgrade.calculatePrice() > hero.Xp) return
        if(!upgrade.enabled) return

        hero.Xp -= upgrade.calculatePrice()
        hero.Level += 1
        upgrade.effect(hero)
        upgrade.gradesBought += 1

        if(upgrade.enables != -1) {
            enableUpgrade(upgrade.enables)
        }

        Game.Logger.logMsg(MsgType.INFO, "Contrary to my expectations you learned ${upgrade.name}.")
    }

    fun enableUpgrade(id: Int) {
        val upgrade = upgrades[id] ?: return

        upgrade.enabled = true
    }

}

data class Upgrade(
        val id: Int,
        val basePrice: Int,
        val name: String,
        val tooltip: String,
        val effect: (Hero) -> Unit,
        val enables: Int = -1,
        val grades: Int = 1,
        var gradesBought: Int = 0,
        var enabled: Boolean = false) {

    private var _priceTagValue: Int by IdIntBinding(basePrice, "upgrade${id}PriceTag")
    fun updatePriceTag() {
        _priceTagValue = calculatePrice()
    }

    fun calculatePrice(): Int {
        return this.basePrice + this.basePrice * this.gradesBought * this.gradesBought
    }
}