<template>
  <div class="navbar">
    <nav-bar>
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:"HomeNavBar",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .navbar{
    background-color:var(--color-tint);
    color: aliceblue;
  }
</style>