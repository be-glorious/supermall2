<template>
  <div>
    <div class="recommend">
      <div class="recommend-item" v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
    <div class="line"></div>
  </div>
  
</template>

<script>
export default {
  name:"HomeRecommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
  .recommend img{
    width: 70px;
    height: 70px;
  }
  .line{
    height: 10px;
    width: 100%;
    background-color: rgb(240, 240, 240);
    margin-top: 10px;
  }
</style>