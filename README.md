
# API Project: Timestamp Microservice for FCC

Page Link: https://obsidian-attraction.glitch.me

### User stories :

1. Given either a Unix (Epoch) Timestamp or a natural date within the url of this page.
2. A JSON object is returned with both the unix timestamp and the natural language form of that date.
3. If an Invalid date is entered the JSON object will return "Invalid Date".

#### Example usage:
* https://obsidian-attraction.glitch.me/api/timestamp/2018-08-01
* https://obsidian-attraction.glitch.me/api/timestamp/1533081600000

#### Example output:
* {"unix":"1533081600000","utc":"Wed Aug 01 2018"}
