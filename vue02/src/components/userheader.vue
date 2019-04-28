<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="white" text-color="brown" active-text-color="#ffd04b">
       <el-menu-item index="1" >touxiang</el-menu-item>
       <el-menu-item index="2" >yonghuming</el-menu-item>
    </el-menu>
</template>

<script>

    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input: '',
                
            };
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
      }
    }
        };
    
</script>
<style>
a {
  text-decoration: none;
  color: brown;
}
 
.router-link-active {
  text-decoration: none;
}
.toright{
    position:absolute;
    right: 200px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
}
.toright1{
    position:absolute;
    right: 110px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
}
.toright2{
    position:absolute;
    right: 20px;
    top: 8px;
    font-size: 14px;
    white-space: nowrap;
    text-decoration: none;
}

</style>
