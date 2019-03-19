/**********************************************
 * @namespace MailApp
 ***********************************************/

/**
 * @class MailApp
 */

/**
 * Returns the number of remaining emails a user can send for the rest of the day.
 * 
 * <p>Quotas are based on the number of email recipients. Specific quota information is available
 * on the quota tab of the <a href="https://script.google.com/dashboard">Apps Script
 * dashboard</a>.
 * 
 * <pre class="prettyprint"><code>
 * var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
 * Logger.log(&quot;Remaining email quota: &quot; + emailQuotaRemaining);
 * </code></pre>
 * 
 * @function MailApp.getRemainingDailyQuota
 * 
 * @return {IntegerNum} the number of emails remaining that the script can send
 */


/**
 * Sends an email message. This variation of the method is much more flexible, allowing for many
 * more options.
 * 
 * <pre class="prettyprint"><code>
 * // This code fetches the Google and YouTube logos, inlines them in an email
 * // and sends the email
 * function inlineImage() {
 *   var googleLogoUrl = &quot;http://www.google.com/intl/en_com/images/srpr/logo3w.png&quot;;
 *   var youtubeLogoUrl =
 *         &quot;https://developers.google.com/youtube/images/YouTube_logo_standard_white.png&quot;;
 *   var googleLogoBlob = UrlFetchApp
 *                          .fetch(googleLogoUrl)
 *                          .getBlob()
 *                          .setName(&quot;googleLogoBlob&quot;);
 *   var youtubeLogoBlob = UrlFetchApp
 *                           .fetch(youtubeLogoUrl)
 *                           .getBlob()
 *                           .setName(&quot;youtubeLogoBlob&quot;);
 *   MailApp.sendEmail({
 *     to: &quot;recipient@example.com&quot;,
 *     subject: &quot;Logos&quot;,
 *     htmlBody: &quot;inline Google Logo&lt;img src=&#39;cid:googleLogo&#39;&gt; images! &lt;br&gt;&quot; +
 *               &quot;inline YouTube Logo &lt;img src=&#39;cid:youtubeLogo&#39;&gt;&quot;,
 *     inlineImages:
 *       {
 *         googleLogo: googleLogoBlob,
 *         youtubeLogo: youtubeLogoBlob
 *       }
 *   });
 * }
 * </code></pre>
 * 
 * @function MailApp.sendEmail
 * 
 * @param {Object} message - a JavaScript object representing an email message
 * 
 * @return void
 */


/**
 * Sends an email message.
 * 
 * <pre class="prettyprint"><code>
 * MailApp.sendEmail(&quot;recipient@example.com&quot;,
 *                   &quot;TPS reports&quot;,
 *                   &quot;Where are the TPS reports?&quot;);
 * </code></pre>
 * 
 * @function MailApp.sendEmail
 * 
 * @param {String} recipient - the addresses of the recipients, separated by commas
 * @param {String} subject - the subject line
 * @param {String} body - the body of the email
 * 
 * @return void
 */


/**
 * Sends an email message with optional arguments.
 * 
 * <pre class="prettyprint"><code>
 * // Send an email with two attachments: a file from Google Drive (as a PDF) and an HTML file.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * var blob = Utilities.newBlob(&#39;Insert any HTML content here&#39;, &#39;text/html&#39;, &#39;my_document.html&#39;);
 * MailApp.sendEmail(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Two files are attached.&#39;, {
 *     name: &#39;Automatic Emailer Script&#39;,
 *     attachments: [file.getAs(MimeType.PDF), blob]
 * });
 * </code></pre>
 * 
 * @function MailApp.sendEmail
 * 
 * @param {String} recipient - the addresses of the recipients, separated by commas
 * @param {String} subject - the subject line
 * @param {String} body - the body of the email
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return void
 */


/**
 * Sends an email message. This method allows a user to easily specify a Reply-To address for the
 * sent message that can differ from the sender.
 * 
 * <pre class="prettyprint"><code>
 * MailApp.sendEmail(&quot;recipient@example.com&quot;,
 *                   &quot;replies@example.com&quot;,
 *                   &quot;TPS report status&quot;,
 *                   &quot;What is the status of those TPS reports?&quot;);
 * </code></pre>
 * 
 * @function MailApp.sendEmail
 * 
 * @param {String} to - the addresses of the recipients, separated by commas
 * @param {String} replyTo - the reply-to address
 * @param {String} subject - the subject line
 * @param {String} body - the body of the email in plain text
 * 
 * @return void
 */



