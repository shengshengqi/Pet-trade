/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    fn:async function(req,res){
        var userInfo= await User.findOne({
            username:req.params("username"),
            password:req.params("password"),
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
    }

};

