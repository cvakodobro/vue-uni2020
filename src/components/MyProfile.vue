<template>
  <div class="myprofile">
    <h2>MY PROFILE</h2>
    <vs-collapse type="margin" accordion>
      <vs-collapse-item not-arrow class="item" id="1">
        <div slot="header">
          <div class="info">
            <div id="wrapper">
              <p class="id">NAME</p>
              <p class="data">{{currentUser.name}}</p>
            </div>

            <div class="icon_button">
              <button class="icon" @click="open('1')">
                <font-awesome-icon icon="edit" class="fa" />
              </button>
            </div>
          </div>
        </div>
        <div class="change_info">
          <input class="input" type="True" placeholder="New name" v-model="input" ref="input1" />
          <div class="yesno">
            <button class="lmodal yes" @click="showModal('name', 1)">Change</button>
            <div class="between"></div>
            <button class="lmodal no" @click="cancel('1')">Cancel</button>
          </div>
        </div>
      </vs-collapse-item>

      <vs-collapse-item not-arrow class="item" id="2">
        <div slot="header">
          <div class="info">
            <div id="wrapper">
              <p class="id">SURNAME</p>
              <p class="data">{{currentUser.surname}}</p>
            </div>
            <div class="icon_button">
              <button class="icon" @click="open('2')">
                <font-awesome-icon icon="edit" class="fa" />
              </button>
            </div>
          </div>
        </div>
        <div class="change_info">
          <input class="input" type="True" placeholder="New surname" v-model="input" ref="input2" />
          <div class="yesno">
            <button class="lmodal yes" @click="showModal('surname', 2)">Change</button>
            <div class="between"></div>

            <button class="lmodal no" @click="cancel('2')">Cancel</button>
          </div>
        </div>
      </vs-collapse-item>

      <vs-collapse-item not-arrow class="item" id="3">
        <div slot="header">
          <div class="info">
            <div id="wrapper">
              <p class="id">ADDRESS</p>
              <p class="data">{{currentUser.address}}</p>
            </div>
            <div class="icon_button">
              <button class="icon" @click="open('3')">
                <font-awesome-icon icon="edit" class="fa" />
              </button>
            </div>
          </div>
        </div>
        <div class="change_info">
          <input class="input" type="True" placeholder="New address" v-model="input" ref="input3" />
          <div class="yesno">
            <button class="lmodal yes" @click="showModal('address', 3)">Change</button>
            <div class="between"></div>

            <button class="lmodal no" @click="cancel('3')">Cancel</button>
          </div>
        </div>
      </vs-collapse-item>

      <vs-collapse-item not-arrow class="item" id="4">
        <div slot="header">
          <div class="info">
            <div id="wrapper">
              <p class="id">CONTACT</p>
              <p class="data">{{currentUser.contact}}</p>
            </div>
            <div class="icon_button">
              <button class="icon" @click="open('4')">
                <font-awesome-icon icon="edit" class="fa" />
              </button>
            </div>
          </div>
        </div>
        <div class="change_info">
          <input class="input" type="True" placeholder="New contact" v-model="input" ref="input4" />
          <div class="yesno">
            <button class="lmodal yes" @click="showModal('contact', 4)">Change</button>
            <div class="between"></div>

            <button class="lmodal no" @click="cancel('4')">Cancel</button>
          </div>
        </div>
      </vs-collapse-item>

      <vs-collapse-item not-arrow class="item" id="5">
        <div slot="header">
          <div class="info">
            <div id="wrapper">
              <p class="id">USERNAME</p>
              <p class="data">{{currentUser.username}}</p>
            </div>
            <div class="icon_button">
              <!-- <button class="icon" @click="open('5')">
                <font-awesome-icon icon="edit" class="fa" />
              </button>-->
            </div>
          </div>
        </div>
        <div class="change_info">
          <input class="input" type="True" placeholder="New username" v-model="input" ref="input5" />
          <div class="yesno">
            <button class="lmodal yes" @click="showModal('username', 5)">Change</button>
            <div class="between"></div>

            <button class="lmodal no" @click="cancel('5')">Cancel</button>
          </div>
        </div>
      </vs-collapse-item>

      <vs-collapse-item not-arrow class="item" id="6">
        <div slot="header">
          <div class="info">
            <div id="wrapper">
              <p class="id">PASSWORD</p>
              <p class="data" type="password">{{currentUser.password}}</p>
            </div>
            <div class="icon_button">
              <button class="icon" @click="open('6')">
                <font-awesome-icon icon="edit" class="fa" />
              </button>
            </div>
          </div>
        </div>
        <div class="change_info">
          <input class="input" type="True" placeholder="New password" v-model="input" ref="input6" />
          <div class="yesno">
            <button class="lmodal yes" @click="showModal('password', 6)">Change</button>
            <div class="between"></div>

            <button class="lmodal no" @click="cancel('6')">Cancel</button>
          </div>
        </div>
      </vs-collapse-item>
    </vs-collapse>

    <vs-popup
      class="popup"
      title="Verify yourself"
      background-color-popup="#f7f7f7"
      :active.sync="showPopup"
    >
      <div class="modal">
        <p>Old {{modalval}}: {{currentUser[modalval]}}</p>
        <p>New {{modalval}}: {{input}}</p>
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="input_pass"
          ref="inputpass"
        />
        <transition name="fade">
        <label v-if="invalid" class="invalidpass">*Invalid username or password</label>
      </transition>
        <div class="yesno">
          <button class="lmodal yes" @click="verify">Ok</button>
          <div class="between"></div>
          <button class="lmodal no" @click="showPopup=!showPopup">Cancel</button>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import users from "../data/usersData.js";
import currentUser from "../data/currentUser.js";
export default {
  name: "MyProfile",
  data() {
    return {
      users: users,
      currentUser: currentUser,
      closeID: "0",
      input: null,
      modalval: "",
      input_pass: "",
      showPopup: false,
      invalid: false
    };
  },

  created() {},

  methods: {
    showChangeInfo() {
      this.overflow = "visible";
    },

    cancel(id) {
      this.input = "";
      this.$children[0].$children[id - 1].toggleContent();
    },

    open(id) {
      this.closeID = id;
      this.input = "";
      this.$children[0].$children[id - 1].toggleContent;
    },

    showModal(str, i) {
      var a = "input" + i;
      this.modalval = str;
      if (this.input != "") {
        this.showPopup = true;
      } else {
        this.$refs[a].placeholder = "Please input new " + str + " first";
        this.$refs[a].classList.add("invalid");
        var that = this;
        setTimeout(function() {
          that.$refs[a].placeholder = "New " + str;
          that.$refs[a].classList.remove("invalid");
        }, 3 * 1000);
      }
    },

    verify() {
      if (this.input_pass != "" && this.input_pass==this.currentUser.password) {
        var temp = this.users.find(
          user =>
            (user.username == this.currentUser.username) &
            (user.password == this.currentUser.password)
        );
          temp[this.modalval] = this.input;
          currentUser[this.modalval] = this.input;
          /* this.$modal.hide('verificationmodal'); */
          this.showPopup = false;
          this.input_pass = "";
          this.cancel(this.closeID);
      } else {
        this.invalid=true
        this.input_pass=""
        var that = this;
        setTimeout(function() {
          that.invalid=false
        }, 3 * 1000);
      }
    }
  }
};
</script>

<style scoped>
::placeholder {
  transition: opacity 0.5s;
}

.invalid::placeholder {
  font-weight: 500;
  color: #e44b4b;
  opacity: 1 !important;
  transition: opacity 0.5s;
}

.invalidpass {
   font-weight: 500;
  color: #e44b4b;
  opacity: 1 !important;
  display: inline-block;
    position: relative;
    left: -20%;
    }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.item {
  pointer-events: none;
}
/* .modal {
  padding-top: 20px;
  text-align: center;
  background: #f7f7f7 0% 0% no-repeat padding-box;
  border-radius: 30px;
} */

.modal {
  text-align: center;
}

.popup {
  color: #6a6a6a;
}

.modal p {
  padding-bottom: 10px;
}

.fa {
  height: 20px !important;
}
.item {
  background: #e9e9e9 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029 !important;
  opacity: 1;
  border-radius: 15px !important;
}

i {
  height: auto !important;
}

.myprofile {
  text-align: left;
  padding: 20px 30px 20px 30px;
  height: fill-available !important;
  height: -webkit-fill-available !important;
  height: -moz-available !important;
  /* margin: 20px 0 20px 20px; */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  opacity: 1;
}

.info {
  width: 100%;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
}

#wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* text-align: center; */
  width: 55%;
}

.icon {
  border: none;
  background: none;
  pointer-events: auto !important;
}

.icon:hover {
  background: none !important;
  color: #e44b4b !important;
}

/* .yesno {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

button.lmodal {
  width: 155px;
  height: 51px !important;
  background: #e44b4b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  border-radius: 15px;
  opacity: 1;
  margin-bottom: 20px;
  font-weight: 400;
  color: #ffffff;
}

button.lmodal:hover {
  background: #afafaf;
}

button.no {
  background: #5e5e5e;
} */

button.lmodal {
  max-width: 155px !important;
}

.change_info {
  text-align: center;
  pointer-events: auto !important;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.input {
  width: 80%;
  height: 40px !important;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  opacity: 1;
  border: none;
  padding-left: 20px;
  margin: 20px;
}

.input::placeholder {
  opacity: 50%;
}

.between {
  width: 30px;
}

@media screen and (max-width: 700px) {
  .myprofile {
    padding-left: 5px;
    padding-right: 5px;
  }

  h2 {
    text-indent: 25px;
  }
}

@media screen and (max-width: 430px) {
  .between {
    width: 0;
  }
}
</style>