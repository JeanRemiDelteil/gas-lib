/**********************************************
 * @namespace Blob
 ***********************************************/

/**
 * @class Blob
 */

/**
 * Returns a copy of this blob.
 *
 * @function Blob#copyBlob
 *
 * @return {Blob} the new copy
 */

/**
 * Gets all the blobs that are contained within this (possibly composite) blob.
 *
 * @function Blob#getAllBlobs
 * @deprecated
 *
 * @return {Blob[]} the blobs contained within the blob
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" becomes
 "ChristmasList.12.25.pdf".
 *
 * @function Blob#getAs
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
     valid.
 *
 * @return {Blob} the data as a blob
 */

/**
 * Gets the data stored in this blob.
 *
 * @function Blob#getBytes
 *
 * @return {Byte[]} the stored bytes
 */

/**
 * Gets the content type of the bytes in this blob.
 *
 * @function Blob#getContentType
 *
 * @return {String} the content type of this data, if known, or null
 */

/**
 * Gets the data of this blob as a String with UTF-8 encoding.
 *
 * @function Blob#getDataAsString
 *
 * @return {String} the data as a string
 */

/**
 * Gets the data of this blob as a string with the specified encoding.
 *
 * @function Blob#getDataAsString
 *
 * @param {String} charset - the charset to use in encoding the data in this blob as a string
 *
 * @return {String} the data as a string
 */

/**
 * Gets the name of this blob.
 *
 * @function Blob#getName
 *
 * @return {String} the name of this data, if known, or null
 */

/**
 * Returns whether this blob is a G Suite file (Sheets, Docs, etc.).
 *
 * @function Blob#isGoogleType
 *
 * @return {Boolean} <code>true</code> if this blob is a G Suite file; <code>false</code> if not
 */

/**
 * Sets the data stored in this blob.
 *
 * @function Blob#setBytes
 *
 * @param {Byte[]} data - the new data
 *
 * @return {Blob} this blob, for chaining
 */

/**
 * Sets the content type of the bytes in this blob.
 *
 * @function Blob#setContentType
 *
 * @param {String} contentType - the new contentType
 *
 * @return {Blob} this blob, for chaining
 */

/**
 * Sets the content type of the bytes in this blob based on the file extension. The contentType
 will be <code>null</code> if it cannot be guessed from its extension.
 *
 * @function Blob#setContentTypeFromExtension
 *
 * @return {Blob} this blob, for chaining
 */

/**
 * Sets the data of this blob from a string with UTF-8 encoding.
 *
 * @function Blob#setDataFromString
 *
 * @param {String} string - the string data
 *
 * @return {Blob} this blob, for chaining
 */

/**
 * Sets the data of this blob from a string with the specified encoding.
 *
 * @function Blob#setDataFromString
 *
 * @param {String} string - the string data
 * @param {String} charset - the charset to use in interpreting the string as bytes
 *
 * @return {Blob} this blob, for chaining
 */

/**
 * Sets the name of this blob.
 *
 * @function Blob#setName
 *
 * @param {String} name - the new name
 *
 * @return {Blob} this blob, for chaining
 */


