package hsl.core

class Hero : AttributeEffectSource {
    var Level: Int by IdIntBinding(1, "HeroLevel")
    var Gold: Int by IdIntBinding(0, "HeroGold")
    var Xp: Int by IdIntBinding(0, "HeroXp")
    var Attributes: MutableMap<AttributeType, Attribute> = mutableMapOf(
            (AttributeType.PWR to Attribute(1f, AttributeType.PWR))
    )

    infix fun attack(monster: Monster): Boolean {
        println("Attacking ${monster.name}")
        var damage: Float = Attributes[AttributeType.PWR]?.value ?: 0f

        var died = monster.dealDamage(damage)

        if(died) {
            println("Monster ${monster.name} died")
            Gold += monster.getGold()
            Xp += monster.getXp()
        }

        return died
    }
}