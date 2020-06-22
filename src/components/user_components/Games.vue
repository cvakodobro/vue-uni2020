<template>
  <div class="games">
    <div class="head">
      <h2>GAMES</h2>
      <div class="select-div">
        <v-select
          placeholder="Select arena"
          label="arena"
          :options="options"
          v-model="arenaval"
        >
        </v-select>
        <!-- <vue-ctk-input-text v-model="arenaval" label="Select arena">

        </vue-ctk-input-text>-->
      </div>
      <div class="select-div">
        <VueCtkDateTimePicker
          label="Select date"
          color="#e44b4b"
          only-date
          format="DD.M.YYYY."
          formatted="DD MMM, YYYY"
          noButtonNow
          v-model="dateval"
        ></VueCtkDateTimePicker>
      </div>
      <div class="select-div">
        <VueCtkDateTimePicker
          label="Select time"
          color="#e44b4b"
          only-time
          format="HH:mm"
          formatted="HH:mm"
          minute-interval="10"
          v-model="timeval"
          :no-button='nobutton'
        ></VueCtkDateTimePicker>
      </div>
    </div>
    <div class="body">
      <div class="game-card" v-for="game in this.games" :key="game">
        <vs-card class="cardx">
          <div slot="header">
            <h3>{{game.ops}}</h3>
          </div>
          <div slot="media"></div>
          <div>
            <span>
              {{game.date}}
              <br />
              {{game.time}}
              <br />
              {{game.arena}}
            </span>
          </div>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
import currentUser from "../../data/currentUser.js";
export default {
  data() {
    return {
      arenaval: null,
      timeval: null,
      dateval: null,
      currentUser: currentUser,
      games: currentUser.games,
      options: [
      'Stark Arena',
      'Arena - Hall',
      'Ranko Zeravica'
    ],
      calendarData: {},
      calendarConfigs: {
        sundayStart: false,
        dateFormat: "dd/mm/yyyy",
        isDatePicker: true,
        isDateRange: false,
        isModal: true,
        limits: { min: "12/7/2020", max: "25/7/2020" }
      },
      nobutton:false
    };
  },
  beforeUpdate(){
    this.games=this.currentUser.games

    if(this.arenaval==null && this.dateval==null && this.timeval!=null){
      this.games=this.currentUser.games.filter(game=>game.time==this.timeval)
    }
    if(this.arenaval==null && this.dateval!=null && this.timeval==null){
      this.games=this.currentUser.games.filter(game=>game.date==this.dateval)
    }
    if(this.arenaval!=null && this.dateval==null && this.timeval==null){
      this.games=this.currentUser.games.filter(game=>game.arena==this.arenaval)
    }

    if(this.arenaval!=null && this.dateval!=null && this.timeval==null){
      this.games=this.currentUser.games.filter(game=>game.arena==this.arenaval)
      this.games=this.games.filter(game=>game.date==this.dateval)
    }
    if(this.arenaval==null && this.dateval!=null && this.timeval!=null){
      this.games=this.currentUser.games.filter(game=>game.date==this.dateval)
      this.games=this.games.filter(game=>game.time==this.timeval)
    }
    if(this.arenaval!=null && this.dateval==null && this.timeval!=null){
      this.games=this.currentUser.games.filter(game=>game.arena==this.arenaval)
      this.games=this.games.filter(game=>game.time==this.timeval)
    }

    if(this.arenaval!=null && this.dateval!=null && this.timeval!=null){
      this.games=this.currentUser.games.filter(game=>game.arena==this.arenaval)
      this.games=this.games.filter(game=>game.date==this.dateval)
      this.games=this.games.filter(game=>game.time==this.timeval)
    }

    



    
  }
};
</script>

<style scoped>
.date-time-picker,.field-input, input {
  height: 100% !important;
}
.select-div {
      min-width: 221px;
          max-height: 42px;
    height: 42px;
}

.v-select ::placeholder{
  color: gray;
  font-size: 14px;
  font-weight: 400;
}



.head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  padding: 20px 30px 20px 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  align-items: center;
}
.game-card {
  min-width: 180px;
  margin: 10px;
}

.input-select {
  cursor: pointer;
    background-color: #fff;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    position: relative;
    width: 100%;
    height: 42px;
    min-height: 42px;
    padding-left: 12px;
    padding-right: 44px;
    font-weight: 400;
    -webkit-appearance: none;
    outline: none;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 4px;
    font-size: 14px;
    z-index: 0;
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  padding: 20px 30px 20px 30px;
  margin-top: 20px;
  overflow:auto;
  margin-bottom: 20px;
}

.cardx {
  min-height: 150px;
  margin: 0;
}

span {
  font-size: 1.2em;
}

::-webkit-scrollbar {
  width: 2px;
  background-color: #f5f5f5;
  opacity: 50%;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #5e5e5e;
}

::-webkit-scrollbar-track {
  border: none;
  background-color: #e9e9e9;
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

@media screen and (max-width: 1100px) and (min-width: 770px) {
  .game-card {
    min-width: 45%;
  }
}

@media screen and (max-width: 770px) and (min-width: 700px) {
  .game-card {
    min-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (max-width: 700px) and (min-width: 510px) {
  .game-card {
    min-width: 45%;
  }
}

@media screen and (max-width: 510px) {
  .game-card {
    min-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

<style>
 .v-select.vs--open.vs--single.vs--searchable .vs__dropdown-toggle{
  border:1px solid rgb(228, 75, 75) !important;

}

.vs__dropdown-option--highlight{
  background: rgb(228, 75, 75) !important;
  color:white !important;
}

.vs__search {
  z-index: 0 !important;
}

@media screen and (max-width: 415px) {
.pickers-container { height: 100%; } /* optional: move accept button at bottom of screen */
.time-picker { max-height: 200px; }
}
</style>