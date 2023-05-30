<template>
    <section id="Services" class="services-section">
        <div class="services-container">
            <h3 class="section-subheading">{{ subheading }}</h3>
            <h2 class="section-heading">{{ title }}</h2> 
            <div class="services-grid">
                <div class="service-card" v-for="(service, index) in services" :key="index" @mouseenter="showText(index)" @mouseleave="hideText(index)">
                    <div class="icon">
                        <img :src="service.icon" alt="" />
                    </div>
                    <div class="heading">{{ service.heading }}</div>
                    <div class="text" :class="{ 'fade-in': showTextArr[index] }">
                        <p>{{ service.text }}</p>
                    </div>
                </div>
            </div>
            <small>{{ contactText }}</small><br /><br />
            <a class="button" :href="'mailto:' + buttonEmail">{{ buttonLabel }}</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ServicesSection",
        props: {
            subheading: {
                type: String,
                default: "Development and creations",
            },
            title: {
                type: String,
                default: "Services",
            }, 
            services: {
                type: Array,
                default: () => [
                    {
                        icon: require("@//assets/icons/FRAUD-Alert.png"),
                        heading: "Detecting malicious activities",
                        text: "Our expertise enables us to identify individuals or groups engaging in malicious activities within the blockchain",
                    },
                    {
                        icon: require("@//assets/icons/safegiveaway.png"),
                        heading: "Ensuring Giveaways and Event Rewards",
                        text: "We specialize in thoroughly examining entries from social platforms for giveaways and event rewards",
                    },
                    {
                        icon: require("@//assets/icons/network.png"),
                        heading: "Monitoring/Analyzing Social Media Groups",
                        text: "Our team is proficient in monitoring and analyzing social media groups with the intent to identify actors",
                    },
                    {
                        icon: require("@//assets/icons/research.png"),
                        heading: "Wallets And Smart Contract Monitoring",
                        text: "Our development services specialize in extracting and analyzing data from global web and blockchain sources",
                    },
                    {
                        icon: require("@//assets/icons/blockchain.png"),
                        heading: "Web and Blockchain Data Scraping",
                        text: "We provide comprehensive development services for collecting and analyzing data from multiple sources",
                    },
                    {
                        icon: require("@//assets/icons/api.png"),
                        heading: "Web, Blockchain and API Development",
                        text: "We specialize in web,smart contracts and API development, providing design, testing, and seamless integration",
                    },
                    {
                        icon: require("@//assets/icons/virtualReality.png"),
                        heading: "Metaverse Creation",
                        text: "Our team of experts is dedicated to crafting immersive and interactive experiences within the Metaverse",
                    },
                    {
                        icon: require("@//assets/icons/content.png"),
                        heading: "Video and Graphic Content",
                        text: "Our creative team excels in producing high-quality video and graphic content tailored to your brand's unique style and vision",
                    },
                ],
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
        data() {
            return {
                showTextArr: Array(this.services.length).fill(false),
            };
        },
        methods: {
            showText(index) {
                this.showTextArr[index] = true;
            },
            hideText(index) {
                this.showTextArr[index] = false;
            },
        },
    };
</script>

<style scoped>
    .services-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .service-card {
        position: relative;
        width: 250px;
        height: 250px;
    }

    .service-card p {
        margin: 10px;
    }

    .service-card .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        background-color: #380062;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s;
    }

    .service-card .heading {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        background-color: #380062;
        text-align: center;
        transition: opacity 0.5s;
    }

    .service-card .text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1rem;
        background-color: #380062;
        opacity: 0;
        transition: opacity 0.5s;
    }

    .service-card:hover .icon {
        opacity: 0;
    }

    .service-card:hover .heading {
        opacity: 0;
    }

    .service-card:hover .text {
        opacity: 1;
    }

    .fade-in {
        opacity: 1;
    }
    .service-card {
        background-color: #380062;
    }

    .icon img {
        width: 50%;
        height: auto;
        margin-top: -30px;
    }
</style>
