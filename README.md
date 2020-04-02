"# carousels_2.0" 
>说明：这是一个前端页面轮播图UI组件。
> * 支持自定义图片数量
> * 默认特效是淡入淡出
> * 可自定义轮播图切换间隔时间
>

# 一.基本使用
### 1.HTML模本格式
````
//引入css文件：Carousels.css
<link type="text/css" rel="stylesheet" href="css/Carousels.css">
````

````
		<ul id="carousels" >
<!--			这里是插入的图片-->
			<li class="item item_active" ><img src="./img/swiper/01_750x390.jpg" alt=""></li>
			<li class="item" ><img src="./img/swiper/02_750x390.jpg" alt=""></li>
			<li class="item" ><img src="./img/swiper/03_750x390.jpg" alt=""></li>
			<li class="item" ><img src="./img/swiper/04_750x390.jpg" alt=""></li>
<!--			这里是要放入两个可点击的按钮，两都是一张指向右边的箭头-->
			<div  class="btn btn_left"><img src="./img/arrows.svg" alt=""></div>
			<div  class="btn btn_right"><img src="./img/arrows.svg" alt=""></div>
<!--			这是轮播图里的小点点,可点击，有几张图片就放几个点-->
			<div id="carousels_point">
				<li class="point point_active"></li>
				<li  class="point"></li>
				<li  class="point"></li>
				<li  class="point"></li>
			</div>
		</ul>
<!--		以模块的方式引入Carousels.js-->
	<script src="js/Carousels.js" type="module"></script>
<!--		main.js是你的主程序入口-->
	<script src="js/main.js" type="module"></script>
	
````
### 3. 在你的主入口文件中（这里是main.js），导入模块
````
import {Carousels} from './Carousels.js'
window.onload=function(){
    //1.创建实例
  let carousels = new Carousels();
    //2.初始化组件
  carousels.init({
    //设置的每次轮播的间隔，单位ms，默认是1000ms
    intervalTime:2000
  });
}
````
### 4. 用Hbuild或者webstore等打打开，或者放到你的web服务器上。
> 注意： 因为使用到了ES6模块和CSS变量，需要web服务器哦！
>但是，现在像Hbuild或者webstore等开发环境都有本地web服务器，所有用这里开发环境可以直接运行。

### 5. 配置
#### 5.1 初始化时直接传入配置（类型是一个对象）
````
  carousels.init({
    //设置的每次轮播的间隔，单位ms，默认是1000ms
    intervalTime:2000
  });
````
#### 5.2 打开Carousels.css，里面有一些样式配置，我抽离成一些变量出来方便修改
> 需要注意的是，按钮的垂直居中问题，需要自己骚味算一算。
````
   /*全局设置*/
    --care_hight:200px;/*设置卡片的高度*/
    --care_width:340px;/*设置卡片的宽度*/
    --transiton_opacity:opacity 1s;/*设置淡入淡出效果的值*/

    /*按钮的设置*/
    --btn_isShow:block;/*是否显示按钮*/
    --btn_opacity:0.1;/*设置按钮透明度*/
    --btn_radius:2px;/*置按钮圆角值*/
    --btn_hight:100px;/*设置按钮的高度*/
    --btn_width:20px;/*设置按钮的宽度*/
    /*按钮垂直区中的位置top = 父容器的高度/2 - 自己个高度/2*/
    /*top = (父高度 - 自己的高度)/2*/
    --btn_top:50px;

    /*points*/
    --points_width:5px;
    --points_innerColor:white;
    --points_outerColor:purple;
````
# 6. 后续版本
* 将所有配置选项集中到init参数中
* 增加更多的特效