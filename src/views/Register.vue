<template>
    <div class="register">
        <p>Sign up for a new account</p>
        <input type="text" placeholder="email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button>Sign Up</button>
        <p>
            <router-link to="/login">Log in</router-link> instead.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
</style>