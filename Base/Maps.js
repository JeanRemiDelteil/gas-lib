var Maps = {};


/**
 * 
 * 
 * @class Maps.DirectionFinderEnums
 */

/**
 * 
 * 
 * @class Maps.StaticMapEnums
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
 * @param {String} polyline - an encoded polyline
 *
 * @return {Number[]} an array of latitude longitude pairs (lat0, long0, lat1, long1, ...)
 */
Maps.decodePolyline = function(polyline){};

/**
 * Encodes an array of points into a string.

 <pre class="prettyprint"><code>
 // The latitudes and longitudes of New York and Boston respectively.
 var points = [40.77, -73.97, 42.34, -71.04];
 var polyline = Maps.encodePolyline(points);
 </code></pre>
 *
 * @param {Number[]} points - an array of latitude/longitude pairs to encode
 *
 * @return {String} an encoded string
 */
Maps.encodePolyline = function(points){};

/**
 * Creates a new DirectionFinder object.
 *
 * @return {Maps.DirectionFinder} a DirectionFinder object
 */
Maps.newDirectionFinder = function(){};

/**
 * Creates an ElevationSampler object.
 *
 * @return {Maps.ElevationSampler} an ElevationSampler object
 */
Maps.newElevationSampler = function(){};

/**
 * Creates a new Geocoder object.
 *
 * @return {Maps.Geocoder} a Geocoder object
 */
Maps.newGeocoder = function(){};

/**
 * Creates a new StaticMap object.
 *
 * @return {Maps.StaticMap} a StaticMap object
 */
Maps.newStaticMap = function(){};

/**
 * Enables the use of an externally established Maps API for Business account, to leverage
 additional quota allowances. Your client ID and signing key can be obtained from the Google
 Enterprise Support Portal. Set these values to null to go back to using the default quota
 allowances.

 <pre class="prettyprint"><code>
 Maps.setAuthentication(&#39;gme-123456789&#39;, &#39;VhSEZvOXVSdnlxTnpJcUE&#39;);
 </code></pre>
 *
 * @param {String} clientId - client identifier
 * @param {String} signingKey - private signing key
 *
 * @return void
 */
Maps.setAuthentication = function(clientId, signingKey){};

/** @constructor */
Maps.Avoid = function(){};

/** @constructor */
Maps.Color = function(){};

/** @constructor */
Maps.DirectionFinderEnums = function(){};

/** @constructor */
Maps.ElevationSampler = function(){};

/**
 * Returns elevation data for a single point (lat/lng).

 <pre class="prettyprint"><code>
 // Gets the elevation of Times Square using a point.
 var data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
 Logger.log(data.results[0].elevation);
 </code></pre>
 *
 * @param {Number} latitude - the latitude of the point to sample
 * @param {Number} longitude - the longitude of the point to sample
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */
Maps.ElevationSampler.prototype.sampleLocation = function(latitude, longitude){};

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
 * @param {Number[]} points - an array of latitude/longitude pairs
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */
Maps.ElevationSampler.prototype.sampleLocations = function(points){};

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
 * @param {Number[]} points - an array of latitude/longitude pairs defining a path to sample over
 * @param {number} numSamples - the number of points to sample along the path of points
 *
 * @return {Object} a JSON Object containing the elevation data, as described <a
     href="/maps/documentation/elevation/#ElevationResponses">here</a>
 */
Maps.ElevationSampler.prototype.samplePath = function(points, numSamples){};

/** @constructor */
Maps.Format = function(){};

/** @constructor */
Maps.Geocoder = function(){};

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
 * @param {String} address - an address
 *
 * @return {Object} a JSON Object containing the geocoding data, as described <a
     href="/maps/documentation/geocoding/#JSON">here</a>
 */
Maps.Geocoder.prototype.geocode = function(address){};

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
 * @param {Number} latitude - the latitude of the point
 * @param {Number} longitude - the longitude of the point
 *
 * @return {Object} a JSON Object containing the reverse geocoding data, as described <a
     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
 */
Maps.Geocoder.prototype.reverseGeocode = function(latitude, longitude){};

/**
 * Sets the bounds of an area that should be given extra preference in the results.

 <pre class="prettyprint"><code>
 // Creates a Geocoder that prefers points in the area of Manhattan.
 var geocoder = Maps.newGeocoder()
     .setBounds(40.699642, -74.021072, 40.877569, -73.908548);
 </code></pre>
 *
 * @param {Number} swLatitude - the latitude of the south west corner of the bounds
 * @param {Number} swLongitude - the longitude of the south west corner of the bounds
 * @param {Number} neLatitude - the latitude of the north east corner of the bounds
 * @param {Number} neLongitude - the longitude of the north east corner of the bounds
 *
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls
 */
Maps.Geocoder.prototype.setBounds = function(swLatitude, swLongitude, neLatitude, neLongitude){};

/**
 * Sets the language to be used in the results.

 <pre class="prettyprint"><code>
 // Creates a Geocoder with the language set to French.
 var geocoder = Maps.newGeocoder().setLanguage(&#39;fr&#39;);
 </code></pre>
 *
 * @param {String} language - a BCP-47 language identifier
 *
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls.
 */
Maps.Geocoder.prototype.setLanguage = function(language){};

/**
 * Sets a region to use when interpreting location names. The supported region codes correspond to
 the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
 "maps.google.co.uk".

 <pre class="prettyprint"><code>
 // Creates a Geocoder with the region set to France.
 var geocoder = Maps.newGeocoder().setRegion(&#39;fr&#39;);
 </code></pre>
 *
 * @param {String} region - the region code to use
 *
 * @return {Maps.Geocoder} the Geocoder object to facilitate chaining of calls
 */
Maps.Geocoder.prototype.setRegion = function(region){};

/** @constructor */
Maps.MarkerSize = function(){};

/** @constructor */
Maps.Mode = function(){};

/** @constructor */
Maps.StaticMapEnums = function(){};

/** @constructor */
Maps.Type = function(){};

