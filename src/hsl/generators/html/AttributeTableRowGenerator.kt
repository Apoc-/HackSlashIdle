package hsl.generators.html

import hsl.core.Attribute
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.tr
import kotlinx.html.style
import kotlinx.html.td
import org.w3c.dom.HTMLTableRowElement
import kotlin.browser.document

object AttributeTableRowGenerator {
    fun generateAttributeTableRow(attr: Attribute): HTMLTableRowElement {
        var row = document.create.tr {
            td {
                + attr.type.displayName
            }
            td {
                id = "attr${attr.type.name}"
                style = "text-align: right"
            }
        }

        return row
    }
}