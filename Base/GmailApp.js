/**********************************************
 * @namespace GmailApp
 ***********************************************/

/**
 * @class GmailApp
 */

/**
 * Creates a draft email message. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a draft email with the current date and time.
 * var now = new Date();
 * GmailApp.createDraft(&quot;mike@example.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
 * </code></pre>
 * 
 * @function GmailApp.createDraft
 * 
 * @param {String} recipient - comma separated list of email addresses
 * @param {String} subject - subject of the email
 * @param {String} body - body of the email
 * 
 * @return {GmailApp.GmailDraft} the newly created GmailDraft
 */


/**
 * Creates a draft email message with optional arguments. The email can contain plain text or an
 * HTML body. The size of the email (including headers, but excluding attachments) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft email with a file from Google Drive attached as a PDF.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * GmailApp.createDraft(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Please see attached file.&#39;, {
 *     attachments: [file.getAs(MimeType.PDF)],
 *     name: &#39;Automatic Emailer Script&#39;
 * });
 * </code></pre>
 * 
 * @function GmailApp.createDraft
 * 
 * @param {String} recipient - the addresses of the recipient
 * @param {String} subject - the subject line
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp.GmailDraft} the newly created GmailDraft
 */


/**
 * Create a new user label of the given name.
 * 
 * <pre class="prettyprint"><code>
 * // Creates the label @FOO and logs label: FOO
 * Logger.log(&quot;label: &quot; + GmailApp.createLabel(&quot;FOO&quot;));
 * </code></pre>
 * 
 * @function GmailApp.createLabel
 * 
 * @param {String} name - the name of the new label
 * 
 * @return {GmailApp.GmailLabel} the newly created label
 */


/**
 * Deletes the specified label.
 * 
 * <pre class="prettyprint"><code>
 * // Have to get the label by name first
 * var label = GmailApp.getUserLabelByName(&quot;FOO&quot;);
 * GmailApp.deleteLabel(label);
 * </code></pre>
 * 
 * @function GmailApp.deleteLabel
 * 
 * @param {GmailApp.GmailLabel} label - the label to delete
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Gets a list of the emails that are set up as aliases for this account in Gmail.
 * 
 * <p>You can send a message from any of these aliases by using the "from" optional argument.
 * 
 * <pre class="prettyprint">
 * // Log the aliases for this Gmail account and send an email as the first one.
 * var me = Session.getActiveUser().getEmail();
 * var aliases = GmailApp.getAliases();
 * Logger.log(aliases);
 * if (aliases.length > 0) {
 *   GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {'from': aliases[0]});
 * } else {
 *   GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
 * }
 * </pre>
 * 
 * @function GmailApp.getAliases
 * 
 * @return {String[]} an array of aliases for this account
 */


/**
 * Retrieves all chat threads irrespective of labels.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * var threads = GmailApp.getChatThreads();
 * Logger.log(&quot;# of chat threads: &quot; + threads.length);
 * </code></pre>
 * 
 * @function GmailApp.getChatThreads
 * 
 * @return {GmailApp.GmailThread[]} an array of chat Gmail threads
 */


/**
 * Retrieves a range of chat threads irrespective of labels.
 * 
 * <pre class="prettyprint"><code>
 * // Get first 50 chat threads
 * var threads = GmailApp.getChatThreads(0,50);
 * // Will log no more than 50.0
 * Logger.log(threads.length);
 * Logger.log(threads[0].getFirstMessageSubject());
 * </code></pre>
 * 
 * @function GmailApp.getChatThreads
 * 
 * @param {IntegerNum} start - the index of the first thread to retrieve
 * @param {IntegerNum} max - the maximum number of threads to retrieve
 * 
 * @return {GmailApp.GmailThread[]} an array of chat Gmail threads
 */


/**
 * Retrieve an email message draft by ID.
 * 
 * <p>Use this in conjunction with getId() on Gmail drafts.
 * 
 * <pre class="prettyprint"><code>
 * // Get the first draft message in your drafts folder
 * var draft = GmailApp.getDrafts()[0];
 * // Get its ID
 * var draftId = draft.getId();
 * // Now fetch the same draft using that ID.
 * var draftById = GmailApp.getDraft(draftId);
 * // Should always log true as they should be the same message
 * Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
 * </code></pre>
 * 
 * @function GmailApp.getDraft
 * 
 * @param {String} draftId - the ID of the draft to retrieve
 * 
 * @return {GmailApp.GmailDraft} the draft with the given ID
 */


/**
 * Retrieves all draft messages.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the number of draft messages
 * var drafts = GmailApp.getDraftMessages();
 * Logger.log(drafts.length);
 * </code></pre>
 * 
 * @function GmailApp.getDraftMessages
 * 
 * @return {GmailApp.GmailMessage[]} an array of draft Gmail messages
 */


/**
 * Gets all Gmail draft messages.
 * 
 * <pre class="prettyprint"><code>
 * var drafts = GmailApp.getDrafts();
 * for (var i = 0; i &lt; drafts.length; i++) {
 *   Logger.log(drafts[i].getId());
 * }
 * </code></pre>
 * 
 * @function GmailApp.getDrafts
 * 
 * @return {GmailApp.GmailDraft[]} an array of Gmail draft messages
 */


/**
 * Retrieves all Inbox threads irrespective of labels.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subject lines of your Inbox
 * var threads = GmailApp.getInboxThreads();
 * for (var i = 0; i &lt; threads.length; i++) {
 *   Logger.log(threads[i].getFirstMessageSubject());
 * }
 * </code></pre>
 * 
 * @function GmailApp.getInboxThreads
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the Inbox
 */


/**
 * Retrieves a range of Inbox threads irrespective of labels.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subject lines of up to the first 50 emails in your Inbox
 * var threads = GmailApp.getInboxThreads(0, 50);
 * for (var i = 0; i &lt; threads.length; i++) {
 *   Logger.log(threads[i].getFirstMessageSubject());
 * }
 * </code></pre>
 * 
 * @function GmailApp.getInboxThreads
 * 
 * @param {IntegerNum} start - the index of the first thread to retrieve
 * @param {IntegerNum} max - the maximum number of threads to retrieve
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the Inbox
 */


/**
 * Gets the number of unread threads in the inbox.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&quot;Messages unread in inbox: &quot; + GmailApp.getInboxUnreadCount());
 * </code></pre>
 * 
 * @function GmailApp.getInboxUnreadCount
 * 
 * @return {IntegerNum} the number of threads in the inbox that have unread messages
 */


/**
 * Gets a message by ID.
 * 
 * <p>Use this in conjunction with getId() on Gmail messages.
 * 
 * <pre class="prettyprint"><code>
 * // Get the first message in the first thread of your inbox
 * var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
 * // Get its ID
 * var messageId = message.getId();
 * // Now fetch the same message using that ID.
 * var messageById = GmailApp.getMessageById(messageId);
 * // Should always log true as they should be the same message
 * Logger.log(message.getSubject() == messageById.getSubject());
 * </code></pre>
 * 
 * @function GmailApp.getMessageById
 * 
 * @param {String} id - the ID of the message to retrieve
 * 
 * @return {GmailApp.GmailMessage} the message with the given ID
 */


/**
 * Retrieve all messages in the specified thread.
 * 
 * <pre class="prettyprint"><code>
 * // Log all the subject lines in the first thread of your inbox
 * var thread = GmailApp.getInboxThreads(0, 1)[0];
 * var messages = GmailApp.getMessagesForThread(thread);
 * for (var i = 0 ; i &lt; messages.length; i++) {
 *   Logger.log(&quot;subject: &quot; + messages[i].getSubject());
 * }
 * </code></pre>
 * 
 * @function GmailApp.getMessagesForThread
 * 
 * @param {GmailApp.GmailThread} thread - the thread of messages to retrieve
 * 
 * @return {GmailApp.GmailMessage[]} array of messages corresponding to this thread
 */


/**
 * Retrieve all messages in the specified threads.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subject lines of all messages in the first two threads of your inbox
 * var thread = GmailApp.getInboxThreads(0, 2);
 * var messages = GmailApp.getMessagesForThreads(thread);
 * for (var i = 0 ; i &lt; messages.length; i++) {
 *   for (var j = 0; j &lt; messages[i].length; j++) {
 *     Logger.log(&quot;subject: &quot; + messages[i][j].getSubject());
 *   }
 * }
 * </code></pre>
 * 
 * @function GmailApp.getMessagesForThreads
 * 
 * @param {GmailApp.GmailThread[]} threads - the threads of messages to retrieve
 * 
 * @return {GmailApp.GmailMessage[][]} an array of arrays of messages, where each item in the outer array corresponds to a
 *     thread and the inner array contains the messages in that thread
 */


/**
 * Retrieves all Priority Inbox threads irrespective of labels.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&quot;# of messages in your Priority Inbox: &quot; +
 *            GmailApp.getPriorityInboxThreads().length);
 * </code></pre>
 * 
 * @function GmailApp.getPriorityInboxThreads
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the Priority Inbox
 */


/**
 * Retrieves a range of Priority Inbox threads irrespective of labels.
 * 
 * <pre class="prettyprint"><code>
 * // Will log some number 2 or less
 * Logger.log(&quot;# of messages in your Priority Inbox: &quot; +
 *            GmailApp.getPriorityInboxThreads(0, 2).length);
 * </code></pre>
 * 
 * @function GmailApp.getPriorityInboxThreads
 * 
 * @param {IntegerNum} start - the index of the first thread to retrieve
 * @param {IntegerNum} max - the maximum number of threads to retrieve
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the Priority Inbox
 */


/**
 * Gets the number of unread threads in the Priority Inbox.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&quot;Number of unread emails in your Priority Inbox : &quot; +
 *            GmailApp.getPriorityInboxUnreadCount());
 * </code></pre>
 * 
 * @function GmailApp.getPriorityInboxUnreadCount
 * 
 * @return {IntegerNum} the number of threads in the Priority Inbox that have unread messages
 */


/**
 * Retrieves all spam threads irrespective of labels.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&quot;# of total spam threads: &quot; + GmailApp.getSpamThreads().length);
 * </code></pre>
 * 
 * @function GmailApp.getSpamThreads
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the spam folder
 */


/**
 * Retrieves a range of spam threads irrespective of labels.
 * 
 * <pre class="prettyprint"><code>
 * // Will log a number at most 5
 * Logger.log(&quot;# of total spam threads: &quot; + GmailApp.getSpamThreads(0, 5).length);
 * </code></pre>
 * 
 * @function GmailApp.getSpamThreads
 * 
 * @param {IntegerNum} start - the index of the first thread to retrieve
 * @param {IntegerNum} max - the maximum number of threads to retrieve
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the spam folder
 */


/**
 * Gets the number of unread threads that are spam.
 * 
 * <pre class="prettyprint"><code>
 * // Unless you actually read stuff in your spam folder, this should be the same as
 * // the number of messages in your spam folder.
 * Logger.log(&quot;# unread threads that are spam: &quot; + GmailApp.getSpamUnreadCount());
 * </code></pre>
 * 
 * @function GmailApp.getSpamUnreadCount
 * 
 * @return {IntegerNum} the number spam threads that have unread messages
 */


/**
 * Retrieves all starred threads irrespective of labels.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the number of starred threads
 * Logger.log(&quot;# Starred threads: &quot; + GmailApp.getStarredThreads().length);
 * </code></pre>
 * 
 * @function GmailApp.getStarredThreads
 * 
 * @return {GmailApp.GmailThread[]} an array of starred Gmail threads
 */


/**
 * Retrieves a range of starred threads irrespective of labels.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the number of starred threads to a maximum of 5
 * Logger.log(&quot;# Starred threads: &quot; + GmailApp.getStarredThreads(0, 5).length);
 * </code></pre>
 * 
 * @function GmailApp.getStarredThreads
 * 
 * @param {IntegerNum} start - the index of the first thread to retrieve
 * @param {IntegerNum} max - the maximum number of threads to retrieve
 * 
 * @return {GmailApp.GmailThread[]} an array of starred Gmail threads
 */


/**
 * Gets the number of unread threads that are starred.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&quot;# unread and starred: &quot; + GmailApp.getStarredUnreadCount());
 * </code></pre>
 * 
 * @function GmailApp.getStarredUnreadCount
 * 
 * @return {IntegerNum} the number of starred threads that have unread messages
 */


/**
 * Gets a thread by ID.
 * 
 * <p>Use this in conjunction with getId() on Gmail threads.
 * 
 * <pre class="prettyprint"><code>
 * // Thread IDs can also be found in the location bar when you have a thread open in Gmail
 * // get first inbox thread
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * // Get the same thread by ID
 * var threadById = GmailApp.getThreadById(firstThread.getId());
 * // Verify they are the same
 * Logger.log(firstThread.getFirstMessageSubject() == threadById.getFirstMessageSubject());
 * </code></pre>
 * 
 * @function GmailApp.getThreadById
 * 
 * @param {String} id - the ID of the thread to retrieve
 * 
 * @return {GmailApp.GmailThread} the thread with the given ID or null if not found
 */


/**
 * Retrieves all trash threads irrespective of labels.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * Logger.log(&quot;# of total trash threads: &quot; + GmailApp.getTrashThreads().length);
 * </code></pre>
 * 
 * @function GmailApp.getTrashThreads
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the trash
 */


/**
 * Retrieves a range of trash threads irrespective of labels.
 * 
 * <pre class="prettyprint"><code>
 * // Will log a number at most 5
 * Logger.log(&quot;# of total trash threads: &quot; + GmailApp.getTrashThreads(0, 5).length);
 * </code></pre>
 * 
 * @function GmailApp.getTrashThreads
 * 
 * @param {IntegerNum} start - the index of the first thread to retrieve
 * @param {IntegerNum} max - the maximum number of threads to retrieve
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads in the trash
 */


/**
 * Retrieves a label given the label name.
 * 
 * <pre class="prettyprint"><code>
 * var labelObject = GmailApp.getUserLabelByName(&quot;myLabel&quot;);
 * </code></pre>
 * 
 * @function GmailApp.getUserLabelByName
 * 
 * @param {String} name - the name of the label to retrieve
 * 
 * @return {GmailApp.GmailLabel} the Gmail label with the given name
 */


/**
 * Retrieves a list of user-created labels.
 * 
 * <pre class="prettyprint"><code>
 * // Logs all of the names of your labels
 * var labels = GmailApp.getUserLabels();
 * for (var i = 0; i &lt; labels.length; i++) {
 *   Logger.log(&quot;label: &quot; + labels[i].getName());
 * }
 * </code></pre>
 * 
 * @function GmailApp.getUserLabels
 * 
 * @return {GmailApp.GmailLabel[]} array of user created labels
 */


/**
 * Marks this message read and forces the message to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Mark the first message in the first thread of your inbox as read
 * var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
 * GmailApp.markMessageRead(message);
 * </code></pre>
 * 
 * @function GmailApp.markMessageRead
 * 
 * @param {GmailApp.GmailMessage} message - the message to mark as read
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks this message unread and forces the message to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Mark the first message in the first thread of your inbox as unread
 * var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
 * GmailApp.markMessageUnread(message);
 * </code></pre>
 * 
 * @function GmailApp.markMessageUnread
 * 
 * @param {GmailApp.GmailMessage} message - the message to mark as unread
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks these messages read and forces the messages to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Mark first three messages in the first inbox thread as read.
 * // Assumes that the first inbox thread has 3 messages in it.
 * var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
 * var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
 * GmailApp.markMessagesRead(thread.getMessages());
 * </code></pre>
 * 
 * @function GmailApp.markMessagesRead
 * 
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to mark as read
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks these messages unread and forces the messages to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Mark first three messages in the first inbox thread as unread.
 * // Assumes that the first inbox thread has 3 messages in it
 * var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
 * var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
 * GmailApp.markMessagesUnread(thread.getMessages());
 * </code></pre>
 * 
 * @function GmailApp.markMessagesUnread
 * 
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to mark as unread
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks this thread as important and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first inbox thread as important
 * var thread = GmailApp.getInboxThreads(0, 1)[0];
 * GmailApp.markThreadImportant(thread);
 * </code></pre>
 * 
 * @function GmailApp.markThreadImportant
 * 
 * @param {GmailApp.GmailThread} thread - the thread to mark as important
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks this thread as read and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first inbox thread as read
 * var thread = GmailApp.getInboxThreads(0, 1)[0];
 * GmailApp.markThreadRead(thread);
 * </code></pre>
 * 
 * @function GmailApp.markThreadRead
 * 
 * @param {GmailApp.GmailThread} thread - the thread to mark as read
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks this thread as unimportant and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first inbox thread as unimportant
 * var thread = GmailApp.getInboxThreads(0, 1)[0];
 * GmailApp.markThreadUnimportant(thread);
 * </code></pre>
 * 
 * @function GmailApp.markThreadUnimportant
 * 
 * @param {GmailApp.GmailThread} thread - the thread to mark as unimportant
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks this thread unread and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first inbox thread as unread
 * var thread = GmailApp.getInboxThreads(0, 1)[0];
 * GmailApp.markThreadUnread(thread);
 * </code></pre>
 * 
 * @function GmailApp.markThreadUnread
 * 
 * @param {GmailApp.GmailThread} thread - the thread to mark as unread
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks these threads as important and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first two threads in inbox as important
 * var threads = GmailApp.getInboxThreads(0, 2);
 * GmailApp.markThreadsImportant(threads);
 * </code></pre>
 * 
 * @function GmailApp.markThreadsImportant
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as important
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks these threads as read and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first two threads in inbox as read
 * var threads = GmailApp.getInboxThreads(0, 2);
 * GmailApp.markThreadsRead(threads);
 * </code></pre>
 * 
 * @function GmailApp.markThreadsRead
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as read
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks these threads as unimportant and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first two threads in inbox as unimportant
 * var threads = GmailApp.getInboxThreads(0, 2);
 * GmailApp.markThreadsUnimportant(threads);
 * </code></pre>
 * 
 * @function GmailApp.markThreadsUnimportant
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as unimportant
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Marks these threads as unread and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Marks first two threads in inbox as unread
 * var threads = GmailApp.getInboxThreads(0, 2);
 * GmailApp.markThreadsUnread(threads);
 * </code></pre>
 * 
 * @function GmailApp.markThreadsUnread
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to mark as unread
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves the message to the trash and forces the message to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Move the first message in your inbox to trash
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var firstMessage = firstThread.getMessages()[0];
 * GmailApp.moveMessageToTrash(firstMessage);
 * </code></pre>
 * 
 * @function GmailApp.moveMessageToTrash
 * 
 * @param {GmailApp.GmailMessage} message - the message to be trashed
 * 
 * @return {GmailApp} the Gmail service (useful for chaining)
 */


/**
 * Moves the specified messages to the trash and forces the messages to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Move first two messages in your inbox to trash
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var messages = firstThread.getMessages();
 * var toDelete = [messages[0], messages[1]];
 * GmailApp.moveMessagesToTrash(toDelete);
 * </code></pre>
 * 
 * @function GmailApp.moveMessagesToTrash
 * 
 * @param {GmailApp.GmailMessage[]} messages - the messages to be trashed
 * 
 * @return {GmailApp} the Gmail service (useful for chaining)
 */


/**
 * Moves this thread to the archive and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Archive the first thread in your inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * GmailApp.moveThreadToArchive(firstThread);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadToArchive
 * 
 * @param {GmailApp.GmailThread} thread - the thread to be archive
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves this thread to the inbox and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Find a thread not already in your inbox
 * var thread = GmailApp.search(&quot;-in:inbox&quot;)[0]; // Get the first one
 * GmailApp.moveThreadToInbox(thread);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadToInbox
 * 
 * @param {GmailApp.GmailThread} thread - the thread to be moved to the inbox
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves this thread to spam and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Tag first thread in inbox as spam
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * GmailApp.moveThreadToSpam(firstThread);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadToSpam
 * 
 * @param {GmailApp.GmailThread} thread - the thread to be moved to spam
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves this thread to the trash and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Move first thread in inbox to trash
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * GmailApp.moveThreadToTrash(firstThread);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadToTrash
 * 
 * @param {GmailApp.GmailThread} thread - the thread to be trashed
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves these threads to the archive and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Move first two threads in your inbox to the archive
 * var firstTwoThreads = GmailApp.getInboxThreads(0,2);
 * GmailApp.moveThreadsToArchive(firstTwoThreads);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadsToArchive
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be archived
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves these threads to the inbox and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Find two threads not already in your inbox
 * var firstTwoThreads = GmailApp.search(&quot;-in:inbox&quot;, 0, 2);
 * GmailApp.moveThreadsToInbox(firstTwoThreads);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadsToInbox
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be moved to the inbox
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves these threads to spam and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Move first two threads in your inbox to spam
 * var firstTwoThreads = GmailApp.getInboxThreads(0,2);
 * GmailApp.moveThreadsToSpam(firstTwoThreads);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadsToSpam
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be moved to spam
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Moves these threads to the trash and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Move first two threads in your inbox to trash
 * var firstTwoThreads = GmailApp.getInboxThreads(0,2);
 * GmailApp.moveThreadsToTrash(firstTwoThreads);
 * </code></pre>
 * 
 * @function GmailApp.moveThreadsToTrash
 * 
 * @param {GmailApp.GmailThread[]} threads - an array of threads to be trashed
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Reloads the message and associated state from Gmail (useful in case the labels, read state,
 * etc., have changed).
 * 
 * <pre class="prettyprint"><code>
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var firstMessage = firstThread.getMessages()[0];
 * // ...Do something that may take a while here....
 * GmailApp.refreshMessage(firstMessage);
 * // ...Do more stuff with firstMessage...
 * </code></pre>
 * 
 * @function GmailApp.refreshMessage
 * 
 * @param {GmailApp.GmailMessage} message - the message to be refreshed
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Reloads the messages and associated state from Gmail (useful in case the labels, read state,
 * etc., have changed).
 * 
 * <pre class="prettyprint"><code>
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var coupleOfMessages = firstThread.getMessages().slice(0, 2);
 * // ...Do something that may take a while here....
 * GmailApp.refreshMessages(coupleOfMessages);
 * // ...Do more stuff with coupleOfMessages...
 * </code></pre>
 * 
 * @function GmailApp.refreshMessages
 * 
 * @param {GmailApp.GmailMessage[]} messages - the messages to be refreshed
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Reloads the thread and associated state from Gmail (useful in case the labels, read state,
 * etc., have changed).
 * 
 * <pre class="prettyprint"><code>
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * // ...Do something that may take a while here....
 * GmailApp.refreshThread(firstThread);
 * // ... Do more stuff with the thread ...
 * </code></pre>
 * 
 * @function GmailApp.refreshThread
 * 
 * @param {GmailApp.GmailThread} thread - the thread to be refreshed
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Reloads the threads and associated state from Gmail (useful in case the labels, read state,
 * etc., have changed).
 * 
 * <pre class="prettyprint"><code>
 * var threads = GmailApp.getInboxThreads(0, 3);
 * // ...Do something that may take a while here....
 * GmailApp.refreshThreads(threads);
 * // ... Do more stuff with threads ...
 * </code></pre>
 * 
 * @function GmailApp.refreshThreads
 * 
 * @param {GmailApp.GmailThread[]} threads - the threads to be refreshed
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Search Gmail with the given query.
 * 
 * <p>This call will fail when the size of all threads is too large for the system to handle.
 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
 * specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * // Find starred messages with subject IMPORTANT
 * var threads = GmailApp.search(&#39;is:starred subject:&quot;IMPORTANT&quot;&#39;);
 * </code></pre>
 * 
 * @function GmailApp.search
 * 
 * @param {String} query - the search query, as you would type it into Gmail
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads matching this query
 */


/**
 * Search Gmail with the given query.
 * 
 * <pre class="prettyprint"><code>
 * // Find starred messages with subject IMPORTANT and return second batch of 10.
 * // Assumes there are at least 11 of them, otherwise this will return an empty array.
 * var threads = GmailApp.search(&#39;is:starred subject:&quot;IMPORTANT&quot;&#39;, 10, 10);
 * </code></pre>
 * 
 * @function GmailApp.search
 * 
 * @param {String} query - the search query, as you would type it into Gmail
 * @param {IntegerNum} start - the index of the starting thread
 * @param {IntegerNum} max - the maximum number of threads to return
 * 
 * @return {GmailApp.GmailThread[]} an array of Gmail threads matching this query
 */


/**
 * Sends an email message. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // The code below will send an email with the current date and time.
 * var now = new Date();
 * GmailApp.sendEmail(&quot;mike@example.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
 * </code></pre>
 * 
 * @function GmailApp.sendEmail
 * 
 * @param {String} recipient - comma separated list of email addresses
 * @param {String} subject - subject of the email (250 characters maximum)
 * @param {String} body - body of the email
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Sends an email message with optional arguments. The email can contain plain text or an HTML
 * body. The size of the email (including headers, but excluding attachments) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Send an email with a file from Google Drive attached as a PDF.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * GmailApp.sendEmail(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Please see the attached file.&#39;, {
 *     attachments: [file.getAs(MimeType.PDF)],
 *     name: &#39;Automatic Emailer Script&#39;
 * });
 * </code></pre>
 * 
 * @function GmailApp.sendEmail
 * 
 * @param {String} recipient - the addresses of the recipient
 * @param {String} subject - the subject line (250 characters maximum)
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Sets the <a href="/gmail/add-ons/concepts/scopes#access_tokens">current message access
 * token</a> that enables the script to access the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-message.html'>GmailMessage</a></code> properties.
 * 
 * <p>Only <a href="/gmail/add-ons/">Gmail add-on</a> projects using Gmail <a
 * href="/gmail/add-ons/concepts/scopes#gmail_add-on_scopes">current message scopes</a> require
 * this method.
 * 
 * <pre class="prettyprint"><code>
 * function handleAddonActionEvent(e) {
 *   var accessToken = e.messageMetadata.accessToken;
 *   var messageId = e.messageMetadata.messageId;
 *   GmailApp.setCurrentMessageAccessToken(accessToken);
 *   var mailMessage = GmailApp.getMessageById(messageId);
 *   // Do something with mailMessage
 * }
 * </code></pre>
 * 
 * @function GmailApp.setCurrentMessageAccessToken
 * 
 * @param {String} accessToken - the temporary access token obtained from a Gmail add-on <a
 *     href="/gmail/add-ons/concepts/actions#action_event_objects">action event object</a>.
 * 
 * @return void
 */


/**
 * Adds a star to this message and forces the message to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Stars the first message in the first thread in your inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * GmailApp.starMessage(message);
 * </code></pre>
 * 
 * @function GmailApp.starMessage
 * 
 * @param {GmailApp.GmailMessage} message - the message to star
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Adds stars to these messages and forces the messages to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Stars the first three messages in the first thread in your inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var coupleOfMessages = firstThread.getMessages().slice(0, 3);
 * GmailApp.starMessages(coupleOfMessages);
 * </code></pre>
 * 
 * @function GmailApp.starMessages
 * 
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to star
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Removes a star from this message and forces the message to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Unstars the first message in the first thread in your inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * GmailApp.unstarMessage(message);
 * </code></pre>
 * 
 * @function GmailApp.unstarMessage
 * 
 * @param {GmailApp.GmailMessage} message - the message to unstar
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */


/**
 * Removes stars from these messages and forces the messages to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // Unstars the first three messages in the first thread in your inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var coupleOfMessages = firstThread.getMessages().slice(0, 3);
 * GmailApp.unstarMessages(coupleOfMessages);
 * </code></pre>
 * 
 * @function GmailApp.unstarMessages
 * 
 * @param {GmailApp.GmailMessage[]} messages - an array of messages to unstar
 * 
 * @return {GmailApp} the Gmail service, useful for chaining
 */



/**
 * @class GmailApp.GmailAttachment
 */

/**
 * Returns a copy of this blob.
 * 
 * @function GmailApp.GmailAttachment#copyBlob
 * 
 * @return {Blob} The new copy.
 */


/**
 * Gets all the blobs that are contained within this (possibly composite) blob.
 * 
 * @function GmailApp.GmailAttachment#getAllBlobs
 * @deprecated
 * 
 * @return {Blob[]} The blobs contained within the blob.
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function GmailApp.GmailAttachment#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Gets the data stored in this blob.
 * 
 * @function GmailApp.GmailAttachment#getBytes
 * 
 * @return {Byte[]} The stored bytes.
 */


/**
 * Gets the content type of the bytes in this blob.
 * 
 * @function GmailApp.GmailAttachment#getContentType
 * 
 * @return {String} The content type of this data, if known, or <code>null</code>.
 */


/**
 * Gets the data of this blob as a String with UTF-8 encoding.
 * 
 * @function GmailApp.GmailAttachment#getDataAsString
 * 
 * @return {String} The data as a string.
 */


/**
 * Gets the data of this blob as a string with the specified encoding.
 * 
 * @function GmailApp.GmailAttachment#getDataAsString
 * 
 * @param {String} charset - The charset to use in encoding the data in this blob as a string.
 * 
 * @return {String} The data as a string.
 */


/**
 * Gets the SHA1 content hash for this attachment. This method does not count against the Gmail
 * read quota.
 * 
 * @function GmailApp.GmailAttachment#getHash
 * 
 * @return {String} The SHA1 content hash, as a string.
 */


/**
 * Gets the name of this blob.
 * 
 * @function GmailApp.GmailAttachment#getName
 * 
 * @return {String} The name of this data, if known, or <code>null</code>.
 */


/**
 * Gets the size of this attachment. This method is faster than calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-attachment.html#getBytes()'>getBytes()</a></code><code>.length</code> and does not count against the Gmail read quota.
 * 
 * @function GmailApp.GmailAttachment#getSize
 * 
 * @return {IntegerNum} The size of the attachment, in bytes.
 */


/**
 * Returns whether this blob is a G Suite file (Sheets, Docs, etc.).
 * 
 * @function GmailApp.GmailAttachment#isGoogleType
 * 
 * @return {Boolean} <code>true</code> if this blob is a G Suite file; <code>false</code> if not.
 */


/**
 * Sets the data stored in this blob.
 * 
 * @function GmailApp.GmailAttachment#setBytes
 * 
 * @param {Byte[]} data - The new data.
 * 
 * @return {Blob} This blob, for chaining.
 */


/**
 * Sets the content type of the bytes in this blob.
 * 
 * @function GmailApp.GmailAttachment#setContentType
 * 
 * @param {String} contentType - The new contentType.
 * 
 * @return {Blob} This blob, for chaining.
 */


/**
 * Sets the content type of the bytes in this blob based on the file extension. The contentType is
 * <code>null</code> if it cannot be guessed from its extension.
 * 
 * @function GmailApp.GmailAttachment#setContentTypeFromExtension
 * 
 * @return {Blob} This blob, for chaining.
 */


/**
 * Sets the data of this blob from a string with UTF-8 encoding.
 * 
 * @function GmailApp.GmailAttachment#setDataFromString
 * 
 * @param {String} string - The string data.
 * 
 * @return {Blob} This blob, for chaining.
 */


/**
 * Sets the data of this blob from a string with the specified encoding.
 * 
 * @function GmailApp.GmailAttachment#setDataFromString
 * 
 * @param {String} string - The string data.
 * @param {String} charset - The charset to use in interpreting the string as bytes.
 * 
 * @return {Blob} This blob, for chaining.
 */


/**
 * Sets the name of this blob.
 * 
 * @function GmailApp.GmailAttachment#setName
 * 
 * @param {String} name - The new name.
 * 
 * @return {Blob} This blob, for chaining.
 */



/**
 * @class GmailApp.GmailDraft
 */

/**
 * Deletes this draft message.
 * 
 * <pre class="prettyprint"><code>
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * draft.deleteDraft();
 * draft.getMessage(); // Throws exception!
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#deleteDraft
 * 
 * @return void
 */


/**
 * Gets the ID of this draft message.
 * 
 * <pre class="prettyprint"><code>
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * var draftId = draft.getId();
 * var draftById = GmailApp.getDraft(draftId);
 * Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#getId
 * 
 * @return {String} the draft ID
 */


/**
 * Returns a GmailMessage representing this draft.
 * 
 * <pre class="prettyprint"><code>
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * var message = draft.getMessage();
 * Logger.log(message.getSubject());
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#getMessage
 * 
 * @return {GmailApp.GmailMessage} the message that represents the contents of this draft
 */


/**
 * Returns the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-message.html'>GmailMessage</a></code> representing this draft.
 * 
 * <pre class="prettyprint"><code>
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * var messageId = draft.getMessageId();
 * Logger.log(messageId == draft.getMessage().getId());
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#getMessageId
 * 
 * @return {String} the message ID
 */


/**
 * Sends this draft email message. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * var msg = draft.send(); // Send it
 * Logger.log(msg.getDate()); // Should be approximately the current timestamp
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#send
 * 
 * @return {GmailApp.GmailMessage} the newly sent message
 */


/**
 * Replaces the contents of this draft message. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // The code below will update a draft email with the current date and time.
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * var now = new Date();
 * draft.update(&quot;mike@example.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#update
 * 
 * @param {String} recipient - comma separated list of email addresses
 * @param {String} subject - subject of the email (250 characters maximum)
 * @param {String} body - body of the email
 * 
 * @return {GmailApp.GmailDraft} the newly updated draft
 */


/**
 * Replaces the contents of this draft message using optional arguments. The email can contain
 * plain text or an HTML body. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Update a draft email with a file from Google Drive attached as a PDF.
 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * draft.update(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Please see attached file.&#39;, {
 *     attachments: [file.getAs(MimeType.PDF)],
 *     name: &#39;Automatic Emailer Script&#39;
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailDraft#update
 * 
 * @param {String} recipient - comma separated list of email addresses
 * @param {String} subject - subject of the email (250 characters maximum)
 * @param {String} body - body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp.GmailDraft} the newly updated draft
 */



/**
 * @class GmailApp.GmailLabel
 */

/**
 * Adds this label to the given thread and forces the thread to refresh (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-thread.html#refresh()'>GmailThread.refresh()</a></code>).
 * 
 * <pre class="prettyprint"><code>
 * // label the first thread in the inbox with the label MyLabel
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * label.addToThread(firstThread);
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#addToThread
 * 
 * @param {GmailApp.GmailThread} thread - The thread to be labeled.
 * 
 * @return {GmailApp.GmailLabel} This label, for chaining.
 */


/**
 * Adds this label to the given threads and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // label the first three threads in the inbox with the label MyLabel
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var threads = GmailApp.getInboxThreads(0,3);
 * label.addToThreads(threads);
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#addToThreads
 * 
 * @param {GmailApp.GmailThread[]} threads - An array of threads to be labeled.
 * 
 * @return {GmailApp.GmailLabel} This label, for chaining.
 */


/**
 * Deletes this label.
 * 
 * <pre class="prettyprint"><code>
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * label.deleteLabel();
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#deleteLabel
 * 
 * @return void
 */


/**
 * Gets the name of this label.
 * 
 * <pre class="prettyprint"><code>
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * Logger.log(label.getName()); //logs MyLabel
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#getName
 * 
 * @return {String} The name of the label.
 */


/**
 * Gets the threads that are marked with this label.
 * 
 * <p>This calls fail when the size of all threads is too large for the system to handle. Where
 * the thread size is unknown, and potentially very large, please use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-label.html#getThreads(Integer,Integer)'>getThreads(start, max)</a></code> and specify ranges of the threads to retrieve in each call.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subject lines of the threads labeled with MyLabel
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var threads = label.getThreads();
 * for (var i = 0; i &lt; threads.length; i++) {
 *   Logger.log(threads[i].getFirstMessageSubject());
 * }
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#getThreads
 * 
 * @return {GmailApp.GmailThread[]} An array of threads marked with this label.
 */


/**
 * Gets a range of threads marked with this label.
 * 
 * <pre class="prettyprint"><code>
 * // log the subject lines of up to the first 30 threads with the label MyLabel
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var threads = label.getThreads(0, 30);
 * for (var i = 0; i &lt; threads.length; i++) {
 *   Logger.log(threads[i].getFirstMessageSubject());
 * }
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#getThreads
 * 
 * @param {IntegerNum} start - The index of the starting thread.
 * @param {IntegerNum} max - The maximum number of threads to return.
 * 
 * @return {GmailApp.GmailThread[]} An array of threads marked with this label.
 */


/**
 * Gets the number of unread threads tagged with this label.
 * 
 * <pre class="prettyprint"><code>
 * // log the number of unread threads labeled with MyLabel
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * Logger.log(label.getUnreadCount());
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#getUnreadCount
 * 
 * @return {IntegerNum} The number of unread labeled threads.
 */


/**
 * Removes this label from the given thread and forces the thread to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // remove the label MyLabel from the first thread in the inbox
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * label.removeFromThread(firstThread);
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#removeFromThread
 * 
 * @param {GmailApp.GmailThread} thread - The thread be unlabeled.
 * 
 * @return {GmailApp.GmailLabel} This label, for chaining.
 */


/**
 * Removes this label from the given threads and forces the threads to refresh.
 * 
 * <pre class="prettyprint"><code>
 * // remove the label MyLabel from the first three threads in the inbox
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var threads = GmailApp.getInboxThreads(0,3);
 * label.removeFromThreads(threads);
 * </code></pre>
 * 
 * @function GmailApp.GmailLabel#removeFromThreads
 * 
 * @param {GmailApp.GmailThread[]} threads - An array of threads to be unlabeled.
 * 
 * @return {GmailApp.GmailLabel} This label, for chaining.
 */



/**
 * @class GmailApp.GmailMessage
 */

/**
 * Creates a draft message replying to the sender of this message using the reply-to address. The
 * size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft reply to the original message with an acknowledgment.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.createDraftReply(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#createDraftReply
 * 
 * @param {String} body - The body of the email.
 * 
 * @return {GmailApp.GmailDraft} The newly created draft message.
 */


/**
 * Creates a draft message replying to the sender of this message using the reply-to address, with
 * optional arguments.
 * 
 * <p>The email can contain both plain text and an HTML body. The size of the email (including
 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft response with an HTML text body.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.createDraftReply(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
 *   cc: &quot;another@example.com&quot;
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#createDraftReply
 * 
 * @param {String} body - The body of the email.
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {GmailApp.GmailDraft} The newly created draft message.
 */


/**
 * Creates a draft message replying to the sender using the reply-to address and all recipients of
 * this message. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft response to all recipients (except those bcc&#39;d) with an acknowledgment.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.createDraftReplyAll(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#createDraftReplyAll
 * 
 * @param {String} body - The body of the email.
 * 
 * @return {GmailApp.GmailDraft} The newly created draft message.
 */


/**
 * Creates a draft message replying to the sender of this message using the reply-to address and
 * all recipients, with optional arguments.
 * 
 * <p>The email can contain both plain text and an HTML body. The size of the email (including
 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft response to all recipients (except those bcc&#39;d) using an HTML text body.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages[0];
 * message.createDraftReplyAll(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
 *   cc: &quot;another@example.com&quot;
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#createDraftReplyAll
 * 
 * @param {String} body - The body of the email.
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {GmailApp.GmailDraft} The newly created draft message.
 */


/**
 * Forwards this message to new recipients. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Forward first message of first inbox thread to recipient1 &amp; recipient2, both @example.com
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.forward(&quot;recipient1@example.com,recipient2@example.com&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#forward
 * 
 * @param {String} recipient - A comma-separated list of email addresses.
 * 
 * @return {GmailApp.GmailMessage} This message, useful for chaining.
 */


/**
 * Forwards this message to new recipients, with optional arguments.
 * 
 * <p>The email can contain both plain text, and also an HTML body. The size of the email
 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.forward(&quot;recipient1@example.com,recipient2@example.com&quot;, {
 *   cc: &quot;myboss@example.com&quot;,
 *   bcc: &quot;mybosses-boss@example.com,vp@example.com&quot;
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#forward
 * 
 * @param {String} recipient - A comma-separated list of email addresses.
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {GmailApp.GmailMessage} This message, useful for chaining.
 */


/**
 * Gets all the attachments for this message.
 * 
 * @function GmailApp.GmailMessage#getAttachments
 * 
 * @return {GmailApp.GmailAttachment[]} An array of Blob attachments for this message.
 */


/**
 * Gets all the attachments for this message.
 * 
 * @function GmailApp.GmailMessage#getAttachments
 * 
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {GmailApp.GmailAttachment[]} An array of Blob attachments for this message.
 */


/**
 * Gets the comma-separated recipients bcc'd on this message.
 * 
 * <p>This is empty for all received messages, by definition.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getBcc()); // Log bcc&#39;d addresses
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getBcc
 * 
 * @return {String} The comma-separated recipients bcc'd on this message.
 */


/**
 * Gets the HTML content of the body of this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getBody()); // Log contents of the body
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getBody
 * 
 * @return {String} The body content of this message.
 */


/**
 * Gets the comma-separated recipients cc'd on this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getCc()); // Log cc&#39;d addresses
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getCc
 * 
 * @return {String} The comma-separated recipients cc'd on this message.
 */


/**
 * Gets the date and time of this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getDate()); // Log date and time of the message
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getDate
 * 
 * @return {Date} The date and time of this message.
 */


/**
 * Gets the sender of this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getFrom()); // Log from address of the message
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getFrom
 * 
 * @return {String} The email address of the message sender.
 */


/**
 * Gets the ID of this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * var id = message.getId();
 * var messageById = GmailApp.getMessageById(id);
 * Logger.log(message.getSubject() == messageById.getMessage()); // Always logs true
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getId
 * 
 * @return {String} The message ID.
 */


/**
 * Gets the content of the body of this message without HTML formatting. This is more complex than
 * <code>getBody()</code> and takes longer.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getPlainBody()); // Log contents of the body
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getPlainBody
 * 
 * @return {String} The plain body content of this message.
 */


/**
 * Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
 * 
 * @function GmailApp.GmailMessage#getRawContent
 * 
 * @return {String} The raw content of this message.
 */


/**
 * Gets the reply-to address of this message (usually the sender).
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getReplyTo()); // Logs reply-to address
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getReplyTo
 * 
 * @return {String} The email address for replies.
 */


/**
 * Gets the subject of this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getSubject()); // Log subject line
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getSubject
 * 
 * @return {String} The subject of this message.
 */


/**
 * Gets the thread that contains this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getThread().getFirstMessageSubject() ==
 *            thread.getFirstMessageSubject()); // Always logs true
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getThread
 * 
 * @return {GmailApp.GmailThread} The GmailThread that contains this message.
 */


/**
 * Gets the comma-separated recipients of this message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(message.getTo()); // Log the recipient of message
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#getTo
 * 
 * @return {String} The comma-separated recipients of this message.
 */


/**
 * Gets whether this message is a draft.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(&quot;is draft? &quot; + message.isDraft());
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isDraft
 * 
 * @return {Boolean} Whether this message is a draft.
 */


/**
 * Gets whether this message is a chat.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(&quot;is a chat? &quot; + message.isInChats());
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isInChats
 * 
 * @return {Boolean} Whether this message is a chat.
 */


/**
 * Gets whether this message is in the inbox.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(&quot;is in inbox? &quot; + message.isInInbox());
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isInInbox
 * 
 * @return {Boolean} Whether this message is in the inbox.
 */


/**
 * Returns <code>true</code> if this message is in the priority inbox; returns <code>false</code> otherwise.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getPriorityInboxThreads(0,1)[0]; // Get first thread in priority inbox
 * var messages = thread.getMessages();
 * for (var i = 0; i &lt; messages.length; i++) {
 *   // At least one of the messages is in priority inbox
 *   Logger.log(&quot;is in priority inbox? &quot; + messages[i].isInPriorityInbox());
 * }
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isInPriorityInbox
 * 
 * @return {Boolean} Whether this message is in the priority inbox.
 */


/**
 * Gets whether this message is in the trash.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(&quot;is in the trash? &quot; + message.isInTrash());
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isInTrash
 * 
 * @return {Boolean} Whether this message is in the trash.
 */


/**
 * Gets whether this message is starred.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(&quot;is starred? &quot; + message.isStarred());
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isStarred
 * 
 * @return {Boolean} Whether this message is starred.
 */


/**
 * Gets whether this message is unread.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * Logger.log(&quot;is unread? &quot; + message.isUnread());
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#isUnread
 * 
 * @return {Boolean} The unread status of this message.
 */


/**
 * Marks the message as read.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * message.markRead(); // Mark as read
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#markRead
 * 
 * @return {GmailApp.GmailMessage} This GmailMessage, useful for chaining.
 */


/**
 * Marks the message as unread.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * message.markUnread(); // Mark as unread
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#markUnread
 * 
 * @return {GmailApp.GmailMessage} This GmailMessage, useful for chaining.
 */


/**
 * Moves the message to the trash.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * message.moveToTrash(); // Move message to trash
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#moveToTrash
 * 
 * @return {GmailApp.GmailMessage} This GmailMessage, useful for chaining.
 */


/**
 * Reloads this message and associated state from Gmail (useful in case the labels, read state,
 * etc., have changed).
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * // .. Do bunch of stuff here
 * message.refresh(); // Make sure it&#39;s up to date
 * // Do more stuff to message
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#refresh
 * 
 * @return {GmailApp.GmailMessage} This message for chaining.
 */


/**
 * Replies to the sender of this message using the reply-to address. The size of the email
 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Respond to author of message with acknowledgment
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.reply(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#reply
 * 
 * @param {String} body - The body of the email.
 * 
 * @return {GmailApp.GmailMessage} This message, useful for chaining.
 */


/**
 * Replies to the sender of this message using the reply-to address, with optional arguments.
 * 
 * <p>The email can contain both plain text, and also an HTML body. The size of the email
 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Respond with HTML body text
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.reply(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
 *   noReply: true
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#reply
 * 
 * @param {String} body - The body of the email.
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {GmailApp.GmailMessage} This message, useful for chaining.
 */


/**
 * Replies to the sender using the reply-to address and all recipients of this message. The size
 * of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Respond to all recipients (except bcc&#39;d) of last email in thread with acknowledgment
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.replyAll(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#replyAll
 * 
 * @param {String} body - The body of the email.
 * 
 * @return {GmailApp.GmailMessage} This message,useful for chaining.
 */


/**
 * Replies to the sender of this message using the reply-to address and all recipients, with
 * optional arguments.
 * 
 * <p>The email can contain both plain text, and also an HTML body. The size of the email
 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Respond with HTML body text
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages[0];
 * messageThread.replyAll(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
 *   noReply: true
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#replyAll
 * 
 * @param {String} body - The body of the email.
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {GmailApp.GmailMessage} This message, useful for chaining.
 */


/**
 * Stars the message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * message.star(); // Star the message
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#star
 * 
 * @return {GmailApp.GmailMessage} This GmailMessage, useful for chaining.
 */


/**
 * Unstars the message.
 * 
 * <pre class="prettyprint"><code>
 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
 * var message = thread.getMessages()[0]; // Get first message
 * message.unstar(); // Unstar the message
 * </code></pre>
 * 
 * @function GmailApp.GmailMessage#unstar
 * 
 * @return {GmailApp.GmailMessage} This GmailMessage, useful for chaining.
 */



/**
 * @class GmailApp.GmailThread
 */

/**
 * Adds this label to the thread.
 * 
 * <pre class="prettyprint"><code>
 * // Add label MyLabel to the first thread in the inbox
 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.addLabel(label);
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#addLabel
 * 
 * @param {GmailApp.GmailLabel} label - the label to apply to this thread
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Creates a draft message replying to the sender of the last message in this thread using the
 * reply-to address. The size of the email (including headers) is <a
 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft reply to the message author with an acknowledgement.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.createDraftReply(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#createDraftReply
 * 
 * @param {String} body - the body of the email
 * 
 * @return {GmailApp.GmailDraft} the newly created draft message
 */


/**
 * Creates a draft message replying to the sender of the last message in this thread using the
 * reply-to address, with optional arguments.
 * 
 * <p>The email can contain both plain text and an HTML body. The size of the email (including
 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft response with an HTML text body.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.createDraftReply(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
 *   cc: &quot;another@example.com&quot;
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#createDraftReply
 * 
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp.GmailDraft} the newly created draft message
 */


/**
 * Creates a draft message replying to the sender of the last message in this thread, using the
 * reply-to address and all recipients of this message. The size of the email (including headers)
 * is <a href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft reply to all recipients (except those bcc&#39;d) of the last email in this
 * // thread.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var message = firstThread.getMessages()[0];
 * message.createDraftReplyAll(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#createDraftReplyAll
 * 
 * @param {String} body - the body of the email
 * 
 * @return {GmailApp.GmailDraft} the newly created draft message
 */


/**
 * Creates a draft message replying to the sender of the last message in this thread, using the
 * reply-to address and all recipients, with optional arguments.
 * 
 * <p>The email can contain both plain text and an HTML body. The size of the email (including
 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
 * limited</a>.
 * 
 * <pre class="prettyprint"><code>
 * // Create a draft reply, using an HTML text body, to all recipients (except those bcc&#39;d) of
 * // the last email of in this thread.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.createDraftReplyAll(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
 *   cc: &quot;another@example.com&quot;
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#createDraftReplyAll
 * 
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp.GmailDraft} the newly created draft message
 */


/**
 * Gets the subject of the first message in the thread.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subject of the first message in the first thread in the inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(firstThread.getFirstMessageSubject());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getFirstMessageSubject
 * 
 * @return {String} the subject of the first message in the thread
 */


/**
 * Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a
 * consistent ID for a particular message in the thread, call <code>getMessages()[0].getId()</code>
 * instead.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subject of the first message in the first thread in the inbox.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var id = firstThread.getId();
 * // Get same thread by its ID.
 * var thread = GmailApp.getThreadById(id);
 * Logger.log(thread.getFirstMessageSubject() == firstThread.getFirstMessageSubject()); // True
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getId
 * 
 * @return {String} the ID of this thread
 */


/**
 * Returns the user-created labels on this thread.
 * 
 * <pre class="prettyprint"><code>
 * // Log the names of the labels attached to the first thread in the inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var labels = firstThread.getLabels();
 * for (var i = 0; i &lt; labels.length; i++) {
 *   Logger.log(labels[i].getName());
 * }
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getLabels
 * 
 * @return {GmailApp.GmailLabel[]} an array of labels for this thread
 */


/**
 * Gets the date of this thread's most recent message.
 * 
 * <pre class="prettyprint"><code>
 * // Log the date of the most recent message on the first thread in the inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(firstThread.getLastMessageDate());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getLastMessageDate
 * 
 * @return {Date} the date of the most recent message in the thread
 */


/**
 * Returns the number of messages in the thread.
 * 
 * <pre class="prettyprint"><code>
 * // Log the number of messages in the thread
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(firstThread.getMessageCount());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getMessageCount
 * 
 * @return {IntegerNum} the number of messages in the thread
 */


/**
 * Gets the messages in this thread.
 * 
 * <pre class="prettyprint"><code>
 * // Log the subjects of the messages in the thread
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * var messages = firstThread.getMessages();
 * for (var i = 0; i &lt; messages.length; i++) {
 *   Logger.log(messages[i].getSubject());
 * }
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getMessages
 * 
 * @return {GmailApp.GmailMessage[]} an array of Gmail messages in this thread
 */


/**
 * Gets a permalink for this thread.
 * 
 * <p>Note that this only works with the classic Gmail interface, not Inbox.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the permalink for the first thread in the inbox
 * var thread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(thread.getPermalink());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#getPermalink
 * 
 * @return {String} the permalink for this thread
 */


/**
 * Returns whether the thread has any starred messages.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread has starred messages
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;has starred : &#39; + firstThread.hasStarredMessages());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#hasStarredMessages
 * 
 * @return {Boolean} true if the thread has any starred messages
 */


/**
 * Returns whether the thread is marked important.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is marked important
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;Important? : &#39; + firstThread.isImportant());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isImportant
 * 
 * @return {Boolean} true if the thread is marked important
 */


/**
 * Returns whether the thread is labeled a chat.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is a chat
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;is in chats? : &#39; + firstThread.isInChats());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isInChats
 * 
 * @return {Boolean} true if the thread is labeled a chat
 */


/**
 * Returns whether the thread is in the inbox.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is in the inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;is in the inbox? : &#39; + firstThread.isInInbox());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isInInbox
 * 
 * @return {Boolean} true if the thread is in the inbox
 */


/**
 * Returns true if this thread is in the priority inbox; returns false otherwise.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is in the priority inbox
 * var firstThread = GmailApp.getPriorityInboxThreads(0,1)[0];
 * Logger.log(&quot;is in priority inbox? &quot; + firstThread.isInPriorityInbox());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isInPriorityInbox
 * 
 * @return {Boolean} true if the thread is in the priority inbox
 */


/**
 * Returns whether the thread is marked as spam.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is in the spam folder
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;Spam? &#39; + firstThread.isInSpam());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isInSpam
 * 
 * @return {Boolean} true if the thread is marked as spam
 */


/**
 * Returns whether the thread is in the trash.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is in the trash
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;Trashed? &#39; + firstThread.isInTrash());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isInTrash
 * 
 * @return {Boolean} true if the thread is in the trash
 */


/**
 * Returns whether the thread has any unread messages.
 * 
 * <pre class="prettyprint"><code>
 * // Log if this thread is unread
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * Logger.log(&#39;Unread? &#39; + firstThread.isUnread());
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#isUnread
 * 
 * @return {Boolean} true if there are unread messages
 */


/**
 * Marks this thread as important.
 * 
 * <pre class="prettyprint"><code>
 * // Mark first inbox thread as important
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.markImportant();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#markImportant
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Marks this thread as read.
 * 
 * <pre class="prettyprint"><code>
 * // Mark first inbox thread as read
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.markRead();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#markRead
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Marks this thread as unimportant.
 * 
 * <pre class="prettyprint"><code>
 * // Mark first inbox thread as unimportant
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.markUnimportant();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#markUnimportant
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Marks this thread as unread.
 * 
 * <pre class="prettyprint"><code>
 * // Mark first inbox thread as unread
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.markUnread();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#markUnread
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Moves this thread to the archive.
 * 
 * <pre class="prettyprint"><code>
 * // Archive first inbox thread
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.moveToArchive();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#moveToArchive
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Moves this thread to the inbox.
 * 
 * <pre class="prettyprint"><code>
 * // Move first non-inbox thread to inbox
 * var firstThread = GmailApp.search(&quot;-in:inbox&quot;)[0];
 * firstThread.moveToInbox();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#moveToInbox
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Moves this thread to spam.
 * 
 * <pre class="prettyprint"><code>
 * // Move first inbox thread to spam
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.moveToSpam();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#moveToSpam
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Moves this thread to the trash.
 * 
 * <pre class="prettyprint"><code>
 * // Move first inbox thread to trash
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.moveToTrash();
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#moveToTrash
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Reloads this thread, and associated state from Gmail (useful in case the labels, read state,
 * etc., have changed).
 * 
 * <pre class="prettyprint"><code>
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * // ...Do something that may take a while here....
 * firstThread.refresh(); // Make sure it&#39;s up-to-date
 * // ...Do more stuff with firstThread ...
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#refresh
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Removes this label from the thread.
 * 
 * <pre class="prettyprint"><code>
 * var myLabel = GmailApp.getUserLabelByName(&#39;&lt;your label&gt;&#39;);
 * var threads = myLabel.getThreads();
 * for (var x in threads) {
 *   var thread = threads[x];
 *   thread.removeLabel(myLabel);
 * }
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#removeLabel
 * 
 * @param {GmailApp.GmailLabel} label - the label to remove from this thread
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Reply to the sender of the last message on this thread using the replyTo address.
 * 
 * <p>Note that the total size of the email (including all headers) may not exceed 20KB.
 * 
 * <pre class="prettyprint"><code>
 * // Respond to author of last email in thread with acknowledgment
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.reply(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#reply
 * 
 * @param {String} body - the body of the email
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Reply to the sender of the last message on this thread using the replyTo address, with optional
 * arguments. The email can contain both plain text, and also an HTML body. Note that the total
 * size of the email (including all headers, but excluding attachments) may not exceed 20KB.
 * 
 * <pre class="prettyprint"><code>
 * // Respond with HTML body text.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.reply(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;some HTML body text&quot;,
 *   noReply: true
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#reply
 * 
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Reply to the sender (using the replyTo address), and all recipients of the last message on this
 * thread.
 * 
 * <p>Note that the total size of the email (including all headers) may not exceed 20KB.
 * 
 * <pre class="prettyprint"><code>
 * // Respond to all with acknowledgment to the first thread in the inbox
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.replyAll(&quot;Got your message&quot;);
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#replyAll
 * 
 * @param {String} body - the body of the email
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */


/**
 * Reply to the sender (using the <code>replyTo</code> address), and all recipients of the last message
 * on this thread, with optional arguments. The email can contain both plain text, and also an
 * HTML body. Note that the total size of the email (including all headers, but excluding
 * attachments) may not exceed 20KB.
 * 
 * <pre class="prettyprint"><code>
 * // Respond with HTML body text.
 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
 * firstThread.replyAll(&quot;incapable of HTML&quot;, {
 *   htmlBody: &quot;some HTML body text&quot;,
 *   noReply: true
 * });
 * </code></pre>
 * 
 * @function GmailApp.GmailThread#replyAll
 * 
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {GmailApp.GmailThread} this thread, useful for chaining
 */



