<template>
<nav class="navbar navbar-expand-lg navbar-custom">
  <div class="container">
    <a class="navbar-brand" href="#">Jefff.vue</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link class="nav-link active" aria-current="page" to="/home">Home</router-link></a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLessons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Leçons</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownLessons">
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessonone">L'interpolation de texte</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessontwo">L'interpolation et méthodes</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessonthree">AttributeBinding</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessonfour">V-Model</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessonfive">Watchers</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessonsix">List Rendering</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lessonseven">Props Parent/enfant</router-link></a>
          </div>
        </li>

        <!-- Menu déroulant Lessons -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLessons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Exercices</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownLessons">
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exoone">Ref</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exotwo">Methods</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exothree">databinding</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exofour">DOMEvents</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exofive">DOMEvents2</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exosix">Computed</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exoseven">Watchers</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exoeight">Dynamic Styling</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exonine">Dynamic Styling 2</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exoten">Dynamic Styling 3</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exoeleven">Conditional Rendering</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exotwelve">List Rendering</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exothirteen">List Rendering 2</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exofourteen">Props</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exofifteen">Composant dynamique</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exosixteen">Fetch API</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lesson-router">Exercice particulier</router-link></a>
          </div>
        </li>
      </ul>
      <!-- Formulaire de recherche -->
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

import { RouterLink } from 'vue-router'

</script>

<style scoped lang="css">
</style>