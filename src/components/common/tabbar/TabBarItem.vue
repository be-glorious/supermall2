<template>
  <div class="tab-bar-item" @click="itemClick" :style="colorActive">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img_active"></slot></div>
    <div><slot name="text" class="text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    textColor:{
      type:String,
      default:"blue"
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    colorActive(){
      return this.isActive ? {color:this.textColor} : {};
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  /* .active{
    color: var(--color-tint);
  } */
</style>