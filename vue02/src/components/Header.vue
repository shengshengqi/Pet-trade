<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="white" text-color="brown" active-text-color="#ffd04b">
       <el-menu-item index="1"> <router-link to='/home'><a href="/home">首页</a></router-link></el-menu-item>
       <el-menu-item index="2"><router-link to='/userimformation'><a href="/userimformation">查看所有</a></router-link></el-menu-item>
        <el-menu-item index="3"><router-link to='/sell'>
            寄售</router-link>
        </el-menu-item>
        <div class="toright">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" ></el-input>

              </div>  
               
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
    right: 100px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
}


</style>
