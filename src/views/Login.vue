<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="email" /><br />
        <input type="password" placeholder="password" /><br />
        <button>Log In</button>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {};
        },
        methods: {}
    }
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 10%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a { 
        text-decoration: underline;
        cursor: pointer;
    }
</style>