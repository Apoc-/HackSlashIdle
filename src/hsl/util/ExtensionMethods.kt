package hsl.util

import kotlin.js.Math

fun Double.format(digits: Int): String = this.asDynamic().format(digits)
fun Float.format(digits: Int): String = this.asDynamic().format(digits)
fun IntRange.random() = (Math.random() * ((endInclusive + 1) - start) + start).toInt()