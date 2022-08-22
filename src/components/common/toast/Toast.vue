<template>
  <div class="toast">{{text}}</div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    text:{
      type:String,
      default:""
    }
  }
}
</script>

<style scoped>
.toast{
  background: rgb(71, 68, 68,0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: rgb(226, 229, 231);
  padding: 5px 10px;
}
</style>