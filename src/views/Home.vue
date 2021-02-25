<template>
<div>
  <div class="box title">📣 最新公告</div>
  <app-swiper></app-swiper>
  <app-home-video></app-home-video>

  <div style="height:100px"></div>
  <!-- <app-video-swiper></app-video-swiper> -->
  <app-article></app-article>

</div>
</template>

<script> 
import { getNoticeBox } from '@/api/noticeBox'
import HomeVideo from './video/HomeVideo.vue'
import Swiper from '@/components/Swiper.vue'
import VideoSwiper from '@/components/video/VideoSwiper.vue'
import Article from '@/views/article/Index.vue'

export default {
  name: 'Home',
  data(){
    return{
      noticeBox: {
      }
    }
  },
  created(){
    this.fetchNoticeBox()
  },
  methods: {
    async  fetchNoticeBox(){
        getNoticeBox().then( value => {
          const {data} = value
          this.noticeBox =  data.article
          console.log(data.article);
        }
        )
    }
  },

  components: {
   'app-home-video': HomeVideo,
   'app-swiper':Swiper,
   'app-video-swiper':VideoSwiper,
   'app-article': Article,
  },
}
</script>
