<template>
  <div class="container">
    <!-- Affichage du nom de l'ami -->
      <div class="nomAmi"><h3>{{ unAmiName }} <br>{{afficherPremiumTest()}}</h3></div>

    <!-- Logique d'affichage conditionnel des détails -->
    <button @click="toggleDetails">{{ showDetails ? 'Cacher les détails' : 'Afficher les détails' }}</button>

    <!-- Détails affichés uniquement si showDetails est vrai -->
    <div class="infoAmi" v-if="showDetails">
      <p class="phone">Téléphone: {{ unAmiPhone }}</p>
      <p class="mail">Email: {{ unAmiMail }}</p>
      <p class="premium">Type d'ami : {{afficherPremiumTest()}}</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

  // Définition des props avec le tableau
const props = defineProps (['unAmiName', 'unAmiPhone', 'unAmiMail', 'unAmiPremium']);
  
  // Variable pour gérer l'affichage des détails
  let showDetails = ref(true);
  
  // Méthode pour basculer l'affichage des détails
  function toggleDetails(){
    showDetails.value = !showDetails.value;
}

  function afficherPremiumTest () {

    let newValue = '';

    if (props.unAmiPremium === 'abc'){
      newValue = '(premium)';
    } else {
      newValue = '(nul à iéch)';
    }
    return newValue;
  }
</script>

<style scoped>


.container {
  background: #9b9be4;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
}

.nomAmi {
  background: white;
  padding: 5px;
  border: solid 1px grey;
  border-radius: 10px;
  width: 200px;
}

.infoAmi {
  background: white;
  padding: 10px 20px 10px;
  border: solid 1px grey;
  border-radius: 10px;
}

button {
  margin: 5px;
  background: #444480;
  color: white;
  border-radius: 10px;
  max-width: 200px;
}

</style>