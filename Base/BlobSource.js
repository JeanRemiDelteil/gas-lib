/**********************************************
 * @namespace BlobSource
 ***********************************************/

/**
 * @class BlobSource
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" becomes
 "ChristmasList.12.25.pdf".
 *
 * @function BlobSource#getAs
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
     valid.
 *
 * @return {Blob} the data as a blob
 */

/**
 * Return the data inside this object as a blob.
 *
 * @function BlobSource#getBlob
 *
 * @return {Blob} the data as a blob
 */


