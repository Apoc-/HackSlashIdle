package hsl.core

import kotlin.browser.document
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

class IdIntBinding (initialValue: Int, var id: String): ReadWriteProperty<Any?, Int> {
    private var value: Int = initialValue

    init {
        document.getElementById(id)?.innerHTML = value.toString()
    }

    override fun getValue(thisRef: Any?, property: KProperty<*>): Int {
        return value
    }

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: Int) {
        this.value = value
        document.getElementById(id)?.innerHTML = value.toString()
    }
}