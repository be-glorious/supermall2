<template>
  <div v-if="Object.keys(goodParams).length !== 0" >
    <div class="table-sizes">
      <table v-for="(item,index) in goodParams.sizes" :key="index">
        <tr v-for="it in item.length">
          <td v-for="i in item[it-1]">{{i}}</td>
        </tr>
      </table>
    </div>
    <div class="table-info">
      <table>
        <tr v-for="item in goodParams.info">
          <td class="key">{{item.key}}</td>
          <td class="color">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailParams",
  props:{
    goodParams:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
  .table-sizes,.table-info{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 18px;
  }
  .table-sizes table{
    width: 100%;
    border-collapse: collapse;
  }
  .table-sizes table tr{
    border-bottom: 1px solid rgba(148, 180, 170,0.7);
    height: 50px;
  }
  .table-info{
    margin-top: 40px;
  }
  .table-info tr{
    border-bottom: 1px solid rgba(148, 180, 170,0.7);
    height: 50px;
  }
  .table-info table{
    border-collapse: collapse;
    width: 100%;
  }
  .table-info tr .color{
    color: var(--color-high-text);
  }
  .table-info tr .key{
    width: 100px;
  }
</style>