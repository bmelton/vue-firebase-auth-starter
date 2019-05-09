<template>
    <div class="login">
        <h3>Sign In</h3>
        <input v-mode="email" type="text" placeholder="email" /><br />
        <input v-mode="password" type="password" placeholder="password" /><br />
        <button @click="login">Log In</button>
        <p>
            <router-link to="/register">Sign up</router-link> to create a new account
            instead.
        </p>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'login',
        data() {
            return {
                email: 'barry.melton@gmail.com',
                password: '101proof'
            };
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(
                    this.email, this.password
                ).then(
                    function(user) {
                        alert("Successful authentication!");
                    },
                    function(err) {
                        alert("Login details invalid.");
                    }
                )
            }
        }
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