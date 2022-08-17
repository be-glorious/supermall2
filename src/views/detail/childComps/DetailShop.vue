<template>
  <div class="detail-shop" v-if="Object.keys(shop).length !== 0">
    <!-- 店铺头像区 -->
    <div class="shopImage">
      <img :src="shop.logo" alt="">
      <div class="name">{{shop.name}}</div>
    </div>

    <!-- 店铺参数区 -->
    <div class="params">
      <div class="left">
        <div class="left1">
          <div class="sellText">{{filters(shop.sells)}}万</div>
          <div>总销量</div>
        </div>
        <div class="left2">
          <div class="sellText">{{filters(shop.goodsCount)}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div>
          <div v-for="(item,index) in shop.score" :key="index">{{item.name}}</div>
        </div>
        <div>
          <div class="score" :class="{change:item.score<5}" v-for="(item,index) in shop.score" :key="index">{{item.score}}</div>
        </div>
        <div>
          <div class="grade" :class="{changeBgc:!item.isBetter}"  
                v-for="(item,index) in shop.score">
                {{item.isBetter ?"高":"低"}}</div>
        </div>
      </div>
      
    </div>

    <!-- 进店逛逛 -->
    <div class="btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name:"DetailShop",
  props:{
    shop:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    filters(count){
      if(count > 10000){
        return (count/10000).toFixed(1);
      }else{
        return count;
      }
    }
  }
}
</script>

<style scoped>
  .detail-shop{
    margin:7px 7px;
  }
  .shopImage{
    display: flex;
    height: 80px;
    margin-top: 10px;
  }
  .shopImage img{
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
  .name{
    line-height: 80px;
    margin-left: 20px;
    font-size: 22px;
  }
  .params{
    display: flex;
    margin-top: 20px;
  }
  .left{
    display: flex;
    justify-content: space-around;
    border-right: 1px solid rgba(148, 180, 170,0.7);
    width: 50%;
  }
  .right{
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    padding: 0 10px;
    width: 50%;
  }
  .left1,.left2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sellText{
    font-size: 25px;
  }
  .right div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:5px 0;
  }
  .score{
    color:var(--color-high-text);
  }
  .grade{
    background-color: var(--color-high-text);
    color: aliceblue;
  }
  .change{
    color: rgb(223, 128, 66);
  }
  .changeBgc{
    background-color: rgb(223, 128, 66);
  }

  /* 进店逛逛 */
  .btn{
    margin: auto;
    width: 110px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 19px;
    color: aliceblue;
    border-radius: 15px;
    margin-top: 10px;
    box-shadow: 5px 5px 40px #73ebdb;
    background-color: var(--color-high-text);
  }
</style>