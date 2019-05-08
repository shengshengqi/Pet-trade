module.exports = {

    friendlyName: 'login',
  
    description: '用户登陆',
  
    inputs: {
      userName: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      }
    },
  
    exits: {
      success: {
        statusCode: 200,
      },
      fail: {
        statusCode: 401,
      }
    },
  
    fn: async function (inputs, exits) {
      var userInfo = await User.findOne({
        userName: inputs.userName,
        password: inputs.password,
      })
  
      if (userInfo) {     
        return exits.success({ info: userInfo })
      } else {
        return exits.fail({info: '登陆失败'})
      }
    }
  }