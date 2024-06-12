<template>
    <div>
      <span>{{ displayText }}</span><span v-if="showCursor" class="cursor"></span>
    </div>
  </template>
  
  <script>
  export default {
    props:{
        fullText: String
    },
    data() {
      return {
        // fullText: "Hello, this is a typing effect!",
        displayText: "",
        currentIndex: 0,
        typingSpeed: 100,
        showCursor: true,
      };
    },
    methods: {
      type() {
        if (this.currentIndex < this.fullText.length) {
          this.displayText += this.fullText.charAt(this.currentIndex);
          this.currentIndex++;
          setTimeout(this.type, this.typingSpeed);
        } else {
          this.toggleCursor();
        }
      },
      toggleCursor() {
        setInterval(() => {
          this.showCursor = !this.showCursor;
        }, 500);
      },
    },
    mounted() {
      this.type();
    },
  };
  </script>
  
  <style scoped>
  /* .cursor {
    display: inline-block;
    width: 10px;
    background-color: black;
    margin-left: 2px;
  } */
  </style>
  