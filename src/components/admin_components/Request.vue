<template>
  <div>
    <div class="request" v-on:click="active=!active" ref="req">
      <div class="details">
        <div>
          <h4>{{request.username}}</h4>
        </div>
        <div>
          <h4 v-if="request.restaurant">Request for restaurant change</h4>
          <h4 v-if="!request.restaurant">Request for accommodation change</h4>
        </div>
        <div></div>
      </div>
    </div>
    <vs-popup class="holamundo" title="Request details" :active.sync="active">
      <div class="info">
        <h3>Request from:</h3>
        <h4>{{request.surname}}, {{request.name}}</h4>
        <h3 v-if="request.restaurant">Current restaurant:</h3>
        <h3 v-if="!request.restaurant">Current accommodation:</h3>
        <h4>{{request.current}}</h4>
        <h3 v-if="request.restaurant">New restaurant:</h3>
        <h3 v-if="!request.restaurant">New accommodation:</h3>
        <h4>{{request.new}}</h4>
        <div class="message">
          <p>{{request.message}}</p>
        </div>
        <div v-if="request.active" class="yesno">
          <button class="lmodal yes" @click="process(true)">Accept</button>
          <div class="between"></div>
          <button class="lmodal no" @click="process(false)">Deny</button>
        </div>
        <div v-if="!request.active">
          <h3 v-if="request.status">Request accepted</h3>
          <h3 v-if="!request.status">Request denied</h3>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import users from "../../data/usersData.js";
import restaurants from "../../data/restaurants.js"
import accommodations from "../../data/accommodations.js"
export default {
  data() {
    return {
      active: false,
      users,
      restaurants,
      accommodations
    };
  },
  props: ["request"],
  mounted() {
    if (this.request.active) {
      this.$refs["req"].style.background = "#e44b4b";
      this.$refs["req"].style.color = "white";
    } else {
      this.$refs["req"].style.background = "#E9E9E9";
    }
  },
  beforeUpdate() {
    if (this.request.active) {
      this.$refs["req"].style.background = "#e44b4b";
      this.$refs["req"].style.color = "white";
    } else {
      this.$refs["req"].style.background = "#E9E9E9";
      this.$refs["req"].style.color = "#6A6A6A";
    }
  },

  methods: {
    process(status) {
      console.log(status);
      var user = this.users.find(user => (user.username == this.request.username));
      if (this.request.restaurant) {
        var newobj1 = this.restaurants.find(restaurant => (restaurant.name == this.request.new))
        user.restaurant=newobj1
      }
      else {
        var newobj2 = this.accommodations.find(acc => (acc.name == this.request.new))
        user.accommodation=newobj2
      }

      this.request.active = false;
      this.request.status = status;
      this.active = false;
      this.$emit("sort");
    }
  }
};
</script>

<style scoped>
.request {
  box-shadow: 0px 5px 6px #00000029;
  height: auto;
  width: 100%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 10px;
}

.details {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.message {
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  background: #e9e9e9;
  width: 100%;
  height: 70px;
  padding: 10px 20px 10px 20px;
}
</style>