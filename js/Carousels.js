
export class Carousels{
  constructor() {
    this.carousels = document.getElementById('carousels');
    this.items = document.getElementsByClassName('item');
    this.btn_left = document.getElementsByClassName('btn_left')[0];
    this.btn_right = document.getElementsByClassName('btn_right')[0];
    this.points = document.getElementsByClassName('point');
    this.care_num = this.items.length;
    this.active_flag = 0; //记录当前获取的编号
    this.carousels_timer = null ; //定时器
    this.intervalTime = 1000;
  }
  init(config)
  {
    console.log('欢迎使用梦兮Q的UI组件，请多多支持！   ' +
      '有任何可以改进的地方，欢迎联系我哦，^_^ !    ' +
      'QQ邮箱：1486073356@qq.com');
    //配置
    this.intervalTime = config.intervalTime;//毫秒
    //初始化小点
    this.initPoints();
    //1.绑定事件
     if(this.btn_left !== undefined) {
       this.btn_right.onclick = (e) => {
         //先把定时器给关了
         clearInterval(this.carousels_timer);
         // console.log('定时器给关了');
         this.nextitem();
       }
       this.btn_left.onclick = (e) => {
         this.preitem();
       }
     }else{
       console.log('你没有添加按钮哦！');
     }
  this.carousels.onmouseenter = () =>{
    //组件活得焦点，清除定时器
    clearInterval(this.carousels_timer);
  }
  this.carousels.onmouseleave = () => {
    //当组件失去焦点，重启计时器
    this.carousels_timer = this.run_timer();
  }
  // 2.开启定时器
    this.carousels_timer = this.run_timer();
  }

  /*
  定义方法
   */
  initPoints(){
    //检测是否添加了小点
    if(this.points.length !== 0){
    //给每个小点绑定与卡片一样的index，并绑定一个点击事件
    for (let i = 0;i < this.care_num;i++){
      // this.points[i].setAttribute('data-index',i);
      //这里根本就不需要给标签绑定自定义属性值
      //因为这里的值可以直接在下面点击事件中使用，不用传参。
      //下面事件的this就是这里的this！
      this.points[i].onclick = (e) =>{
        //给每个点绑定点击事件的时候，每个点击事件都是独立
        //设置一个变量，用于保存每个点对应的index值。
        let index = i;//
        this.pointClick(index);
        // console.log(e);
        }
      }
    }else {
      console.log('没有添加小点O!');
    }
  }
  pointClick(i){
    // 当点被点击时，活动设置为自己的index值
    this.clearLastActive();
    this.active_flag = i;
    this.showActiveItem();
  }
  clearLastActive(){
    this.items[this.active_flag].classList.remove('item_active');
    if(this.points.length !== 0) {
      this.points[this.active_flag].classList.remove('point_active');
    }
  }
  showActiveItem() {
    this.items[this.active_flag].classList.add('item_active');
    if(this.points.length !== 0) {
      this.points[this.active_flag].classList.add('point_active');
    }
  }
  nextitem() {
    //判断是否越界
    if(this.active_flag < this.care_num-1){
      //清除上一个
      this.clearLastActive();
      //将活动页设置成下一个
      this.active_flag = this.active_flag + 1;
      //显示活动页
      this.showActiveItem();
    }
    else{
      //越界，回到第一张：当前样式的去掉，设置活跃的为第一张，
      //清除上一个
     this.clearLastActive();
      this.active_flag = 0 ;
      this.showActiveItem();
    }
  }
  preitem(){
    //判断是否越界
    if(this.active_flag !== 0){
      //清除上一个
      this.clearLastActive();
      //
      this.active_flag = this.active_flag - 1;
      this.showActiveItem();
    }
    else{
      //越界，回到最后一张：当前样式的去掉，设置活跃的为最后一张，
      // console.log('越界');
      this.clearLastActive();
      this.active_flag = this.items.length-1 ;
     this.showActiveItem();
    }
  }
  run_timer(){
    //定时器，让他动起来。
    return (setInterval(() => { this.nextitem() },this.intervalTime));
  }




}