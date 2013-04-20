from setuptools import setup, find_packages

version = '0.0.2'

setup(
    name = 'cmsplugin-fbalbum',
    version = version,
    description = 'facebook album plugin for django-cms',
    author = 'Vinit Kumar',
    author_email = 'vinit.kumar@changer.nl',
    packages = find_packages(),
    zip_safe=False,
    include_package_data = True,
    install_requires=[
        'Django>=1.2',
        'django-cms',
    ],
)
