/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    set_petinfo:async function(req,res){
        await Pet.create({
            petname:req.param('username'),
            petvariety:req.param('petvariety'),
            info:req.param('info'),
            picture:req.param('picture'),
            price:req.param('price'),
            ownerid:req.param('ownerid')
        })
    },
    get_petinfo:async function(req,res){
        var petInfo = await Pet.findOne({
            ownerid:req.param('ownerid'),
            petname:req.param('petname')
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
    search_pet:async function(req,res){
        var petInfo = await Pet.findOne({
            petvariety:req.param('petvarirty')
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

