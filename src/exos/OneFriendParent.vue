<template>
  <div>
    <OneFriend unAmiName="Marie" unAmiPhone="30303003" unAmiMail="marie.dubard@gmail.com" unAmiPremium="abc" /><br>
    <OneFriend unAmiName="Geneviève" unAmiPhone="098765234" unAmiMail="jeunevieilledu31@hotmail.fr" unAmiPremium="abc" /><br>
    <OneFriend unAmiName="Pierre" unAmiPhone="0654852222" unAmiMail="pierrotlefou@hotmail.fr" unAmiPremium="xyz" />
  </div>
</template>

<script>
import OneFriend from './OneFriend.vue';

export default {
  components: {
    OneFriend // Importation du composant OneFriend
  }
}
</script>