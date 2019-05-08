module.exports = {
    friendlyName: 'upload pet picture',
  
    inputs: {
      id: {
        type: 'number',
        required: true,
      }
    }
    ,
    exits: {
      success: {
        statusCode: 201,
      },
      fail: {
        statusCode: 400,
      },
    },
  
    fn: function (inputs, exits) {

    }
}   