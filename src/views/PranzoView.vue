<template>
  <div>
      <div class="nav-2">
          <div>Cosa cerchi?</div>
          <span @click="setAll()">all</span> <span @click="setInsalata()">insalate</span> <span @click="setPiatti()">piatti</span>
      </div>
      <ul>
         <li v-for="(piatto, index) in piatti2" :key="index">
         <h1>{{piatto.title}}</h1>
         <h3>{{piatto.nome}}</h3>
         <h5>Condimenti</h5>
         <p>{{piatto.condimenti}}</p>
         <div>€ {{piatto.prezzo}}</div>
         </li> 
      </ul>
  </div>
</template>

<script>
export default {
name: "PranzoView",
data() { return {
    
    setter : "All",
    piatti2: [],
    piatti: [


        {
            nome: "Bresaola",
            categoria: "insalata",
            condimenti: "iceberg, radicchio,valeriana, datterino, grana, bresaola",
            prezzo: 10,
            title: "Insalate"
        },
        {
            nome: "Tonno",
            categoria: "insalata",
            condimenti: "iceberg,rucola, valeriana, tonno, olive, mozzarella",
            prezzo: 10
        },
        {
            nome: "Greca",
            categoria: "piatti",
            condimenti: "iceberg,cipolla,olive,cetriolo,datterino,feta,salsa yogurt",
            prezzo: 8,
            title: "I Nostri piatti"
        },

        {
            nome: "Caprese",
            categoria: "piatti",
            condimenti: "datterino, fior di latte, basilico",
            prezzo: 8
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
},

methods: {
    setAll() {
        this.setter = "All";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

    setInsalata() {
        this.setter = "insalata";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

      setPiatti() {
        this.setter = "piatti";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

}
}
</script>

<style lang="scs" scoped>



</style>>


