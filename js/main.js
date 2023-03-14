const { createApp } = Vue

  createApp({
    data() {
      return {
        titleText: "Vue.js is great!",
        srcPhoto: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        titleClass: "title",
        containerClass: "container",
        imageClass: "image"
      }
    }
  }).mount('#app')