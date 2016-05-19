
var Drive = {};


Drive.File = function(){};

Drive.File.prototype.id = String();
Drive.File.prototype.copyable = Boolean();
Drive.File.prototype.editable = Boolean();


/**
 *
 * @constructor
 *
 * @retun {Drive.FilesCollection}
 */
Drive.Files = function () {};

/**
 * @param {Drive.File} resource
 * @param {string} field
 * @param {Object} [optionalArgs]
 */
Drive.Files.patch = function (resource, field, optionalArgs) {};


Drive.FilesCollection = function () {};


/**
 * @param {string} id
 *
 * @return {Drive.File}
 */
Drive.FilesCollection.prototype.get = function (id) {};