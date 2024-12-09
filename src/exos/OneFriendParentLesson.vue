<template>
  <div >
    <h1 class="text-center">Ici c'est le composant parent ExoPropsView</h1>
    <OneFriendLesson unAmiName="Dr.Azerty" unAmiPhone="098765234" unAmiMail="a@a.aa"></OneFriendLesson>
    <OneFriendLesson unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex"></OneFriendLesson>
    <OneFriendLesson unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb"></OneFriendLesson>
    <OneFriendLesson unAmiName="Dr.aaaaa" unAmiPhone="5555555" unAmiMail="lol@lol.com"></OneFriendLesson>
  </div>
</template>


<script>
import OneFriendLesson from './OneFriendLesson.vue';

export default {
  components: {
    OneFriendLesson // Importation du composant OneFriend
  }
}
</script>