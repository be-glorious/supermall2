<template>
  <div class="detail-des" v-if="Object.keys(describe).length != 0">
    <div>{{describe.title}}</div>
    <div class="price">
      <div class="newPrice">{{describe.newPrice}}</div>
      <div class="oldPrice"><sub><del>{{describe.oldPrice}}</del></sub></div>
      <div v-if="describe.discount.length != 0" class="discount">{{describe.discount}}</div>
    </div>
    <div class="info">
      <div>{{describe.columns[0]}}</div>
      <div>{{describe.columns[1]}}</div>
      <div>{{describe.services[describe.services.length-1].name}}</div>
    </div>
    <div class="line"></div>
    <div class="yes">
      <div v-for="index in describe.services.length-1">
        <img src="~assets/img/detail/yes.svg" alt="">
        <div>{{describe.services[index-1].name}}</div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name:"DetailDes",
  props:{
    describe:{
      type:Object,
      default(){
        return{}
      }
    },
  },
}
</script>

<style scoped>
  .detail-des{
    margin: 7px 7px;
    font-size: 18px;
  }
  .price{
    display: flex;
    margin-top: 10px;
    height: 40px;
  }
  .newPrice{
    color: var(--color-high-text);
    font-size: 30px;
  }
  .oldPrice{
    margin-left: 10px;
    line-height: 40px;
    font-size: 20px;
  }
  .discount{
    margin-left: 10px;
    background-color: var(--color-high-text);
    height: 25px;
    border-radius: 15px;
    padding: 5px 5px;
    color: aliceblue;
    font-size: 16px;
  }
  .info{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 16px;
  }
  .line{
    width: 100%;
    height: 1px;
    background-color: rgba(148, 180, 170,0.3);
    margin-top: 15px;
  }
  .yes{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  .yes img{
    width: 16px;
    height: 16px;
  }
  .yes div{
    display: flex;
  }
</style>