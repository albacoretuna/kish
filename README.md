Kish Chess
==========

A lightweight, real-time chess app built in [Node](http://nodejs.org/), [Express](http://expressjs.com/), [Socket.IO](http://socket.io/), [React](http://facebook.github.io/react/), [Flux](http://facebook.github.io/flux/) and [Immutable](http://facebook.github.io/immutable-js/). Reti Chess also uses [chess.js](https://github.com/jhlywa/chess.js) for move validation and check/mate/draw detection.

You can play the game on [chess.omid.fi](http://chess.omid.fi/).

To run it all you need is Nodejs V. 4+:

```sh
git clone https://github.com/omidfi/kish.git
npm install

# create empty logfile for winston
mkdir logs
touch logs/games.log

# run gulp to process static files
npm run build
```
* Run the server
```sh
npm start
```

* Open your browser and visit **localhost:3000**

License
-------

Kish is based on [Reti Chess](https://github.com/romanmatiasko/reti-chess)
Available under [the MIT License (MIT)](./LICENSE.md).
