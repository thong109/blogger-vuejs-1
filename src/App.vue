<template>
  <div class="app-wrapper">
    <div class="loading-data" v-if="!this.$store.state.postLoaded">
      <div class="preloader"></div>
      <p>Đổi Mới Dạy Học Bằng UDCNTT</p>
    </div>
    <div class="app" v-if="this.$store.state.postLoaded">
      <Navigation v-if="!navigation" />
      <router-view />
      <Footer v-if="!navigation" />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser", user);
      }
    });
    this.checkRoute();
    this.$store.dispatch("getPost");
  },
  mounted() { },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.loading-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.preloader {
  width: 50px;
  height: 2px;
  background-color: rgb(240, 240, 240);
  position: relative;
}

.preloader::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #999;
  bottom: 20px;
  left: -10px;
  animation: bounce 2s linear infinite;
}

.preloader:after {
  content: "";
  position: absolute;
  top: 0;
  left: -2px;
  height: 2px;
  background-color: red;
  animation: color 2s linear infinite;
}

@keyframes bounce {
  0% {
    bottom: 20px;
    left: -15px;
    width: 10px;
    opacity: 0;
    background: red;
  }

  20% {
    bottom: 0px;
    left: 0;
    width: 10px;
    opacity: 1;
    background: orange;
  }

  22% {
    bottom: 0px;
    left: 0;
    width: 12px;
    height: 8px;
  }

  27% {
    bottom: 0px;
    left: 2px;
    width: 10px;
    height: 10px;
  }

  50% {
    bottom: 20px;
    left: 17px;
    width: 10px;
    height: 10px;
    background: green;
  }

  55% {
    bottom: 20px;
    left: 22px;
    width: 10px;
    height: 10px;
  }

  75% {
    bottom: 0px;
    left: 35px;
    width: 10px;
    height: 10px;
    background: blue;
  }

  80% {
    bottom: 0px;
    left: 35px;
    width: 12px;
    height: 8px;
  }

  82% {
    bottom: 0px;
    left: 35px;
    width: 10px;
    height: 10px;
    opacity: 1;
  }

  100% {
    bottom: 20px;
    left: 50px;
    width: 10px;
    height: 8px;
    opacity: 0;
  }
}

@keyframes color {
  0% {
    width: 0;
    background: red;
  }

  20% {
    width: 10px;
    background: orange;
  }

  50% {
    width: 25px;
    background: green;
  }

  75% {
    width: 45px;
    background: blue;
  }

  100% {
    width: 52px;
    background: purple;
  }
}


p .app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;

  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;

  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }

  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

.blog-card-wrap {
  position: relative;
  padding: 10px 16px;

  @media (min-width: 500px) {
    padding: 10px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
