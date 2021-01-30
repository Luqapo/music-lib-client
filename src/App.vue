<template>
  <el-container style="height: 100vh, border: 1px solid #eee, margin: 0px, padding: 0px">
    <el-aside>
      <Menu/>
    </el-aside>
    <el-container>
      <el-header>
        <Indicator/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Indicator from '@/components/Indicator.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Indicator,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: darkgray;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
