<template>
  <div>
    <el-button type="success" icon="el-icon-circle-plus" size="medium" @click="userFormOn">
      Add user
    </el-button>
    <CreateUser @user-add="addUser" v-if="userForm"/>
    <div v-else>
      <el-table :data="users" @row-click="setUser">
      <el-table-column prop="id" label="Id" width="40">
      </el-table-column>
      <el-table-column prop="firstName" label="First name">
      </el-table-column>
      <el-table-column prop="lastName" label="Last Name">
      </el-table-column>
      <el-table-column prop="gender" label="Gender" width="80">
      </el-table-column>
      <el-table-column prop="email" label="Email">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import CreateUser from '@/components/User/CreateUser.vue';
import { useState } from '../store';

export default {
  name: 'User',
  components: {
    CreateUser,
  },
  setup() {
    return { state: useState() };
  },
  async created() {
    const users = await this.getData();
    if (users && users.length) {
      this.users.push(...users);
    }
  },
  data() {
    return {
      users: [],
      userForm: false,
    };
  },
  methods: {
    async getData() {
      const { usersList } = await fetch('http://localhost:8088/api/user/')
        .then((response) => response.json());
      return usersList;
    },
    addUser(user) {
      if (user) {
        this.users.push(user);
      }
      this.userForm = false;
    },
    userFormOn() {
      this.userForm = true;
    },
    async setUser(user) {
      this.state.setUserId(user.id);
      const playlists = await this.getPlaylists(user.id);
      this.state.setPlaylists(playlists);
    },
    async getPlaylists(userId) {
      const { playlists } = await fetch(`http://localhost:8088/api/playlist?userId=${userId}`)
        .then((response) => response.json());
      return playlists;
    },
  },
};
</script>

<style lang="scss" scoped>
  button {
    margin: 0 0 15px 0;
    width: 10%;
    font-size: 1.2rem;
  }
</style>
