var Session = {};


/**
 * Gets information about the current user. If security policies do not allow access to the user's
 identity, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/user.html#getEmail()'>User.getEmail()</a></code> returns a blank string. The circumstances in which the
 email address is available vary: for example, the user's email address is not available in any
 context that allows a script to run without that user's authorization, like a simple
 <code>onOpen(e)</code> or <code>onEdit(e)</code> trigger, a custom function in Google Sheets, or a web
 app deployed to "execute as me" (that is, authorized by the developer instead of the user).
 However, these restrictions generally do not apply if the developer and the user belong to the
 same Google Apps for Business domain.

 <pre class="prettyprint">
 <code>
 // Log the email address of the person running the script.
 var email = Session.getActiveUser().getEmail();
 Logger.log(email);
 </code></pre>
 *
 * @return {User} the current user
 */
Session.getActiveUser = function(){};

/**
 * Gets the language setting of the current user as a two-letter string ? for example, <code>en</code>
 for English.

 <pre class="prettyprint">
 <code>
 // Log the language setting of the person running the script.
 Logger.log(Session.getActiveUserLocale());
 </code>
 </pre>
 *
 * @return {String} a two-letter string that represents the user's language setting
 */
Session.getActiveUserLocale = function(){};

/**
 * Gets information about the user under whose authority the script is running. If the script is a
 web app set to "execute as me" (the developer), this returns the developer's user account. If
 the script is running under an
 <a href="/apps-script/understanding_triggers">installable trigger</a>, this returns the account
 of the user who created the trigger. In most other scenarios, this returns the same account as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/session.html#getActiveUser()'>getActiveUser()</a></code>.

 <pre class="prettyprint">
 <code>
 // Log the email address of the user under whose authority the script is running.
 var email = Session.getEffectiveUser().getEmail();
 Logger.log(email);
 </code></pre>
 *
 * @return {User} the user under whose authority the script is running
 */
Session.getEffectiveUser = function(){};

/**
 * Gets the time zone of the script. New scripts default to the owner's time zone, but the
 script's time zone can be changed by clicking <b>File > Project properties</b> in the script
 editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
 <b>File > Spreadsheet settings</b> in Google Sheets. Spreadsheet time zones that differ from
 the script time zone are a frequent source of scripting bugs.

 <pre class="prettyprint">
 <code>
 // Log the time zone of the script.
 var timeZone = Session.getScriptTimeZone();
 Logger.log(timeZone);
 </code></pre>
 *
 * @return {String} the time zone of the script
 */
Session.getScriptTimeZone = function(){};

/**
 * Gets the time zone of the script. New scripts default to the owner's time zone, but the
 script's time zone can be changed by clicking <b>File > Project properties</b> in the script
 editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
 <b>File > Spreadsheet settings</b> in Google Sheets. Spreadsheet time zones that differ from
 the script time zone are a frequent source of scripting bugs.

 <pre class="prettyprint">
 <code>
 // Log the time zone of the script.
 var timeZone = Session.getTimeZone();
 Logger.log(timeZone);
 </code></pre>
 *
 * @return {String} the time zone of the script
 */
Session.getTimeZone = function(){};

/**
 * Gets information about the current user.
 *
 * @return {User} the currently signed in user
 */
Session.getUser = function(){};

