<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <UserNav :current-comp="currentComp"></UserNav>
    </div>
    <div class="container">
      <Games />
    </div>
  </div>
</template>

<script>
import Games from "../components/user_components/Games.vue";
import UserNav from "../components/user_components/UserNav.vue";

export default {
  data() {
    return {
      currentComp: "games"
    };
  },

  components: {
    UserNav,
    Games
  }
};
</script>

