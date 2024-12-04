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

        <!-- Menu déroulant Lessons -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLessons" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Text Inter</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownLessons">
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/lesson-text">Lesson</router-link></a>
            <a class="dropdown-item" href="#"><router-link class="nav-link active" aria-current="page" to="/exos-text">Exercice 1</router-link></a>
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