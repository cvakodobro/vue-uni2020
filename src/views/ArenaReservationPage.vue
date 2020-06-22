<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <AdminNav :current-comp="currentComp"></AdminNav>
    </div>
    <div class="container">
      <ArenaReservationList/>
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/admin_components/AdminNav.vue";
import ArenaReservationList from "../components/admin_components/ArenaReservationList.vue"

export default {
  data() {
    return {
      currentComp: "arenareservation"
    };
  },

  components: {
    AdminNav,
    ArenaReservationList
  }
};
</script>

