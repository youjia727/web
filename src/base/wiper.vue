<template>
  <swiper :options='swiperOption'>
    <swiper-slide>
      <div class="swiperimg">
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiperimg">
       <a href=""><img src='../../img/daoyan.jpg' />
       <p>衣服新款类</p>
       </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiperimg">
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiperimg">
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
        <a href=""><img src='../../img/daoyan.jpg' />
        <p>衣服新款类</p>
        </a>
      </div>
    </swiper-slide>
    <div class="swiper-pagination rig" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'Swiper2',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .swiperimg{
    display: flex;
     justify-content: space-around;
  }
  .swiperimg a{
    width: 7.1875rem;
  }
  .swiperimg img{
    width: 7.1875rem;
    height: 12.5rem;
    display: inline-block;
    border-radius: 0.625rem;
  }
  .swiperimg p{
    color: black;
    width: 7.1875rem;
    height: 1.25rem;
    text-align: left;
    overflow: hidden;
    letter-spacing: 0.0625rem;
    font-family: kaiti;
  }
</style>
