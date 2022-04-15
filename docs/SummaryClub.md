# StravaApiV3.SummaryClub

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileMedium** | **String** | URL to a 60x60 pixel profile picture. | [optional] 
**coverPhoto** | **String** | URL to a ~1185x580 pixel cover photo. | [optional] 
**coverPhotoSmall** | **String** | URL to a ~360x176  pixel cover photo. | [optional] 
**sportType** | **String** | Deprecated. Prefer to use activity_types. | [optional] 
**activityTypes** | [**[ActivityType]**](ActivityType.md) | The activity types that count for a club. This takes precedence over sport_type. | [optional] 
**city** | **String** | The club's city. | [optional] 
**state** | **String** | The club's state or geographical region. | [optional] 
**country** | **String** | The club's country. | [optional] 
**_private** | **Boolean** | Whether the club is private. | [optional] 
**memberCount** | **Number** | The club's member count. | [optional] 
**featured** | **Boolean** | Whether the club is featured or not. | [optional] 
**verified** | **Boolean** | Whether the club is verified or not. | [optional] 
**url** | **String** | The club's vanity URL. | [optional] 


<a name="SportTypeEnum"></a>
## Enum: SportTypeEnum


* `cycling` (value: `"cycling"`)

* `running` (value: `"running"`)

* `triathlon` (value: `"triathlon"`)

* `other` (value: `"other"`)




