<template>
  <section>
    <div class="container-fluid menu-bg m-0">
      <ul>
          <li v-show="switchShow">Coperto: 2.5 €</li>
          <li>Se sapete di essere <strong>allergici</strong> o <strong>intolleranti</strong> a determinati alimenti, vi preghiamo di comunicarlo al nostro personale prima di effettuare la vostra ordinazione.<br>
          I piatti contenuti nel menù potrebbero contenere i seguenti allergeni:
          <ul>
            <li>Cereali e derivati</li>
            <li>Crostacei</li>
            <li>Uova</li>
            <li>Pesce</li>
            <li>Arachidi</li>
            <li>Soia</li>
            <li>Latte</li>
            <li>Frutta a guscio</li>
            <li>Sedano</li>
            <li>Senape</li>
            <li>Sesamo</li>
            <li>Anidride solforosa e solfiti</li>
            <li>Lupini</li>
            <li>Molluschi</li>
          </ul>
          </li>
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