# JS.Chi React Demo

Talk slides: http://slides.com/lukewestby/jschi-react-demo

## Setup
1. Install stuff

  ```
  npm install
  ```
1. Copy `api/config.js.example` to `config.js` and add your Meetup.com API key. You can find your API key at https://secure.meetup.com/meetup_api/key/

  ```
  cp ./api/config.js.example ./api/config.js
  ```
1. Run the proxy API

  ```
  npm run api
  ```
1. Run the webpack dev server

  ```
  npm run watch
  ```
1. Open `localhost:8080`

## Todos
- [x] Remove global module deps
- [x] Use style-loader to properly load normalize and fonts
- ~~Incorporate Immutable?~~
- ~~Server rendering?~~
- [x] Make a couple slides
- [x] Write one or more unit tests for ~~actions, reducers, and~~ components
