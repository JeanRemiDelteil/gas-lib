var Ui = {};


/**
 * An enum representing predetermined, localized dialog buttons returned by an <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#alert(String)'>alert</a> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/prompt-response.html#getSelectedButton()'>PromptResponse.getSelectedButton()</a></code> to indicate
 which button in a dialog the user clicked.
 * 
 * @class Button
 */

/**
 * An enum representing predetermined, localized sets of one or more dialog buttons that can be
 added to an <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#alert(String,ButtonSet)'>alert</a> or a <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#prompt(String,ButtonSet)'>prompt</a>.
 * 
 * @class ButtonSet
 */

/**
 * Opens a dialog box in the user's editor with the given message and an "OK" button. This method
 suspends the server-side script while the dialog is open. The script will resume after the user
 dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks will
 not persist across the suspension. For more information, see the <a
 href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Display "Hello, world!" in a dialog box with an "OK" button. The user can also close the
 // dialog by clicking the close button in its title bar.
 SpreadsheetApp.getUi().alert('Hello, world!');
 </pre>
 *
 * @param {String} prompt - the message to display in the dialog box
 *
 * @return {Button} the button the user clicked
 */
Ui.alert = function(prompt){};

/**
 * Opens a dialog box in the user's editor with the given message and set of buttons. This method
 suspends the server-side script while the dialog is open. The script will resume after the user
 dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks will
 not persist across the suspension. For more information, see the <a
 href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Display a dialog box with a message and "Yes" and "No" buttons. The user can also close the
 // dialog by clicking the close button in its title bar.
 var ui = SpreadsheetApp.getUi();
 var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);

 // Process the user's response.
 if (response == ui.Button.YES) {
   Logger.log('The user clicked "Yes."');
 } else {
   Logger.log('The user clicked "No" or the close button in the dialog\'s title bar.');
 }
 </pre>
 *
 * @param {String} prompt - the message to display in the dialog box
 * @param {ButtonSet} buttons - the button set to display in the dialog box
 *
 * @return {Button} the button the user clicked
 */
Ui.alert = function(prompt, buttons){};

/**
 * Creates a builder that can be used to insert a sub-menu into the editor's Add-on menu. The menu
 will not actually be updated until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html#addToUi()'>Menu.addToUi()</a></code> is called. If the script is running
 as an add-on, the sub-menu name will match the add-on's name in the web store; if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the document directly, the sub-menu name
 will match the script's name. For more information, see the <a
 href="/apps-script/guides/menus">guide to menus</a>.

 <pre class="prettyprint">
 // Add an item to the Add-on menu, under a sub-menu whose name is set automatically.
 function onOpen(e) {
   SpreadsheetApp.getUi()
       .createAddonMenu()
       .addItem('Show', 'showSidebar')
       .addToUi();
 }</pre>
 *
 * @return {Menu} the new menu builder
 */
Ui.createAddonMenu = function(){};

/**
 * Creates a builder that can be used to add a menu to the editor's user interface. The menu will
 not actually be added until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html#addToUi()'>Menu.addToUi()</a></code> is called. For more information, see the <a
 href="/apps-script/guides/menus">guide to menus</a>. The label for a top-level menu should be
 in headline case (all major words capitalized), although the label for a sub-menu should be in
 sentence case (only the first word capitalized). If the script is published as an <a
 href="/apps-script/add-ons">add-on</a>, the <code>caption</code> parameter is ignored and the menu
 is added as a sub-menu of the Add-ons menu, equivalent to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#createAddonMenu()'>createAddonMenu()</a></code>.

 <pre class="prettyprint">
 // Add a custom menu to the active document, including a separator and a sub-menu.
 function onOpen(e) {
   SpreadsheetApp.getUi()
       .createMenu('My Menu')
       .addItem('My menu item', 'myFunction')
       .addSeparator()
       .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')
           .addItem('One sub-menu item', 'mySecondFunction')
           .addItem('Another sub-menu item', 'myThirdFunction'))
       .addToUi();
 }
 </pre>
 *
 * @param {String} caption - the label for the menu, with all major words capitalized for a top-level menu,
     or only the first word capitalized for a sub-menu
 *
 * @return {Menu} the new menu builder
 */
Ui.createMenu = function(caption){};

/**
 * Opens an input dialog box in the user's editor with the given message and an "OK" button. This
 method suspends the server-side script while the dialog is open. The script will resume after
 the user dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks will
 not persist across the suspension. For more information, see the <a
 href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Display a dialog box with a message, input field, and an "OK" button. The user can also
 // close the dialog by clicking the close button in its title bar.
 var ui = SpreadsheetApp.getUi();
 var response = ui.prompt('Enter your name:');

 // Process the user's response.
 if (response.getSelectedButton() == ui.Button.OK) {
   Logger.log('The user\'s name is %s.', response.getResponseText());
 } else {
   Logger.log('The user clicked the close button in the dialog\'s title bar.');
 }
 </pre>
 *
 * @param {String} prompt - the message to display in the dialog box
 *
 * @return {PromptResponse} a representation of the user's response
 */
Ui.prompt = function(prompt){};

/**
 * Opens an input dialog box in the user's editor with the given message and set of buttons. This
 method suspends the server-side script while the dialog is open. The script will resume after
 the user dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks will
 not persist across the suspension. For more information, see the <a
 href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Display a dialog box with a message, input field, and "Yes" and "No" buttons. The user can
 // also close the dialog by clicking the close button in its title bar.
 var ui = SpreadsheetApp.getUi();
 var response = ui.prompt('May I know your name?', ui.ButtonSet.YES_NO);

 // Process the user's response.
 if (response.getSelectedButton() == ui.Button.YES) {
   Logger.log('The user\'s name is %s.', response.getResponseText());
 } else if (response.getSelectedButton() == ui.Button.NO) {
   Logger.log('The user didn\'t want to provide a name.');
 } else {
   Logger.log('The user clicked the close button in the dialog\'s title bar.');
 }
 </pre>
 *
 * @param {String} prompt - the message to display in the dialog box
 * @param {ButtonSet} buttons - the button set to display in the dialog box
 *
 * @return {PromptResponse} a representation of the user's response
 */
Ui.prompt = function(prompt, buttons){};

/**
 * Opens a dialog box in the user's editor with custom client-side content. This method does
 <em>not</em> suspend the server-side script while the dialog is open. To communicate with the
 server-side script, the client-side component must make asynchronous callbacks using either the
 <a href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code> or <a
 href="/apps-script/uiapp#ServerHandlers">server handlers</a> for <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-app.html'>UiApp</a></s></code>. To close the dialog programmatically,
 call <a
 href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 app or <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html#close()'>UiInstance.close()</a></s></code> from a <code>UiApp</code> web app. For more information, see the <a href="/apps-script/guides/dialogs">guide to
 dialogs and sidebars</a>.

 <pre class="prettyprint"><code>
 // Display a dialog box with custom HtmlService content.
 var htmlOutput = HtmlService
     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
     .setTitle(&#39;My add-on&#39;)
     .setWidth(250)
     .setHeight(300);
 SpreadsheetApp.getUi().showDialog(htmlOutput);

 // Display a dialog box with custom UiApp content.
 var uiInstance = UiApp.createApplication()
     .setTitle(&#39;My add-on&#39;)
     .setWidth(250)
     .setHeight(300);
 uiInstance.add(uiInstance.createLabel(&#39;The photograph on the dashboard taken years ago...&#39;));
 SpreadsheetApp.getUi().showDialog(uiInstance);
 </code></pre>
 *
 * @param {Object} userInterface - an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app
 *
 * @return void
 */
Ui.showDialog = function(userInterface){};

/**
 * Opens a modal dialog box in the user's editor with custom client-side content. This method does
 <em>not</em> suspend the server-side script while the dialog is open. To communicate with the
 server-side script, the client-side component must make asynchronous callbacks using either the
 <a href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code> or <a
 href="/apps-script/uiapp#ServerHandlers">server handlers</a> for <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-app.html'>UiApp</a></s></code>. To close the dialog programmatically,
 call <a
 href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 app or <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html#close()'>UiInstance.close()</a></s></code> from a <code>UiApp</code> web app. For more information, see the <a href="/apps-script/guides/dialogs">guide to
 dialogs and sidebars</a>.

 <p>Modal dialogs prevent the user from interacting with anything other than the dialog. By
 contrast, <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showModelessDialog(Object,String)'>modeless dialogs</a> and <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showSidebar(Object)'>sidebars</a> let the user interact with the editor. In almost all cases, a
 modal dialog or sidebar is a better choice than a modeless dialog.

 <pre class="prettyprint"><code>
 // Display a modal dialog box with custom HtmlService content.
 var htmlOutput = HtmlService
     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
     .setWidth(250)
     .setHeight(300);
 SpreadsheetApp.getUi().showModalDialog(htmlOutput, &#39;My add-on&#39;);

 // Display a modal dialog box with custom UiApp content.
 var uiInstance = UiApp.createApplication()
     .setWidth(250)
     .setHeight(300);
 uiInstance.add(uiInstance.createLabel(&#39;The photograph on the dashboard taken years ago...&#39;));
 SpreadsheetApp.getUi().showModalDialog(uiInstance, &#39;My add-on&#39;);
 </code></pre>
 *
 * @param {Object} userInterface - an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app
 * @param {String} title - the title of the dialog; overrides any title set by calling <code>setTitle()</code> on
     the <code>userInterface</code> object
 *
 * @return void
 */
Ui.showModalDialog = function(userInterface, title){};

/**
 * Opens a modeless dialog box in the user's editor with custom client-side content. This method
 does <em>not</em> suspend the server-side script while the dialog is open. To communicate with
 the server-side script, the client-side component must make asynchronous callbacks using either
 the <a href="/apps-script/guides/html/communication"><code>google.script</code></a> API for
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code> or <a
 href="/apps-script/uiapp#ServerHandlers">server handlers</a> for <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-app.html'>UiApp</a></s></code>. To close the dialog programmatically,
 call <a
 href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 app or <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html#close()'>UiInstance.close()</a></s></code> from a <code>UiApp</code> web app. For more information, see the <a href="/apps-script/guides/dialogs">guide to
 dialogs and sidebars</a>.

 <p>Modeless dialogs let the user interact with the editor behind the dialog. By contrast,
 <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showModalDialog(Object,String)'>modal dialogs</a> do not. In almost all cases, a modal
 dialog or <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showSidebar(Object)'>sidebar</a> is a better choice than a modeless dialog.

 <pre class="prettyprint"><code>
 // Display a modeless dialog box with custom HtmlService content.
 var htmlOutput = HtmlService
     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
     .setWidth(250)
     .setHeight(300);
 SpreadsheetApp.getUi().showModelessDialog(htmlOutput, &#39;My add-on&#39;);

 // Display a modeless dialog box with custom UiApp content.
 var uiInstance = UiApp.createApplication()
     .setWidth(250)
     .setHeight(300);
 uiInstance.add(uiInstance.createLabel(&#39;The photograph on the dashboard taken years ago...&#39;));
 SpreadsheetApp.getUi().showModelessDialog(uiInstance, &#39;My add-on&#39;);
 </code></pre>
 *
 * @param {Object} userInterface - an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app
 * @param {String} title - the title of the dialog; overrides any title set by calling <code>setTitle()</code> on
     the <code>userInterface</code> object
 *
 * @return void
 */
Ui.showModelessDialog = function(userInterface, title){};

/**
 * Opens a sidebar in the user's editor with custom client-side content. This method does
 <em>not</em> suspend the server-side script while the sidebar is open. To communicate with the
 server-side script, the client-side component must make asynchronous callbacks using either the
 <a href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code> or <a
 href="/apps-script/uiapp#ServerHandlers">server handlers</a> for <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-app.html'>UiApp</a></s></code>. To close the sidebar programmatically,
 call <a
 href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 app or <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html#close()'>UiInstance.close()</a></s></code> from a <code>UiApp</code> web app. For more information, see the <a href="/apps-script/guides/dialogs">guide to
 dialogs and sidebars</a>.

 <p>The sidebar will display on the right side of the editor for users whose environments use a
 left-to-right language and on the left side of the editor for right-to-left languages. All
 sidebars shown by scripts are 300 pixels wide.

 <pre class="prettyprint"><code>
 // Display a sidebar with custom HtmlService content.
 var htmlOutput = HtmlService
     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
     .setTitle(&#39;My add-on&#39;);
 SpreadsheetApp.getUi().showSidebar(htmlOutput);

 // Display a sidebar with custom UiApp content.
 var uiInstance = UiApp.createApplication()
     .setTitle(&#39;My add-on&#39;);
 uiInstance.add(uiInstance.createLabel(&#39;The photograph on the dashboard taken years ago...&#39;));
 SpreadsheetApp.getUi().showSidebar(uiInstance);
 </code></pre>
 *
 * @param {Object} userInterface - an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app
 *
 * @return void
 */
Ui.showSidebar = function(userInterface){};

