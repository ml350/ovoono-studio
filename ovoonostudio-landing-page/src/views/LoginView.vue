<template>
    <div>
      <h2>Login</h2>
      <button @click="loginWithDiscord">Login with Discord</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        clientId: 'YOUR_CLIENT_ID', // Replace with your Discord application's client ID
        redirectUri: 'http://localhost:8080/dashboard', // Replace with your desired redirect URI
      };
    },
    methods: {
      loginWithDiscord() {
        const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&response_type=code&scope=identify%20email`;
        window.location.href = authUrl;
      },
    },
  };
</script>