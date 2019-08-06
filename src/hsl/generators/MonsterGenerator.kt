package hsl.generators

import hsl.core.Monster
import hsl.util.random
import kotlin.math.max

object MonsterGenerator {
    fun generateMonster(level: Int): Monster {
        var lower = max(1, level - 2)
        var upper = level + 2



        var generatedLevel = (lower..upper).random()
        return Monster("Imp", generatedLevel)
    }
}