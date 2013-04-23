from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import ugettext_lazy as _
from django.db import models

class Fb(CMSPlugin):
  album_url = models.CharField(_('Album Url'), max_length=125)
  access_token = models.CharField('Access token', max_length=500)

