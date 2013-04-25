//Get the album url here, parse and get the unique-id of Facebook Album
var album_url = '{{ object.album_url }}',
    uid = album_url.split('?')[1].split('.')[1],
    access_token = '{{ object.access_token }}';

$(document).ready(function () {
// Ajax Request to Facebook Graph API
var req_url = 'https://graph.facebook.com/'+uid+'/photos'+'?access_token='+access_token;

$.ajax({
    type: "GET",
    url: req_url,
    success: function(res) {
	generateImg(res);
    },
    error: function() {
      $('.plugin_fbalbum').append('<h2> No valid image response.</h2>');
    }
});

//Add image in the placeholder
var generateImg = function (data) {
    var len = data.data.length,
	image_stack = '',
	small_image_url,
	big_image_url;
    a = 4;
    for(i = 0 ; i < len; i++) {
	if (data.data[i].images[8]) {
	    small_image_url = data.data[i].images[8].source;
	}
	if (data.data[i].images[1]) {
	    big_image_url = data.data[i].images[1].source;
	}
	img_stack += '<a href="' + big_image_url + '" class="group1">' +
		    '<img src="' + small_image_url + '" class="small" /></a>';
    }
    $('.plugin_fbalbum').append(image_stack);
    //Add Colorbox affect.
    $(document).ready(function () {
       $('.group1').colorbox({ rel: 'group3', transition: 'fade', width: '75%', height: '75%' });
    });
};
});
