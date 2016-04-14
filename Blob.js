var Blob = {};


/**
 * Returns a copy of this blob.
 *
 * @return {Blob} the new copy
 */
Blob.copyBlob = function(){};

/**
 * Gets all the blobs that are contained within this (possibly composite) blob.
 *
 * @return {Blob[]} the blobs contained within the blob
 */
Blob.getAllBlobs = function(){};

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
Blob.getAs = function(contentType){};

/**
 * Gets the data stored in this blob.
 *
 * @return {Byte[]} the stored bytes
 */
Blob.getBytes = function(){};

/**
 * Gets the content type of the bytes in this blob.
 *
 * @return {String} the content type of this data, if known, or null
 */
Blob.getContentType = function(){};

/**
 * Gets the data of this blob as a string with the specified encoding.
 *
 * @param {String} charset - the charset to use in encoding the data in this blob as a string
 *
 * @return {String} the data as a string
 */
Blob.getDataAsString = function(charset){};

/**
 * Gets the name of this blob.
 *
 * @return {String} the name of this data, if known, or null
 */
Blob.getName = function(){};

/**
 * Returns whether this blob is a Google Apps file (Sheets, Docs, etc.).
 *
 * @return {Boolean} <code>true</code> if this blob is a Google Apps file; <code>false</code> if not
 */
Blob.isGoogleType = function(){};

/**
 * Sets the data stored in this blob.
 *
 * @param {Byte[]} data - the new data
 *
 * @return {Blob} this blob, for chaining
 */
Blob.setBytes = function(data){};

/**
 * Sets the content type of the bytes in this blob.
 *
 * @param {String} contentType - the new contentType
 *
 * @return {Blob} this blob, for chaining
 */
Blob.setContentType = function(contentType){};

/**
 * Sets the content type of the bytes in this blob based on the file extension.
 The contentType will be <code>null</code> if it cannot be guessed from its extension.
 *
 * @return {Blob} this blob, for chaining
 */
Blob.setContentTypeFromExtension = function(){};

/**
 * Sets the data of this blob from a string with the specified encoding.
 *
 * @param {String} string - the string data
 * @param {String} charset - the charset to use in interpreting the string as bytes
 *
 * @return {Blob} this blob, for chaining
 */
Blob.setDataFromString = function(string, charset){};

/**
 * Sets the name of this blob.
 *
 * @param {String} name - the new name
 *
 * @return {Blob} this blob, for chaining
 */
Blob.setName = function(name){};

