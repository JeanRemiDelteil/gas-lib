var ScriptApp = {};


/**
 * An enumeration that identifies which categories of authorized services Apps Script is able to
 execute through a triggered function.
 
 */
ScriptApp.AuthMode = {};

/**
 * A mode that allows access to a limited subset of services for use in custom spreadsheet
 functions. Some of these services ? including read-only access to Spreadsheet service ?
 normally require authorization, but are permitted without authorization when used in a
 custom function. Because custom functions do not include an event parameter, this value is
 never returned; it is documented only to demonstrate that custom functions run in their own
 authorization mode.
 *
 * @type {ScriptApp.AuthMode}
 */
ScriptApp.AuthMode.CUSTOM_FUNCTION = {};

/**
 * A mode that allows access to all services that require authorization. This mode occurs when an
 add-on or a script executes as the result of any trigger other than the cases described for
 <code>LIMITED</code> or <code>NONE</code>.
 *
 * @type {ScriptApp.AuthMode}
 */
ScriptApp.AuthMode.FULL = {};

/**
 * A mode that allows access to a limited subset of services. This mode occurs when an add-on or a
 script <a href="/apps-script/scripts_containers">bound</a> to a document executes an
 <code>onOpen(e)</code> or <code>onEdit(e)</code> simple trigger, except in the case described for
 <code>NONE</code>.
 *
 * @type {ScriptApp.AuthMode}
 */
ScriptApp.AuthMode.LIMITED = {};

/**
 * A mode that does not allow access to any services that require authorization. This mode occurs
 when an add-on executes an <code>onOpen(e)</code> simple trigger, and the user has installed an
 add-on in a different document but the add-on has not been used in the current document.
 *
 * @type {ScriptApp.AuthMode}
 */
ScriptApp.AuthMode.NONE = {};

/**
 * An enumeration denoting the authorization status of a script.
 
 */
ScriptApp.AuthorizationStatus = {};

/**
 * The user has granted this script all the authorization it currently
 requires.
 *
 * @type {ScriptApp.AuthorizationStatus}
 */
ScriptApp.AuthorizationStatus.NOT_REQUIRED = {};

/**
 * The user needs to authorize this script to use one or more services. In
 most cases, the script will prompt the user for authorization the next
 time it runs; however, if the script is published as an
 <a href="/apps-script/add-ons">add-on</a> that uses
 <a href="/apps-script/understanding_triggers">installable triggers</a>,
 the trigger will run the script without prompting for authorization but
 will throw an exception if the script attempts to call the unauthorized
 service.
 *
 * @type {ScriptApp.AuthorizationStatus}
 */
ScriptApp.AuthorizationStatus.REQUIRED = {};

/**
 * An enumeration denoting the type of triggered event.
 
 */
ScriptApp.EventType = {};

/**
 * The trigger fires once the time-driven event reaches a specific time.
 *
 * @type {ScriptApp.EventType}
 */
ScriptApp.EventType.CLOCK = {};

/**
 * The trigger fires once the user changes the Google Sheets file (for example,
 by adding a row, which counts as a change instead of an edit).
 *
 * @type {ScriptApp.EventType}
 */
ScriptApp.EventType.ON_CHANGE = {};

/**
 * The trigger fires once the user edits the Google Sheets file (for example, by
 entering a new value into a cell, which counts as an edit instead of a change).
 *
 * @type {ScriptApp.EventType}
 */
ScriptApp.EventType.ON_EDIT = {};

/**
 * The trigger fires once the user responds to a Google Form. This trigger is
 available either in the Google Form itself or in the Google Sheets file that
 the form sends its responses to.
 *
 * @type {ScriptApp.EventType}
 */
ScriptApp.EventType.ON_FORM_SUBMIT = {};

/**
 * The trigger fires once the user opens the Google Docs, Sheets, or Forms file.
 *
 * @type {ScriptApp.EventType}
 */
ScriptApp.EventType.ON_OPEN = {};

/**
 * An enumeration denoting how the script was installed to the user as an add-on.
 
 */
ScriptApp.InstallationSource = function(){};

/**
 * Add-on was installed by the administrator for the user's domain.
 *
 * @type {{}}
 */
ScriptApp.InstallationSource.prototype.APPS_MARKETPLACE_DOMAIN_ADD_ON = {};

/**
 * Script is not running as an add-on.
 *
 * @type {{}}
 */
ScriptApp.InstallationSource.prototype.NONE = {};

/**
 * Add-on was installed by the user from the Chrome Web Store.
 *
 * @type {{}}
 */
ScriptApp.InstallationSource.prototype.WEB_STORE_ADD_ON = {};

/**
 * An enumeration denoting the source of the event that causes the trigger to fire.
 
 */
ScriptApp.TriggerSource = {};

/**
 * A time-driven event causes the trigger to fire.
 *
 * @type {ScriptApp.TriggerSource}
 */
ScriptApp.TriggerSource.CLOCK = {};

/**
 * Google Docs causes the trigger to fire.
 *
 * @type {ScriptApp.TriggerSource}
 */
ScriptApp.TriggerSource.DOCUMENTS = {};

/**
 * Google Forms causes the trigger to fire.
 *
 * @type {ScriptApp.TriggerSource}
 */
ScriptApp.TriggerSource.FORMS = {};

/**
 * Realtime API causes the trigger to fire.
 *
 * @type {ScriptApp.TriggerSource}
 */
ScriptApp.TriggerSource.REALTIME = {};

/**
 * Google Sheets causes the trigger to fire.
 *
 * @type {ScriptApp.TriggerSource}
 */
ScriptApp.TriggerSource.SPREADSHEETS = {};

/**
 * An enumeration representing the days of the week.
 
 */
Weekday = function(){};

/**
 * Removes the given trigger so it will no longer run.
 
 <pre class="prettyprint"><code>
 // Deletes all triggers in the current project.
 var triggers = ScriptApp.getProjectTriggers();
 for (var i = 0; i &lt; triggers.length; i++) {
   ScriptApp.deleteTrigger(triggers[i]);
 }
 </code></pre>
 *
 * @param {ScriptApp.Trigger} trigger - the trigger to delete
 *
 * @return void
 */
ScriptApp.deleteTrigger = function(trigger){};

/**
 * Gets an object used to determine whether the user needs to authorize this script to use
 one or more services, and to provide the URL for an authorization dialog. If the script
 is published as an <a href="/apps-script/add-ons">add-on</a> that uses
 <a href="/apps-script/understanding_triggers">installable triggers</a>, this information
 can be used to control access to sections of code for which the user lacks the necessary
 authorization. Alternately, the add-on can ask the user to open the URL for the
 authorization dialog to resolve the problem.
 
 <pre class="prettyprint">
 <code>
 var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
 status = authInfo.getAuthorizationStatus();
 url = authInfo.getAuthorizationUrl();
 </code></pre>
 *
 * @param {ScriptApp.AuthMode} authMode - the authorization mode for which authorization information is requested;
 in almost all cases, the value for <code>authMode</code> should be
 <code>ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)</code>, since no other
 authorization mode requires that users grant authorization
 *
 * @return {ScriptApp.AuthorizationInfo} an object that can provide information about the user's authorization status
 */
ScriptApp.getAuthorizationInfo = function(authMode){};

/**
 * Returns an enum value that indicates how the script came to be installed as an add-on for the
 current user (for example, whether the user installed it personally through the Chrome Web
 Store, or whether a domain administrator installed it for all users).
 *
 * @return {ScriptApp.InstallationSource}
 */
ScriptApp.getInstallationSource = function(){};

/**
 * Gets the OAuth 2.0 <a href="http://tools.ietf.org/html/rfc6749#section-1.4">access token</a>
 for the current user. If the script's OAuth scopes are sufficient to authorize another Google
 API that normally requires its own OAuth flow (like
 <a href="/apps-script/guides/dialogs#file-open_dialogs">Google Picker</a>), scripts can bypass
 the second authorization prompt by passing this token instead. However, not all Google OAuth
 scopes are available in Apps Script. The token expires after a time (a few minutes at minimum);
 scripts should handle authorization failures and call this method to obtain a fresh token when
 needed.
 *
 * @return {String} a string representation of the OAuth 2.0 token
 */
ScriptApp.getOAuthToken = function(){};

/**
 * Gets the project key of the current script. The project key is a unique identifier for scripts
 and used to compose the callback URL used in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/script-app.html#newStateToken()'>newStateToken()</a></code>.
 
 <p>When called in a <a href="/apps-script/guide_libraries">library</a>, this will return the
 project key of the outer-most script being executed.
 *
 * @return {String} the project key of the current script
 */
ScriptApp.getProjectKey = function(){};

/**
 * Gets all installable triggers associated with the current project.
 
 <pre class="prettyprint"><code>
 Logger.log(&#39;Current project has &#39; + ScriptApp.getProjectTriggers().length + &#39; triggers.&#39;);
 </code></pre>
 *
 * @return {ScriptApp.Trigger[]} an array of triggers associated with this project
 */
ScriptApp.getProjectTriggers = function(){};

/**
 * Gets all installable triggers associated with the current script.
 
 <pre class="prettyprint"><code>
 Logger.log(&#39;Current script has &#39; + ScriptApp.getScriptTriggers().length + &#39; triggers.&#39;);
 </code></pre>
 *
 * @return {ScriptApp.Trigger[]} an array of triggers associated with this script
 */
ScriptApp.getScriptTriggers = function(){};

/**
 * Gets an object used to control publishing the script as a web app.
 
 <pre class="prettyprint"><code>
 // Get the URL of the published web app.
 var url = ScriptApp.getService().getUrl();
 </code></pre>
 *
 * @return {ScriptApp.Service} an object used to observe and control publishing the script as a web app
 */
ScriptApp.getService = function(){};

/**
 * Gets all installable triggers owned by this user in the given document, for this script or
 add-on only. This method cannot be used to see the triggers attached to other scripts.
 
 <pre class="prettyprint"><code>
 var doc = DocumentApp.getActiveDocument();
 var triggers = ScriptApp.getUserTriggers(doc);
 // Log the handler function for the first trigger in the array.
 Logger.log(triggers[0].getHandlerFunction());
 </code></pre>
 *
 * @param {DocumentApp.Document} document - a Google Docs file that may contain installable triggers
 *
 * @return {ScriptApp.Trigger[]} an array of triggers owned by this user in the given document
 */
ScriptApp.getUserTriggers = function(document){};

/**
 * Gets all installable triggers owned by this user in the given form, for this script or
 add-on only. This method cannot be used to see the triggers attached to other scripts.
 
 <pre class="prettyprint"><code>
 var form = FormApp.getActiveForm();
 var triggers = ScriptApp.getUserTriggers(form);
 // Log the trigger source for the first trigger in the array.
 Logger.log(triggers[0].getTriggerSource());
 </code></pre>
 *
 * @param {FormApp.Form} form - a Google Forms file that may contain installable triggers
 *
 * @return {ScriptApp.Trigger[]} an array of triggers owned by this user in the given form
 */
ScriptApp.getUserTriggers = function(form){};

/**
 * Invalidates the authorization this user has to execute the current script. Used to invalidate
 any permissions for the current script. This is especially useful for functions tagged as
 one-shot authorization. Since one-shot authorization functions can only be called the first run
 after the script has acquired authorization, if you wish to perform an action afterwards, you
 will have to revoke any authorization the script had, so the user can see the authorization
 dialog again.
 
 <pre class="prettyprint"><code>
 ScriptApp.invalidateAuth();
 </code></pre>
 *
 * @return void
 */
ScriptApp.invalidateAuth = function(){};

/**
 * Creates a builder for a state token that can be used in a callback API (like an OAuth flow).
 
 <pre class="prettyprint"><code>
 // Generate a callback URL, given the name of a callback function. The script does not need to
 // be published as a web app; the /usercallback URL suffix replaces /edit in any script&#39;s URL.
 function getCallbackURL(callbackFunction) {
   // IMPORTANT: Replace string below with the URL from your script, minus the /edit at the end.
   var scriptUrl = &#39;https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz&#39;;
   var urlSuffix = &#39;/usercallback?state=&#39;;
   var stateToken = ScriptApp.newStateToken()
       .withMethod(callbackFunction)
       .withTimeout(120)
       .createToken();
   return scriptUrl + urlSuffix + stateToken;
 }
 </code></pre>
 <p>
 In most OAuth2 flows, the <code>state</code> token is passed to the authorization endpoint directly
 (not as part of the callback URL), and the authorization endpoint then passes it as part of the
 callback URL.
 <p>
 For example:
 <ul>
 <li>The script redirects the user to OAuth2 authorize URL: <code>https://accounts.google.com/o/oauth2/auth?state=token_generated_with_this_method&amp;callback_uri=https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback&amp;other_oauth2_parameters
 </code></li>
 <li>The user clicks authorize, and the OAuth2 authorization page redirects the user back to
 <code>https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback?state=token_generated_with_this_method&amp;other_params_that_include_tokens_or_grants
 </code></li>
 <li>The above redirect (back to <code>http://script.google.com/...</code>), causes the browser
 request to <code>/usercallback</code>, which invokes the method specified by
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/state-token-builder.html#withMethod(String)'>StateTokenBuilder.withMethod(method)</a></code>.
 </ul>
 *
 * @return {ScriptApp.StateTokenBuilder} an object used to continue the state-token-building process
 */
ScriptApp.newStateToken = function(){};

/**
 * Begins the process of creating an installable trigger that, when fired, will call a
 given function.
 
 <pre class="prettyprint"><code>
 // Creates an edit trigger for a spreadsheet identified by ID.
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forSpreadsheet(&#39;1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3&#39;)
 .onEdit()
 .create();
 </code></pre>
 *
 * @param {String} functionName - the function to call when the trigger fires
 *
 * @return {ScriptApp.TriggerBuilder} an object used to continue the trigger-building process
 */
ScriptApp.newTrigger = function(functionName){};

/** @constructor */
ScriptApp.AuthorizationInfo = function(){};

/**
 * Gets a value that indicates whether the user needs to authorize this script to use one or
 more services (for example, <code>ScriptApp.AuthorizationStatus.REQUIRED</code>).
 
 <pre class="prettyprint">
 <code>
 // Log the authorization status (REQUIRED or NOT_REQUIRED).
 var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
 Logger.log(authInfo.getAuthorizationStatus());
 </code></pre>
 *
 * @return {ScriptApp.AuthorizationStatus} the authorization status
 */
ScriptApp.AuthorizationInfo.prototype.getAuthorizationStatus = function(){};

/**
 * Gets the authorization URL that can be used to grant access to the script. This method returns
 <code>null</code> if no authorization is required. The page at the URL will close automatically
 if it is accessed and the script does not require any authorization.
 
 <pre class="prettyprint">
 <code>
 // Log the URL used to grant access to the script.
 var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
 Logger.log(authInfo.getAuthorizationUrl());
 </code></pre>
 *
 * @return {String} a URL that can be used to authorize the script
 */
ScriptApp.AuthorizationInfo.prototype.getAuthorizationUrl = function(){};

/** @constructor */
ScriptApp.ClockTriggerBuilder = function(){};

/**
 * Specifies the duration (in milliseconds) after the current time that the trigger will run.
 (plus or minus 15 minutes).
 
 <pre class="prettyprint">
 <code>
 // Creates a trigger that will run 10 minutes later
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .after(10 * 60 * 1000)
 .create();
 </code></pre>
 *
 * @param {number} durationMilliseconds - the duration (in milliseconds) after the current time when the
 trigger should run
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.after = function(durationMilliseconds){};

/**
 * Specifies when the trigger will run (plus or minus 15 minutes).
 
 <pre class="prettyprint">
 <code>
 // Creates a trigger for December 1, 2012
 var triggerDay = new Date(2012, 11, 1);
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .at(triggerDay)
 .create();
 </code></pre>
 *
 * @param {Date} date - a Date object representing when the trigger should run
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.at = function(date){};

/**
 * Specifies trigger will fire on the given date, by default near midnight (+/- 15 minutes).
 
 <pre class="prettyprint">
 <code>
 // Schedules for January 1st, 2013
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .atDate(2013, 1, 1)
 .create();
 </code></pre>
 *
 * @param {number} year - the calendar year to schedule the trigger
 * @param {number} month - the calendar month to schedule the trigger (should be a number between 1 and 12,
 inclusive)
 * @param {number} day - the calendar day to schedule the trigger (should be a number between 1 and 31,
 inclusive)
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.atDate = function(year, month, day){};

/**
 * Specifies the hour the trigger will run (plus or minus 15 minutes).
 
 <pre class="prettyprint">
 <code>
 // Runs at 5am in the timezone of the script
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .atHour(5)
 .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
 .create();
 </code></pre>
 *
 * @param {number} hour - the hour at which to fire
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.atHour = function(hour){};

/**
 * Creates the trigger.
 *
 * @return {ScriptApp.Trigger} the newly created, scheduled trigger
 */
ScriptApp.ClockTriggerBuilder.prototype.create = function(){};

/**
 * Specifies to run the trigger every <code>n</code> days.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .everyDays(3)
 .create();
 </code></pre>
 *
 * @param {number} n - the number of days between executions
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.everyDays = function(n){};

/**
 * Specifies to run the trigger every <code>n</code> hours.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .everyHours(12)
 .create();
 </code></pre>
 *
 * @param {number} n - the number of hours between executions
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.everyHours = function(n){};

/**
 * Specifies to run the trigger every <code>n</code> minutes. <code>n</code> must be 1, 5, 10, 15 or 30.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .everyMinutes(10)
 .create();
 </code></pre>
 *
 * @param {number} n - the number of minutes between executions
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.everyMinutes = function(n){};

/**
 * Specifies to run the trigger every <code>n</code> weeks.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .everyWeeks(2)
 .create();
 </code></pre>
 *
 * @param {number} n - the number of weeks between executions
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.everyWeeks = function(n){};

/**
 * Specifies the timezone that the specified dates/time that the trigger will run in.  By
 default, the timezone will be that of the script.
 
 The list of valid timezone strings corresponds with the valid timezone strings
 for <code>TimeZone</code>. An invalid timezone string will cause the script
 to throw an error.
 
 <pre class="prettyprint">
 <code>
 // Schedule the trigger to execute at noon every day in the US/Pacific time zone
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .atHour(12)
 .everyDays(1)
 .inTimezone(&quot;America/Los_Angeles&quot;)
 .create();
 </code></pre>
 *
 * @param {String} timezone - the timezone with which to treat time information in the event
 *
 * @return {ScriptApp.ClockTriggerBuilder}
 */
ScriptApp.ClockTriggerBuilder.prototype.inTimezone = function(timezone){};

/**
 * Specifies the minute the trigger will run (plus or minus 15 minutes).
 
 <pre class="prettyprint">
 <code>
 // Runs at approximately 5:30am in the timezone of the script
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .atHour(5)
 .nearMinute(30)
 .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
 .create();
 </code></pre>
 *
 * @param {number} minute - the minute at which to fire
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.nearMinute = function(minute){};

/**
 * Specifies on what date in the month that the trigger will run.
 
 <pre class="prettyprint">
 <code>
 // Schedules for the first of every month
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .onMonthDay(1)
 .create();
 </code></pre>
 *
 * @param {number} day - the day of the month the trigger should be scheduled for
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.onMonthDay = function(day){};

/**
 * Specifies on what day of the week that the trigger will run.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .timeBased()
 .onWeekDay(ScriptApp.WeekDay.FRIDAY)
 .create();
 </code></pre>
 *
 * @param {Weekday} day - the day of the week to fire
 *
 * @return {ScriptApp.ClockTriggerBuilder} the builder for chaining
 */
ScriptApp.ClockTriggerBuilder.prototype.onWeekDay = function(day){};

/** @constructor */
ScriptApp.DocumentTriggerBuilder = function(){};

/**
 * Creates and returns the new trigger.
 *
 * @return {ScriptApp.Trigger} the new trigger
 */
ScriptApp.DocumentTriggerBuilder.prototype.create = function(){};

/**
 * Specifies a trigger that will fire when the document is opened.
 
 <pre class="prettyprint">
 <code>
 var document = DocumentApp.getActiveDocument();
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forDocument(document)
 .onOpen()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.DocumentTriggerBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code>, for chaining
 */
ScriptApp.DocumentTriggerBuilder.prototype.onOpen = function(){};

/** @constructor */
ScriptApp.FormTriggerBuilder = function(){};

/**
 * Creates and returns the new trigger.
 *
 * @return {ScriptApp.Trigger} the new trigger
 */
ScriptApp.FormTriggerBuilder.prototype.create = function(){};

/**
 * Specifies a trigger that will fire when a response is submitted to the form.
 
 <pre class="prettyprint">
 <code>
 var form = FormApp.openById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forForm(form)
 .onFormSubmit()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.FormTriggerBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code>, for chaining
 */
ScriptApp.FormTriggerBuilder.prototype.onFormSubmit = function(){};

/**
 * Specifies a trigger that will fire when the form's edit view is opened.
 
 <pre class="prettyprint">
 <code>
 var form = FormApp.getActiveForm();
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forForm(form)
 .onOpen()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.FormTriggerBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code>, for chaining
 */
ScriptApp.FormTriggerBuilder.prototype.onOpen = function(){};

/** @constructor */
ScriptApp.RealtimeTriggerBuilder = function(){};

/**
 * Creates and returns the new trigger.
 *
 * @return {ScriptApp.Trigger} the new trigger
 */
ScriptApp.RealtimeTriggerBuilder.prototype.create = function(){};

/**
 * Specifies a trigger that will fire when a Realtime (Brix) document is edited.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forRealtimeDocument(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
 .onEdit()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.RealtimeTriggerBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/realtime-trigger-builder.html'>RealtimeTriggerBuilder</a></code>, for chaining
 */
ScriptApp.RealtimeTriggerBuilder.prototype.onEdit = function(){};

/** @constructor */
ScriptApp.Service = function(){};

/**
 * Disables the script from being accessed as a web app. This method is equivalent to opening the
 "Publish > Deploy as web app" dialog and clicking "disable web app".
 
 <pre class="prettyprint">
 <code>
 ScriptApp.getService().disable();
 </code></pre>
 *
 * @return void
 */
ScriptApp.Service.prototype.disable = function(){};

/**
 * Allows the script to be accessed as a web app with the specified permissions. This method is
 equivalent to opening the "Publish > Deploy as web app" dialog and clicking "Deploy".
 You can either share to yourself with <code>Restriction.MYSELF</code>, share to the domain with
 <code>Restriction.DOMAIN</code>, or share to everyone with <code>Restriction.ALL</code>. Not all sharing
 modes are valid in all domains. The URL for the published app can be obtained by calling
 <code>ScriptApp.getService().getUrl()</code>. Note: this method works only in the script execution
 that immediately follows authorization. If you want to call this method on a subsequent
 execution, you must first invalidate the script's authorization by calling
 <code>ScriptApp.invalidateAuth()</code>, then have the user re-run the script and re-authorize. Also
 note that at least one <a href="/apps-script/guide_versions">version</a> of the script must be
 saved before this method will work.
 
 <pre class="prettyprint">
 <code>
 var service = ScriptApp.getService();
 service.enable(service.Restriction.ALL);
 // Other options are:
 //    Restriction.DOMAIN
 //    Restriction.MYSELF
 </code></pre>
 *
 * @param {ScriptApp.Service.Restriction} restriction - who is allowed to access the web app
 *
 * @return void
 */
ScriptApp.Service.prototype.enable = function(restriction){};

/**
 * Returns the URL of the web app, if it has been deployed; otherwise returns <code>null</code>.
 
 <pre class="prettyprint">
 <code>
 // Mail the URL of the published web app.
 MailApp.sendMail(&quot;myself@example.com&quot;, &quot;My Snazzy App&quot;,
 &quot;My new app is now available at &quot; + ScriptApp.getService().getUrl());
 </code></pre>
 *
 * @return {String} the URL of the web app
 */
ScriptApp.Service.prototype.getUrl = function(){};

/**
 * Returns <code>true</code> if the script is accessible as a web app.
 
 <pre class="prettyprint">
 <code>
 var svc = ScriptApp.getService();
 // Publish the script as a web app if it isn&#39;t currently.
 if (!svc.isEnabled()) {
   svc.enable(svc.Restriction.MYSELF);
 }
 </code></pre>
 *
 * @return {Boolean} <code>true</code> if the script is published as a web app; <code>false</code> if not
 */
ScriptApp.Service.prototype.isEnabled = function(){};

/** @constructor */
ScriptApp.SpreadsheetTriggerBuilder = function(){};

/**
 * Creates the trigger and returns it.
 *
 * @return {ScriptApp.Trigger} the created trigger
 */
ScriptApp.SpreadsheetTriggerBuilder.prototype.create = function(){};

/**
 * Specifies a trigger that will fire when the spreadsheet's content or structure is changed.
 
 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActive();
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .forSpreadsheet(sheet)
 .onChange()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */
ScriptApp.SpreadsheetTriggerBuilder.prototype.onChange = function(){};

/**
 * Specifies a trigger that will fire when the spreadsheet is edited.
 
 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActive();
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .forSpreadsheet(sheet)
 .onEdit()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */
ScriptApp.SpreadsheetTriggerBuilder.prototype.onEdit = function(){};

/**
 * Specifies a trigger that will fire when the spreadsheet has a form submitted to it.
 
 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActive();
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .forSpreadsheet(sheet)
 .onFormSubmit()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */
ScriptApp.SpreadsheetTriggerBuilder.prototype.onFormSubmit = function(){};

/**
 * Specifies a trigger that will fire when the spreadsheet is opened.
 
 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActive();
 ScriptApp.newTrigger(&quot;myFunction&quot;)
 .forSpreadsheet(sheet)
 .onOpen()
 .create();
 </code></pre>
 *
 * @return {ScriptApp.SpreadsheetTriggerBuilder} a builder for chaining
 */
ScriptApp.SpreadsheetTriggerBuilder.prototype.onOpen = function(){};

/** @constructor */
ScriptApp.StateTokenBuilder = function(){};

/**
 * Constructs an encrypted string representation of the state token.
 
 <pre class="prettyprint">
 <code>
 var stateToken = ScriptApp.newStateToken().createToken();
 </code></pre>
 *
 * @return {String} an encrypted string representing the token
 */
ScriptApp.StateTokenBuilder.prototype.createToken = function(){};

/**
 * Adds an argument to the token. This method can be called multiple times.
 
 <pre class="prettyprint">
 <code>
 var stateToken = ScriptApp.newStateToken().withArgument(&#39;myField&#39;, &#39;myValue&#39;).createToken();
 </code></pre>
 *
 * @param {String} name - the name of the argument
 * @param {String} value - the value of the argument
 *
 * @return {ScriptApp.StateTokenBuilder} the state token builder, for chaining
 */
ScriptApp.StateTokenBuilder.prototype.withArgument = function(name, value){};

/**
 * Sets a callback function. The default is a function named <code>callback()</code>.
 
 <pre class="prettyprint">
 <code>
 var stateToken = ScriptApp.newStateToken().withMethod(&#39;myCallback&#39;).createToken();
 </code></pre>
 *
 * @param {String} method - the name of the callback function, represented as a string without
 parentheses or arguments
 *
 * @return {ScriptApp.StateTokenBuilder} the state token builder, for chaining
 */
ScriptApp.StateTokenBuilder.prototype.withMethod = function(method){};

/**
 * Sets the duration (in seconds) for which the token is valid. The defaults is 60 seconds; the
 maximum duration is 3600 seconds (1 hour).
 
 <pre class="prettyprint">
 <code>
 var stateToken = ScriptApp.newStateToken().withTimeout(60).createToken();
 </code></pre>
 *
 * @param {number} seconds - the duration for which the token is valid; the maximum value is <code>3600</code>
 *
 * @return {ScriptApp.StateTokenBuilder} the state token builder, for chaining
 */
ScriptApp.StateTokenBuilder.prototype.withTimeout = function(seconds){};

/** @constructor */
ScriptApp.Trigger = function(){};

/**
 * Returns the event type that the trigger fires on.
 
 <pre class="prettyprint">
 <code>
 var triggers = ScriptApp.getProjectTriggers();
 for (var i = 0; i &lt; triggers.length; i++) {
   if (triggers[i].getEventType() == ScriptApp.EventType.CLOCK) {
     // Some code here - other options are:
     // ScriptApp.EventType.ON_EDIT
     // ScriptApp.EventType.ON_FORM_SUBMIT
     // ScriptApp.EventType.ON_OPEN
   }
 }
 </code></pre>
 *
 * @return {ScriptApp.EventType} the event type that this is a trigger for
 */
ScriptApp.Trigger.prototype.getEventType = function(){};

/**
 * Returns the function that will be called when the trigger fires.
 
 <pre class="prettyprint">
 <code>
 // Create a trigger for the script.
 ScriptApp.newTrigger(&#39;myFunction&#39;).forSpreadsheet(&#39;id of my spreadsheet&#39;).onEdit().create();
 Logger.log(ScriptApp.getProjectTriggers()[0].getHandlerFunction()); // logs &quot;myFunction&quot;
 </code></pre>
 *
 * @return {String} the method name
 */
ScriptApp.Trigger.prototype.getHandlerFunction = function(){};

/**
 * Returns the source of events that will cause the trigger to fire.
 
 For example, a spreadsheet onEdit trigger would return SPREADSHEETS, or a time based trigger
 would return CLOCK.
 
 <pre class="prettyprint">
 <code>
 var triggers = ScriptApp.getProjectTriggers();
 for (var i = 0; i &lt; triggers.length; i++) {
   if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.CLOCK) {
     Logger.log(triggers[i].getUniqueId() + &quot; source is clock&quot;);
   } else if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.SPREADSHEETS) {
     Logger.log(triggers[i].getUniqueId() + &quot; source is spreadsheets&quot;);
   }
 }
 </code></pre>
 *
 * @return {ScriptApp.TriggerSource} the publisher this is a trigger for
 */
ScriptApp.Trigger.prototype.getTriggerSource = function(){};

/**
 * Returns the id specific to the source.
 
 For example, if the trigger source is a spreadsheet, this would be the id of the spreadsheet.
 For clock events this returns null.
 *
 * @return {String} the id of the entity in the publisher that this is a trigger for
 */
ScriptApp.Trigger.prototype.getTriggerSourceId = function(){};

/**
 * Returns a unique identifier that can be used to distinguish triggers from each other.
 *
 * @return {String} the unique identifier of the trigger
 */
ScriptApp.Trigger.prototype.getUniqueId = function(){};

/** @constructor */
ScriptApp.TriggerBuilder = function(){};

/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code> tied to the given document.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forDocument(DocumentApp.getActiveDocument())
 .onOpen()
 .create();
 </code></pre>
 *
 * @param {DocumentApp.Document} document - the document
 *
 * @return {ScriptApp.DocumentTriggerBuilder} the new DocumentTriggerBuilder
 */
ScriptApp.TriggerBuilder.prototype.forDocument = function(document){};

/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code> tied to the given form.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forForm(FormApp.getActiveForm())
 .onFormSubmit()
 .create();
 </code></pre>
 *
 * @param {FormApp.Form} form - the form
 *
 * @return {ScriptApp.FormTriggerBuilder} the new FormTriggerBuilder
 */
ScriptApp.TriggerBuilder.prototype.forForm = function(form){};

/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html'>SpreadsheetTriggerBuilder</a></code> tied to the given spreadsheet.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .forSpreadsheet(SpreadsheetApp.getActive())
 .onEdit()
 .create();
 </code></pre>
 *
 * @param {SpreadsheetApp.Spreadsheet} sheet - the spreadsheet
 *
 * @return {ScriptApp.SpreadsheetTriggerBuilder} the new SpreadsheetTriggerBuilder
 */
ScriptApp.TriggerBuilder.prototype.forSpreadsheet = function(sheet){};

/**
 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html'>ClockTriggerBuilder</a></code> for building time-based triggers.
 
 <pre class="prettyprint">
 <code>
 ScriptApp.newTrigger(&#39;myFunction&#39;)
 .timeBased()
 .atDate(2013, 10, 31)
 .create();
 </code></pre>
 *
 * @return {ScriptApp.ClockTriggerBuilder} the new ClockTriggerBuilder
 */
ScriptApp.TriggerBuilder.prototype.timeBased = function(){};

