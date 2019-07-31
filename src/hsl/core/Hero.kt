package hsl.core

class Hero : AttributeEffectSource {
    var Level: Int by IdIntBinding(1, "heroLevel")
    var Gold: Int by IdIntBinding(0, "heroGold")
    var Xp: Int by IdIntBinding(0, "heroXp")
    var Attributes: MutableMap<AttributeType, Attribute> = mutableMapOf(
            (AttributeType.DMG to Attribute(1f, AttributeType.DMG))
    )

    infix fun attack(monster: Monster): Boolean {
        var damage: Float = Attributes[AttributeType.DMG]?.value ?: 0f

        var died = monster.dealDamage(damage)

        if(died) {
            println("Monster ${monster.name} died")
            Gold += monster.getGold()
            Xp += monster.getXp()
        }

        return died
    }

    fun addAttribute(baseValue: Float, type: AttributeType) {
        var attr = Attribute(baseValue, type)
        if(Attributes[type] != null) {
            println("AttributeType $type already known.")
            return
        }

        Attributes[type] = attr
        Game.refreshAttributeTable()
    }

    fun recalculateAttributes() {
        println("Recalculating Attributes")

        Attributes.values.forEach {
            it.recalculateValue()
        }
    }
}