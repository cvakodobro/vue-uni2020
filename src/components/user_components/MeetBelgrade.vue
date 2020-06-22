<template>
    <div class="meetbelgrade">
        <div class="head">
            <h2>MEET BELGRADE</h2>
        <!-- <div class="choice">
            <button :disabled="isDisabled">SHOW ALL</button>
            <button :disabled="!isDisabled">SHOW LIKED</button>
        </div> -->
        </div>
        
            <ToursList/>
        
        
    </div>
</template>

<script>
import ToursList from "./ToursList.vue"
export default {
    name: "MeetBelgrade",
    data(){
        return{
            isDisabled: true
        }
    },
    components: {
        ToursList
    }
}
</script>

<style scoped>

.head {
    display: flex;
    justify-content:space-between;
  text-align: left;
  padding: 20px 30px 20px 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 15px;
}

.choice {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

button {
box-shadow: 0px 3px 6px #00000029;
border-radius: 15px;
opacity: 1;
border: none;
width: 120px;
padding: 10px 20px;
margin-left: 20px;

}

button[disabled="disabled"] {
  background: #e44b4b;
  color: #ffffff;
}

button:not([disabled="disabled"]):hover {
  background: #afafaf;
  color: #ffffff;
}


</style>