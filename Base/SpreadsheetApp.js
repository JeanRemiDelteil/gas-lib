var SpreadsheetApp = {};


/**
 * An enumeration of the valid styles for setting borders on a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code>.

 */
SpreadsheetApp.BorderStyle = function(){};

/**
 * Dashed line borders.
 *
 * @type {{}}
 */
SpreadsheetApp.BorderStyle.prototype.DASHED = {};

/**
 * Dotted line borders.
 *
 * @type {{}}
 */
SpreadsheetApp.BorderStyle.prototype.DOTTED = {};

/**
 * Solid line borders.
 *
 * @type {{}}
 */
SpreadsheetApp.BorderStyle.prototype.SOLID = {};

/**
 * An enumeration representing the data-validation criteria that can be set on a range.

 */
SpreadsheetApp.DataValidationCriteria = function(){};

/**
 * Requires that the input makes the given formula evaluate to <code>true</code>.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.CUSTOM_FORMULA = {};

/**
 * Requires a date that is after the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_AFTER = {};

/**
 * Requires a date that is before the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_BEFORE = {};

/**
 * Requires a date that is between the given values.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_BETWEEN = {};

/**
 * Requires a date that is equal to the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_EQUAL_TO = {};

/**
 * Requires a date.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_IS_VALID_DATE = {};

/**
 * Requires a date that is not between the given values.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_NOT_BETWEEN = {};

/**
 * Require a date that is on or after the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_ON_OR_AFTER = {};

/**
 * Requires a date that is on or before the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.DATE_ON_OR_BEFORE = {};

/**
 * Requires a number that is between the given values.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_BETWEEN = {};

/**
 * Requires a number that is equal to the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_EQUAL_TO = {};

/**
 * Require a number that is greater than the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_GREATER_THAN = {};

/**
 * Requires a number that is greater than or equal to the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_GREATER_THAN_OR_EQUAL_TO = {};

/**
 * Requires a number that is less than the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_LESS_THAN = {};

/**
 * Requires a number that is less than or equal to the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_LESS_THAN_OR_EQUAL_TO = {};

/**
 * Requires a number that is not between the given values.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_NOT_BETWEEN = {};

/**
 * Requires a number that is not equal to the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.NUMBER_NOT_EQUAL_TO = {};

/**
 * Requires that the input contains the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.TEXT_CONTAINS = {};

/**
 * Requires that the input does not contain the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.TEXT_DOES_NOT_CONTAIN = {};

/**
 * Requires that the input is equal to the given value.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.TEXT_EQUAL_TO = {};

/**
 * Requires that the input is in the form of an email address.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.TEXT_IS_VALID_EMAIL = {};

/**
 * Requires that the input is in the form of a URL.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.TEXT_IS_VALID_URL = {};

/**
 * Requires that the input is equal to one of the given values.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.VALUE_IN_LIST = {};

/**
 * Requires that the input is equal to a value in the given range.
 *
 * @type {{}}
 */
SpreadsheetApp.DataValidationCriteria.prototype.VALUE_IN_RANGE = {};

/**
 * An enumeration representing the parts of a spreadsheet that can be protected from edits.

 */
SpreadsheetApp.ProtectionType = function(){};

/**
 * Protection for a range.
 *
 * @type {{}}
 */
SpreadsheetApp.ProtectionType.prototype.RANGE = {};

/**
 * Protection for a sheet.
 *
 * @type {{}}
 */
SpreadsheetApp.ProtectionType.prototype.SHEET = {};

/**
 * Creates a new spreadsheet with the given name.

 <pre class="prettyprint">
 <code>
 // The code below creates a new spreadsheet &quot;Finances&quot; and logs the URL for it
 var ssNew = SpreadsheetApp.create(&quot;Finances&quot;);
 Logger.log(ssNew.getUrl());
 </code></pre>
 *
 * @param {String} name - the name for the spreadsheet
 *
 * @return {SpreadsheetApp.Spreadsheet} a new spreadsheet
 */
SpreadsheetApp.create = function(name){};

/**
 * Applies all pending Spreadsheet changes.

 Spreadsheet operations are sometimes bundled together to improve performance, such as when
 doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all
 pending changes are made right away, for instance to show users data as a script is executing.

 <pre class="prettyprint">
 <code>
 // The code below changes the background color of cells A1 and B1 twenty times. You should be
 // able to see the updates live in the spreadsheet. If flush() is not called, the updates may
 // be applied live or may all be applied at once when the script completes.
 function colors() {
   var sheet = SpreadsheetApp.getActiveSheet();
   for (var i = 0; i &lt; 20; i++) {
     if ((i % 2) == 0) {
       sheet.getRange(&#39;A1&#39;).setBackground(&#39;green&#39;);
       sheet.getRange(&#39;B1&#39;).setBackground(&#39;red&#39;);
     } else {
       sheet.getRange(&#39;A1&#39;).setBackground(&#39;red&#39;);
       sheet.getRange(&#39;B1&#39;).setBackground(&#39;green&#39;);
     }
     SpreadsheetApp.flush();
   }
 }
 </code></pre>
 *
 * @return void
 */
SpreadsheetApp.flush = function(){};

/**
 * Returns the currently active spreadsheet, or null if there is none.

 Functions that are run in the context of a spreadsheet can get a reference to the corresponding
 Spreadsheet object by calling this function.

 <pre class="prettyprint">
 <code>
 // The code below logs the URL for the active spreadsheet.
 Logger.log(SpreadsheetApp.getActive().getUrl());
 </code></pre>
 *
 * @return {SpreadsheetApp.Spreadsheet} the active Spreadsheet object
 */
SpreadsheetApp.getActive = function(){};

/**
 * Returns the range of cells that is currently considered active.

 This generally means the range that a user has selected in the active sheet, but in a custom
 function it refers to the cell being actively recalculated.

 <pre class="prettyprint">
 <code>
 // The code below will log the background color for the active range
 var color = SpreadsheetApp.getActiveRange().getBackgroundColor();
 Logger.log(color);
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the active Range object
 */
SpreadsheetApp.getActiveRange = function(){};

/**
 * Gets the active sheet in a spreadsheet.

 The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet UI.

 <pre class="prettyprint">
 <code>
 // The code below will log the name of the active sheet.
 Logger.log(SpreadsheetApp.getActiveSheet().getName());
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the active Sheet object
 */
SpreadsheetApp.getActiveSheet = function(){};

/**
 * Returns the currently active spreadsheet, or null if there is none.

 Functions that are run in the context of a spreadsheet can get a reference to the corresponding
 Spreadsheet object by calling this function.

 <pre class="prettyprint">
 <code>
 // The code below logs the URL for the active spreadsheet.
 Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
 </code></pre>
 *
 * @return {SpreadsheetApp.Spreadsheet} the active Spreadsheet object
 */
SpreadsheetApp.getActiveSpreadsheet = function(){};

/**
 * Returns an instance of the spreadsheet's user-interface environment that allows the script to
 add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 current instance of an open spreadsheet, and only if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the spreadsheet. For more information,
 see the guides to <a href="/apps-script/guides/menus">menus</a> and
 <a href="/apps-script/guides/dialogs">dialogs and sidebars</a>.

 <p>This method only works in the
 <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>.
 The older version of Sheets continues to use an alternate syntax shown in the guides above.</p>

 <pre class="prettyprint">
 // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
 function onOpen(e) {
   SpreadsheetApp.getUi()
       .createMenu('My Menu')
       .addItem('My menu item', 'myFunction')
       .addSeparator()
       .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')
           .addItem('One sub-menu item', 'mySecondFunction')
           .addItem('Another sub-menu item', 'myThirdFunction'))
       .addToUi();
 }
 </pre>
 *
 * @return {Ui} an instance of this spreadsheet's user-interface environment
 */
SpreadsheetApp.getUi = function(){};

/**
 * Creates a builder for a data-validation rule.

 <pre class="prettyprint">
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation()
     .requireNumberBetween(1, 100)
     .setAllowInvalid(false)
     .setHelpText('Number must be between 1 and 100.')
     .build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the new builder
 */
SpreadsheetApp.newDataValidation = function(){};

/**
 * Opens the spreadsheet that corresponds to the given File object.

 <pre class="prettyprint">
 <code>
 // Get any starred spreadsheets from Google Drive, then open the spreadsheets and log the name
 // of the first sheet within each spreadsheet.
 var files = DriveApp.searchFiles(
     &#39;starred = true and mimeType = &quot;&#39; + MimeType.GOOGLE_SHEETS + &#39;&quot;&#39;);
 while (files.hasNext()) {
   var spreadsheet = SpreadsheetApp.open(files.next());
   var sheet = spreadsheet.getSheets()[0];
   Logger.log(sheet.getName());
 }
 </code></pre>
 *
 * @param {DriveApp.File} file - the File to open
 *
 * @return {SpreadsheetApp.Spreadsheet} the spreadsheet
 */
SpreadsheetApp.open = function(file){};

/**
 * Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For
 example, the spreadsheet ID in the URL
 https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".

 <pre class="prettyprint">
 <code>
 // The code below opens a spreadsheet using its ID and logs the name for it.
 // Note that the spreadsheet is NOT physically opened on the client side.
 // It is opened on the server only (for modification by the script).
 var ss = SpreadsheetApp.openById(&quot;abc1234567&quot;);
 Logger.log(ss.getName());
 </code></pre>
 *
 * @param {String} id - the unique identifier for the spreadsheet
 *
 * @return {SpreadsheetApp.Spreadsheet} the Spreadsheet object with the given id
 */
SpreadsheetApp.openById = function(id){};

/**
 * Opens the spreadsheet with the given url.

 <pre class="prettyprint">
 <code>
 // The code below opens a spreadsheet using its id and logs the name for it.
 // Note that the spreadsheet is NOT physically opened on the client side.
 // It is opened on the server only (for modification by the script).
 var ss = SpreadsheetApp.openByUrl(
     &#39;https://docs.google.com/spreadsheets/d/abc1234567/edit&#39;);
 Logger.log(ss.getName());
 </code></pre>
 *
 * @param {String} url - the url for the spreadsheet
 *
 * @return {SpreadsheetApp.Spreadsheet} the Spreadsheet object with the given id
 */
SpreadsheetApp.openByUrl = function(url){};

/**
 * Sets the active range for the application.

 The spreadsheet UI will display the sheet that contains the chosen range and will select the
 cells defined in the chosen range.

 <pre class="prettyprint">
 <code>
 // The code below will set range C1:D4 in the first sheet as the active range
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var range = ss.getSheets()[0].getRange(&quot;C1:D4&quot;);
 SpreadsheetApp.setActiveRange(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the Range to be made the active Range
 *
 * @return {SpreadsheetApp.Range} the new active Range
 */
SpreadsheetApp.setActiveRange = function(range){};

/**
 * Sets the active sheet in a spreadsheet.

 The spreadsheet UI will display the chosen sheet unless the sheet belongs to a different
 spreadsheet.

 <pre class="prettyprint">
 <code>
 // The code below will make the 2nd sheet active in the active spreadsheet
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 SpreadsheetApp.setActiveSheet(ss.getSheets()[1]);
 </code></pre>
 *
 * @param {SpreadsheetApp.Sheet} sheet - the new active Sheet
 *
 * @return {SpreadsheetApp.Sheet} the Sheet that has been made the new active Sheet
 */
SpreadsheetApp.setActiveSheet = function(sheet){};

/**
 * Sets the active spreadsheet.

 <pre class="prettyprint">
 <code>
 // The code below will make the spreadsheet with key &quot;1234567890&quot; the active spreadsheet
 var ss = SpreadsheetApp.openById(&quot;1234567890&quot;);
 SpreadsheetApp.setActiveSpreadsheet(ss);
 </code></pre>
 *
 * @param {SpreadsheetApp.Spreadsheet} newActiveSpreadsheet - the Spreadsheet to be made the active spreadsheet
 *
 * @return void
 */
SpreadsheetApp.setActiveSpreadsheet = function(newActiveSpreadsheet){};

/** @constructor */
SpreadsheetApp.ContainerInfo = function(){};

/**
 * The chart's left side will be anchored in this column.
 *
 * @return {number} 1-indexed column (i.e. column C will be 3)
 */
SpreadsheetApp.ContainerInfo.prototype.getAnchorColumn = function(){};

/**
 * The chart's top side will be anchored in this row.
 *
 * @return {number} 1-indexed row (i.e. row 5 will return 5)
 */
SpreadsheetApp.ContainerInfo.prototype.getAnchorRow = function(){};

/**
 * The chart's upper left hand corner will be offset from the anchor column by this many pixels.
 *
 * @return {number} the horizontal offset in pixels for the upper left hand corner of the chart
 */
SpreadsheetApp.ContainerInfo.prototype.getOffsetX = function(){};

/**
 * Chart's upper left hand corner will be offset from the anchor row by this many pixels.
 *
 * @return {number} the vertical offset in pixels for the upper left hand corner of the chart
 */
SpreadsheetApp.ContainerInfo.prototype.getOffsetY = function(){};

/** @constructor */
SpreadsheetApp.DataValidation = function(){};

/**
 * Creates a builder for a data-validation rule based on this rule's settings. 

 <pre class="prettyprint"><code>
 // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
 var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 var sheet = SpreadsheetApp.getActiveSheet();
 var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 var rules = range.getDataValidations();

 for (var i = 0; i &lt; rules.length; i++) {
   for (var j = 0; j &lt; rules[i].length; j++) {
     var rule = rules[i][j];

     if (rule != null) {
       var criteria = rule.getCriteriaType();
       var args = rule.getCriteriaValues();
 
       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
         // Create a builder from the existing rule, then change the dates.
         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       }
     }
   }
 }
 range.setDataValidations(rules);
 </code></pre>
 *
 * @return {SpreadsheetApp.DataValidationBuilder} a builder based on this rule's settings
 */
SpreadsheetApp.DataValidation.prototype.copy = function(){};

/**
 * Returns <code>true</code> if the rule shows a warning when input fails data validation, or
 <code>false</code> if it rejects the input entirely. The default for new data-validation rules is
 <code>true</code>.
 *
 * @return {Boolean} <code>true</code> if the rule allows input that fails data validation; <code>false</code> if not
 */
SpreadsheetApp.DataValidation.prototype.getAllowInvalid = function(){};

/**
 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> enum. To get the
 arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 modify a data-validation rule, see
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>DataValidationBuilder.withCriteria(criteria, args)</a></code>.

 <pre class="prettyprint">
 // Log information about the data-validation rule for cell A1.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = cell.getDataValidation();
 if (rule != null) {
   var criteria = rule.getCriteriaType();
   var args = rule.getCriteriaValues();
   Logger.log('The data-validation rule is %s %s', criteria, args);
 } else {
   Logger.log('The cell does not have a data-validation rule.')
 }
 </pre>
 *
 * @return {SpreadsheetApp.DataValidationCriteria} the type of data-validation criteria
 */
SpreadsheetApp.DataValidation.prototype.getCriteriaType = function(){};

/**
 * Gets an array of arguments for the rule's criteria. To get the criteria type, use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a data-validation rule, see
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>DataValidationBuilder.withCriteria(criteria, args)</a></code>.

 <pre class="prettyprint">
 // Log information about the data-validation rule for cell A1.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = cell.getDataValidation();
 if (rule != null) {
   var criteria = rule.getCriteriaType();
   var args = rule.getCriteriaValues();
   Logger.log('The data-validation rule is %s %s', criteria, args);
 } else {
   Logger.log('The cell does not have a data-validation rule.')
 }
 </pre>
 *
 * @return {Object[]} an array of arguments appropriate to the rule's criteria type; the number of arguments
     and their type match the corresponding <code>require...()</code> method of the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html'>DataValidation</a></code> class
 */
SpreadsheetApp.DataValidation.prototype.getCriteriaValues = function(){};

/**
 * Gets the rule's help text, or <code>null</code> if no help text is set.
 *
 * @return {String} the rule's help text, or <code>null</code> if no help text is set
 */
SpreadsheetApp.DataValidation.prototype.getHelpText = function(){};

/** @constructor */
SpreadsheetApp.DataValidationBuilder = function(){};

/**
 * Constructs a data-validation rule from the settings applied to the builder.
 *
 * @return {SpreadsheetApp.DataValidation} a representation of the data-validation rule
 */
SpreadsheetApp.DataValidationBuilder.prototype.build = function(){};

/**
 * Creates a builder for a data-validation rule based on this rule's settings. 

 <pre class="prettyprint"><code>
 // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
 var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 var sheet = SpreadsheetApp.getActiveSheet();
 var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 var rules = range.getDataValidations();

 for (var i = 0; i &lt; rules.length; i++) {
   for (var j = 0; j &lt; rules[i].length; j++) {
     var rule = rules[i][j];

     if (rule != null) {
       var criteria = rule.getCriteriaType();
       var args = rule.getCriteriaValues();
 
       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
         // Create a builder from the existing rule, then change the dates.
         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       }
     }
   }
 }
 range.setDataValidations(rules);
 </code></pre>
 *
 * @return {SpreadsheetApp.DataValidationBuilder} a builder based on this rule's settings
 */
SpreadsheetApp.DataValidationBuilder.prototype.copy = function(){};

/**
 * Returns <code>true</code> if the rule shows a warning when input fails data validation, or
 <code>false</code> if it rejects the input entirely. The default for new data-validation rules is
 <code>true</code>.
 *
 * @return {Boolean} <code>true</code> if the rule allows input that fails data validation; <code>false</code> if not
 */
SpreadsheetApp.DataValidationBuilder.prototype.getAllowInvalid = function(){};

/**
 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> enum. To get the
 arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 modify a data-validation rule, see
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>withCriteria(criteria, args)</a></code>.

 <pre class="prettyprint">
 // Log information about the data-validation rule for cell A1.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = cell.getDataValidation();
 if (rule != null) {
   var criteria = rule.getCriteriaType();
   var args = rule.getCriteriaValues();
   Logger.log('The data-validation rule is %s %s', criteria, args);
 } else {
   Logger.log('The cell does not have a data-validation rule.')
 }
 </pre>
 *
 * @return {SpreadsheetApp.DataValidationCriteria} the type of data-validation criteria
 */
SpreadsheetApp.DataValidationBuilder.prototype.getCriteriaType = function(){};

/**
 * Gets an array of arguments for the rule's criteria. To get the criteria type, use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a data-validation rule, see
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>withCriteria(criteria, args)</a></code>.

 <pre class="prettyprint">
 // Log information about the data-validation rule for cell A1.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = cell.getDataValidation();
 if (rule != null) {
   var criteria = rule.getCriteriaType();
   var args = rule.getCriteriaValues();
   Logger.log('The data-validation rule is %s %s', criteria, args);
 } else {
   Logger.log('The cell does not have a data-validation rule.')
 }
 </pre>
 *
 * @return {Object[]} an array of arguments appropriate to the rule's criteria type; the number of arguments
     and their type match the corresponding <code>require...()</code> method of the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html'>DataValidationBuilder</a></code> class
 */
SpreadsheetApp.DataValidationBuilder.prototype.getCriteriaValues = function(){};

/**
 * Gets the rule's help text, or <code>null</code> if no help text is set.
 *
 * @return {String} the rule's help text, or <code>null</code> if no help text is set
 */
SpreadsheetApp.DataValidationBuilder.prototype.getHelpText = function(){};

/**
 * Sets the data-validation rule to require a date.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireDate().build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDate = function(){};

/**
 * Sets the data-validation rule to require a date after the given value. The time fields of the
 <code>Date</code> object are ignored; only the day, month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date after January 1, 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireDateAfter(new Date('1/1/2013')).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} date - the latest unacceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateAfter = function(date){};

/**
 * Sets the data-validation rule to require a date before the given value. The time fields of the
 <code>Date</code> object are ignored; only the day, month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date before January 1, 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireDateBefore(new Date('1/1/2013')).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} date - the earliest unacceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateBefore = function(date){};

/**
 * Sets the data-validation rule to require a date between the given values, inclusive of the
 values themselves. The time fields of the <code>Date</code> objects are ignored; only the day,
 month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date in 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation()
     .requireDateBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} start - the earliest acceptable date
 * @param {Date} end - the latest acceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateBetween = function(start, end){};

/**
 * Sets the data-validation rule to require a date equal to the given value. The time fields of
 the <code>Date</code> object are ignored; only the day, month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date equal to January 1, 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireDateEqualTo(new Date('1/1/2013'))
     .build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} date - the sole acceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateEqualTo = function(date){};

/**
 * Sets the data-validation rule to require a date not between the given values, inclusive of the
 values themselves. The time fields of the <code>Date</code> objects are ignored; only the day,
 month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date not in 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation()
     .requireDateNotBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} start - the earliest unacceptable date
 * @param {Date} end - the latest unacceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateNotBetween = function(start, end){};

/**
 * Sets the data-validation rule to require a date on or after the given value. The time fields of
 the <code>Date</code> object are ignored; only the day, month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date on or after January 1, 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation()
     .requireDateOnOrAfter(new Date('1/1/2013')).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} date - the earliest acceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateOnOrAfter = function(date){};

/**
 * Sets the data-validation rule to require a date on or before the given value. The time fields
 of the <code>Date</code> object are ignored; only the day, month, and year fields are used.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a date on or before January 1, 2013.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation()
     .requireDateOnOrBefore(new Date('1/1/2013')).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Date} date - the latest acceptable date
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireDateOnOrBefore = function(date){};

/**
 * Sets the data-validation rule to require that the given formula evaluates to <code>true</code>. This
 method is only available in the
 <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to equal B1 with a custom formula.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireFormulaSatisfied('=EQ(A1,B1)').build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {String} formula - a custom formula that evaluates to <code>true</code> if the input is valid
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireFormulaSatisfied = function(formula){};

/**
 * Sets the data-validation rule to require a number between the given values, inclusive of the
 values themselves.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number between 1 and 10.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 10).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} start - the lowest acceptable value
 * @param {Number} end - the highest acceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberBetween = function(start, end){};

/**
 * Sets the data-validation rule to require a number equal to the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number equal to 3.1415926536.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberEqualTo(3.1415926536).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} number - the sole acceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberEqualTo = function(number){};

/**
 * Sets the data-validation rule to require a number greater than the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number greater than 0.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} number - the highest unacceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberGreaterThan = function(number){};

/**
 * Sets the data-validation rule to require a number greater than or equal to the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number greater than or equal to 0.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} number - the lowest acceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberGreaterThanOrEqualTo = function(number){};

/**
 * Sets the data-validation rule to require a number less than the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number less than 0.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberLessThan(0).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} number - the lowest unacceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberLessThan = function(number){};

/**
 * Sets the data-validation rule to require a number less than or equal to the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number less than or equal to 0.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberLessThanOrEqualTo(0).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} number - the highest acceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberLessThanOrEqualTo = function(number){};

/**
 * Sets the data-validation rule to require a number not between the given values, inclusive of
 the values themselves.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number not between 1 and 10.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberNotBetween(1, 10).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} start - the lowest unacceptable value
 * @param {Number} end - the highest unacceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberNotBetween = function(start, end){};

/**
 * Sets the data-validation rule to require a number not equal to the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a number not equal to 0.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireNumberNotEqualTo(0).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {Number} number - the sole unacceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireNumberNotEqualTo = function(number){};

/**
 * Sets the data-validation rule to require that the input contains the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require any value that includes "Google".
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireTextContains('Google').build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {String} text - the value that the input must contain
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireTextContains = function(text){};

/**
 * Sets the data-validation rule to require that the input does not contain the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require any value that does not include "@".
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireTextDoesNotContain('@').build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {String} text - the value that the input must not contain
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireTextDoesNotContain = function(text){};

/**
 * Sets the data-validation rule to require that the input is equal to the given value.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require "Yes".
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireTextEqualTo('Yes').build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {String} text - the sole acceptable value
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireTextEqualTo = function(text){};

/**
 * Sets the data-validation rule to require that the input is in the form of an email address.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require text in the form of an email address.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireTextIsEmail().build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireTextIsEmail = function(){};

/**
 * Sets the data-validation rule to require that the input is in the form of a URL.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require text in the form of a URL.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireTextIsUrl().build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireTextIsUrl = function(){};

/**
 * Sets the data-validation rule to require that the input is equal to one of the given values.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require "Yes" or "No", with a dropdown menu.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No']).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {String[]} values - an array of acceptable values
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireValueInList = function(values){};

/**
 * Sets the data-validation rule to require that the input is equal to a value in the given range.

 <pre class="prettyprint">
 // Set the data validation for cell A1 to require a value from B1:B10, with a dropdown menu.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var range = SpreadsheetApp.getActive().getRange('B1:B10');
 var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {SpreadsheetApp.Range} range - a range that contains the acceptable values
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.requireValueInRange = function(range){};

/**
 * Sets whether to show a warning when input fails data validation or whether to reject the input
 entirely. The default for new data-validation rules is <code>true</code>.
 *
 * @param {Boolean} allowInvalidData - <code>true</code> if the rule should allow input that fails data validation;
     <code>false</code> if not
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.setAllowInvalid = function(allowInvalidData){};

/**
 * Sets the help text shown when the user hovers over the cell on which data-validation is set.
 *
 * @param {String} helpText - the help text to set
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.setHelpText = function(helpText){};

/**
 * Sets the data-validation rule to require criteria defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code>
 enum. This is an advanced method used primarily to create a new data-validation rule based on
 the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()'>criteria</a></code> and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()'>arguments</a></code> of an existing rule; in most other
 cases, the <code>require...()</code> methods are easier to use.

 <pre class="prettyprint"><code>
 // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
 var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 var sheet = SpreadsheetApp.getActiveSheet();
 var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 var rules = range.getDataValidations();

 for (var i = 0; i &lt; rules.length; i++) {
   for (var j = 0; j &lt; rules[i].length; j++) {
     var rule = rules[i][j];

     if (rule != null) {
       var criteria = rule.getCriteriaType();
       var args = rule.getCriteriaValues();
 
       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
         // Create a builder from the existing rule, then change the dates.
         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       }
     }
   }
 }
 range.setDataValidations(rules);
 </code></pre>
 *
 * @param {SpreadsheetApp.DataValidationCriteria} criteria - the type of data-validation criteria
 * @param {Object[]} args - an array of arguments appropriate to the criteria type; the number of arguments and
     their type match the corresponding <code>require...()</code> method above
 *
 * @return {SpreadsheetApp.DataValidationBuilder} the builder, for chaining
 */
SpreadsheetApp.DataValidationBuilder.prototype.withCriteria = function(criteria, args){};

/** @constructor */
SpreadsheetApp.EmbeddedAreaChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.removeRange = function(range){};

/**
 * Reverses the drawing of series in the domain axis.  For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left.  For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top
 to bottom.  For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint">
 <code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>.  The nth
     element in the array represents the color of the nth line in the chart.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the position of the legend with respect to the chart.  By default, there will be no
 legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the style for points in the line.  By default, points will have no particular styles,
 and only the line will be visible.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets large point style.
 var builder = Charts.newLineChart();
 builder.setPointStyle(Charts.PointStyle.LARGE);
 </code></pre>
 *
 * @param {Charts.PointStyle} style - the style to use for points in the line
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setPointStyle = function(style){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets the range for the chart.
 <p>
 If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setRange = function(start, end){};

/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated).  By default,
 there is no stacking.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setStacked = function(){};

/**
 * Sets the title of the chart.  The title will be displayed centered above the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis.  The title will be centered and will appear below
 the axis value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis.  The title will be centered and will appear to the
 left of the value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive).  The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedAreaChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
SpreadsheetApp.EmbeddedBarChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.removeRange = function(range){};

/**
 * Reverses the drawing of series in the domain axis.  For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left.  For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top
 to bottom.  For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint">
 <code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.reverseCategories = function(){};

/**
 * Reverses the direction in which the bars grow along the horizontal axis.  By default, values
 grow from left to right.  Calling this method will cause them to grow from right to left.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.reverseDirection = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>.  The nth
     element in the array represents the color of the nth line in the chart.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the position of the legend with respect to the chart.  By default, there will be no
 legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets the range for the chart.
 <p>
 If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setRange = function(start, end){};

/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated).  By default,
 there is no stacking.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setStacked = function(){};

/**
 * Sets the title of the chart.  The title will be displayed centered above the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis.  The title will be centered and will appear below
 the axis value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis.  The title will be centered and will appear to the
 left of the value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive).  The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedBarChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
SpreadsheetApp.EmbeddedChart = function(){};

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
SpreadsheetApp.EmbeddedChart.prototype.getAs = function(contentType){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
SpreadsheetApp.EmbeddedChart.prototype.getBlob = function(){};

/**
 * Returns information about where the chart is positioned within a sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 var containerInfo = chart.getContainerInfo();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedChart.prototype.getContainerInfo = function(){};

/**
 * Returns the id that has been assigned to this object.
 <p>
 This can be used in conjunction with app.getElementById() to retrieve a reference to this
 object.
 *
 * @return {String} the id that has been assigned to this object
 */
SpreadsheetApp.EmbeddedChart.prototype.getId = function(){};

/**
 * Returns the options for this chart, such as height, colors, axes, etc.
 <p>
 The returned options are immutable.
 *
 * @return {Charts.ChartOptions} the options for this chart, such as height, colors, axes, etc.
 */
SpreadsheetApp.EmbeddedChart.prototype.getOptions = function(){};

/**
 * Returns the Ranges that this chart uses as a data source.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 var ranges = chart.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as this chart's data source
 */
SpreadsheetApp.EmbeddedChart.prototype.getRanges = function(){};

/**
 * Gets the type of this object.
 *
 * @return {String} the object type
 */
SpreadsheetApp.EmbeddedChart.prototype.getType = function(){};

/**
 * Returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html'>EmbeddedChartBuilder</a></code> that can be used to modify this chart. Remember to
 invoke sheet.updateChart(chart) to save your changes.

 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActiveSheet();
 var chart = sheet.getCharts()[0];
 chart = chart.modify()
     .setOption(&#39;width&#39;, 800)
     .setOption(&#39;height&#39;, 640)
     .setPosition(5, 5, 0, 0)
     .build();
 sheet.updateChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} a builder for creating embedded charts
 */
SpreadsheetApp.EmbeddedChart.prototype.modify = function(){};

/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> to be used with UiApp.
 *
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> from
     app.getElementById(id).
 *
 * @return {Charts.Chart} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> itself, useful for chaining.
 */
SpreadsheetApp.EmbeddedChart.prototype.setId = function(id){};

/** @constructor */
SpreadsheetApp.EmbeddedChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.removeRange = function(range){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.setChartType = function(type){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/** @constructor */
SpreadsheetApp.EmbeddedColumnChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.removeRange = function(range){};

/**
 * Reverses the drawing of series in the domain axis.  For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left.  For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top
 to bottom.  For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint">
 <code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>.  The nth
     element in the array represents the color of the nth line in the chart.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the position of the legend with respect to the chart.  By default, there will be no
 legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets the range for the chart.
 <p>
 If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setRange = function(start, end){};

/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated).  By default,
 there is no stacking.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setStacked = function(){};

/**
 * Sets the title of the chart.  The title will be displayed centered above the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis.  The title will be centered and will appear below
 the axis value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis.  The title will be centered and will appear to the
 left of the value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive).  The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedColumnChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
SpreadsheetApp.EmbeddedLineChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.removeRange = function(range){};

/**
 * Reverses the drawing of series in the domain axis.  For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left.  For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top
 to bottom.  For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint">
 <code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>.  The nth
     element in the array represents the color of the nth line in the chart.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the style to use for curves in the chart.  See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/curve-style.html'>CurveStyle</a></code> for allowed curve
 styles.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and curves the lines in the chart.
 var builder = Charts.newLineChart();
 builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
 </code></pre>
 *
 * @param {Charts.CurveStyle} style - the style for curves in the chart
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setCurveStyle = function(style){};

/**
 * Sets the position of the legend with respect to the chart.  By default, there will be no
 legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the style for points in the line.  By default, points will have no particular styles,
 and only the line will be visible.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets large point style.
 var builder = Charts.newLineChart();
 builder.setPointStyle(Charts.PointStyle.LARGE);
 </code></pre>
 *
 * @param {Charts.PointStyle} style - the style to use for points in the line
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setPointStyle = function(style){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets the range for the chart.
 <p>
 If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setRange = function(start, end){};

/**
 * Sets the title of the chart.  The title will be displayed centered above the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis.  The title will be centered and will appear below
 the axis value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis.  The title will be centered and will appear to the
 left of the value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive).  The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedLineChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
SpreadsheetApp.EmbeddedPieChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.removeRange = function(range){};

/**
 * Reverses the drawing of series in the domain axis.  For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left.  For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top
 to bottom.  For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint">
 <code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the chart to be three-dimensional.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.set3D = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>.  The nth
     element in the array represents the color of the nth line in the chart.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the position of the legend with respect to the chart.  By default, there will be no
 legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets the title of the chart.  The title will be displayed centered above the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedPieChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/** @constructor */
SpreadsheetApp.EmbeddedScatterChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.build = function(){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.removeRange = function(range){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>.  The nth
     element in the array represents the color of the nth line in the chart.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the position of the legend with respect to the chart.  By default, there will be no
 legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the style for points in the line.  By default, points will have no particular styles,
 and only the line will be visible.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets large point style.
 var builder = Charts.newLineChart();
 builder.setPointStyle(Charts.PointStyle.LARGE);
 </code></pre>
 *
 * @param {Charts.PointStyle} style - the style to use for points in the line
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setPointStyle = function(style){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets the title of the chart.  The title will be displayed centered above the chart.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setXAxisLogScale = function(){};

/**
 * Sets the range for the horizontal axis of the chart.
 <p>
 If any data points fall outside the range, the range will be expanded to include those data
 points.

 <pre class="prettyprint">
 <code>
 // Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
 var builder = Charts.newTableChart();
 builder.setXAxisRange(0, 100);
 </code></pre>
 *
 * @param {Number} start - value for the lowest grid line of the horizontal axis
 * @param {Number} end - value for the highest grid line of the horizontal axis
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setXAxisRange = function(start, end){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis.  The title will be centered and will appear below
 the axis value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setYAxisLogScale = function(){};

/**
 * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
 the range will be expanded to include those data points.

 <pre class="prettyprint">
 <code>
 // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
 var builder = Charts.newTableChart();
 builder.setYAxisRange(0, 100);
 </code></pre>
 *
 * @param {Number} start - value for the lowest grid line of the vertical axis
 * @param {Number} end - value for the highest grid line of the vertical axis
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setYAxisRange = function(start, end){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis.  The title will be centered and will appear to the
 left of the value labels.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint">
 <code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedScatterChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/** @constructor */
SpreadsheetApp.EmbeddedTableChartBuilder = function(){};

/**
 * Adds a Range to the chart represented by this builder. Will not add the Range
 if it has already been added to the chart.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)
     .build();

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to add
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.addRange = function(range){};

/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asAreaChart = function(){};

/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asBarChart = function(){};

/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asColumnChart = function(){};

/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asLineChart = function(){};

/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asPieChart = function(){};

/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asScatterChart = function(){};

/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.asTableChart = function(){};

/**
 * Builds the chart to reflect all changes made to it.

 This method will not automatically draw the chart on top of the spreadsheet. A new chart
 must be inserted via sheet.insertChart(chart), and an existing chart should be updated via
 sheet.update(chart);

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.build = function(){};

/**
 * Sets whether to enable paging through the data.
 <p>
 The default behavior is paging disabled. If paging is enabled the default page size is 10.
 *
 * @param {Boolean} enablePaging - true if paging should be enabled, false otherwise
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.enablePaging = function(enablePaging){};

/**
 * Enables paging and sets the number of rows in each page.
 <p>
 The default page size is 10.

 <pre class="prettyprint">
 <code>
 // Creates a table chart builder and enables paging with page size of 5.
 var builder = Charts.newTableChart();
 builder.enablePaging(5);
 </code></pre>
 *
 * @param {number} pageSize - the number of rows in each page of the table
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.enablePaging = function(pageSize){};

/**
 * Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing
 the column order of the table, so that column zero is the right-most column, and the last
 column is the left-most column.
 <p>
 This does not affect the column index in the underlying data, only the order of display.
 Full bi-directional (BiDi) language display is not supported by
 the table visualization even with this option. This option will be ignored if you enable
 paging (using the page option), or if the table has scroll bars because you have specified
 height and width options smaller than the required table size.
 The default behavior is RTL support disabled.
 *
 * @param {Boolean} rtlEnabled - true if right-to-left support should be enabled, false otherwise
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.enableRtlTable = function(rtlEnabled){};

/**
 * Sets whether to sort columns when the user clicks a column heading.
 <p>
 If sorting is enabled, when users click on the column header the rows will be automatically
 sorted. The default behavior is sorting enabled.
 *
 * @param {Boolean} enableSorting - true if to enable sorting by clicking on column headers,
     false otherwise
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.enableSorting = function(enableSorting){};

/**
 * Returns the current chart type.
 *
 * @return {Charts.ChartType} the chart type
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.getChartType = function(){};

/**
 * Return the ContainerInfo, which encapsulates where the chart appears on the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0);

 // This method returns the exact same data as Chart#getContainerInfo()
 var containerInfo = chartBuilder.getContainer();

 // Logs the values we used in setPosition()
 Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
           containerInfo.getAnchorColumn(),
           containerInfo.getAnchorRow(),
           containerInfo.getOffsetX(),
           containerInfo.getOffsetY());
 </code></pre>
 *
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.getContainer = function(){};

/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use addRange and
 removeRange to modify this list.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B8&quot;))
     .setPosition(5, 5, 0, 0)

 var ranges = chartBuilder.getRanges();

 // There&#39;s only one range as a data source for this chart,
 // so this logs &quot;A1:B8&quot;
 for (var i in ranges) {
   var range = ranges[i];
   Logger.log(range.getA1Notation());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.getRanges = function(){};

/**
 * Removes the specified Range from the chart represented by this builder. Will not throw an error
 if the Range is not in this chart.

 The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range)'>addRange(range)</a></code>, or it will
 not be removed, and it will not throw an exception. This method cannot be used to partially
 remove values from a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 var secondRange = sheet.getRange(&quot;A6:B8&quot;);

 var chartBuilder = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(firstRange)
     // This range will render in a different color
     .addRange(secondRange)
     .setPosition(5, 5, 0, 0);

 // Note that you can use either of these two formats, but the range
 // MUST match up with a range that was added via addRange(), or it
 // will not be removed, and will not throw an exception
 chartBuilder.removeRange(firstRange);
 chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));

 var chart = chartBuilder.build();

 sheet.insertChart(chart);
 </code> </pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to remove
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.removeRange = function(range){};

/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {Charts.ChartType} type - a chart type
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.setChartType = function(type){};

/**
 * Sets the row number for the first row in the data table.
 <p>
 The default row number of the first row is 1.

 <pre class="prettyprint">
 <code>
 // Creates a table chart builder and sets the first row to be 2.
 var builder = Charts.newTableChart();
 builder.setFirstRowNumber(2);
 </code></pre>
 *
 * @param {number} number - the row number for the first row in the data table
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.setFirstRowNumber = function(number){};

/**
 * Sets the index of the column according to which the table should be initially sorted
 (ascending).
 <p>
 The column will be sorted in ascending order and will be marked with a small arrow
 indicating that.

 <pre class="prettyprint">
 <code>
 // Creates a table chart builder and sorts it by the second column (ascending).
 var builder = Charts.newTableChart();
 builder.setInitialSortingAscending(2);
 </code></pre>
 *
 * @param {number} column - the number of the column according to which the table should be
     initially sorted
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.setInitialSortingAscending = function(column){};

/**
 * Sets the index of the column according to which the table should be initially sorted
 (descending).
 <p>
 The column will be sorted in descending order and be marked with a a small arrow
 indicating that.

 <pre class="prettyprint">
 <code>
 // Creates a table chart builder and sorts it by the second column (descending).
 var builder = Charts.newTableChart();
 builder.setInitialSortingDescending(2);
 </code></pre>
 *
 * @param {number} column - the number of the column according to which the table should be
     initially sorted
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.setInitialSortingDescending = function(column){};

/**
 * <p>Sets advanced options for this chart. See
 <a href="https://developers.google.com/chart/interactive/docs/reference">
 https://developers.google.com/chart/interactive/docs/reference</a> for what
 options are available.

 <p>This method will NOT validate the option you specify is valid for this
 chart type nor if the value is of the correct format/structure.

 <p>This example shows how to change the animation duration to 1 second and
 set a legend.

 <pre class="prettyprint">
 <code>
 builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 builder.setOption(&#39;animation.duration&#39;, 1000);
 builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 </code></pre>
 *
 * @param {String} option - the name of the option
 * @param {Object} value - the value of the option
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the position, changing where the chart appears on the sheet. AnchorRowPos and AnchorColPos
 are 1-indexed.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:B5&quot;);
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(range)
     .setPosition(5, 5, 0, 0)
     .build()

 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {number} anchorRowPos - the chart's top side will be anchored in this row
 * @param {number} anchorColPos - the chart's left side will be anchored in this column
 * @param {number} offsetX - the chart's upper right-hand corner will be offset by this many pixels
 * @param {number} offsetY - the chart's lower left-hand corner will be offset by this many pixels
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} the builder for method chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.setPosition = function(anchorRowPos, anchorColPos, offsetX, offsetY){};

/**
 * Sets whether to show the row number as the first column of the table.
 <p>
 The default behavior is not showing row numbers.
 *
 * @param {Boolean} showRowNumber - true if the first column of the table should show the row number,
     false otherwise
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.showRowNumberColumn = function(showRowNumber){};

/**
 * Sets whether alternating color style will be assigned to odd and even rows of a table
 chart.
 <p>
 The default behavior is the rows having alternating color style.
 *
 * @param {Boolean} alternate - true if color styles should be alternating, false otherwise
 *
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */
SpreadsheetApp.EmbeddedTableChartBuilder.prototype.useAlternatingRowStyle = function(alternate){};

/** @constructor */
SpreadsheetApp.NamedRange = function(){};

/**
 * Gets the name of this named range.
 *
 * @return {String} the name of this named range
 */
SpreadsheetApp.NamedRange.prototype.getName = function(){};

/**
 * Gets the range referenced by this named range.
 *
 * @return {SpreadsheetApp.Range} the spreadsheet range that is associated with this named range
 */
SpreadsheetApp.NamedRange.prototype.getRange = function(){};

/**
 * Deletes this named range.

 <pre class="prettyprint">
 <code>
 // The code below will delete all the named ranges in the spreadsheet.
 var namedRanges = SpreadsheetApp.getActive().getNamedRanges();
 for (var i = 0; i &lt; namedRanges.length; i++) {
   namedRanges[i].remove();
 }
 </code></pre>
 *
 * @return void
 */
SpreadsheetApp.NamedRange.prototype.remove = function(){};

/**
 * Sets/updates the name of the named range.

 <pre class="prettyprint">
 <code>
 // The code below will update the name for the first named range.
 var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
 if (namedRanges.length &gt; 1) {
   namedRanges[0].setName(&quot;UpdatedNamedRange&quot;);
 }
 </code></pre>
 *
 * @param {String} name - the new name of the named range
 *
 * @return {SpreadsheetApp.NamedRange} the range whose name was set by the call
 */
SpreadsheetApp.NamedRange.prototype.setName = function(name){};

/**
 * Sets/updates the range for this named range.
 *
 * @param {SpreadsheetApp.Range} range - the spreadsheet range to associate with this named range
 *
 * @return {SpreadsheetApp.NamedRange} the named range for which the spreadsheet range was set
 */
SpreadsheetApp.NamedRange.prototype.setRange = function(range){};

/** @constructor */
SpreadsheetApp.PageProtection = function(){};

/**
 * Adds a user to the list of users who can edit the sheet, if it is protected.

 <pre class="prettyprint">
 <code>
 // Add the &quot;user@example.com&quot; user to the list of users who can edit this sheet
 var sheet = SpreadsheetApp.getActiveSheet();
 var permissions = sheet.getSheetProtection();
 permissions.addUser(&#39;user@example.com&#39;);
 permissions.setProtected(true);
 sheet.setSheetProtection(permissions);
 </code></pre>
 *
 * @param {String} email - the email of the user to add
 *
 * @return void
 */
SpreadsheetApp.PageProtection.prototype.addUser = function(email){};

/**
 * Returns a list of the email addresses of the users who can edit this sheet.

 If sheet protection is disabled, the value returned by this call is meaningless.
 *
 * @return {String[]} an array of email addresses of users who can edit this sheet
 */
SpreadsheetApp.PageProtection.prototype.getUsers = function(){};

/**
 * Indicates whether the sheet has sheet protection enabled or not.

 <pre class="prettyprint">
 <code>
 // Determine whether or not sheet protection is enabled
 var sheet = SpreadsheetApp.getActiveSheet();
 var permissions = sheet.getSheetProtection();
 var isProtected = permissions.isProtected();
 </code></pre>
 *
 * @return {Boolean} whether the sheet has sheet protection enabled or not
 */
SpreadsheetApp.PageProtection.prototype.isProtected = function(){};

/**
 * Removes a user from the list of users who can edit the sheet.

 <pre class="prettyprint">
 <code>
 // Remove the &quot;user@example.com&quot; user to the list of users who can edit this sheet
 var sheet = SpreadsheetApp.getActiveSheet();
 var permissions = sheet.getSheetProtection();
 permissions.removeUser(&#39;user@example.com&#39;);
 permissions.setProtected(true);
 sheet.setSheetProtection(permissions);
 </code></pre>
 *
 * @param {String} user - the email address of the user to remove
 *
 * @return void
 */
SpreadsheetApp.PageProtection.prototype.removeUser = function(user){};

/**
 * Sets the protection status for the sheet.

 <pre class="prettyprint">
 <code>
 // Enables sheet protection for  this sheet
 var sheet = SpreadsheetApp.getActiveSheet();
 var permissions = sheet.getSheetProtection();
 permissions.setProtected(true);
 sheet.setSheetProtection(permissions);
 </code></pre>
 *
 * @param {Boolean} protection - true to enable sheet protection, false to disable sheet protection
 *
 * @return void
 */
SpreadsheetApp.PageProtection.prototype.setProtected = function(protection){};

/** @constructor */
SpreadsheetApp.Protection = function(){};

/**
 * Adds the given user to the list of editors for the protected sheet or range. This method does
 not automatically give the user permission to edit the spreadsheet itself; to do that in
 addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(String)'>Spreadsheet.addEditor(emailAddress)</a></code>.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given array of users to the list of editors for the protected sheet or range. This
 method does not automatically give the users permission to edit the spreadsheet itself; to do
 that in addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditors(String)'>Spreadsheet.addEditors(emailAddresses)</a></code>.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.addEditors = function(emailAddresses){};

/**
 * Determines whether all users in the domain that owns the spreadsheet have permission to edit
 the protected range or sheet. Throws an exception if the user does not have permission to edit
 the protected range or sheet.
 *
 * @return {Boolean} <code>true</code> if all users in the domain that owns the spreadsheet have permission to
     edit the protected range or sheet; <code>false</code> if not
 */
SpreadsheetApp.Protection.prototype.canDomainEdit = function(){};

/**
 * Determines whether the user has permission to edit the protected range or sheet. The
 spreadsheet owner is always able to edit protected ranges and sheets.

 <pre class="prettyprint">
 <code>
 // Remove all range protections in the spreadsheet that the user has permission to edit.
 var ss = SpreadsheetApp.getActive();
 var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 for (var i = 0; i &lt; protections.length; i++) {
   var protection = protections[i];
   if (protection.canEdit()) {
     protection.remove();
   }
 }
 </code></pre>
 *
 * @return {Boolean} <code>true</code> if the user has permission to edit the protected range or sheet;
     <code>false</code> if not
 */
SpreadsheetApp.Protection.prototype.canEdit = function(){};

/**
 * Gets the description of the protected range or sheet. If no description is set, this method
 returns an empty string.
 *
 * @return {String} the description of the protected range or sheet, or an empty string if no description
     is set
 */
SpreadsheetApp.Protection.prototype.getDescription = function(){};

/**
 * Gets the list of editors for the protected range or sheet. Throws an exception if the user does
 not have permission to edit the protected range or sheet.

 <pre class="prettyprint">
 <code>
 // Protect the active sheet, then remove all other users from the list of editors.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);

 // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 // permission comes from a group, the script will throw an exception upon removing the group.
 var me = Session.getEffectiveUser();
 protection.addEditor(me);
 protection.removeEditors(protection.getEditors());
 if (protection.canDomainEdit()) {
   protection.setDomainEdit(false);
 }
 </code></pre>
 *
 * @return {User[]} an array of users with permission to edit the protected range or sheet
 */
SpreadsheetApp.Protection.prototype.getEditors = function(){};

/**
 * Gets the type of the protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
 <code>SpreadsheetApp.ProtectionType.SHEET</code>.
 *
 * @return {SpreadsheetApp.ProtectionType} the type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
     <code>SpreadsheetApp.ProtectionType.SHEET</code>
 */
SpreadsheetApp.Protection.prototype.getProtectionType = function(){};

/**
 * Gets the range that is being protected. If the protection applies to the sheet instead of a
 range, this method returns a range that spans the entire sheet.
 *
 * @return {SpreadsheetApp.Range} the range that is being protected
 */
SpreadsheetApp.Protection.prototype.getRange = function(){};

/**
 * Gets the name of the protected range if it is associated with a named range. Returns
 <code>null</code> if the protection is not associated with a named range. Note that scripts must
 explicitly call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setRangeName(String)'>setRangeName(rangeName)</a></code> to associate a protected range with a named
 range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code> that
 happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not sufficient
 to associate them. However, creating a protected range from a named range in the Google Sheets
 UI will associate them automatically.

 <pre class="prettyprint">
 <code>
 // Protect a named range in a spreadsheet and log the name of the protected range.
 var ss = SpreadsheetApp.getActive();
 var range = ss.getRange(&#39;A1:B10&#39;);
 var protection = range.protect();
 ss.setNamedRange(&#39;Test&#39;, range);       // Create a named range.
 protection.setRangeName(&#39;Test&#39;);       // Associate the protection with the named range.
 Logger.log(protection.getRangeName()); // Verify the name of the protected range.
 </code></pre>
 *
 * @return {String} the name of the protected named range, or <code>null</code> if the protected range is not
     associated with a named range
 */
SpreadsheetApp.Protection.prototype.getRangeName = function(){};

/**
 * Gets an array of unprotected ranges within a protected sheet. If the <code>Protection</code> object
 corresponds to a protected range instead of a protected sheet, this method returns an empty
 array.  To change the unprotected ranges, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setUnprotectedRanges(Range)'>setUnprotectedRanges(ranges)</a></code> to set
 a new array of ranges; to re-protect the entire sheet, set an empty array.

 <pre class="prettyprint">
 <code>
 // Unprotect cells E2:F5 in addition to any other unprotected ranges in the protected sheet.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.protect();
 var unprotected = protection.getUnprotectedRanges();
 unprotected.push(sheet.getRange(&#39;E2:F5&#39;));
 protection.setUnprotectedRanges(unprotected);
 </code></pre>
 *
 * @return {SpreadsheetApp.Range[]} an array of unprotected ranges within a protected sheet
 */
SpreadsheetApp.Protection.prototype.getUnprotectedRanges = function(){};

/**
 * Determines if the protected area is using "warning based" protection. Warning-based protection
 means that every user can edit data in the area, except editing will prompt a warning asking
 the user to confirm the edit. By default, protected ranges or sheets are not warning-based.
 To change to the warning state, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setWarningOnly(Boolean)'>setWarningOnly(warningOnly)</a></code>.
 *
 * @return {Boolean} <code>true</code> if the protected range or sheet is only using warning-based protection
 */
SpreadsheetApp.Protection.prototype.isWarningOnly = function(){};

/**
 * Unprotects the range or sheet.

 <pre class="prettyprint">
 <code>
 // Remove all range protections in the spreadsheet that the user has permission to edit.
 var ss = SpreadsheetApp.getActive();
 var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 for (var i = 0; i &lt; protections.length; i++) {
   var protection = protections[i];
   if (protection.canEdit()) {
     protection.remove();
   }
 }
 </code></pre>

 <pre class="prettyprint">
 <code>
 // Remove sheet protection from the active sheet, if the user has permission to edit it.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
 if (protection &amp;&amp; protection.canEdit()) {
   protection.remove();
 }
 </code></pre>
 *
 * @return void
 */
SpreadsheetApp.Protection.prototype.remove = function(){};

/**
 * Removes the given user from the list of editors for the protected sheet or range. Note that if
 the user is a member of a Google Group that has edit permission, or if all users in the domain
 have edit permission, the user will still be able to edit the protected area. Neither the
 owner of the spreadsheet nor the current user can be removed.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.removeEditor = function(emailAddress){};

/**
 * Removes the given array of users from the list of editors for the protected sheet or range.
 Note that if any of the users are members of a Google Group that has edit permission, or if all
 users in the domain have edit permission, those users will still be able to edit the protected
 area. Neither the owner of the spreadsheet nor the current user can be removed.

 <pre class="prettyprint">
 <code>
 // Protect the active sheet, then remove all other users from the list of editors.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);

 // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 // permission comes from a group, the script will throw an exception upon removing the group.
 var me = Session.getEffectiveUser();
 protection.addEditor(me);
 protection.removeEditors(protection.getEditors());
 if (protection.canDomainEdit()) {
   protection.setDomainEdit(false);
 }
 </code></pre>
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to remove
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.removeEditors = function(emailAddresses){};

/**
 * Sets the description of the protected range or sheet.
 *
 * @param {String} description - the description of the protected range or sheet
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.setDescription = function(description){};

/**
 * Sets whether all users in the domain that owns the spreadsheet have permission to edit the
 protected range or sheet. Note that any users who have explicit edit permission will be able to
 edit the protected area regardless of this setting. Throws an exception if the spreadsheet does
 not belong to a Google Apps domain (that is, if it is owned by a gmail.com account).
 *
 * @param {Boolean} editable - <code>true</code> if all users in the domain that owns the spreadsheet should have
     permission to edit the protected range or sheet; <code>false</code> if not
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.setDomainEdit = function(editable){};

/**
 * Associates the protected range with an existing named range. If the named range covers a
 different area from the current protected range, this method moves the protection to cover the
 the named range instead. The named range must be on the same sheet as the current protected
 range. Note that scripts must explicitly call this method to associate a protected range with a
 named range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code>
 that happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not
 sufficient to associate them. However, creating a protected range from a named range in the
 Google Sheets UI will associate them automatically.
 *
 * @param {SpreadsheetApp.NamedRange} namedRange - the existing named range to associate with the protected range
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.setNamedRange = function(namedRange){};

/**
 * Adjusts the range that is being protected. If the given range covers a different area from the
 current protected range, this method moves the protection to cover the new range instead.
 *
 * @param {SpreadsheetApp.Range} range - the new range to protect from edits
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.setRange = function(range){};

/**
 * Associates the protected range with an existing named range. If the named range covers a
 different area from the current protected range, this method moves the protection to cover the
 the named range instead. The named range must be on the same sheet as the current protected
 range. Note that scripts must explicitly call this method to associate a protected range with a
 named range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code>
 that happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not
 sufficient to associate them. However, creating a protected range from a named range in the
 Google Sheets UI will associate them automatically.

 <pre class="prettyprint">
 <code>
 // Protect a named range in a spreadsheet and log the name of the protected range.
 var ss = SpreadsheetApp.getActive();
 var range = ss.getRange(&#39;A1:B10&#39;);
 var protection = range.protect();
 ss.setNamedRange(&#39;Test&#39;, range);       // Create a named range.
 protection.setRangeName(&#39;Test&#39;);       // Associate the protection with the named range.
 Logger.log(protection.getRangeName()); // Verify the name of the protected range.
 </code></pre>
 *
 * @param {String} rangeName - the name of the named range to be protected
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.setRangeName = function(rangeName){};

/**
 * Unprotects the given array of ranges within a protected sheet. Throws an exception if the
 <code>Protection</code> object corresponds to a protected range instead of a protected sheet or if
 any of the ranges are not on the protected sheet. To change the unprotected ranges, set a new
 array of ranges; to re-protect the entire sheet, set an empty array.

 <pre class="prettyprint">
 <code>
 // Protect the active sheet except B2:C5, then remove all other users from the list of editors.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
 var unprotected = sheet.getRange(&#39;B2:C5&#39;);
 protection.setUnprotectedRanges([unprotected]);

 // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 // permission comes from a group, the script will throw an exception upon removing the group.
 var me = Session.getEffectiveUser();
 protection.addEditor(me);
 protection.removeEditors(protection.getEditors());
 if (protection.canDomainEdit()) {
   protection.setDomainEdit(false);
 }
 </code></pre>
 *
 * @param {SpreadsheetApp.Range[]} ranges - the array of ranges to leave unprotected within a protected sheet
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */
SpreadsheetApp.Protection.prototype.setUnprotectedRanges = function(ranges){};

/**
 * Sets whether or not this protected range is using "warning based" protection.
 Warning-based protection means that every user can edit data in the area, except editing
 will prompt a warning asking the user to confirm the edit. By default, protected ranges
 or sheets are not warning-based. To check warning state, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#isWarningOnly()'>isWarningOnly()</a></code>.
 *
 * @param {Boolean} warningOnly - 
 *
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining.
 */
SpreadsheetApp.Protection.prototype.setWarningOnly = function(warningOnly){};

/** @constructor */
SpreadsheetApp.Range = function(){};

/**
 * Make this range the active range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D10&quot;);
 range.activate();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.activate = function(){};

/**
 * Break any multi-column cells in the range into individual cells again.

 Calling this function on a range is equivalent to selecting a range and clicking
 Format -> Merge -> Unmerge.
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.breakApart = function(){};

/**
 * Determines whether the user has permission to edit every cell in the range. The spreadsheet
 owner is always able to edit protected ranges and sheets.
 *
 * @return {Boolean} <code>true</code> if the user has permission to edit every cell in the range; <code>false</code>
     if not
 */
SpreadsheetApp.Range.prototype.canEdit = function(){};

/**
 * Clears the range of contents, formats, and data-validation rules.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D10&quot;);
 range.clear();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.clear = function(){};

/**
 * Clears the content of the range, leaving the formatting intact.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D10&quot;);
 range.clearContent();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.clearContent = function(){};

/**
 * Clears the data-validation rules for the range.

 <pre class="prettyprint">
 // Clear the data-validation rules for cells A1:B5.
 var range = SpreadsheetApp.getActive().getRange('A1:B5');
 range.clearDataValidations();
 </pre>
 *
 * @return {SpreadsheetApp.Range} the range, for chaining
 */
SpreadsheetApp.Range.prototype.clearDataValidations = function(){};

/**
 * Clears formatting for this range.

 This clears text formatting for the cell or cells in the range, but does not reset
 any number formatting rules.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D10&quot;);
 range.clearFormat();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.clearFormat = function(){};

/**
 * Clears the note in the given cell or cells.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D10&quot;);
 range.clearNote();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.clearNote = function(){};

/**
 * Copy the formatting of the range to the given location. If the destination is larger or
 smaller than the source range then the source will be repeated or truncated accordingly. Note
 that this method copies the formatting only.

 For a detailed description of the gridId parameter, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()'>getGridId()</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var source = ss.getSheets()[0];

 var range = source.getRange(&quot;B2:D4&quot;);

 // This copies the formatting in B2:D4 in the source sheet to
 // D4:F6 in the sheet with gridId 1555299895. Note that you can get the gridId
 // of a sheet by calling sheet.getSheetId() or range.getGridId().
 range.copyFormatToRange(1555299895, 4, 6, 4, 6);
 </code></pre>
 *
 * @param {number} gridId - the unique ID of the sheet within the spreadsheet, irrespective of position
 * @param {number} column - the first column of the target range
 * @param {number} columnEnd - the end column of the target range
 * @param {number} row - the start row of the target range
 * @param {number} rowEnd - the end row of the target range
 *
 * @return void
 */
SpreadsheetApp.Range.prototype.copyFormatToRange = function(gridId, column, columnEnd, row, rowEnd){};

/**
 * Copies the data from a range of cells to another range of cells. Both the values and formatting
 are copied.

 <pre class="prettyprint">
 // The code below will copy the first 5 columns over to the 6th column.
 var sheet = SpreadsheetApp.getActiveSheet();
 var rangeToCopy = sheet.getRange(1, 1, sheet.getMaxRows(), 5);
 rangeToCopy.copyTo(sheet.getRange(1, 6));
 }</pre>
 *
 * @param {SpreadsheetApp.Range} destination - a destination range to copy to; only the top-left cell position is relevant
 *
 * @return void
 */
SpreadsheetApp.Range.prototype.copyTo = function(destination){};

/**
 * Copy the content of the range to the given location. If the destination is larger or
 smaller than the source range then the source will be repeated or truncated accordingly.

 For a detailed description of the gridId parameter, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()'>getGridId()</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var source = ss.getSheets()[0];

 var range = source.getRange(&quot;B2:D4&quot;);

 // This copies the data in B2:D4 in the source sheet to
 // D4:F6 in the sheet with gridId 0
 range.copyValuesToRange(0, 4, 6, 4, 6);
 </code></pre>
 *
 * @param {number} gridId - the unique ID of the sheet within the spreadsheet, irrespective of position
 * @param {number} column - the first column of the target range
 * @param {number} columnEnd - the end column of the target range
 * @param {number} row - the start row of the target range
 * @param {number} rowEnd - the end row of the target range
 *
 * @return void
 */
SpreadsheetApp.Range.prototype.copyValuesToRange = function(gridId, column, columnEnd, row, rowEnd){};

/**
 * Returns a string description of the range, in A1 notation.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(1, 1, 2, 5);

 // Logs &quot;A1:E2&quot;
 Logger.log(range.getA1Notation());
 </code></pre>
 *
 * @return {String} the string description of the range in A1 notation
 */
SpreadsheetApp.Range.prototype.getA1Notation = function(){};

/**
 * Returns the background color of the top-left cell in the range (i.e., <code>&#39;#ffffff&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B5&quot;);
 Logger.log(cell.getBackground());
 </code></pre>
 *
 * @return {String} the color code of the background
 */
SpreadsheetApp.Range.prototype.getBackground = function(){};

/**
 * Returns the background colors of the cells in the range (i.e., <code>&#39;#ffffff&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B5:C6&quot;);
 var bgColors = range.getBackgrounds();
 for (var i in bgColors) {
   for (var j in bgColors[i]) {
     Logger.log(bgColors[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of color codes of the backgrounds
 */
SpreadsheetApp.Range.prototype.getBackgrounds = function(){};

/**
 * Returns a given cell within a range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D4&quot;);

 // The row and column here are relative to the range
 // getCell(1,1) in this code returns the cell at B2, B2
 var cell = range.getCell(1, 1);
 Logger.log(cell.getValue());
 </code></pre>
 *
 * @param {number} row - the row of the cell relative to the range
 * @param {number} column - the column of the cell relative to the range
 *
 * @return {SpreadsheetApp.Range} a range containing a single cell at the specified coordinates
 */
SpreadsheetApp.Range.prototype.getCell = function(row, column){};

/**
 * Returns the starting column position for this range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D4&quot;);
 // Logs &quot;2.0&quot;
 Logger.log(range.getColumn());
 </code></pre>
 *
 * @return {number} the range's starting column position in the spreadsheet
 */
SpreadsheetApp.Range.prototype.getColumn = function(){};

/**
 * Returns a URL for the data in this range, which can be used to create
 charts and queries.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;A1:B7&quot;);

 var dataSourceUrl = range.getDataSourceUrl();

 // Note that this doesn&#39;t build an EmbeddedChart, so we can&#39;t just use
 // Sheet#insertChart(). If we want to do that, we should use
 // sheet.newChart().addRange() instead.
 var chart = Charts.newBarChart()
     .setOption(&quot;title&quot;, &quot;Your Title Here&quot;)
     .setDataSourceUrl(dataSourceUrl)
     .build();

 var app = UiApp.createApplication();
 app.add(chart);
 ss.show(app);
 </code></pre>
 *
 * @return {String} a URL for this range as a data source that can be passed to other APIs such as charts
 */
SpreadsheetApp.Range.prototype.getDataSourceUrl = function(){};

/**
 * Return the data inside this object as a DataTable.
 *
 * @return {DataTable} the data as a datatable.
 */
SpreadsheetApp.Range.prototype.getDataTable = function(){};

/**
 * Returns the data-validation rule for the top-left cell in the range. If data validation has not
 been set on the cell, this method returns <code>null</code>.

 <pre class="prettyprint">
 // Log information about the data-validation rule for cell A1.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var rule = cell.getDataValidation();
 if (rule != null) {
   var criteria = rule.getCriteriaType();
   var args = rule.getCriteriaValues();
   Logger.log('The data-validation rule is %s %s', criteria, args);
 } else {
   Logger.log('The cell does not have a data-validation rule.')
 }
 </pre>
 *
 * @return {SpreadsheetApp.DataValidation} the data-validation rule for the top-left cell in the range
 */
SpreadsheetApp.Range.prototype.getDataValidation = function(){};

/**
 * Returns the data-validation rules for all cells in the range. If data validation has not been
 set on a given cell, this method returns <code>null</code> for that cell's position in the array.

 <pre class="prettyprint"><code>
 // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
 var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 var sheet = SpreadsheetApp.getActiveSheet();
 var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 var rules = range.getDataValidations();

 for (var i = 0; i &lt; rules.length; i++) {
   for (var j = 0; j &lt; rules[i].length; j++) {
     var rule = rules[i][j];

     if (rule != null) {
       var criteria = rule.getCriteriaType();
       var args = rule.getCriteriaValues();

       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
         // Create a builder from the existing rule, then change the dates.
         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
       }
     }
   }
 }
 range.setDataValidations(rules);
 </code></pre>
 *
 * @return {SpreadsheetApp.DataValidation[][]} a two-dimensional array of data-validation rules associated with the cells in the range
 */
SpreadsheetApp.Range.prototype.getDataValidations = function(){};

/**
 * Returns the displayed value of the top-left cell in the range. The value will be of type
 <code>String</code>. The displayed value takes into account date, time and currency formatting
 formatting, including formats applied automatically by the spreadsheet's locale setting.
 Empty cells will return an empty string.
 *
 * @return {String} the displayed value in this cell
 */
SpreadsheetApp.Range.prototype.getDisplayValue = function(){};

/**
 * Returns the rectangular grid of values for this range.

 Returns a two-dimensional array of displayed values, indexed by row, then by column.
 The values will be of type  <code>String</code>. The displayed value takes into account date, time
 and currency formatting, including formats applied automatically by the spreadsheet's locale
 setting. Empty cells will be represented by an empty string in the array. Remember that while a
 range index starts at <code>1, 1</code>, the JavaScript array will be indexed from <code>[0][0]</code>.

 <pre class="prettyprint">
 <code>
 // The code below will get the displayed values for the range C2:G8
 // in the active spreadsheet.  Note that this will be a javascript array.
 var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getDisplayValues();
 Logger.log(values[0][0]);
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of values
 */
SpreadsheetApp.Range.prototype.getDisplayValues = function(){};

/**
 * Returns the font color of the cell in the top-left corner of the range, in CSS notation
 (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getFontColor());
 </code></pre>
 *
 * @return {String} the font color in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>)
 */
SpreadsheetApp.Range.prototype.getFontColor = function(){};

/**
 * Returns the font colors of the cells in the range in CSS notation (like <code>&#39;#ffffff&#39;</code> or
 <code>&#39;white&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getFontColors();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of font colors associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getFontColors = function(){};

/**
 * Returns the font families of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getFontFamilies();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of font families associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getFontFamilies = function(){};

/**
 * Returns the font family of the cell in the top-left corner of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getFontFamily());
 </code></pre>
 *
 * @return {String} the font family of the cell
 */
SpreadsheetApp.Range.prototype.getFontFamily = function(){};

/**
 * Gets the line style of the cell in the top-left corner of the range (<code>&#39;underline&#39;</code>,
 <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getFontLine());
 </code></pre>
 *
 * @return {String} the font line
 */
SpreadsheetApp.Range.prototype.getFontLine = function(){};

/**
 * Gets the line style of the cells in the range (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
 <code>&#39;none&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getFontLines();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of font lines associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getFontLines = function(){};

/**
 * Returns the font size in point size of the cell in the top-left corner of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getFontSize());
 </code></pre>
 *
 * @return {number} the font size in point size
 */
SpreadsheetApp.Range.prototype.getFontSize = function(){};

/**
 * Returns the font sizes of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getFontSizes();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {Integer[][]} a two-dimensional array of font sizes of text associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getFontSizes = function(){};

/**
 * Returns the font style (<code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code> of the cell in the top-left corner
 of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getFontStyle());
 </code></pre>
 *
 * @return {String} the font style of the text in the cell
 */
SpreadsheetApp.Range.prototype.getFontStyle = function(){};

/**
 * Returns the font styles of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getFontStyles();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of font styles of text associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getFontStyles = function(){};

/**
 * Returns the font weight (normal/bold) of the cell in the top-left corner of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getFontWeight());
 </code></pre>
 *
 * @return {String} the font weight of the text in the cell
 */
SpreadsheetApp.Range.prototype.getFontWeight = function(){};

/**
 * Returns the font weights of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getFontWeights();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of font weights of text associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getFontWeights = function(){};

/**
 * Returns the formula (A1 notation) for the top-left cell of the range,
 or an empty string if the cell is empty or doesn't contain a formula.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This assumes we have a function in B5 that sums up
 // B2:B4
 var range = sheet.getRange(&quot;B5&quot;);

 // Logs the calculated value and the formula
 Logger.log(&quot;Calculated value: %s Formula: %s&quot;,
            range.getValue(),
            range.getFormula());
 </code></pre>
 *
 * @return {String} the formula for the cell
 */
SpreadsheetApp.Range.prototype.getFormula = function(){};

/**
 * Returns the formula (R1C1 notation) for a given cell, or <code>null</code> if none.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B5&quot;);
 var formula = range.getFormulaR1C1();
 Logger.log(formula);
 </code></pre>
 *
 * @return {String} the formula in R1C1 notation
 */
SpreadsheetApp.Range.prototype.getFormulaR1C1 = function(){};

/**
 * Returns the formulas (A1 notation) for the cells in the range.
 Entries in the 2D array will be an empty string for cells with no formula.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B5:C6&quot;);
 var formulas = range.getFormulas();
 for (var i in formulas) {
   for (var j in formulas[i]) {
     Logger.log(formulas[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of formulas in string format
 */
SpreadsheetApp.Range.prototype.getFormulas = function(){};

/**
 * Returns the formulas (R1C1 notation) for the cells in the range. Entries in the 2D array will
 be <code>null</code> for cells with no formula.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B5:C6&quot;);
 var formulas = range.getFormulasR1C1();
 for (var i in formulas) {
   for (var j in formulas[i]) {
     Logger.log(formulas[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of formulas in R1C1 notation
 */
SpreadsheetApp.Range.prototype.getFormulasR1C1 = function(){};

/**
 * Returns the grid ID of the range's parent sheet. The first sheet created in a spreadsheet has a
 grid ID of <code>0</code>, and each sheet created thereafter increments the ID. The ID does not
 necessarily correspond to a sheet's tab position because sheets may have been reordered or
 deleted. If a sheet is deleted, the grid ID for subsequent sheets continues to increment, and
 the grid ID of the deleted sheet is not reused.

 <pre class="prettyprint">
 <code>
 // Log the grid ID of the first sheet (by tab position) in the spreadsheet.
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getGridId());
 </code></pre>
 *
 * @return {number} the grid ID of the parent sheet
 */
SpreadsheetApp.Range.prototype.getGridId = function(){};

/**
 * Returns the height of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D4&quot;);
 // logs 3.0
 Logger.log(range.getHeight());
 </code></pre>
 *
 * @return {number} the height of the range
 */
SpreadsheetApp.Range.prototype.getHeight = function(){};

/**
 * Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left
 corner of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getHorizontalAlignment());
 </code></pre>
 *
 * @return {String} the horizontal alignment of the text in the cell
 */
SpreadsheetApp.Range.prototype.getHorizontalAlignment = function(){};

/**
 * Returns the horizontal alignments of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getHorizontalAlignments();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of horizontal alignments of text associated with cells
         in the range
 */
SpreadsheetApp.Range.prototype.getHorizontalAlignments = function(){};

/**
 * Returns the end column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D4&quot;);
 // Logs &quot;4.0&quot;
 Logger.log(range.getLastColumn());
 </code></pre>
 *
 * @return {number} the range's ending column position in the spreadsheet
 */
SpreadsheetApp.Range.prototype.getLastColumn = function(){};

/**
 * Returns the end row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D4&quot;);
 // Logs &quot;4.0&quot;
 Logger.log(range.getLastRow());
 </code></pre>
 *
 * @return {number} the range's ending row position in the spreadsheet
 */
SpreadsheetApp.Range.prototype.getLastRow = function(){};

/**
 * Returns the note associated with the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getNote());
 </code></pre>
 *
 * @return {String} the note associated with the given cell
 */
SpreadsheetApp.Range.prototype.getNote = function(){};

/**
 * Returns the notes associated with the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getNotes();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of notes associated with cells in the range
 */
SpreadsheetApp.Range.prototype.getNotes = function(){};

/**
 * Returns the number of columns in this range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D5&quot;);
 Logger.log(range.getNumColumns());
 </code></pre>
 *
 * @return {number} the number of columns in this range
 */
SpreadsheetApp.Range.prototype.getNumColumns = function(){};

/**
 * Returns the number of rows in this range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D5&quot;);
 Logger.log(range.getNumRows());
 </code></pre>
 *
 * @return {number} the number of rows in this range
 */
SpreadsheetApp.Range.prototype.getNumRows = function(){};

/**
 * Get the number formatting of the top-left cell of the given range.

 The number format corresponds to a formatting created when a user clicks Format -> Number.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;C4&quot;);
 Logger.log(cell.getNumberFormat());
 </code></pre>
 *
 * @return {String} the number format of the top-left cell of the range
 */
SpreadsheetApp.Range.prototype.getNumberFormat = function(){};

/**
 * Returns the number formats for the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B5:C6&quot;);
 var formats = range.getNumberFormats();
 for (var i in formats) {
   for (var j in formats[i]) {
     Logger.log(formats[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of number formats
 */
SpreadsheetApp.Range.prototype.getNumberFormats = function(){};

/**
 * Returns the row position for this range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2&quot;);
 Logger.log(range.getRow());
 </code></pre>
 *
 * @return {number} the row position of the range
 */
SpreadsheetApp.Range.prototype.getRow = function(){};

/**
 * Returns the row position for this range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2&quot;);
 Logger.log(range.getRowIndex());
 </code></pre>
 *
 * @return {number} the row position of the range
 */
SpreadsheetApp.Range.prototype.getRowIndex = function(){};

/**
 * Returns the sheet this range belongs to.
 *
 * @return {SpreadsheetApp.Sheet} the sheet that this range belongs to
 */
SpreadsheetApp.Range.prototype.getSheet = function(){};

/**
 * Returns the value of the top-left cell in the range. The value may be of type <code>Number</code>,
 <code>Boolean</code>, <code>Date</code>, or <code>String</code> depending on the value of the cell. Empty
 cells will return an empty string.
 *
 * @return {Object | string} the value in this cell
 */
SpreadsheetApp.Range.prototype.getValue = function(){};

/**
 * Returns the rectangular grid of values for this range.

 Returns a two-dimensional array of values, indexed by row, then by column. The values may be of
 type <code>Number</code>, <code>Boolean</code>, <code>Date</code>, or <code>String</code>, depending on the value of
 the cell. Empty cells will be represented by an empty string in the array. Remember that while a
 range index starts at <code>1, 1</code>, the JavaScript array will be indexed from <code>[0][0]</code>.

 <pre class="prettyprint">
 <code>
 // The code below will get the values for the range C2:G8
 // in the active spreadsheet.  Note that this will be a javascript array.
 var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
 Logger.log(values[0][0]);
 </code></pre>
 *
 * @return {Object[][]} a two-dimensional array of values
 */
SpreadsheetApp.Range.prototype.getValues = function(){};

/**
 * Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner
 of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getVerticalAlignment());
 </code></pre>
 *
 * @return {String} the vertical alignment of the text in the cell
 */
SpreadsheetApp.Range.prototype.getVerticalAlignment = function(){};

/**
 * Returns the vertical alignments of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getVerticalAlignments();

 for (var i in results) {
   for (var j in results[i]) {
     Logger.log(results[i][j]);
   }
 }
 </code></pre>
 *
 * @return {String[][]} a two-dimensional array of vertical alignments of text associated with cells
         in the range
 */
SpreadsheetApp.Range.prototype.getVerticalAlignments = function(){};

/**
 * Returns the width of the range in columns.
 *
 * @return {number} the number of columns in the range
 */
SpreadsheetApp.Range.prototype.getWidth = function(){};

/**
 * Returns the wrapping policy of the cell in the top-left corner of the range. <code>true</code> if
 the text wraps, <code>false</code> if the text does not.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.getWrap());
 </code></pre>
 *
 * @return {Boolean} whether the text in this cell wraps or not
 */
SpreadsheetApp.Range.prototype.getWrap = function(){};

/**
 * Returns the wrapping policy of the cells in the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 var results = range.getVerticalAlignments();

 for (var i in results) {
   for (var j in results[i]) {
     var isWrapped = results[i][j];
     if (isWrapped) {
        Logger.log(&quot;Cell [%s, %s] has wrapped text&quot;, i, j);
     }
   }
 }
 </code></pre>
 *
 * @return {Boolean[][]} a two-dimensional array of vertical alignments of text associated with cells
         in the range
 */
SpreadsheetApp.Range.prototype.getWraps = function(){};

/**
 * Returns <code>true</code> if the range is totally blank.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;B2:D4&quot;);

 Logger.log(range.isBlank());
 </code></pre>
 *
 * @return {Boolean} whether the range is blank or not
 */
SpreadsheetApp.Range.prototype.isBlank = function(){};

/**
 * Determines whether the end of the range is bound to a particular column. For example, for the
 ranges <code>A1:B10</code> or <code>B:B</code>, which are bound to columns at the end of the range, this
 method returns <code>true</code>; for the ranges <code>3:7</code> or <code>A1:5</code>, which are bound only
 to particular rows at the end of the range, this method returns <code>false</code>.
 *
 * @return {Boolean} <code>true</code> if the end of the range is bound to a particular column; <code>false</code> if
     not
 */
SpreadsheetApp.Range.prototype.isEndColumnBounded = function(){};

/**
 * Determines whether the end of the range is bound to a particular row. For example, for the
 ranges <code>A1:B10</code> or <code>3:7</code>, which are bound to rows at the end of the range, this
 method returns <code>true</code>; for the ranges <code>B:B</code> or <code>A1:C</code>, which are bound only
 to particular columns at the end of the range, this method returns <code>false</code>.
 *
 * @return {Boolean} <code>true</code> if the end of the range is bound to a particular row; <code>false</code> if not
 */
SpreadsheetApp.Range.prototype.isEndRowBounded = function(){};

/**
 * Determines whether the start of the range is bound to a particular column. For example, for the
 ranges <code>A1:B10</code> or <code>B:B</code>, which are bound to columns at the start of the range,
 this method returns <code>true</code>; for the range <code>3:7</code>, which is bound only to a
 row at the start of the range, this method returns <code>false</code>.
 *
 * @return {Boolean} <code>true</code> if the start of the range is bound to a particular column; <code>false</code>
     if not
 */
SpreadsheetApp.Range.prototype.isStartColumnBounded = function(){};

/**
 * Determines whether the start of the range is bound to a particular row. For example, for the
 ranges <code>A1:B10</code> or <code>3:7</code>, which are bound to rows at the start of the range, this
 method returns <code>true</code>; for the range <code>B:B</code>, which is bound only to a
 particular column at the start of the range, this method returns <code>false</code>.
 *
 * @return {Boolean} <code>true</code> if the start of the range is bound to a particular row; <code>false</code> if
     not
 */
SpreadsheetApp.Range.prototype.isStartRowBounded = function(){};

/**
 * Merges the cells in the range together into a single block.

 <pre class="prettyprint">
 <code>
  var sheet = SpreadsheetApp.getActiveSheet();

  // The code below will 2-dimensionally merge the cells in A1 to B3
  sheet.getRange(&#39;A1:B3&#39;).merge();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.merge = function(){};

/**
 * Merge the cells in the range across the columns of the range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The code below will merge cells C5:E5 into one cell
 var range1 = sheet.getRange(&quot;C5:E5&quot;);
 range1.mergeAcross();

 // The code below will create 2 horizontal cells, F5:H5 and F6:H6
 var range2 = sheet.getRange(&quot;F5:H6&quot;);
 range2.mergeAcross();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.mergeAcross = function(){};

/**
 * Merges the cells in the range together.

 <pre class="prettyprint">
 <code>
  var sheet = SpreadsheetApp.getActiveSheet();

  // The code below will vertically merge the cells in A1 to A10
  sheet.getRange(&#39;A1:A10&#39;).mergeVertically();

  // The code below will create 3 merged columns: B1 to B10, C1 to C10, and D1 to D10
  sheet.getRange(&#39;B1:D10&#39;).mergeVertically();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.mergeVertically = function(){};

/**
 * Cut and paste (both format and values) from this range to the target range.

 <pre class="prettyprint">
 <code>
 // The code below will move the first 5 columns over to the 6th column
 var sheet = SpreadsheetApp.getActiveSheet()
 sheet.getRange(&quot;A1:E&quot;).moveTo(sheet.getRange(&quot;F1&quot;));
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} target - a target range to copy this range to; only the top-left cell position is relevant
 *
 * @return void
 */
SpreadsheetApp.Range.prototype.moveTo = function(target){};

/**
 * Returns a new range that is offset from this range by the given number of rows and columns
 (which can be negative). The new range will be the same size as the original range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;A1&quot;);

 // newCell references B2
 var newCell = cell.offset(1, 1);
 </code></pre>
 *
 * @param {number} rowOffset - number of rows down from the range's top-left cell; negative values represent
     rows up from the range's top-left cell
 * @param {number} columnOffset - number of columns right from the range's top-left cell; negative values
     represent columns left from the range's top-left cell
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.offset = function(rowOffset, columnOffset){};

/**
 * Returns a new range that is relative to the current range, whose  upper left point is offset
 from the current range by the given rows and columns, and with the given height in cells.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;A1&quot;);

 // newCell references B2:B3
 var newRange = cell.offset(1, 1, 2);
 </code></pre>
 *
 * @param {number} rowOffset - number of rows down from the range's top-left cell; negative values represent
     rows up from the range's top-left cell
 * @param {number} columnOffset - number of columns right from the range's top-left cell; negative values
     represent columns left from the range's top-left cell
 * @param {number} numRows - the height in rows of the new range
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.offset = function(rowOffset, columnOffset, numRows){};

/**
 * Creates an object that can protect the range from being edited except by users who have
 permission. Until the script actually changes the list of editors for the range (by calling
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)'>Protection.removeEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)'>Protection.removeEditor(user)</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)'>Protection.removeEditors(emailAddresses)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)'>Protection.addEditor(emailAddress)</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)'>Protection.addEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)'>Protection.addEditors(emailAddresses)</a></code>, or
 setting a new value for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean)'>Protection.setDomainEdit(editable)</a></code>), the permissions will
 mirror those of the spreadsheet itself, which effectively means that the range remains
 unprotected. If the range is already protected, this method creates a new protected range that
 overlaps the existing one. If a cell is covered by two protected ranges and one of the
 protected ranges allows a particular user to edit the cell and the other does not, the user
 will not be able to edit.

 <pre class="prettyprint">
 <code>
 // Protect range A1:B10, then remove all other users from the list of editors.
 var ss = SpreadsheetApp.getActive();
 var range = ss.getRange(&#39;A1:B10&#39;);
 var protection = range.protect().setDescription(&#39;Sample protected range&#39;);

 // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 // permission comes from a group, the script will throw an exception upon removing the group.
 var me = Session.getEffectiveUser();
 protection.addEditor(me);
 protection.removeEditors(protection.getEditors());
 if (protection.canDomainEdit()) {
   protection.setDomainEdit(false);
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Protection} an object representing the protection settings
 */
SpreadsheetApp.Range.prototype.protect = function(){};

/**
 * Sets the background color of all cells in the range in CSS notation (like <code>&#39;#ffffff&#39;</code> or
 <code>&#39;white&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;B2:D5&quot;);
 range.setBackground(&quot;red&quot;);
 </code></pre>
 *
 * @param {String} color - color code in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>)
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setBackground = function(color){};

/**
 * Sets the background to the given RGB color.  This is a convenience
 wrapper for the setBackground call that takes a string color.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);

 // Sets the background to white
 cell.setBackgroundRGB(255, 255, 255);

 // Sets the background to red
 cell.setBackgroundRGB(255, 0, 0);
 </code></pre>
 *
 * @param {number} red - the red value in RGB notation
 * @param {number} green - the green value in RGB notation
 * @param {number} blue - the blue value in RGB notation
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setBackgroundRGB = function(red, green, blue){};

/**
 * Sets a rectangular grid of background colors (must match dimensions of this range). The colors
 are in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var colors = [
   [&quot;red&quot;, &quot;white&quot;, &quot;blue&quot;],
   [&quot;#FF0000&quot;, &quot;#FFFFFF&quot;, &quot;#0000FF&quot;] // These are the hex equivalents
 ];

 var cell = sheet.getRange(&quot;B5:D6&quot;);
 cell.setBackgrounds(colors);
 </code></pre>
 *
 * @param {String[][]} color - a two-dimensional array of colors in CSS notation (like <code>&#39;#ffffff&#39;</code> or
     <code>&#39;white&#39;</code>)
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setBackgrounds = function(color){};

/**
 * Sets the border property. Valid values are <code>true</code> (on), <code>false</code> (off) and
 <code>null</code> (no change).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 // Sets borders on the top and bottom, but leaves the left and right unchanged
 cell.setBorder(true, null, true, null, false, false);
 </code></pre>
 *
 * @param {Boolean} top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change
 * @param {Boolean} left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change
 * @param {Boolean} bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change
 * @param {Boolean} right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change
 * @param {Boolean} vertical - <code>true</code> for internal vertical borders, <code>false</code> for none,
     <code>null</code> for no change
 * @param {Boolean} horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none,
     <code>null</code> for no change
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setBorder = function(top, left, bottom, right, vertical, horizontal){};

/**
 * Sets one data-validation rule for all cells in the range.

 <pre class="prettyprint">
 // Set the data-validation rule for cell A1 to require a value from B1:B10.
 var cell = SpreadsheetApp.getActive().getRange('A1');
 var range = SpreadsheetApp.getActive().getRange('B1:B10');
 var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
 cell.setDataValidation(rule);
 </pre>
 *
 * @param {SpreadsheetApp.DataValidation} rule - the data-validation rule to set
 *
 * @return {SpreadsheetApp.Range} the range, for chaining
 */
SpreadsheetApp.Range.prototype.setDataValidation = function(rule){};

/**
 * Sets the data-validation rules for all cells in the range. This method takes a two-dimensional
 array of data validations, indexed by row then by column. The array dimensions must correspond
 to the range dimensions.

 <pre class="prettyprint"><code>
 // Set the data-validation rules for Sheet1!A1:B5 to require a value from Sheet2!A1:A10.
 var destinationRange = SpreadsheetApp.getActive().getSheetByName(&#39;Sheet1&#39;).getRange(&#39;A1:B5&#39;);
 var sourceRange = SpreadsheetApp.getActive().getSheetByName(&#39;Sheet2&#39;).getRange(&#39;A1:A10&#39;);
 var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange).build();
 var rules = destinationRange.getDataValidations();
 for (var i = 0; i &lt; rules.length; i++) {
   for (var j = 0; j &lt; rules[i].length; j++) {
     rules[i][j] = rule;
   }
 }
 destinationRange.setDataValidations(rules);
 </code></pre>
 *
 * @param {SpreadsheetApp.DataValidation[][]} rules - a two-dimensional array of data-validation rules to set
 *
 * @return {SpreadsheetApp.Range} the range, for chaining
 */
SpreadsheetApp.Range.prototype.setDataValidations = function(rules){};

/**
 * Sets the font color in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setFontColor(&quot;red&quot;);
 </code></pre>
 *
 * @param {String} color - the font color in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>)
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontColor = function(color){};

/**
 * Sets a rectangular grid of font colors (must match dimensions of this range). The colors are in
 CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var colors = [
   [&quot;red&quot;, &quot;white&quot;, &quot;blue&quot;],
   [&quot;#FF0000&quot;, &quot;#FFFFFF&quot;, &quot;#0000FF&quot;] // These are the hex equivalents
 ];

 var cell = sheet.getRange(&quot;B5:D6&quot;);
 cell.setFontColors(colors);
 </code></pre>
 *
 * @param {Object[][]} colors - a two-dimensional string array of background colors
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontColors = function(colors){};

/**
 * Sets a rectangular grid of font families (must match dimensions of this range).
 Examples of font families are "Arial" or "Helvetica".

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var fonts = [
   [&quot;Arial&quot;, &quot;Helvetica&quot;, &quot;Verdana&quot;],
   [&quot;Courier New&quot;, &quot;Arial&quot;, &quot;Helvetica] // These are the hex equivalents
 ];

 var cell = sheet.getRange(&quot;B2:D3&quot;);
 cell.setFontFamilies(fonts);
 </code></pre>
 *
 * @param {Object[][]} fontFamilies - a two-dimensional string array of font families
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontFamilies = function(fontFamilies){};

/**
 * Sets the font family, such as "Arial" or "Helvetica".

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setFontFamily(&quot;Helvetica&quot;);
 </code></pre>
 *
 * @param {String} fontFamily - the font family
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontFamily = function(fontFamily){};

/**
 * Sets the line style of the given range (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
 <code>&#39;none&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setFontLine(&quot;line-through&quot;);
 </code></pre>
 *
 * @param {String} fontLine - <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontLine = function(fontLine){};

/**
 * Sets a rectangular grid of line styles (must match dimensions of this range).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var fontLines = [
   [&quot;underline&quot;, &quot;line-through&quot;, &quot;none&quot;]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setFontLines(fontLines);
 </code></pre>
 *
 * @param {Object[][]} fontLines - a two-dimensional array of font line styles (<code>&#39;underline&#39;</code>,
     <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>)
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontLines = function(fontLines){};

/**
 * Sets the font size, with the size being the point size to use.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setFontSize(20);
 </code></pre>
 *
 * @param {number} size - a font size in point size
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontSize = function(size){};

/**
 * Sets a rectangular grid of font sizes (must match dimensions of this range).
 The sizes are in points.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var fontSizes = [
   [16, 20, 24]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setFontSizes(fontSizes);
 </code></pre>
 *
 * @param {Object[][]} sizes - a two-dimensional array of sizes
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontSizes = function(sizes){};

/**
 * Set the font style for the given range (<code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setFontStyle(&quot;italic&quot;);
 </code></pre>
 *
 * @param {String} fontStyle - either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontStyle = function(fontStyle){};

/**
 * Sets a rectangular grid of font styles (must match dimensions of this range).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var fontStyles = [
   [&quot;italic&quot;, &quot;normal&quot;]
 ];

 var range = sheet.getRange(&quot;B2:C2&quot;);
 range.setFontStyles(fontStyles);
 </code></pre>
 *
 * @param {Object[][]} fontStyles - a two-dimensional array of font styles, either <code>&#39;italic&#39;</code> or
     <code>&#39;normal&#39;</code>
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontStyles = function(fontStyles){};

/**
 * Set the font weight for the given range (normal/bold).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setFontWeight(&quot;bold&quot;);
 </code></pre>
 *
 * @param {String} fontWeight - the font weight - normal or bold
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontWeight = function(fontWeight){};

/**
 * Sets a rectangular grid of font weights (must match dimensions of this range).
 An example of a font weight is "bold".

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var fontStyles = [
   [ &quot;bold&quot;, &quot;bold&quot;, &quot;normal&quot; ]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setFontWeights(fontStyles);
 </code></pre>
 *
 * @param {Object[][]} fontWeights - a two-dimensional array of font weights
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFontWeights = function(fontWeights){};

/**
 * Updates the formula for this range. The given formula must be in A1 notation.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B5&quot;);
 cell.setFormula(&quot;=SUM(B3:B4)&quot;);
 </code></pre>
 *
 * @param {String} formula - a string representing the formula to set for the cell
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFormula = function(formula){};

/**
 * Updates the formula for this range. The given formula must be in R1C1 notation.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B5&quot;);
 // This sets the formula to be the sum of the 3 rows above B5
 cell.setFormulaR1C1(&quot;=SUM(R[-3]C[0]:R[-1]C[0])&quot;);
 </code></pre>
 *
 * @param {String} formula - a string formula
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFormulaR1C1 = function(formula){};

/**
 * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
 must be in A1 notation. This method takes a two-dimensional array of formulas, indexed by row,
 then by column. The array dimensions must correspond to the range dimensions.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This sets the formulas to be a row of sums, followed by a row of averages right below.
 // The size of the two-dimensional array must match the size of the range.
 var formulas = [
   [&quot;=SUM(B2:B4)&quot;, &quot;=SUM(C2:C4)&quot;, &quot;=SUM(D2:D4)&quot;],
   [&quot;=AVERAGE(B2:B4)&quot;, &quot;=AVERAGE(C2:C4)&quot;, &quot;=AVERAGE(D2:D4)&quot;]
 ];

 var cell = sheet.getRange(&quot;B5:D6&quot;);
 cell.setFormulas(formulas);
 </code></pre>
 *
 * @param {String[][]} formulas - a two-dimensional string array of formulas
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFormulas = function(formulas){};

/**
 * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
 must be in R1C1 notation.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This creates formulas for a row of sums, followed by a row of averages.
 var sumOfRowsAbove = &quot;=SUM(R[-3]C[0]:R[-1]C[0])&quot;;
 var averageOfRowsAbove = &quot;=AVERAGE(R[-4]C[0]:R[-2]C[0])&quot;;

 // The size of the two-dimensional array must match the size of the range.
 var formulas = [
   [sumOfRowsAbove, sumOfRowsAbove, sumOfRowsAbove],
   [averageOfRowsAbove, averageOfRowsAbove, averageOfRowsAbove]
 ];

 var cell = sheet.getRange(&quot;B5:D6&quot;);
 // This sets the formula to be the sum of the 3 rows above B5.
 cell.setFormulasR1C1(formulas);
 </code></pre>
 *
 * @param {String[][]} formulas - a two-dimensional array of formulas in R1C1 format
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setFormulasR1C1 = function(formulas){};

/**
 * Set the horizontal (left to right) alignment for the given range (left/center/right).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setHorizontalAlignment(&quot;center&quot;);
 </code></pre>
 *
 * @param {String} alignment - the alignment - left, center or right
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setHorizontalAlignment = function(alignment){};

/**
 * Sets a rectangular grid of horizontal alignments.
 see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#setHorizontalAlignment(String)'>setHorizontalAlignment(alignment)</a></code>

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var horizontalAlignments = [
   [ &quot;left&quot;, &quot;right&quot;, &quot;center&quot; ]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setHorizontalAlignments(horizontalAlignments);
 </code></pre>
 *
 * @param {Object[][]} alignments - a two-dimensional array of alignments
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setHorizontalAlignments = function(alignments){};

/**
 * Sets the note to the given value.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setNote(&quot;This is a note&quot;);
 </code></pre>
 *
 * @param {String} note - the note value to set for the range
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setNote = function(note){};

/**
 * Sets a rectangular grid of notes (must match dimensions of this range).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var notes = [
   [&quot;it goes&quot;, &quot;like this&quot;, &quot;the fourth, the fifth&quot;],
   [&quot;the minor fall&quot;, &quot;and the&quot;, &quot;major lift&quot;]
 ];

 var cell = sheet.getRange(&quot;B2:D3&quot;);
 cell.setNotes(notes)
 </code></pre>
 *
 * @param {Object[][]} notes - a two-dimensional array of notes
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setNotes = function(notes){};

/**
 * Sets the number or date format to the given formatting string. Date formats follow the
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html">java.text.SimpleDateFormat</a></code> specification.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 // Always show 3 decimal points
 cell.setNumberFormat(&quot;0.000&quot;);
 </code></pre>
 *
 * @param {String} numberFormat - a number format string
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setNumberFormat = function(numberFormat){};

/**
 * Sets a rectangular grid of number or date formats (must match dimensions of this range). The
 values are formatting strings, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#setNumberFormat(String)'>setNumberFormat(numberFormat)</a></code>. Date formats follow the
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html">java.text.SimpleDateFormat</a></code> specification.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var formats = [
   [ &quot;0.000&quot;, &quot;0,000,000&quot;, &quot;$0.00&quot; ]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setNumberFormats(formats);
 </code></pre>
 *
 * @param {Object[][]} numberFormats - a two-dimensional array of number formats
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setNumberFormats = function(numberFormats){};

/**
 * Sets the value of the range. The value can be numeric, string,
 boolean or date.  If it begins with '=' it is interpreted
 as a formula.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setValue(100);
 </code></pre>
 *
 * @param {Object} value - the value for the range
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setValue = function(value){};

/**
 * Sets a rectangular grid of values (must match dimensions of this range).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var values = [
   [ &quot;2.000&quot;, &quot;1,000,000&quot;, &quot;$2.99&quot; ]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setValues(values);
 </code></pre>
 *
 * @param {Object[][]} values - a two-dimensional array of values
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setValues = function(values){};

/**
 * Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setVerticalAlignment(&quot;middle&quot;);
 </code></pre>
 *
 * @param {String} alignment - the alignment - top, middle or bottom
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setVerticalAlignment = function(alignment){};

/**
 * Sets a rectangular grid of vertical alignments (must match dimensions of this range).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var alignments = [
   [ &quot;top&quot;, &quot;middle&quot;, &quot;bottom&quot; ]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setVerticalAlignments(alignments);
 </code></pre>
 *
 * @param {Object[][]} alignments - a two-dimensional array of alignments
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setVerticalAlignments = function(alignments){};

/**
 * Set the cell wrap of the given range.

 Cells with wrap enabled (the default) will resize to display their full content. Cells with
 wrap disabled will display as much as possible in the cell without resizing or running to
 multiple lines.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var cell = sheet.getRange(&quot;B2&quot;);
 cell.setWrap(true);
 </code></pre>
 *
 * @param {Boolean} isWrapEnabled - whether to wrap text or not
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setWrap = function(isWrapEnabled){};

/**
 * Sets a rectangular grid of word wrap policies (must match dimensions of this range). Cells with
 wrap enabled (the default) will resize to display their full content. Cells with wrap disabled
 will display as much as possible in the cell without resizing or running to multiple lines.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var wraps = [
   [ true, true, false ]
 ];

 var range = sheet.getRange(&quot;B2:D2&quot;);
 range.setWraps(wraps);
 </code></pre>
 *
 * @param {Object[][]} isWrapEnabled - a two-dimensional array of whether to wrap text in a cell or not
 *
 * @return {SpreadsheetApp.Range} the range for chaining
 */
SpreadsheetApp.Range.prototype.setWraps = function(isWrapEnabled){};

/**
 * Sorts the cells in the given range.

 Sorts the cells in a given range, by column and order specified.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(&quot;A1:C7&quot;);

 // Sorts by the values in the first column (A)
 range.sort(1);

 // Sorts by the values in the second column (B)
 range.sort(2);

 // Sorts descending by column B
 range.sort({column: 2, ascending: false});

 // Sorts descending by column B, then ascending by column A
 // Note the use of an array
 range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}]);

 // For rows that are sorted in ascending order, the &quot;ascending&quot; parameter is
 // optional, and just an integer with the column can be used instead. Note that
 // in general, keeping the sort specification consistent results in more readable
 // code. We could have expressed the earlier sort as:
 range.sort([{column: 2, ascending: false}, 1]);

 // Alternatively, if we wanted all columns to be in ascending order, we would use
 // the following (this would make column 2 ascending)
 range.sort([2, 1]);
 // ... which is equivalent to
 range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);
 </code></pre>
 *
 * @param {Object} sortSpecObj - the column(s) to sort by, see example code
 *
 * @return {SpreadsheetApp.Range} the range, for chaining
 */
SpreadsheetApp.Range.prototype.sort = function(sortSpecObj){};

/** @constructor */
SpreadsheetApp.Sheet = function(){};

/**
 * Activates this sheet. Does not alter the sheet itself, only
 the parent's notion of the active sheet.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.activate();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the newly active sheet
 */
SpreadsheetApp.Sheet.prototype.activate = function(){};

/**
 * Appends a row to the spreadsheet.  This operation is atomic; it prevents issues where
 a user asks for the last row, and then writes to that row, and an intervening mutation
 occurs between getting the last row and writing to it.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Appends a new row with 3 columns to the bottom of the
 // spreadsheet containing the values in the array
 sheet.appendRow([&quot;a man&quot;, &quot;a plan&quot;, &quot;panama&quot;]);
 </code></pre>
 *
 * @param {Object[]} rowContents - an array of values to insert after the last row in the sheet
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.appendRow = function(rowContents){};

/**
 * Sets the width of the given column to fit its contents

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 sheet.getRange(&#39;a1&#39;).setValue(&#39;Whenever it is a damp, drizzly November in my soul...&#39;);

 // Sets the first column to a width which fits the text
 sheet.autoResizeColumn(1);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the given column to resize
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.autoResizeColumn = function(columnPosition){};

/**
 * Clears the sheet of content and formatting information.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.clear();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the cleared sheet
 */
SpreadsheetApp.Sheet.prototype.clear = function(){};

/**
 * Clears the sheet of contents, while preserving formatting information.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.clearContents();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the sheet for chaining
 */
SpreadsheetApp.Sheet.prototype.clearContents = function(){};

/**
 * Clears the sheet of formatting, while preserving contents.

 Formatting refers to how data is formatted as allowed by choices under the "Format" menu
 (ex: bold, italics, conditional formatting) and not width or height of cells.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.clearFormats();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the sheet for chaining
 */
SpreadsheetApp.Sheet.prototype.clearFormats = function(){};

/**
 * Clears the sheet of all notes.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.clearNotes();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the sheet for chaining
 */
SpreadsheetApp.Sheet.prototype.clearNotes = function(){};

/**
 * Copies the sheet to a given spreadsheet, which can be the same spreadsheet
 as the source. The copied sheet will be named "Copy of [original name]".

 <pre class="prettyprint">
 <code>
 var source = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = source.getSheets()[0];

 var destination = SpreadsheetApp.openById(&#39;ID_GOES HERE&#39;);
 sheet.copyTo(destination);
 </code></pre>
 *
 * @param {SpreadsheetApp.Spreadsheet} spreadsheet - the spreadsheet to copy this sheet to, which can be the
     same spreadsheet as the source
 *
 * @return {SpreadsheetApp.Sheet} the new sheet for chaining
 */
SpreadsheetApp.Sheet.prototype.copyTo = function(spreadsheet){};

/**
 * Deletes the column at the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Columns start at &quot;1&quot; - this will delete the first column
 sheet.deleteColumn(1);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the column, starting at 1 for the first column
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.deleteColumn = function(columnPosition){};

/**
 * Deletes a number of columns starting at the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Columns start at &quot;1&quot; - this will delete the first two columns
 sheet.deleteColumns(1, 2);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the first column to delete
 * @param {number} howMany - the number of columns to delete
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.deleteColumns = function(columnPosition, howMany){};

/**
 * Deletes the row at the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Rows start at &quot;1&quot; - this will delete the first row
 sheet.deleteRow(1);
 </code></pre>
 *
 * @param {number} rowPosition - the position of the row, starting at 1 for the first row
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.deleteRow = function(rowPosition){};

/**
 * Deletes a number of rows starting at the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Rows start at &quot;1&quot; - this will delete the first two rows
 sheet.deleteRows(1, 2);
 </code></pre>
 *
 * @param {number} rowPosition - the position of the first row to delete
 * @param {number} howMany - the number of rows to delete
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.deleteRows = function(rowPosition, howMany){};

/**
 * Returns the active cell in this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Returns the active cell
 var cell = sheet.getActiveCell();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the current active cell
 */
SpreadsheetApp.Sheet.prototype.getActiveCell = function(){};

/**
 * Returns the active range for the active sheet.

 Returns the range of cells that is currently considered active. This generally means the
 range that a user has selected in the active sheet, but in a custom function it refers to
 the cell being actively recalculated.

 Note that when called on a SpreadsheetApp it effectively calls getActiveSpreadsheet and
 then getActiveSheet to act on the active Sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Returns the active range
 var range = sheet.getActiveRange();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the active range
 */
SpreadsheetApp.Sheet.prototype.getActiveRange = function(){};

/**
 * Returns an array of charts on this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var charts = sheet.getCharts();

 for (var i in charts) {
   var chart = charts[i];
   // Do something with the chart
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.EmbeddedChart[]} an array of charts
 */
SpreadsheetApp.Sheet.prototype.getCharts = function(){};

/**
 * Gets the width in pixels of the given column.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Columns start at 1
 Logger.log(sheet.getColumnWidth(1));
 </code></pre>
 *
 * @param {number} columnPosition - the position of the column to examine
 *
 * @return {number} column width in pixels
 */
SpreadsheetApp.Sheet.prototype.getColumnWidth = function(columnPosition){};

/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> corresponding to the dimensions in which data is present.

 This is functionally equivalent to creating a Range bounded by A1 and
 (Range.getLastColumn(), Range.getLastRow()).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This represents ALL the data
 var range = sheet.getDataRange();
 var values = range.getValues();

 // This logs the spreadsheet in CSV format with a trailing comma
 for (var i = 0; i &lt; values.length; i++) {
   var row = &quot;&quot;;
   for (var j = 0; j &lt; values[i].length; j++) {
     if (values[i][j]) {
       row = row + values[i][j];
     }
     row = row + &quot;,&quot;;
   }
   Logger.log(row);
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} a range consisting of all the data in the spreadsheet
 */
SpreadsheetApp.Sheet.prototype.getDataRange = function(){};

/**
 * Returns the number of frozen columns.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(&quot;Number of frozen columns: %s&quot;, sheet.getFrozenColumns());
 </code></pre>
 *
 * @return {number} the number of frozen columns
 */
SpreadsheetApp.Sheet.prototype.getFrozenColumns = function(){};

/**
 * Returns the number of frozen rows.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(&quot;Number of frozen rows: %s&quot;, sheet.getFrozenRows());
 </code></pre>
 *
 * @return {number} the number of frozen rows
 */
SpreadsheetApp.Sheet.prototype.getFrozenRows = function(){};

/**
 * Gets the position of the sheet in its parent spreadsheet. Starts at 1.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 // Note that the JavaScript index is 0, but this will log 1
 var sheet = ss.getSheets()[0];
 // ... because spreadsheets are 1-indexed
 Logger.log(sheet.getIndex());
 </code></pre>
 *
 * @return {number} the position of the sheet in its parent spreadsheet
 */
SpreadsheetApp.Sheet.prototype.getIndex = function(){};

/**
 * Returns the position of the last column that has content.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This logs the value in the very last cell of this sheet
 var lastRow = sheet.getLastRow();
 var lastColumn = sheet.getLastColumn();
 var lastCell = sheet.getRange(lastRow, lastColumn);
 Logger.log(lastCell.getValue());
 </code></pre>
 *
 * @return {number} the last column of the sheet that contains content
 */
SpreadsheetApp.Sheet.prototype.getLastColumn = function(){};

/**
 * Returns the position of the last row that has content.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This logs the value in the very last cell of this sheet
 var lastRow = sheet.getLastRow();
 var lastColumn = sheet.getLastColumn();
 var lastCell = sheet.getRange(lastRow, lastColumn);
 Logger.log(lastCell.getValue());
 </code></pre>
 *
 * @return {number} the last row of the sheet that contains content
 */
SpreadsheetApp.Sheet.prototype.getLastRow = function(){};

/**
 * The maximum width of the sheet, regardless of content.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 Logger.log(first.getMaxColumns());
 </code></pre>
 *
 * @return {number} the maximum width of the sheet
 */
SpreadsheetApp.Sheet.prototype.getMaxColumns = function(){};

/**
 * The maximum height of the sheet, regardless of content.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 Logger.log(first.getMaxRows());
 </code></pre>
 *
 * @return {number} the maximum height of the sheet
 */
SpreadsheetApp.Sheet.prototype.getMaxRows = function(){};

/**
 * Returns the name of the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 Logger.log(sheet.getName());
 </code></pre>
 *
 * @return {String} the name of the sheet
 */
SpreadsheetApp.Sheet.prototype.getName = function(){};

/**
 * Gets all the named ranges in this sheet.

 <pre class="prettyprint">
 <code>
 // The code below will log the name of the first named range.
 var namedRanges = SpreadsheetApp.getActiveSheet().getNamedRanges();
 if (namedRanges.length &gt; 1) {
   Logger.log(namedRanges[0].getName());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.NamedRange[]} an array of all the named ranges in the sheet
 */
SpreadsheetApp.Sheet.prototype.getNamedRanges = function(){};

/**
 * Returns the Spreadsheet that contains this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // parent is identical to ss
 var parent = sheet.getParent();
 </code></pre>
 *
 * @return {SpreadsheetApp.Spreadsheet} the parent spreadsheet
 */
SpreadsheetApp.Sheet.prototype.getParent = function(){};

/**
 * Gets an array of objects representing all protected ranges in the sheet, or a single-element
 array representing the protection on the sheet itself.

 <pre class="prettyprint">
 <code>
 // Remove all range protections in the spreadsheet that the user has permission to edit.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 for (var i = 0; i &lt; protections.length; i++) {
   var protection = protections[i];
   if (protection.canEdit()) {
     protection.remove();
   }
 }
 </code></pre>

 <pre class="prettyprint">
 <code>
 // Remove sheet protection from the active sheet, if the user has permission to edit it.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
 if (protection &amp;&amp; protection.canEdit()) {
   protection.remove();
 }
 </code></pre>
 *
 * @param {SpreadsheetApp.ProtectionType} type - the type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
     <code>SpreadsheetApp.ProtectionType.SHEET</code>
 *
 * @return {SpreadsheetApp.Protection[]} an array of objects representing all protected ranges in the sheet, or a single-element
     array representing the protection on the sheet itself
 */
SpreadsheetApp.Sheet.prototype.getProtections = function(type){};

/**
 * Returns the range with the top left cell at the given coordinates.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Passing only two arguments returns a &quot;range&quot; with a single cell.
 var range = sheet.getRange(1, 1);
 var values = range.getValues();
 Logger.log(values[0][0]);
 </code></pre>
 *
 * @param {number} row - the row of the cell to return
 * @param {number} column - the column of the cell to return
 *
 * @return {SpreadsheetApp.Range} a Range containing only this cell
 */
SpreadsheetApp.Sheet.prototype.getRange = function(row, column){};

/**
 * Returns the range with the top left cell at the given coordinates, and with the given
 number of rows.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // When the &quot;numRows&quot; argument is used, only a single column of data is returned.
 var range = sheet.getRange(1, 1, 3);
 var values = range.getValues();

 // Prints 3 values from the first column, starting from row 1.
 for (var row in values) {
   for (var col in values[row]) {
     Logger.log(values[row][col]);
   }
 }
 </code></pre>
 *
 * @param {number} row - the starting row of the range
 * @param {number} column - the column of the range
 * @param {number} numRows - the number of rows to return
 *
 * @return {SpreadsheetApp.Range} a Range containing a single column of data with the number of rows specified
 */
SpreadsheetApp.Sheet.prototype.getRange = function(row, column, numRows){};

/**
 * Returns the range with the top left cell at the given coordinates with the given
 number of rows and columns.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 var range = sheet.getRange(1, 1, 3, 3);
 var values = range.getValues();

 // Print values from a 3x3 box.
 for (var row in values) {
   for (var col in values[row]) {
     Logger.log(values[row][col]);
   }
 }
 </code></pre>
 *
 * @param {number} row - the starting row of the range
 * @param {number} column - the starting column of the range
 * @param {number} numRows - the number of rows to return
 * @param {number} numColumns - the number of columns to return
 *
 * @return {SpreadsheetApp.Range} a Range corresponding to the area specified
 */
SpreadsheetApp.Sheet.prototype.getRange = function(row, column, numRows, numColumns){};

/**
 * Gets the height in pixels of the given row.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Rows start at 1
 Logger.log(sheet.getRowHeight(1));
 </code></pre>
 *
 * @param {number} rowPosition - the *position* of the row to examine
 *
 * @return {number} row height in pixels
 */
SpreadsheetApp.Sheet.prototype.getRowHeight = function(rowPosition){};

/**
 * Returns the ID of the sheet represented by this object.

 This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
 increasing integer assigned at sheet creation time that is independent of sheet position.
 This is useful in conjunction with methods such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)'>Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)</a></code> that take a <code>gridId</code>
 parameter rather than a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> instance.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(sheet.getSheetId());
 </code></pre>
 *
 * @return {number} an ID for the sheet unique to the spreadsheet
 */
SpreadsheetApp.Sheet.prototype.getSheetId = function(){};

/**
 * Returns the sheet name.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(sheet.getSheetName());
 </code></pre>
 *
 * @return {String} the name of the sheet
 */
SpreadsheetApp.Sheet.prototype.getSheetName = function(){};

/**
 * Returns a <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html'>PageProtection</a></s></code> instance describing the permissions for the current sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var permissions = sheet.getSheetProtection();

 permissions.setProtected(true);
 permissions.addUser(&quot;user@example.com&quot;);

 // Logs the users that have access to edit this sheet. Note that this
 // is different from access to the entire spreadsheet - getUsers() will
 // only return users if permissions.isProtected() is set to true.
 var users = permissions.getUsers();
 Logger.log(users);
 </code></pre>
 *
 * @return {SpreadsheetApp.PageProtection} an object describing sheet access permissions
 */
SpreadsheetApp.Sheet.prototype.getSheetProtection = function(){};

/**
 * Returns the rectangular grid of values for this range starting at the given
 coordinates. A -1 value given as the row or column position is equivalent to getting the
 very last row or column that has data in the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The two samples below produce the same output
 var values = sheet.getSheetValues(1, 1, 3, 3);
 Logger.log(values);

 var range = sheet.getRange(1, 1, 3, 3);
 values = range.getValues();
 Logger.log(values);
 </code></pre>
 *
 * @param {number} startRow - the position of the starting row
 * @param {number} startColumn - the position of the starting column
 * @param {number} numRows - the number of rows to return values for
 * @param {number} numColumns - the number of columns to return values for
 *
 * @return {Object[][]} a two dimension array of values
 */
SpreadsheetApp.Sheet.prototype.getSheetValues = function(startRow, startColumn, numRows, numColumns){};

/**
 * Gets the sheet tab color, or null if the sheet tab has no color.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 var color = first.getTabColor();
 </code></pre>
 *
 * @return {String} color code in CSS notation (like <code>&#39;#ffffff&#39;</code>)
 */
SpreadsheetApp.Sheet.prototype.getTabColor = function(){};

/**
 * Hides the columns in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This hides the first column
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.hideColumn(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} column - the column range to hide
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.hideColumn = function(column){};

/**
 * Hides the column at the given index.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Hides the first column
 sheet.hideColumns(1);
 </code></pre>
 *
 * @param {number} columnIndex - the index of the column to hide
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.hideColumns = function(columnIndex){};

/**
 * Hides the rows in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This hides the first row
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.hideRow(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} row - the row range to hide
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.hideRow = function(row){};

/**
 * Hides the row at the given index.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Hides the first row
 sheet.hideRows(1);
 </code></pre>
 *
 * @param {number} rowIndex - the index of the row to hide
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.hideRows = function(rowIndex){};

/**
 * Hides this sheet.  Has no effect if the sheet is already hidden.  If this method is called
 on the only visible sheet, it will throw an exception.

 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActiveSheet();
 sheet.hideSheet();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the current sheet
 */
SpreadsheetApp.Sheet.prototype.hideSheet = function(){};

/**
 * Adds a new chart to this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This creates a simple bar chart from the first three rows
 // of the first two columns of the spreadsheet
 var chart = sheet.newChart()
     .setChartType(Charts.ChartType.BAR)
     .addRange(sheet.getRange(&quot;A1:B4&quot;))
     .setPosition(5, 5, 0, 0)
     .setOption(&quot;title&quot;, &quot;Dynamic Chart&quot;)
     .build();
 sheet.insertChart(chart);
 </code></pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} chart - the chart to insert
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.insertChart = function(chart){};

/**
 * Inserts a column after the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a column after the first column position
 sheet.insertColumnAfter(1);
 </code></pre>
 *
 * @param {number} afterPosition - the column after which the new column should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertColumnAfter = function(afterPosition){};

/**
 * Inserts a column before the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a column in the first column position
 sheet.insertColumnBefore(1);
 </code></pre>
 *
 * @param {number} beforePosition - the column before which the new column should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertColumnBefore = function(beforePosition){};

/**
 * Inserts a blank column in a sheet at the specified location.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Shifts all columns by one
 sheet.insertColumns(1);
 </code></pre>
 *
 * @param {number} columnIndex - the index to insert a column
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.insertColumns = function(columnIndex){};

/**
 * Inserts a number of columns after the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a column in the second column position
 sheet.insertColumnsAfter(1);
 </code></pre>
 *
 * @param {number} afterPosition - the column after which the new column should be added
 * @param {number} howMany - the number of columns to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertColumnsAfter = function(afterPosition, howMany){};

/**
 * Inserts a number of columns before the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts five columns before the first column
 sheet.insertColumnsBefore(1, 5);
 </code></pre>
 *
 * @param {number} beforePosition - the column before which the new column should be added
 * @param {number} howMany - the number of columns to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertColumnsBefore = function(beforePosition, howMany){};

/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob.html'>Blob</a></code> as an image in the document at a given row and column. The image size
 is retrieved from the blob contents.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 sheet.insertImage(blob, 1, 1);
 </code></pre>
 *
 * @param {Blob} blob - blob containing the image contents, MIME type and, optionally, a name
 * @param {number} column - the column position
 * @param {number} row - the row position
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.insertImage = function(blob, column, row){};

/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob.html'>Blob</a></code> as an image in the document at a given row and column, with a pixel
 offset. The image size is retrieved from the blob contents.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 sheet.insertImage(blob, 1, 1, 10, 10);
 </code></pre>
 *
 * @param {Blob} blob - blob containing the image contents, MIME type and, optionally, a name
 * @param {number} column - the column position
 * @param {number} row - the row position
 * @param {number} offsetX - horizontal offset from cell corner in pixels
 * @param {number} offsetY - vertical offset from cell corner in pixels
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.insertImage = function(blob, column, row, offsetX, offsetY){};

/**
 * Inserts an image in the document at a given row and column.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1);
 </code></pre>
 *
 * @param {String} url - the url of the image
 * @param {number} column - the grid column position
 * @param {number} row - the grid row position
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.insertImage = function(url, column, row){};

/**
 * Inserts a row after the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a row after the first row position
 sheet.insertRowAfter(1);
 </code></pre>
 *
 * @param {number} afterPosition - the row after which the new row should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertRowAfter = function(afterPosition){};

/**
 * Inserts a row before the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a row before the first row position
 sheet.insertRowBefore(1);
 </code></pre>
 *
 * @param {number} beforePosition - the row before which the new row should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertRowBefore = function(beforePosition){};

/**
 * Inserts a blank row in a sheet at the specified location.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Shifts all rows down by one
 sheet.insertRows(1);
 </code></pre>
 *
 * @param {number} rowIndex - the index to insert a row
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.insertRows = function(rowIndex){};

/**
 * Inserts a number of rows after the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts five rows after the first row
 sheet.insertRowsAfter(1, 5);
 </code></pre>
 *
 * @param {number} afterPosition - the row after which the new rows should be added
 * @param {number} howMany - the number of rows to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertRowsAfter = function(afterPosition, howMany){};

/**
 * Inserts a number of rows before the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts five rows before the first row
 sheet.insertRowsBefore(1, 5);
 </code></pre>
 *
 * @param {number} beforePosition - the row before which the new rows should be added
 * @param {number} howMany - the number of rows to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.insertRowsBefore = function(beforePosition, howMany){};

/**
 * Returns true if the sheet is currently hidden.

 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActiveSheet();
 if (sheet.isSheetHidden()) {
   // do something...
 }
 </code></pre>
 *
 * @return {Boolean} true if the sheet is hidden, false otherwise
 */
SpreadsheetApp.Sheet.prototype.isSheetHidden = function(){};

/**
 * Returns a builder to create a new chart for this sheet.

 <p>This example shows how to create a new chart:
 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActiveSheet();
 var range = sheet.getRange(&quot;A1:B8&quot;);
 var chartBuilder = sheet.newChart();
 chartBuilder.addRange(range)
     .setChartType(Charts.ChartType.LINE)
     .setPosition(2, 2, 0, 0)
     .setOption(&#39;title&#39;, &#39;My Line Chart!&#39;);
 sheet.insertChart(chartBuilder.build());
 </code></pre></p>
 *
 * @return {SpreadsheetApp.EmbeddedChartBuilder} a builder for create a new chart
 */
SpreadsheetApp.Sheet.prototype.newChart = function(){};

/**
 * Creates an object that can protect the sheet from being edited except by users who have
 permission. Until the script actually changes the list of editors for the sheet (by calling
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)'>Protection.removeEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)'>Protection.removeEditor(user)</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)'>Protection.removeEditors(emailAddresses)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)'>Protection.addEditor(emailAddress)</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)'>Protection.addEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)'>Protection.addEditors(emailAddresses)</a></code>, or
 setting a new value for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean)'>Protection.setDomainEdit(editable)</a></code>), the permissions will
 mirror those of the spreadsheet itself, which effectively means that the sheet remains
 unprotected. If the sheet is already protected, this method returns an object representing its
 existing protection settings. A protected sheet may include unprotected regions.

 <pre class="prettyprint">
 <code>
 // Protect the active sheet, then remove all other users from the list of editors.
 var sheet = SpreadsheetApp.getActiveSheet();
 var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);

 // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 // permission comes from a group, the script will throw an exception upon removing the group.
 var me = Session.getEffectiveUser();
 protection.addEditor(me);
 protection.removeEditors(protection.getEditors());
 if (protection.canDomainEdit()) {
   protection.setDomainEdit(false);
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Protection} an object representing the protection settings
 */
SpreadsheetApp.Sheet.prototype.protect = function(){};

/**
 * Removes a chart from the parent sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This removes all the embedded charts from the spreadsheet
 var charts = sheet.getCharts();
 for (var i in charts) {
   sheet.removeChart(charts[i]);
 }
 </code></pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} chart - the chart to remove
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.removeChart = function(chart){};

/**
 * Sets the active range for the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D4&quot;);
 sheet.setActiveRange(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to set as the active range
 *
 * @return {SpreadsheetApp.Range} the newly active range
 */
SpreadsheetApp.Sheet.prototype.setActiveRange = function(range){};

/**
 * Sets the active selection region for this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D4&quot;);
 sheet.setActiveSelection(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to set as the active selection
 *
 * @return {SpreadsheetApp.Range} the newly active range
 */
SpreadsheetApp.Sheet.prototype.setActiveSelection = function(range){};

/**
 * Sets the width of the given column in pixels.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Sets the first column to a width of 200 pixels
 sheet.setColumnWidth(1, 200);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the given column to set
 * @param {number} width - the width in pixels to set it to
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.setColumnWidth = function(columnPosition, width){};

/**
 * Freezes the given number of columns. If zero, no columns are frozen.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Freezes the first column
 sheet.setFrozenColumns(1);
 </code></pre>
 *
 * @param {number} columns - the number of columns to freeze
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.setFrozenColumns = function(columns){};

/**
 * Freezes the given number of rows. If zero, no rows are frozen.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Freezes the first row
 sheet.setFrozenRows(1);
 </code></pre>
 *
 * @param {number} rows - the number of rows to freeze
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.setFrozenRows = function(rows){};

/**
 * Sets the sheet name.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.setName(&quot;not first anymore&quot;);
 </code></pre>
 *
 * @param {String} name - the new name for the sheet
 *
 * @return {SpreadsheetApp.Sheet} the sheet for chaining
 */
SpreadsheetApp.Sheet.prototype.setName = function(name){};

/**
 * Sets the row height of the given row in pixels.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Sets the first row to a height of 200 pixels
 sheet.setRowHeight(1, 200);
 </code></pre>
 *
 * @param {number} rowPosition - the row position to change
 * @param {number} height - height in pixels to set it to
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.setRowHeight = function(rowPosition, height){};

/**
 * Sets the permissions for the current sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var permissions = sheet.getSheetProtection();

 // This copies the permissions on the first sheet to the second sheet
 var sheetToClonePermissionsTo = ss.getSheets()[1];
 sheetToClonePermissionsTo.setSheetProtection(permissions);
 </code></pre>
 *
 * @param {SpreadsheetApp.PageProtection} permissions - the access permissions object to set on this sheet
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.setSheetProtection = function(permissions){};

/**
 * Sets the sheet tab color.

 <pre class="prettyprint">
 <code>
 // This example assumes there is a sheet named &quot;first&quot;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var first = ss.getSheetByName(&quot;first&quot;);
 first.setTabColor(&quot;ff0000&quot;); // Set the color to red.
 first.setTabColor(null); // Unset the color.
 </code></pre>
 *
 * @param {String} color - color code in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>)
 *
 * @return {SpreadsheetApp.Sheet} the sheet for chaining
 */
SpreadsheetApp.Sheet.prototype.setTabColor = function(color){};

/**
 * Unhides the column at the given index.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Unhides the first column
 sheet.showColumns(1);
 </code></pre>
 *
 * @param {number} columnIndex - the index of the column to unhide
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.showColumns = function(columnIndex){};

/**
 * Unhides the row at the given index.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Unhides the first row
 sheet.showRows(1);
 </code></pre>
 *
 * @param {number} rowIndex - the index of the row to unhide
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.showRows = function(rowIndex){};

/**
 * Makes the sheet visible.  Has no effect if the sheet is already visible.

 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActiveSheet();
 sheet.showSheet();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the current sheet
 */
SpreadsheetApp.Sheet.prototype.showSheet = function(){};

/**
 * Sorts a sheet by column, ascending.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Sorts the sheet by the first column, ascending
 sheet.sort(1);
 </code></pre>
 *
 * @param {number} columnPosition - the column to sort by
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Sheet.prototype.sort = function(columnPosition){};

/**
 * Unhides the column in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This unhides the first column if it was previously hidden
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.unhideColumn(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} column - the range to unhide, if hidden
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.unhideColumn = function(column){};

/**
 * Unhides the row in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This unhides the first row if it was previously hidden
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.unhideRow(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} row - the range to unhide, if hidden
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.unhideRow = function(row){};

/**
 * Updates the chart on this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This code is going to loop through all the charts and change them to
 // column charts
 var charts = sheet.getCharts();
 for (var i in charts) {
   var chart = charts[i];
   var newChart = chart
       .modify()
       .setChartType(Charts.ChartType.COLUMN)
       .build();
   sheet.updateChart(newChart);
 }
 </code></pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} chart - the chart to update
 *
 * @return void
 */
SpreadsheetApp.Sheet.prototype.updateChart = function(chart){};

/** @constructor */
SpreadsheetApp.Spreadsheet = function(){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SpreadsheetApp.Spreadsheet} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SpreadsheetApp.Spreadsheet} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.addEditors = function(emailAddresses){};

/**
 * Creates a new menu in the Spreadsheet UI.

 Each menu entry runs a user-defined function. Usually, you will want to call it from
 the onOpen function so that the menu is automatically created when the Spreadsheet is loaded.

 <pre class="prettyprint">
 <code>
 // The onOpen function is executed automatically every time a Spreadsheet is loaded
 function onOpen() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var menuEntries = [];
   // When the user clicks on &quot;addMenuExample&quot; then &quot;Menu Entry 1&quot;, the function function1 is
   // executed.
   menuEntries.push({name: &quot;Menu Entry 1&quot;, functionName: &quot;function1&quot;});
   menuEntries.push(null); // line separator
   menuEntries.push({name: &quot;Menu Entry 2&quot;, functionName: &quot;function2&quot;});

   ss.addMenu(&quot;addMenuExample&quot;, menuEntries);
 }
 </code></pre>
 *
 * @param {String} name - the name of the menu to be created
 * @param {Object[]} subMenus - an array of JavaScript maps with <code>name</code> and
        <code>functionName</code> parameters
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.addMenu = function(name, subMenus){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SpreadsheetApp.Spreadsheet} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.addViewer = function(emailAddress){};

/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If any of the
 users were already on the list of editors, this method has no effect for them.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SpreadsheetApp.Spreadsheet} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.addViewers = function(emailAddresses){};

/**
 * Appends a row to the spreadsheet.  This operation is atomic; it prevents issues where
 a user asks for the last row, and then writes to that row, and an intervening mutation
 occurs between getting the last row and writing to it.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Appends a new row with 3 columns to the bottom of the
 // spreadsheet containing the values in the array
 sheet.appendRow([&quot;a man&quot;, &quot;a plan&quot;, &quot;panama&quot;]);
 </code></pre>
 *
 * @param {Object[]} rowContents - an array of values to insert after the last row in the sheet
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.appendRow = function(rowContents){};

/**
 * Sets the width of the given column to fit its contents

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 sheet.getRange(&#39;a1&#39;).setValue(&#39;Whenever it is a damp, drizzly November in my soul...&#39;);

 // Sets the first column to a width which fits the text
 sheet.autoResizeColumn(1);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the given column to resize
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.autoResizeColumn = function(columnPosition){};

/**
 * Copies the spreadsheet and returns the new one.

 <pre class="prettyprint">
 <code>
 // This code makes a copy of the current spreadsheet and names it appropriately
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.copy(&quot;Copy of &quot; + ss.getName());
 </code></pre>
 *
 * @param {String} name - 
 *
 * @return {SpreadsheetApp.Spreadsheet} the spreadsheet for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.copy = function(name){};

/**
 * Deletes the currently active sheet.

 <pre class="prettyprint">
 <code>
 // The code below deletes the currently active sheet and stores the new active sheet in a
 // variable
 var newSheet = SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the new active sheet
 */
SpreadsheetApp.Spreadsheet.prototype.deleteActiveSheet = function(){};

/**
 * Deletes the column at the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Columns start at &quot;1&quot; - this will delete the first column
 sheet.deleteColumn(1);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the column, starting at 1 for the first column
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.deleteColumn = function(columnPosition){};

/**
 * Deletes a number of columns starting at the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Columns start at &quot;1&quot; - this will delete the first two columns
 sheet.deleteColumns(1, 2);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the first column to delete
 * @param {number} howMany - the number of columns to delete
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.deleteColumns = function(columnPosition, howMany){};

/**
 * Deletes the row at the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Rows start at &quot;1&quot; - this will delete the first row
 sheet.deleteRow(1);
 </code></pre>
 *
 * @param {number} rowPosition - the position of the row, starting at 1 for the first row
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.deleteRow = function(rowPosition){};

/**
 * Deletes a number of rows starting at the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Rows start at &quot;1&quot; - this will delete the first two rows
 sheet.deleteRows(1, 2);
 </code></pre>
 *
 * @param {number} rowPosition - the position of the first row to delete
 * @param {number} howMany - the number of rows to delete
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.deleteRows = function(rowPosition, howMany){};

/**
 * Deletes the specified sheet.

 <pre class="prettyprint">
 <code>
 // The code below deletes the specified sheet.
 var ss = SpreadsheetApp.getActive();
 var sheet = ss.getSheetByName(&#39;My Sheet&#39;);
 ss.deleteSheet(sheet);
 </code></pre>
 *
 * @param {SpreadsheetApp.Sheet} sheet - the sheet to delete
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.deleteSheet = function(sheet){};

/**
 * Duplicates the active sheet and makes it the active sheet.

 <pre class="prettyprint">
 <code>
 // The code below makes a duplicate of the active sheet
 SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.duplicateActiveSheet = function(){};

/**
 * Returns the active cell in this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Returns the active cell
 var cell = sheet.getActiveCell();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the current active cell
 */
SpreadsheetApp.Spreadsheet.prototype.getActiveCell = function(){};

/**
 * Returns the active range for the active sheet.

 Returns the range of cells that is currently considered active. This generally means the
 range that a user has selected in the active sheet, but in a custom function it refers to
 the cell being actively recalculated.

 Note that when called on a SpreadsheetApp it effectively calls getActiveSpreadsheet and
 then getActiveSheet to act on the active Sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Returns the active range
 var range = sheet.getActiveRange();
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} the active range
 */
SpreadsheetApp.Spreadsheet.prototype.getActiveRange = function(){};

/**
 * Gets the active sheet in a spreadsheet.

 The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet UI.

 <pre class="prettyprint">
 <code>
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the active sheet in the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getActiveSheet = function(){};

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
SpreadsheetApp.Spreadsheet.prototype.getAs = function(contentType){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
SpreadsheetApp.Spreadsheet.prototype.getBlob = function(){};

/**
 * Gets the width in pixels of the given column.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Columns start at 1
 Logger.log(sheet.getColumnWidth(1));
 </code></pre>
 *
 * @param {number} columnPosition - the position of the column to examine
 *
 * @return {number} column width in pixels
 */
SpreadsheetApp.Spreadsheet.prototype.getColumnWidth = function(columnPosition){};

/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> corresponding to the dimensions in which data is present.

 This is functionally equivalent to creating a Range bounded by A1 and
 (Range.getLastColumn(), Range.getLastRow()).

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This represents ALL the data
 var range = sheet.getDataRange();
 var values = range.getValues();

 // This logs the spreadsheet in CSV format with a trailing comma
 for (var i = 0; i &lt; values.length; i++) {
   var row = &quot;&quot;;
   for (var j = 0; j &lt; values[i].length; j++) {
     if (values[i][j]) {
       row = row + values[i][j];
     }
     row = row + &quot;,&quot;;
   }
   Logger.log(row);
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Range} a range consisting of all the data in the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getDataRange = function(){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user who executes the script does
 not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with edit permission
 */
SpreadsheetApp.Spreadsheet.prototype.getEditors = function(){};

/**
 * Returns the url for the form attached to the spreadsheet, null if there is no form.
 *
 * @return {String} the url for the spreadsheet form or null
 */
SpreadsheetApp.Spreadsheet.prototype.getFormUrl = function(){};

/**
 * Returns the number of frozen columns.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(&quot;Number of frozen columns: %s&quot;, sheet.getFrozenColumns());
 </code></pre>
 *
 * @return {number} the number of frozen columns
 */
SpreadsheetApp.Spreadsheet.prototype.getFrozenColumns = function(){};

/**
 * Returns the number of frozen rows.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(&quot;Number of frozen rows: %s&quot;, sheet.getFrozenRows());
 </code></pre>
 *
 * @return {number} the number of frozen rows
 */
SpreadsheetApp.Spreadsheet.prototype.getFrozenRows = function(){};

/**
 * Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL.
 For example, the spreadsheet ID in the URL
 https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".

 <pre class="prettyprint">
 <code>
 // The code below logs the ID for the active spreadsheet.
 Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());
 </code></pre>
 *
 * @return {String} the unique id (or key) for the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getId = function(){};

/**
 * Returns the position of the last column that has content.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This logs the value in the very last cell of this sheet
 var lastRow = sheet.getLastRow();
 var lastColumn = sheet.getLastColumn();
 var lastCell = sheet.getRange(lastRow, lastColumn);
 Logger.log(lastCell.getValue());
 </code></pre>
 *
 * @return {number} the last column of the sheet that contains content
 */
SpreadsheetApp.Spreadsheet.prototype.getLastColumn = function(){};

/**
 * Returns the position of the last row that has content.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This logs the value in the very last cell of this sheet
 var lastRow = sheet.getLastRow();
 var lastColumn = sheet.getLastColumn();
 var lastCell = sheet.getRange(lastRow, lastColumn);
 Logger.log(lastCell.getValue());
 </code></pre>
 *
 * @return {number} the last row of the sheet that contains content
 */
SpreadsheetApp.Spreadsheet.prototype.getLastRow = function(){};

/**
 * Gets the name of the document.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 Logger.log(ss.getName());
 </code></pre>
 *
 * @return {String} the name of the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getName = function(){};

/**
 * Gets all the named ranges in this spreadsheet.

 <pre class="prettyprint">
 <code>
 // The code below will log the name of the first named range.
 var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
 if (namedRanges.length &gt; 1) {
   Logger.log(namedRanges[0].getName());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.NamedRange[]} an array of all the named ranges in the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getNamedRanges = function(){};

/**
 * Returns the number of sheets in this spreadsheet.

 <pre class="prettyprint">
 <code>
 // The code below logs the number of sheets in the active spreadsheet.
 Logger.log(SpreadsheetApp.getActiveSpreadsheet().getNumSheets());
 </code></pre>
 *
 * @return {number} the number of sheets in the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getNumSheets = function(){};

/**
 * Returns the owner of the document.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var owner = ss.getOwner();
 Logger.log(owner.getEmail());
 </code></pre>
 *
 * @return {User} the owner of the document
 */
SpreadsheetApp.Spreadsheet.prototype.getOwner = function(){};

/**
 * Gets an array of objects representing all protected ranges or sheets in the spreadsheet.

 <pre class="prettyprint">
 <code>
 // Remove all range protections in the spreadsheet that the user has permission to edit.
 var ss = SpreadsheetApp.getActive();
 var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 for (var i = 0; i &lt; protections.length; i++) {
   var protection = protections[i];
   if (protection.canEdit()) {
     protection.remove();
   }
 }
 </code></pre>

 <pre class="prettyprint">
 <code>
 // Remove all sheet protections in the spreadsheet that the user has permission to edit.
 var ss = SpreadsheetApp.getActive();
 var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);
 for (var i = 0; i &lt; protections.length; i++) {
   var protection = protections[i];
   if (protection.canEdit()) {
     protection.remove();
   }
 }
 </code></pre>
 *
 * @param {SpreadsheetApp.ProtectionType} type - the type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
     <code>SpreadsheetApp.ProtectionType.SHEET</code>
 *
 * @return {SpreadsheetApp.Protection[]} an array of objects representing all protected ranges or sheets in the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getProtections = function(type){};

/**
 * Returns the range as specified in A1 notation or R1C1 notation.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Returns the first cell
 var cell = sheet.getRange(&quot;A1&quot;);
 </code></pre>
 *
 * @param {String} a1Notation - the range to return, as specified in A1 notation or R1C1 notation
 *
 * @return {SpreadsheetApp.Range} the range at the location designated
 */
SpreadsheetApp.Spreadsheet.prototype.getRange = function(a1Notation){};

/**
 * Returns a named range, or <code>null</code> if no range with the given name is found. If multiple
 sheets of the spreadsheet use the same range name, specify the sheet name without additional
 quotation marks ? for example, <code>getRangeByName(&#39;TaxRates&#39;)</code> or
 <code>getRangeByName(&#39;Sheet Name!TaxRates&#39;)</code>, but not
 <code>getRangeByName(&#39;&quot;Sheet Name&quot;!TaxRates&#39;)</code>.

 <pre class="prettyprint">
 <code>
 // Log the number of columns for the range named &#39;TaxRates&#39; in the active spreadsheet.
 var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(&#39;TaxRates&#39;);
 if (range != null) {
   Logger.log(range.getNumColumns());
 }
 </code></pre>
 *
 * @param {String} name - the name of the range to get
 *
 * @return {SpreadsheetApp.Range} range of cells with the given name
 */
SpreadsheetApp.Spreadsheet.prototype.getRangeByName = function(name){};

/**
 * Gets the height in pixels of the given row.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Rows start at 1
 Logger.log(sheet.getRowHeight(1));
 </code></pre>
 *
 * @param {number} rowPosition - the *position* of the row to examine
 *
 * @return {number} row height in pixels
 */
SpreadsheetApp.Spreadsheet.prototype.getRowHeight = function(rowPosition){};

/**
 * Returns a sheet with the given name.

 If multiple sheets have the same name, the leftmost one is returned. Returns null if there is
 no sheet with the given name.

 <pre class="prettyprint">
 <code>
 // The code below will log the index of a sheet named &quot;Expenses&quot;
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(&quot;Expenses&quot;);
 if (sheet != null) {
   Logger.log(sheet.getIndex());
 }
 </code></pre>
 *
 * @param {String} name - the name of the sheet to get
 *
 * @return {SpreadsheetApp.Sheet} the sheet with the given name
 */
SpreadsheetApp.Spreadsheet.prototype.getSheetByName = function(name){};

/**
 * Returns the ID of the sheet represented by this object.

 This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
 increasing integer assigned at sheet creation time that is independent of sheet position.
 This is useful in conjunction with methods such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)'>Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)</a></code> that take a <code>gridId</code>
 parameter rather than a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> instance.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(sheet.getSheetId());
 </code></pre>
 *
 * @return {number} an ID for the sheet unique to the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getSheetId = function(){};

/**
 * Returns the sheet name.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 Logger.log(sheet.getSheetName());
 </code></pre>
 *
 * @return {String} the name of the sheet
 */
SpreadsheetApp.Spreadsheet.prototype.getSheetName = function(){};

/**
 * Returns a <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html'>PageProtection</a></s></code> instance describing the permissions for the current sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var permissions = sheet.getSheetProtection();

 permissions.setProtected(true);
 permissions.addUser(&quot;user@example.com&quot;);

 // Logs the users that have access to edit this sheet. Note that this
 // is different from access to the entire spreadsheet - getUsers() will
 // only return users if permissions.isProtected() is set to true.
 var users = permissions.getUsers();
 Logger.log(users);
 </code></pre>
 *
 * @return {SpreadsheetApp.PageProtection} an object describing sheet access permissions
 */
SpreadsheetApp.Spreadsheet.prototype.getSheetProtection = function(){};

/**
 * Returns the rectangular grid of values for this range starting at the given
 coordinates. A -1 value given as the row or column position is equivalent to getting the
 very last row or column that has data in the sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The two samples below produce the same output
 var values = sheet.getSheetValues(1, 1, 3, 3);
 Logger.log(values);

 var range = sheet.getRange(1, 1, 3, 3);
 values = range.getValues();
 Logger.log(values);
 </code></pre>
 *
 * @param {number} startRow - the position of the starting row
 * @param {number} startColumn - the position of the starting column
 * @param {number} numRows - the number of rows to return values for
 * @param {number} numColumns - the number of columns to return values for
 *
 * @return {Object[][]} a two dimension array of values
 */
SpreadsheetApp.Spreadsheet.prototype.getSheetValues = function(startRow, startColumn, numRows, numColumns){};

/**
 * Gets all the sheets in this spreadsheet.

 <pre class="prettyprint">
 <code>
 // The code below will log the name of the second sheet
 var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
 if (sheets.length &gt; 1) {
   Logger.log(sheets[1].getName());
 }
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet[]} an array of all the sheets in the spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getSheets = function(){};

/**
 * Gets the spreadsheet locale.
 *
 * @return {String} the spreadsheet locale
 */
SpreadsheetApp.Spreadsheet.prototype.getSpreadsheetLocale = function(){};

/**
 * Gets the time zone for the spreadsheet.
 *
 * @return {String} the time zone, specified in "long" format (e.g., "America/New_York", as listed by
     <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 */
SpreadsheetApp.Spreadsheet.prototype.getSpreadsheetTimeZone = function(){};

/**
 * Returns the url for the given spreadsheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 Logger.log(ss.getUrl());
 </code></pre>
 *
 * @return {String} the url for the given spreadsheet
 */
SpreadsheetApp.Spreadsheet.prototype.getUrl = function(){};

/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>.  If the user who executes
 the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with view or comment permission
 */
SpreadsheetApp.Spreadsheet.prototype.getViewers = function(){};

/**
 * Hides the columns in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This hides the first column
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.hideColumn(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} column - the column range to hide
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.hideColumn = function(column){};

/**
 * Hides the rows in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This hides the first row
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.hideRow(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} row - the row range to hide
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.hideRow = function(row){};

/**
 * Inserts a column after the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a column after the first column position
 sheet.insertColumnAfter(1);
 </code></pre>
 *
 * @param {number} afterPosition - the column after which the new column should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertColumnAfter = function(afterPosition){};

/**
 * Inserts a column before the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a column in the first column position
 sheet.insertColumnBefore(1);
 </code></pre>
 *
 * @param {number} beforePosition - the column before which the new column should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertColumnBefore = function(beforePosition){};

/**
 * Inserts a number of columns after the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a column in the second column position
 sheet.insertColumnsAfter(1);
 </code></pre>
 *
 * @param {number} afterPosition - the column after which the new column should be added
 * @param {number} howMany - the number of columns to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertColumnsAfter = function(afterPosition, howMany){};

/**
 * Inserts a number of columns before the given column position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts five columns before the first column
 sheet.insertColumnsBefore(1, 5);
 </code></pre>
 *
 * @param {number} beforePosition - the column before which the new column should be added
 * @param {number} howMany - the number of columns to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertColumnsBefore = function(beforePosition, howMany){};

/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob.html'>Blob</a></code> as an image in the document at a given row and column. The image size
 is retrieved from the blob contents.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 sheet.insertImage(blob, 1, 1);
 </code></pre>
 *
 * @param {Blob} blob - blob containing the image contents, MIME type and, optionally, a name
 * @param {number} column - the column position
 * @param {number} row - the row position
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.insertImage = function(blob, column, row){};

/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob.html'>Blob</a></code> as an image in the document at a given row and column, with a pixel
 offset. The image size is retrieved from the blob contents.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 sheet.insertImage(blob, 1, 1, 10, 10);
 </code></pre>
 *
 * @param {Blob} blob - blob containing the image contents, MIME type and, optionally, a name
 * @param {number} column - the column position
 * @param {number} row - the row position
 * @param {number} offsetX - horizontal offset from cell corner in pixels
 * @param {number} offsetY - vertical offset from cell corner in pixels
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.insertImage = function(blob, column, row, offsetX, offsetY){};

/**
 * Inserts an image in the document at a given row and column.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1);
 </code></pre>
 *
 * @param {String} url - the url of the image
 * @param {number} column - the grid column position
 * @param {number} row - the grid row position
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.insertImage = function(url, column, row){};

/**
 * Inserts a row after the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a row after the first row position
 sheet.insertRowAfter(1);
 </code></pre>
 *
 * @param {number} afterPosition - the row after which the new row should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertRowAfter = function(afterPosition){};

/**
 * Inserts a row before the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts a row before the first row position
 sheet.insertRowBefore(1);
 </code></pre>
 *
 * @param {number} beforePosition - the row before which the new row should be added
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertRowBefore = function(beforePosition){};

/**
 * Inserts a number of rows after the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts five rows after the first row
 sheet.insertRowsAfter(1, 5);
 </code></pre>
 *
 * @param {number} afterPosition - the row after which the new rows should be added
 * @param {number} howMany - the number of rows to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertRowsAfter = function(afterPosition, howMany){};

/**
 * Inserts a number of rows before the given row position.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This inserts five rows before the first row
 sheet.insertRowsBefore(1, 5);
 </code></pre>
 *
 * @param {number} beforePosition - the row before which the new rows should be added
 * @param {number} howMany - the number of rows to insert
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.insertRowsBefore = function(beforePosition, howMany){};

/**
 * Inserts a new sheet in the spreadsheet, with a default name.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.insertSheet();
 </code></pre>
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(){};

/**
 * Inserts a new sheet in the spreadsheet at the given index.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.insertSheet(1);
 </code></pre>
 *
 * @param {number} sheetIndex - the index of the newly created sheet. To insert a sheet as the first one in
    the spreadsheet, set it to 0.
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(sheetIndex){};

/**
 * Inserts a new sheet in the spreadsheet at the given index and uses optional advanced arguments.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 ss.insertSheet(1, {template: templateSheet});
 </code></pre>
 *
 * @param {number} sheetIndex - index of the newly created sheet. To insert a sheet as the first one in the
    spreadsheet, set it to 0.
 * @param {Object} options - optional JavaScript advanced arguments
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(sheetIndex, options){};

/**
 * Inserts a new sheet in the spreadsheet, with a default name and uses optional advanced
 arguments.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 ss.insertSheet({template: templateSheet});
 </code></pre>
 *
 * @param {Object} options - optional JavaScript advanced arguments
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(options){};

/**
 * Inserts a new sheet in the spreadsheet with the given name.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.insertSheet(&#39;My New Sheet&#39;);
 </code></pre>
 *
 * @param {String} sheetName - the name of the new sheet
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(sheetName){};

/**
 * Inserts a new sheet in the spreadsheet with the given name
 at the given index.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.insertSheet(&#39;My New Sheet&#39;, 1);
 </code></pre>
 *
 * @param {String} sheetName - the name of the new sheet
 * @param {number} sheetIndex - the index of the newly created sheet. To insert a sheet as the first one in
    the spreadsheet, set it to 0.
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(sheetName, sheetIndex){};

/**
 * Inserts a new sheet in the spreadsheet with the given name at the given index and uses optional
 advanced arguments.

 As a side effect, it makes it the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 ss.insertSheet(&#39;My New Sheet&#39;, 1, {template: templateSheet});
 </code></pre>
 *
 * @param {String} sheetName - the name of the new sheet
 * @param {number} sheetIndex - index of the newly inserted sheet. To insert a sheet as the first one in a
    spreadsheet, set it to 0.
 * @param {Object} options - optional JavaScript advanced arguments
 *
 * @return {SpreadsheetApp.Sheet} the new sheet
 */
SpreadsheetApp.Spreadsheet.prototype.insertSheet = function(sheetName, sheetIndex, options){};

/**
 * Indicates whether the document allows anonymous viewing. As this is no longer supported in the
 <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>, use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()'>File.getSharingAccess()</a></code> and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()'>File.getSharingPermission()</a></code> instead.

 <pre class="prettyprint">
 <code>
 // Determine if the document allows anonymous viewing via the Drive API.
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var file = DriveApp.getFileById(ss.getId());
 var access = file.getSharingAccess();
 var permission = file.getSharingPermission();
 var isAnonymousAccess =
     access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
 var isAnonymousEdit = isAnonymousAccess &amp;&amp; permission != DriveApp.Permission.NONE;
 </code></pre>
 *
 * @return {Boolean} true if the document allows anonymous viewing, false otherwise
 */
SpreadsheetApp.Spreadsheet.prototype.isAnonymousView = function(){};

/**
 * Indicates whether the document allows edits from anonymous users. As this is no longer
 supported in the
 <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>, use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()'>File.getSharingAccess()</a></code> and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()'>File.getSharingPermission()</a></code> instead.

 <pre class="prettyprint">
 <code>
 // Determine if the document allow anonymous edits via the Drive API.
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var file = DriveApp.getFileById(ss.getId());
 var access = file.getSharingAccess();
 var permission = file.getSharingPermission();
 var isAnonymousAccess =
     access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
 var isAnonymousEdit = isAnonymousAccess &amp;&amp; permission == DriveApp.Permission.EDIT;
 </code></pre>
 *
 * @return {Boolean} true if the document allows anonymous editing, false otherwise
 */
SpreadsheetApp.Spreadsheet.prototype.isAnonymousWrite = function(){};

/**
 * Moves the active sheet to the given position in the list of sheets.
 Throws an exception if the position is negative or greater than the
 number of sheets.

 <pre class="prettyprint">
 <code>
 // This example assumes there are two sheets in the current
 // active spreadsheet: one named &quot;first&quot;, and another named &quot;second&quot;,
 // and that the current active sheet (first) is in position 1
 var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = spreadsheet.getSheetByName(&quot;first&quot;);

 // This should output &#39;Current index of sheet: 1&#39;
 Logger.log(&quot;Current index of sheet: %s&quot;, sheet.getIndex());

 spreadsheet.moveActiveSheet(2);

 // This should output &#39;New index of sheet: 2&#39;
 Logger.log(&quot;New index of sheet: %s&quot;, sheet.getIndex());
 </code></pre>
 *
 * @param {number} pos - a position to move the active sheet to in the list of sheets
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.moveActiveSheet = function(pos){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have
 general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SpreadsheetApp.Spreadsheet} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.removeEditor = function(emailAddress){};

/**
 * Removes a menu that was added by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>. The <code>name</code> argument
 should have the same value as the corresponding call to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>.

 <pre class="prettyprint">
 <code>
 // The onOpen function is executed automatically every time a Spreadsheet is loaded
 function onOpen() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   ss.addMenu(&quot;badMenu&quot;, [{name: &quot;remove bad menu&quot;, functionName: &quot;removeBadMenu&quot;},
                                        {name: &quot;foo&quot;, functionName: &quot;foo&quot;}]);
 }
 function removeBadMenu() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   ss.removeMenu(&quot;badMenu&quot;);//name must match the name we used when added the menu
 }
 function foo(){
 //do nothing
 }
 </code></pre>
 *
 * @param {String} name - the name of the menu to remove
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.removeMenu = function(name){};

/**
 * Deletes a named range with the given name. Throws an exception if no range with the given name
 is found in the spreadsheet.

 <pre class="prettyprint"><code>
 // The code below will create a new named range &quot;foo&quot;, and then remove it.
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.setNamedRange(&quot;foo&quot;, ss.getActiveRange());
 ss.removeNamedRange(&quot;foo&quot;);
 </code></pre>
 *
 * @param {String} name - the range name
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.removeNamedRange = function(name){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>.  This
 method has no effect if the user is an editor, not a viewer or commenter. This method also does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who
 have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire
 domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SpreadsheetApp.Spreadsheet} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> for chaining
 */
SpreadsheetApp.Spreadsheet.prototype.removeViewer = function(emailAddress){};

/**
 * Renames the document.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.rename(&quot;This is the new name&quot;);
 </code></pre>
 *
 * @param {String} newName - the new name for the document
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.rename = function(newName){};

/**
 * Renames the current active sheet to the given new name.

 <pre class="prettyprint">
 <code>
 // The code below will rename the active sheet to &quot;Hello world&quot;
 SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet(&quot;Hello world&quot;);
 </code></pre>
 *
 * @param {String} newName - the new name for the current active sheet
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.renameActiveSheet = function(newName){};

/**
 * Sets the active range for the active sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D4&quot;);
 sheet.setActiveRange(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to set as the active range
 *
 * @return {SpreadsheetApp.Range} the newly active range
 */
SpreadsheetApp.Spreadsheet.prototype.setActiveRange = function(range){};

/**
 * Sets the active selection region for this sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var range = sheet.getRange(&quot;A1:D4&quot;);
 sheet.setActiveSelection(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} range - the range to set as the active selection
 *
 * @return {SpreadsheetApp.Range} the newly active range
 */
SpreadsheetApp.Spreadsheet.prototype.setActiveSelection = function(range){};

/**
 * Sets the given sheet to be the active sheet in the spreadsheet.

 The spreadsheet UI will display the chosen sheet unless the sheet belongs to a different
 spreadsheet.

 <pre class="prettyprint">
 <code>
 // The code below will make the first sheet active in the active workbook
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.setActiveSheet(ss.getSheets()[0]);
 </code></pre>
 *
 * @param {SpreadsheetApp.Sheet} sheet - the sheet to set as the active sheet
 *
 * @return {SpreadsheetApp.Sheet} the active sheet
 */
SpreadsheetApp.Spreadsheet.prototype.setActiveSheet = function(sheet){};

/**
 * Sets the document's policy on anonymous reading and writing. As this is no longer supported in
 the <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>,
 use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> as an alternative.

 <pre class="prettyprint">
 <code>
 // Set the document&#39;s policy on anonymous reading and writing via the Drive API.
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var file = DriveApp.getFileById(ss.getId());

 // Set anonymous read.
 file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.VIEW);

 // Set anonymous write.
 file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.EDIT);

 // Disable anonymous access.
 file.setSharing(DriveApi.Access.PRIVATE, file.getSharingPermission());
 </code></pre>
 *
 * @param {Boolean} anonymousReadAllowed - true to allow anonymous reads, false otherwise
 * @param {Boolean} anonymousWriteAllowed - true to allow anonymous reads, false otherwise
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setAnonymousAccess = function(anonymousReadAllowed, anonymousWriteAllowed){};

/**
 * Sets the width of the given column in pixels.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Sets the first column to a width of 200 pixels
 sheet.setColumnWidth(1, 200);
 </code></pre>
 *
 * @param {number} columnPosition - the position of the given column to set
 * @param {number} width - the width in pixels to set it to
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.setColumnWidth = function(columnPosition, width){};

/**
 * Freezes the given number of columns. If zero, no columns are frozen.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Freezes the first column
 sheet.setFrozenColumns(1);
 </code></pre>
 *
 * @param {number} columns - the number of columns to freeze
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setFrozenColumns = function(columns){};

/**
 * Freezes the given number of rows. If zero, no rows are frozen.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Freezes the first row
 sheet.setFrozenRows(1);
 </code></pre>
 *
 * @param {number} rows - the number of rows to freeze
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setFrozenRows = function(rows){};

/**
 * Names a range.

 <pre class="prettyprint">
 <code>
 // The code below will create a new named range &quot;TaxRates&quot; in the active spreadsheet
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 ss.setNamedRange(&quot;TaxRates&quot;, SpreadsheetApp.getActiveRange());
 </code></pre>
 *
 * @param {String} name - the name to give the range
 * @param {SpreadsheetApp.Range} range - the range specification
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setNamedRange = function(name, range){};

/**
 * Sets the row height of the given row in pixels.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Sets the first row to a height of 200 pixels
 sheet.setRowHeight(1, 200);
 </code></pre>
 *
 * @param {number} rowPosition - the row position to change
 * @param {number} height - height in pixels to set it to
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.setRowHeight = function(rowPosition, height){};

/**
 * Sets the permissions for the current sheet.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 var permissions = sheet.getSheetProtection();

 // This copies the permissions on the first sheet to the second sheet
 var sheetToClonePermissionsTo = ss.getSheets()[1];
 sheetToClonePermissionsTo.setSheetProtection(permissions);
 </code></pre>
 *
 * @param {SpreadsheetApp.PageProtection} permissions - the access permissions object to set on this sheet
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setSheetProtection = function(permissions){};

/**
 * Sets the spreadsheet locale.
 *
 * @param {String} locale - the locale code to use (e.g., 'en', 'fr', 'en_US')
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setSpreadsheetLocale = function(locale){};

/**
 * Sets the time zone for the spreadsheet.
 *
 * @param {String} timezone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.setSpreadsheetTimeZone = function(timezone){};

/**
 * Displays a custom user interface component in a dialog centered in the user's browser's
 viewport. The server-side script's execution will <em>not</em> be suspended. To communicate
 with the server side, the user interface component must make asynchronous callbacks to the
 server-side script.

 <p>If the server-side script previously displayed a dialog that has not yet been dismissed,
 then the existing dialog will be replaced with the newly requested dialog's user interface.

 The following code snippet displays a simple
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../html/html-service.html'>HtmlService</a></code> application in a dialog with
 the specified title, height, and width:

 <pre class="prettyprint">
 <code>
 var htmlApp = HtmlService
     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
     .setSandboxMode(HtmlService.SandboxMode.IFRAME)
     .setTitle(&#39;My HtmlService Application&#39;)
     .setWidth(250)
     .setHeight(300);

 SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);

 // The script resumes execution immediately after showing the dialog.
 </code></pre>

 Likewise, the following code snippet displays a simple
 <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../ui/ui-app.html'>UiApp</a></s></code> application in a dialog with the
 specified title, height, and width:

 <pre class="prettyprint">
 <code>
 var uiApp = UiApp.createApplication()
     .setTitle(&#39;My UiApp Application&#39;)
     .setWidth(250)
     .setHeight(300);
 uiApp.add(uiApp.createLabel(&#39;The photograph on the dashboard taken years ago...&#39;));

 SpreadsheetApp.getActiveSpreadsheet().show(uiApp);

 // The script resumes execution immediately after showing the dialog.
 </code></pre>
 *
 * @param {Object} userInterface - an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../html/html-output.html'>HtmlOutput</a></code> or
     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../ui/ui-instance.html'>UiInstance</a></s></code> web app
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.show = function(userInterface){};

/**
 * Sorts a sheet by column, ascending.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // Sorts the sheet by the first column, ascending
 sheet.sort(1);
 </code></pre>
 *
 * @param {number} columnPosition - the column to sort by
 *
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */
SpreadsheetApp.Spreadsheet.prototype.sort = function(columnPosition){};

/**
 * Shows a popup window in the lower right corner of the spreadsheet with the given message.

 <pre class="prettyprint">
 <code>
 // Show a popup with the message &quot;Task started&quot;.
 SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;);
 </code></pre>
 *
 * @param {String} msg - the message to be shown in the toast
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.toast = function(msg){};

/**
 * Shows a popup window in the lower right corner of the spreadsheet with the given message and
 title.

 <pre class="prettyprint">
 <code>
 // Show a popup with the title &quot;Status&quot; and the message &quot;Task started&quot;.
 SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;, &#39;Status&#39;);
 </code></pre>
 *
 * @param {String} msg - the message to be shown in the toast
 * @param {String} title - the title of the toast, which is optional
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.toast = function(msg, title){};

/**
 * Unhides the column in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This unhides the first column if it was previously hidden
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.unhideColumn(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} column - the range to unhide, if hidden
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.unhideColumn = function(column){};

/**
 * Unhides the row in the given range.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // This unhides the first row if it was previously hidden
 var range = sheet.getRange(&quot;A1&quot;);
 sheet.unhideRow(range);
 </code></pre>
 *
 * @param {SpreadsheetApp.Range} row - the range to unhide, if hidden
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.unhideRow = function(row){};

/**
 * Updates a menu that was added by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>. Works exactly like
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>.

 <pre class="prettyprint">
 <code>
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var menuEntries = [];
 menuEntries.push({name: &quot;Lone Menu Entry&quot;, functionName: &quot;function1&quot;});
 ss.updateMenu(&quot;addMenuExample&quot;, menuEntries);
 </code></pre>
 *
 * @param {String} name - the name of the menu to update
 * @param {Object[]} subMenus - an array of JavaScript maps with <code>name</code> and
        <code>functionName</code> parameters
 *
 * @return void
 */
SpreadsheetApp.Spreadsheet.prototype.updateMenu = function(name, subMenus){};

