<template>
  <div id="app">
    <Fixbar/>
<img src="../assets/head.png" width="100%">
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><Header/></div></el-col>
</el-row>
<el-row>

<JSBD class="uploadtext" />
</el-row>
  </div>
  
</template>
<script>
    import Header from './Header.vue'

    import JSBD from './寄售表单.vue'
    import Fixbar from './fixbar.vue'
    export default {
    components:{
  Header,

  Fixbar,
  JSBD},
  name: 'App',
  methods:{
  	
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .toleft{
      position:relative;
      top: 150px;
      left: 25%;
      padding: 10px;
      width: 200px;
      height: 200px;

  }
 .uploadtext{
    position: absolute;
    top: 100px;
    left: 60%;
    width: 300px;
    height: 50px;
 }


</style>