<template>
  <div class="container">
    <div class="m-3">
      <h2>WatchList 🎬</h2>
       <!-- Champ de texte pour saisir le nom du film, lié à la variable 'nomFilm' avec v-model -->
      <input v-model="nomFilm" type="text" class="form-control" />
      <!-- Bouton pour ajouter un film à la liste, appelant la méthode 'ajouterFilm' au clic -->
      <button @click="ajouterFilm" class="btn btn-primary mt-3">Ajouter à votre liste</button><br>
      <!-- Bouton pour masquer ou afficher la liste, appelant la méthode 'masquerListe' -->
      <!-- Le texte du bouton change dynamiquement selon l'état de 'afficherListe' -->
      <button @click="masquerListe" class="btn btn-primary mt-4">{{ afficherListe ? 'Masquer' : 'Afficher' }} la liste</button><br>
     <!-- Liste des films, affichée seulement si 'afficherListe' est vrai (v-if) -->
      <ul v-if="afficherListe">
        <!-- Boucle (v-for) sur la liste 'mesFilms' pour afficher chaque film avec son index. Un bouton "x" est ajouté à côté de chaque film pour le supprimer (v-on:click supprime le film) -->
        <li v-for="(unFilm, index) in mesFilms">{{index + 1}}-{{unFilm}} <button class="btncible" v-on:click="supprimerFilm(index)">x</button></li>
      </ul>
    </div>  
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

// Variable réactive pour stocker le nom du film à ajouter (initialisée vide)
const nomFilm = ref('')
// Liste pour stocker les films ajoutés
const mesFilms = ref([])
// Variable pour contrôler l'affichage de la liste (initialement 'true', donc liste visible)
const afficherListe = ref(true);

// Fonction pour ajouter un film à la liste. On ajoute le nom du film saisi dans 'mesFilms' puis on réinitialise le champ de texte à vide après l'ajout
function ajouterFilm() {
  mesFilms.value.push(nomFilm.value);
  nomFilm.value = '';
}

// Fonction pour supprimer un film de la liste en fonction de son index. On utilise splice() pour enlever le film correspondant à l'index donné
function supprimerFilm(index){
  mesFilms.value.splice(index, 1);
}

// Fonction pour masquer ou afficher la liste. On bascule la valeur de 'afficherListe' entre true et false
function masquerListe(){
  afficherListe.value = !afficherListe.value;
}

</script>
  
  <style scoped>
  
  .btncible {
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
    margin: 3px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #656c74;
  }

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
  
  .boutons {
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
  