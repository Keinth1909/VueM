# 这是一个仿写的项目

## 

### 



## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 页面制作

## 新闻资讯 页面 制作
1. 绘制页面 使用 mui中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯 列表 点击跳转到 新闻详情
1. 把列表中的每一项 改为 router-link 同时 跳转的时候 提供唯一的id标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由 模块 将 新闻详情 路由地址 和 组件 页面对应起来

## 创建公用的子组件 commont 单独封装
1. 创建 单独的组件模板 xxx.vue
2. 在需要使用的 组件页面中 ，先导入组件 'import comment from './xxx.vue
3. 在父组件 中 使用 'components' 属性 导入 组件 注册为自己的子组件 
4. 将子组件 的注册名称以 标签形式 到页面中 引用即可

## 获取所有的评论数据

## 实现点击加载更多评论功能
1. 为加载更多的按钮 绑定点击事件 请求 下一页数据
2. 点击加载更多 让 pageindex++ 再调用this.getComments()重新获取新数据
3. 为了防止 新数据 覆盖老数据 情况出现 在获取到新数据 让老数据 调用数组的 concat 方法 ，拼接上新数组 

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 效验评论内容是否为空 如果为空 则 toast 提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求 吧评论内容提交给服务器
5. 当 发表评论 成功后 更新 评论列表 调用getComments 方法重新刷新评论 可能只能得到 最后一页的评论 前面获取不到 
换一种思路 ： 当评论成功 在客户端 手动拼接 一个最新的评论对象 然后 调用 unshift 方法 把最新的评论 追加到 data 中 comments 的开头 

## 追加图片分享 功能 按钮为 路由的链接并显示对应的组件页面

## 绘制图片列表 组件页面结构并美化样衰
1. 制作顶部滑动列表 需要初始化scroll控件 导入对应mui.js文件
2. 制作 底部列表
3. 制作 图片列表 需要使用懒加载技术 可以使用 mint-ui 提供的组件

## 实现图片详情中 缩略图功能

## 绘制商品列表 页面基本结构并美化

## 绘制购物车栏布局 页面基本结构

## 尝试在手机上 进行项目预览和测试

## webpack打包 

## 实现功能

- [x] 首页
- [x] 新闻资讯
- [x] 图片分享
- [x] 商品购买
- [x] 购物详情
- [x] 购物车

## 实现效果

![Image text](https://raw.githubusercontent.com/Keinth1909/VueM/master/src/images/1.png) 
![Image text](https://raw.githubusercontent.com/Keinth1909/VueM/master/src/images/2.png) 
![Image text](https://raw.githubusercontent.com/Keinth1909/VueM/master/src/images/3.png) 
![Image text](https://raw.githubusercontent.com/Keinth1909/VueM/master/src/images/4.png) 
![Image text](https://raw.githubusercontent.com/Keinth1909/VueM/master/src/images/5.png) 
![Image text](https://raw.githubusercontent.com/Keinth1909/VueM/master/src/images/6.png) 