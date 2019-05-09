module.exports = {

    friendlyName: 'creatr user',
  
    description: '用户注册',
  
    inputs: {
      userName: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      },
      dpassword:{
          type: 'string',
          required : true,
      }
    },
  
    exits: {
      success: {
        statusCode: 201,
      },
      fail: {
        statusCode: 403,
      }
    },
  
    fn: async function (inputs, exits) {
        if(inputs.password == inputs.dpassword){
            await User.create({
                userName: inputs.userName,
                password: inputs.password,
              })
        }
        
        var info = await User.findOne({
          userName: inputs.userName,
          password: inputs.password,
        })

        if(info){
            return exits.success({
                info: '用户创建成功',
                id: info.id})
        }else{
        return exits.fail({info: '用户创建失败'})
      }
    }

  }