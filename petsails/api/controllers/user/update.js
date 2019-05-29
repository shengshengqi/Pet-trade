module.exports = {
    friendlyName: 'update pet message',

    description: '修改用户信息',
  
    inputs: {
      id: {
        type: 'string',
        required: true,
      },
      userName: {
        type:'string'
      },
      telephone: {
        type:'string'
      },
      email:{
        type:'string'
      },
      signature:{
          type:'string'
      },
      address:{
        type:'string'
      }
    },
  
    exits: {
      success: {
        statusCode: 200,
      },
      fail: {
        statusCode: 400,
      },
    },
  
  
    fn: async function (inputs, exits) {
      if(this.req.session.userId){
        let userUpdate=await User.updateOne({id:inputs.id}).set({
          userName: inputs.userName,
          telephone: inputs.telephone,
          email: inputs.email,
          signature: inputs.signature,
          address:inputs.address
        })
        if(userUpdate){
            return exits.success({
                info: "用户信息更新成功"
            })
        }else{
            return exits.fail({
                info: "用户信息更新失败"
            })
        }
      }
    }
  }