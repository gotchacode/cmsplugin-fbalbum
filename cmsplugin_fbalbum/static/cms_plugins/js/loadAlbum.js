var loadAlbum = function (req_url, class) {
  $.ajax({
    type: "GET",
    url: req_url,
    dataType:'json',
    success: function(res) {
      generateImg(res);
    },
    error: function() {
      $('.plugin_fbalbum').append('<h2> No valid image response.</h2>');
    }
  });

  generateImg: function (data, id) {
        var len = data.data.length,
        image_stack = '',
        small_image_url,
        big_image_url,
        min = data.data[0].images.length - 1,
        state = 'active';
        for(i = 0 ; i < len; i++) {
          if (data.data[i].images[min]) {
            small_image_url = data.data[i].images[min].source;
          }
          if (data.data[i].images[1]) {
            big_image_url = data.data[i].images[1].source;
          }
          image_stack += '<img class="album-picture ' + state + ' item" src="'+big_image_url+'">';
          state = '';
          $('.small').attr('src', small_image_url);
        }

        $('.'+class).append(image_stack);
        $('.carousel').carousel();

      };
  });
}
