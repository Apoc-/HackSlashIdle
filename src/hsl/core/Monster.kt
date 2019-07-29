package hsl.core

class Monster(var name: String, var level: Int) {
    private var _health: Float = level * 10f

    fun dealDamage(dmg: Float): Boolean {
        _health -= dmg

        println("Monster $name health left $_health")

        if(_health <= 0) {
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
}