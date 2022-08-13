<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<style scoped>
  .nav-bar{
    width: 100%;
    height:40px;
    display: flex;
    justify-content: space-between;
    font-size: 21px;
    box-shadow: 1px 1px 10px rgb(138, 160, 153);
  }
  .nav-bar div{
    line-height: 40px;
  }
  .nav-bar .left{
    margin-left: 10px;
  }
  .nav-bar .right{
    margin-right:10px;
  }
  .center{
    display: flex;
  }
</style>