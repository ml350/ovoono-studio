<template>
    <div id="adsense">
      <!-- Your ad will be inserted here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdSense',
    mounted() {
      this.$nextTick(() => {
        let ad = document.createElement('ins');
        ad.className = 'adsbygoogle';
        ad.style.display = 'block';
        ad.dataset.adClient = 'ca-pub-6900518000418542'; // replace with your ad client ID
        ad.dataset.adSlot = 'YYYYYYYYYY'; // replace with your ad slot ID
        ad.dataset.adFormat = 'auto';
        ad.dataset.fullWidthResponsive = 'true';
        document.getElementById('adsense').appendChild(ad);
  
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      });
    },
    beforeUnmount() {
      document.getElementById('adsense').innerHTML = '';
    },
  }
  </script>
  
<style scoped>
  /* Your AdSense CSS if needed */
  #adsense {
      display: none;
  }

  ins.adsbygoogle {
      display: none!important;
  }
</style>
  