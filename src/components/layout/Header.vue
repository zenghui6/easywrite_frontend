<template>
<div>
   <el-menu
  :default-active="$route.path"
  class="mc-ui-flex-center"
  mode="horizontal"
  @select="handleSelect"
  background-color="#373737"
  text-color="#949494"
  active-text-color="#FFFAFA"
  >
  <img src="../../assets/image/logo.png" class="logo">
  <el-menu-item index="/"> <i class="el-icon-s-cooperation"></i>主页</el-menu-item>
  <el-menu-item index="/login"><i class="el-icon-s-management"></i>文章</el-menu-item>
  <el-menu-item index="/register"><i class="el-icon-video-camera-solid"></i>视频</el-menu-item>
  <el-menu-item index="/login"><i class="el-icon-s-custom"></i>个人信息</el-menu-item>
</el-menu>
</div>
    
</template>


<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push(key)
      }
    }
  }
</script>

<style scoped>
    .logo{
    float: left;
    display: block;
    height: 50px;
    width: 50px;
    padding-top: 5px;
    margin-right: 20px;
    padding-bottom: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }
</style>