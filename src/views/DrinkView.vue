<template>
<div>
    Drink
      <ul>
         <li v-for="(drink, index) in drinks" :key="index">
         <h3>{{drink.nome}}</h3>
         <h5>Condimenti</h5>
         <p>{{drink.condimenti}}</p>
         <div>€ {{drink.prezzo}}</div>
         </li> 
      </ul>
</div>
  
</template>

<script>
export default {
name:"DrinkVue",
data() { return {

    drinks: [
        // nostri
        {
            nome: "Blue summer",
            categoria: "nostri",
            condimenti: "(lime, cordial lime & blu curacao, rum blanco)",
            prezzo: 8
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
            condimenti: "(limone,orzata,brandy,stillabunt,bitter al cioccolato, ginger beer)",
            prezzo: 8
        },
    ]

}
}
}
</script>

<style>

</style>