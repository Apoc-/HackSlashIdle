package hsl.core

class Attribute(private var baseValue: Float, var type: AttributeType) {
    private var _value by IdFloatBinding(baseValue, "attr${type.name}")
    val value: Float
        get() {
            if(_isDirty) {
                _value = calculateValue()
                _isDirty = false
            }

            return _value
        }

    private var _attributeEffects: MutableList<AttributeEffect> = mutableListOf()
    private var _isDirty: Boolean = true

    private fun calculateValue(): Float {
        var calcValue = baseValue

        _attributeEffects.forEach {
            when(it.type) {
                AttributeEffectType.INCREMENT -> calcValue += it.value
                AttributeEffectType.PERCENTAGE -> calcValue *= it.value
            }
        }

        return calcValue
    }

    fun recalculateValue() {
        _value = calculateValue()
        _isDirty = false
    }

    fun applyAttributeEffect(effect: AttributeEffect) {
        _attributeEffects.add(effect)
        _isDirty = true

    }

    fun removeAttributeEffectsBySource(source: AttributeEffectSource) {
        _attributeEffects = _attributeEffects
                .filter { it.source != source }
                .toMutableList()

        _isDirty = true
    }
}

data class AttributeEffect(val source: AttributeEffectSource, val type: AttributeEffectType, val value: Float)

enum class AttributeEffectType {
    INCREMENT,
    PERCENTAGE
}

interface AttributeEffectSource

enum class AttributeType(val displayName: String) {
    DMG("Damage"),
    APS("Aps")
}
