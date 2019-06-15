<template>
    <el-table
      :data="this.info"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="350"
        >
      </el-table-column>
      <el-table-column
        prop="petName"
        label="name"
        width="350">
      </el-table-column>
      <el-table-column
        prop="petVariety"
        label="种类"
        width="350">
      </el-table-column>
      <el-table-column
        prop="info"
        label="描述"
        width="350">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="350">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="350"
        >
      </el-table-column>
      <el-table-column
        prop="owner"
        label="owner"
        width="350"
        >
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      name:"sorttable1",
      props:{
        info:{
          type:Array
        }
      },
      mounted: function(){


  },
    }
  </script>