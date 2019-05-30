<template>

  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/布偶猫.png" class="image">
      <div style="padding: 14px;">
        <span>布偶猫</span>
        <div class="bottom clearfix">
          <p class="discribe">布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫。布偶猫较为温顺好静，对人友善。</p>
          <el-button type="text" class="button"><router-link to='/sort1'><a href="/sort1" >查看所有</a></router-link></el-button>
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
  name:"buou",
  data() {
    return {
    };
  }
}
</script>