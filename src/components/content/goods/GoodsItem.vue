<template>
  <div class="goodsItem">
    <img v-if="goodsList.show != null" :src="goodsList.show.img" alt="" @load="itemLoad">
    <img v-else :src="goodsList.image" alt="" @load="itemLoad">    
    <div class="goodsItemBottom"> 
      <div class="price">￥{{goodsList.price}}</div>
      <div class="collect">
        <img src="~assets/img/common/collect.svg" alt="">
        <div>{{goodsList.cfav}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsItem",
  props:{
    goodsList:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    itemLoad(){
      this.$emit('itemLoad');
    }
  },
  
}
</script>

<style scoped>
  .goodsItem{
    width: 180px;
    padding:0 4px;
    margin-top: 3px;
    box-sizing: border-box;
    margin-bottom: 3px;
  }
  .goodsItemBottom{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .goodsItem img{
    width: 100%;
    border-radius: 15px;
  }
  .goodsItem .price{
    color: rgb(245, 99, 99);
  }
  .collect{
    display: flex;
  }
  .collect img{
    width: 20px;
    height: 20px;
    margin-top: -3px;
    margin-left: 3px;
  }
</style>