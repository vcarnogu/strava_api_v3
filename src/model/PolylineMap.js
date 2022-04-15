/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.PolylineMap = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PolylineMap model module.
   * @module model/PolylineMap
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PolylineMap</code>.
   * @alias module:model/PolylineMap
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PolylineMap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PolylineMap} obj Optional instance to populate.
   * @return {module:model/PolylineMap} The populated <code>PolylineMap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('polyline'))
        obj.polyline = ApiClient.convertToType(data['polyline'], 'String');
      if (data.hasOwnProperty('summary_polyline'))
        obj.summaryPolyline = ApiClient.convertToType(data['summary_polyline'], 'String');
    }
    return obj;
  }

  /**
   * The identifier of the map
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The polyline of the map, only returned on detailed representation of an object
   * @member {String} polyline
   */
  exports.prototype.polyline = undefined;

  /**
   * The summary polyline of the map
   * @member {String} summaryPolyline
   */
  exports.prototype.summaryPolyline = undefined;


  return exports;

}));
