<template>
  <div class="tour">
    <div class="img">
      <img :src="tour.img" />
      <Like :tour="tour" />
    </div>
    <div class="about">
      <div class="head">{{tour.name}}</div>
      <div class="details">{{tour.text}}</div>
      <div>
        <button class="show-more" @click="active=!active">show more...</button>
      </div>
    </div>

    <!-- <modal
      class="modal-tour"
      :name="'showMore'+tour.id"
      height="auto"
      width="50%"
      :scrollable="true"
    >
      <div slot="top-right">
        <button class="closebtn" @click="$modal.hide('showMore'+tour.id)">X</button>
      </div>
      <div class="modal-img">
        <img :src="tour.img" />
        <Like :tour="tour" />
      </div>
      <div class="modal-about">
        <div class="modal-head">{{tour.name}}</div>
        <div class="modal-details">{{tour.text}}</div>
      </div>
    </modal>-->

    <vs-popup class="modal" :title="tour.name" :active.sync="active">
      <div class="modal-img">
        <img :src="tour.img" />
        <Like :tour="tour" />
      </div>
      <div class="modal-about">
        <div class="modal-head">{{tour.name}}</div>
        <div class="modal-details">{{tour.text}}</div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import Like from "./Like.vue";

export default {
  data() {
    return {
      active: false
    };
  },
  props: ["tour"],
  components: {
    Like
  }
};
</script>

<style scoped>

.show-more{
      border: none;
    background: #e44b4b;
    border-radius: 15px;
    font-size: 14px;
    padding: 5px 10px;
    color: white;
    float: right;
    margin-top: 10px;
}
.modal{
  color: #6A6A6A;
}
.vs-header {
  background: #e44b4b;
}
.modal-img {
  width: 65%;
  margin-left: 18%;
  padding-top: 20px;
}

.modal-about {
  padding: 20px;
}

.modal-details {
  text-align: justify;
}

.modal-head {
  font-weight: 500;
  font-size: 1.5em;
  padding-bottom: 5px;
}
.modal-img img {
  width: 100%;
}

.tour {
  display: flex;
  text-align: left;
  padding: 20px 30px 20px 30px;
  margin: 20px 0 20px 0px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  opacity: 1;
  flex-wrap: wrap;
  justify-content: center;
}
.about {
  display: flex;
  flex-direction: column;
  max-width: 55%;
  padding-left: 20px;
  justify-content: center;
  text-align: justify;
}

.details {
  height: 10vw;
  overflow: hidden;
}

.img {
  max-width: 45%;
}

img {
  border-radius: 15px;
  height: auto;
  max-width: 100%;
}

.head {
  font-size: 1.5em;
  font-weight: 500;
  padding-bottom: 5px;
  text-align: left;
}

@media screen and (max-width: 700px) {
  .img {
    max-width: 100%;
  }
  .about {
    max-width: 100%;
    padding: 0;
  }
  .details {
    height: 120px;
  }
}

@media screen and (max-width: 920px) and (min-width: 700px) {
  .details {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .closebtn {
    color: gray;
  }
}
</style>