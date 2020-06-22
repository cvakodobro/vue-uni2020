<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <UserNav :current-comp="currentComp"></UserNav>
    </div>
    <div class="container">
        <Highlights/>
    </div>
  </div>
</template>

<script>
import Highlights from "../components/user_components/Highlights.vue";
import UserNav from "../components/user_components/UserNav.vue";


export default {
  data() {
    return {
      currentComp: "highlights"
    };
  },

  components: {
    UserNav,
    Highlights

  }
};
</script>