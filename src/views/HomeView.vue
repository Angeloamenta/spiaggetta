<template>
  <div class="home container-fluid">
    <div class="row home-row">
      <div class="col d-flex justify-content-center align-items-center">
        <div class="icon">
          <img src="../assets/spiaggettalogo.svg" alt="">
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


.icon {
  width: 300px;
  height: 300px;
}

.home-row {
  height: 80vh;
}

</style>
