/**********************************************
 * @namespace DriveApp
 ***********************************************/

/**
 * @class DriveApp
 */

/**
 * An enum representing classes of users who can access a file or folder, besides any individual
 * users who have been explicitly given access.
 * 
 * @typedef {DriveApp.Access} DriveApp.Access
 */
/**
 * An enum representing the permissions granted to users who can access a file or folder, besides
 * any individual users who have been explicitly given access.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission
 */
/**
 * Adds the given file to the root of the user's Drive. This method does not move the file out of its
 * existing parent folder; a file can have more than one parent simultaneously.
 * 
 * @function DriveApp.addFile
 * 
 * @param {DriveApp.File} child - the child file to add
 * 
 * @return {DriveApp.Folder} this The new parent of the file added as a child.
 */


/**
 * Adds the given folder to the root of the user's Drive. This method does not move the folder out of
 * its existing parent folder; a folder can have more than one parent simultaneously.
 * 
 * @function DriveApp.addFolder
 * 
 * @param {DriveApp.Folder} child - the child folder to add
 * 
 * @return {DriveApp.Folder} this The new parent of the folder added as a child.
 */


/**
 * Resumes a file iteration using a continuation token from a previous iterator. This method is
 * useful if processing an iterator in one execution would exceed the maximum execution time.
 * Continuation tokens are generally valid for one week.
 * 
 * @function DriveApp.continueFileIterator
 * 
 * @param {String} continuationToken - a continuation token from a previous file iterator
 * 
 * @return {DriveApp.FileIterator} a collection of files that remained in a previous iterator when the continuation token
 *     was generated
 */


/**
 * Resumes a folder iteration using a continuation token from a previous iterator. This method is
 * useful if processing an iterator in one execution would exceed the maximum execution time.
 * Continuation tokens are generally valid for one week.
 * 
 * @function DriveApp.continueFolderIterator
 * 
 * @param {String} continuationToken - a continuation token from a previous folder iterator
 * 
 * @return {DriveApp.FolderIterator} a collection of folders that remained in a previous iterator when the continuation
 *     token was generated
 */


/**
 * Creates a file in the root of the user's Drive from a given <code>Blob</code> of arbitrary data.
 * 
 * <pre class="prettyprint">
 * // Create an image file in Google Drive using the Maps service.
 * var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
 * DriveApp.createFile(blob);
 * </pre>
 * 
 * @function DriveApp.createFile
 * 
 * @param {BlobSource} blob - the data for the new file
 * 
 * @return {DriveApp.File} the new file
 */


/**
 * Creates a text file in the root of the user's Drive with the given name and contents. Throws an
 * exception if <code>content</code> is larger than 50 MB.
 * 
 * <pre class="prettyprint">
 * // Create a text file with the content "Hello, world!"
 * DriveApp.createFile('New Text File', 'Hello, world!');
 * </pre>
 * 
 * @function DriveApp.createFile
 * 
 * @param {String} name - the name of the new file
 * @param {String} content - the content for the new file
 * 
 * @return {DriveApp.File} the new file
 */


/**
 * Creates a file in the root of the user's Drive with the given name, contents, and MIME type. Throws
 * an exception if <code>content</code> is larger than 10MB.
 * 
 * <pre class="prettyprint"><code>
 * // Create an HTML file with the content &quot;Hello, world!&quot;
 * DriveApp.createFile(&#39;New HTML File&#39;, &#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;, MimeType.HTML);
 * </code></pre>
 * 
 * @function DriveApp.createFile
 * 
 * @param {String} name - the name of the new file
 * @param {String} content - the content for the new file
 * @param {String} mimeType - the MIME type of the new file
 * 
 * @return {DriveApp.File} the new file
 */


/**
 * Creates a folder in the root of the user's Drive with the given name.
 * 
 * @function DriveApp.createFolder
 * 
 * @param {String} name - the name of the new folder
 * 
 * @return {DriveApp.Folder} the new folder
 */


/**
 * Gets the file with the given ID. Throws a scripting exception if the file does not exist or the
 * user does not have permission to access it.
 * 
 * @function DriveApp.getFileById
 * 
 * @param {String} id - the ID of the file
 * 
 * @return {DriveApp.File} the file with the given ID
 */


/**
 * Gets a collection of all files in the user's Drive.
 * 
 * @function DriveApp.getFiles
 * 
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive
 */


/**
 * Gets a collection of all files in the user's Drive that have the given name.
 * 
 * @function DriveApp.getFilesByName
 * 
 * @param {String} name - the name of the files to find
 * 
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive that have the given name
 */


/**
 * Gets a collection of all files in the user's Drive that have the given MIME type.
 * 
 * @function DriveApp.getFilesByType
 * 
 * @param {String} mimeType - the MIME type of the files to find
 * 
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive that have the given MIME type
 */


/**
 * Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or
 * the user does not have permission to access it.
 * 
 * @function DriveApp.getFolderById
 * 
 * @param {String} id - the ID of the folder
 * 
 * @return {DriveApp.Folder} the folder with the given ID
 */


/**
 * Gets a collection of all folders in the user's Drive.
 * 
 * @function DriveApp.getFolders
 * 
 * @return {DriveApp.FolderIterator} a collection of all folders in the user's Drive
 */


/**
 * Gets a collection of all folders in the user's Drive that have the given name.
 * 
 * @function DriveApp.getFoldersByName
 * 
 * @param {String} name - the name of the folders to find
 * 
 * @return {DriveApp.FolderIterator} a collection of all folders in the user's Drive that have the given name
 */


/**
 * Gets the folder at the root of the user's Drive.
 * 
 * @function DriveApp.getRootFolder
 * 
 * @return {DriveApp.Folder} the root folder of the user's Drive
 */


/**
 * Gets the number of bytes the user is allowed to store in Drive.
 * 
 * @function DriveApp.getStorageLimit
 * 
 * @return {IntegerNum} the number of bytes the user is allowed to store in Drive
 */


/**
 * Gets the number of bytes the user is currently storing in Drive.
 * 
 * @function DriveApp.getStorageUsed
 * 
 * @return {IntegerNum} the number of bytes the user is currently storing in Drive
 */


/**
 * Gets a collection of all the files in the trash of the user's Drive.
 * 
 * @function DriveApp.getTrashedFiles
 * 
 * @return {DriveApp.FileIterator} a collection of files in the trash
 */


/**
 * Gets a collection of all the folders in the trash of the user's Drive.
 * 
 * @function DriveApp.getTrashedFolders
 * 
 * @return {DriveApp.FolderIterator} a collection of folders in the trash
 */


/**
 * Removes the given file from the root of the user's Drive. This method does not delete the file, but
 * if a file is removed from all of its parents, it cannot be seen in Drive except by searching
 * for it or using the "All items" view.
 * 
 * @function DriveApp.removeFile
 * 
 * @param {DriveApp.File} child - the child file to remove
 * 
 * @return {DriveApp.Folder} this The previous parent of the child.
 */


/**
 * Removes the given folder from the root of the user's Drive. This method does not delete the folder
 * or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
 * except by searching for it or using the "All items" view.
 * 
 * @function DriveApp.removeFolder
 * 
 * @param {DriveApp.Folder} child - the child folder to remove
 * 
 * @return {DriveApp.Folder} this The previous parent of the child.
 */


/**
 * Gets a collection of all files in the user's Drive that match the given search
 * criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 * SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain
 * string values, so take care to escape quotation marks correctly (for example <code>&quot;title
 * contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
 * 
 * <pre class="prettyprint">
 * // Log the name of every file in the user's Drive that modified after February 28,
 * // 2013 whose name contains "untitled".
 * var files = DriveApp.searchFiles(
 *     'modifiedDate > "2013-02-28" and title contains "untitled"');
 * while (files.hasNext()) {
 *   var file = files.next();
 *   Logger.log(file.getName());
 * }
 * </pre>
 * 
 * @function DriveApp.searchFiles
 * 
 * @param {String} params - the search criteria, as detailed in the <a
 *     href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 * 
 * @return {DriveApp.FileIterator} a collection of all files in the user's Drive that match the search
 *     criteria
 */


/**
 * Gets a collection of all folders in the user's Drive that match the given search
 * criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 * SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain
 * string values, so take care to escape quotation marks correctly (for example <code>&quot;title
 * contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
 * 
 * <pre class="prettyprint">
 * // Log the name of every folder in the user's Drive that you own and is starred.
 * var folders = DriveApp.searchFolders('starred = true and "me" in owners');
 * while (folders.hasNext()) {
 *   var folder = folders.next();
 *   Logger.log(folder.getName());
 * }
 * </pre>
 * 
 * @function DriveApp.searchFolders
 * 
 * @param {String} params - the search criteria, as detailed in the <a
 *     href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 * 
 * @return {DriveApp.FolderIterator} a collection of all folders in the user's Drive that match the search
 *     criteria
 */



/**
 * @class DriveApp.Access
 */

/**
 * Anyone on the Internet can find and access. No sign-in required.
 * 
 * <p>Domain administrators can prohibit this setting for users of a G Suite domain. If the
 * setting is disabled, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code>
 * throws an exception.
 * 
 * @typedef {DriveApp.Access} DriveApp.Access.ANYONE
 */
/**
 * Anyone who has the link can access. No sign-in required.
 * 
 * <p>Domain administrators can prohibit this setting for users of a G Suite domain. If the
 * setting is disabled, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code>
 * throws an exception.
 * 
 * @typedef {DriveApp.Access} DriveApp.Access.ANYONE_WITH_LINK
 */
/**
 * People in your domain can find and access. Sign-in required.
 * 
 * <p>This setting is available only for users of a G Suite domain. For other types of Google
 * accounts, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an
 * exception.
 * 
 * @typedef {DriveApp.Access} DriveApp.Access.DOMAIN
 */
/**
 * People in your domain who have the link can access. Sign-in required.
 * 
 * <p>This setting is available only for users of a G Suite domain. For other types of Google
 * accounts, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an
 * exception.
 * 
 * @typedef {DriveApp.Access} DriveApp.Access.DOMAIN_WITH_LINK
 */
/**
 * Only people explicitly granted permission can access. Sign-in required.
 * 
 * @typedef {DriveApp.Access} DriveApp.Access.PRIVATE
 */

/**
 * @class DriveApp.File
 */

/**
 * Add the given user to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was
 * already on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DriveApp.File#addCommenter
 * 
 * @param {String} emailAddress - the email address of the user to add
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Add the given user to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was
 * already on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DriveApp.File#addCommenter
 * 
 * @param {User} user - a representation of the user to add
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Add the given array of users to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any
 * of the users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function DriveApp.File#addCommenters
 * 
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DriveApp.File#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DriveApp.File#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any of the
 * users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function DriveApp.File#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function DriveApp.File#addViewer
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function DriveApp.File#addViewer
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any of the
 * users were already on the list of editors, this method has no effect for them.
 * 
 * @function DriveApp.File#addViewers
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Gets the permission granted to the given user.
 * 
 * @function DriveApp.File#getAccess
 * 
 * @param {String} email - the email address of the user whose permissions should be checked
 * 
 * @return {DriveApp.Permission} the permissions granted to the user
 */


/**
 * Gets the permission granted to the given user.
 * 
 * @function DriveApp.File#getAccess
 * 
 * @param {User} user - a representation of the user whose permissions should be checked
 * 
 * @return {DriveApp.Permission} the permissions granted to the user
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function DriveApp.File#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Return the data inside this object as a blob.
 * 
 * @function DriveApp.File#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was created.
 * 
 * @function DriveApp.File#getDateCreated
 * 
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was created
 */


/**
 * Gets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#getDescription
 * 
 * @return {String} the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */


/**
 * Gets the URL that can be used to download the file. Only users with permission to open the file
 * in Google Drive can access the URL.
 * 
 * @function DriveApp.File#getDownloadUrl
 * 
 * @return {String} the URL that can be used to download the file
 */


/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user who executes the script
 * does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, this method returns an empty array.
 * 
 * @function DriveApp.File#getEditors
 * 
 * @return {DriveApp.User[]} An array of users with edit permission.
 */


/**
 * Gets the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#getId
 * 
 * @return {String} the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */


/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was last updated.
 * 
 * @function DriveApp.File#getLastUpdated
 * 
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was last updated
 */


/**
 * Gets the MIME type of the file.
 * 
 * @function DriveApp.File#getMimeType
 * 
 * @return {String} the MIME type of the file
 */


/**
 * Gets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#getName
 * 
 * @return {String} the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */


/**
 * Gets the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#getOwner
 * 
 * @return {DriveApp.User} a <code>User</code> object representing the owner
 */


/**
 * Gets a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#getParents
 * 
 * @return {DriveApp.FolderIterator} a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */


/**
 * Gets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, besides any individual
 * users who have been explicitly given access.
 * 
 * @function DriveApp.File#getSharingAccess
 * 
 * @return {DriveApp.Access} which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */


/**
 * Gets the permission granted to those users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>,
 * besides any individual users who have been explicitly given access.
 * 
 * @function DriveApp.File#getSharingPermission
 * 
 * @return {DriveApp.Permission} the permissions granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 */


/**
 * Gets the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in Drive. Note that G
 * Suite application files do not count toward Drive storage limits and thus return <code>0</code>
 * bytes.
 * 
 * @function DriveApp.File#getSize
 * 
 * @return {IntegerNum} the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in Drive
 */


/**
 * Gets a thumbnail image for the file, or <code>null</code> if no thumbnail exists.
 * 
 * @function DriveApp.File#getThumbnail
 * 
 * @return {Blob} the thumbnail image for the file
 */


/**
 * Gets the URL that can be used to open the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in a Google App like
 * Drive or Docs.
 * 
 * @function DriveApp.File#getUrl
 * 
 * @return {String} the URL that can be used to view this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in a Google App like
 *     Drive or Docs
 */


/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user who
 * executes the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, this method
 * returns an empty array.
 * 
 * @function DriveApp.File#getViewers
 * 
 * @return {DriveApp.User[]} An array of users with view or comment permission.
 */


/**
 * Determines whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> are allowed to
 * share with other users or change the permissions.
 * 
 * @function DriveApp.File#isShareableByEditors
 * 
 * @return {Boolean} <code>true</code> if users with edit permissions are allowed to share with other users or
 *     change the permissions; <code>false</code> if not
 */


/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> has been starred in the user's Drive.
 * 
 * @function DriveApp.File#isStarred
 * 
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is starred in the user's Drive; <code>false</code> if not
 */


/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive.
 * 
 * @function DriveApp.File#isTrashed
 * 
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive;
 *     <code>false</code> if not
 */


/**
 * Creates a copy of the file.
 * 
 * @function DriveApp.File#makeCopy
 * 
 * @return {DriveApp.File} the new copy
 */


/**
 * Creates a copy of the file in the destination directory.
 * 
 * @function DriveApp.File#makeCopy
 * 
 * @param {DriveApp.Folder} destination - the directory to copy the file into.
 * 
 * @return {DriveApp.File} the new copy
 */


/**
 * Creates a copy of the file and names it with the name provided.
 * 
 * @function DriveApp.File#makeCopy
 * 
 * @param {String} name - the filename that should be applied to the new copy
 * 
 * @return {DriveApp.File} the new copy
 */


/**
 * Creates a copy of the file in the destination directory and names it with the name provided.
 * 
 * @function DriveApp.File#makeCopy
 * 
 * @param {String} name - the filename that should be applied to the new copy
 * @param {DriveApp.Folder} destination - the directory to copy the file into.
 * 
 * @return {DriveApp.File} the new copy
 */


/**
 * Removes the given user from the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method
 * does not block users from access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.File#removeCommenter
 * 
 * @param {String} emailAddress - the email address of the user to remove
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Removes the given user from the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method
 * does not block users from access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.File#removeCommenter
 * 
 * @param {User} user - a representation of the user to remove
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire
 * domain.
 * 
 * @function DriveApp.File#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire
 * domain.
 * 
 * @function DriveApp.File#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This
 * method has no effect if the user is an editor, not a viewer or commenter. This method also does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who
 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.File#removeViewer
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This
 * method has no effect if the user is an editor, not a viewer. This method also does not block
 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have general
 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire domain.
 * 
 * @function DriveApp.File#removeViewer
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {DriveApp.File} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> for chaining.
 */


/**
 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> granted to the given user. This method does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.File#revokePermissions
 * 
 * @param {String} user - the email address of the user whose access should be revoked
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> granted to the given user. This method does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.File#revokePermissions
 * 
 * @param {User} user - a representation of the user whose access should be revoked
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Overwrites the content of the file with a given replacement. Throws an exception if <code>content</code> is larger than 10MB.
 * 
 * <p><aside class="warning">Beware: this change is irreversible.</aside>
 * 
 * @function DriveApp.File#setContent
 * 
 * @param {String} content - the new content for the file
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Sets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#setDescription
 * 
 * @param {String} description - the new description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Sets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#setName
 * 
 * @param {String} name - the new name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method also gives the previous owner
 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#setOwner
 * 
 * @param {String} emailAddress - the email address of the user who should become the new owner
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method also gives the previous owner
 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
 * 
 * @function DriveApp.File#setOwner
 * 
 * @param {User} user - a representation of the user who should become the new owner
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Sets whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> are allowed to share
 * with other users or change the permissions. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is
 * <code>true</code>.
 * 
 * @function DriveApp.File#setShareableByEditors
 * 
 * @param {Boolean} shareable - <code>true</code> if users with edit permissions should be allowed to share with
 *     other users or change the permissions; <code>false</code> if not
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Sets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> and what permissions
 * those users are granted, besides any individual users who have been explicitly given access.
 * 
 * <pre class="prettyprint">
 * // Creates a folder that anyone on the Internet can read from and write to. (Domain
 * // administrators can prohibit this setting for users of a G Suite domain.)
 * var folder = DriveApp.createFolder('Shared Folder');
 * folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
 * </pre>
 * 
 * @function DriveApp.File#setSharing
 * 
 * @param {DriveApp.Access} accessType - which class of users should be able to access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 * @param {DriveApp.Permission} permissionType - the permissions that should be granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is starred in the user's Drive. The default for
 * new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>s is <code>false</code>.
 * 
 * @function DriveApp.File#setStarred
 * 
 * @param {Boolean} starred - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> should be starred in the user's
 *     Drive; <code>false</code> if not
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */


/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive. Only the
 * owner may trash the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. The default for new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>s is <code>false</code>.
 * 
 * @function DriveApp.File#setTrashed
 * 
 * @param {Boolean} trashed - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> should be moved to the trash of
 *     the user's Drive; <code>false</code> if not
 * 
 * @return {DriveApp.File} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
 */



/**
 * @class DriveApp.FileIterator
 */

/**
 * Gets a token that can be used to resume this iteration at a later time. This method is useful
 * if processing an iterator in one execution would exceed the maximum execution time.
 * Continuation tokens are generally valid for one week.
 * 
 * @function DriveApp.FileIterator#getContinuationToken
 * 
 * @return {String} a continuation token that can be used to resume this iteration with the items that
 *     remained in the iterator when the token was generated
 */


/**
 * Determines whether calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()'>next()</a></code> will return an item.
 * 
 * @function DriveApp.FileIterator#hasNext
 * 
 * @return {Boolean} <code>true</code> if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()'>next()</a></code> will return an item; <code>false</code> if not
 */


/**
 * Gets the next item in the collection of files or folders. Throws an exception if no items
 * remain.
 * 
 * @function DriveApp.FileIterator#next
 * 
 * @return {DriveApp.File} the next item in the collection
 */



/**
 * @class DriveApp.Folder
 */

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DriveApp.Folder#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DriveApp.Folder#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If any of the
 * users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function DriveApp.Folder#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Adds the given file to the current folder. This method does not move the file out of its
 * existing parent folder; a file can have more than one parent simultaneously.
 * 
 * @function DriveApp.Folder#addFile
 * 
 * @param {DriveApp.File} child - the child file to add
 * 
 * @return {DriveApp.Folder} this The new parent of the file added as a child.
 */


/**
 * Adds the given folder to the current folder. This method does not move the folder out of
 * its existing parent folder; a folder can have more than one parent simultaneously.
 * 
 * @function DriveApp.Folder#addFolder
 * 
 * @param {DriveApp.Folder} child - the child folder to add
 * 
 * @return {DriveApp.Folder} this The new parent of the folder added as a child.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function DriveApp.Folder#addViewer
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function DriveApp.Folder#addViewer
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If any of the
 * users were already on the list of editors, this method has no effect for them.
 * 
 * @function DriveApp.Folder#addViewers
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Creates a file in the current folder from a given <code>Blob</code> of arbitrary data.
 * 
 * <pre class="prettyprint">
 * // Create an image file in Google Drive using the Maps service.
 * var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
 * DriveApp.getRootFolder().createFile(blob);
 * </pre>
 * 
 * @function DriveApp.Folder#createFile
 * 
 * @param {BlobSource} blob - the data for the new file
 * 
 * @return {DriveApp.File} the new file
 */


/**
 * Creates a text file in the current folder with the given name and contents. Throws an
 * exception if <code>content</code> is larger than 50 MB.
 * 
 * <pre class="prettyprint">
 * // Create a text file with the content "Hello, world!"
 * DriveApp.getRootFolder().createFile('New Text File', 'Hello, world!');
 * </pre>
 * 
 * @function DriveApp.Folder#createFile
 * 
 * @param {String} name - the name of the new file
 * @param {String} content - the content for the new file
 * 
 * @return {DriveApp.File} the new file
 */


/**
 * Creates a file in the current folder with the given name, contents, and MIME type. Throws
 * an exception if <code>content</code> is larger than 10MB.
 * 
 * <pre class="prettyprint"><code>
 * // Create an HTML file with the content &quot;Hello, world!&quot;
 * DriveApp.getRootFolder().createFile(&#39;New HTML File&#39;, &#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;, MimeType.HTML);
 * </code></pre>
 * 
 * @function DriveApp.Folder#createFile
 * 
 * @param {String} name - the name of the new file
 * @param {String} content - the content for the new file
 * @param {String} mimeType - the MIME type of the new file
 * 
 * @return {DriveApp.File} the new file
 */


/**
 * Creates a folder in the current folder with the given name.
 * 
 * @function DriveApp.Folder#createFolder
 * 
 * @param {String} name - the name of the new folder
 * 
 * @return {DriveApp.Folder} the new folder
 */


/**
 * Gets the permission granted to the given user.
 * 
 * @function DriveApp.Folder#getAccess
 * 
 * @param {String} email - the email address of the user whose permissions should be checked
 * 
 * @return {DriveApp.Permission} the permissions granted to the user
 */


/**
 * Gets the permission granted to the given user.
 * 
 * @function DriveApp.Folder#getAccess
 * 
 * @param {User} user - a representation of the user whose permissions should be checked
 * 
 * @return {DriveApp.Permission} the permissions granted to the user
 */


/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was created.
 * 
 * @function DriveApp.Folder#getDateCreated
 * 
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was created
 */


/**
 * Gets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#getDescription
 * 
 * @return {String} the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */


/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user who executes the script
 * does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, this method returns an empty array.
 * 
 * @function DriveApp.Folder#getEditors
 * 
 * @return {DriveApp.User[]} An array of users with edit permission.
 */


/**
 * Gets a collection of all files that are children of the current folder.
 * 
 * @function DriveApp.Folder#getFiles
 * 
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder
 */


/**
 * Gets a collection of all files that are children of the current folder and have the given name.
 * 
 * @function DriveApp.Folder#getFilesByName
 * 
 * @param {String} name - the name of the files to find
 * 
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder and have the given name
 */


/**
 * Gets a collection of all files that are children of the current folder and have the given MIME type.
 * 
 * @function DriveApp.Folder#getFilesByType
 * 
 * @param {String} mimeType - the MIME type of the files to find
 * 
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder and have the given MIME type
 */


/**
 * Gets a collection of all folders that are children of the current folder.
 * 
 * @function DriveApp.Folder#getFolders
 * 
 * @return {DriveApp.FolderIterator} a collection of all folders that are children of the current folder
 */


/**
 * Gets a collection of all folders that are children of the current folder and have the given name.
 * 
 * @function DriveApp.Folder#getFoldersByName
 * 
 * @param {String} name - the name of the folders to find
 * 
 * @return {DriveApp.FolderIterator} a collection of all folders that are children of the current folder and have the given name
 */


/**
 * Gets the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#getId
 * 
 * @return {String} the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */


/**
 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was last updated.
 * 
 * @function DriveApp.Folder#getLastUpdated
 * 
 * @return {Date} the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was last updated
 */


/**
 * Gets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#getName
 * 
 * @return {String} the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */


/**
 * Gets the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#getOwner
 * 
 * @return {DriveApp.User} a <code>User</code> object representing the owner
 */


/**
 * Gets a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#getParents
 * 
 * @return {DriveApp.FolderIterator} a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */


/**
 * Gets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, besides any individual
 * users who have been explicitly given access.
 * 
 * @function DriveApp.Folder#getSharingAccess
 * 
 * @return {DriveApp.Access} which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */


/**
 * Gets the permission granted to those users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>,
 * besides any individual users who have been explicitly given access.
 * 
 * @function DriveApp.Folder#getSharingPermission
 * 
 * @return {DriveApp.Permission} the permissions granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 */


/**
 * Gets the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in Drive. Note that G
 * Suite application files do not count toward Drive storage limits and thus return <code>0</code>
 * bytes.
 * 
 * @function DriveApp.Folder#getSize
 * 
 * @return {IntegerNum} the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in Drive
 */


/**
 * Gets the URL that can be used to open the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in a Google App like
 * Drive or Docs.
 * 
 * @function DriveApp.Folder#getUrl
 * 
 * @return {String} the URL that can be used to view this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in a Google App like
 *     Drive or Docs
 */


/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user who
 * executes the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, this method
 * returns an empty array.
 * 
 * @function DriveApp.Folder#getViewers
 * 
 * @return {DriveApp.User[]} An array of users with view or comment permission.
 */


/**
 * Determines whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> are allowed to
 * share with other users or change the permissions.
 * 
 * @function DriveApp.Folder#isShareableByEditors
 * 
 * @return {Boolean} <code>true</code> if users with edit permissions are allowed to share with other users or
 *     change the permissions; <code>false</code> if not
 */


/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> has been starred in the user's Drive.
 * 
 * @function DriveApp.Folder#isStarred
 * 
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is starred in the user's Drive; <code>false</code> if not
 */


/**
 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive.
 * 
 * @function DriveApp.Folder#isTrashed
 * 
 * @return {Boolean} <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive;
 *     <code>false</code> if not
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire
 * domain.
 * 
 * @function DriveApp.Folder#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire
 * domain.
 * 
 * @function DriveApp.Folder#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
 */


/**
 * Removes the given file from the current folder. This method does not delete the file, but
 * if a file is removed from all of its parents, it cannot be seen in Drive except by searching
 * for it or using the "All items" view.
 * 
 * @function DriveApp.Folder#removeFile
 * 
 * @param {DriveApp.File} child - the child file to remove
 * 
 * @return {DriveApp.Folder} this The previous parent of the child.
 */


/**
 * Removes the given folder from the current folder. This method does not delete the folder
 * or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
 * except by searching for it or using the "All items" view.
 * 
 * @function DriveApp.Folder#removeFolder
 * 
 * @param {DriveApp.Folder} child - the child folder to remove
 * 
 * @return {DriveApp.Folder} this The previous parent of the child.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This
 * method has no effect if the user is an editor, not a viewer or commenter. This method also does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who
 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.Folder#removeViewer
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This
 * method has no effect if the user is an editor, not a viewer. This method also does not block
 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have general
 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire domain.
 * 
 * @function DriveApp.Folder#removeViewer
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {DriveApp.Folder} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> for chaining.
 */


/**
 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> granted to the given user. This method does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users
 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.Folder#revokePermissions
 * 
 * @param {String} user - the email address of the user whose access should be revoked
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> granted to the given user. This method does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users
 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DriveApp.Folder#revokePermissions
 * 
 * @param {User} user - a representation of the user whose access should be revoked
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Gets a collection of all files that are children of the current folder and match the given search
 * criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 * SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain
 * string values, so take care to escape quotation marks correctly (for example <code>&quot;title
 * contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
 * 
 * <pre class="prettyprint">
 * // Log the name of every file that are children of the current folder and modified after February 28,
 * // 2013 whose name contains "untitled".
 * var files = DriveApp.getRootFolder().searchFiles(
 *     'modifiedDate > "2013-02-28" and title contains "untitled"');
 * while (files.hasNext()) {
 *   var file = files.next();
 *   Logger.log(file.getName());
 * }
 * </pre>
 * 
 * @function DriveApp.Folder#searchFiles
 * 
 * @param {String} params - the search criteria, as detailed in the <a
 *     href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 * 
 * @return {DriveApp.FileIterator} a collection of all files that are children of the current folder and match the search
 *     criteria
 */


/**
 * Gets a collection of all folders that are children of the current folder and match the given search
 * criteria. The search criteria are detailed the <a href="/drive/search-parameters">Google Drive
 * SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain
 * string values, so take care to escape quotation marks correctly (for example <code>&quot;title
 * contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
 * 
 * <pre class="prettyprint">
 * // Log the name of every folder that are children of the current folder and you own and is starred.
 * var folders = DriveApp.getRootFolder().searchFolders('starred = true and "me" in owners');
 * while (folders.hasNext()) {
 *   var folder = folders.next();
 *   Logger.log(folder.getName());
 * }
 * </pre>
 * 
 * @function DriveApp.Folder#searchFolders
 * 
 * @param {String} params - the search criteria, as detailed in the <a
 *     href="/drive/v2/web/search-parameters">Google Drive SDK documentation</a>
 * 
 * @return {DriveApp.FolderIterator} a collection of all folders that are children of the current folder and match the search
 *     criteria
 */


/**
 * Sets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#setDescription
 * 
 * @param {String} description - the new description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Sets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#setName
 * 
 * @param {String} name - the new name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method also gives the previous owner
 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#setOwner
 * 
 * @param {String} emailAddress - the email address of the user who should become the new owner
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method also gives the previous owner
 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
 * 
 * @function DriveApp.Folder#setOwner
 * 
 * @param {User} user - a representation of the user who should become the new owner
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Sets whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> are allowed to share
 * with other users or change the permissions. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is
 * <code>true</code>.
 * 
 * @function DriveApp.Folder#setShareableByEditors
 * 
 * @param {Boolean} shareable - <code>true</code> if users with edit permissions should be allowed to share with
 *     other users or change the permissions; <code>false</code> if not
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Sets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> and what permissions
 * those users are granted, besides any individual users who have been explicitly given access.
 * 
 * <pre class="prettyprint">
 * // Creates a folder that anyone on the Internet can read from and write to. (Domain
 * // administrators can prohibit this setting for users of a G Suite domain.)
 * var folder = DriveApp.createFolder('Shared Folder');
 * folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
 * </pre>
 * 
 * @function DriveApp.Folder#setSharing
 * 
 * @param {DriveApp.Access} accessType - which class of users should be able to access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 * @param {DriveApp.Permission} permissionType - the permissions that should be granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is starred in the user's Drive. The default for
 * new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>s is <code>false</code>.
 * 
 * @function DriveApp.Folder#setStarred
 * 
 * @param {Boolean} starred - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> should be starred in the user's
 *     Drive; <code>false</code> if not
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */


/**
 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive. Only the
 * owner may trash the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. The default for new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>s is <code>false</code>.
 * 
 * @function DriveApp.Folder#setTrashed
 * 
 * @param {Boolean} trashed - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> should be moved to the trash of
 *     the user's Drive; <code>false</code> if not
 * 
 * @return {DriveApp.Folder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
 */



/**
 * @class DriveApp.FolderIterator
 */

/**
 * Gets a token that can be used to resume this iteration at a later time. This method is useful
 * if processing an iterator in one execution would exceed the maximum execution time.
 * Continuation tokens are generally valid for one week.
 * 
 * @function DriveApp.FolderIterator#getContinuationToken
 * 
 * @return {String} a continuation token that can be used to resume this iteration with the items that
 *     remained in the iterator when the token was generated
 */


/**
 * Determines whether calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()'>next()</a></code> will return an item.
 * 
 * @function DriveApp.FolderIterator#hasNext
 * 
 * @return {Boolean} <code>true</code> if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()'>next()</a></code> will return an item; <code>false</code> if not
 */


/**
 * Gets the next item in the collection of files or folders. Throws an exception if no items
 * remain.
 * 
 * @function DriveApp.FolderIterator#next
 * 
 * @return {DriveApp.Folder} the next item in the collection
 */



/**
 * @class DriveApp.Permission
 */

/**
 * Users who can access the file or folder are able only to view it, copy it, or comment on it.
 * Passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception if
 * the type of file does not support it.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission.COMMENT
 */
/**
 * Users who can access the file or folder are able to edit it. Unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setShareableByEditors(Boolean)'>File.setShareableByEditors(shareable)</a></code> is set to <code>false</code>, users can also change the sharing
 * settings. Passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an
 * exception if the type of file does not support it.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission.EDIT
 */
/**
 * The user does not have any permissions for the file or folder. This value can be returned, but
 * passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception unless it
 * is set in combination with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/access.html#ANYONE'>Access.ANYONE</a></code>.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission.NONE
 */
/**
 * Users who can organize files and folders within a Team Drive. This value can be returned, but
 * passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission.ORGANIZER
 */
/**
 * The user owns the file or folder. This value can be returned, but passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission.OWNER
 */
/**
 * Users who can access the file or folder are able only to view it or copy it. Passing this value
 * to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception if the type of file
 * does not support it.
 * 
 * @typedef {DriveApp.Permission} DriveApp.Permission.VIEW
 */

/**
 * @class DriveApp.User
 */

/**
 * Gets the domain name associated with the user's account.
 * 
 * <pre class="prettyprint"><code>
 * // Log the domain names associated with all users who have edit access to a file.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * var editors = file.getEditors();
 * for (var i = 0; i &lt; editors.length; i++) {
 *   Logger.log(editors[i].getDomain());
 * }
 * </code></pre>
 * 
 * @function DriveApp.User#getDomain
 * 
 * @return {String} the domain name associated with the user's account
 */


/**
 * Gets the user's email address. The user's email address is only available if the user has
 * chosen to share the address from the Google+ account settings page, or if the user belongs to
 * the same domain as the user running the script and the domain administrator has allowed all
 * users within the domain to see other users' email addresses.
 * 
 * <pre class="prettyprint"><code>
 * // Log the email address of all users who have edit access to a file.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * var editors = file.getEditors();
 * for (var i = 0; i &lt; editors.length; i++) {
 *   Logger.log(editors[i].getEmail());
 * }
 * </code></pre>
 * 
 * @function DriveApp.User#getEmail
 * 
 * @return {String} the user's email's address, or a blank string if the email address is not available
 */


/**
 * Gets the user's name. This method returns <code>null</code> if the user's name is not available.
 * 
 * <pre class="prettyprint"><code>
 * // Log the names of all users who have edit access to a file.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * var editors = file.getEditors();
 * for (var i = 0; i &lt; editors.length; i++) {
 *   Logger.log(editors[i].getName());
 * }
 * </code></pre>
 * 
 * @function DriveApp.User#getName
 * 
 * @return {String} the user's name, or <code>null</code> if the name is not available
 */


/**
 * Gets the URL for the user's photo. This method returns <code>null</code> if the user's photo is not
 * available.
 * 
 * <pre class="prettyprint"><code>
 * // Log the URLs for the photos of all users who have edit access to a file.
 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
 * var editors = file.getEditors();
 * for (var i = 0; i &lt; editors.length; i++) {
 *   Logger.log(editors[i].getPhotoUrl());
 * }
 * </code></pre>
 * 
 * @function DriveApp.User#getPhotoUrl
 * 
 * @return {String} the URL for the user's photo, or <code>null</code> if the photo is not available
 */


/**
 * Gets the user's email address.
 * 
 * <pre class="prettyprint"><code>
 * // Log the email address of the person running the script.
 * Logger.log(Session.getActiveUser().getUserLoginId());
 * </code></pre>
 * 
 * @function DriveApp.User#getUserLoginId
 * @deprecated
 * 
 * @return {String} The user's email's address.
 */



