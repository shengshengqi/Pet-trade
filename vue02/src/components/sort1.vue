<template>
  <div id="app">
    <Fixbar/>
<img src="../assets/head.png" width="100%">
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><Header/></div></el-col>
</el-row>
<div>
  <sorttable1 v-bind:info="this.table"/>
</div>
  </div>
  
</template>

<script>
    import axios from 'axios';
    import Header from './Header.vue'
    import sorttable1 from './sorttable/sorttable1.vue'
    import Fixbar from './fixbar.vue'
export default {
    components:{
  Header,
  sorttable1,
  Fixbar
 },
 data:()=>({
   table:[]
 }),
  mounted:function(){
    this.getallpet()
  },
  methods:{
    getallpet(){
       axios({
            method:'GET',
            url:'/api/pet/all',
        })
        .then((response)=>{
            // console.log(response.data);
            this.table=response.data.info;
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
    }
  	
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