from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _

from models import Fb

class FacebookAlbumPlugin(CMSPluginBase):
    model = Fb
    name = _("Facebook Album")
    render_template = "cms_plugins/fb_album.html"

    def render(self, context, instance, placeholder):
        context.update({
          'object': instance,
          })
        return context

plugin_pool.register_plugin(FacebookAlbumPlugin)
