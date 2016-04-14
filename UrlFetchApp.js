var UrlFetchApp = {};


/**
 * Makes a request to fetch a URL using optional advanced parameters.

 This works over HTTP as well as HTTPS.

 <pre class="prettyprint">
 <code>
 // The code below logs the HTML code of the Google home page.
 var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
 Logger.log(response.getContentText());
 </code></pre>

 <pre class="prettyprint">
 <code>
 // This sample sends POST payload data in the style of an HTML form, including
 // a file.

 function sendHttpPost() {

   // Download a file now (GET), so we can upload it in the HTTP POST below.
   var response = UrlFetchApp.fetch(&quot;http://example.com/image_to_download.jpg&quot;);
   var fileBlob = response.getBlob();

   var payload =
   {
     &quot;fieldOne&quot; : &quot;value for field one&quot;,
     &quot;fieldTwo&quot; : &quot;value for field two&quot;,
     &quot;fileAttachment&quot;: fileBlob
   };

   // Because payload is a JavaScript object, it will be interpreted as
   // an HTML form. (We do not need to specify contentType; it will
   // automatically default to either &#39;application/x-www-form-urlencoded&#39;
   // or &#39;multipart/form-data&#39;)

   var options =
   {
     &quot;method&quot; : &quot;post&quot;,
     &quot;payload&quot; : payload
   };

   UrlFetchApp.fetch(&quot;http://example.com/upload_form.cgi&quot;, options);
 }
 </code></pre>
 *
 * @param {String} url - the URL to fetch
 * @param {Object} params - optional JavaScript object specifying advanced parameters as defined below
 *
 * @return {UrlFetchApp.HTTPResponse} the http response data
 */
UrlFetchApp.fetch = function(url, params){};

/**
 * Returns the request that would be made if the operation were invoked.

 This method does not actually issue the request.
 *
 * @param {String} url - the url to look up
 * @param {Object} params - optional JavaScript object specifying advanced parameters as defined below
 *
 * @return {Object} a map of Field Name to Value. The map has at least the following keys:
         url, method, contentType, useIntranet, payload, headers.
 */
UrlFetchApp.getRequest = function(url, params){};

/** @constructor */
UrlFetchApp.HTTPResponse = function(){};

/**
 * Returns an attribute/value map of headers for the HTTP response, with headers that have
 multiple values returned as arrays.

 <pre class="prettyprint">
 <code>
   // The code below logs the HTTP headers from the response
   // received when fetching the Google home page.
   var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
   Logger.log(response.getAllHeaders().toSource());
 </code></pre>
 *
 * @return {Object} a JavaScript key/value map of HTTP headers
 */
UrlFetchApp.HTTPResponse.prototype.getAllHeaders = function(){};

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename ? for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" will become
 "ChristmasList.12.25.pdf".
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs,
     <code>&#39;application/pdf&#39;</code> is the only valid option. For images in BMP, GIF, JPEG,
     or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>,
     <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also valid.
 *
 * @return {Blob} the data as a blob
 */
UrlFetchApp.HTTPResponse.prototype.getAs = function(contentType){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
UrlFetchApp.HTTPResponse.prototype.getBlob = function(){};

/**
 * Gets the raw binary content of an HTTP response.

 <pre class="prettyprint">
 <code>
   // The code below logs the value of the first byte of the Google home page.
   var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
   Logger.log(response.getContent()[0]);
 </code></pre>
 *
 * @return {Byte[]} the content as a raw binary array
 */
UrlFetchApp.HTTPResponse.prototype.getContent = function(){};

/**
 * Returns the content of an HTTP response encoded as a string of the given charset.

 <pre class="prettyprint">
 <code>
   // The code below logs the HTML code of the Google home page with the UTF-8 charset.
   var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
   Logger.log(response.getContentText(&quot;UTF-8&quot;));
 </code></pre>
 *
 * @param {String} charset - a string representing the charset to be used for encoding the HTTP response
        content
 *
 * @return {String} the content of the HTTP response, encoded using the given charset
 */
UrlFetchApp.HTTPResponse.prototype.getContentText = function(charset){};

/**
 * Returns an attribute/value map of headers for the HTTP response.

 <pre class="prettyprint">
 <code>
   // The code below logs the HTTP headers from the response
   // received when fetching the Google home page.
   var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
   Logger.log(response.getHeaders().toSource());
 </code></pre>
 *
 * @return {Object} a JavaScript key/value map of HTTP headers
 */
UrlFetchApp.HTTPResponse.prototype.getHeaders = function(){};

/**
 * Get the HTTP status code (200 for OK, etc.) of an HTTP response.

 <pre class="prettyprint">
 <code>
   // The code below logs the HTTP status code from the response received
   // when fetching the Google home page.
   // It should be 200 if the request succeeded.
   var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
   Logger.log(response.getResponseCode());
 </code></pre>
 *
 * @return {number} HTTP response code (e.g. 200 for OK)
 */
UrlFetchApp.HTTPResponse.prototype.getResponseCode = function(){};

