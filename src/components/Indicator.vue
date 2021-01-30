<template>
  <div class="left">
    <el-button :plain="true" >{{ state.state.selectedPlaylistId }}</el-button>
    <el-button :plain="true" >{{ state.state.user_id }}</el-button>
  </div>
</template>

<script>
import { useState } from '../store';

export default {
  name: 'Indicator',
  setup() {
    return { state: useState() };
  },
  data() {
    return {
      userId: this.state.state.user_id,
      playlistId: this.state.state.selectedPlaylistId,
    };
  },
  watch: {
    userId() {
    },
    playlistId() {
    },
  },
};
</script>

<style lang="scss" scoped>
  .left {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
</style>
