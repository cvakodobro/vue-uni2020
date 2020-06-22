<template>
  <div class="page">
    <div class="vertical">
      <div class="logo"></div>
      <AdminNav :current-comp="currentComp"></AdminNav>
    </div>
    <div class="container">
      <RequestsList/>
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/admin_components/AdminNav.vue";
import RequestsList from "../components/admin_components/RequestsList.vue"

export default {
  data() {
    return {
      currentComp: "requests"
    };
  },

  components: {
    AdminNav,
    RequestsList
  }
};
</script>