<template>
  <section>
    <div class="container-fluid menu-bg m-0">
      <ul>
          <li v-show="switchShow">Coperto: 2.5 €</li>
          <li>Se sapete di essere <strong>allergici</strong> o <strong>intolleranti</strong> a determinati alimenti, vi preghiamo di comunicarlo al nostro personale prima di effettuare la vostra ordinazione.<br>
          I piatti contenuti nel menù potrebbero contenere i seguenti allergeni:
          <ul class="list-unstyled">
            <li> <span class=" allergeni cereali">C</span> Cereali e derivati</li>
            <li> <span class=" allergeni crostacei">C</span> Crostacei</li>
            <li> <span class=" allergeni uova">U</span> Uova</li>
            <li> <span class=" allergeni pesce">P</span> Pesce</li>
            <li> <span class=" allergeni arachidi">A</span> Arachidi</li>
            <li> <span class=" allergeni soia">S</span> Soia</li>
            <li> <span class=" allergeni latte">L</span> Latte</li>
            <li> <span class=" allergeni guscio">F</span> Frutta a guscio</li>
            <li> <span class=" allergeni sedano">S</span> Sedano</li>
            <li> <span class=" allergeni senape">S</span> Senape</li>
            <li> <span class=" allergeni sesamo">S</span> Sesamo</li>
            <li> <span class=" allergeni anidride">A</span> Anidride solforosa e solfiti</li>
            <li> <span class=" allergeni lupini">L</span> Lupini</li>
            <li> <span class=" allergeni molluschi">M</span> Molluschi</li>
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

.allergeni {
  border: 3px solid black;
  padding: 0 3px;
  color: white;
  font-weight: bolder;
}

.cereali{
background-color: #412A13;
}
.crostacei{
background-color: #ED474A;
}
.uova{
background-color: #A38F7B;
}
.pesce{
background-color: #05B2DC;
}
.arachidi{
background-color: #EF7B45;
}
.soia{
background-color: #A393BF;
}
.latte{
background-color: #1C5D99;
}
.guscio{
background-color: #42443E;
}
.sedano{
background-color: #CFD11A;
}
.senape{
background-color: #929982;
}
.sesamo{
background-color: #493843;
}
.anidride{
background-color: #9c8a87;
}
.lupini{
background-color: #95ac51;
}
.molluschi{
  background-color: #BAFF29;
}

</style>