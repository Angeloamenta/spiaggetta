<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pranzo">Pranzo</router-link> |
      <router-link to="/cena">Cena</router-link> |
      <router-link to="/Drink">Drink</router-link>

    </nav>
    <router-view/>
  </div>
</template>

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
  background-color: rgb(126, 34, 231);
  text-align: center;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
