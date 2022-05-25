<template>
  <div>
      pizze
      <ul>
         <li v-for="(piatto, index) in piatti" :key="index">
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
name:"CenaView",
data() { return {
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


        // pizze di mare


        // piatti unici

        // frigitoria
    ]

}
}
}
</script>

<style>

</style>