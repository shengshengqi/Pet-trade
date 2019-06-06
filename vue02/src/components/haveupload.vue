<template>
  <div id="app">
    <Fixbar/>
<img src="../assets/head.png" width="100%">
<el-row>
<Header/>
</el-row>
<el-row class="tac">
  <el-col :span="5">
  <Cmenu/>
  </el-col>
  <el-col :span="19">
  <sorttable1 v-bind:info="this.table"/>
  </el-col>
</el-row>
</div>

</template>

<script>
    import axios from 'axios';
    import Header from './Header.vue'
    import sorttable1 from './sorttable/sorttable1.vue'
    import Fixbar from './fixbar.vue'
    import Cmenu from './cmenu.vue'
export default {
    components:{
  Header,
  sorttable1,
  Fixbar,
  Cmenu
 },
 data:()=>({
   table:[]
 }),
  mounted:function(){
    this.getuserspet()
  },
  methods:{
    getuserspet(){
      let that=this;
       axios({
            method:'GET',
            url:'/api/pet/user/id',
            data:{userId:that.$store.state.userid}
        })
        .then((response)=>{
            console.log(response.data);
            this.table=response.data.info;
        })
        .catch(function(error){
          console.log(that.$store.state.userid);
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