// 入口文件
import Vue from 'vue'
// 配置 vuex 导入 vuex 包
import Vuex from 'vuex'
// 注册 vuex 到vue
Vue.use(Vuex)
// new Vuex Store() 实例 得到一个数据仓储对象
//假若 先存了一个 car 或者 【】 调用时候 先从本地存储调用
var car =JSON.parse(localStorage.getItem('car') || '[]')
var store =new Vuex.Store({
  state:{
    car:car // 购物车中的数据 存起来 
    // 例：count:0
    // 类似data 存储数据  
    // 在组件中 获取store 数据 需要 使用{{$store.state.数据名}} 
  },
  mutations:{
    // 注意：要操作store 中的state的值 ，只能通过调用 mutations 提供的方法 才能操作对应的数据，
    // 不建议直接 操作数据 ，若数据出现错误 ，不能快速定位到错误的原因 。每个组件都可能有操作数据的方法
    // increment(state){
    //   state.count++
    // }  调用 mutations 中的方法 只能使用 this.$store.commit('方法名')
    // 其中mutations 中的函数列表 最多支持两个参数 ，参数一 是 state状态 参数二 是commit提交过来的参数
    addToCar(state,goodsinfo){
      // 加入购物车，把商品信息 保存到 store中的car
      // 如果购物车 已有对应商品 则需要更新数量 
      // 如果没有，则直接把 商品数据 push 到car 即可
      
      // 假设 在购物车 没找到相对应的商品
      var flag =false 

      state.car.some(item =>{
        if(item.id == goodsinfo.id){
        item.count +=parseInt(goodsinfo.count)
         flag = true 
        return true
      }
      })
      if(!flag){
        //如果最终循环完毕 得到的是flag 还是false 则把商品数据直接push 到购物车中 
        state.car.push(goodsinfo)
      }
      // 更新car之后 把 car 数值 存到 本地 localStorage
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updatedGoodsInfo(state,goodsinfo) {
      // 修改购物车中商品的数量值
      state.car.some(item =>{
        if(item.id == goodsinfo.id){
          item.count =parseInt(goodsinfo.count)
          return true
        }
      })
      // 当修改玩商品的数量 ，把最新的购物车数组更新
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    removeFormCar(state,id){
      // 根据id 从store 中的购物车 删除对应 的商品数据
      state.car.some((item,i)=>{
        if(item.id == id){
          state.car.splice(i,1)
          return true;
        }
      })

      localStorage.setItem('car',JSON.stringify(state.car))


    },
    updateGoodsSelected(state,info){
      state.car.some(item =>{
        if(item.id == info.id){
          item.selected = info.selected
        }
      })

      localStorage.setItem('car',JSON.stringify(state.car))

    },
  },
  getters:{
    // 只负责 提供数据 不负责修改数据 如果修改 state数据则 找上方 类似于组件的过滤器
    // 都是元数据做了一层包装 提供了 调用者 其次 也和 computed 类似 只要state 数据发生变化
    //  如果 正好引用了这个数据 就会立即出发getters 的重新求值
    // optCount: function (state) {
    //   return '当前最新的 count 值是'.count  }

    getAllCount(state){
      var c =0;
      state.car.forEach(item =>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state){
      var o ={};
      state.car.forEach(item =>{
        o [item.id] = item.count;

      })
      return o
    },
    getGoodsSelected(state){
      var o ={}
      state.car.forEach(item =>{
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state){
      var o= {
        count :0,
        amount:0
      }
      state.car.forEach(item =>{
        if(item.selected){
          o.count += item.count
          o.amount +=item.price * item.count
        }
      })
      return o 
    }
  }
})

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload); */
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'
import { start } from 'pretty-error'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, // 1.4 挂载路由对象到 VM 实例上
  store,  // 只要挂载到 vm 上 任何组件都能使用全局 store 存储数据
})