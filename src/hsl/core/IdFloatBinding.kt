package hsl.core

import kotlin.browser.document
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

class IdFloatBinding (initialValue: Float, var id: String): ReadWriteProperty<Any?, Float> {
    private var value: Float = initialValue

    init {
        document.getElementById(id)?.innerHTML = value.toString()
    }

    override fun getValue(thisRef: Any?, property: KProperty<*>): Float {
        return value
    }

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: Float) {
        this.value = value
        document.getElementById(id)?.innerHTML = value.toString()
    }
}