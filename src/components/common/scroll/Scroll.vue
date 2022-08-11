<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Scroll",
  data(){
    return{
      scroll:null,
    }
  },
  props:{
    pullUpLoad:{
      type:Boolean,
      default:false,
    },
    probeType:{
      type:Number,
      default:0,
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      pullUpLoad:this.pullUpLoad,
      probeType:this.probeType,
    })
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position);
      })
    }
    
  },
  methods:{
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    },
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time);
    }
  }
}
</script>