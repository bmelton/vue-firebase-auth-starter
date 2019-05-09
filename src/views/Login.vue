<template>
    <div class="login">
        <h3>Sign In</h3>
        <input v-mode="email" type="text" placeholder="email" /><br />
        <input v-mode="password" type="password" placeholder="password" /><br />
        <button @click="login">Log In</button>
        <p>
            <img @click="loginTwitter" alt="Twitter login button" src="../assets/social/twitter-64px.png" />
        </p>
        <p>
            <router-link to="/register">Sign up</router-link> to create a new account
            instead.
        </p>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import {mapGetters} from 'vuex';

    export default {
        name: 'login',
            computed: {
                ...mapGetters(['user']),
                nextRoute () {
                return this.$route.query.redirect || '/'
            }
        },
        data() {
            return {
                email: '',
                password: ''
            };
        },
        watch: {
            user(auth) {
                if(!!auth) {
                    this.$router.replace(this.nextRoute);
                }
            }
        },
        methods: {
            /*
            async login () {
                const auth = await this.$auth.signInWithEmailAndPassword(this.email, this.password)
            },
            */
            loginTwitter: function() {
                const provider = new firebase.auth.TwitterAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    this.$router.replace('home');
                }).catch((err) => {
                    alert(err.message);
                })
            },
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(function(user) {
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