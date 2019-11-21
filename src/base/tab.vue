<template>
  <div class="listab">
    <router-link to='/homepage' tag='span'><i class="cl iconfont icon-1"></i>首页</router-link>
    <router-link to='/store' tag='span'><i class="cl iconfont icon-liebiao"></i>商城</router-link>
    <router-link to='/trolley' tag='span'><i class="cl iconfont icon-qicheqianlian-"></i>购物车</router-link>
    <router-link to='/mine' tag='span'><i class="cl iconfont icon-geren"></i>我的</router-link>
  </div>
</template>

<script>
  export default {
    name: 'tab'
  }
</script>

<style>
   .listab span{
      font-size: 0.875rem;
    }
    .cl {
      display: block;
      font-size: 1.5625rem;
    }
</style>
