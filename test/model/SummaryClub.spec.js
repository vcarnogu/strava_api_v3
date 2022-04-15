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
    describe('SummaryClub', function() {
      beforeEach(function() {
        instance = new StravaApiV3.SummaryClub();
      });

      it('should create an instance of SummaryClub', function() {
        // TODO: update the code to test SummaryClub
        expect(instance).to.be.a(StravaApiV3.SummaryClub);
      });

      it('should have the property profileMedium (base name: "profile_medium")', function() {
        // TODO: update the code to test the property profileMedium
        expect(instance).to.have.property('profileMedium');
        // expect(instance.profileMedium).to.be(expectedValueLiteral);
      });

      it('should have the property coverPhoto (base name: "cover_photo")', function() {
        // TODO: update the code to test the property coverPhoto
        expect(instance).to.have.property('coverPhoto');
        // expect(instance.coverPhoto).to.be(expectedValueLiteral);
      });

      it('should have the property coverPhotoSmall (base name: "cover_photo_small")', function() {
        // TODO: update the code to test the property coverPhotoSmall
        expect(instance).to.have.property('coverPhotoSmall');
        // expect(instance.coverPhotoSmall).to.be(expectedValueLiteral);
      });

      it('should have the property sportType (base name: "sport_type")', function() {
        // TODO: update the code to test the property sportType
        expect(instance).to.have.property('sportType');
        // expect(instance.sportType).to.be(expectedValueLiteral);
      });

      it('should have the property activityTypes (base name: "activity_types")', function() {
        // TODO: update the code to test the property activityTypes
        expect(instance).to.have.property('activityTypes');
        // expect(instance.activityTypes).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property _private (base name: "private")', function() {
        // TODO: update the code to test the property _private
        expect(instance).to.have.property('_private');
        // expect(instance._private).to.be(expectedValueLiteral);
      });

      it('should have the property memberCount (base name: "member_count")', function() {
        // TODO: update the code to test the property memberCount
        expect(instance).to.have.property('memberCount');
        // expect(instance.memberCount).to.be(expectedValueLiteral);
      });

      it('should have the property featured (base name: "featured")', function() {
        // TODO: update the code to test the property featured
        expect(instance).to.have.property('featured');
        // expect(instance.featured).to.be(expectedValueLiteral);
      });

      it('should have the property verified (base name: "verified")', function() {
        // TODO: update the code to test the property verified
        expect(instance).to.have.property('verified');
        // expect(instance.verified).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));
