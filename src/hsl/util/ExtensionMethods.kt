package hsl.util

import kotlin.random.Random

fun Double.format(digits: Int): String = this.asDynamic().format(digits)
fun Float.format(digits: Int): String = this.asDynamic().format(digits)
fun IntRange.random() = (Random.nextDouble() * ((endInclusive + 1) - start) + start).toInt()