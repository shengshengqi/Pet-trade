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
      console.log(inputs.id)
      this.req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images')
      }, async function (err, uploadedFiles) {
        var baseUrl = sails.config.custom.baseUrl;
        console.log(baseUrl);
        //console.log(err, uploadedFiles);
        await Pet.update({ id: inputs.id }).set({
         picture1:uploadedFiles[0].fd,
         //picture2:require('util').format('%s/user/avatar/%s', baseUrl,)
        })
        if (err) return exits.fail({info:err});
        else {
          return exits.success({info: true});
        }
      });
    }
}   