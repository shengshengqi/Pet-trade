/**
 * Trade.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
    },
    buyerName: {
      type:'string',
    },
    sellerName:{
      type:'string',
    },
    buyerId: {
      type: 'number',
    },
    sellerId: {
      type: 'number',
    },
    petId: {
      type: 'number',
    },
    time:{
      type:'string',
    },
    petInfo:{
      type:'string',
    },
    buyerAddress:{
      type:'string',
    },
    sellerAddress:{
      type:'string',
    },
    finished:{
      type:'number'
    }
  },
};

