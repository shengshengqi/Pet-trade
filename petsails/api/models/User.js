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
    avatar:{
      type:'string',
    },
    email:{
      type:'string',
    },
    signature:{
      type:'string',
    },
    address:{
      type:'string',
    },
    pet: {
      collection: 'pet',
      via: 'owner'
    }
  },
  // Add a reference to Pets
  // pets: {
  //   collection: 'pet',
  //   via: 'owner'
  // }

};

