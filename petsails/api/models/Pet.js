/**
 * Pet.js
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
    petName:{
      type:'string',
    },
    petVariety:{
      type:'string',
    },
    info:{
      type:'string',
    },
    age:{
      type:'number',
    },
    price:{
      type:'number',
    },
    picture1:{
      type:'string',
    },
    picture2:{
      type:'string',
    },
    picture3:{
      type:'string',
    },
    ownerid:{
      type:'string',
    }
  },
};

