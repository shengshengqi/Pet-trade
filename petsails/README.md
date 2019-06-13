# petsails

## 启动sails
> cd petsails

进入petsails文件夹

> npm start

启动sails,地址为localhost：1337

> 启动后会需要选择数据库运行模式，直接回车

**启动失败怎么办**

    1、请先确定是否已安装nodemon,如未安装，请先安装
- 实用开发工具的安装和使用nodemon(可以在代码发生更改的时候自动重启项目，提高开发效率)
- - `cd petsails`  
- - `npm install nodemon -g`
- - 在package.json里面修改启动方式
- - `"start": "nodemon app.js"`
- - 最后`npm start`启动

## 数据库设置
> npm install sails-mysql --save

<a  href ="https://sailsjs.com/config/datastores">数据库配置提示</a>

### sails.js踩坑笔记
- 定制路由的时候controller的命名
  - 只能使用小写字母、“-”，出现大写字母和下划线会出现神秘错误
  - 比如controller/user下有一个get-pet.js的控制器
    给这个js文件命名的时候就千万要注意了，不能写成getPet.js的形式，会访问不到
- 在自己定义的控制器里如果要用req,res就要在前面加上this.req,this.res
- postman测试时的相关问题
  - 使用POST类型的form-data，选择文件类型，进行图片上传
  - 除GET使用param传参之外，其他均使用body传参
