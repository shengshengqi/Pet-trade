<template>
<el-form action='' label-width="80px" method="post">
  <el-form-item label="昵称：">
    <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
  </el-form-item>
  <el-form-item label="描述：">
    <el-input v-model="form.discribe" placeholder="请输入描述"></el-input>
  </el-form-item>
  <el-form-item label="品种：">
    <el-select v-model="form.nation" placeholder="请输入品种">
      <el-option label="布偶猫" value="buou"></el-option>
      <el-option label="英国短毛猫" value="yingduan"></el-option>
      <el-option label="暹罗猫" value="xianluo"></el-option>
      <el-option label="苏格兰折耳猫" value="sugelan"></el-option>
      <el-option label="波斯猫" value="bosi"></el-option>
      <el-option label="挪威森林猫" value="nuowei"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="年龄：">
    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
  </el-form-item>
  <el-form-item label="价格：">
    <el-input v-model="form.price" placeholder="请输入价格"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="Addpet($event)">提交</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        form:{
          name: '',
          age:'',
          discribe:'',
          nation:'',
          price:''
        }
      }
    },
    methods: {
      Addpet(event){
        let that=this;
       
        event.preventDefault();
        let name=JSON.stringify(this.name);
        console.log(name);
        //let password=JSON.stringify(this.password);
        //console.log(password);
        axios({
            method:'POST',
            url:'/api/pet',
            data:{
               name:this.name,
               price:this.price,
               age:this.age,
               nation:this.nation,
               discribe:this.discribe 
            }
            
        })
        .then(function(response){
            console.log(response);
            console.log('添加宠物的'+response.data);
            that.$router.push({path:'/admin'});
           
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
        
    },
    }
  }
</script>