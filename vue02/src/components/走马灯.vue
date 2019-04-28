<template>


<el-carousel :interval="2000" arrow="always" height="500px" type="card">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img v-bind:src="img.url" width="100%" height="100%">
    </el-carousel-item>
    </el-carousel>    
</template>
<script>


export default {
    name: 'App',
      data(){
    return{
      imgList:[
        {url:require('../assets/走马灯2.jpg')},
        {url:require('../assets/走马灯3.jpg')},
        {url:require('../assets/走马灯4.jpg')},
        {url:require('../assets/走马灯1.png')},
        {url:require('../assets/走马灯5.jpg')},
        {url:require('../assets/走马灯6.jpg')}
      ]
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #69475f;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: white;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>