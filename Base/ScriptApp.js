/**********************************************
 * @namespace ScriptApp
 ***********************************************/

/**
 * @class ScriptApp
 */

/**
 * An enumeration that identifies which categories of authorized services Apps Script is able to
 * execute through a triggered function.
 * 
 * @typedef {ScriptApp.AuthMode} ScriptApp.AuthMode
 */
/**
 * An enumeration denoting the authorization status of a script.
 * 
 * @typedef {ScriptApp.AuthorizationStatus} ScriptApp.AuthorizationStatus
 */
/**
 * An enumeration denoting the type of triggered event.
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType
 */
/**
 * An enumeration denoting how the script was installed to the user as an add-on.
 * 
 * @typedef {ScriptApp.InstallationSource} ScriptApp.InstallationSource
 */
/**
 * An enumeration denoting the source of the event that causes the trigger to fire.
 * 
 * @typedef {ScriptApp.TriggerSource} ScriptApp.TriggerSource
 */
/**
 * An enumeration representing the days of the week.
 * 
 * @typedef {Weekday} ScriptApp.WeekDay
 */
/**
 * Removes the given trigger so it no longer runs.
 * 
 * <pre class="prettyprint"><code>
 * // Deletes all triggers in the current project.
 * var triggers = ScriptApp.getProjectTriggers();
 * for (var i = 0; i &lt; triggers.length; i++) {
 *   ScriptApp.deleteTrigger(triggers[i]);
 * }
 * </code></pre>
 * 
 * @function ScriptApp.deleteTrigger
 * 
 * @param {ScriptApp.Trigger} trigger - The trigger to delete.
 * 
 * @return void
 */


/**
 * Gets an object used to determine whether the user needs to authorize this script to use one or
 * more services, and to provide the URL for an authorization dialog. If the script is published
 * as an <a href="/gsuite/add-ons/overview">add-on</a> that uses <a
 * href="/apps-script/understanding_triggers">installable triggers</a>, this information can be
 * used to control access to sections of code for which the user lacks the necessary
 * authorization. Alternately, the add-on can ask the user to open the URL for the authorization
 * dialog to resolve the problem.
 * 
 * <pre class="prettyprint"><code>
 * var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
 * status = authInfo.getAuthorizationStatus();
 * url = authInfo.getAuthorizationUrl();
 * </code></pre>
 * 
 * @function ScriptApp.getAuthorizationInfo
 * 
 * @param {ScriptApp.AuthMode} authMode - the authorization mode for which authorization information is requested; in
 *     almost all cases, the value for <code>authMode</code> should be <code>ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)</code>, since no other authorization mode
 *     requires that users grant authorization
 * 
 * @return {ScriptApp.AuthorizationInfo} an object that can provide information about the user's authorization status
 */


/**
 * Returns an enum value that indicates how the script came to be installed as an add-on for the
 * current user (for example, whether the user installed it personally through the Chrome Web
 * Store, or whether a domain administrator installed it for all users).
 * 
 * @function ScriptApp.getInstallationSource
 * 
 * @return {ScriptApp.InstallationSource} The source of installation.
 */


/**
 * Gets the OAuth 2.0 <a href="http://tools.ietf.org/html/rfc6749#section-1.4">access token</a>
 * for the effective user. If the script's OAuth scopes are sufficient to authorize another Google
 * API that normally requires its own OAuth flow (like <a
 * href="/apps-script/guides/dialogs#file-open_dialogs">Google Picker</a>), scripts can bypass the
 * second authorization prompt by passing this token instead. The token expires after a time (a
 * few minutes at minimum); scripts should handle authorization failures and call this method to
 * obtain a fresh token when needed.
 * 
 * <p>The token returned by this method only includes scopes that the script currently needs.
 * Scopes that were previously authorized but are no longer used by the script are not included in
 * the returned token. If additional OAuth scopes are needed beyond what the script itself
 * requires, they can be <a
 * href="/apps-script/concepts/scopes#setting_explicit_scopes">specified</a> in the script's
 * manifest file.
 * 
 * @function ScriptApp.getOAuthToken
 * 
 * @return {String} A string representation of the OAuth 2.0 token.
 */


/**
 * Gets the project key of the current script. The project key is a unique identifier for scripts
 * and used to compose the callback URL used in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/script-app.html#newStateToken()'>newStateToken()</a></code>.
 * 
 * <p>When called in a <a href="/apps-script/guides/libraries">library</a>, this returns the
 * project key of the outer-most script being executed.
 * 
 * @function ScriptApp.getProjectKey
 * @deprecated
 * 
 * @return {String} The project key of the current script.
 */


/**
 * Gets all installable triggers associated with the current project.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&#39;Current project has &#39; + ScriptApp.getProjectTriggers().length + &#39; triggers.&#39;);
 * </code></pre>
 * 
 * @function ScriptApp.getProjectTriggers
 * 
 * @return {ScriptApp.Trigger[]} An array of triggers associated with this project.
 */


/**
 * Gets the script project's unique ID. This is the preferred method to get the unique identifier
 * for the script project as opposed to <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/script/script-app.html#getProjectKey()'>getProjectKey()</a></s></code>. This ID can be used in all places
 * where project key was previously provided.
 * 
 * @function ScriptApp.getScriptId
 * 
 * @return {String} The script project's ID.
 */


/**
 * Gets all installable triggers associated with the current script.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&#39;Current script has &#39; + ScriptApp.getScriptTriggers().length + &#39; triggers.&#39;);
 * </code></pre>
 * 
 * @function ScriptApp.getScriptTriggers
 * @deprecated
 * 
 * @return {ScriptApp.Trigger[]} An array of triggers associated with this script.
 */


/**
 * Gets an object used to control publishing the script as a web app.
 * 
 * <pre class="prettyprint"><code>
 * // Get the URL of the published web app.
 * var url = ScriptApp.getService().getUrl();
 * </code></pre>
 * 
 * @function ScriptApp.getService
 * 
 * @return {ScriptApp.Service} An object used to observe and control publishing the script as a web app.
 */


/**
 * Gets all installable triggers owned by this user in the given document, for this script or
 * add-on only. This method cannot be used to see the triggers attached to other scripts.
 * 
 * <pre class="prettyprint"><code>
 * var doc = DocumentApp.getActiveDocument();
 * var triggers = ScriptApp.getUserTriggers(doc);
 * // Log the handler function for the first trigger in the array.
 * Logger.log(triggers[0].getHandlerFunction());
 * </code></pre>
 * 
 * @function ScriptApp.getUserTriggers
 * 
 * @param {DocumentApp.Document} document - A Google Docs file that may contain installable triggers.
 * 
 * @return {ScriptApp.Trigger[]} An array of triggers owned by this user in the given document.
 */


/**
 * Gets all installable triggers owned by this user in the given form, for this script or add-on
 * only. This method cannot be used to see the triggers attached to other scripts.
 * 
 * <pre class="prettyprint"><code>
 * var form = FormApp.getActiveForm();
 * var triggers = ScriptApp.getUserTriggers(form);
 * // Log the trigger source for the first trigger in the array.
 * Logger.log(triggers[0].getTriggerSource());
 * </code></pre>
 * 
 * @function ScriptApp.getUserTriggers
 * 
 * @param {FormApp.Form} form - A Google Forms file that may contain installable triggers.
 * 
 * @return {ScriptApp.Trigger[]} An array of triggers owned by this user in the given form.
 */


/**
 * Gets all installable triggers owned by this user in the given spreadsheet, for this script or
 * add-on only. This method cannot be used to see the triggers attached to other scripts.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var triggers = ScriptApp.getUserTriggers(ss);
 * // Log the event type for the first trigger in the array.
 * Logger.log(triggers[0].getEventType());
 * </code></pre>
 * 
 * @function ScriptApp.getUserTriggers
 * 
 * @param {SpreadsheetApp.Spreadsheet} spreadsheet - A Google Sheets file that may contain installable triggers.
 * 
 * @return {ScriptApp.Trigger[]} An array of triggers owned by this user in the given spreadsheet.
 */


/**
 * Invalidates the authorization the effective user has to execute the current script. Used to
 * invalidate any permissions for the current script. This is especially useful for functions
 * tagged as one-shot authorization. Since one-shot authorization functions can only be called the
 * first run after the script has acquired authorization, if you wish to perform an action
 * afterwards, you must revoke any authorization the script had, so the user can see the
 * authorization dialog again.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.invalidateAuth();
 * </code></pre>
 * 
 * @function ScriptApp.invalidateAuth
 * 
 * @return void
 */


/**
 * Creates a builder for a state token that can be used in a callback API (like an OAuth flow).
 * 
 * <pre class="prettyprint"><code>
 * // Generate a callback URL, given the name of a callback function. The script does not need to
 * // be published as a web app; the /usercallback URL suffix replaces /edit in any script&#39;s URL.
 * function getCallbackURL(callbackFunction) {
 *   // IMPORTANT: Replace string below with the URL from your script, minus the /edit at the end.
 *   var scriptUrl = &#39;https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz&#39;;
 *   var urlSuffix = &#39;/usercallback?state=&#39;;
 *   var stateToken = ScriptApp.newStateToken()
 *       .withMethod(callbackFunction)
 *       .withTimeout(120)
 *       .createToken();
 *   return scriptUrl + urlSuffix + stateToken;
 * }
 * </code></pre>
 * 
 * <p>In most OAuth2 flows, the <code>state</code> token is passed to the authorization endpoint
 * directly (not as part of the callback URL), and the authorization endpoint then passes it as
 * part of the callback URL.
 * 
 * <p>For example:
 * 
 * <ul>
 *   <li>The script redirects the user to OAuth2 authorize URL: <code>https://accounts.google.com/o/oauth2/auth?state=token_generated_with_this_method&amp;callback_uri=https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback&amp;other_oauth2_parameters
 *       </code>
 *   <li>The user clicks authorize, and the OAuth2 authorization page redirects the user back to
 *       <code>https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback?state=token_generated_with_this_method&amp;other_params_that_include_tokens_or_grants
 *       </code>
 *   <li>The above redirect (back to <code>http://script.google.com/...</code>), causes the browser
 *       request to <code>/usercallback</code>, which invokes the method specified by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/state-token-builder.html#withMethod(String)'>StateTokenBuilder.withMethod(method)</a></code>.
 * </ul>
 * 
 * @function ScriptApp.newStateToken
 * 
 * @return {ScriptApp.StateTokenBuilder} An object used to continue the state-token-building process.
 */


/**
 * Begins the process of creating an installable trigger that, when fired, calls a given function.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an edit trigger for a spreadsheet identified by ID.
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *     .forSpreadsheet(&#39;1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3&#39;)
 *     .onEdit()
 *     .create();
 * </code></pre>
 * 
 * @function ScriptApp.newTrigger
 * 
 * @param {String} functionName - The function to call when the trigger fires. You can use functions from
 *     included libraries, such as <code>Library.libFunction1</code>.
 * 
 * @return {ScriptApp.TriggerBuilder} An object used to continue the trigger-building process.
 */



/**
 * @class ScriptApp.AuthMode
 */

/**
 * A mode that allows access to a limited subset of services for use in custom spreadsheet
 * functions. Some of these services — including read-only access to Spreadsheet service —
 * normally require authorization, but are permitted without authorization when used in a custom
 * function. Because custom functions do not include an event parameter, this value is never
 * returned; it is documented only to demonstrate that custom functions run in their own
 * authorization mode.
 * 
 * @typedef {ScriptApp.AuthMode} ScriptApp.AuthMode.CUSTOM_FUNCTION
 */
/**
 * A mode that allows access to all services that require authorization. This mode occurs when an
 * add-on or a script executes as the result of any trigger other than the cases described for
 * <code>LIMITED</code> or <code>NONE</code>.
 * 
 * @typedef {ScriptApp.AuthMode} ScriptApp.AuthMode.FULL
 */
/**
 * A mode that allows access to a limited subset of services. This mode occurs when an add-on or a
 * script <a href="/apps-script/scripts_containers">bound</a> to a document executes an <code>onOpen(e)</code> or <code>onEdit(e)</code> simple trigger, except in the case described for <code>NONE</code>.
 * 
 * @typedef {ScriptApp.AuthMode} ScriptApp.AuthMode.LIMITED
 */
/**
 * A mode that does not allow access to any services that require authorization. This mode occurs
 * when an add-on executes an <code>onOpen(e)</code> simple trigger, and the user has installed an
 * add-on in a different document but the add-on has not been used in the current document.
 * 
 * @typedef {ScriptApp.AuthMode} ScriptApp.AuthMode.NONE
 */

/**
 * @class ScriptApp.AuthorizationInfo
 */

/**
 * Gets a value that indicates whether the user needs to authorize this script to use one or more
 * services (for example, <code>ScriptApp.AuthorizationStatus.REQUIRED</code>).
 * 
 * <pre class="prettyprint"><code>
 * // Log the authorization status (REQUIRED or NOT_REQUIRED).
 * var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
 * Logger.log(authInfo.getAuthorizationStatus());
 * </code></pre>
 * 
 * @function ScriptApp.AuthorizationInfo#getAuthorizationStatus
 * 
 * @return {ScriptApp.AuthorizationStatus} the authorization status
 */


/**
 * Gets the authorization URL that can be used to grant access to the script. This method returns
 * <code>null</code> if no authorization is required. The page at the URL will close automatically if
 * it is accessed and the script does not require any authorization.
 * 
 * <pre class="prettyprint"><code>
 * // Log the URL used to grant access to the script.
 * var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
 * Logger.log(authInfo.getAuthorizationUrl());
 * </code></pre>
 * 
 * @function ScriptApp.AuthorizationInfo#getAuthorizationUrl
 * 
 * @return {String} a URL that can be used to authorize the script
 */



/**
 * @class ScriptApp.AuthorizationStatus
 */

/**
 * The user has granted this script all the authorization it currently requires.
 * 
 * @typedef {ScriptApp.AuthorizationStatus} ScriptApp.AuthorizationStatus.NOT_REQUIRED
 */
/**
 * The user needs to authorize this script to use one or more services. In most cases, the script
 * prompts the user for authorization the next time it runs; however, if the script is published
 * as an <a href="/gsuite/add-ons/overview">add-on</a> that uses <a
 * href="/apps-script/understanding_triggers">installable triggers</a>, the trigger runs the
 * script without prompting for authorization but throws an exception if the script attempts to
 * call the unauthorized service.
 * 
 * @typedef {ScriptApp.AuthorizationStatus} ScriptApp.AuthorizationStatus.REQUIRED
 */

/**
 * @class ScriptApp.CalendarTriggerBuilder
 */

/**
 * Creates the trigger and returns it.
 * 
 * @function ScriptApp.CalendarTriggerBuilder#create
 * 
 * @return {ScriptApp.Trigger} The new trigger.
 */


/**
 * Specifies a trigger that fires when a calendar entry is created, updated, or deleted.
 * 
 * @function ScriptApp.CalendarTriggerBuilder#onEventUpdated
 * 
 * @return {ScriptApp.CalendarTriggerBuilder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/calendar-trigger-builder.html'>CalendarTriggerBuilder</a></code>, for chaining.
 */



/**
 * @class ScriptApp.ClockTriggerBuilder
 */

/**
 * Specifies the duration (in milliseconds) after the current time that the trigger will run.
 * (plus or minus 15 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a trigger that will run 10 minutes later
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .after(10 * 60 * 1000)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#after
 * 
 * @param {IntegerNum} durationMilliseconds - the duration (in milliseconds) after the current time when the
 *     trigger should run
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies when the trigger will run (plus or minus 15 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a trigger for December 1, 2012
 * var triggerDay = new Date(2012, 11, 1);
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .at(triggerDay)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#at
 * 
 * @param {Date} date - a Date object representing when the trigger should run
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies trigger will fire on the given date, by default near midnight (+/- 15 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Schedules for January 1st, 2013
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .atDate(2013, 1, 1)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#atDate
 * 
 * @param {IntegerNum} year - the calendar year to schedule the trigger
 * @param {IntegerNum} month - the calendar month to schedule the trigger (should be a number between 1 and 12,
 *     inclusive)
 * @param {IntegerNum} day - the calendar day to schedule the trigger (should be a number between 1 and 31,
 *     inclusive)
 * 
 * @return {ScriptApp.ClockTriggerBuilder} The builder for chaining.
 */


/**
 * Specifies the hour the trigger will run (plus or minus 15 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Runs at 5am in the timezone of the script
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .atHour(5)
 *   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#atHour
 * 
 * @param {IntegerNum} hour - the hour at which to fire
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Creates the trigger.
 * 
 * @function ScriptApp.ClockTriggerBuilder#create
 * 
 * @return {ScriptApp.Trigger} The newly created, scheduled trigger.
 */


/**
 * Specifies to run the trigger every <code>n</code> days.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .everyDays(3)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#everyDays
 * 
 * @param {IntegerNum} n - the number of days between executions
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies to run the trigger every <code>n</code> hours.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .everyHours(12)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#everyHours
 * 
 * @param {IntegerNum} n - the number of hours between executions
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies to run the trigger every <code>n</code> minutes. <code>n</code> must be 1, 5, 10, 15 or 30.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .everyMinutes(10)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#everyMinutes
 * 
 * @param {IntegerNum} n - the number of minutes between executions
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies to run the trigger every <code>n</code> weeks.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .everyWeeks(2)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#everyWeeks
 * 
 * @param {IntegerNum} n - the number of weeks between executions
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies the timezone that the specified dates/time that the trigger will run in. By default,
 * the timezone will be that of the script.
 * 
 * <p>The list of valid timezone strings corresponds with the valid timezone strings listed by <a
 * href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>. An invalid timezone string
 * will cause the script to throw an error.
 * 
 * <pre class="prettyprint"><code>
 * // Schedule the trigger to execute at noon every day in the US/Pacific time zone
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .atHour(12)
 *   .everyDays(1)
 *   .inTimezone(&quot;America/Los_Angeles&quot;)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#inTimezone
 * 
 * @param {String} timezone - the timezone with which to treat time information in the event
 * 
 * @return {ScriptApp.ClockTriggerBuilder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html'>ClockTriggerBuilder</a></code>, for chaining.
 */


/**
 * Specifies the minute the trigger will run (plus or minus 15 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Runs at approximately 5:30am in the timezone of the script
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .atHour(5)
 *   .nearMinute(30)
 *   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#nearMinute
 * 
 * @param {IntegerNum} minute - the minute at which to fire
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies on what date in the month that the trigger will run.
 * 
 * <pre class="prettyprint"><code>
 * // Schedules for the first of every month
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .onMonthDay(1)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#onMonthDay
 * 
 * @param {IntegerNum} day - the day of the month the trigger should be scheduled for
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */


/**
 * Specifies on what day of the week that the trigger will run.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .timeBased()
 *   .onWeekDay(ScriptApp.WeekDay.FRIDAY)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.ClockTriggerBuilder#onWeekDay
 * 
 * @param {Weekday} day - the day of the week to fire
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */



/**
 * @class ScriptApp.DocumentTriggerBuilder
 */

/**
 * Creates and returns the new trigger.
 * 
 * @function ScriptApp.DocumentTriggerBuilder#create
 * 
 * @return {ScriptApp.Trigger} The new trigger.
 */


/**
 * Specifies a trigger that will fire when the document is opened.
 * 
 * <pre class="prettyprint"><code>
 * var document = DocumentApp.getActiveDocument();
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forDocument(document)
 *   .onOpen()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.DocumentTriggerBuilder#onOpen
 * 
 * @return {ScriptApp.DocumentTriggerBuilder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code>, for chaining.
 */



/**
 * @class ScriptApp.EventType
 */

/**
 * The trigger fires once the time-driven event reaches a specific time.
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType.CLOCK
 */
/**
 * The trigger fires once the user changes the Google Sheets file (for example, by adding a row,
 * which counts as a change instead of an edit).
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType.ON_CHANGE
 */
/**
 * The trigger fires once the user edits the Google Sheets file (for example, by entering a new
 * value into a cell, which counts as an edit instead of a change).
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType.ON_EDIT
 */
/**
 * The trigger fires once an event gets created, updated, or deleted on the specified Google
 * Calendar.
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType.ON_EVENT_UPDATED
 */
/**
 * The trigger fires once the user responds to a Google Form. This trigger is available either in
 * the Google Form itself or in the Google Sheets file that the form sends its responses to.
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType.ON_FORM_SUBMIT
 */
/**
 * The trigger fires once the user opens the Google Docs, Sheets, or Forms file.
 * 
 * @typedef {ScriptApp.EventType} ScriptApp.EventType.ON_OPEN
 */

/**
 * @class ScriptApp.FormTriggerBuilder
 */

/**
 * Creates and returns the new trigger.
 * 
 * @function ScriptApp.FormTriggerBuilder#create
 * 
 * @return {ScriptApp.Trigger} The new trigger.
 */


/**
 * Specifies a trigger that will fire when a response is submitted to the form.
 * 
 * <pre class="prettyprint"><code>
 * var form = FormApp.openById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *     .forForm(form)
 *     .onFormSubmit()
 *     .create();
 * </code></pre>
 * 
 * @function ScriptApp.FormTriggerBuilder#onFormSubmit
 * 
 * @return {ScriptApp.FormTriggerBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code>, for chaining
 */


/**
 * Specifies a trigger that will fire when the form's edit view is opened.
 * 
 * <pre class="prettyprint"><code>
 * var form = FormApp.getActiveForm();
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *     .forForm(form)
 *     .onOpen()
 *     .create();
 * </code></pre>
 * 
 * @function ScriptApp.FormTriggerBuilder#onOpen
 * 
 * @return {ScriptApp.FormTriggerBuilder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code>, for chaining.
 */



/**
 * @class ScriptApp.InstallationSource
 */

/**
 * Add-on was installed by the administrator for the user's domain.
 * 
 * @typedef {ScriptApp.InstallationSource} ScriptApp.InstallationSource.APPS_MARKETPLACE_DOMAIN_ADD_ON
 */
/**
 * Script is not running as an add-on.
 * 
 * @typedef {ScriptApp.InstallationSource} ScriptApp.InstallationSource.NONE
 */
/**
 * Add-on was installed by the user from the Chrome Web Store.
 * 
 * @typedef {ScriptApp.InstallationSource} ScriptApp.InstallationSource.WEB_STORE_ADD_ON
 */

/**
 * @class ScriptApp.Service
 */

/**
 * Disables the script from being accessed as a web app. This method is equivalent to opening the
 * "Publish > Deploy as web app" dialog and clicking "disable web app".
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.getService().disable();
 * </code></pre>
 * 
 * @function ScriptApp.Service#disable
 * 
 * @return void
 */


/**
 * Returns the URL of the web app, if it has been deployed; otherwise returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Mail the URL of the published web app.
 * MailApp.sendMail(&quot;myself@example.com&quot;, &quot;My Snazzy App&quot;,
 *   &quot;My new app is now available at &quot; + ScriptApp.getService().getUrl());
 * </code></pre>
 * 
 * @function ScriptApp.Service#getUrl
 * 
 * @return {String} the URL of the web app
 */


/**
 * Returns <code>true</code> if the script is accessible as a web app.
 * 
 * <pre class="prettyprint"><code>
 * var svc = ScriptApp.getService();
 * // Publish the script as a web app if it isn&#39;t currently.
 * if (!svc.isEnabled()) {
 *   svc.enable(svc.Restriction.MYSELF);
 * }
 * </code></pre>
 * 
 * @function ScriptApp.Service#isEnabled
 * 
 * @return {Boolean} <code>true</code> if the script is published as a web app; <code>false</code> if not
 */



/**
 * @class ScriptApp.SpreadsheetTriggerBuilder
 */

/**
 * Creates the trigger and returns it.
 * 
 * @function ScriptApp.SpreadsheetTriggerBuilder#create
 * 
 * @return {ScriptApp.Trigger} The created trigger.
 */


/**
 * Specifies a trigger that will fire when the spreadsheet's content or structure is changed.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActive();
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .forSpreadsheet(sheet)
 *   .onChange()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.SpreadsheetTriggerBuilder#onChange
 * 
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */


/**
 * Specifies a trigger that will fire when the spreadsheet is edited.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActive();
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .forSpreadsheet(sheet)
 *   .onEdit()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.SpreadsheetTriggerBuilder#onEdit
 * 
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */


/**
 * Specifies a trigger that will fire when the spreadsheet has a form submitted to it.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActive();
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .forSpreadsheet(sheet)
 *   .onFormSubmit()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.SpreadsheetTriggerBuilder#onFormSubmit
 * 
 * @return {ScriptApp.SpreadsheetTriggerBuilder} A builder for chaining.
 */


/**
 * Specifies a trigger that will fire when the spreadsheet is opened.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActive();
 * ScriptApp.newTrigger(&quot;myFunction&quot;)
 *   .forSpreadsheet(sheet)
 *   .onOpen()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.SpreadsheetTriggerBuilder#onOpen
 * 
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */



/**
 * @class ScriptApp.StateTokenBuilder
 */

/**
 * Constructs an encrypted string representation of the state token.
 * 
 * <pre class="prettyprint"><code>
 * var stateToken = ScriptApp.newStateToken().createToken();
 * </code></pre>
 * 
 * @function ScriptApp.StateTokenBuilder#createToken
 * 
 * @return {String} an encrypted string representing the token
 */


/**
 * Adds an argument to the token. This method can be called multiple times.
 * 
 * <pre class="prettyprint"><code>
 * var stateToken = ScriptApp.newStateToken().withArgument(&#39;myField&#39;, &#39;myValue&#39;).createToken();
 * </code></pre>
 * 
 * @function ScriptApp.StateTokenBuilder#withArgument
 * 
 * @param {String} name - the name of the argument
 * @param {String} value - the value of the argument
 * 
 * @return {ScriptApp.StateTokenBuilder} the state token builder, for chaining
 */


/**
 * Sets a callback function. The default is a function named <code>callback()</code>.
 * 
 * <pre class="prettyprint"><code>
 * var stateToken = ScriptApp.newStateToken().withMethod(&#39;myCallback&#39;).createToken();
 * </code></pre>
 * 
 * @function ScriptApp.StateTokenBuilder#withMethod
 * 
 * @param {String} method - The name of the callback function, represented as a string without parentheses or
 *     arguments. You can use functions from included libraries, such as <code>
 *     Library.libFunction1</code>.
 * 
 * @return {ScriptApp.StateTokenBuilder} the state token builder, for chaining
 */


/**
 * Sets the duration (in seconds) for which the token is valid. The defaults is 60 seconds; the
 * maximum duration is 3600 seconds (1 hour).
 * 
 * <pre class="prettyprint"><code>
 * var stateToken = ScriptApp.newStateToken().withTimeout(60).createToken();
 * </code></pre>
 * 
 * @function ScriptApp.StateTokenBuilder#withTimeout
 * 
 * @param {IntegerNum} seconds - the duration for which the token is valid; the maximum value is <code>3600</code>
 * 
 * @return {ScriptApp.StateTokenBuilder} the state token builder, for chaining
 */



/**
 * @class ScriptApp.Trigger
 */

/**
 * Returns the event type that the trigger fires on.
 * 
 * <pre class="prettyprint"><code>
 * var triggers = ScriptApp.getProjectTriggers();
 * for (var i = 0; i &lt; triggers.length; i++) {
 *   if (triggers[i].getEventType() == ScriptApp.EventType.CLOCK) {
 *     // Some code here - other options are:
 *     // ScriptApp.EventType.ON_EDIT
 *     // ScriptApp.EventType.ON_FORM_SUBMIT
 *     // ScriptApp.EventType.ON_OPEN
 *   }
 * }
 * </code></pre>
 * 
 * @function ScriptApp.Trigger#getEventType
 * 
 * @return {ScriptApp.EventType} the event type that this is a trigger for
 */


/**
 * Returns the function that will be called when the trigger fires.
 * 
 * <pre class="prettyprint"><code>
 * // Create a trigger for the script.
 * ScriptApp.newTrigger(&#39;myFunction&#39;).forSpreadsheet(&#39;id of my spreadsheet&#39;).onEdit().create();
 * Logger.log(ScriptApp.getProjectTriggers()[0].getHandlerFunction()); // logs &quot;myFunction&quot;
 * </code></pre>
 * 
 * @function ScriptApp.Trigger#getHandlerFunction
 * 
 * @return {String} the method name
 */


/**
 * Returns the source of events that will cause the trigger to fire.
 * 
 * <p>For example, a spreadsheet onEdit trigger would return SPREADSHEETS, or a time based trigger
 * would return CLOCK.
 * 
 * <pre class="prettyprint"><code>
 * var triggers = ScriptApp.getProjectTriggers();
 * for (var i = 0; i &lt; triggers.length; i++) {
 *   if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.CLOCK) {
 *     Logger.log(triggers[i].getUniqueId() + &quot; source is clock&quot;);
 *   } else if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.SPREADSHEETS) {
 *     Logger.log(triggers[i].getUniqueId() + &quot; source is spreadsheets&quot;);
 *   }
 * }
 * </code></pre>
 * 
 * @function ScriptApp.Trigger#getTriggerSource
 * 
 * @return {ScriptApp.TriggerSource} the publisher this is a trigger for
 */


/**
 * Returns the id specific to the source.
 * 
 * <p>For example, if the trigger source is a spreadsheet, this would be the id of the
 * spreadsheet. For clock events this returns null.
 * 
 * @function ScriptApp.Trigger#getTriggerSourceId
 * 
 * @return {String} the id of the entity in the publisher that this is a trigger for
 */


/**
 * Returns a unique identifier that can be used to distinguish triggers from each other.
 * 
 * @function ScriptApp.Trigger#getUniqueId
 * 
 * @return {String} the unique identifier of the trigger
 */



/**
 * @class ScriptApp.TriggerBuilder
 */

/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code> tied to the given document.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forDocument(DocumentApp.getActiveDocument())
 *   .onOpen()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#forDocument
 * 
 * @param {DocumentApp.Document} document - the document
 * 
 * @return {ScriptApp.DocumentTriggerBuilder} the new DocumentTriggerBuilder
 */


/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code> tied to the document with the given ID.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forDocument(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
 *   .onOpen()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#forDocument
 * 
 * @param {String} key - the ID for the document
 * 
 * @return {ScriptApp.DocumentTriggerBuilder} the new DocumentTriggerBuilder
 */


/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code> tied to the given form.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forForm(FormApp.getActiveForm())
 *   .onFormSubmit()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#forForm
 * 
 * @param {FormApp.Form} form - the form
 * 
 * @return {ScriptApp.FormTriggerBuilder} the new FormTriggerBuilder
 */


/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code> tied to the form with the given ID.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forForm(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
 *   .onFormSubmit()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#forForm
 * 
 * @param {String} key - the ID for the form
 * 
 * @return {ScriptApp.FormTriggerBuilder} the new FormTriggerBuilder
 */


/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html'>SpreadsheetTriggerBuilder</a></code> tied to the given spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forSpreadsheet(SpreadsheetApp.getActive())
 *   .onEdit()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#forSpreadsheet
 * 
 * @param {SpreadsheetApp.Spreadsheet} sheet - the spreadsheet
 * 
 * @return {ScriptApp.SpreadsheetTriggerBuilder} the new SpreadsheetTriggerBuilder
 */


/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html'>SpreadsheetTriggerBuilder</a></code> tied to the spreadsheet with the given
 * ID.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .forSpreadsheet(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
 *   .onEdit()
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#forSpreadsheet
 * 
 * @param {String} key - the ID for the spreadsheet
 * 
 * @return {ScriptApp.SpreadsheetTriggerBuilder} the new SpreadsheetTriggerBuilder
 */


/**
 * Returns a builder for building calendar triggers.
 * 
 * @function ScriptApp.TriggerBuilder#forUserCalendar
 * 
 * @param {String} emailId - email ID of the user calendar the trigger monitors.
 * 
 * @return {ScriptApp.CalendarTriggerBuilder}
 */


/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html'>ClockTriggerBuilder</a></code> for building time-based triggers.
 * 
 * <pre class="prettyprint"><code>
 * ScriptApp.newTrigger(&#39;myFunction&#39;)
 *   .timeBased()
 *   .atDate(2013, 10, 31)
 *   .create();
 * </code></pre>
 * 
 * @function ScriptApp.TriggerBuilder#timeBased
 * 
 * @return {ScriptApp.ClockTriggerBuilder} the new ClockTriggerBuilder
 */



/**
 * @class ScriptApp.TriggerSource
 */

/**
 * Google Calendar causes the trigger to fire.
 * 
 * @typedef {ScriptApp.TriggerSource} ScriptApp.TriggerSource.CALENDAR
 */
/**
 * A time-driven event causes the trigger to fire.
 * 
 * @typedef {ScriptApp.TriggerSource} ScriptApp.TriggerSource.CLOCK
 */
/**
 * Google Docs causes the trigger to fire.
 * 
 * @typedef {ScriptApp.TriggerSource} ScriptApp.TriggerSource.DOCUMENTS
 */
/**
 * Google Forms causes the trigger to fire.
 * 
 * @typedef {ScriptApp.TriggerSource} ScriptApp.TriggerSource.FORMS
 */
/**
 * Google Sheets causes the trigger to fire.
 * 
 * @typedef {ScriptApp.TriggerSource} ScriptApp.TriggerSource.SPREADSHEETS
 */

