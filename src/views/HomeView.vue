<template>
  <div class="home container-fluid">
    <div class="row home-row">
      <div class="col-12 d-flex justify-content-start align-items-center logo-container">
          <img class="logo-spiaggetta" src="../assets/spiaggettalogo.svg" alt="">
          <img class="logo-cuore" src="../assets/cuore spiaggetta.gif" alt="">
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style>

.home {
  background-color: #2F3A2B;
}


.icon {
  width: 300px;
  height: 300px;
}

/* .home-row {
  height: 80vh;
} */

.logo-container {
  position: relative;
  height: 20vh;
}

.logo-spiaggetta {
  position: absolute;
  top: 35px;
  left: 20px;
  height: 50px;
}

.logo-cuore {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;

}

</style>
