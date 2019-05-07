/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    username:{
   
      type:'string',
      required:true,
    },
    password:{
     
      type:'string',
      required:true,
    },
    telephone:{
      type:'string',
      required:true,
    },
    picture:{
      type:'string',
      required:true,
    },
    email:{
      type:'string',
      required:true,
    },
    signature:{
      type:'string',
      required:true,
    }
  },
  // Add a reference to Pets
  // pets: {
  //   collection: 'pet',
  //   via: 'owner'
  // }

};

