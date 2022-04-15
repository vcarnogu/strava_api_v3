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
    define(['ApiClient', 'model/ActivityType', 'model/DetailedSegmentEffort', 'model/Lap', 'model/LatLng', 'model/MetaAthlete', 'model/PhotosSummary', 'model/PolylineMap', 'model/Split', 'model/SummaryActivity', 'model/SummaryGear'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityType'), require('./DetailedSegmentEffort'), require('./Lap'), require('./LatLng'), require('./MetaAthlete'), require('./PhotosSummary'), require('./PolylineMap'), require('./Split'), require('./SummaryActivity'), require('./SummaryGear'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.DetailedActivity = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ActivityType, root.StravaApiV3.DetailedSegmentEffort, root.StravaApiV3.Lap, root.StravaApiV3.LatLng, root.StravaApiV3.MetaAthlete, root.StravaApiV3.PhotosSummary, root.StravaApiV3.PolylineMap, root.StravaApiV3.Split, root.StravaApiV3.SummaryActivity, root.StravaApiV3.SummaryGear);
  }
}(this, function(ApiClient, ActivityType, DetailedSegmentEffort, Lap, LatLng, MetaAthlete, PhotosSummary, PolylineMap, Split, SummaryActivity, SummaryGear) {
  'use strict';

  /**
   * The DetailedActivity model module.
   * @module model/DetailedActivity
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DetailedActivity</code>.
   * @alias module:model/DetailedActivity
   * @class
   * @extends module:model/SummaryActivity
   */
  var exports = function() {
    SummaryActivity.call(this);
  };

  /**
   * Constructs a <code>DetailedActivity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetailedActivity} obj Optional instance to populate.
   * @return {module:model/DetailedActivity} The populated <code>DetailedActivity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      SummaryActivity.constructFromObject(data, obj);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('photos'))
        obj.photos = PhotosSummary.constructFromObject(data['photos']);
      if (data.hasOwnProperty('gear'))
        obj.gear = SummaryGear.constructFromObject(data['gear']);
      if (data.hasOwnProperty('calories'))
        obj.calories = ApiClient.convertToType(data['calories'], 'Number');
      if (data.hasOwnProperty('segment_efforts'))
        obj.segmentEfforts = ApiClient.convertToType(data['segment_efforts'], [DetailedSegmentEffort]);
      if (data.hasOwnProperty('device_name'))
        obj.deviceName = ApiClient.convertToType(data['device_name'], 'String');
      if (data.hasOwnProperty('embed_token'))
        obj.embedToken = ApiClient.convertToType(data['embed_token'], 'String');
      if (data.hasOwnProperty('splits_metric'))
        obj.splitsMetric = ApiClient.convertToType(data['splits_metric'], [Split]);
      if (data.hasOwnProperty('splits_standard'))
        obj.splitsStandard = ApiClient.convertToType(data['splits_standard'], [Split]);
      if (data.hasOwnProperty('laps'))
        obj.laps = ApiClient.convertToType(data['laps'], [Lap]);
      if (data.hasOwnProperty('best_efforts'))
        obj.bestEfforts = ApiClient.convertToType(data['best_efforts'], [DetailedSegmentEffort]);
    }
    return obj;
  }

  exports.prototype = Object.create(SummaryActivity.prototype);
  exports.prototype.constructor = exports;
  /**
   * The description of the activity
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/PhotosSummary} photos
   */
  exports.prototype.photos = undefined;

  /**
   * @member {module:model/SummaryGear} gear
   */
  exports.prototype.gear = undefined;

  /**
   * The number of kilocalories consumed during this activity
   * @member {Number} calories
   */
  exports.prototype.calories = undefined;

  /**
   * @member {Array.<module:model/DetailedSegmentEffort>} segmentEfforts
   */
  exports.prototype.segmentEfforts = undefined;

  /**
   * The name of the device used to record the activity
   * @member {String} deviceName
   */
  exports.prototype.deviceName = undefined;

  /**
   * The token used to embed a Strava activity
   * @member {String} embedToken
   */
  exports.prototype.embedToken = undefined;

  /**
   * The splits of this activity in metric units (for runs)
   * @member {Array.<module:model/Split>} splitsMetric
   */
  exports.prototype.splitsMetric = undefined;

  /**
   * The splits of this activity in imperial units (for runs)
   * @member {Array.<module:model/Split>} splitsStandard
   */
  exports.prototype.splitsStandard = undefined;

  /**
   * @member {Array.<module:model/Lap>} laps
   */
  exports.prototype.laps = undefined;

  /**
   * @member {Array.<module:model/DetailedSegmentEffort>} bestEfforts
   */
  exports.prototype.bestEfforts = undefined;


  return exports;

}));
