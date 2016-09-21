var Utilities = {};


Utilities.Charset = {};

/**
 * @type {Utilities.Charset}
 */
Utilities.Charset.US_ASCII = {};
Utilities.Charset.UTF_8 = {};

Utilities.DigestAlgorithm = {};

/**
 * @type: {Utilities.DigestAlgorithm}
 */
Utilities.DigestAlgorithm.MD2 = {};
Utilities.DigestAlgorithm.MD5 = {};
Utilities.DigestAlgorithm.SHA_1 = {};
Utilities.DigestAlgorithm.SHA_256 = {};
Utilities.DigestAlgorithm.SHA_384 = {};
Utilities.DigestAlgorithm.SHA_512 = {};


Utilities.MacAlgorithm = {};

/**
 * @type {Utilities.MacAlgorithm}
 */
Utilities.MacAlgorithm.HMAC_MD5 = {};
Utilities.MacAlgorithm.HMAC_SHA_1 = {};
Utilities.MacAlgorithm.HMAC_SHA_256 = {};
Utilities.MacAlgorithm.HMAC_SHA_384 = {};
Utilities.MacAlgorithm.HMAC_SHA_512 = {};


/**
 * Decodes a base-64 encoded string into a UTF-8 byte array.

 <pre class="prettyprint">
 <code>
 // This is the base64 encoded form of &quot;Google ????&quot;
 var base64data = &quot;R29vZ2xlIOOCsOODq+ODvOODlw==&quot;;

 // This will log:
 //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
 //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
 var decoded = Utilities.base64Decode(base64data);
 Logger.log(decoded);

 // If we want a String instead of a byte array:
 // This will log the original &quot;Google ????&quot;
 Logger.log(Utilities.newBlob(decoded).getDataAsString());
 </code></pre>
 *
 * @param {String} encoded - an array of bytes of data to decode
 *
 * @return {Byte[]} the raw data represented by the base-64 encoded argument as a byte array
 */
Utilities.base64Decode = function(encoded){};

/**
 * Decodes a base-64 web-safe encoded string into a UTF-8 byte array.

 <pre class="prettyprint">
 <code>
 // This is the base64 web-safe encoded form of &quot;Google ????&quot;
 var base64data = &quot;R29vZ2xlIOOCsOODq-ODvOODlw==&quot;;

 var decoded = Utilities.base64DecodeWebSafe(base64data);

 // This will log:
 //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
 //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
 Logger.log(decoded);

 // If we want a String instead of a byte array:
 // This will log the original &quot;Google ????&quot;
 Logger.log(Utilities.newBlob(decoded).getDataAsString());
 </code></pre>
 *
 * @param {String} encoded - an array of bytes of web-safe data to decode
 *
 * @return {Byte[]} the raw data represented by the base-64 web-safe encoded argument as a byte array
 */
Utilities.base64DecodeWebSafe = function(encoded){};

/**
 * Generates a base-64 encoded string from the given byte array.
 Base 64 is a common encoding accepted by a variety of tools that cannot
 accept binary data. Base 64 is commonly used in internet protocols
 such as email, HTTP, or in XML documents.

 <pre class="prettyprint">
 <code>
 // Instantiates a blob here for clarity
 var blob = Utilities.newBlob(&quot;A string here&quot;);

 // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
 var encoded = Utilities.base64Encode(blob.getBytes());
 Logger.log(encoded);
 </code></pre>
 *
 * @param {Byte[]} data - a byte[] of data to encode
 *
 * @return {String} the base-64 encoded representation of the passed in data
 */
Utilities.base64Encode = function(data){};

/**
 * Generates a base-64 encoded string from the given string.
 Base 64 is a common encoding accepted by a variety of tools that cannot
 accept binary data. Base 64 is commonly used in internet protocols
 such as email, HTTP, or in XML documents.

 <pre class="prettyprint">
 <code>
 // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
 var encoded = Utilities.base64Encode(&quot;A string here&quot;);
 Logger.log(encoded);
 </code></pre>
 *
 * @param {String} data - the string to encode
 *
 * @return {String} the base-64 encoded representation of the input string
 */
Utilities.base64Encode = function(data){};

/**
 * Generates a base-64 web-safe encoded string from the given byte array.
 Base 64 is a common encoding accepted by a variety of tools that cannot
 accept binary data. Base 64 web-safe is commonly used in internet protocols
 such as email, HTTP, or in XML documents.

 <pre class="prettyprint">
 <code>
 // Instantiates a blob here for clarity
 var blob = Utilities.newBlob(&quot;A string here&quot;);

 // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
 var encoded = Utilities.base64EncodeWebSafe(blob.getBytes());
 Logger.log(encoded);
 </code></pre>
 *
 * @param {Byte[]} data - an array of bytes of data to encode
 *
 * @return {String} the base-64 web-safe encoded representation of the passed in data
 */
Utilities.base64EncodeWebSafe = function(data){};

/**
 * Generates a base-64 web-safe encoded string from the given string.
 Base 64 is a common encoding accepted by a variety of tools that cannot
 accept binary data. Base 64 web-safe is commonly used in internet protocols
 such as email, HTTP, or in XML documents.

 <pre class="prettyprint">
 <code>
 // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
 var encoded = Utilities.base64EncodeWebSafe(&quot;A string here&quot;);
 Logger.log(encoded);
 </code></pre>
 *
 * @param {String} data - the string to encode
 *
 * @return {String} the base-64 web-safe encoded representation of the input string
 */
Utilities.base64EncodeWebSafe = function(data){};

/**
 * Compute a digest using the specified algorithm on the specified value

 <pre class="prettyprint">
 <code>
 var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, &quot;input to hash&quot;);
 Logger.log(digest);
 </code></pre>
 *
 * @param {Utilities.DigestAlgorithm} algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html'>DigestAlgorithm</a></code> to use
 * @param {String} value - an input string value to compute a digest for
 *
 * @return {Byte[]} a byte[] representing the output digest
 */
Utilities.computeDigest = function(algorithm, value){};

/**
 * Signs the provided value using HMAC-SHA256 with the given key.

 <pre class="prettyprint">
 <code>
 // This will write an array of bytes to the log.
 var signature = Utilities.computeHmacSha256Signature(&quot;this is my input&quot;,
                                                       &quot;my key - use a stronger one&quot;);
 Logger.log(signature);
 </code></pre>
 *
 * @param {String} value - the input value to generate a hash for
 * @param {String} key - a key to use to generate the hash with
 *
 * @return {Byte[]} a byte[] representing the output signature
 */
Utilities.computeHmacSha256Signature = function(value, key){};

/**
 * Compute a message authentication code using the specified algorithm on the specified key
 and value.

 <pre class="prettyprint">
 <code>
 // This will write an array of bytes to the log.
 var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
                                                &quot;input to hash&quot;,
                                                &quot;key&quot;);
 Logger.log(signature);
 </code></pre>
 *
 * @param {Utilities.MacAlgorithm} algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html'>MacAlgorithm</a></code> algorithm to use to hash the input value
 * @param {String} value - the input value to generate a hash for
 * @param {String} key - a key to use to generate the hash with
 *
 * @return {Byte[]} a byte[] representing the output signature
 */
Utilities.computeHmacSignature = function(algorithm, value, key){};

/**
 * Signs the provided value using RSA-SHA256 with the given key.

 <pre class="prettyprint">
 <code>
 // This will write an array of bytes to the log.
 var signature = Utilities.computeRsaSha256Signature(&quot;this is my input&quot;,
     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;);
 Logger.log(signature);
 </code></pre>
 *
 * @param {String} value - the input value to generate a hash for
 * @param {String} key - a PEM formatted key to use to generate the signature
 *
 * @return {Byte[]} a byte[] representing the output signature
 */
Utilities.computeRsaSha256Signature = function(value, key){};

/**
 * Formats date according to specification described in Java SE
 SimpleDateFormat class. Please visit the specification at
 <a href="http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html">
 http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html</a>

 <pre class="prettyprint">
 <code>
 // This formats the date as Greenwich Mean Time in the format
 // year-month-dateThour-minute-second.
 var formattedDate = Utilities.formatDate(new Date(), &quot;GMT&quot;, &quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39;&quot;);
 Logger.log(formattedDate);
 </code></pre>
 *
 * @param {Date} date - a <code>Date</code> to format as a String
 * @param {String} timeZone - the output timezone of the result
 * @param {String} format - a format per the <code><a href="http://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html">java.text.SimpleDateFormat</a></code> specification
 *
 * @return {String} the input date as a formatted string
 */
Utilities.formatDate = function(date, timeZone, format){};

/**
 * Performs <code>sprintf</code>-like string formatting using '%'-style format strings.

 <pre class="prettyprint">
 <code>
 // will be: &quot; 123.456000&quot;
 Utilities.formatString(&#39;%11.6f&#39;, 123.456);

 // will be: &quot;   abc&quot;
 Utilities.formatString(&#39;%6s&#39;, &#39;abc&#39;);
 </code></pre>
 *
 * @param {String} template - The format string that controls what gets returned.
 * @param {Object...} args - Objects to use to fill in the '%' placeholders in the template.
 *
 * @return {String} the formatted string.
 */
Utilities.formatString = function(template, args){};

/**
 * Get a UUID as a string (equivalent to using the
 <a href="https://docs.oracle.com/javase/7/docs/api/java/util/UUID.html"><code>java.util.UUID.randomUUID()</code></a> method).
 This identifier is not guaranteed to be unique across all time and space.
 As such, do not use in situations where guaranteed uniqueness is required.

 <pre class="prettyprint">
 <code>
 //This assigns a UUID as a temporary ID for a data object you are creating in your script.
 var myDataObject = {
    tempId: Utilities.getUuid();
 };
 </code></pre>
 *
 * @return {String} a string representation of the UUID
 */
Utilities.getUuid = function(){};

/**
 * Return an object corresponding to the JSON string passed in.

 <pre class="prettyprint">
 <code>
 // Returns the object { name: &quot;John Smith&quot;, company: &quot;Virginia Company&quot;}
 var obj = Utilities.jsonParse(&#39;{&quot;name&quot;:&quot;John Smith&quot;,&quot;company&quot;:&quot;Virginia Company&quot;}&#39;);
 </code></pre>
 *
 * @param {String} jsonString - a String representation of a JavaScript object to deserialize
 *
 * @return {Object} a JavaScript object representation of the input
 */
Utilities.jsonParse = function(jsonString){};

/**
 * Return a JSON string of the object passed in.

 <pre class="prettyprint">
 <code>
 // Logs: {&quot;name&quot;:&quot;John Smith&quot;,&quot;company&quot;:&quot;Virginia Company&quot;}
 var person = { name: &quot;John Smith&quot;, company: &quot;Virginia Company&quot; };
 var json = Utilities.jsonStringify(person);
 Logger.log(json);
 </code></pre>
 *
 * @param {Object} obj - the JavaScript object to serialize to JSON
 *
 * @return {String} a JSON serialized JavaScript object
 */
Utilities.jsonStringify = function(obj){};

/**
 * Create a new Blob object that is used in many Apps Script APIs that take binary data as input.
 *
 * @param {Byte[]} data - the bytes for the blob
 *
 * @return {Blob} the newly created Blob
 */
Utilities.newBlob = function(data){};

/**
 * Create a new Blob object that is used in many Apps Script APIs that take binary data as input.
 *
 * @param {Byte[]} data - the bytes for the blob
 * @param {String} contentType - the content type of the blob - can be null
 *
 * @return {Blob} the newly created Blob
 */
Utilities.newBlob = function(data, contentType){};

/**
 * Create a new Blob object that is used in many Apps Script APIs that take binary data as input.
 *
 * @param {Byte[]} data - the bytes for the blob
 * @param {String} contentType - - the content type of the blob - can be null
 * @param {String} name - the name of the blob - can be null
 *
 * @return {Blob} the newly created Blob
 */
Utilities.newBlob = function(data, contentType, name){};

/**
 * Create a new Blob object that is used in many Apps Script APIs that take binary data as input.
 *
 * @param {String} data - the string for the blob, assumed UTF-8
 *
 * @return {Blob} the newly created Blob
 */
Utilities.newBlob = function(data){};

/**
 * Create a new Blob object that is used in many Apps Script APIs that take binary data as input.
 *
 * @param {String} data - the string for the blob, assumed UTF-8
 * @param {String} contentType - the content type of the blob - can be null
 *
 * @return {Blob} the newly created Blob
 */
Utilities.newBlob = function(data, contentType){};

/**
 * Returns a tabular 2D array representation of a CSV string.

 <pre class="prettyprint">
 <code>
 // This will create a 2 dimensional array of the format [[a, b, c], [d, e, f]]
 var csvString = &quot;a,b,c\nd,e,f&quot;;
 var data = Utilities.parseCsv(csvString);
 </code></pre>
 *
 * @param {String} csv - a string containing a single or multiline data in
        comma-separated value (CSV) format
 *
 * @return {String[][]} a 2 dimensional array containing the values in the CSV string
 */
Utilities.parseCsv = function(csv){};

/**
 * Sleeps for specified number of milliseconds.
 Immediately puts the script to sleep for the specified number of milliseconds.
 The maximum allowed value is 300000 (or 5 minutes).
 *
 * @param {number} milliseconds - The number of milliseconds to sleep.
 *
 * @return void
 */
Utilities.sleep = function(milliseconds){};

/**
 * Takes a Blob representing a zip file and returns its component files.

 <pre class="prettyprint">
 <code>
 var googleFavIconUrl = &quot;https://www.google.com/favicon.ico&quot;;
 var googleLogoUrl = &quot;https://www.google.com/images/srpr/logo3w.png&quot;;

 // Fetch the Google favicon.ico file and get the Blob data
 var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
 var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

 // zip now references a blob containing an archive of both faviconBlob and logoBlob
 var zip = Utilities.zip([faviconBlob, logoBlob], &quot;google_images.zip&quot;);

 // This will now unzip the blobs
 var files = Utilities.unzip(zip);
 </code></pre>
 *
 * @param {BlobSource} blob - the zip file blob.
 *
 * @return {Blob[]} a Blob[] representing the component blobs,
         each named with the full path inside the zip
 */
Utilities.unzip = function(blob){};

/**
 * Creates a new Blob object that is a zip file containing the data from the
 Blobs passed in.

 <pre class="prettyprint">
 <code>
 var googleFavIconUrl = &quot;https://www.google.com/favicon.ico&quot;;
 var googleLogoUrl = &quot;https://www.google.com/images/srpr/logo3w.png&quot;;

 // Fetch the Google favicon.ico file and get the Blob data
 var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
 var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

 // zip now references a blob containing an archive of both faviconBlob and logoBlob
 var zip = Utilities.zip([faviconBlob, logoBlob]);
 </code></pre>
 *
 * @param {BlobSource[]} blobs - a array of blobs to zip up
 *
 * @return {Blob} a new blob containing the inputs as an archive
 */
Utilities.zip = function(blobs){};

