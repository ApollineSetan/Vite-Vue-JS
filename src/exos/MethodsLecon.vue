<template>
  <div class="bg-info-subtle">
    <h5>Méthods : Mode Composition</h5>
    <p class="text-center">{{ afficherLivreRandom() }}</p>
  </div>
</template>

<script lang='js' setup>
const afficherLivreRandom = () => {
    const nombreRandom = Math.random();
    if (nombreRandom > 0.5) {
        return 'Le livre de La Jungle';
    } 
    else {
        return 'Le Livre de boba Fet';
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