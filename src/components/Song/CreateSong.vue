<template>
  <div>
    <el-form :model="song" :rules="rules" ref="song" label-width="120px" >
      <el-form-item label="Title" prop="title">
        <el-input v-model="song.title"></el-input>
      </el-form-item>
      <el-form-item label="Genre" prop="genre">
        <el-input v-model="song.genre"></el-input>
      </el-form-item>
      <el-form-item label="ISMN" prop="ismn">
        <el-input v-model="song.ismn"></el-input>
      </el-form-item>
      <el-form-item label="Year" prop="year">
        <el-input v-model="song.year"></el-input>
      </el-form-item>
      <el-form-item label="Publisher" prop="publisher">
        <el-input v-model="song.publisher"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="postData">Submit</el-button>
        <el-button type="danger" @click="cancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreateSong',
  data() {
    return {
      song: {
        title: '',
        genre: '',
        ismn: '',
        year: '',
        publisher: '',
      },
      rules: {
        title: [
          { required: true, message: 'Please input title', trigger: 'blur' },
          {
            min: 2, max: 10, message: 'Length should be 2 to 10', trigger: 'blur',
          },
        ],
        genre: [
          { required: true, message: 'Please input genre', trigger: 'blur' },
          {
            min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur',
          },
        ],
        ismn: [
          {
            required: true, message: 'Please select ismn', trigger: 'change',
          },
        ],
        year: [
          { required: true, message: 'Please input year', trigger: 'blur' },
          {
            min: 4, max: 4, message: 'Length should be 4', trigger: 'blur',
          },
        ],
        publisher: [
          { required: true, message: 'Please input publisher', trigger: 'blur' },
          {
            min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async postData() {
      const song = await fetch('http://localhost:8088/api/song/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.song),
      })
        .then((response) => response.json());

      this.$emit('song-add', song);
    },
    cancel() {
      this.$emit('song-add', null);
    },
  },
};
</script>
