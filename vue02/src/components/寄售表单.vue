<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="昵称：">
    <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
  </el-form-item>
  <el-form-item label="描述：">
    <el-input v-model="form.discribe" placeholder="请输入描述"></el-input>
  </el-form-item>
  <el-form-item label="品种：">
    <el-input v-model="form.nation" placeholder="请输入品种"></el-input>
  </el-form-item>
  <el-form-item label="年龄：">
    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
  </el-form-item>
  <el-form-item label="价格：">
    <el-input v-model="form.price" placeholder="请输入价格"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          age:'',
          discribe:'',
          nation:'',
          price:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>