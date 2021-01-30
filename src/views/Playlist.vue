<template>
  <div class="home">
    <CreatePlaylist v-if="!this.$route.query.playlistId" />
    <PlaylistCard :playlistId="this.$route.query.playlistId" v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePlaylist from '@/components/Playlist/CreatePlaylist.vue';
import PlaylistCard from '@/components/Playlist/PlaylistCard.vue';
import { useState } from '../store';

export default {
  name: 'Playlist',
  components: {
    CreatePlaylist,
    PlaylistCard,
  },
  setup() {
    return { state: useState() };
  },
  data() {
    return {
      playlist: null,
    };
  },
};
</script>
