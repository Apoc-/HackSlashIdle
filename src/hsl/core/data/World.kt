package hsl.core.world

import hsl.util.LocationNotFoundException

class World {
    private var locations: Map<Int, Location> = mapOf(
            (1 to Location(
                    id = 1,
                    level = (1 to 10),
                    name = "Meadows",
                    description = "Lush green fields, ",
                    dungeons = 3,
                    known = true)
                    )
    )

    fun getLocationById(id: Int): Location {
       return locations[id] ?: throw LocationNotFoundException(id.toString())
    }

    fun getLocations(): Collection<Location> {
        return locations.values
    }
}

data class Location(
        val id: Int,
        val name: String,
        val description: String,
        val level: Pair<Int, Int>,
        val dungeons: Int,
        val known: Boolean = false,
        var dungeonsFound: Int = 0
)
