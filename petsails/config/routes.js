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

  //pet
  'POST /pet': {action: 'pet/create'},
  'DELETE /pet': {action: 'pet/delete'},
  'GET /pet/key': {action: 'pet/search'},
  'PATCH /pet/id': {action: 'pet/update'},
  'GET /pet/all': {action: 'pet/getall'},
  'POST /pet/picture': {action: 'pet/picture'},
  //user
  'POST /user': {action: 'user/create'},
  'POST /user/login': {action: 'user/login'},
  'PATCH /user/id': {action: 'user/update'},
  'POST /user/pet': {action: 'user/add-pet'},
  'POST /user/avatar': {action: 'user/avatar'},
  'DELETE /user/pet': {action: 'user/delete-pet'},
  //trade
  'POST /trade': {action: 'trade/trade'},
  'GET /trade': {action: 'trade/table'}
  

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
