package hsl.core

abstract class AbstractGameView(val tabButtonId: String) {
    var isActive = false

    open fun onViewEnter() {}
    open fun onViewExit() {}
    open fun update() {}
    open fun init() {}
}