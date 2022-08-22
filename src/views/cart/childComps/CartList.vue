<template>
  <div v-for="(item,index) in $store.state.cartList" :key="index">
    <cart-list-item :item = "item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name:"CartList",
  components:{
    CartListItem
  }
}
</script>