
var Drive = {};


Drive.File = function(){};

Drive.File.prototype.id = String();
Drive.File.prototype.copyable = Boolean();
Drive.File.prototype.editable = Boolean();


Drive.Files = {};

/**
 * @param {Drive.File} resource
 * @param {string} field
 * @param {Object} [optionalArgs]
 *
 * @return {Drive.File}
 */
Drive.Files.patch = function (resource, field, optionalArgs) {};

/**
 * @param {Drive.File} resource
 * @param {Blob} mediaData
 * @param {Object} [optionalArgs]
 *
 * @return {Drive.File}
 */
Drive.Files.insert = function (resource, mediaData, optionalArgs) {};

/**
 * @param {string} id
 *
 * @return {Drive.File}
 */
Drive.Files.get = function (id) {};

//Drive.FilesCollection = function () {};



/**
 * @type {{
 *  id: string,
 *  kind: string
 * }}
 */
Drive.PermissionId = {};

/**
 * @type {{
 *  additionalRoles: Array<String>,
 *  authKey: string,
 *  domain: string,
 *  emailAddress: string,
 *  etag: string,
 *  id: string,
 *  kind: string,
 *  name: string,
 *  photoLink: string,
 *  role: string,
 *  selfLink: string,
 *  type: string,
 *  value: string,
 *  withLink: boolean
 * }}
 */
Drive.Permission = {};

Drive.Permissions = function(){};

/**
 * @param {(Drive.Permission | Drive.PermissionId)} resource
 * @param {string} fileId
 * @param {Object} [optionalArgs]
 *
 * @return {Drive.Permission}
 */
Drive.Permissions.insert = function (resource, fileId, optionalArgs) {};

/**
 * @param {string} email
 *
 * @return {Drive.PermissionId}
 */
Drive.Permissions.getIdForEmail = function (email){};
