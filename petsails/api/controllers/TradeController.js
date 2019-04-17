/**
 * TradeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    trade_info:async function(req,res){
        var tradeInfo= await Trade.findOne({
           id:req.param('id')
        })
    },
};

