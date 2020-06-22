<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* { margin: 0;
    outline: 0 none;
    font-family: 'Roboto Condensed', sans-serif;
    
 }

 .app {
   background: #E9E9E9;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6A6A6A;
  min-height: 100vh;
  overflow: hidden;
}

.yesno {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-flow: row wrap; */
  margin-top: 20px;
  margin-bottom: 20px;
  
}

button.lmodal {
   max-width: 130px;
    width: 100%;
    min-width: 80px;
  height: 51px;
  background: #e44b4b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  border-radius: 15px;
  opacity: 1;
  font-weight: 400;
  color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
}

button.lmodal:hover {
  background: #afafaf;
}

button.no {
  background: #5e5e5e;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}



 .app button:not([disabled="disabled"]):hover {
   background: #afafaf;
   color:#ffffff;
 }

.v-select ::placeholder{
  color: gray;
  font-size: 14px;
  font-weight: 400;
}

 .vs__dropdown-toggle{
  height: 42px !important;

}

 .v-select.vs--open.vs--single.vs--searchable #vs1__combobox{
  border:1px solid rgb(228, 75, 75) !important;

}

.vs__search, .vs__search {
  z-index: 0;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
  opacity: 50%;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #afafaf;
}

::-webkit-scrollbar-track {
  border: none;
  background-color: #e9e9e9;
}

.vs-popup{
  color: #6a6a6a;
}




.page {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  margin-left: 0;
  margin-right: 0;
  padding-top: 20px;
  justify-content: center;
  overflow: hidden;
}

.vertical {
  display: flex;
  flex-direction: column;
}

.logo {
  height: 230px;
  background: url("./assets/logo_c.png") no-repeat;
  background-size: contain;
  background-position: center;
}

.container {
  width: 60%;
  margin-left: 20px;
  max-height: 100%;
  padding-bottom: 20px;
}

@media screen and (min-width: 700px) {
  .container {
    overflow: auto;
  }
}
@media screen and (max-width: 700px) {
  .page {
    padding-top: 0;
    margin: 0;
    overflow-y: scroll;
    align-items: initial;
  }
  .vertical {
    width: 100%;
    justify-content: center;
    align-items: center;
    height: fit-content;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .logo {
    display: none;
  }
  .container {
    margin: 0;
    margin-top: 70px;
    margin-bottom: 20px;
    width: 90%;
    padding-bottom: 0;
    /* position: relative; */
  }
}


</style>
