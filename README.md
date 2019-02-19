# Star your repositories on Github
## Code Challenge
### Brief
Create a web app which enables a user to view repositories they have starred, search for and star new repositories, and un-star repositories.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**live demo!** ->
https://scstar.herokuapp.com/

## Stack
![Apollo](https://cdn-images-1.medium.com/max/800/1*0HP2je9Tcm-64J4S-lQSgA.png)

- [React](https://github.com/facebook/create-react-app)
- [Apollo](https://www.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [Apollo link (instead of redux)](https://www.apollographql.com/docs/link/links/state.html)
- [Gatekeeper](https://github.com/prose/gatekeeper#deploy-on-heroku)
- [Ant.design](https://ant.design/)
- [Jest for testing](https://jestjs.io/index.html)
- [Eslint and Prettier](https://prettier.io/docs/en/eslint.html)

## How to start
- Clone the repo
- Install the dependencies:
`npm install`

Because of some security-related limitations, Github prevents you from implementing the OAuth Web Application Flow on a client-side only application.
- Create a [Gatekeeper](https://github.com/prose/gatekeeper#deploy-on-heroku) for manage Githubb Token and code 
- copy the **.env** vars with your Github Auth App, Gatekeeper credentials.
- Start `npm start`

## Screenshots
![Screenshots](https://i.ibb.co/DwT73qv/2.png)
![Screenshots](https://i.ibb.co/p480cZL/1.png)

## Helpful documentation:
- [Github API](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql)
- [Github Auth flow](https://www.graphql.college/implementing-github-oauth-flow/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

