<template>
  <div class="like">
    <button @click="like">
      <font-awesome-icon prefix="fas" icon="heart" class="fa" ref="heartcolor" />
      {{tour.likes}}
    </button>
  </div>
</template>

<script>
import currentUser from "../../data/currentUser.js";
export default {
  data() {
    return {
      currentUser
    };
  },
  props: ["tour"],
  mounted() {
    if (this.tour.users.includes(this.currentUser.username)) {
      this.$refs["heartcolor"].style.color = "#e44b4b";
    } else {
      this.$refs["heartcolor"].style.color = "white";
    }
  },
  updated() {
    if (this.tour.users.includes(this.currentUser.username)) {
      this.$refs["heartcolor"].style.color = "#e44b4b";
    } else {
      this.$refs["heartcolor"].style.color = "white";
    }
  },
  methods: {
    like() {
      if (this.tour.users.includes(this.currentUser.username)) {
        this.tour.likes = String(parseInt(this.tour.likes) - 1);
        var index = this.tour.users.indexOf(this.currentUser.user);
        this.tour.users.splice(index, 1);
      } else {
        this.tour.likes = String(parseInt(this.tour.likes) + 1);
        this.tour.users.push(this.currentUser.username);
      }
    }
  }
};
</script>


<style scoped>
button {
  border: none;
  background: none !important;
  font-size: 34px;
  color: white;
}

.like {
  position: relative;
  /* bottom: 50px; */
  margin-top: -66px;
  /* left: 20px; */
  /* font-size: 8px; */
  padding-left: 20px;
  padding-bottom: 20px;
}

.fa {
  font-size: 45px;
}
</style>