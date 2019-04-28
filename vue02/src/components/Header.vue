<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="white" text-color="brown" active-text-color="#ffd04b">
       <el-menu-item index="1"> <router-link to='/home'><a href="/home">首页</a></router-link></el-menu-item>
        <el-submenu index="2">
            <template slot="title">分类</template>
            <router-link to='/sort1'><a href="/sort1"> <el-menu-item index="2-1">布偶猫</el-menu-item></a></router-link>
            <router-link to='/sort2'><a href="/sort2" ><el-menu-item index="2-2">英国短毛猫</el-menu-item></a></router-link>
            <router-link to='/sort3'><a href="/sort3" ><el-menu-item index="2-3">暹罗猫</el-menu-item></a></router-link>
            <router-link to='/sort4'><a href="/sort4" ><el-menu-item index="2-4">苏格兰折耳猫</el-menu-item></a></router-link>
            <router-link to='/sort5'><a href="/sort5" ><el-menu-item index="2-5">波斯猫</el-menu-item></a></router-link>
            <router-link to='/sort6'><a href="/sort6" ><el-menu-item index="2-6">挪威森林猫</el-menu-item></a></router-link>
        </el-submenu>
        <el-menu-item index="3"><router-link to='/sell'>
            寄售</router-link>
        </el-menu-item>
        <div class="toright">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" ></el-input>
              </div>  
                <el-button type="primary" class="toright2" @click="dialogVisible2 = true">登录</el-button>
                <el-button type="primary" class="toright1" @click="dialogVisible1 = true">注册</el-button>
                <el-dialog
                    title="注册"
                    :visible.sync="dialogVisible1"
                    width="30%"
                    :before-close="handleClose">
                    <span>用户名：<el-input v-model="input" placeholder="请输入用户名"></el-input></span>
                    <span>密码：<el-input v-model="input" placeholder="请输入密码"></el-input></span>
                    <span>确认密码：<el-input v-model="input" placeholder="请输入密码"></el-input></span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible1 = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                    </span>
                </el-dialog>
                <el-dialog
                    title="登录"
                    :visible.sync="dialogVisible2"
                    width="30%"
                    :before-close="handleClose">
                    <span>用户名：<el-input v-model="input" placeholder="请输入用户名"></el-input></span>
                    <span>密码：<el-input v-model="input" placeholder="请输入密码"></el-input></span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible2 = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
                    </span>
                </el-dialog>
    </el-menu>
</template>

<script>

    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input: '',
                dialogVisible1: false,
                dialogVisible2: false
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            
            handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
            done();
          })
             .catch(_ => {});
      }
    }
        };
    
</script>
<style>
a {
  text-decoration: none;
  color: brown;
}
 
.router-link-active {
  text-decoration: none;
}
.toright{
    position:absolute;
    right: 200px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
}
.toright1{
    position:absolute;
    right: 110px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
}
.toright2{
    position:absolute;
    right: 20px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
}

</style>
