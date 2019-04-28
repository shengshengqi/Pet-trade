<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="discribe"
        label="描述"
        width="360">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="种类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
        <el-table-column
        prop="price"
        label="价格"
        >
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            discribe: '2016-05-02',
            nation: '',
            age: '5',
            price:'¥1000'
          } 
          ]
        }
      }
    }
  </script>