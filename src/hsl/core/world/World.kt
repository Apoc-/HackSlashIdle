package hsl.core.world

class World {
    var locations: List<Location> = listOf(
            Location(id = 1, level = 10, name = "Meadows", dungeons = 3, known = true))

}

data class Location(
        val id: Int,
        val name: String,
        val level: Int,
        val dungeons: Int,
        val known: Boolean = false,
        var dungeonsFound: Int = 0
)
