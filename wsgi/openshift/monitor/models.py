from mongoengine import (Document, EmbeddedDocument, ObjectIdField, DateTimeField, DictField)

class TemperatureRecord(Document):
	instant = DateTimeField()
	measurements = DictField()
