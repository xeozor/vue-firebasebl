import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDb6tHJepRVqOsWYFJ4nRLHrDzTuXRTmmo",
  authDomain: "deadlin-one-weak.firebaseapp.com",
  databaseURL: "https://deadlin-one-weak.firebaseio.com",
  projectId: "deadlin-one-weak",
  storageBucket: "deadlin-one-weak.appspot.com",
  messagingSenderId: "239439060685",
  appId: "1:239439060685:web:a40e55b56b56ec20445384"
};

firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



