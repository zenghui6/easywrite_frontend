<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <el-image
      style="width: 100%; height: 100%" 
      :src='url'
      fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://zenghuituku.oss-cn-beijing.aliyuncs.com/note/image1614231636398.png'
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>