<template>
    <div class="parallax-container">
      <div class="overlay"></div>
      <div class="content">
        <h2>{{ title }}</h2>
        <button class="button" @click="handleButtonClick">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'ParallaxSection',
    props: {
      title: String,
      buttonText: String
    },
    methods: {
      handleButtonClick() {
        // Handle button click event here
      }
    }
  };
</script>
  
<style scoped>
  .parallax-container {
    position: relative;
    width: 100%;
    height: 152px;
    background-image: url('../assets/parallax.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000ce;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
  }
</style>