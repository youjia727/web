<template>
  <div>

    <!-- 这是头部部分 -->
    <div class="header">
      <!-- 头部组件 -->
      <heades></heades>
    </div>
    <!-- 活动提示部分 -->
    <div class="yhed">
      <span><i class="iconfont icon-99yuanbaoyou"></i>全国包邮</span>
      <span><i class="iconfont icon-pei"></i>延误必赔</span>
      <span><i class="iconfont icon-daiqujianyewu"></i>免费上门取件</span>
      <span><i class="iconfont icon-feiyongbaohan"></i>退货补运费</span>
    </div>
    <!-- 这是主体内容部分 -->
    <div class="main">

      <!-- 轮播图部分 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../img/banner0.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../img/banner1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../img/banner2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../img/banner3.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../img/banner4.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../img/banner5.jpg"></mt-swipe-item>
      </mt-swipe>

      <!-- 商品列表分类 -->
      <div class="shoplist">
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
        <router-link to=''><img src="../../img/daoyan.jpg" /><p>1</p></router-link>
      </div>

      <!-- 限时快购 -->
      <div class="discount">
        <p>
          <label class="fl"><b>限时快抢</b><span>00</span>：<span>00</span>：<span>00</span></label>
          <label class="fr">更多低价疯抢<i>></i></label>
        </p>
        <div class="panic">
          <a href="">
            <img src="../../img/daoyan.jpg" />
            <dl>
              <dd>品牌名字</dd>
              <dt>立省87.00元</dt>
            </dl>
            <label><span>￥98.00</span><i>抢</i></label>
          </a>
          <a href="">
            <img src="../../img/daoyan.jpg" />
            <dl>
              <dd>品牌名字</dd>
              <dt>立省87.00元</dt>
            </dl>
            <label><span>￥98.00</span><i>抢</i></label>
          </a>
          <a href="">
            <img src="../../img/daoyan.jpg" />
            <dl>
              <dd>品牌名字</dd>
              <dt>立省87.00元</dt>
            </dl>
            <label><span>￥98.00</span><i>抢</i></label>
          </a>
        </div>
      </div>

      <!-- 穿搭解忧室 -->
      <div class="discount wear">
        <p>
          <label class="fl"><b>穿搭解忧室</b></label>
          <label class="fr">你的穿搭灵感中心&sdot;每日10点跟新</label>
        </p>
        <div class="panic play">
          <a href="">
            <img src="../../img/daoyan.jpg" />
            <h3>小个子</h3>
            <p>巧搭配显高术</p>
            <span>10条<br>上新</span>
          </a>
          <a href="">
            <img src="../../img/daoyan.jpg" />
            <h3>小个子</h3>
            <p>巧搭配显高术</p>
            <span>10条<br>上新</span>
          </a>
          <a href="">
            <img src="../../img/daoyan.jpg" />
            <h3>小个子</h3>
            <p>巧搭配显高术</p>
            <span>10条<br>上新</span>
          </a>
        </div>
      </div>

      <!-- 搭配购 -->
      <div class="discount wear ast">
        <p>
          <label class="fl"><b>搭配购</b></label>
          <label class="fr">今日<mark>12:00</mark>已更新</label>
        </p>
        <div class="panic play">
          <Swiper2 :swiperSlides="swiperbanner"></Swiper2>
        </div>
      </div>

      <!-- 今日优惠 -->
      <div class="dazhe">——<i class=""></i><span>今日特惠</span>——</div>

      <!-- 组件商品 -->
      <div class="shoppingplay">
        <p>全部</p>
      </div>
      <div class="msdata">
        {{ homedata }}
      </div>
    </div>
  </div>
</template>

<script>
  //导入heades的组件
  import heades from '../base/heades.vue'
  import Swiper2 from '../base/wiper.vue'

  export default {
    name: 'homepage',
    data() {
      return {
        homedata: '这是homedata的内容显示'
      }
    },

    //注册组件
    components: {
      heades,Swiper2
    }
  }
</script>

<style lang="less" scoped>
  //公共样式
  .shoplist,.discount{
    width: 97%;
    margin: 0.5rem auto 0;
    background-color: white;
    border-radius: 0.625rem;
    padding: 0.625rem 0;
  }
  //轮播图部分
  .mint-swipe {
    height: 8.75rem;
    margin-top: 4.875rem;
  }
  .mint-swipe img {
    width: 97%;
    height: 100%;
    border-radius: 0.625rem;
  }

  //扶持活动部分
  .yhed {
    display: flex;
    position: absolute;
    top: 3.125rem;
    left: 0;
    height: 6.25rem;
    width: 100%;
    justify-content: space-around;
    background-color: #ff4466;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
  }
  .yhed span {
    color: gainsboro;
    font-size: 0.75rem;
    height: 1.25rem;
    letter-spacing: 1px;
  }

  //商品列表部分
  .shoplist a{
    display: inline-block;
    margin: 0.3125rem;
    text-decoration: none;

  }
  .shoplist a p{
    text-align: center;
    color: gray;
    font-weight: normal;
  }
  .shoplist a img{
    width: 3.3125rem;
    border-radius: 50%;
  }

  //限时快购
  .discount{
    height: 14.125rem;
  }
  .discount >p{
    margin: 0 0.625rem;
    height: 2.1875rem;
  }
  .discount >p>label:first-of-type{
    color: black;
    font-weight: bold;
    font-family: kaiti
  }
  .discount >p>label b{
    font-size: 1rem;
    margin-right: 0.625rem
  }
  .discount >p>label span{
    background-color: black;
    color: white;
    border-radius: 0.125rem;
    padding: 0 0.25rem;
  }
  .discount >p>label:last-of-type{
    font-size: 0.75rem;
    letter-spacing: 0.0625rem;
    line-height: 1.8125rem;
    color: grey;
    font-family: kaiti
  }
  .discount .panic{
    display: flex;
    justify-content: space-around;
  }
  .discount .panic a img{
    border-radius: 0.3125rem;
    width: 7.1875rem;
  }
  .discount .panic a dl{
    text-align: left;
    color: rgba(80, 60, 0);
    font-size: 0.8125rem;
    font-family: kaiti
  }
  .discount .panic a dl dt{
    margin-top: -0.3125rem;
    color: red;
    font-weight: bold;
  }
  .discount .panic a label{
    display: block;
    margin-top: 0.5rem;
    width: 7.1875rem;
    height: 1.25rem;
  }
  .discount .panic a label span{
    display: inline-block;
    float: left;
    color: black;
  }
  .discount .panic a label i{
    display: inline-block;
    width: 1.25rem;
    border-radius: 50%;
    float: right;
    color: white;
    background-color: red;
  }

  //穿搭解衣室
  .wear{
    height: 10rem;
  }
  .play a{
    position: relative;
  }
  .play h3,.play p,.play span{
    position: absolute;
    color: white;
  }
  .play h3{
    left: 0.625rem;
    top: 0.125rem;
    font-family: fangsong
  }
  .play p{
    bottom: 0.625rem;
    left: 0.625rem;
    letter-spacing: 0.125rem;
    font-size: 0.695rem;
    font-family: kaiti
  }
  .play span{
    top: 0.125rem;
    right: 0.625rem;
    font-size: 0.625rem;
  }

  //搭配购
  mark{
    color: white;
    background-color: #ff4466;
    border-radius: 0.125rem;
    padding: 0.125rem;
  }
  .ast{
    height: 17.1875rem;
  }

  //今日优惠
  .dazhe{
    color: grey;
  }
  .dazhe span{
    color: black;
    font-weight: bold;
    letter-spacing: 0.0625rem;
    font-family: kaiti;
    font-size: 0.875rem;
    opacity: 0.9;
  }
  .dazhe span,.dazhe i{
    margin: 0.3125rem;
    padding: 0.625rem 0;
  }

  // 商品展示
  .shoppingplay{
    color: black;
    background-color: white;
    padding: 0.625rem;
  }
  .msdata{
    margin-bottom: 3.75rem;
  }
</style>
