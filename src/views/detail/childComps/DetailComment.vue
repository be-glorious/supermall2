<template>
  <div v-if="Object.keys(detailComment).length !== 0" 
        class="detail-comment"
        v-for="item in detailComment.list">
    <!-- <div class="line"></div> -->
    <div class="comment">
      <div>用户评价({{detailComment.cRate}})</div>
      <div>更多</div>
    </div>
    <div class="user">
      <img :src="item.user.avatar" alt="">
      <div>{{item.user.uname}}</div>
    </div>
    <div class="content">{{item.content}}</div>
    <div class="time">
      <div>{{filters(item.created)}}</div>
      <div>{{item.style}}</div>
    </div>
    <div class="img" v-if="item.images !== null">
      <img v-for="i in item.images" :src="i" alt="">
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name:"DetailComment",
  props:{
    detailComment:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    filters(value){
      const date = new Date(value * 1000);
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
  .line{
    width: 100%;
    height: 5px;
    background-color: rgba(148, 180, 170,0.3);
    margin-top: 15px;
  }
  .detail-comment{
    margin-top: 50px;
  }
  .comment{
    display: flex;
    justify-content: space-between;
    margin:10px;
    font-size: 19px;
  }
  .user{
    display: flex;
    align-items: center;
  }
  .user img{
    width: 80px;
    height: 80px;
    margin-left: 20px;
    border-radius: 40px;
  }
  .user div{
    margin-left: 20px;
    font-size: 17px;
    font-weight: 600;
  }
  .content{
    margin-top: 20px;
    margin-left: 15px;
    font-size: 18px;
    margin-right: 15px;
  }
  .time{
    display: flex;
  }
  .time div{
    margin-left: 15px;
    margin-top: 13px;
    font-size: 15px;
  }
  .img img{
    width: 30%;
    height: 100px;
  }
  .img{
    margin-left: 15px;
    margin-top: 15px;
  }
</style>