<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <UserNav :current-comp="currentComp"></UserNav>
    </div>
    <div class="container">
      <MyProfile/>
    </div>
  </div>
</template>

<script>
import MyProfile from "../components/MyProfile.vue";
import UserNav from "../components/user_components/UserNav.vue";

export default {
  data() {
    return {
      currentComp: "myprofile"
    };
  },

  components: {
    UserNav,
    MyProfile
  }
};
</script>