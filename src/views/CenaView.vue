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
      <div class="container-fluid menu-bg padding-200">
          <div v-for="(piatto, index) in piatti2" :key="index" class="row mb-4">
              <div v-show="piatto.title" class="col-12 text-center mt-3 mb-5 title-show">
                    <h1 class="piatto-title" >{{piatto.title}}</h1>
                    <div class="line-cena"></div>
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
            prezzo:"5,50",
            title: "Pizze Classiche",
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
            nome: "Margherita",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, basilico, olio evo",
            prezzo:"6,50",
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
            nome: "Norma",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, melanzana fritta, ricotta salata, olio evo",
            prezzo:8,
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
            nome: "Funghi",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, funghi champignon, olio evo",
            prezzo:"7,50",
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
            nome: "Napoletana",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, olive, capperi, acciughe, basilico, olio evo",
            prezzo:"7,50",
            anidride: false,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Tonno",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, tonno, cipolla, olio evo",
            prezzo:"7,50",
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Semplice",
            categoria: "pizza",
            condimenti: "mozzarella di bufala, datterino in cottura, basilico, olio evo ",
            prezzo:8,
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
            nome: "Crudaiola",
            categoria: "pizza",
            condimenti: "mozzarella fior di latte, prosciutto crudo, datterino, basilico, olio evo (tutto a crudo)",
            prezzo:8,
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
            nome: "Chips",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, wurstel, patatine fritte*, olio evo",
            prezzo:"8,50",
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
            nome: "4 Formaggi",
            categoria: "pizza",
            condimenti: "mozzarella, gorgonzola, grana, emmental, basilico, olio evo",
            prezzo:9,
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
            nome: "Bufala",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella di bufala, basilico, olio evo",
            prezzo:8,
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
            nome: "4 Stagioni",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, cotto, funghi, olive, olio evo",
            prezzo:"8,50",
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
            nome: "Capricciosa",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, uovo, piselli, olive, cotto, wurstel, olio evo",
            prezzo:9,
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
            uova: true,
            allergeni: true,
        },
        {
            nome: "Diavola",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, salame piccante, basilico, olio evo",
            prezzo:"7,50",
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
            nome: "Valtellina",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, bresaola, rucola, grana, olio evo",
            prezzo:10,
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
            nome: "Parmigiana",
            categoria: "pizza",
            condimenti: "salsa di pomodoro, mozzarella, uovo, prosciutto cotto, melanzana fritta, grana, olio evo",
            prezzo:"9,50",
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
            uova: true,
            allergeni: true,
        },
        {
            nome: "Speck",
            categoria: "pizza",
            condimenti: "mozzarella, radicchio, speck, datterino, olio evo",
            prezzo:9,
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
            nome: "Grigliata",
            categoria: "pizza",
            condimenti: "mozzarella, melanzana arrosto, zucchine arrosto, radicchio, datterino, olio evo",
            prezzo:"9.50",
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
            nome: "Pachino",
            categoria: "pizza",
            condimenti: "Mozzarella di bufala, prosciutto crudo, datterino, basilico, olio evo",
            prezzo:10,
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
            nome: "Gustosa",
            categoria: "pizza",
            condimenti: "mozzarella, patate al forno, rosmarino, salsiccia fresca, grana a scaglie, olio evo",
            prezzo:"9,50",
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
        // pizze speciali

        {
            nome: "sapori siculi ",
            categoria: "pizza speciale",
            condimenti: "salsa di pomodoro, mozzarella, salsiccia fresca, finocchietto selvatico, mollica condita, olio evo",
            prezzo:"10,50",
            title: "Pizze Speciali",
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
            nome: "Carciofina",
            categoria: "pizza speciale",
            condimenti: "mozzarella, crema di carciofi, speck, datterino",
            prezzo:"10,50",
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
            nome: "Bronte",
            categoria: "pizza speciale",
            condimenti: "mozzarella, crema di pistacchio, mortadella, burrata, basilico, olio evo",
            prezzo:13,
            anidride: true,
            arachidi: true,
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
            nome: "La Fornace",
            categoria: "pizza speciale",
            condimenti: "mozzarella, capocollo di suino nero, datterino, burrata, grana, basilico, olio evo ",
            prezzo:"13,50",
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
            nome: "Manza",
            categoria: "pizza speciale",
            condimenti: "mozzarella, carpaccio di manzo, rucola, datterino, grana, olio evo ",
            prezzo:"12,50",
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
            nome: "Nerano",
            categoria: "pizza speciale",
            condimenti: "mozzarella, zucchina fritta, salame di cinghiale, scaglie di grana, pepe nero, olio evo",
            prezzo:"12,50",
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
            nome: "Ionica",
            categoria: "pizza speciale",
            condimenti: "mozzarella, confettura di fichi, capocollo di suino nero, rucola, datterino, grana, olio evo",
            prezzo:"13,50",
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

        // pizze di mare

        {
            nome: "la spiaggetta ",
            categoria: "pizza mare",
            condimenti: "salsa di pomodoro, polpo*, gamberetti*, cozze*, gamberoni*, prezzemolo, olio evo",
            prezzo:16,
            title: "Pizze Di Mare",
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: true,
            guscio: false,
            latte: false,
            lupini: false,
            molluschi: true,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Sampieruoti",
            categoria: "pizza mare",
            condimenti: "zucchina fritta, mozzarella, gamberoni*, prezzemolo, olio evo",
            prezzo:"14,50",
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: true,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "U puzzu ra za vanna",
            categoria: "pizza mare",
            condimenti: "mozzarella, bottarga di tonno grattuggiata, scorza di limone, datterino, menta, olio evo",
            prezzo:"12,50",
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: true,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },
        {
            nome: "Il molo",
            categoria: "pizza mare",
            condimenti: "mozzarella, datterino in cottura, seppie* arrosto, patate al forno, prezzemolo, olio evo",
            prezzo:"13,50",
            arachidi: false,
            cereali: true,
            crostacei: true,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },

        // piatti unici

        {
            nome: "IL VEGETARIANO",
            categoria: "piatti unici",
            condimenti: "datterino confit, radicchio grigliato, melanzana grigliata, burrata di bufala, basilico, crostoni, olio evo",
            prezzo:13,
            title: "Piatti unici",
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
            nome: "IL CARNIVORO",
            categoria: "piatti unici",
            condimenti: "datterino confit, carne salada, mozzarella di bufala, patatine fritte*, crostoni, olio evo",
            prezzo:15,
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
            nome: "LA PESCATRICE",
            categoria: "piatti unici",
            condimenti: "datterino confit, tartare di salmone, avocado, zucchine grigliate, crostoni, olio evo",
            prezzo:15,
            anidride: true,
            arachidi: false,
            cereali: true,
            crostacei: false,
            guscio: false,
            latte: true,
            lupini: false,
            molluschi: false,
            pesce: true,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: true,
        },

        // frigitoria

        {
            nome: "patatine fritte*",
            categoria: "friggitoria",
            prezzo:4,
            title: "Friggitoria",
            anidride: false,
            arachidi: false,
            cereali: false,
            crostacei: false,
            guscio: false,
            latte: false,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
            allergeni: false,
        },

        // INSERIRE DESSERT

        {
            nome: "semifreddo “croccante al pistacchio”",
            categoria: "dessert",
            prezzo:7,
            title: "Dessert",
            anidride: false,
            arachidi: false,
            cereali: false,
            crostacei: false,
            guscio: false,
            latte: false,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
        },
        // {
        //     nome: "geometrie di cioccolato e pere”",
        //     categoria: "dessert",
        //     prezzo:7,
        //     anidride: false,
        //     arachidi: false,
        //     cereali: false,
        //     crostacei: false,
        //     guscio: false,
        //     latte: false,
        //     lupini: false,
        //     molluschi: false,
        //     pesce: false,
        //     sedano: false,
        //     senape: false,
        //     sesamo: false,
        //     soia: false,
        //     uova: false,
        // },
        {
            nome: "semifreddo “croccante alla mandorla”",
            categoria: "dessert",
            prezzo:6,
            anidride: false,
            arachidi: false,
            cereali: false,
            crostacei: false,
            guscio: false,
            latte: false,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
        },
        {
            nome: "semifreddo “agrumi di sicilia”",
            categoria: "dessert",
            prezzo:6,
            anidride: false,
            arachidi: false,
            cereali: false,
            crostacei: false,
            guscio: false,
            latte: false,
            lupini: false,
            molluschi: false,
            pesce: false,
            sedano: false,
            senape: false,
            sesamo: false,
            soia: false,
            uova: false,
        },
        
    ]

}
},
mounted() {
    this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }

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