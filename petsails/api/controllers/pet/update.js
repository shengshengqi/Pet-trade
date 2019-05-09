module.exports = {
    friendlyName: 'update pet message',

    description: '修改宠物信息',
  
    inputs: {
      id: {
        type: 'string',
        required: true,
      },
      petName: {
        type:'string'
      },
      petVariety: {
        type:'string'
      },
      info:{
        type:'string'
      },
      age:{
          type:'number'
      },
      Price: {
        type: 'number',
       // allowNull: true,
      },
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
        let petUpdate=await Pet.updateOne({id:inputs.id}).set({
          petName: inputs.petName,
          petVariety: inputs.petVariety,
          info: inputs.info,
          age: inputs.age,
          price: inputs.price,
        })
        if(petUpdate){
            return exits.success({
                info: "宠物信息更新成功"
            })
        }else{
            return exits.fail({
                info: "宠物信息更新失败"
            })
        }
    }
  }