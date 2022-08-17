<template>
  <div class="detail">
    <detail-nav-bar class="navbar" @titleClick="titleClick" ref="detailnavbar"/>
    <scroll class="detailContent" 
          ref="detailScroll"
          @scroll="contentScroll"
          :probeType="3">
      <detail-swiper class="detail-swiper" :swiperImage="swiperImage"/>
      <detail-des :describe="describe"/>
      <detail-shop :shop="shop"/>
      <detail-picture :detailInfo="detailInfo" @pictureLoad="pictureLoad"/>
      <detail-params :goodParams="goodParams" ref="detailParams"/>
      <div class="line" ref="line"></div>
      <detail-comment :detailComment="detailComment"/>
      <detail-recommend :detailRecommend="detailRecommend" 
            @itemLoad="itemLoad" 
            ref="detailRecommend"/>
    </scroll>
    <add-shopping/>
    <top-back v-show="isShow" @click="topClick"/>
  </div>
</template>

<script>
import {getDetail,Describe,Shop,Params,getRecommend} from 'network/detail'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailDes from './childComps/DetailDes'
import DetailShop from './childComps/DetailShop'
import DetailPicture from './childComps/DetailPicture'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import AddShopping from './childComps/AddShopping'

import Scroll from 'components/common/scroll/Scroll'

import TopBack from 'components/content/topBack/TopBack'

export default {
  name:"Detail",
  data(){
    return{
      swiperImage:[],
      describe:{},
      shop:{},
      detailInfo:{},
      goodParams:{},
      detailComment:{},
      detailRecommend:{},
      isShow:false,
      themeTopYs:[],
      currentIndex:0,
      y:0,
      length:0
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailDes,
    DetailShop,
    Scroll,
    DetailPicture,
    DetailParams,
    DetailComment,
    DetailRecommend,
    AddShopping,
    TopBack
  },
  mounted(){
    getDetail(this.$route.params.iid).then(res => {
      this.swiperImage = res.result.itemInfo.topImages;
      const result = res.result
      this.describe = new Describe(result.itemInfo,result.columns,result.shopInfo.services);
      this.shop = new Shop(result.shopInfo);
      this.detailInfo = result.detailInfo
      this.goodParams = new Params(result.itemParams.info,result.itemParams.rule);
      if(result.rate.cRate !== 0){
        this.detailComment = result.rate;
      }
    })
    getRecommend().then(res => {
      this.detailRecommend = res.data.list;
    })
  },
  methods:{
    itemLoad(){
      this.$refs.detailScroll.refresh();
    },
    topClick(){
      this.$refs.detailScroll.scrollTo(0,0,500);
    },
    contentScroll(position){
      this.isShow = (-position.y)>1000;
      let y = -position.y
      if( y < this.themeTopYs[1]){
        this.$refs.detailnavbar.currentIndex = 0;
      }else if( y < this.themeTopYs[2]){
        this.$refs.detailnavbar.currentIndex = 1;
      }else if( y < this.themeTopYs[3]){
        this.$refs.detailnavbar.currentIndex = 2;
      }else{
        this.$refs.detailnavbar.currentIndex = 3;
      }   
       
      // this.y = -position.y;
      // this.length = this.themeTopYs.length;
      // for(let i = 0;i <this.length;i++){
      //   if(this.themeTopYs[i]<=this.y && this.themeTopYs[i+1]>this.y){
      //     this.currentIndex = i;
      //     this.$refs.detailnavbar.currentIndex = this.currentIndex;
      //   }
      // }  

    },
    // 详情页图片监听
    pictureLoad(){
      this.$refs.detailScroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.detailParams.$el.offsetTop)
      this.themeTopYs.push(this.$refs.line.offsetTop)
      this.themeTopYs.push(this.$refs.detailRecommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },
    // 导航栏点击
    titleClick(index){
      this.$refs.detailScroll.scrollTo(0,-this.themeTopYs[index],500)
    }
  }
  
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
  }
  .navbar{
    position: relative;;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .detailContent{
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /* 由于detailComment获取不了offsetTop，故加 */
  .line{
    width: 100%;
    height: 5px;
    background-color: rgba(148, 180, 170,0.3);
    margin-top: 50px;
  }
</style>