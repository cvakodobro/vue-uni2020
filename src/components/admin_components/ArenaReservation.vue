<template>
  <div>
    <div class="request" v-on:click="active=!active" ref="req">
      <div class="details">
        <div>
          <h4>{{request.date}}</h4>
        </div>
        <div>
          <h4>{{request.time}}</h4>
        </div>
        <div>
          <h4>{{request.ops}}</h4>
        </div>
        <div>
          <h4>{{request.type}}</h4>
        </div>
      </div>
    </div>
    <vs-popup class="holamundo" title="Request details" :active.sync="active">
      <div class="info">
        <h3>Date and time of the game:</h3>
        <h4>{{request.date}}, {{request.time}}</h4>
        <h3>Opponents:</h3>
        <h4>{{request.ops}}</h4>
        <h3>Sport type:</h3>
        <h4>{{request.type}}</h4>
        <h3>Select arena:</h3>
        <v-select placeholder="Select arena" label="arena" :options="options" v-model="arenaval"></v-select>
        <transition name="fade">
          <label v-if="invalid">Please select arena first</label>
        </transition>
        <div class="yesno">
          <button class="lmodal yes" @click="deletegame">Set arena</button>
          <div class="between"></div>
          <button class="lmodal no" @click="active=!active">Cancel</button>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      options: ["Stark Arena", "Arena - Hall", "Ranko Zeravica"],
      arenaval: null,
      invalid: false
    };
  },
  props: ["request"],
  methods: {
    deletegame() {
      if (this.arenaval != null) {
        this.$emit("updatearenas", this.request.id);
        this.active = !this.active;
        this.arenaval = null;
      } else {
        this.invalid = true;
        var that = this;
        setTimeout(function() {
          that.invalid = false;
        }, 3 * 1000);
      }
    }
  }
};
</script>

<style scoped>

label {
        position: absolute;
        color: #e44b4b
}
.request {
  background: #e44b4b;
  color: white;
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

.info h3 {
  margin-bottom: 10px;
}

.info h4 {
  margin-bottom: 15px;
}

.yesno{
    margin-top: 30px !important;
    margin-bottom: 20px !important;
}
</style>

<style>
/* .vs-popup {
    height: fit-content !important;
    overflow: visible !important;
} */
</style>