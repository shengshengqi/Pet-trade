<template>
<el-form action='' label-width="80px" method="post">
  <el-form-item label="用户名：">
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="联系电话：">
    <el-input v-model="form.telephone" placeholder="请输入联系电话"></el-input>
  </el-form-item>
  <el-form-item label="地址：">
    <el-input v-model="form.address" placeholder="请输入地址"></el-input>
  </el-form-item>
  <el-form-item label="个性签名：">
    <el-input v-model="form.signature" placeholder="请输入个新签名"></el-input>
  </el-form-item>
  <el-form-item label="email：">
    <el-input v-model="form.email" placeholder="请输入email"></el-input>
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
               id:this.$store.state.userid,
               userName:that.form.username,
               email:that.form.email,
               telephone:that.form.telephone,
               signature:that.form.signature,
               address:that.form.address 
            }
        })
        .then(function(response){
            console.log(response);
            that.$store.dispatch('getNewUserName',that.username);
            alert('用户信息修改成功！')
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
        
    },
    }
  }
</script>