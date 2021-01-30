<template>
  <div>
    <el-form :model="user" :rules="rules" ref="user" label-width="120px" >
      <el-form-item label="First name" prop="firstName">
        <el-input v-model="user.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Last name" prop="firstName">
        <el-input v-model="user.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Gender" prop="gender">
        <el-select v-model="user.gender" placeholder="Select gender">
          <el-option label="Male" value="male"></el-option>
          <el-option label="Female" value="female"></el-option>
          <el-option label="Other" value="other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="user.password"></el-input>
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
  name: 'CreateUser',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
      },
      rules: {
        firstName: [
          { required: true, message: 'Please input fist name', trigger: 'blur' },
          {
            min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur',
          },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
          {
            min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur',
          },
        ],
        gender: [
          {
            required: true, message: 'Please select gender', trigger: 'change',
          },
        ],
        email: [
          { required: true, message: 'Please input emil', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
        ],
        password: [
          { required: true, message: 'Please input fist password', trigger: 'blur' },
          {
            min: 6, max: 10, message: 'Length should be 6 to 10', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async postData() {
      const user = await fetch('http://localhost:8088/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => response.json());
      this.$emit('user-add', user);
    },
    cancel() {
      this.$emit('user-add', null);
    },
  },
};
</script>
