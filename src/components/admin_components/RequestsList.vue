<template>
  <div class="requestsList">
    <div class="head">
      <h2>REQUESTS</h2>
    </div>
    <div class="body">
      <ul>
        <li v-for="(request, index) in requests" :key="index">
          <Request :request="request" v-on:sort="update"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Request from "./Request.vue";
import requests from "../../data/requests.js";
export default {
  data() {
    return {
      requests
    };
  },
  components: {
    Request
  },
  created() {
    var a = this.requests.filter(req => req.active == true);
    var b = this.requests.filter(req => req.active == false);
    this.requests = a.concat(b);
  },
  methods: {
    update() {
      var a = this.requests.filter(req => req.active == true);
      var b = this.requests.filter(req => req.active == false);
      this.requests = a.concat(b);
    }
  }
};
</script>

<style scoped>
.requestsList {
  border-radius: 27px;
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