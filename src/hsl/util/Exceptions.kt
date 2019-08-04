package hsl.util

import hsl.core.AttributeType

class IdNotFoundException(id: String) : Exception("IdNotFoundException: $id not found in document.")
class AttributeNotFoundException(type: AttributeType) : Exception("Attribute with $type not found.")