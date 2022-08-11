<template>
  <div class="top-back">
    <img src="~assets/img/common/top.png" alt="" @click="topClick">
  </div>
</template>

<script>
export default {
  name:"TopBack",
  methods:{
    topClick(){
      this.$emit('topClick')
    }
  }
}
</script>

<style scoped>
  .top-back{
    position: fixed;
    z-index: 99;   
    width: 50px;
    height: 50px;
    bottom: 59px;
    right: 5px;
  }
  .top-back img{
    width: 100%;
    height: 100%;
  }
</style>