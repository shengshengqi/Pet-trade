/**
 * Pet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    petname:{
   
      type:'string',
      required:true,
    },
    petvariety:{
     
      type:'string',
      required:true,
    },
    info:{
      type:'string',
      required:true,
    },
    age:{
      type:'string',
      required:true,
    },
    picture1:{
      type:'string',
      required:true,
    },
    picture2:{
      type:'string',
      required:true,
    },
    picture3:{
      type:'string',
      required:true,
    },
    ownerid:{
      type:'string',
      required:true,
    },
    price:{
      type:'string',
      required:true,
    }
  },
};

