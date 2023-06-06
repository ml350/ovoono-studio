<template>
    <div class="login-page">
        <img :class="['logo', { 'logo-bounce': isTyping }]" src="../assets/logo/ovo3dlogo.png" alt="Logo">
        <div class="login-form">
            <h1>{{ title }}</h1>
            <form @submit.prevent="loginUser">
                <div>
                    <input placeholder="Username" id="username" v-model="username" type="text" required class="rounded-input" @input="handleInput">
                </div>
                <div>
                    <input placeholder="Password" id="password" v-model="password" type="password" required class="rounded-input">
                </div>
                <button type="submit" class="button">Login</button>
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome',
                username: '',
                password: '',
                typingTimeout: null,
                isTyping: false,
                errorMessage: '', // New data property for error message
            };
        },
        methods: {
            async loginUser() {
                try {
                    await this.$store.dispatch('login', {
                        username: this.username,
                        password: this.password
                    });
                    this.$router.push('/dashboard');
                } catch (error) {
                    this.errorMessage = error.message;
                }
            },
            handleInput() {
                clearTimeout(this.typingTimeout);

                this.isTyping = true;

                this.typingTimeout = setTimeout(() => {
                    this.isTyping = false;
                }, 500);
            },
        },
    };
</script>

<style scoped> 
    .error-message {
        color: red;
        margin-top: 10px;
    }

    .login-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .logo {
        width: 240px;
        height: 240px;
        margin-bottom: -87px;
        /* Add any additional styling for the logo */
    }

    .logo-bounce {
        animation: bounce 0.5s;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-10px);
        }

        100% {
            transform: translateY(0);
        }
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        /* Add any additional styling for the login form */
    }

    .rounded-input {
        border-radius: 20px;
        padding: 10px;
        
    }

    .rounded-button {
        border-radius: 20px;
        padding: 10px 20px;
        background-color: #67c4a5;
        color: white;
        font-weight: bold;
        border: none;
        cursor: pointer;
        
        /* Add any additional styling for the button */
    }
</style>
