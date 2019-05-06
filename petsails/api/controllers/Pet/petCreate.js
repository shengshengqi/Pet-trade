module.exports = {

  friendlyName: 'Create pets',

  description: '创建宠物.',

  inputs: {
    petName: {
      description: '宠物昵称.',
      type: 'String',
      required: true
    },
    petVariety: {
      description: '宠物品种.',
      type: 'String',
      required: true
    },
    info: {
      description: '详细介绍.',
      type: 'String',
      required: true
    },
    price: {
      description: '价格.',
      type: 'String',
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/welcome'
    },
    serverError: {
      description: '宠物创建失败.',
      responseType: 'serverError'
    }
  },

  fn: async function (inputs, exits) {

    await Pet.create({
        petname:req.param('petname'),
        petvariety:req.param('petvariety'),
        info:req.param('info'),
        age:req.param('age'),
        // picture1:req.param('picture1'),
        // picture2:req.param('picture2'),
        // picture3:req.param('picture3'),
        price:req.param('price'),
        // ownerid:req.param('ownerid')
    })

    // // If no user was found, respond "notFound" (like calling `res.notFound()`)
    // if (!user) {
    //   return exits.notFound();
    // }

    // Display the welcome view.
    return exits.success({
      name: pet.petname
    });
  }
};
