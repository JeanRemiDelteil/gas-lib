var ScriptProperties = {};


/**
 * Deletes all properties.

 <pre class="prettyprint"><code>
 ScriptProperties.deleteAllProperties();
 </code></pre>
 *
 * @return {ScriptProperties} this object, for chaining
 */
ScriptProperties.deleteAllProperties = function(){};

/**
 * Deletes the property with the given key.

 <pre class="prettyprint"><code>
 ScriptProperties.deleteProperty(&#39;special&#39;);
 </code></pre>
 *
 * @param {String} key - key for property to delete
 *
 * @return {ScriptProperties} this object, for chaining
 */
ScriptProperties.deleteProperty = function(key){};

/**
 * Get all of the available keys.
 *
 * @return {String[]}
 */
ScriptProperties.getKeys = function(){};

/**
 * Get all of the available properties at once.

 <p>This gives a copy, not a live view, so changing the properties on the returned object won't
 update them in storage and vice versa.

 <pre class="prettyprint"><code>
 ScriptProperties.setProperties({
   &quot;cow&quot;     : &quot;moo&quot;,
   &quot;sheep&quot;   : &quot;baa&quot;,
   &quot;chicken&quot; : &quot;cluck&quot;
 });

 // Logs &quot;A cow goes: moo&quot;
 Logger.log(&quot;A cow goes: %s&quot;, ScriptProperties.getProperty(&quot;cow&quot;));

 // This makes a copy. Any changes that happen here will not
 // be written back to properties.
 var animalSounds = ScriptProperties.getProperties();

 // Logs:
 // A chicken goes cluck!
 // A cow goes moo!
 // A sheep goes baa!
 for(var kind in animalSounds) {
   Logger.log(&quot;A %s goes %s!&quot;, kind, animalSounds[kind]);
 }
 </code></pre>
 *
 * @return {Object} a copy of the properties containing key-value pairs
 */
ScriptProperties.getProperties = function(){};

/**
 * Returns the value associated with the provided key, or null if there is no such value.

 <pre class="prettyprint"><code>
 var specialValue = ScriptProperties.getProperty(&#39;special&#39;);
 </code></pre>
 *
 * @param {String} key - key for the value to retrieve
 *
 * @return {String} the value associated with the key
 */
ScriptProperties.getProperty = function(key){};

/**
 * Bulk-sets all the properties drawn from the given object.

 <pre class="prettyprint"><code>
 ScriptProperties.setProperties({special: &#39;sauce&#39;, &#39;meaning&#39;: 42});
 </code></pre>
 *
 * @param {Object} properties - an object containing the properties to set.
 *
 * @return {ScriptProperties} this object, for chaining
 */
ScriptProperties.setProperties = function(properties){};

/**
 * Bulk-sets all the properties drawn from the given object.

 <pre class="prettyprint"><code>
 // This deletes all other properties
 ScriptProperties.setProperties({special: &#39;sauce&#39;, &#39;meaning&#39;: 42}, true);
 </code></pre>
 *
 * @param {Object} properties - an object containing the properties to set.
 * @param {Boolean} deleteAllOthers - whether to delete all existing properties.
 *
 * @return {ScriptProperties} this object, for chaining
 */
ScriptProperties.setProperties = function(properties, deleteAllOthers){};

/**
 * Persists the specified in value with the provided key. Any existing value associated with this
 key will be overwritten.

 <pre class="prettyprint"><code>
 ScriptProperties.setProperty(&#39;special&#39;, &#39;sauce&#39;);
 </code></pre>
 *
 * @param {String} key - key for property
 * @param {String} value - value to associate with the key
 *
 * @return {ScriptProperties} this object, for chaining
 */
ScriptProperties.setProperty = function(key, value){};

