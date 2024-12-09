<template>
  <div class="container p-3 my-2 bg-primary-subtle">
      <ul class="list-group">
          <h2 class="list-group-item">{{ unAmiName }}</h2>
          <button @click="afficherDetails" class="btn btn-outline-dark">
              {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
          </button>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{ unAmiPhone }}</li>
              <li class="list-group-item">{{ unAmiMail }}</li>
          </ul>
      </ul>
  </div>
</template>

<script setup lang='js'>
import { ref,defineProps } from 'vue';

const props = defineProps(['unAmiName', 'unAmiPhone', 'unAmiMail']);
const detailsVisibles = ref(false);

function afficherDetails() {
  detailsVisibles.value = !detailsVisibles.value;
}
</script>