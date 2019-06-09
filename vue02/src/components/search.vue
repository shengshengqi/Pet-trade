<template>
  <div id="app">
    <Fixbar/>
<img src="../assets/head.png" width="100%">
<el-row>
  <el-col :span="24">
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="white" text-color="brown" active-text-color="#ffd04b">
       <el-menu-item index="1"> <router-link to='/home'><a href="/home">首页</a></router-link></el-menu-item>
       <el-menu-item index="2"><router-link to='/sort1'><a href="/sort1">查看所有</a></router-link></el-menu-item>
        <el-menu-item index="3"><router-link to='/sell'>
            寄售</router-link>
        </el-menu-item>
        <el-menu-item index="4"><router-link to='/search'>
            搜索</router-link>
        </el-menu-item>
        <div class="toright">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" @keyup.13.native="entersearch"></el-input>

              </div>  
               
    </el-menu></el-col>
</el-row>
<div>
  <sorttable1 v-bind:info="this.table"/>
</div>
</div>
</template>
<script>
    import axios from 'axios';
    import Header from './Header.vue'
    import Fixbar from './fixbar.vue'
    import sorttable1 from './sorttable/sorttable1.vue'
export default {
  data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input: '',
                dialogVisible1: false,
                dialogVisible2: false,
                name: ''
            };
        },

        methods: {

    },
    components:{
  Header,
  Fixbar,
  sorttable1
 },
 data:()=>({
   table:[]
 }),
//   mounted:function(){
//     this.entersearch()
//   },
  methods:{
    entersearch(){
       let that = this;
       axios({
            method:'GET',
            url:'/api/pet/key',
            data:{key:this.input}
        })
        .then((response)=>{
            console.log(response.data);
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