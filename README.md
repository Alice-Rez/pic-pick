<h1><img align="center" src="./README_materials/title.png" width="100%"> </h1>

"Pick your pictures"

Explore [Live demo](pic-pick.herokuapp.com/) or [Set it up](#setup) on your localhost

## Description

Application for searching photo collections from Unsplash API. Just type theme of the photos you want to get in the searching field and see, what beautiful photos you will get.

First app that I created during my web development course using React. Just quick cca 2 hours work.

**New Update:**

Refactored at 05.11.2020 for implementation of the infinite scrolling. Where needed the components were changed to functional ones to be able to use Hooks. Customized Hook also created. Added loader.

Now the app is automatically calling another photos from API when user scroll down to the last result.

Once again refactored at 19.01.2020 for safe deployment through heroku. Added backend, that now handle call to API and sent data back to frontend, which displays them. frontend has now no access to API key.

<img align="center" src="./README_materials/demo.gif" width="70%">

## Setup

1. Clone this repository to your computer
2. For installing all necessary dependencies, run inside of the local created repository (do it once in root and once in `client` folder):
   ```
   npm install
   ```
3. Get your own API key from [Unsplash API](https://unsplash.com/developers)
4. Create new file with name `.env` in root
5. Insert your own API key in the `.env` :
   ```javascript
   API_KEY = <here-comes-your-own-API-key>
   ```
6. In `app.js` uncomment line 18 (`app.use(cors())`)
7. Enjoy using application

## Implementation

Application uses [Unsplash API](https://unsplash.com/developers)

**Used technologies**: Express.js, React, Create React App, Axios, intersection observer (infinite scrolling), React Hooks, custom Hook, asynchronous Javascript (fetch), API, JS modules, JSX, CSS, CSS variables, Bootstrap

For the project configuration was used Create React App package.

Implementation of the infinite scrolling and creation of the custom Hook made according [tutorial from Web Dev Simplified](https://www.youtube.com/watch?v=NZKUirTtxcg&feature=emb_title).

Server created manually without Express-generator.

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
