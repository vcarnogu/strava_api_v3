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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ActivityZone', function() {
      beforeEach(function() {
        instance = new StravaApiV3.ActivityZone();
      });

      it('should create an instance of ActivityZone', function() {
        // TODO: update the code to test ActivityZone
        expect(instance).to.be.a(StravaApiV3.ActivityZone);
      });

      it('should have the property score (base name: "score")', function() {
        // TODO: update the code to test the property score
        expect(instance).to.have.property('score');
        // expect(instance.score).to.be(expectedValueLiteral);
      });

      it('should have the property distributionBuckets (base name: "distribution_buckets")', function() {
        // TODO: update the code to test the property distributionBuckets
        expect(instance).to.have.property('distributionBuckets');
        // expect(instance.distributionBuckets).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property sensorBased (base name: "sensor_based")', function() {
        // TODO: update the code to test the property sensorBased
        expect(instance).to.have.property('sensorBased');
        // expect(instance.sensorBased).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

      it('should have the property customZones (base name: "custom_zones")', function() {
        // TODO: update the code to test the property customZones
        expect(instance).to.have.property('customZones');
        // expect(instance.customZones).to.be(expectedValueLiteral);
      });

      it('should have the property max (base name: "max")', function() {
        // TODO: update the code to test the property max
        expect(instance).to.have.property('max');
        // expect(instance.max).to.be(expectedValueLiteral);
      });

    });
  });

}));
