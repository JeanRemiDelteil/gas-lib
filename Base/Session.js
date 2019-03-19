/**********************************************
 * @namespace Session
 ***********************************************/

/**
 * @class Session
 */

/**
 * Gets information about the current user. If security policies do not allow access to the user's
 * identity, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/user.html#getEmail()'>User.getEmail()</a></code> returns a blank string. The circumstances in which the
 * email address is available vary: for example, the user's email address is not available in any
 * context that allows a script to run without that user's authorization, like a simple <code>onOpen(e)</code> or <code>onEdit(e)</code> trigger, a custom function in Google Sheets, or a web app
 * deployed to "execute as me" (that is, authorized by the developer instead of the user).
 * However, these restrictions generally do not apply if the developer runs the script themselves
 * or belongs to the same G Suite domain as the user.
 * 
 * <pre class="prettyprint"><code>
 * // Log the email address of the person running the script.
 * var email = Session.getActiveUser().getEmail();
 * Logger.log(email);
 * </code></pre>
 * 
 * @function Session.getActiveUser
 * 
 * @return {User} the current user
 */


/**
 * Gets the language setting of the current user as a string—for example, <code>en</code> for English.
 * 
 * <pre class="prettyprint"><code>
 * // Log the language setting of the person running the script.
 * Logger.log(Session.getActiveUserLocale());
 * </code></pre>
 * 
 * @function Session.getActiveUserLocale
 * 
 * @return {String} a string that represents the user's language setting
 */


/**
 * Gets information about the user under whose authority the script is running. If the script is a
 * web app set to "execute as me" (the developer), this returns the developer's user account. If
 * the script is running under an <a href="/apps-script/understanding_triggers">installable
 * trigger</a>, this returns the account of the user who created the trigger. In most other
 * scenarios, this returns the same account as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/session.html#getActiveUser()'>getActiveUser()</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log the email address of the user under whose authority the script is running.
 * var email = Session.getEffectiveUser().getEmail();
 * Logger.log(email);
 * </code></pre>
 * 
 * @function Session.getEffectiveUser
 * 
 * @return {User} the user under whose authority the script is running
 */


/**
 * Gets the time zone of the script. New scripts default to the owner's time zone, but the
 * script's time zone can be changed by clicking <b>File > Project properties</b> in the script
 * editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
 * <b>File > Spreadsheet settings</b> in Google Sheets. Spreadsheet time zones that differ from
 * the script time zone are a frequent source of scripting bugs.
 * 
 * <pre class="prettyprint"><code>
 * // Log the time zone of the script.
 * var timeZone = Session.getScriptTimeZone();
 * Logger.log(timeZone);
 * </code></pre>
 * 
 * @function Session.getScriptTimeZone
 * 
 * @return {String} the time zone of the script
 */


/**
 * Gets a temporary key that is unique to the active user but does not reveal the user identity.
 * The temporary key rotates every 30 days and is unique to the script.
 * 
 * <pre class="prettyprint"><code>
 * // Log the temporary key of the person running the script.
 * Logger.log(Session.getTemporaryActiveUserKey());
 * </code></pre>
 * 
 * @function Session.getTemporaryActiveUserKey
 * 
 * @return {String} the temporary active user key
 */


/**
 * Gets the time zone of the script. New scripts default to the owner's time zone, but the
 * script's time zone can be changed by clicking <b>File > Project properties</b> in the script
 * editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
 * <b>File > Spreadsheet settings</b> in Google Sheets. Spreadsheet time zones that differ from
 * the script time zone are a frequent source of scripting bugs.
 * 
 * <pre class="prettyprint"><code>
 * // Log the time zone of the script.
 * var timeZone = Session.getTimeZone();
 * Logger.log(timeZone);
 * </code></pre>
 * 
 * @function Session.getTimeZone
 * @deprecated
 * 
 * @return {String} the time zone of the script
 */


/**
 * Gets information about the current user.
 * 
 * @function Session.getUser
 * @deprecated
 * 
 * @return {User} the currently signed in user
 */



