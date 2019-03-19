/**
 * @class Ui
 */

/**
 * An enum representing predetermined, localized dialog buttons returned by an <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#alert(String)'>alert</a> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/prompt-response.html#getSelectedButton()'>PromptResponse.getSelectedButton()</a></code> to indicate
 * which button in a dialog the user clicked.
 * 
 * @typedef {Button} Ui.Button
 */
/**
 * An enum representing predetermined, localized sets of one or more dialog buttons that can be
 * added to an <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#alert(String,ButtonSet)'>alert</a> or a <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#prompt(String,ButtonSet)'>prompt</a>.
 * 
 * @typedef {ButtonSet} Ui.ButtonSet
 */
/**
 * Opens a dialog box in the user's editor with the given message and an "OK" button. This method
 * suspends the server-side script while the dialog is open. The script resumes after the user
 * dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 * connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks don't
 * persist across the suspension. For more information, see the <a
 * href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display &quot;Hello, world&quot; in a dialog box with an &quot;OK&quot; button. The user can also close the
 * // dialog by clicking the close button in its title bar.
 * SpreadsheetApp.getUi().alert(&#39;Hello, world&#39;);
 * </code></pre>
 * 
 * @function Ui#alert
 * 
 * @param {String} prompt - The message to display in the dialog box.
 * 
 * @return {Button} The button the user clicked.
 */


/**
 * Opens a dialog box in the user's editor with the given message and set of buttons. This method
 * suspends the server-side script while the dialog is open. The script resumes after the user
 * dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 * connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks don't
 * persist across the suspension. For more information, see the <a
 * href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display a dialog box with a message and &quot;Yes&quot; and &quot;No&quot; buttons. The user can also close the
 * // dialog by clicking the close button in its title bar.
 * var ui = SpreadsheetApp.getUi();
 * var response = ui.alert(&#39;Are you sure you want to continue?&#39;, ui.ButtonSet.YES_NO);
 * 
 * // Process the user&#39;s response.
 * if (response == ui.Button.YES) {
 *   Logger.log(&#39;The user clicked &quot;Yes.&quot;&#39;);
 * } else {
 *   Logger.log(&#39;The user clicked &quot;No&quot; or the close button in the dialog\&#39;s title bar.&#39;);
 * }
 * </code></pre>
 * 
 * @function Ui#alert
 * 
 * @param {String} prompt - The message to display in the dialog box.
 * @param {ButtonSet} buttons - The button set to display in the dialog box.
 * 
 * @return {Button} The button the user clicked.
 */


/**
 * Opens a dialog box in the user's editor with the given title, message, and set of buttons. This
 * method suspends the server-side script while the dialog is open. The script resumes after the
 * user dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 * connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks don't
 * persist across the suspension. For more information, see the <a
 * href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display a dialog box with a title, message, and &quot;Yes&quot; and &quot;No&quot; buttons. The user can also
 * // close the dialog by clicking the close button in its title bar.
 * var ui = SpreadsheetApp.getUi();
 * var response = ui.alert(&#39;Confirm&#39;, &#39;Are you sure you want to continue?&#39;, ui.ButtonSet.YES_NO);
 * 
 * // Process the user&#39;s response.
 * if (response == ui.Button.YES) {
 *   Logger.log(&#39;The user clicked &quot;Yes.&quot;&#39;);
 * } else {
 *   Logger.log(&#39;The user clicked &quot;No&quot; or the close button in the dialog\&#39;s title bar.&#39;);
 * }
 * </code></pre>
 * 
 * @function Ui#alert
 * 
 * @param {String} title - The title to display above the dialog box.
 * @param {String} prompt - The message to display in the dialog box.
 * @param {ButtonSet} buttons - The button set to display in the dialog box.
 * 
 * @return {Button} The button the user clicked.
 */


/**
 * Creates a builder that can be used to insert a sub-menu into the editor's Add-on menu. The menu
 * isn't actually be updated until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html#addToUi()'>Menu.addToUi()</a></code> is called. If the script is running as
 * an add-on, the sub-menu name matches the add-on's name in the web store; if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the document directly, the sub-menu name
 * matches the script's name. For more information, see the <a
 * href="/apps-script/guides/menus">guide to menus</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Add an item to the Add-on menu, under a sub-menu whose name is set automatically.
 * function onOpen(e) {
 *   SpreadsheetApp.getUi()
 *       .createAddonMenu()
 *       .addItem(&#39;Show&#39;, &#39;showSidebar&#39;)
 *       .addToUi();
 * }
 * </code></pre>
 * 
 * @function Ui#createAddonMenu
 * 
 * @return {Menu} The new menu builder.
 */


/**
 * Creates a builder that can be used to add a menu to the editor's user interface. The menu isn't
 * actually be added until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html#addToUi()'>Menu.addToUi()</a></code> is called. For more information, see the <a
 * href="/apps-script/guides/menus">guide to menus</a>. The label for a top-level menu should be
 * in headline case (all major words capitalized), although the label for a sub-menu should be in
 * sentence case (only the first word capitalized). If the script is published as an <a
 * href="/gsuite/add-ons/overview">add-on</a>, the <code>caption</code> parameter is ignored and the
 * menu is added as a sub-menu of the Add-ons menu, equivalent to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#createAddonMenu()'>createAddonMenu()</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Add a custom menu to the active document, including a separator and a sub-menu.
 * function onOpen(e) {
 *   SpreadsheetApp.getUi()
 *       .createMenu(&#39;My Menu&#39;)
 *       .addItem(&#39;My menu item&#39;, &#39;myFunction&#39;)
 *       .addSeparator()
 *       .addSubMenu(SpreadsheetApp.getUi().createMenu(&#39;My sub-menu&#39;)
 *           .addItem(&#39;One sub-menu item&#39;, &#39;mySecondFunction&#39;)
 *           .addItem(&#39;Another sub-menu item&#39;, &#39;myThirdFunction&#39;))
 *       .addToUi();
 * }
 * </code></pre>
 * 
 * @function Ui#createMenu
 * 
 * @param {String} caption - The label for the menu, with all major words capitalized for a top-level menu,
 *     or only the first word capitalized for a sub-menu.
 * 
 * @return {Menu} The new menu builder.
 */


/**
 * Opens an input dialog box in the user's editor with the given message and an "OK" button. This
 * method suspends the server-side script while the dialog is open. The script resumes after the
 * user dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 * connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks don't
 * persist across the suspension. For more information, see the <a
 * href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display a dialog box with a message, input field, and an &quot;OK&quot; button. The user can also
 * // close the dialog by clicking the close button in its title bar.
 * var ui = SpreadsheetApp.getUi();
 * var response = ui.prompt(&#39;Enter your name:&#39;);
 * 
 * // Process the user&#39;s response.
 * if (response.getSelectedButton() == ui.Button.OK) {
 *   Logger.log(&#39;The user\&#39;s name is %s.&#39;, response.getResponseText());
 * } else {
 *   Logger.log(&#39;The user clicked the close button in the dialog\&#39;s title bar.&#39;);
 * }
 * </code></pre>
 * 
 * @function Ui#prompt
 * 
 * @param {String} prompt - The message to display in the dialog box.
 * 
 * @return {PromptResponse} A representation of the user's response.
 */


/**
 * Opens an input dialog box in the user's editor with the given message and set of buttons. This
 * method suspends the server-side script while the dialog is open. The script resumes after the
 * user dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code>
 * connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks don't
 * persist across the suspension. For more information, see the <a
 * href="/apps-script/guides/dialogs">guide to dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display a dialog box with a message, input field, and &quot;Yes&quot; and &quot;No&quot; buttons. The user can
 * // also close the dialog by clicking the close button in its title bar.
 * var ui = SpreadsheetApp.getUi();
 * var response = ui.prompt(&#39;May I know your name?&#39;, ui.ButtonSet.YES_NO);
 * 
 * // Process the user&#39;s response.
 * if (response.getSelectedButton() == ui.Button.YES) {
 *   Logger.log(&#39;The user\&#39;s name is %s.&#39;, response.getResponseText());
 * } else if (response.getSelectedButton() == ui.Button.NO) {
 *   Logger.log(&#39;The user didn\&#39;t want to provide a name.&#39;);
 * } else {
 *   Logger.log(&#39;The user clicked the close button in the dialog\&#39;s title bar.&#39;);
 * }
 * </code></pre>
 * 
 * @function Ui#prompt
 * 
 * @param {String} prompt - The message to display in the dialog box.
 * @param {ButtonSet} buttons - The button set to display in the dialog box.
 * 
 * @return {PromptResponse} A representation of the user's response.
 */


/**
 * Opens an input dialog box in the user's editor with the given title, message, and set of
 * buttons. This method suspends the server-side script while the dialog is open. The script
 * resumes after the user dismisses the dialog, but <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html'>Jdbc</a></code> connections and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../lock/lock-service.html'>LockService</a></code> locks don't persist across the
 * suspension. For more information, see the <a href="/apps-script/guides/dialogs">guide to
 * dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display a dialog box with a title, message, input field, and &quot;Yes&quot; and &quot;No&quot; buttons. The
 * // user can also close the dialog by clicking the close button in its title bar.
 * var ui = SpreadsheetApp.getUi();
 * var response = ui.prompt(&#39;Getting to know you&#39;, &#39;May I know your name?&#39;, ui.ButtonSet.YES_NO);
 * 
 * // Process the user&#39;s response.
 * if (response.getSelectedButton() == ui.Button.YES) {
 *   Logger.log(&#39;The user\&#39;s name is %s.&#39;, response.getResponseText());
 * } else if (response.getSelectedButton() == ui.Button.NO) {
 *   Logger.log(&#39;The user didn\&#39;t want to provide a name.&#39;);
 * } else {
 *   Logger.log(&#39;The user clicked the close button in the dialog\&#39;s title bar.&#39;);
 * }
 * </code></pre>
 * 
 * @function Ui#prompt
 * 
 * @param {String} title - The title to display above the dialog box.
 * @param {String} prompt - The message to display in the dialog box.
 * @param {ButtonSet} buttons - The button set to display in the dialog box.
 * 
 * @return {PromptResponse} A representation of the user's response.
 */


/**
 * Opens a dialog box in the user's editor with custom client-side content. This method does
 * <em>not</em> suspend the server-side script while the dialog is open. To communicate with the
 * server-side script, the client-side component must make asynchronous callbacks using the <a
 * href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code>. To close the dialog
 * programmatically, call <a
 * href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 * <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 * app. For more information, see the <a href="/apps-script/guides/dialogs">guide to dialogs and
 * sidebars</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Display a dialog box with custom HtmlService content.
 * var htmlOutput = HtmlService
 *     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
 *     .setTitle(&#39;My add-on&#39;)
 *     .setWidth(250)
 *     .setHeight(300);
 * SpreadsheetApp.getUi().showDialog(htmlOutput);
 * </code></pre>
 * 
 * @function Ui#showDialog
 * @deprecated
 * 
 * @param {Object} userInterface - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
 *     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app.
 * 
 * @return void
 */


/**
 * Opens a modal dialog box in the user's editor with custom client-side content. This method does
 * <em>not</em> suspend the server-side script while the dialog is open. To communicate with the
 * server-side script, the client-side component must make asynchronous callbacks using the <a
 * href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code>. To close the dialog
 * programmatically, call <a
 * href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 * <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 * app. For more information, see the <a href="/apps-script/guides/dialogs">guide to dialogs and
 * sidebars</a>.
 * 
 * <p>Modal dialogs prevent the user from interacting with anything other than the dialog. By
 * contrast, <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showModelessDialog(Object,String)'>modeless dialogs</a> and <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showSidebar(Object)'>sidebars</a> let the user interact with the editor. In almost all cases, a
 * modal dialog or sidebar is a better choice than a modeless dialog.
 * 
 * <pre class="prettyprint"><code>
 * // Display a modal dialog box with custom HtmlService content.
 * var htmlOutput = HtmlService
 *     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
 *     .setWidth(250)
 *     .setHeight(300);
 * SpreadsheetApp.getUi().showModalDialog(htmlOutput, &#39;My add-on&#39;);
 * </code></pre>
 * 
 * @function Ui#showModalDialog
 * 
 * @param {Object} userInterface - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
 *     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app.
 * @param {String} title - The title of the dialog; overrides any title set by calling <code>setTitle()</code> on
 *     the <code>userInterface</code> object.
 * 
 * @return void
 */


/**
 * Opens a modeless dialog box in the user's editor with custom client-side content. This method
 * does <em>not</em> suspend the server-side script while the dialog is open. To communicate with
 * the server-side script, the client-side component must make asynchronous callbacks using the <a
 * href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code>. To close the dialog
 * programmatically, call <a
 * href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 * <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 * app. For more information, see the <a href="/apps-script/guides/dialogs">guide to dialogs and
 * sidebars</a>.
 * 
 * <p>Modeless dialogs let the user interact with the editor behind the dialog. By contrast,
 * <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showModalDialog(Object,String)'>modal dialogs</a> do not. In almost all cases, a modal
 * dialog or <a target='_blank' href='https://developers.google.com/apps-script/reference/base/ui.html#showSidebar(Object)'>sidebar</a> is a better choice than a modeless dialog.
 * 
 * <pre class="prettyprint"><code>
 * // Display a modeless dialog box with custom HtmlService content.
 * var htmlOutput = HtmlService
 *     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
 *     .setWidth(250)
 *     .setHeight(300);
 * SpreadsheetApp.getUi().showModelessDialog(htmlOutput, &#39;My add-on&#39;);
 * </code></pre>
 * 
 * @function Ui#showModelessDialog
 * 
 * @param {Object} userInterface - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
 *     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app.
 * @param {String} title - The title of the dialog; overrides any title set by calling <code>setTitle()</code> on
 *     the <code>userInterface</code> object.
 * 
 * @return void
 */


/**
 * Opens a sidebar in the user's editor with custom client-side content. This method does
 * <em>not</em> suspend the server-side script while the sidebar is open. To communicate with the
 * server-side script, the client-side component must make asynchronous callbacks using the <a
 * href="/apps-script/guides/html/communication"><code>google.script</code></a> API for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-service.html'>HtmlService</a></code>. To close the sidebar
 * programmatically, call <a
 * href="/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface">
 * <code>google.script.host.close()</code></a> on the client side of an <code>HtmlService</code> web
 * app. For more information, see the <a href="/apps-script/guides/dialogs">guide to dialogs and
 * sidebars</a>.
 * 
 * <p>The sidebar displays on the right side of the editor for users whose environments use a
 * left-to-right language and on the left side of the editor for right-to-left languages. All
 * sidebars shown by scripts are 300 pixels wide.
 * 
 * <pre class="prettyprint"><code>
 * // Display a sidebar with custom HtmlService content.
 * var htmlOutput = HtmlService
 *     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
 *     .setTitle(&#39;My add-on&#39;);
 * SpreadsheetApp.getUi().showSidebar(htmlOutput);
 * </code></pre>
 * 
 * @function Ui#showSidebar
 * 
 * @param {Object} userInterface - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../html/html-output.html'>HtmlOutput</a></code> or
 *     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/base/../ui/ui-instance.html'>UiInstance</a></s></code> web app.
 * 
 * @return void
 */



