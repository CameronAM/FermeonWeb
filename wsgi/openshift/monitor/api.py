from tastypie import authorization
from tastypie_mongoengine import resources
from monitor.models import TemperatureRecord
from datetime import datetime

class TemperatureRecordResource(resources.MongoEngineResource):
	class Meta:
		queryset = TemperatureRecord.objects.all()
		allowed_methods = ('get', 'post')
		resource_name = "record"
		authorization = authorization.Authorization()

	def hydrate_instant(self, bundle):
		bundle.data['instant'] = datetime.now()
		return bundle