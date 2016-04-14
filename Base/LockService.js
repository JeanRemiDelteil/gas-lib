var LockService = {};


/**
 * Gets a lock that prevents any user of the current document from concurrently running a section
 of code. A code section guarded by a document lock can be executed simultaneously by script
 instances running in the context of different documents, but by no more than one execution for
 any given document. Note that the lock is not actually acquired until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>Lock.tryLock(timeoutInMillis)</a></code>
 or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>Lock.waitLock(timeoutInMillis)</a></code> is called.  If this method is called outside of the context of
 a containing document (such as from a standalone script or webapp), <code>null</code> is returned.
 *
 * @return {LockService.Lock} a lock scoped to the script and current document, or <code>null</code> if called from a
 standalone script or webapp
 */
LockService.getDocumentLock = function(){};

/**
 * Gets a lock that prevents any user from concurrently running a section of code. A code section
 guarded by a script lock cannot be executed simultaneously regardless of the identity of the
 user. Note that the lock is not actually acquired until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>Lock.tryLock(timeoutInMillis)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>Lock.waitLock(timeoutInMillis)</a></code> is called.
 *
 * @return {LockService.Lock} a lock scoped to the script
 */
LockService.getScriptLock = function(){};

/**
 * Gets a lock that prevents the current user from concurrently running a section of code. A code
 section guarded by a user lock can be executed simultaneously by different users, but by no
 more than one execution for any given user. The lock is "private" to the user. Note that the
 lock is not actually acquired until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>Lock.tryLock(timeoutInMillis)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>Lock.waitLock(timeoutInMillis)</a></code> is
 called.
 *
 * @return {LockService.Lock} a lock scoped to the script and current user
 */
LockService.getUserLock = function(){};

/** @constructor */
LockService.Lock = function(){};

/**
 * Returns true if the lock was aquired. This method will return false if
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>tryLock(timeoutInMillis)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)'>waitLock(timeoutInMillis)</a></code> were never called, timed out before the lock could be
 retrieved, or if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#releaseLock()'>releaseLock()</a></code> was called.

 <pre class="prettyprint">
 <code>
 var lock = LockService.getScriptLock();
 lock.tryLock(10000);
 if (!lock.hasLock()) {
   Logger.log(&#39;Could not obtain lock after 10 seconds.&#39;);
 }
 </code></pre>
 *
 * @return {Boolean} true if the lock was aquired, false otherwise
 */
LockService.Lock.prototype.hasLock = function(){};

/**
 * Releases the lock, allowing other processes waiting on the lock to continue. The lock is
 automatically released when the script terminates, but for efficiency it is best to release it
 as soon as you no longer need exclusive access to a section of code.

 Note that if you are working with a spreadsheet, you should call SpreadsheetApp.flush() prior
 to releasing the lock, to commit all pending changes to the spreadsheet while you still have
 exclusive access to it.

 <pre class="prettyprint">
 <code>
 var lock = LockService.getScriptLock();
 lock.waitLock(10000);
 // Do some work on a shared resource.
 lock.releaseLock();
 </code></pre>
 *
 * @return void
 */
LockService.Lock.prototype.releaseLock = function(){};

/**
 * Attempts to aquire the lock, timing out after the provided number of milliseconds. This method
 has no effect if the lock has already been aquired.

 <pre class="prettyprint">
 <code>
 var lock = LockService.getScriptLock();
 var success = lock.tryLock(10000);
 if (!success) {
   Logger.log(&#39;Could not obtain lock after 10 seconds.&#39;);
 }
 </code></pre>
 *
 * @param {number} timeoutInMillis - how long to wait to aquire the lock, in milliseconds
 *
 * @return {Boolean} true if the lock was aquired, false otherwise
 */
LockService.Lock.prototype.tryLock = function(timeoutInMillis){};

/**
 * Attempts to aquire the lock, timing out with an exception after the provided number of
 milliseconds. This method is the same as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)'>tryLock(timeoutInMillis)</a></code> except that it throws an exception
 when the lock could not be aquired instead of returning false.

 <pre class="prettyprint">
 <code>
 var lock = LockService.getScriptLock();
 try {
   lock.waitLock(10000);
 } catch (e) {
   Logger.log(&#39;Could not obtain lock after 10 seconds.&#39;);
 }
 </code></pre>
 *
 * @param {number} timeoutInMillis - how long to wait to aquire the lock, in milliseconds
 *
 * @return void
 */
LockService.Lock.prototype.waitLock = function(timeoutInMillis){};

