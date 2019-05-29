module.exports = {

    friendlyName: 'user add pet',

    description: '用户添加自己的宠物',
  
    inputs: {
      userId: {
        type: 'number',
        required: true,
      },
      petId: {
        type: 'number',
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
  
    
    fn: async function (inputs, exits) {
      if(this.req.session.userId){
        var userInfo = await User.find({
          id: inputs.userId,
        })
        var petInfo = await Pet.find({
          id: inputs.petId,
        })
    
        if (userInfo[0] && petInfo[0]) {
          // console.log(userInfo);
          // console.log(petInfo);
          try {
            await User.addToCollection(inputs.userId, 'pet',inputs.petId);
            return exits.success({ info: true })
          } catch (err) {
            return exits.fail({ info: err})
          }
        } else {
          return exits.fail({ info: false })
        }
      }
    }
  }