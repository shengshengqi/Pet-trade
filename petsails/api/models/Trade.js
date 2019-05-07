/**
 * Trade.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    buyer:{
   
      type:'string',
      required:true,
    },
    seller:{
     
      type:'string',
      required:true,
    },
    time:{
      type:'string',
      required:true,
    },
    petinfo:{
      type:'string',
      required:true,
    },
    buyer_address:{
      type:'string',
      required:true,
    },
    seller_address:{
      type:'string',
      required:true,
    }
  },
};

