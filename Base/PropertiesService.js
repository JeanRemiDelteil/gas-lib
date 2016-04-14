var PropertiesService = {};


/**
 * Gets a property store that all users can access within the current document, if the script is
 published as an add-on. If the script is not
 <a href="https://developers.google.com/apps-script/scripts_containers">bound</a> to a Google
 Apps file, this method returns <code>null</code>.
 *
 * @return {PropertiesService.Properties} a property store that all users of the current document can access, or <code>null</code> if
     the script is not bound to a Google Apps file
 */
PropertiesService.getDocumentProperties = function(){};

/**
 * Gets a property store that all users can access, but only within this script.
 *
 * @return {PropertiesService.Properties} a property store that all users of the script can access
 */
PropertiesService.getScriptProperties = function(){};

/**
 * Gets a property store that only the current user can access, and only within this script.
 *
 * @return {PropertiesService.Properties} a property store that only the current user of the script can access
 */
PropertiesService.getUserProperties = function(){};

/** @constructor */
PropertiesService.Properties = function(){};

/**
 * Deletes all properties in the current <code>Properties</code> store.

 <pre class="prettyprint">
 <code>
 // Deletes all user properties.
 var userProperties = PropertiesService.getUserProperties();
 userProperties.deleteAllProperties();
 </code></pre>
 *
 * @return {PropertiesService.Properties} this <code>Properties</code> store, for chaining
 */
PropertiesService.Properties.prototype.deleteAllProperties = function(){};

/**
 * Deletes the property with the given key in the current <code>Properties</code> store.

 <pre class="prettyprint">
 <code>
 // Deletes the user property &#39;nickname&#39;.
 var userProperties = PropertiesService.getUserProperties();
 userProperties.deleteProperty(&#39;nickname&#39;);
 </code></pre>
 *
 * @param {String} key - the key for the property to delete
 *
 * @return {PropertiesService.Properties} this <code>Properties</code> store, for chaining
 */
PropertiesService.Properties.prototype.deleteProperty = function(key){};

/**
 * Gets all keys in the current <code>Properties</code> store.

 <pre class="prettyprint">
 <code>
 // Sets several properties, then logs the value of each key.
 var scriptProperties = PropertiesService.getScriptProperties();
 scriptProperties.setProperties({
   &#39;cow&#39;: &#39;moo&#39;,
   &#39;sheep&#39;: &#39;baa&#39;,
   &#39;chicken&#39;: &#39;cluck&#39;
 });
 var keys = scriptProperties.getKeys();
 Logger.log(&#39;Animals known:&#39;);
 for (var i = 0; i &lt; keys.length; i++) {
   Logger.log(keys[i]);
 }
 </code></pre>
 *
 * @return {String[]} an array of all keys in the current <code>Properties</code> store
 */
PropertiesService.Properties.prototype.getKeys = function(){};

/**
 * Gets a copy of all key-value pairs in the current <code>Properties</code> store. Note that the
 returned object is not a live view of the store. Consequently, changing the properties on the
 returned object will not automatically update them in storage, or vice versa.

 <pre class="prettyprint">
 <code>
 // Sets several script properties, then retrieves them and logs them.
 var scriptProperties = PropertiesService.getScriptProperties();
 scriptProperties.setProperties({
   &#39;cow&#39;: &#39;moo&#39;,
   &#39;sheep&#39;: &#39;baa&#39;,
   &#39;chicken&#39;: &#39;cluck&#39;
 });

 var animalSounds = scriptProperties.getProperties();

 // Logs:
 // A chicken goes cluck!
 // A cow goes moo!
 // A sheep goes baa!
 for (var kind in animalSounds) {
   Logger.log(&#39;A %s goes %s!&#39;, kind, animalSounds[kind]);
 }
 </code></pre>
 *
 * @return {Object} a copy of all key-value pairs in the current <code>Properties</code> store
 */
PropertiesService.Properties.prototype.getProperties = function(){};

/**
 * Gets the value associated with the given key in the current <code>Properties</code> store, or
 <code>null</code> if no such key exists.

 <pre class="prettyprint">
 <code>
 // Gets the user property &#39;nickname&#39;.
 var userProperties = PropertiesService.getUserProperties();
 var nickname = userProperties.getProperty(&#39;nickname&#39;);
 Logger.log(nickname);
 </code></pre>
 *
 * @param {String} key - the key for the property value to retrieve
 *
 * @return {String} the value associated with the given key in the current <code>Properties</code> store
 */
PropertiesService.Properties.prototype.getProperty = function(key){};

/**
 * Sets all key-value pairs from the given object in the current <code>Properties</code> store,
 optionally deleting all other properties in the store.

 <pre class="prettyprint">
 <code>
 // Sets multiple user properties at once while deleting all other user properties.
 var userProperties = PropertiesService.getUserProperties();
 var newProperties = {nickname: &#39;Bob&#39;, region: &#39;US&#39;, language: &#39;EN&#39;};
 userProperties.setProperties(newProperties, true);
 </code></pre>
 *
 * @param {Object} properties - an object containing key-values pairs to set
 * @param {Boolean} deleteAllOthers - <code>true</code> to delete all other key-value pairs in the properties
     object; <code>false</code> to not
 *
 * @return {PropertiesService.Properties} this <code>Properties</code> store, for chaining
 */
PropertiesService.Properties.prototype.setProperties = function(properties, deleteAllOthers){};

/**
 * Sets the given key-value pair in the current <code>Properties</code> store.

 <pre class="prettyprint">
 <code>
 // Sets the user property &#39;nickname&#39; to &#39;Bobby&#39;.
 var userProperties = PropertiesService.getUserProperties();
 userProperties.setProperty(&#39;nickname&#39;, &#39;Bobby&#39;);
 </code></pre>
 *
 * @param {String} key - the key for the property
 * @param {String} value - the value to associate with the key
 *
 * @return {PropertiesService.Properties} this <code>Properties</code> store, for chaining
 */
PropertiesService.Properties.prototype.setProperty = function(key, value){};

