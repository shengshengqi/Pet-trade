<template>
  <div id="app">
    <Fixbar/>
<img src="../assets/head.png" width="100%">
<el-row>
<Header/>
</el-row>
<el-row class="tac">
  <el-col :span="5">
    <img src="../assets/logo.png"/>
  </el-col>
  <el-col :span="10">

  </el-col>
</el-row>
</div>

</template>

<script>
    import Header from './Header.vue'
    import Fixbar from './fixbar.vue'
    import Cmenu from './cmenu.vue'
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
        mounted(){
            /*页面挂载获取保存的cookie值，渲染到页面上*/
            let uname = getCookie('username')
            this.name = uname
            /*如果cookie不存在，则跳转到登录页*/
            if(uname == ""){
                this.$router.push('/')
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            
            handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
            done();
          })
             .catch(_ => {});
      },
      quit(){
                /*删除cookie*/
                delCookie('username')
            }
    },
    components:{
  Header,
  Fixbar,
  Cmenu,
  USBD

 },
 
  name: 'App',
  methods:{
  	warnlogin(){
      this.$alert('请先登录！')
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