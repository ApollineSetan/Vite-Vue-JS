<template>
  <div>
    <div class="container py-5">
      <h1 class="text-center mb-4">Page des détails</h1>
      <div class="card-body">
        <h5 class="card-title">ID de l'élément en question : {{ id }}</h5>
        <p class="card-text">Voici une petite description de l'élément avec l'ID {{ id }}</p>
        <router-link class="btn btn-primary" to="/lesson-router">Retour à la liste</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>

const props = defineProps(['id']);

</script>



<style scoped lang="css">
.card {
  max-width: 500px;
  margin: 0 auto;
}
</style>