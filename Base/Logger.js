var Logger = {};


/**
 * Clears the log.
 *
 * @return void
 */
Logger.clear = function(){};

/**
 * Returns a complete list of messages in the current log. This method can be used to save or
 email the entire log output generated during script execution.

 <pre class="prettyprint">
 // Generate a log, then email it to the person who ran the script.
 var files = DriveApp.getFiles();
 while (files.hasNext()) {
   Logger.log(files.next().getName());
 }
 var recipient = Session.getActiveUser().getEmail();
 var subject = 'A list of files in your Google Drive';
 var body = Logger.getLog();
 MailApp.sendEmail(recipient, subject, body);
 </pre>
 *
 * @return {String} the log from the logging console
 */
Logger.getLog = function(){};

/**
 * Writes the string to the logging console. To view the logged output, select
 <strong>View > Show logs</strong>. This can be very useful for debugging scripts.
 *
 * @param {Object} data - the message to log
 *
 * @return {Logger} the Logger, for chaining.
 */
Logger.log = function(data){};

