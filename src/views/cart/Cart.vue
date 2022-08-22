<template>
  <div class="cart">
    <cart-navbar class="cart-navbar"/>
    <scroll class="cart-scroll">
      <cart-list/>
    </scroll>
    <cart-select-all/>
  </div>
</template>

<script>
import CartNavbar from './childComps/CartNavbar'
import CartList from './childComps/CartList'
import CartSelectAll from './childComps/CartSelectAll'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name:"Cart",
  components:{
    CartNavbar,
    CartList,
    CartSelectAll,
    Scroll
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
  position: relative;
}
.cart-scroll{
  position: absolute;
  top: 40px;
  bottom: 84px;
  left: 0;
  right: 0;
}
.cart-navbar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>