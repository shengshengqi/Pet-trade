/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    set_petInfo:async function(req,res){
        await Pet.Update({
            petname:req.param('petname'),
            petvariety:req.param('petvariety'),
            info:req.param('info'),
            price:req.param('price'),
            ownerid:req.param('ownerid')
        })
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

    },
    create_pet:async function(req,res){
        await Pet.create({
            petname:req.param('petname'),
            petvariety:req.param('petvariety'),
            info:req.param('info'),
            price:req.param('price'),
            ownerid:req.param('ownerid')
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

