# JS.Chi React Demo

## Required global modules
- `babel` (for `babel-node`)
- `webpack`
- `webpack-dev-server`

```
npm install -g babel webpack webpack-dev-server
```

## Setup
1. Install stuff

  ```
  npm install
  ```
1. Copy `api/config.js.example` to `config.js` and add your Meetup.com API key

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
- [ ] Remove global module deps
- [ ] Use style-loader to properly load normalize and fonts
- [ ] Incorporate Immutable?
- [ ] Make a couple slides
- [ ] Write one or more unit tests for actions, reducers, and components
