var GmailApp = {};


/**
 * Create a new user label of the given name.

 <pre class="prettyprint">
 <code>
 // creates the label @FOO and logs label: FOO
 Logger.log(&quot;label: &quot; + GmailApp.createLabel(&quot;FOO&quot;));
 </code></pre>
 *
 * @param {String} name - the name of the new label
 *
 * @return {GmailApp.GmailLabel} the newly created label
 */
GmailApp.createLabel = function(name){};

/**
 * Deletes the specified label.

 <pre class="prettyprint">
 <code>
 // have to get the label by name first
 var label = GmailApp.getUserLabelByName(&quot;FOO&quot;);
 GmailApp.deleteLabel(label);
 </code></pre>
 *
 * @param {GmailApp.GmailLabel} label - the label to delete
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.deleteLabel = function(label){};

/**
 * Gets a list of the emails that are set up as aliases for this account in Gmail.

 <p>You can send a message from any of these aliases by using the "from" optional argument.
 <pre class="prettyprint">
 // Log the aliases for this Gmail account and send an email as the first one.
 var me = Session.getActiveUser().getEmail();
 var aliases = GmailApp.getAliases();
 Logger.log(aliases);
 if (aliases.length > 0) {
   GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {'from': aliases[0]});
 } else {
   GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
 }
 </pre>
 *
 * @return {String[]} an array of aliases for this account
 */
GmailApp.getAliases = function(){};

/**
 * Retrieves all chat threads irrespective of labels.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 var threads = GmailApp.getChatThreads();
 Logger.log(&quot;# of chat threads: &quot; + threads.length);
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of chat Gmail threads
 */
GmailApp.getChatThreads = function(){};

/**
 * Retrieves all draft messages.

 <pre class="prettyprint">
 <code>
 // Logs the number of draft messages
 var drafts = GmailApp.getDraftMessages();
 Logger.log(drafts.length);
 </code></pre>
 *
 * @return {GmailApp.GmailMessage[]} an array of draft Gmail messages
 */
GmailApp.getDraftMessages = function(){};

/**
 * Retrieves all Inbox threads irrespective of labels.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 // Log the subject lines of your Inbox
 var threads = GmailApp.getInboxThreads();
 for (var i = 0; i &lt; threads.length; i++) {
   Logger.log(threads[i].getFirstMessageSubject());
 }
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the Inbox
 */
GmailApp.getInboxThreads = function(){};

/**
 * Gets the number of unread threads in the inbox.

 <pre class="prettyprint">
 <code>
 Logger.log(&quot;Messages unread in inbox: &quot; + GmailApp.getInboxUnreadCount());
 </code></pre>
 *
 * @return {number} the number of threads in the inbox that have unread messages
 */
GmailApp.getInboxUnreadCount = function(){};

/**
 * Gets a message by id.

 <p>Use this in conjunction with getId() on Gmail messages.
 <pre class="prettyprint">
 <code>
 // get the first message in the first thread of your inbox
 var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
 // get its id
 var messageId = message.getId();
 // now fetch the same message by that id
 var messageById = GmailApp.getMessageById(messageId);
 // should always log true as they should be the same message
 Logger.log(message.getSubject() == messageById.getSubject());
 </code></pre>
 *
 * @param {String} id - the id of the message to retrieve
 *
 * @return {GmailApp.GmailMessage} the message with the given id or null if not found
 */
GmailApp.getMessageById = function(id){};

/**
 * Retrieve all messages in the specified thread.

 <pre class="prettyprint">
 <code>
 // Log all the subject lines in the first thread of your inbox
 var thread = GmailApp.getInboxThreads(0, 1)[0];
 var messages = GmailApp.getMessagesForThread(thread);
 for (var i = 0 ; i &lt; messages.length; i++) {
   Logger.log(&quot;subject: &quot; + messages[i].getSubject());
 }
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread of messages to retrieve
 *
 * @return {GmailApp.GmailMessage[]} array of messages corresponding to this thread
 */
GmailApp.getMessagesForThread = function(thread){};

/**
 * Retrieve all messages in the specified threads.

 <pre class="prettyprint">
 <code>
 // Log the subject lines of all messages in the first two threads of your inbox
 var thread = GmailApp.getInboxThreads(0, 2);
 var messages = GmailApp.getMessagesForThreads(thread);
 for (var i = 0 ; i &lt; messages.length; i++) {
   for (var j = 0; j &lt; messages[i].length; j++) {
     Logger.log(&quot;subject: &quot; + messages[i][j].getSubject());
   }
 }
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - the threads of messages to retrieve
 *
 * @return {GmailApp.GmailMessage[][]} an array of arrays of messages, where each item in the outer array corresponds to a
     thread and the inner array contains the messages in that thread
 */
GmailApp.getMessagesForThreads = function(threads){};

/**
 * Retrieves all Priority Inbox threads irrespective of labels.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 Logger.log(&quot;# of messages in your Priority Inbox: &quot; +
            GmailApp.getPriorityInboxThreads().length);
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the Priority Inbox
 */
GmailApp.getPriorityInboxThreads = function(){};

/**
 * Gets the number of unread threads in the Priority Inbox.

 <pre class="prettyprint">
 <code>
 Logger.log(&quot;Number of unread emails in your Priority Inbox : &quot; +
            GmailApp.getPriorityInboxUnreadCount());
 </code></pre>
 *
 * @return {number} the number of threads in the Priority Inbox that have unread messages
 */
GmailApp.getPriorityInboxUnreadCount = function(){};

/**
 * Retrieves all spam threads irrespective of labels.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 Logger.log(&quot;# of total spam threads: &quot; + GmailApp.getSpamThreads().length);
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the spam folder
 */
GmailApp.getSpamThreads = function(){};

/**
 * Gets the number of unread threads that are spam.

 <pre class="prettyprint">
 <code>
 // Unless you actually read stuff in your spam folder, this should be the same as
 // the number of messages in your spam folder.
 Logger.log(&quot;# unread threads that are spam: &quot; + GmailApp.getSpamUnreadCount());
 </code></pre>
 *
 * @return {number} the number spam threads that have unread messages
 */
GmailApp.getSpamUnreadCount = function(){};

/**
 * Retrieves all starred threads irrespective of labels.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call,
 and specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 // logs the number of starred threads
 Logger.log(&quot;# Starred threads: &quot; + GmailApp.getStarredThreads().length);
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of starred Gmail threads
 */
GmailApp.getStarredThreads = function(){};

/**
 * Gets the number of unread threads that are starred.

 <pre class="prettyprint">
 <code>
 Logger.log(&quot;# unread and starred: &quot; + GmailApp.getStarredUnreadCount());
 </code></pre>
 *
 * @return {number} the number of starred threads that have unread messages
 */
GmailApp.getStarredUnreadCount = function(){};

/**
 * Gets a thread by id.

 <p>Use this in conjunction with getId() on Gmail threads.
 <pre class="prettyprint">
 <code>
 // thread ids can also be found in the location bar when you have a thread open in Gmail
 // get first inbox thread
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 // get the same thread by id
 var threadById = GmailApp.getThreadById(firstThread.getId());
 // verify they are the same
 Logger.log(firstThread.getFirstMessageSubject() == threadById.getFirstMessageSubject());
 </code></pre>
 *
 * @param {String} id - the id of the thread to retrieve
 *
 * @return {GmailApp.GmailThread} the thread with the given id or null if not found
 */
GmailApp.getThreadById = function(id){};

/**
 * Retrieves all trash threads irrespective of labels.

 <p> This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call,
 and specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 Logger.log(&quot;# of total trash threads: &quot; + GmailApp.getTrashThreads().length);
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the trash
 */
GmailApp.getTrashThreads = function(){};

/**
 * Retrieves a label given the label name.

 <pre class="prettyprint">
 <code>
 var labelObject = GmailApp.getUserLabelByName(&quot;myLabel&quot;);
 </code></pre>
 *
 * @param {String} name - the name of the label to retrieve
 *
 * @return {GmailApp.GmailLabel} the Gmail label with the given name
 */
GmailApp.getUserLabelByName = function(name){};

/**
 * Retrieves a list of user-created labels.

 <pre class="prettyprint">
 <code>
 // logs all of the names of your labels
 var labels = GmailApp.getUserLabels();
 for (var i = 0; i &lt; labels.length; i++) {
   Logger.log(&quot;label: &quot; + labels[i].getName());
 }
 </code></pre>
 *
 * @return {GmailApp.GmailLabel[]} array of user created labels
 */
GmailApp.getUserLabels = function(){};

/**
 * Marks this message read and forces the message to refresh.

 <pre class="prettyprint">
 <code>
 // mark the first message in the first thread of your inbox as read
 var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
 GmailApp.markMessageRead(message);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage} message - the message to mark as read
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markMessageRead = function(message){};

/**
 * Marks this message unread and forces the message to refresh.

 <pre class="prettyprint">
 <code>
 // mark the first message in the first thread of your inbox as unread
 var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
 GmailApp.markMessageUnread(message);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage} message - the message to mark as unread
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markMessageUnread = function(message){};

/**
 * Marks these messages read and forces the messages to refresh.

 <pre class="prettyprint">
 <code>
 // mark first three messages in the first inbox thread as read
 // assumes that the first inbox thread has 3 messages in it
 var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
 var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
 GmailApp.markMessagesRead(thread.getMessages());
 </code></pre>
 *
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to mark as read
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markMessagesRead = function(messages){};

/**
 * Marks these messages unread and forces the messages to refresh.

 <pre class="prettyprint">
 <code>
 // mark first three messages in the first inbox thread as unread
 // assumes that the first inbox thread has 3 messages in it
 var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
 var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
 GmailApp.markMessagesUnread(thread.getMessages());
 </code></pre>
 *
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to mark as unread
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markMessagesUnread = function(messages){};

/**
 * Marks this thread as important and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // marks first inbox thread as important
 var thread = GmailApp.getInboxThreads(0, 1)[0];
 GmailApp.markThreadImportant(thread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to mark as important
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadImportant = function(thread){};

/**
 * Marks this thread as read and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // marks first inbox thread as read
 var thread = GmailApp.getInboxThreads(0, 1)[0];
 GmailApp.markThreadRead(thread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to mark as read
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadRead = function(thread){};

/**
 * Marks this thread as unimportant and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // marks first inbox thread as unimportant
 var thread = GmailApp.getInboxThreads(0, 1)[0];
 GmailApp.markThreadUnimportant(thread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to mark as unimportant
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadUnimportant = function(thread){};

/**
 * Marks this thread unread and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // marks first inbox thread as unread
 var thread = GmailApp.getInboxThreads(0, 1)[0];
 GmailApp.markThreadUnread(thread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to mark as unread
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadUnread = function(thread){};

/**
 * Marks these threads as important and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // Marks first two threads in inbox as important
 var threads = GmailApp.getInboxThreads(0, 2);
 GmailApp.markThreadsImportant(threads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as important
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadsImportant = function(threads){};

/**
 * Marks these threads as read and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // Marks first two threads in inbox as read
 var threads = GmailApp.getInboxThreads(0, 2);
 GmailApp.markThreadsRead(threads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as read
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadsRead = function(threads){};

/**
 * Marks these threads as unimportant and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // Marks first two threads in inbox as unimportant
 var threads = GmailApp.getInboxThreads(0, 2);
 GmailApp.markThreadsUnimportant(threads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as unimportant
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadsUnimportant = function(threads){};

/**
 * Marks these threads as unread and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // Marks first two threads in inbox as unread
 var threads = GmailApp.getInboxThreads(0, 2);
 GmailApp.markThreadsUnread(threads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as unread
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.markThreadsUnread = function(threads){};

/**
 * Moves the message to the trash and forces the message to refresh.

 <pre class="prettyprint">
 <code>
 // move the first message in your inbox to trash
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var firstMessage = firstThread.getMessages()[0];
 GmailApp.moveMessageToTrash(firstMessage);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage} message - the message to be trashed
 *
 * @return {GmailApp} the Gmail service (useful for chaining)
 */
GmailApp.moveMessageToTrash = function(message){};

/**
 * Moves the specified messages to the trash and forces the messages to refresh.

 <pre class="prettyprint">
 <code>
 // move first two messages in your inbox to trash
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var messages = firstThread.getMessages();
 var toDelete = [messages[0], messages[1]];
 GmailApp.moveMessagesToTrash(toDelete);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage[]} messages - the messages to be trashed
 *
 * @return {GmailApp} the Gmail service (useful for chaining)
 */
GmailApp.moveMessagesToTrash = function(messages){};

/**
 * Moves this thread to the archive and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // archive the first thread in your inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 GmailApp.moveThreadToArchive(firstThread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to be archive
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadToArchive = function(thread){};

/**
 * Moves this thread to the inbox and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // find a thread not already in your inbox
 var thread = GmailApp.search(&quot;-in:inbox&quot;)[0]; // get the first one
 GmailApp.moveThreadToInbox(thread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to be moved to the inbox
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadToInbox = function(thread){};

/**
 * Moves this thread to spam and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // tag first thread in inbox as spam
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 GmailApp.moveThreadToSpam(firstThread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to be moved to spam
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadToSpam = function(thread){};

/**
 * Moves this thread to the trash and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // move first thread in inbox to trash
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 GmailApp.moveThreadToTrash(firstThread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to be trashed
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadToTrash = function(thread){};

/**
 * Moves these threads to the archive and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // move first two threads in your inbox to the archive
 var firstTwoThreads = GmailApp.getInboxThreads(0,2);
 GmailApp.moveThreadsToArchive(firstTwoThreads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be archived
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadsToArchive = function(threads){};

/**
 * Moves these threads to the inbox and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // find two threads not already in your inbox
 var firstTwoThreads = GmailApp.search(&quot;-in:inbox&quot;, 0, 2);
 GmailApp.moveThreadsToInbox(firstTwoThreads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be moved to the inbox
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadsToInbox = function(threads){};

/**
 * Moves these threads to spam and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // move first two threads in your inbox to spam
 var firstTwoThreads = GmailApp.getInboxThreads(0,2);
 GmailApp.moveThreadsToSpam(firstTwoThreads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be moved to spam
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadsToSpam = function(threads){};

/**
 * Moves these threads to the trash and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // move first two threads in your inbox to trash
 var firstTwoThreads = GmailApp.getInboxThreads(0,2);
 GmailApp.moveThreadsToTrash(firstTwoThreads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be trashed
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.moveThreadsToTrash = function(threads){};

/**
 * Reloads the message and associated state from Gmail (useful in case the labels, read state,
 etc., have changed).

 <pre class="prettyprint">
 <code>
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var firstMessage = firstThread.getMessages()[0];
 // ...do something that may take a while here....
 GmailApp.refreshMessage(firstMessage);
 // ...do more stuff with firstMessage...
 </code></pre>
 *
 * @param {GmailApp.GmailMessage} message - the message to be refreshed
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.refreshMessage = function(message){};

/**
 * Reloads the messages and associated state from Gmail (useful in case the labels, read state,
 etc., have changed).

 <pre class="prettyprint">
 <code>
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var coupleOfMessages = firstThread.getMessages().slice(0, 2);
 // ...do something that may take a while here....
 GmailApp.refreshMessages(coupleOfMessages);
 // ...do more stuff with coupleOfMessages...
 </code></pre>
 *
 * @param {GmailApp.GmailMessage[]} messages - the messages to be refreshed
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.refreshMessages = function(messages){};

/**
 * Reloads the thread and associated state from Gmail (useful in case the labels, read state,
 etc., have changed).

 <pre class="prettyprint">
 <code>
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 // ...do something that may take a while here....
 GmailApp.refreshThread(firstThread);
 // ... do more stuff with the thread ...
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to be refreshed
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.refreshThread = function(thread){};

/**
 * Reloads the threads and associated state from Gmail (useful in case the labels, read state,
 etc., have changed).

 <pre class="prettyprint">
 <code>
 var threads = GmailApp.getInboxThreads(0, 3);
 // ...do something that may take a while here....
 GmailApp.refreshThreads(threads);
 // ... do more stuff with threads ...
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - the threads to be refreshed
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.refreshThreads = function(threads){};

/**
 * Search Gmail with the given query.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 // find starred messages with subject IMPORTANT
 var threads = GmailApp.search(&#39;is:starred subject:&quot;IMPORTANT&quot;&#39;);
 </code></pre>
 *
 * @param {String} query - the search query, as you would type it into Gmail
 *
 * @return {GmailApp.GmailThread[]} an array of Gmail threads matching this query
 */
GmailApp.search = function(query){};

/**
 * Sends an email message. The size of the email (including headers) may not exceed 20KB.

 <pre class="prettyprint">
 <code>
 // The code below will send an email with the current date an time
 var now = new Date();
 GmailApp.sendEmail(&quot;mikemike@gmail.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
 </code></pre>
 *
 * @param {String} recipient - comma separated list of email addresses
 * @param {String} subject - subject of the email
 * @param {String} body - body of the email
 * @param {Object} [options] - a JavaScript object that specifies advanced parameters, as listed below, https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.sendEmail = function(recipient, subject, body, options){};

/**
 * Adds a star to this message and forces the message to refresh.

 <pre class="prettyprint">
 <code>
 // Stars the first message in the first thread in your inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var message = firstThread.getMessages()[0];
 GmailApp.starMessage(message);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage} message - the message to star
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.starMessage = function(message){};

/**
 * Adds stars to these messages and forces the messages to refresh.

 <pre class="prettyprint">
 <code>
 // Stars the first three messages in the first thread in your inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var coupleOfMessages = firstThread.getMessages().slice(0, 3);
 GmailApp.starMessages(coupleOfMessages);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to star
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.starMessages = function(messages){};

/**
 * Removes a star from this message and forces the message to refresh.

 <pre class="prettyprint">
 <code>
 // unstars the first message in the first thread in your inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var message = firstThread.getMessages()[0];
 GmailApp.unstarMessage(message);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage} message - the message to unstar
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.unstarMessage = function(message){};

/**
 * Removes stars from these messages and forces the messages to refresh.

 <pre class="prettyprint">
 <code>
 // unstars the first three messages in the first thread in your inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var coupleOfMessages = firstThread.getMessages().slice(0, 3);
 GmailApp.unstarMessages(coupleOfMessages);
 </code></pre>
 *
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to unstar
 *
 * @return {GmailApp} the Gmail service, useful for chaining
 */
GmailApp.unstarMessages = function(messages){};

/** @constructor */
GmailApp.GmailAttachment = function(){};

/**
 * Returns a copy of this blob.
 *
 * @return {Blob} the new copy
 */
GmailApp.GmailAttachment.prototype.copyBlob = function(){};

/**
 * Gets all the blobs that are contained within this (possibly composite) blob.
 *
 * @return {Blob[]} the blobs contained within the blob
 */
GmailApp.GmailAttachment.prototype.getAllBlobs = function(){};

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename ? for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" will become
 "ChristmasList.12.25.pdf".
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs,
     <code>&#39;application/pdf&#39;</code> is the only valid option. For images in BMP, GIF, JPEG,
     or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>,
     <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also valid.
 *
 * @return {Blob} the data as a blob
 */
GmailApp.GmailAttachment.prototype.getAs = function(contentType){};

/**
 * Gets the data stored in this blob.
 *
 * @return {Byte[]} the stored bytes
 */
GmailApp.GmailAttachment.prototype.getBytes = function(){};

/**
 * Gets the content type of the bytes in this blob.
 *
 * @return {String} the content type of this data, if known, or null
 */
GmailApp.GmailAttachment.prototype.getContentType = function(){};

/**
 * Gets the data of this blob as a String with UTF-8 encoding.
 *
 * @return {String} the data as a string
 */
GmailApp.GmailAttachment.prototype.getDataAsString = function(){};

/**
 * Gets the name of this blob.
 *
 * @return {String} the name of this data, if known, or null
 */
GmailApp.GmailAttachment.prototype.getName = function(){};

/**
 * Gets the size of this attachment. This method is faster than calling
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-attachment.html#getBytes()'>getBytes()</a></code><code>.length</code> and does not count against the Gmail read quota.
 *
 * @return {number} the size of the attachment, in bytes
 */
GmailApp.GmailAttachment.prototype.getSize = function(){};

/**
 * Returns whether this blob is a Google Apps file (Sheets, Docs, etc.).
 *
 * @return {Boolean} <code>true</code> if this blob is a Google Apps file; <code>false</code> if not
 */
GmailApp.GmailAttachment.prototype.isGoogleType = function(){};

/**
 * Sets the data stored in this blob.
 *
 * @param {Byte[]} data - the new data
 *
 * @return {Blob} this blob, for chaining
 */
GmailApp.GmailAttachment.prototype.setBytes = function(data){};

/**
 * Sets the content type of the bytes in this blob.
 *
 * @param {String} contentType - the new contentType
 *
 * @return {Blob} this blob, for chaining
 */
GmailApp.GmailAttachment.prototype.setContentType = function(contentType){};

/**
 * Sets the content type of the bytes in this blob based on the file extension.
 The contentType will be <code>null</code> if it cannot be guessed from its extension.
 *
 * @return {Blob} this blob, for chaining
 */
GmailApp.GmailAttachment.prototype.setContentTypeFromExtension = function(){};

/**
 * Sets the data of this blob from a string with UTF-8 encoding.
 *
 * @param {String} string - the string data
 *
 * @return {Blob} this blob, for chaining
 */
GmailApp.GmailAttachment.prototype.setDataFromString = function(string){};

/**
 * Sets the name of this blob.
 *
 * @param {String} name - the new name
 *
 * @return {Blob} this blob, for chaining
 */
GmailApp.GmailAttachment.prototype.setName = function(name){};

/** @constructor */
GmailApp.GmailLabel = function(){};

/**
 * Adds this label to the given thread and forces the thread to refresh
 (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-thread.html#refresh()'>GmailThread.refresh()</a></code>).

 <pre class="prettyprint">
 <code>
 // label the first thread in the inbox with the label MyLabel
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 label.addToThread(firstThread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread to be labeled
 *
 * @return {GmailApp.GmailLabel} this GmailLabel, useful for chaining
 */
GmailApp.GmailLabel.prototype.addToThread = function(thread){};

/**
 * Adds this label to the given threads and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // label the first three threads in the inbox with the label MyLabel
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 var threads = GmailApp.getInboxThreads(0,3);
 label.addToThreads(threads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be labeled
 *
 * @return {GmailApp.GmailLabel} this GmailLabel, useful for chaining
 */
GmailApp.GmailLabel.prototype.addToThreads = function(threads){};

/**
 * Deletes this label.

 <pre class="prettyprint">
 <code>
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 label.deleteLabel();
 </code></pre>
 *
 * @return void
 */
GmailApp.GmailLabel.prototype.deleteLabel = function(){};

/**
 * Gets the name of this label.

 <pre class="prettyprint">
 <code>
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 Logger.log(label.getName()); //logs MyLabel
 </code></pre>
 *
 * @return {String} the name of the label
 */
GmailApp.GmailLabel.prototype.getName = function(){};

/**
 * Gets the threads that are marked with this label.

 <p>This call will fail when the size of all threads is too large for the system to handle.
 Where the thread size is unknown, and potentially very large, please use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-label.html#getThreads(Integer,Integer)'>getThreads(start, max)</a></code> and specify ranges of the threads to retrieve in each call.

 <pre class="prettyprint">
 <code>
 // Log the subject lines of the threads labeled with MyLabel
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 var threads = label.getThreads();
 for (var i = 0; i &lt; threads.length; i++) {
   Logger.log(threads[i].getFirstMessageSubject());
 }
 </code></pre>
 *
 * @return {GmailApp.GmailThread[]} an array of threads marked with this Label
 */
GmailApp.GmailLabel.prototype.getThreads = function(){};

/**
 * Gets the number of unread threads tagged with this label.

 <pre class="prettyprint">
 <code>
 // log the number of unread threads labeled with MyLabel
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 Logger.log(label.getUnreadCount());
 </code></pre>
 *
 * @return {number} the number of unread labeled threads
 */
GmailApp.GmailLabel.prototype.getUnreadCount = function(){};

/**
 * Removes this label from the given thread and forces the thread to refresh.

 <pre class="prettyprint">
 <code>
 // remove the label MyLabel from the first thread in the inbox
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 label.removeFromThread(firstThread);
 </code></pre>
 *
 * @param {GmailApp.GmailThread} thread - the thread be unlabeled
 *
 * @return {GmailApp.GmailLabel} this GmailLabel, useful for chaining
 */
GmailApp.GmailLabel.prototype.removeFromThread = function(thread){};

/**
 * Removes this label from the given threads and forces the threads to refresh.

 <pre class="prettyprint">
 <code>
 // remove the label MyLabel from the first three threads in the inbox
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 var threads = GmailApp.getInboxThreads(0,3);
 label.removeFromThreads(threads);
 </code></pre>
 *
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be unlabeled
 *
 * @return {GmailApp.GmailLabel} this GmailLabel, useful for chaining
 */
GmailApp.GmailLabel.prototype.removeFromThreads = function(threads){};

/** @constructor */
GmailApp.GmailMessage = function(){};

/**
 * Forwards this message to new recipients.

 <p>See the 'Email Body Size' entry on the Quota Limits tab of the
 <a href="https://script.google.com/dashboard">Dashboard</a> for the maximum allowable size of
 the email body.

 <pre class="prettyprint">
 <code>
 // forward first message of first inbox thread to recipient1 &amp; recipient2, both @example.com
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var message = firstThread.getMessages()[0];
 message.forward(&quot;recipient1@example.com,recipient2@example.com&quot;);
 </code></pre>
 *
 * @param {String} recipient - a comma-separated list of email addresses
 *
 * @return {GmailApp.GmailMessage} this message, useful for chaining
 */
GmailApp.GmailMessage.prototype.forward = function(recipient){};

/**
 * Gets all the attachments for this message.
 *
 * @return {GmailApp.GmailAttachment[]} an array of Blob attachments for this message
 */
GmailApp.GmailMessage.prototype.getAttachments = function(){};

/**
 * Gets the comma-separated recipients bcc'd on this message.
 <p>
 This will be empty for all received messages, by definition.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getBcc()); // log bcc&#39;d addresses
 </code></pre>
 *
 * @return {String} the comma-separated recipients bcc'd on this message
 */
GmailApp.GmailMessage.prototype.getBcc = function(){};

/**
 * Gets the HTML content of the body of this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getBody()); // log contents of the body
 </code></pre>
 *
 * @return {String} the body content of this message
 */
GmailApp.GmailMessage.prototype.getBody = function(){};

/**
 * Gets the comma-separated recipients cc'd on this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getCc()); // log cc&#39;d addresses
 </code></pre>
 *
 * @return {String} the comma-separated recipients cc'd on this message
 */
GmailApp.GmailMessage.prototype.getCc = function(){};

/**
 * Gets the date and time of this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getDate()); // log date and time of the message
 </code></pre>
 *
 * @return {Date} the date and time of this message
 */
GmailApp.GmailMessage.prototype.getDate = function(){};

/**
 * Gets the sender of this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getFrom()); // log from address of the message
 </code></pre>
 *
 * @return {String} the email address of the message sender
 */
GmailApp.GmailMessage.prototype.getFrom = function(){};

/**
 * Gets the id of this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 var id = message.getId();
 var messageById = GmailApp.getMessageById(id);
 Logger.log(message.getSubject() == messageById.getMessage()); // always logs true
 </code></pre>
 *
 * @return {String} the message id
 */
GmailApp.GmailMessage.prototype.getId = function(){};

/**
 * Gets the content of the body of this message without HTML formatting. This
 is more complex than <code>getBody()</code> and will take longer.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getPlainBody()); // log contents of the body
 </code></pre>
 *
 * @return {String} the plain body content of this message
 */
GmailApp.GmailMessage.prototype.getPlainBody = function(){};

/**
 * Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
 *
 * @return {String} the raw content of this message.
 */
GmailApp.GmailMessage.prototype.getRawContent = function(){};

/**
 * Gets the reply-to address of this message (usually the sender).

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getReplyTo()); // logs reply-to address
 </code></pre>
 *
 * @return {String} the email address for replies
 */
GmailApp.GmailMessage.prototype.getReplyTo = function(){};

/**
 * Gets the subject of this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getSubject()); // log subject line
 </code></pre>
 *
 * @return {String} the subject of this message
 */
GmailApp.GmailMessage.prototype.getSubject = function(){};

/**
 * Gets the thread that contains this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getThread().getFirstMessageSubject() ==
            thread.getFirstMessageSubject()); // always logs true
 </code></pre>
 *
 * @return {GmailApp.GmailThread} the GmailThread that contains this message
 */
GmailApp.GmailMessage.prototype.getThread = function(){};

/**
 * Gets the comma-separated recipient(s) of this message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(message.getTo()); // log the recipient of message
 </code></pre>
 *
 * @return {String} the comma-separated recipient(s) of this message
 */
GmailApp.GmailMessage.prototype.getTo = function(){};

/**
 * Gets whether this message is a draft.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(&quot;is draft? &quot; + message.isDraft());
 </code></pre>
 *
 * @return {Boolean} whether this message is a draft
 */
GmailApp.GmailMessage.prototype.isDraft = function(){};

/**
 * Gets whether this message is a chat.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(&quot;is a chat? &quot; + message.isInChats());
 </code></pre>
 *
 * @return {Boolean} whether this message is a chat
 */
GmailApp.GmailMessage.prototype.isInChats = function(){};

/**
 * Gets whether this message is in the inbox.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(&quot;is in inbox? &quot; + message.isInInbox());
 </code></pre>
 *
 * @return {Boolean} whether this message is in the inbox
 */
GmailApp.GmailMessage.prototype.isInInbox = function(){};

/**
 * Gets whether this message is in the trash.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(&quot;is in the trash? &quot; + message.isInTrash());
 </code></pre>
 *
 * @return {Boolean} whether this message is in the trash
 */
GmailApp.GmailMessage.prototype.isInTrash = function(){};

/**
 * Gets whether this message is starred.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(&quot;is starred? &quot; + message.isStarred());
 </code></pre>
 *
 * @return {Boolean} whether this message is starred
 */
GmailApp.GmailMessage.prototype.isStarred = function(){};

/**
 * Gets whether this message is unread.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 Logger.log(&quot;is unread? &quot; + message.isUnread());
 </code></pre>
 *
 * @return {Boolean} the unread status of this message
 */
GmailApp.GmailMessage.prototype.isUnread = function(){};

/**
 * Marks the message as read.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 message.markRead(); // mark as read
 </code></pre>
 *
 * @return {GmailApp.GmailMessage} this GmailMessage, useful for chaining
 */
GmailApp.GmailMessage.prototype.markRead = function(){};

/**
 * Marks the message as unread.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 message.markUnread(); // mark as unread
 </code></pre>
 *
 * @return {GmailApp.GmailMessage} this GmailMessage, useful for chaining
 */
GmailApp.GmailMessage.prototype.markUnread = function(){};

/**
 * Moves the message to the trash.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 message.moveToTrash(); // move message to trash
 </code></pre>
 *
 * @return {GmailApp.GmailMessage} this GmailMessage, useful for chaining
 */
GmailApp.GmailMessage.prototype.moveToTrash = function(){};

/**
 * Reloads this message and associated state from Gmail (useful in case the labels, read state,
 etc., have changed).

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 // .. do bunch of stuff here
 message.refresh(); // make sure it&#39;s up to date
 // do more stuff to message
 </code></pre>
 *
 * @return {GmailApp.GmailMessage} this message for chaining
 */
GmailApp.GmailMessage.prototype.refresh = function(){};

/**
 * Replies to the sender of this message using the reply-to address.

 <p>See the 'Email Body Size' entry on the Quota Limits tab of the
 <a href="https://script.google.com/dashboard">Dashboard</a> for the maximum allowable size of
 the email body.

 <pre class="prettyprint">
 <code>
 // respond to author of message with acknowlegment
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var message = firstThread.getMessages()[0];
 message.reply(&quot;Got your message&quot;);
 </code></pre>
 *
 * @param {String} body - the body of the email
 *
 * @return {GmailApp.GmailMessage} this message, useful for chaining
 */
GmailApp.GmailMessage.prototype.reply = function(body){};

/**
 * Replies to the sender using the reply-to address and all recipients of this message.

 <p>See the 'Email Body Size' entry on the Quota Limits tab of the
 <a href="https://script.google.com/dashboard">Dashboard</a> for the maximum allowable size of
 the email body.

 <pre class="prettyprint">
 <code>
 // respond to all recipients (except bcc&#39;d) of last email in thread with acknowledgment
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var message = firstThread.getMessages()[0];
 message.replyAll(&quot;Got your message&quot;);
 </code></pre>
 *
 * @param {String} body - the body of the email
 *
 * @return {GmailApp.GmailMessage} this message,useful for chaining
 */
GmailApp.GmailMessage.prototype.replyAll = function(body){};

/**
 * Stars the message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 message.star(); // star the message
 </code></pre>
 *
 * @return {GmailApp.GmailMessage} this GmailMessage, useful for chaining
 */
GmailApp.GmailMessage.prototype.star = function(){};

/**
 * Unstars the message.

 <pre class="prettyprint">
 <code>
 var thread = GmailApp.getInboxThreads(0,1)[0]; // get first thread in inbox
 var message = thread.getMessages()[0]; // get first message
 message.unstar(); // unstar the message
 </code></pre>
 *
 * @return {GmailApp.GmailMessage} this GmailMessage, useful for chaining
 */
GmailApp.GmailMessage.prototype.unstar = function(){};

/** @constructor */
GmailApp.GmailThread = function(){};

/**
 * Adds this label to the thread.

 <pre class="prettyprint">
 <code>
 // add label MyLabel to the first thread in the inbox
 var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.addLabel(label);
 </code></pre>
 *
 * @param {GmailApp.GmailLabel} label - the label to apply to this thread
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.addLabel = function(label){};

/**
 * Gets the subject of the first message in the thread.

 <pre class="prettyprint">
 <code>
 // log the subject of the first message in the first thread in the inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(firstThread.getFirstMessageSubject());
 </code></pre>
 *
 * @return {String} the subject of the first message in the thread
 */
GmailApp.GmailThread.prototype.getFirstMessageSubject = function(){};

/**
 * Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a
 consistent ID for a particular message in the thread, call <code>getMessages()[0].getId()</code>
 instead.

 <pre class="prettyprint">
 <code>
 // Log the subject of the first message in the first thread in the inbox.
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var id = firstThread.getId();
 // Get same thread by its ID.
 var thread = GmailApp.getThreadById(id);
 Logger.log(thread.getFirstMessageSubject() == firstThread.getFirstMessageSubject()); // True
 </code></pre>
 *
 * @return {String} the id of this thread
 */
GmailApp.GmailThread.prototype.getId = function(){};

/**
 * Returns the user-created labels on this thread.

 <pre class="prettyprint">
 <code>
 // log the names of the labels attached to the first thread in the inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var labels = firstThread.getLabels();
 for (var i = 0; i &lt; labels.length; i++) {
   Logger.log(labels[i].getName());
 }
 </code></pre>
 *
 * @return {GmailApp.GmailLabel[]} an array of labels for this thread
 */
GmailApp.GmailThread.prototype.getLabels = function(){};

/**
 * Gets the date of this thread's most recent message.

 <pre class="prettyprint">
 <code>
 // log the date of the most recent message on the first thread in the inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(firstThread.getLastMessageDate());
 </code></pre>
 *
 * @return {Date} the date of the most recent message in the thread
 */
GmailApp.GmailThread.prototype.getLastMessageDate = function(){};

/**
 * Returns the number of messages in the thread.

 <pre class="prettyprint">
 <code>
 // log the number of messages in the thread
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(firstThread.getMessageCount());
 </code></pre>
 *
 * @return {number} the number of messages in the thread
 */
GmailApp.GmailThread.prototype.getMessageCount = function(){};

/**
 * Gets the messages in this thread.

 <pre class="prettyprint">
 <code>
 // log the subjects of the messages in the thread
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 var messages = firstThread.getMessages();
 for (var i = 0; i &lt; messages.length; i++) {
   Logger.log(messages[i].getSubject());
 }
 </code></pre>
 *
 * @return {GmailApp.GmailMessage[]} an array of Gmail messages in this thread
 */
GmailApp.GmailThread.prototype.getMessages = function(){};

/**
 * Gets a permalink for this thread.

 <p>Note that this only works with the classic Gmail interface, not Inbox.

 <pre class="prettyprint">
 <code>
 // Logs the permalink for the first thread in the inbox
 var thread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(thread.getPermalink());
 </code></pre>
 *
 * @return {String} the permalink for this thread
 */
GmailApp.GmailThread.prototype.getPermalink = function(){};

/**
 * Returns whether the thread has any starred messages.

 <pre class="prettyprint">
 <code>
 // log if this thread has starred messages
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;has starred : &#39; + firstThread.hasStarredMessages());
 </code></pre>
 *
 * @return {Boolean} true if the thread has any starred messages
 */
GmailApp.GmailThread.prototype.hasStarredMessages = function(){};

/**
 * Returns whether the thread is marked important.

 <pre class="prettyprint">
 <code>
 // log if this thread is marked important
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;Important? : &#39; + firstThread.isImportant());
 </code></pre>
 *
 * @return {Boolean} true if the thread is marked important
 */
GmailApp.GmailThread.prototype.isImportant = function(){};

/**
 * Returns whether the thread is labeled a chat.

 <pre class="prettyprint">
 <code>
 // log if this thread is a chat
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;is in chats? : &#39; + firstThread.isInChats());
 </code></pre>
 *
 * @return {Boolean} true if the thread is labeled a chat
 */
GmailApp.GmailThread.prototype.isInChats = function(){};

/**
 * Returns whether the thread is in the inbox.

 <pre class="prettyprint">
 <code>
 // log if this thread is in the inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;is in the inbox? : &#39; + firstThread.isInInbox());
 </code></pre>
 *
 * @return {Boolean} true if the thread is in the inbox
 */
GmailApp.GmailThread.prototype.isInInbox = function(){};

/**
 * Returns whether the thread is marked as spam.

 <pre class="prettyprint">
 <code>
 // log if this thread is in the spam folder
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;Spam? &#39; + firstThread.isInSpam());
 </code></pre>
 *
 * @return {Boolean} true if the thread is marked as spam
 */
GmailApp.GmailThread.prototype.isInSpam = function(){};

/**
 * Returns whether the thread is in the trash.

 <pre class="prettyprint">
 <code>
 // log if this thread is in the trash
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;Trashed? &#39; + firstThread.isInTrash());
 </code></pre>
 *
 * @return {Boolean} true if the thread is in the trash
 */
GmailApp.GmailThread.prototype.isInTrash = function(){};

/**
 * Returns whether the thread has any unread messages.

 <pre class="prettyprint">
 <code>
 // log if this thread is unread
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 Logger.log(&#39;Unread? &#39; + firstThread.isUnread());
 </code></pre>
 *
 * @return {Boolean} true if there are unread messages
 */
GmailApp.GmailThread.prototype.isUnread = function(){};

/**
 * Marks this thread as important.

 <pre class="prettyprint">
 <code>
 // mark first inbox thread as important
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.markImportant();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.markImportant = function(){};

/**
 * Marks this thread as read.

 <pre class="prettyprint">
 <code>
 // mark first inbox thread as read
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.markRead();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.markRead = function(){};

/**
 * Marks this thread as unimportant.

 <pre class="prettyprint">
 <code>
 // mark first inbox thread as unimportant
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.markUnimportant();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.markUnimportant = function(){};

/**
 * Marks this thread as unread.

 <pre class="prettyprint">
 <code>
 // mark first inbox thread as unread
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.markUnread();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.markUnread = function(){};

/**
 * Moves this thread to the archive.

 <pre class="prettyprint">
 <code>
 // archive first inbox thread
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.moveToArchive();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.moveToArchive = function(){};

/**
 * Moves this thread to the inbox.

 <pre class="prettyprint">
 <code>
 // move first non-inbox thread to inbox
 var firstThread = GmailApp.search(&quot;-in:inbox&quot;)[0];
 firstThread.moveToInbox();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.moveToInbox = function(){};

/**
 * Moves this thread to spam.

 <pre class="prettyprint">
 <code>
 // move first inbox thread to spam
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.moveToSpam();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.moveToSpam = function(){};

/**
 * Moves this thread to the trash.

 <pre class="prettyprint">
 <code>
 // move first inbox thread to trash
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.moveToTrash();
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.moveToTrash = function(){};

/**
 * Reloads this thread, and associated state from Gmail (useful in case the labels, read state,
 etc., have changed).

 <pre class="prettyprint">
 <code>
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 // ...do something that may take a while here....
 firstThread.refresh(); // make sure it&#39;s up-to-date
 // ...do more stuff with firstThread ...
 </code></pre>
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.refresh = function(){};

/**
 * Removes this label from the thread.

 <pre class="prettyprint">
 <code>
 var myLabel = GmailApp.getUserLabelByName(&#39;&lt;your label&gt;&#39;);
 var threads = myLabel.getThreads();
 for (var x in threads) {
   var thread = threads[x];
   thread.removeLabel(myLabel);
 }
 </code></pre>
 *
 * @param {GmailApp.GmailLabel} label - the label to remove from this thread
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.removeLabel = function(label){};

/**
 * Reply to the sender of the last message on this thread using the replyTo address.

 <p> Note that the total size of the email (including all headers) may not exceed 20KB.

 <pre class="prettyprint">
 <code>
 // respond to author of last email in thread with acknowledgment
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.reply(&quot;Got your message&quot;);
 </code></pre>
 *
 * @param {String} body - the body of the email
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.reply = function(body){};

/**
 * Reply to the sender (using the replyTo address), and all recipients of the last message on this
 thread.

 <p>Note that the total size of the email (including all headers) may not exceed 20KB.

 <pre class="prettyprint">
 <code>
 // respond to all with acknowledgment to the first thread in the inbox
 var firstThread = GmailApp.getInboxThreads(0,1)[0];
 firstThread.replyAll(&quot;Got your message&quot;);
 </code></pre>
 *
 * @param {String} body - the body of the email
 *
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */
GmailApp.GmailThread.prototype.replyAll = function(body){};

