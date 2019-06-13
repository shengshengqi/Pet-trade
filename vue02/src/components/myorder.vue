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
      <ordertable v-bind="this.table" />
  </el-col>
</el-row>
</div>

</template>

<script>
    import axios from 'axios'
    import Header from './Header.vue'
    import Fixbar from './fixbar.vue'
    import Cmenu from './cmenu.vue'
    import Ordertable from './sorttable/ordertable.vue'
export default { 
  components:{
  Header,
  Fixbar,
  Cmenu,
  Ordertable
 },
  data:()=>({
   table:[]
  }),
  mounted:function(){
    this.getallorder()
  },
  methods:{
    getallorder(){
      let that=this;
       axios({
            method:'GET',
            url:'/api/trade',
            params:{key:that.$store.state.userid}
        })
        .then((response)=>{
            console.log(response.data);
            this.table=response.data.info;
        })
        .catch(function(error){
            console.log(error);
            console.log(that.$store.state.userid)
            alert('error')
        })
    }
  },
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
  .fixedBar {
	    position: fixed;
	    top: 0;
	    z-index: 998;
	    width: 100%;
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
a {
  text-decoration: none;
  color: brown;
}
 
.router-link-active {
  text-decoration: none;
}
.toright{
    position:absolute;
    right: 100px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
}
</style>