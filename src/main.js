import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
// import firebase from 'firebase';
import FirebaseAuthPlugin from './FirebaseAuthPlugin';


Vue.config.productionTip = false

Vue.use(FirebaseAuthPlugin);
sync(store, router);

/*
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID 
};
*/

// let app = '';

// firebase.initializeApp(firebaseConfig);

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app');

/*
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
*/

/*
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
*/

export { app, router, store }