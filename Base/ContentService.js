var ContentService = {};


/**
 * 
 * 
 * @class ContentService.MimeType
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.ATOM
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.CSV
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.ICAL
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.JAVASCRIPT
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.JSON
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.RSS
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.TEXT
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.VCARD
 * 
 * 
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.XML
 * 
 * 
 */

/**
 * Create a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/content/text-output.html'>TextOutput</a></code> object.

 <pre class="prettyprint"><code>
 function doGet() {
   var output = ContentService.createTextOutput();
   output.append(&quot;Hello world!&quot;);
   return output;
 }
 </code></pre>
 *
 * @return {ContentService.TextOutput} the new TextOutput object.
 */
ContentService.createTextOutput = function(){};

/**
 * Create a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/content/text-output.html'>TextOutput</a></code> object that can serve the given content.

 <pre class="prettyprint"><code>
 function doGet() {
   var output = ContentService.createTextOutput(&quot;Hello world!&quot;);
   return output;
 }
 </code></pre>
 *
 * @param {String} content - the content to serve.
 *
 * @return {ContentService.TextOutput} the new TextOutput object.
 */
ContentService.createTextOutput = function(content){};

/** @constructor */
ContentService.TextOutput = function(){};

/**
 * Appends new content to the content that will be served.
 *
 * @param {String} addedContent - the content to append
 *
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */
ContentService.TextOutput.prototype.append = function(addedContent){};

/**
 * Clears the current content.
 *
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */
ContentService.TextOutput.prototype.clear = function(){};

/**
 * Tells browsers to download rather than display this content.

 <p>Some browsers will ignore this setting. Setting this to null will clear it back to the
 default behavior of displaying rather than downloading.
 *
 * @param {String} filename - the filename to tell the browser to use
 *
 * @return {ContentService.TextOutput} the TextOutput object, useful for chaining
 */
ContentService.TextOutput.prototype.downloadAsFile = function(filename){};

/**
 * Gets the content that will be served.
 *
 * @return {String} the content that will be served
 */
ContentService.TextOutput.prototype.getContent = function(){};

/**
 * Returns the file name to download this file as, or null if it should be displayed rather than
 downloaded.
 *
 * @return {String} the file name
 */
ContentService.TextOutput.prototype.getFileName = function(){};

/**
 * Get the mime type this content will be served with.
 *
 * @return {ContentService.MimeType} the mime type this will be served with
 */
ContentService.TextOutput.prototype.getMimeType = function(){};

/**
 * Sets the content that will be served.
 *
 * @param {String} content - the content to serve
 *
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */
ContentService.TextOutput.prototype.setContent = function(content){};

/**
 * Sets the mime type for content that will be served. The default is plain text.
 *
 * @param {ContentService.MimeType} mimeType - the mime type
 *
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */
ContentService.TextOutput.prototype.setMimeType = function(mimeType){};

