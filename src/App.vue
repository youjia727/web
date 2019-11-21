<template>
  <div id="app">
    <!-- 这是内容展示部分 -->
      <router-view></router-view>

    <!-- 这是底部导航tab -->
    <div class="foot">
      <tab></tab>
    </div>
  </div>
</template>

<script>
  //导入tab的组件到主页面中
  import heades from './base/heades.vue'
  import tab from './base/tab.vue'
  export default {
    name: 'App',
    //注册组件
    components: {
      tab,
      heades
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 3.75rem;
  }

  * {
    margin: 0;
    padding: 0;
  }
  .foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.75rem;
    padding-top: 0.125rem;
    background-color: #EEEEEE;
  }

  .listab {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  span {
    display: inline-block;
    cursor: pointer;
  }
</style>
