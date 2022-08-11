<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name:"TabBar",
}
</script>

<style scoped>
  .tab-bar{
    background-color: rgb(233, 249, 250);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 1px -1px 1px rgb(200, 219, 213);
    padding-top: 2px;
  }
</style>