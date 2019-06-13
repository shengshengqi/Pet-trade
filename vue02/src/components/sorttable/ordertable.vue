<template>
    <el-table
      :data="this.info"
      style="width: 100%">
      
      <el-table-column
        prop="buyerName"
        label="买家昵称"
        width=300>
      </el-table-column>
      <el-table-column
        prop="sellerName"
        label="卖家昵称"
        width=300>
      </el-table-column>
        
      <el-table-column
        prop="petinfo"
        label="宠物详情"
        width=300
        >
      </el-table-column>
      
    </el-table>
  </template>

  <script>
    export default {
      name:'ordertable',
      props:{
        info:{
          type:Array
        }
      },
     
    }
  </script>