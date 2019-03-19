/**********************************************
 * @namespace DataStudioApp
 ***********************************************/

/**
 * @class DataStudioApp
 */

/**
 * Creates a new Community Connector.
 * 
 * @function DataStudioApp.createCommunityConnector
 * 
 * @return {DataStudioApp.CommunityConnector} A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/community-connector.html'>CommunityConnector</a></code> object.
 */



/**
 * @class DataStudioApp.AggregationType
 */

/**
 * Auto. Use Auth for calculated fields which reference an aggregated field.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.AUTO
 */
/**
 * Average.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.AVG
 */
/**
 * Count.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.COUNT
 */
/**
 * Count Distinct.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.COUNT_DISTINCT
 */
/**
 * Max.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.MAX
 */
/**
 * Min.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.MIN
 */
/**
 * DEPRECATED: Use <code>AUTO</code> instead. No aggregation.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.NO_AGGREGATION
 */
/**
 * Sum.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.AggregationType.SUM
 */

/**
 * @class DataStudioApp.AuthType
 */

/**
 * API Key or Token needed.
 * 
 * @typedef {DataStudioApp.AuthType} DataStudioApp.AuthType.KEY
 */
/**
 * No authorization needed.
 * 
 * @typedef {DataStudioApp.AuthType} DataStudioApp.AuthType.NONE
 */
/**
 * OAuth2 authorization needed.
 * 
 * @typedef {DataStudioApp.AuthType} DataStudioApp.AuthType.OAUTH2
 */
/**
 * Username and password credentials needed.
 * 
 * @typedef {DataStudioApp.AuthType} DataStudioApp.AuthType.USER_PASS
 */
/**
 * Username and token needed.
 * 
 * @typedef {DataStudioApp.AuthType} DataStudioApp.AuthType.USER_TOKEN
 */

/**
 * @class DataStudioApp.Checkbox
 */

/**
 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
 * option to enable this for report editors.
 * 
 * @function DataStudioApp.Checkbox#setAllowOverride
 * 
 * @param {Boolean} allowOverride - Whether or not this config entry can be overridden in reports.
 * 
 * @return {DataStudioApp.Checkbox} This builder, for chaining.
 */


/**
 * Sets the help text for this configuration entry.
 * 
 * @function DataStudioApp.Checkbox#setHelpText
 * 
 * @param {String} helpText - The helpText to set.
 * 
 * @return {DataStudioApp.Checkbox} This builder, for chaining.
 */


/**
 * Sets the unique ID for this configuration entry.
 * 
 * @function DataStudioApp.Checkbox#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.Checkbox} This builder, for chaining.
 */


/**
 * Sets the display name for this configuration entry.
 * 
 * @function DataStudioApp.Checkbox#setName
 * 
 * @param {String} name - The name to set.
 * 
 * @return {DataStudioApp.Checkbox} This builder, for chaining.
 */



/**
 * @class DataStudioApp.CommunityConnector
 */

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> enumeration.
 * 
 * @typedef {DataStudioApp.AggregationType} DataStudioApp.CommunityConnector.AggregationType
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/auth-type.html'>AuthType</a></code> enumeration.
 * 
 * @typedef {DataStudioApp.AuthType} DataStudioApp.CommunityConnector.AuthType
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field-type.html'>FieldType</a></code> enumeration.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.CommunityConnector.FieldType
 */
/**
 * The <code>BigQueryParameterType</code> enumeration.
 * 
 * @typedef {DataStudioApp.BigQueryParameterType} DataStudioApp.CommunityConnector.BigQueryParameterType
 */
/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object. Use this object to add configuration entries.
 * 
 * @function DataStudioApp.CommunityConnector#getConfig
 * 
 * @return {DataStudioApp.Config} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object.
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object. Use this object to add metric and dimension <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>s.
 * 
 * @function DataStudioApp.CommunityConnector#getFields
 * 
 * @return {DataStudioApp.Fields} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html'>GetAuthTypeResponse</a></code> object. Use this object to create a response for the
 * <code>getAuthType()</code> function you implement in your script project.
 * 
 * @function DataStudioApp.CommunityConnector#newAuthTypeResponse
 * 
 * @return {DataStudioApp.GetAuthTypeResponse} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html'>GetAuthTypeResponse</a></code> object.
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/debug-error.html'>DebugError</a></code> object. Use this object to create debug errors.
 * 
 * @function DataStudioApp.CommunityConnector#newDebugError
 * 
 * @return {DataStudioApp.DebugError} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/debug-error.html'>DebugError</a></code> object.
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/user-error.html'>UserError</a></code> object. Use this object to create user errors.
 * 
 * @function DataStudioApp.CommunityConnector#newUserError
 * 
 * @return {DataStudioApp.UserError} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/user-error.html'>UserError</a></code> object.
 */


/**
 * Returns a new <code>BigQueryConfig</code> object. Use this object to create a response for the
 * <code>getData()</code> function you implement in your script project.
 * 
 * @function DataStudioApp.CommunityConnector#newBigQueryConfig
 * 
 * @return {DataStudioApp.BigQueryConfig} A <code>BigQueryConfig</code> object.
 */



/**
 * @class DataStudioApp.Config
 */

/**
 * Validates this object and returns it in the format needed by Data Studio.
 * 
 * @function DataStudioApp.Config#build
 * 
 * @return {Object} The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object.
 */


/**
 * Returns a new checkbox configuration entry.
 * 
 * @function DataStudioApp.Config#newCheckbox
 * 
 * @return {DataStudioApp.Checkbox} A new checkbox configuration entry.
 */


/**
 * Returns a new info configuration entry.
 * 
 * @function DataStudioApp.Config#newInfo
 * 
 * @return {DataStudioApp.Info} A new info configuration entry.
 */


/**
 * Returns a new options builder.
 * 
 * @function DataStudioApp.Config#newOptionBuilder
 * 
 * @return {DataStudioApp.OptionBuilder} A new options builder.
 */


/**
 * Returns a new select multiple configuration entry.
 * 
 * @function DataStudioApp.Config#newSelectMultiple
 * 
 * @return {DataStudioApp.SelectMultiple} A new select multiple configuration entry.
 */


/**
 * Returns a new select single configuration entry.
 * 
 * @function DataStudioApp.Config#newSelectSingle
 * 
 * @return {DataStudioApp.SelectSingle} A new select single configuration entry.
 */


/**
 * Returns a new text area configuration entry.
 * 
 * @function DataStudioApp.Config#newTextArea
 * 
 * @return {DataStudioApp.TextArea} A new text area configuration entry.
 */


/**
 * Returns a new text input configuration entry.
 * 
 * @function DataStudioApp.Config#newTextInput
 * 
 * @return {DataStudioApp.TextInput} A new text input configuration entry.
 */


/**
 * @function DataStudioApp.Config#printJson
 * 
 * @return {String}
 */


/**
 * If <code>true</code>, a date range is provided for getData() requests.
 * 
 * @function DataStudioApp.Config#setDateRangeRequired
 * 
 * @param {Boolean} dateRangeRequired - Whether or not a date range should be provided to <code>getData()</code>
 *     requests.
 * 
 * @return {DataStudioApp.Config} This builder, for chaining.
 */



/**
 * @class DataStudioApp.DebugError
 */

/**
 * @function DataStudioApp.DebugError#printJson
 * 
 * @return {String}
 */


/**
 * Sets the text of the debug error, which is only shown to admins.
 * 
 * @function DataStudioApp.DebugError#setText
 * 
 * @param {String} text - The error text.
 * 
 * @return {DataStudioApp.DebugError} This object, for chaining.
 */


/**
 * Triggers this exception to be thrown.
 * 
 * @function DataStudioApp.DebugError#throwException
 * 
 * @return void
 */



/**
 * @class DataStudioApp.Field
 */

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> determines
 * how Data Studio combines similar data into dimensions.
 * 
 * @function DataStudioApp.Field#getAggregation
 * 
 * @return {DataStudioApp.AggregationType} The aggregationType for this field.
 */


/**
 * Returns the description of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Descriptions are short explanations of a field's
 * purpose.
 * 
 * @function DataStudioApp.Field#getDescription
 * 
 * @return {String} The description for this field.
 */


/**
 * Returns the formula of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Formulas define a data transformation that Data
 * Studio runs at query-time.
 * 
 * @function DataStudioApp.Field#getFormula
 * 
 * @return {String} The formula for this field.
 */


/**
 * Returns the group of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Fields collected into a group are presented together
 * in the Data Studio UI.
 * 
 * @function DataStudioApp.Field#getGroup
 * 
 * @return {String} The group for this field.
 */


/**
 * Returns the ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. IDs are unique per set of fields and are used in formulas
 * to refer to fields.
 * 
 * @function DataStudioApp.Field#getId
 * 
 * @return {String} The ID for this field.
 */


/**
 * Returns <code>true</code> if this field can be reaggregated, <code>false</code> otherwise.
 * 
 * @function DataStudioApp.Field#getIsReaggregatable
 * 
 * @return {Boolean} <code>true</code> if this field can be reaggregated, <code>false</code> otherwise.
 */


/**
 * Returns the name of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Names are shown to the user to distinguish fields.
 * 
 * @function DataStudioApp.Field#getName
 * 
 * @return {String} The name for this field.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field-type.html'>FieldType</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
 * 
 * @function DataStudioApp.Field#getType
 * 
 * @return {DataStudioApp.FieldType} The type for this field.
 */


/**
 * Returns <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is the default metric or dimension.
 * 
 * @function DataStudioApp.Field#isDefault
 * 
 * @return {Boolean} <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is the default metric or dimension; <code>false</code>
 *     otherwise.
 */


/**
 * Returns <code>true</code> if this field is a dimension.
 * 
 * @function DataStudioApp.Field#isDimension
 * 
 * @return {Boolean} <code>true</code> if this field is a dimension; returns <code>false</code> otherwise.
 */


/**
 * Returns <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is hidden. Hidden fields can be used in formulas,
 * but cannot be used in charts.
 * 
 * @function DataStudioApp.Field#isHidden
 * 
 * @return {Boolean} <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is hidden; <code>false</code> otherwise.
 */


/**
 * Returns <code>true</code> if this field is a metric.
 * 
 * @function DataStudioApp.Field#isMetric
 * 
 * @return {Boolean} <code>true</code> if this field is a metric; returns <code>false</code> otherwise.
 */


/**
 * Sets the aggregation type of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> determines how Data
 * Studio combines similar data into dimensions. This throws an error if called on a metric.
 * 
 * @function DataStudioApp.Field#setAggregation
 * 
 * @param {DataStudioApp.AggregationType} aggregation - The aggregation type to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the description of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Descriptions are short explanations of a field's
 * purpose.
 * 
 * @function DataStudioApp.Field#setDescription
 * 
 * @param {String} description - The description to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the formula of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Formulas define a data transformation that Data Studio
 * runs at query-time.
 * 
 * @function DataStudioApp.Field#setFormula
 * 
 * @param {String} formula - The formula to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the group of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Fields collected into a group are presented together in
 * the Data Studio UI.
 * 
 * @function DataStudioApp.Field#setGroup
 * 
 * @param {String} group - The group to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. IDs are unique per set of fields and are used in formulas to
 * refer to fields.
 * 
 * @function DataStudioApp.Field#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the hidden status of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Hidden fields can be used in formulas, but cannot
 * be used in charts.
 * 
 * @function DataStudioApp.Field#setIsHidden
 * 
 * @param {Boolean} isHidden - The hidden status to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the reaggregation-permitted status for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Attempting to set an aggregation
 * type on a field that can't be reaggregated results in an error.
 * 
 * @function DataStudioApp.Field#setIsReaggregatable
 * 
 * @param {Boolean} isReaggregatable - The reaggregation-permitted status to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the name of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Names are shown to the user to distinguish fields.
 * 
 * @function DataStudioApp.Field#setName
 * 
 * @param {String} name - The name to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field-type.html'>FieldType</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
 * 
 * @function DataStudioApp.Field#setType
 * 
 * @param {DataStudioApp.FieldType} type - The type to set.
 * 
 * @return {DataStudioApp.Field} This builder, for chaining.
 */



/**
 * @class DataStudioApp.FieldType
 */

/**
 * A <code>true</code> or <code>false</code> boolean value.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.BOOLEAN
 */
/**
 * A city such as Mountain View.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CITY
 */
/**
 * A city code such as 1014044.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CITY_CODE
 */
/**
 * A continent such as Americas.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CONTINENT
 */
/**
 * A continent code such as 019.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CONTINENT_CODE
 */
/**
 * A country such as United States.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.COUNTRY
 */
/**
 * A country code such as US.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.COUNTRY_CODE
 */
/**
 * Currency from AED.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_AED
 */
/**
 * Currency from ALL.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_ALL
 */
/**
 * Currency from ARS.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_ARS
 */
/**
 * Currency from AUD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_AUD
 */
/**
 * Currency from BDT.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_BDT
 */
/**
 * Currency from BGN.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_BGN
 */
/**
 * Currency from BOB.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_BOB
 */
/**
 * Currency from BRL.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_BRL
 */
/**
 * Currency from CAD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CAD
 */
/**
 * Currency from CDF.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CDF
 */
/**
 * Currency from CHF.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CHF
 */
/**
 * Currency from CLP.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CLP
 */
/**
 * Currency from CNY.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CNY
 */
/**
 * Currency from COP.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_COP
 */
/**
 * Currency from CRC.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CRC
 */
/**
 * Currency from CZK.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_CZK
 */
/**
 * Currency from DKK.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_DKK
 */
/**
 * Currency from DOP.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_DOP
 */
/**
 * Currency from EGP.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_EGP
 */
/**
 * Currency from ETB.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_ETB
 */
/**
 * Currency from EUR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_EUR
 */
/**
 * Currency from GBP.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_GBP
 */
/**
 * Currency from HKD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_HKD
 */
/**
 * Currency from HRK.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_HRK
 */
/**
 * Currency from HUF.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_HUF
 */
/**
 * Currency from IDR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_IDR
 */
/**
 * Currency from ILS.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_ILS
 */
/**
 * Currency from INR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_INR
 */
/**
 * Currency from IRR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_IRR
 */
/**
 * Currency from ISK.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_ISK
 */
/**
 * Currency from JMD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_JMD
 */
/**
 * Currency from JPY.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_JPY
 */
/**
 * Currency from KRW.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_KRW
 */
/**
 * Currency from LKR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_LKR
 */
/**
 * Currency from LTL.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_LTL
 */
/**
 * Currency from MNT.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_MNT
 */
/**
 * Currency from MVR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_MVR
 */
/**
 * Currency from MXN.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_MXN
 */
/**
 * Currency from MYR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_MYR
 */
/**
 * Currency from NOK.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_NOK
 */
/**
 * Currency from NZD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_NZD
 */
/**
 * Currency from PAB.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_PAB
 */
/**
 * Currency from PEN.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_PEN
 */
/**
 * Currency from PHP.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_PHP
 */
/**
 * Currency from PKR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_PKR
 */
/**
 * Currency from PLN.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_PLN
 */
/**
 * Currency from RON.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_RON
 */
/**
 * Currency from RSD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_RSD
 */
/**
 * Currency from RUB.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_RUB
 */
/**
 * Currency from SAR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_SAR
 */
/**
 * Currency from SEK.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_SEK
 */
/**
 * Currency from SGD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_SGD
 */
/**
 * Currency from THB.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_THB
 */
/**
 * Currency from TRY.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_TRY
 */
/**
 * Currency from TWD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_TWD
 */
/**
 * Currency from TZS.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_TZS
 */
/**
 * Currency from UAH.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_UAH
 */
/**
 * Currency from USD.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_USD
 */
/**
 * Currency from UYU.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_UYU
 */
/**
 * Currency from VEF.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_VEF
 */
/**
 * Currency from VND.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_VND
 */
/**
 * Currency from YER.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_YER
 */
/**
 * Currency from ZAR.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.CURRENCY_ZAR
 */
/**
 * Day in the format of DD such as 17.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.DAY
 */
/**
 * A number in the range of [0,6] with 0 representing Sunday.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.DAY_OF_WEEK
 */
/**
 * A duration of time in seconds.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.DURATION
 */
/**
 * Hour in the format of HH such as 13.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.HOUR
 */
/**
 * A latitude longitude pair such as 51.5074, -0.1278.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.LATITUDE_LONGITUDE
 */
/**
 * A metro such as San Francisco-Oakland-San Jose CA.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.METRO
 */
/**
 * A metro code such as 200807.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.METRO_CODE
 */
/**
 * Minute in the format of mm such as 12.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.MINUTE
 */
/**
 * Month in the format of MM such as 03.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.MONTH
 */
/**
 * Month and day in the format of MMDD such as 0317.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.MONTH_DAY
 */
/**
 * A decimal number.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.NUMBER
 */
/**
 * Decimal percentage (can be over 1.0). For example, 137% is represented as 1.37.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.PERCENT
 */
/**
 * Quarter in the format of 1, 2, 3, or 4).
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.QUARTER
 */
/**
 * A region such as California.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.REGION
 */
/**
 * A region code such as CA.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.REGION_CODE
 */
/**
 * A sub-continent such as North America.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.SUB_CONTINENT
 */
/**
 * A sub-continent code such as 003.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.SUB_CONTINENT_CODE
 */
/**
 * Free-form text.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.TEXT
 */
/**
 * A URL as text such as https://google.com.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.URL
 */
/**
 * Week in the format of ww such as 07.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.WEEK
 */
/**
 * Year in the format of YYYY such as 2017.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.YEAR
 */
/**
 * Year and month in the format of YYYYMM such as 201703.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.YEAR_MONTH
 */
/**
 * Year, month, and day in the format of YYYYMMDD such as 20170317.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.YEAR_MONTH_DAY
 */
/**
 * Year, month, day, and hour in the format of YYYYMMDDHH such as 2017031703.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.YEAR_MONTH_DAY_HOUR
 */
/**
 * Year and quarter in the format of YYYYQ such as 20171.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.YEAR_QUARTER
 */
/**
 * Year and week in the format of YYYYww such as 201707.
 * 
 * @typedef {DataStudioApp.FieldType} DataStudioApp.FieldType.YEAR_WEEK
 */

/**
 * @class DataStudioApp.Fields
 */

/**
 * Returns a view of this object as an array.
 * 
 * <pre class="prettyprint"><code>
 * var fields = //reference to fields object.
 * fields.newDimension().setId(&#39;field1_id&#39;);
 * fields.newDimension().setId(&#39;field2_id&#39;);
 * fields.newDimension().setId(&#39;field3_id&#39;);
 * 
 * // Logging the ID of each field:
 * fields
 *   .asArray()
 *   .map(function(field) {
 *      Logger.log(field.getId());
 *   });
 * </code></pre>
 * 
 * @function DataStudioApp.Fields#asArray
 * 
 * @return {DataStudioApp.Field[]} An array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> objects.
 */


/**
 * Validates this object and returns it in the format needed by Data Studio.
 * 
 * @function DataStudioApp.Fields#build
 * 
 * @return {Object[]} The validated field data, represented as a list of objects.
 */


/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object filtered to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>s with an ID in <code>ids</code>.
 * 
 * <pre class="prettyprint"><code>
 * var fields = //reference to fields object.
 * fields.newDimension().setId(&#39;field1_id&#39;);
 * fields.newDimension().setId(&#39;field2_id&#39;);
 * fields.newDimension().setId(&#39;field3_id&#39;);
 * 
 * // subsetFields is a Fields object that only contains field1 and field2.
 * var subsetFields = fields.forIds([&#39;field1_id&#39;, &#39;field3_id&#39;]);
 * </code></pre>
 * 
 * @function DataStudioApp.Fields#forIds
 * 
 * @param {String[]} ids - The IDs of fields that should be kept.
 * 
 * @return {DataStudioApp.Fields} A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
 */


/**
 * Returns the default dimension to be used for the set of fields. The default dimension is
 * selected automatically when a new visualization is made.
 * 
 * @function DataStudioApp.Fields#getDefaultDimension
 * 
 * @return {DataStudioApp.Field} The dimension that is set as the default dimension, or <code>null</code> if no default
 *     dimension was set.
 */


/**
 * Returns the default metric to be used for the set of fields. The default metric is selected
 * automatically when a new visualization is made.
 * 
 * @function DataStudioApp.Fields#getDefaultMetric
 * 
 * @return {DataStudioApp.Field} The metric that is set as the default metric, or <code>null</code> if no default metric was
 *     set.
 */


/**
 * Returns a field with a given ID, or <code>null</code> if no field with that ID is in this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
 * 
 * <pre class="prettyprint"><code>
 * var fields = //reference to fields object.
 * var field1 = fields.newDimension().setId(&#39;field1_id&#39;);
 * 
 * // byId is the same as field1.
 * var byId = fields.getFieldById(&#39;field1_id&#39;);
 * 
 * // byId2 is null.
 * var byId2 = fields.getFieldById(&#39;not present id&#39;);
 * </code></pre>
 * 
 * @function DataStudioApp.Fields#getFieldById
 * 
 * @param {String} fieldId - The ID of the field to get.
 * 
 * @return {DataStudioApp.Field} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> with the given ID, or <code>null</code> if no such field is contained
 *     within this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
 */


/**
 * Returns a new dimension <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
 * 
 * @function DataStudioApp.Fields#newDimension
 * 
 * @return {DataStudioApp.Field} A new dimension <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
 */


/**
 * Returns a new metric <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
 * 
 * @function DataStudioApp.Fields#newMetric
 * 
 * @return {DataStudioApp.Field} A new metric <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
 */


/**
 * Sets the default dimension to be used for the set of fields. The default dimension is selected
 * automatically when a new visualization is made.
 * 
 * @function DataStudioApp.Fields#setDefaultDimension
 * 
 * @param {String} fieldId - The ID of the field to use as the default dimension. This ID must be present in
 *     the set of fields.
 * 
 * @return void
 */


/**
 * Sets the default metric to be used for the set of fields. The default metric is selected
 * automatically when a new visualization is made.
 * 
 * @function DataStudioApp.Fields#setDefaultMetric
 * 
 * @param {String} fieldId - The ID of the field to use as the default metric. This ID must be present in the
 *     set of fields.
 * 
 * @return void
 */



/**
 * @class DataStudioApp.GetAuthTypeResponse
 */

/**
 * Validates this object and returns it in the format needed by Data Studio.
 * 
 * @function DataStudioApp.GetAuthTypeResponse#build
 * 
 * @return {Object} The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html'>GetAuthTypeResponse</a></code> object.
 */


/**
 * @function DataStudioApp.GetAuthTypeResponse#printJson
 * 
 * @return {String}
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/auth-type.html'>AuthType</a></code> of the builder.
 * 
 * @function DataStudioApp.GetAuthTypeResponse#setAuthType
 * 
 * @param {DataStudioApp.AuthType} authType - The authentication type to set.
 * 
 * @return {DataStudioApp.GetAuthTypeResponse} This builder, for chaining.
 */


/**
 * Sets the help URL of the builder.
 * 
 * <p>The help URL is an optional URL the user can visit to get help on setting up auth. This is
 * only supported for <code>USER_PASS</code>, <code>KEY</code>, and <code>USER_TOKEN</code>
 * authTypes.
 * 
 * @function DataStudioApp.GetAuthTypeResponse#setHelpUrl
 * 
 * @param {String} helpUrl - The help URL to set.
 * 
 * @return {DataStudioApp.GetAuthTypeResponse} This builder, for chaining.
 */



/**
 * @class DataStudioApp.Info
 */

/**
 * Sets the unique ID for this configuration entry.
 * 
 * @function DataStudioApp.Info#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.Info} This builder, for chaining.
 */


/**
 * Sets the text for this configuration entry.
 * 
 * @function DataStudioApp.Info#setText
 * 
 * @param {String} text - The text to set.
 * 
 * @return {DataStudioApp.Info} This builder, for chaining.
 */



/**
 * @class DataStudioApp.OptionBuilder
 */

/**
 * Sets the label of this option builder. Labels are the text that the user sees when selecting
 * one or more options from the dropdown.
 * 
 * @function DataStudioApp.OptionBuilder#setLabel
 * 
 * @param {String} label - The label to set.
 * 
 * @return {DataStudioApp.OptionBuilder} This builder, for chaining.
 */


/**
 * Sets the value of this option builder. Values are what is passed to the code when a user
 * selects one or more options from the dropdown.
 * 
 * @function DataStudioApp.OptionBuilder#setValue
 * 
 * @param {String} value - The value to set.
 * 
 * @return {DataStudioApp.OptionBuilder} This builder, for chaining.
 */



/**
 * @class DataStudioApp.SelectMultiple
 */

/**
 * Adds a new select option.
 * 
 * @function DataStudioApp.SelectMultiple#addOption
 * 
 * @param {DataStudioApp.OptionBuilder} optionBuilder - A builder for an option.
 * 
 * @return {DataStudioApp.SelectMultiple} This builder, for chaining.
 */


/**
 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
 * option to enable this for report editors.
 * 
 * @function DataStudioApp.SelectMultiple#setAllowOverride
 * 
 * @param {Boolean} allowOverride - Whether or not this config entry can be overridden in reports.
 * 
 * @return {DataStudioApp.SelectMultiple} This builder, for chaining.
 */


/**
 * Sets the help text for this configuration entry.
 * 
 * @function DataStudioApp.SelectMultiple#setHelpText
 * 
 * @param {String} helpText - The help text to set.
 * 
 * @return {DataStudioApp.SelectMultiple} This builder, for chaining.
 */


/**
 * Sets the unique ID for this configuration entry.
 * 
 * @function DataStudioApp.SelectMultiple#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.SelectMultiple} This builder, for chaining.
 */


/**
 * Sets the display name for this configuration entry.
 * 
 * @function DataStudioApp.SelectMultiple#setName
 * 
 * @param {String} name - The name to set.
 * 
 * @return {DataStudioApp.SelectMultiple} This builder, for chaining.
 */



/**
 * @class DataStudioApp.SelectSingle
 */

/**
 * Adds a new select option.
 * 
 * @function DataStudioApp.SelectSingle#addOption
 * 
 * @param {DataStudioApp.OptionBuilder} optionBuilder - A builder for an option.
 * 
 * @return {DataStudioApp.SelectSingle} This builder, for chaining.
 */


/**
 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
 * option to enable this for report editors.
 * 
 * @function DataStudioApp.SelectSingle#setAllowOverride
 * 
 * @param {Boolean} allowOverride - Whether or not this config entry can be overridden in reports.
 * 
 * @return {DataStudioApp.SelectSingle} This builder, for chaining.
 */


/**
 * Sets the help text for this configuration entry.
 * 
 * @function DataStudioApp.SelectSingle#setHelpText
 * 
 * @param {String} helpText - The helpText to set.
 * 
 * @return {DataStudioApp.SelectSingle} This builder, for chaining.
 */


/**
 * Sets the unique ID for this configuration entry.
 * 
 * @function DataStudioApp.SelectSingle#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.SelectSingle} This builder, for chaining.
 */


/**
 * Sets the display name for this configuration entry.
 * 
 * @function DataStudioApp.SelectSingle#setName
 * 
 * @param {String} name - The name to set.
 * 
 * @return {DataStudioApp.SelectSingle} This builder, for chaining.
 */



/**
 * @class DataStudioApp.TextArea
 */

/**
 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
 * option to enable this for report editors.
 * 
 * @function DataStudioApp.TextArea#setAllowOverride
 * 
 * @param {Boolean} allowOverride - Whether or not this config entry can be overridden in reports.
 * 
 * @return {DataStudioApp.TextArea} This builder, for chaining.
 */


/**
 * Sets the help text for this configuration entry.
 * 
 * @function DataStudioApp.TextArea#setHelpText
 * 
 * @param {String} helpText - The helpText to set.
 * 
 * @return {DataStudioApp.TextArea} This builder, for chaining.
 */


/**
 * Sets the unique ID for this configuration entry.
 * 
 * @function DataStudioApp.TextArea#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.TextArea} This builder, for chaining.
 */


/**
 * Sets the display name for this configuration entry.
 * 
 * @function DataStudioApp.TextArea#setName
 * 
 * @param {String} name - The name to set.
 * 
 * @return {DataStudioApp.TextArea} This builder, for chaining.
 */


/**
 * Sets the placeholder text for this configuration entry.
 * 
 * @function DataStudioApp.TextArea#setPlaceholder
 * 
 * @param {String} placeholder - The placeholder text to set.
 * 
 * @return {DataStudioApp.TextArea} This builder, for chaining.
 */



/**
 * @class DataStudioApp.TextInput
 */

/**
 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
 * option to enable this for report editors
 * 
 * @function DataStudioApp.TextInput#setAllowOverride
 * 
 * @param {Boolean} allowOverride - Whether or not this config entry can be overridden in reports.
 * 
 * @return {DataStudioApp.TextInput} This builder, for chaining.
 */


/**
 * Sets the help text for this configuration entry.
 * 
 * @function DataStudioApp.TextInput#setHelpText
 * 
 * @param {String} helpText - The helpText to set.
 * 
 * @return {DataStudioApp.TextInput} This builder, for chaining.
 */


/**
 * Sets the unique ID for this configuration entry.
 * 
 * @function DataStudioApp.TextInput#setId
 * 
 * @param {String} id - The ID to set.
 * 
 * @return {DataStudioApp.TextInput} This builder, for chaining.
 */


/**
 * Sets the display name for this configuration entry.
 * 
 * @function DataStudioApp.TextInput#setName
 * 
 * @param {String} name - The name to set.
 * 
 * @return {DataStudioApp.TextInput} This builder, for chaining.
 */


/**
 * Sets the placeholder text for this configuration entry.
 * 
 * @function DataStudioApp.TextInput#setPlaceholder
 * 
 * @param {String} placeholder - The placeholder text to set.
 * 
 * @return {DataStudioApp.TextInput} This builder, for chaining.
 */



/**
 * @class DataStudioApp.UserError
 */

/**
 * @function DataStudioApp.UserError#printJson
 * 
 * @return {String}
 */


/**
 * Sets the text of the debug error, which is only shown to admins.
 * 
 * @function DataStudioApp.UserError#setDebugText
 * 
 * @param {String} text - The error text.
 * 
 * @return {DataStudioApp.UserError} This object, for chaining.
 */


/**
 * Sets the text of the user error.
 * 
 * @function DataStudioApp.UserError#setText
 * 
 * @param {String} text - The error text.
 * 
 * @return {DataStudioApp.UserError} This object, for chaining.
 */


/**
 * Triggers this exception to be thrown.
 * 
 * @function DataStudioApp.UserError#throwException
 * 
 * @return void
 */



/**
 * @class DataStudioApp.BigQueryConfig
 */

/**
 * Adds a query parameter to this <code>BigQueryConfig</code>.
 * 
 * @function DataStudioApp.BigQueryConfig#addQueryParameter
 * 
 * @param {String} name - The parameter name.
 * @param {DataStudioApp.BigQueryParameterType} type - The parameter type.
 * @param {String} value - The parameter value.
 * 
 * @return {DataStudioApp.BigQueryConfig} This object, for chaining.
 */


/**
 * Validates this object and returns it in the format needed by Data Studio.
 * 
 * @function DataStudioApp.BigQueryConfig#build
 * 
 * @return {Object} The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object.
 */


/**
 * Sets the access token of this <code>BigQueryConfig</code>.
 * 
 * @function DataStudioApp.BigQueryConfig#setAccessToken
 * 
 * @param {String} accessToken - The access token to set.
 * 
 * @return {DataStudioApp.BigQueryConfig} This object, for chaining.
 */


/**
 * Sets the billing project ID of this <code>BigQueryConfig</code>.
 * 
 * @function DataStudioApp.BigQueryConfig#setBillingProjectId
 * 
 * @param {String} billingProjectId - The billing project ID to set.
 * 
 * @return {DataStudioApp.BigQueryConfig} This object, for chaining.
 */


/**
 * Sets the SQL query of this <code>BigQueryConfig</code>.
 * 
 * @function DataStudioApp.BigQueryConfig#setQuery
 * 
 * @param {String} query - The query to set.
 * 
 * @return {DataStudioApp.BigQueryConfig} This object, for chaining.
 */


/**
 * Determines if the query is interpreted as standard or legacy SQL.
 * 
 * @function DataStudioApp.BigQueryConfig#setUseStandardSql
 * 
 * @param {Boolean} useStandardSql - If <code>true</code>, the query is interpreted as standard SQL. If <code>false</code>, the query is interpreted as legacy SQL.
 * 
 * @return {DataStudioApp.BigQueryConfig} This object, for chaining.
 */



/**
 * @class DataStudioApp.BigQueryParameterType
 */

/**
 * Boolean.
 * 
 * @typedef {DataStudioApp.BigQueryParameterType} DataStudioApp.BigQueryParameterType.BOOL
 */
/**
 * 64-bit floating point number.
 * 
 * @typedef {DataStudioApp.BigQueryParameterType} DataStudioApp.BigQueryParameterType.FLOAT64
 */
/**
 * 64-bit integer.
 * 
 * @typedef {DataStudioApp.BigQueryParameterType} DataStudioApp.BigQueryParameterType.INT64
 */
/**
 * String.
 * 
 * @typedef {DataStudioApp.BigQueryParameterType} DataStudioApp.BigQueryParameterType.STRING
 */

