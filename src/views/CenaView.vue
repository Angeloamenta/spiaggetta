<template>
    <div class="">
      <div class="nav-2 nav-cena container-fluid">
          <div class="row">
            <div class="col-12">Cosa cerchi?</div>
          </div>
          <div class="row mt-3">
          <div class="col-12 d-flex justify-content-center">
            <ul class="list-unstyled text-center row w-75">
                <li class="col-12 col-md elemento " @click="setAll()">Tutto</li>
                <li class="col-12 col-md elemento " @click="setPizzeClassiche()">Pizze Classiche</li>
                <li class="col-12 col-md elemento " @click="setPizzeSpeciali()">Pizze Speciali</li>
                <li class="col-12 col-md elemento " @click="setPizzeMare()">Pizze di Mare</li>
                <li class="col-12 col-md elemento " @click="setPiattiUnici()">Piatti Unici</li>
                <li class="col-12 col-md elemento " @click="setFrigitoria()">Frigitoria</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid">
          <div v-for="(piatto, index) in piatti2" :key="index" class="row">
              <div v-show="piatto.title" class="col-12 text-center text-md-start mt-3">
                    <h1>{{piatto.title}}</h1>
              </div>
              <div class="col-12 col-md-4">
                    <h3>{{piatto.nome}}</h3>
              </div>
              <div class="col-12 col-md-4 ">
                        <h5 v-if="piatto.condimenti == null"></h5>
                        <h5 v-else>Condimenti</h5>
                        <p>{{piatto.condimenti}}</p>
              </div>
              <div class="col-12 col-md-4 mb-4">
                        <div>€ {{piatto.prezzo}}</div>
              </div>
          </div>
      </div>
    <PreFooter class="prefooter"/>
  </div>
</template>

<script>

import PreFooter from "@/components/PreFooter.vue";


export default {
name:"CenaView",
components: {
    PreFooter
},
data() { return {
    elementi: null,
    setter : "All",
    piatti2: [],
    piatti: [

        // pizze clasiche
        {
            nome: "Biancaneve",
            categoria: "pizza",
            condimenti: "mozzarella, olio",
            prezzo:5,
            title: "Pizze Classiche"
        },
        {
            nome: "Margherita",
            categoria: "pizza",
            condimenti: "salsa di pomodoro,mozzarella,basilico,olio evo",
            prezzo:6
        },
        {
            nome: "Norma",
            categoria: "pizza",
            condimenti: "salsa di pomodoro,mozzarella,melanzana fritta, ricotta salata, olio",
            prezzo:7.5
        },

        // pizze speciali

        {
            nome: "sapori siculi ",
            categoria: "pizza speciale",
            condimenti: "salsa di pomodoro, mozzarella, salsiccia fresca, finocchietto selvatico, mollica condita, olio",
            prezzo:10,
            title: "Pizze Speciali"
        },
        {
            nome: "Carciofina",
            categoria: "pizza speciale",
            condimenti: "mozzarella, crema di carciofi, speck, datterino",
            prezzo:10,

        },

        // pizze di mare

        {
            nome: "la spiaggetta ",
            categoria: "pizza mare",
            condimenti: "salsa di pomodoro, polipo*, gamberetti*, cozze*,gamberoni*, prezzemolo, olio",
            prezzo:10,
            title: "Pizze Di Mare"
        },

        // piatti unici

        {
            nome: "IL VEGETARIANO",
            categoria: "piatti unici",
            condimenti: "datterino confit, radicchio grigliato, melanzana grigliata, burrata di bufala, basilico,crostoni, olio evo",
            prezzo:13,
            title: "Piatti unici"
        },

        // frigitoria

                {
            nome: "partatine fritte",
            categoria: "frigitoria",
            prezzo:4,
            title: "Frigitoria"
        },
    ]

}
},
mounted() {
    this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

    const elementi = document.querySelectorAll(".elemento");
        console.log("elementi", elementi);
        console.log(Array.from(elementi));
         const elementiArray = Array.from(elementi);
         console.log(elementiArray);
         this.elementi = elementiArray
    this.elementi[0].classList.add("active-element")
},

methods: {
    setAll() {
        this.setter = "All";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

    this.elementi[0].classList.add("active-element")
    if (this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.remove("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")

    }
    },

    setPizzeClassiche() {
        this.setter = "pizza";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

     this.elementi[1].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[2].classList.remove("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")

    }
    },

    setPizzeSpeciali() {
        this.setter = "pizza speciale";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
      this.elementi[2].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.remove("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
    }
    
    },

    setPizzeMare() {
        this.setter = "pizza mare";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
      this.elementi[3].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.remove("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
    }
    },

    setPiattiUnici() {
        this.setter = "piatti unici";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
          this.elementi[4].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.remove("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
    }
    },

     setFrigitoria() {
        this.setter = "frigitoria";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    this.elementi[5].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.remove("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
    }
    },

},
watch() {



}
}
</script>

<style>

  .nav-2 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

    .nav-cena {
    background-color: #e13d3d;
  }

</style>