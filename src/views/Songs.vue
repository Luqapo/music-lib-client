<template>
  <CreateSong @song-add="pushSong" v-if="addSong" />
  <el-button
    v-if="!addSong"
    type="success"
    icon="el-icon-success" circle
    @click="showAddSong">
    Add Song
  </el-button>
  <div v-if="!addSong" class="songs" height="100%" style="width: 90%">
    <el-table :data="songs" >
      <el-table-column prop="title" label="Title" width="180">
      </el-table-column>
      <el-table-column prop="year" label="Year">
      </el-table-column>
      <el-table-column prop="publisher" label="Publisher">
      </el-table-column>
      <el-table-column prop="genre" label="Genre" width="180">
      </el-table-column>
      <el-table-column prop="ismn" label="Ismn">
      </el-table-column>
      <el-table-column #default="scope" v-if="state.state.selectedPlaylistId">
        <el-button
          type="success"
          icon="el-icon-circle-plus"
          size="medium" circle
          @click.prevent="addSongToList(scope.row.id)"></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import CreateSong from '@/components/Song/CreateSong.vue';
import { useState } from '../store';

export default {
  name: 'Songs',
  components: {
    CreateSong,
  },
  setup() {
    return { state: useState() };
  },
  async mounted() {
    this.songs.push(...await this.getData());
  },
  data() {
    return {
      songs: [],
      addSong: false,
    };
  },
  methods: {
    async getData() {
      const { songsList } = await fetch('http://localhost:8088/api/song/')
        .then((response) => response.json());
      return songsList;
    },
    async addSongToList(songId) {
      await fetch(`http://localhost:8088/api/playlist/addSong?playlistId=${this.state.state.selectedPlaylistId}&songId=${songId}`, {
        method: 'POST',
      });
    },
    showAddSong() {
      this.addSong = true;
    },
    pushSong(song) {
      if (song) {
        this.songs.push(song);
      }
      this.addSong = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.songs {
  padding: 30px;
}
</style>
