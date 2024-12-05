<template>
  <div class="container">
    <button @click="showAlert">Afficher une alerte</button>

    <input type="text" @keyup="updateMessage" placeholder="Tapez votre texte ici">

    <input type="text" @keyup.esc="updateMessageAndEsc" placeholder="Tapez votre texte ici puis faites esc">

    <p>Texte saisi : {{ message }}</p>
    <p>Texte saisi : {{ escMessage }}</p>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

let message = ref('');
let escMessage = ref('');

let updateMessage = (event) => {
  message.value = event.target.value;
}

let updateMessageAndEsc = (event) => {
  escMessage.value = event.target.value;
}

let showAlert = (event) => {
  alert('Bouton cliqué !');
}

</script>

<style scoped>
/* Custom styles */

body {
  align-items: center;
  display: flex;
}

.container {
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
  background-color: #343a40 ;
}

.text-white {
  color: white ;
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