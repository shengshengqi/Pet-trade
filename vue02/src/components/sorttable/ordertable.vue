<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="订单编号"
        width="300">
      </el-table-column>
      <el-table-column
        prop="name"
        label="昵称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="成交价格"
        width="180">
      </el-table-column>
        <el-table-column
        prop="buysell"
        label="买/卖"
        >
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            id: '',
            name: '',
            price: '',
            buysell:''
          } 
          ]
        }
      }
    }
  </script>