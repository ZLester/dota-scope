## Dota Scope
### Open Source Dota 2 AP Counterpicker
Built using React, Node/Express, and MongoDB

#### Setup
* After cloning the repo, use `npm install` to retrieve the required node modules.
* Start MongoDB locally and use `npm run seed` to add heroes to your database and `npm run populate` to populate their winrates via [Dotamax](http://www.dotamax.com).
* `npm run dev` will spin up the development server on port 3000.
* Use `npm run build` and `npm start` to create the production bundle via webpack and start the production server on port 3000.

Deployed copy can be found [here](https://dotascope.herokuapp.com/)