module.exports = {

  friendlyName: 'deal trade',

  description: '完成交易.',

  inputs: {
    tradeId: {
      description: '交易id.',
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
      statusCode: 201
    },
    fail: {
      statusCode: 400
    }
  },

  fn: async function (inputs, exits) {
    if(this.req.session.userId){
      let data = await Trade.updateOne({
        id: inputs.tradeId
      }).set({
        deal: true
      }); //.fetch()返回参数
      if(date){
        return exits.success({
          info: '交易信息更新成功'
        });
      }else{
        return exits.fail({
          info: '交易信息更新失败'
        });
      }
    }
  }
};

