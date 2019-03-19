/**********************************************
 * @namespace CacheService
 ***********************************************/

/**
 * @class CacheService
 */

/**
 * Gets the cache instance scoped to the current document and script. Document caches are specific
 * to the current document which contains the script. Use these to store script information that
 * is specific to the current document. If this method is called outside of the context of a
 * containing document (such as from a standalone script or web app), this method returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Gets a cache that is specific to the current document containing the script
 * var cache = CacheService.getDocumentCache();
 * </code></pre>
 * 
 * @function CacheService.getDocumentCache
 * 
 * @return {CacheService.Cache} a document cache instance, or <code>null</code> if there is no containing document
 */


/**
 * Gets the cache instance scoped to the script. Script caches are common to all users of the
 * script. Use these to store information that is not specific to the current user.
 * 
 * <pre class="prettyprint"><code>
 * // Gets a cache that is common to all users of the script
 * var cache = CacheService.getScriptCache();
 * </code></pre>
 * 
 * @function CacheService.getScriptCache
 * 
 * @return {CacheService.Cache} a script cache instance
 */


/**
 * Gets the cache instance scoped to the current user and script. User caches are specific to the
 * current user of the script. Use these to store script information that is specific to the
 * current user.
 * 
 * <pre class="prettyprint"><code>
 * // Gets a cache that is specific to the current user of the script
 * var cache = CacheService.getUserCache();
 * </code></pre>
 * 
 * @function CacheService.getUserCache
 * 
 * @return {CacheService.Cache} a user cache instance
 */



/**
 * @class CacheService.Cache
 */

/**
 * Gets the cached value for the given key, or null if none is found.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the value from the cache for the key &#39;foo&#39;.
 * var value = cache.get(&#39;foo&#39;);
 * </code></pre>
 * 
 * @function CacheService.Cache#get
 * 
 * @param {String} key - the key to look up in the cache
 * 
 * @return {String} the cached value, or null if none was found
 */


/**
 * Returns a JavaScript Object containing all key/value pairs found in the cache for an array of
 * keys.
 * 
 * <pre class="prettyprint"><code>
 * // Gets a set of values from the cache
 * var values = cache.getAll([&#39;foo&#39;, &#39;x&#39;, &#39;missing&#39;]);
 * // If there were values in the cache for &#39;foo&#39; and &#39;x&#39; but not &#39;missing&#39;, then &#39;values&#39; would
 * // be: {&#39;foo&#39;: &#39;somevalue&#39;, &#39;x&#39;: &#39;othervalue&#39;}
 * </code></pre>
 * 
 * @function CacheService.Cache#getAll
 * 
 * @param {String[]} keys - the keys to lookup
 * 
 * @return {Object} a JavaScript Object containing the key/value pairs for all keys found in the cache
 */


/**
 * Adds a key/value pair to the cache.
 * 
 * <p>The maximum length of a key is 250 characters. The maximum amount of data that can be stored
 * per key is 100KB. The value will expire from the cache after 600 seconds (10 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Puts the value &#39;bar&#39; into the cache using the key &#39;foo&#39;
 * cache.put(&#39;foo&#39;, &#39;bar&#39;);
 * </code></pre>
 * 
 * @function CacheService.Cache#put
 * 
 * @param {String} key - the key to store the value under
 * @param {String} value - the value to be cached
 * 
 * @return void
 */


/**
 * Adds a key/value pair to the cache, with an expiration time (in seconds).
 * 
 * <p>The maximum length of a key is 250 characters. The maximum amount of data that can be stored
 * per key is 100KB. The specified expiration time is only a suggestion; cached data may be
 * removed before this time if a lot of data is cached.
 * 
 * <pre class="prettyprint">
 * // Puts the value 'bar' into the cache using the key 'foo', but only for the next 20 seconds.
 * cache.put('foo', 'bar', 20);
 * </pre>
 * 
 * @function CacheService.Cache#put
 * 
 * @param {String} key - the key to store the value under
 * @param {String} value - the value to be cached
 * @param {IntegerNum} expirationInSeconds - the maximum time the value remains in the cache, in seconds. The
 *     minimum is 1 second and the maximum is 21600 seconds (6 hours).
 * 
 * @return void
 */


/**
 * Adds a set of key/value pairs to the cache.
 * 
 * <p>Similar to repeated calls to "put", but more efficient as it only makes one call to the
 * memcache server to set all values. The maximum length of a key is 250 characters. The maximum
 * amount of data that can be stored per key is 100KB. The values will expire from the cache after
 * 600 seconds (10 minutes).
 * 
 * <pre class="prettyprint"><code>
 * // Puts a set of values into the cache with the keys &#39;foo&#39;, &#39;x&#39;, and &#39;key&#39;.
 * var values = {
 *   &#39;foo&#39;: &#39;bar&#39;,
 *   &#39;x&#39;:&#39;y&#39;,
 *   &#39;key&#39;: &#39;value&#39;
 * };
 * cache.putAll(values);
 * </code></pre>
 * 
 * @function CacheService.Cache#putAll
 * 
 * @param {Object} values - a JavaScript Object containing string keys and values
 * 
 * @return void
 */


/**
 * Adds a set of key/value pairs to the cache, with an expiration time (in seconds).
 * 
 * <p>Similar to repeated calls to "put", but more efficient as it only makes one call to the
 * memcache server to set all values. The maximum length of a key is 250 characters. The maximum
 * amount of data that can be stored per key is 100KB. The specified expiration time is only a
 * suggestion; cached data may be removed before this time if a lot of data is cached.
 * 
 * <pre class="prettyprint"><code>
 * // Puts a set of values into the cache with the keys &#39;foo&#39;, &#39;x&#39;, and &#39;key&#39;.
 * var values = {
 *   &#39;foo&#39;: &#39;bar&#39;,
 *   &#39;x&#39;:&#39;y&#39;,
 *   &#39;key&#39;: &#39;value&#39;
 * };
 * cache.putAll(values, 20);
 * </code></pre>
 * 
 * @function CacheService.Cache#putAll
 * 
 * @param {Object} values - A JavaScript Object containing string keys and values
 * @param {IntegerNum} expirationInSeconds - The maximum time the value remains in the cache, in seconds The
 *     minimum allowed expiration is 1 second, and the maximum allowed expiration is 21600 seconds
 *     (6 hours). The default expiration is 600 seconds (10 minutes).
 * 
 * @return void
 */


/**
 * Removes an entry from the cache using the given key.
 * 
 * <pre class="prettyprint"><code>
 * // Removes any cache entries for &#39;foo&#39;
 * cache.remove(&#39;foo&#39;);
 * </code></pre>
 * 
 * @function CacheService.Cache#remove
 * 
 * @param {String} key - the key to remove from the cache
 * 
 * @return void
 */


/**
 * Removes a set of entries from the cache.
 * 
 * <pre class="prettyprint">
 * // Removes entries from the cache with keys 'foo' and 'x'
 * cache.removeAll(['foo', 'x']);
 * </pre>
 * 
 * @function CacheService.Cache#removeAll
 * 
 * @param {String[]} keys - the array of keys to remove
 * 
 * @return void
 */



