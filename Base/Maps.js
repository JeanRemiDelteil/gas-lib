/**********************************************
 * @namespace Maps
 ***********************************************/


/**
 * @class {Maps.DirectionFinderEnums} Maps.DirectionFinder
 */

/**
 * @class {Maps.StaticMapEnums} Maps.StaticMap
 */

/**
 * Decodes an encoded polyline string back into an array of points.

 <pre class="prettyprint"><code>
 // Decodes a string representation of the latitudes and longitudes of Minneapolis and Milwaukee
 // respectively.
 var polyline = &#39;qvkpG`qhxPbgyI_zq_@&#39;;
 var points = Maps.decodePolyline(polyline);
 for (var i = 0; i &lt; points.length; i+= 2) {
   Logger.log(&#39;%s, %s&#39;, points[i], points[i+1]);
 }
 </code></pre>
 *
 * @function Maps.decodePolyline
 *
 * @param {String} polyline - an encoded polyline
 *
 * @return {Number[]} an array of latitude longitude pairs (lat0, long0, lat1, long1, ...)
 */

/**
 * Encodes an array of points into a string.

 <pre class="prettyprint"><code>
 // The latitudes and longitudes of New York and Boston respectively.
 var points = [40.77, -73.97, 42.34, -71.04];
 var polyline = Maps.encodePolyline(points);
 </code></pre>
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
 additional quota allowances. Your client ID and signing key can be obtained from the Google
 Enterprise Support Portal. Set these values to null to go back to using the default quota
 allowances.

 <pre class="prettyprint"><code>
 Maps.setAuthentication(&#39;gme-123456789&#39;, &#39;VhSEZvOXVSdnlxTnpJcUE&#39;);
 </code></pre>
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
 * @class Maps.Color
 */

/**
 * @class Maps.DirectionFinderEnums
 */

/**
 * @class Maps.ElevationSampler
 */

/**
 * Returns elevation data for a single point (lat/lng).

 <pre class="prettyprint"><code>
 // Gets the elevation of Times Square using a point.
 var data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
 Logger.log(data.results[0].elevation);
 </code></pre>
 *
 * @function Maps.ElevationSampler#sampleLocation
 *
 * @param {Number} latitude - the latitude of the point to sample
 * @param {Number} longitude - the longitude of the point to sample
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */

/**
 * Returns elevation data for a series of points (lat/lng).

 <pre class="prettyprint"><code>
 // Gets the elevation of Times Square and Central Park using points.
 var data = Maps.newElevationSampler().sampleLocations([
     // Times Square
     40.759011, -73.984472,
     // Central Park
     40.777052, -73.975464
 ]);
 Logger.log(&#39;Times Square: &#39; + data.results[0].elevation);
 Logger.log(&#39;Central Park: &#39; + data.results[1].elevation);
 </code></pre>
 *
 * @function Maps.ElevationSampler#sampleLocations
 *
 * @param {Number[]} points - an array of latitude/longitude pairs
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */

/**
 * Returns elevation data for the points in an encoded polyline.

 <pre class="prettyprint"><code>
 // Gets the elevation of Times Square and Central Park using a polyline.
 var data = Maps.newElevationSampler().sampleLocations(&#39;yvwwF|aqbMwoBiw@&#39;);
 Logger.log(&#39;Times Square: &#39; + data.results[0].elevation);
 Logger.log(&#39;Central Park: &#39; + data.results[1].elevation);
 </code></pre>
 *
 * @function Maps.ElevationSampler#sampleLocations
 *
 * @param {String} encodedPolyline - an encoded polyline of points to sample
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */

/**
 * Returns elevation data for a number of samples along a line, defined using a series of points.

 <pre class="prettyprint"><code>
 // Gets the elevation of five points between Times Square and Central Park.
 var data = Maps.newElevationSampler().samplePath([
     // Times Square
     40.759011, -73.984472,
     // Central Park
     40.777052, -73.975464
 ], 5);
 for (var i = 0; i &lt; data.results.length; i++) {
   Logger.log(data.results[i].elevation);
 }
 </code></pre>
 *
 * @function Maps.ElevationSampler#samplePath
 *
 * @param {Number[]} points - an array of latitude/longitude pairs defining a path to sample over
 * @param {number} numSamples - the number of points to sample along the path of points
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */

/**
 * Returns elevation data for a number of samples along a line, defined using an encoded polyline.

 <pre class="prettyprint"><code>
 // Gets the elevation of five points between Times Square and Central Park.
 var data = Maps.newElevationSampler().samplePath(&#39;yvwwF|aqbMwoBiw@&#39;, 5);
 for (var i = 0; i &lt; data.results.length; i++) {
   Logger.log(data.results[i].elevation);
 }
 </code></pre>
 *
 * @function Maps.ElevationSampler#samplePath
 *
 * @param {String} encodedPolyline - an encoded polyline of points defining a path to sample over
 * @param {number} numSamples - the number of points to sample along the path of points
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */

/**
 * @class Maps.Format
 */

/**
 * @class Maps.Geocoder
 */

/**
 * Gets the approximate geographic points for a given address.

 <pre class="prettyprint"><code>
 // Gets the geographic coordinates for Times Square.
 var response = Maps.newGeocoder().geocode(&#39;Times Square, New York, NY&#39;);
 for (var i = 0; i &lt; response.results.length; i++) {
   var result = response.results[i];
   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
       result.geometry.location.lng);
 }
 </code></pre>
 *
 * @function Maps.Geocoder#geocode
 *
 * @param {String} address - an address
 *
 * @return {Object} a JSON Object containing the geocoding data, as described <a
     href="/maps/documentation/geocoding/#JSON">here</a>
 */

/**
 * Gets the approximate addresses for a given geographic point.

 <pre class="prettyprint"><code>
 // Gets the address of a point in Times Square.
 var response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
 for (var i = 0; i &lt; response.results.length; i++) {
   var result = response.results[i];
   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
       result.geometry.location.lng);
 }
 </code></pre>
 *
 * @function Maps.Geocoder#reverseGeocode
 *
 * @param {Number} latitude - the latitude of the point
 * @param {Number} longitude - the longitude of the point
 *
 * @return {Object} a JSON Object containing the reverse geocoding data, as described <a
     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
 */

/**
 * Gets the approximate addresses for a given area.

 <pre class="prettyprint"><code>
 // Gets the address of an area around Central Park.
 var response = Maps.newGeocoder().reverseGeocode(40.764941, -73.98262, 40.799133, -73.947558);
 for (var i = 0; i &lt; response.results.length; i++) {
   var result = response.results[i];
   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
       result.geometry.location.lng);
 }
 </code></pre>
 *
 * @function Maps.Geocoder#reverseGeocode
 *
 * @param {Number} swLatitude - the latitude of the south west corner of the bounds
 * @param {Number} swLongitude - the longitude of the south west corner of the bounds
 * @param {Number} neLatitude - the latitude of the north east corner of the bounds
 * @param {Number} neLongitude - the longitude of the north east corner of the bounds
 *
 * @return {Object} a JSON Object containing the reverse geocoding data, as described <a
     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
 */

/**
 * Sets the bounds of an area that should be given extra preference in the results.

 <pre class="prettyprint"><code>
 // Creates a Geocoder that prefers points in the area of Manhattan.
 var geocoder = Maps.newGeocoder()
     .setBounds(40.699642, -74.021072, 40.877569, -73.908548);
 </code></pre>
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

 <pre class="prettyprint"><code>
 // Creates a Geocoder with the language set to French.
 var geocoder = Maps.newGeocoder().setLanguage(&#39;fr&#39;);
 </code></pre>
 *
 * @function Maps.Geocoder#setLanguage
 *
 * @param {String} language - a BCP-47 language identifier
 *
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls.
 */

/**
 * Sets a region to use when interpreting location names. The supported region codes correspond to
 the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
 "maps.google.co.uk".

 <pre class="prettyprint"><code>
 // Creates a Geocoder with the region set to France.
 var geocoder = Maps.newGeocoder().setRegion(&#39;fr&#39;);
 </code></pre>
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
 * @class Maps.Mode
 */

/**
 * @class Maps.StaticMapEnums
 */

/**
 * @class Maps.Type
 */

