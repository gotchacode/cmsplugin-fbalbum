Facebook Album Plugin for django CMS
====================================


This is a Facebook Album plugin to show images from a facebook page
album in `django CMS`. It enables all images to be presented in
a attractive way so that it could be used in thumbnails and
presented in a lightbox.

#Acess token generation:

Make sure you have created an APP on facebook.
Then,
Go here and get your temporary/short-lived `access_token` here and then go to this URL
`http://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={short-lived-token} `

Since we are not following a server side apporach here, make sure you generate
new access tokens and replace them every three months.
