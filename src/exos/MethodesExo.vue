<template>
  <div>
    <div class="mb-4">
    <p>{{ getRandomMessage() }}</p>
    </div>
  </div>
</template>

<script setup lang='js'>

import { ref } from 'vue'

let randomnumber = ref(Math.random());

let getRandomMessage = () => {
  if (randomnumber.value > 0.5){
    return "Le nombre est supérieur à 0.5";
  } else {
    return "Le nombre est inférieur à 0.5";
  }
};

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