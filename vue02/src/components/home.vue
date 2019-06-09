<template>
  <div id="app">
    <Fixbar/>
<img src="../assets/head.png" width="100%">
<el-row>
  <el-col :span="24"><Header/></el-col>
</el-row>
<ZMD/>
<el-row>
  </el-row>
<h1>SPETS.COM</h1>


<div class="block">
  <span class="demonstration">
  <el-row>
    <BOCard/>
    <YDCard/>
    <XLCard/>
  </el-row>
  <el-row>
    <br/>
  </el-row>
  <el-row>
    <SGCard/>
    <BSCard/>
    <NWCard/>
  </el-row>
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
    import BOCard from './布偶猫card.vue'
    import YDCard from './英国短毛猫card.vue'
    import XLCard from './暹罗猫card.vue'
    import BSCard from './波斯猫card.vue'
    import SGCard from './苏格兰折耳猫card.vue'
    import NWCard from './挪威森林猫card.vue'
    import ZMD from './走马灯.vue'
    import Fixbar from './fixbar.vue'
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
  BOCard,
  YDCard,
  XLCard,
  SGCard,
  BSCard,
  NWCard,
  Fixbar,
  ZMD
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