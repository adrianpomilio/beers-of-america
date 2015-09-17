# beers-of-america
An application that leverages BreweryDB API to display the Beers of America

# Details
This application is meant to be a fun demonstration application.  The purpose is to demonstrate an alternative to the typical MEAN stack and play with a very cool API.

# Setup
This application requires you to have node installed as well as mongodb locally or remotely.

- git clone https://github.com/adrianpomilio/beers-of-america.git
- cd beers-of-america
- npm install
- create file keys.js at the root level
- mongod
- node index.js


# API
The API used for this application is BreweryDB http://www.brewerydb.com/developers You will need to provide your own key in keys.js. I have not provided my keys.js file for obvious reasons.

# The stack
* mongodb
* node
* hapijs
* AngularJS 2
* Typescript
* Gulp

# Important notes
get your tsd.d.ts file straight to get all the pieces

<reference path="../typings/tsd.d.ts" />
