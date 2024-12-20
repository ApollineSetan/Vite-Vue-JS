<template>
  <div>
    <h1>Liste des Pokémon</h1>

<!-- Liste des Pokémon, affichée seulement si la variable 'pokemons' contient des éléments -->
<!-- Parcours des Pokémon et affichage de leur nom -->
<!-- Message affiché si la liste des Pokémon est vide (chargement en cours) -->

    <ul v-if="pokemons.length">
      <li v-for="(pokemon, index) in pokemons" :key="index">
        {{ pokemon.name }}
      </li>
    </ul>
    <p v-else>Chargement des Pokémon...</p>

<!-- Affichage des informations météo si la variable 'meteo' contient des données -->
<!-- Affichage des températures et des conditions météo -->
<!-- Message affiché si les données météo ne sont pas encore disponibles (chargement en cours) -->
<br>

    <h2>Météo à Toulouse</h2>
    <div class="meteocard" v-if="meteo">
      <p>Température max.: {{ meteo.tmax }} °C</p>
      <p>Température min.: {{ meteo.tmin }} °C</p>
      <p>Température actuelle: {{ meteo.temp }} °C</p>
      <p>Condition météo: {{ meteo.condition }}</p>
    </div>
    <p v-else>Chargement des données météo...</p>
  </div>
</template>


<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Fonction pour récupérer les Pokémon
async function fetchPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();
  return data.results;
}

// Fonction pour récupérer les informations météo
async function fetchMeteo() {
  const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
  const data = await response.json();
  return {
    temp: data.current_condition.tmp,
    condition: data.current_condition.condition,
    tmin: data.fcst_day_0.tmin,
    tmax: data.fcst_day_0.tmax
  };
}

// Variables pour stocker les données
// Liste des Pokémon, initialisée vide
// Les données météo, initialisées à null
export default {
  name: 'App',
  setup() {
    const pokemons = ref([]);
    const meteo = ref(null);

// Exécution des fonctions lors du montage du composant
    onMounted(async () => {
      pokemons.value = await fetchPokemon();
      meteo.value = await fetchMeteo();
    });

// Utiliser onBeforeUnmount pour effectuer une action avant que le composant ne soit démonté
    onBeforeUnmount(() => {
      console.log("Le composant est sur le point d'être démonté.");
    });

// Retourner les valeurs pour les utiliser dans le template
// Renvoie la liste des Pokémon et les données météo
    return {
      pokemons,
      meteo,
    };
  },
};
</script>




<style scoped>
@import url('https://fonts.cdnfonts.com/css/pokemon-solid');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h1 {
  font-family: 'Pokemon Solid', sans-serif;
  color: rgb(255, 217, 0); 
  letter-spacing: 5px;
  -webkit-text-stroke: 3px rgb(24, 60, 180);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #3f3f3f;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 20px;
}

ul {
  border: solid 5px rgb(24, 60, 180);
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  list-style-type: disc;
}

li {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  padding-left: 20px;
}

.meteocard {
  text-align: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  background: #a4e9de8e;
  max-width: 400px;
  border: solid 2px #228a795d;
  border-radius: 5px;
  padding: 10px 10px 3px 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}

</style>