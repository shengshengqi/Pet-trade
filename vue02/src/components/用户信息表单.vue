<template>
<el-form action='' label-width="80px" method="post">
  <el-form-item label="用户名：">
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码：">
    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="联系电话：">
    <el-input v-model="form.telephone" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="地址：">
    <el-input v-model="form.address" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="signature：">
    <el-input v-model="form.signature" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="email：">
    <el-input v-model="form.email" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="UpdateUser($event)">提交</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        form:{
          username: '',
          password:'',
          telephone:'',
          address:'',
          email:'',
          signature:''
        }
      }
    },
    methods: {
      UpdateUser(event){
        let that=this;

        axios({
            method:'PATCH',
            url:'/api/user/id',
            data:{
               id:this.id,
               userName:this.username,
               email:this.email,
               telephone:this.telephone,
               signature:this.signature,
               address:this.address 
            }
            
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
        
    },
    }
  }
</script>