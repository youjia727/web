<template>
  <div>
    <!-- 这是头部部分 -->
    <div class="header">
      <heades></heades>
    </div>
    <!-- 这是主体部分 -->
    <div class="main">
      <p>{{ cartdata }}</p>
    </div>
  </div>

</template>

<script>
  //导入heades组件
  import heades from '../base/heades.vue'
  export default {
    name: 'trolley',
    data() {
      return {
        cartdata: '这是购物的内容部分'
      }
    },
    components: {
      heades
    }
  }
</script>

<style>
</style>
