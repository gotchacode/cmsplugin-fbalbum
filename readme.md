##Facebook Album Plugin for django CMS


This is a Facebook Album plugin to show images from a facebook page
album in `Django CMS`. It enables all images to be presented in
a attractive way so that it could be used in thumbnails and
presented in a lightbox.

### How to get the access token required ?

First you have create an APP on facebook.then,
go get your temporary/short-lived **access_token** [temporary access_token](https://developers.facebook.com/tools/access_token/) 
Save that **access_token** and now
and then now you need to go to this URL to get the permanent access_token:

First make sure you have:

- app_id
- app_secret
- access_token(retrieved from first step)

Replace this values in the url below and get the access token valid for 3 months.

`http://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&
client_secret={app-secret}&fb_exchange_token={short-lived-token} `

**Since we are not following a server side approach here, make sure you generate
new access tokens and replace them every three months.**
