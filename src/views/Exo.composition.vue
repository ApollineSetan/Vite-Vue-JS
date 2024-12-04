<template>
  <div>
    <div class="mb-4">
    <p>{{ composition1 }}</p>
  </div>

  <div class="mb-4">
    <p>{{ composition2 }}</p>
  </div>

  <div class="mb-4">
    <p>{{ composition3 }}</p>
  </div>

  <div class="mb-4">
    <p>{{ composition4 }}</p>
  </div>
  </div>
</template>

<script setup lang='js'>

import { ref } from 'vue'

const composition1 = ref('Hello World !');
const composition2 = ref(2);
const composition3 = ref([1, 2, 3, 4, 5]);
const composition4 = ref({
  name: 'Vue.js',
  version: '3.2',
  description: 'A progressive JavaScript framework'
});

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