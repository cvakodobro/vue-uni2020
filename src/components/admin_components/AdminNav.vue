<template>
  <div style="width:100%">
    <div class="nav">
      <router-link
        to="/requests"
        tag="button"
        class="switch"
        :disabled="currentComp === 'requests'"
      >REQUESTS</router-link>
      <br />
      <router-link
        to="/arenareservation"
        tag="button"
        class="switch"
        :disabled="currentComp === 'arenareservation'"
      >
        ARENA
        <br />RESERVATION
      </router-link>
      <br />
      <router-link
        to="/adminprofile"
        tag="button"
        class="switch"
        :disabled="currentComp === 'adminprofile'"
      >MY PROFILE</router-link>
      <br />
      <button class="switch" @click="showLogout=!showLogout">LOGOUT</button>
    </div>

    <div class="media_nav">
      <div class="burger">
        <button @click="showmenu">
          <font-awesome-icon icon="bars" class="fa" />
        </button>
        <p
          style="text-align: center;
    font-weight: bold;
    color: white;
    font-size: 1.2em;
    padding: 0;"
        >BELGRADE UNIVERSIADE</p>
      </div>
      <div class="navbar-collapse" id="menu">
        <router-link
          to="/requests"
          tag="button"
          class="switch"
          :disabled="currentComp === 'requests'"
        >REQUESTS</router-link>
        <br />
        <router-link
          to="/arenareservation"
          tag="button"
          class="switch"
          :disabled="currentComp === 'arenareservation'"
        >
          ARENA
          <br />RESERVATION
        </router-link>
        <br />
        <router-link
          to="/adminprofile"
          tag="button"
          class="switch"
          :disabled="currentComp === 'adminprofile'"
        >MY PROFILE</router-link>
        <br />
        <button class="switch" @click="showLogout=!showLogout">LOGOUT</button>
      </div>
    </div>

    <!-- <modal name="logoutmodal" height="auto">
      <p>Are you sure you want to logout?</p>
      <div class="yesno">
        <button class="lmodal yes" @click="logout">Yes</button>
        <div class="between"></div>
        <button class="lmodal no" @click="$modal.hide('logoutmodal')">No</button>
      </div>
    </modal>-->

    <vs-popup
      class="modal"
      title="LOGOUT"
      background-color-popup="#f7f7f7"
      :active.sync="showLogout"
    >
      <p>Are you sure you want to logout?</p>
      <div class="yesno">
        <button class="lmodal yes" @click="logout">Yes</button>
        <div class="between"></div>
        <button class="lmodal no" @click="showLogout=!showLogout">No</button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import router from "../../router/index.js";

export default {
  data() {
    return {
      showLogout: false
    };
  },
  props: {
    currentComp: {
      type: String,
      required: true
    }
  },

  beforeDestroy() {
    let components = this.$children;

    for (let i = 0; i < components.length; i++) {
      if (
        components[i].$el.classList &&
        components[i].$el.classList.contains("modal")
      ) {
        components[i].$el.remove();
      }
    }
  },

  methods: {
    logout() {
      this.showLogout = false;
      router.push("/");
    },

    /* showLogout() {
      this.$modal.show("logoutmodal");
    }, */

    showmenu() {
      var x = document.getElementById("menu");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  }
};
</script>

<style scoped>
.nav {
  width: 200px;
}

.between {
  width: 20px;
}

button.switch {
  margin-bottom: 10px !important;
  width: 200px;
  height: 50px !important;
  border: 1px solid black;
  margin: 0;
  cursor: pointer;
  font-size: 17px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  opacity: 1;
  border: none;
  font-weight: 400;
  color: #5e5e5e;
}

button.switch[disabled="disabled"] {
  background: #e44b4b;
  color: #ffffff;
}

button.switch:not([disabled="disabled"]):hover {
  background: #afafaf;
  color: #ffffff;
}

.v--modal-overlay .v--modal-boxl {
  width: 740px;
  height: 260px !important;
}

p {
  height: fit-content !important;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.yesno {
  display: flex;
  align-items: center;
  justify-content: center;
}

button.lmodal {
  width: 155px;
  height: 51px !important;
  background: #e44b4b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  border-radius: 15px;
  opacity: 1;
  margin-bottom: 50px !important;
  font-weight: 400;
  color: #ffffff;
}

button.lmodal:hover {
  background: #afafaf;
}

button.no {
  background: #5e5e5e;
}

.media_nav {
  background: #e44b4b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  display: none;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1030;
  flex-grow: 1;
  flex-basis: 100%;
}

.media_nav button {
  border: none;
  background: none;
}

.burger {
  display: flex;
  justify-content: space-between;
  /* text-align: center; */
  align-items: center;
  margin-left: 6vw;
  margin-right: 6vw;
  height: 50px;
  /* padding-top: 15px; */
  width: 100%;
}

.navbar-collapse {
  flex-basis: 100%;
  display: none;
}

.fa {
  font-size: 20px;
  color: white;
}
.modal {
  color: #6a6a6a;
}

@media screen and (max-width: 700px) {
  .nav {
    display: none;
  }
  .media_nav {
    display: flex;
  }
  button.switch {
    width: 100%;
    /* border-top: 1px solid white; */
    border-radius: 0;
    box-shadow: none;
    margin: 0 !important;
    cursor: pointer;
    font-size: 17px;
    background: none;
    font-weight: 400;
    color: white;
  }
  button.switch[disabled="disabled"] {
    background: white;
    color: #e44b4b;
  }
}
</style>
