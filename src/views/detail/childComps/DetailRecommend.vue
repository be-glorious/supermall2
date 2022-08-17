<template>
  <div>
    <goods :goods="detailRecommend" @itemLoad="itemLoad"/>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods'
export default {
  name:"DetailRecommend",
  props:{
    detailRecommend:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components:{
    Goods
  },
  methods:{
    itemLoad(){
      this.$emit('itemLoad');      
    }
  }
}
</script>