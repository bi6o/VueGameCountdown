# Game Countdown

A simple countdown from 3 to 1, that is displayed largely on the screen. While working on some new features for my game [Sudoculus](https://www.sudoculus.com), I needed to have a ready, set, go kinda way to display to the players.

After not finding anything useful written in Vue, I found [this answer on stackoverflow](https://stackoverflow.com/questions/50190639/trying-to-create-a-numeric-3-2-1-countdown-with-javascript-and-css) for my issue. I created this component based off of that, using a Single File Component and [reading this article here](https://vuejsdevelopers.com/2017/07/31/vue-component-publish-npm/) to figure out how to build and publish to NPM.


## Installation

Open your command line to your project, and run the following command

```bash
npm install vue-game-countdown
```

Then you could install the plugin using in your component

```js
// in your component
import GameCountdown from 'game-countdown';

new Vue({
  components: {
    GameCountdown
  }
});

// then use it in your template
<game-countdown @countdown-ended="doSomething()">
```

Or import it globally from your `index.html` file if that is required

```html
<body>
<div id="app">
  <game-countdown></game-countdown>
</div>
<script type="text/javascript" src="game-countdown.js"></script>
<script type="text/javascript">
  Vue.use(GameCountdown);
</script>
</body>
```


## Props

- `countdown-ended` is the only prop, and it is fired when the countdown is finished. Use it to start your 