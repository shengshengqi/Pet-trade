<template>
<el-form action='' label-width="80px" method="post">
  <el-form-item label="用户名：">
    <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码：">
    <el-input v-model="form.discribe" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="Addpet($event)">提交</el-button>
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
          password:''
        }
      }
    },
    methods: {
      Addpet(event){
        let that=this;
       
        event.preventDefault();
        let name=JSON.stringify(this.name);
        console.log(name);
        //let password=JSON.stringify(this.password);
        //console.log(password);
        axios({
            method:'POST',
            url:'/api/pet',
            data:{
               name:this.name,
               price:this.price,
               age:this.age,
               nation:this.nation,
               discribe:this.discribe 
            }
            
        })
        .then(function(response){
            console.log(response);
            console.log('添加宠物的'+response.data);
            that.$router.push({path:'/admin'});
           
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
        
    },
    }
  }
</script>