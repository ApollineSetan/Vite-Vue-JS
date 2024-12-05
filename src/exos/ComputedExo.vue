<template>
  <div class="counter-container">
    <button class="moins" @click="decrement">-</button>
    <button class="plus" @click="increment">+</button>
    <p>Nombre actuel : {{ count }}</p>
    <p>{{ fonctionBug }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue'


let fonctionBug = computed(() => {
    let userName = "";
    console.log("Fonction bug executée");
    if (userName){
      return "test1";
    } else {
      return "test2";
    }
});

function explodes() {
  if (count.value == 10){
    alert("Attention, tu es gourmand!");
  }
}

function explodesLeRetour() {
  if (count.value == 20){
    alert("Arrête, j'ai dis !");
  }
}

let count = ref(0);

let increment = () => {
  count.value ++;
  explodes();
  explodesLeRetour();
};

let decrement = () => {
  count.value --;
  explodes();
  explodesLeRetour();
};


</script>

<style scoped>
/* Custom styles */

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