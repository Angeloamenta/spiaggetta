<template>
  <div id="app">
    <nav class="navbar-1">
      <router-link to="/" @click="change()">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/pranzo">Pranzo</router-link> |
      <router-link to="/cena">Cena</router-link> |
      <router-link to="/Drink">Drink</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<script>

import PreFooter from "@/components/PreFooter.vue";

export default {
    components: {
    PreFooter,
  },
data() {
  return {
    page:"",
    route: window.location.hash,
  }
},
watch: {
  route: function(){
    this.page = window.location.hash.split("#/")[1];
    console.log("prova",this.page);
  }
},
mounted() {

  let bar = document.querySelector(".navbar-1")
  console.log(bar);

    if (window.location.hash = "#/") {
            console.log("ok");
            bar.classList.add("ceruleo")     
      }

},
methods: {
  change() {
    console.log("this.route");
  }
}
}

</script>


<style>

 
 @import "./assets/scss/style.scss";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

  .ceruleo {
    background-color: #42a0bd !important;
  }

  .giallo {
    background-color: #ff9d0a !important;
  }

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.prefooter {
  margin-top: 30px;
}
</style>
