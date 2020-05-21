import GameCountdown from './GameCountdown.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-clock', GameCountdown);
  }
};