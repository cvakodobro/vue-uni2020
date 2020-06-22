<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <UserNav :current-comp="currentComp"></UserNav>
    </div>
    <div class="container">
      <MeetBelgrade />
    </div>
  </div>
</template>

<script>
import MeetBelgrade from "../components/user_components/MeetBelgrade.vue";
import UserNav from "../components/user_components/UserNav.vue";

export default {
  data() {
    return {
      currentComp: "meetbelgrade"
    };
  },

  components: {
    UserNav,
    MeetBelgrade
  }
};
</script>