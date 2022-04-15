# StravaApiV3.Route

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**athlete** | [**SummaryAthlete**](SummaryAthlete.md) |  | [optional] 
**description** | **String** | The description of the route | [optional] 
**distance** | **Number** | The route's distance, in meters | [optional] 
**elevationGain** | **Number** | The route's elevation gain. | [optional] 
**id** | **Number** | The unique identifier of this route | [optional] 
**idStr** | **String** | The unique identifier of the route in string format | [optional] 
**map** | [**PolylineMap**](PolylineMap.md) |  | [optional] 
**name** | **String** | The name of this route | [optional] 
**_private** | **Boolean** | Whether this route is private | [optional] 
**starred** | **Boolean** | Whether this route is starred by the logged-in athlete | [optional] 
**timestamp** | **Number** | An epoch timestamp of when the route was created | [optional] 
**type** | **Number** | This route's type (1 for ride, 2 for runs) | [optional] 
**subType** | **Number** | This route's sub-type (1 for road, 2 for mountain bike, 3 for cross, 4 for trail, 5 for mixed) | [optional] 
**createdAt** | **Date** | The time at which the route was created | [optional] 
**updatedAt** | **Date** | The time at which the route was last updated | [optional] 
**estimatedMovingTime** | **Number** | Estimated time in seconds for the authenticated athlete to complete route | [optional] 
**segments** | [**[SummarySegment]**](SummarySegment.md) | The segments traversed by this route | [optional] 


