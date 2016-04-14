var CacheService = {};


/**
 * Gets the cache instance scoped to the current document and script. Document caches are specific
 to the current document which contains the script. Use these to store script information that
 is specific to the current document. If this method is called outside of the context of a
 containing document (such as from a standalone script or web app), this method returns
 <code>null</code>.

 <pre class="prettyprint">
 <code>
 // Gets a cache that is specific to the current document containing the script
 var cache = CacheService.getDocumentCache();
 </code></pre>
 *
 * @return {CacheService.Cache} a document cache instance, or <code>null</code> if there is no containing document
 */
CacheService.getDocumentCache = function(){};

/**
 * Gets the cache instance scoped to the script.  Script caches are common to all users of the
 script. Use these to store information that is not specific to the current user.

 <pre class="prettyprint">
 <code>
 // Gets a cache that is common to all users of the script
 var cache = CacheService.getScriptCache();
 </code></pre>
 *
 * @return {CacheService.Cache} a script cache instance
 */
CacheService.getScriptCache = function(){};

/**
 * Gets the cache instance scoped to the current user and script. User caches are specific to
 the current user of the script. Use these to store script information that is specific to the
 current user.

 <pre class="prettyprint">
 <code>
 // Gets a cache that is specific to the current user of the script
 var cache = CacheService.getUserCache();
 </code></pre>
 *
 * @return {CacheService.Cache} a user cache instance
 */
CacheService.getUserCache = function(){};

/** @constructor */
CacheService.Cache = function(){};

/**
 * Gets the cached value for the given key, or null if none is found.

 <pre class="prettyprint">
 <code>
 // Gets the value from the cache for the key &#39;foo&#39;.
 var value = cache.get(&#39;foo&#39;);
 </code></pre>
 *
 * @param {String} key - the key to look up in the cache
 *
 * @return {String} the cached value, or null if none was found
 */
CacheService.Cache.prototype.get = function(key){};

/**
 * Returns a JavaScript Object containing all key/value pairs found in the cache for an array of
 keys.

 <pre class="prettyprint">
 <code>
 // Gets a set of values from the cache
 var values = cache.getAll([&#39;foo&#39;, &#39;x&#39;, &#39;missing&#39;]);
 // If there were values in the cache for &#39;foo&#39; and &#39;x&#39; but not &#39;missing&#39;, then &#39;values&#39; would
 // be: {&#39;foo&#39;: &#39;somevalue&#39;, &#39;x&#39;: &#39;othervalue&#39;}
 </code></pre>
 *
 * @param {String[]} keys - the keys to lookup
 *
 * @return {Object} a JavaScript Object containing the key/value pairs for all keys found in the cache
 */
CacheService.Cache.prototype.getAll = function(keys){};

/**
 * Adds a key/value pair to the cache, with an expiration time (in seconds).

 The maximum length of a key is 250 characters.
 The maximum amount of data that can be stored per key is 100KB.

 <pre class="prettyprint">
 // Puts the value 'bar' into the cache using the key 'foo', but only for the next 20 seconds.
 cache.put('foo', 'bar', 20);
 </pre>
 *
 * @param {String} key - the key to store the value under
 * @param {String} value - the value to be cached
 * @param {number} expirationInSeconds - the maximum time the value will remain in the cache, in seconds.
   The minimum is 1 second and the maximum is 21600 seconds (6 hours).
 *
 * @return void
 */
CacheService.Cache.prototype.put = function(key, value, expirationInSeconds){};

/**
 * Adds a set of key/value pairs to the cache, with an expiration time (in seconds).

 Similar to repeated calls to "put", but more efficient as it only makes one call to the
 memcache server to set all values. The maximum length of a key is 250 characters.
 The maximum amount of data that can be stored per key is 100KB.

 <pre class="prettyprint">
 <code>
 // Puts a set of values into the cache with the keys &#39;foo&#39;, &#39;x&#39;, and &#39;key&#39;.
 var values = {
   &#39;foo&#39;: &#39;bar&#39;,
   &#39;x&#39;:&#39;y&#39;,
   &#39;key&#39;: &#39;value&#39;
 };
 cache.putAll(values, 20);
 </code></pre>
 *
 * @param {Object} values - A JavaScript Object containing string keys and values
 * @param {number} expirationInSeconds - The maximum time the value will remain in the cache, in seconds
   The minimum allowed expiration is 1 second, and the maximum allowed expiration is 21600
   seconds (6 hours). The default expiration is 600 seconds (10 minutes).
 *
 * @return void
 */
CacheService.Cache.prototype.putAll = function(values, expirationInSeconds){};

/**
 * Removes an entry from the cache using the given key.

 <pre class="prettyprint">
 <code>
 // Removes any cache entries for &#39;foo&#39;
 cache.remove(&#39;foo&#39;);
 </code></pre>
 *
 * @param {String} key - the key to remove from the cache
 *
 * @return void
 */
CacheService.Cache.prototype.remove = function(key){};

/**
 * Removes a set of entries from the cache.

 <pre class="prettyprint">
 // Removes entries from the cache with keys 'foo' and 'x'
 cache.removeAll(['foo', 'x']);
 </pre>
 *
 * @param {String[]} keys - the array of keys to remove
 *
 * @return void
 */
CacheService.Cache.prototype.removeAll = function(keys){};

