<template>
  <footer class="footer">
    <div class="footer-img">
      <img :src="require('@/assets/darty.png')" alt="Darty" />
    </div>
    <div class="footer-container">
      <div class="footer-grid">
        <div class="left-col">
          <h3>{{ footer_heading }}</h3>
          <p>{{ short_desc }}</p> 
          <img :src="require('@/assets/cropped-ovoonoFinal-logo.png')" class="logo" alt="OvoOno Logo" />
        </div>
        <div class="middle-col">
          <h3>🔥 Crypto Prices 🔥</h3>
          <ul>
            <li>
              🟡 BTC: <span class="btc-price">{{ btcPrice }}</span> $
            </li>
            <li>
              🔵 ETH: <span class="eth-price">{{ ethPrice }}</span> $
            </li>
            <li>
              🟣 MATIC: <span class="matic-price">{{ maticPrice }}</span> $
            </li>
            <li>
              🟢 SAND: <span class="sand-price">{{ sandPrice }}</span> $
            </li>
          </ul>
          <div v-if="!dataLoaded" class="loading">⏳ Loading...</div>
        </div>
        <div class="right-col">
          <h3>🔗 Links</h3>
          <a href="#" class="social-link">
            <i class="fab fa-twitter"></i> {{ twitter }}
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-discord"></i> {{ discord }}
          </a>
          <a href="#" class="social-link">
            <i class="fab fa-instagram"></i> {{ instagram }}
          </a>
        </div>
      </div>

      <div class="links">       
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <p>{{ copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "FooterSection",
    props: {
      footer_heading: String,
      short_desc: String,
      discord: String,
      twitter: String,
      instagram: String,
      copyright: String,
    },
    data() {
      return {
        dataLoaded: false,
        btcPrice: "",
        ethPrice: "",
        maticPrice: "",
        sandPrice: "",
      };
    },
    mounted() {
      this.fetchCryptoPrices();
    },
    methods: {
      async fetchCryptoPrices() {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network,the-sandbox&vs_currencies=usd"
        );
        const data = await response.json();

        this.btcPrice = data.bitcoin?.usd || "N/A";
        this.ethPrice = data.ethereum?.usd || "N/A";
        this.maticPrice = data["matic-network"]?.usd || "N/A";
        this.sandPrice = data["the-sandbox"]?.usd || "N/A";

        this.dataLoaded = true;
      },
    },
  };
</script>

<style scoped>  
  .footer:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }

  .footer-img {
    grid-area: 1 / 1 / 2 / 2;
    width: 10%;
    padding: 0 1rem;
    position: absolute;
    left: 5%;
    top: 30px;
  }

  .footer-img img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  .footer-container {
    grid-area: 1 / 2 / 2 / 3;
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .left-col {
    text-align: left;
    width: 70%;
  }

  .middle-col {

  }

  .middle-col ul {
    padding-left: 10px;
    list-style: none;
    text-align: left;
  } 

  .middle-col ul li { 
    margin-bottom: 6px;
  } 
  .right-col {
    text-align: right;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0; 
  }

  .social-link {
    display: block;
    color: inherit;
    text-decoration: none;
    margin-bottom: 5px;
  }

  .social-link:hover {
    color: #3b5998; /* Update with your preferred hover color */
  }

  .social-link i {
    margin-right: 5px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .links a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 1rem;
  }

  .links p {
    margin: 0;
  }
</style>