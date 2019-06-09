<template>

  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/苏格兰折耳猫.png" class="image">
      <div style="padding: 14px;">
        <span>苏格兰折耳猫</span>
        <div class="bottom clearfix">
          <p class="discribe">苏格兰折耳猫是猫的一种在耳朵有基因突变的猫种。由于这猫种最初在苏格兰发现，所以以它的发现地和身体特征而命名。</p>
          <el-button type="text" class="button"><router-link to='/search'><a href="/search" >查看所有</a></router-link></el-button>
        </div>
      </div>
    </el-card>
  </el-col>


</template>
<style>
  .discribe {
    font-size: 13px;
    color: #999;
        text-align: left;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>