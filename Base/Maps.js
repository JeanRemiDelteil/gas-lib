/**********************************************
 * @namespace Maps
 ***********************************************/

/**
 * @class Maps
 */

/**
 * @typedef {Maps.DirectionFinderEnums} Maps.DirectionFinder
 */
/**
 * @typedef {Maps.StaticMapEnums} Maps.StaticMap
 */
/**
 * Decodes an encoded polyline string back into an array of points.
 * 
 * <pre class="prettyprint"><code>
 * // Decodes a string representation of the latitudes and longitudes of Minneapolis and Milwaukee
 * // respectively.
 * var polyline = &#39;qvkpG`qhxPbgyI_zq_@&#39;;
 * var points = Maps.decodePolyline(polyline);
 * for (var i = 0; i &lt; points.length; i+= 2) {
 *   Logger.log(&#39;%s, %s&#39;, points[i], points[i+1]);
 * }
 * </code></pre>
 * 
 * @function Maps.decodePolyline
 * 
 * @param {String} polyline - an encoded polyline
 * 
 * @return {Number[]} an array of latitude longitude pairs (lat0, long0, lat1, long1, ...)
 */


/**
 * Encodes an array of points into a string.
 * 
 * <pre class="prettyprint"><code>
 * // The latitudes and longitudes of New York and Boston respectively.
 * var points = [40.77, -73.97, 42.34, -71.04];
 * var polyline = Maps.encodePolyline(points);
 * </code></pre>
 * 
 * @function Maps.encodePolyline
 * 
 * @param {Number[]} points - an array of latitude/longitude pairs to encode
 * 
 * @return {String} an encoded string
 */


/**
 * Creates a new DirectionFinder object.
 * 
 * @function Maps.newDirectionFinder
 * 
 * @return {Maps.DirectionFinder} a DirectionFinder object
 */


/**
 * Creates an ElevationSampler object.
 * 
 * @function Maps.newElevationSampler
 * 
 * @return {Maps.ElevationSampler} an ElevationSampler object
 */


/**
 * Creates a new Geocoder object.
 * 
 * @function Maps.newGeocoder
 * 
 * @return {Maps.Geocoder} a Geocoder object
 */


/**
 * Creates a new StaticMap object.
 * 
 * @function Maps.newStaticMap
 * 
 * @return {Maps.StaticMap} a StaticMap object
 */


/**
 * Enables the use of an externally established Maps API for Business account, to leverage
 * additional quota allowances. Your client ID and signing key can be obtained from the Google
 * Enterprise Support Portal. Set these values to null to go back to using the default quota
 * allowances.
 * 
 * <pre class="prettyprint"><code>
 * Maps.setAuthentication(&#39;gme-123456789&#39;, &#39;VhSEZvOXVSdnlxTnpJcUE&#39;);
 * </code></pre>
 * 
 * @function Maps.setAuthentication
 * 
 * @param {String} clientId - client identifier
 * @param {String} signingKey - private signing key
 * 
 * @return void
 */



/**
 * @class Maps.Avoid
 */

/**
 * Avoid highways.
 * 
 * @typedef {String} Maps.Avoid.HIGHWAYS
 */
/**
 * Avoid tolls.
 * 
 * @typedef {String} Maps.Avoid.TOLLS
 */

/**
 * @class Maps.Color
 */

/**
 * @typedef {String} Maps.Color.BLACK
 */
/**
 * @typedef {String} Maps.Color.BLUE
 */
/**
 * @typedef {String} Maps.Color.BROWN
 */
/**
 * @typedef {String} Maps.Color.GRAY
 */
/**
 * @typedef {String} Maps.Color.GREEN
 */
/**
 * @typedef {String} Maps.Color.ORANGE
 */
/**
 * @typedef {String} Maps.Color.PURPLE
 */
/**
 * @typedef {String} Maps.Color.RED
 */
/**
 * @typedef {String} Maps.Color.WHITE
 */
/**
 * @typedef {String} Maps.Color.YELLOW
 */

/**
 * @class Maps.DirectionFinder
 */

/**
 * Adds a waypoint that the route must pass through, using a point (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with a wapoint at Lincoln Center.
 * var directionFinder = Maps.newDirectionFinder().addWaypoint(40.772628, -73.984243);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#addWaypoint
 * 
 * @param {Number} latitude - Latitude of the waypoint.
 * @param {Number} longitude - Longitude of the waypoint.
 * 
 * @return {Maps.DirectionFinder} The DirectionFinder object to facilitate chaining of calls.
 */


/**
 * Adds a waypoint that the route must pass through, using an address.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with a wapoint at Lincoln Center.
 * var directionFinder = Maps.newDirectionFinder().addWaypoint(&#39;Lincoln Center, New York, NY&#39;);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#addWaypoint
 * 
 * @param {String} address - An address.
 * 
 * @return {Maps.DirectionFinder} The DirectionFinder object to facilitate chaining of calls.
 */


/**
 * Clears the current set of waypoints.
 * 
 * <pre class="prettyprint"><code>
 * var directionFinder = Maps.newDirectionFinder()
 * // ...
 * // Do something interesting here ...
 * // ...
 * // Remove all waypoints added with addWaypoint().
 * directionFinder.clearWaypoints();
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#clearWaypoints
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Gets the directions using the origin, destination, and other options that were set.
 * 
 * <pre class="prettyprint"><code>
 * // Logs how long it would take to walk from Times Square to Central Park.
 * var directions = Maps.newDirectionFinder()
 *     .setOrigin(&#39;Times Square, New York, NY&#39;)
 *     .setDestination(&#39;Central Park, New York, NY&#39;)
 *     .setMode(Maps.DirectionFinder.Mode.WALKING)
 *     .getDirections();
 * Logger.log(directions.routes[0].legs[0].duration.text);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#getDirections
 * 
 * @return {Object} a JSON object containing the set of routes for the directions, as described <a
 *     href="/maps/documentation/directions/#JSON">here</a>
 */


/**
 * Sets whether or not alternative routes should be returned, instead of just the highest ranked
 * route (defaults to false). If true, the resulting object's <code>routes</code> array may
 * contain multiple entries.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with alernative routes enabled.
 * var directionFinder = Maps.newDirectionFinder().setAlternatives(true);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setAlternatives
 * 
 * @param {Boolean} useAlternatives - true to return alternative routes, false otherwise
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the desired time of arrival (when applicable).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with an arrival time of 2 hours from now.
 * var now = new Date();
 * var arrive = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 * var directionFinder = Maps.newDirectionFinder().setArrive(arrive);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setArrive
 * 
 * @param {Date} time - the time of arrival
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets whether to avoid certain types of restrictions.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder that avoid highways.
 * var directionFinder = Maps.newDirectionFinder().setAvoid(Maps.DirectionFinder.Avoid.HIGHWAYS);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setAvoid
 * 
 * @param {String} avoid - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/avoid.html'>Avoid</a></code>
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the desired time of departure (when applicable).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with a departure time of 1 hour from now.
 * var now = new Date();
 * var depart = new Date(now.getTime() + (1 * 60 * 60 * 1000));
 * var directionFinder = Maps.newDirectionFinder().setDepart(depart);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setDepart
 * 
 * @param {Date} time - the time of departure
 * 
 * @return {Maps.DirectionFinder} The DirectionFinder object to facilitate chaining of calls.
 */


/**
 * Sets the ending location for which to calculate directions to, using a point (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the destination set to Central Park.
 * var directionFinder = Maps.newDirectionFinder().setDestination(40.777052, -73.975464);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setDestination
 * 
 * @param {Number} latitude - the latitude of the ending location
 * @param {Number} longitude - the longitude of the ending location
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the ending location for which to calculate directions to, using an address.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the destination set to Central Park.
 * var directionFinder = Maps.newDirectionFinder().setDestination(&#39;Central Park, New York, NY&#39;);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setDestination
 * 
 * @param {String} address - the ending address
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the language to be used for the directions.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the language set to French.
 * var directionFinder = Maps.newDirectionFinder().setLanguage(&#39;fr&#39;);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setLanguage
 * 
 * @param {String} language - a BCP-47 language identifier
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the mode of travel (defaults to driving).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the mode set to walking.
 * var directionFinder = Maps.newDirectionFinder().setMode(Maps.DirectionFinder.Mode.WALKING);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setMode
 * 
 * @param {String} mode - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/mode.html'>Mode</a></code>
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets whether or not to optimize the provided route by rearranging the waypoints in a more
 * efficient order (defaults to false).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with wapoint optimization enabled.
 * var directionFinder = Maps.newDirectionFinder().setOptimizeWaypoints(true);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setOptimizeWaypoints
 * 
 * @param {Boolean} optimizeOrder - true to optimize the order, or false otherwise
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the starting location from which to calculate directions, using a point (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the origin set to Times Square.
 * var directionFinder = Maps.newDirectionFinder().setOrigin(40.759011, -73.984472);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setOrigin
 * 
 * @param {Number} latitude - the latitude of the starting location
 * @param {Number} longitude - the longitude of the starting location
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */


/**
 * Sets the starting location from which to calculate directions, using an address.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the origin set to Times Square.
 * var directionFinder = Maps.newDirectionFinder().setOrigin(&#39;Times Square, New York, NY&#39;);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setOrigin
 * 
 * @param {String} address - the starting address
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder instance to facilitate chaining of calls
 */


/**
 * Sets a region to use when interpreting location names. The supported region codes correspond to
 * the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
 * "maps.google.co.uk".
 * 
 * <pre class="prettyprint"><code>
 * // Creates a DirectionFinder with the region set to France.
 * var directionFinder = Maps.newDirectionFinder().setRegion(&#39;fr&#39;);
 * </code></pre>
 * 
 * @function Maps.DirectionFinder#setRegion
 * 
 * @param {String} region - the region code to use
 * 
 * @return {Maps.DirectionFinder} the DirectionFinder object to facilitate chaining of calls
 */



/**
 * @class Maps.DirectionFinderEnums
 */

/**
 * @typedef {Maps.Avoid} Maps.DirectionFinderEnums.Avoid
 */
/**
 * @typedef {Maps.Mode} Maps.DirectionFinderEnums.Mode
 */

/**
 * @class Maps.ElevationSampler
 */

/**
 * Returns elevation data for a single point (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Gets the elevation of Times Square using a point.
 * var data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
 * Logger.log(data.results[0].elevation);
 * </code></pre>
 * 
 * @function Maps.ElevationSampler#sampleLocation
 * 
 * @param {Number} latitude - the latitude of the point to sample
 * @param {Number} longitude - the longitude of the point to sample
 * 
 * @return {Object} a JSON Object containing the elevation data, as described <a
 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */


/**
 * Returns elevation data for a series of points (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Gets the elevation of Times Square and Central Park using points.
 * var data = Maps.newElevationSampler().sampleLocations([
 *     // Times Square
 *     40.759011, -73.984472,
 *     // Central Park
 *     40.777052, -73.975464
 * ]);
 * Logger.log(&#39;Times Square: &#39; + data.results[0].elevation);
 * Logger.log(&#39;Central Park: &#39; + data.results[1].elevation);
 * </code></pre>
 * 
 * @function Maps.ElevationSampler#sampleLocations
 * 
 * @param {Number[]} points - an array of latitude/longitude pairs
 * 
 * @return {Object} a JSON Object containing the elevation data, as described <a
 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */


/**
 * Returns elevation data for the points in an encoded polyline.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the elevation of Times Square and Central Park using a polyline.
 * var data = Maps.newElevationSampler().sampleLocations(&#39;yvwwF|aqbMwoBiw@&#39;);
 * Logger.log(&#39;Times Square: &#39; + data.results[0].elevation);
 * Logger.log(&#39;Central Park: &#39; + data.results[1].elevation);
 * </code></pre>
 * 
 * @function Maps.ElevationSampler#sampleLocations
 * 
 * @param {String} encodedPolyline - an encoded polyline of points to sample
 * 
 * @return {Object} a JSON Object containing the elevation data, as described <a
 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */


/**
 * Returns elevation data for a number of samples along a line, defined using a series of points.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the elevation of five points between Times Square and Central Park.
 * var data = Maps.newElevationSampler().samplePath([
 *     // Times Square
 *     40.759011, -73.984472,
 *     // Central Park
 *     40.777052, -73.975464
 * ], 5);
 * for (var i = 0; i &lt; data.results.length; i++) {
 *   Logger.log(data.results[i].elevation);
 * }
 * </code></pre>
 * 
 * @function Maps.ElevationSampler#samplePath
 * 
 * @param {Number[]} points - an array of latitude/longitude pairs defining a path to sample over
 * @param {IntegerNum} numSamples - the number of points to sample along the path of points
 * 
 * @return {Object} a JSON Object containing the elevation data, as described <a
 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */


/**
 * Returns elevation data for a number of samples along a line, defined using an encoded polyline.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the elevation of five points between Times Square and Central Park.
 * var data = Maps.newElevationSampler().samplePath(&#39;yvwwF|aqbMwoBiw@&#39;, 5);
 * for (var i = 0; i &lt; data.results.length; i++) {
 *   Logger.log(data.results[i].elevation);
 * }
 * </code></pre>
 * 
 * @function Maps.ElevationSampler#samplePath
 * 
 * @param {String} encodedPolyline - an encoded polyline of points defining a path to sample over
 * @param {IntegerNum} numSamples - the number of points to sample along the path of points
 * 
 * @return {Object} a JSON Object containing the elevation data, as described <a
 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */



/**
 * @class Maps.Format
 */

/**
 * GIF format.
 * 
 * @typedef {String} Maps.Format.GIF
 */
/**
 * JPEG format.
 * 
 * @typedef {String} Maps.Format.JPG
 */
/**
 * Non-progressive JPEG format.
 * 
 * @typedef {String} Maps.Format.JPG_BASELINE
 */
/**
 * 8-bit PNG format.
 * 
 * @typedef {String} Maps.Format.PNG
 */
/**
 * 32-bit PNG format.
 * 
 * @typedef {String} Maps.Format.PNG32
 */
/**
 * 8-bit PNG format.
 * 
 * @typedef {String} Maps.Format.PNG8
 */

/**
 * @class Maps.Geocoder
 */

/**
 * Gets the approximate geographic points for a given address.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the geographic coordinates for Times Square.
 * var response = Maps.newGeocoder().geocode(&#39;Times Square, New York, NY&#39;);
 * for (var i = 0; i &lt; response.results.length; i++) {
 *   var result = response.results[i];
 *   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
 *       result.geometry.location.lng);
 * }
 * </code></pre>
 * 
 * @function Maps.Geocoder#geocode
 * 
 * @param {String} address - an address
 * 
 * @return {Object} a JSON Object containing the geocoding data, as described <a
 *     href="/maps/documentation/geocoding/#JSON">here</a>
 */


/**
 * Gets the approximate addresses for a given geographic point.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the address of a point in Times Square.
 * var response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
 * for (var i = 0; i &lt; response.results.length; i++) {
 *   var result = response.results[i];
 *   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
 *       result.geometry.location.lng);
 * }
 * </code></pre>
 * 
 * @function Maps.Geocoder#reverseGeocode
 * 
 * @param {Number} latitude - the latitude of the point
 * @param {Number} longitude - the longitude of the point
 * 
 * @return {Object} a JSON Object containing the reverse geocoding data, as described <a
 *     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
 */


/**
 * Gets the approximate addresses for a given area.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the address of an area around Central Park.
 * var response = Maps.newGeocoder().reverseGeocode(40.764941, -73.98262, 40.799133, -73.947558);
 * for (var i = 0; i &lt; response.results.length; i++) {
 *   var result = response.results[i];
 *   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
 *       result.geometry.location.lng);
 * }
 * </code></pre>
 * 
 * @function Maps.Geocoder#reverseGeocode
 * 
 * @param {Number} swLatitude - the latitude of the south west corner of the bounds
 * @param {Number} swLongitude - the longitude of the south west corner of the bounds
 * @param {Number} neLatitude - the latitude of the north east corner of the bounds
 * @param {Number} neLongitude - the longitude of the north east corner of the bounds
 * 
 * @return {Object} a JSON Object containing the reverse geocoding data, as described <a
 *     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
 */


/**
 * Sets the bounds of an area that should be given extra preference in the results.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a Geocoder that prefers points in the area of Manhattan.
 * var geocoder = Maps.newGeocoder()
 *     .setBounds(40.699642, -74.021072, 40.877569, -73.908548);
 * </code></pre>
 * 
 * @function Maps.Geocoder#setBounds
 * 
 * @param {Number} swLatitude - the latitude of the south west corner of the bounds
 * @param {Number} swLongitude - the longitude of the south west corner of the bounds
 * @param {Number} neLatitude - the latitude of the north east corner of the bounds
 * @param {Number} neLongitude - the longitude of the north east corner of the bounds
 * 
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls
 */


/**
 * Sets the language to be used in the results.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a Geocoder with the language set to French.
 * var geocoder = Maps.newGeocoder().setLanguage(&#39;fr&#39;);
 * </code></pre>
 * 
 * @function Maps.Geocoder#setLanguage
 * 
 * @param {String} language - a BCP-47 language identifier
 * 
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls.
 */


/**
 * Sets a region to use when interpreting location names. The supported region codes correspond to
 * the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
 * "maps.google.co.uk".
 * 
 * <pre class="prettyprint"><code>
 * // Creates a Geocoder with the region set to France.
 * var geocoder = Maps.newGeocoder().setRegion(&#39;fr&#39;);
 * </code></pre>
 * 
 * @function Maps.Geocoder#setRegion
 * 
 * @param {String} region - the region code to use
 * 
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls
 */



/**
 * @class Maps.MarkerSize
 */

/**
 * Medium sized markers (largest available).
 * 
 * @typedef {String} Maps.MarkerSize.MID
 */
/**
 * Small sized markers. Labels will not be visible on markers of this size.
 * 
 * @typedef {String} Maps.MarkerSize.SMALL
 */
/**
 * Tiny sized markets (smallest available). Labels will not be visible on markers of this size.
 * 
 * @typedef {String} Maps.MarkerSize.TINY
 */

/**
 * @class Maps.Mode
 */

/**
 * Bicycling directions via bicycle paths and preferred streets (where available).
 * 
 * @typedef {String} Maps.Mode.BICYCLING
 */
/**
 * Driving directions via roads.
 * 
 * @typedef {String} Maps.Mode.DRIVING
 */
/**
 * Transit directions via public transit routes (where available). This mode requires that you set
 * either the departure or arrival time.
 * 
 * <pre class="prettyprint"><code>
 * // Log all available data for a public-transit trip.
 * var directions = Maps.newDirectionFinder()
 *     .setOrigin(&#39;The Cloisters, New York, NY&#39;)
 *     .setDestination(&#39;JFK airport, New York, NY&#39;)
 *     .setMode(Maps.DirectionFinder.Mode.TRANSIT)
 *     .setDepart(new Date())
 *     .getDirections();
 * var route = directions.routes[0];
 * Logger.log(route);
 * </code></pre>
 * 
 * @typedef {String} Maps.Mode.TRANSIT
 */
/**
 * Walking directions via pedestrian paths and sidewalks (where available).
 * 
 * @typedef {String} Maps.Mode.WALKING
 */

/**
 * @class Maps.StaticMap
 */

/**
 * Adds a new address to the current path definition.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a path from New York to Boston.
 * var map = Maps.newStaticMap()
 *     .beginPath()
 *     .addAddress(&#39;New York, NY&#39;)
 *     .addAddress(&#39;Boston, MA&#39;)
 *     .endPath();
 * </code></pre>
 * 
 * @function Maps.StaticMap#addAddress
 * 
 * @param {String} address - an address
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds a marker to the map using a point (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a marker at the specified coordinates.
 * var map = Maps.newStaticMap().addMarker(40.741799, -74.004207);
 * </code></pre>
 * 
 * @function Maps.StaticMap#addMarker
 * 
 * @param {Number} latitude - the latitude of the new marker
 * @param {Number} longitude - the longitude of the new marker
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds a marker to the map using an address.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a marker at the specified address.
 * var map = Maps.newStaticMap().addMarker(&#39;76 9th Ave, New York NY&#39;);
 * </code></pre>
 * 
 * @function Maps.StaticMap#addMarker
 * 
 * @param {String} address - the address at wich to place the new marker
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds a path to the map using an array of points.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a path from New York to Boston.
 * var map = Maps.newStaticMap()
 *     .addPath([40.714353, -74.005973, 42.358431, -71.059773]);
 * </code></pre>
 * 
 * @function Maps.StaticMap#addPath
 * 
 * @param {Number[]} points - an array of latitude/longitude pairs that define the path
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds a path to the map using an encoded polyline.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a path from New York to Boston.
 * var polyline = Maps.encodePolyline([40.714353, -74.005973, 42.358431, -71.059773]);
 * var map = Maps.newStaticMap().addPath(polyline);
 * </code></pre>
 * 
 * @function Maps.StaticMap#addPath
 * 
 * @param {String} polyline - an encoded polyline
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds a new point (lat/lng) to the current path definition.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a path from New York to Boston.
 * var map = Maps.newStaticMap()
 *     .beginPath()
 *     .addPoint(40.714353, -74.005973)
 *     .addPoint(42.358431, -71.059773)
 *     .endPath();
 * </code></pre>
 * 
 * @function Maps.StaticMap#addPoint
 * 
 * @param {Number} latitude - the latitude of the point
 * @param {Number} longitude - the longitude of the point
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds a point (lat/lng) location that must be visible in the map.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map where New York and Boston are visible.
 * var map = Maps.newStaticMap()
 *     .addVisible(40.714353, -74.005973);
 *     .addVisible(42.358431, -71.059773)
 * </code></pre>
 * 
 * @function Maps.StaticMap#addVisible
 * 
 * @param {Number} latitude - the latitude of the point
 * @param {Number} longitude - the longitude of the point
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Adds an address location that must be visible in the map.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map where New York and Boston are visible.
 * var map = Maps.newStaticMap()
 *     .addVisible(&#39;New York, NY&#39;)
 *     .addVisible(&#39;Boston, MA&#39;);
 * </code></pre>
 * 
 * @function Maps.StaticMap#addVisible
 * 
 * @param {String} address - an address that must be visible in the map
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Starts a new path definition. Calls to addAddress() and addPoint() will define each new vertex
 * in the path. The path is completed when endPath() is called.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a path from New York to Boston.
 * var map = Maps.newStaticMap()
 *     .beginPath()
 *     .addAddress(&#39;New York, NY&#39;)
 *     .addAddress(&#39;Boston, MA&#39;)
 *     .endPath();
 * </code></pre>
 * 
 * @function Maps.StaticMap#beginPath
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Clears the current set of markers.
 * 
 * <pre class="prettyprint"><code>
 * var map = Maps.newStaticMap();
 * // ...
 * // Do something interesting here ...
 * // ...
 * // Remove all markers on the map.
 * map.clearMarkers();
 * </code></pre>
 * 
 * @function Maps.StaticMap#clearMarkers
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Clear the current set of paths.
 * 
 * <pre class="prettyprint"><code>
 * var map = Maps.newStaticMap();
 * // ...
 * // Do something interesting here ...
 * // ...
 * // Remove all paths on the map.
 * map.clearPaths();
 * </code></pre>
 * 
 * @function Maps.StaticMap#clearPaths
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Clears the current set of visible locations.
 * 
 * <pre class="prettyprint"><code>
 * var map = Maps.newStaticMap();
 * // ...
 * // Do something interesting here ...
 * // ...
 * // Remove all visible locations created with addVisible().
 * map.clearVisibles();
 * </code></pre>
 * 
 * @function Maps.StaticMap#clearVisibles
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Completes a path definition started with beginPath().
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map and adds a path from New York to Boston.
 * var map = Maps.newStaticMap()
 *     .beginPath()
 *     .addAddress(&#39;New York, NY&#39;)
 *     .addAddress(&#39;Boston, MA&#39;)
 *     .endPath();
 * </code></pre>
 * 
 * @function Maps.StaticMap#endPath
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function Maps.StaticMap#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Gets the image data as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/../base/blob.html'>Blob</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map centered on Times Square and saves it to Google Drive.
 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
 * DocsList.createFile(map);  // You can call map.getBlob() explicitly or use it
 *                            // implicitly by passing the map where a blob is expected.
 * </code></pre>
 * 
 * @function Maps.StaticMap#getBlob
 * 
 * @return {Blob} An image of the map in the selected image format.
 */


/**
 * Gets the raw image data as a byte array.
 * 
 * <p>In general, prefer using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/static-map.html#getBlob()'>getBlob()</a></code> which allows for simpler interactions with other
 * services.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map centered on Times Square and saves it to Google Drive.
 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
 * DocsList.createFile(Utilities.newBlob(map.getMapImage(), &#39;image/png&#39;, &#39;map.png&#39;));
 * </code></pre>
 * 
 * @function Maps.StaticMap#getMapImage
 * 
 * @return {Byte[]} An image of the map in the selected image format.
 */


/**
 * Gets the URL of the map image.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map centered on Times Square and gets the URL.
 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
 * Logger.log(map.getMapUrl());
 * </code></pre>
 * 
 * @function Maps.StaticMap#getMapUrl
 * 
 * @return {String} URL the map image URL
 */


/**
 * Sets the center of the map using a point (lat/lng).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map centered on Times Square, using its coordinates.
 * var map = Maps.newStaticMap().setCenter(40.759011, -73.984472);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setCenter
 * 
 * @param {Number} latitude - the latitude of the center
 * @param {Number} longitude - the longitude of the center
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the center of the map using an address.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map centered on Times Square, using its address.
 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setCenter
 * 
 * @param {String} address - the address of the center
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the custom marker image to use when creating new markers. Markers that have already been
 * added will not be affected.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map with markers set to be medium sized, black, and labeled with the number &quot;1&quot;.
 * var map = Maps.newStaticMap()
 *     .setCustomMarkerStyle(&#39;http://www.example.com/marker.png&#39;, false);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setCustomMarkerStyle
 * 
 * @param {String} imageUrl - specifies a URL to use as the marker's custom icon. Images may be in PNG, JPEG
 *     or GIF formats, though PNG is recommended.
 * @param {Boolean} useShadow - indicates that the marker should have a shadow generated, based on the image's
 *     visible region and its opacity/transparency
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the format of the map image.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map with the image format set to PNG.
 * var map = Maps.newStaticMap().setFormat(Maps.StaticMap.Format.PNG);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setFormat
 * 
 * @param {String} format - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/format.html'>Format</a></code>
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the language to be used for text on the map (where avaialbe).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map with the language set to French.
 * var map = Maps.newStaticMap().setLanguage(&#39;fr&#39;);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setLanguage
 * 
 * @param {String} language - a BCP-47 language identifier
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the type of map to be shown.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a satellite map.
 * var map = Maps.newStaticMap().setMapType(Maps.StaticMap.Type.SATELLITE);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setMapType
 * 
 * @param {String} mapType - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/type.html'>Type</a></code>
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the marker style to use when creating new markers. Markers that have already been added
 * will not be affected.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map with markers set to be medium sized, black, and labeled with the number &quot;1&quot;.
 * var map = Maps.newStaticMap()
 *     .setMarkerStyle(Maps.StaticMap.MarkerSize.MID, Maps.StaticMap.Color.BLACK , &#39;1&#39;);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setMarkerStyle
 * 
 * @param {String} size - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/marker-size.html'>MarkerSize</a></code>
 * @param {String} color - a string in the format "0xrrggbb" or a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/color.html'>Color</a></code>
 * @param {String} label - a string containing a single character A-Z or 0-9
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets whether or not to use specialized tile sets for mobile devices.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map that uses mobile-friendly tiles.
 * var map = Maps.newStaticMap().setMobile(true);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setMobile
 * 
 * @param {Boolean} useMobileTiles - whether or not to use mobile tiles
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the path style to use when creating new paths. Paths that have already been added will not
 * be affected.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map with paths set to be 1 pixel wide with a black line and a white fill.
 * var map = Maps.newStaticMap()
 *     .setPathStyle(1, Maps.StaticMap.Color.BLACK , &#39;red&#39;);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setPathStyle
 * 
 * @param {IntegerNum} weight - the width of lines in pixels
 * @param {String} color - the line color, as a string in the format "0xrrggbb" or a constant value from
 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/color.html'>Color</a></code>
 * @param {String} fillColor - the fill color, a string in the format "0xrrggbb" or a constant value from
 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/color.html'>Color</a></code>
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls.
 */


/**
 * Sets the width and height of the map image in pixels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map 400px wide by 300px high.
 * var map = Maps.newStaticMap().setSize(400, 300);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setSize
 * 
 * @param {IntegerNum} width - the width of the image in pixels
 * @param {IntegerNum} height - the height of the image in pixels
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */


/**
 * Sets the zoom factor, or magnification level, used for the map.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a map with a zoom factor of 10.
 * var map = Maps.newStaticMap().setZoom(10);
 * </code></pre>
 * 
 * @function Maps.StaticMap#setZoom
 * 
 * @param {IntegerNum} zoom - a value from 0 - 21+
 * 
 * @return {Maps.StaticMap} the StaticMap instance to facilitate chaining of calls
 */



/**
 * @class Maps.StaticMapEnums
 */

/**
 * @typedef {Maps.Color} Maps.StaticMapEnums.Color
 */
/**
 * @typedef {Maps.Format} Maps.StaticMapEnums.Format
 */
/**
 * @typedef {Maps.MarkerSize} Maps.StaticMapEnums.MarkerSize
 */
/**
 * @typedef {Maps.Type} Maps.StaticMapEnums.Type
 */

/**
 * @class Maps.Type
 */

/**
 * A hybrid of the satellite and roadmap maps, showing a transparent layer of major streets and
 * place names on the satellite map.
 * 
 * @typedef {String} Maps.Type.HYBRID
 */
/**
 * A standard roadmap, as is normally shown on the Google Maps website.
 * 
 * @typedef {String} Maps.Type.ROADMAP
 */
/**
 * A satellite map.
 * 
 * @typedef {String} Maps.Type.SATELLITE
 */
/**
 * A physical relief map, showing terrain and vegetation.
 * 
 * @typedef {String} Maps.Type.TERRAIN
 */

