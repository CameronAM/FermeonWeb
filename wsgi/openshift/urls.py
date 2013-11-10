from django.conf.urls.defaults import patterns, include, url

# api for hardware to hit
from monitor.api import TemperatureRecordResource

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

tempRecordResource = TemperatureRecordResource()

urlpatterns = patterns('',
	url(r'^$', 'monitor.views.index', name='index'),
    url(r'^api/', include(tempRecordResource.urls)),

    # url(r'^$', 'openshift.views.home', name='home'),
    # url(r'^openshift/', include('openshift.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
