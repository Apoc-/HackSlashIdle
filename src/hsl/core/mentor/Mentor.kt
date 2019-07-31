package hsl.core.mentor

import hsl.core.AttributeType
import hsl.core.Hero

object Mentor {
    val upgrades: Map<Int, Upgrade> = mapOf(
            (1 to Upgrade(
                    id = 1,
                    price = 2,
                    levelPreq = 1,
                    enables = 2,
                    enabled = true,
                    name = "Automatic Attacks [WIP]",
                    tooltip = "Teaches you to automatically attack.",
                    effect = {
                        it.addAttribute(0.1f, AttributeType.APS)
                    })),
            (2 to Upgrade(
                    id = 2,
                    price = 10,
                    levelPreq = 2,
                    name = "",
                    tooltip = "",
                    effect = {
                        it.addAttribute(0.1f, AttributeType.APS)
                    })),
            (3 to Upgrade(
                    id = 3,
                    price = 10,
                    levelPreq = 3,
                    name = "3",
                    tooltip = "",
                    effect = {
                        it.addAttribute(0.1f, AttributeType.APS)
                    }))
    )

    fun buyUpgrade(hero: Hero, id: Int) {
        val upgrade = upgrades[id] ?: return
        if(upgrade.bought) return
        if(upgrade.levelPreq > hero.Level) return
        if(upgrade.price > hero.Xp) return
        if(!upgrade.enabled) return

        hero.Xp -= upgrade.price
        upgrade.effect(hero)
        upgrade.bought = true

        if(upgrade.enables != -1) {
            enableUpgrade(upgrade.enables)
        }
    }

    fun enableUpgrade(id: Int) {
        val upgrade = upgrades[id] ?: return

        upgrade.enabled = true
    }
}

data class Upgrade(
        val id: Int,
        val price: Int,
        val levelPreq: Int,
        val name: String,
        val tooltip: String,
        val effect: (Hero) -> Unit,
        val enables: Int = -1,
        var bought: Boolean = false,
        var enabled: Boolean = false)