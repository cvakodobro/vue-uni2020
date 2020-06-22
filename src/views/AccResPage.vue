<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <UserNav :current-comp="currentComp"></UserNav>
    </div>
    <div class="container">
      <AccRes />
    </div>
  </div>
</template>

<script>
import AccRes from "../components/user_components/Acc&Res.vue";
import UserNav from "../components/user_components/UserNav.vue";

export default {
  data() {
    return {
      currentComp: "acc_res"
    };
  },

  components: {
    UserNav,
    AccRes
  }
};
</script>