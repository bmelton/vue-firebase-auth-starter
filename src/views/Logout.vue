<script>
    import firebase from 'firebase';

    export default {
        name: "logout",
        created: function() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login');
            })
        },
        methods: {
            logout: function() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login');
                })
            }
        }
    }
</script>