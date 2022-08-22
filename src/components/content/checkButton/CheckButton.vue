<template>
  <div class="check-button">
    <div v-if="!isChoice" class="choice"></div>
    <img v-else src="~assets/img/cart/choice.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isChoice:{
      type:Boolean,
      default:true,
    }
  },
}
</script>

<style scoped>
  .check-button{
    width: 24px;
    height: 24px;
  }
  .choice{
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border:1px solid rgb(61, 65, 64);
  }
  .check-button img{
    width: 100%;
  }
</style>