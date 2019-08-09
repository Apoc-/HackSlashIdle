package hsl.core

import hsl.core.gameviews.MasterGameView
import hsl.core.gameviews.WorldGameView
import hsl.core.world.World
import hsl.generators.html.*
import hsl.util.Logger
import hsl.util.MsgType
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear
import kotlin.dom.removeClass
import kotlin.js.Date

object Game {
    fun addXp() {
        Hero.Xp += 1000
    }

    var Hero = Hero()
    var World = World()

    //tabs
    private var worldView = WorldGameView()
    private var masterView = MasterGameView()
    private var currentGameView: AbstractGameView = worldView
    private var gameViews = listOf(worldView, masterView)

    val Logger = Logger("logContainer")

    //TODO move unlocks and other save related stuff to a serializable gamestate class
    //region UNLOCKS
    private var firstStart: Boolean = true
    private var dungeonsUnlocked: Boolean = false
    private var masterUnlocked: Boolean = false
    //endregion

    //timing
    var fCount = 0
    private val fps = 30.0
    private val interval = 1000.0/fps
    private var lastTime = Date().getMilliseconds()
    private var currentTime = 0
    private var deltaTime = 0

    const val DEBUG: Boolean = false

    init {
        refreshAttributeTable()
        initGameTabs()

        activateView(worldView)

        if(firstStart) {
            //hide attributeView
            //hide mainView
            //hide logView
            //show introView

            worldView.firstStart()
        }
    }

    fun gameLoop() {
        window.requestAnimationFrame {
            gameLoop()
        }

        currentTime = Date().getMilliseconds()
        deltaTime = currentTime - lastTime

        if(deltaTime > interval) {
            fCount += 1

            gameViews.filter { it.isActive }.forEach { it.update() }

            checkUnlocks()
        }

        //every 30 frames, update autoScrollContainers
        //disabled for now
        //if(fCount%30 == 0) scrollAutoScrollContainers()
    }

    private fun initGameTabs() {
        gameViews.forEach { it.init() }

        gameViews.forEach { view ->
            val tabButton = document.getElementById(view.tabButtonId)
            tabButton?.addEventListener("click", {
                activateView(view)
            })
        }
    }

    private fun activateView(gameView: AbstractGameView) {
        currentGameView.onViewExit()
        currentGameView.isActive = false

        currentGameView = gameView

        gameView.isActive = true
        gameView.onViewEnter()
    }

    private fun checkUnlocks() {
        //master
        if(Hero.Xp >= 10 && !masterUnlocked) {
            document.getElementById("masterTabContainer")?.removeClass("d-none")
            Logger.logMsg(MsgType.EVENT, "You found a Mindstone... that means you can summon me at any time now... yay...")

            masterUnlocked = true;
        }

        //dungeons
        if(Hero.Level >= 10 && !dungeonsUnlocked) {
            dungeonsUnlocked = true
        }
    }

    fun refreshAttributeTable() {
        val attributeTable = document.getElementById("attributeTableBody") ?: throw Exception("id: attributeTableBody not found")
        attributeTable.clear()

        Hero.Attributes.values.forEach {
            var attrRow = AttributeTableRowGenerator.generateAttributeTableRow(it)

            attributeTable.append(attrRow)
        }

        Hero.recalculateAttributes()
    }

    /*private fun scrollAutoScrollContainers() {
        var scrollContainer = document.getElementsByClassName("auto-scroll")

        scrollContainer.asList().forEach {
            val isScrolled = it.scrollHeight - it.clientHeight > it.scrollTop + 50

            if(!isScrolled) {
                it.scrollTop = (it.scrollHeight - it.clientHeight).toDouble()
            }
        }
    }*/

}