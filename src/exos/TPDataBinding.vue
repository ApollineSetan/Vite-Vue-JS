<template>
  <div>
    <h1>TP Data Binding</h1>
      <div class="user">
        <img v-bind:src="photoUser" class="text-center">
        <p>{{ titleUser }}</p>
        <input type="text" id="name" v-bind:value="titleUser">
        <p>{{ ageUser }} ans</p>
        <p>Age + 10 = {{ addTen() }} ans</p>
        <p>Nombre favori : {{ favoriteNumber }}</p>
      </div>
  </div>
</template>


<script setup lang='js'>

import { ref } from 'vue'

const photoUser = ref('https://thispersondoesnotexist.com/');
const titleUser = ref('Dr. Mario');
const ageUser = ref(45);
const favoriteNumber = ref(Math.random());

let addTen = () => {
  let addedAge = ageUser.value + 10;
  return addedAge;
};

</script>

<style scoped>
/* Custom styles */
img {
  margin-top: 15px;
  margin-bottom: 5px;
  width: 100px;
  height: 100px;
}

.user {
  max-width: 300px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border: solid 2px rgb(37, 31, 73);
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
