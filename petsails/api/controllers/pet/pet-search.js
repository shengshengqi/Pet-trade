module.exports = {
    friendlyName: 'search pets',

    description: '根据宠物品种、昵称、相关信息查找宠物',

    inputs: {
        key: {
            description: '宠物品种、昵称、年龄',
            type: 'string',
            required: true,
        }
    },

    exits: {
        success: {
            statusCode: 200,
        },
        notFound: {
            statusCode: 404,
        }
    },

    fn: async function (inputs, exits) {
        let info = await Pet.find({
            or: [
                { petVariety: { 'contains': inputs.key } },
                { petName: { 'contains': inputs.key } },
                { info: { 'contains': inputs.key } },
            ]
        })

        if (info[0]) {
            return exits.success({ info });
        } else {
            return exits.notFound();
        }
    }
};