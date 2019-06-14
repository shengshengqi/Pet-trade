module.exports = {

    friendlyName: 'pets trade table',
  
    description: '宠物交易表.',
  
    inputs: {
        key: {
            description: '买家id、卖家id',
            type: 'number',
            required: true,
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
            let info = await Trade.find({
                or: [
                    { buyerId: inputs.key  },
                    { sellerId:  inputs.key }
                ]
            })
            if (info[0]) {
                return exits.success({ info });
            } else {
                return exits.notFound();
            }
        }
    }
  };
  