package hsl.util

fun Double.format(digits: Int): String = this.asDynamic().format(digits)
fun Float.format(digits: Int): String = this.asDynamic().format(digits)