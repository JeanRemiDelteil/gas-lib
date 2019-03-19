/**********************************************
 * @namespace LockService
 ***********************************************/

/**
 * @class LockService
 */

/**
 * Gets a lock that prevents any user of the current document from concurrently running a section
 * of code. A code section guarded by a document lock can be executed simultaneously by script
 * instances running in the context of different documents, but by no more than one execution for
 * any given document. Note that the lock is not actually acquired until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>Lock.tryLock(timeoutInMillis)</a></code>
 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>Lock.waitLock(timeoutInMillis)</a></code> is called. If this method is called outside of the context of a
 * containing document (such as from a standalone script or webapp), <code>null</code> is returned.
 * 
 * @function LockService.getDocumentLock
 * 
 * @return {LockService.Lock} a lock scoped to the script and current document, or <code>null</code> if called from a
 *     standalone script or webapp
 */


/**
 * Gets a lock that prevents any user from concurrently running a section of code. A code section
 * guarded by a script lock cannot be executed simultaneously regardless of the identity of the
 * user. Note that the lock is not actually acquired until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>Lock.tryLock(timeoutInMillis)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>Lock.waitLock(timeoutInMillis)</a></code> is called.
 * 
 * @function LockService.getScriptLock
 * 
 * @return {LockService.Lock} a lock scoped to the script
 */


/**
 * Gets a lock that prevents the current user from concurrently running a section of code. A code
 * section guarded by a user lock can be executed simultaneously by different users, but by no
 * more than one execution for any given user. The lock is "private" to the user. Note that the
 * lock is not actually acquired until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>Lock.tryLock(timeoutInMillis)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>Lock.waitLock(timeoutInMillis)</a></code> is
 * called.
 * 
 * @function LockService.getUserLock
 * 
 * @return {LockService.Lock} a lock scoped to the script and current user
 */



/**
 * @class LockService.Lock
 */

/**
 * Returns true if the lock was acquired. This method will return false if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>tryLock(timeoutInMillis)</a></code> or
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>waitLock(timeoutInMillis)</a></code> were never called, timed out before the lock could be retrieved, or if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#releaseLock()'>releaseLock()</a></code> was called.
 * 
 * <pre class="prettyprint"><code>
 * var lock = LockService.getScriptLock();
 * lock.tryLock(10000);
 * if (!lock.hasLock()) {
 *   Logger.log(&#39;Could not obtain lock after 10 seconds.&#39;);
 * }
 * </code></pre>
 * 
 * @function LockService.Lock#hasLock
 * 
 * @return {Boolean} true if the lock was acquired, false otherwise
 */


/**
 * Releases the lock, allowing other processes waiting on the lock to continue. The lock is
 * automatically released when the script terminates, but for efficiency it is best to release it
 * as soon as you no longer need exclusive access to a section of code. This method has no effect
 * if the lock has not been acquired.
 * 
 * <p>Note that if you are working with a spreadsheet, you should call SpreadsheetApp.flush()
 * prior to releasing the lock, to commit all pending changes to the spreadsheet while you still
 * have exclusive access to it.
 * 
 * <pre class="prettyprint"><code>
 * var lock = LockService.getScriptLock();
 * lock.waitLock(10000);
 * // Do some work on a shared resource.
 * lock.releaseLock();
 * </code></pre>
 * 
 * @function LockService.Lock#releaseLock
 * 
 * @return void
 */


/**
 * Attempts to acquire the lock, timing out after the provided number of milliseconds. This method
 * has no effect if the lock has already been acquired.
 * 
 * <pre class="prettyprint"><code>
 * var lock = LockService.getScriptLock();
 * var success = lock.tryLock(10000);
 * if (!success) {
 *   Logger.log(&#39;Could not obtain lock after 10 seconds.&#39;);
 * }
 * </code></pre>
 * 
 * @function LockService.Lock#tryLock
 * 
 * @param {IntegerNum} timeoutInMillis - how long to wait to acquire the lock, in milliseconds
 * 
 * @return {Boolean} true if the lock was acquired, false otherwise
 */


/**
 * Attempts to acquire the lock, timing out with an exception after the provided number of
 * milliseconds. This method is the same as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>tryLock(timeoutInMillis)</a></code> except that it throws an exception
 * when the lock could not be acquired instead of returning false.
 * 
 * <pre class="prettyprint"><code>
 * var lock = LockService.getScriptLock();
 * try {
 *   lock.waitLock(10000);
 * } catch (e) {
 *   Logger.log(&#39;Could not obtain lock after 10 seconds.&#39;);
 * }
 * </code></pre>
 * 
 * @function LockService.Lock#waitLock
 * 
 * @param {IntegerNum} timeoutInMillis - how long to wait to acquire the lock, in milliseconds
 * 
 * @return void
 */



