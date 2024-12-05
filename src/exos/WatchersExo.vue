<template>
  <div class="counter-container">
    <button class="plus" @click="increment">+1</button>
    <button class="plus" @click="incrementFive">+5</button>
    <p>Le nombre : {{ count }}</p>
    <p>{{ texteIndice }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref, watch, computed } from 'vue'

let count = ref(0);

let increment = () => {
  count.value ++;
};

let incrementFive = () => {
  count.value += 5;
};

let texteIndice = ref("Essaie encore");

let indiquerNombre = computed(() => {
  if (newValue > 7) {
    texteIndice.value = "Tu as dépassé le nombre mystère...";
  } else if (newValue === 7) {
    texteIndice.value = "Gagné !";
  }
});

watch(count, (newValue) => {
  if (newValue >= 30) {
    setTimeout(() => {
      count.value = 0;
      texteIndice.value = "Essaie encore";
    }, 5000);
  }
});

</script>

<style scoped>

body {
  align-items: center;
  display: flex;
}

.counter-container {
  margin-top: -100px;
  margin-left: 300px;
  display: flex;
  align-items: center;
  gap: 20px; /* Espace entre les éléments */
}

button {
  padding: 8px 17px; /* Pour rendre les boutons un peu plus grands */
  border: none;
  font-size: x-large;
  border-radius: 10px;
}

.moins {
  color: white;
  background-color: red;
}

.plus {
  color: white;
  background-color: rgb(38, 201, 38);
}

p {
  margin: 0; /* Supprimer la marge par défaut autour du paragraphe */
}

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