<template>
  <div>
    <detail-nav-bar/>
  </div>
</template>

<script>
import {getDetail} from 'network/detail'

import DetailNavBar from './childComps/DetailNavBar'

export default {
  name:"Detail",
  data(){
    return{
      swiperImage:[]
    }
  },
  components:{
    DetailNavBar
  },
  mounted(){
    getDetail(this.$route.params.iid).then(res => {
      this.swiperImage = res.result.itemInfo.topImages;
    })
  }
}
</script>