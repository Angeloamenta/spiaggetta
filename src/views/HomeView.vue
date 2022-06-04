<template>
  <div class="home container-fluid">
    <div class="row home-row pt-2">
      <div class="col-6 d-flex justify-content-start">
        <div class="row">
          <div class="col-12 logo-container">
              <img class="logo-spiaggetta" src="../assets/spiaggetta.svg" alt="">
              <img class="logo-cuore" src="../assets/cuore spiaggetta.gif" alt="">
          </div>
          <div class="col-12 welcome-container">
            <p class="welcome">
              Ti diamo il benvenuto <br class="br">
               a la_spiaggetta_21, <br class="br">
              gustati la nostra <br class="br">
              atmosfera conviviale, <br class="br">
              i nostri piatti e le <br class="br">
              nostre pizze e viaggia <br class="br">
              con la nostra nuova <br class="br">
              drink list.
            </p>
          </div>
          <div class="col-12 d-flex align-items-center align-items-sm-start flex-column">
            <p class="putia-text m-0">QUESTO MENÙ È STATO CREATO DA:</p>
            <img class="logo-putia" src="../assets/logoputia.svg" alt="">
          </div>
        </div>
      </div>
          <div class="col-6 d-flex align-items-center justify-content-sm-center ">
            <div class="row row-menu w-none w-100">
              <div class="col-12 word-container">
                <h2>M</h2>
                <img class="fiore-1" src="../assets/fiore-1.png" alt="">
              </div>
              <div class="col-12 word-container">
                <h2>E</h2>
                <img class="fiore-2" src="../assets/fiore-2.png" alt="">
              </div>
              <div class="col-12 word-container">
                <h2>N</h2>
                <img class="fiore-3" src="../assets/fiore-3.png" alt="">
              </div>
              <div class="col-12 word-container mb-5">
                <h2>Ù</h2>
                <img class="fiore-4" src="../assets/fiore-4.png" alt="">
              </div>
              <div class="col mt-3 social">
                <div class="border-white"></div>
                <div class="d-flex justify-content-end align-items-center">
                  <a href="https://www.instagram.com/la_spiaggetta_21/" target="_blank"><img src="../assets/ig.gif" alt=""></a>
                  <a class="mx-2" href="https://www.facebook.com/Laspiaggetta.21" target="_blank"><img src="../assets/fb.gif" alt=""></a>
                </div>
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
    left: 19px;
    height: 46px;
}

.logo-cuore {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;

}

.welcome-container {
  height: 45vh;
  display: flex;
  align-items: center;
}

.welcome {
  font-size: 14px;
  font-family: 'Lato', sans-serif;
}

.putia-text {
  font-size: 9px;
  font-family: 'Lato', sans-serif;
}

.row-menu img {
  width: 110px;
}

.word-container {
  position: relative;
  height: 100px;
}

.word-container *{
  position: absolute;
  transform: translate(-50%);
  left: 50%;
}

.word-container h2 {
  font-size: 130px;
  font-family: 'DM Serif Display', serif;
  z-index: 1;
}

.social {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.social img {
  width: 50px;
}

.border-white {
  height: 5px;
  width: 80%;
  background-color: white;
  align-self: end;
  margin-bottom: 10px;
}

.fiore-1 {
  left: 72%;
}

.fiore-2 {
  left: 13%;
}

.fiore-3 {
  left: 80%;
}

.fiore-4 {
  left: 25%;
}

.logo-putia {
  width: 130px;
}

</style>
