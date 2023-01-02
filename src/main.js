import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import Element from "element-ui";
import VueLazyload from "vue-lazyload";
const loadimage = require("./assets/loading.gif");

import "firebase/auth";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Vue2Editor);
Vue.use(Element);
Vue.use(VueLazyload, {
  
  preLoad: 1.3,
  loading: loadimage,
  attempt: 2,
});

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
