<template>
    <div class="register">
        <p>Sign up for a new account</p>
        <input type="text" v-model="email" placeholder="email" /><br />
        <input type="password" v-model="password" placeholder="Password" /><br />
        <button @click="register">Sign Up</button>
        <p>
            <router-link to="/login">Log in</router-link> instead.
        </p>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'register',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            register: function() {
                firebase.auth().createUserWithEmailAndPassword(
                    this.email,
                    this.password
                ).then(
                    (user) => {
                        this.$router.replace('home');
                    },
                    (err) => {
                        alert("That didn't work. " + err.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
</style>