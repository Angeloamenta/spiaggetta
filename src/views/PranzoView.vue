<template>
  <div>
      Insalate
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
name: "PranzoView",
data() { return {
    piatti: [
        {
            nome: "Bresaola",
            categoria: "insalata",
            condimenti: "iceberg, radicchio,valeriana, datterino, grana, bresaola",
            prezzo: 10
        },
        {
            nome: "Tonno",
            categoria: "insalata",
            condimenti: "iceberg,rucola, valeriana, tonno, olive, mozzarella",
            prezzo: 10
        },
        {
            nome: "Greca",
            categoria: "insalata",
            condimenti: "iceberg,cipolla,olive,cetriolo,datterino,feta,salsa yogurt",
            prezzo: 8
        },
    ]

}
}
}
</script>

<style>

</style>