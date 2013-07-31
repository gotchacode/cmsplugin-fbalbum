function loadAlbum(req_url, id, small) {
  'use strict';
  $.ajax({
    type: "GET",
    url: req_url,
    dataType: 'json',
    success: function (res) {
      var len = res.data.length,
        image_stack = '',
        small_image_url,
        big_image_url,
        min = res.data[0].images.length - 2,
        state = 'active',
        i;
      for (i = 0; i < len; i++) {
        if (res.data[i].images[min]) {
          small_image_url = res.data[i].images[min].source;
        }
        if (res.data[i].images[1]) {
          big_image_url = res.data[i].images[1].source;
        }
        image_stack += '<img class="album-picture ' + state + ' item" src="' + big_image_url + '">';
        state = '';
        $('.' + small).attr('src', small_image_url);
      }
      $('.' + id).append(image_stack);
      $('.carousel').carousel();
    },
    error: function () {
      $('.plugin_fbalbum').append('<h2> No valid image response.</h2>');
    }
  });
}
