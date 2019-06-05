<template>
    <div class="fixedBar">
		  <img src="../assets/bar.png" width="100%" height="50px"/>
      <el-button type="primary" class="toright2" @click="dialogVisible2 = true">登录</el-button>
                <el-button type="primary" class="toright1" @click="dialogVisible1 = true">注册</el-button>
                <el-dialog
                    title="注册"
                    :visible.sync="dialogVisible1"
                    width="30%"
                    >
                    <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名"><el-input v-model="form.reusername" placeholder="请输入用户名"></el-input></el-form-item>
                    <el-form-item label="密码"><el-input v-model="form.repassword" placeholder="请输入密码"></el-input></el-form-item>
                    <el-form-item label="确认密码"><el-input v-model="form.dpassword" placeholder="请输入密码"></el-input></el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible1 = false">取 消</el-button>
                        <el-button type="primary" @click="submitRegister($event)">确 定</el-button>
                    </span>
                </el-dialog>
                <el-dialog
                    title="登录"
                    :visible.sync="dialogVisible2"
                    width="30%"
                    >
                   <el-form ref="form" :model="form" method="post" label-width="80px">
                    <el-form-item label="用户名"><el-input v-model="form.username" placeholder="请输入用户名"></el-input></el-form-item>
                    <el-form-item label="密码"><el-input v-model="form.password" placeholder="请输入密码"></el-input></el-form-item>
                   </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible2 = false">取 消</el-button>
                        <el-button type="primary" @click="submitLogin($event)">确 定</el-button>
                    </span>
                </el-dialog>
      </div>
</template>
<script>
import axios from 'axios';
export default {
     name:"Login",
  data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                form:{
                username: '',
                password: '',
                reusername:'',
                repassword: '',
                dpassword:''
                },
                dialogVisible1: false,
                dialogVisible2: false
            };
        },
        methods: {
        submitLogin(event){
        let that=this;
        event.preventDefault();
        let username=JSON.stringify(this.form.username);
        //console.log(account);
        let password=JSON.stringify(this.form.password);
        console.log(that.form.username);
        console.log(that.form.password);
        axios({
            method:'POST',
            url:'/api/user/login',
            data:{
                userName:that.form.username,
                password:that.form.password
            }
            
        })
        .then(function(response){
            console.log(response.data);
             alert('登陆成功！');
        })
        .catch(function(error){
            //console.log(error);
            alert('用户名或密码错误！')
           // console.log(error.status);
        })
        
    },
    submitRegister(event){
        let that=this;
        event.preventDefault();
        let account=JSON.stringify(this.form.reusername);

        let password=JSON.stringify(this.form.repassword);

        let dpassword=JSON.stringify(this.form.dpassword);

       axios({
            method:'POST',
            url:'/api/user',
            data:{
                userName:this.form.reusername,
                password:this.form.repassword,
                dpassword:this.form.dpassword
            }
            
        })
        
        .then(function(response){
            console.log(response.data);
            that.useid=response.data.info.id;
            console.log("我是用户的id"+ that.useid);
            alert('创建成功！');
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
        
    }, 

    },
}
</script>
<style>
  .fixedBar {
	    position: fixed;
	    top: 0;
	    z-index: 998;
	    width: 100%;
	}
.toright1{
    position:fixed;
    right: 110px;
    top: 5px;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
}
.toright2{
    position:fixed;
    right: 20px;
    top: 5px;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
}
</style>