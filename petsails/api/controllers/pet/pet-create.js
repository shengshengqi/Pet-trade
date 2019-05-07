module.exports = {

  friendlyName: 'Create pets',

  description: '创建宠物.',

  inputs: {
    petName: {
      description: '宠物昵称.',
      type: 'string',
      required: true
    },
    petVariety: {
      description: '宠物品种.',
      type: 'string',
      required: true
    },
    info: {
      description: '详细介绍.',
      type: 'string',
      required: true
    },
    age:{
      description: '年龄.',
      type: 'number',
      required: true
    },
    price: {
      description: '价格.',
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
      statusCode: 201
    },
    serverError: {
      statusCode: 400
    }
  },

  fn: async function (inputs, exits) {
    console.log(inputs.petName);
    await Pet.create({
        petName:inputs.petName,
        petVariety:inputs.petVariety,
        info:inputs.info,
        age:inputs.age,
        price:inputs.price,
    }).intercept((err)=>{
      return exits.serverError({info:err})
    })

    return exits.success({
      info:"宠物创建成功"
    })
  }
};
