## Dota Scope
### Open Source Dota 2 AP Counterpicker
Built using React, Node/Express, and MongoDB

#### Setup
* After cloning the repo, use `npm install` to retrieve the required node modules.
* Start MongoDB locally and use `npm run seed` to add heroes to your database and `npm run populate` to populate their winrates via [Dotamax](http://www.dotamax.com).
* Use `npm run build` to run create the production bundle via webpack.
* Finally, use `npm start` to start the server on port 3000.

Deployed copy can be found [here](https://dotascope.herokuapp.com/)