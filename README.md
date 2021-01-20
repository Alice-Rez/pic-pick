<h1><img align="center" src="./README_materials/title.png" width="100%"> </h1>

"Pick your pictures"

## Description

Application for searching photo collections from Unsplash API. Just type theme of the photos you want to get in the searching field and see, what beautiful photos you will get.

First app that I created during my web development course using React. Just quick cca 2 hours work.

**New Update:**

Refactored at 05.11.2020 for implementation of the infinite scrolling. Where needed the components were changed to functional ones to be able to use Hooks. Customized Hook also created. Added loader.

Now the app is automatically calling another photos from API when user scroll down to the last result.

<img align="center" src="./README_materials/demo.gif" width="70%">

## Setup

1. Clone this repository to your computer
2. For installing all necessary dependencies, run inside of the local created repository:
   ```
   npm install
   ```
3. Get your own API key from [Unsplash API](https://unsplash.com/developers)
4. In the `src/components` folder create new file with name `config.js`
5. Insert your own API key in the `config.js` :
   ```javascript
   export const apiKey = "<here-comes-your-own-API-key>";
   ```
6. Enjoy using application

## Implementation

Application uses [Unsplash API](https://unsplash.com/developers)

**Used technologies**: React, Create React App, Axios, intersection observer (infinite scrolling), React Hooks, custom Hook, asynchronous Javascript (fetch), API, JS modules, JSX, CSS, CSS variables, Bootstrap

For the project configuration was used Create React App package.

implementation of the infinite scrolling and creation of the custom Hook made according [tutorial from Web Dev Simplified](https://www.youtube.com/watch?v=NZKUirTtxcg&feature=emb_title).

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
