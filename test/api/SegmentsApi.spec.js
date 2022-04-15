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

  beforeEach(function() {
    instance = new StravaApiV3.SegmentsApi();
  });

  describe('(package)', function() {
    describe('SegmentsApi', function() {
      describe('exploreSegments', function() {
        it('should call exploreSegments successfully', function(done) {
          // TODO: uncomment, update parameter values for exploreSegments call and complete the assertions
          /*
          var bounds = [3.4];
          var opts = {};
          opts.activityType = "activityType_example";
          opts.minCat = 56;
          opts.maxCat = 56;

          instance.exploreSegments(bounds, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.ExplorerResponse);
            {
              let dataCtr = data.segments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(StravaApiV3.ExplorerSegment);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.climbCategory).to.be.a('number');
                expect(data.climbCategory).to.be(0);
                expect(data.climbCategoryDesc).to.be.a('string');
                expect(data.climbCategoryDesc).to.be("NC");
                expect(data.avgGrade).to.be.a('number');
                expect(data.avgGrade).to.be(0.0);
                expect(data.startLatlng).to.be.a(StravaApiV3.LatLng);
                    expect(data.endLatlng).to.be.a(StravaApiV3.LatLng);
                    expect(data.elevDifference).to.be.a('number');
                expect(data.elevDifference).to.be(0.0);
                expect(data.distance).to.be.a('number');
                expect(data.distance).to.be(0.0);
                expect(data.points).to.be.a('string');
                expect(data.points).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getLoggedInAthleteStarredSegments', function() {
        it('should call getLoggedInAthleteStarredSegments successfully', function(done) {
          // TODO: uncomment, update parameter values for getLoggedInAthleteStarredSegments call and complete the assertions
          /*
          var opts = {};
          opts.page = 56;
          opts.perPage = 30;

          instance.getLoggedInAthleteStarredSegments(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.SummarySegment);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.activityType).to.be.a('string');
              expect(data.activityType).to.be("Ride");
              expect(data.distance).to.be.a('number');
              expect(data.distance).to.be(0.0);
              expect(data.averageGrade).to.be.a('number');
              expect(data.averageGrade).to.be(0.0);
              expect(data.maximumGrade).to.be.a('number');
              expect(data.maximumGrade).to.be(0.0);
              expect(data.elevationHigh).to.be.a('number');
              expect(data.elevationHigh).to.be(0.0);
              expect(data.elevationLow).to.be.a('number');
              expect(data.elevationLow).to.be(0.0);
              expect(data.startLatlng).to.be.a(StravaApiV3.LatLng);
                  expect(data.endLatlng).to.be.a(StravaApiV3.LatLng);
                  expect(data.climbCategory).to.be.a('number');
              expect(data.climbCategory).to.be(0);
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.state).to.be.a('string');
              expect(data.state).to.be("");
              expect(data.country).to.be.a('string');
              expect(data.country).to.be("");
              expect(data._private).to.be.a('boolean');
              expect(data._private).to.be(false);
              expect(data.athletePrEffort).to.be.a(StravaApiV3.SummarySegmentEffort);
                    expect(data.athletePrEffort.id).to.be.a('number');
                expect(data.athletePrEffort.id).to.be("0");
                expect(data.athletePrEffort.activityId).to.be.a('number');
                expect(data.athletePrEffort.activityId).to.be("0");
                expect(data.athletePrEffort.elapsedTime).to.be.a('number');
                expect(data.athletePrEffort.elapsedTime).to.be(0);
                expect(data.athletePrEffort.startDate).to.be.a(Date);
                expect(data.athletePrEffort.startDate).to.be(new Date());
                expect(data.athletePrEffort.startDateLocal).to.be.a(Date);
                expect(data.athletePrEffort.startDateLocal).to.be(new Date());
                expect(data.athletePrEffort.distance).to.be.a('number');
                expect(data.athletePrEffort.distance).to.be(0.0);
                expect(data.athletePrEffort.isKom).to.be.a('boolean');
                expect(data.athletePrEffort.isKom).to.be(false);
              expect(data.athleteSegmentStats).to.be.a(StravaApiV3.SummaryPRSegmentEffort);
                    expect(data.athleteSegmentStats.prActivityId).to.be.a('number');
                expect(data.athleteSegmentStats.prActivityId).to.be("0");
                expect(data.athleteSegmentStats.prElapsedTime).to.be.a('number');
                expect(data.athleteSegmentStats.prElapsedTime).to.be(0);
                expect(data.athleteSegmentStats.prDate).to.be.a(Date);
                expect(data.athleteSegmentStats.prDate).to.be(new Date());
                expect(data.athleteSegmentStats.effortCount).to.be.a('number');
                expect(data.athleteSegmentStats.effortCount).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSegmentById', function() {
        it('should call getSegmentById successfully', function(done) {
          // TODO: uncomment, update parameter values for getSegmentById call and complete the assertions
          /*
          var id = 789;

          instance.getSegmentById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.DetailedSegment);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.activityType).to.be.a('string');
            expect(data.activityType).to.be("Ride");
            expect(data.distance).to.be.a('number');
            expect(data.distance).to.be(0.0);
            expect(data.averageGrade).to.be.a('number');
            expect(data.averageGrade).to.be(0.0);
            expect(data.maximumGrade).to.be.a('number');
            expect(data.maximumGrade).to.be(0.0);
            expect(data.elevationHigh).to.be.a('number');
            expect(data.elevationHigh).to.be(0.0);
            expect(data.elevationLow).to.be.a('number');
            expect(data.elevationLow).to.be(0.0);
            expect(data.startLatlng).to.be.a(StravaApiV3.LatLng);
                expect(data.endLatlng).to.be.a(StravaApiV3.LatLng);
                expect(data.climbCategory).to.be.a('number');
            expect(data.climbCategory).to.be(0);
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data._private).to.be.a('boolean');
            expect(data._private).to.be(false);
            expect(data.athletePrEffort).to.be.a(StravaApiV3.SummarySegmentEffort);
                  expect(data.athletePrEffort.id).to.be.a('number');
              expect(data.athletePrEffort.id).to.be("0");
              expect(data.athletePrEffort.activityId).to.be.a('number');
              expect(data.athletePrEffort.activityId).to.be("0");
              expect(data.athletePrEffort.elapsedTime).to.be.a('number');
              expect(data.athletePrEffort.elapsedTime).to.be(0);
              expect(data.athletePrEffort.startDate).to.be.a(Date);
              expect(data.athletePrEffort.startDate).to.be(new Date());
              expect(data.athletePrEffort.startDateLocal).to.be.a(Date);
              expect(data.athletePrEffort.startDateLocal).to.be(new Date());
              expect(data.athletePrEffort.distance).to.be.a('number');
              expect(data.athletePrEffort.distance).to.be(0.0);
              expect(data.athletePrEffort.isKom).to.be.a('boolean');
              expect(data.athletePrEffort.isKom).to.be(false);
            expect(data.athleteSegmentStats).to.be.a(StravaApiV3.SummaryPRSegmentEffort);
                  expect(data.athleteSegmentStats.prActivityId).to.be.a('number');
              expect(data.athleteSegmentStats.prActivityId).to.be("0");
              expect(data.athleteSegmentStats.prElapsedTime).to.be.a('number');
              expect(data.athleteSegmentStats.prElapsedTime).to.be(0);
              expect(data.athleteSegmentStats.prDate).to.be.a(Date);
              expect(data.athleteSegmentStats.prDate).to.be(new Date());
              expect(data.athleteSegmentStats.effortCount).to.be.a('number');
              expect(data.athleteSegmentStats.effortCount).to.be(0);
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());
            expect(data.totalElevationGain).to.be.a('number');
            expect(data.totalElevationGain).to.be(0.0);
            expect(data.map).to.be.a(StravaApiV3.PolylineMap);
                  expect(data.map.id).to.be.a('string');
              expect(data.map.id).to.be("");
              expect(data.map.polyline).to.be.a('string');
              expect(data.map.polyline).to.be("");
              expect(data.map.summaryPolyline).to.be.a('string');
              expect(data.map.summaryPolyline).to.be("");
            expect(data.effortCount).to.be.a('number');
            expect(data.effortCount).to.be(0);
            expect(data.athleteCount).to.be.a('number');
            expect(data.athleteCount).to.be(0);
            expect(data.hazardous).to.be.a('boolean');
            expect(data.hazardous).to.be(false);
            expect(data.starCount).to.be.a('number');
            expect(data.starCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('starSegment', function() {
        it('should call starSegment successfully', function(done) {
          // TODO: uncomment, update parameter values for starSegment call and complete the assertions
          /*
          var id = 789;
          var starred = false;

          instance.starSegment(id, starred, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.DetailedSegment);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.activityType).to.be.a('string');
            expect(data.activityType).to.be("Ride");
            expect(data.distance).to.be.a('number');
            expect(data.distance).to.be(0.0);
            expect(data.averageGrade).to.be.a('number');
            expect(data.averageGrade).to.be(0.0);
            expect(data.maximumGrade).to.be.a('number');
            expect(data.maximumGrade).to.be(0.0);
            expect(data.elevationHigh).to.be.a('number');
            expect(data.elevationHigh).to.be(0.0);
            expect(data.elevationLow).to.be.a('number');
            expect(data.elevationLow).to.be(0.0);
            expect(data.startLatlng).to.be.a(StravaApiV3.LatLng);
                expect(data.endLatlng).to.be.a(StravaApiV3.LatLng);
                expect(data.climbCategory).to.be.a('number');
            expect(data.climbCategory).to.be(0);
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data._private).to.be.a('boolean');
            expect(data._private).to.be(false);
            expect(data.athletePrEffort).to.be.a(StravaApiV3.SummarySegmentEffort);
                  expect(data.athletePrEffort.id).to.be.a('number');
              expect(data.athletePrEffort.id).to.be("0");
              expect(data.athletePrEffort.activityId).to.be.a('number');
              expect(data.athletePrEffort.activityId).to.be("0");
              expect(data.athletePrEffort.elapsedTime).to.be.a('number');
              expect(data.athletePrEffort.elapsedTime).to.be(0);
              expect(data.athletePrEffort.startDate).to.be.a(Date);
              expect(data.athletePrEffort.startDate).to.be(new Date());
              expect(data.athletePrEffort.startDateLocal).to.be.a(Date);
              expect(data.athletePrEffort.startDateLocal).to.be(new Date());
              expect(data.athletePrEffort.distance).to.be.a('number');
              expect(data.athletePrEffort.distance).to.be(0.0);
              expect(data.athletePrEffort.isKom).to.be.a('boolean');
              expect(data.athletePrEffort.isKom).to.be(false);
            expect(data.athleteSegmentStats).to.be.a(StravaApiV3.SummaryPRSegmentEffort);
                  expect(data.athleteSegmentStats.prActivityId).to.be.a('number');
              expect(data.athleteSegmentStats.prActivityId).to.be("0");
              expect(data.athleteSegmentStats.prElapsedTime).to.be.a('number');
              expect(data.athleteSegmentStats.prElapsedTime).to.be(0);
              expect(data.athleteSegmentStats.prDate).to.be.a(Date);
              expect(data.athleteSegmentStats.prDate).to.be(new Date());
              expect(data.athleteSegmentStats.effortCount).to.be.a('number');
              expect(data.athleteSegmentStats.effortCount).to.be(0);
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());
            expect(data.totalElevationGain).to.be.a('number');
            expect(data.totalElevationGain).to.be(0.0);
            expect(data.map).to.be.a(StravaApiV3.PolylineMap);
                  expect(data.map.id).to.be.a('string');
              expect(data.map.id).to.be("");
              expect(data.map.polyline).to.be.a('string');
              expect(data.map.polyline).to.be("");
              expect(data.map.summaryPolyline).to.be.a('string');
              expect(data.map.summaryPolyline).to.be("");
            expect(data.effortCount).to.be.a('number');
            expect(data.effortCount).to.be(0);
            expect(data.athleteCount).to.be.a('number');
            expect(data.athleteCount).to.be(0);
            expect(data.hazardous).to.be.a('boolean');
            expect(data.hazardous).to.be(false);
            expect(data.starCount).to.be.a('number');
            expect(data.starCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
