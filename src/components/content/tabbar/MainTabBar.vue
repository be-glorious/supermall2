<template>
  <div class="mainTabBar">
    <tab-bar>
      <tab-bar-item class="tab-bar-item" path="/home" textColor="var(--color-tint)">
        <template v-slot:img><img src="~assets/img/tabbar/home.svg" alt=""></template>
        <template v-slot:img_active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
        <template v-slot:text><div class="text">首页</div></template>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/classify" textColor="var(--color-tint)">
        <template v-slot:img><img src="~assets/img/tabbar/classify.svg" alt=""></template>
        <template v-slot:img_active><img src="~assets/img/tabbar/classify_active.svg" alt=""></template>        
        <template v-slot:text><div class="text">分类</div></template>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/cart" textColor="var(--color-tint)">
        <template v-slot:img><img src="~assets/img/tabbar/cart.svg" alt=""></template>
        <template v-slot:img_active><img src="~assets/img/tabbar/cart_active.svg" alt=""></template>
        <template v-slot:text><div class="text">购物车</div></template>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/my" textColor="var(--color-tint)">
        <template v-slot:img><img src="~assets/img/tabbar/my.svg" alt=""></template>
        <template v-slot:img_active><img src="~assets/img/tabbar/my_active.svg" alt=""></template>
        <template v-slot:text><div class="text">我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:"MainTabBar",
  components:{
    TabBar,
    TabBarItem
  },
  
}
</script>

<style scoped>
  .tab-bar-item img{
    width: 29px;
    height: 29px;
    vertical-align: middle;
  }
  .tab-bar-item .text{
    font-size: 15px;
  }
</style>