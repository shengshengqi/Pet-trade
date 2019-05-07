/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  // //user
  // 'GET /user/login/id':'UserController.login',
  // 'PUT /user/sign_up/id':'UserController.sign_up',
  // 'PUT /user/persionInfo/id':'UserController.set_persionInfo',
  // 'GET /user/yourpets/id':'UserController.get_yourpet',
  // //trade
  // 'GET /trade/info/id':'TradeController.trade_info',
  // //pet
  // 'PUT /pet/id':'PetController.set_petInfo',
  // 'GET /petInfo/id':'PetController.get_petInfo',
  // 'GET /pets/findByVariety':'PetController.search_pet',
  // 'POST /pet/image/id':'PetController.uploadImage',
  // 'GET /pet/image/id':'PetController.Image',
  // 'POST /pet/id':'PetController.create_pet',
  // 'DELETE /pet/id':'PetController.deletes_pet',

  //pet
  'GET /pet': {action: 'pet/pet-create'}
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
