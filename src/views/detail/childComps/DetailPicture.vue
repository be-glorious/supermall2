<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="new">新款上市</div>
    <div class="picture">
      <div class="key">{{detailInfo.detailImage[0].key}}</div>
      <img v-for="item in detailInfo.detailImage[0].list" 
            :src="item" alt=""
            @load="pictureLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailPicture",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    pictureLoad(){
      this.$emit('pictureLoad')
    }
  }
}
</script>

<style scoped>
  .new{
    width: 100%;
    height: 50px;
    border-top: 1px solid rgb(101, 122, 120);
    border-bottom: 1px solid rgb(101, 122, 120);
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    margin-top: 30px;
  }
  .key{
    font-size: 20px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .picture img{
    width: 100%;
  }
</style>