<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <AdminNav :current-comp="currentComp"></AdminNav>
    </div>
    <div class="container">
      <MyProfile/>
    </div>
  </div>
</template>

<script>
import MyProfile from "../components/MyProfile.vue";
import AdminNav from "../components/admin_components/AdminNav.vue";

export default {
  data() {
    return {
      currentComp: "adminprofile"
    };
  },

  components: {
    AdminNav,
    MyProfile
  }
};
</script>