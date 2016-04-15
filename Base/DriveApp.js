var DriveApp = {};


/**
 * An enum representing classes of users who can access a file or folder, besides any individual
 users who have been explicitly given access.

 */
DriveApp.Access = function(){};

/**
 * Anyone on the Internet can find and access. No sign-in required.

 <p>Domain administrators can prohibit this setting for users of Google Apps for Business,
 Google Apps for Education, or Google Apps for Your Domain. If the setting is disabled, passing
 this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.</p>
 *
 * @type {{}}
 */
DriveApp.Access.prototype.ANYONE = {};

/**
 * Anyone who has the link can access. No sign-in required.

 <p>Domain administrators can prohibit this setting for users of Google Apps for Business,
 Google Apps for Education, or Google Apps for Your Domain. If the setting is disabled, passing
 this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.</p>
 *
 * @type {{}}
 */
DriveApp.Access.prototype.ANYONE_WITH_LINK = {};

/**
 * People in your domain can find and access. Sign-in required.

 <p>This setting is available only for users of Google Apps for Business, Google Apps for
 Education, or Google Apps for Your Domain. For other types of Google accounts, passing this
 value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.</p>
 *
 * @type {{}}
 */
DriveApp.Access.prototype.DOMAIN = {};

/**
 * People in your domain who have the link can access. Sign-in required.

 <p>This setting is available only for users of Google Apps for Business, Google Apps for
 Education, or Google Apps for Your Domain. For other types of Google accounts, passing this
 value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.</p>
 *
 * @type {{}}
 */
DriveApp.Access.prototype.DOMAIN_WITH_LINK = {};

/**
 * Only people explicitly granted permission can access. Sign-in required.
 *
 * @type {{}}
 */
DriveApp.Access.prototype.PRIVATE = {};

/**
 * An enum representing the permissions granted to users who can access a file or folder, besides
 any individual users who have been explicitly given access.

 */
DriveApp.Permission = function(){};

/**
 * Users who can access the file or folder are able only to view it, copy it, or comment on it.
 Passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception if
 the type of file does not support it.
 *
 * @type {{}}
 */
DriveApp.Permission.prototype.COMMENT = {};

/**
 * Users who can access the file or folder are able to edit it. Unless
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setShareableByEditors(Boolean)'>File.setShareableByEditors(shareable)</a></code> is set to <code>false</code>, users can also change the
 sharing settings.  Passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code>
 throws an exception if the type of file does not support it.
 *
 * @type {{}}
 */
DriveApp.Permission.prototype.EDIT = {};

/**
 * The user does not have any permissions for the file or folder. This value can be returned, but
 passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception unless it
 is set in combination with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/access.html#ANYONE'>Access.ANYONE</a></code>.
 *
 * @type {{}}
 */
DriveApp.Permission.prototype.NONE = {};

/**
 * The user owns the file or folder. This value can be returned, but passing it to
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.
 *
 * @type {{}}
 */
DriveApp.Permission.prototype.OWNER = {};

/**
 * Users who can access the file or folder are able only to view it or copy it. Passing this value
 to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception if the type of file
 does not support it.
 *
 * @type {{}}
 */
DriveApp.Permission.prototype.VIEW = {};

/**
 * Adds the given file to the root of the user's Drive. This method does not move the file out of its
 existing parent folder; a file can have more than one parent simultaneously.
 *
 * @param {DriveApp.File} child - the child file to add
 *
 * @return {DriveApp.Folder} this The new parent of the file added as a child.
 */
DriveApp.addFile = function(child){};

/**
 * Adds the given folder to the root of the user's Drive. This method does not move the folder out of
 its existing parent folder; a folder can have more than one parent simultaneously.
 *
 * @param {DriveApp.Folder} child - the child folder to add
 *
 * @return {DriveApp.Folder} this The new parent of the folder added as a child.
 */
DriveApp.addFolder = function(child){};

/**
 * Resumes a file iteration using a continuation token from a previous iterator. This method
 is useful if processing an iterator in one execution would exceed the maximum execution
 time. Continuation tokens are generally valid for one week.
 *
 * @param {String} continuationToken - a continuation token from a previous file iterator
 *
 * @return {DriveApp.FileIterator} a collection of files that remained in a previous iterator when the continuation
     token was generated
 */
DriveApp.continueFileIterator = function(continuationToken){};

/**
 * Resumes a folder iteration using a continuation token from a previous iterator. This method
 is useful if processing an iterator in one execution would exceed the maximum execution
 time. Continuation tokens are generally valid for one week.
 *
 * @param {String} continuationToken - a continuation token from a previous folder iterator
 *
 * @return {DriveApp.FolderIterator} a collection of folders that remained in a previous iterator when the continuation
     token was generated
 */
DriveApp.continueFolderIterator = function(continuationToken){};

/**
 * Creates a file in the root of the user's Drive from a given <code>Blob</code> of arbitrary data.

 <pre class="prettyprint">
 // Create an image file in Google Drive using the Maps service.
 var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
 DriveApp.createFile(blob);
 </pre>
 *
 * @param {BlobSource} blob - the data for the new file
 *
 * @return {DriveApp.File} the new file
 */
DriveApp.createFile = function(blob){};

/**
 * Creates a text file in the root of the user's Drive with the given name and contents. Throws an
 exception if <code>content</code> is larger than 10MB.

 <pre class="prettyprint">
 // Create a text file with the content "Hello, world!"
 DriveApp.createFile('New Text File', 'Hello, world!');
 </pre>
 *
 * @param {String} name - the name of the new file
 * @param {String} content - the content for the new file
 *
 * @return {DriveApp.File} the new file
 */
DriveApp.createFile = function(name, content){};

/**
 * Creates a folder in the root of the user's Drive with the given name.
 *
 * @param {String} name - the name of the new folder
 *
 * @return {DriveApp.Folder} the new folder
 */
DriveApp.createFolder = function(name){};

/**
 * Gets the file with the given ID. Throws a scripting exception if the file does not exist or the
 user does not have permission to access it.
 *
 * @param {String} id - the ID of the file
 *
 * @return {DriveApp.File} the file with the given ID
 */
DriveApp.getFileById = function(id){};

/**
 * Gets a collection of all files in the user's Drive.
 *
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive
 */
DriveApp.getFiles = function(){};

/**
 * Gets a collection of all files in the user's Drive that have the given name.
 *
 * @param {String} name - the name of the files to find
 *
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive that have the given name
 */
DriveApp.getFilesByName = function(name){};

/**
 * Gets a collection of all files in the user's Drive that have the given MIME type.
 *
 * @param {String} mimeType - the MIME type of the files to find
 *
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive that have the given MIME type
 */
DriveApp.getFilesByType = function(mimeType){};

/**
 * Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or
 the user does not have permission to access it.
 *
 * @param {String} id - the ID of the folder
 *
 * @return {DriveApp.Folder} the folder with the given ID
 */
DriveApp.getFolderById = function(id){};

/**
 * Gets a collection of all folders in the user's Drive.
 *
 * @return {DriveApp.FolderIterator} a collection of all folders in the user's Drive
 */
DriveApp.getFolders = function(){};

/**
 * Gets a collection of all folders in the user's Drive that have the given name.
 *
 * @param {String} name - the name of the folders to find
 *
 * @return {DriveApp.FolderIterator} a collection of all folders in the user's Drive that have the given name
 */
DriveApp.getFoldersByName = function(name){};

/**
 * Gets the folder at the root of the user's Drive.
 *
 * @return {DriveApp.Folder} the root folder of the user's Drive
 */
DriveApp.getRootFolder = function(){};

/**
 * Gets the number of bytes the user is allowed to store in Drive.
 *
 * @return {number} the number of bytes the user is allowed to store in Drive
 */
DriveApp.getStorageLimit = function(){};

/**
 * Gets the number of bytes the user is currently storing in Drive.
 *
 * @return {number} the number of bytes the user is currently storing in Drive
 */
DriveApp.getStorageUsed = function(){};

/**
 * Gets a collection of all the files in the trash of the user's Drive.
 *
 * @return {DriveApp.FileIterator} a collection of files in the trash
 */
DriveApp.getTrashedFiles = function(){};

/**
 * Gets a collection of all the folders in the trash of the user's Drive.
 *
 * @return {DriveApp.FolderIterator} a collection of folders in the trash
 */
DriveApp.getTrashedFolders = function(){};

/**
 * Removes the given file from the root of the user's Drive. This method does not delete the file, but
 if a file is removed from all of its parents, it cannot be seen in Drive except by searching
 for it or using the "All items" view.
 *
 * @param {DriveApp.File} child - the child file to remove
 *
 * @return {DriveApp.Folder} this The previous parent of the child.
 */
DriveApp.removeFile = function(child){};

/**
 * Removes the given folder from the root of the user's Drive. This method does not delete the folder
 or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
 except by searching for it or using the "All items" view.
 *
 * @param {DriveApp.Folder} child - the child folder to remove
 *
 * @return {DriveApp.Folder} this The previous parent of the child.
 */
DriveApp.removeFolder = function(child){};

/**
 * Gets a collection of all files in the user's Drive that match the given search
 criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 SDK documentation</a>. Note that the <code>params</code> argument is a query string that may
 contain string values, so take care to escape quotation marks correctly (for example
 <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s
 Travels&quot;&#39;</code>).

 <pre class="prettyprint">
 // Log the name of every file in the user's Drive that modified after February 28,
 // 2013 whose name contains "untitled".
 var files = DriveApp.searchFiles(
     'modifiedDate > "2013-02-28" and title contains "untitled"');
 while (files.hasNext()) {
   var file = files.next();
   Logger.log(file.getName());
 }
 </pre>
 *
 * @param {String} params - the search criteria, as detailed in the
     <a href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 *
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive that match the search
     criteria
 */
DriveApp.searchFiles = function(params){};

/**
 * Gets a collection of all folders in the user's Drive that match the given search
 criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 SDK documentation</a>. Note that the <code>params</code> argument is a query string that may
 contain string values, so take care to escape quotation marks correctly (for example
 <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s
 Travels&quot;&#39;</code>).

 <pre class="prettyprint">
 // Log the name of every folder in the user's Drive that you own and is starred.
 var folders = DriveApp.searchFolders('starred = true and "me" in owners');
 while (folders.hasNext()) {
   var folder = folders.next();
   Logger.log(folder.getName());
 }
 </pre>
 *
 * @param {String} params - the search criteria, as detailed in the
     <a href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 *
 * @return {DriveApp.FolderIterator} a collection of all folders in the user's Drive that match the search
     criteria
 */
DriveApp.searchFolders = function(params){};

/** @constructor */
DriveApp.File = function(){};

/**
 * Add the given user to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was
 already on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.addCommenter = function(emailAddress){};

/**
 * Add the given array of users to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any
 of the users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.addCommenters = function(emailAddresses){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.addEditors = function(emailAddresses){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.addViewer = function(emailAddress){};

/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any of the
 users were already on the list of editors, this method has no effect for them.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.addViewers = function(emailAddresses){};

/**
 * Gets the permission granted to the given user.
 *
 * @param {String} email - the email address of the user whose permissions should be checked
 *
 * @return {DriveApp.Permission} the permissions granted to the user
 */
DriveApp.File.prototype.getAccess = function(email){};

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
DriveApp.File.prototype.getAs = function(contentType){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
DriveApp.File.prototype.getBlob = function(){};

/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was created.
 *
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was created
 */
DriveApp.File.prototype.getDateCreated = function(){};

/**
 * Gets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @return {String} the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */
DriveApp.File.prototype.getDescription = function(){};

/**
 * Gets the URL that can be used to download the file. Only users with permission to open the
 file in Google Drive can access the URL.
 *
 * @return {String} the URL that can be used to download the file
 */
DriveApp.File.prototype.getDownloadUrl = function(){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user who executes the script
 does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, this method returns an empty array.
 *
 * @return {DriveApp.User[]} an array of users with edit permission
 */
DriveApp.File.prototype.getEditors = function(){};

/**
 * Gets the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @return {String} the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */
DriveApp.File.prototype.getId = function(){};

/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was last updated.
 *
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was last updated
 */
DriveApp.File.prototype.getLastUpdated = function(){};

/**
 * Gets the MIME type of the file.
 *
 * @return {String} the MIME type of the file
 */
DriveApp.File.prototype.getMimeType = function(){};

/**
 * Gets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @return {String} the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */
DriveApp.File.prototype.getName = function(){};

/**
 * Gets the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @return {DriveApp.User} a <code>User</code> object representing the owner
 */
DriveApp.File.prototype.getOwner = function(){};

/**
 * Gets a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @return {DriveApp.FolderIterator} a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */
DriveApp.File.prototype.getParents = function(){};

/**
 * Gets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, besides any individual
 users who have been explicitly given access.
 *
 * @return {DriveApp.Access} which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */
DriveApp.File.prototype.getSharingAccess = function(){};

/**
 * Gets the permission granted to those users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>,
 besides any individual users who have been explicitly given access.
 *
 * @return {DriveApp.Permission} the permissions granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */
DriveApp.File.prototype.getSharingPermission = function(){};

/**
 * Gets the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in Drive. Note that
 Google Apps files do not count toward Drive storage limits and thus return <code>0</code> bytes.
 *
 * @return {number} the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in Drive
 */
DriveApp.File.prototype.getSize = function(){};

/**
 * Gets a thumbnail image for the file, or <code>null</code> if no thumbnail exists.
 *
 * @return {Blob} the thumbnail image for the file
 */
DriveApp.File.prototype.getThumbnail = function(){};

/**
 * Gets the URL that can be used to open the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in a Google App like
 Drive or Docs.
 *
 * @return {String} the URL that can be used to view this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in a Google App like
     Drive or Docs
 */
DriveApp.File.prototype.getUrl = function(){};

/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.  If the user who
 executes the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, this method
 returns an empty array.
 *
 * @return {DriveApp.User[]} an array of users with view or comment permission
 */
DriveApp.File.prototype.getViewers = function(){};

/**
 * Determines whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> are allowed to
 share with other users or change the permissions.
 *
 * @return {Boolean} <code>true</code> if users with edit permissions are allowed to share with other users or
     change the permissions; <code>false</code> if not
 */
DriveApp.File.prototype.isShareableByEditors = function(){};

/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> has been starred in the user's Drive.
 *
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is starred in the user's Drive;
     <code>false</code> if not
 */
DriveApp.File.prototype.isStarred = function(){};

/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive.
 *
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive;
     <code>false</code> if not
 */
DriveApp.File.prototype.isTrashed = function(){};

/**
 * Creates a copy of the file.
 *
 * @return {DriveApp.File} the new copy
 */
DriveApp.File.prototype.makeCopy = function(){};

/**
 * Creates a copy of the file in the destination directory.
 *
 * @param {DriveApp.Folder} destination - the directory to copy the file into.
 *
 * @return {DriveApp.File} the new copy
 */
DriveApp.File.prototype.makeCopy = function(destination){};

/**
 * Creates a copy of the file and names it with the name provided.
 *
 * @param {String} name - the filename that should be applied to the new copy
 *
 * @return {DriveApp.File} the new copy
 */
DriveApp.File.prototype.makeCopy = function(name){};

/**
 * Removes the given user from the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.  This method
 does not block users from access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
 who have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.removeCommenter = function(emailAddress){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have
 general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.removeEditor = function(emailAddress){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.  This
 method has no effect if the user is an editor, not a viewer or commenter. This method also does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who
 have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire
 domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> for chaining
 */
DriveApp.File.prototype.removeViewer = function(emailAddress){};

/**
 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> granted to the given user. This method does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
 who have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 entire domain.
 *
 * @param {String} user - the email address of the user whose access should be revoked
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.revokePermissions = function(user){};

/**
 * Overwrites the content of the file with a given replacement. Throws an exception if
 <code>content</code> is larger than 10MB.

 <aside class="warning">Beware: this change is irreversible.</aside>
 *
 * @param {String} content - the new content for the file
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setContent = function(content){};

/**
 * Sets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @param {String} description - the new description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setDescription = function(description){};

/**
 * Sets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @param {String} name - the new name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setName = function(name){};

/**
 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method also gives the previous owner
 explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 *
 * @param {String} emailAddress - the email address of the user who should become the new owner
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setOwner = function(emailAddress){};

/**
 * Sets whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> are allowed to share
 with other users or change the permissions. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is
 <code>true</code>.
 *
 * @param {Boolean} shareable - <code>true</code> if users with edit permissions should be allowed to share with
     other users or change the permissions; <code>false</code> if not
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setShareableByEditors = function(shareable){};

/**
 * Sets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> and what permissions
 those users are granted, besides any individual users who have been explicitly given access.

 <pre class="prettyprint">
 // Creates a folder that anyone on the Internet can read from and write to. (Domain
 // administrators can prohibit this setting for users of Google Apps for Business, Google Apps
 // for Education, or Google Apps for Your Domain.)
 var folder = DriveApp.createFolder('Shared Folder');
 folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
 </pre>
 *
 * @param {DriveApp.Access} accessType - which class of users should be able to access the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 * @param {DriveApp.Permission} permissionType - the permissions that should be granted to users who can access the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setSharing = function(accessType, permissionType){};

/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is starred in the user's Drive. The default for
 new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>s is <code>false</code>.
 *
 * @param {Boolean} starred - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> should be starred in the user's
     Drive; <code>false</code> if not
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setStarred = function(starred){};

/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive. The default
 for new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>s is <code>false</code>.
 *
 * @param {Boolean} trashed - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> should be moved to the trash of
     the user's Drive; <code>false</code> if not
 *
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */
DriveApp.File.prototype.setTrashed = function(trashed){};

/** @constructor */
DriveApp.FileIterator = function(){};

/**
 * Gets a token that can be used to resume this iteration at a later time. This method is
 useful if processing an iterator in one execution would exceed the maximum execution
 time. Continuation tokens are generally valid for one week.
 *
 * @return {String} a continuation token that can be used to resume this iteration with the items
     that remained in the iterator when the token was generated
 */
DriveApp.FileIterator.prototype.getContinuationToken = function(){};

/**
 * Determines whether calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()'>next()</a></code> will return an item.
 *
 * @return {Boolean} <code>true</code> if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()'>next()</a></code> will return an item; <code>false</code> if not
 */
DriveApp.FileIterator.prototype.hasNext = function(){};

/**
 * Gets the next item in the collection of files or folders. Throws an exception if no items
 remain.
 *
 * @return {DriveApp.File} the next item in the collection
 */
DriveApp.FileIterator.prototype.next = function(){};

/** @constructor */
DriveApp.Folder = function(){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.addEditors = function(emailAddresses){};

/**
 * Adds the given file to the current folder. This method does not move the file out of its
 existing parent folder; a file can have more than one parent simultaneously.
 *
 * @param {DriveApp.File} child - the child file to add
 *
 * @return {DriveApp.Folder} this The new parent of the file added as a child.
 */
DriveApp.Folder.prototype.addFile = function(child){};

/**
 * Adds the given folder to the current folder. This method does not move the folder out of
 its existing parent folder; a folder can have more than one parent simultaneously.
 *
 * @param {DriveApp.Folder} child - the child folder to add
 *
 * @return {DriveApp.Folder} this The new parent of the folder added as a child.
 */
DriveApp.Folder.prototype.addFolder = function(child){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.addViewer = function(emailAddress){};

/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If any of the
 users were already on the list of editors, this method has no effect for them.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.addViewers = function(emailAddresses){};

/**
 * Creates a file in the current folder from a given <code>Blob</code> of arbitrary data.

 <pre class="prettyprint">
 // Create an image file in Google Drive using the Maps service.
 var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
 DriveApp.getRootFolder().createFile(blob);
 </pre>
 *
 * @param {BlobSource} blob - the data for the new file
 *
 * @return {DriveApp.File} the new file
 */
DriveApp.Folder.prototype.createFile = function(blob){};

/**
 * Creates a text file in the current folder with the given name and contents. Throws an
 exception if <code>content</code> is larger than 10MB.

 <pre class="prettyprint">
 // Create a text file with the content "Hello, world!"
 DriveApp.getRootFolder().createFile('New Text File', 'Hello, world!');
 </pre>
 *
 * @param {String} name - the name of the new file
 * @param {String} content - the content for the new file
 *
 * @return {DriveApp.File} the new file
 */
DriveApp.Folder.prototype.createFile = function(name, content){};

/**
 * Creates a folder in the current folder with the given name.
 *
 * @param {String} name - the name of the new folder
 *
 * @return {DriveApp.Folder} the new folder
 */
DriveApp.Folder.prototype.createFolder = function(name){};

/**
 * Gets the permission granted to the given user.
 *
 * @param {String} email - the email address of the user whose permissions should be checked
 *
 * @return {DriveApp.Permission} the permissions granted to the user
 */
DriveApp.Folder.prototype.getAccess = function(email){};

/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was created.
 *
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was created
 */
DriveApp.Folder.prototype.getDateCreated = function(){};

/**
 * Gets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @return {String} the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */
DriveApp.Folder.prototype.getDescription = function(){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user who executes the script
 does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, this method returns an empty array.
 *
 * @return {DriveApp.User[]} an array of users with edit permission
 */
DriveApp.Folder.prototype.getEditors = function(){};

/**
 * Gets a collection of all files that are children of the current folder.
 *
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder
 */
DriveApp.Folder.prototype.getFiles = function(){};

/**
 * Gets a collection of all files that are children of the current folder and have the given name.
 *
 * @param {String} name - the name of the files to find
 *
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder and have the given name
 */
DriveApp.Folder.prototype.getFilesByName = function(name){};

/**
 * Gets a collection of all files that are children of the current folder and have the given MIME type.
 *
 * @param {String} mimeType - the MIME type of the files to find
 *
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder and have the given MIME type
 */
DriveApp.Folder.prototype.getFilesByType = function(mimeType){};

/**
 * Gets a collection of all folders that are children of the current folder.
 *
 * @return {DriveApp.FolderIterator} a collection of all folders that are children of the current folder
 */
DriveApp.Folder.prototype.getFolders = function(){};

/**
 * Gets a collection of all folders that are children of the current folder and have the given name.
 *
 * @param {String} name - the name of the folders to find
 *
 * @return {DriveApp.FolderIterator} a collection of all folders that are children of the current folder and have the given name
 */
DriveApp.Folder.prototype.getFoldersByName = function(name){};

/**
 * Gets the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @return {String} the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */
DriveApp.Folder.prototype.getId = function(){};

/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was last updated.
 *
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was last updated
 */
DriveApp.Folder.prototype.getLastUpdated = function(){};

/**
 * Gets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @return {String} the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */
DriveApp.Folder.prototype.getName = function(){};

/**
 * Gets the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @return {DriveApp.User} a <code>User</code> object representing the owner
 */
DriveApp.Folder.prototype.getOwner = function(){};

/**
 * Gets a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @return {DriveApp.FolderIterator} a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */
DriveApp.Folder.prototype.getParents = function(){};

/**
 * Gets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, besides any individual
 users who have been explicitly given access.
 *
 * @return {DriveApp.Access} which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */
DriveApp.Folder.prototype.getSharingAccess = function(){};

/**
 * Gets the permission granted to those users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>,
 besides any individual users who have been explicitly given access.
 *
 * @return {DriveApp.Permission} the permissions granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */
DriveApp.Folder.prototype.getSharingPermission = function(){};

/**
 * Gets the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in Drive. Note that
 Google Apps files do not count toward Drive storage limits and thus return <code>0</code> bytes.
 *
 * @return {number} the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in Drive
 */
DriveApp.Folder.prototype.getSize = function(){};

/**
 * Gets the URL that can be used to open the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in a Google App like
 Drive or Docs.
 *
 * @return {String} the URL that can be used to view this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in a Google App like
     Drive or Docs
 */
DriveApp.Folder.prototype.getUrl = function(){};

/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.  If the user who
 executes the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, this method
 returns an empty array.
 *
 * @return {DriveApp.User[]} an array of users with view or comment permission
 */
DriveApp.Folder.prototype.getViewers = function(){};

/**
 * Determines whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> are allowed to
 share with other users or change the permissions.
 *
 * @return {Boolean} <code>true</code> if users with edit permissions are allowed to share with other users or
     change the permissions; <code>false</code> if not
 */
DriveApp.Folder.prototype.isShareableByEditors = function(){};

/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> has been starred in the user's Drive.
 *
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is starred in the user's Drive;
     <code>false</code> if not
 */
DriveApp.Folder.prototype.isStarred = function(){};

/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive.
 *
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive;
     <code>false</code> if not
 */
DriveApp.Folder.prototype.isTrashed = function(){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have
 general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.removeEditor = function(emailAddress){};

/**
 * Removes the given file from the current folder. This method does not delete the file, but
 if a file is removed from all of its parents, it cannot be seen in Drive except by searching
 for it or using the "All items" view.
 *
 * @param {DriveApp.File} child - the child file to remove
 *
 * @return {DriveApp.Folder} this The previous parent of the child.
 */
DriveApp.Folder.prototype.removeFile = function(child){};

/**
 * Removes the given folder from the current folder. This method does not delete the folder
 or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
 except by searching for it or using the "All items" view.
 *
 * @param {DriveApp.Folder} child - the child folder to remove
 *
 * @return {DriveApp.Folder} this The previous parent of the child.
 */
DriveApp.Folder.prototype.removeFolder = function(child){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.  This
 method has no effect if the user is an editor, not a viewer or commenter. This method also does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who
 have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire
 domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> for chaining
 */
DriveApp.Folder.prototype.removeViewer = function(emailAddress){};

/**
 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> granted to the given user. This method does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users
 who have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
 entire domain.
 *
 * @param {String} user - the email address of the user whose access should be revoked
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.revokePermissions = function(user){};

/**
 * Gets a collection of all files that are children of the current folder and match the given search
 criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 SDK documentation</a>. Note that the <code>params</code> argument is a query string that may
 contain string values, so take care to escape quotation marks correctly (for example
 <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s
 Travels&quot;&#39;</code>).

 <pre class="prettyprint">
 // Log the name of every file that are children of the current folder and modified after February 28,
 // 2013 whose name contains "untitled".
 var files = DriveApp.getRootFolder().searchFiles(
     'modifiedDate > "2013-02-28" and title contains "untitled"');
 while (files.hasNext()) {
   var file = files.next();
   Logger.log(file.getName());
 }
 </pre>
 *
 * @param {String} params - the search criteria, as detailed in the
     <a href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 *
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder and match the search
     criteria
 */
DriveApp.Folder.prototype.searchFiles = function(params){};

/**
 * Gets a collection of all folders that are children of the current folder and match the given search
 criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 SDK documentation</a>. Note that the <code>params</code> argument is a query string that may
 contain string values, so take care to escape quotation marks correctly (for example
 <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s
 Travels&quot;&#39;</code>).

 <pre class="prettyprint">
 // Log the name of every folder that are children of the current folder and you own and is starred.
 var folders = DriveApp.getRootFolder().searchFolders('starred = true and "me" in owners');
 while (folders.hasNext()) {
   var folder = folders.next();
   Logger.log(folder.getName());
 }
 </pre>
 *
 * @param {String} params - the search criteria, as detailed in the
     <a href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 *
 * @return {DriveApp.FolderIterator} a collection of all folders that are children of the current folder and match the search
     criteria
 */
DriveApp.Folder.prototype.searchFolders = function(params){};

/**
 * Sets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @param {String} description - the new description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setDescription = function(description){};

/**
 * Sets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @param {String} name - the new name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setName = function(name){};

/**
 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method also gives the previous owner
 explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 *
 * @param {String} emailAddress - the email address of the user who should become the new owner
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setOwner = function(emailAddress){};

/**
 * Sets whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> are allowed to share
 with other users or change the permissions. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is
 <code>true</code>.
 *
 * @param {Boolean} shareable - <code>true</code> if users with edit permissions should be allowed to share with
     other users or change the permissions; <code>false</code> if not
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setShareableByEditors = function(shareable){};

/**
 * Sets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> and what permissions
 those users are granted, besides any individual users who have been explicitly given access.

 <pre class="prettyprint">
 // Creates a folder that anyone on the Internet can read from and write to. (Domain
 // administrators can prohibit this setting for users of Google Apps for Business, Google Apps
 // for Education, or Google Apps for Your Domain.)
 var folder = DriveApp.createFolder('Shared Folder');
 folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
 </pre>
 *
 * @param {DriveApp.Access} accessType - which class of users should be able to access the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 * @param {DriveApp.Permission} permissionType - the permissions that should be granted to users who can access the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setSharing = function(accessType, permissionType){};

/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is starred in the user's Drive. The default for
 new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>s is <code>false</code>.
 *
 * @param {Boolean} starred - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> should be starred in the user's
     Drive; <code>false</code> if not
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setStarred = function(starred){};

/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive. The default
 for new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>s is <code>false</code>.
 *
 * @param {Boolean} trashed - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> should be moved to the trash of
     the user's Drive; <code>false</code> if not
 *
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */
DriveApp.Folder.prototype.setTrashed = function(trashed){};

/** @constructor */
DriveApp.FolderIterator = function(){};

/**
 * Gets a token that can be used to resume this iteration at a later time. This method is
 useful if processing an iterator in one execution would exceed the maximum execution
 time. Continuation tokens are generally valid for one week.
 *
 * @return {String} a continuation token that can be used to resume this iteration with the items
     that remained in the iterator when the token was generated
 */
DriveApp.FolderIterator.prototype.getContinuationToken = function(){};

/**
 * Determines whether calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()'>next()</a></code> will return an item.
 *
 * @return {Boolean} <code>true</code> if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()'>next()</a></code> will return an item; <code>false</code> if not
 */
DriveApp.FolderIterator.prototype.hasNext = function(){};

/**
 * Gets the next item in the collection of files or folders. Throws an exception if no items
 remain.
 *
 * @return {DriveApp.Folder} the next item in the collection
 */
DriveApp.FolderIterator.prototype.next = function(){};

/** @constructor */
DriveApp.User = function(){};

/**
 * Gets the domain name associated with the user's account.

 <pre class="prettyprint">
 <code>
 // Log the domain names associated with all users who have edit access to a file.
 var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 var editors = file.getEditors();
 for (var i = 0; i &lt; editors.length; i++) {
   Logger.log(editors[i].getDomain());
 }
 </code></pre>
 *
 * @return {String} the domain name associated with the user's account
 */
DriveApp.User.prototype.getDomain = function(){};

/**
 * Gets the user's email address. The user's email address is only available if the user has
 chosen to share the address from the Google+ account settings page, or if the user belongs to
 the same domain as the user running the script and the domain administrator has allowed all
 users within the domain to see other users' email addresses.

 <pre class="prettyprint">
 <code>
 // Log the email address of all users who have edit access to a file.
 var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 var editors = file.getEditors();
 for (var i = 0; i &lt; editors.length; i++) {
   Logger.log(editors[i].getEmail());
 }
 </code></pre>
 *
 * @return {String} the user's email's address, or a blank string if the email address is not available
 */
DriveApp.User.prototype.getEmail = function(){};

/**
 * Gets the user's name. This method returns <code>null</code> if the user's name is not available.

 <pre class="prettyprint">
 <code>
 // Log the names of all users who have edit access to a file.
 var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 var editors = file.getEditors();
 for (var i = 0; i &lt; editors.length; i++) {
   Logger.log(editors[i].getName());
 }
 </code></pre>
 *
 * @return {String} the user's name, or <code>null</code> if the name is not available
 */
DriveApp.User.prototype.getName = function(){};

/**
 * Gets the URL for the user's photo. This method returns <code>null</code> if the user's photo is not
 available.

 <pre class="prettyprint">
 <code>
 // Log the URLs for the photos of all users who have edit access to a file.
 var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 var editors = file.getEditors();
 for (var i = 0; i &lt; editors.length; i++) {
   Logger.log(editors[i].getPhotoUrl());
 }
 </code></pre>
 *
 * @return {String} the URL for the user's photo, or <code>null</code> if the photo is not available
 */
DriveApp.User.prototype.getPhotoUrl = function(){};

/**
 * Gets the user's email address.

 <pre class="prettyprint">
 // Log the email address of the person running the script.
 Logger.log(Session.getActiveUser().getUserLoginId());
 </pre>
 *
 * @return {String} the user's email's address
 */
DriveApp.User.prototype.getUserLoginId = function(){};

