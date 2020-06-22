<template>
  <div class="login">
    <form class="form">
      <div class="inputContainer">
        <input class="input" type="text" placeholder="username" v-model="username" />
      </div>
      <div class="inputContainer">
        <input class="input" type="password" placeholder="password" v-model="password" />
      </div>
      <transition name="fade">
        <label v-if="invalid">*Invalid username or password</label>
      </transition>
      <div class="btn">
        <button class="round_btn" @click="login">LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
import users from "../data/usersData.js";
import router from "../router/index.js";
import currentUser from "../data/currentUser.js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      users: users,
      invalid: false,
      currentUser: currentUser
    };
  },
  methods: {
    login() {
      var user = this.users.find(
        user =>
          (user.username == this.username) & (user.password == this.password)
      );
      if (user == undefined) {
        this.invalid = true;
        var that = this;
        setTimeout(function() {
          that.invalid = false;
        }, 3 * 1000);
      } else {
        currentUser.name = user.name;
        currentUser.surname = user.surname;
        currentUser.address = user.address;
        currentUser.contact = user.contact;
        currentUser.username = user.username;
        currentUser.password = user.password;
        currentUser.accommodation = user.accommodation;
        currentUser.restaurant = user.restaurant;
        currentUser.games = user.games;

        if (user.username.substring(0, 4) == "user") {
          router.push("accres");
        }
        if (user.username == "admin") {
          router.push("requests");
        }
      }
    }
  }
};
</script>

<style scoped>
.login {
  background: url("../assets/login_logo.png");
  background-size: 680px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.inputContainer {
  padding-bottom: 20px;
  width: 90%;
}
.input {
  width: 100%;
  height: 43px !important;
  font-weight: 100;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
  border-style: none;
  opacity: 1;
  text-align: left;
  text-indent: 25px;
  letter-spacing: 0px;
  color: #6a6a6a;
}

.round_btn {
  height: 122px;
  width: 122px;
  border: none;
  border-radius: 50%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 6px #00000029;
  opacity: 1;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0px;
  color: #6a6a6a;
  margin-left: 75%;
}

::placeholder {
  opacity: 50%;
}

label {
  font-weight: 300;
  color: #ffffff;
  margin-top: -21px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .login {
    background: url("../assets/logo_media.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #e44b4b;
  }
  .form {
    margin-top: 250px;
  }
  .round_btn {
    height: 80px;
    width: 80px;
    border: none;
    border-radius: 50%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 6px #00000029;
    opacity: 1;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0px;
    color: #6a6a6a;
    margin: 0px;
  }
}
</style>