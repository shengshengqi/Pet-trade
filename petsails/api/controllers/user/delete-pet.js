module.exports = {

    friendlyName: 'delete a pet',

    description: '删除一本图书',

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
        description: 'remove from collection successfully',
        statusCode: 200,
      },
      fail: {
        description: 'fail to remove',
        statusCode: 403,
      }
    },
  
    fn: async function (inputs, exits) {
      if(this.req.session.userId){
        let userInfo = await User.find({ id: inputs.userId })
        let petInfo = await Pet.find({ id: inputs.petId })
        if (userInfo[0] && petInfo[0]) {
          try {
            await User.removeFromCollection(inputs.userId, 'pet', inputs.petId);
            return exits.success({ info: true })
          } catch (err) {
            return exits.fail({ info: err })
          }
        } else {
          return exits.fail({ info: false })
        }
    }
    }
  }