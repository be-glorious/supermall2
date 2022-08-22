<template>
  <nav-bar class="cart-navbar">
    <template v-slot:center>购物车({{$store.state.cartList.length}})</template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:"CartNavbar",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .cart-navbar{
    background-color: var(--color-tint);
    color: aliceblue;
  }
</style>