#!/usr/bin/env python

from setuptools import setup

setup(
    name='Fermeon',
    version='0.1',
    description='OpenShift App',
    author='Cameron Morrison',
    author_email='cameron.am@gmail.com',
    url='http://fermeon.cockandboules.com',
    install_requires=[
    	'Django==1.5.5', 
    	'mongoengine==0.8.1', 
    	'django-tastypie==0.10.0', 
    	'django-tastypie-mongoengine==0.4.5'
	],
)
