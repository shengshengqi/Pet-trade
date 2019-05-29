<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="3">
          <router-link to='/userimformation'><a href="/userimformation">个人信息</a></router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to='/haveupload'><a href="/haveupload">已上架</a></router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to='/myorder'><a href="/myorder">我的订单</a></router-link>
      </el-menu-item>
      
      
    </el-menu>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

