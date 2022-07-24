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
          <div class="container-fluid menu-bg padding-200">
                <div class="container-fluid">
          <div v-for="(drink, index) in drinks2" :key="index" class="row mb-4">
              <div v-show="drink.title" class="col-12 text-center mt-3 mb-5 title-show">
                    <h1 class="piatto-title">{{drink.title}}</h1>
                    <div class="line-drink"></div>
              </div>
              <div class="col-12 d-flex justify-content-between">
                    <h3 class="title-name">{{drink.nome}}</h3>
                    <h3 class="price"> € {{drink.prezzo}}</h3>
              </div>
              <div class="col-12 col-md-8 ">
                        <!-- <h5 v-if="drink.condimenti == null"></h5>
                        <h5 v-else>Condimenti</h5> -->
                        <p class="condimenti">{{drink.condimenti}}</p>
              </div>
              <div class="col-12">
                <span v-show="drink.allergeni" class="mx-2">Allergeni:</span>
                <img v-show="drink.cereali" src="../assets/cereali.png" alt="">
                <img v-show="drink.crostacei" src="../assets/crostacei.png" alt="">
                <img v-show="drink.uova" src="../assets/uova.png" alt="">
                <img v-show="drink.pesce" src="../assets/pesce.png" alt="">
                <img v-show="drink.arachidi" src="../assets/arachidi.png" alt="">
                <img v-show="drink.soia" src="../assets/soia.png" alt="">
                <img v-show="drink.latte" src="../assets/latte.png" alt="">
                <img v-show="drink.guscio" src="../assets/guscio.png" alt="">
                <img v-show="drink.sedano" src="../assets/sedano.png" alt="">
                <img v-show="drink.senape" src="../assets/senape.png" alt="">
                <img v-show="drink.sesamo" src="../assets/sesamo.png" alt="">
                <img v-show="drink.anidride" src="../assets/anidride solforosa e solfiti.png" alt="">
                <img v-show="drink.lupini" src="../assets/lupini.png" alt="">
                <img v-show="drink.molluschi" src="../assets/molluschi.png" alt="">
              </div>
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
            condimenti: "lime, cordial lime & blu curacao, rum blanco",
            prezzo: 8,
            title: "I nostri drink",
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: true,
            latte: false,
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
            nome: "Green Woods",
            categoria: "nostri",
            condimenti: "lime, zucchero, melone, gin, dash di midori",
            prezzo: 8,
            anidride: false,
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
            nome: "Strawberry Basil...Forever",
            categoria: "nostri",
            condimenti: "zucchero, lime, fragole, vodka al basilico, soda",
            prezzo: 8,
    
        },
        {
            nome: "Butter Trio",
            categoria: "nostri",
            condimenti: "limone, ananas, bourbon al burro, dash di angostura",
            prezzo: 8,
            anidride: false,
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
            nome: "Fresh Alexander",
            categoria: "nostri",
            condimenti: "limone, orzata,brandy, stillabunt, ginger beer",
            prezzo: 8,
            anidride: false,
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

        // drink classici

        {
            nome: "NEGRONI",
            categoria: "classici",
            condimenti: "bitter campari, vermouth rosso, gin",
            prezzo: 6,
            title: "Drink Classici",
            anidride: false,
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
            nome: "AMERICANO",
            categoria: "classici",
            condimenti: "bitter campari, vermouth rosso, soda",
            prezzo: 6,
            anidride: false,
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
            nome: "MI-TO",
            categoria: "classici",
            condimenti: "bitter campari, vermouth rosso",
            prezzo: 6,
            anidride: false,
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
            nome: "APEROL SPRITZ",
            categoria: "classici",
            condimenti: "aperol, prosecco, soda",
            prezzo: 6,
            anidride: false,
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
            nome: "CAMPARI SPRITZ",
            categoria: "classici",
            condimenti: "bitter campari, prosecco, soda",
            prezzo: 6,
            anidride: false,
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
            nome: "HUGO SPRITZ",
            categoria: "classici",
            condimenti: " St. Germain, prosecco, menta",
            prezzo: 7,
            anidride: false,
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
            nome: "MOSCOW MULE",
            categoria: "classici",
            condimenti: "lime, vodka, ginger beer",
            prezzo: 6,
            anidride: false,
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
            nome: "MARGARITA",
            categoria: "classici",
            condimenti: "tequila, triple sec, lime, sale",
            prezzo: 6,
            anidride: false,
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
            nome: "LONG ISLAND ICED TEA",
            categoria: "classici",
            condimenti: "gin,vodka, rum blanco, tequila, lime, coca cola",
            prezzo: 6,
            anidride: false,
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
            nome: "MOJITO ORIGINAL",
            categoria: "classici",
            condimenti: "zucchero, lime, menta, rum blanco, soda",
            prezzo: 6,
            anidride: false,
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
            nome: "MANHATTAN",
            categoria: "classici",
            condimenti: "rye whisky, vermouth rosso, angostura",
            prezzo: 6,
            anidride: false,
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
            nome: "OLD FASHIONED",
            categoria: "classici",
            condimenti: "bourbon whisky, zolletta di zucchero, angostura, soda",
            prezzo: 6,
            anidride: false,
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
            nome: "DAIQUIRI",
            categoria: "classici",
            condimenti: "zucchero, lime, rum anejo",
            prezzo: 6,
            anidride: false,
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
            nome: "GIMLET",
            categoria: "classici",
            condimenti: "zucchero, cordial lime, gin",
            prezzo: 6,
            anidride: false,
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

        // bevande

        {
            nome: "Forst 1857 33cl",
            categoria: "bevande",
            prezzo: 3,
            title: "Bevande"
        },
        {
            nome: "Cere’s 33 cl",
            categoria: "bevande",
            prezzo: 4,
        },
        {
            nome: "Menabrea 33cl",
            categoria: "bevande",
            prezzo: 3,
        },
        {
            nome: "menabrea strong 33cl",
            categoria: "bevande",
            prezzo: 4,
        },
        {
            nome: "coca cola 33cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "fanta 33cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "bevande polara 33cl",
            categoria: "bevande",
            prezzo: 2,
        },
        {
            nome: "acqua naturale 0,75cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "acqua frizzante 0,75cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "coca cola 1lt",
            categoria: "bevande",
            prezzo: 4.5,
        },
        {
            nome: "spina piccola 0,2cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "spina media 0,4cl",
            categoria: "bevande",
            prezzo: 4.5,
        },
        {
            nome: "spina caraffa 1lt",
            categoria: "bevande",
            prezzo: 10,
        },
        {
            nome: "birra n’artigiana oro cl 33",
            categoria: "bevande",
            prezzo: 6,
        },
        {
            nome: "birra n’artigiana rossa cl 33",
            categoria: "bevande",
            prezzo: 6,
        },
        {
            nome: "birra n’artigiana ambrata cl 33",
            categoria: "bevande",
            prezzo: 6,
        },

            // bevande pranzo

        {
            nome: "acqua naturale 0,5cl",
            categoria: "bevande",
            prezzo: 1,
        },
        {
            nome: "acqua frizzante 0,5cl",
            categoria: "bevande",
            prezzo: 1,

        },
        {
            nome: "succo di frutta ace/pesca/ananas",
            categoria: "bevande",
            prezzo: 2,
        },
        {
            nome: "the pesca/limone/ananas",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "coca cola 33cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "Fanta 33cl",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "acqua tonica san pellegrino",
            categoria: "bevande",
            prezzo: 2.5,
        },
        {
            nome: "crodino",
            categoria: "bevande",
            prezzo: 3,
        },
        {
            nome: "campari soda",
            categoria: "bevande",
            prezzo: 3,
        },

        // amari

        {
            nome: "amaro del capo",
            categoria: "amari",
            prezzo: 3,
            title: "Amari"
        },
        {
            nome: "amaro montenegro",
            categoria: "amari",
            prezzo: 3,
        },
        {
            nome: "amaro unnimaffissu",
            categoria: "amari",
            prezzo: 3,
        },
        {
            nome: "unicum",
            categoria: "amari",
            prezzo: 3,
        },
        {
            nome: "Jägermeister",
            categoria: "amari",
            prezzo: 3,
        },
        {
            nome: "limoncello",
            categoria: "amari",
            prezzo: 3,
        },
        {
            nome: "sambuca",
            categoria: "amari",
            prezzo: 3,
        },
        {
            nome: "liquore chinotto",
            categoria: "amari",
            prezzo: 4,
        },

        // distillati

        {
            nome: "grappa barricata",
            categoria: "distillati",
            prezzo: 3,
            title: "Distillati",
            anidride: false,
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
            nome: "grappa bianca",
            categoria: "distillati",
            prezzo: 3,
            anidride: false,
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
            nome: "cognac hennessy",
            categoria: "distillati",
            prezzo: 6,
            anidride: false,
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
            nome: "whisky talisker",
            categoria: "distillati",
            prezzo: 8,
            anidride: false,
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
            nome: "whisky oban",
            categoria: "distillati",
            prezzo: 8,

        },
        {
            nome: "rum pampero anejo",
            categoria: "distillati",
            prezzo: 8,
            anidride: false,
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
            nome: "tequila blanca",
            categoria: "distillati",
            prezzo: 4,
            anidride: false,
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
            nome: "tequila ambrata",
            categoria: "distillati",
            prezzo: 4,
            anidride: false,
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
        

        // gin

         {
            nome: "tanqueray",
            categoria: "gin",
            prezzo: 6,
            title: "Gin",
            anidride: false,
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
            nome: "gin mare",
            categoria: "gin",
            prezzo: 7,
            anidride: false,
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
            nome: "hendrick’s",
            categoria: "gin",
            prezzo: 7,
            anidride: false,
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
            nome: "etneum",
            categoria: "gin",
            prezzo: 8,
            anidride: false,
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
            nome: "mandala gin",
            categoria: "gin",
            prezzo: 8,
            anidride: false,
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
            nome: "old school gin",
            categoria: "gin",
            prezzo: 8,
            anidride: false,
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
            nome: "The baskerville gin",
            categoria: "gin",
            prezzo: 8,
            anidride: false,
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
            nome: "favignana gin",
            categoria: "gin",
            prezzo: 8,
            anidride: false,
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
            nome: "satra",
            categoria: "gin",
            prezzo: 8,
            anidride: false,
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

        
    ]

}
},
mounted() {
    this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }

    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
        const elementi = document.querySelectorAll(".elemento");
         const elementiArray = Array.from(elementi);
         this.elementi = elementiArray
    this.elementi[0].classList.add("active-element")
},

methods: {

    setAll() {
        this.setter = "All";
        this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
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

    .title-show {
        display: flex;
  flex-direction: column;
  }

  .line-drink {
      width: 50%;
      height: 3px;
      align-self: center;
      background-color: #d91286;
  }

</style>