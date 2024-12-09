<template>
<!--Section d'entrée de texte pour ajouter un film-->
<!--Input lié à la variable newFilm, l'utilisateur peut saisir un film-->
<!-- v-model permet de lier la valeur de l'input à la variable `newFilm` -->
<!-- Quand l'utilisateur appuie sur la touche Enter, la fonction `addFilm` est appelée -->
 <div class="titre">Watchlist</div>
 <div class="ajoutFilm">
  <input type="text" placeholder="Ajouter un film à ma liste" v-model="newFilm" @keyup.enter="addFilm">
 </div>


 <!-- v-for itère sur chaque film dans la liste `films` -->
 <!-- `key` unique pour chaque élément, utile pour la gestion du DOM en Vue -->
 <!--  {{ film }} Affiche le nom du film -->
 <div class="col-md-6">
          <ul class="list-group">
            <li 
              v-for="(film, index) in films" 
              :key="index" 
              class="list-group-item"
              @click="removeFilm(index)">
              {{ film }}
            </li>
          </ul>
          <!-- Message affiché si aucun film n'est ajouté -->
          <p v-if="films.length === 0" class="mt-3 alert alert-warning">
            Aucun film encore ajouté.
          </p>
          <!-- Bouton pour ajouter un film, lié à la même fonction `addFilm` -->
          <button class="btn btn-primary mt-3" @click="addFilm">Ajouter un film</button>
        </div>

</template>

<script setup>
import { ref } from 'vue';

// Données réactives
const films = ref([]); // `films` est un tableau vide initialement, il contiendra les films
const newFilm = ref(''); // `newFilm` est une variable pour stocker temporairement la valeur de l'input

// Ajouter un film
function addFilm() {
  if (newFilm.value.trim() !== '') {
    films.value.push(newFilm.value);  // On ajoute le film dans le tableau `films`
    newFilm.value = ''; // On réinitialise l'input après l'ajout du film
  }
}

function removeFilm (index) {
  films.value.splice(index, 1); // Utilise `splice` pour enlever l'élément à l'index donné
}


</script>

<style scoped>

.titre {
  font-size: xx-large;
  font-weight: 800;
  padding: 50px;
}

.ajoutFilm {
  padding: 0 50px 30px;
  display: flex;
  width: 500px;
  align-items: center;
}

input {
  width: 800px;
  padding: 10px;
  border-radius: 10px ;
}

.mt-3.alert.alert-warning {
  background: rgb(173, 173, 219);
  border: solid 2px rgb(64, 64, 155);
  color: rgb(64 , 64, 155);
}

button {
  background: rgb(64, 64, 155);
  border: none;
  outline: none;
}

.col-md-6 {
  padding: 0 50px 50px;
  width: 500px;
}

/* Styles personnalisés */
.display-4 {
  font-size: 2.5rem;
}

.fw-bold {
  font-weight: bold;
}

.mb-5 {
  margin-bottom: 3rem;
}

.bg-dark {
  background-color: #343a40 !important;
}

.text-white {
  color: white !important;
}
</style>
