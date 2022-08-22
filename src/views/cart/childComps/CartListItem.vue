<template>
  <div class="cartList">
    <check-button class="cartCheck" @click="checkClick" :isChoice="item.isChoice"/>
    <div class="cart-right">
      <img :src="item.img" alt="">
      <div class="right-right">
        <div class="title">{{item.title}}</div>
        <div>{{item.discount}}</div>
        <div class="price">
          <div class="price-price">{{item.price}}</div>
          <div>x{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'


export default {
  name:"CartListItem",
  components:{
    CheckButton
  },
  data(){
    return{
      isChoice:true,
    }
  },
  props:{
    item:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    checkClick(){
      this.item.isChoice = !this.item.isChoice;
    }
  }
}
</script>

<style scoped>
  .cartList{
    width: 100%;
    height: 170px;
    border-bottom: 1px solid rgba(104, 139, 119, 0.4);
    display:flex;
    align-items: center;
  }
  .cartCheck{
    margin-left: 5px;
  }
  .cart-right{
    height: 140px;
    margin-left: 10px;
    display: flex;
  }
  .cart-right img{
    width: 100px;
    border-radius: 15px;
  }
  .right-right{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 210px;
    justify-content: space-around;
  }
  .title{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-size: 18px;
    font-weight: 600;
  }
  .price{
    display: flex;
    justify-content: space-between;
  }
  .price-price{
    color: rgb(245, 104, 104);
  }
</style>