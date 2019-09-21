<template>
    <div class="newsinfo-container">
        <!-- 主标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
    <p class="subtitle">
        <span>发布时间：{{ newsinfo.add_time | dateFormat  }}</span>
        <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>
        <!-- 内容区域  -->
    <div class="content" v-html="newsinfo.content"> 
        

    </div>

        <!-- 评论区域 -->
        <comment-box :id="this.id">

        </comment-box>
    </div>
</template>

<script>
// 导入评论 子组件
import comment from '../subcomponents/Commont.vue'

export default {
data(){
    return{
        id:this.$route.params.id,//将url 地址 传递过来的id值 挂载到 data 上 方便调用
        newsinfo:{} //新闻对象
    };
},
 created(){
        this.getNewsInfo();
    },
  
 methods:{
     getNewsInfo(){
         this.$http.get('api/getnew/' + this.id).then(result =>{
             if(result.body.status ===0){
                 this.newsinfo = result.body.message[0];
             }else {
                 Toast('获取新闻失败！')
             }
         })
     }
 },
 components:{
     'comment-box':comment
 }
};
</script>

<style lang="stylus">
.newsinfo-container{
    padding : 0 4px;  
    .title{
        font-size :16px;
        text-align :center;
        margin :15px 0;
        color :red;

    }
    .subtitle{
        font-size :13px;
        color :#226aff;
        display:flex;
        justify-content :space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}


</style>