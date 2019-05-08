/**
 * User.js
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
    userName:{
      type:'string',
      //required:true, 必须时为true
    },
    password:{
      type:'string',
    },
    telephone:{
      type:'string'
    },
    picture:{
      type:'string',
    },
    email:{
      type:'string',
    },
    signature:{
      type:'string',
    }
  },
  // Add a reference to Pets
  // pets: {
  //   collection: 'pet',
  //   via: 'owner'
  // }

};

