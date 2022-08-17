<template>
    <swiper v-if="Object.keys(swiperImage).length !== 0">
      <swiper-item class="detail-silde" v-for="(item,index) in swiperImage" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:"DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    swiperImage:{
      type:Array,
      default(){
        return[]
      }
    }
  },
}
</script>

<style scoped>
  .detail-silde{
    width: 100%;
    flex-shrink: 0;
    height: 400px;
  }
  .detail-silde img{
    width: 100%;
    height: 100%;
  }
  
</style>