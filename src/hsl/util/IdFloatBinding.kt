package hsl.util

import hsl.core.Game
import kotlin.browser.document
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

class IdFloatBinding(initialValue: Float, var id: String) : ReadWriteProperty<Any?, Float> {
    private var value: Float = initialValue

    init {
        var element = document.getElementById(id)

        if (element == null) {
            if(Game.DEBUG) println("Element with id: $id not found.")
        } else {
            element.innerHTML = value.format(2)
        }
    }

override fun getValue(thisRef: Any?, property: KProperty<*>): Float {
    return value
}

override fun setValue(thisRef: Any?, property: KProperty<*>, value: Float) {
    println("refreshing $id")
    this.value = value
    document.getElementById(id)?.innerHTML = value.toString()
}
}