<template>
    <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
            <article v-for="(item, index) in articleList" :key="index" class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://zenghuituku.oss-cn-beijing.aliyuncs.com/note/image/1614244454251.png">
                  <!-- <img :src="`file:///D:/upload/${item.pic}`" style="border-radius: 5px;"> -->
                </figure>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{name:'post-detail',params:{id:item.id}}">
                        <span class="is-size-6">{{ item.title }}</span>
                      </router-link>
                    </el-tooltip>
                  </p>
                </div>
                <nav class="level has-text-grey is-mobile  is-size-7 mt-2">
                  <div class="level-left">
                    <div class="level-left">
                      <router-link class="level-item" :to="{ path: `/member/${item.author}/home` }">
                        {{ item.author }}
                      </router-link>

                      <span class="mr-1">
                        发布于:{{ dayjs(item.createAt).format("YYYY/MM/DD") }}
                      </span>
                      <span class="is-hidden-mobile">浏览:{{ item.readings }}</span>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="media-right" />
            </article>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/article'
export default {
    data(){
        return{
            articleList: []
        }
    },
    methods:{
        init(){
            /**
             * 参数为为页数和size ，用于分页
             */
            const dto = {
                page : 1,
                size : 10
            }
            getList(dto).then((response) => {
                const { data } = response
                console.log(data);
                this.articleList = data.data;
            })
        }
    },
    mounted(){
        this.init();
        console.log(this.articleList);
    }
}
</script>