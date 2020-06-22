<template>
  <div class="accres">
    <div class="head">
      <h2>ACCOMMODATION & RESTAURANT</h2>
      <div class="cards">
        <!-- <div class="accres-card"> -->
        <vs-card class="cardx">
          <div slot="header">
            <h4>ACCOMMODATION</h4>
          </div>
          <div slot="media"></div>
          <div class="card-body">
            <span>
              {{accommodation.name}}
              <br />
              {{accommodation.address}}
              <br />
              {{accommodation.town}}
            </span>
            <font-awesome-icon prefix="fas" icon="bed" class="fa" />
          </div>
        </vs-card>
        <!-- </div> -->
        <!-- <div class="accres-card"> -->
        <vs-card class="cardx">
          <div slot="header">
            <h4>RESTAURANT</h4>
          </div>
          <div slot="media"></div>
          <div class="card-body">
            <span>
              {{restaurant.name}}
              <br />
              {{restaurant.address}}
              <br />
              {{accommodation.town}}
            </span>
            <font-awesome-icon prefix="fas" icon="hamburger" class="fa" />
          </div>
        </vs-card>
        <!-- </div> -->
      </div>
    </div>
    <div class="body">
      <div class="tabs">
        <vs-tabs :color="color" alignment="fixed">
          <vs-tab label="Map">
            <div class="tab-content">
              <!-- <Map class="travel-map" :markers="this.all" v-on:marker-click="showPopup" /> -->
              <gmap-map :center="center" :zoom="13" style="width: 100%; height: 390px">
                <gmap-custom-marker
                  :key="index"
                  v-for="(m, index) in all"
                  :marker="m.position"
                  @click.native="showPopup(index)"
                >
                  <font-awesome-icon v-if="m.res" prefix="fas" icon="hamburger" class="fa-map" />
                  <font-awesome-icon v-if="!m.res" prefix="fas" icon="bed" class="fa-map" />
                </gmap-custom-marker>
                <gmap-custom-marker :marker="restaurant.position">
                  <font-awesome-icon
                    prefix="fas"
                    icon="hamburger"
                    class="fa-map"
                    style="background: #117FC4"
                  />
                </gmap-custom-marker>
                <gmap-custom-marker :marker="accommodation.position">
                  <font-awesome-icon
                    prefix="fas"
                    icon="bed"
                    class="fa-map"
                    style="background: #117FC4"
                  />
                </gmap-custom-marker>
              </gmap-map>
            </div>
          </vs-tab>
          <vs-tab label="List">
            <div class="tab-content">
              <div class="cards">
                <vs-card class="cardx" v-for="(obj, index) in this.all" :key="index">
                  <div slot="header">
                    <h4 v-if="obj.res">RESTAURANT</h4>
                    <h4 v-if="!obj.res">ACCOMMODATION</h4>
                  </div>
                  <div slot="media"></div>
                  <div class="card-body">
                    <span>
                      {{obj.name}}
                      <br />
                      {{obj.address}}
                      <br />
                      {{obj.town}}
                    </span>
                    <font-awesome-icon v-if="obj.res" prefix="fas" icon="hamburger" class="fa" />
                    <font-awesome-icon v-if="!obj.res" prefix="fas" icon="bed" class="fa" />
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button
                        @click="showPopup(index)"
                        color="#e44b4b"
                        color-text="white"
                        type="filled"
                      >Show details</vs-button>
                    </vs-row>
                  </div>
                </vs-card>
              </div>
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </div>

    <vs-popup
      v-for="(obj, index) in this.all"
      :key="index"
      classContent="popup-example"
      title="Details"
      :active.sync="popupActive[index]"
      background-color-popup="#f7f7f7"
    >
      <div class="image-slide">
        <vueper-slides fade :touchable="true" fixed-height="250px">
          <vueper-slide v-for="(slide, i) in obj.images" :key="i" :image="slide" />
        </vueper-slides>
      </div>
      <div class="details">
        <div class="info">
          <h4 v-if="obj.res">Restaurant</h4>
          <h4 v-if="!obj.res">Accommodation</h4>
          <p>{{obj.name}}</p>
          <h4>Address</h4>
          <p>{{obj.address}}</p>
        </div>
        <div class="rate">
          <fa-rating :glyph="circle" active-color="#e44b4b" v-bind:show-rating="showrating=false"></fa-rating>
        </div>
        <div class="request">
          <vs-button
            v-if="!obj.res"
            color="#e44b4b"
            color-text="white"
            type="filled"
            @click="showInerPopup(index)"
          >Send request for this accomodation</vs-button>
          <vs-button
            v-if="obj.res"
            color="#e44b4b"
            color-text="white"
            type="filled"
            @click="showInerPopup(index)"
          >Send request for this restaurant</vs-button>
          <vs-popup :active.sync="inerPopup[index]" background-color-popup="#f7f7f7" title="Request">
            <h3 v-if="obj.res">Current restaurant:</h3>
            <h3 v-if="!obj.res">Current accommodation:</h3>
            <h4>{{restaurant.name}}</h4>
            <h3 v-if="obj.res">New restaurant:</h3>
            <h3 v-if="!obj.res">New accommodation:</h3>
            <h4>{{obj.name}}</h4>
            <vs-input class="input" color="#e44b4b" label-placeholder="Message" v-model="message" />
            <div class="yesno">
              <button
                class="lmodal yes"
                @click="sendRequest(obj); inerPopup.splice(index, 1, false); dialog.splice(index, 1, true);"
              >Send</button>
              <div class="between"></div>
              <button class="lmodal no" @click="inerPopup.splice(index, 1, false);">Cancel</button>
            </div>
          </vs-popup>

          <vs-popup title="" :active.sync="dialog[index]" background-color-popup="#f7f7f7">
              <h3>Your request has been sent.</h3>
          </vs-popup>
        </div>
      </div>
      <div class="comments">
        <div class="left">
          <CommentList :comments="obj.comments" />
        </div>
        <div class="right">
          <vs-input class="input" color="#e44b4b" label-placeholder="Comment" v-model="newComment" />
          <vs-button class="input" color="#e44b4b" color-text="white" type="filled" @click="sendComment(obj)">Send comment</vs-button>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import CommentList from "./CommentList.vue";
import currentUser from "../../data/currentUser.js";
import restaurants from "../../data/restaurants.js";
import accommodations from "../../data/accommodations.js";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { FaRating } from "vue-rate-it";
import Circle from "vue-rate-it/glyphs/circle";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import requests from "../../data/requests.js";
/* import Map from "./Map.vue"; */

export default {
  name: "Accres",
  data() {
    return {
      currentUser,
      restaurant:
        currentUser.restaurant /* {
        name: "Menza - Studentski grad",
        address: "Tosin Bunar 143",
        town: "Novi Beograd",
        "position": {
            lat: 44.834234,
            lng: 20.398134
        }
      } */,
      restaurants,
      accommodation:
        currentUser.accommodation /* {
        name: "Studentski grad",
        address: "Tosin Bunar 143",
        town: "Novi Beograd",
        position: {
            lat: 44.824234,
            lng: 20.398134
        }
      } */,
      color: "#e44b4b",
      accommodations,
      all: null,
      popupActive: [],
      inerPopup: [],
      dialog:[],
      newComment: "",
      center: { lat: 44.81, lng: 20.45 },
      requests,
      message: ""
    };
  },
  props: {
    showrating: Boolean
  },
  components: {
    VueperSlides,
    VueperSlide,
    FaRating,
    CommentList,
    "gmap-custom-marker": GmapCustomMarker
  },
  created() {
    this.circle = Circle;
  },
  beforeMount() {
    this.restaurants = this.restaurants.filter(
      res => res.name != this.restaurant.name
    );
    this.accommodations = this.accommodations.filter(
      acc => acc.name != this.accommodation.name
    );
    this.all = this.restaurants.concat(this.accommodations);
    this.all.sort(this.dynamicSort("name"));

    for (var i = 0; i < this.all.length; i++) {
      this.popupActive.push(false);
      this.inerPopup.push(false);
      this.dialog.push(false);
    }
  },
  methods: {
    dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function(a, b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        var result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    },
    showPopup(index) {
      this.popupActive.splice(index, 1, true);
    },
    showInerPopup(index){
        this.inerPopup.splice(index, 1, true);
    },
    sendRequest(obj) {
      var a = {};
      a["restaurant"] = obj.res;
      a["username"] = this.currentUser.username;
      a["name"] = this.currentUser.name;
      a["surname"] = this.currentUser.surname;
      a["current"] = this.restaurant.name;
      a["new"] = obj.name;
      a["message"] = this.message;
      a["active"] = true;
      a["false"] = null;
      this.requests.push(a);
      this.message=null
    },
    sendComment(obj){
        var a = {};
        a["username"]=this.currentUser.username
        a["comment"]=this.newComment
        obj.comments.push(a)
        this.newComment=""
        }
        
  }
};
</script>

<style scoped>
.fa-map {
  background-color: #e44b4b;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  /* font-size: 50px !important; */
  padding: 6px;
  color: white;
}
.travel-map {
  height: 390px;
  margin-top: 3px;
}
.accres {
  height: 100%;
}
.head {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: left;
  padding: 20px 30px 20px 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  padding: 5px 10px 20px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 64%;
  overflow-x: none;
  overflow-y: auto;
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa {
  font-size: 30px;
}

.cards {
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
/* .accres-card {
  width: 48%;
  min-width: 185px;
  max-width: 300px;
} */

.cardx {
  width: 45%;
  min-width: 170px;
  max-width: 300px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: left;
}

.tabs {
  width: 100%;
}

.details {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
}

.info h4,
.info p {
  padding-bottom: 20px;
}

.comments {
  width: 100%;
  display: flex;
}

.left,
.right {
  width: 50%;
}

.right {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.input {
  width: 90%;
  margin-bottom: 10px;
}

.request {
  margin-top: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 700px) {
  .request {
    width: 100%;
    text-align: center;
  }

  .comments {
    flex-direction: column;
  }

  .left,
  .right {
    width: 100%;
  }

  .input {
    width: 100%;
  }
}

@media screen and (max-width: 478px) {
  .cardx {
    width: 100%;
  }
  .rate {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 700px) {
  .body {
    overflow: none;
    height: fit-content;
  }
}
</style>

<style>
.vs-tabs--btn:hover {
  background: none !important;
}

.vs-tabs--content {
  padding: 0 !important;
}
.line-vs-tabs {
  background: rgb(228, 75, 75) !important;
  box-shadow: none !important;
}

.vs-input--input.normal {
  /* padding: 2.0rem !important; */
  height: 80px;
}

.vueperslides__bullet .default {
  background-color: #afafaf;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {
  background-color: #e44b4b;
}

.vs-tabs--li button.vs-tabs--btn {
  z-index: 0 !important;
}

</style>

