# Gotcha—Template for Google Chat Bot

Gotcha provides a foundational template for building Google Chat Bots with a serverless backend powered by Google Apps Script.

Its simple, extensible structure includes basic handlers for messages and card clicks, enabling rapid development and easy customization.

## Create the Project

* https://script.google.com/home/projects/create
* https://developers.google.com/workspace/chat/quickstart/apps-script-app

* https://console.cloud.google.com/projectcreate
* https://console.cloud.google.com/apis/library/chat.googleapis.com

## Deployment

* Click Deploy > New deployment.
* Click the icon besides Select type and select both Wep app and Add-on.
* Name your deployment and click Deploy.
* Copy the Deployment ID to use in your Chat app configuration.
* Copy the Web app URL to access your app later.

## Open the web page
Navigate to the Web app URL from the Apps Script deployment to test your app.


## Structure


Description of the project structure

### Core Files
- `appsscript.json` - Apps Script manifest file that defines project settings, OAuth scopes, and required permissions
- `.eslintrc.js` - ESLint configuration file for maintaining code quality and consistent style
- `package.json` - Node.js package configuration managing development dependencies

### Templates Files


### Google Apps Script Files
The project uses Google Apps Script as its serverless backend, with the following structure:

#### Configuration
- Configuration file `config.js` containing settings and environment-specific variables
