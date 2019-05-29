module.exports = {

    friendlyName: 'pets trade',
  
    description: '宠物交易.',
  
    inputs: {
      buyerId: {
        description: '买家id.',
        type: 'number',
        required: true
      },
      sellerId: {
        description: '卖家id.',
        type: 'number',
        required: true
      },
      petId: {
        description: '宠物id.',
        type: 'number',
        required: true
      },
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
        let buyerInfo = await User.find({
            id:inputs.buyerId
        })
        let sellerInfo = await User.find({
            id:inputs.sellerId
        })
        let petInfo = await Pet.find({
            id:inputs.petId
        })
        console.log(sellerInfo,buyerInfo)
        let data = await Trade.create({
            buyerName: buyerInfo[0].userName,
            sellerName: sellerInfo[0].userName,
            time: new Date().getTime(),
            petInfo: petInfo[0].info,
            buyerAddress: buyerInfo[0].address,
            sellerAddress: sellerInfo[0].address, 
        }).intercept((err)=>{
          return exits.fail({info: 'err'})
        }).fetch()  //.fetch()返回参数
        return exits.success({
          info:"交易成功",
          id: data.id
        })
      }
    }
  };
  