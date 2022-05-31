<template>
  <div class="home container-fluid">
    <div class="row home-row pt-5 pb-5">
      <div class="col-6 d-flex justify-content-start">
        <div class="row">
          <div class="col-12 logo-container">
              <img class="logo-spiaggetta" src="../assets/spiaggettalogo.svg" alt="">
              <img class="logo-cuore" src="../assets/cuore spiaggetta.gif" alt="">
          </div>
          <div class="col">
            boh
          </div>
        </div>
      </div>
          <div class="col-6 d-flex justify-content-start align-items-center mt-5">
            <div class="row row-menu w-100">
              <div class="col-12 word-container">
                <h2>M</h2>
                <img src="../assets/fiore-1.png" alt="">
              </div>
              <div class="col-12 word-container">
                <h2>E</h2>
                <img src="../assets/fiore-2.png" alt="">
              </div>
              <div class="col-12 word-container">
                <h2>N</h2>
                <img src="../assets/fiore-3.png" alt="">
              </div>
              <div class="col-12 word-container">
                <h2>Ù</h2>
                <img src="../assets/fiore-4.png" alt="">
              </div>
            </div>
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
  color:white;
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

.row-menu img {
  width: 120px;
}

.word-container {
  position: relative;
  height: 120px;
}

.word-container *{
  position: absolute;
  transform: translate(-50%);
  left: 50%;
}

.word-container h2 {
  font-size: 100px;
  z-index: 1;
}

</style>
