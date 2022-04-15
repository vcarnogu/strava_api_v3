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
    define(['ApiClient', 'model/Fault', 'model/Route'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Fault'), require('../model/Route'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.RoutesApi = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.Fault, root.StravaApiV3.Route);
  }
}(this, function(ApiClient, Fault, Route) {
  'use strict';

  /**
   * Routes service.
   * @module api/RoutesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new RoutesApi. 
   * @alias module:api/RoutesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRouteAsGPX operation.
     * @callback module:api/RoutesApi~getRouteAsGPXCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Route GPX
     * Returns a GPX file of the route. Requires read_all scope for private routes.
     * @param {Number} id The identifier of the route.
     * @param {module:api/RoutesApi~getRouteAsGPXCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getRouteAsGPX = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRouteAsGPX");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/routes/{id}/export_gpx', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRouteAsTCX operation.
     * @callback module:api/RoutesApi~getRouteAsTCXCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Route TCX
     * Returns a TCX file of the route. Requires read_all scope for private routes.
     * @param {Number} id The identifier of the route.
     * @param {module:api/RoutesApi~getRouteAsTCXCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getRouteAsTCX = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRouteAsTCX");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/routes/{id}/export_tcx', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRouteById operation.
     * @callback module:api/RoutesApi~getRouteByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Route} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Route
     * Returns a route using its identifier. Requires read_all scope for private routes.
     * @param {Number} id The identifier of the route.
     * @param {module:api/RoutesApi~getRouteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Route}
     */
    this.getRouteById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRouteById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Route;

      return this.apiClient.callApi(
        '/routes/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoutesByAthleteId operation.
     * @callback module:api/RoutesApi~getRoutesByAthleteIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Route>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Athlete Routes
     * Returns a list of the routes created by the authenticated athlete. Private routes are filtered out unless requested by a token with read_all scope.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. Defaults to 1.
     * @param {Number} opts.perPage Number of items per page. Defaults to 30. (default to 30)
     * @param {module:api/RoutesApi~getRoutesByAthleteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Route>}
     */
    this.getRoutesByAthleteId = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Route];

      return this.apiClient.callApi(
        '/athletes/{id}/routes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
