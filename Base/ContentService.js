/**********************************************
 * @namespace ContentService
 ***********************************************/

/**
 * @class ContentService
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType
 */
/**
 * Create a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/content/text-output.html'>TextOutput</a></code> object.
 * 
 * <pre class="prettyprint"><code>
 * function doGet() {
 *   var output = ContentService.createTextOutput();
 *   output.append(&quot;Hello world!&quot;);
 *   return output;
 * }
 * </code></pre>
 * 
 * @function ContentService.createTextOutput
 * 
 * @return {ContentService.TextOutput} the new TextOutput object.
 */


/**
 * Create a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/content/text-output.html'>TextOutput</a></code> object that can serve the given content.
 * 
 * <pre class="prettyprint"><code>
 * function doGet() {
 *   var output = ContentService.createTextOutput(&quot;Hello world!&quot;);
 *   return output;
 * }
 * </code></pre>
 * 
 * @function ContentService.createTextOutput
 * 
 * @param {String} content - the content to serve.
 * 
 * @return {ContentService.TextOutput} the new TextOutput object.
 */



/**
 * @class ContentService.MimeType
 */

/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.ATOM
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.CSV
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.ICAL
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.JAVASCRIPT
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.JSON
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.RSS
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.TEXT
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.VCARD
 */
/**
 * @typedef {ContentService.MimeType} ContentService.MimeType.XML
 */

/**
 * @class ContentService.TextOutput
 */

/**
 * Appends new content to the content that will be served.
 * 
 * @function ContentService.TextOutput#append
 * 
 * @param {String} addedContent - the content to append
 * 
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */


/**
 * Clears the current content.
 * 
 * @function ContentService.TextOutput#clear
 * 
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */


/**
 * Tells browsers to download rather than display this content.
 * 
 * <p>Some browsers will ignore this setting. Setting this to null will clear it back to the
 * default behavior of displaying rather than downloading.
 * 
 * @function ContentService.TextOutput#downloadAsFile
 * 
 * @param {String} filename - the filename to tell the browser to use
 * 
 * @return {ContentService.TextOutput} the TextOutput object, useful for chaining
 */


/**
 * Gets the content that will be served.
 * 
 * @function ContentService.TextOutput#getContent
 * 
 * @return {String} the content that will be served
 */


/**
 * Returns the file name to download this file as, or null if it should be displayed rather than
 * downloaded.
 * 
 * @function ContentService.TextOutput#getFileName
 * 
 * @return {String} the file name
 */


/**
 * Get the mime type this content will be served with.
 * 
 * @function ContentService.TextOutput#getMimeType
 * 
 * @return {ContentService.MimeType} the mime type this will be served with
 */


/**
 * Sets the content that will be served.
 * 
 * @function ContentService.TextOutput#setContent
 * 
 * @param {String} content - the content to serve
 * 
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */


/**
 * Sets the mime type for content that will be served. The default is plain text.
 * 
 * @function ContentService.TextOutput#setMimeType
 * 
 * @param {ContentService.MimeType} mimeType - the mime type
 * 
 * @return {ContentService.TextOutput} this TextOutput itself, useful for chaining
 */



