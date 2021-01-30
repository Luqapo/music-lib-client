<template>
  <el-submenu index="1">
      <template #title>
        <i class="el-icon-s-unfold"></i>
        <span class="submenu">Playlists</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-if="state.state.user_id" :key="0" class="submenu">
          <router-link :to="{ path: '/playlist' }">
          <span>Add playlist</span>
          </router-link>
          <i class="el-icon-plus"></i>
        </el-menu-item>
        <el-menu-item
          class="submenu"
          v-for="playlist in playlists"
          :key="playlist.id"
          @click="slecetPlaylist(playlist.id)"
          >
          <router-link :to="{ path: '/playlist', query: { playlistId: playlist.id } }">
            {{ playlist.name }}
          </router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
</template>

<script>
import { useState } from '../../store';

export default {
  name: 'Playlists',
  setup() {
    return { state: useState() };
  },
  data() {
    return {
      playlists: this.state.state.playlists,
    };
  },
  methods: {
    async getData() {
      if (!this.state.userId) return null;
      const { playlistList } = await fetch(`http://localhost:8088/api/playlist?userId=${this.state.userId}`)
        .then((response) => response.json());
      return playlistList;
    },
    slecetPlaylist(playlistId) {
      this.state.setSelectedPlaylist(playlistId);
    },
  },
};
</script>

<style lang="scss" scoped>
.submenu {
  // background-color:  rgb(109, 196, 196);
  font-size: 1.2rem;
  font-weight: 700;
}
a {
  text-decoration: none;
  color: black;
}

text {
  text-decoration: none;
  color: white;
}

li {
  div {
    padding: 0;
  }
}
</style>
