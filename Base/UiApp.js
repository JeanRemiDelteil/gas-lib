/**********************************************
 * @namespace UiApp
 * @deprecated
 ***********************************************/

/**
 * @class UiApp
 */

/**
 * Create a new UiInstance, which you can use to build a UI.
 * 
 * <p>Use this in the entry point of your app to create a UI. For example:
 * 
 * <pre class="prettyprint"><code>
 * function doGet(e) {
 *   var app = UiApp.createApplication();
 *   // Create a button tied to a server click handler.
 *   app.add(app.createButton(&#39;Click me!&#39;, app.createServerHandler(&#39;onClick&#39;)).setId(&#39;button&#39;));
 *   // Create a button tied to a client click handler.
 *   app.add(app.createButton(&#39;Click me too!&#39;,
 *       app.createClientHandler().forEventSource().setText(&#39;Clicked!&#39;)));
 *   return app; // If you don&#39;t return the UiInstance, the change won&#39;t happen
 * }
 * 
 * function onClick(e) {
 *   var app = UiApp.getActiveApplication();
 *   app.getElementById(&#39;button&#39;).setText(&#39;Clicked!&#39;);
 *   return app;
 * }
 * </code></pre>
 * 
 * <p>Note that you cannot return a new UiInstance in an event handler from an existing
 * UiInstance.
 * 
 * @function UiApp.createApplication
 * @deprecated
 * 
 * @return void a new UiInstance.
 */


/**
 * Gets the active UiInstance.
 * 
 * <p>Use this in the context of an event handler to interact with the existing UI. For example:
 * 
 * <pre class="prettyprint"><code>
 * function doGet(e) {
 *   var app = UiApp.createApplication();
 *   app.add(app.createButton(&#39;Click me!&#39;, app.createServerHandler(&#39;onClick&#39;)).setId(&#39;button&#39;));
 *   return app;
 * }
 * 
 * function onClick(e) {
 *   var app = UiApp.getActiveApplication();
 *   app.getElementById(&#39;button&#39;).setText(&#39;Clicked!&#39;);
 *   return app;  // If you don&#39;t return the UiInstance, the change won&#39;t happen
 * }
 * </code></pre>
 * 
 * @function UiApp.getActiveApplication
 * @deprecated
 * 
 * @return void the active UiInstance.
 */


/**
 * Return the browser user-agent string, so that you can tailor your app as needed.
 * 
 * @function UiApp.getUserAgent
 * @deprecated
 * 
 * @return {String} the user-agent string.
 */



