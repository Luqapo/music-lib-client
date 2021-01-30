<template>
  <div>
    <el-form :model="playlist" :rules="rules" ref="playlist" label-width="120px" >
      <el-form-item label="Name" prop="firstName">
        <el-input v-model="playlist.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="postData">Submit</el-button>
        <el-button type="danger" @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { useState } from '../../store';

export default {
  name: 'CreatePlaylist',
  setup() {
    return { state: useState() };
  },
  data() {
    return {
      playlist: {
        name: '',
        songsDTOList: [],
      },
      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
          {
            min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async postData() {
      if (!this.playlist.name) return;
      const playlist = await fetch(`http://localhost:8088/api/playlist?userId=${this.state.state.user_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.playlist),
      })
        .then((response) => response.json());

      this.state.addPlaylist(playlist);

      this.$emit('playlist-add', playlist);
    },
    cancel() {
      this.$emit('playlist-add', null);
    },
  },
};
</script>
