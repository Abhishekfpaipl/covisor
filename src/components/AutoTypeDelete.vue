<template>
    <div class="bg-danger p-2 rounded text-typing-deleting">
      <span v-if="showText" class="typed-text">{{ currentText }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      texts: {
        type: Array,
        required: true,
      },
      typingSpeed: {
        type: Number,
        default: 100,
      },
      deleteSpeed: {
        type: Number,
        default: 50,
      },
      delay: {
        type: Number,
        default: 1500,
      },
    },
    data() {
      return {
        showText: true,
        currentIndex: 0,
        currentText: '',
      };
    },
    mounted() {
      this.animateText();
    },
    methods: {
      animateText() {
        const text = this.texts[this.currentIndex];
        this.typeAndDeleteText(text)
          .then(() => {
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;
            setTimeout(() => {
              this.animateText();
            }, this.delay);
          });
      },
      typeAndDeleteText(text) {
        return new Promise((resolve) => {
          this.typeText(text)
            .then(() => this.deleteText(text))
            .then(resolve);
        });
      },
      typeText(text) {
        return new Promise((resolve) => {
          let currentIndex = 0;
          const typingInterval = setInterval(() => {
            this.currentText += text[currentIndex];
            currentIndex++;
            if (currentIndex === text.length) {
              clearInterval(typingInterval);
              resolve();
            }
          }, this.typingSpeed);
        });
      },
      deleteText(text) {
        console.log(text)
        return new Promise((resolve) => {
          const deletingInterval = setInterval(() => {
            if (this.currentText.length > 0) {
              this.currentText = this.currentText.slice(0, -1);
            } else {
              clearInterval(deletingInterval);
              resolve();
            }
          }, this.deleteSpeed);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .text-typing-deleting {
    display: inline-block;
    overflow: hidden;
  }
  
  .typed-text {
    animation: blink-caret 0.75s step-end infinite;
  }
  
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  </style>
  