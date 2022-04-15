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
    describe('StreamSet', function() {
      beforeEach(function() {
        instance = new StravaApiV3.StreamSet();
      });

      it('should create an instance of StreamSet', function() {
        // TODO: update the code to test StreamSet
        expect(instance).to.be.a(StravaApiV3.StreamSet);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property latlng (base name: "latlng")', function() {
        // TODO: update the code to test the property latlng
        expect(instance).to.have.property('latlng');
        // expect(instance.latlng).to.be(expectedValueLiteral);
      });

      it('should have the property altitude (base name: "altitude")', function() {
        // TODO: update the code to test the property altitude
        expect(instance).to.have.property('altitude');
        // expect(instance.altitude).to.be(expectedValueLiteral);
      });

      it('should have the property velocitySmooth (base name: "velocity_smooth")', function() {
        // TODO: update the code to test the property velocitySmooth
        expect(instance).to.have.property('velocitySmooth');
        // expect(instance.velocitySmooth).to.be(expectedValueLiteral);
      });

      it('should have the property heartrate (base name: "heartrate")', function() {
        // TODO: update the code to test the property heartrate
        expect(instance).to.have.property('heartrate');
        // expect(instance.heartrate).to.be(expectedValueLiteral);
      });

      it('should have the property cadence (base name: "cadence")', function() {
        // TODO: update the code to test the property cadence
        expect(instance).to.have.property('cadence');
        // expect(instance.cadence).to.be(expectedValueLiteral);
      });

      it('should have the property watts (base name: "watts")', function() {
        // TODO: update the code to test the property watts
        expect(instance).to.have.property('watts');
        // expect(instance.watts).to.be(expectedValueLiteral);
      });

      it('should have the property temp (base name: "temp")', function() {
        // TODO: update the code to test the property temp
        expect(instance).to.have.property('temp');
        // expect(instance.temp).to.be(expectedValueLiteral);
      });

      it('should have the property moving (base name: "moving")', function() {
        // TODO: update the code to test the property moving
        expect(instance).to.have.property('moving');
        // expect(instance.moving).to.be(expectedValueLiteral);
      });

      it('should have the property gradeSmooth (base name: "grade_smooth")', function() {
        // TODO: update the code to test the property gradeSmooth
        expect(instance).to.have.property('gradeSmooth');
        // expect(instance.gradeSmooth).to.be(expectedValueLiteral);
      });

    });
  });

}));
