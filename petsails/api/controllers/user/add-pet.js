module.exports = {

    friendlyName: 'user add pet',

    description: '用户添加自己的宠物',
  
    inputs: {
      userid: {
        type: 'string',
        required: true,
      },
      petid: {
        type: 'string',
        required: true,
      }
    },
  
    exits: {
      success: {
        statusCode: 200,
      },
      fail: {
        statusCode: 403,
      },
    },
  
    //实现函数
    fn: async function (inputs, exits) {
  
    }
  }