package hsl.generators

import hsl.core.Monster

object MonsterGenerator {
    fun generateMonster(level: Int): Monster {
        return Monster("Imp", level)
    }
}