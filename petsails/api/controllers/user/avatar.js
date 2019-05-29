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
      if(this.req.session.userId){
        this.req.file('avatar').upload({
          dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        }, async function (err, uploadedFiles) {

          // console.log(uploadedFiles[0].fd,uploadedFiles[1].fd,uploadedFiles[2].fd);
          let str = sails.config.appPath + '\\assets\\images\\'

          await Pet.update({ id: inputs.id }).set(uploadedFiles[0].fd.replace(str,''))

          if (err) return exits.fail({info:err});
          else {
            return exits.success({info: true});
          }
        });
      }
  }
}   