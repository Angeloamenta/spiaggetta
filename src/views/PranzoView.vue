<template>
  <div class="main">
      <div class="nav-2 nav-pranzo container-fluid">
          <div class="row">
          <div class="col-12">Cosa cerchi?</div>
          </div>
          <div class="row mt-3">
              <div class="col-12 d-flex justify-content-center">
                    <ul class="list-unstyled text-center h-100 d-flex align-items-center row w-75 ">
                        <li class="col-12 col-md elemento" @click="setAll()">Tutto</li>
                        <li class="col-12 col-md elemento" @click="setInsalata()">Insalatone</li>
                        <li class="col-12 col-md elemento" @click="setPiatti()">Piatti</li>
                        <li class="col-12 col-md elemento" @click="setDessert()">Dessert</li>
                    </ul>
              </div>
          </div>
      </div>
      <div class="container-fluid menu-bg padding-200">
          <div v-for="(piatto, index) in piatti2" :key="index" class="row mb-4">
              <div v-show="piatto.title" class="col-12 text-center mt-3 mb-5 title-show">
                    <h1 class="piatto-title" >{{piatto.title}}</h1>
                    <div class="line-pranzo"></div>
              </div>
              <div class="col-12 d-flex justify-content-between">
                    <h3 class="title-name">{{piatto.nome}}</h3>
                    <h3 class="price"> € {{piatto.prezzo}}</h3>
              </div>
              <div class="col-12 col-md-8 ">
                        <!-- <h5 v-if="piatto.condimenti == null"></h5>
                        <h5 v-else>Condimenti</h5> -->
                        <p class="condimenti">{{piatto.condimenti}}</p>
              </div>
              <div class="col-12">
                <span v-show="piatto.allergeni" class="mx-2">Allergeni:</span>
                <img v-show="piatto.cereali" src="../assets/cereali.png" alt="">
                <img v-show="piatto.crostacei" src="../assets/crostacei.png" alt="">
                <img v-show="piatto.uova" src="../assets/uova.png" alt="">
                <img v-show="piatto.pesce" src="../assets/pesce.png" alt="">
                <img v-show="piatto.arachidi" src="../assets/arachidi.png" alt="">
                <img v-show="piatto.soia" src="../assets/soia.png" alt="">
                <img v-show="piatto.latte" src="../assets/latte.png" alt="">
                <img v-show="piatto.guscio" src="../assets/guscio.png" alt="">
                <img v-show="piatto.sedano" src="../assets/sedano.png" alt="">
                <img v-show="piatto.senape" src="../assets/senape.png" alt="">
                <img v-show="piatto.sesamo" src="../assets/sesamo.png" alt="">
                <img v-show="piatto.anidride" src="../assets/anidride solforosa e solfiti.png" alt="">
                <img v-show="piatto.lupini" src="../assets/lupini.png" alt="">
                <img v-show="piatto.molluschi" src="../assets/molluschi.png" alt="">
              </div>
          </div>
      </div>
    <PreFooter class="prefooter"/>
  </div>
</template>

<script>

import PreFooter from "@/components/PreFooter.vue";


export default {
name: "PranzoView",
components: {
    PreFooter
},
data() { return {
    elementi: null,
    setter : "All",
    piatti2: [],
    piatti: [
        // insalate
        {
            nome: "Bresaola",
            categoria: "insalata",
            condimenti: "iceberg, radicchio, valeriana, datterino, grana, bresaola",
            prezzo: 10,
            title: "Insalatone",
            class: "bg-success",
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Tonno",
            categoria: "insalata",
            condimenti: "iceberg, rucola, valeriana, tonno, olive, mozzarella",
            prezzo: 10,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Greca",
            categoria: "insalata",
            condimenti: "iceberg, cipolla, olive, cetriolo, datterino, feta, salsa yogurt",
            prezzo: 8,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },

        // piatti
          {
            nome: "Caprese",
            categoria: "piatti",
            condimenti: "datterino, fior di latte, basilico",
            prezzo: 8,
            title: "I Nostri piatti",
            anidride: true,
            arachidi: false,
            cereali: false,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "La Magra",
            categoria: "piatti",
            condimenti: "carpaccio di fassona, valeriana, grana, vinaigrette al limone, olio evo",
            prezzo: 13,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "L'Adige",
            categoria: "piatti",
            condimenti: "carne salada “cotta”, fagioli borlotti, cipolla, olio evo",
            prezzo: 13,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Un 'po' di tartare",
            categoria: "piatti",
            condimenti: "tartare di fassona con mela verde, senape, cucunci, sale e pepe",
            prezzo: 13,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Sampieri",
            categoria: "piatti",
            condimenti: "tartare di salmone, avocado, erba cipollina, salmoriglio al limone",
            prezzo: 13,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },

        // dessert

                {
            nome: "Semifreddo “croccante al pistacchio”",
            categoria: "dessert",
            prezzo: 7,
            title: "Dessert"
        },
                {
            nome: "Geometrie di cioccolato e pere",
            categoria: "dessert",
            prezzo: 7,
        },
                {
            nome: "Semifreddo “croccante alla mandorla”",
            categoria: "dessert",
            prezzo: 6,
        },
        {
            nome: "Semifreddo “agrumi di sicilia”",
            categoria: "dessert",
            prezzo: 6,
        },       
    ],
    

}
},
mounted() {

    this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
        var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search

        let proviamo = window.location.protocol + "//" + window.location.host + "/#/" + "pranzo"

        const elementi = document.querySelectorAll(".elemento");
         const elementiArray = Array.from(elementi);
         this.elementi = elementiArray
    this.elementi[0].classList.add("active-element")

 
},

methods: {
    setAll() {
        this.setter = "All";
        this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

    this.elementi[0].classList.add("active-element")

    if (this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element")) {
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")

    }

    },

    setInsalata() {
        this.setter = "insalata";
        this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)

    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

    this.elementi[1].classList.add("active-element")

    if (this.elementi[0].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
    }

    },

      setPiatti() {
        this.setter = "piatti";
        this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)

    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

    this.elementi[2].classList.add("active-element")


    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[3].classList.contains("active-element")) {
        this.elementi[1].classList.remove("active-element")
        this.elementi[0].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
    }

    },



    setDessert() {
        this.setter = "dessert";
        this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

    this.elementi[3].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element")) {
        this.elementi[1].classList.remove("active-element")
        this.elementi[0].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
    }

    },
}
}
</script>

<style>

/* .main {
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
} */

 .main {
    /* background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.3)), url("../assets/pizzabg-03.png"); */
   
} 

@import url(../assets/scss/style.scss);

main * {
    position: absolute;
}

.menu-bg{
    background-color: #fdfcf7;
}

 .nav-2 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
    font-weight: 700;
  }

  .nav-pranzo {
    background-color: #ef9206;
  } 

  .active-element {
      background-color: #00000080;
      border-radius: 25px;
      color: white;
      padding: 5px 0;
  }

  .title-show {
        display: flex;
  flex-direction: column;
  }

  .line-pranzo {
      width: 50%;
      height: 3px;
      align-self: center;
      background-color: #ef9206;
  }

</style>>


