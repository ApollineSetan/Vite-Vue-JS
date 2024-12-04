<template>
  <div>
    <h5>Attribute Binding Mode : Composition</h5>
    <!-- Ici on relie l'attribut href avec notre variable leLien -->
    <a v-bind:href="leLien" class="text-center">LIEN DYNAMIQUE</a>
    <!-- Notation raccourcie -->
    <a :href="leLien" class="text-center">LIEN DYNAMIQUE</a>
  </div>
</template>


<script setup lang='js'>
import { ref } from 'vue'

const leLien = ref('https://www.google.com')

</script>

<style scoped>
/* Custom styles */
.bg-dark {
  background-color: #343a40 !important;
}

.text-white {
  color: white !important;
}

.display-4 {
  font-size: 3rem;
}

.fw-bold {
  font-weight: bold;
}

.mt-3 {
  margin-top: 1rem;
}

.mb-5 {
  margin-bottom: 3rem;
}
</style>