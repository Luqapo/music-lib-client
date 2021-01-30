<template>
  <div class="home" v-if="playlist">
    <el-card class="box-card">
      <h1>Name: {{ playlist.name }}</h1>
      <div v-for="song in playlist.songsDTOList" :key="song.id" class="text item">
        <div class="flex">
          <h2>{{'Tiitle: ' + song.title }}</h2>
          <el-button
            type="danger"
            icon="el-icon-video-play"
            circle
          ></el-button>
        </div>
        <hr class="line"/>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'PlaylistCard',
  props: {
    playlistId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      playlist: null,
    };
  },
  async mounted() {
    if (this.playlistId) {
      const playlist = await this.getData(this.playlistId);
      this.playlist = playlist;
    }
  },
  methods: {
    async getData(id) {
      const playlist = await fetch(`http://localhost:8088/api/playlist/${id}`)
        .then((response) => response.json());
      return playlist;
    },
  },
  watch: {
    async playlistId(val) {
      const playlist = await this.getData(val);
      this.playlist = playlist;
    },
  },
};
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: 1rem;
  }

  .line {
    width:80%;
    text-align:left;
    margin-left:0
  }
</style>
