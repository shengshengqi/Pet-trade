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
        let info = Pet.getDatastore();

        if (info[0]) {
            return exits.success({ info });
        } else {
            return exits.notFound();
        }
    }
};