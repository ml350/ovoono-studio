<template>
    <div class="about-section">
        <div class="about-container"> 
            <div class="right-grid">
                <img :src="image" alt="OvoOno Shop Logo" />
            </div>
            <div class="left-grid">
                <h3>{{ subtitle }}</h3>
                <h2>{{ title }}</h2>
                <p>{{ content }}</p>
                <p>{{ extContent }}</p>
                <router-link class="button" to="/about">{{ buttonLabel }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutSection',
        props: {
            subtitle: String,
            title: String,
            content: String,
            extContent: String,
            buttonLabel: String,
            image: String,
        } 
    };
</script>