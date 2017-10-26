var SitesApp = {};


/**
 * 
 * 
 * @class SitesApp.AttachmentType
 */

/**
 * @typedef {SitesApp.AttachmentType} SitesApp.AttachmentType.HOSTED
 * 
 * 
 */

/**
 * @typedef {SitesApp.AttachmentType} SitesApp.AttachmentType.WEB
 * 
 * 
 */

/**
 * 
 * 
 * @class SitesApp.PageType
 */

/**
 * @typedef {SitesApp.PageType} SitesApp.PageType.ANNOUNCEMENT
 * 
 * 
 */

/**
 * @typedef {SitesApp.PageType} SitesApp.PageType.ANNOUNCEMENTS_PAGE
 * 
 * 
 */

/**
 * @typedef {SitesApp.PageType} SitesApp.PageType.FILE_CABINET_PAGE
 * 
 * 
 */

/**
 * @typedef {SitesApp.PageType} SitesApp.PageType.LIST_PAGE
 * 
 * 
 */

/**
 * @typedef {SitesApp.PageType} SitesApp.PageType.WEB_PAGE
 * 
 * 
 */

/**
 * Creates a new Site by copying an existing Site.

 <p>Warning: Copying a site takes time, from seconds to possibly many minutes, depending on the
 size of the site. Although the method returns right away, the copy is still going on in the
 background, and not all pages in the copied site will be immediately available. This method can
 also be used to instantiate a new site based on a given template.

 <pre class="prettyprint"><code>
 // This creates a site. Note that this only works for G Suite domains.
 // There is no version of this API for consumer accounts.
 var site = SitesApp.createSite(&quot;example.com&quot;,
                                &quot;homepage&quot;,
                                &quot;My Home Page&quot;,
                                &quot;This is a new site I created!&quot;);

 var siteCopy = SitesApp.copySite(&quot;example.com&quot;,
                                  &quot;homepage-clone&quot;,
                                  &quot;Cloned Home Page&quot;,
                                  &quot;Begun, these clone wars have.&quot;,
                                  site);
 </code></pre>
 *
 * @param {String} domain - The G Suite hosted domain (e.g. example.com)
 * @param {String} name - The webspace name found in the URL (e.g. mySite)
 * @param {String} title - The title of the site
 * @param {String} summary - The description of the site
 * @param {SitesApp.Site} site - The Site to copy from. This can either be a site or a template. If the parameter is
     an existing site then the entire contents of the site will be copied. If the given Site is
     a template, then a new Site is created based on that template.
 *
 * @return {SitesApp.Site} The site that was copied. Note that the copy is asynchronous, and the copy operation
     may still be ongoing even though a reference to the site has been returned.
 */
SitesApp.copySite = function(domain, name, title, summary, site){};

/**
 * Creates a new Site.

 <pre class="prettyprint"><code>
 // This creates a site. Note that this only works for G Suite domains.
 // There is no version of this API for consumer accounts.
 var site = SitesApp.createSite(&quot;example.com&quot;,
                                &quot;homepage&quot;,
                                &quot;My Home Page&quot;,
                                &quot;This is a new site I created!&quot;);
 </code></pre>
 *
 * @param {String} domain - The G Suite hosted domain (e.g. example.com)
 * @param {String} name - the path name found in the URL (e.g. mySite)
 * @param {String} title - The title of the site
 * @param {String} summary - The description of the site
 *
 * @return {SitesApp.Site} The created site
 */
SitesApp.createSite = function(domain, name, title, summary){};

/**
 * Returns the active page, if the script is hosted in a container, or null otherwise.

 <pre class="prettyprint"><code>
 var site = SitesApp.getActivePage();
 </code></pre>
 *
 * @return {SitesApp.Page} the active container if it is a sites page
 */
SitesApp.getActivePage = function(){};

/**
 * Returns the active container, if the script is hosted in a container, or null otherwise.

 <pre class="prettyprint"><code>
 var site = SitesApp.getActiveSite();
 </code></pre>
 *
 * @return {SitesApp.Site} the active container if it is a site
 */
SitesApp.getActiveSite = function(){};

/**
 * Retrieves first page of Sites belonging to this domain.

 <pre class="prettyprint"><code>
 // This writes the first page of sites belonging to a G Suite
 // domain to the log.
 var sites = SitesApp.getAllSites(&quot;example.com&quot;);
 for(var i in sites) {
   Logger.log(sites[i].getUrl());
 }
 </code></pre>
 *
 * @param {String} domain - The G Suite hosted domain (e.g. example.com)
 *
 * @return {SitesApp.Site[]} an array of sites belonging to the domain
 */
SitesApp.getAllSites = function(domain){};

/**
 * Retrieves a Page by url.

 <pre class="prettyprint"><code>
 // This snippet retrieves the page at the given URL.
 // Throws an Invalid argument exception if the page does not exist or if
 // the URL given is invalid
 var page = SitesApp.getPageByUrl(
                     &quot;https://sites.google.com/site/demositeappsscript/mylistpage&quot;);
 Logger.log(page.getName());
 </code></pre>
 *
 * @param {String} url - the public url
 *
 * @return {SitesApp.Page} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instance corresponding to the page at the URL
 */
SitesApp.getPageByUrl = function(url){};

/**
 * Retrieves a Site for the given Google Site, if the user is a consumer who does not have a
 hosted domain.

 <pre class="prettyprint"><code>
 // Returns a Site instance
 var site = SitesApp.getSite(&#39;mysite&#39;);
 </code></pre>
 *
 * @param {String} name - The webspace name found in the URL (e.g. mySite)
 *
 * @return {SitesApp.Site} A Site instance corresponding to a consumer site
 */
SitesApp.getSite = function(name){};

/**
 * Retrieves a Site by url.

 <pre class="prettyprint"><code>
 // This snippet retrieves the site at the given URL
 // Throws an Invalid argument exception if the site does not exist or if
 // the URL given is invalid
 var site = SitesApp.getSiteByUrl(&quot;https://sites.google.com/site/demosite&quot;);
 Logger.log(site.getName());
 </code></pre>
 *
 * @param {String} url - the public url
 *
 * @return {SitesApp.Site} a Site found at the given URL
 */
SitesApp.getSiteByUrl = function(url){};

/**
 * Retrieves first page of Sites for a user, if the user is a consumer who does not have a hosted
 domain.

 <pre class="prettyprint"><code>
 // This writes the first page of sites owned by the user running
 // the script to the log.
 var sites = SitesApp.getSites();
 for(var i in sites) {
   Logger.log(sites[i].getUrl());
 }
 </code></pre>
 *
 * @return {SitesApp.Site[]} An array of sites beloning to the user running the script
 */
SitesApp.getSites = function(){};

/**
 * Retrieves Sites for a user between the given bounds if the user is a consumer who does not have
 a hosted domain.

 <pre class="prettyprint"><code>
 var sites = SitesApp.getSites(25, 50);
 for(var i in sites) {
   Logger.log(sites[i].getUrl());
 }
 </code></pre>
 *
 * @param {number} start - the index of the first site to return
 * @param {number} max - the maximum number of results to return
 *
 * @return {SitesApp.Site[]} an array of all the sites owned for a user
 */
SitesApp.getSites = function(start, max){};

/**
 * Retrieves first page of Sites belonging to this user in this domain.

 <pre class="prettyprint"><code>
 // This writes the first page of sites owned by the user running
 // the script to the log.
 var sites = SitesApp.getSites(&quot;example.com&quot;);
 for(var i in sites) {
   Logger.log(sites[i].getUrl());
 }
 </code></pre>
 *
 * @param {String} domain - The G Suite hosted domain (e.g. example.com)
 *
 * @return {SitesApp.Site[]} An array of sites beloning to the user running the script
 */
SitesApp.getSites = function(domain){};

/** @constructor */
SitesApp.Attachment = function(){};

/**
 * Deletes this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 attachments[0].deleteAttachment();
 </code></pre>
 *
 * @return void
 */
SitesApp.Attachment.prototype.deleteAttachment = function(){};

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename — for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" will become
 "ChristmasList.12.25.pdf".
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
     valid.
 *
 * @return {Blob} the data as a blob
 */
SitesApp.Attachment.prototype.getAs = function(contentType){};

/**
 * Return the type of this attachment (HOSTED or WEB).

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var attType = attachments[0].getAttachmentType();

 // This will log &quot;Hosted&quot;
 Logger.log(attType);

 // Since this returns an AttachmentType and not a String, for the
 // purposes of equivalence we want to either do this or cast the
 // type to a String
 if(attType ==  SitesService.AttachmentType.HOSTED) {
   Logger.log(&quot;This is a match&quot;);
 }

 // The above is the same as
 if(String(attType) == &quot;Hosted&quot;) {
    Logger.log(&quot;This is also a match&quot;);
 }
 </code></pre>
 *
 * @return {SitesApp.AttachmentType} the attachment type
 */
SitesApp.Attachment.prototype.getAttachmentType = function(){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
SitesApp.Attachment.prototype.getBlob = function(){};

/**
 * Return the mime type of this attachment. Fails for web attachments.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var contentType = attachments[0].getContentType();
 </code></pre>
 *
 * @return {String} the attachment mime type
 */
SitesApp.Attachment.prototype.getContentType = function(){};

/**
 * Return the date this attachment was first published.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var date = attachments[0].getDatePublished();
 </code></pre>
 *
 * @return {Date} the date of original publication
 */
SitesApp.Attachment.prototype.getDatePublished = function(){};

/**
 * Return the description of this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var description = attachments[0].getDescription();
 </code></pre>
 *
 * @return {String} the attachment description
 */
SitesApp.Attachment.prototype.getDescription = function(){};

/**
 * Return the date this attachment was last updated.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var date = attachments[0].getLastUpdated();
 </code></pre>
 *
 * @return {Date} the last updated date
 */
SitesApp.Attachment.prototype.getLastUpdated = function(){};

/**
 * Get the parent page of this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();

 // This is equal to pages[0]
 var parent = attachments[0].getParent();
 </code></pre>
 *
 * @return {SitesApp.Page} the parent page
 */
SitesApp.Attachment.prototype.getParent = function(){};

/**
 * Return the title of this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var title = attachments[0].getTitle();
 </code></pre>
 *
 * @return {String} the attachment title
 */
SitesApp.Attachment.prototype.getTitle = function(){};

/**
 * Return the download url for this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 var url = attachments[0].getUrl();
 </code></pre>
 *
 * @return {String} the download url
 */
SitesApp.Attachment.prototype.getUrl = function(){};

/**
 * Set the mime type of this attachment. Fails for web attachments.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 attachments[0].setContentType(&quot;text/plain&quot;);
 </code></pre>
 *
 * @param {String} contentType - the new mime type
 *
 * @return {SitesApp.Attachment} this Attachment for chaining
 */
SitesApp.Attachment.prototype.setContentType = function(contentType){};

/**
 * Set the descripton of this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();

 // This is an example of chaining in action
 attachments[0].setTitle(&quot;New Title&quot;)
               .setDescription(&quot;New Description&quot;);
 </code></pre>
 *
 * @param {String} description - the new description
 *
 * @return {SitesApp.Attachment} this Attachment for chaining
 */
SitesApp.Attachment.prototype.setDescription = function(description){};

/**
 * Set the actual data of this attachment. Fails for web attachments.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;demositeappsscript&#39;).getChildren();
 var attachments = pages[0].getAttachments();

 // This snippet demonstrates how to create a new text blob and attach it
 // to the page
 var blob = Utilities.newBlob(&quot;This data is now the attachment content&quot;);

 // We must set a filename since we created the blob from String data
 // instead of something like a URL source
 blob.setName(&quot;attachment.txt&quot;);
 attachments[0].setTitle(&quot;New Title&quot;)
               .setDescription(&quot;New Description&quot;)
               .setContentType(&quot;text/plain&quot;)
               .setFrom(blob);
 </code></pre>
 *
 * @param {BlobSource} blob - the new data
 *
 * @return {SitesApp.Attachment} this Attachment for chaining
 */
SitesApp.Attachment.prototype.setFrom = function(blob){};

/**
 * Set the parent page of this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();
 // Sets the parent page to be the next sibling
 attachments[0].setParent(pages[1]);
 </code></pre>
 *
 * @param {SitesApp.Page} parent - the new parent
 *
 * @return {SitesApp.Attachment} this Attachment for chaining
 */
SitesApp.Attachment.prototype.setParent = function(parent){};

/**
 * Set the title of this attachment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var attachments = pages[0].getAttachments();

 // This is an example of chaining in action
 attachments[0].setTitle(&quot;New Title&quot;)
               .setDescription(&quot;New Description&quot;);
 </code></pre>
 *
 * @param {String} title - the new title
 *
 * @return {SitesApp.Attachment} this Attachment for chaining
 */
SitesApp.Attachment.prototype.setTitle = function(title){};

/**
 * Sets the download url for this attachment. Only valid for web attachments.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;demositeappsscript&#39;).getChildren();
 var attachments = pages[0].getAttachments();

 attachments[0].setTitle(&quot;New Web Attachment&quot;)
               .setDescription(&quot;New Description&quot;)
               .setUrl(&quot;http://example.com/files/your_file.txt&quot;);
 </code></pre>
 *
 * @param {String} url - 
 *
 * @return {SitesApp.Attachment} this Attachment for chaining
 */
SitesApp.Attachment.prototype.setUrl = function(url){};

/** @constructor */
SitesApp.Column = function(){};

/**
 * Deletes this column.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var columns = page.getColumns();
 columns[0].deleteColumn();
 </code></pre>
 *
 * @return void
 */
SitesApp.Column.prototype.deleteColumn = function(){};

/**
 * Gets the name of this column.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var columns = page.getColumns();
 var name = columns[0].getName();
 </code></pre>
 *
 * @return {String} the column name
 */
SitesApp.Column.prototype.getName = function(){};

/**
 * Returns the List Page this column belongs to.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var columns = page.getColumns();

 // This returns a reference to page
 var parentPage = columns[0].getParent();
 </code></pre>
 *
 * @return {SitesApp.Page} the page this column belongs to
 */
SitesApp.Column.prototype.getParent = function(){};

/**
 * Sets the name of this column.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var columns = page.getColumns();
 columns[0].setName(&quot;New Name&quot;);
 </code></pre>
 *
 * @param {String} name - the new name
 *
 * @return {SitesApp.Column} this Column for chaining
 */
SitesApp.Column.prototype.setName = function(name){};

/** @constructor */
SitesApp.Comment = function(){};

/**
 * Deletes this comment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();

 // Let&#39;s delete all of Eric&#39;s comments
 for(var i = 0; i &lt; comments.length; i++) {
   if(comments[i].getAuthorEmail() == &quot;eric@example.com&quot;) {
     comments[i].deleteComment();
   }
 }
 </code></pre>
 *
 * @return void
 */
SitesApp.Comment.prototype.deleteComment = function(){};

/**
 * Gets the email address of the author of this comment.
 *
 * @return {String} the author's email
 */
SitesApp.Comment.prototype.getAuthorEmail = function(){};

/**
 * Gets the name of the author of this comment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var comment = comments[0];
 var authorEmail = comment.getAuthorEmail();
 </code></pre>
 *
 * @return {String} the author's name
 */
SitesApp.Comment.prototype.getAuthorName = function(){};

/**
 * Return the content of this comment as a String.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var content = comments[0].getContent()
 </code></pre>
 *
 * @return {String} the comment content
 */
SitesApp.Comment.prototype.getContent = function(){};

/**
 * Return the date this comment was originally published.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var date = comments[0].getDatePublished();
 </code></pre>
 *
 * @return {Date} the date of original publication
 */
SitesApp.Comment.prototype.getDatePublished = function(){};

/**
 * Return the date this comment was last updated.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var date = comments[0].getLastUpdated();
 </code></pre>
 *
 * @return {Date} the last updated date
 */
SitesApp.Comment.prototype.getLastUpdated = function(){};

/**
 * Get the parent page of this comment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var comment = comments[0];

 // parentPage should be the same page as pages[0]
 var parentPage = comment.getParent();
 </code></pre>
 *
 * @return {SitesApp.Page} the parent page
 */
SitesApp.Comment.prototype.getParent = function(){};

/**
 * Set the content of this comment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var comment = comments[0];
  comment.setContent(&quot;New Content&quot;);

 // Note that this returns a Comment, so you can chain the method calls
 var updatedContent = comment.setContent(&quot;New Content&quot;)
                             .getContent();
 </code></pre>
 *
 * @param {String} content - the new content
 *
 * @return {SitesApp.Comment} this Comment for chaining
 */
SitesApp.Comment.prototype.setContent = function(content){};

/**
 * Set the parent page of this comment.

 <pre class="prettyprint"><code>
 var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
 var comments = pages[0].getComments();
 var comment = comments[0];

 // Let&#39;s say we want to move the comment to its parent&#39;s next neighbor ..
 // This will only work if the example site has multiple children
 var newParentPage = comment.setParent(pages[1]).getParent();
 </code></pre>
 *
 * @param {SitesApp.Page} parent - the new parent
 *
 * @return {SitesApp.Comment} this Comment for chaining
 */
SitesApp.Comment.prototype.setParent = function(parent){};

/** @constructor */
SitesApp.ListItem = function(){};

/**
 * Deletes this list item.

 <pre class="prettyprint"><code>
 // This code sample deletes all list items from a List page
 // Running this code sample against a Page that is a standard web page will
 // cause getListItems() to throw an exception
 var page = SitesApp.getSite(&#39;demositeappsscript&#39;).getChildByName(&#39;mylistpage&#39;);
 var items = page.getListItems();
 for(var i = 0; i &lt; items.length; i++) {
   items[i].deleteListItem();
 }
 </code></pre>
 *
 * @return void
 */
SitesApp.ListItem.prototype.deleteListItem = function(){};

/**
 * Return the date this list item was first published.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var items = page.getListItems();
 var date = items[0].getDatePublished();
 </code></pre>
 *
 * @return {Date} the date of original publication
 */
SitesApp.ListItem.prototype.getDatePublished = function(){};

/**
 * Return the date this comment was last updated.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var items = page.getListItems();
 var date = items[0].getLastUpdated();
 </code></pre>
 *
 * @return {Date} the last updated date
 */
SitesApp.ListItem.prototype.getLastUpdated = function(){};

/**
 * Get the parent page of this list item.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var items = page.getListItems();
 // parentPage will equal page
 var parentPage = items[0].getParent();
 </code></pre>
 *
 * @return {SitesApp.Page} the parent page
 */
SitesApp.ListItem.prototype.getParent = function(){};

/**
 * Get the value of this ListItem for a numbered column.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&quot;demositeappsscript&quot;).getChildByName(&quot;mylistpage&quot;);
 var listItem = page.getListItems()[0];

 // Remember that rows are 0 indexed. This returns the item in the first column
 // of the list. If an index that is greater than the number of columns is used,
 // the script will throw an &quot;InvalidArgument: index&quot; exception.
 var value = listItem.getValueByIndex(5);
 </code></pre>
 *
 * @param {number} index - the column to get the value of
 *
 * @return {String} the value of that column
 */
SitesApp.ListItem.prototype.getValueByIndex = function(index){};

/**
 * Get the value of this ListItem for a named column.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&quot;demositeappsscript&quot;).getChildByName(&quot;mylistpage&quot;);
 var listItem = page.getListItems()[0];

 // Suppose we have a column named &quot;Owner&quot; - this will let us fetch the value
 // for the list item
 var value = listItem.getValueByName(&quot;Owner&quot;);
 Logger.log(value);
 </code></pre>
 *
 * @param {String} name - the column to get the value of
 *
 * @return {String} the value of that column
 */
SitesApp.ListItem.prototype.getValueByName = function(name){};

/**
 * Set the parent page of this list item.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
 var secondListPage = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;)
                              .getChildByName(&#39;secondlistpage&#39;);
 var items = page.getListItems();

 // Returns secondListPage
 var parentPage = items[0].setParent(secondListPage).getParent();
 </code></pre>
 *
 * @param {SitesApp.Page} parent - the new parent
 *
 * @return {SitesApp.ListItem} this ListItem for chaining
 */
SitesApp.ListItem.prototype.setParent = function(parent){};

/**
 * Set the value of this ListItem for a numbered column. For URL columns the value must be an
 XHTML anchor tag, with XML entities escaped.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;).getChildByName(&quot;mylistpage&quot;);
 var listItem = page.getListItems()[0];
 listItem.setValueByIndex(1, &#39;This is the new value&#39;);
 listItem.setValueByIndex(2, &#39;&lt;a href=&quot;http://www.example.com?a=1&amp;amp;b=2&quot;&gt;Example&lt;/a&gt;&#39;);
 </code></pre>
 *
 * @param {number} index - the column to set the value of
 * @param {String} value - the new value
 *
 * @return {SitesApp.ListItem} this ListItem for chaining
 */
SitesApp.ListItem.prototype.setValueByIndex = function(index, value){};

/**
 * Set the value of this ListItem for a numbered column. For URL columns the value must be an
 XHTML anchor tag, with XML entities escaped.

 <pre class="prettyprint"><code>
 var page = SitesApp.getSite(&quot;demositeappsscript&quot;).getChildByName(&quot;mylistpage&quot;);
 var listItem = page.getListItems()[0];
 listItem.setValueByName(&#39;Owner&#39;, &#39;Eric&#39;);
 listItem.setValueByName(&#39;Page&#39;, &#39;&lt;a href=&quot;http://www.example.com?a=1&amp;amp;b=2&quot;&gt;Example&lt;/a&gt;&#39;);
 </code></pre>
 *
 * @param {String} name - the column to set the value of
 * @param {String} value - the new value
 *
 * @return {SitesApp.ListItem} this ListItem for chaining
 */
SitesApp.ListItem.prototype.setValueByName = function(name, value){};

/** @constructor */
SitesApp.Page = function(){};

/**
 * Add a new column to the list. Only valid for list pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var page = site.getChildByName(&quot;listpage&quot;);
 // Only valid on List pages. Check for the type like so:
 //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
 var columns = page.addColumn(&quot;new-column&quot;);
 </code></pre>
 *
 * @param {String} name - the new column's name
 *
 * @return {SitesApp.Column} the newly created column
 */
SitesApp.Page.prototype.addColumn = function(name){};

/**
 * Deprecated. Add a comment to the page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 page.addComment(&quot;This is a comment created automatically by a script using the account &quot; +
                 &quot;of the user running the script&quot;);
 </code></pre>
 *
 * @param {String} content - the comment content
 *
 * @return {SitesApp.Comment} the newly created comment
 */
SitesApp.Page.prototype.addComment = function(content){};

/**
 * Add an attachment to the page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 // Create a new blob and attach it. Many useful functions also return
 // blobs file uploads, URLFetch
 var blob = Utilities.newBlob(&quot;Here is some data&quot;, &quot;text/plain&quot;, &quot;data.txt&quot;);

 // Note that the filename must be unique or this call will fail
 page.addHostedAttachment(blob);
 </code></pre>
 *
 * @param {BlobSource} blob - the data for the attachment
 *
 * @return {SitesApp.Attachment} the newly created attachment
 */
SitesApp.Page.prototype.addHostedAttachment = function(blob){};

/**
 * Add a list item to the list. Only valid for list pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var page = site.getChildByName(&quot;listpage&quot;);
 // Only valid on List pages. Check for the type like so:
 //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
 // Returns only one item
 page.addListItem([ &quot;John&quot;, &quot;Smith&quot;, &quot;123 Main St&quot;]);
 </code></pre>
 *
 * @param {String[]} values - the values for each column
 *
 * @return {SitesApp.ListItem} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code>
 */
SitesApp.Page.prototype.addListItem = function(values){};

/**
 * Add a web attachment to the page. Only valid for file cabinet pages.

 <p>Web attachments are links - they are not actually hosted by Google Sites.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 // fetch the child - this must be a File Cabinet page
 // to programmatically check this, do a comparison:
 //    if(page.getPageType() == SitesApp.PageType.FILE_CABINET_PAGE)
 var page = site.getChildByName(&quot;files&quot;);
 page.addWebAttachment(&quot;Google Robots file&quot;,
                       &quot;This is Google&#39;s robots.txt file&quot;,
                       &quot;http://www.google.com/robots.txt&quot;);
 </code></pre>
 *
 * @param {String} title - the title of the attachment
 * @param {String} description - a description of the attachment
 * @param {String} url - the url of the file being attached
 *
 * @return {SitesApp.Attachment} the newly created attachment
 */
SitesApp.Page.prototype.addWebAttachment = function(title, description, url){};

/**
 * Create an announcements for this page. Only valid for announcement pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 // This snippet will only work with announcement pages - this is different
 // from a page that is an annoucement (individual announcements). To check
 // if this method can be called:
 //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
 var page = site.getChildByName(&quot;news&quot;);
 page.createAnnouncement(&quot;Breaking news!&quot;, &quot;&lt;h1&gt;Apps Script rocks!&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} the newly created Announcements
 */
SitesApp.Page.prototype.createAnnouncement = function(title, html){};

/**
 * Create a new announcements page. Note that a parent site or page cannot have more than 500
 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from both a Site instance
 // as well as a Page instance
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);

 page.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement-child&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Page.prototype.createAnnouncementsPage = function(title, name, html){};

/**
 * Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
 pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createFileCabinetPage(&quot;New File Cabinet&quot;,
                            &quot;new-file-cabinet&quot;,
                            &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);

 page.createFileCabinetPage(&quot;New File Cabinet&quot;,
                              &quot;new-file-cabinet-child&quot;,
                              &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Page.prototype.createFileCabinetPage = function(title, name, html){};

/**
 * Create a new list page. Note that a parent site or page cannot have more than 500 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createListPage(&quot;New List Page&quot;,
                     &quot;new-list-page&quot;,
                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
                     [ &quot;col1&quot;, &quot;col2&quot; ]);

 page.createListPage(&quot;New List Page&quot;,
                     &quot;new-list-page-child&quot;,
                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
                     [ &quot;col1&quot;, &quot;col2&quot; ]);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 * @param {String[]} columnNames - the column names used for the list
 *
 * @return {SitesApp.Page} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Page.prototype.createListPage = function(title, name, html, columnNames){};

/**
 * Create a new page from a template. Note that a parent site or page cannot have more than 500
 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var template = site.getTemplates()[0];

 // If an invalid template is passed, this will throw an &quot;Invalid Argument&quot; error.
 site.createPageFromTemplate(&quot;ClonedPage&quot;, &quot;cloned-page&quot;, template);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {SitesApp.Page} template - the template page
 *
 * @return {SitesApp.Page} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Page.prototype.createPageFromTemplate = function(title, name, template){};

/**
 * Create a new web page. Note that a parent site or page cannot have more than 500 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);

 page.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement-child&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Page.prototype.createWebPage = function(title, name, html){};

/**
 * Deletes this page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 // Delete ALL the pages!
 var pages = site.getAllDescendants();
 for(var i in pages) {
   pages[i].deletePage();
 }
 </code></pre>
 *
 * @return void
 */
SitesApp.Page.prototype.deletePage = function(){};

/**
 * Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var pages = site.getAllDescendants();
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of direct and indirect child pages
 */
SitesApp.Page.prototype.getAllDescendants = function(){};

/**
 * Get the announcements for this page. Only valid for announcement pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 // This snippet will only work with announcement pages - this is different
 // from a page that is an annoucement (individual announcements). To check
 // if this method can be called:
 //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
 var page = site.getChildByName(&quot;news&quot;);
 var announcements = page.getAnnouncements();

 for(var i in announcements) {
   Logger.log(announcements[i].getHtmlContent());
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of Announcements
 */
SitesApp.Page.prototype.getAnnouncements = function(){};

/**
 * Get the attachments for this page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 var attachments = page.getAttachments();
 for(var i in attachments) {
   Logger.log(attachments[i].getTitle());
 }
 </code></pre>
 *
 * @return {SitesApp.Attachment[]} an array of Attachments
 */
SitesApp.Page.prototype.getAttachments = function(){};

/**
 * Get the emails of the authors of the page

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 var authors = page.getAuthors();

 for(var i in authors) {
   Logger.log(authors[i]);
 }
 </code></pre>
 *
 * @return {String[]} an array of author email addresses
 */
SitesApp.Page.prototype.getAuthors = function(){};

/**
 * Gets a particular child page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var pages = site.getChildByName(&quot;childPage&quot;);
 </code></pre>
 *
 * @param {String} name - the child page name
 *
 * @return {SitesApp.Page} the child page
 */
SitesApp.Page.prototype.getChildByName = function(name){};

/**
 * Gets an array of child pages, up to a limit of 200 pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var pages = site.getChildren();
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of direct child pages
 */
SitesApp.Page.prototype.getChildren = function(){};

/**
 * Get the columns for the list. Only valid for list pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var page = site.getChildByName(&quot;listpage&quot;);
 // Only valid on List pages. Check for the type like so:
 //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
 var columns = page.getColumns();

 for(var i in columns) {
   Logger.log(columns[i].getName());
 }
 </code></pre>
 *
 * @return {SitesApp.Column[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/column.html'>Column</a></code> instances
 */
SitesApp.Page.prototype.getColumns = function(){};

/**
 * Deprecated. Get the comments for this page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 var comments = page.getComments();
 for(var i in comments) {
   Logger.log(comments[i].getContent());
 }
 </code></pre>
 *
 * @return {SitesApp.Comment[]} an array of Comments.
 */
SitesApp.Page.prototype.getComments = function(){};

/**
 * Return the date this page was first published.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getName() + &quot; was published &quot; + page.getDatePublished());
 </code></pre>
 *
 * @return {Date} the date of original publication
 */
SitesApp.Page.prototype.getDatePublished = function(){};

/**
 * Get the HTML content of the page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getHtmlContent());
 </code></pre>
 *
 * @return {String} the html content
 */
SitesApp.Page.prototype.getHtmlContent = function(){};

/**
 * Returns whether the page is in draft mode. Only valid for announcements.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 Logger.log(&quot;Is this Announcement Page a draft?&quot;, page.getIsDraft());
 </code></pre>
 *
 * @return {Boolean} whether the page is in draft mode
 */
SitesApp.Page.prototype.getIsDraft = function(){};

/**
 * Return the last edit date, which includes only content edits.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getName() + &quot; was last updated &quot; + page.getLastEdited());
 </code></pre>
 *
 * @return {Date} the date the page was last updated, including only content edits
 */
SitesApp.Page.prototype.getLastEdited = function(){};

/**
 * Return the last updated date, which includes non-content changes like moving.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getName() + &quot; was last updated &quot; + page.getLastUpdated());
 </code></pre>
 *
 * @return {Date} the date the page was last updated with non-content changes
 */
SitesApp.Page.prototype.getLastUpdated = function(){};

/**
 * Get the list items for the list. Only valid for list pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var page = site.getChildByName(&quot;listpage&quot;);
 // Only valid on List pages. Check for the type like so:
 //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
 var items = page.getListItems();

 for(var i in items) {
   Logger.log(items[i].getValueByName(&quot;Status&quot;));
 }
 </code></pre>
 *
 * @return {SitesApp.ListItem[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> instances
 */
SitesApp.Page.prototype.getListItems = function(){};

/**
 * Return the page's name.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getName());
 </code></pre>
 *
 * @return {String} the name of this page
 */
SitesApp.Page.prototype.getName = function(){};

/**
 * Deprecated. Replaced with getName for consistency.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getPageName());
 </code></pre>
 *
 * @return {String} the name of this page
 */
SitesApp.Page.prototype.getPageName = function(){};

/**
 * Return the type of this page as a SitesApp.PageType enum.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 var pageType = page.getPageType();
 if(pageType == SitesApp.PageType.WEB_PAGE) {
    Logger.log(page.getName() + &quot; is a Web Page&quot;);
 }
 </code></pre>
 *
 * @return {SitesApp.PageType} a PageType enum telling whether this is a Web, List, Announcement or File Cabinet Page
 */
SitesApp.Page.prototype.getPageType = function(){};

/**
 * Return the parent of this page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getName() + &quot; parent: &quot; + page.getParent().getName());
 </code></pre>
 *
 * @return {SitesApp.Page} the parent page of this page
 */
SitesApp.Page.prototype.getParent = function(){};

/**
 * Deprecated. Returns the gData feed link of this page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getSelfLink());
 </code></pre>
 *
 * @return {String} the gData feed link
 */
SitesApp.Page.prototype.getSelfLink = function(){};

/**
 * Returns the plain-text page content.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getName() + &quot; content: &quot; + page.getTextContent());
 </code></pre>
 *
 * @return {String} the plain-text content of the page
 */
SitesApp.Page.prototype.getTextContent = function(){};

/**
 * Return the page's title.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getTitle());
 </code></pre>
 *
 * @return {String} the title of this page
 */
SitesApp.Page.prototype.getTitle = function(){};

/**
 * Get the url of the page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 Logger.log(page.getUrl());
 </code></pre>
 *
 * @return {String} the url of the page
 */
SitesApp.Page.prototype.getUrl = function(){};

/**
 * Returns whether a page has been deleted.
 *
 * @return {Boolean} whether the page has been deleted
 */
SitesApp.Page.prototype.isDeleted = function(){};

/**
 * Returns whether this page is a copyable template.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var firstTemplate = site.getTemplates()[0];
 if(firstTemplate.isTemplate()) {
   Logger.log(&quot;This will always return true&quot;);
 }
 </code></pre>
 *
 * @return {Boolean} whether this page is a template
 */
SitesApp.Page.prototype.isTemplate = function(){};

/**
 * Publish this page as a copyable template.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 // Turn this page into a publishable template
 page.publishedAsTemplate(&quot;template-name&quot;);
 </code></pre>
 *
 * @param {String} name - The name of the new template
 *
 * @return {SitesApp.Page} the newly published template
 */
SitesApp.Page.prototype.publishAsTemplate = function(name){};

/**
 * Gets an array of descendant pages that match a search query, up to a limit of 200 pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var matches = site.search(&quot;targetText&quot;);

 for(var i in matches) {
   Logger.log(matches[i].getName());
 }
 </code></pre>
 *
 * @param {String} query - the full text search query to match
 *
 * @return {SitesApp.Page[]} an array of direct and indirect child pages of the given type
 */
SitesApp.Page.prototype.search = function(query){};

/**
 * Set the HTML content of the page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 page.setHtmlContent(&quot;&lt;h1&gt;New Page Content&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} html - the new content
 *
 * @return {SitesApp.Page} this Page for chaining
 */
SitesApp.Page.prototype.setHtmlContent = function(html){};

/**
 * Sets whether the page is in draft mode. Only valid for announcements.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 // Take the page out of draft mode
 page.setIsDraft(false);
 </code></pre>
 *
 * @param {Boolean} draft - the new status
 *
 * @return {SitesApp.Page} this Page for chaining
 */
SitesApp.Page.prototype.setIsDraft = function(draft){};

/**
 * Set this page's name.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 page.setName(&quot;new-name&quot;);
 </code></pre>
 *
 * @param {String} name - the new name
 *
 * @return {SitesApp.Page} this Page for chaining
 */
SitesApp.Page.prototype.setName = function(name){};

/**
 * Set the parent of this page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var child = site.getChildByName(&quot;childToBeMoved&quot;);
 var parent = site.getChildByName(&quot;newParent&quot;);
 child.setParent(parent);
 </code></pre>
 *
 * @param {SitesApp.Page} parent - the new parent
 *
 * @return {SitesApp.Page} this Page for chaining
 */
SitesApp.Page.prototype.setParent = function(parent){};

/**
 * Set the page's title.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];
 page.setTitle(&quot;New Title&quot;);
 </code></pre>
 *
 * @param {String} title - the new title
 *
 * @return {SitesApp.Page} this Page for chaining
 */
SitesApp.Page.prototype.setTitle = function(title){};

/** @constructor */
SitesApp.Site = function(){};

/**
 * Add a new collaborator to the site

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 site.addCollaborator(&quot;eric@example.com&quot;);
 </code></pre>
 *
 * @param {String} email - The email of the user to add as a collaborator
 *
 * @return {SitesApp.Site} this site for chaining
 */
SitesApp.Site.prototype.addCollaborator = function(email){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SitesApp.Site} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining
 */
SitesApp.Site.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SitesApp.Site} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining
 */
SitesApp.Site.prototype.addEditors = function(emailAddresses){};

/**
 * Add a new owner to the website

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 site.addOwner(&quot;eric@example.com&quot;);
 </code></pre>
 *
 * @param {String} email - The email of the user to add as an owner
 *
 * @return {SitesApp.Site} this site for chaining
 */
SitesApp.Site.prototype.addOwner = function(email){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SitesApp.Site} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining
 */
SitesApp.Site.prototype.addViewer = function(emailAddress){};

/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If any of the
 users were already on the list of editors, this method has no effect for them.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SitesApp.Site} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining
 */
SitesApp.Site.prototype.addViewers = function(emailAddresses){};

/**
 * Create a new Announcement
 *
 * @param {String} title - The title of the Announcement page to create
 * @param {String} html - The HTML body of the page
 * @param {SitesApp.Page} parent - The Parent page
 *
 * @return {SitesApp.Page} The created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Site.prototype.createAnnouncement = function(title, html, parent){};

/**
 * Create a new announcements page. Note that a parent site or page cannot have more than 500
 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from both a Site instance
 // as well as a Page instance
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);

 page.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement-child&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Site.prototype.createAnnouncementsPage = function(title, name, html){};

/**
 * Deprecated. Replaced with createComment on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>.

 <p>Create a new Comment.
 *
 * @param {String} inReplyTo - a GData feed url - meaningless and broken
 * @param {String} html - the comment content
 * @param {SitesApp.Page} parent - the parent the comments shows up on
 *
 * @return {SitesApp.Comment} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/comment.html'>Comment</a></code>
 */
SitesApp.Site.prototype.createComment = function(inReplyTo, html, parent){};

/**
 * Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
 pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createFileCabinetPage(&quot;New File Cabinet&quot;,
                            &quot;new-file-cabinet&quot;,
                            &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);

 page.createFileCabinetPage(&quot;New File Cabinet&quot;,
                              &quot;new-file-cabinet-child&quot;,
                              &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Site.prototype.createFileCabinetPage = function(title, name, html){};

/**
 * Deprecated. Replaced by createListItem on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>.

 <p>Create a new ListItem.
 *
 * @param {String} html - the item content - meaningless and broken.
 * @param {String[]} columnNames - the names of the columns, which are unnecessary
 * @param {String[]} values - the column values
 * @param {SitesApp.Page} parent - the ListPage parent
 *
 * @return {SitesApp.ListItem} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> for chaining.
 */
SitesApp.Site.prototype.createListItem = function(html, columnNames, values, parent){};

/**
 * Create a new list page. Note that a parent site or page cannot have more than 500 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createListPage(&quot;New List Page&quot;,
                     &quot;new-list-page&quot;,
                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
                     [ &quot;col1&quot;, &quot;col2&quot; ]);

 page.createListPage(&quot;New List Page&quot;,
                     &quot;new-list-page-child&quot;,
                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
                     [ &quot;col1&quot;, &quot;col2&quot; ]);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 * @param {String[]} columnNames - the column names used for the list
 *
 * @return {SitesApp.Page} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Site.prototype.createListPage = function(title, name, html, columnNames){};

/**
 * Create a new page from a template. Note that a parent site or page cannot have more than 500
 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var template = site.getTemplates()[0];

 // If an invalid template is passed, this will throw an &quot;Invalid Argument&quot; error.
 site.createPageFromTemplate(&quot;ClonedPage&quot;, &quot;cloned-page&quot;, template);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {SitesApp.Page} template - the template page
 *
 * @return {SitesApp.Page} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Site.prototype.createPageFromTemplate = function(title, name, template){};

/**
 * Deprecated. Replaced by createWebAttachment on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>.

 <p>Create a new Web Attachment.
 *
 * @param {String} title - the attachment title
 * @param {String} url - the url of the attachment
 * @param {SitesApp.Page} parent - the parent page
 *
 * @return {SitesApp.Attachment} this Attachment for chaining.
 */
SitesApp.Site.prototype.createWebAttachment = function(title, url, parent){};

/**
 * Create a new web page. Note that a parent site or page cannot have more than 500 child pages.

 <pre class="prettyprint"><code>
 // This method can be called from either a site or a page.
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var page = site.getChildren()[0];

 site.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);

 page.createAnnouncementsPage(&quot;New Announcement&quot;,
                              &quot;new-announcement-child&quot;,
                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
 </code></pre>
 *
 * @param {String} title - the page title
 * @param {String} name - the page name
 * @param {String} html - the page content
 *
 * @return {SitesApp.Page} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
 */
SitesApp.Site.prototype.createWebPage = function(title, name, html){};

/**
 * Deletes this site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
 site.deleteSite();
 </code></pre>
 *
 * @return void
 */
SitesApp.Site.prototype.deleteSite = function(){};

/**
 * Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var pages = site.getAllDescendants();
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of direct and indirect child pages
 */
SitesApp.Site.prototype.getAllDescendants = function(){};

/**
 * Retrieves a list of announcements for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var pages = site.getAnnouncements();
 for(var i in pages) {
   Logger.log(pages[i].getTitle());
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of announcement @link Page} instances
 */
SitesApp.Site.prototype.getAnnouncements = function(){};

/**
 * Retrieves a list of announcements pages for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var pages = site.getAnnouncementsPages();
 for(var i in pages) {
   Logger.log(pages[i].getTitle());
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
 */
SitesApp.Site.prototype.getAnnouncementsPages = function(){};

/**
 * Retrieves a list of attachments for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var attachments = site.getAttachments();
 for(var i in attachments) {
   // Only hosted attachments have content types
   Logger.log(attachments[i].getContentType());
 }
 </code></pre>
 *
 * @return {SitesApp.Attachment[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/attachment.html'>Attachment</a></code> instances
 */
SitesApp.Site.prototype.getAttachments = function(){};

/**
 * Gets a particular child page.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var pages = site.getChildByName(&quot;childPage&quot;);
 </code></pre>
 *
 * @param {String} name - the child page name
 *
 * @return {SitesApp.Page} the child page
 */
SitesApp.Site.prototype.getChildByName = function(name){};

/**
 * Gets an array of child pages, up to a limit of 200 pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var pages = site.getChildren();
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of direct child pages
 */
SitesApp.Site.prototype.getChildren = function(){};

/**
 * Retrieves list of collaborators for the site

 <pre class="prettyprint"><code>
 var collaborators = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getCollaborators();
 for(var i in collaborators) {
   Logger.log(collaborators[i].getEmail())
 }
 </code></pre>
 *
 * @return {User[]} an array containing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/../base/user.html'>User</a></code> instances representing collaborators
 */
SitesApp.Site.prototype.getCollaborators = function(){};

/**
 * Retrieves a list of comments for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var comments = site.getComments();
 for(var i in comments) {
   Logger.log(comments[i].getContent());
 }
 </code></pre>
 *
 * @return {SitesApp.Comment[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/comment.html'>Comment</a></code> instances
 */
SitesApp.Site.prototype.getComments = function(){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user who executes the script does
 not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with edit permission
 */
SitesApp.Site.prototype.getEditors = function(){};

/**
 * Retrieves a list of File Cabinet pages for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var pages = site.getFileCabinetPages();
 for(var i in pages) {
   Logger.log(pages[i].getTitle());
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
 */
SitesApp.Site.prototype.getFileCabinetPages = function(){};

/**
 * Retrieves a list of site List items for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var listItems = site.getListItems();
 for(var i in listItems) {
   Logger.log(listItems[i].getLastUpdated());
 }
 </code></pre>
 *
 * @return {SitesApp.ListItem[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> instances
 */
SitesApp.Site.prototype.getListItems = function(){};

/**
 * Retrieves a list of site List pages for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var pages = site.getListPages();
 for(var i in pages) {
   Logger.log(pages[i].getTitle());
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
 */
SitesApp.Site.prototype.getListPages = function(){};

/**
 * Return the name of the site

 <pre class="prettyprint"><code>
 var name = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getName();
 </code></pre>
 *
 * @return {String} the name of this Site instance
 */
SitesApp.Site.prototype.getName = function(){};

/**
 * Retrieves list of owners for the site

 <pre class="prettyprint"><code>
 var owners = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getOwners();
 for(var i in owners) {
   Logger.log(owners[i].getEmail())
 }
 </code></pre>
 *
 * @return {User[]} an array containing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/../base/user.html'>User</a></code> instances representing owners
 */
SitesApp.Site.prototype.getOwners = function(){};

/**
 * Retrieves the feed url of this Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
 var url = site.getSelfLink();
 </code></pre>
 *
 * @return {String} the url of this Site's feed
 */
SitesApp.Site.prototype.getSelfLink = function(){};

/**
 * Return the siteName of the site

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
 var url = site.getSelfLink();
 </code></pre>
 *
 * @return {String} the siteName of the site
 */
SitesApp.Site.prototype.getSiteName = function(){};

/**
 * Return the summary of the web site

 <pre class="prettyprint"><code>
 var summary = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getSummary();
 </code></pre>
 *
 * @return {String} the summary of this site
 */
SitesApp.Site.prototype.getSummary = function(){};

/**
 * Returns all template pages.

 <pre class="prettyprint"><code>
 var templates = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getTemplates();
 for(var i in templates) {
   Logger.log(templates[i].getName())
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array containing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances representing templates
 */
SitesApp.Site.prototype.getTemplates = function(){};

/**
 * Gets the theme of the site

 <pre class="prettyprint"><code>
 var theme = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getTheme();
 </code></pre>
 *
 * @return {String} the theme of this site
 */
SitesApp.Site.prototype.getTheme = function(){};

/**
 * Return the title of the site

 <pre class="prettyprint"><code>
 var title = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getTitle();
 </code></pre>
 *
 * @return {String} the title of this site
 */
SitesApp.Site.prototype.getTitle = function(){};

/**
 * Retrieves the url of this Site.

 <pre class="prettyprint"><code>
 var url = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getUrl();
 </code></pre>
 *
 * @return {String} the url of this Site instance
 */
SitesApp.Site.prototype.getUrl = function(){};

/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user who executes
 the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with view or comment permission
 */
SitesApp.Site.prototype.getViewers = function(){};

/**
 * Retrieves a list of web attachments for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var attachments = site.getWebAttachments();
 for(var i in attachments) {
   // Only web attachments have URLs
   Logger.log(attachments[i].getUrl());
 }
 </code></pre>
 *
 * @return {SitesApp.Attachment[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/attachment.html'>Attachment</a></code> instances
 */
SitesApp.Site.prototype.getWebAttachments = function(){};

/**
 * Retrieves a list of web pages for the given Google Site.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);

 var pages = site.getWebPages();
 for(var i in pages) {
   Logger.log(pages[i].getTitle());
 }
 </code></pre>
 *
 * @return {SitesApp.Page[]} an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
 */
SitesApp.Site.prototype.getWebPages = function(){};

/**
 * Removes a collaborator from the site by user email

 <pre class="prettyprint"><code>
 // This snippet removes the user with the given email from the collaborators list
 var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
 site.removeCollaborator(&quot;eric@example.com&quot;);
 </code></pre>
 *
 * @param {String} email - The email of the user to remove from the collaborators
 *
 * @return {SitesApp.Site} the site instance for method chaining
 */
SitesApp.Site.prototype.removeCollaborator = function(email){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> if they belong to a class of users who have
 general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is shared with the user's entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SitesApp.Site} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining
 */
SitesApp.Site.prototype.removeEditor = function(emailAddress){};

/**
 * Removes owner from the site by user email

 <pre class="prettyprint"><code>
 // This snippet removes the user with the given email from the owners list
 var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
 site.removeOwner(&quot;eric@example.com&quot;);
 </code></pre>
 *
 * @param {String} email - The email of the user to remove from the owners
 *
 * @return {SitesApp.Site} the site instance for method chaining
 */
SitesApp.Site.prototype.removeOwner = function(email){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. This
 method has no effect if the user is an editor, not a viewer or commenter. This method also does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> if they belong to a class of users who
 have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is shared with the user's entire
 domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SitesApp.Site} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> for chaining
 */
SitesApp.Site.prototype.removeViewer = function(emailAddress){};

/**
 * Gets an array of descendant pages that match a search query, up to a limit of 200 pages.

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 var matches = site.search(&quot;targetText&quot;);

 for(var i in matches) {
   Logger.log(matches[i].getName());
 }
 </code></pre>
 *
 * @param {String} query - the full text search query to match
 *
 * @return {SitesApp.Page[]} an array of direct and indirect child pages of the given type
 */
SitesApp.Site.prototype.search = function(query){};

/**
 * Set the summary of the web site

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 // All of the setter methods return the site instance so setters
 // can be chained
 site.setTitle(&quot;My Site&quot;)
     .setSummary(&quot;This is my site&quot;)
     .setTheme(&quot;simple&quot;);
 </code></pre>
 *
 * @param {String} summary - A string summary describing the site
 *
 * @return {SitesApp.Site} the site for method chaining
 */
SitesApp.Site.prototype.setSummary = function(summary){};

/**
 * Sets the theme of the site

 <p>Theme must be a valid theme string. For an exhaustive list, write a test method and pass an
 invalid value to setTheme(). The script will throw a Service error and return an exhaustive
 list of available themes. The list of available themes is also available under Manage
 Site->Themes. Theme name strings are generally the same as the theme name on the Themes page in
 lower cases with spaces and special characters removed. For example, the string for "Terra:
 Water" would be "terrawater".

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 // All of the setter methods return the site instance so setters
 // can be chained
 site.setTitle(&quot;My Site&quot;)
     .setSummary(&quot;This is my site&quot;)
     .setTheme(&quot;simple&quot;);
 </code></pre>
 *
 * @param {String} theme - a string name for the theme to set for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>
 *
 * @return {SitesApp.Site} the site for method chaining
 */
SitesApp.Site.prototype.setTheme = function(theme){};

/**
 * Set the title of the site

 <pre class="prettyprint"><code>
 var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
 // All of the setter methods return the site instance so setters
 // can be chained
 site.setTitle(&quot;My Site&quot;)
     .setSummary(&quot;This is my site&quot;)
     .setTheme(&quot;simple&quot;);
 </code></pre>
 *
 * @param {String} title - the new title of the site
 *
 * @return {SitesApp.Site} the site for method chaining
 */
SitesApp.Site.prototype.setTitle = function(title){};

