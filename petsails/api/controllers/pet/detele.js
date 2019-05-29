module.exports = {

  friendlyName: 'delete pet',

  description: '删除一个宠物',

  inputs: {
    id:{
      description: '宠物id',
      type: 'number',
      required: true
    },
    petName: {
      description: '宠物名字',
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 204,  //success无info提示
    },
    fail: {
      statusCode: 400,
    },
  },

  fn: async function (inputs, exits) {
    if(this.req.session.userId){
      await Pet.destroy({
          id: inputs.id,
          petName: inputs.petName,
        }).intercept((err) => {
          return exits.fail({ info: 'err' })
        });
        
        return exits.success({ info:"删除成功" })
  }
}
};