<template>

  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/暹罗猫.png" class="image">
      <div style="padding: 14px;">
        <span>暹罗猫</span>
        <div class="bottom clearfix">
          <discribe class="discribe">暹罗猫是世界著名的短毛猫，也是短毛猫的代表品种。暹罗猫能够较好适应主人当地的气候，且性格刚烈好动，善解人意。</discribe>
          <el-button type="text" class="button"><router-link to='/sort3'><a href="/sort3" >查看所有</a></router-link></el-button>
        </div>
      </div>
    </el-card>
  </el-col>


</template>
<style>
  .discribe {
    font-size: 13px;
    color: #999;
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