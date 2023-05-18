<template>
    <div class="video-banner">
      <div class="video-container">
        <div class="overlay"></div> 
        <div class="content">
          <h2>{{ title }}</h2> 
        </div>
      </div> 
        <video ref="video" autoplay loop muted playsinline>
            <source :src="require('@/assets/video-services.mp4')" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  </template>
  
<script>
    export default {
        name: 'VideoBanner',
        props: {
          title: {
            type: String, 
            default: "Blockchain never lies.",
          },
        },
        mounted() {
            this.$refs.video.play();
        },
    };
</script>
  
<style scoped>
  .video-banner {
    position: relative;
    overflow: hidden;
    height: 150px;
  }

  .video-container {  
    height: 150px; 
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
    background-color: #000000a1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    text-align: center;
    height: 100%;
  }
  
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }
</style>
  