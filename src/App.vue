<template>
  <div v-touch:swipe.left="swipeHandler" v-touch:swipe.right="swipeRx" id="app" class="overflow-hidden">
    <nav  class="navbar-1 d-flex justify-content-center align-items-center p-3">
      <div class="d-flex d-flex justify-content-around align-items-center w-50 h-100">
        <router-link class="rout" to="/" @click.native="changeHome()">Home</router-link>
      <router-link class="rout" to="/pranzo" @click.native="changePranzo()">Pranzo</router-link>
      <router-link class="rout" to="/cena" @click.native="changeCena()">Cena</router-link>
      <router-link class="rout" to="/Drink" @click.native="changeDrink()">Drink</router-link>
      </div>
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
    counter: null,

  }
},
mounted() {
  this.counter = 0
      let bar = document.querySelector(".navbar-1")

  if (window.location.hash == "#/") {
  bar.classList.add("ceruleo")
  bar.classList.remove("rosso")
  bar.classList.remove("giallo")
  bar.classList.remove("viola")
  this.counter = 0

  }else if (window.location.hash == "#/pranzo") {
    bar.classList.add("giallo")
    bar.classList.remove("rosso")
    bar.classList.remove("ceruleo")
    bar.classList.remove("viola")
    this.counter = 1


  }else if (window.location.hash == "#/cena") {
    bar.classList.add("rosso")
    bar.classList.remove("giallo")
    bar.classList.remove("ceruleo")
    bar.classList.remove("viola")
    this.counter = 2


  }else if (window.location.hash == "#/Drink"){
    bar.classList.add("viola")
    bar.classList.remove("rosso")
    bar.classList.remove("ceruleo")
    bar.classList.remove("giallo")
    this.counter = 3


  }

},
 watch: {
    $route(to, from) {
      let bar = document.querySelector(".navbar-1")
      if (window.location.hash == "#/") {
  bar.classList.add("ceruleo")
  bar.classList.remove("rosso")
  bar.classList.remove("giallo")
  bar.classList.remove("viola")
  this.counter = 0

  }else if (window.location.hash == "#/pranzo") {
    bar.classList.add("giallo")
    bar.classList.remove("rosso")
    bar.classList.remove("ceruleo")
    bar.classList.remove("viola")
    this.counter = 1



  }else if (window.location.hash == "#/cena") {
    bar.classList.add("rosso")
    bar.classList.remove("giallo")
    bar.classList.remove("ceruleo")
    bar.classList.remove("viola")
    this.counter = 2



  }else if (window.location.hash == "#/Drink"){
    bar.classList.add("viola")
    bar.classList.remove("rosso")
    bar.classList.remove("ceruleo")
    bar.classList.remove("giallo")
    this.counter = 3



  }
    }
  },

methods: {

  swipeHandler() {
    let rout = document.querySelectorAll('.rout')
    let array = []

    for (let i = 0; i < rout.length; i++) {
      const element = rout[i];
      array.push(element)
    }


    if (this.counter == 0) {
      array[1].click();
      
    }else if (this.counter == 1) {
      array[2].click();
    }else if (this.counter == 2) {
      array[3].click();
    }  
  },

  swipeRx() {

    let rout = document.querySelectorAll('.rout')
    let array = []
    for (let i = 0; i < rout.length; i++) {
      const element = rout[i];
      array.push(element)
    }


    if (this.counter == 3) {
      array[2].click();
      
    }else if (this.counter == 2) {
      array[1].click();
    }else if (this.counter == 1) {
      array[0].click();
    }
    
  },
  
  changeHome() {
  let bar = document.querySelector(".navbar-1")
  bar.classList.add("ceruleo")
  if (bar.classList.contains("giallo")) {
    bar.classList.remove("giallo")
    
  }

    if (bar.classList.contains("viola")) {
      bar.classList.remove("viola")
    
    
  }

    if (bar.classList.contains("rosso")) {
      bar.classList.remove("rosso")
    
  }


  },

  changePranzo() {

    let bar = document.querySelector(".navbar-1")
    bar.classList.add("giallo")

    if (bar.classList.contains("ceruleo")) {
    bar.classList.remove("ceruleo")
    
  }

    if (bar.classList.contains("viola")) {
      bar.classList.remove("viola")
    
    
  }

  if (bar.classList.contains("rosso")) {
      bar.classList.remove("rosso")
    
  }

  },

  changeCena() {
  let bar = document.querySelector(".navbar-1")
    bar.classList.add("rosso")

      if (bar.classList.contains("giallo")) {
    bar.classList.remove("giallo")
    
  }

    if (bar.classList.contains("viola")) {
      bar.classList.remove("viola")
    
    
  }

    if (bar.classList.contains("ceruleo")) {
      bar.classList.remove("ceruleo")
    
  }
 

  },

  changeDrink() {
  let bar = document.querySelector(".navbar-1")
    bar.classList.add("viola")

      if (bar.classList.contains("giallo")) {
    bar.classList.remove("giallo")
    
  }

    if (bar.classList.contains("ceruleo")) {
      bar.classList.remove("ceruleo")
    
    
  }

    if (bar.classList.contains("rosso")) {
      bar.classList.remove("rosso")
    
  }

  }
}
}

</script>


<style>

 



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
    background-color: #42a0bd;
  }

  .giallo {
    background-color: #ff9d0a;
  }

  .rosso {
    background-color: #e94949 ;
  }

  .viola {
    background-color: #f20d93;
  }

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
      background-color: #00000080;
      border-radius: 25px;
      color: white;

}



.rout {
  padding: 6px 20px;
  text-decoration: none;
}

.rout:visited, .rout:hover, .rout:active {
  color: white;
}

.prefooter {
  margin-top: 30px;
}
</style>
