<template>
<div class="cardbox">
      <el-card class="box-card" shadow="always" body-style="{ padding: '20px' ,height:'100%',width:'500px'}" >
        <div slot="header" class="clearfix">
          <span><h5 class="title is-5">标题</h5>
          <h2 class="subtitle" style="color: #909399;">adadadad</h2>
          </span>
        </div>
      <!-- <iframe src="//player.bilibili.com/player.html?aid=65303611&cid=113333273&page=1 " 
        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="allowfullscreen"
        style="width: 800px; height: 500px; max-width: 100%"> 
      </iframe> -->

      <iframe src="//player.bilibili.com/player.html?aid=60016166&cid=104514776&page=1&danmaku=0"
      allowfullscreen="allowfullscreen"
       width="100%" height="350" 
       scrolling="no" frameborder="0" 
       sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>

  </el-card>
</div>
  
</template>

<script>
export default {
    name:'HomeVideo',
    data(){
       return {
           vidoeUrl: ' 11',
    }
    },
}
</script>

<style>
.cardbox{
    margin-left: 270px;margin-top: 30px;
    width: 800px;
    height: 400px;
}

</style>