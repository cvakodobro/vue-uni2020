<template>
  <div class="comment-box">
    <div class="comment-box__wrapper">
        <div class="comment-box__comment">
      <h4>{{comment.username}}</h4>
      <p>{{comment.comment}}</p>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ["comment"]
};
</script>

<style lang="scss">
.comment-box {
  &__wrapper {
      padding: 5px 20px 10px 20px;
    border-radius: 10px;
    background: #e44b4b;
  }

  h4 {
      color: white;
  }

  p {
    font-family: Roboto;
    font-weight: 400;
    font-style: italic;
    color: #f7f7f7;
  }

  padding-bottom: 10px;
}
</style>
