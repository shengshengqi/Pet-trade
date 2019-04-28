<template>
  <div id="app">
    
<img src="../assets/head.png" width="100%">
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><Header/></div></el-col>
</el-row>

<div class="block">
  <span class="demonstration">
  <sorttable1/>
  </span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>


    
    
  </div>
  
</template>

<script>
    import Header from './Header.vue'
    import sorttable1 from './sorttable/sorttable1.vue'

export default {
    components:{
  Header,
  sorttable1
 },
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

</style>