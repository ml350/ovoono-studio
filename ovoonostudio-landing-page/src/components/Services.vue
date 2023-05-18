<template>
    <section id="Services" class="services-section">
      <div class="services-container">
        <h3 class="section-subheading">{{ subheading }}</h3>
        <h2 class="section-heading">{{ title }}</h2>
        <h4>{{ subtitle }}</h4>
        <div class="services-grid">
          <div class="service" v-for="(service, index) in services.slice(0, 4)" :key="index">
            <img :src="service.icon" alt="" />
            <h3>{{ service.heading }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </div>
        <h4>{{ subtitle2 }}</h4>
        <div class="services-grid">
          <div class="service" v-for="(service, index) in services.slice(4)" :key="index + 4">
            <img :src="service.icon" alt="" />
            <h3>{{ service.heading }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </div>
        <small>{{ contactText }}</small> <br> <br>
        <a class="button" to="mailto:bezmir@ovoono.studio">{{ buttonLabel }}</a>
      </div>
    </section>
  </template>
  
  
  <script>
  export default {
    name: "ServicesSection",
    props: {
      subheading: {
        type: String,
        default: "Services",
      },
      title: {
        type: String,
        default: "Services",
      },
      subtitle: {
        type: String,
        default: "Blockchain interactions",
      },
      services: {
        type: Array,
        default: () => [
          {
            icon: require("@/assets/icons/FRAUD-Alert.png"),
            heading: "Detecting malicious Wallet Activity",
            text: "Our expertise enables us to identify individuals or groups engaging in malicious activities within the blockchain ecosystem, such as exploiting rewards systems in violation of the terms of service",
          },
          {
            icon: require("@/assets/icons/safegiveaway.png"),
            heading: "Ensuring Fair Giveaways and Event Rewards",
            text: 'We specialize in thoroughly examining entries from social platforms for giveaways and event rewards. Our approach ensures that only legitimate users have a chance to participate',
          },
          {
            icon: require("@/assets/icons/network.png"),
            heading: "Monitoring/Analyzing Social Media Groups",
            text:  "Our team is proficient in monitoring and analyzing social media groups with the intent to identify and expose malicious actors targeting specific ecosystems",
          },
          {
            icon: require("@/assets/icons/research.png"),
            heading: "Wallets And Smart Contrat Monitoring",
            text: "Our development services specialize in extracting and analyzing data from global web and blockchain sources",
          },
          {
            icon: require("@/assets/icons/blockchain.png"),
            heading: "Web and Blockchain Data Scraping",
            text: "Leveraging our expertise in web and blockchain data extraction, we provide comprehensive development services for collecting and analyzing data from multiple sources across the globe.",
          },
          {
            icon: require("@/assets/icons/api.png"),
            heading: "Bot and API Development",
            text: "We specialize in bot and API development, providing design, testing, and seamless integration. Our experienced team ensures the creation of secure, reliable, and scalable solutions that enhance functionality and improve user experience",
          },
          {
            icon: require("@/assets/icons/virtualReality.png"),
            heading: "Metaverse Creation",
            text: "Our team of experts is dedicated to crafting immersive and interactive experiences within the Metaverse. We specialize in developing gaming experiences, designing custom assets, and creating social hubs that captivate your audience",
          },
          {
            icon: require("@/assets/icons/content.png"),
            heading: "Video and Graphic Content",
            text: "Our creative team excels in producing high-quality video and graphic content tailored to your brand's unique style and vision, while seamlessly integrating with the emerging Metaverse",
          },
        ],
      },
      subtitle2: {
        type: String,
        default: "Development and Creation",
      },
      contactText: {
        type: String,
        default:
          "If you would like to inquire about any service we offer or would like to ask if we can provide custom services, please send us a message.",
      },
      buttonLabel: {
        type: String,
        default: "Contact Us",
      },
    },
  };
  </script>