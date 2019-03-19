/**********************************************
 * @namespace UserProperties
 * @deprecated
 ***********************************************/

/**
 * @class UserProperties
 */

/**
 * Deletes all properties.
 * 
 * <pre class="prettyprint"><code>
 * UserProperties.deleteAllProperties();
 * </code></pre>
 * 
 * @function UserProperties.deleteAllProperties
 * @deprecated
 * 
 * @return {UserProperties} this object, for chaining
 */


/**
 * Deletes the property with the given key.
 * 
 * <pre class="prettyprint"><code>
 * UserProperties.deleteProperty(&#39;special&#39;);
 * </code></pre>
 * 
 * @function UserProperties.deleteProperty
 * @deprecated
 * 
 * @param {String} key - key for property to delete
 * 
 * @return {UserProperties} this object, for chaining
 */


/**
 * Get all of the available keys.
 * 
 * @function UserProperties.getKeys
 * @deprecated
 * 
 * @return {String[]}
 */


/**
 * Get all of the available properties at once.
 * 
 * <p>This gives a copy, not a live view, so changing the properties on the returned object won't
 * update them in storage and vice versa.
 * 
 * <pre class="prettyprint"><code>
 * UserProperties.setProperties({
 *   &quot;cow&quot;     : &quot;moo&quot;,
 *   &quot;sheep&quot;   : &quot;baa&quot;,
 *   &quot;chicken&quot; : &quot;cluck&quot;
 * });
 * 
 * // Logs &quot;A cow goes: moo&quot;
 * Logger.log(&quot;A cow goes: %s&quot;, UserProperties.getProperty(&quot;cow&quot;));
 * 
 * // This makes a copy. Any changes that happen here will not
 * // be written back to properties.
 * var animalSounds = UserProperties.getProperties();
 * 
 * // Logs:
 * // A chicken goes cluck!
 * // A cow goes moo!
 * // A sheep goes baa!
 * for(var kind in animalSounds) {
 *   Logger.log(&quot;A %s goes %s!&quot;, kind, animalSounds[kind]);
 * }
 * </code></pre>
 * 
 * @function UserProperties.getProperties
 * @deprecated
 * 
 * @return {Object} a copy of the properties containing key-value pairs
 */


/**
 * Returns the value associated with the provided key, or null if there is no such value.
 * 
 * <pre class="prettyprint"><code>
 * var specialValue = UserProperties.getProperty(&#39;special&#39;);
 * </code></pre>
 * 
 * @function UserProperties.getProperty
 * @deprecated
 * 
 * @param {String} key - key for the value to retrieve
 * 
 * @return {String} the value associated with the key
 */


/**
 * Bulk-sets all the properties drawn from the given object.
 * 
 * <pre class="prettyprint"><code>
 * UserProperties.setProperties({special: &#39;sauce&#39;, &#39;meaning&#39;: 42});
 * </code></pre>
 * 
 * @function UserProperties.setProperties
 * @deprecated
 * 
 * @param {Object} properties - an object containing the properties to set.
 * 
 * @return {UserProperties} this object, for chaining
 */


/**
 * Bulk-sets all the properties drawn from the given object.
 * 
 * <pre class="prettyprint"><code>
 * // This deletes all other properties
 * UserProperties.setProperties({special: &#39;sauce&#39;, &#39;meaning&#39;: 42}, true);
 * </code></pre>
 * 
 * @function UserProperties.setProperties
 * @deprecated
 * 
 * @param {Object} properties - an object containing the properties to set.
 * @param {Boolean} deleteAllOthers - whether to delete all existing properties.
 * 
 * @return {UserProperties} this object, for chaining
 */


/**
 * Persists the specified in value with the provided key. Any existing value associated with this
 * key will be overwritten.
 * 
 * <pre class="prettyprint"><code>
 * UserProperties.setProperty(&#39;special&#39;, &#39;sauce&#39;);
 * </code></pre>
 * 
 * @function UserProperties.setProperty
 * @deprecated
 * 
 * @param {String} key - key for property
 * @param {String} value - value to associate with the key
 * 
 * @return {UserProperties} this object, for chaining
 */



