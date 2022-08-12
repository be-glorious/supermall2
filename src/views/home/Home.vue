<template>
  <div class="home">
    <home-nav-bar/>
    <tab-control :tabTitle="['流行','新款','精选']" 
            @titleClick="titleClick"
            class="tabControl1"
            v-show="isShowTab"/>
    <scroll class="content" ref="scroll" 
          :pullUpLoad="true" 
          :probeType="3"
          @pullingUp="pullingUp"
          @scroll="contentScroll">
      <home-swiper :cbanners = "swiperData" @imageLoad="imageLoad"/>
      <home-recommend :recommend = "recommend"/>
      <home-popular/>
      <tab-control ref="tabControl2"
            :tabTitle="['流行','新款','精选']" 
            @titleClick="titleClick"/>
      <goods :goods="goods[currentType].list" @itemLoad="itemLoad"/>
    </scroll>
    <top-back @topClick="topClick" v-show="isShowTop"/>
  </div>
</template>

<script>
import HomeNavBar from './childComps/HomeNavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomePopular from './childComps/HomePopular'

import TabControl from 'components/content/tabControl/TabControl'
import Goods from 'components/content/goods/Goods'
import TopBack from 'components/content/topBack/TopBack'

import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name:"Home",
  data(){
    return{
      swiperData:[],
      recommend:[],
      goods:{
        pop:{
          page:0,list:[]
        },
        new:{
          page:0,list:[]
        },
        sell:{
          page:0,list:[]
        }
      },
      currentType:'pop',
      isShowTop:false,
      tabOffsetTop:0,
      isShowTab:false, //是否显示tabControl
    }
  },
  components:{
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    Goods,
    Scroll,
    TopBack
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    /**
     * 网络传数据
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.swiperData = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        // console.log(this.goods[type].list);
        
      })
      if(this.$refs.scroll){
        this.$refs.scroll.finishPullUp();
      }
    },

    /**
     * 方法
     */
    titleClick(index){
      switch(index){
        case 0:
          return this.currentType = 'pop'
          break;
        case 1:
          return this.currentType = 'new'
          break;
        case 2:
          return this.currentType = 'sell'
          break;
      }
    },

    /**
     * 传值
     */
    itemLoad(){
      this.$refs.scroll.refresh();
    },
    pullingUp(){
      this.getHomeGoods(this.currentType);
    },
    topClick(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    contentScroll(position){
      this.isShowTop = (-position.y)>1000;
      this.isShowTab = (-position.y)>this.tabOffsetTop;
    },
    imageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
    
  },
}
</script>

<style scoped>
  .home{
    height: 100vh;
    position: relative;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabControl1{
    z-index: 99;
    position: relative;
    background-color: #fff;
    margin-top: -1px;
  }
</style>