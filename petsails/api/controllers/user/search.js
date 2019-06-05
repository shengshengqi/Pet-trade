module.exports = {
    friendlyName: 'search pets by ownerID',

    description: '根据主人id查找宠物',

    inputs: {
        id: {
            description: '主人id',
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
        if(this.req.session.userId){
            let info = await Pet.find({
               owner:inputs.id
            })

            if (info[0]) {
                return exits.success({ info });
            } else {
                return exits.notFound();
            }
    }
    }
};