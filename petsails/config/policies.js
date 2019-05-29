/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
   //pet
   'pet/create':'isLoggedIn',
   'pet/delete':'isLoggedIn',
   'pet/search':'isLoggedIn',
   'pet/update':'isLoggedIn',
   'pet/getall':'isLoggedIn',
   'pet/picture':'isLoggedIn',
   //user
   'user/create':'isLoggedIn',
   'user/login':true,
   'user/update':'isLoggedIn',
   'user/add-pet':'isLoggedIn',
   'user/avatar':'isLoggedIn',
   'user/delete-pet':'isLoggedIn',
   //trade
   'trade/trade':'isLoggedIn',
   'trade/table':'isLoggedIn',
};
