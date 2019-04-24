/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login:async function(req,res){
        var userInfo= await User.findOne({
            username:req.param('username'),
            password:req.param('password'),
        })
        console.log(userInfo)
        if(userInfo){ 
            return res.status(200).send({
                info:'success'
            })
        }else{
            return res.status(403).send({
                info:'fail'
            })
        } 
    },
    sign_up:async function(req,res){
        await User.create({
            username:req.param('username'),
            password:req.param('password'),
        })
    },
    set_personInfo:async function(req,res){
        await User.Upload({
            telephone:req.param('telephone'),
            picture:req.param('picture'),
            email:req.param('email'),
            signature:req.param('signature'),
        })
        //var users = await User.find().populate('pets');
    },
    get_yourpet:async function(req,res){
        var users = await User.find().populate('pets');
        console.log(users)
        if(users){ 
            return res.status(200).send({
                info:users
            })
        }else{
            return res.status(403).send({
                info:'fail'
            })
        } 
    }
};

