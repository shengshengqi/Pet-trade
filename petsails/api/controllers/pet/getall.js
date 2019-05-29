module.exports = {
    friendlyName: 'search pets',

    description: '根据宠物品种、昵称、相关信息查找宠物',

    exits: {
        success: {
            statusCode: 200,
        },
        notFound: {
            statusCode: 404,
        }
    },

    fn: async function (inputs, exits) {
        if(this.req.session.userId){
            let info = await Pet.find({
                find:0
            })
            if (info) {
                return exits.success({ info });
            } else {
                return exits.notFound();
            }
         }
    }
};