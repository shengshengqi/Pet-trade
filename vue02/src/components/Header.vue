<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="white" text-color="brown" active-text-color="#ffd04b">
       <el-menu-item index="1"> <router-link to='/home'><a href="/home">首页</a></router-link></el-menu-item>
       <el-menu-item index="2"><router-link to='/sort1'><a href="/sort1">查看所有</a></router-link></el-menu-item>
        <el-menu-item index="3"><router-link to='/sell'>
            寄售</router-link>
        </el-menu-item>
        <el-menu-item index="4"><router-link to='/search'>
            搜索</router-link>
        </el-menu-item>
 
               
    </el-menu>
</template>

<script>
    import axios from 'axios';
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
