var Browser = {};


/**
 * 

 */
ButtonSet = function(){};

/**
 * Pops up a dialog box with a text input box in the user's browser.

 The inputBox method raises a client-side input box that displays the given prompt to the user.
 Note that this function causes the server-side script to be suspended. It will resume
 automatically after the user clears the dialog, but JDBC connections will not persist across
 the suspension.

 <pre class="prettyprint">
 <code>
 // The code below will set the value of name to the name input by the user, or &#39;cancel&#39;
 var name = Browser.inputBox(&#39;Enter your name&#39;);
 </code></pre>
 *
 * @param {String} prompt - the text to be displayed in the dialog box
 *
 * @return {String} text entered by the user (or 'cancel' for a canceled or dismissed dialog)
 */
Browser.inputBox = function(prompt){};

/**
 * Pops up a dialog box with a text input box in the user's browser.

 The inputBox method raises a client-side input box that displays the given prompt to the
 user, and offers a choice of buttons to be displayed. Note that this function causes the
 server-side script to be suspended. It will resume automatically after the user clears the
 dialog, but JDBC connections will not persist across the suspension.

 <pre class="prettyprint">
 <code>
 // The code below will set the value of name to the name input by the user, or &#39;cancel&#39;
 var name = Browser.inputBox(&#39;Enter your name&#39;, Browser.Buttons.OK_CANCEL);
 </code></pre>
 *
 * @param {String} prompt - the text to be displayed in the dialog box
 * @param {ButtonSet} buttons - an enum from Browser.Buttons
 *
 * @return {String} text entered by the user (or 'cancel' for a canceled or dismissed dialog)
 */
Browser.inputBox = function(prompt, buttons){};

/**
 * Pops up a dialog box with the given message and an OK button in the user's browser.

 The msgBox method raises a client-side message box that displays the given message to the
 user. Note that this method causes the server-side script to be suspended. It will resume
 automatically after the user clears the dialog, but JDBC connections will not persist
 across the suspension.

 <pre class="prettyprint">
 <code>
 // The code below will display &quot;hello world&quot; in a dialog box with an OK button
 Browser.msgBox(&#39;hello world&#39;);
 </code></pre>
 *
 * @param {String} prompt - the text to be displayed in the dialog box
 *
 * @return {String} lower case text of the button that is clicked by the user
 */
Browser.msgBox = function(prompt){};

/**
 * Pops up a dialog box with the given message and specified buttons in the user's browser.

 The msgBox method raises a client-side message box that displays the given message to the
 user, and offers a choice of buttons to be displayed. Note that this method causes the
 server-side script to be suspended. It will resume automatically after the user clears the
 dialog, but JDBC connections will not persist across the suspension.

 <pre class="prettyprint">
 <code>
 // The code below will display &quot;hello world&quot; in a dialog box with OK and Cancel buttons
 Browser.msgBox(&#39;hello world&#39;, Browser.Buttons.OK_CANCEL);
 </code></pre>
 *
 * @param {String} prompt - the text to be displayed in the dialog box
 * @param {ButtonSet} buttons - an enum from Browser.Buttons
 *
 * @return {String} lower case text of the button that is clicked by the user
 */
Browser.msgBox = function(prompt, buttons){};

