<template>
  <div>
    <!-- 这是头部部分 -->
    <div class="header">
      <heades></heades>
    </div>
     <!-- 这是主体部分 -->
    <div class="main">
      <p>{{ minedata }}</p>
    </div>

  </div>
</template>

<script>
  //导入heades组件
  import heades from '../base/heades.vue'
  export default {
    name: 'mine',
    data() {
      return {
        minedata: '这是我的内容'
      }
    },
    components: {
      heades
    }
  }
</script>

<style>
</style>
