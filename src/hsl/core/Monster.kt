package hsl.core

import hsl.util.IdFloatBinding

class Monster(var name: String, var level: Int) {
    var maxHealth: Float = level * 10f
    var currentHealth: Float by IdFloatBinding(level * 10f, "monsterHealth")

    fun dealDamage(dmg: Float): Boolean {
        currentHealth -= dmg

        if(currentHealth <= 0) {
            return true
        }

        return false
    }

    fun getGold(): Int {
        return level
    }

    fun getXp(): Int {
        return level
    }

    override fun toString(): String {
        return "$name (Level $level)"
    }
}