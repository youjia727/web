<template>
  <div>
    <!-- 这是头部部分 -->
    <div class="heades">
      <heades></heades>
    </div>
      <!-- 这是主体部分 -->
      <div class="main">
        <p>{{ storedata }}</p>
      </div>
  </div>
</template>

<script>
  //导入组件
  import heades from '../base/heades.vue'
  export default {
    name: 'store',
    data() {
      return {
        storedata: '这是store商城的内容'
      }
    },
    components: {
      heades
    }
  }
</script>

<style>
</style>
