<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <Header/>
    <el-menu-item>
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item>
      <router-link to="/songs">Songs</router-link>
    </el-menu-item>
    <el-menu-item>
      <router-link to="/user">User</router-link>
    </el-menu-item>
    <Playlists/>
  </el-menu>
</template>

<script>
import Header from '@/components/Header.vue';
import Playlists from '@/components/Playlist/Playlists.vue';

export default {
  name: 'Menu',
  components: {
    Header,
    Playlists,
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  font-weight: 700;
}
.menu {
  background-color: rgb(109, 196, 196);
  height: 100vh;
}
</style>
