import store from './store'
import Firebase from 'firebase'
import router from './router';

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID 
}

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(config)
    const auth = firebase.auth()
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        await auth.signOut()
      }
    }
    auth.onAuthStateChanged(user => {
      store.commit('updateUser',{ user })

      let display = 'Not set';
      // Should probably try toggling on provider data.
      console.log(user.providerData);

      if(user.displayName !== null) {
        display = user.displayName;
      } else {
        display = user.email;
      }
      store.commit('updateDisplayName', display)

      if(user) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    })
  }
}