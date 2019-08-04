package hsl.core.world

class World(var locations: List<Location>) {
    init {
        locations = listOf(
                Location(name = "Meadows", dungeons = 3, known = true))
    }
}

data class Location(
        val name: String,
        val dungeons: Int,
        val known: Boolean = false,
        var dungeonsFound: Int = 0
)
