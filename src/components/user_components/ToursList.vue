<template>
  <div class="toursList">
    <ul>
      <li v-for="tour in tours" :key="tour">
        <Tour :tour="tour" />
      </li>
    </ul>
  </div>
</template>

<script>
import Tour from "./Tour.vue";
import tours from "../../data/tours.js";
export default {
  data() {
    return {
      tour: {},
      tours: tours
    };
  },
  components: {
    Tour
  }
};
</script>

<style scoped>
li {
  height: fit-content !important;
}
ul {
  list-style-type: none;
}

.toursList {
  /* height: 72vh !important; */
  overflow: auto;
}

@media screen and (min-width: 700px) {
  .toursList {
    height: 80vh !important;
  }
}
</style>