<template>
  <div class="commentList">
    <ul>
      <li v-for="(comment,index) in comments" :key="index">
        <Comment :comment="comment" />
      </li>
    </ul>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
  data() {
    return {
    };
  },
  props: ["comments"],
  components: {
    Comment
  }
};
</script>

<style>

.commentList{
    margin-top:5px;
    margin-bottom: 5px;
    padding: 20px;
    overflow-y: auto;
    height: 150px;
    background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px #00000029;
  border-radius: 10px;
}
li {
  height: fit-content !important;
}
ul {
  list-style-type: none;
}
</style>