package hsl.util

import kotlinx.html.*
import kotlinx.html.dom.create
import org.w3c.dom.Element
import org.w3c.dom.asList
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date


class Logger(private val logContainerId: String) {
    private val container: Element = document.getElementById(logContainerId)
            ?: throw IdNotFoundException(logContainerId)

    fun logMsg(msgType: MsgType, msg: String) {
        val date = Date().toDateString()
        val entry = document.create.div(classes = "row ${msgType.textColorClass}") {
            div(classes = "col-sm-3"){
                b {
                    + msgType.logString
                }
            }

            div(classes = "col-sm"){
                + msg
            }
        }

        container.append(entry)
    }


}

enum class MsgType(val logString: String, val textColorClass: String) {
    COMBAT("Combat", "text-danger"),
    INFO("Info", "text-success"),
    EVENT("Event", "text-warning")
}


