<template>
  <section>
    <div class="container-fluid menu-bg m-0">
      <ul>
          <li v-show="switchShow">Coperto: 2.5 €</li>
          <li>Se sapete di essere <strong>allergici</strong> o <strong>intolleranti</strong> a determinati alimenti, vi preghiamo di comunicarlo al nostro personale prima di effettuare la vostra ordinazione.<br>
          I piatti contenuti nel menù potrebbero contenere i seguenti allergeni:
          <ul class="list-unstyled">
            <li class="d-flex align-items-center mb-2"> <img src="../assets/cereali.png" alt=""> Cereali e derivati</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/crostacei.png" alt=""> Crostacei</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/uova.png" alt=""> Uova</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/pesce.png" alt=""> Pesce</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/arachidi.png" alt=""> Arachidi</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/soia.png" alt=""> Soia</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/latte.png" alt=""> Latte</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/guscio.png" alt=""> Frutta a guscio</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/sedano.png" alt=""> Sedano</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/senape.png" alt=""> Senape</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/sesamo.png" alt=""> Sesamo</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/anidride solforosa e solfiti.png" alt=""> Anidride solforosa e solfiti</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/lupini.png" alt=""> Lupini</li>
            <li class="d-flex align-items-center mb-2"> <img src="../assets/molluschi.png" alt=""> Molluschi</li>
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

    if (window.location.hash == "#/Drink") {
      this.switchShow = false 
    }
}

}
</script>

<style>

.allergeni {
  border: 3px solid black;
  padding: 0 3px;
  color: white;
  font-weight: bolder;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
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