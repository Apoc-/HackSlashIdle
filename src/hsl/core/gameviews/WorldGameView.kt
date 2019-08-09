package hsl.core.gameviews

import hsl.core.AbstractGameView
import hsl.core.AttributeType
import hsl.core.Game
import hsl.core.Monster
import hsl.generators.MonsterGenerator
import hsl.generators.html.LocationElementGenerator
import hsl.generators.html.LocationListElementGenerator
import hsl.generators.html.MonsterCardGenerator
import hsl.util.IdNotFoundException
import kotlinx.html.currentTimeMillis
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.clear
import kotlin.dom.removeClass

class WorldGameView : AbstractGameView("world-tab") {
    private lateinit var CurrentMonster: Monster
    private lateinit var CurrentMonsterCard: HTMLDivElement
    private var currentLocationId = 1
    private var isAtLocation: Boolean = false

    private var monsterIsSpawned = false
    private var lastAutoAttack = 0f

    override fun init() {
        initLocationList()
    }

    override fun update() {
        if (!monsterIsSpawned && isAtLocation) {
            spawnMonster()
        }

        if (monsterIsSpawned && isAtLocation) {
            handleAutoAttack()
        }
    }

    fun firstStart() {
        goToLocation(1)
    }

    private fun handleAutoAttack() {
        val aps = Game.Hero.Attributes[AttributeType.APS]?.value ?: 0f

        if(aps <= 0) return

        val now = currentTimeMillis() / 1000f
        val delta = now - lastAutoAttack

        if(delta >= 1f/aps) {
            handleMonsterAttack()

            lastAutoAttack = now
        }
    }

    //region LOCATIONS
    private fun initLocationList() {
        val locationList = document.getElementById("locationList") ?: throw IdNotFoundException("locationList")

        Game.World.getLocations().forEach {
            locationList.append(
                    LocationListElementGenerator.generateElement(it, this)
            )
        }
    }

    fun goToLocation(locationId: Int) {
        document.getElementById("locationSelectionContainer")?.addClass("d-none")

        val locationContainer = document.getElementById("locationContainer")
        val locationElement = LocationElementGenerator
                .generateElement(Game.World.getLocationById(locationId), ::leaveCurrentLocation)

        locationContainer?.removeClass("d-none")
        locationContainer?.append(locationElement)

        isAtLocation = true
    }

    private fun leaveCurrentLocation() {
        document.getElementById("locationSelectionContainer")?.removeClass("d-none")
        val locationContainer = document.getElementById("locationContainer")
        locationContainer?.addClass("d-none")
        locationContainer?.clear()

        despawnMonster()

        currentLocationId = 0
        isAtLocation = false
    }
    //endregion

    //region MONSTER
    private fun spawnMonster() {
        CurrentMonster = MonsterGenerator.generateMonster(1)
        CurrentMonsterCard = createMonsterCard(CurrentMonster)

        monsterIsSpawned = true;
    }

    private fun createMonsterCard(monster: Monster): HTMLDivElement {
        val cardDiv = MonsterCardGenerator.generateMonsterCard(monster, ::handleMonsterAttack)
        var monsterCardContainer = document.getElementById("monsterCardContainer")

        monsterCardContainer?.append(cardDiv)

        //todo remove autoclicker hack
        cardDiv.getElementsByTagName("Button").asList().first().asDynamic().focus()
        return cardDiv
    }

    private fun handleMonsterAttack() {
        val died = Game.Hero.attack(CurrentMonster)

        updateMonsterHealthBar(CurrentMonster)

        if (died) {
            destroyMonsterCard()
            monsterIsSpawned = false;
        }
    }

    private fun updateMonsterHealthBar(monster: Monster) {
        var bar = document.getElementById("monsterHealthBar") as HTMLDivElement

        var hpPercent = (monster.currentHealth / monster.maxHealth) * 100
        var str = "$hpPercent%"
        bar.style.width = str
    }

    private fun destroyMonsterCard() {
        CurrentMonsterCard.parentNode?.clear()
    }


    private fun despawnMonster() {
        destroyMonsterCard()
        monsterIsSpawned = false;
    }
    //endregion
}