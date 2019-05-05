/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    set_petInfo:async function(req,res){
        await Pet.Update({
            id:req.param('id'),
            petname:req.param('petname'),
            petvariety:req.param('petvariety'),
            info:req.param('info'),
            price:req.param('price'),
            ownerid:req.param('ownerid')
        })
        if(id){
            return res.status(200).send({
                sucessed
            })
        }
    },
    get_petInfo:async function(req,res){
        var petInfo = await Pet.findOne({
            ownerid:req.param('id')
        })
        console.log(petInfo)
        if(petInfo){ 
            return res.status(200).send({
                info:petInfo
            })
        }else{
            return res.status(403).send({
                info:'fail'
            })
        } 
    },
    uploadImage:async function(req,res){
        req.file('Image').upload({
            maxByte:10000000,
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        },function whenDone(err,uploadedFiles){
            if(err){
                return res.serverError(err)
            }
            if(uploadedFiles.length !==0){
                return res.json({
                    message: uploadedFilse.length + 'file(s) uploaded sucessfully'
                });
            }

            var baseUrl = sails.config.custom.baseUrl;

            Pet.updata(req.session.id,{
                imageUrl:require('util').format('%s/pet/image/%s',baseUrl,req.session.petid),
                imageFd:uploadedFiles[0].fd
            })
            .exec(function (err){
                if (err) return res.serverError(err);
                return res.ok();
            });
        });
    },
    Image:async function(req,res){
        Pet.findOne(req.param('id')).exec(function(err,user){
            if(err) return res.serverERROR(err);
            if(!pet) return res.notFound();

            if(!user.imageFd){
                return res.notFound();
            }

            var SkipperDisk = require('skipper-disk');
            var fileAdapter = SkipperDisk(/* optional opts */);

             // set the filename to the same file as the user uploaded
            res.set("Content-disposition", "attachment; filename='" + file.name + "'");

             // Stream the file down
            fileAdapter.read(user.avatarFd)
            .on('error', function (err){
            return res.serverError(err);
            })
            .pipe(res);
        })
    },
    create_pet:async function(req,res){
        await Pet.create({
            petname:req.param('petname'),
            petvariety:req.param('petvariety'),
            info:req.param('info'),
            age:req.param('age'),
            // picture1:req.param('picture1'),
            // picture2:req.param('picture2'),
            // picture3:req.param('picture3'),
            // price:req.param('price'),
            // ownerid:req.param('ownerid')
        })
    },
    deletes_pet:async function(req,res){
        await Pet.destroy({
            id:req.param('id')
        })
    },
    search_pet:async function(req,res){
        var petInfo = await Pet.find({
            petvariety:{'contains' : req.param('petvarirty')}
        })
        console.log(petInfo)
        if(petInfo){ 
            return res.status(200).send({
                info:petInfo
            })
        }else{
            return res.status(403).send({
                info:'fail'
            })
        } 
    }
};

