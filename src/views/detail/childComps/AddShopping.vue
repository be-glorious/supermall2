<template>
  <div class="add-shopping">
    <!-- 左 -->
    <div class="left">
      <div>
      <img src="~assets/img/detail/customer.svg" alt="">
      <div>客服</div>
    </div>
    <div>
      <img src="~assets/img/detail/collection.svg" alt="">
      <div>收藏</div>
    </div>
    <div>
      <img src="~assets/img/detail/shop.svg" alt="">
      <div>店铺</div>
    </div>
    </div>

    <!-- 右 -->
    <div class="right">
      <div class="addShop">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    

  </div>
</template>

<script>
export default {
  name:"AddShopping",
}
</script>

<style scoped>
  .add-shopping{
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0;
    z-index: 999;
    left: 0;
    right: 0;
    height: 49px;
    font-size: 13px;
  }
  img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* margin-left: 5px; */
  }
  .left{
    display: flex;
    justify-content: space-around;
    width: 50%;
  } 
  .right{
    width: 50%;
    display: flex;
    height: 35px;
    line-height: 35px;
    margin-top: 7px;
  }
  .addShop{
    background-color: rgb(110, 224, 171);
    padding: 0 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    color: aliceblue;
  }
  .buy{
    background-color: var(--color-high-text);
    padding: 0 25px;
    color: aliceblue;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
</style>