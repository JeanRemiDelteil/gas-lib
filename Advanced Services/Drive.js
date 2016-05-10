
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


Drive.FilesCollection = function () {};


/**
 * @param {string} id
 *
 * @return {Drive.File}
 */
Drive.FilesCollection.prototype.get = function (id) {};