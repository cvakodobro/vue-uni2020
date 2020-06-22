<template>
  <div class="requestsList">
    <div class="head">
      <h2>ARENA RESERVATION</h2>
    </div>
    <div class="body">
      <ul>
        <li v-for="(request, index) in arena_requests" :key="index">
          <ArenaReservation :request="request" v-on:updatearenas="update"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArenaReservation from "./ArenaReservation.vue";
import arena_requests from "../../data/arena_requests.js";
export default {
  data() {
    return {
      arena_requests
    };
  },
  components: {
    ArenaReservation
  },
  methods: {
    update(id) {
        var index = this.arena_requests.findIndex(el=>(el.id==id))
        this.arena_requests.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.requestsList {
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 6px #00000029;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 30px;
}

.body {
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
}

h2 {
  text-align: left;
}


@media screen and (max-width: 700px) {
  .body{
    max-height: initial;
    height: fit-content;
    overflow: none;
  }
}

@media screen and (min-width: 700px) {
  .body {
    height: 75vh !important;
  }
}
</style>