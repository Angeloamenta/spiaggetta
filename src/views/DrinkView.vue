<template>
<div>
    <div class="nav-2 nav-drink container-fluid">
        <div class="row">
            <div class="col-12">
                Cosa cerchi?
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 d-flex justify-content-center">
                <ul class="list-unstyled text-center h-100 d-flex align-items-center row w-75">
                    <li @click="setAll()" class="col-12 col-md elemento ">Tutto</li>
                    <li @click="setNostriDrink()" class="col-12 col-md elemento ">I nostri Drink</li>
                    <li @click="setClassici()" class="col-12 col-md elemento ">Classici</li>
                    <li @click="setBevande()" class="col-12 col-md elemento ">Bevande</li>
                    <li @click="setAmari()" class="col-12 col-md elemento ">Amari</li>
                    <li @click="setDistillati()" class="col-12 col-md elemento ">Distillati</li>
                    <li @click="setGin()" class="col-12 col-md elemento ">Gin</li>
                </ul>
            </div>
        </div>
    </div>
          <div class="container-fluid">
          <div v-for="(drink, index) in drinks2" :key="index" class="row">
              <div v-show="drink.title" class="col-12 text-center text-md-start mt-4 mb-4">
                    <h1>{{drink.title}}</h1>
              </div>
              <div class="col-12 col-md-4 ">
                    <h3>{{drink.nome}}</h3>
              </div>
              <div class="col-12 col-md-4 ">
                        <h5 v-if="drink.condimenti == null"></h5>
                        <h5 v-else>Ingredienti</h5>
                        <p>{{drink.condimenti}}</p>
              </div>
              <div class="col-12 col-md-4 mb-4">
                        <div>€ {{drink.prezzo}}</div>
              </div>
          </div>
      </div>
          <PreFooter class="prefooter"/>
</div>
  
</template>

<script>

import PreFooter from "@/components/PreFooter.vue";


export default {
name:"DrinkVue",
components: {
    PreFooter
},
data() { return {
    elementi: null,
    setter : "All",
    drinks2: [],
    drinks: [
        // nostri
        {
            nome: "Blue summer",
            categoria: "nostri",
            condimenti: "(lime, cordial lime & blu curacao, rum blanco)",
            prezzo: 8,
            title: "I nostri drink"
        },
        {
            nome: "Green Woods",
            categoria: "nostri",
            condimenti: "(lime,zucchero all’alloro, melone,gin, dash di midori)",
            prezzo: 8
        },
        {
            nome: "Strawberry Basil...Forever",
            categoria: "nostri",
            condimenti: "(zucchero,lime, fragole, vodka al basilico, soda al pompelmo)",
            prezzo: 8
        },
        {
            nome: "Butter Trid",
            categoria: "nostri",
            condimenti: "(limone,ananas,bourbon al burro, dash di angostura)",
            prezzo: 8
        },
        {
            nome: "Fresh Alexander",
            categoria: "nostri",
            condimenti: "(limone, orzata,brandy, stillabunt, bitter al cioccolato, ginger beer)",
            prezzo: 8
        },

        // drink classici

        {
            nome: "Negroni",
            categoria: "classici",
            condimenti: "(bitter campari, vermouth rosso, gin)",
            prezzo: 6,
            title: "Drink Classici"
        },
        {
            nome: "Americano",
            categoria: "classici",
            condimenti: "(bitter campari, vermouth rosso, soda)",
            prezzo: 6,
        },

        // bevande

        {
            nome: "Forst 1857 33cl",
            categoria: "bevande",
            prezzo: 3,
            title: "Bevande"
        },

        // amari

        {
            nome: "amaro del capo",
            categoria: "amari",
            prezzo: 3,
            title: "Amari"
        },

        // distillati

        {
            nome: "grappa barricata",
            categoria: "distillati",
            prezzo: 3,
            title: "Distillati"
        },

        // gin

         {
            nome: "tanqueray",
            categoria: "gin",
            prezzo: 6,
            title: "Gin"
        },
        
    ]

}
},
mounted() {
    this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }

    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
        console.log(newURL);


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
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }

    this.elementi[0].classList.add("active-element")
    if (this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element") || this.elementi[6].classList.contains("active-element")) {
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
        this.elementi[6].classList.remove("active-element")
    }
    },

    setNostriDrink() {
        this.setter = "nostri";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
        this.elementi[1].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element") || this.elementi[6].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
        this.elementi[6].classList.remove("active-element")
    }
    },

    setClassici() {
        this.setter = "classici";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    this.elementi[2].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element") || this.elementi[6].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
        this.elementi[6].classList.remove("active-element")
    }
    },

    setBevande() {
        this.setter = "bevande";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    this.elementi[3].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element") || this.elementi[6].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
        this.elementi[6].classList.remove("active-element")
    }
    },

    setAmari() {
        this.setter = "amari";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
     this.elementi[4].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[5].classList.contains("active-element") || this.elementi[6].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
        this.elementi[6].classList.remove("active-element")
    }
    },

    setDistillati() {
        this.setter = "distillati";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    this.elementi[5].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[6].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[6].classList.remove("active-element")
    }
    },

    setGin() {
        this.setter = "gin";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    this.elementi[6].classList.add("active-element")
    if (this.elementi[0].classList.contains("active-element") || this.elementi[1].classList.contains("active-element") || this.elementi[2].classList.contains("active-element") || this.elementi[3].classList.contains("active-element") || this.elementi[4].classList.contains("active-element") || this.elementi[5].classList.contains("active-element")) {
        this.elementi[0].classList.remove("active-element")
        this.elementi[1].classList.remove("active-element")
        this.elementi[2].classList.remove("active-element")
        this.elementi[3].classList.remove("active-element")
        this.elementi[4].classList.remove("active-element")
        this.elementi[5].classList.remove("active-element")
    }
    },
}
}
</script>

<style>

  .nav-2 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
    font-weight: 700;
  }

    .nav-drink {
    background-color: #d91286;
  }

</style>