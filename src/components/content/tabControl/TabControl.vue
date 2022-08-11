<template>
    <div class="tab-control">
      <div class="item" :class="{active:index == currentIndex}" v-for="(item,index) in tabTitle" :key="index" @click="titleClick(index)">
        {{item}}
      </div>
    </div>
</template>

<script>
export default {
  name:"TabControl",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    tabTitle:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index);
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
  .tab-control .item{
    padding: 2px 5px;
    font-size: 18px;
  }
  .active{
    color:var(--color-high-text);
    border-bottom:var(--color-high-text) solid 3px;
  }
</style>