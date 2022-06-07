<template>
    <div class="">
      <div class="nav-2 nav-cena container-fluid">
          <div class="row">
            <div class="col-12">Cosa cerchi?</div>
          </div>
          <div class="row mt-3">
          <div class="col-12 d-flex justify-content-center">
            <ul class="list-unstyled text-center h-100 d-flex align-items-center row w-75">
                <li class="col-12 col-md elemento " @click="setAll()">Tutto</li>
                <li class="col-12 col-md elemento " @click="setPizzeClassiche()">Pizze Classiche</li>
                <li class="col-12 col-md elemento " @click="setPizzeSpeciali()">Pizze Speciali</li>
                <li class="col-12 col-md elemento " @click="setPizzeMare()">Pizze di Mare</li>
                <li class="col-12 col-md elemento " @click="setPiattiUnici()">Piatti Unici</li>
                <li class="col-12 col-md elemento " @click="setFriggitoria()">Friggitoria</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid menu-bg">
          <div v-for="(piatto, index) in piatti2" :key="index" class="row mb-4">
              <div v-show="piatto.title" class="col-12 text-center mt-3 mb-5 title-show">
                    <h1 class="piatto-title" >{{piatto.title}}</h1>
                    <div class="line-cena"></div>
              </div>
              <div class="col-12 d-flex justify-content-between">
                    <h3 class="title-name">{{piatto.nome}}</h3>
                    <h3 class="price"> € {{piatto.prezzo}}</h3>
              </div>
              <div class="col-12 col-md-4 ">
                        <!-- <h5 v-if="piatto.condimenti == null"></h5>
                        <h5 v-else>Condimenti</h5> -->
                        <p class="condimenti">{{piatto.condimenti}}</p>
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
            condimenti: "mozzarella, olio evo",
            prezzo:5,
            title: "Pizze Classiche"
        },
        {
            nome: "Margherita",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, basilico, olio evo",
            prezzo:6
        },
        {
            nome: "Norma",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, melanzana fritta, ricotta salata, olio evo",
            prezzo:7.5
        },
        {
            nome: "Funghi",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, funghi champignon, olio evo",
            prezzo:7
        },
        {
            nome: "Napoletana",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, olive, capperi, acciughe, basilico, olio evo",
            prezzo:7
        },
        {
            nome: "Tonno",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, tonno, cipolla, olio evo",
            prezzo:7
        },
        {
            nome: "Semplice",
            categoria: "pizza",
            condimenti: "mozzarella di bufala, datterino in cottura, basilico, olio evo ",
            prezzo:8
        },
        {
            nome: "Crudaiola",
            categoria: "pizza",
            condimenti: "mozzarella fior di latte, prosciutto crudo, datterino, basilico, olio evo (tutto a crudo)",
            prezzo:8
        },
        {
            nome: "Chips",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, wurstel, patatine fritte*, olio evo",
            prezzo:8
        },
        {
            nome: "4 Formaggi",
            categoria: "pizza",
            condimenti: "mozzarella, gorgonzola, grana, emmental, basilico, olio evo",
            prezzo:8.5
        },
        {
            nome: "Bufala",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella di bufala, basilico, olio evo",
            prezzo:8
        },
        {
            nome: "4 Stagioni",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, cotto, funghi, olive, olio evo",
            prezzo:8
        },
        {
            nome: "Capricciosa",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, uovo, piselli, olive, cotto, wurstel, olio evo",
            prezzo:8.5
        },
        {
            nome: "Diavola",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, salame piccante, basilico, olio evo",
            prezzo:7
        },
        {
            nome: "Valtellina",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, bresaola, rucola, grana, olio evo",
            prezzo:9.5
        },
        {
            nome: "Parmigiana",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, uovo, prosciutto cotto, melanzana fritta, grana, olio evo",
            prezzo:9
        },
        {
            nome: "Speck",
            categoria: "pizza",
            condimenti: "mozzarella, radicchio, speck, datterino, olio evo",
            prezzo:8.5
        },
        {
            nome: "Grigliata",
            categoria: "pizza",
            condimenti: "mozzarella, melanzana arrosto, zucchine arrosto, radicchio, datterino, olio evo",
            prezzo:9
        },
        {
            nome: "Pachino",
            categoria: "pizza",
            condimenti: "Mozzarella di bufala, prosciutto crudo, datterino, basilico, olio evo",
            prezzo:10
        },
        {
            nome: "Gustosa",
            categoria: "pizza",
            condimenti: "mozzarella, patate al forno, rosmarino, salsiccia fresca, grana a scaglie, olio evo",
            prezzo:9
        },
        // pizze speciali

        {
            nome: "sapori siculi ",
            categoria: "pizza speciale",
            condimenti: "salsa di pomodoro, mozzarella, salsiccia fresca, finocchietto selvatico, mollica condita, olio evo",
            prezzo:10,
            title: "Pizze Speciali"
        },
        {
            nome: "Carciofina",
            categoria: "pizza speciale",
            condimenti: "mozzarella, crema di carciofi, speck, datterino",
            prezzo:10,
        },
        {
            nome: "Bronte",
            categoria: "pizza speciale",
            condimenti: "mozzarella, crema di pistacchio, mortadella, burrata, basilico, olio evo",
            prezzo:13
        },
        {
            nome: "La Fornace",
            categoria: "pizza speciale",
            condimenti: "mozzarella, capocollo di suino nero, datterino, burrata, grana, basilico, olio evo ",
            prezzo:13
        },
        {
            nome: "Manza",
            categoria: "pizza speciale",
            condimenti: "mozzarella, carpaccio di manzo, rucola, datterino, grana, olio evo ",
            prezzo:12
        },
        {
            nome: "Nerano",
            categoria: "pizza speciale",
            condimenti: "mozzarella, zucchina fritta, salame di cinghiale, scaglie di grana, pepe nero, olio evo",
            prezzo:12
        },
        {
            nome: "Ionica",
            categoria: "pizza speciale",
            condimenti: "mozzarella, confettura di fichi, capocollo di suino nero, rucola, datterino, grana, olio evo",
            prezzo:13
        },

        // pizze di mare

        {
            nome: "la spiaggetta ",
            categoria: "pizza mare",
            condimenti: "salsa di pomodoro, polpo*, gamberetti*, cozze*, gamberoni*, prezzemolo, olio evo",
            prezzo:16,
            title: "Pizze Di Mare"
        },
        {
            nome: "Sampiruotti",
            categoria: "pizza mare",
            condimenti: "zucchina fritta, mozzarella, gamberoni*, prezzemolo, olio evo",
            prezzo:14,
        },
        {
            nome: "U puzzu ra za vanna",
            categoria: "pizza mare",
            condimenti: "mozzarella, bottarga di tonno grattuggiata, scorza di limone, datterino, menta, olio evo",
            prezzo:12,
        },
        {
            nome: "Il molo",
            categoria: "pizza mare",
            condimenti: "mozzarella, datterino in cottura, seppie* arrosto, patate al forno, prezzemolo, olio evo",
            prezzo:13,
        },

        // piatti unici

        {
            nome: "IL VEGETARIANO",
            categoria: "piatti unici",
            condimenti: "datterino confit, radicchio grigliato, melanzana grigliata, burrata di bufala, basilico, crostoni, olio evo",
            prezzo:13,
            title: "Piatti unici"
        },
        {
            nome: "IL CARNIVORO",
            categoria: "piatti unici",
            condimenti: "datterino confit, carne salada, mozzarella di bufala, patatine fritte*, crostoni, olio evo",
            prezzo:15,
        },
        {
            nome: "LA PESCATRICE",
            categoria: "piatti unici",
            condimenti: "datterino confit, tartare di salmone, avocado, zucchine grigliate, crostoni, olio evo",
            prezzo:16,
        },

        // frigitoria

        {
            nome: "patatine fritte*",
            categoria: "friggitoria",
            prezzo:4,
            title: "Friggitoria"
        },

        // INSERIRE DESSERT

        {
            nome: "semifreddo “croccante al pistacchio”",
            categoria: "dessert",
            prezzo:7,
            title: "Dessert"
        },
        {
            nome: "geometrie di cioccolato e pere”",
            categoria: "dessert",
            prezzo:7,
        },
        {
            nome: "semifreddo “croccante alla mandorla”",
            categoria: "dessert",
            prezzo:6,
        },
        {
            nome: "semifreddo “agrumi di sicilia”",
            categoria: "dessert",
            prezzo:6,
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

     setFriggitoria() {
        this.setter = "friggitoria";
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
@import url(../assets/scss/style.scss);


  .nav-2 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
    font-weight: 700;
  }

    .nav-cena {
    background-color: #e13d3d;
  }

      .title-show {
        display: flex;
  flex-direction: column;
  }

  .line-cena {
      width: 50%;
      height: 3px;
      align-self: center;
      background-color: #e13d3d;
  }

</style>