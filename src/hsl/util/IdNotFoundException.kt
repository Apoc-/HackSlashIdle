package hsl.util

class IdNotFoundException(id: String) : Exception("IdNotFoundException: $id not found in document.")