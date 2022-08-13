<template>
  <div class="goods">
    <div v-for="(item,index) in goods" :key="index">
      <goods-item :goodsList="item" @itemLoad="itemLoad" @click="detailClick(item)"/>
    </div>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'
export default {
  name:"Goods",
  props:{
    goods:{
      type:Object,
      default(){
        return{}
      }
    },
  },
  components:{
    GoodsItem
  },
  methods:{
    itemLoad(){
      this.$emit('itemLoad')
    },
    detailClick(item){
      // console.log(item.iid);
      
      this.$router.push('/detail'+item.iid)
      
    }
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
  }
</style>

