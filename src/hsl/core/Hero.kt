package hsl.core

import hsl.util.AttributeNotFoundException
import hsl.util.Logger
import hsl.util.MsgType

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
            Game.Logger.logMsg(
                    MsgType.COMBAT,
                    "There has been a tragic and unforeseeable death: $monster")

            Gold += monster.getGold()
            Xp += monster.getXp()
        }

        return died
    }

    fun addAttribute(baseValue: Float, type: AttributeType) {
        val attr = Attribute(baseValue, type)
        if(Attributes[type] != null) {
            return
        }

        Attributes[type] = attr
        Game.refreshAttributeTable()
    }

    fun addAttributeEffect(attributeType: AttributeType, effect: AttributeEffect) {
        val attr = Attributes[attributeType] ?: throw AttributeNotFoundException(attributeType)

        attr.applyAttributeEffect(effect)
    }

    fun recalculateAttributes() {
        Attributes.values.forEach {
            it.recalculateValue()
        }
    }
}