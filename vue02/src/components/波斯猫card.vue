<template>

  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/波斯猫.png" class="image">
      <div style="padding: 14px;">
        <span>波斯猫</span>
        <div class="bottom clearfix">
          <p class="discribe">波斯猫是以阿富汗的土种长毛猫和土耳其的安哥拉长毛猫为基础，在英国经过100多年的选种繁殖，于1860年诞生的一个品种。</p>
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