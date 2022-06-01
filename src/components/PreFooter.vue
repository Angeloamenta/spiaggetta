<template>
  <section>
    <div class="container-fluid menu-bg m-0">
      <ul>
          <li v-show="switchShow">Coperto: 2.5</li>
          <li>Se sapete di essere allercigi o intolleranti a determinati alimenti, vi preghiamo di comunicarlo al nostro personale prima di effettuare la vostra ordinazione</li>
          <li v-show="switchShow">N.B. supplemento da €1,00 a €3,50</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
name:"PreFooter",
data() {return {
  switchShow: true
}
},
mounted() {
    console.log("test",window.location.hash)
    if (window.location.hash == "#/Drink") {
      this.switchShow = false 
    }
      console.log("show",this.switchShow);
}

}
</script>

<style>

</style>