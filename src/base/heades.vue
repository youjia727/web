<template>
  <div class="heades">
    <div class="header">
      <slot name='headers'>
        <span class="slt iconfont icon-saoma"></span>
        <label>
          <i class="sor iconfont icon-RectangleCopy"></i>
          <input type="search" placeholder="商品/店铺" />
          <input type="button" value="搜索" />
          <i class="zls iconfont icon-zhaoxiangji"></i>
        </label>
        <span class="rlt iconfont icon-lianxi"></span>
      </slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'heades'
  }
</script>

<style lang="less" scoped>
  .heades {
    line-height: 50px;
    width: 100%;
    background-color: #ff4466;
    position: fixed;
    top: 0;
    z-index: 100
  }

  .header {
    display: flex;
  }

  .header span {
    flex: 1;
    font-size: 1.5625rem;
    color: gainsboro;
  }

  .header label {
    position: relative;
    top: -0.125rem;
    flex: 8;
  }

  .header .sor {
    position: absolute;
    left: 0.625rem;
    top: 0.125rem;
    font-size: 1.165rem;
  }

  .header .zls {
    position: absolute;
    right: 2.8125rem;
    top: 0.125rem;
    font-size: 1.375rem;
  }

  .header input:first-of-type {
    width: 100%;
    height: 2rem;
    border: 0;
    border-radius: 3.125rem;
    text-indent: 1.8rem;

  }

  .header input:nth-of-type(2) {
    width: 15%;
    height: 2rem;
    border: 0;
    border-radius: 3.125rem;
    position: absolute;
    background-color: white;
    right: 0.45rem;
    top: 0.5625rem;
  }
</style>
