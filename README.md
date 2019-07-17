## 2019.6.15 为创新实践课程所作的基于sails和vue的宠物交易网站(ssq&hch)
### 使用说明
- 后端
	- 环境搭建
		- sails
		- nodemon
		- sails-mysql
	- 使用说明
		- 启动sails
		`cd petsails`进入petsails文件夹
		` npm start`启动sails,地址为localhost：1337
		启动后会需要选择数据库运行模式，直接回车
		- **启动失败怎么办**
			- 请先确定是否已安装nodemon,如未安装，请先安装  
			- 实用开发工具的安装和使用nodemon(可以在代码发生更改的时候自动重启项目，提高开发效率)  
			`cd petsails`    
			`npm install nodemon -g`  
			在package.json里面修改启动方式  
			`"start": "nodemon app.js"`  
			最后`npm start`启动  
- 前端
	- 环境搭建
		- vue
		- vue-cli
		- vuex
		- axios
	- 使用说明
		- 启动
			`cd vue02`进入vue02文件夹
			`npm run dev`启动vue
			默认地址为localhost:8080
			(启动前需同步启动后端，才能访问数据)
			
		- 网站
			- 进入首页后，需先登录才能使用
			  测试账号：hch 密码：4455
			 
			
		
	 