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

  //pet
  'POST /pet': {action: 'pet/pet-create'},
  'DELETE /pet': {action: 'pet/pet-delete'},
  'GET /pet/key': {action: 'pet/pet-search'},
  'PATCH /pet/id': {action: 'pet/pet-update'},
  'POST /pet/picture/id': {action: 'pet/pet-picture'},
  //user
  'POST /user': {action: 'user/user-create'},
  'POST /user/login': {action: 'user/login'},
  'PATCH /user/id': {action: 'user/user-update'},
  
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
