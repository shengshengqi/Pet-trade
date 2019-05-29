module.exports = {
    friendlyName: 'upload pet picture',
  
    inputs: {
      id: {
        type: 'number',
        required: true,
      },
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
        this.req.file('picture').upload({
          dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        }, async function (err, uploadedFiles) {

          // console.log(uploadedFiles[0].fd,uploadedFiles[1].fd,uploadedFiles[2].fd);
          let str = sails.config.appPath + '\\assets\\images\\'
          
          let index=1,obj={}
          uploadedFiles.forEach(element => {  //最多可上传3张图片
            obj[`picture${index}`]=element.fd.replace(str,'')       
            index++   
          });
          console.log(obj)

          await Pet.update({ id: inputs.id }).set(obj)
          if (err) return exits.fail({info:err});
          else {
            return exits.success({info: true});
          }
        });
      }
  }
}   