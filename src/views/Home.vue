<template>
<div>
  <div class="box">📣 {{ noticeBox}}</div>
</div>
</template>

<script> 
import { getNoticeBox } from '@/api/noticeBox'

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
   
  },
}
</script>
