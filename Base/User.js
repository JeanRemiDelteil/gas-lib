/**
 * @class User
 */

/**
 * Gets the user's email address, if available. If security policies do not allow access to the
 * user's email address, this method returns a blank string. The circumstances in which the email
 * address is available vary: for example, the user's email address is not available in any
 * context that allows a script to run without that user's authorization, like a simple <code>onOpen(e)</code> or <code>onEdit(e)</code> trigger, a custom function in Google Sheets, or a web app
 * deployed to "execute as me" (that is, authorized by the developer instead of the user).
 * However, these restrictions generally do not apply if the developer runs the script themselves
 * or belongs to the same G Suite domain as the user.
 * 
 * <pre class="prettyprint"><code>
 * // Log the email address of the person running the script.
 * Logger.log(Session.getActiveUser().getEmail());
 * </code></pre>
 * 
 * @function User#getEmail
 * 
 * @return {String} The user's email's address, or a blank string if security policies do not allow access
 *     to the user's email address.
 */


/**
 * Gets the user's email address.
 * 
 * <pre class="prettyprint"><code>
 * // Log the email address of the person running the script.
 * Logger.log(Session.getActiveUser().getUserLoginId());
 * </code></pre>
 * 
 * @function User#getUserLoginId
 * @deprecated
 * 
 * @return {String} The user's email's address.
 */



