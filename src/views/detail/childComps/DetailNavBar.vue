<template>
  <div>
    <nav-bar class="navbar">
      <template v-slot:left>
        <img class="leftImg" src="~assets/img/common/back.svg" alt="" @click="backClick">
      </template>
      <template v-slot:center>
        <div class="centerTitle" v-for="item in navbarTitle">
          {{item}}
        </div>
      </template>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:"DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      navbarTitle:['详情','参数','评论','推荐']
    }
  },
  methods:{
    backClick(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  .navbar{
    background-color: #fff;
    color: rgb(128, 127, 127);
    font-size: 18px;
  }
  .centerTitle{
    margin:0 9px;
  }
  .leftImg{
    margin-top: 10px;
  }
</style>