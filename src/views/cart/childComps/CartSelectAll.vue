<template>
  <div class="cart-select-all">
    <check-button @click="allClick" :isChoice="isAll"/>
    <div class="all">全选</div>
    <div class="total">合计：</div>
    <div class="count">{{count}}</div>
    <div class="compute">结算({{choiceLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  name:"CartSelectAll",
  components:{
    CheckButton
  },
  // data(){
  //   return{
  //     isAll:false
  //   }
  // },
  computed:{
    count(){
      return '￥'+ this.cartList.filter(item => {
        return item.isChoice
      }).reduce((preValue,item)=>{
        return preValue + parseFloat(item.price.replace(/^\D*/,'')) * item.count
      },0)
    },
    choiceLength(){
      return this.cartList.filter(item => item.isChoice).length
    },
    ...mapGetters(['cartList']),
    isAll(){
      if(this.cartList.length == 0) return false;
      return !this.cartList.find(item => !item.isChoice);
    }
  },
  methods:{
    allClick(){
      if(this.isAll){
        this.cartList.forEach(item => item.isChoice = false);
      }else{
        this.cartList.forEach(item => item.isChoice = true);
      }
      
    }
  }
}
</script>

<style scoped>
  .cart-select-all{
    background-color: rgb(236, 240, 238);
    width: 100%;
    height: 35px;
    position: fixed;
    bottom: 49px;
    padding-left: 5px;
    display: flex;
    align-items: center;
  }
  .all{
    margin-left: 5px;
  }
  .total{
    margin-left:70px;
  }
  .compute{
    background-color: var(--color-tint);
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    text-align: center;
    line-height: 35px;
    color: rgb(255, 244, 240);
    font-size: 17px;
  }
  .count{
    color: rgb(240, 120, 120);
  }
</style>