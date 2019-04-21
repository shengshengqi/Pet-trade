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
  //user
  'GET /login/id':'UserController.login',
  'PUT /sign_up':'UserController.sign_up',
  'PUT /persionInfo/id':'UserController.set_persionInfo',
  'GET /yourpet/id':'UserController.get_yourpet',
  //trade
  'GET /trade_info/id':'TradeController.trade_info',
  //pet
  'PUT /petInfo/id':'PetController.set_petInfo',
  'GET /petInfo/id':'PetController.get_petInfo',
  'GET /pets/id':'PetController.search_pet',
  'POST /image/id':'PetController.uploadImage',
  'DELETE /pet/name':'PetController.deletes_pet',

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
