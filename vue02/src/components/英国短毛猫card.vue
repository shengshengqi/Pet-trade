<template>

  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/英国短毛猫.png" class="image">
      <div style="padding: 14px;">
        <span>英国短毛猫</span>
        <div class="bottom clearfix">
          <p class="discribe">英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。</p>
          
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