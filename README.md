# Mitt-Maps
**Hosted:** https://cam-mittmap.netlify.app/

For this group project, you will build a small Maps style app that will allow users to search for points of interest that are close to their current location. Look at this working demo to see the functionality you will develop for this project. Search for 'coffee' or 'gas' or 'park' to see how it works.

## Set-up
To get started:

- Register for a free API account at MapBox.com
- Download the starter HTML and CSS
- Create a new PRIVATE repository and add your group members as collaborators.

## Instructions
To complete this task you will use a variety of tools, APIs, and libraries. Take the time to research and discuss each tool as a group. Be sure to ask questions if you're not clear on the how or why of each tool.

The project has been broken down into three phases. Working in groups of three, develop each phase consecutively. A different team member should be responsible for typing, recording, and committing each phase in turn.

Once the project is complete, deploy your solution to a publicly accessible host. Post the URL in the "Group Project Posts" channel on Teams along with the names of your team members and the videos of your coding sessions.

### Phase 1
Get current location, draw a map, center the map on this location and drop a marker.

To complete this phase:

- detect the user's current position using the browser Geolocation API.
- Import the Mapbox GL JS JavaScript library, and it's associated JS file, as shown in the quickstart guide and the the example of displaying a simple map.
- Drop a marker indicating the users current location.

### Phase 2
Using users location, perform a forward geocode for points of interest, determine the distance to each and display them

To complete this phase:
- Forward geocode a location. Forward Geocoding converts location text into geographic coordinates, turning 2 Lincoln Memorial Circle NW into longitude/latitude coordinates -77.050, 38.889. To do this, we'll need a few pieces of information, first an API endpoint that will allow us to geocode an address.
- Use users current location, to help set the proximity when forward geocoding. This will allow you to only retrieve points of interest that are nearby the user.
- Figure out how to calculate the distance between 2 sets of coordinates. Google can help you with this one.
- Sort the points of interest returned by the forward geocoding based on distance to the user, in ascending order.
- Output the list to the page.
- Phase 3
- Users can click on a point of interest, and the map will adjust to drop a new marker and recenter on that point of interest

To complete this phase:
-Add an event listener to your points-of-interest list
-Remove the existing marker, drop a new marker and recenter the map

**ther requirements**
- You should only retrieve poi or points of interest from your forward geocode.
- You should retrieve the maximum results possible (10) from your forward geocode.
