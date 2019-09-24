<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发布时间:{{ photoinfo.add_tiem | dateFormat('YYYY-MM-DD')}}</span>
            <span>点击：{{ photoinfo.click }}次</span>

        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
        <!-- <img class="preview-img" v-for="(item,index) in list" :src="item.src"
        height="100" @click="$preview.open(index,list)" :key="item.src"> -->
        <vue-preview :slides="list" ></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>
        <!--  评论子组件 -->
        <cmt-box :id="id">

        </cmt-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id: this.$route.params.id, //从路由中获取到的 图片id
            photoinfo:{}, //图片详情
            list:[]
        }
    },
     created(){
        this.getPhotoInfo();//调用
        this.getThumbs();
    },
    methods: {
        getPhotoInfo(){
            this.$http. get('api/getimageInfo/'+this.id).then(result =>{//获取图片详情
                if(result.body.status === 0){
             this.photoinfo = result.body.message[0];
            };      
        });
        },
        getThumbs(){
            // 获取缩略图
            this.$http.get('api/getthumimages/'+ this.id).then(result =>{
                if(result.body.status === 0){
                    // 循环每个图片数据 ，补全图片宽和高
              result.body.message.forEach(item =>{
                  item.w =600;
                  item.h =400;
                  item.msrc =item.src
              });
                // 把完整的数据保存到 list中
                this.list = result.body.message;
                }

            });
        
        },
},
        components:{//注册评论子组件
            'cmt-box':comment
        }
}
</script>

<style lang="stylus" scoped>
.photoinfo-container{
    padding :3px;
    h3{
        color :#26a2ff;
        font-size 15px;
        text-align :center;
        margin :15px 0;
    }
    .subtitle{
        display :flex;
        justify-content :space-between;
        font-size :13px;
    }
    .content{
        text-indent :2em;
        line-height :35px;
        font-size 13px;
    }
    .thumbs{
        /deep/ .my-gallery{
            display :flex;
            flex-wrap :wrap;
            figure{
                width :30%;
                margin :5px;
                img{
                    width :100%;
                    box-shadow :0 0 8px 0 #999;
                    border-radius :5px;
                }
            }
        }
        
    }

}
</style>