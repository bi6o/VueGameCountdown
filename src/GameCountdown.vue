<template>
  <div ref="readySetGo"></div>
</template>

<script>
export default {
  name: "GameCountdown",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.countdown(() => {
      this.$emit("countdown-ended");
    });
  },
  methods: {
    countdown(callback) {
      let parent = this.$refs.readySetGo;

      // These are all the text we want to display
      var texts = ["3", "2", "1"];

      // This will store the paragraph we are currently displaying
      var paragraph = null;

      // This is the function we will call every 1000 ms using setInterval
      function count() {
        if (paragraph) {
          // Remove the paragraph if there is one
          paragraph.remove();
        }

        if (texts.length === 0) {
          // If we ran out of text, use the callback to get started
          // Also, remove the interval
          // Also, return since we dont want this function to run anymore.
          clearInterval(interval);
          callback();
          return;
        }

        // Get the first item of the array out of the array.
        // Your array is now one item shorter.
        var text = texts.shift();

        // Create a paragraph to add to the DOM
        // This new paragraph will trigger an animation
        paragraph = document.createElement("p");
        paragraph.textContent = text;
        paragraph.className = text + " nums";

        parent.appendChild(paragraph);
      }

      // Initiate an interval, but store it in a variable so we can remove it later.
      var interval = setInterval(count, 1000);
    }

    //   // Start a countdown by passing in the parentnode you want to use.
    //   // Also add a callback, where you start your game.
  }
};
</script>

<style>
@keyframes count {
  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.nums {
  font-size: 10em;
  height: auto;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  animation: count 0.1s cubic-bezier(0.1, 0.1, 1, 1) 1;
  overflow: hidden;
  color: #000;
}
</style>