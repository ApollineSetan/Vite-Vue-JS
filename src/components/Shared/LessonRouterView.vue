<template>
  <div class="container py-5">
    <h2 class="text-center">Sélectionnez une leçon pour voir les détails</h2>
    <ul class="list-group">
      <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-center">
      
      <span>{{ item.name }}</span>

      <router-link 
      :to="{ name: 'detailspage', params: { id: item.id } }" class="btn btn-info">
    
      Voir les détails

      </router-link>

    </li>
    </ul>
  </div>
</template>

<script setup lang='js'>

const items = [
  { id: 1, name: 'Exo 1' },
  { id: 2, name: 'Exo 2' },
  { id: 3, name: 'Exo 3' },
  { id: 4, name: 'Exo 4' }
];

</script>

<style scoped>

.list-group-item {
  margin-bottom: 10px;
}

.btn {
  text-decoration: none;
}

</style>