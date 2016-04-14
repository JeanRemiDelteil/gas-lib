var MailApp = {};


/**
 * Returns the number of remaining emails a user can send for the rest of
 the day.

 Quotas are based on the number of email recipients. Specific quota information is available on
 the quota tab of the <a href="https://script.google.com/dashboard">Apps Script
 dashboard</a>.

 <pre class="prettyprint">
 <code>
 var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
 Logger.log(&quot;Remaining email quota: &quot; + emailQuotaRemaining);
 </code></pre>
 *
 * @return {number} the number of emails remaining that the script can send
 */
MailApp.getRemainingDailyQuota = function(){};

/**
 * Sends an email message. This method allows a user to easily specify
 a Reply-To address for the sent message that can differ from the sender.

 <pre class="prettyprint">
 <code>
 MailApp.sendEmail(&quot;recipient@example.com&quot;,
                   &quot;replies@example.com&quot;,
                   &quot;TPS report status&quot;,
                   &quot;What is the status of those TPS reports?&quot;);
 </code></pre>
 *
 * @param {String} to - the addresses of the recipients, separated by commas
 * @param {String} replyTo - the reply-to address
 * @param {String} subject - the subject line
 * @param {String} body - the body of the email in plain text
 *
 * @return void
 */
MailApp.sendEmail = function(to, replyTo, subject, body){};

