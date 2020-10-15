/**********************************************
 * @namespace ConferenceDataService
 ***********************************************/

/**
 * @class ConferenceDataService
 */

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error-type.html'>ConferenceErrorType</a></code> enumeration.
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-feature.html'>EntryPointFeature</a></code> enumeration.
 * 
 * @typedef {ConferenceDataService.EntryPointFeature} ConferenceDataService.EntryPointFeature
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html'>EntryPointType</a></code> enumeration.
 * 
 * @typedef {ConferenceDataService.EntryPointType} ConferenceDataService.EntryPointType
 */
/**
 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data-builder.html'>ConferenceDataBuilder</a></code>.
 * 
 * @function ConferenceDataService.newConferenceDataBuilder
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data-builder.html'>ConferenceDataBuilder</a></code>
 */


/**
 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code>.
 * 
 * @function ConferenceDataService.newConferenceError
 * 
 * @return {ConferenceDataService.ConferenceError} a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code>
 */


/**
 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>.
 * 
 * @function ConferenceDataService.newConferenceParameter
 * 
 * @return {ConferenceDataService.ConferenceParameter} a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>
 */


/**
 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point.html'>EntryPoint</a></code>.
 * 
 * @function ConferenceDataService.newEntryPoint
 * 
 * @return {ConferenceDataService.EntryPoint} a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point.html'>EntryPoint</a></code>
 */



/**
 * @class ConferenceDataService.ConferenceData
 */

/**
 * @function ConferenceDataService.ConferenceData#printJson
 * 
 * @return {String}
 */



/**
 * @class ConferenceDataService.ConferenceDataBuilder
 */

/**
 * Adds a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code> to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>. The maximum number of
 * parameters per <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code> is 300.
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#addConferenceParameter
 * 
 * @param {ConferenceDataService.ConferenceParameter} conferenceParameter - The parameter to add.
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} This builder, for chaining.
 */


/**
 * Adds an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point.html'>EntryPoint</a></code> to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>. The maximum number of entry points
 * per <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code> is 300.
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#addEntryPoint
 * 
 * @param {ConferenceDataService.EntryPoint} entryPoint - The entry point to add.
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} This builder, for chaining.
 */


/**
 * Builds and validates the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>.
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#build
 * 
 * @return {ConferenceDataService.ConferenceData} the validated conference data
 */


/**
 * Sets the conference ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>. The maximum length for this field is 512
 * characters.
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#setConferenceId
 * 
 * @param {String} conferenceId - The ID to set.
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} This builder, for chaining.
 */


/**
 * Sets the conference solution ID defined in the addon's manifest. The value must be specified
 * and populates conference's name and iconUrl values.
 * 
 * <p>Note that the field is required for GSuite add-ons whereas it's ignored for Conferencing
 * add-ons
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#setConferenceSolutionId
 * 
 * @param {String} conferenceSolutionId - The ID matching the manifest.
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} This builder, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>, indicating that the conference
 * was not successfully created.
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#setError
 * 
 * @param {ConferenceDataService.ConferenceError} conferenceError - The error to set.
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} This builder, for chaining.
 */


/**
 * Sets the additional notes of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>, such as instructions from the
 * administrator or legal notices. Can contain HTML. The maximum length for this field is 2048
 * characters.
 * 
 * @function ConferenceDataService.ConferenceDataBuilder#setNotes
 * 
 * @param {String} notes - The additional notes to set.
 * 
 * @return {ConferenceDataService.ConferenceDataBuilder} This builder, for chaining.
 */



/**
 * @class ConferenceDataService.ConferenceError
 */

/**
 * If the error type is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error-type.html#AUTHENTICATION'>AUTHENTICATION</a></code>, the add-on must
 * provide a URL calling back into the add-on to allow users to log in. The maximum length for
 * this field is 1800 characters.
 * 
 * @function ConferenceDataService.ConferenceError#setAuthenticationUrl
 * 
 * @param {String} authenticationUrl - The authentication URL to set.
 * 
 * @return {ConferenceDataService.ConferenceError} this object, for chaining
 */


/**
 * Sets the error type of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code>.
 * 
 * @function ConferenceDataService.ConferenceError#setConferenceErrorType
 * 
 * @param {ConferenceDataService.ConferenceErrorType} conferenceErrorType - The type of error to set.
 * 
 * @return {ConferenceDataService.ConferenceError} this object, for chaining
 */



/**
 * @class ConferenceDataService.ConferenceErrorType
 */

/**
 * An authentication error during conference data generation.
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType.AUTHENTICATION
 */
/**
 * The user is not allowed to use the selected conference solution (but might be allowed to use
 * other solutions offered by the add-on).
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType.CONFERENCE_SOLUTION_FORBIDDEN
 */
/**
 * A permanent error during conference data generation.
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType.PERMANENT
 */
/**
 * The user isn't allowed to perform an action in the third-party conferencing system.
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType.PERMISSION_DENIED
 */
/**
 * A temporary error during conference data generation.
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType.TEMPORARY
 */
/**
 * An unknown error during conference data generation.
 * 
 * @typedef {ConferenceDataService.ConferenceErrorType} ConferenceDataService.ConferenceErrorType.UNKNOWN
 */

/**
 * @class ConferenceDataService.ConferenceParameter
 */

/**
 * Sets the key of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>. The maximum length for this field is 50
 * characters. Required.
 * 
 * @function ConferenceDataService.ConferenceParameter#setKey
 * 
 * @param {String} key - The key to set.
 * 
 * @return {ConferenceDataService.ConferenceParameter} this object, for chaining
 */


/**
 * Sets the value of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>. The maximum length for this field is 1024
 * characters. Required.
 * 
 * @function ConferenceDataService.ConferenceParameter#setValue
 * 
 * @param {String} value - The value to set.
 * 
 * @return {ConferenceDataService.ConferenceParameter} this object, for chaining
 */



/**
 * @class ConferenceDataService.EntryPoint
 */

/**
 * Adds the feature of the entry point, such as being toll or toll-free.
 * 
 * @function ConferenceDataService.EntryPoint#addFeature
 * 
 * @param {ConferenceDataService.EntryPointFeature} feature - The feature to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * An access code for accessing the conference. Maximum length 128 characters. Optional.
 * 
 * @function ConferenceDataService.EntryPoint#setAccessCode
 * 
 * @param {String} accessCode - The access code to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * Sets the type of this entry point. Required.
 * 
 * @function ConferenceDataService.EntryPoint#setEntryPointType
 * 
 * @param {ConferenceDataService.EntryPointType} entryPointType - The entry point type to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * A meeting code for accessing the conference. Maximum length 128 characters. Optional.
 * 
 * @function ConferenceDataService.EntryPoint#setMeetingCode
 * 
 * @param {String} meetingCode - The meeting code to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * A passcode for accessing the conference. Maximum length 128 characters. Optional.
 * 
 * @function ConferenceDataService.EntryPoint#setPasscode
 * 
 * @param {String} passcode - The passcode to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * A password code for accessing the conference. Maximum length 128 characters. Optional.
 * 
 * @function ConferenceDataService.EntryPoint#setPassword
 * 
 * @param {String} password - The password to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * A PIN code for accessing the conference. Maximum length 128 characters. Optional.
 * 
 * @function ConferenceDataService.EntryPoint#setPin
 * 
 * @param {String} pin - The PIN code to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only
 * to phone entry point types. Optional.
 * 
 * @function ConferenceDataService.EntryPoint#setRegionCode
 * 
 * @param {String} regionCode - The regionCode to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */


/**
 * Sets the URI for joining the conference through this entry point. For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#PHONE'>PHONE</a></code> entry points, the prefix <code>tel:</code> is required. For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#SIP'>SIP</a></code> entry points, the prefix <code>sip:</code> is required. For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#VIDEO'>VIDEO</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#MORE'>MORE</a></code> entry points, the prefixes
 * <code>http:</code> or <code>https:</code> are required. Maximum length 1300 characters. Required.
 * 
 * @function ConferenceDataService.EntryPoint#setUri
 * 
 * @param {String} uri - The URI to set.
 * 
 * @return {ConferenceDataService.EntryPoint} this object, for chaining
 */



/**
 * @class ConferenceDataService.EntryPointFeature
 */

/**
 * Applies to PHONE entry point only. A call to a toll number is charged to the calling party. A
 * number can't be toll and toll-free at the same time.
 * 
 * @typedef {ConferenceDataService.EntryPointFeature} ConferenceDataService.EntryPointFeature.TOLL
 */
/**
 * Applies to PHONE entry point only. For the calling party, a call to a toll-free number is free
 * of charge. A number can't be toll and toll-free at the same time.
 * 
 * @typedef {ConferenceDataService.EntryPointFeature} ConferenceDataService.EntryPointFeature.TOLL_FREE
 */
/**
 * Do not use. Here only as a default value for compatibility reasons.
 * 
 * @typedef {ConferenceDataService.EntryPointFeature} ConferenceDataService.EntryPointFeature.UNKNOWN_FEATURE
 */

/**
 * @class ConferenceDataService.EntryPointType
 */

/**
 * A link to more information about entry points into a conference. A conference can have zero or
 * one <code>MORE</code> entry points. A conference with only a <code>MORE</code> entry point is not valid.
 * 
 * @typedef {ConferenceDataService.EntryPointType} ConferenceDataService.EntryPointType.MORE
 */
/**
 * A phone entry point for a conference. A conference can have zero or more <code>PHONE</code> entry
 * points.
 * 
 * @typedef {ConferenceDataService.EntryPointType} ConferenceDataService.EntryPointType.PHONE
 */
/**
 * A SIP entry point for a conference. A conference can have zero or one <code>SIP</code> entry points.
 * 
 * @typedef {ConferenceDataService.EntryPointType} ConferenceDataService.EntryPointType.SIP
 */
/**
 * A video entry point for a conference. A conference can have zero or one <code>VIDEO</code> entry
 * points.
 * 
 * @typedef {ConferenceDataService.EntryPointType} ConferenceDataService.EntryPointType.VIDEO
 */

