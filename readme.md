##Django CMS plugin for facebook albums


This is gallery plugin with support for Facebook Albums. It is great to use facebook for storing images and you save in terms of your server storage and ther user has a liberty to add or remove images without even dealing with anything else.

Image are presented in thumbnails, which on clicking would open up in carousel or lightbox.


### Setting up

####How to get the access token required ?

First you have to  create an APP on facebook.Then,go get your temporary/short-lived **access_token** [temporary access_token](https://developers.facebook.com/tools/access_token/) 
Save that **access_token** and now and then you need to go to this URL to get the permanent access_token:

First make sure you have:

- app_id
- app_secret
- access_token(retrieved from first step)

Replace this values in the url below and get the access token valid for 3 months.

`http://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&
client_secret={app-secret}&fb_exchange_token={short-lived-token} `

**Since we are not following a server side approach here, make sure you generate
new access tokens and replace them every three months.**
