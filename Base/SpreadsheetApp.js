/**********************************************
 * @namespace SpreadsheetApp
 ***********************************************/

/**
 * @class SpreadsheetApp
 */

/**
 * An enumeration of the types of series used to calculate auto-filled values.
 * 
 * @typedef {SpreadsheetApp.AutoFillSeries} SpreadsheetApp.AutoFillSeries
 */
/**
 * An enumeration of the possible banding themes.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme
 */
/**
 * An enumeration of conditional formatting boolean criteria.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria
 */
/**
 * An enumeration of the valid styles for setting borders on a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code>.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle
 */
/**
 * An enumeration of the possible paste types.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType
 */
/**
 * An enumeration of the possible data execution error codes.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode
 */
/**
 * An enumeration of the possible data execution states.
 * 
 * @typedef {SpreadsheetApp.DataExecutionState} SpreadsheetApp.DataExecutionState
 */
/**
 * An enumeration of the possible data source parameter types.
 * 
 * @typedef {SpreadsheetApp.DataSourceParameterType} SpreadsheetApp.DataSourceParameterType
 */
/**
 * An enumeration of the possible data source types.
 * 
 * @typedef {SpreadsheetApp.DataSourceType} SpreadsheetApp.DataSourceType
 */
/**
 * An enumeration representing the data validation criteria that can be set on a range.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria
 */
/**
 * An enumeration of possible developer metadata location types.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataLocationType} SpreadsheetApp.DeveloperMetadataLocationType
 */
/**
 * An enumeration of the possible developer metadata visibilities.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataVisibility} SpreadsheetApp.DeveloperMetadataVisibility
 */
/**
 * An enumeration of the possible dimensions of a spreadsheet.
 * 
 * @typedef {SpreadsheetApp.Dimension} SpreadsheetApp.Dimension
 */
/**
 * A enumeration of the possible directions that one can move within a spreadsheet using the arrow
 * keys.
 * 
 * @typedef {SpreadsheetApp.Direction} SpreadsheetApp.Direction
 */
/**
 * An enumeration of the positions that the group control toggle can be in.
 * 
 * @typedef {SpreadsheetApp.GroupControlTogglePosition} SpreadsheetApp.GroupControlTogglePosition
 */
/**
 * An enumeration of conditional format gradient interpolation types.
 * 
 * @typedef {SpreadsheetApp.InterpolationType} SpreadsheetApp.InterpolationType
 */
/**
 * An enumeration of the functions that may be used to summarize values in a pivot table.
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction
 */
/**
 * An enumeration of the ways that a pivot value may be displayed.
 * 
 * @typedef {SpreadsheetApp.PivotValueDisplayType} SpreadsheetApp.PivotValueDisplayType
 */
/**
 * An enumeration representing the parts of a spreadsheet that can be protected from edits.
 * 
 * @typedef {SpreadsheetApp.ProtectionType} SpreadsheetApp.ProtectionType
 */
/**
 * An enumeration of relative date options for calculating a value to be used in date-based <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code>.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate
 */
/**
 * An enumeration of valid text directions.
 * 
 * @typedef {SpreadsheetApp.TextDirection} SpreadsheetApp.TextDirection
 */
/**
 * An enumeration of the preset delimiters for split text to columns.
 * 
 * @typedef {SpreadsheetApp.TextToColumnsDelimiter} SpreadsheetApp.TextToColumnsDelimiter
 */
/**
 * An enumeration of the strategies used for wrapping cells.
 * 
 * @typedef {SpreadsheetApp.WrapStrategy} SpreadsheetApp.WrapStrategy
 */
/**
 * An enumeration of the possible intervals that can be used in spreadsheet recalculation.
 * 
 * @typedef {SpreadsheetApp.RecalculationInterval} SpreadsheetApp.RecalculationInterval
 */
/**
 * An enumeration of the different types of sheets that can exist in a spreadsheet.
 * 
 * @typedef {SpreadsheetApp.SheetType} SpreadsheetApp.SheetType
 */
/**
 * Creates a new spreadsheet with the given name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new spreadsheet &quot;Finances&quot; and logs the URL for it
 * var ssNew = SpreadsheetApp.create(&quot;Finances&quot;);
 * Logger.log(ssNew.getUrl());
 * </code></pre>
 * 
 * @function SpreadsheetApp.create
 * 
 * @param {String} name - The name for the spreadsheet.
 * 
 * @return {SpreadsheetApp.Spreadsheet} a new spreadsheet
 */


/**
 * Creates a new spreadsheet with the given name and the specified number of rows and columns.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new spreadsheet &quot;Finances&quot; with 50 rows and 5 columns and logs the
 * // URL for it
 * var ssNew = SpreadsheetApp.create(&quot;Finances&quot;, 50, 5);
 * Logger.log(ssNew.getUrl());
 * </code></pre>
 * 
 * @function SpreadsheetApp.create
 * 
 * @param {String} name - The name for the spreadsheet.
 * @param {IntegerNum} rows - The number of rows for the spreadsheet.
 * @param {IntegerNum} columns - The number of columns for the spreadsheet.
 * 
 * @return {SpreadsheetApp.Spreadsheet} a new spreadsheet
 */


/**
 * Enables data execution for all types of data sources.
 * 
 * <p>Data execution throws an exception if the data source type is not enabled. Use this method
 * to enable data execution for all data source types.
 * 
 * @function SpreadsheetApp.enableAllDataSourcesExecution
 * 
 * @return void
 */


/**
 * Enables data execution for BigQuery data source.
 * 
 * <p>Data execution for BigQuery data source throws an expection if not enabled.
 * 
 * @function SpreadsheetApp.enableBigQueryExecution
 * 
 * @return void
 */


/**
 * Applies all pending Spreadsheet changes.
 * 
 * <p>Spreadsheet operations are sometimes bundled together to improve performance, such as when
 * doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all
 * pending changes are made right away, for instance to show users data as a script is executing.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the background color of cells A1 and B1 twenty times. You should be
 * // able to see the updates live in the spreadsheet. If flush() is not called, the updates may
 * // be applied live or may all be applied at once when the script completes.
 * function colors() {
 *   var sheet = SpreadsheetApp.getActiveSheet();
 *   for (var i = 0; i &lt; 20; i++) {
 *     if ((i % 2) == 0) {
 *       sheet.getRange(&#39;A1&#39;).setBackground(&#39;green&#39;);
 *       sheet.getRange(&#39;B1&#39;).setBackground(&#39;red&#39;);
 *     } else {
 *       sheet.getRange(&#39;A1&#39;).setBackground(&#39;red&#39;);
 *       sheet.getRange(&#39;B1&#39;).setBackground(&#39;green&#39;);
 *     }
 *     SpreadsheetApp.flush();
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.flush
 * 
 * @return void
 */


/**
 * Returns the currently active spreadsheet, or <code>null</code> if there is none.
 * 
 * <p>Functions that are run in the context of a spreadsheet can get a reference to the
 * corresponding Spreadsheet object by calling this function.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the URL for the active spreadsheet.
 * Logger.log(SpreadsheetApp.getActive().getUrl());
 * </code></pre>
 * 
 * @function SpreadsheetApp.getActive
 * 
 * @return {SpreadsheetApp.Spreadsheet} the active Spreadsheet object
 */


/**
 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
 * multiple ranges are selected this method returns only the last selected range.
 * 
 * <p>This generally means the range that a user has selected in the active sheet, but in a custom
 * function it refers to the cell being actively recalculated.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the background color for the active range.
 * var color = SpreadsheetApp.getActiveRange().getBackgroundColor();
 * Logger.log(color);
 * </code></pre>
 * 
 * @function SpreadsheetApp.getActiveRange
 * 
 * @return {SpreadsheetApp.Range} the active range
 */


/**
 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no ranges
 * selected. The active range containing the current highlighted cell is placed last in the list.
 * 
 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRange()'>getActiveRange()</a></code> call.
 * 
 * <pre class="prettyprint"><code>
 * // Returns the list of active ranges.
 * var rangeList = SpreadsheetApp.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.getActiveRangeList
 * 
 * @return {SpreadsheetApp.RangeList} the list of active ranges
 */


/**
 * Gets the active sheet in a spreadsheet.
 * 
 * <p>The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
 * UI.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the name of the active sheet.
 * Logger.log(SpreadsheetApp.getActiveSheet().getName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.getActiveSheet
 * 
 * @return {SpreadsheetApp.Sheet} the active Sheet object
 */


/**
 * Returns the currently active spreadsheet, or <code>null</code> if there is none.
 * 
 * <p>Functions that are run in the context of a spreadsheet can get a reference to the
 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> object by calling this function.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the URL for the active spreadsheet.
 * Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
 * </code></pre>
 * 
 * @function SpreadsheetApp.getActiveSpreadsheet
 * 
 * @return {SpreadsheetApp.Spreadsheet} the active Spreadsheet object
 */


/**
 * Returns the current (highlighted) cell that is selected in one of the active ranges in the
 * active sheet or <code>null</code> if there is no current cell.
 * 
 * <pre class="prettyprint"><code>
 * // Returns the current highlighted cell in the one of the active ranges.
 * var currentCell = SpreadsheetApp.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.getCurrentCell
 * 
 * @return {SpreadsheetApp.Range} the current cell
 */


/**
 * Returns the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html'>Selection</a></code> in the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var selection = SpreadsheetApp.getSelection();
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.getSelection
 * 
 * @return {SpreadsheetApp.Selection} the current selection
 */


/**
 * Returns an instance of the spreadsheet's user-interface environment that allows the script to
 * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 * current instance of an open spreadsheet, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the spreadsheet. For more information, see
 * the guides to <a href="/apps-script/guides/menus">menus</a> and <a
 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint">
 * // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
 * function onOpen(e) {
 *   SpreadsheetApp.getUi()
 *       .createMenu('My Menu')
 *       .addItem('My menu item', 'myFunction')
 *       .addSeparator()
 *       .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')
 *           .addItem('One sub-menu item', 'mySecondFunction')
 *           .addItem('Another sub-menu item', 'myThirdFunction'))
 *       .addToUi();
 * }
 * </pre>
 * 
 * @function SpreadsheetApp.getUi
 * 
 * @return {Ui} an instance of this spreadsheet's user-interface environment
 */


/**
 * Creates a builder for a conditional formatting rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red
 * // if they contain a number between 1 and 10.
 * var sheet = SpreadsheetApp.getActive();
 * var range = sheet.getRange(&#39;A1:B3&#39;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberBetween(1, 10)
 *     .setBackgroundColor(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build()
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * 
 * </code></pre>
 * 
 * @function SpreadsheetApp.newConditionalFormatRule
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the new builder.
 */


/**
 * Creates a builder for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec.html'>DataSourceSpec</a></code>.
 * 
 * @function SpreadsheetApp.newDataSourceSpec
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The new builder.
 */


/**
 * Creates a builder for a data validation rule.
 * 
 * <pre class="prettyprint"><code>
 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
 * var rule = SpreadsheetApp.newDataValidation()
 *     .requireNumberBetween(1, 100)
 *     .setAllowInvalid(false)
 *     .setHelpText(&#39;Number must be between 1 and 100.&#39;)
 *     .build();
 * cell.setDataValidation(rule);
 * </code></pre>
 * 
 * @function SpreadsheetApp.newDataValidation
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} The new builder.
 */


/**
 * Creates a builder for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html'>FilterCriteria</a></code>.
 * 
 * @function SpreadsheetApp.newFilterCriteria
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the new builder
 */


/**
 * Creates a builder for a Rich Text value.
 * 
 * <pre class="prettyprint"><code>
 * // Sets cell A1 to have the text &quot;Hello world&quot;, with &quot;Hello&quot; bolded.
 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
 * var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
 * var value = SpreadsheetApp.newRichTextValue()
 *     .setText(&quot;Hello world&quot;)
 *     .setTextStyle(0, 5, bold)
 *     .build();
 * cell.setRichTextValue(value);
 * </code></pre>
 * 
 * @function SpreadsheetApp.newRichTextValue
 * 
 * @return {SpreadsheetApp.RichTextValueBuilder} The new builder.
 */


/**
 * Creates a builder for a text style.
 * 
 * <pre class="prettyprint"><code>
 * // Sets range A1:B3 to have red, size 22, bolded, underlined text.
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B3&#39;);
 * var style = SpreadsheetApp.newTextStyle()
 *     .setForegroundColor(&quot;red&quot;)
 *     .setFontSize(22)
 *     .setBold(true)
 *     .setUnderline(true)
 *     .build();
 * range.setTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.newTextStyle
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The new builder.
 */


/**
 * Opens the spreadsheet that corresponds to the given File object.
 * 
 * <pre class="prettyprint"><code>
 * // Get any starred spreadsheets from Google Drive, then open the spreadsheets and log the name
 * // of the first sheet within each spreadsheet.
 * var files = DriveApp.searchFiles(
 *     &#39;starred = true and mimeType = &quot;&#39; + MimeType.GOOGLE_SHEETS + &#39;&quot;&#39;);
 * while (files.hasNext()) {
 *   var spreadsheet = SpreadsheetApp.open(files.next());
 *   var sheet = spreadsheet.getSheets()[0];
 *   Logger.log(sheet.getName());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.open
 * 
 * @param {DriveApp.File} file - The file to open.
 * 
 * @return {SpreadsheetApp.Spreadsheet} the spreadsheet
 */


/**
 * Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For
 * example, the spreadsheet ID in the URL <code>https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0</code> is "abc1234567".
 * 
 * <pre class="prettyprint"><code>
 * // The code below opens a spreadsheet using its ID and logs the name for it.
 * // Note that the spreadsheet is NOT physically opened on the client side.
 * // It is opened on the server only (for modification by the script).
 * var ss = SpreadsheetApp.openById(&quot;abc1234567&quot;);
 * Logger.log(ss.getName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.openById
 * 
 * @param {String} id - The unique identifier for the spreadsheet.
 * 
 * @return {SpreadsheetApp.Spreadsheet} the Spreadsheet object with the given id
 */


/**
 * Opens the spreadsheet with the given URL.
 * 
 * <pre class="prettyprint"><code>
 * // The code below opens a spreadsheet using its id and logs the name for it.
 * // Note that the spreadsheet is NOT physically opened on the client side.
 * // It is opened on the server only (for modification by the script).
 * var ss = SpreadsheetApp.openByUrl(
 *     &#39;https://docs.google.com/spreadsheets/d/abc1234567/edit&#39;);
 * Logger.log(ss.getName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.openByUrl
 * 
 * @param {String} url - The URL for the spreadsheet.
 * 
 * @return {SpreadsheetApp.Spreadsheet} the Spreadsheet object with the given id
 */


/**
 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>, with the top
 * left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <p>The spreadsheet UI displays the sheet that contains the chosen range and selects the cells
 * defined in the chosen range.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets range C1:D4 in the first sheet as the active range.
 * var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange(&#39;C1:D4&#39;);
 * SpreadsheetApp.setActiveRange(range);
 * 
 * var selection = SpreadsheetApp.getSelection();
 * // Current cell: C1
 * var currentCell = selection.getCurrentCell();
 * // Active Range: C1:D4
 * var activeRange = selection.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.setActiveRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to be made the active range.
 * 
 * @return {SpreadsheetApp.Range} the new active Range
 */


/**
 * Sets the specified list of ranges as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRangeList()'>active ranges</a></code>. The last
 * range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRange()'>active range</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets ranges [D4, B2:C4] in the active sheet as the active ranges.
 * var rangeList = SpreadsheetApp.getActiveSheet().getRanges([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * SpreadsheetApp.setActiveRangeList(rangeList);
 * 
 * var selection = SpreadsheetApp.getSelection();
 * // Current cell: B2
 * var currentCell = selection.getCurrentCell();
 * // Active range: B2:C4
 * var activeRange = selection.getActiveRange();
 * // Active range list: [D4, B2:C4]
 * var activeRangeList = selection.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.setActiveRangeList
 * 
 * @param {SpreadsheetApp.RangeList} rangeList - The list of ranges to select.
 * 
 * @return {SpreadsheetApp.RangeList} the newly selected list of ranges
 */


/**
 * Sets the active sheet in a spreadsheet. The Google Sheets UI displays the chosen sheet unless
 * the sheet belongs to a different spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below makes the 2nd sheet active in the active spreadsheet.
 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 * SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.setActiveSheet
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The new active sheet.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet that has been made the new active sheet
 */


/**
 * Sets the active sheet in a spreadsheet, with the option to restore the most recent selection
 * within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a
 * different spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 * var firstSheet = spreadsheet.getSheets()[0];
 * var secondSheet = spreadsheet.getSheets()[1];
 * // Set the first sheet as the active sheet and select the range D4:F4.
 * spreadsheet.setActiveSheet(firstSheet).getRange(&#39;D4:F4&#39;).activate();
 * 
 * // Switch to the second sheet to do some work.
 * spreadsheet.setActiveSheet(secondSheet);
 * // Switch back to first sheet, and restore its selection.
 * spreadsheet.setActiveSheet(firstSheet, true);
 * 
 * // The selection of first sheet is restored, and it logs D4:F4
 * var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
 * Logger.log(range.getA1Notation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.setActiveSheet
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The new active sheet.
 * @param {Boolean} restoreSelection - If <code>true</code>, the most recent selection of the new active sheet
 *     becomes selected again as the new sheet becomes active; if <code>false</code>, the new sheet
 *     becomes active without changing the current selection.
 * 
 * @return {SpreadsheetApp.Sheet} the new active sheet
 */


/**
 * Sets the active spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below makes the spreadsheet with key &quot;1234567890&quot; the active spreadsheet
 * var ss = SpreadsheetApp.openById(&quot;1234567890&quot;);
 * SpreadsheetApp.setActiveSpreadsheet(ss);
 * </code></pre>
 * 
 * @function SpreadsheetApp.setActiveSpreadsheet
 * 
 * @param {SpreadsheetApp.Spreadsheet} newActiveSpreadsheet - The Spreadsheet to be made the active spreadsheet.
 * 
 * @return void
 */


/**
 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <p>If the specified cell is present in an already selected range, then that range becomes the
 * active range with the cell as the current cell.
 * 
 * <p>If the specified cell is not present in any selected range, then the existing selection is
 * removed and the cell becomes the current cell and the active range.
 * 
 * <p><b>Note:</b>The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise this method
 * throws an exception.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets the cell B5 in the first sheet as the current cell.
 * var cell = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange(&#39;B5&#39;);
 * SpreadsheetApp.setCurrentCell(cell);
 * 
 * var selection = SpreadsheetApp.getSelection();
 * // Current cell: B5
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.setCurrentCell
 * 
 * @param {SpreadsheetApp.Range} cell - The cell to set as the current cell.
 * 
 * @return {SpreadsheetApp.Range} the newly set current cell
 */



/**
 * @class SpreadsheetApp.AutoFillSeries
 */

/**
 * Auto-filling with this setting results in the empty cells in the expanded range being filled
 * with copies of the existing values.
 * 
 * @typedef {SpreadsheetApp.AutoFillSeries} SpreadsheetApp.AutoFillSeries.ALTERNATE_SERIES
 */
/**
 * Default. Auto-filling with this setting results in the empty cells in the expanded range being
 * filled with increments of the existing values.
 * 
 * @typedef {SpreadsheetApp.AutoFillSeries} SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES
 */

/**
 * @class SpreadsheetApp.Banding
 */

/**
 * Copies this banding to another range.
 * 
 * @function SpreadsheetApp.Banding#copyTo
 * 
 * @param {SpreadsheetApp.Range} range - The range to copy this banding to.
 * 
 * @return {SpreadsheetApp.Banding} the new banding
 */


/**
 * Returns the first column color that is alternating, or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getFirstColumnColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Returns the first row color that is alternating or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getFirstRowColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Returns the color of the last column, or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getFooterColumnColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Returns the color of the last row, or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getFooterRowColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Returns the color of the header column, or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getHeaderColumnColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Returns the color of the header row or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getHeaderRowColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Returns the range for this banding.
 * 
 * @function SpreadsheetApp.Banding#getRange
 * 
 * @return {SpreadsheetApp.Range} the range for this banding
 */


/**
 * Returns the second column color that is alternating, or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getSecondColumnColor
 * 
 * @return {String} the HEX color or <code>null</code> if no color is set
 */


/**
 * Returns the second row color that is alternating or <code>null</code> if no color is set.
 * 
 * @function SpreadsheetApp.Banding#getSecondRowColor
 * 
 * @return {String} the color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> if no color is set
 */


/**
 * Removes this banding.
 * 
 * @function SpreadsheetApp.Banding#remove
 * 
 * @return void
 */


/**
 * Sets the first column color that is alternating.
 * 
 * @function SpreadsheetApp.Banding#setFirstColumnColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color..
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the first row color that is alternating.
 * 
 * @function SpreadsheetApp.Banding#setFirstRowColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the color of the last column.
 * 
 * @function SpreadsheetApp.Banding#setFooterColumnColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the color of the last row.
 * 
 * @function SpreadsheetApp.Banding#setFooterRowColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the color of the header column.
 * 
 * @function SpreadsheetApp.Banding#setHeaderColumnColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the color of the header row.
 * 
 * @function SpreadsheetApp.Banding#setHeaderRowColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the range for this banding.
 * 
 * @function SpreadsheetApp.Banding#setRange
 * 
 * @param {SpreadsheetApp.Range} range - The new range for this banding.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the second column color that is alternating.
 * 
 * @function SpreadsheetApp.Banding#setSecondColumnColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */


/**
 * Sets the second row color that is alternating.
 * 
 * @function SpreadsheetApp.Banding#setSecondRowColor
 * 
 * @param {String} color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to clear the color.
 * 
 * @return {SpreadsheetApp.Banding} this banding, for chaining
 */



/**
 * @class SpreadsheetApp.BandingTheme
 */

/**
 * A blue banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.BLUE
 */
/**
 * A brown banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.BROWN
 */
/**
 * A cyan banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.CYAN
 */
/**
 * A green banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.GREEN
 */
/**
 * A grey banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.GREY
 */
/**
 * An indigo banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.INDIGO
 */
/**
 * A light green banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.LIGHT_GREEN
 */
/**
 * A light grey banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.LIGHT_GREY
 */
/**
 * An orange banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.ORANGE
 */
/**
 * A pink banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.PINK
 */
/**
 * A teal banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.TEAL
 */
/**
 * A yellow banding theme.
 * 
 * @typedef {SpreadsheetApp.BandingTheme} SpreadsheetApp.BandingTheme.YELLOW
 */

/**
 * @class SpreadsheetApp.BigQueryDataSourceSpec
 */

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpec#copy
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder.
 */


/**
 * Gets the parameters of the data source.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpec#getParameters
 * 
 * @return {SpreadsheetApp.DataSourceParameter[]} The parameter list.
 */


/**
 * Gets the billing project ID.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpec#getProjectId
 * 
 * @return {String} The project ID.
 */


/**
 * Gets the raw query string.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpec#getRawQuery
 * 
 * @return {String} The raw query string.
 */


/**
 * Gets the type of the data source.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpec#getType
 * 
 * @return {SpreadsheetApp.DataSourceType} The data source type.
 */



/**
 * @class SpreadsheetApp.BigQueryDataSourceSpecBuilder
 */

/**
 * Builds a data source specification from the settings in this builder. Must use <code>as...()</code>
 * to specify a data source type before building.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#build
 * 
 * @return {SpreadsheetApp.DataSourceSpec} The data source specification.
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#copy
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder.
 */


/**
 * Gets the parameters of the data source.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#getParameters
 * 
 * @return {SpreadsheetApp.DataSourceParameter[]} The parameter list.
 */


/**
 * Gets the billing project ID.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#getProjectId
 * 
 * @return {String} The project ID.
 */


/**
 * Gets the raw query string.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#getRawQuery
 * 
 * @return {String} The raw query string.
 */


/**
 * Gets the type of the data source.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#getType
 * 
 * @return {SpreadsheetApp.DataSourceType} The data source type.
 */


/**
 * Removes all the parameters.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#removeAllParameters
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpecBuilder} The builder, for chaining.
 */


/**
 * Removes the specified parameter.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#removeParameter
 * 
 * @param {String} parameterName - The name of the parameter to remove.
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpecBuilder} The builder, for chaining.
 */


/**
 * Adds a parameter, or if the parameter with the name exists, updates its source cell.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#setParameterFromCell
 * 
 * @param {String} parameterName - The parameter name.
 * @param {String} sourceCell - The source cell, as specified in A1 notation.
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpecBuilder} The builder, for chaining.
 */


/**
 * Sets the billing BigQuery project ID.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#setProjectId
 * 
 * @param {String} projectId - The ID of the billing project.
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpecBuilder} The builder, for chaining.
 */


/**
 * Sets the raw query string.
 * 
 * @function SpreadsheetApp.BigQueryDataSourceSpecBuilder#setRawQuery
 * 
 * @param {String} rawQuery - The raw query string.
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpecBuilder} The builder, for chaining.
 */



/**
 * @class SpreadsheetApp.BooleanCondition
 */

/**
 * Gets the background color string for this boolean condition. Returns <code>null</code> if not set.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the boolean condition background color for each conditional format rule on a sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * for (int i = 0; i &lt; rules.length; i++) {
 *   var color = rules[i].getBooleanCondition().getBackground();
 *   Logger.log(&quot;The background color for rule %d is %s&quot;, i, color);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getBackground
 * 
 * @return {String} the background color string, or <code>null</code> if not set for this condition
 */


/**
 * Returns <code>true</code> if this boolean condition bolds the text and returns <code>false</code> if this
 * boolean condition removes bolding from the text. Returns <code>null</code> if bolding is unaffected.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the boolean condition font weight for each conditional format rule on a sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * for (int i = 0; i &lt; rules.length; i++) {
 *   var bold = rules[i].getBooleanCondition().getBold();
 *   Logger.log(&quot;The font bold setting for rule %d is %b&quot;, i, weight);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getBold
 * 
 * @return {Boolean} whether or not the boolean condition bolds the text, or <code>null</code> if bolding is
 *     unaffected
 */


/**
 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> enum. To get the
 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 * modify a conditional formatting rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html#withCriteria(BooleanCriteria,Object)'>ConditionalFormatRuleBuilder.withCriteria(criteria, args)</a></code>.
 * 
 * <pre class="prettyprint">
 * // Log information about the conditional formats on the active sheet that use
 * // boolean conditions.
 * var sheet = SpreadsheetApp.getActiveSheet;
 * var formats = sheet.getConditionalFormats();
 * sheet.getConditionalFormats().forEach(function(format) {
 *   var booleanCondition = format.getBooleanCondition();
 *   if (booleanCondition) {
 *     var criteria = booleanCondition.getCriteriaType();
 *     var args = booleanCondition.getCriteriaValues();
 *     Logger.log('The conditional format rule is %s %s', criteria, args);
 *   }
 * });
 * </pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getCriteriaType
 * 
 * @return {SpreadsheetApp.BooleanCriteria} the type of conditional formatting criteria
 */


/**
 * Gets an array of arguments for the rule's criteria. To get the criteria type, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a conditional formatting rule, see
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html#withCriteria(BooleanCriteria,Object)'>ConditionalFormatRuleBuilder.withCriteria(criteria, args)</a></code>.
 * 
 * <pre class="prettyprint">
 * // Log information about the conditional formats on the active sheet that use
 * // boolean conditions.
 * var sheet = SpreadsheetApp.getActiveSheet;
 * var formats = sheet.getConditionalFormats();
 * sheet.getConditionalFormats().forEach(function(format) {
 *   var booleanCondition = format.getBooleanCondition();
 *   if (booleanCondition) {
 *     var criteria = booleanCondition.getCriteriaType();
 *     var args = booleanCondition.getCriteriaValues();
 *     Logger.log('The conditional format rule is %s %s', criteria, args);
 *   }
 * });
 * </pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getCriteriaValues
 * 
 * @return {Object[]} an array of arguments appropriate to the rule's criteria type; the number of arguments
 *     and their type match the corresponding <code>when...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html'>ConditionalFormatRuleBuilder</a></code> class
 */


/**
 * Gets the font color string for this boolean condition. Returns <code>null</code> if not set.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the boolean condition font color for each conditional format rule on a sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * for (int i = 0; i &lt; rules.length; i++) {
 *   var color = rules[i].getBooleanCondition().getFontColor();
 *   Logger.log(&quot;The font color for rule %d is %s&quot;, i, color);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getFontColor
 * 
 * @return {String} the font color string, or <code>null</code> if not set for this condition
 */


/**
 * Returns <code>true</code> if this boolean condition italicises the text and returns <code>false</code> if
 * this boolean condition removes italics from the text. Returns <code>null</code> if italics are
 * unaffected.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the boolean condition font style for each conditional format rule on a sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * for (int i = 0; i &lt; rules.length; i++) {
 *   var italic = rules[i].getBooleanCondition().getItalic();
 *   Logger.log(&quot;The font italic setting for rule %d is %b&quot;, i, italic);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getItalic
 * 
 * @return {Boolean} whether or not the boolean condition italicises the text, or <code>null</code> if
 *     italicising is unaffected
 */


/**
 * Returns <code>true</code> if this boolean condition strikes through the text and returns <code>false</code> if this boolean condition removes strikethrough from the text. Returns <code>null</code> if
 * strikethrough is unaffected.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the boolean condition strikethrough setting for each conditional format rule on a
 * // sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * for (int i = 0; i &lt; rules.length; i++) {
 *   var strikethrough = rules[i].getBooleanCondition().getStrikethrough();
 *   Logger.log(&quot;The font strikethrough setting for rule %d is %b&quot;, i, strikethrough);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getStrikethrough
 * 
 * @return {Boolean} whether or not the boolean condition strikes through the text, or <code>null</code> if
 *     strikethrough is unaffected
 */


/**
 * Returns <code>true</code> if this boolean condition underlines the text and returns <code>false</code> if
 * this boolean condition removes underlining from the text. Returns <code>null</code> if underlining
 * is unaffected.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the boolean condition underline setting for each conditional format rule on a sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * for (int i = 0; i &lt; rules.length; i++) {
 *   var underline = rules[i].getBooleanCondition().getUnderline();
 *   Logger.log(&quot;The font underline setting for rule %d is %b&quot;, i, underline);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.BooleanCondition#getUnderline
 * 
 * @return {Boolean} whether or not the boolean condition underlines the text, or <code>null</code> if
 *     underlining is unaffected
 */



/**
 * @class SpreadsheetApp.BooleanCriteria
 */

/**
 * The criteria is met when a cell is empty.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.CELL_EMPTY
 */
/**
 * The criteria is met when a cell is not empty.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.CELL_NOT_EMPTY
 */
/**
 * The criteria is met when the input makes the given formula evaluate to <code>true</code>.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.CUSTOM_FORMULA
 */
/**
 * The criteria is met when a date is after the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.DATE_AFTER
 */
/**
 * The criteria is met when a date is after the relative date value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.DATE_AFTER_RELATIVE
 */
/**
 * The criteria is met when a date is before the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.DATE_BEFORE
 */
/**
 * The criteria is met when a date is before the relative date value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.DATE_BEFORE_RELATIVE
 */
/**
 * The criteria is met when a date is equal to the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.DATE_EQUAL_TO
 */
/**
 * The criteria is met when a date is equal to the relative date value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.DATE_EQUAL_TO_RELATIVE
 */
/**
 * The criteria is met when a number that is between the given values.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_BETWEEN
 */
/**
 * The criteria is met when a number that is equal to the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_EQUAL_TO
 */
/**
 * The criteria is met when a number that is greater than the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_GREATER_THAN
 */
/**
 * The criteria is met when a number that is greater than or equal to the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_GREATER_THAN_OR_EQUAL_TO
 */
/**
 * The criteria is met when a number that is less than the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_LESS_THAN
 */
/**
 * The criteria is met when a number that is less than or equal to the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_LESS_THAN_OR_EQUAL_TO
 */
/**
 * The criteria is met when a number that is not between the given values.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_NOT_BETWEEN
 */
/**
 * The criteria is met when a number that is not equal to the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.NUMBER_NOT_EQUAL_TO
 */
/**
 * The criteria is met when the input contains the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.TEXT_CONTAINS
 */
/**
 * The criteria is met when the input does not contain the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.TEXT_DOES_NOT_CONTAIN
 */
/**
 * The criteria is met when the input ends with the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.TEXT_ENDS_WITH
 */
/**
 * The criteria is met when the input is equal to the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.TEXT_EQUAL_TO
 */
/**
 * The criteria is met when the input begins with the given value.
 * 
 * @typedef {SpreadsheetApp.BooleanCriteria} SpreadsheetApp.BooleanCriteria.TEXT_STARTS_WITH
 */

/**
 * @class SpreadsheetApp.BorderStyle
 */

/**
 * Dashed line borders.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle.DASHED
 */
/**
 * Dotted line borders.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle.DOTTED
 */
/**
 * Two solid line borders.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle.DOUBLE
 */
/**
 * Thin solid line borders.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle.SOLID
 */
/**
 * Medium solid line borders.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle.SOLID_MEDIUM
 */
/**
 * Thick solid line borders.
 * 
 * @typedef {SpreadsheetApp.BorderStyle} SpreadsheetApp.BorderStyle.SOLID_THICK
 */

/**
 * @class SpreadsheetApp.ConditionalFormatRule
 */

/**
 * Returns a rule builder preset with this rule's settings.
 * 
 * @function SpreadsheetApp.ConditionalFormatRule#copy
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} a builder based on this rule's settings
 */


/**
 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html'>BooleanCondition</a></code> information if this rule uses
 * boolean condition criteria. Otherwise returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log the boolean criteria type of the first conditional format rules of a sheet.
 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
 * var booleanCondition = rule.getBooleanCondition();
 * if (booleanCondition != null) {
 *   Logger.log(booleanCondition.getCriteriaType());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRule#getBooleanCondition
 * 
 * @return {SpreadsheetApp.BooleanCondition} the boolean condition object, or <code>null</code> if the rule does not use a boolean
 *     condition.
 */


/**
 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition.html'>GradientCondition</a></code> information, if this rule
 * uses gradient condition criteria. Otherwise returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log the gradient minimum color of the first conditional format rule of a sheet.
 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
 * var gradientCondition = rule.getGradientCondition();
 * if (gradientCondition != null) {
 *   Logger.log(gradientCondition.getMinColor());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRule#getGradientCondition
 * 
 * @return {SpreadsheetApp.GradientCondition} the gradient condition object, or <code>null</code> if the rule does not use a gradient
 *     condition.
 */


/**
 * Retrieves the ranges to which this conditional format rule is applied.
 * 
 * <pre class="prettyprint"><code>
 * // Log each range of the first conditional format rule of a sheet.
 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
 * var ranges = rule.getRanges();
 * for (int i = 0; i &lt; ranges.length; i++) {
 *   Logger.log(ranges[i].getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRule#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} the ranges to which this conditional format rule is applied.
 */



/**
 * @class SpreadsheetApp.ConditionalFormatRuleBuilder
 */

/**
 * Constructs a conditional format rule from the settings applied to the builder.
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#build
 * 
 * @return {SpreadsheetApp.ConditionalFormatRule} a representation of the conditional format rule
 */


/**
 * Returns a rule builder preset with this rule's settings.
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#copy
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} a builder based on this rule's settings
 */


/**
 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html'>BooleanCondition</a></code> information if this rule uses
 * boolean condition criteria. Otherwise returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log the boolean criteria type of the first conditional format rules of a sheet.
 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
 * var booleanCondition = rule.getBooleanCondition();
 * if (booleanCondition != null) {
 *   Logger.log(booleanCondition.getCriteriaType());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#getBooleanCondition
 * 
 * @return {SpreadsheetApp.BooleanCondition} the boolean condition object, or <code>null</code> if the rule does not use a boolean
 *     condition.
 */


/**
 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition.html'>GradientCondition</a></code> information, if this rule
 * uses gradient condition criteria. Otherwise returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log the gradient minimum color of the first conditional format rule of a sheet.
 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
 * var gradientCondition = rule.getGradientCondition();
 * if (gradientCondition != null) {
 *   Logger.log(gradientCondition.getMinColor());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#getGradientCondition
 * 
 * @return {SpreadsheetApp.GradientCondition} the gradient condition object, or <code>null</code> if the rule does not use a gradient
 *     condition.
 */


/**
 * Retrieves the ranges to which this conditional format rule is applied.
 * 
 * <pre class="prettyprint"><code>
 * // Log each range of the first conditional format rule of a sheet.
 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
 * var ranges = rule.getRanges();
 * for (int i = 0; i &lt; ranges.length; i++) {
 *   Logger.log(ranges[i].getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} the ranges to which this conditional format rule is applied.
 */


/**
 * Sets the background color for the conditional format rule's format. Passing in <code>null</code>
 * removes the background color format setting from the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
 * // background color to red if the cell has text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setBackground
 * 
 * @param {String} color - The desired color or <code>null</code> to clear.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets text bolding for the conditional format rule's format. If <code>bold</code> is <code>true</code>,
 * the rule bolds text if the condition is met; if <code>false</code>, the rule removes any existing
 * bolding if the condition is met. Passing in <code>null</code> removes the bold format setting from
 * the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
 * // text bold if the cell has text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setBold(true)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setBold
 * 
 * @param {Boolean} bold - Whether or not the text should be bolded if the format condition is met; <code>null</code> removes this setting.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the font color for the conditional format rule's format. Passing in <code>null</code> removes
 * the font color format setting from the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their font
 * // color to red if the cell has text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setFontColor(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setFontColor
 * 
 * @param {String} color - The desired color or <code>null</code> to clear.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum
 * value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
 * // background color somewhere between white and red, based on their values in comparison to
 * // the ranges minimum and maximum values.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .setGradientMaxpoint(&quot;#FF0000&quot;)
 *     .setGradientMinpoint(&quot;#FFFFFF&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setGradientMaxpoint
 * 
 * @param {String} color - The maxpoint color to set.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule's gradient maxpoint fields.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
 * // background color somewhere from red green to blue, based on their values in comparison to
 * // the values 0, 50, and 100.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .setGradientMaxpointWithValue(&quot;#0000FF&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
 *     .setGradientMidpointWithValue(&quot;#00FF00&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
 *     .setGradientMinpointWithValue(&quot;#FF0000&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setGradientMaxpointWithValue
 * 
 * @param {String} color - The maxpoint color to set.
 * @param {SpreadsheetApp.InterpolationType} type - The maxpoint interpolation type to set.
 * @param {String} value - The maxpoint value to set.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields
 * if the passed in interpolation type is <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
 * // background color somewhere from red green to blue, based on their values in comparison to
 * // the values 0, 50, and 100.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .setGradientMaxpointWithValue(&quot;#0000FF&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
 *     .setGradientMidpointWithValue(&quot;#00FF00&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
 *     .setGradientMinpointWithValue(&quot;#FF0000&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setGradientMidpointWithValue
 * 
 * @param {String} color - The midpoint color to set.
 * @param {SpreadsheetApp.InterpolationType} type - The midpoint interpolation type to set or <code>null</code> to clear.
 * @param {String} value - The midpoint value to set.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Clears the conditional format rule's gradient minpoint value, and instead uses the minimum
 * value in the rule's ranges. Also sets the gradient's minpoint color to the input color.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
 * // background color somewhere between white and red, based on their values in comparison to
 * // the ranges minimum and maximum values.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .setGradientMaxpoint(&quot;#FF0000&quot;)
 *     .setGradientMinpoint(&quot;#FFFFFF&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setGradientMinpoint
 * 
 * @param {String} color - The minpoint color to set.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule's gradient minpoint fields.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
 * // background color somewhere from red to green to blue, based on their values in comparison to
 * // the values 0, 50, and 100.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .setGradientMaxpointWithValue(&quot;#0000FF&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
 *     .setGradientMidpointWithValue(&quot;#00FF00&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
 *     .setGradientMinpointWithValue(&quot;#FF0000&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setGradientMinpointWithValue
 * 
 * @param {String} color - The minpoint color to set.
 * @param {SpreadsheetApp.InterpolationType} type - The minpoint interpolation type to set.
 * @param {String} value - The minpoint value to set.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets text italics for the conditional format rule's format. If <code>italic</code> is <code>true</code>,
 * the rule italicises text if the condition is met; if <code>false</code>, the rule removes any
 * existing italicization if the condition is met. Passing in <code>null</code> removes the italic
 * format setting from the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
 * // text italic if the cell has text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setItalic(true)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setItalic
 * 
 * @param {Boolean} italic - Whether or not the text should be italicised if the format condition is met;
 *     <code>null</code> removes this setting.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets one or more ranges to which this conditional format rule is applied. This operation
 * replaces any existing ranges. Setting an empty array clears any existing ranges. A rule must
 * have at least one range.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 and range D4:F6
 * // to turn red if they contain a number between 1 and 10.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeOne = sheet.getRange(&quot;A1:B3&quot;);
 * var rangeTwo = sheet.getRange(&quot;D4:F6&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberBetween(1, 10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([rangeOne, rangeTwo])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setRanges
 * 
 * @param {SpreadsheetApp.Range[]} ranges - The ranges to which this conditional format rule is applied.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets text strikethrough for the conditional format rule's format. If <code>strikethrough</code> is
 * <code>true</code>, the rule strikesthrough text if the condition is met; if <code>false</code>, the rule
 * removes any existing strikethrough formatting if the condition is met. Passing in <code>null</code>
 * removes the strikethrough format setting from the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to strikethrough
 * // their text if the cell has text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setStrikethrough(true)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setStrikethrough
 * 
 * @param {Boolean} strikethrough - Whether or not the text should be struckthrough if the format condition is
 *     met; <code>null</code> removes this setting.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets text underlining for the conditional format rule's format. If <code>underline</code> is <code>true</code>, the rule underlines text if the condition is met; if <code>false</code>, the rule removes any
 * existing underlines if the condition is met. Passing in <code>null</code> removes the underline
 * format setting from the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to underline
 * // their text if the cell has text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setUnderline(true)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#setUnderline
 * 
 * @param {Boolean} underline - Whether or not the text should be underlined if the format condition is met;
 *     <code>null</code> removes this setting.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when the cell is empty.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they are empty.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenCellEmpty()
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenCellEmpty
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when the cell is not empty.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they are not empty.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenCellNotEmpty()
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenCellNotEmpty
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a date is after the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a date after 11/4/1993.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenDateAfter(new Date(&quot;11/4/1993&quot;))
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenDateAfter
 * 
 * @param {Date} date - The latest date.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a date is after the given relative date.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a date after today.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenDateAfter(SpreadsheetApp.RelativeDate.TODAY)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenDateAfter
 * 
 * @param {SpreadsheetApp.RelativeDate} date - The latest date relative to the date type selected.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a date is before the given date.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a date before 11/4/1993.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenDateBefore(new Date(&quot;11/4/1993&quot;))
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenDateBefore
 * 
 * @param {Date} date - The earliest unacceptable date.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a date is before the given relative date.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a date before today.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenDateBefore(SpreadsheetApp.RelativeDate.TODAY)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenDateBefore
 * 
 * @param {SpreadsheetApp.RelativeDate} date - The latest date relative to the date type selected.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a date is equal to the given date.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain the date 11/4/1993.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenDateEqualTo(new Date(&quot;11/4/1993&quot;))
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenDateEqualTo
 * 
 * @param {Date} date - The sole acceptable date.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a date is equal to the given relative date.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain todays date.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenDateEqualTo(SpreadsheetApp.RelativeDate.TODAY)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenDateEqualTo
 * 
 * @param {SpreadsheetApp.RelativeDate} date - The latest date relative to the date type selected.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when that the given formula evaluates to <code>true</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they satisfy the condition &quot;=EQ(B4, C3)&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenFormulaSatisfied(&quot;=EQ(B4, C3)&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenFormulaSatisfied
 * 
 * @param {String} formula - A custom formula that evaluates to <code>true</code> if the input is valid.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number falls between, or is either of, two
 * specified values.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a number between 1 and 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberBetween(1, 10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberBetween
 * 
 * @param {Number} start - The lowest acceptable value.
 * @param {Number} end - The highest acceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number is equal to the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain the number 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberEqualTo(10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberEqualTo
 * 
 * @param {Number} number - The sole acceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number is greater than the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red
 * // if they contain a number greater than 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberGreaterThan(10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberGreaterThan
 * 
 * @param {Number} number - The highest unacceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number is greater than or equal to the given
 * value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a number greater than or equal to 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberGreaterThanOrEqualTo(10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberGreaterThanOrEqualTo
 * 
 * @param {Number} number - The lowest acceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional conditional format rule to trigger when a number less than the given
 * value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a number less than 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberLessThan(10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberLessThan
 * 
 * @param {Number} number - The lowest unacceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number less than or equal to the given
 * value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a number less than or equal to 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberLessThanOrEqualTo(10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberLessThanOrEqualTo
 * 
 * @param {Number} number - The highest acceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number does not fall between, and is neither
 * of, two specified values.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain a number not between 1 and 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberNotBetween(1, 10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberNotBetween
 * 
 * @param {Number} start - The lowest unacceptable value.
 * @param {Number} end - The highest unacceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when a number is not equal to the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they don&#39;t contain the number 10.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenNumberNotEqualTo(10)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenNumberNotEqualTo
 * 
 * @param {Number} number - The sole unacceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when that the input contains the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they contain the text &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextContains(&quot;hello&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenTextContains
 * 
 * @param {String} text - The value that the input must contain.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when that the input does not contain the given
 * value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they don&#39;t contain the text &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextDoesNotContain(&quot;hello&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenTextDoesNotContain
 * 
 * @param {String} text - The value that the input must not contain.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when that the input ends with the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they end with the text &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEndsWith(&quot;hello&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenTextEndsWith
 * 
 * @param {String} text - Text to compare against the end of the string.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when that the input is equal to the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they have text equal to &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextEqualTo(&quot;hello&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenTextEqualTo
 * 
 * @param {String} text - The sole acceptable value.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to trigger when that the input starts with the given value.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
 * // they start with the text &quot;hello&quot;.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * var rule = SpreadsheetApp.newConditionalFormatRule()
 *     .whenTextStartsWith(&quot;hello&quot;)
 *     .setBackground(&quot;#FF0000&quot;)
 *     .setRanges([range])
 *     .build();
 * var rules = sheet.getConditionalFormatRules();
 * rules.push(rule);
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#whenTextStartsWith
 * 
 * @param {String} text - Text to compare against the beginning of the string.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */


/**
 * Sets the conditional format rule to criteria defined by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> values,
 * typically taken from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaType()'>criteria</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaValues()'>arguments</a></code> of an
 * existing rule.
 * 
 * <pre class="prettyprint"><code>
 * // Adds a new conditional format rule that is a copy of the first active
 * // conditional format rule, except it instead sets its cells to have a black
 * // background color.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * var booleanCondition = rules[0].getBooleanCondition();
 * if (booleanCondition != null) {
 *   var rule = SpreadsheetApp.newConditionalFormatRule()
 *       .withCriteria(booleanCondition.getCriteriaType(),
 *          booleanCondition.getCriteriaValues())
 *       .setBackground(&quot;#000000&quot;)
 *       .build();
 *   rules.push(rule);
 * }
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.ConditionalFormatRuleBuilder#withCriteria
 * 
 * @param {SpreadsheetApp.BooleanCriteria} criteria - The type of conditional format criteria.
 * @param {Object[]} args - An array of arguments appropriate to the criteria type; the number of arguments and
 *     their type match the corresponding <code>when...()</code> method above.
 * 
 * @return {SpreadsheetApp.ConditionalFormatRuleBuilder} the builder, for chaining
 */



/**
 * @class SpreadsheetApp.ContainerInfo
 */

/**
 * The chart's left side is anchored in this column.
 * 
 * @function SpreadsheetApp.ContainerInfo#getAnchorColumn
 * 
 * @return {IntegerNum} 1-indexed column (that is, column C is 3)
 */


/**
 * The chart's top side is anchored in this row.
 * 
 * @function SpreadsheetApp.ContainerInfo#getAnchorRow
 * 
 * @return {IntegerNum} 1-indexed row (that is, row 5 returns 5)
 */


/**
 * The chart's upper left hand corner is offset from the anchor column by this many pixels.
 * 
 * @function SpreadsheetApp.ContainerInfo#getOffsetX
 * 
 * @return {IntegerNum} the horizontal offset in pixels for the upper left hand corner of the chart
 */


/**
 * The chart's upper left hand corner is offset from the anchor row by this many pixels.
 * 
 * @function SpreadsheetApp.ContainerInfo#getOffsetY
 * 
 * @return {IntegerNum} the vertical offset in pixels for the upper left hand corner of the chart
 */



/**
 * @class SpreadsheetApp.CopyPasteType
 */

/**
 * Paste the column widths only.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_COLUMN_WIDTHS
 */
/**
 * Paste the color rules only.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_CONDITIONAL_FORMATTING
 */
/**
 * Paste the data validation only.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION
 */
/**
 * Paste the format and data validation only.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_FORMAT
 */
/**
 * Paste the formulas only.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_FORMULA
 */
/**
 * Paste values, formulas, formats and merges.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_NORMAL
 */
/**
 * Paste values, formulas, formats and merges but without borders.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_NO_BORDERS
 */
/**
 * Paste the values ONLY without formats, formulas or merges.
 * 
 * @typedef {SpreadsheetApp.CopyPasteType} SpreadsheetApp.CopyPasteType.PASTE_VALUES
 */

/**
 * @class SpreadsheetApp.DataExecutionErrorCode
 */

/**
 * A data execution error code that is not supported in Apps Script.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.DATA_EXECUTION_ERROR_CODE_UNSUPPORTED
 */
/**
 * The data execution returns duplicate column names. Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.DUPLICATE_COLUMN_NAMES
 */
/**
 * Data execution engine error. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status.html#getErrorMessage()'>DataExecutionStatus.getErrorMessage()</a></code> for details.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.ENGINE
 */
/**
 * The data execution is interrupted. Please refresh later.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.INTERRUPTED
 */
/**
 * The data execution has no error.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.NONE
 */
/**
 * Other errors.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.OTHER
 */
/**
 * Invalid data execution parameter. The source cell must exist and contain only a number or text.
 * Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.PARAMETER_INVALID
 */
/**
 * The data execution timed out. Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.TIME_OUT
 */
/**
 * The data execution returns more cells than the limit. Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.TOO_MANY_CELLS
 */
/**
 * The data execution returns values that exceed the maximum characters allowed in a single cell
 * Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.TOO_MANY_CHARS_PER_CELL
 */
/**
 * The data execution returns more rows than the limit. Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.TOO_MANY_ROWS
 */
/**
 * The data execution returns unsupported data type. Please update data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
 * 
 * <p>For BigQuery, <code>ARRAY</code> or <code>STRUCT</code> type is not supported.
 * 
 * @typedef {SpreadsheetApp.DataExecutionErrorCode} SpreadsheetApp.DataExecutionErrorCode.UNSUPPORTED_DATA_TYPE
 */

/**
 * @class SpreadsheetApp.DataExecutionState
 */

/**
 * A data execution state is not supported in Apps Script.
 * 
 * @typedef {SpreadsheetApp.DataExecutionState} SpreadsheetApp.DataExecutionState.DATA_EXECUTION_STATE_UNSUPPORTED
 */
/**
 * The data execution is completed and has errors.
 * 
 * @typedef {SpreadsheetApp.DataExecutionState} SpreadsheetApp.DataExecutionState.ERROR
 */
/**
 * The data execution has not started.
 * 
 * @typedef {SpreadsheetApp.DataExecutionState} SpreadsheetApp.DataExecutionState.NOT_STARTED
 */
/**
 * The data execution has started and is running.
 * 
 * @typedef {SpreadsheetApp.DataExecutionState} SpreadsheetApp.DataExecutionState.RUNNING
 */
/**
 * The data execution is completed and successful.
 * 
 * @typedef {SpreadsheetApp.DataExecutionState} SpreadsheetApp.DataExecutionState.SUCCESS
 */

/**
 * @class SpreadsheetApp.DataExecutionStatus
 */

/**
 * Gets the error code of the data execution.
 * 
 * @function SpreadsheetApp.DataExecutionStatus#getErrorCode
 * 
 * @return {SpreadsheetApp.DataExecutionErrorCode} The error code.
 */


/**
 * Gets the error message of the data execution. The message may be empty.
 * 
 * @function SpreadsheetApp.DataExecutionStatus#getErrorMessage
 * 
 * @return {String} The error message.
 */


/**
 * Gets the state of the data execution.
 * 
 * @function SpreadsheetApp.DataExecutionStatus#getExecutionState
 * 
 * @return {SpreadsheetApp.DataExecutionState} The execution state.
 */


/**
 * Gets the time the data last successfully refreshed.
 * 
 * @function SpreadsheetApp.DataExecutionStatus#getLastRefreshedTime
 * 
 * @return {Date} The last successfully refreshed time, or <code>null</code> if there is never a successful
 *     data execution.
 */


/**
 * Returns <code>true</code> if the data from last successful execution is truncated, or <code>false</code>
 * otherwise.
 * 
 * @function SpreadsheetApp.DataExecutionStatus#isTruncated
 * 
 * @return {Boolean} <code>True</code> if the data from execution is truncated, or <code>false</code> otherwise.
 */



/**
 * @class SpreadsheetApp.DataSource
 */

/**
 * Gets the data source specification.
 * 
 * @function SpreadsheetApp.DataSource#getSpec
 * 
 * @return {SpreadsheetApp.DataSourceSpec} The data source specification.
 */


/**
 * Updates the data source specification and refreshes the data source objects linked with this
 * data source with the new specification.
 * 
 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
 * type.
 * 
 * @function SpreadsheetApp.DataSource#updateSpec
 * 
 * @param {SpreadsheetApp.DataSourceSpec} spec - The data source specification to update with.
 * 
 * @return {SpreadsheetApp.DataSource} The data source.
 */



/**
 * @class SpreadsheetApp.DataSourceParameter
 */

/**
 * Gets the parameter name.
 * 
 * @function SpreadsheetApp.DataSourceParameter#getName
 * 
 * @return {String} The parameter name.
 */


/**
 * Gets the source cell the parameter is valued based on, or <code>null</code> if the parameter type is
 * not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter-type.html#CELL'>DataSourceParameterType.CELL</a></code>.
 * 
 * @function SpreadsheetApp.DataSourceParameter#getSourceCell
 * 
 * @return {String} The source cell, as specified in A1 notation.
 */


/**
 * Gets the parameter type.
 * 
 * @function SpreadsheetApp.DataSourceParameter#getType
 * 
 * @return {SpreadsheetApp.DataSourceParameterType} The parameter type.
 */



/**
 * @class SpreadsheetApp.DataSourceParameterType
 */

/**
 * The data source parameter is valued based on a cell.
 * 
 * @typedef {SpreadsheetApp.DataSourceParameterType} SpreadsheetApp.DataSourceParameterType.CELL
 */
/**
 * A data source parameter type that is not supported in Apps Script.
 * 
 * @typedef {SpreadsheetApp.DataSourceParameterType} SpreadsheetApp.DataSourceParameterType.DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED
 */

/**
 * @class SpreadsheetApp.DataSourceSpec
 */

/**
 * Gets the spec for BigQuery data source.
 * 
 * @function SpreadsheetApp.DataSourceSpec#asBigQuery
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpec} The BigQuery data source spec.
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
 * 
 * @function SpreadsheetApp.DataSourceSpec#copy
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder.
 */


/**
 * Gets the parameters of the data source.
 * 
 * @function SpreadsheetApp.DataSourceSpec#getParameters
 * 
 * @return {SpreadsheetApp.DataSourceParameter[]} The parameter list.
 */


/**
 * Gets the type of the data source.
 * 
 * @function SpreadsheetApp.DataSourceSpec#getType
 * 
 * @return {SpreadsheetApp.DataSourceType} The data source type.
 */



/**
 * @class SpreadsheetApp.DataSourceSpecBuilder
 */

/**
 * Gets the builder for BigQuery data source.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#asBigQuery
 * 
 * @return {SpreadsheetApp.BigQueryDataSourceSpecBuilder} The BigQuery data source specification builder.
 */


/**
 * Builds a data source specification from the settings in this builder. Must use <code>as...()</code>
 * to specify a data source type before building.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#build
 * 
 * @return {SpreadsheetApp.DataSourceSpec} The data source specification.
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#copy
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder.
 */


/**
 * Gets the parameters of the data source.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#getParameters
 * 
 * @return {SpreadsheetApp.DataSourceParameter[]} The parameter list.
 */


/**
 * Gets the type of the data source.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#getType
 * 
 * @return {SpreadsheetApp.DataSourceType} The data source type.
 */


/**
 * Removes all the parameters.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#removeAllParameters
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder, for chaining.
 */


/**
 * Removes the specified parameter.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#removeParameter
 * 
 * @param {String} parameterName - The name of the parameter to remove.
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder, for chaining.
 */


/**
 * Adds a parameter, or if the parameter with the name exists, updates its source cell.
 * 
 * @function SpreadsheetApp.DataSourceSpecBuilder#setParameterFromCell
 * 
 * @param {String} parameterName - The parameter name.
 * @param {String} sourceCell - The source cell, as specified in A1 notation.
 * 
 * @return {SpreadsheetApp.DataSourceSpecBuilder} The builder, for chaining.
 */



/**
 * @class SpreadsheetApp.DataSourceTable
 */

/**
 * Refreshes the data of this object regardless of the current state. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#refreshData()'>refreshData()</a></code> for
 * more details.
 * 
 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
 * type.
 * 
 * @function SpreadsheetApp.DataSourceTable#forceRefreshData
 * 
 * @return {SpreadsheetApp.DataSourceTable} The data object.
 */


/**
 * Gets the data source the object is linked to.
 * 
 * @function SpreadsheetApp.DataSourceTable#getDataSource
 * 
 * @return {SpreadsheetApp.DataSource} The data source.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> this data source table spans.
 * 
 * @function SpreadsheetApp.DataSourceTable#getRange
 * 
 * @return {SpreadsheetApp.Range} The range.
 */


/**
 * Gets the data execution status of the object.
 * 
 * @function SpreadsheetApp.DataSourceTable#getStatus
 * 
 * @return {SpreadsheetApp.DataExecutionStatus} The data execution status.
 */


/**
 * Refreshes the data of the object.
 * 
 * <p>Throws an exception if currently in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR'>error</a></code> state. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>DataSource#updateSpec()</a></code> to update specificiation. The method is
 * preferred over <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#forceRefreshData()'>forceRefreshData()</a></code> to prevent unexpected edits on data source.
 * 
 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
 * type.
 * 
 * @function SpreadsheetApp.DataSourceTable#refreshData
 * 
 * @return {SpreadsheetApp.DataSourceTable} The data object.
 */


/**
 * Waits until the current execution completes, timing out after the provided number of seconds.
 * Throws an exception if the execution is not completed when timing out, but does not cancel the
 * data execution.
 * 
 * @function SpreadsheetApp.DataSourceTable#waitForCompletion
 * 
 * @param {IntegerNum} timeoutInSeconds - The time to wait for data execution, in seconds. The maximum is 300
 *     seconds.
 * 
 * @return {SpreadsheetApp.DataExecutionStatus} The data execution status.
 */



/**
 * @class SpreadsheetApp.DataSourceType
 */

/**
 * A BigQuery data source.
 * 
 * @typedef {SpreadsheetApp.DataSourceType} SpreadsheetApp.DataSourceType.BIGQUERY
 */
/**
 * A data source type that is not supported in Apps Script.
 * 
 * @typedef {SpreadsheetApp.DataSourceType} SpreadsheetApp.DataSourceType.DATA_SOURCE_TYPE_UNSUPPORTED
 */

/**
 * @class SpreadsheetApp.DataValidation
 */

/**
 * Creates a builder for a data validation rule based on this rule's settings.
 * 
 * <pre class="prettyprint"><code>
 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 * var rules = range.getDataValidations();
 * 
 * for (var i = 0; i &lt; rules.length; i++) {
 *   for (var j = 0; j &lt; rules[i].length; j++) {
 *     var rule = rules[i][j];
 * 
 *     if (rule != null) {
 *       var criteria = rule.getCriteriaType();
 *       var args = rule.getCriteriaValues();
 * 
 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
 *         // Create a builder from the existing rule, then change the dates.
 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
 *       }
 *     }
 *   }
 * }
 * range.setDataValidations(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.DataValidation#copy
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} a builder based on this rule's settings
 */


/**
 * Returns <code>true</code> if the rule shows a warning when input fails data validation, or <code>false</code> if it rejects the input entirely. The default for new data validation rules is <code>true</code>.
 * 
 * @function SpreadsheetApp.DataValidation#getAllowInvalid
 * 
 * @return {Boolean} <code>true</code> if the rule allows input that fails data validation; <code>false</code> if not
 */


/**
 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> enum. To get the
 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 * modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>DataValidationBuilder.withCriteria(criteria, args)</a></code>.
 * 
 * <pre class="prettyprint">
 * // Log information about the data validation rule for cell A1.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = cell.getDataValidation();
 * if (rule != null) {
 *   var criteria = rule.getCriteriaType();
 *   var args = rule.getCriteriaValues();
 *   Logger.log('The data validation rule is %s %s', criteria, args);
 * } else {
 *   Logger.log('The cell does not have a data validation rule.')
 * }
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidation#getCriteriaType
 * 
 * @return {SpreadsheetApp.DataValidationCriteria} the type of data validation criteria
 */


/**
 * Gets an array of arguments for the rule's criteria. To get the criteria type, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>DataValidationBuilder.withCriteria(criteria, args)</a></code>.
 * 
 * <pre class="prettyprint">
 * // Log information about the data validation rule for cell A1.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = cell.getDataValidation();
 * if (rule != null) {
 *   var criteria = rule.getCriteriaType();
 *   var args = rule.getCriteriaValues();
 *   Logger.log('The data validation rule is %s %s', criteria, args);
 * } else {
 *   Logger.log('The cell does not have a data validation rule.')
 * }
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidation#getCriteriaValues
 * 
 * @return {Object[]} an array of arguments appropriate to the rule's criteria type; the number of arguments
 *     and their type match the corresponding <code>require...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html'>DataValidation</a></code> class
 */


/**
 * Gets the rule's help text, or <code>null</code> if no help text is set.
 * 
 * @function SpreadsheetApp.DataValidation#getHelpText
 * 
 * @return {String} the rule's help text, or <code>null</code> if no help text is set
 */



/**
 * @class SpreadsheetApp.DataValidationBuilder
 */

/**
 * Constructs a data validation rule from the settings applied to the builder.
 * 
 * @function SpreadsheetApp.DataValidationBuilder#build
 * 
 * @return {SpreadsheetApp.DataValidation} a representation of the data validation rule
 */


/**
 * Creates a builder for a data validation rule based on this rule's settings.
 * 
 * <pre class="prettyprint"><code>
 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 * var rules = range.getDataValidations();
 * 
 * for (var i = 0; i &lt; rules.length; i++) {
 *   for (var j = 0; j &lt; rules[i].length; j++) {
 *     var rule = rules[i][j];
 * 
 *     if (rule != null) {
 *       var criteria = rule.getCriteriaType();
 *       var args = rule.getCriteriaValues();
 * 
 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
 *         // Create a builder from the existing rule, then change the dates.
 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
 *       }
 *     }
 *   }
 * }
 * range.setDataValidations(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#copy
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} a builder based on this rule's settings
 */


/**
 * Returns <code>true</code> if the rule shows a warning when input fails data validation, or <code>false</code> if it rejects the input entirely. The default for new data validation rules is <code>true</code>.
 * 
 * @function SpreadsheetApp.DataValidationBuilder#getAllowInvalid
 * 
 * @return {Boolean} <code>true</code> if the rule allows input that fails data validation; <code>false</code> if not
 */


/**
 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> enum. To get the
 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 * modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>withCriteria(criteria, args)</a></code>.
 * 
 * <pre class="prettyprint">
 * // Log information about the data validation rule for cell A1.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = cell.getDataValidation();
 * if (rule != null) {
 *   var criteria = rule.getCriteriaType();
 *   var args = rule.getCriteriaValues();
 *   Logger.log('The data validation rule is %s %s', criteria, args);
 * } else {
 *   Logger.log('The cell does not have a data validation rule.')
 * }
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#getCriteriaType
 * 
 * @return {SpreadsheetApp.DataValidationCriteria} the type of data validation criteria
 */


/**
 * Gets an array of arguments for the rule's criteria. To get the criteria type, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>withCriteria(criteria, args)</a></code>.
 * 
 * <pre class="prettyprint">
 * // Log information about the data validation rule for cell A1.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = cell.getDataValidation();
 * if (rule != null) {
 *   var criteria = rule.getCriteriaType();
 *   var args = rule.getCriteriaValues();
 *   Logger.log('The data validation rule is %s %s', criteria, args);
 * } else {
 *   Logger.log('The cell does not have a data validation rule.')
 * }
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#getCriteriaValues
 * 
 * @return {Object[]} an array of arguments appropriate to the rule's criteria type; the number of arguments
 *     and their type match the corresponding <code>require...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html'>DataValidationBuilder</a></code> class
 */


/**
 * Gets the rule's help text, or <code>null</code> if no help text is set.
 * 
 * @function SpreadsheetApp.DataValidationBuilder#getHelpText
 * 
 * @return {String} the rule's help text, or <code>null</code> if no help text is set
 */


/**
 * Sets the data validation rule to require a date.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireDate().build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDate
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date after the given value. The time fields of the
 * <code>Date</code> object are ignored; only the day, month, and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date after January 1, 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireDateAfter(new Date('1/1/2013')).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateAfter
 * 
 * @param {Date} date - The latest unacceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date before the given value. The time fields of the
 * <code>Date</code> object are ignored; only the day, month, and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date before January 1, 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireDateBefore(new Date('1/1/2013')).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateBefore
 * 
 * @param {Date} date - The earliest unacceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date that falls between, or is either of, two
 * specified dates. The time fields of the <code>Date</code> objects are ignored; only the day, month,
 * and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date in 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation()
 *     .requireDateBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateBetween
 * 
 * @param {Date} start - The earliest acceptable date.
 * @param {Date} end - The latest acceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date equal to the given value. The time fields of
 * the <code>Date</code> object are ignored; only the day, month, and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date equal to January 1, 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireDateEqualTo(new Date('1/1/2013'))
 *     .build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateEqualTo
 * 
 * @param {Date} date - The sole acceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date that does not fall between, and is neither of,
 * two specified dates. The time fields of the <code>Date</code> objects are ignored; only the day,
 * month, and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date not in 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation()
 *     .requireDateNotBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateNotBetween
 * 
 * @param {Date} start - The earliest unacceptable date.
 * @param {Date} end - The latest unacceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date on or after the given value. The time fields of
 * the <code>Date</code> object are ignored; only the day, month, and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date on or after January 1, 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation()
 *     .requireDateOnOrAfter(new Date('1/1/2013')).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateOnOrAfter
 * 
 * @param {Date} date - The earliest acceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a date on or before the given value. The time fields
 * of the <code>Date</code> object are ignored; only the day, month, and year fields are used.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a date on or before January 1, 2013.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation()
 *     .requireDateOnOrBefore(new Date('1/1/2013')).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireDateOnOrBefore
 * 
 * @param {Date} date - The latest acceptable date.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the given formula evaluates to <code>true</code>.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to equal B1 with a custom formula.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireFormulaSatisfied('=EQ(A1,B1)').build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireFormulaSatisfied
 * 
 * @param {String} formula - A custom formula that evaluates to <code>true</code> if the input is valid.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number that falls between, or is either of, two
 * specified numbers.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number between 1 and 10.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 10).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberBetween
 * 
 * @param {Number} start - The lowest acceptable value.
 * @param {Number} end - The highest acceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number equal to the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number equal to 3.1415926536.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberEqualTo(3.1415926536).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberEqualTo
 * 
 * @param {Number} number - The sole acceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number greater than the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number greater than 0.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberGreaterThan
 * 
 * @param {Number} number - The highest unacceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number greater than or equal to the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number greater than or equal to 0.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberGreaterThanOrEqualTo
 * 
 * @param {Number} number - The lowest acceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number less than the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number less than 0.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberLessThan(0).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberLessThan
 * 
 * @param {Number} number - The lowest unacceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number less than or equal to the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number less than or equal to 0.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberLessThanOrEqualTo(0).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberLessThanOrEqualTo
 * 
 * @param {Number} number - The highest acceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number that does not fall between, and is neither
 * of, two specified numbers.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number not between 1 and 10.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberNotBetween(1, 10).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberNotBetween
 * 
 * @param {Number} start - The lowest unacceptable value.
 * @param {Number} end - The highest unacceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require a number not equal to the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a number not equal to 0.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireNumberNotEqualTo(0).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireNumberNotEqualTo
 * 
 * @param {Number} number - The sole unacceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input contains the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require any value that includes "Google".
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireTextContains('Google').build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireTextContains
 * 
 * @param {String} text - The value that the input must contain.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input does not contain the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require any value that does not include "@".
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireTextDoesNotContain('@').build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireTextDoesNotContain
 * 
 * @param {String} text - The value that the input must not contain.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is equal to the given value.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require "Yes".
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireTextEqualTo('Yes').build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireTextEqualTo
 * 
 * @param {String} text - The sole acceptable value.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is in the form of an email address.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require text in the form of an email address.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireTextIsEmail().build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireTextIsEmail
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is in the form of a URL.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require text in the form of a URL.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireTextIsUrl().build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireTextIsUrl
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is equal to one of the given values.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require "Yes" or "No", with a dropdown menu.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No']).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireValueInList
 * 
 * @param {String[]} values - An array of acceptable values.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is equal to one of the given values,
 * with an option to hide the dropdown menu.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require "Yes" or "No", with no dropdown menu.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], false).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireValueInList
 * 
 * @param {String[]} values - An array of acceptable values.
 * @param {Boolean} showDropdown - <code>true</code> if the spreadsheet should show a dropdown menu for the values;
 *     <code>false</code> if not.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is equal to a value in the given range.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a value from B1:B10, with a dropdown menu.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var range = SpreadsheetApp.getActive().getRange('B1:B10');
 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireValueInRange
 * 
 * @param {SpreadsheetApp.Range} range - A range that contains the acceptable values.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is equal to a value in the given range,
 * with an option to hide the dropdown menu.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require value from B1:B10, with no dropdown menu.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var range = SpreadsheetApp.getActive().getRange('B1:B10');
 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range, false).build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireValueInRange
 * 
 * @param {SpreadsheetApp.Range} range - A range that contains the acceptable values.
 * @param {Boolean} showDropdown - <code>true</code> if the spreadsheet should show a dropdown menu for the values;
 *     <code>false</code> if not.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets whether to show a warning when input fails data validation or whether to reject the input
 * entirely. The default for new data validation rules is <code>true</code>.
 * 
 * @function SpreadsheetApp.DataValidationBuilder#setAllowInvalid
 * 
 * @param {Boolean} allowInvalidData - <code>true</code> if the rule should allow input that fails data validation;
 *     <code>false</code> if not.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the help text that appears when the user hovers over the cell on which data validation is
 * set.
 * 
 * @function SpreadsheetApp.DataValidationBuilder#setHelpText
 * 
 * @param {String} helpText - The help text to set.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to criteria defined by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> values,
 * typically taken from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()'>criteria</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()'>arguments</a></code> of an existing rule.
 * 
 * <pre class="prettyprint"><code>
 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 * var rules = range.getDataValidations();
 * 
 * for (var i = 0; i &lt; rules.length; i++) {
 *   for (var j = 0; j &lt; rules[i].length; j++) {
 *     var rule = rules[i][j];
 * 
 *     if (rule != null) {
 *       var criteria = rule.getCriteriaType();
 *       var args = rule.getCriteriaValues();
 * 
 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
 *         // Create a builder from the existing rule, then change the dates.
 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
 *       }
 *     }
 *   }
 * }
 * range.setDataValidations(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#withCriteria
 * 
 * @param {SpreadsheetApp.DataValidationCriteria} criteria - The type of data validation criteria.
 * @param {Object[]} args - An array of arguments appropriate to the criteria type; the number of arguments and
 *     their type match the corresponding <code>require...()</code> method above.
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is the specified value or blank. When
 * the input matches the specified value the cell is rendered as a checked checkbox. When the
 * input is blank the cell is rendered as an unchecked checkbox.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require a custom checked value that is rendered as a
 * // checkbox.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED').build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireCheckbox
 * 
 * @param {Object} checkedValue
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */


/**
 * Sets the data validation rule to require that the input is one of the specified values. When
 * the input is <code>checkedValue</code> the cell is rendered as a checked checkbox. When the
 * input is <code>uncheckedValue</code> the cell is rendered as an unchecked checkbox.
 * 
 * <pre class="prettyprint">
 * // Set the data validation for cell A1 to require custom checked values that are rendered as a
 * // checkbox.
 * var cell = SpreadsheetApp.getActive().getRange('A1');
 * var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED', 'PENDING').build();
 * cell.setDataValidation(rule);
 * </pre>
 * 
 * @function SpreadsheetApp.DataValidationBuilder#requireCheckbox
 * 
 * @param {Object} checkedValue
 * @param {Object} uncheckedValue
 * 
 * @return {SpreadsheetApp.DataValidationBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.DataValidationCriteria
 */

/**
 * Requires that the input is a custom value or a boolean; rendered as a checkbox.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.CHECKBOX
 */
/**
 * Requires that the input makes the given formula evaluate to <code>true</code>.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.CUSTOM_FORMULA
 */
/**
 * Requires a date that is after the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_AFTER
 */
/**
 * Requires a date that is before the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_BEFORE
 */
/**
 * Requires a date that is between the given values.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
 */
/**
 * Requires a date that is equal to the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_EQUAL_TO
 */
/**
 * Requires a date.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_IS_VALID_DATE
 */
/**
 * Requires a date that is not between the given values.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_NOT_BETWEEN
 */
/**
 * Require a date that is on or after the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_ON_OR_AFTER
 */
/**
 * Requires a date that is on or before the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.DATE_ON_OR_BEFORE
 */
/**
 * Requires a number that is between the given values.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_BETWEEN
 */
/**
 * Requires a number that is equal to the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_EQUAL_TO
 */
/**
 * Require a number that is greater than the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_GREATER_THAN
 */
/**
 * Requires a number that is greater than or equal to the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_GREATER_THAN_OR_EQUAL_TO
 */
/**
 * Requires a number that is less than the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_LESS_THAN
 */
/**
 * Requires a number that is less than or equal to the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_LESS_THAN_OR_EQUAL_TO
 */
/**
 * Requires a number that is not between the given values.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_NOT_BETWEEN
 */
/**
 * Requires a number that is not equal to the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.NUMBER_NOT_EQUAL_TO
 */
/**
 * Requires that the input contains the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.TEXT_CONTAINS
 */
/**
 * Requires that the input does not contain the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.TEXT_DOES_NOT_CONTAIN
 */
/**
 * Requires that the input is equal to the given value.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.TEXT_EQUAL_TO
 */
/**
 * Requires that the input is in the form of an email address.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.TEXT_IS_VALID_EMAIL
 */
/**
 * Requires that the input is in the form of a URL.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.TEXT_IS_VALID_URL
 */
/**
 * Requires that the input is equal to one of the given values.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST
 */
/**
 * Requires that the input is equal to a value in the given range.
 * 
 * @typedef {SpreadsheetApp.DataValidationCriteria} SpreadsheetApp.DataValidationCriteria.VALUE_IN_RANGE
 */

/**
 * @class SpreadsheetApp.DeveloperMetadata
 */

/**
 * Returns the unique ID associated with this developer metadata.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#getId
 * 
 * @return {IntegerNum} The unique ID associated with this developer metadata.
 */


/**
 * Returns the key associated with this developer metadata.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#getKey
 * 
 * @return {String} The key associated with this developer metadata.
 */


/**
 * Returns the location of this developer metadata.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#getLocation
 * 
 * @return {SpreadsheetApp.DeveloperMetadataLocation} The location of this developer metadata.
 */


/**
 * Returns the value associated with this developer metadata, or <code>null</code> if this metadata has
 * no value.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#getValue
 * 
 * @return {String} The value associated with this developer metadata, or <code>null</code> if this metadata has
 *     no value.
 */


/**
 * Returns the visibility of this developer metadata.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#getVisibility
 * 
 * @return {SpreadsheetApp.DeveloperMetadataVisibility} The visibility of this developer metadata.
 */


/**
 * Moves this developer metadata to the specified column. If the specified range does not
 * represent a single column this throws an exception.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#moveToColumn
 * 
 * @param {SpreadsheetApp.Range} column - The range representing the column that is the new location for this developer
 *     metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */


/**
 * Moves this developer metadata to the specified row. If the specified range does not represent a
 * single row this throws an exception.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#moveToRow
 * 
 * @param {SpreadsheetApp.Range} row - The range representing the row that is the new location for this developer metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */


/**
 * Moves this developer metadata to the specified sheet.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#moveToSheet
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The sheet that is the new location for this developer metata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */


/**
 * Moves this developer metadata to the top-level spreadsheet.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#moveToSpreadsheet
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */


/**
 * Deletes this metadata.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#remove
 * 
 * @return void
 */


/**
 * Sets the key of this developer metadata to the specified value.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#setKey
 * 
 * @param {String} key - The new key to set for this metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */


/**
 * Sets the value associated with this developer metadata to the specified value.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#setValue
 * 
 * @param {String} value - The new value to set for this metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */


/**
 * Sets the visibility of this developer metadata to the specified visibility.
 * 
 * @function SpreadsheetApp.DeveloperMetadata#setVisibility
 * 
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The new visibility to set for this metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadata} The developer metadata, for chaining.
 */



/**
 * @class SpreadsheetApp.DeveloperMetadataFinder
 */

/**
 * Executes this search and returns the matching metadata.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#find
 * 
 * @return {SpreadsheetApp.DeveloperMetadata[]} The developer metadata that match the search criteria.
 */


/**
 * Configures the search to consider intersecting locations that have metadata. This option is
 * only valid for range-scoped searches.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#onIntersectingLocations
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} The developer metadata finder, for chaining.
 */


/**
 * Limits this search to consider only metadata that match the specified ID.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#withId
 * 
 * @param {IntegerNum} id - The ID to match when searching for metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} The developer metadata finder, for chaining.
 */


/**
 * Limits this search to consider only metadata that match the specified key.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#withKey
 * 
 * @param {String} key - The key to match when searching for metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} The developer metadata finder, for chaining.
 */


/**
 * Limits this search to consider only metadata that match the specified location type.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#withLocationType
 * 
 * @param {SpreadsheetApp.DeveloperMetadataLocationType} locationType - The location type to match when searching for metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} The developer metadata finder, for chaining.
 */


/**
 * Limits this search to consider only metadata that match the specified value.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#withValue
 * 
 * @param {String} value - The value to match when searching for metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} The developer metadata finder, for chaining.
 */


/**
 * Limits this search to consider only metadata that match the specified visibility.
 * 
 * @function SpreadsheetApp.DeveloperMetadataFinder#withVisibility
 * 
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility to match when searching for metadata.
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} The developer metadata finder, for chaining.
 */



/**
 * @class SpreadsheetApp.DeveloperMetadataLocation
 */

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the column location of this metadata, or <code>null</code> if the
 * location type is not <code>DeveloperMetadataLocationType.COLUMN</code>.
 * 
 * @function SpreadsheetApp.DeveloperMetadataLocation#getColumn
 * 
 * @return {SpreadsheetApp.Range} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the column location of this metadata, or <code>null</code> if the
 *     location type is not <code>DeveloperMetadataLocationType.COLUMN</code>.
 */


/**
 * Gets the type of location.
 * 
 * @function SpreadsheetApp.DeveloperMetadataLocation#getLocationType
 * 
 * @return {SpreadsheetApp.DeveloperMetadataLocationType} The location type.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the row location of this metadata, or <code>null</code> if the
 * location type is not <code>DeveloperMetadataLocationType.ROW</code>.
 * 
 * @function SpreadsheetApp.DeveloperMetadataLocation#getRow
 * 
 * @return {SpreadsheetApp.Range} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the row location of this metadata, or <code>null</code> if the
 *     location type is not <code>DeveloperMetadataLocationType.ROW</code>.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> location of this metadata, or <code>null</code> if the location type is
 * not <code>DeveloperMetadataLocationType.SHEET</code>.
 * 
 * @function SpreadsheetApp.DeveloperMetadataLocation#getSheet
 * 
 * @return {SpreadsheetApp.Sheet} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> location of this metadata, or <code>null</code> if the location type is
 *     not <code>DeveloperMetadataLocationType.SHEET</code>.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> location of this metadata, or <code>null</code> if the location
 * type is not <code>DeveloperMetadataLocationType.SPREADSHEET</code>.
 * 
 * @function SpreadsheetApp.DeveloperMetadataLocation#getSpreadsheet
 * 
 * @return {SpreadsheetApp.Spreadsheet} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> location of this metadata, or <code>null</code> if the location
 *     type is not <code>DeveloperMetadataLocationType.SPREADSHEET</code>.
 */



/**
 * @class SpreadsheetApp.DeveloperMetadataLocationType
 */

/**
 * The location type for developer metadata associated with a column.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataLocationType} SpreadsheetApp.DeveloperMetadataLocationType.COLUMN
 */
/**
 * The location type for developer metadata associated with a row.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataLocationType} SpreadsheetApp.DeveloperMetadataLocationType.ROW
 */
/**
 * The location type for developer metadata associated with a whole sheet.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataLocationType} SpreadsheetApp.DeveloperMetadataLocationType.SHEET
 */
/**
 * The location type for developer metadata associated with the top-level spreadsheet.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataLocationType} SpreadsheetApp.DeveloperMetadataLocationType.SPREADSHEET
 */

/**
 * @class SpreadsheetApp.DeveloperMetadataVisibility
 */

/**
 * Document-visible metadata is accessible from any developer project with access to the document.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataVisibility} SpreadsheetApp.DeveloperMetadataVisibility.DOCUMENT
 */
/**
 * Project-visible metadata is only visible to and accessible by the developer project that
 * created the metadata. Do not use project-visible developer metadata as a security mechanism or
 * to store secrets. It can be exposed to users with view access to the document.
 * 
 * @typedef {SpreadsheetApp.DeveloperMetadataVisibility} SpreadsheetApp.DeveloperMetadataVisibility.PROJECT
 */

/**
 * @class SpreadsheetApp.Dimension
 */

/**
 * The column (vertical) dimension.
 * 
 * @typedef {SpreadsheetApp.Dimension} SpreadsheetApp.Dimension.COLUMNS
 */
/**
 * The row (horizontal) dimension.
 * 
 * @typedef {SpreadsheetApp.Dimension} SpreadsheetApp.Dimension.ROWS
 */

/**
 * @class SpreadsheetApp.Direction
 */

/**
 * The direction of increasing row indices.
 * 
 * @typedef {SpreadsheetApp.Direction} SpreadsheetApp.Direction.DOWN
 */
/**
 * The direction of increasing column indices.
 * 
 * @typedef {SpreadsheetApp.Direction} SpreadsheetApp.Direction.NEXT
 */
/**
 * The direction of decreasing column indices.
 * 
 * @typedef {SpreadsheetApp.Direction} SpreadsheetApp.Direction.PREVIOUS
 */
/**
 * The direction of decreasing row indices.
 * 
 * @typedef {SpreadsheetApp.Direction} SpreadsheetApp.Direction.UP
 */

/**
 * @class SpreadsheetApp.EmbeddedAreaChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the style for points in the line. By default, points will have no particular styles, and
 * only the line will be visible.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets large point style.
 * var builder = Charts.newLineChart();
 * builder.setPointStyle(Charts.PointStyle.LARGE);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - the style to use for points in the line
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setStacked
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#useLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedAreaChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedBarChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Reverses the direction in which the bars grow along the horizontal axis. By default, values
 * grow from left to right. Calling this method will cause them to grow from right to left.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#reverseDirection
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setStacked
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#useLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedBarChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedChart
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function SpreadsheetApp.EmbeddedChart#getAs
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
 * @function SpreadsheetApp.EmbeddedChart#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Returns information about where the chart is positioned within a sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * var containerInfo = chart.getContainerInfo();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#getContainerInfo
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns the strategy to use for handling hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build()
 * 
 * // Logs the strategy to use for hidden rows and columns which is
 * // Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS in this case.
 * Logger.log(chart.getHiddenDimensionStrategy());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#getHiddenDimensionStrategy
 * 
 * @return {Charts.ChartHiddenDimensionStrategy} The strategy to use for hidden rows and columns.
 */


/**
 * Returns the id that has been assigned to this object.
 * 
 * <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 * object.
 * 
 * @function SpreadsheetApp.EmbeddedChart#getId
 * 
 * @return {String} the id that has been assigned to this object
 */


/**
 * Returns the merge strategy used when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_ROWS'>MERGE_ROWS</a></code>, row are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C1:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build()
 * 
 * // Logs whether rows of multiple ranges are merged, which is MERGE_ROWS in this case.
 * Logger.log(chart.getMergeStrategy());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#getMergeStrategy
 * 
 * @return {Charts.ChartMergeStrategy} <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_ROWS'>MERGE_ROWS</a></code> if rows are merged across multiple
 *     ranges; <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS'>MERGE_COLUMNS</a></code> if columns are merged
 *     across multiple ranges
 */


/**
 * Returns the number of rows or columns the range that are treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build()
 * 
 * // Logs the number of rows or columns to use as headers, which is 1 in this case.
 * Logger.log(chart.getHeaders());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#getNumHeaders
 * 
 * @return {IntegerNum} The number of rows or columns treated as headers. Negative values indicate the headers
 *     are auto-detected.
 */


/**
 * Returns the options for this chart, such as height, colors, axes, etc.
 * 
 * <p>The returned options are immutable.
 * 
 * @function SpreadsheetApp.EmbeddedChart#getOptions
 * 
 * @return {Charts.ChartOptions} the options for this chart, such as height, colors, axes, etc.
 */


/**
 * Returns the ranges that this chart uses as a data source.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * var ranges = chart.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as this chart's data source
 */


/**
 * If <code>true</code>, the rows and columns used to populate the chart are switched. Defaults to
 * <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .addRange(range)
 *     .setChartType(Charts.ChartType.BAR)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build()
 * 
 * // Logs whether rows and columns should be transposed, which is true in this case.
 * Logger.log(chart.getTransposeRowsAndColumns());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#getTransposeRowsAndColumns
 * 
 * @return {Boolean} <code>true</code> if the rows and columns used to construct the chart are transposed.
 */


/**
 * Gets the type of this object.
 * 
 * @function SpreadsheetApp.EmbeddedChart#getType
 * 
 * @return {String} the object type
 */


/**
 * Returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html'>EmbeddedChartBuilder</a></code> that can be used to modify this chart. Invoke <code>sheet.updateChart(chart)</code> to save any changes.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var chart = sheet.getCharts()[0];
 * chart = chart.modify()
 *     .setOption(&#39;width&#39;, 800)
 *     .setOption(&#39;height&#39;, 640)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * sheet.updateChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChart#modify
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} a builder for creating embedded charts
 */


/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> to be used with UiApp.
 * 
 * @function SpreadsheetApp.EmbeddedChart#setId
 * 
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> from
 *     app.getElementById(id).
 * 
 * @return {Charts.Chart} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> itself, useful for chaining.
 */


/**
 * Returns a stable identifier for the chart that is unique across the spreadsheet containing the
 * chart or <code>null</code> if the chart is not in a spreadsheet.
 * 
 * @function SpreadsheetApp.EmbeddedChart#getChartId
 * 
 * @return {IntegerNum}
 */



/**
 * @class SpreadsheetApp.EmbeddedChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedColumnChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setStacked
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#useLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedColumnChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedComboChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setStacked
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#useLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedComboChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedHistogramChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setStacked
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#useLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedHistogramChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedLineChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the style to use for curves in the chart. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/curve-style.html'>CurveStyle</a></code> for allowed curve
 * styles.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and curves the lines in the chart.
 * var builder = Charts.newLineChart();
 * builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setCurveStyle
 * 
 * @param {Charts.CurveStyle} style - the style for curves in the chart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the style for points in the line. By default, points will have no particular styles, and
 * only the line will be visible.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets large point style.
 * var builder = Charts.newLineChart();
 * builder.setPointStyle(Charts.PointStyle.LARGE);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - the style to use for points in the line
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#useLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedLineChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedPieChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 * area or column charts), this means the horizontal axis is drawn from right to left. For
 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 * bottom. For pie charts, this means the slices are drawn counterclockwise.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 * var builder = Charts.newPieChart();
 * builder.reverseCategories();
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#reverseCategories
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the chart to be three-dimensional.
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#set3D
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedPieChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedScatterChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the background color for the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the background color to gray
 * var builder = Charts.newLineChart();
 * builder.setBackgroundColor(&quot;gray&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the colors for the lines in the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 * // respectively.
 * var builder = Charts.newLineChart();
 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setLegendTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the style for points in the line. By default, points will have no particular styles, and
 * only the line will be visible.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets large point style.
 * var builder = Charts.newLineChart();
 * builder.setPointStyle(Charts.PointStyle.LARGE);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - the style to use for points in the line
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the title of the chart. The title will be displayed centered above the chart.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;My Line Chart&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the text style of the chart title.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * var builder = Charts.newLineChart();
 * builder.setTitleTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setXAxisLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the range for the horizontal axis of the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
 * var builder = Charts.newTableChart();
 * builder.setXAxisRange(0, 100);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setXAxisRange
 * 
 * @param {Number} start - value for the lowest grid line of the horizontal axis
 * @param {Number} end - value for the highest grid line of the horizontal axis
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 * value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the horizontal axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setXAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setYAxisLogScale
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
 * the range will be expanded to include those data points.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
 * var builder = Charts.newTableChart();
 * builder.setYAxisRange(0, 100);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setYAxisRange
 * 
 * @param {Number} start - value for the lowest grid line of the vertical axis
 * @param {Number} end - value for the highest grid line of the vertical axis
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 * the value labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the vertical axis title text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitleTextStyle(textStyle);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedScatterChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.EmbeddedTableChartBuilder
 */

/**
 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
 * added to the chart.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#addRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to add.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asAreaChart
 * 
 * @return {SpreadsheetApp.EmbeddedAreaChartBuilder} a builder for an area chart
 */


/**
 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asBarChart
 * 
 * @return {SpreadsheetApp.EmbeddedBarChartBuilder} a builder for a bar chart
 */


/**
 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asColumnChart
 * 
 * @return {SpreadsheetApp.EmbeddedColumnChartBuilder} a builder for a column chart
 */


/**
 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asComboChart
 * 
 * @return {SpreadsheetApp.EmbeddedComboChartBuilder} a builder for a combo chart
 */


/**
 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asHistogramChart
 * 
 * @return {SpreadsheetApp.EmbeddedHistogramChartBuilder} a builder for a histogram chart
 */


/**
 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asLineChart
 * 
 * @return {SpreadsheetApp.EmbeddedLineChartBuilder} a builder for a line chart
 */


/**
 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asPieChart
 * 
 * @return {SpreadsheetApp.EmbeddedPieChartBuilder} a builder for a pie chart
 */


/**
 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asScatterChart
 * 
 * @return {SpreadsheetApp.EmbeddedScatterChartBuilder} a builder for a scatter chart
 */


/**
 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#asTableChart
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} a builder for a table chart
 */


/**
 * Builds the chart to reflect all changes made to it.
 * 
 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
 * via <code>sheet.updateChart(chart)</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#build
 * 
 * @return {SpreadsheetApp.EmbeddedChart} the created chart, which must still be added to the spreadsheet
 */


/**
 * Sets whether to enable paging through the data.
 * 
 * <p>The default behavior is paging disabled. If paging is enabled the default page size is 10.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#enablePaging
 * 
 * @param {Boolean} enablePaging - true if paging should be enabled, false otherwise
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Enables paging and sets the number of rows in each page.
 * 
 * <p>The default page size is 10.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and enables paging with page size of 5.
 * var builder = Charts.newTableChart();
 * builder.enablePaging(5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#enablePaging
 * 
 * @param {IntegerNum} pageSize - the number of rows in each page of the table
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Enables paging, sets the number of rows in each page and the first table page to display (page
 * numbers are zero based).
 * 
 * <p>The default page size is 10, and the default start page is 0.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and enables paging with page size of 5 and displays page 2
 * // first.
 * var builder = Charts.newTableChart();
 * builder.enablePaging(5, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#enablePaging
 * 
 * @param {IntegerNum} pageSize - the number of rows in each page of the table
 * @param {IntegerNum} startPage - the first table page to display (page numbers are zero based)
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the
 * column order of the table, so that column zero is the right-most column, and the last column is
 * the left-most column.
 * 
 * <p>This does not affect the column index in the underlying data, only the order of display.
 * Full bi-directional (BiDi) language display is not supported by the table visualization even
 * with this option. This option will be ignored if you enable paging (using the page option), or
 * if the table has scroll bars because you have specified height and width options smaller than
 * the required table size. The default behavior is RTL support disabled.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#enableRtlTable
 * 
 * @param {Boolean} rtlEnabled - true if right-to-left support should be enabled, false otherwise
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether to sort columns when the user clicks a column heading.
 * 
 * <p>If sorting is enabled, when users click on the column header the rows will be automatically
 * sorted. The default behavior is sorting enabled.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#enableSorting
 * 
 * @param {Boolean} enableSorting - true if to enable sorting by clicking on column headers, false otherwise
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Returns the current chart type.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#getChartType
 * 
 * @return {Charts.ChartType} the chart type
 */


/**
 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * // This method returns the exact same data as Chart#getContainerInfo()
 * var containerInfo = chartBuilder.getContainer();
 * 
 * // Logs the values we used in setPosition()
 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
 *           containerInfo.getAnchorColumn(),
 *           containerInfo.getAnchorRow(),
 *           containerInfo.getOffsetX(),
 *           containerInfo.getOffsetY());
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#getContainer
 * 
 * @return {SpreadsheetApp.ContainerInfo} an object containing the chart container's position
 */


/**
 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
 *     .setPosition(5, 5, 0, 0);
 * 
 * var ranges = chartBuilder.getRanges();
 * 
 * // There&#39;s only one range as a data source for this chart,
 * // so this logs &quot;A1:B8&quot;
 * for (var i in ranges) {
 *   var range = ranges[i];
 *   Logger.log(range.getA1Notation());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of ranges that serve as the chart to be built's data source
 */


/**
 * Removes the specified range from the chart this builder modifies. Does not throw an error if
 * the range is not in this chart.
 * 
 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
 * otherwise no change is made to the chart. This method cannot be used to partially remove values
 * from a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
 * 
 * var chartBuilder = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(firstRange)
 *     // This range will render in a different color
 *     .addRange(secondRange)
 *     .setPosition(5, 5, 0, 0);
 * 
 * // Note that you can use either of these two formats, but the range
 * // MUST match up with a range that was added via addRange(), or it
 * // will not be removed, and will not throw an exception
 * chartBuilder.removeRange(firstRange);
 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
 * 
 * var chart = chartBuilder.build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#removeRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to remove.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setChartType
 * 
 * @param {Charts.ChartType} type - The type to change this chart into.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the row number for the first row in the data table.
 * 
 * <p>The default row number of the first row is 1.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and sets the first row to be 2.
 * var builder = Charts.newTableChart();
 * builder.setFirstRowNumber(2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setFirstRowNumber
 * 
 * @param {IntegerNum} number - the row number for the first row in the data table
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setHiddenDimensionStrategy
 * 
 * @param {Charts.ChartHiddenDimensionStrategy} strategy - The strategy to use for hidden rows and columns.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the index of the column according to which the table should be initially sorted
 * (ascending).
 * 
 * <p>The column will be sorted in ascending order and will be marked with a small arrow
 * indicating that.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and sorts it by the second column (ascending).
 * var builder = Charts.newTableChart();
 * builder.setInitialSortingAscending(2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setInitialSortingAscending
 * 
 * @param {IntegerNum} column - the number of the column according to which the table should be initially sorted
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the index of the column according to which the table should be initially sorted
 * (descending).
 * 
 * <p>The column will be sorted in descending order and be marked with a a small arrow indicating
 * that.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and sorts it by the second column (descending).
 * var builder = Charts.newTableChart();
 * builder.setInitialSortingDescending(2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setInitialSortingDescending
 * 
 * @param {IntegerNum} column - the number of the column according to which the table should be initially sorted
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B10&quot;);
 * var range2 = sheet.getRange(&quot;C:C10&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .addRange(range2)
 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setMergeStrategy
 * 
 * @param {Charts.ChartMergeStrategy} mergeStrategy - The merge strategy to use.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the number of rows or columns of the range that should be treated as headers.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setNumHeaders(1)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setNumHeaders
 * 
 * @param {IntegerNum} headers - The number of rows or columns to treat as headers. Negative values cause headers
 *     to be auto-detected.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets advanced options for this chart. Lookup the chart type in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
 * Gallery</a> for a listing of the available options. For example, the options for an area chart
 * are listed <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
 * here</a>.
 * 
 * <p>This method does not validate the option you specify is valid for this chart type nor if the
 * value is of the correct format/structure.
 * 
 * <p>This example shows how to change the animation duration to 1 second and set a legend.
 * 
 * <pre class="prettyprint"><code>
 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setOption
 * 
 * @param {String} option - The name of the option.
 * @param {Object} value - The value of the option.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
 * <code>anchorColPos</code> are 1-indexed.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setPosition
 * 
 * @param {IntegerNum} anchorRowPos - The chart's top side is anchored in this row.
 * @param {IntegerNum} anchorColPos - The chart's left side is anchored in this column.
 * @param {IntegerNum} offsetX - The chart's upper right-hand corner is offset by this many pixels.
 * @param {IntegerNum} offsetY - The chart's lower left-hand corner is offset by this many pixels.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
 * columns are switched. Defaults to <code>false</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B5&quot;);
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(range)
 *     .setTransposeRowsAndColumns(true)
 *     .setPosition(5, 5, 0, 0)
 *     .build();
 * 
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#setTransposeRowsAndColumns
 * 
 * @param {Boolean} transpose - If <code>true</code>, the rows and columns used to construct the chart are
 *     transposed.
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */


/**
 * Sets whether to show the row number as the first column of the table.
 * 
 * <p>The default behavior is not showing row numbers.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#showRowNumberColumn
 * 
 * @param {Boolean} showRowNumber - true if the first column of the table should show the row number, false
 *     otherwise
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether alternating color style will be assigned to odd and even rows of a table chart.
 * 
 * <p>The default behavior is the rows having alternating color style.
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#useAlternatingRowStyle
 * 
 * @param {Boolean} alternate - true if color styles should be alternating, false otherwise
 * 
 * @return {SpreadsheetApp.EmbeddedTableChartBuilder} this builder, useful for chaining
 */


/**
 * Removes all ranges from the chart this builder modifies.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code updates the chart to use only the new ranges while preserving the existing
 * // formatting of the chart.
 * var chart = sheet.getCharts()[0];
 * var newChart = chart
 *     .modify()
 *     .clearRanges()
 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
 *     .build();
 * sheet.updateChart(newChart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.EmbeddedTableChartBuilder#clearRanges
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} this builder, for chaining
 */



/**
 * @class SpreadsheetApp.Filter
 */

/**
 * Gets the filter criteria on the specified column, or <code>null</code> if no filter criteria is set.
 * 
 * @function SpreadsheetApp.Filter#getColumnFilterCriteria
 * 
 * @param {IntegerNum} columnPosition - The 1-indexed position of the column.
 * 
 * @return {SpreadsheetApp.FilterCriteria} the filter criteria
 */


/**
 * Gets the range this filter is applied to.
 * 
 * @function SpreadsheetApp.Filter#getRange
 * 
 * @return {SpreadsheetApp.Range} the range
 */


/**
 * Removes this filter.
 * 
 * @function SpreadsheetApp.Filter#remove
 * 
 * @return void
 */


/**
 * Removes the filter criteria from the specified column.
 * 
 * @function SpreadsheetApp.Filter#removeColumnFilterCriteria
 * 
 * @param {IntegerNum} columnPosition - The 1-indexed position of the column.
 * 
 * @return {SpreadsheetApp.Filter} the filter, for chaining
 */


/**
 * Sets the filter criteria on the specified column.
 * 
 * @function SpreadsheetApp.Filter#setColumnFilterCriteria
 * 
 * @param {IntegerNum} columnPosition - The 1-indexed position of the column.
 * @param {SpreadsheetApp.FilterCriteria} filterCriteria - The filter criteria to set. If <code>null</code>, remove filter criteria from
 *     the specified column; alternatively, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter.html#removeColumnFilterCriteria(Integer)'>removeColumnFilterCriteria(columnPosition)</a></code>.
 * 
 * @return {SpreadsheetApp.Filter} the filter, for chaining
 */


/**
 * Sorts the filtered range by the specified column, excluding the first row (the header row) in
 * the range this filter is applied to.
 * 
 * @function SpreadsheetApp.Filter#sort
 * 
 * @param {IntegerNum} columnPosition - The 1-indexed position of the column.
 * @param {Boolean} ascending - If <code>true</code>, sort the filtered range in ascending order; if <code>false</code>,
 *     sort the filtered range in descending order.
 * 
 * @return {SpreadsheetApp.Filter} the filter, for chaining
 */



/**
 * @class SpreadsheetApp.FilterCriteria
 */

/**
 * Creates a builder for a filter criteria based on this filter criteria's settings.
 * 
 * @function SpreadsheetApp.FilterCriteria#copy
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} a filter criteria builder based on this filter criteria
 */


/**
 * Returns the boolean criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> enum. To get the
 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 * modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>FilterCriteriaBuilder.withCriteria(criteria, args)</a></code>.
 * 
 * @function SpreadsheetApp.FilterCriteria#getCriteriaType
 * 
 * @return {SpreadsheetApp.BooleanCriteria} the type of boolean criteria
 */


/**
 * Returns an array of arguments for the boolean criteria. To get the boolean criteria type, use
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>FilterCriteriaBuilder.withCriteria(criteria, args)</a></code>.
 * 
 * @function SpreadsheetApp.FilterCriteria#getCriteriaValues
 * 
 * @return {Object[]} an array of arguments appropriate to the boolean criteria type; the number of arguments
 *     and their type match the corresponding <code>when...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html'>FilterCriteriaBuilder</a></code> class
 */


/**
 * Returns the values to hide.
 * 
 * @function SpreadsheetApp.FilterCriteria#getHiddenValues
 * 
 * @return {String[]} an array of values to hide
 */


/**
 * Returns the values to show.
 * 
 * @function SpreadsheetApp.FilterCriteria#getVisibleValues
 * 
 * @return {String[]} an array of values to show
 */



/**
 * @class SpreadsheetApp.FilterCriteriaBuilder
 */

/**
 * Constructs a filter criteria from the settings supplied to the builder.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#build
 * 
 * @return {SpreadsheetApp.FilterCriteria} a representation of the filter criteria
 */


/**
 * Creates a builder for a filter criteria based on this filter criteria's settings.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#copy
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} a filter criteria builder based on this filter criteria
 */


/**
 * Returns the boolean criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> enum. To get the
 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
 * modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>withCriteria(criteria, args)</a></code>.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#getCriteriaType
 * 
 * @return {SpreadsheetApp.BooleanCriteria} the type of boolean criteria
 */


/**
 * Returns an array of arguments for the boolean criteria. To get the boolean criteria type, use
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>withCriteria(criteria, args)</a></code>.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#getCriteriaValues
 * 
 * @return {Object[]} an array of arguments appropriate to the boolean criteria type; the number of arguments
 *     and their type match the corresponding <code>when...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html'>FilterCriteriaBuilder</a></code> class
 */


/**
 * Returns the values to hide.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#getHiddenValues
 * 
 * @return {String[]} an array of values to hide
 */


/**
 * Returns the values to show.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#getVisibleValues
 * 
 * @return {String[]} an array of values to show
 */


/**
 * Sets the values to hide. Clears any existing visible or hidden values.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#setHiddenValues
 * 
 * @param {String[]} values - The list of values to hide.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the values to show. It clears any existing visible or hidden values.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#setVisibleValues
 * 
 * @param {String[]} values - The list of values to show.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell is empty.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenCellEmpty
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell is not empty.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenCellNotEmpty
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell date is after the specified value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenDateAfter
 * 
 * @param {Date} date - The latest date.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell date is after the specified relative
 * date.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenDateAfter
 * 
 * @param {SpreadsheetApp.RelativeDate} date - The latest date relative to the date type selected.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell date is before the specified date.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenDateBefore
 * 
 * @param {Date} date - The earliest unacceptable date.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where a cell date is before the specified relative date.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenDateBefore
 * 
 * @param {SpreadsheetApp.RelativeDate} date - The latest date relative to the date type selected.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where a cell date is equal to the specified date.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenDateEqualTo
 * 
 * @param {Date} date - The sole acceptable date.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where a cell date is equal to the specified relative
 * date.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenDateEqualTo
 * 
 * @param {SpreadsheetApp.RelativeDate} date - The latest date relative to the date type selected.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the specified formula (such as <code>=B:B&lt;C:C</code>)
 * evaluates to <code>true</code>.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenFormulaSatisfied
 * 
 * @param {String} formula - A custom formula that evaluates to <code>true</code> if the input is valid.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number is falls between, or is either of,
 * two specified numbers.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberBetween
 * 
 * @param {Number} start - The lowest acceptable value.
 * @param {Number} end - The highest acceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number is equal to the specified value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberEqualTo
 * 
 * @param {Number} number - The sole acceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number is greater than the specified
 * value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberGreaterThan
 * 
 * @param {Number} number - The highest unacceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number is greater than or equal to the
 * specified value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberGreaterThanOrEqualTo
 * 
 * @param {Number} number - The lowest acceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the conditional conditional format rule to show cells where the cell number is less than
 * the specified value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberLessThan
 * 
 * @param {Number} number - The lowest unacceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number is less than or equal to the
 * specified value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberLessThanOrEqualTo
 * 
 * @param {Number} number - The highest acceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number does not fall between, and is
 * neither of, two specified numbers.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberNotBetween
 * 
 * @param {Number} start - The lowest unacceptable value.
 * @param {Number} end - The highest unacceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell number is not equal to the specified
 * value.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenNumberNotEqualTo
 * 
 * @param {Number} number - The sole unacceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell text contains the specified text.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenTextContains
 * 
 * @param {String} text - The value that the input must contain.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell text does not contain the specified text.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenTextDoesNotContain
 * 
 * @param {String} text - The value that the input must not contain.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell text ends with the specified text.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenTextEndsWith
 * 
 * @param {String} text - Text to compare against the end of the string.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell text is equal to the specified text.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenTextEqualTo
 * 
 * @param {String} text - The sole acceptable value.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the filter criteria to show cells where the cell text starts with the specified text.
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#whenTextStartsWith
 * 
 * @param {String} text - Text to compare against the beginning of the string.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */


/**
 * Sets the boolean criteria to criteria defined by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> values, typically
 * taken from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaType()'>criteria</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaValues()'>arguments</a></code> of an existing criteria.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a filter criteria that is based on an existing criteria.
 * 
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var criteria = sheet.getFilter().getColumnFilterCriteria(1);
 * var newCriteria = SpreadsheetApp.newFilterCriteria()
 *     .withCriteria(criteria.getCriteriaType(), criteria.getCriteriaValues())
 *     .setHiddenValues([&#39;c&#39;])
 *     .build();
 * </code></pre>
 * 
 * @function SpreadsheetApp.FilterCriteriaBuilder#withCriteria
 * 
 * @param {SpreadsheetApp.BooleanCriteria} criteria - The type of boolean criteria.
 * @param {Object[]} args - An array of arguments appropriate to the criteria type; the number of arguments and
 *     their type match the corresponding <code>when...()</code> method above.
 * 
 * @return {SpreadsheetApp.FilterCriteriaBuilder} the builder, for chaining
 */



/**
 * @class SpreadsheetApp.GradientCondition
 */

/**
 * Gets the color set for the maximum value of this gradient condition. Returns an empty string if
 * the color hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMaxColor
 * 
 * @return {String} the color set for the maximum value of this gradient condition or an empty string
 */


/**
 * Gets the interpolation type for the maximum value of this gradient condition. Returns <code>null</code> if the gradient max type hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMaxType
 * 
 * @return {SpreadsheetApp.InterpolationType} the interpolation type for the maximum value of this gradient condition or <code>null</code>
 */


/**
 * Gets the max value of this gradient condition. Returns an empty string if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/interpolation-type.html'>InterpolationType</a></code> is <code>MAX</code> or if the max value hasn't been
 * set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMaxValue
 * 
 * @return {String} the maximum value if specified or an empty string
 */


/**
 * Gets the color set for the mid-point value of this gradient condition. Returns an empty string
 * if the color hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMidColor
 * 
 * @return {String} the color set for the midpoint value of this gradient condition or an empty string
 */


/**
 * Gets the interpolation type for the mid-point value of this gradient condition. Returns <code>null</code> if the gradient mid type hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMidType
 * 
 * @return {SpreadsheetApp.InterpolationType} the interpolation type for the mid-point value of this gradient condition or <code>null</code>
 */


/**
 * Gets the mid-point value of this gradient condition. Returns an empty string if the gradient
 * mid value hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMidValue
 * 
 * @return {String} the mid-point value or an empty string
 */


/**
 * Gets the color set for the minimum value of this gradient condition. Returns an empty string if
 * the color hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMinColor
 * 
 * @return {String} the color set for the minimum value of this gradient condition or an empty string
 */


/**
 * Gets the interpolation type for the minimum value of this gradient condition. Returns <code>null</code> if the gradient min type hasn't been set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMinType
 * 
 * @return {SpreadsheetApp.InterpolationType} the interpolation type for the minimum value of this gradient condition or <code>null</code>
 */


/**
 * Gets the minimum value of this gradient condition. Returns an empty string if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/interpolation-type.html'>InterpolationType</a></code> is <code>MIN</code> or if the min value hasn't been
 * set.
 * 
 * @function SpreadsheetApp.GradientCondition#getMinValue
 * 
 * @return {String} the minimum value if specified or an empty string
 */



/**
 * @class SpreadsheetApp.Group
 */

/**
 * Collapses this group.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(2, 1);
 * 
 * // Collapses this group.
 * group.collapse();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#collapse
 * 
 * @return {SpreadsheetApp.Group} this group, for chaining
 */


/**
 * Expands this group.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(2, 1);
 * 
 * // Expands this group.
 * group.expand();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#expand
 * 
 * @return {SpreadsheetApp.Group} this group, for chaining
 */


/**
 * Returns the control toggle index of this group. This is the index just before the range when
 * the control toggle is shown before the group, or the index just after the range otherwise.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * sheet.setRowGroupControlAfter(true);
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(2, 1);
 * 
 * // Returns 4
 * var controlIndex = group.getControlIndex();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#getControlIndex
 * 
 * @return {IntegerNum} the control toggle index of this group
 */


/**
 * Returns the depth of this group.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(2, 1);
 * 
 * // Returns 1 if the group is at depth 1.
 * var depth = group.getDepth();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#getDepth
 * 
 * @return {IntegerNum} the depth of this group
 */


/**
 * Returns the range over which this group exists.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(1, 1);
 * 
 * // Returns the range 2:3 if the group is over rows 2:3
 * range = group.getRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#getRange
 * 
 * @return {SpreadsheetApp.Range} the range over which the group exists
 */


/**
 * Returns <code>true</code> if this group is collapsed.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(2, 1);
 * 
 * // Returns true if the group is collapsed.
 * var isCollapsed = group.isCollapsed();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#isCollapsed
 * 
 * @return {Boolean} <code>true</code> if this group is collapsed; returns <code>false</code> otherwise
 */


/**
 * Removes this group from the sheet, reducing the group depth of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group.html#getRange()'>range</a></code> by
 * one. This may modify other groups. After calling this, the group object becomes invalid to use.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(2:3);
 * range.shiftRowGroupDepth(1);
 * var group = sheet.getRowGroupAt(2, 1);
 * 
 * // Removes this group
 * var range = group.remove();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Group#remove
 * 
 * @return void
 */



/**
 * @class SpreadsheetApp.GroupControlTogglePosition
 */

/**
 * The position where the control toggle is after the group (at higher indices).
 * 
 * @typedef {SpreadsheetApp.GroupControlTogglePosition} SpreadsheetApp.GroupControlTogglePosition.AFTER
 */
/**
 * The position where the control toggle is before the group (at lower indices).
 * 
 * @typedef {SpreadsheetApp.GroupControlTogglePosition} SpreadsheetApp.GroupControlTogglePosition.BEFORE
 */

/**
 * @class SpreadsheetApp.InterpolationType
 */

/**
 * Infer the maximum number as a specific interpolation point for a gradient condition.
 * 
 * @typedef {SpreadsheetApp.InterpolationType} SpreadsheetApp.InterpolationType.MAX
 */
/**
 * Infer the minimum number as a specific interpolation point for a gradient condition.
 * 
 * @typedef {SpreadsheetApp.InterpolationType} SpreadsheetApp.InterpolationType.MIN
 */
/**
 * Use the number as as specific interpolation point for a gradient condition.
 * 
 * @typedef {SpreadsheetApp.InterpolationType} SpreadsheetApp.InterpolationType.NUMBER
 */
/**
 * Use the number as a percentage interpolation point for a gradient condition.
 * 
 * @typedef {SpreadsheetApp.InterpolationType} SpreadsheetApp.InterpolationType.PERCENT
 */
/**
 * Use the number as a percentile interpolation point for a gradient condition.
 * 
 * @typedef {SpreadsheetApp.InterpolationType} SpreadsheetApp.InterpolationType.PERCENTILE
 */

/**
 * @class SpreadsheetApp.NamedRange
 */

/**
 * Gets the name of this named range.
 * 
 * @function SpreadsheetApp.NamedRange#getName
 * 
 * @return {String} the name of this named range
 */


/**
 * Gets the range referenced by this named range.
 * 
 * @function SpreadsheetApp.NamedRange#getRange
 * 
 * @return {SpreadsheetApp.Range} the spreadsheet range that is associated with this named range
 */


/**
 * Deletes this named range.
 * 
 * <pre class="prettyprint"><code>
 * // The code below deletes all the named ranges in the spreadsheet.
 * var namedRanges = SpreadsheetApp.getActive().getNamedRanges();
 * for (var i = 0; i &lt; namedRanges.length; i++) {
 *   namedRanges[i].remove();
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.NamedRange#remove
 * 
 * @return void
 */


/**
 * Sets/updates the name of the named range.
 * 
 * <pre class="prettyprint"><code>
 * // The code below updates the name for the first named range.
 * var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
 * if (namedRanges.length &gt; 1) {
 *   namedRanges[0].setName(&quot;UpdatedNamedRange&quot;);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.NamedRange#setName
 * 
 * @param {String} name - The new name of the named range.
 * 
 * @return {SpreadsheetApp.NamedRange} the range whose name was set by the call
 */


/**
 * Sets/updates the range for this named range.
 * 
 * @function SpreadsheetApp.NamedRange#setRange
 * 
 * @param {SpreadsheetApp.Range} range - The spreadsheet range to associate with this named range.
 * 
 * @return {SpreadsheetApp.NamedRange} the named range for which the spreadsheet range was set
 */



/**
 * @class SpreadsheetApp.OverGridImage
 */

/**
 * Assigns the function with the specified function name to this image.
 * 
 * @function SpreadsheetApp.OverGridImage#assignScript
 * 
 * @param {String} functionName - The name of the function being specified. This must be a public top level
 *     function, not one ending in underscore such as <code>privateFunction_</code>.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Returns the alt-text description for this image.
 * 
 * @function SpreadsheetApp.OverGridImage#getAltTextDescription
 * 
 * @return {String} The alt-text description.
 */


/**
 * Returns the alt-text title for this image.
 * 
 * @function SpreadsheetApp.OverGridImage#getAltTextTitle
 * 
 * @return {String} The alt-text title.
 */


/**
 * Returns the cell where an image is anchored.
 * 
 * @function SpreadsheetApp.OverGridImage#getAnchorCell
 * 
 * @return {SpreadsheetApp.Range} The anchor cell.
 */


/**
 * Returns the horizontal pixel offset from the anchor cell.
 * 
 * @function SpreadsheetApp.OverGridImage#getAnchorCellXOffset
 * 
 * @return {IntegerNum} The horizontal pixel offset.
 */


/**
 * Returns the vertical pixel offset from the anchor cell.
 * 
 * @function SpreadsheetApp.OverGridImage#getAnchorCellYOffset
 * 
 * @return {IntegerNum} The vertical pixel offset.
 */


/**
 * Returns the actual height of this image in pixels.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the height of all images in a spreadsheet
 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
 * for (var i = 0; i &lt; images.length; i++) {
 *   Logger.log(images[i].getHeight());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.OverGridImage#getHeight
 * 
 * @return {IntegerNum} The height of the image in pixels.
 */


/**
 * Returns the inherent height of this image in pixels.
 * 
 * @function SpreadsheetApp.OverGridImage#getInherentHeight
 * 
 * @return {IntegerNum} The inherent height in pixels.
 */


/**
 * Returns the inherent height of this image in pixels.
 * 
 * @function SpreadsheetApp.OverGridImage#getInherentWidth
 * 
 * @return {IntegerNum} The inherent width in pixels.
 */


/**
 * Returns the name of the function assigned to this image.
 * 
 * @function SpreadsheetApp.OverGridImage#getScript
 * 
 * @return {String} The name of the function.
 */


/**
 * Returns the sheet this image appears on.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the parent sheet of all images in a spreadsheet
 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
 * for (var i = 0; i &lt; images.length; i++) {
 *   Logger.log(images[i].getSheet());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.OverGridImage#getSheet
 * 
 * @return {SpreadsheetApp.Sheet} The sheet the image appears on.
 */


/**
 * Returns a Google-hosted URL to the image. This is not the same URL used to originally specify
 * the image and is only guaranteed to be valid as long as the image is not deleted from the
 * spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the url of all images in a spreadsheet
 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
 * for (var i = 0; i &lt; images.length; i++) {
 *   Logger.log(images[i].getUrl());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.OverGridImage#getUrl
 * 
 * @return {String} The Google-hosted URL of the image.
 */


/**
 * Returns the actual width of this image in pixels.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the width of all images in a spreadsheet
 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
 * for (var i = 0; i &lt; images.length; i++) {
 *   Logger.log(images[i].getWidth());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.OverGridImage#getWidth
 * 
 * @return {IntegerNum} The width of the image in pixels.
 */


/**
 * Deletes this image from the spreadsheet. Any further operation on the image results in a script
 * error.
 * 
 * <pre class="prettyprint"><code>
 * // Deletes all images in a spreadsheet
 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
 * for (var i = 0; i &lt; images.length; i++) {
 *   images[i].remove();
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.OverGridImage#remove
 * 
 * @return void
 */


/**
 * Replaces this image with the one specified by the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html'>BlobSource</a></code>.
 * 
 * @function SpreadsheetApp.OverGridImage#replace
 * 
 * @param {BlobSource} blob - The new image as a Blob.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Replaces this image with the one from the specified URL.
 * 
 * @function SpreadsheetApp.OverGridImage#replace
 * 
 * @param {String} url - The URL of the new image.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Resets this image to its inherent dimensions.
 * 
 * @function SpreadsheetApp.OverGridImage#resetSize
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Sets the alt-text description for this image.
 * 
 * @function SpreadsheetApp.OverGridImage#setAltTextDescription
 * 
 * @param {String} description - The new alt-text description for the image.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Sets the alt-text title for this image.
 * 
 * @function SpreadsheetApp.OverGridImage#setAltTextTitle
 * 
 * @param {String} title - The new alt-text tile for the image.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Sets the cell where an image is anchored.
 * 
 * @function SpreadsheetApp.OverGridImage#setAnchorCell
 * 
 * @param {SpreadsheetApp.Range} cell - The new anchor cell.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Sets the horizontal pixel offset from the anchor cell.
 * 
 * @function SpreadsheetApp.OverGridImage#setAnchorCellXOffset
 * 
 * @param {IntegerNum} offset - The new horizonal pixel offset.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Sets the vertical pixel offset from the anchor cell.
 * 
 * @function SpreadsheetApp.OverGridImage#setAnchorCellYOffset
 * 
 * @param {IntegerNum} offset - The new vertical pixel offset.
 * 
 * @return {SpreadsheetApp.OverGridImage} This image, for chaining.
 */


/**
 * Sets the actual height of this image in pixels.
 * 
 * @function SpreadsheetApp.OverGridImage#setHeight
 * 
 * @param {IntegerNum} height - The desired height in pixels.
 * 
 * @return {SpreadsheetApp.OverGridImage} The image for chaining.
 */


/**
 * Sets the actual width of this image in pixels.
 * 
 * @function SpreadsheetApp.OverGridImage#setWidth
 * 
 * @param {IntegerNum} width - The desired width in pixels.
 * 
 * @return {SpreadsheetApp.OverGridImage} The image for chaining.
 */



/**
 * @class SpreadsheetApp.PageProtection
 */

/**
 * Adds a user to the list of users who can edit the sheet, if it is protected.
 * 
 * <pre class="prettyprint"><code>
 * // Add the &quot;user@example.com&quot; user to the list of users who can edit this sheet
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var permissions = sheet.getSheetProtection();
 * permissions.addUser(&#39;user@example.com&#39;);
 * permissions.setProtected(true);
 * sheet.setSheetProtection(permissions);
 * </code></pre>
 * 
 * @function SpreadsheetApp.PageProtection#addUser
 * @deprecated
 * 
 * @param {String} email - The email of the user to add.
 * 
 * @return void
 */


/**
 * Returns a list of the email addresses of the users who can edit this sheet.
 * 
 * <p>If sheet protection is disabled, the value returned by this call is meaningless.
 * 
 * @function SpreadsheetApp.PageProtection#getUsers
 * @deprecated
 * 
 * @return {String[]} an array of email addresses of users who can edit this sheet
 */


/**
 * Indicates whether the sheet has sheet protection enabled or not.
 * 
 * <pre class="prettyprint"><code>
 * // Determine whether or not sheet protection is enabled
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var permissions = sheet.getSheetProtection();
 * var isProtected = permissions.isProtected();
 * </code></pre>
 * 
 * @function SpreadsheetApp.PageProtection#isProtected
 * @deprecated
 * 
 * @return {Boolean} whether the sheet has sheet protection enabled or not
 */


/**
 * Removes a user from the list of users who can edit the sheet.
 * 
 * <pre class="prettyprint"><code>
 * // Remove the &quot;user@example.com&quot; user to the list of users who can edit this sheet
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var permissions = sheet.getSheetProtection();
 * permissions.removeUser(&#39;user@example.com&#39;);
 * permissions.setProtected(true);
 * sheet.setSheetProtection(permissions);
 * </code></pre>
 * 
 * @function SpreadsheetApp.PageProtection#removeUser
 * @deprecated
 * 
 * @param {String} user - The email address of the user to remove.
 * 
 * @return void
 */


/**
 * Sets the protection status for the sheet.
 * 
 * <pre class="prettyprint"><code>
 * // Enables sheet protection for  this sheet
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var permissions = sheet.getSheetProtection();
 * permissions.setProtected(true);
 * sheet.setSheetProtection(permissions);
 * </code></pre>
 * 
 * @function SpreadsheetApp.PageProtection#setProtected
 * @deprecated
 * 
 * @param {Boolean} protection - <code>true</code> to enable sheet protection, <code>false</code> to disable sheet
 *     protection.
 * 
 * @return void
 */



/**
 * @class SpreadsheetApp.PivotFilter
 */

/**
 * Returns the filter criteria for this pivot filter.
 * 
 * @function SpreadsheetApp.PivotFilter#getFilterCriteria
 * 
 * @return {SpreadsheetApp.FilterCriteria} the filter criteria for this pivot filter
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code> that this filter belongs to.
 * 
 * @function SpreadsheetApp.PivotFilter#getPivotTable
 * 
 * @return {SpreadsheetApp.PivotTable} the pivot table this filter belongs to
 */


/**
 * Returns the number of the source data column this filter operates on. These indices are
 * 1-based, for example if this filter applies to data in column A of the spreadsheet this method
 * returns "1."
 * 
 * @function SpreadsheetApp.PivotFilter#getSourceDataColumn
 * 
 * @return {IntegerNum} the number of the source data column this filter applies to
 */


/**
 * Removes this pivot filter from the pivot table.
 * 
 * @function SpreadsheetApp.PivotFilter#remove
 * 
 * @return void
 */


/**
 * Sets the filter criteria for this pivot filter.
 * 
 * @function SpreadsheetApp.PivotFilter#setFilterCriteria
 * 
 * @param {SpreadsheetApp.FilterCriteria} filterCriteria - The filter criteria to set.
 * 
 * @return {SpreadsheetApp.PivotFilter} the pivot filter for chaining
 */



/**
 * @class SpreadsheetApp.PivotGroup
 */

/**
 * Adds a manual grouping rule for this pivot group.
 * 
 * @function SpreadsheetApp.PivotGroup#addManualGroupingRule
 * 
 * @param {String} groupName - The name of this grouping rule.
 * @param {Object[]} groupMembers - The values that are included in this grouping rule.
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Returns whether labels are displayed as repeated.
 * 
 * @function SpreadsheetApp.PivotGroup#areLabelsRepeated
 * 
 * @return {Boolean} <code>true</code> if labels are repeated; otherwise returns <code>false</code>.
 */


/**
 * Removes any grouping rules from this pivot group.
 * 
 * @function SpreadsheetApp.PivotGroup#clearGroupingRule
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Removes any sorting applied to this group.
 * 
 * @function SpreadsheetApp.PivotGroup#clearSort
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Returns whether this is a row or column group.
 * 
 * @function SpreadsheetApp.PivotGroup#getDimension
 * 
 * @return {SpreadsheetApp.Dimension} the dimension representing this group's type
 */


/**
 * Returns the index of this pivot group in the current group order.
 * 
 * @function SpreadsheetApp.PivotGroup#getIndex
 * 
 * @return {IntegerNum} the pivot group's index
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code> which this grouping belongs to.
 * 
 * @function SpreadsheetApp.PivotGroup#getPivotTable
 * 
 * @return {SpreadsheetApp.PivotTable} the pivot table this group belongs to.
 */


/**
 * Returns the number of the source data column this group summarizes. This index is 1-based, if
 * this group summarizes source data in column "A" of the spreadsheet this method returns <code>1</code>.
 * 
 * @function SpreadsheetApp.PivotGroup#getSourceDataColumn
 * 
 * @return {IntegerNum} the source data column number
 */


/**
 * Hides repeated labels for this grouping. If labels are already hidden this results in a no-op.
 * If this method is called before there are multiple row or column groupings, when an additional
 * grouping is added repeated labels are hidden.
 * 
 * @function SpreadsheetApp.PivotGroup#hideRepeatedLabels
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Returns <code>true</code> if the sort is ascending, returns <code>false</code> if the sort order is
 * descending.
 * 
 * @function SpreadsheetApp.PivotGroup#isSortAscending
 * 
 * @return {Boolean} <code>true</code> if the sort order is ascending.
 */


/**
 * Moves this group to the specified position in the current list of row or column groups. These
 * indices are 0-based. For example, if this group should be moved to the first position this
 * method should be called with <code>0</code>.
 * 
 * @function SpreadsheetApp.PivotGroup#moveToIndex
 * 
 * @param {IntegerNum} index - The index to move this grouping to.
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Removes this pivot group from the table.
 * 
 * @function SpreadsheetApp.PivotGroup#remove
 * 
 * @return void
 */


/**
 * Removes the manual grouping rule with the specified <code>groupName</code>.
 * 
 * @function SpreadsheetApp.PivotGroup#removeManualGroupingRule
 * 
 * @param {String} groupName - The name of the grouping rule to remove.
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Resets the display name of this group in the pivot table to its default value.
 * 
 * @function SpreadsheetApp.PivotGroup#resetDisplayName
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Sets the display name of this group in the pivot table.
 * 
 * @function SpreadsheetApp.PivotGroup#setDisplayName
 * 
 * @param {String} name - The display name to set.
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining
 */


/**
 * Sets a histogram grouping rule for this pivot group. A histogram rule organizes values in a
 * source data column into buckets of a constant size. All values from <code>minValue</code> to <code>maxValue</code> are placed into groups of size <code>interval</code>. All values below <code>minValue</code>
 * are placed into one bucket, as are all values greater than <code>maxValue</code>.
 * 
 * @function SpreadsheetApp.PivotGroup#setHistogramGroupingRule
 * 
 * @param {IntegerNum} minValue - The minimum value for items to be placed into buckets. Values less than this
 *     are combined into a single bucket.
 * @param {IntegerNum} maxValue - The maximum value for items to be placed into buckets. Values greater than this
 *     are combined into a single bucket.
 * @param {IntegerNum} intervalSize
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * When there is more than one row or column grouping, this method displays this grouping's label
 * for each entry of the subsequent grouping. If labels are already repeated this results in a
 * no-op. If this method is called before there are multiple row or column groupings, when an
 * additional grouping is added repeated labels are shown.
 * 
 * @function SpreadsheetApp.PivotGroup#showRepeatedLabels
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Sets whether to show total values for this pivot group in the table.
 * 
 * @function SpreadsheetApp.PivotGroup#showTotals
 * 
 * @param {Boolean} showTotals - Whether to show totals or not.
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Sets the sort order to be ascending.
 * 
 * @function SpreadsheetApp.PivotGroup#sortAscending
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Sorts this group by the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html'>PivotValue</a></code> for the values from the <code>oppositeGroupValues</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Sorts the item group by the &quot;SUM of Quantity&quot; pivot value for the specified salespersons.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var pivotTable = sheet.getPivotTables()[0];
 * var itemGroup = pivotTable.getRowGroups()[0];
 * var sumQuantityValue = pivotTable.getPivotValues()[0];
 * itemGroup.sortBy(sumQuantityValue, [&#39;Beth&#39;, &#39;Amir&#39;, &#39;Devyn&#39;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.PivotGroup#sortBy
 * 
 * @param {SpreadsheetApp.PivotValue} value - The pivot value to sort by.
 * @param {Object[]} oppositeGroupValues - The values of an opposite pivot group (a column group if sorting a
 *     row group, or a row group if sorting a column group) that are used to sort. The order of
 *     these values determines precedence for tie breaking.
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Sets the sort order to be descending.
 * 
 * @function SpreadsheetApp.PivotGroup#sortDescending
 * 
 * @return {SpreadsheetApp.PivotGroup} the pivot group for chaining.
 */


/**
 * Returns whether total values are currently shown for this pivot group.
 * 
 * @function SpreadsheetApp.PivotGroup#totalsAreShown
 * 
 * @return {Boolean} <code>true</code> if total values are displayed for this pivot group; otherwise returns
 *     <code>false</code>.
 */



/**
 * @class SpreadsheetApp.PivotTable
 */

/**
 * Creates a new pivot value in the pivot table calculated from the specified <code>formula</code> with
 * the specified <code>name</code>.
 * 
 * @function SpreadsheetApp.PivotTable#addCalculatedPivotValue
 * 
 * @param {String} name - The name for this calculated pivot value.
 * @param {String} formula - The formula used to calculate this value.
 * 
 * @return {SpreadsheetApp.PivotValue} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html'>PivotValue</a></code>
 */


/**
 * Defines a new pivot column grouping in the pivot table. The specified <code>sourceDataColumn</code>
 * indicates the column in the source data this grouping is based on.
 * 
 * @function SpreadsheetApp.PivotTable#addColumnGroup
 * 
 * @param {IntegerNum} sourceDataColumn - The number of the column this group summarizes. This index represents
 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
 *     <code>2</code> representing column B, etc.
 * 
 * @return {SpreadsheetApp.PivotGroup} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html'>PivotGroup</a></code>
 */


/**
 * Creates a new pivot filter for the pivot table. The specified <code>sourceDataColumn</code>
 * indicates the column in the source data this filter operates on.
 * 
 * @function SpreadsheetApp.PivotTable#addFilter
 * 
 * @param {IntegerNum} sourceDataColumn - The number of the column this group summarizes. This index represents
 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
 *     <code>2</code> representing column B, etc.
 * @param {SpreadsheetApp.FilterCriteria} filterCriteria - The filter criteria used to perform the filtering.
 * 
 * @return {SpreadsheetApp.PivotFilter} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter.html'>PivotFilter</a></code>
 */


/**
 * Defines a new pivot value in the pivot table with the specified <code>summarizeFunction</code>. The
 * specified <code>sourceDataColumn</code> indicates the column in the source data this value is based
 * on.
 * 
 * @function SpreadsheetApp.PivotTable#addPivotValue
 * 
 * @param {IntegerNum} sourceDataColumn - The number of the column this group summarizes. This index represents
 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
 *     <code>2</code> representing column B, etc.
 * @param {SpreadsheetApp.PivotTableSummarizeFunction} summarizeFunction
 * 
 * @return {SpreadsheetApp.PivotValue} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html'>PivotValue</a></code>
 */


/**
 * Defines a new pivot row grouping in the pivot table. The specified <code>sourceDataColumn</code>
 * indicates the column in the source data this grouping is based on.
 * 
 * @function SpreadsheetApp.PivotTable#addRowGroup
 * 
 * @param {IntegerNum} sourceDataColumn - The number of the column this group summarizes. This index represents
 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
 *     <code>2</code> representing column B, etc.
 * 
 * @return {SpreadsheetApp.PivotGroup} the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html'>PivotGroup</a></code>
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> representing the cell where this pivot table is anchored.
 * 
 * @function SpreadsheetApp.PivotTable#getAnchorCell
 * 
 * @return {SpreadsheetApp.Range} this pivot table's anchor cell
 */


/**
 * Returns an ordered list of the column groups in this pivot table.
 * 
 * @function SpreadsheetApp.PivotTable#getColumnGroups
 * 
 * @return {SpreadsheetApp.PivotGroup[]} the column groups in this pivot table
 */


/**
 * Returns an ordered list of the filters in this pivot table.
 * 
 * @function SpreadsheetApp.PivotTable#getFilters
 * 
 * @return {SpreadsheetApp.PivotFilter[]} the filters in this pivot table
 */


/**
 * Returns an ordered list of the pivot values in this pivot table.
 * 
 * @function SpreadsheetApp.PivotTable#getPivotValues
 * 
 * @return {SpreadsheetApp.PivotValue[]} the pivot values in this pivot table
 */


/**
 * Returns an ordered list of the row groups in this pivot table.
 * 
 * @function SpreadsheetApp.PivotTable#getRowGroups
 * 
 * @return {SpreadsheetApp.PivotGroup[]} the row groups in this pivot table
 */


/**
 * Returns whether values are displayed as rows or columns.
 * 
 * @function SpreadsheetApp.PivotTable#getValuesDisplayOrientation
 * 
 * @return {SpreadsheetApp.Dimension} whether values are displayed as rows or columns
 */


/**
 * Deletes this pivot table. Further operations on this pivot table results in an error.
 * 
 * @function SpreadsheetApp.PivotTable#remove
 * 
 * @return void
 */


/**
 * Sets the layout of this pivot table to display values as columns or rows.
 * 
 * @function SpreadsheetApp.PivotTable#setValuesDisplayOrientation
 * 
 * @param {SpreadsheetApp.Dimension} dimension - The dimension indicating how to display pivot values.
 * 
 * @return {SpreadsheetApp.PivotTable} the pivot table for chaining
 */



/**
 * @class SpreadsheetApp.PivotTableSummarizeFunction
 */

/**
 * The <a href="https://support.google.com/docs/answer/3093615">AVERAGE</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.AVERAGE
 */
/**
 * The <a href="https://support.google.com/docs/answer/3093620">COUNT</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.COUNT
 */
/**
 * The <a href="https://support.google.com/docs/answer/3093991">COUNTA</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.COUNTA
 */
/**
 * The <a href="https://support.google.com/docs/answer/3093405">COUNTUNIQUE</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.COUNTUNIQUE
 */
/**
 * A custom fuction, this value is only valid for calcuated fields.
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.CUSTOM
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094013">MAX</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.MAX
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094025">MEDIAN</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.MEDIAN
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094017">MIN</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.MIN
 */
/**
 * The <a href="https://support.google.com/docs/answer/3093502">PRODUCT</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.PRODUCT
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094054">STDEV</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.STDEV
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094105">STDEVP</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.STDEVP
 */
/**
 * The <a href="https://support.google.com/docs/answer/3093669">SUM</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.SUM
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094063">VAR</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.VAR
 */
/**
 * The <a href="https://support.google.com/docs/answer/3094113">VARP</a> function
 * 
 * @typedef {SpreadsheetApp.PivotTableSummarizeFunction} SpreadsheetApp.PivotTableSummarizeFunction.VARP
 */

/**
 * @class SpreadsheetApp.PivotValue
 */

/**
 * Returns the display type describing how this pivot value is currently displayed in the table.
 * 
 * @function SpreadsheetApp.PivotValue#getDisplayType
 * 
 * @return {SpreadsheetApp.PivotValueDisplayType} the display type for this pivot value
 */


/**
 * Returns the formula used to calculate this value. If this value is not a calculated field this
 * method returns <code>null</code>.
 * 
 * @function SpreadsheetApp.PivotValue#getFormula
 * 
 * @return {String} the pivot value for chaining
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code> which this value belongs to.
 * 
 * @function SpreadsheetApp.PivotValue#getPivotTable
 * 
 * @return {SpreadsheetApp.PivotTable} the pivot table this value belongs to
 */


/**
 * Returns this group’s summarization function.
 * 
 * @function SpreadsheetApp.PivotValue#getSummarizedBy
 * 
 * @return {SpreadsheetApp.PivotTableSummarizeFunction} the group's summarization function
 */


/**
 * Sets the display name for this value in the pivot table.
 * 
 * @function SpreadsheetApp.PivotValue#setDisplayName
 * 
 * @param {String} name - The display name to set.
 * 
 * @return {SpreadsheetApp.PivotValue} the pivot value for chaining
 */


/**
 * Sets the formula used to calculate this value. If this value is not a calculated field this
 * method results in an error.
 * 
 * @function SpreadsheetApp.PivotValue#setFormula
 * 
 * @param {String} formula - The formula to use to calculate this value.
 * 
 * @return {SpreadsheetApp.PivotValue} the pivot value for chaining
 */


/**
 * Displays this value in the pivot table as a function of another value.
 * 
 * @function SpreadsheetApp.PivotValue#showAs
 * 
 * @param {SpreadsheetApp.PivotValueDisplayType} displayType - The way to display the values.
 * 
 * @return {SpreadsheetApp.PivotValue} the pivot value for chaining
 */


/**
 * Sets the summarization function.
 * 
 * @function SpreadsheetApp.PivotValue#summarizeBy
 * 
 * @param {SpreadsheetApp.PivotTableSummarizeFunction} summarizeFunction - The function to use to summarize data in this value's source data
 *     column.
 * 
 * @return {SpreadsheetApp.PivotValue} the pivot value for chaining
 */



/**
 * @class SpreadsheetApp.PivotValueDisplayType
 */

/**
 * Default. Displays pivot values as the actual value and not as a function of another value.
 * 
 * @typedef {SpreadsheetApp.PivotValueDisplayType} SpreadsheetApp.PivotValueDisplayType.DEFAULT
 */
/**
 * Displays pivot values as a percent of the total for that column.
 * 
 * @typedef {SpreadsheetApp.PivotValueDisplayType} SpreadsheetApp.PivotValueDisplayType.PERCENT_OF_COLUMN_TOTAL
 */
/**
 * Displays pivot values as a percent of the grand total.
 * 
 * @typedef {SpreadsheetApp.PivotValueDisplayType} SpreadsheetApp.PivotValueDisplayType.PERCENT_OF_GRAND_TOTAL
 */
/**
 * Displays pivot values as a percent of the total for that row.
 * 
 * @typedef {SpreadsheetApp.PivotValueDisplayType} SpreadsheetApp.PivotValueDisplayType.PERCENT_OF_ROW_TOTAL
 */

/**
 * @class SpreadsheetApp.Protection
 */

/**
 * Adds the given user to the list of editors for the protected sheet or range. This method does
 * not automatically give the user permission to edit the spreadsheet itself; to do that in
 * addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(String)'>Spreadsheet.addEditor(emailAddress)</a></code>.
 * 
 * @function SpreadsheetApp.Protection#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Adds the given user to the list of editors for the protected sheet or range. This method does
 * not automatically give the user permission to edit the spreadsheet itself; to do that in
 * addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(User)'>Spreadsheet.addEditor(user)</a></code>.
 * 
 * @function SpreadsheetApp.Protection#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Adds the given array of users to the list of editors for the protected sheet or range. This
 * method does not automatically give the users permission to edit the spreadsheet itself; to do
 * that in addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditors(String)'>Spreadsheet.addEditors(emailAddresses)</a></code>.
 * 
 * @function SpreadsheetApp.Protection#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Determines whether all users in the domain that owns the spreadsheet have permission to edit
 * the protected range or sheet. Throws an exception if the user does not have permission to edit
 * the protected range or sheet.
 * 
 * @function SpreadsheetApp.Protection#canDomainEdit
 * 
 * @return {Boolean} <code>true</code> if all users in the domain that owns the spreadsheet have permission to
 *     edit the protected range or sheet; <code>false</code> if not
 */


/**
 * Determines whether the user has permission to edit the protected range or sheet. The
 * spreadsheet owner is always able to edit protected ranges and sheets.
 * 
 * <pre class="prettyprint"><code>
 * // Remove all range protections in the spreadsheet that the user has permission to edit.
 * var ss = SpreadsheetApp.getActive();
 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 * for (var i = 0; i &lt; protections.length; i++) {
 *   var protection = protections[i];
 *   if (protection.canEdit()) {
 *     protection.remove();
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#canEdit
 * 
 * @return {Boolean} <code>true</code> if the user has permission to edit the protected range or sheet; <code>false</code> if not
 */


/**
 * Gets the description of the protected range or sheet. If no description is set, this method
 * returns an empty string.
 * 
 * @function SpreadsheetApp.Protection#getDescription
 * 
 * @return {String} the description of the protected range or sheet, or an empty string if no description
 *     is set
 */


/**
 * Gets the list of editors for the protected range or sheet. Throws an exception if the user does
 * not have permission to edit the protected range or sheet.
 * 
 * <pre class="prettyprint"><code>
 * // Protect the active sheet, then remove all other users from the list of editors.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
 * 
 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 * // permission comes from a group, the script throws an exception upon removing the group.
 * var me = Session.getEffectiveUser();
 * protection.addEditor(me);
 * protection.removeEditors(protection.getEditors());
 * if (protection.canDomainEdit()) {
 *   protection.setDomainEdit(false);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#getEditors
 * 
 * @return {User[]} an array of users with permission to edit the protected range or sheet
 */


/**
 * Gets the type of the protected area, either <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#RANGE'>RANGE</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#SHEET'>SHEET</a></code>.
 * 
 * @function SpreadsheetApp.Protection#getProtectionType
 * 
 * @return {SpreadsheetApp.ProtectionType} the type of protected area, either <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#RANGE'>RANGE</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#SHEET'>SHEET</a></code>
 */


/**
 * Gets the range that is being protected. If the protection applies to the sheet instead of a
 * range, this method returns a range that spans the entire sheet.
 * 
 * @function SpreadsheetApp.Protection#getRange
 * 
 * @return {SpreadsheetApp.Range} the range that is being protected
 */


/**
 * Gets the name of the protected range if it is associated with a named range. Returns <code>null</code> if the protection is not associated with a named range. Note that scripts must explicitly
 * call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setRangeName(String)'>setRangeName(rangeName)</a></code> to associate a protected range with a named range; calling
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code> that happens to be a
 * named range, without calling <code>setRangeName(rangeName)</code>, is not sufficient to associate
 * them. However, creating a protected range from a named range in the Google Sheets UI associates
 * them automatically.
 * 
 * <pre class="prettyprint"><code>
 * // Protect a named range in a spreadsheet and log the name of the protected range.
 * var ss = SpreadsheetApp.getActive();
 * var range = ss.getRange(&#39;A1:B10&#39;);
 * var protection = range.protect();
 * ss.setNamedRange(&#39;Test&#39;, range);       // Create a named range.
 * protection.setRangeName(&#39;Test&#39;);       // Associate the protection with the named range.
 * Logger.log(protection.getRangeName()); // Verify the name of the protected range.
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#getRangeName
 * 
 * @return {String} the name of the protected named range, or <code>null</code> if the protected range is not
 *     associated with a named range
 */


/**
 * Gets an array of unprotected ranges within a protected sheet. If the <code>Protection</code> object
 * corresponds to a protected range instead of a protected sheet, this method returns an empty
 * array. To change the unprotected ranges, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setUnprotectedRanges(Range)'>setUnprotectedRanges(ranges)</a></code> to set a
 * new array of ranges; to re-protect the entire sheet, set an empty array.
 * 
 * <pre class="prettyprint"><code>
 * // Unprotect cells E2:F5 in addition to any other unprotected ranges in the protected sheet.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.protect();
 * var unprotected = protection.getUnprotectedRanges();
 * unprotected.push(sheet.getRange(&#39;E2:F5&#39;));
 * protection.setUnprotectedRanges(unprotected);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#getUnprotectedRanges
 * 
 * @return {SpreadsheetApp.Range[]} an array of unprotected ranges within a protected sheet
 */


/**
 * Determines if the protected area is using "warning based" protection. Warning-based protection
 * means that every user can edit data in the area, except editing prompts a warning asking the
 * user to confirm the edit. By default, protected ranges or sheets are not warning-based. To
 * change to the warning state, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setWarningOnly(Boolean)'>setWarningOnly(warningOnly)</a></code>.
 * 
 * @function SpreadsheetApp.Protection#isWarningOnly
 * 
 * @return {Boolean} <code>true</code> if the protected range or sheet is only using warning-based protection
 */


/**
 * Unprotects the range or sheet.
 * 
 * <pre class="prettyprint"><code>
 * // Remove all range protections in the spreadsheet that the user has permission to edit.
 * var ss = SpreadsheetApp.getActive();
 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 * for (var i = 0; i &lt; protections.length; i++) {
 *   var protection = protections[i];
 *   if (protection.canEdit()) {
 *     protection.remove();
 *   }
 * }
 * </code></pre>
 * 
 * <pre class="prettyprint"><code>
 * // Remove sheet protection from the active sheet, if the user has permission to edit it.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
 * if (protection &amp;&amp; protection.canEdit()) {
 *   protection.remove();
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#remove
 * 
 * @return void
 */


/**
 * Removes the given user from the list of editors for the protected sheet or range. Note that if
 * the user is a member of a Google Group that has edit permission, or if all users in the domain
 * have edit permission, the user are still be able to edit the protected area. Neither the owner
 * of the spreadsheet nor the current user can be removed.
 * 
 * @function SpreadsheetApp.Protection#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Removes the given user from the list of editors for the protected sheet or range. Note that if
 * the user is a member of a Google Group that has edit permission, or if all users in the domain
 * have edit permission, the user is still be able to edit the protected area as well. Neither the
 * owner of the spreadsheet nor the current user can be removed.
 * 
 * @function SpreadsheetApp.Protection#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Removes the given array of users from the list of editors for the protected sheet or range.
 * Note that if any of the users are members of a Google Group that has edit permission, or if all
 * users in the domain have edit permission, those users are still be able to edit the protected
 * area. Neither the owner of the spreadsheet nor the current user can be removed.
 * 
 * <pre class="prettyprint"><code>
 * // Protect the active sheet, then remove all other users from the list of editors.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
 * 
 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 * // permission comes from a group, the script throws an exception upon removing the group.
 * var me = Session.getEffectiveUser();
 * protection.addEditor(me);
 * protection.removeEditors(protection.getEditors());
 * if (protection.canDomainEdit()) {
 *   protection.setDomainEdit(false);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#removeEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to remove.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Sets the description of the protected range or sheet.
 * 
 * @function SpreadsheetApp.Protection#setDescription
 * 
 * @param {String} description - The description of the protected range or sheet.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Sets whether all users in the domain that owns the spreadsheet have permission to edit the
 * protected range or sheet. Note that any users who have explicit edit permission are able to
 * edit the protected area regardless of this setting. Throws an exception if the spreadsheet does
 * not belong to a G Suite domain (that is, if it is owned by a gmail.com account).
 * 
 * @function SpreadsheetApp.Protection#setDomainEdit
 * 
 * @param {Boolean} editable - <code>true</code> if all users in the domain that owns the spreadsheet should have
 *     permission to edit the protected range or sheet; <code>false</code> if not.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Associates the protected range with an existing named range. If the named range covers a
 * different area from the current protected range, this method moves the protection to cover the
 * the named range instead. The named range must be on the same sheet as the current protected
 * range. Note that scripts must explicitly call this method to associate a protected range with a
 * named range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code>
 * that happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not
 * sufficient to associate them. However, creating a protected range from a named range in the
 * Google Sheets UI associates them automatically.
 * 
 * @function SpreadsheetApp.Protection#setNamedRange
 * 
 * @param {SpreadsheetApp.NamedRange} namedRange - The existing named range to associate with the protected range.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Adjusts the range that is being protected. If the given range covers a different area from the
 * current protected range, this method moves the protection to cover the new range instead.
 * 
 * @function SpreadsheetApp.Protection#setRange
 * 
 * @param {SpreadsheetApp.Range} range - The new range to protect from edits.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Associates the protected range with an existing named range. If the named range covers a
 * different area from the current protected range, this method moves the protection to cover the
 * the named range instead. The named range must be on the same sheet as the current protected
 * range. Note that scripts must explicitly call this method to associate a protected range with a
 * named range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code>
 * that happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not
 * sufficient to associate them. However, creating a protected range from a named range in the
 * Google Sheets UI associates them automatically.
 * 
 * <pre class="prettyprint"><code>
 * // Protect a named range in a spreadsheet and log the name of the protected range.
 * var ss = SpreadsheetApp.getActive();
 * var range = ss.getRange(&#39;A1:B10&#39;);
 * var protection = range.protect();
 * ss.setNamedRange(&#39;Test&#39;, range);       // Create a named range.
 * protection.setRangeName(&#39;Test&#39;);       // Associate the protection with the named range.
 * Logger.log(protection.getRangeName()); // Verify the name of the protected range.
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#setRangeName
 * 
 * @param {String} rangeName - The name of the named range to be protected.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Unprotects the given array of ranges within a protected sheet. Throws an exception if the
 * <code>Protection</code> object corresponds to a protected range instead of a protected sheet or if
 * any of the ranges are not on the protected sheet. To change the unprotected ranges, set a new
 * array of ranges; to re-protect the entire sheet, set an empty array.
 * 
 * <pre class="prettyprint"><code>
 * // Protect the active sheet except B2:C5, then remove all other users from the list of editors.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
 * var unprotected = sheet.getRange(&#39;B2:C5&#39;);
 * protection.setUnprotectedRanges([unprotected]);
 * 
 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 * // permission comes from a group, the script throws an exception upon removing the group.
 * var me = Session.getEffectiveUser();
 * protection.addEditor(me);
 * protection.removeEditors(protection.getEditors());
 * if (protection.canDomainEdit()) {
 *   protection.setDomainEdit(false);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Protection#setUnprotectedRanges
 * 
 * @param {SpreadsheetApp.Range[]} ranges - The array of ranges to leave unprotected within a protected sheet.
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining
 */


/**
 * Sets whether or not this protected range is using "warning based" protection. Warning-based
 * protection means that every user can edit data in the area, except editing prompts a warning
 * asking the user to confirm the edit. By default, protected ranges or sheets are not
 * warning-based. To check warning state, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#isWarningOnly()'>isWarningOnly()</a></code>.
 * 
 * @function SpreadsheetApp.Protection#setWarningOnly
 * 
 * @param {Boolean} warningOnly
 * 
 * @return {SpreadsheetApp.Protection} the object representing the protection settings, for chaining.
 */



/**
 * @class SpreadsheetApp.ProtectionType
 */

/**
 * Protection for a range.
 * 
 * @typedef {SpreadsheetApp.ProtectionType} SpreadsheetApp.ProtectionType.RANGE
 */
/**
 * Protection for a sheet.
 * 
 * @typedef {SpreadsheetApp.ProtectionType} SpreadsheetApp.ProtectionType.SHEET
 */

/**
 * @class SpreadsheetApp.Range
 */

/**
 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>, with the top
 * left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(&#39;A1:D10&#39;);
 * range.activate();
 * 
 * var selection = sheet.getSelection();
 * // Current cell: A1
 * var currentCell = selection.getCurrentCell();
 * // Active Range: A1:D10
 * var activeRange = selection.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#activate
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <p>If the specified cell is present in an existing range, then that range becomes the active
 * range with the cell as the current cell.
 * 
 * <p>If the specified cell is not present in any existing range, then the existing selection is
 * removed and the cell becomes the current cell and the active range.
 * 
 * <p><b>Note:</b> The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise it throws an
 * exception.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getRange(&#39;B5&#39;);
 * range.activate();
 * 
 * var selection = sheet.getSelection();
 * // Current cell: B5
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#activateAsCurrentCell
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Adds developer metadata with the specified key to the range.
 * 
 * @function SpreadsheetApp.Range#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining..
 */


/**
 * Adds developer metadata with the specified key and visibility to the range.
 * 
 * @function SpreadsheetApp.Range#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility of the new developer metadata.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining..
 */


/**
 * Adds developer metadata with the specified key and value to the range.
 * 
 * @function SpreadsheetApp.Range#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {String} value - The value for the new developer metadata.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining..
 */


/**
 * Adds developer metadata with the specified key, value, and visibility to the range.
 * 
 * @function SpreadsheetApp.Range#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {String} value - The value for the new developer metadata.
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility of the new developer metadata.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining..
 */


/**
 * Applies a default column banding theme to the range. By default, the banding has header and no
 * footer color.
 * 
 * @function SpreadsheetApp.Range#applyColumnBanding
 * 
 * @return {SpreadsheetApp.Banding} The new banding.
 */


/**
 * Applies a specified column banding theme to the range. By default, the banding has header and
 * no footer color.
 * 
 * @function SpreadsheetApp.Range#applyColumnBanding
 * 
 * @param {SpreadsheetApp.BandingTheme} bandingTheme - A color theme to apply to the columns in the range.
 * 
 * @return {SpreadsheetApp.Banding} The new banding.
 */


/**
 * Applies a specified column banding theme to the range with specified header and footer
 * settings.
 * 
 * @function SpreadsheetApp.Range#applyColumnBanding
 * 
 * @param {SpreadsheetApp.BandingTheme} bandingTheme - A color theme to apply to the columns in the range.
 * @param {Boolean} showHeader - If <code>true</code>, the banding theme header color is applied to the first
 *     column.
 * @param {Boolean} showFooter - If <code>true</code>, the banding theme footer color is applied to the last
 *     column.
 * 
 * @return {SpreadsheetApp.Banding} The new banding.
 */


/**
 * Applies a default row banding theme to the range. By default, the banding has header and no
 * footer color.
 * 
 * @function SpreadsheetApp.Range#applyRowBanding
 * 
 * @return {SpreadsheetApp.Banding} The new banding.
 */


/**
 * Applies a specified row banding theme to the range. By default, the banding has header and no
 * footer color.
 * 
 * @function SpreadsheetApp.Range#applyRowBanding
 * 
 * @param {SpreadsheetApp.BandingTheme} bandingTheme - A color theme to apply to the rows in the range.
 * 
 * @return {SpreadsheetApp.Banding} The new banding.
 */


/**
 * Applies a specified row banding theme to the range with specified header and footer settings.
 * 
 * @function SpreadsheetApp.Range#applyRowBanding
 * 
 * @param {SpreadsheetApp.BandingTheme} bandingTheme - A color theme to apply to the rows in the range.
 * @param {Boolean} showHeader - If <code>true</code>, the banding theme header color is applied to the first row.
 * @param {Boolean} showFooter - If <code>true</code>, the banding theme footer color is applied to the last row.
 * 
 * @return {SpreadsheetApp.Banding} The new banding.
 */


/**
 * Fills the <code>destinationRange</code> with data based on the data in this range. The new values
 * are also determined by the specified <code>series</code> type. The destination range must contain
 * this range and extend it in only one direction. For example, the following fills <code>A1:A20</code>
 * with a series of increasing numbers based on the current values in <code>A1:A4</code>:
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * 
 * // Has values [1, 2, 3, 4].
 * var sourceRange = sheet.getRange(&quot;A1:A4&quot;);
 * // The range to fill with values.
 * var destination = sheet.getRange(&quot;A1:A20&quot;);
 * 
 * // Inserts new values in A5:A20, continuing the pattern expressed in A1:A4
 * sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
 * 
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#autoFill
 * 
 * @param {SpreadsheetApp.Range} destination - The range to be auto-filled with values. The destination range should
 *     contain this range and extend it in only one direction (upwards, downwards, left, or
 *     right).
 * @param {SpreadsheetApp.AutoFillSeries} series - The type of autoFill series that should be used to calculate new values. The
 *     effect of this series differs based on the type and amount of source data.
 * 
 * @return void
 */


/**
 * Calculates a range to fill with new data based on neighboring cells and automatically fills
 * that range with new values based on the data contained in this range. These new values are also
 * determined by the specified <code>series</code> type.
 * 
 * <p>The calculated destination range considers the surrounding data to determine where the new
 * values should be inserted: if there is data to the immediate left or right of a column that is
 * being auto-filled, new values only extend as far as this adjacent data.
 * 
 * <p>For example, if <code>A1:A20</code> is filled with a series of increasing numbers and this method
 * is called on the range <code>B1:B4</code> which contains a series of dates, new values are only
 * inserted into <code>B5:B20</code>. In this way, these new values "stick" to the cells that contain
 * values in column A.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * 
 * // A1:A20 has values [1, 2, 3, ... 20].
 * // B1:B4 has values [1/1/2017, 1/2/2017, ...]
 * var sourceRange = sheet.getRange(&quot;B1:B4&quot;);
 * 
 * // Results in B5:B20 having values [1/5/2017, ... 1/20/2017]
 * sourceRange.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#autoFillToNeighbor
 * 
 * @param {SpreadsheetApp.AutoFillSeries} series - The type of autoFill series that should be used to calculate new values. The
 *     effect of this series differs based on the type and amount of source data.
 * 
 * @return void
 */


/**
 * Break any multi-column cells in the range into individual cells again.
 * 
 * <p>Calling this function on a range is equivalent to selecting a range and clicking Format ->
 * Merge -> Unmerge.
 * 
 * @function SpreadsheetApp.Range#breakApart
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Determines whether the user has permission to edit every cell in the range. The spreadsheet
 * owner is always able to edit protected ranges and sheets.
 * 
 * @function SpreadsheetApp.Range#canEdit
 * 
 * @return {Boolean} <code>true</code> if the user has permission to edit every cell in the range; <code>false</code>
 *     otherwise.
 */


/**
 * Clears the range of contents, formats, and data validation rules.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D10&quot;);
 * range.clear();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#clear
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Clears the range of contents, format, data validation rules, and/or comments, as specified with
 * the given advanced options. By default all data is cleared.
 * 
 * <pre class="prettyprint"><code>
 * // The code below clears range C2:G8 in the active sheet, but preserves the format,
 * // data validation rules, and comments.
 * SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).clear({contentsOnly: true});
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#clear
 * 
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Clears the content of the range, leaving the formatting intact.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D10&quot;);
 * range.clearContent();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#clearContent
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Clears the data validation rules for the range.
 * 
 * <pre class="prettyprint"><code>
 * // Clear the data validation rules for cells A1:B5.
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B5&#39;);
 * range.clearDataValidations();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#clearDataValidations
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Clears formatting for this range.
 * 
 * <p>This clears text formatting for the cell or cells in the range, but does not reset any
 * number formatting rules.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D10&quot;);
 * range.clearFormat();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#clearFormat
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Clears the note in the given cell or cells.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D10&quot;);
 * range.clearNote();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#clearNote
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Collapses all groups that are wholly contained within the range. If no group is fully within
 * the range, the deepest expanded group that is partially within the range is collapsed.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getActiveRange();
 * 
 * // All row and column groups within the range are collapsed.
 * range.expandGroups();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#collapseGroups
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Copy the formatting of the range to the given location. If the destination is larger or smaller
 * than the source range then the source is repeated or truncated accordingly. Note that this
 * method copies the formatting only.
 * 
 * <p>For a detailed description of the gridId parameter, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()'>getGridId()</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var source = ss.getSheets()[0];
 * 
 * var range = source.getRange(&quot;B2:D4&quot;);
 * 
 * // This copies the formatting in B2:D4 in the source sheet to
 * // D4:F6 in the sheet with gridId 1555299895. Note that you can get the gridId
 * // of a sheet by calling sheet.getSheetId() or range.getGridId().
 * range.copyFormatToRange(1555299895, 4, 6, 4, 6);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyFormatToRange
 * 
 * @param {IntegerNum} gridId - The unique ID of the sheet within the spreadsheet, irrespective of position.
 * @param {IntegerNum} column - The first column of the target range.
 * @param {IntegerNum} columnEnd - The end column of the target range.
 * @param {IntegerNum} row - The start row of the target range.
 * @param {IntegerNum} rowEnd - The end row of the target range.
 * 
 * @return void
 */


/**
 * Copy the formatting of the range to the given location. If the destination is larger or smaller
 * than the source range then the source is repeated or truncated accordingly. Note that this
 * method copies the formatting only.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var source = ss.getSheets()[0];
 * var destination = ss.getSheets()[1];
 * 
 * var range = source.getRange(&quot;B2:D4&quot;);
 * 
 * // This copies the formatting in B2:D4 in the source sheet to
 * // D4:F6 in the second sheet
 * range.copyFormatToRange(destination, 4, 6, 4, 6);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyFormatToRange
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The target sheet.
 * @param {IntegerNum} column - The first column of the target range.
 * @param {IntegerNum} columnEnd - The end column of the target range.
 * @param {IntegerNum} row - The start row of the target range.
 * @param {IntegerNum} rowEnd - The end row of the target range.
 * 
 * @return void
 */


/**
 * Copies the data from a range of cells to another range of cells. Both the values and formatting
 * are copied.
 * 
 * <pre class="prettyprint"><code>
 * // The code below copies the first 5 columns over to the 6th column.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeToCopy = sheet.getRange(1, 1, sheet.getMaxRows(), 5);
 * rangeToCopy.copyTo(sheet.getRange(1, 6));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyTo
 * 
 * @param {SpreadsheetApp.Range} destination - A destination range to copy to; only the top-left cell position is relevant.
 * 
 * @return void
 */


/**
 * Copies the data from a range of cells to another range of cells. By default both the values and
 * formatting are copied, but this can be overridden using advanced arguments.
 * 
 * <pre class="prettyprint"><code>
 * // The code below copies only the values of the first 5 columns over to the 6th column.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * sheet.getRange(&quot;A:E&quot;).copyTo(sheet.getRange(&quot;F1&quot;), {contentsOnly:true});
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyTo
 * 
 * @param {SpreadsheetApp.Range} destination - A destination range to copy to; only the top-left cell position is relevant.
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return void
 */


/**
 * Copies the data from a range of cells to another range of cells.
 * 
 * <pre class="prettyprint"><code>
 * // The code below copies only the values of the first 5 columns over to the 6th column.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * sheet.getRange(&quot;A:E&quot;).copyTo(sheet.getRange(&quot;F1&quot;), spreadsheetApp.CopyPasteType.PASTE_VALUES);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyTo
 * 
 * @param {SpreadsheetApp.Range} destination - A destination range to copy to; only the top-left cell position is relevant.
 * @param {SpreadsheetApp.CopyPasteType} copyPasteType - A type that specifies how the range contents are pasted to the
 *     destination.
 * @param {Boolean} transposed - Whether the range should be pasted in its transposed orientation.
 * 
 * @return void
 */


/**
 * Copy the content of the range to the given location. If the destination is larger or smaller
 * than the source range then the source is repeated or truncated accordingly.
 * 
 * <p>For a detailed description of the gridId parameter, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()'>getGridId()</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var source = ss.getSheets()[0];
 * 
 * var range = source.getRange(&quot;B2:D4&quot;);
 * 
 * // This copies the data in B2:D4 in the source sheet to
 * // D4:F6 in the sheet with gridId 0
 * range.copyValuesToRange(0, 4, 6, 4, 6);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyValuesToRange
 * 
 * @param {IntegerNum} gridId - The unique ID of the sheet within the spreadsheet, irrespective of position.
 * @param {IntegerNum} column - The first column of the target range.
 * @param {IntegerNum} columnEnd - The end column of the target range.
 * @param {IntegerNum} row - The start row of the target range.
 * @param {IntegerNum} rowEnd - The end row of the target range.
 * 
 * @return void
 */


/**
 * Copy the content of the range to the given location. If the destination is larger or smaller
 * than the source range then the source is repeated or truncated accordingly.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var source = ss.getSheets()[0];
 * var destination = ss.getSheets()[1];
 * 
 * var range = source.getRange(&quot;B2:D4&quot;);
 * 
 * // This copies the data in B2:D4 in the source sheet to
 * // D4:F6 in the second sheet
 * range.copyValuesToRange(destination, 4, 6, 4, 6);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#copyValuesToRange
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The target sheet.
 * @param {IntegerNum} column - The first column of the target range.
 * @param {IntegerNum} columnEnd - The end column of the target range.
 * @param {IntegerNum} row - The start row of the target range.
 * @param {IntegerNum} rowEnd - The end row of the target range.
 * 
 * @return void
 */


/**
 * Returns a DeveloperMetadataFinderApi for finding developer metadata within the scope of this
 * range. Metadata is within the scope of the range only if it is wholly contained within that
 * range. For example, metadata associated with the row ‘3:3’ is not in the scope of a range
 * ‘A1:D5’ but is within the scope of a range ‘1:5’.
 * 
 * @function SpreadsheetApp.Range#createDeveloperMetadataFinder
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} A developer metadata finder to search for metadata in the scope of this range.
 */


/**
 * Creates a filter applied to the range. There can be at most one filter in a sheet.
 * 
 * @function SpreadsheetApp.Range#createFilter
 * 
 * @return {SpreadsheetApp.Filter} The new filter.
 */


/**
 * Creates an empty pivot table from the specified <code>sourceData</code> anchored at the first cell
 * in this range.
 * 
 * @function SpreadsheetApp.Range#createPivotTable
 * 
 * @param {SpreadsheetApp.Range} sourceData - The data to create the pivot table from.
 * 
 * @return {SpreadsheetApp.PivotTable} The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code>.
 */


/**
 * Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted
 * towards the deleted range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D10&quot;);
 * range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#deleteCells
 * 
 * @param {SpreadsheetApp.Dimension} shiftDimension - The dimension along which to shift existing data.
 * 
 * @return void
 */


/**
 * Expands the collapsed groups whose range or control toggle intersects with this range. The
 * control toggle location is the index at which the control toggle is shown, directly before or
 * after the group depending on settings. If there is more than one group at the same location,
 * the shallowest group is expanded.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getActiveRange();
 * 
 * // All row and column groups within the range are expanded.
 * range.expandGroups();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#expandGroups
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Returns a string description of the range, in A1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(1, 1, 2, 5);
 * 
 * // Logs &quot;A1:E2&quot;
 * Logger.log(range.getA1Notation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getA1Notation
 * 
 * @return {String} The string description of the range in A1 notation.
 */


/**
 * Returns the background color of the top-left cell in the range (for example, <code>&#39;#ffffff&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B5&quot;);
 * Logger.log(cell.getBackground());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getBackground
 * 
 * @return {String} The color code of the background.
 */


/**
 * Returns the background colors of the cells in the range (for example, <code>&#39;#ffffff&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var bgColors = range.getBackgrounds();
 * for (var i in bgColors) {
 *   for (var j in bgColors[i]) {
 *     Logger.log(bgColors[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getBackgrounds
 * 
 * @return {String[][]} A two-dimensional array of color codes of the backgrounds.
 */


/**
 * Returns all the bandings that are applied to any cells in this range.
 * 
 * @function SpreadsheetApp.Range#getBandings
 * 
 * @return {SpreadsheetApp.Banding[]} All the bandings that are applied to any cells in this range.
 */


/**
 * Returns a given cell within a range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * // The row and column here are relative to the range
 * // getCell(1,1) in this code returns the cell at B2, B2
 * var cell = range.getCell(1, 1);
 * Logger.log(cell.getValue());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getCell
 * 
 * @param {IntegerNum} row - The row of the cell relative to the range.
 * @param {IntegerNum} column - The column of the cell relative to the range.
 * 
 * @return {SpreadsheetApp.Range} A range containing a single cell at the specified coordinates.
 */


/**
 * Returns the starting column position for this range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * // Logs &quot;2.0&quot;
 * Logger.log(range.getColumn());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getColumn
 * 
 * @return {IntegerNum} The range's starting column position in the spreadsheet.
 */


/**
 * Gets all the data source tables intersecting with the range.
 * 
 * @function SpreadsheetApp.Range#getDataSourceTables
 * 
 * @return {SpreadsheetApp.DataSourceTable[]} A list of data source tables.
 */


/**
 * Returns a URL for the data in this range, which can be used to create charts and queries.
 * 
 * <p><div class="ds-selector-tabs"><section>
 * 
 * <h3>Code.gs</h3>
 * 
 * <pre class="prettyprint"><code>
 * function doGet() {
 *   var ss = SpreadsheetApp.openById(&#39;1khO6hBWTNNyvyyxvob7aoZTI9ZvlqqASNeq0e29Tw2c&#39;);
 *   var sheet = ss.getSheetByName(&#39;ContinentData&#39;);
 *   var range = sheet.getRange(&#39;A1:B8&#39;);
 * 
 *   var template = HtmlService.createTemplateFromFile(&#39;piechart&#39;);
 *   template.dataSourceUrl = range.getDataSourceUrl();
 *   return template.evaluate();
 * }
 * </code></pre>
 * 
 * </section> <section>
 * 
 * <h3>piechart.html</h3>
 * 
 * <pre class="prettyprint"><code>
 * &lt;!DOCTYPE html&gt;
 * &lt;html&gt;
 *   &lt;head&gt;
 *     &lt;!--Load the AJAX API--&gt;
 *     &lt;script type=&quot;text/javascript&quot; src=&quot;https://www.gstatic.com/charts/loader.js&quot;&gt;&lt;/script&gt;
 *     &lt;script type=&quot;text/javascript&quot;&gt;
 *       // Load the Visualization API and the corechart package.
 *       google.charts.load(&#39;current&#39;, {&#39;packages&#39;: [&#39;corechart&#39;]});
 * 
 *       // Set a callback to run when the Google Visualization API is loaded.
 *       google.charts.setOnLoadCallback(queryData);
 * 
 *       function queryData() {
 *         var query = new google.visualization.Query(&#39;&lt;?= dataSourceUrl ?&gt;&#39;);
 *         query.send(drawChart);
 *       }
 * 
 *       // Callback that creates and populates a data table,
 *       // instantiates the pie chart, passes in the data and
 *       // draws it.
 *       function drawChart(response) {
 *         if (response.isError()) {
 *           alert(&#39;Error: &#39; + response.getMessage() + &#39; &#39; + response.getDetailedMessage());
 *           return;
 *         }
 *         var data = response.getDataTable();
 * 
 *         // Set chart options.
 *         var options = {
 *           title: &#39;Population by Continent&#39;,
 *           width: 400,
 *           height: 300
 *         };
 * 
 *         // Instantiate and draw the chart, passing in some options.
 *         var chart = new google.visualization.PieChart(document.getElementById(&#39;chart_div&#39;));
 *         chart.draw(data, options);
 *       }
 *     &lt;/script&gt;
 *   &lt;/head&gt;
 *   &lt;body&gt;
 *     &lt;!-- Div that holds the pie chart. --&gt;
 *     &lt;div id=&quot;chart_div&quot;&gt;&lt;/div&gt;
 *   &lt;/body&gt;
 * &lt;/html&gt;
 * </code></pre>
 * 
 * </section> </div>
 * 
 * @function SpreadsheetApp.Range#getDataSourceUrl
 * 
 * @return {String} A URL for this range as a data source that can be passed to other APIs such as charts.
 */


/**
 * Return the data inside this object as a DataTable.
 * 
 * @function SpreadsheetApp.Range#getDataTable
 * 
 * @return {DataTable} the data as a datatable.
 */


/**
 * Return the data inside this range as a DataTable.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;A1:B7&quot;);
 * 
 * // Calling this method with &quot;true&quot; sets the first line to be the title of the axes
 * var datatable = range.getDataTable(true);
 * 
 * // Note that this doesn&#39;t build an EmbeddedChart, so you can&#39;t just use
 * // Sheet#insertChart(). To do that, use sheet.newChart().addRange() instead.
 * var chart = Charts.newBarChart()
 *     .setDataTable(datatable)
 *     .setOption(&quot;title&quot;, &quot;Your Title Here&quot;)
 *     .build();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getDataTable
 * 
 * @param {Boolean} firstRowIsHeader - Whether to treat the first row as a header.
 * 
 * @return {DataTable} The data as a datatable.
 */


/**
 * Returns the data validation rule for the top-left cell in the range. If data validation has not
 * been set on the cell, this method returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log information about the data validation rule for cell A1.
 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
 * var rule = cell.getDataValidation();
 * if (rule != null) {
 *   var criteria = rule.getCriteriaType();
 *   var args = rule.getCriteriaValues();
 *   Logger.log(&#39;The data validation rule is %s %s&#39;, criteria, args);
 * } else {
 *   Logger.log(&#39;The cell does not have a data validation rule.&#39;)
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getDataValidation
 * 
 * @return {SpreadsheetApp.DataValidation} The data validation rule for the top-left cell in the range.
 */


/**
 * Returns the data validation rules for all cells in the range. If data validation has not been
 * set on a given cell, this method returns <code>null</code> for that cell's position in the array.
 * 
 * <pre class="prettyprint"><code>
 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
 * var rules = range.getDataValidations();
 * 
 * for (var i = 0; i &lt; rules.length; i++) {
 *   for (var j = 0; j &lt; rules[i].length; j++) {
 *     var rule = rules[i][j];
 * 
 *     if (rule != null) {
 *       var criteria = rule.getCriteriaType();
 *       var args = rule.getCriteriaValues();
 * 
 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
 *         // Create a builder from the existing rule, then change the dates.
 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
 *       }
 *     }
 *   }
 * }
 * range.setDataValidations(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getDataValidations
 * 
 * @return {SpreadsheetApp.DataValidation[][]} A two-dimensional array of data validation rules associated with the cells in the
 *     range.
 */


/**
 * Get the developer metadata associated with this range.
 * 
 * @function SpreadsheetApp.Range#getDeveloperMetadata
 * 
 * @return {SpreadsheetApp.DeveloperMetadata[]} The developer metadata associated with this range.
 */


/**
 * Returns the displayed value of the top-left cell in the range. The value is a <code>String</code>.
 * The displayed value takes into account date, time and currency formatting formatting, including
 * formats applied automatically by the spreadsheet's locale setting. Empty cells return an empty
 * string.
 * 
 * @function SpreadsheetApp.Range#getDisplayValue
 * 
 * @return {String} The displayed value in this cell.
 */


/**
 * Returns the rectangular grid of values for this range.
 * 
 * <p>Returns a two-dimensional array of displayed values, indexed by row, then by column. The
 * values are <code>String</code> objects. The displayed value takes into account date, time and
 * currency formatting, including formats applied automatically by the spreadsheet's locale
 * setting. Empty cells are represented by an empty string in the array. Remember that while a
 * range index starts at <code>1, 1</code>, the JavaScript array is indexed from <code>[0][0]</code>.
 * 
 * <pre class="prettyprint"><code>
 * // The code below gets the displayed values for the range C2:G8
 * // in the active spreadsheet.  Note that this is a JavaScript array.
 * var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getDisplayValues();
 * Logger.log(values[0][0]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getDisplayValues
 * 
 * @return {String[][]} A two-dimensional array of values.
 */


/**
 * Returns the filter in the sheet this range belongs to, or <code>null</code> if there is no filter on
 * the sheet.
 * 
 * @function SpreadsheetApp.Range#getFilter
 * 
 * @return {SpreadsheetApp.Filter} The filter.
 */


/**
 * Returns the font color of the cell in the top-left corner of the range, in CSS notation (such
 * as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getFontColor());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontColor
 * 
 * @return {String} The font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 */


/**
 * Returns the font colors of the cells in the range in CSS notation (such as <code>&#39;#ffffff&#39;</code> or
 * <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getFontColors();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontColors
 * 
 * @return {String[][]} A two-dimensional array of font colors associated with cells in the range.
 */


/**
 * Returns the font families of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getFontFamilies();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontFamilies
 * 
 * @return {String[][]} A two-dimensional array of font families associated with cells in the range.
 */


/**
 * Returns the font family of the cell in the top-left corner of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getFontFamily());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontFamily
 * 
 * @return {String} The font family of the cell.
 */


/**
 * Gets the line style of the cell in the top-left corner of the range (<code>&#39;underline&#39;</code>,
 * <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getFontLine());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontLine
 * 
 * @return {String} The font line.
 */


/**
 * Gets the line style of the cells in the range (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
 * <code>&#39;none&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getFontLines();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontLines
 * 
 * @return {String[][]} A two-dimensional array of font lines associated with cells in the range.
 */


/**
 * Returns the font size in point size of the cell in the top-left corner of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getFontSize());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontSize
 * 
 * @return {IntegerNum} The font size in point size.
 */


/**
 * Returns the font sizes of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getFontSizes();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontSizes
 * 
 * @return {IntegerNum[][]} A two-dimensional array of font sizes of text associated with cells in the range.
 */


/**
 * Returns the font style (<code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>) of the cell in the top-left
 * corner of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getFontStyle());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontStyle
 * 
 * @return {String} The font style of the text in the cell.
 */


/**
 * Returns the font styles of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getFontStyles();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontStyles
 * 
 * @return {String[][]} A two-dimensional array of font styles of text associated with cells in the range.
 */


/**
 * Returns the font weight (normal/bold) of the cell in the top-left corner of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getFontWeight());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontWeight
 * 
 * @return {String} The font weight of the text in the cell.
 */


/**
 * Returns the font weights of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getFontWeights();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFontWeights
 * 
 * @return {String[][]} A two-dimensional array of font weights of text associated with cells in the range.
 */


/**
 * Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the
 * cell is empty or doesn't contain a formula.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This assumes you have a function in B5 that sums up
 * // B2:B4
 * var range = sheet.getRange(&quot;B5&quot;);
 * 
 * // Logs the calculated value and the formula
 * Logger.log(&quot;Calculated value: %s Formula: %s&quot;,
 *            range.getValue(),
 *            range.getFormula());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFormula
 * 
 * @return {String} The formula for the cell.
 */


/**
 * Returns the formula (R1C1 notation) for a given cell, or <code>null</code> if none.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B5&quot;);
 * var formula = range.getFormulaR1C1();
 * Logger.log(formula);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFormulaR1C1
 * 
 * @return {String} The formula in R1C1 notation.
 */


/**
 * Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are
 * empty strings for cells with no formula.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var formulas = range.getFormulas();
 * for (var i in formulas) {
 *   for (var j in formulas[i]) {
 *     Logger.log(formulas[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFormulas
 * 
 * @return {String[][]} A two-dimensional array of formulas in string format.
 */


/**
 * Returns the formulas (R1C1 notation) for the cells in the range. Entries in the 2D array are
 * <code>null</code> for cells with no formula.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var formulas = range.getFormulasR1C1();
 * for (var i in formulas) {
 *   for (var j in formulas[i]) {
 *     Logger.log(formulas[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getFormulasR1C1
 * 
 * @return {String[][]} A two-dimensional array of formulas in R1C1 notation.
 */


/**
 * Returns the grid ID of the range's parent sheet. IDs are random non-negative int values.
 * 
 * <pre class="prettyprint"><code>
 * // Log the grid ID of the first sheet (by tab position) in the spreadsheet.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getGridId());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getGridId
 * 
 * @return {IntegerNum} The grid ID of the parent sheet.
 */


/**
 * Returns the height of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * // logs 3.0
 * Logger.log(range.getHeight());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getHeight
 * 
 * @return {IntegerNum} The height of the range.
 */


/**
 * Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left
 * corner of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getHorizontalAlignment());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getHorizontalAlignment
 * 
 * @return {String} The horizontal alignment of the text in the cell.
 */


/**
 * Returns the horizontal alignments of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getHorizontalAlignments();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getHorizontalAlignments
 * 
 * @return {String[][]} A two-dimensional array of horizontal alignments of text associated with cells in the
 *     range.
 */


/**
 * Returns the end column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * // Logs &quot;4.0&quot;
 * Logger.log(range.getLastColumn());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getLastColumn
 * 
 * @return {IntegerNum} The range's ending column position in the spreadsheet.
 */


/**
 * Returns the end row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * // Logs &quot;4.0&quot;
 * Logger.log(range.getLastRow());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getLastRow
 * 
 * @return {IntegerNum} The range's ending row position in the spreadsheet.
 */


/**
 * Returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> objects representing merged cells that either are fully
 * within the current range, or contain at least one cell in the current range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * 
 * var mergedRanges = range.getMergedRanges();
 * for (var i = 0; i &lt; mergedRanges.length; i++) {
 *   Logger.log(mergedRanges[i].getA1Notation());
 *   Logger.log(mergedRanges[i].getDisplayValue());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getMergedRanges
 * 
 * @return {SpreadsheetApp.Range[]} An array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> objects, representing merged cells overlapping the range.
 */


/**
 * Starting at the cell in the first column and row of the range, returns the next cell in the
 * given direction that is the edge of a contiguous range of cells with data in them or the cell
 * at the edge of the spreadsheet in that direction. This is equivalent to typing <code>
 * Ctrl+[arrow key]</code> in the editor.
 * 
 * <pre class="prettyprint"><code>
 * // Assume the active spreadsheet is blank.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;C3:E5&quot;);
 * // Logs &quot;C1&quot;
 * Logger.log(range.getNextDataCell(Direction.UP).getA1Notation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNextDataCell
 * 
 * @param {SpreadsheetApp.Direction} direction - The direction in which to find the next data region edge cell.
 * 
 * @return {SpreadsheetApp.Range} The data region edge cell or the cell at the edge of the spreadsheet.
 */


/**
 * Returns the note associated with the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getNote());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNote
 * 
 * @return {String} The note associated with the given cell.
 */


/**
 * Returns the notes associated with the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getNotes();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNotes
 * 
 * @return {String[][]} A two-dimensional array of notes associated with cells in the range.
 */


/**
 * Returns the number of columns in this range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D5&quot;);
 * Logger.log(range.getNumColumns());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNumColumns
 * 
 * @return {IntegerNum} The number of columns in this range.
 */


/**
 * Returns the number of rows in this range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D5&quot;);
 * Logger.log(range.getNumRows());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNumRows
 * 
 * @return {IntegerNum} The number of rows in this range.
 */


/**
 * Get the number or date formatting of the top-left cell of the given range. The returned format
 * patterns are described in the <a href="/sheets/api/guides/formats">Sheets API
 * documentation</a>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;C4&quot;);
 * Logger.log(cell.getNumberFormat());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNumberFormat
 * 
 * @return {String} The number format of the top-left cell of the range.
 */


/**
 * Returns the number or date formats for the cells in the range. The returned format patterns are
 * described in the <a href="/sheets/api/guides/formats">Sheets API documentation</a>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var formats = range.getNumberFormats();
 * for (var i in formats) {
 *   for (var j in formats[i]) {
 *     Logger.log(formats[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getNumberFormats
 * 
 * @return {String[][]} A two-dimensional array of number formats.
 */


/**
 * Returns the Rich Text value for the top left cell of the range.
 * 
 * <pre class="prettyprint"><code>
 * // Get the Rich Text value of cell D4.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;D4:F6&quot;);
 * var richText = range.getRichTextValue();
 * Logger.log(richText);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getRichTextValue
 * 
 * @return {SpreadsheetApp.RichTextValue} The Rich Text value of the top left cell in the range.
 */


/**
 * Returns the Rich Text values for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Get the Rich Text values for all cells in range B5:C6
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var values = range.getRichTextValues();
 * 
 * for (var i = 0; i &lt; values.length; i++) {
 *   for (var j = 0; j &lt; values[i].length; j++) {
 *     Logger.log(values[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getRichTextValues
 * 
 * @return {SpreadsheetApp.RichTextValue[][]} A two-dimensional array of Rich Text values.
 */


/**
 * Returns the row position for this range. Identical to <a
 * href="/apps-script/reference/spreadsheet/range#getrowindex">getRowIndex()</a>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2&quot;);
 * Logger.log(range.getRow());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getRow
 * 
 * @return {IntegerNum} The row position of the range.
 */


/**
 * Returns the row position for this range. Identical to <a
 * href="/apps-script/reference/spreadsheet/range#getrow">getRow()</a>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2&quot;);
 * Logger.log(range.getRowIndex());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getRowIndex
 * 
 * @return {IntegerNum} The row position of the range.
 */


/**
 * Returns the sheet this range belongs to.
 * 
 * @function SpreadsheetApp.Range#getSheet
 * 
 * @return {SpreadsheetApp.Sheet} The sheet that this range belongs to.
 */


/**
 * Returns the text direction for the top left cell of the range. Returns <code>null</code> if the cell
 * text direction is determined with automatic detection.
 * 
 * <pre class="prettyprint"><code>
 * // Get the text direction of cell B1.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B1:D4&quot;);
 * Logger.log(range.getTextDirection());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getTextDirection
 * 
 * @return {SpreadsheetApp.TextDirection} The text direction of the top left cell in the range.
 */


/**
 * Returns the text directions for the cells in the range. Entries in the 2D array are <code>null</code> for cells using automatic detection.
 * 
 * <pre class="prettyprint"><code>
 * // Get the text directions for all cells in range B5:C6
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var directions = range.getTextDirections();
 * 
 * for (var i = 0; i &lt; directions.length; i++) {
 *   for (var j = 0; j &lt; directions[i].length; j++) {
 *     Logger.log(directions[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getTextDirections
 * 
 * @return {SpreadsheetApp.TextDirection[][]} A two-dimensional array of text directions.
 */


/**
 * Returns the text rotation settings for the top left cell of the range.
 * 
 * <pre class="prettyprint"><code>
 * // Log the text rotation settings for a cell.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * 
 * var cell = sheet.getRange(&quot;A1&quot;);
 * Logger.log(cell.getTextRotation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getTextRotation
 * 
 * @return {SpreadsheetApp.TextRotation} The text rotation settings.
 */


/**
 * Returns the text rotation settings for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getTextRotations();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     var rotation = results[i][j];
 *     Logger.log(&quot;Cell [%s, %s] has text rotation: %v&quot;, i, j, rotation);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getTextRotations
 * 
 * @return {SpreadsheetApp.TextRotation[][]} A two-dimensional array of text rotations associated with cells in the range.
 */


/**
 * Returns the text style for the top left cell of the range.
 * 
 * <pre class="prettyprint"><code>
 * // Get the text style of cell D4.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;D4:F6&quot;);
 * var style = range.getTextStyle();
 * Logger.log(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getTextStyle
 * 
 * @return {SpreadsheetApp.TextStyle} The text style of the top left cell in the range.
 */


/**
 * Returns the text styles for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Get the text styles for all cells in range B5:C6
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var styles = range.getTextStyles();
 * 
 * for (var i = 0; i &lt; styles.length; i++) {
 *   for (var j = 0; j &lt; styles[i].length; j++) {
 *     Logger.log(styles[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getTextStyles
 * 
 * @return {SpreadsheetApp.TextStyle[][]} A two-dimensional array of text styles.
 */


/**
 * Returns the value of the top-left cell in the range. The value may be of type <code>Number</code>,
 * <code>Boolean</code>, <code>Date</code>, or <code>String</code> depending on the value of the cell. Empty
 * cells return an empty string.
 * 
 * @function SpreadsheetApp.Range#getValue
 * 
 * @return {Object} The value in this cell.
 */


/**
 * Returns the rectangular grid of values for this range.
 * 
 * <p>Returns a two-dimensional array of values, indexed by row, then by column. The values may be
 * of type <code>Number</code>, <code>Boolean</code>, <code>Date</code>, or <code>String</code>, depending on the
 * value of the cell. Empty cells are represented by an empty string in the array. Remember that
 * while a range index starts at <code>1, 1</code>, the JavaScript array is indexed from <code>[0][0]</code>.
 * 
 * <pre class="prettyprint"><code>
 * // The code below gets the values for the range C2:G8
 * // in the active spreadsheet.  Note that this is a JavaScript array.
 * var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
 * Logger.log(values[0][0]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getValues
 * 
 * @return {Object[][]} A two-dimensional array of values.
 */


/**
 * Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the
 * range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getVerticalAlignment());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getVerticalAlignment
 * 
 * @return {String} The vertical alignment of the text in the cell.
 */


/**
 * Returns the vertical alignments of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getVerticalAlignments();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     Logger.log(results[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getVerticalAlignments
 * 
 * @return {String[][]} A two-dimensional array of vertical alignments of text associated with cells in the
 *     range.
 */


/**
 * Returns the width of the range in columns.
 * 
 * @function SpreadsheetApp.Range#getWidth
 * 
 * @return {IntegerNum} The number of columns in the range.
 */


/**
 * Returns the wrapping policy of the cell in the top-left corner of the range. <code>true</code> if
 * the text wraps, <code>false</code> if the text does not.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.getWrap());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getWrap
 * 
 * @return {Boolean} Whether the text in this cell wraps or not.
 */


/**
 * Returns the text wrapping strategies for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Get the text wrapping strategies for all cells in range B5:C6
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * var strategies = range.getWrapStrategies();
 * 
 * for (var i = 0; i &lt; strategies.length; i++) {
 *   for (var j = 0; j &lt; strategies[i].length; j++) {
 *     Logger.log(strategies[i][j]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getWrapStrategies
 * 
 * @return {SpreadsheetApp.WrapStrategy[][]} A two-dimensional array of text wrapping strategies.
 */


/**
 * Returns the text wrapping strategy for the top left cell of the range.
 * 
 * <pre class="prettyprint"><code>
 * // Get the text wrapping strategy of cell B1.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B1:D4&quot;);
 * Logger.log(range.getWrapStrategy());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getWrapStrategy
 * 
 * @return {SpreadsheetApp.WrapStrategy} The text wrapping strategy of the top left cell in the range.
 */


/**
 * Returns the wrapping policy of the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * var results = range.getVerticalAlignments();
 * 
 * for (var i in results) {
 *   for (var j in results[i]) {
 *     var isWrapped = results[i][j];
 *     if (isWrapped) {
 *        Logger.log(&quot;Cell [%s, %s] has wrapped text&quot;, i, j);
 *     }
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getWraps
 * 
 * @return {Boolean[][]} A two-dimensional array of vertical alignments of text associated with cells in the
 *     range.
 */


/**
 * Inserts empty cells into this range. The new cells retain any formatting present in the cells
 * previously occupying this range. Existing data in the sheet along the provided dimension is
 * shifted away from the inserted range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D10&quot;);
 * range.insertCells(SpreadsheetApp.Dimension.COLUMNS);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#insertCells
 * 
 * @param {SpreadsheetApp.Dimension} shiftDimension - The dimension along which to shift existing data.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Returns <code>true</code> if the range is totally blank.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * Logger.log(range.isBlank());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#isBlank
 * 
 * @return {Boolean} <code>true</code> if the range is blank; <code>false</code> otherwise.
 */


/**
 * Determines whether the end of the range is bound to a particular column. For example, for the
 * ranges <code>A1:B10</code> or <code>B:B</code>, which are bound to columns at the end of the range, this
 * method returns <code>true</code>; for the ranges <code>3:7</code> or <code>A1:5</code>, which are bound only
 * to particular rows at the end of the range, this method returns <code>false</code>.
 * 
 * @function SpreadsheetApp.Range#isEndColumnBounded
 * 
 * @return {Boolean} <code>true</code> if the end of the range is bound to a particular column; <code>false</code>
 *     otherwise.
 */


/**
 * Determines whether the end of the range is bound to a particular row. For example, for the
 * ranges <code>A1:B10</code> or <code>3:7</code>, which are bound to rows at the end of the range, this
 * method returns <code>true</code>; for the ranges <code>B:B</code> or <code>A1:C</code>, which are bound only
 * to particular columns at the end of the range, this method returns <code>false</code>.
 * 
 * @function SpreadsheetApp.Range#isEndRowBounded
 * 
 * @return {Boolean} <code>true</code> if the end of the range is bound to a particular row; <code>false</code>
 *     otherwise.
 */


/**
 * Returns <code>true</code> if the cells in the current range overlap any merged cells.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:B3&quot;);
 * 
 * // True if any of the cells in A1:B3 is included in a merge.
 * var isPartOfMerge = range.isPartOfMerge();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#isPartOfMerge
 * 
 * @return {Boolean} <code>true</code> if the range overlaps any merged cells, otherwise returns <code>false</code>.
 */


/**
 * Determines whether the start of the range is bound to a particular column. For example, for the
 * ranges <code>A1:B10</code> or <code>B:B</code>, which are bound to columns at the start of the range,
 * this method returns <code>true</code>; for the range <code>3:7</code>, which is bound only to a row at
 * the start of the range, this method returns <code>false</code>.
 * 
 * @function SpreadsheetApp.Range#isStartColumnBounded
 * 
 * @return {Boolean} <code>true</code> if the start of the range is bound to a particular column; <code>false</code>
 *     otherwise.
 */


/**
 * Determines whether the start of the range is bound to a particular row. For example, for the
 * ranges <code>A1:B10</code> or <code>3:7</code>, which are bound to rows at the start of the range, this
 * method returns <code>true</code>; for the range <code>B:B</code>, which is bound only to a particular
 * column at the start of the range, this method returns <code>false</code>.
 * 
 * @function SpreadsheetApp.Range#isStartRowBounded
 * 
 * @return {Boolean} <code>true</code> if the start of the range is bound to a particular row; <code>false</code>
 *     otherwise.
 */


/**
 * Merges the cells in the range together into a single block.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * 
 * // The code below 2-dimensionally merges the cells in A1 to B3
 * sheet.getRange(&#39;A1:B3&#39;).merge();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#merge
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Merge the cells in the range across the columns of the range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The code below merges cells C5:E5 into one cell
 * var range1 = sheet.getRange(&quot;C5:E5&quot;);
 * range1.mergeAcross();
 * 
 * // The code below creates 2 horizontal cells, F5:H5 and F6:H6
 * var range2 = sheet.getRange(&quot;F5:H6&quot;);
 * range2.mergeAcross();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#mergeAcross
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Merges the cells in the range together.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * 
 * // The code below vertically merges the cells in A1 to A10
 * sheet.getRange(&#39;A1:A10&#39;).mergeVertically();
 * 
 * // The code below creates 3 merged columns: B1 to B10, C1 to C10, and D1 to D10
 * sheet.getRange(&#39;B1:D10&#39;).mergeVertically();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#mergeVertically
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Cut and paste (both format and values) from this range to the target range.
 * 
 * <pre class="prettyprint"><code>
 * // The code below moves the first 5 columns over to the 6th column
 * var sheet = SpreadsheetApp.getActiveSheet()
 * sheet.getRange(&quot;A1:E&quot;).moveTo(sheet.getRange(&quot;F1&quot;));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#moveTo
 * 
 * @param {SpreadsheetApp.Range} target - A target range to copy this range to; only the top-left cell position is
 *     relevant.
 * 
 * @return void
 */


/**
 * Returns a new range that is offset from this range by the given number of rows and columns
 * (which can be negative). The new range is the same size as the original range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;A1&quot;);
 * 
 * // newCell references B2
 * var newCell = cell.offset(1, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#offset
 * 
 * @param {IntegerNum} rowOffset - The number of rows down from the range's top-left cell; negative values
 *     represent rows up from the range's top-left cell.
 * @param {IntegerNum} columnOffset - The number of columns right from the range's top-left cell; negative values
 *     represent columns left from the range's top-left cell.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Returns a new range that is relative to the current range, whose upper left point is offset
 * from the current range by the given rows and columns, and with the given height in cells.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;A1&quot;);
 * 
 * // newCell references B2:B3
 * var newRange = cell.offset(1, 1, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#offset
 * 
 * @param {IntegerNum} rowOffset - The number of rows down from the range's top-left cell; negative values
 *     represent rows up from the range's top-left cell.
 * @param {IntegerNum} columnOffset - The number of columns right from the range's top-left cell; negative values
 *     represent columns left from the range's top-left cell.
 * @param {IntegerNum} numRows - The height in rows of the new range.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Returns a new range that is relative to the current range, whose upper left point is offset
 * from the current range by the given rows and columns, and with the given height and width in
 * cells.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;A1&quot;);
 * 
 * // newCell references B2:C3
 * var newRange = cell.offset(1, 1, 2, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#offset
 * 
 * @param {IntegerNum} rowOffset - The number of rows down from the range's top-left cell; negative values
 *     represent rows up from the range's top-left cell.
 * @param {IntegerNum} columnOffset - The number of columns right from the range's top-left cell; negative values
 *     represent columns left from the range's top-left cell.
 * @param {IntegerNum} numRows - The height in rows of the new range.
 * @param {IntegerNum} numColumns - The width in columns of the new range.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Creates an object that can protect the range from being edited except by users who have
 * permission. Until the script actually changes the list of editors for the range (by calling
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)'>Protection.removeEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)'>Protection.removeEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)'>Protection.removeEditors(emailAddresses)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)'>Protection.addEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)'>Protection.addEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)'>Protection.addEditors(emailAddresses)</a></code>, or setting a new
 * value for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean)'>Protection.setDomainEdit(editable)</a></code>), the permissions mirror those of the
 * spreadsheet itself, which effectively means that the range remains unprotected. If the range is
 * already protected, this method creates a new protected range that overlaps the existing one. If
 * a cell is protected by multiple protected ranges and any of them prevent a particular user from
 * editing the cell, then that user is not permitted to edit the cell.
 * 
 * <pre class="prettyprint"><code>
 * // Protect range A1:B10, then remove all other users from the list of editors.
 * var ss = SpreadsheetApp.getActive();
 * var range = ss.getRange(&#39;A1:B10&#39;);
 * var protection = range.protect().setDescription(&#39;Sample protected range&#39;);
 * 
 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 * // permission comes from a group, the script throws an exception upon removing the group.
 * var me = Session.getEffectiveUser();
 * protection.addEditor(me);
 * protection.removeEditors(protection.getEditors());
 * if (protection.canDomainEdit()) {
 *   protection.setDomainEdit(false);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#protect
 * 
 * @return {SpreadsheetApp.Protection} An object representing the protection settings.
 */


/**
 * Randomizes the order of the rows in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;A1:C7&quot;);
 * 
 * // Randomizes the range
 * range.randomize();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#randomize
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the background color of all cells in the range in CSS notation (such as <code>&#39;#ffffff&#39;</code>
 * or <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;B2:D5&quot;);
 * range.setBackground(&quot;red&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setBackground
 * 
 * @param {String} color - A color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>); a
 *     <code>null</code> value resets the color.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the background to the given color using RGB values (integers between 0 and 255 inclusive).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * 
 * // Sets the background to white
 * cell.setBackgroundRGB(255, 255, 255);
 * 
 * // Sets the background to red
 * cell.setBackgroundRGB(255, 0, 0);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setBackgroundRGB
 * 
 * @param {IntegerNum} red - The red value in RGB notation.
 * @param {IntegerNum} green - The green value in RGB notation.
 * @param {IntegerNum} blue - The blue value in RGB notation.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of background colors (must match dimensions of this range). The colors
 * are in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var colors = [
 *   [&quot;red&quot;, &quot;white&quot;, &quot;blue&quot;],
 *   [&quot;#FF0000&quot;, &quot;#FFFFFF&quot;, &quot;#0000FF&quot;] // These are the hex equivalents
 * ];
 * 
 * var cell = sheet.getRange(&quot;B5:D6&quot;);
 * cell.setBackgrounds(colors);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setBackgrounds
 * 
 * @param {String[][]} color - A two-dimensional array of colors in CSS notation (such as <code>&#39;#ffffff&#39;</code> or
 *     <code>&#39;white&#39;</code>); <code>null</code> values reset the color.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the border property. Valid values are <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * // Sets borders on the top and bottom, but leaves the left and right unchanged
 * cell.setBorder(true, null, true, null, false, false);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setBorder
 * 
 * @param {Boolean} top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the border property with color and/or style. Valid values are <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change). For color, use Color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * // Sets borders on the top and bottom, but leaves the left and right unchanged
 * // Also sets the color to &quot;red&quot;, and the border to &quot;DASHED&quot;.
 * cell.setBorder(true, null, true, null, false, false, &quot;red&quot;, SpreadsheetApp.BorderStyle.DASHED);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setBorder
 * 
 * @param {Boolean} top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
 * @param {String} color - A color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), <code>null</code> for default color (black).
 * @param {SpreadsheetApp.BorderStyle} style - A style for the borders, <code>null</code> for default style (solid).
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets one data validation rule for all cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Set the data validation rule for cell A1 to require a value from B1:B10.
 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
 * var range = SpreadsheetApp.getActive().getRange(&#39;B1:B10&#39;);
 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
 * cell.setDataValidation(rule);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setDataValidation
 * 
 * @param {SpreadsheetApp.DataValidation} rule - The data validation rule to set, or <code>null</code> to remove data validation.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the data validation rules for all cells in the range. This method takes a two-dimensional
 * array of data validations, indexed by row then by column. The array dimensions must correspond
 * to the range dimensions.
 * 
 * <pre class="prettyprint"><code>
 * // Set the data validation rules for Sheet1!A1:B5 to require a value from Sheet2!A1:A10.
 * var destinationRange = SpreadsheetApp.getActive().getSheetByName(&#39;Sheet1&#39;).getRange(&#39;A1:B5&#39;);
 * var sourceRange = SpreadsheetApp.getActive().getSheetByName(&#39;Sheet2&#39;).getRange(&#39;A1:A10&#39;);
 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange).build();
 * var rules = destinationRange.getDataValidations();
 * for (var i = 0; i &lt; rules.length; i++) {
 *   for (var j = 0; j &lt; rules[i].length; j++) {
 *     rules[i][j] = rule;
 *   }
 * }
 * destinationRange.setDataValidations(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setDataValidations
 * 
 * @param {SpreadsheetApp.DataValidation[][]} rules - A two-dimensional array of data validation rules to set; <code>null</code> values
 *     remove data validation.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setFontColor(&quot;red&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontColor
 * 
 * @param {String} color - The font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>); a
 *     <code>null</code> value resets the color.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of font colors (must match dimensions of this range). The colors are in
 * CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var colors = [
 *   [&quot;red&quot;, &quot;white&quot;, &quot;blue&quot;],
 *   [&quot;#FF0000&quot;, &quot;#FFFFFF&quot;, &quot;#0000FF&quot;] // These are the hex equivalents
 * ];
 * 
 * var cell = sheet.getRange(&quot;B5:D6&quot;);
 * cell.setFontColors(colors);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontColors
 * 
 * @param {Object[][]} colors - A two-dimensional array of colors in CSS notation (such as <code>&#39;#ffffff&#39;</code> or
 *     <code>&#39;white&#39;</code>); <code>null</code> values reset the color.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of font families (must match dimensions of this range). Examples of
 * font families are "Arial" or "Helvetica".
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var fonts = [
 *   [&quot;Arial&quot;, &quot;Helvetica&quot;, &quot;Verdana&quot;],
 *   [&quot;Courier New&quot;, &quot;Arial&quot;, &quot;Helvetica]
 * ];
 * 
 * var cell = sheet.getRange(&quot;B2:D3&quot;);
 * cell.setFontFamilies(fonts);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontFamilies
 * 
 * @param {Object[][]} fontFamilies - A two-dimensional array of font families; <code>null</code> values reset the
 *     font family.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the font family, such as "Arial" or "Helvetica".
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setFontFamily(&quot;Helvetica&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontFamily
 * 
 * @param {String} fontFamily - The font family to set; a <code>null</code> value resets the font family.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the font line style of the given range (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
 * <code>&#39;none&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setFontLine(&quot;line-through&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontLine
 * 
 * @param {String} fontLine - The font line style, either <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
 *     <code>&#39;none&#39;</code>; a <code>null</code> value resets the font line style.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of line styles (must match dimensions of this range).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var fontLines = [
 *   [&quot;underline&quot;, &quot;line-through&quot;, &quot;none&quot;]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setFontLines(fontLines);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontLines
 * 
 * @param {Object[][]} fontLines - A two-dimensional array of font line styles (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>); <code>null</code> values reset the font line style.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the font size, with the size being the point size to use.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setFontSize(20);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontSize
 * 
 * @param {IntegerNum} size - A font size in point size.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of font sizes (must match dimensions of this range). The sizes are in
 * points.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var fontSizes = [
 *   [16, 20, 24]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setFontSizes(fontSizes);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontSizes
 * 
 * @param {Object[][]} sizes - A two-dimensional array of sizes.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Set the font style for the given range (<code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setFontStyle(&quot;italic&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontStyle
 * 
 * @param {String} fontStyle - The font style, either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
 *     value resets the font style.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of font styles (must match dimensions of this range).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var fontStyles = [
 *   [&quot;italic&quot;, &quot;normal&quot;]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:C2&quot;);
 * range.setFontStyles(fontStyles);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontStyles
 * 
 * @param {Object[][]} fontStyles - A two-dimensional array of font styles, either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>; <code>null</code> values reset the font style.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Set the font weight for the given range (normal/bold).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setFontWeight(&quot;bold&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontWeight
 * 
 * @param {String} fontWeight - The font weight, either <code>&#39;bold&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
 *     value resets the font weight.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of font weights (must match dimensions of this range). An example of a
 * font weight is "bold".
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var fontStyles = [
 *   [ &quot;bold&quot;, &quot;bold&quot;, &quot;normal&quot; ]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setFontWeights(fontStyles);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFontWeights
 * 
 * @param {Object[][]} fontWeights - A two-dimensional array of font weights, either <code>&#39;bold&#39;</code> or <code>&#39;normal&#39;</code>; <code>null</code> values reset the font weight.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Updates the formula for this range. The given formula must be in A1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B5&quot;);
 * cell.setFormula(&quot;=SUM(B3:B4)&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFormula
 * 
 * @param {String} formula - A string representing the formula to set for the cell.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Updates the formula for this range. The given formula must be in R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B5&quot;);
 * // This sets the formula to be the sum of the 3 rows above B5
 * cell.setFormulaR1C1(&quot;=SUM(R[-3]C[0]:R[-1]C[0])&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFormulaR1C1
 * 
 * @param {String} formula - A string formula.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
 * must be in A1 notation. This method takes a two-dimensional array of formulas, indexed by row,
 * then by column. The array dimensions must correspond to the range dimensions.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This sets the formulas to be a row of sums, followed by a row of averages right below.
 * // The size of the two-dimensional array must match the size of the range.
 * var formulas = [
 *   [&quot;=SUM(B2:B4)&quot;, &quot;=SUM(C2:C4)&quot;, &quot;=SUM(D2:D4)&quot;],
 *   [&quot;=AVERAGE(B2:B4)&quot;, &quot;=AVERAGE(C2:C4)&quot;, &quot;=AVERAGE(D2:D4)&quot;]
 * ];
 * 
 * var cell = sheet.getRange(&quot;B5:D6&quot;);
 * cell.setFormulas(formulas);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFormulas
 * 
 * @param {String[][]} formulas - A two-dimensional string array of formulas.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
 * must be in R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This creates formulas for a row of sums, followed by a row of averages.
 * var sumOfRowsAbove = &quot;=SUM(R[-3]C[0]:R[-1]C[0])&quot;;
 * var averageOfRowsAbove = &quot;=AVERAGE(R[-4]C[0]:R[-2]C[0])&quot;;
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var formulas = [
 *   [sumOfRowsAbove, sumOfRowsAbove, sumOfRowsAbove],
 *   [averageOfRowsAbove, averageOfRowsAbove, averageOfRowsAbove]
 * ];
 * 
 * var cell = sheet.getRange(&quot;B5:D6&quot;);
 * // This sets the formula to be the sum of the 3 rows above B5.
 * cell.setFormulasR1C1(formulas);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setFormulasR1C1
 * 
 * @param {String[][]} formulas - A two-dimensional array of formulas in R1C1 format.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Set the horizontal (left to right) alignment for the given range (left/center/right).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setHorizontalAlignment(&quot;center&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setHorizontalAlignment
 * 
 * @param {String} alignment - The alignment, either <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code> or <code>&#39;normal&#39;</code>; a
 *     <code>null</code> value resets the alignment.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of horizontal alignments. see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#setHorizontalAlignment(String)'>setHorizontalAlignment(alignment)</a></code>
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var horizontalAlignments = [
 *   [ &quot;left&quot;, &quot;right&quot;, &quot;center&quot; ]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setHorizontalAlignments(horizontalAlignments);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setHorizontalAlignments
 * 
 * @param {Object[][]} alignments - A two-dimensional array of alignments, either <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code> value resets the alignment.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the note to the given value.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setNote(&quot;This is a note&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setNote
 * 
 * @param {String} note - The note value to set for the range; a <code>null</code> value removes the note.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of notes (must match dimensions of this range).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var notes = [
 *   [&quot;it goes&quot;, &quot;like this&quot;, &quot;the fourth, the fifth&quot;],
 *   [&quot;the minor fall&quot;, &quot;and the&quot;, &quot;major lift&quot;]
 * ];
 * 
 * var cell = sheet.getRange(&quot;B2:D3&quot;);
 * cell.setNotes(notes)
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setNotes
 * 
 * @param {Object[][]} notes - A two-dimensional array of notes; <code>null</code> values remove the note.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the number or date format to the given formatting string. The accepted format patterns are
 * described in the <a href="/sheets/api/guides/formats">Sheets API documentation</a>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * // Always show 3 decimal points
 * cell.setNumberFormat(&quot;0.000&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setNumberFormat
 * 
 * @param {String} numberFormat - A number format string.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of number or date formats (must match dimensions of this range). The
 * values are format pattern strings as described in the <a href="/sheets/api/guides/formats">
 * Sheets API documentation</a>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var formats = [
 *   [ &quot;0.000&quot;, &quot;0,000,000&quot;, &quot;$0.00&quot; ]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setNumberFormats(formats);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setNumberFormats
 * 
 * @param {Object[][]} numberFormats - A two-dimensional array of number formats.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the Rich Text value for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Sets all cells in range B2:D4 to have the text &quot;Hello world&quot;, with &quot;Hello&quot; bolded.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * var bold = SpreadsheetApp.newTextStyle()
 *     .setBold(true)
 *     .build();
 * var richText = SpreadsheetApp.newRichTextValue()
 *     .setText(&quot;Hello world&quot;)
 *     .setTextStyle(0, 5, bold)
 *     .build();
 * range.setRichTextValue(richText);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setRichTextValue
 * 
 * @param {SpreadsheetApp.RichTextValue} value - The desired Rich Text value.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of Rich Text values.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the cells in range A1:A2 to have Rich Text values.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:A2&quot;);
 * var bold = SpreadsheetApp.newTextStyle()
 *     .setBold(true)
 *     .build();
 * var italic = SpreadsheetApp.newTextStyle()
 *     .setItalic(true)
 *     .build();
 * var richTextA1 = SpreadsheetApp.newRichTextValue()
 *     .setText(&quot;This cell is bold&quot;)
 *     .setTextStyle(bold)
 *     .build();
 * var richTextA2 = SpreadsheetApp.newRichTextValue()
 *     .setText(&quot;bold words, italic words&quot;)
 *     .setTextStyle(0, 11, bold)
 *     .setTextStyle(12, 24, italic)
 *     .build();
 * range.setRichTextValues([[richTextA1], [richTextA2]]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setRichTextValues
 * 
 * @param {SpreadsheetApp.RichTextValue[][]} values - The desired Rich Text values.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets whether or not the range should show hyperlinks.
 * 
 * @function SpreadsheetApp.Range#setShowHyperlink
 * 
 * @param {Boolean} showHyperlink - Whether or not to show the hyperlink.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the text direction for the cells in the range. If a specified direction is <code>null</code>,
 * the direction is inferred and then set.
 * 
 * <pre class="prettyprint"><code>
 * // Sets right-to-left text direction for the range.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B5:C6&quot;);
 * range.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextDirection
 * 
 * @param {SpreadsheetApp.TextDirection} direction - The desired text direction; if <code>null</code> the direction is inferred before
 *     setting.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining..
 */


/**
 * Sets a rectangular grid of text directions. If a specified direction is <code>null</code>, the
 * direction is inferred and then set.
 * 
 * <pre class="prettyprint"><code>
 * // Copies all of the text directions from range A1:B2 over to range C5:D6.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range1 = sheet.getRange(&quot;A1:B2&quot;);
 * var range2 = sheet.getRange(&quot;C5:D6&quot;);
 * 
 * range2.setTextRotations(range1.getTextDirections());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextDirections
 * 
 * @param {SpreadsheetApp.TextDirection[][]} directions - The desired text directions; if a specified direction is <code>null</code> it is
 *     inferred before setting.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the text rotation settings for the cells in the range. The input corresponds to the angle
 * between the standard text orientation and the desired orientation. An input of zero indicates
 * that the text is set to the standard orientation.
 * 
 * <p>For left to right text direction, positive angles are in the counterclockwise direction,
 * whereas for right to left they are in the clockwise direction.
 * 
 * <pre class="prettyprint"><code>
 * // Sets all cell&#39;s in range B2:D4 to have text rotated up 45 degrees.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * range.setTextRotation(45);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextRotation
 * 
 * @param {IntegerNum} degrees - The desired angle between the standard orientation and the desired orientation.
 *     For left to right text, positive angles are in the counterclockwise direction.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the text rotation settings for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Sets all cell&#39;s in range B2:D4 to have the same text rotation settings as cell A1.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * 
 * var rotation = sheet.getRange(&quot;A1&quot;).getTextRotation();
 * 
 * sheet.getRange(&quot;B2:D4&quot;).setTextRotation(rotation);
 * 
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextRotation
 * 
 * @param {SpreadsheetApp.TextRotation} rotation - The desired text rotation settings.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of text rotations.
 * 
 * <pre class="prettyprint"><code>
 * // Copies all of the text rotations from range A1:B2 over to range C5:D6.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range1 = sheet.getRange(&quot;A1:B2&quot;);
 * var range2 = sheet.getRange(&quot;C5:D6&quot;);
 * 
 * range2.setTextRotations(range1.getTextRotations());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextRotations
 * 
 * @param {SpreadsheetApp.TextRotation[][]} rotations - The desired text rotation settings.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the text style for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the cells in range C5:D6 to have underlined size 15 font.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;C5:D6&quot;);
 * var style = SpreadsheetApp.newTextStyle()
 *     .setFontSize(15)
 *     .setUnderline(true)
 *     .build();
 * range.setTextStyle(style);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextStyle
 * 
 * @param {SpreadsheetApp.TextStyle} style - The desired text style.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of text styles.
 * 
 * <pre class="prettyprint"><code>
 * // Sets text styles for cells in range A1:B2
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B2&quot;);
 * var bold = SpreadsheetApp.newTextStyle()
 *     .setBold(true)
 *     .build();
 * var otherStyle = SpreadsheetApp.newTextStyle()
 *     .setBold(true)
 *     .setUnderline(true)
 *     .setItalic(true)
 *     .setForegroundColor(&quot;#335522&quot;)
 *     .setFontSize(44)
 *     .build();
 * range.setTextStyles([[bold, otherStyle], [otherStyle, bold]]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setTextStyles
 * 
 * @param {SpreadsheetApp.TextStyle[][]} styles - The desired text styles.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the value of the range. The value can be numeric, string, boolean or date. If it begins
 * with <code>&#39;=&#39;</code> it is interpreted as a formula.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setValue(100);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setValue
 * 
 * @param {Object} value - The value for the range.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of values (must match dimensions of this range).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var values = [
 *   [ &quot;2.000&quot;, &quot;1,000,000&quot;, &quot;$2.99&quot; ]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setValues(values);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setValues
 * 
 * @param {Object[][]} values - A two-dimensional array of values.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setVerticalAlignment(&quot;middle&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setVerticalAlignment
 * 
 * @param {String} alignment - The alignment, either <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code> or <code>&#39;bottom&#39;</code>; a
 *     <code>null</code> value resets the alignment.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of vertical alignments (must match dimensions of this range).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var alignments = [
 *   [ &quot;top&quot;, &quot;middle&quot;, &quot;bottom&quot; ]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setVerticalAlignments(alignments);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setVerticalAlignments
 * 
 * @param {Object[][]} alignments - A two-dimensional array of alignments, either <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code>
 *     or <code>&#39;bottom&#39;</code>; a <code>null</code> value resets the alignment.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets whether or not to stack the text for the cells in the range. If the text is stacked
 * vertically, the degree text rotation setting is ignored.
 * 
 * <pre class="prettyprint"><code>
 * // Sets all cell&#39;s in range B2:D4 to have vertically stacked text.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * range.setVerticalText(true);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setVerticalText
 * 
 * @param {Boolean} isVertical - Whether or not to stack the text.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Set the cell wrap of the given range.
 * 
 * <p>Cells with wrap enabled (the default) resize to display their full content. Cells with wrap
 * disabled display as much as possible in the cell without resizing or running to multiple lines.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var cell = sheet.getRange(&quot;B2&quot;);
 * cell.setWrap(true);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setWrap
 * 
 * @param {Boolean} isWrapEnabled - Whether to wrap text or not.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of wrap strategies.
 * 
 * <pre class="prettyprint"><code>
 * // Copies all of the wrap strategies from range A1:B2 over to range C5:D6.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range1 = sheet.getRange(&quot;A1:B2&quot;);
 * var range2 = sheet.getRange(&quot;C5:D6&quot;);
 * 
 * range2.setWrapStrategies(range1.getWrapStrategies());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setWrapStrategies
 * 
 * @param {SpreadsheetApp.WrapStrategy[][]} strategies - The desired wrapping strategies.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets the text wrapping strategy for the cells in the range.
 * 
 * <pre class="prettyprint"><code>
 * // Sets all cells in range B2:D4 to use the clip wrap strategy.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;B2:D4&quot;);
 * 
 * range.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setWrapStrategy
 * 
 * @param {SpreadsheetApp.WrapStrategy} strategy - The desired wrapping strategy.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sets a rectangular grid of word wrap policies (must match dimensions of this range). Cells with
 * wrap enabled (the default) resize to display their full content. Cells with wrap disabled
 * display as much as possible in the cell without resizing or running to multiple lines.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The size of the two-dimensional array must match the size of the range.
 * var wraps = [
 *   [ true, true, false ]
 * ];
 * 
 * var range = sheet.getRange(&quot;B2:D2&quot;);
 * range.setWraps(wraps);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#setWraps
 * 
 * @param {Object[][]} isWrapEnabled - A two-dimensional array of wrap variables that determine whether to wrap
 *     text in a cell or not.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Changes the column grouping depth of the range by the specified amount.
 * 
 * <p>This has the effect of creating, modifying, or deleting groups that intersect with the
 * range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
 * destroyed and/or modified.
 * 
 * <p>This has no effect when decreasing the group depth below zero or above eight.
 * 
 * <p>If the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getColumnGroupControlPosition()'>column group control position</a></code> is
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html#BEFORE'>BEFORE</a></code>, this throws an error when attempting to shift
 * the depth of the first row.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getActiveRange();
 * 
 * // The column grouping depth is increased by 1.
 * range.shiftColumnGroupDepth(1);
 * 
 * // The column grouping depth is decreased by 1.
 * range.shiftColumnGroupDepth(-1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#shiftColumnGroupDepth
 * 
 * @param {IntegerNum} delta - The amount by which to change the column group depth of this range.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Changes the row grouping depth of the range by the specified amount.
 * 
 * <p>This has the effect of creating, modifying, or deleting groups that intersect with the
 * range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
 * destroyed and/or modified.
 * 
 * <p>This has no effect when decreasing the group depth below zero or above eight.
 * 
 * <p>If the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getRowGroupControlPosition()'>row group control position</a></code> is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html#BEFORE'>BEFORE</a></code>, this throws an error when attempting to shift the
 * depth of the first row.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getActiveRange();
 * 
 * // The row grouping depth is increased by 1.
 * range.shiftRowGroupDepth(1);
 * 
 * // The row grouping depth is decreased by 1.
 * range.shiftRowGroupDepth(-1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#shiftRowGroupDepth
 * 
 * @param {IntegerNum} delta - The amount by which to change the row group depth of this range.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Sorts the cells in the given range, by column and order specified.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(&quot;A1:C7&quot;);
 * 
 * // Sorts by the values in the first column (A)
 * range.sort(1);
 * 
 * // Sorts by the values in the second column (B)
 * range.sort(2);
 * 
 * // Sorts descending by column B
 * range.sort({column: 2, ascending: false});
 * 
 * // Sorts descending by column B, then ascending by column A
 * // Note the use of an array
 * range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}]);
 * 
 * // For rows that are sorted in ascending order, the &quot;ascending&quot; parameter is
 * // optional, and just an integer with the column can be used instead. Note that
 * // in general, keeping the sort specification consistent results in more readable
 * // code. You can express the earlier sort as:
 * range.sort([{column: 2, ascending: false}, 1]);
 * 
 * // Alternatively, if you want all columns to be in ascending order, you can use
 * // the following (this makes column 2 ascending)
 * range.sort([2, 1]);
 * // ... which is equivalent to
 * range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#sort
 * 
 * @param {Object} sortSpecObj - The columns to sort by.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Splits a column of text into multiple columns based on an auto-detected delimiter.
 * 
 * <pre class="prettyprint"><code>
 * // A1:A3 has the following values:
 * //           A                  B                 C
 * // 1 |one,one,one      |                 |                 |
 * // 2 |two,two,two      |                 |                 |
 * // 3 |three,three,three|                 |                 |
 * 
 * var range = SpreadsheetApp.getActiveSheet().getRange(&quot;A1:A3&quot;);
 * range.splitTextToColumns();
 * 
 * // Result after spliting the text to columns:
 * //           A                  B                 C
 * // 1 |one              |one              |one              |
 * // 2 |two              |two              |two              |
 * // 3 |three            |three            |three            |
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#splitTextToColumns
 * 
 * @return void
 */


/**
 * Splits a column of text into multiple columns based on the specified delimiter.
 * 
 * <pre class="prettyprint"><code>
 * // A1:A3 has the following values:
 * //           A                  B                 C
 * // 1 |one;one;one      |                 |                 |
 * // 2 |two;two;two      |                 |                 |
 * // 3 |three;three;three|                 |                 |
 * 
 * var range = SpreadsheetApp.getActiveSheet().getRange(&quot;A1:A3&quot;);
 * range.splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.SEMICOLON);
 * 
 * // Result after spliting the text to columns:
 * //           A                  B                 C
 * // 1 |one              |one              |one              |
 * // 2 |two              |two              |two              |
 * // 3 |three            |three            |three            |
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#splitTextToColumns
 * 
 * @param {SpreadsheetApp.TextToColumnsDelimiter} delimiter - The preset delimiter to split on.
 * 
 * @return void
 */


/**
 * Splits a column of text into multiple columns using the specified string as a custom delimiter.
 * 
 * <pre class="prettyprint"><code>
 * // A1:A3 has the following values:
 * //           A                  B                 C
 * // 1 |one#one#one      |                 |                 |
 * // 2 |two#two#two      |                 |                 |
 * // 3 |three#three#three|                 |                 |
 * 
 * var range = SpreadsheetApp.getActiveSheet().getRange(&quot;A1:A3&quot;);
 * range.splitTextToColumns(&#39;#&#39;);
 * 
 * // Result after spliting the text to columns:
 * //           A                  B                 C
 * // 1 |one              |one              |one              |
 * // 2 |two              |two              |two              |
 * // 3 |three            |three            |three            |
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#splitTextToColumns
 * 
 * @param {String} delimiter - The custom delimiter to split on.
 * 
 * @return void
 */


/**
 * Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
 * which currently do not contain either the checked or unchecked value configured.
 * 
 * <pre class="prettyprint"><code>
 * // Changes the state of cells which currently contain either the checked or unchecked value
 * // configured in the range A1:B10 to &#39;checked&#39;.
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
 * range.check();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#check
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Creates a text finder for the range, which can find and replace text in this range.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * var range = sheet.getActiveRange();
 * 
 * // Creates  a text finder for the range.
 * var textFinder = range.createTextFinder(&#39;dog&#39;);
 * 
 * // Returns the first occurrence of &#39;dog&#39;.
 * var firstOccurrence = textFinder.findNext();
 * 
 * // Replaces the last found occurrence of &#39;dog&#39; with &#39;cat&#39; and returns the number
 * // of occurrences replaced.
 * var numOccurrencesReplaced = findOccurrence.replaceWith(&#39;cat&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#createTextFinder
 * 
 * @param {String} findText - The text to search for.
 * 
 * @return {SpreadsheetApp.TextFinder} The <code>TextFinder</code> for the range
 */


/**
 * Returns a copy of the range expanded <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#UP'>Direction.UP</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#DOWN'>Direction.DOWN</a></code> if the
 * specified dimension is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/dimension.html#ROWS'>Dimension.ROWS</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#NEXT'>Direction.NEXT</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#PREVIOUS'>Direction.PREVIOUS</a></code> if the dimension is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/dimension.html#COLUMNS'>Dimension.COLUMNS</a></code>. The expansion of the range
 * is based on detecting data next to the range that is organized like a table. The expanded range
 * covers all adjacent cells with data in them along the specified dimension including the table
 * boundaries. If the original range is surrounded by empty cells along the specified dimension,
 * the range itself is returned. This method is similar to selecting the range and typing <code>
 * Ctrl+Space</code> for columns or <code>Shift+Space</code> for rows in the editor.
 * 
 * <pre class="prettyprint"><code>
 * // Assume the active spreadsheet is blank.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * sheet.getRange(&quot;C2&quot;).setValue(100);
 * sheet.getRange(&quot;B3&quot;).setValue(100);
 * sheet.getRange(&quot;D3&quot;).setValue(100);
 * sheet.getRange(&quot;C4&quot;).setValue(100);
 * // Logs &quot;C2:C4&quot;
 * Logger.log(sheet.getRange(&quot;C3&quot;).getDataRegion(SpreadsheetApp.Dimension.ROWS).getA1Notation());
 * // Logs &quot;B3:D3&quot;
 * Logger.log(
 *     sheet.getRange(&quot;C3&quot;).getDataRegion(SpreadsheetApp.Dimension.COLUMNS).getA1Notation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#getDataRegion
 * 
 * @param {SpreadsheetApp.Dimension} dimension - The dimension along which to expand the range.
 * 
 * @return {SpreadsheetApp.Range} The range's data region or a range covering each column or each row spanned by the
 *     original range.
 */


/**
 * Inserts checkboxes into each cell in the range, configured with a custom value for checked and
 * the empty string for unchecked. Sets the value of each cell in the range to the empty string.
 * 
 * <pre class="prettyprint"><code>
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
 * 
 * // Inserts checkboxes into each cell in the range A1:B10 configured with &#39;yes&#39; for checked
 * // and the empty string for unchecked. Also, sets the value of each cell in the range A1:B10 to
 * //  the empty string.
 * range.insertCheckboxes(&#39;yes&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#insertCheckboxes
 * 
 * @param {Object} checkedValue - The checked value for the checkbox data validation.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Inserts checkboxes into each cell in the range, configured with custom values for the checked
 * and unchecked states. Sets the value of each cell in the range to the custom unchecked value.
 * 
 * <pre class="prettyprint"><code>
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
 * 
 * // Inserts checkboxes into each cell in the range A1:B10 configured with &#39;yes&#39; for checked
 * // and &#39;no&#39; for unchecked. Also, sets the value of each cell in the range A1:B10 to &#39;no&#39;.
 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#insertCheckboxes
 * 
 * @param {Object} checkedValue - The checked value for the checkbox data validation.
 * @param {Object} uncheckedValue - The unchecked value for the checkbox data validation.
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Returns whether all cells in the range have their checkbox state as 'checked'. Returns <code>null</code> if some cells are checked and the rest unchecked, or if some cells do not have checkbox
 * data validation.
 * 
 * <pre class="prettyprint"><code>
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:A3&#39;);
 * 
 * // Inserts checkboxes and sets each cell value to &#39;no&#39; in the range A1:A3.
 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
 * 
 * var range1 = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
 * range1.setValue(&#39;yes&#39;);
 * // Sets the value of isRange1Checked as true as it contains the checked value.
 * var isRange1Checked = range1.isChecked();
 * 
 * var range2 = SpreadsheetApp.getActive().getRange(&#39;A2&#39;);
 * range2.setValue(&#39;no&#39;);
 * // Sets the value of isRange2Checked as false as it contains the unchecked value.
 * var isRange2Checked = range2.isChecked();
 * 
 * var range3 = SpreadsheetApp.getActive().getRange(&#39;A3&#39;);
 * range3.setValue(&#39;random&#39;);
 * // Sets the value of isRange3Checked as null, as it contains an invalid checkbox value.
 * var isRange3Checked = range3.isChecked();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#isChecked
 * 
 * @return {Boolean} <code>true</code>, if all cells in the range are checked, <code>false</code> if all cells in the
 *     range are unchecked, or <code>null</code> if any of the cells are unchecked or do not have
 *     checkbox data validation.
 */


/**
 * Removes all checkboxes from the range. Clears the data validation of each cell, and
 * additionally clears its value if the cell contains either the checked or unchecked value.
 * 
 * <pre class="prettyprint"><code>
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
 * 
 * // Inserts checkboxes and sets each cell value to &#39;no&#39; in the range A1:B10.
 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
 * 
 * var range1 = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
 * range1.setValue(&#39;yes&#39;);
 * // Removes the checkbox data validation in cell A1 and clears its value.
 * range1.removeCheckboxes();
 * 
 * var range2 = SpreadsheetApp.getActive().getRange(&#39;A2&#39;);
 * range2.setValue(&#39;random&#39;);
 * // Removes the checkbox data validation in cell A2 but does not clear its value.
 * range2.removeCheckboxes();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#removeCheckboxes
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */


/**
 * Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
 * which currently do not contain either the checked or unchecked value configured.
 * 
 * <pre class="prettyprint"><code>
 * // Changes the state of cells which currently contain either the checked or unchecked value
 * // configured in the range A1:B10 to &#39;unchecked&#39;.
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
 * range.uncheck();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Range#uncheck
 * 
 * @return {SpreadsheetApp.Range} This range, for chaining.
 */



/**
 * @class SpreadsheetApp.RangeList
 */

/**
 * Selects the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> instances. The last range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>.
 * 
 * <p><b>Note:</b> This provides a way to multi-select a number of ranges.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * rangeList.activate();
 * 
 * var selection = sheet.getSelection();
 * // Current cell: B2
 * var currentCell = selection.getCurrentCell();
 * // Active range: B2:C4
 * var activeRange = selection.getActiveRange();
 * // Active range list: [D4, B2:C4]
 * var activeRangeList = selection.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#activate
 * 
 * @return {SpreadsheetApp.RangeList} the list of active ranges for chaining
 */


/**
 * Break all horizontally- or vertically-merged cells contained within the range list into
 * individual cells again.
 * 
 * <p>Calling this function on a range list is equivalent to selecting a set of ranges and
 * selecting the <b>Format > Merge > Unmerge</b> Sheets menu item.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.breakApart();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#breakApart
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Clears the range of contents, formats, and data validation rules for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in
 * the range list.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.clear();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#clear
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Clears the range of contents, format, data validation rules, and comments, as specified with
 * the given options. By default all data is cleared.
 * 
 * <pre class="prettyprint"><code>
 * // The code below clears the contents of the following ranges A:A and C:C in the active sheet,
 * // but preserves the format, data validation rules, and comments.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.clear({contentsOnly: true});
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#clear
 * 
 * @param {Object} options - A JavaScript object that specifies advanced parameters, as listed below.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Clears the content of each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list, leaving the formatting intact.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.clearContent();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#clearContent
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Clears the data validation rules for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <pre class="prettyprint">
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList(['A:A', 'C:C']);
 * rangeList.clearDataValidations();
 * </pre>
 * 
 * @function SpreadsheetApp.RangeList#clearDataValidations
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Clears text formatting for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <p>This clears text formatting for each range, but does not reset any number formatting rules.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.clearFormat();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#clearFormat
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Clears the note for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.clearNote();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#clearNote
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Returns a list of one or more <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> instances in the same sheet.
 * 
 * @function SpreadsheetApp.RangeList#getRanges
 * 
 * @return {SpreadsheetApp.Range[]} the list of ranges
 */


/**
 * Sets the background color for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. Color is represented in
 * in CSS notation; for example, <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setBackground(&#39;red&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setBackground
 * 
 * @param {String} color - The background color code in CSS notation such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>; a <code>null</code> value resets the color.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the background to the given RGB color. This is a convenience wrapper around a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range-list.html#setBackground(String)'>setBackground(color)</a></code> call.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * // Sets the background to red for each range in the range list.
 * rangeList.setBackgroundRGB(255, 0, 0);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setBackgroundRGB
 * 
 * @param {IntegerNum} red - The red value in RGB notation.
 * @param {IntegerNum} green - The green value in RGB notation.
 * @param {IntegerNum} blue - The blue value in RGB notation.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the border property for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The valid values are
 * <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change).
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A2:B4&#39;, &#39;C1:D4&#39;]);
 * // Sets borders on the top and bottom of the ranges A2:B4 and C1:D4, but leaves the left and
 * // right unchanged.
 * rangeList.setBorder(true, null, true, null, false, false);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setBorder
 * 
 * @param {Boolean} top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the border property with color and/or style for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * Valid values are <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change). Color is
 * represented in in CSS notation; for example, <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A2:B4&#39;, &#39;C1:D4&#39;]);
 * // Sets borders on the top and bottom, but leaves the left and right unchanged of the ranges
 * // A2:B4 and C1:D4. Also sets the color to &#39;red&#39;, and the border to &#39;DASHED&#39;.
 * rangeList.setBorder(
 *     true, null, true, null, false, false, &#39;red&#39;, SpreadsheetApp.BorderStyle.DASHED);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setBorder
 * 
 * @param {Boolean} top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
 * @param {Boolean} horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
 * @param {String} color - The border color in CSS notation like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>, <code>null</code> for default color (black).
 * @param {SpreadsheetApp.BorderStyle} style - The style for the borders, <code>null</code> for default style (solid).
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the font color for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. Color is represented in in CSS
 * notation; for example, <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setFontColor(&#39;red&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFontColor
 * 
 * @param {String} color - The font color in CSS notation such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>; a
 *     <code>null</code> value resets the color.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the font family for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The font family is described
 * by a string identifier such as <code>Arial</code> or <code>Roboto</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setFontFamily(&#39;Roboto&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFontFamily
 * 
 * @param {String} fontFamily - The font family to set; a <code>null</code> value resets the font family.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the font line style for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The line styles options
 * are <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setFontLine(&#39;line-through&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFontLine
 * 
 * @param {String} fontLine - The font line style, either <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
 *     <code>&#39;none&#39;</code>; a <code>null</code> value resets the font line style.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the font size (in points) for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setFontSize(20);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFontSize
 * 
 * @param {IntegerNum} size - A font point size.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Set the font style for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The font style options are
 * <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setFontStyle(&quot;italic&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFontStyle
 * 
 * @param {String} fontStyle - The font style, either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
 *     value resets the font style.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Set the font weight for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The font weight options are
 * <code>&#39;normal&#39;</code> or <code>&#39;bold&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setFontWeight(&#39;bold&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFontWeight
 * 
 * @param {String} fontWeight - The font weight, either <code>&#39;bold&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
 *     value resets the font weight.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Updates the formula for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The given formula must be in
 * A1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A11&#39;, &#39;C11&#39;]);
 * rangeList.setFormula(&#39;=SUM(B1:B10)&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFormula
 * 
 * @param {String} formula - A string representing the formula to set.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Updates the formula for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The given formula must be in
 * R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A11&#39;, &#39;C11&#39;]);
 * // This sets the formula to be the sum of the 3 rows above B5
 * rangeList.setFormulaR1C1(&#39;=SUM(R[-3]C[0]:R[-1]C[0])&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setFormulaR1C1
 * 
 * @param {String} formula - A string formula.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Set the horizontal alignment for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The alignment options
 * are <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code>, or <code>&#39;right&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setHorizontalAlignment(&quot;center&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setHorizontalAlignment
 * 
 * @param {String} alignment - The alignment, either <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code> or <code>&#39;normal&#39;</code>; a
 *     <code>null</code> value resets the alignment.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the note text for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setNote(&#39;This is a note&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setNote
 * 
 * @param {String} note - The note text to set; a <code>null</code> value removes the note.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the number or date format for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <p>The accepted formatting patterns are described in the <a
 * href="/sheets/api/guides/formats">Sheets API date and number formatting guide</a>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
 * // Always show 3 decimal points for the specified ranges.
 * rangeList.setNumberFormat(&#39;0.000&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setNumberFormat
 * 
 * @param {String} numberFormat - A number format string.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets whether or not each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list should show hyperlinks.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
 * // Show hyperlinks for all the ranges.
 * rangeList.setShowHyperlink(true);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setShowHyperlink
 * 
 * @param {Boolean} showHyperlink - Whether or not to show the hyperlink.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the text direction for the cells in each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. If a
 * specified direction is <code>null</code>, the direction is inferred and then set.
 * 
 * <pre class="prettyprint"><code>
 * // Sets right-to-left text direction each range in the range list.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
 * rangeList.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setTextDirection
 * 
 * @param {SpreadsheetApp.TextDirection} direction - The desired text direction; if <code>null</code> the direction is inferred before
 *     setting.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the text rotation settings for the cells in each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The
 * input corresponds to the angle between the standard text orientation and the desired
 * orientation. An input of zero indicates that the text is set to the standard orientation.
 * 
 * <p>For left to right text direction, positive angles are in the counterclockwise direction,
 * whereas for right to left they are in the clockwise direction.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the cells in the ranges A1:A10 and C1:C10 to have text rotated up 45 degrees.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
 * rangeList.setTextRotation(45);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setTextRotation
 * 
 * @param {IntegerNum} degrees - The desired angle between the standard orientation and the desired orientation.
 *     For left to right text, positive angles are in the counterclockwise direction.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the value for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The value can be numeric, string,
 * boolean or date. If it begins with '=' it is interpreted as a formula.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * // Set value of 100 to each range in the range list.
 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
 * rangeList.setValue(100);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setValue
 * 
 * @param {Object} value - The value for the range.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Set the vertical alignment for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The alignment options
 * are <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code> or <code>&#39;bottom&#39;</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the vertical alignment to middle for the list of ranges.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * rangeList.setVerticalAlignment(&quot;middle&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setVerticalAlignment
 * 
 * @param {String} alignment - The alignment, either <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code> or <code>&#39;bottom&#39;</code>; a
 *     <code>null</code> value resets the alignment.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets whether or not to stack the text for the cells for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range
 * list. If the text is stacked vertically, the degree text rotation setting is ignored.
 * 
 * <pre class="prettyprint"><code>
 * // Sets all cell&#39;s in ranges D4 and B2:D4 to have vertically stacked text.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * rangeList.setVerticalText(true);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setVerticalText
 * 
 * @param {Boolean} isVertical - Whether or not to stack the text.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Set text wrapping for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. Cells with wrap enabled resize
 * to display their full content. Cells with wrap disabled display as much as possible in the cell
 * without resizing or running to multiple lines.
 * 
 * <pre class="prettyprint"><code>
 * // Enable text wrap for the list of ranges.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * rangeList.setWrap(true);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setWrap
 * 
 * @param {Boolean} isWrapEnabled - Whether to wrap text or not.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Sets the text wrapping strategy for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the list of ranges to use the clip wrap strategy.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * rangeList.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#setWrapStrategy
 * 
 * @param {SpreadsheetApp.WrapStrategy} strategy - The desired wrapping strategy.
 * 
 * @return {SpreadsheetApp.RangeList} this range list, for chaining
 */


/**
 * Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
 * which currently do not contain either the checked or unchecked value configured.
 * 
 * <pre class="prettyprint"><code>
 * // Changes the state of cells which currently contain either the checked or unchecked value
 * // configured in the ranges D4 and E6 to &#39;checked&#39;.
 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
 * rangeList.check();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#check
 * 
 * @return {SpreadsheetApp.RangeList} this range, for chaining
 */


/**
 * Inserts checkboxes into each cell in the range, configured with a custom value for checked and
 * the empty string for unchecked. Sets the value of each cell in the range to the empty string.
 * 
 * <pre class="prettyprint"><code>
 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
 * 
 * // Inserts checkboxes into each cell in the ranges D4 and E6 configured with &#39;yes&#39; for checked
 * // and the empty string for unchecked. Also, sets the value of each cell in the ranges D4 and
 * // E6 to the empty string.
 * rangeList.insertCheckboxes(&#39;yes&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#insertCheckboxes
 * 
 * @param {Object} checkedValue - The checked value for the checkbox data validation.
 * 
 * @return {SpreadsheetApp.RangeList} this range, for chaining
 */


/**
 * Inserts checkboxes into each cell in the range, configured with custom values for the checked
 * and unchecked states. Sets the value of each cell in the range to the custom unchecked value.
 * 
 * <pre class="prettyprint"><code>
 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
 * 
 * // Inserts checkboxes into each cell in the ranges D4 and E6 configured with &#39;yes&#39; for checked
 * // and &#39;no&#39; for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to &#39;no&#39;.
 * rangeList.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#insertCheckboxes
 * 
 * @param {Object} checkedValue - The checked value for the checkbox data validation.
 * @param {Object} uncheckedValue - The unchecked value for the checkbox data validation.
 * 
 * @return {SpreadsheetApp.RangeList} this range, for chaining
 */


/**
 * Removes all checkboxes from the range. Clears the data validation of each cell, and
 * additionally clears its value if the cell contains either the checked or unchecked value.
 * 
 * <pre class="prettyprint"><code>
 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
 * 
 * // Inserts checkboxes and sets each cell value to &#39;no&#39; in the range A1:B10.
 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
 * 
 * var rangeList1 = SpreadsheetApp.getActive().getRangeList([&#39;A1&#39;, &#39;A3&#39;]);
 * rangeList1.setValue(&#39;yes&#39;);
 * // Removes the checkbox data validation in cells A1 and A3 and clears their value.
 * rangeList1.removeCheckboxes();
 * 
 * var rangeList2 = SpreadsheetApp.getActive().getRangeList([&#39;A5&#39;, &#39;A7&#39;]);
 * rangeList2.setValue(&#39;random&#39;);
 * // Removes the checkbox data validation in cells A5 and A7 but does not clear their value.
 * rangeList2.removeCheckboxes();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#removeCheckboxes
 * 
 * @return {SpreadsheetApp.RangeList} this range, for chaining
 */


/**
 * Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
 * which currently do not contain either the checked or unchecked value configured.
 * 
 * <pre class="prettyprint"><code>
 * // Changes the state of cells which currently contain either the checked or unchecked value
 * // configured in the ranges D4 and E6 to &#39;unchecked&#39;.
 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
 * rangeList.uncheck();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RangeList#uncheck
 * 
 * @return {SpreadsheetApp.RangeList} this range, for chaining
 */



/**
 * @class SpreadsheetApp.RelativeDate
 */

/**
 * Dates that fall within the past month period.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate.PAST_MONTH
 */
/**
 * Dates that fall within the past week period.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate.PAST_WEEK
 */
/**
 * Dates that fall within the past year period.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate.PAST_YEAR
 */
/**
 * Dates compared against the current date.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate.TODAY
 */
/**
 * Dates compared against the date after the current date.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate.TOMORROW
 */
/**
 * Dates compared against the date before the current date.
 * 
 * @typedef {SpreadsheetApp.RelativeDate} SpreadsheetApp.RelativeDate.YESTERDAY
 */

/**
 * @class SpreadsheetApp.RichTextValue
 */

/**
 * Returns a builder for a Rich Text value initialized with the values of this Rich Text value.
 * 
 * @function SpreadsheetApp.RichTextValue#copy
 * 
 * @return {SpreadsheetApp.RichTextValueBuilder} A builder for a Rich Text value.
 */


/**
 * Gets the end index of this value in the cell.
 * 
 * @function SpreadsheetApp.RichTextValue#getEndIndex
 * 
 * @return {IntegerNum} The end index of this value in the cell.
 */


/**
 * Returns the Rich Text string split into an array of runs, wherein each run is the longest
 * possible substring having a consistent text style.
 * 
 * @function SpreadsheetApp.RichTextValue#getRuns
 * 
 * @return {SpreadsheetApp.RichTextValue[]} An array of runs.
 */


/**
 * Gets the start index of this value in the cell.
 * 
 * @function SpreadsheetApp.RichTextValue#getStartIndex
 * 
 * @return {IntegerNum} The start index of this value in the cell.
 */


/**
 * Returns the text of this value.
 * 
 * @function SpreadsheetApp.RichTextValue#getText
 * 
 * @return {String} The text of this value.
 */


/**
 * Returns the text style of this value.
 * 
 * @function SpreadsheetApp.RichTextValue#getTextStyle
 * 
 * @return {SpreadsheetApp.TextStyle} The text style of this value.
 */


/**
 * Returns the text style of the text from <code>startOffset</code> to <code>endOffset</code>. Offsets are 0
 * based and relative to the cell's text, with the start offset being inclusive and the end offset
 * being exclusive.
 * 
 * @function SpreadsheetApp.RichTextValue#getTextStyle
 * 
 * @param {IntegerNum} startOffset - The start offset.
 * @param {IntegerNum} endOffset - The end offset.
 * 
 * @return {SpreadsheetApp.TextStyle} The text style of the given substring of this value.
 */



/**
 * @class SpreadsheetApp.RichTextValueBuilder
 */

/**
 * Creates a Rich Text value from this builder.
 * 
 * @function SpreadsheetApp.RichTextValueBuilder#build
 * 
 * @return {SpreadsheetApp.RichTextValue} A Rich Text value created from this builder.
 */


/**
 * Sets the text for this value and clears any existing text style. When creating a new Rich Text
 * value, this should be called before <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder.html#setTextStyle(Integer,Integer,TextStyle)'>setTextStyle(startOffset, endOffset, textStyle)</a></code>.
 * 
 * @function SpreadsheetApp.RichTextValueBuilder#setText
 * 
 * @param {String} text - The text for this value.
 * 
 * @return {SpreadsheetApp.RichTextValueBuilder} The builder for chaining.
 */


/**
 * Applies a text style to the given substring of this value. Offsets are 0 based and are relative
 * to the cell's text value. Does nothing if <code>textStyle</code> is <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a Rich Text value for the text &quot;HelloWorld&quot;, with &quot;Hello&quot; bolded, and &quot;World&quot;
 * // italicized.
 * var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
 * var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
 * var value = SpreadsheetApp.newRichTextValue()
 *     .setText(&quot;HelloWorld&quot;)
 *     .setTextStyle(0, 5, bold)
 *     .setTextStyle(5, 10, italic)
 *     .build();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RichTextValueBuilder#setTextStyle
 * 
 * @param {IntegerNum} startOffset - The start offset for the substring, inclusive.
 * @param {IntegerNum} endOffset - The end offset for the substring, exclusive.
 * @param {SpreadsheetApp.TextStyle} textStyle - The text style being set.
 * 
 * @return {SpreadsheetApp.RichTextValueBuilder} The builder for chaining.
 */


/**
 * Applies a text style to the entire value. Previously set text styles are only affected if they
 * are directly overwritten by values within <code>textStyle</code>. Does nothing if <code>textStyle</code>
 * is <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a Rich Text value for the text &quot;HelloWorld&quot; with &quot;Hello&quot; bolded and italicized,
 * // and &quot;World&quot; only italicized.
 * var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
 * var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
 * var value = SpreadsheetApp.newRichTextValue()
 *     .setText(&quot;HelloWorld&quot;)
 *     .setTextStyle(0, 5, bold)
 *     .setTextStyle(italic)
 *     .build();
 * </code></pre>
 * 
 * @function SpreadsheetApp.RichTextValueBuilder#setTextStyle
 * 
 * @param {SpreadsheetApp.TextStyle} textStyle - The text style being set.
 * 
 * @return {SpreadsheetApp.RichTextValueBuilder} The builder for chaining.
 */



/**
 * @class SpreadsheetApp.Selection
 */

/**
 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
 * multiple ranges are selected this method returns only the last selected range.
 * 
 * <pre class="prettyprint"><code>
 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
 * var activeRange = selection.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Selection#getActiveRange
 * 
 * @return {SpreadsheetApp.Range} the active range
 */


/**
 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no active
 * ranges.
 * 
 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>getActiveRange()</a></code> call.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * // Returns the list of active ranges.
 * var activeRangeList = sheet.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Selection#getActiveRangeList
 * 
 * @return {SpreadsheetApp.RangeList} the list of active ranges
 */


/**
 * Returns the active sheet in the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
 * var activeSheet = selection.getActiveSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Selection#getActiveSheet
 * 
 * @return {SpreadsheetApp.Sheet} the active sheet in the spreadsheet
 */


/**
 * Returns the current (highlighted) cell that is selected in one of the active ranges or <code>null</code> if there is no current cell.
 * 
 * <pre class="prettyprint"><code>
 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
 * // Returns the current highlighted cell in the one of the active ranges.
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Selection#getCurrentCell
 * 
 * @return {SpreadsheetApp.Range} the current cell
 */


/**
 * Starting from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>
 * and moving in the given direction, returns an adjusted range where the appropriate edge of the
 * range has been shifted to cover the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getNextDataCell(Direction)'>next data cell</a></code> while still
 * covering the current cell. If the active range is unbounded along the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/dimension.html'>dimension</a></code> of the direction, the original active range is returned. If there is no current cell
 * or active range, <code>null</code> is returned. This is equivalent to selecting a range in the
 * editor and hitting <code>Ctrl+Shift+[arrow key]</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Assume the active spreadsheet is blank.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Makes C3 the current cell and C3:E5 the active range.
 * sheet.getRange(&quot;C3:E5&quot;).activate();
 * // Logs &quot;C1:E3&quot;
 * Logger.log(SpreadsheetApp.getSelection().getNextDataRange(Direction.UP).getA1Notation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Selection#getNextDataRange
 * 
 * @param {SpreadsheetApp.Direction} direction - The direction in which to find the next data region edge cell.
 * 
 * @return {SpreadsheetApp.Range} the adjusted range that includes the data cell, or <code>null</code> if there is no
 *     selection
 */



/**
 * @class SpreadsheetApp.Sheet
 */

/**
 * Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.activate();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#activate
 * 
 * @return {SpreadsheetApp.Sheet} the newly active sheet
 */


/**
 * Adds developer metadata with the specified key to the sheet.
 * 
 * @function SpreadsheetApp.Sheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * 
 * @return {SpreadsheetApp.Sheet} This sheet, for chaining.
 */


/**
 * Adds developer metadata with the specified key and visibility to the sheet.
 * 
 * @function SpreadsheetApp.Sheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility of the new developer metadata.
 * 
 * @return {SpreadsheetApp.Sheet} This sheet, for chaining.
 */


/**
 * Adds developer metadata with the specified key and value to the sheet.
 * 
 * @function SpreadsheetApp.Sheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {String} value - The value for the new developer metadata.
 * 
 * @return {SpreadsheetApp.Sheet} This sheet, for chaining.
 */


/**
 * Adds developer metadata with the specified key, value, and visibility to the sheet.
 * 
 * @function SpreadsheetApp.Sheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {String} value - The value for the new developer metadata.
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility of the new developer metadata.
 * 
 * @return {SpreadsheetApp.Sheet} This sheet, for chaining.
 */


/**
 * Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user
 * asks for the last row, and then writes to that row, and an intervening mutation occurs between
 * getting the last row and writing to it.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Appends a new row with 3 columns to the bottom of the
 * // spreadsheet containing the values in the array
 * sheet.appendRow([&quot;a man&quot;, &quot;a plan&quot;, &quot;panama&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#appendRow
 * 
 * @param {Object[]} rowContents - An array of values to insert after the last row in the sheet.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the width of the given column to fit its contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.getRange(&#39;a1&#39;).setValue(&#39;Whenever it is a damp, drizzly November in my soul...&#39;);
 * 
 * // Sets the first column to a width which fits the text
 * sheet.autoResizeColumn(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#autoResizeColumn
 * 
 * @param {IntegerNum} columnPosition - The position of the given column to resize.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the width of all columns starting at the given column position to fit their contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first 15 columns to a width that fits their text.
 * sheet.autoResizeColumns(1, 15);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#autoResizeColumns
 * 
 * @param {IntegerNum} startColumn - The starting column to auto-resize.
 * @param {IntegerNum} numColumns - The number of columns to auto-resize.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets the height of all rows starting at the given row position to fit their contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first 15 rows to a height that fits their text.
 * sheet.autoResizeRows(1, 15);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#autoResizeRows
 * 
 * @param {IntegerNum} startRow - The starting row to auto-resize.
 * @param {IntegerNum} numRows - The number of rows to auto-resize.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Clears the sheet of content and formatting information.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.clear();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#clear
 * 
 * @return {SpreadsheetApp.Sheet} the cleared sheet
 */


/**
 * Clears the sheet of contents and/or format, as specified with the given advanced options.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * sheet.clear({ formatOnly: true, contentsOnly: true });
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#clear
 * 
 * @param {Object} options - A JavaScript map containing advanced options, listed below.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Removes all conditional format rules from the sheet. Equivalent to calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#setConditionalFormatRules(ConditionalFormatRule)'>setConditionalFormatRules(rules)</a></code> with an empty array as input.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * sheet.clearConditionalFormatRules();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#clearConditionalFormatRules
 * 
 * @return void
 */


/**
 * Clears the sheet of contents, while preserving formatting information.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.clearContents();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#clearContents
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Clears the sheet of formatting, while preserving contents.
 * 
 * <p>Formatting refers to how data is formatted as allowed by choices under the "Format" menu
 * (ex: bold, italics, conditional formatting) and not width or height of cells.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.clearFormats();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#clearFormats
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Clears the sheet of all notes.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.clearNotes();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#clearNotes
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Collapses all column groups on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // All column groups on the sheet are collapsed.
 * sheet.collapseAllColumnGroups();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#collapseAllColumnGroups
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Collapses all row groups on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // All row groups on the sheet are collapsed.
 * sheet.collapseAllRowGroups();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#collapseAllRowGroups
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source. The
 * copied sheet is named "Copy of [original name]".
 * 
 * <pre class="prettyprint"><code>
 * var source = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = source.getSheets()[0];
 * 
 * var destination = SpreadsheetApp.openById(&#39;ID_GOES HERE&#39;);
 * sheet.copyTo(destination);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#copyTo
 * 
 * @param {SpreadsheetApp.Spreadsheet} spreadsheet - The spreadsheet to copy this sheet to, which can be the same spreadsheet as
 *     the source.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet, for chaining
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html'>DeveloperMetadataFinder</a></code> for finding developer metadata within the scope of
 * this sheet. Metadata is in the scope of a particular sheet if it is either associated with the
 * sheet itself, or associated with a row, column, or range on that sheet.
 * 
 * @function SpreadsheetApp.Sheet#createDeveloperMetadataFinder
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} A developer metadata finder to search for metadata in the scope of this sheet.
 */


/**
 * Deletes the column at the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Columns start at &quot;1&quot; - this deletes the first column
 * sheet.deleteColumn(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#deleteColumn
 * 
 * @param {IntegerNum} columnPosition - The position of the column, starting at 1 for the first column.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Deletes a number of columns starting at the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Columns start at &quot;1&quot; - this deletes the first two columns
 * sheet.deleteColumns(1, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#deleteColumns
 * 
 * @param {IntegerNum} columnPosition - The position of the first column to delete.
 * @param {IntegerNum} howMany - The number of columns to delete.
 * 
 * @return void
 */


/**
 * Deletes the row at the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Rows start at &quot;1&quot; - this deletes the first row
 * sheet.deleteRow(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#deleteRow
 * 
 * @param {IntegerNum} rowPosition - The position of the row, starting at 1 for the first row.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Deletes a number of rows starting at the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Rows start at &quot;1&quot; - this deletes the first two rows
 * sheet.deleteRows(1, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#deleteRows
 * 
 * @param {IntegerNum} rowPosition - The position of the first row to delete.
 * @param {IntegerNum} howMany - The number of rows to delete.
 * 
 * @return void
 */


/**
 * Expands all column groups on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // All column groups on the sheet are expanded.
 * sheet.expandAllColumnGroups();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#expandAllColumnGroups
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Expands all row groups on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // All row groups on the sheet are expanded.
 * sheet.expandAllRowGroups();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#expandAllRowGroups
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Expands all column groups up to the given depth, and collapses all others.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // All column groups of depth 2 and lower are expanded, and groups with depth
 * // 3 and higher are collapsed.
 * sheet.expandColumnGroupsUpToDepth(2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#expandColumnGroupsUpToDepth
 * 
 * @param {IntegerNum} groupDepth - The group depth up to which to expand the column groups.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Expands all row groups up to the given depth, and collapses all others.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // All row groups of depth 2 and lower are expanded, and groups with depth
 * // 3 and higher are collapsed.
 * sheet.expandRowGroupsUpToDepth(2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#expandRowGroupsUpToDepth
 * 
 * @param {IntegerNum} groupDepth - The group depth up to which to expand the row groups.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Returns the active cell in this sheet.
 * 
 * <p><b>Note:</b> It's preferrable to use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()'>getCurrentCell()</a></code>, which the returns the current
 * highlighted cell.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Returns the active cell
 * var cell = sheet.getActiveCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getActiveCell
 * 
 * @return {SpreadsheetApp.Range} the current active cell
 */


/**
 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
 * multiple ranges are selected this method returns only the last selected range.
 * 
 * <p>The term "active range" refers to the range that a user has selected in the active sheet,
 * but in a custom function it refers to the cell being actively recalculated.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var activeRange = sheet.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getActiveRange
 * 
 * @return {SpreadsheetApp.Range} the active range
 */


/**
 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no active
 * ranges.
 * 
 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()'>getActiveRange()</a></code> call.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * // Returns the list of active ranges.
 * var activeRangeList = sheet.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getActiveRangeList
 * 
 * @return {SpreadsheetApp.RangeList} the list of active ranges
 */


/**
 * Returns all the bandings in this sheet.
 * 
 * @function SpreadsheetApp.Sheet#getBandings
 * 
 * @return {SpreadsheetApp.Banding[]} all the bandings in this sheet
 */


/**
 * Returns an array of charts on this sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var charts = sheet.getCharts();
 * 
 * for (var i in charts) {
 *   var chart = charts[i];
 *   // Do something with the chart
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getCharts
 * 
 * @return {SpreadsheetApp.EmbeddedChart[]} an array of charts
 */


/**
 * Returns the column group at the given index and group depth.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // Returns the group whose control index is at column 2 and has a depth of 1, or
 * // null if the group doesn’t exist.
 * var columnGroup = sheet.getColumnGroup(2, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getColumnGroup
 * 
 * @param {IntegerNum} columnIndex - The column index of the group control toggle or an index within the group.
 * @param {IntegerNum} groupDepth - The depth of the group.
 * 
 * @return {SpreadsheetApp.Group} the column group at the control index and depth, or <code>null</code> if the group doesn’t
 *     exist
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html'>GroupControlTogglePosition</a></code> for all column groups on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // GroupControlTogglePosition.AFTER if the column grouping control toggle is shown after the
 * // group.
 * var columnGroupControlPosition = sheet.getColumnGroupControlPosition();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getColumnGroupControlPosition
 * 
 * @return {SpreadsheetApp.GroupControlTogglePosition} <code>true</code> if the column grouping control toggle is shown after the group on this
 *     sheet and <code>false</code> otherwise
 */


/**
 * Returns the group depth of the column at the given index.
 * 
 * <p>The group depth indicates how many groups overlap with the column. This can range between
 * zero and eight.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // 1 if there is a group over columns 1 through 3
 * var groupDepth = sheet.getColumnGroupDepth(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getColumnGroupDepth
 * 
 * @param {IntegerNum} columnIndex - The index of the column.
 * 
 * @return {IntegerNum} the group depth of the column at the given index
 */


/**
 * Gets the width in pixels of the given column.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Columns start at 1
 * Logger.log(sheet.getColumnWidth(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getColumnWidth
 * 
 * @param {IntegerNum} columnPosition - The position of the column to examine.
 * 
 * @return {IntegerNum} column width in pixels
 */


/**
 * Get all conditional format rules in this sheet.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the conditional format rules in a sheet.
 * var rules = SpreadsheetApp.getActiveSheet().getConditionalFormatRules();
 * for (var i = 0; i &lt; rules.length; i++) {
 *   var rule = rules[i];
 *   Logger.log(rule);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getConditionalFormatRules
 * 
 * @return {SpreadsheetApp.ConditionalFormatRule[]} an array of all rules in the sheet.
 */


/**
 * Returns the current cell in the active sheet or <code>null</code> if there is no current cell. The
 * current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
 * border. There is never more than one current cell. When a user selects one or more cell ranges,
 * one of the cells in the selection is the current cell.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * // Returns the current highlighted cell in the one of the active ranges.
 * var currentCell = sheet.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getCurrentCell
 * 
 * @return {SpreadsheetApp.Range} the current cell
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> corresponding to the dimensions in which data is present.
 * 
 * <p>This is functionally equivalent to creating a Range bounded by A1 and
 * (Range.getLastColumn(), Range.getLastRow()).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This represents ALL the data
 * var range = sheet.getDataRange();
 * var values = range.getValues();
 * 
 * // This logs the spreadsheet in CSV format with a trailing comma
 * for (var i = 0; i &lt; values.length; i++) {
 *   var row = &quot;&quot;;
 *   for (var j = 0; j &lt; values[i].length; j++) {
 *     if (values[i][j]) {
 *       row = row + values[i][j];
 *     }
 *     row = row + &quot;,&quot;;
 *   }
 *   Logger.log(row);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getDataRange
 * 
 * @return {SpreadsheetApp.Range} a range consisting of all the data in the spreadsheet
 */


/**
 * Gets all the data source tables.
 * 
 * @function SpreadsheetApp.Sheet#getDataSourceTables
 * 
 * @return {SpreadsheetApp.DataSourceTable[]} A list of data source tables.
 */


/**
 * Get all developer metadata associated with this sheet.
 * 
 * @function SpreadsheetApp.Sheet#getDeveloperMetadata
 * 
 * @return {SpreadsheetApp.DeveloperMetadata[]} The developer metadata associated with this sheet.
 */


/**
 * Returns the filter in this sheet, or <code>null</code> if there is no filter.
 * 
 * @function SpreadsheetApp.Sheet#getFilter
 * 
 * @return {SpreadsheetApp.Filter} the filter
 */


/**
 * Returns the URL for the form that sends its responses to this sheet, or <code>null</code> if this
 * sheet has no associated form.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var url = sheet.getFormUrl();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getFormUrl
 * 
 * @return {String} the URL for the form that places its responses in this sheet, or <code>null</code> if this
 *     sheet doesn't have an associated form.
 */


/**
 * Returns the number of frozen columns.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(&quot;Number of frozen columns: %s&quot;, sheet.getFrozenColumns());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getFrozenColumns
 * 
 * @return {IntegerNum} the number of frozen columns
 */


/**
 * Returns the number of frozen rows.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(&quot;Number of frozen rows: %s&quot;, sheet.getFrozenRows());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getFrozenRows
 * 
 * @return {IntegerNum} the number of frozen rows
 */


/**
 * Returns all over-the-grid images on the sheet.
 * 
 * @function SpreadsheetApp.Sheet#getImages
 * 
 * @return {SpreadsheetApp.OverGridImage[]} An array of over-the-grid images.
 */


/**
 * Gets the position of the sheet in its parent spreadsheet. Starts at 1.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * // Note that the JavaScript index is 0, but this logs 1
 * var sheet = ss.getSheets()[0];
 * // ... because spreadsheets are 1-indexed
 * Logger.log(sheet.getIndex());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getIndex
 * 
 * @return {IntegerNum} the position of the sheet in its parent spreadsheet
 */


/**
 * Returns the position of the last column that has content.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This logs the value in the very last cell of this sheet
 * var lastRow = sheet.getLastRow();
 * var lastColumn = sheet.getLastColumn();
 * var lastCell = sheet.getRange(lastRow, lastColumn);
 * Logger.log(lastCell.getValue());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getLastColumn
 * 
 * @return {IntegerNum} the last column of the sheet that contains content
 */


/**
 * Returns the position of the last row that has content.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This logs the value in the very last cell of this sheet
 * var lastRow = sheet.getLastRow();
 * var lastColumn = sheet.getLastColumn();
 * var lastCell = sheet.getRange(lastRow, lastColumn);
 * Logger.log(lastCell.getValue());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getLastRow
 * 
 * @return {IntegerNum} the last row of the sheet that contains content
 */


/**
 * Returns the current number of columns in the sheet, regardless of content.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * Logger.log(first.getMaxColumns());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getMaxColumns
 * 
 * @return {IntegerNum} the maximum width of the sheet
 */


/**
 * Returns the current number of rows in the sheet, regardless of content.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * Logger.log(first.getMaxRows());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getMaxRows
 * 
 * @return {IntegerNum} the maximum height of the sheet
 */


/**
 * Returns the name of the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * Logger.log(sheet.getName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getName
 * 
 * @return {String} the name of the sheet
 */


/**
 * Gets all the named ranges in this sheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the name of the first named range.
 * var namedRanges = SpreadsheetApp.getActiveSheet().getNamedRanges();
 * if (namedRanges.length &gt; 1) {
 *   Logger.log(namedRanges[0].getName());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getNamedRanges
 * 
 * @return {SpreadsheetApp.NamedRange[]} an array of all the named ranges in the sheet
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> that contains this sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // parent is identical to ss
 * var parent = sheet.getParent();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getParent
 * 
 * @return {SpreadsheetApp.Spreadsheet} the parent spreadsheet
 */


/**
 * Returns all the pivot tables on this sheet.
 * 
 * @function SpreadsheetApp.Sheet#getPivotTables
 * 
 * @return {SpreadsheetApp.PivotTable[]} the pivot tables on this sheet.
 */


/**
 * Gets an array of objects representing all protected ranges in the sheet, or a single-element
 * array representing the protection on the sheet itself.
 * 
 * <pre class="prettyprint"><code>
 * // Remove all range protections in the spreadsheet that the user has permission to edit.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 * for (var i = 0; i &lt; protections.length; i++) {
 *   var protection = protections[i];
 *   if (protection.canEdit()) {
 *     protection.remove();
 *   }
 * }
 * </code></pre>
 * 
 * <pre class="prettyprint"><code>
 * // Remove sheet protection from the active sheet, if the user has permission to edit it.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
 * if (protection &amp;&amp; protection.canEdit()) {
 *   protection.remove();
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getProtections
 * 
 * @param {SpreadsheetApp.ProtectionType} type - The type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
 *     <code>SpreadsheetApp.ProtectionType.SHEET</code>.
 * 
 * @return {SpreadsheetApp.Protection[]} an array of objects representing all protected ranges in the sheet, or a single-element
 *     array representing the protection on the sheet itself
 */


/**
 * Returns the range with the top left cell at the given coordinates.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Passing only two arguments returns a &quot;range&quot; with a single cell.
 * var range = sheet.getRange(1, 1);
 * var values = range.getValues();
 * Logger.log(values[0][0]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRange
 * 
 * @param {IntegerNum} row - The row index of the cell to return; row indexing starts with 1.
 * @param {IntegerNum} column - The column index of the cell to return; column indexing starts with 1.
 * 
 * @return {SpreadsheetApp.Range} A range containing only this cell.
 */


/**
 * Returns the range with the top left cell at the given coordinates, and with the given number of
 * rows.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // When the &quot;numRows&quot; argument is used, only a single column of data is returned.
 * var range = sheet.getRange(1, 1, 3);
 * var values = range.getValues();
 * 
 * // Prints 3 values from the first column, starting from row 1.
 * for (var row in values) {
 *   for (var col in values[row]) {
 *     Logger.log(values[row][col]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRange
 * 
 * @param {IntegerNum} row - The starting row index of the range; row indexing starts with 1.
 * @param {IntegerNum} column - The column index of the range; column indexing starts with 1.
 * @param {IntegerNum} numRows - The number of rows to return.
 * 
 * @return {SpreadsheetApp.Range} A range containing a single column of data with the number of rows specified.
 */


/**
 * Returns the range with the top left cell at the given coordinates with the given number of rows
 * and columns.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * var range = sheet.getRange(1, 1, 3, 3);
 * var values = range.getValues();
 * 
 * // Print values from a 3x3 box.
 * for (var row in values) {
 *   for (var col in values[row]) {
 *     Logger.log(values[row][col]);
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRange
 * 
 * @param {IntegerNum} row - The starting row index of the range; row indexing starts with 1.
 * @param {IntegerNum} column - The starting column index of the range; column indexing starts with 1.
 * @param {IntegerNum} numRows - The number of rows to return.
 * @param {IntegerNum} numColumns - The number of columns to return.
 * 
 * @return {SpreadsheetApp.Range} A range corresponding to the area specified.
 */


/**
 * Returns the range as specified in A1 notation or R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * // Get a range A1:D4 on sheet titled &quot;Invoices&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var range = ss.getRange(&quot;Invoices!A1:D4&quot;);
 * 
 * // Get cell A1 on the first sheet
 * var sheet = ss.getSheets()[0];
 * var cell = sheet.getRange(&quot;A1&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRange
 * 
 * @param {String} a1Notation - The range to return, as specified in A1 notation or R1C1 notation.
 * 
 * @return {SpreadsheetApp.Range} the range at the location designated
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range-list.html'>RangeList</a></code> collection representing the ranges in the same sheet specified
 * by a non-empty list of A1 notations or R1C1 notations.
 * 
 * <pre class="prettyprint"><code>
 * // Get a list of ranges A1:D4, F1:H4.
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var rangeList  = sheet.getRangeList([&#39;A1:D4&#39;, &#39;F1:H4&#39;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRangeList
 * 
 * @param {String[]} a1Notations - The list of ranges to return, as specified in A1 notation or R1C1 notation.
 * 
 * @return {SpreadsheetApp.RangeList} the range list at the location designated
 */


/**
 * Returns the row group at the given index and group depth.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // Returns the group whose control index is at row 2 and has a depth of 1, or
 * // null if the group doesn’t exist.
 * var rowGroup = sheet.getRowGroup(2, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRowGroup
 * 
 * @param {IntegerNum} rowIndex - The row index of the group control toggle or an index within the group.
 * @param {IntegerNum} groupDepth - The depth of the group.
 * 
 * @return {SpreadsheetApp.Group} the row group at the control index and depth, or <code>null</code> if the group doesn’t
 *     exist
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html'>GroupControlTogglePosition</a></code> for all row groups on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // GroupControlTogglePosition.AFTER if the row grouping control toggle is shown after the
 * // group.
 * var rowGroupControlPosition = sheet.getRowGroupControlPosition();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRowGroupControlPosition
 * 
 * @return {SpreadsheetApp.GroupControlTogglePosition} <code>true</code> if the row grouping control toggle is shown after the group on this sheet
 *     and <code>false</code> otherwise
 */


/**
 * Returns the group depth of the row at the given index.
 * 
 * <p>The group depth indicates how many groups overlap with the row. This can range between zero
 * and eight.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // 1 if there is a group over rows 1 through 3
 * var groupDepth = sheet.getRowGroupDepth(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRowGroupDepth
 * 
 * @param {IntegerNum} rowIndex - The index of the row.
 * 
 * @return {IntegerNum} the group depth of the row at the given index
 */


/**
 * Gets the height in pixels of the given row.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Rows start at 1
 * Logger.log(sheet.getRowHeight(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getRowHeight
 * 
 * @param {IntegerNum} rowPosition - The position of the row to examine.
 * 
 * @return {IntegerNum} row height in pixels
 */


/**
 * Returns the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html'>Selection</a></code> in the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getSelection
 * 
 * @return {SpreadsheetApp.Selection} the current selection
 */


/**
 * Returns the ID of the sheet represented by this object.
 * 
 * <p>This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
 * increasing integer assigned at sheet creation time that is independent of sheet position. This
 * is useful in conjunction with methods such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)'>Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)</a></code> that take a <code>gridId</code> parameter rather than a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> instance.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(sheet.getSheetId());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getSheetId
 * 
 * @return {IntegerNum} an ID for the sheet unique to the spreadsheet
 */


/**
 * Returns the sheet name.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(sheet.getSheetName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getSheetName
 * 
 * @return {String} the name of the sheet
 */


/**
 * Returns a <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html'>PageProtection</a></s></code> instance describing the permissions for the current sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var permissions = sheet.getSheetProtection();
 * 
 * permissions.setProtected(true);
 * permissions.addUser(&quot;user@example.com&quot;);
 * 
 * // Logs the users that have access to edit this sheet. Note that this
 * // is different from access to the entire spreadsheet - getUsers()
 * // only returns users if permissions.isProtected() is set to true.
 * var users = permissions.getUsers();
 * Logger.log(users);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getSheetProtection
 * @deprecated
 * 
 * @return {SpreadsheetApp.PageProtection} an object describing sheet access permissions
 */


/**
 * Returns the rectangular grid of values for this range starting at the given coordinates. A -1
 * value given as the row or column position is equivalent to getting the very last row or column
 * that has data in the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The two samples below produce the same output
 * var values = sheet.getSheetValues(1, 1, 3, 3);
 * Logger.log(values);
 * 
 * var range = sheet.getRange(1, 1, 3, 3);
 * values = range.getValues();
 * Logger.log(values);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getSheetValues
 * 
 * @param {IntegerNum} startRow - The position of the starting row.
 * @param {IntegerNum} startColumn - The position of the starting column.
 * @param {IntegerNum} numRows - The number of rows to return values for.
 * @param {IntegerNum} numColumns - The number of columns to return values for.
 * 
 * @return {Object[][]} a two-dimensional array of values
 */


/**
 * Gets the sheet tab color, or <code>null</code> if the sheet tab has no color.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * var color = first.getTabColor();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getTabColor
 * 
 * @return {String} color code in CSS notation (such as <code>&#39;#ffffff&#39;</code>)
 */


/**
 * Returns <code>true</code> if the sheet's gridlines are hidden; otherwise returns <code>false</code>.
 * Gridlines are visible by default.
 * 
 * @function SpreadsheetApp.Sheet#hasHiddenGridlines
 * 
 * @return {Boolean} <code>true</code> if gridlines are hidden; <code>false</code> otherwise
 */


/**
 * Hides the columns in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This hides the first column
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.hideColumn(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideColumn
 * 
 * @param {SpreadsheetApp.Range} column - The column range to hide.
 * 
 * @return void
 */


/**
 * Hides the column at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Hides the first column
 * sheet.hideColumns(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideColumns
 * 
 * @param {IntegerNum} columnIndex - the index of the column to hide
 * 
 * @return void
 */


/**
 * Hides one or more consecutive columns starting at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Hides the first three columns
 * sheet.hideColumns(1, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideColumns
 * 
 * @param {IntegerNum} columnIndex - The starting index of the columns to hide.
 * @param {IntegerNum} numColumns - The number of columns to hide.
 * 
 * @return void
 */


/**
 * Hides the rows in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This hides the first row
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.hideRow(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideRow
 * 
 * @param {SpreadsheetApp.Range} row - The row range to hide.
 * 
 * @return void
 */


/**
 * Hides the row at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Hides the first row
 * sheet.hideRows(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideRows
 * 
 * @param {IntegerNum} rowIndex - The index of the row to hide.
 * 
 * @return void
 */


/**
 * Hides one or more consecutive rows starting at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Hides the first three rows
 * sheet.hideRows(1, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideRows
 * 
 * @param {IntegerNum} rowIndex - The starting index of the rows to hide.
 * @param {IntegerNum} numRows - The number of rows to hide.
 * 
 * @return void
 */


/**
 * Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the
 * only visible sheet, it throws an exception.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * sheet.hideSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#hideSheet
 * 
 * @return {SpreadsheetApp.Sheet} the current sheet
 */


/**
 * Adds a new chart to this sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This creates a simple bar chart from the first three rows
 * // of the first two columns of the spreadsheet
 * var chart = sheet.newChart()
 *     .setChartType(Charts.ChartType.BAR)
 *     .addRange(sheet.getRange(&quot;A1:B4&quot;))
 *     .setPosition(5, 5, 0, 0)
 *     .setOption(&quot;title&quot;, &quot;Dynamic Chart&quot;)
 *     .build();
 * sheet.insertChart(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} chart - the chart to insert
 * 
 * @return void
 */


/**
 * Inserts a column after the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a column after the first column position
 * sheet.insertColumnAfter(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertColumnAfter
 * 
 * @param {IntegerNum} afterPosition - The column after which the new column should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a column before the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a column in the first column position
 * sheet.insertColumnBefore(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertColumnBefore
 * 
 * @param {IntegerNum} beforePosition - The column before which the new column should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a blank column in a sheet at the specified location.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Shifts all columns by one
 * sheet.insertColumns(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertColumns
 * 
 * @param {IntegerNum} columnIndex - The index indicating where to insert a column.
 * 
 * @return void
 */


/**
 * Inserts one or more consecutive blank columns in a sheet starting at the specified location.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Shifts all columns by three
 * sheet.insertColumns(1, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertColumns
 * 
 * @param {IntegerNum} columnIndex - The index indicating where to insert a column.
 * @param {IntegerNum} numColumns - The number of columns to insert.
 * 
 * @return void
 */


/**
 * Inserts a number of columns after the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a column in the second column position
 * sheet.insertColumnsAfter(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertColumnsAfter
 * 
 * @param {IntegerNum} afterPosition - The column after which the new column should be added.
 * @param {IntegerNum} howMany - The number of columns to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a number of columns before the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts five columns before the first column
 * sheet.insertColumnsBefore(1, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertColumnsBefore
 * 
 * @param {IntegerNum} beforePosition - The column before which the new column should be added.
 * @param {IntegerNum} howMany - The number of columns to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html'>BlobSource</a></code> as an image in the document at a given row and column. The image
 * size is retrieved from the blob contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 * sheet.insertImage(blob, 1, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertImage
 * 
 * @param {BlobSource} blobSource - The blob containing the image contents, MIME type, and (optionally) name.
 * @param {IntegerNum} column - The column position.
 * @param {IntegerNum} row - The row position.
 * 
 * @return {SpreadsheetApp.OverGridImage} The inserted image.
 */


/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html'>BlobSource</a></code> as an image in the document at a given row and column, with a
 * pixel offset. The image size is retrieved from the blob contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 * sheet.insertImage(blob, 1, 1, 10, 10);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertImage
 * 
 * @param {BlobSource} blobSource - The blob containing the image contents, MIME type, and (optionally) name.
 * @param {IntegerNum} column - The column position.
 * @param {IntegerNum} row - The row position.
 * @param {IntegerNum} offsetX - The horizontal offset from cell corner in pixels.
 * @param {IntegerNum} offsetY - The vertical offset from cell corner in pixels.
 * 
 * @return {SpreadsheetApp.OverGridImage} The inserted image.
 */


/**
 * Inserts an image in the document at a given row and column.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertImage
 * 
 * @param {String} url - The URL of the image.
 * @param {IntegerNum} column - The grid column position.
 * @param {IntegerNum} row - The grid row position.
 * 
 * @return {SpreadsheetApp.OverGridImage} The inserted image.
 */


/**
 * Inserts an image in the document at a given row and column, with a pixel offset.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1, 10, 10);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertImage
 * 
 * @param {String} url - The URL for the image.
 * @param {IntegerNum} column - The column position.
 * @param {IntegerNum} row - The row position.
 * @param {IntegerNum} offsetX - The horizontal offset from cell corner in pixels.
 * @param {IntegerNum} offsetY - The vertical offset from cell corner in pixels.
 * 
 * @return {SpreadsheetApp.OverGridImage} The Inserted image.
 */


/**
 * Inserts a row after the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a row after the first row position
 * sheet.insertRowAfter(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertRowAfter
 * 
 * @param {IntegerNum} afterPosition - The row after which the new row should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a row before the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a row before the first row position
 * sheet.insertRowBefore(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertRowBefore
 * 
 * @param {IntegerNum} beforePosition - The row before which the new row should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a blank row in a sheet at the specified location.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Shifts all rows down by one
 * sheet.insertRows(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertRows
 * 
 * @param {IntegerNum} rowIndex - The index indicating where to insert a row.
 * 
 * @return void
 */


/**
 * Inserts one or more consecutive blank rows in a sheet starting at the specified location.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Shifts all rows down by three
 * sheet.insertRows(1, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertRows
 * 
 * @param {IntegerNum} rowIndex - The index indicating where to insert a row.
 * @param {IntegerNum} numRows - The number of rows to insert.
 * 
 * @return void
 */


/**
 * Inserts a number of rows after the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts five rows after the first row
 * sheet.insertRowsAfter(1, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertRowsAfter
 * 
 * @param {IntegerNum} afterPosition - The row after which the new rows should be added.
 * @param {IntegerNum} howMany - The number of rows to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a number of rows before the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts five rows before the first row
 * sheet.insertRowsBefore(1, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#insertRowsBefore
 * 
 * @param {IntegerNum} beforePosition - The row before which the new rows should be added.
 * @param {IntegerNum} howMany - The number of rows to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Returns whether the given column is hidden by the user.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Columns start at 1
 * Logger.log(sheet.isColumnHiddenByUser(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#isColumnHiddenByUser
 * 
 * @param {IntegerNum} columnPosition - The position of the column to examine.
 * 
 * @return {Boolean} <code>true</code> if the column is hidden, <code>false</code> otherwise.
 */


/**
 * Returns <code>true</code> if this sheet layout is right-to-left. Returns <code>false</code> if the sheet
 * uses the default left-to-right layout.
 * 
 * @function SpreadsheetApp.Sheet#isRightToLeft
 * 
 * @return {Boolean} <code>true</code> if right-to-left; <code>false</code> otherwise
 */


/**
 * Returns whether the given row is hidden by a filter (not a filter view).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Columns start at 1
 * Logger.log(sheet.isColumnHiddenByUser(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#isRowHiddenByFilter
 * 
 * @param {IntegerNum} rowPosition - The position of the row to examine.
 * 
 * @return {Boolean} <code>true</code> if the row is hidden, <code>false</code> otherwise.
 */


/**
 * Returns whether the given row is hidden by the user.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Rows start at 1
 * Logger.log(sheet.isRowHiddenByUser(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#isRowHiddenByUser
 * 
 * @param {IntegerNum} rowPosition - The position of the row to examine.
 * 
 * @return {Boolean} <code>true</code> if the row is hidden, <code>false</code> otherwise.
 */


/**
 * Returns <code>true</code> if the sheet is currently hidden.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * if (sheet.isSheetHidden()) {
 *   // do something...
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#isSheetHidden
 * 
 * @return {Boolean} <code>true</code> if the sheet is hidden, <code>false</code> otherwise
 */


/**
 * Moves the columns selected by the given range to the position indicated by the <code>destinationIndex</code>. The <code>columnSpec</code> itself does not have to exactly represent an entire
 * column or group of columns to move&mdash;it selects all columns that the range spans.
 * 
 * <pre class="prettyprint"><code>
 * // The code below moves rows A-B to destination index 5.
 * // This results in those columns becoming columns C-D.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * // Selects column A and column B to be moved.
 * var columnSpec = sheet.getRange(&quot;A1:B1&quot;);
 * sheet.moveColumns(columnSpec, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#moveColumns
 * 
 * @param {SpreadsheetApp.Range} columnSpec - A range spanning the columns that should be moved.
 * @param {IntegerNum} destinationIndex - The index that the columns should be moved to. Note that this index is
 *     based on the coordinates before the columns are moved. Existing data is shifted right to
 *     make room for the moved columns while the source columns are removed from the grid.
 *     Therefore, the data may end up at a different index than originally specified.
 * 
 * @return void
 */


/**
 * Moves the rows selected by the given range to the position indicated by the <code>destinationIndex</code>. The <code>rowSpec</code> itself does not have to exactly represent an entire row
 * or group of rows to move&mdash;it selects all rows that the range spans.
 * 
 * <pre class="prettyprint"><code>
 * // The code below moves rows 1-2 to destination index 5.
 * // This results in those rows becoming rows 3-4.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * // Selects row 1 and row 2 to be moved.
 * var rowSpec = sheet.getRange(&quot;A1:A2&quot;);
 * sheet.moveRows(rowSpec, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#moveRows
 * 
 * @param {SpreadsheetApp.Range} rowSpec - A range spanning the rows that should be moved.
 * @param {IntegerNum} destinationIndex - The index that the rows should be moved to. Note that this index is
 *     based on the coordinates before the rows are moved. Existing data is shifted down to make
 *     room for the moved rows while the source rows are removed from the grid. Therefore, the
 *     data may end up at a different index than originally specified.
 * 
 * @return void
 */


/**
 * Returns a builder to create a new chart for this sheet.
 * 
 * <p>This example shows how to create a new chart:
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var range = sheet.getRange(&quot;A1:B8&quot;);
 * var chartBuilder = sheet.newChart();
 * chartBuilder.addRange(range)
 *     .setChartType(Charts.ChartType.LINE)
 *     .setPosition(2, 2, 0, 0)
 *     .setOption(&#39;title&#39;, &#39;My Line Chart!&#39;);
 * sheet.insertChart(chartBuilder.build());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#newChart
 * 
 * @return {SpreadsheetApp.EmbeddedChartBuilder} a builder for create a new chart
 */


/**
 * Creates an object that can protect the sheet from being edited except by users who have
 * permission. Until the script actually changes the list of editors for the sheet (by calling
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)'>Protection.removeEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)'>Protection.removeEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)'>Protection.removeEditors(emailAddresses)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)'>Protection.addEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)'>Protection.addEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)'>Protection.addEditors(emailAddresses)</a></code>, or setting a new
 * value for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean)'>Protection.setDomainEdit(editable)</a></code>), the permissions mirror those of the
 * spreadsheet itself, which effectively means that the sheet remains unprotected. If the sheet is
 * already protected, this method returns an object representing its existing protection settings.
 * A protected sheet may include unprotected regions.
 * 
 * <pre class="prettyprint"><code>
 * // Protect the active sheet, then remove all other users from the list of editors.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
 * 
 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
 * // permission comes from a group, the script throws an exception upon removing the group.
 * var me = Session.getEffectiveUser();
 * protection.addEditor(me);
 * protection.removeEditors(protection.getEditors());
 * if (protection.canDomainEdit()) {
 *   protection.setDomainEdit(false);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#protect
 * 
 * @return {SpreadsheetApp.Protection} an object representing the protection settings
 */


/**
 * Removes a chart from the parent sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This removes all the embedded charts from the spreadsheet
 * var charts = sheet.getCharts();
 * for (var i in charts) {
 *   sheet.removeChart(charts[i]);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#removeChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} chart - the chart to remove
 * 
 * @return void
 */


/**
 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()'>active range</a></code> in the active sheet, with
 * the top left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var range = sheet.getRange(&#39;A1:D4&#39;);
 * sheet.setActiveRange(range);
 * 
 * var selection = sheet.getSelection();
 * // Current cell: A1
 * var currentCell = selection.getCurrentCell();
 * // Active Range: A1:D4
 * var activeRange = selection.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setActiveRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to set as the active range.
 * 
 * @return {SpreadsheetApp.Range} the newly active range
 */


/**
 * Sets the specified list of ranges as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRangeList()'>active ranges</a></code> in the
 * active sheet. The last range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()'>active range</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * sheet.setActiveRangeList(rangeList);
 * 
 * var selection = sheet.getSelection();
 * // Current cell: B2
 * var currentCell = selection.getCurrentCell();
 * // Active range: B2:C4
 * var activeRange = selection.getActiveRange();
 * // Active range list: [D4, B2:C4]
 * var activeRangeList = selection.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setActiveRangeList
 * 
 * @param {SpreadsheetApp.RangeList} rangeList - The list of ranges to select.
 * 
 * @return {SpreadsheetApp.RangeList} the newly selected list of ranges
 */


/**
 * Sets the active selection region for this sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D4&quot;);
 * sheet.setActiveSelection(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setActiveSelection
 * 
 * @param {SpreadsheetApp.Range} range - The range to set as the active selection.
 * 
 * @return {SpreadsheetApp.Range} the newly active range
 */


/**
 * Sets the active selection, as specified in A1 notation or R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.setActiveSelection(&quot;A1:D4&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setActiveSelection
 * 
 * @param {String} a1Notation - The range to set as active, as specified in A1 notation or R1C1 notation.
 * 
 * @return {SpreadsheetApp.Range} the newly active range
 */


/**
 * Sets the position of the column group control toggle on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * sheet.setColumnGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setColumnGroupControlPosition
 * 
 * @param {SpreadsheetApp.GroupControlTogglePosition} position - The position of the column group control toggle.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets the width of the given column in pixels.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first column to a width of 200 pixels
 * sheet.setColumnWidth(1, 200);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setColumnWidth
 * 
 * @param {IntegerNum} columnPosition - The position of the given column to set.
 * @param {IntegerNum} width - The width in pixels to set it to.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the width of the given columns in pixels.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first three columns to a width of 200 pixels
 * sheet.setColumnWidths(1, 3, 200);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setColumnWidths
 * 
 * @param {IntegerNum} startColumn - The starting column position to change.
 * @param {IntegerNum} numColumns - The number of columns to change.
 * @param {IntegerNum} width - The width in pixels to set it to.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Replaces all currently existing conditional format rules in the sheet with the input rules.
 * Rules are evaluated in their input order.
 * 
 * <pre class="prettyprint"><code>
 * // Remove one of the existing conditional format rules.
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rules = sheet.getConditionalFormatRules();
 * rules.splice(1, 1); // Deletes the 2nd format rule.
 * sheet.setConditionalFormatRules(rules);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setConditionalFormatRules
 * 
 * @param {SpreadsheetApp.ConditionalFormatRule[]} rules - The new conditional format rules.
 * 
 * @return void
 */


/**
 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <p>If the specified cell is present in an already selected range, then that range becomes the
 * active range with the cell as the current cell.
 * 
 * <p>If the specified cell is not present in any selected range, then any existing selection is
 * removed and the cell becomes the current cell and the active range.
 * 
 * <p><b>Note:</b>The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise it throws an
 * exception.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var cell = sheet.getRange(&#39;B5&#39;);
 * sheet.setCurrentCell(cell);
 * 
 * var selection = sheet.getSelection();
 * // Current cell: B5
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setCurrentCell
 * 
 * @param {SpreadsheetApp.Range} cell - The cell to set as the current cell.
 * 
 * @return {SpreadsheetApp.Range} the newly set current cell
 */


/**
 * Freezes the given number of columns. If zero, no columns are frozen.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Freezes the first column
 * sheet.setFrozenColumns(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setFrozenColumns
 * 
 * @param {IntegerNum} columns - The number of columns to freeze.
 * 
 * @return void
 */


/**
 * Freezes the given number of rows. If zero, no rows are frozen.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Freezes the first row
 * sheet.setFrozenRows(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setFrozenRows
 * 
 * @param {IntegerNum} rows - The number of rows to freeze.
 * 
 * @return void
 */


/**
 * Hides or reveals the sheet gridlines.
 * 
 * @function SpreadsheetApp.Sheet#setHiddenGridlines
 * 
 * @param {Boolean} hideGridlines - If <code>true</code>, hide gridlines in this sheet; otherwise show the
 *     gridlines.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets the sheet name.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.setName(&quot;not first anymore&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setName
 * 
 * @param {String} name - The new name for the sheet.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets or unsets the sheet layout to right-to-left.
 * 
 * @function SpreadsheetApp.Sheet#setRightToLeft
 * 
 * @param {Boolean} rightToLeft - If <code>true</code>, the sheet layout is set to right-to-left, with cell A1 at
 *     the top right corner. If <code>false</code>, the sheet layout is set to the default
 *     left-to-right, with cell A1 at the top left.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets the position of the row group control toggle on the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * sheet.setRowGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setRowGroupControlPosition
 * 
 * @param {SpreadsheetApp.GroupControlTogglePosition} position - The position of the row group control toggle.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets the row height of the given row in pixels.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first row to a height of 200 pixels
 * sheet.setRowHeight(1, 200);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setRowHeight
 * 
 * @param {IntegerNum} rowPosition - The row position to change.
 * @param {IntegerNum} height - The height in pixels to set it to.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the height of the given rows in pixels.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first three rows to a height of 20 pixels
 * sheet.setRowHeights(1, 3, 20);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setRowHeights
 * 
 * @param {IntegerNum} startRow - The starting row position to change.
 * @param {IntegerNum} numRows - The number of rows to change.
 * @param {IntegerNum} height - The height in pixels to set it to.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Sets the permissions for the current sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var permissions = sheet.getSheetProtection();
 * 
 * // This copies the permissions on the first sheet to the second sheet
 * var sheetToClonePermissionsTo = ss.getSheets()[1];
 * sheetToClonePermissionsTo.setSheetProtection(permissions);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setSheetProtection
 * @deprecated
 * 
 * @param {SpreadsheetApp.PageProtection} permissions - The access permissions object to set on this sheet.
 * 
 * @return void
 */


/**
 * Sets the sheet tab color.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there is a sheet named &quot;first&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var first = ss.getSheetByName(&quot;first&quot;);
 * first.setTabColor(&quot;ff0000&quot;); // Set the color to red.
 * first.setTabColor(null); // Unset the color.
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#setTabColor
 * 
 * @param {String} color - A color code in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
 *     <code>null</code> to reset the tab color.
 * 
 * @return {SpreadsheetApp.Sheet} this sheet, for chaining
 */


/**
 * Unhides the column at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Unhides the first column
 * sheet.showColumns(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#showColumns
 * 
 * @param {IntegerNum} columnIndex - The index of the column to unhide.
 * 
 * @return void
 */


/**
 * Unhides one or more consecutive columns starting at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Unhides the first three columns
 * sheet.showColumns(1, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#showColumns
 * 
 * @param {IntegerNum} columnIndex - The starting index of the columns to unhide.
 * @param {IntegerNum} numColumns - The number of columns to unhide.
 * 
 * @return void
 */


/**
 * Unhides the row at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Unhides the first row
 * sheet.showRows(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#showRows
 * 
 * @param {IntegerNum} rowIndex - The index of the row to unhide.
 * 
 * @return void
 */


/**
 * Unhides one or more consecutive rows starting at the given index.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Unhides the first three rows
 * sheet.showRows(1, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#showRows
 * 
 * @param {IntegerNum} rowIndex - The starting index of the rows to unhide.
 * @param {IntegerNum} numRows - The number of rows to unhide.
 * 
 * @return void
 */


/**
 * Makes the sheet visible. Has no effect if the sheet is already visible.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * sheet.showSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#showSheet
 * 
 * @return {SpreadsheetApp.Sheet} the current sheet
 */


/**
 * Sorts a sheet by column, ascending.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sorts the sheet by the first column, ascending
 * sheet.sort(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#sort
 * 
 * @param {IntegerNum} columnPosition - The column to sort by.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sorts a sheet by column. Takes a parameter to specify ascending or descending.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sorts the sheet by the first column, descending
 * sheet.sort(1, false);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#sort
 * 
 * @param {IntegerNum} columnPosition - The column to sort by.
 * @param {Boolean} ascending - <code>true</code> for ascending sorts, <code>false</code> for descending.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Unhides the column in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This unhides the first column if it was previously hidden
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.unhideColumn(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#unhideColumn
 * 
 * @param {SpreadsheetApp.Range} column - The range to unhide, if hidden.
 * 
 * @return void
 */


/**
 * Unhides the row in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This unhides the first row if it was previously hidden
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.unhideRow(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#unhideRow
 * 
 * @param {SpreadsheetApp.Range} row - The range to unhide, if hidden.
 * 
 * @return void
 */


/**
 * Updates the chart on this sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This code is going to loop through all the charts and change them to
 * // column charts
 * var charts = sheet.getCharts();
 * for (var i in charts) {
 *   var chart = charts[i];
 *   var newChart = chart
 *       .modify()
 *       .setChartType(Charts.ChartType.COLUMN)
 *       .build();
 *   sheet.updateChart(newChart);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#updateChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} chart - the chart to update
 * 
 * @return void
 */


/**
 * Creates a text finder for the sheet, which can find and replace text within the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 * 
 * // Creates  a text finder.
 * var textFinder = sheet.createTextFinder(&#39;dog&#39;);
 * 
 * // Returns the first occurrence of &#39;dog&#39; in the sheet.
 * var firstOccurrence = textFinder.findNext();
 * 
 * // Replaces the last found occurrence of &#39;dog&#39; with &#39;cat&#39; and returns the number
 * // of occurrences replaced.
 * var numOccurrencesReplaced = findOccurrence.replaceWith(&#39;cat&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#createTextFinder
 * 
 * @param {String} findText - The text to search for.
 * 
 * @return {SpreadsheetApp.TextFinder} the <code>TextFinder</code> for the sheet
 */


/**
 * Returns the type of the sheet.
 * 
 * <p>The default type of sheet is <code>SheetType.GRID</code>. A sheet that contains a single embedded
 * object such as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> is an <code>SheetType.OBJECT</code> sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * Logger.log(sheet.getType());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Sheet#getType
 * 
 * @return {SpreadsheetApp.SheetType} the type of the sheet
 */



/**
 * @class SpreadsheetApp.Spreadsheet
 */

/**
 * Adds developer metadata with the specified key to the top-level spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This spreadsheet, for chaining.
 */


/**
 * Adds developer metadata with the specified key and visibility to the spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility of the new developer metadata.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This spreadsheet, for chaining.
 */


/**
 * Adds developer metadata with the specified key and value to the spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {String} value - The value for the new developer metadata.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This spreadsheet, for chaining.
 */


/**
 * Adds developer metadata with the specified key, value, and visibility to the spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#addDeveloperMetadata
 * 
 * @param {String} key - The key for the new developer metadata.
 * @param {String} value - The value for the new developer metadata.
 * @param {SpreadsheetApp.DeveloperMetadataVisibility} visibility - The visibility of the new developer metadata.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This spreadsheet, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function SpreadsheetApp.Spreadsheet#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function SpreadsheetApp.Spreadsheet#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If any of the
 * users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function SpreadsheetApp.Spreadsheet#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Creates a new menu in the Spreadsheet UI.
 * 
 * <p>Each menu entry runs a user-defined function. Usually, you want to call it from the <code>onOpen()</code> function so that the menu is automatically created when the spreadsheet is loaded.
 * 
 * <pre class="prettyprint"><code>
 * // The onOpen function is executed automatically every time a Spreadsheet is loaded
 * function onOpen() {
 *   var ss = SpreadsheetApp.getActiveSpreadsheet();
 *   var menuEntries = [];
 *   // When the user clicks on &quot;addMenuExample&quot; then &quot;Menu Entry 1&quot;, the function function1 is
 *   // executed.
 *   menuEntries.push({name: &quot;Menu Entry 1&quot;, functionName: &quot;function1&quot;});
 *   menuEntries.push(null); // line separator
 *   menuEntries.push({name: &quot;Menu Entry 2&quot;, functionName: &quot;function2&quot;});
 * 
 *   ss.addMenu(&quot;addMenuExample&quot;, menuEntries);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#addMenu
 * 
 * @param {String} name - The name of the menu to be created.
 * @param {Object[]} subMenus - An array of JavaScript maps with <code>name</code> and <code>functionName
 *     </code> parameters. You can use functions from included libraries, such as <code>
 *     Library.libFunction1</code>.
 * 
 * @return void
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function SpreadsheetApp.Spreadsheet#addViewer
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function SpreadsheetApp.Spreadsheet#addViewer
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If any of the
 * users were already on the list of editors, this method has no effect for them.
 * 
 * @function SpreadsheetApp.Spreadsheet#addViewers
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user
 * asks for the last row, and then writes to that row, and an intervening mutation occurs between
 * getting the last row and writing to it.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Appends a new row with 3 columns to the bottom of the
 * // spreadsheet containing the values in the array
 * sheet.appendRow([&quot;a man&quot;, &quot;a plan&quot;, &quot;panama&quot;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#appendRow
 * 
 * @param {Object[]} rowContents - An array of values to insert after the last row in the sheet.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the width of the given column to fit its contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.getRange(&#39;a1&#39;).setValue(&#39;Whenever it is a damp, drizzly November in my soul...&#39;);
 * 
 * // Sets the first column to a width which fits the text
 * sheet.autoResizeColumn(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#autoResizeColumn
 * 
 * @param {IntegerNum} columnPosition - The position of the given column to resize.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Copies the spreadsheet and returns the new one.
 * 
 * <pre class="prettyprint"><code>
 * // This code makes a copy of the current spreadsheet and names it appropriately
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.copy(&quot;Copy of &quot; + ss.getName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#copy
 * 
 * @param {String} name
 * 
 * @return {SpreadsheetApp.Spreadsheet} the spreadsheet for chaining
 */


/**
 * Returns a DeveloperMetadataFinderApi for finding developer metadata within the scope of this
 * spreadsheet. By default this considers all metadata associated with the spreadsheet, sheets,
 * rows, and columns.
 * 
 * @function SpreadsheetApp.Spreadsheet#createDeveloperMetadataFinder
 * 
 * @return {SpreadsheetApp.DeveloperMetadataFinder} A developer metadata finder to search for metadata in the scope of this spreadsheet.
 */


/**
 * Deletes the currently active sheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below deletes the currently active sheet and stores the new active sheet in a
 * // variable
 * var newSheet = SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#deleteActiveSheet
 * 
 * @return {SpreadsheetApp.Sheet} the new active sheet
 */


/**
 * Deletes the column at the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Columns start at &quot;1&quot; - this deletes the first column
 * sheet.deleteColumn(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#deleteColumn
 * 
 * @param {IntegerNum} columnPosition - The position of the column, starting at 1 for the first column.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Deletes a number of columns starting at the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Columns start at &quot;1&quot; - this deletes the first two columns
 * sheet.deleteColumns(1, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#deleteColumns
 * 
 * @param {IntegerNum} columnPosition - The position of the first column to delete.
 * @param {IntegerNum} howMany - The number of columns to delete.
 * 
 * @return void
 */


/**
 * Deletes the row at the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Rows start at &quot;1&quot; - this deletes the first row
 * sheet.deleteRow(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#deleteRow
 * 
 * @param {IntegerNum} rowPosition - The position of the row, starting at 1 for the first row.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Deletes a number of rows starting at the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Rows start at &quot;1&quot; - this deletes the first two rows
 * sheet.deleteRows(1, 2);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#deleteRows
 * 
 * @param {IntegerNum} rowPosition - The position of the first row to delete.
 * @param {IntegerNum} howMany - The number of rows to delete.
 * 
 * @return void
 */


/**
 * Deletes the specified sheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below deletes the specified sheet.
 * var ss = SpreadsheetApp.getActive();
 * var sheet = ss.getSheetByName(&#39;My Sheet&#39;);
 * ss.deleteSheet(sheet);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#deleteSheet
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The sheet to delete.
 * 
 * @return void
 */


/**
 * Duplicates the active sheet and makes it the active sheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below makes a duplicate of the active sheet
 * SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#duplicateActiveSheet
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Returns the active cell in this sheet.
 * 
 * <p><b>Note:</b> It's preferrable to use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()'>getCurrentCell()</a></code>, which the returns the current
 * highlighted cell.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * // Returns the active cell
 * var cell = sheet.getActiveCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getActiveCell
 * 
 * @return {SpreadsheetApp.Range} the current active cell
 */


/**
 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
 * multiple ranges are selected this method returns only the last selected range.
 * 
 * <p>The term "active range" refers to the range that a user has selected in the active sheet,
 * but in a custom function it refers to the cell being actively recalculated.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var activeRange = sheet.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getActiveRange
 * 
 * @return {SpreadsheetApp.Range} the active range
 */


/**
 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no active
 * ranges.
 * 
 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()'>getActiveRange()</a></code> call.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * // Returns the list of active ranges.
 * var activeRangeList = sheet.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getActiveRangeList
 * 
 * @return {SpreadsheetApp.RangeList} the list of active ranges
 */


/**
 * Gets the active sheet in a spreadsheet.
 * 
 * <p>The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
 * UI.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getActiveSheet
 * 
 * @return {SpreadsheetApp.Sheet} the active sheet in the spreadsheet
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function SpreadsheetApp.Spreadsheet#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Returns all the bandings in this spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#getBandings
 * 
 * @return {SpreadsheetApp.Banding[]} all the bandings in this spreadsheet
 */


/**
 * Return the data inside this object as a blob.
 * 
 * @function SpreadsheetApp.Spreadsheet#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Gets the width in pixels of the given column.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Columns start at 1
 * Logger.log(sheet.getColumnWidth(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getColumnWidth
 * 
 * @param {IntegerNum} columnPosition - The position of the column to examine.
 * 
 * @return {IntegerNum} column width in pixels
 */


/**
 * Returns the current cell in the active sheet or <code>null</code> if there is no current cell. The
 * current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
 * border. There is never more than one current cell. When a user selects one or more cell ranges,
 * one of the cells in the selection is the current cell.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * // Returns the current highlighted cell in the one of the active ranges.
 * var currentCell = sheet.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getCurrentCell
 * 
 * @return {SpreadsheetApp.Range} the current cell
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> corresponding to the dimensions in which data is present.
 * 
 * <p>This is functionally equivalent to creating a Range bounded by A1 and
 * (Range.getLastColumn(), Range.getLastRow()).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This represents ALL the data
 * var range = sheet.getDataRange();
 * var values = range.getValues();
 * 
 * // This logs the spreadsheet in CSV format with a trailing comma
 * for (var i = 0; i &lt; values.length; i++) {
 *   var row = &quot;&quot;;
 *   for (var j = 0; j &lt; values[i].length; j++) {
 *     if (values[i][j]) {
 *       row = row + values[i][j];
 *     }
 *     row = row + &quot;,&quot;;
 *   }
 *   Logger.log(row);
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getDataRange
 * 
 * @return {SpreadsheetApp.Range} a range consisting of all the data in the spreadsheet
 */


/**
 * Gets all the data source tables.
 * 
 * @function SpreadsheetApp.Spreadsheet#getDataSourceTables
 * 
 * @return {SpreadsheetApp.DataSourceTable[]} A list of data source tables.
 */


/**
 * Get the developer metadata associated with the top-level spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#getDeveloperMetadata
 * 
 * @return {SpreadsheetApp.DeveloperMetadata[]} The developer metadata associated with this range.
 */


/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user who executes the script does
 * not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, this method throws an exception.
 * 
 * @function SpreadsheetApp.Spreadsheet#getEditors
 * 
 * @return {User[]} An array of users with edit permission.
 */


/**
 * Returns the URL for the form that sends its responses to this spreadsheet, or <code>null</code> if
 * this spreadsheet has no associated form. If multiple forms send responses to this spreadsheet,
 * the form URL returned is indeterminate. As an alternative, per sheet form URL associations can
 * be retrieved through the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getFormUrl()'>Sheet.getFormUrl()</a></code> method.
 * 
 * @function SpreadsheetApp.Spreadsheet#getFormUrl
 * 
 * @return {String} the URL for the form that places its responses in this spreadsheet, or <code>null</code> if
 *     this spreadsheet doesn't have an associated form.
 */


/**
 * Returns the number of frozen columns.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(&quot;Number of frozen columns: %s&quot;, sheet.getFrozenColumns());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getFrozenColumns
 * 
 * @return {IntegerNum} the number of frozen columns
 */


/**
 * Returns the number of frozen rows.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(&quot;Number of frozen rows: %s&quot;, sheet.getFrozenRows());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getFrozenRows
 * 
 * @return {IntegerNum} the number of frozen rows
 */


/**
 * Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL.
 * For example, the spreadsheet ID in the URL
 * https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the ID for the active spreadsheet.
 * Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getId
 * 
 * @return {String} the unique id (or key) for the spreadsheet
 */


/**
 * Returns all over-the-grid images on the sheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#getImages
 * 
 * @return {SpreadsheetApp.OverGridImage[]} An array of over-the-grid images.
 */


/**
 * Returns the position of the last column that has content.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This logs the value in the very last cell of this sheet
 * var lastRow = sheet.getLastRow();
 * var lastColumn = sheet.getLastColumn();
 * var lastCell = sheet.getRange(lastRow, lastColumn);
 * Logger.log(lastCell.getValue());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getLastColumn
 * 
 * @return {IntegerNum} the last column of the sheet that contains content
 */


/**
 * Returns the position of the last row that has content.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This logs the value in the very last cell of this sheet
 * var lastRow = sheet.getLastRow();
 * var lastColumn = sheet.getLastColumn();
 * var lastCell = sheet.getRange(lastRow, lastColumn);
 * Logger.log(lastCell.getValue());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getLastRow
 * 
 * @return {IntegerNum} the last row of the sheet that contains content
 */


/**
 * Gets the name of the document.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * Logger.log(ss.getName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getName
 * 
 * @return {String} the name of the spreadsheet
 */


/**
 * Gets all the named ranges in this spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the name of the first named range.
 * var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
 * if (namedRanges.length &gt; 1) {
 *   Logger.log(namedRanges[0].getName());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getNamedRanges
 * 
 * @return {SpreadsheetApp.NamedRange[]} an array of all the named ranges in the spreadsheet
 */


/**
 * Returns the number of sheets in this spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the number of sheets in the active spreadsheet.
 * Logger.log(SpreadsheetApp.getActiveSpreadsheet().getNumSheets());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getNumSheets
 * 
 * @return {IntegerNum} the number of sheets in the spreadsheet
 */


/**
 * Returns the owner of the document. Documents in a Team Drive do not have an owner, in which
 * case this returns <code>null</code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var owner = ss.getOwner();
 * Logger.log(owner.getEmail());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getOwner
 * 
 * @return {User} the owner of the document, or <code>null</code> if the document is in a Team Drive.
 */


/**
 * Gets an array of objects representing all protected ranges or sheets in the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // Remove all range protections in the spreadsheet that the user has permission to edit.
 * var ss = SpreadsheetApp.getActive();
 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
 * for (var i = 0; i &lt; protections.length; i++) {
 *   var protection = protections[i];
 *   if (protection.canEdit()) {
 *     protection.remove();
 *   }
 * }
 * </code></pre>
 * 
 * <pre class="prettyprint"><code>
 * // Remove all sheet protections in the spreadsheet that the user has permission to edit.
 * var ss = SpreadsheetApp.getActive();
 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);
 * for (var i = 0; i &lt; protections.length; i++) {
 *   var protection = protections[i];
 *   if (protection.canEdit()) {
 *     protection.remove();
 *   }
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getProtections
 * 
 * @param {SpreadsheetApp.ProtectionType} type - The type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
 *     <code>SpreadsheetApp.ProtectionType.SHEET</code>.
 * 
 * @return {SpreadsheetApp.Protection[]} an array of objects representing all protected ranges or sheets in the spreadsheet
 */


/**
 * Returns the range as specified in A1 notation or R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * // Get a range A1:D4 on sheet titled &quot;Invoices&quot;
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var range = ss.getRange(&quot;Invoices!A1:D4&quot;);
 * 
 * // Get cell A1 on the first sheet
 * var sheet = ss.getSheets()[0];
 * var cell = sheet.getRange(&quot;A1&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getRange
 * 
 * @param {String} a1Notation - The range to return, as specified in A1 notation or R1C1 notation.
 * 
 * @return {SpreadsheetApp.Range} the range at the location designated
 */


/**
 * Returns a named range, or <code>null</code> if no range with the given name is found. If multiple
 * sheets of the spreadsheet use the same range name, specify the sheet name without additional
 * quotation marks — for example, <code>getRangeByName(&#39;TaxRates&#39;)</code> or <code>getRangeByName(&#39;Sheet Name!TaxRates&#39;)</code>, but not <code>getRangeByName(&#39;&quot;Sheet
 * Name&quot;!TaxRates&#39;)</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log the number of columns for the range named &#39;TaxRates&#39; in the active spreadsheet.
 * var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(&#39;TaxRates&#39;);
 * if (range != null) {
 *   Logger.log(range.getNumColumns());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getRangeByName
 * 
 * @param {String} name - The name of the range to get.
 * 
 * @return {SpreadsheetApp.Range} range of cells with the given name
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range-list.html'>RangeList</a></code> collection representing the ranges in the same sheet specified
 * by a non-empty list of A1 notations or R1C1 notations.
 * 
 * <pre class="prettyprint"><code>
 * // Get a list of ranges A1:D4, F1:H4.
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var rangeList  = sheet.getRangeList([&#39;A1:D4&#39;, &#39;F1:H4&#39;]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getRangeList
 * 
 * @param {String[]} a1Notations - The list of ranges to return, as specified in A1 notation or R1C1 notation.
 * 
 * @return {SpreadsheetApp.RangeList} the range list at the location designated
 */


/**
 * Gets the height in pixels of the given row.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Rows start at 1
 * Logger.log(sheet.getRowHeight(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getRowHeight
 * 
 * @param {IntegerNum} rowPosition - The position of the row to examine.
 * 
 * @return {IntegerNum} row height in pixels
 */


/**
 * Returns the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html'>Selection</a></code> in the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSelection
 * 
 * @return {SpreadsheetApp.Selection} the current selection
 */


/**
 * Returns a sheet with the given name.
 * 
 * <p>If multiple sheets have the same name, the leftmost one is returned. Returns <code>null</code> if
 * there is no sheet with the given name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the index of a sheet named &quot;Expenses&quot;
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(&quot;Expenses&quot;);
 * if (sheet != null) {
 *   Logger.log(sheet.getIndex());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSheetByName
 * 
 * @param {String} name - The name of the sheet to get.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet with the given name
 */


/**
 * Returns the ID of the sheet represented by this object.
 * 
 * <p>This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
 * increasing integer assigned at sheet creation time that is independent of sheet position. This
 * is useful in conjunction with methods such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)'>Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)</a></code> that take a <code>gridId</code> parameter rather than a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> instance.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(sheet.getSheetId());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSheetId
 * 
 * @return {IntegerNum} an ID for the sheet unique to the spreadsheet
 */


/**
 * Returns the sheet name.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * Logger.log(sheet.getSheetName());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSheetName
 * 
 * @return {String} the name of the sheet
 */


/**
 * Returns a <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html'>PageProtection</a></s></code> instance describing the permissions for the current sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var permissions = sheet.getSheetProtection();
 * 
 * permissions.setProtected(true);
 * permissions.addUser(&quot;user@example.com&quot;);
 * 
 * // Logs the users that have access to edit this sheet. Note that this
 * // is different from access to the entire spreadsheet - getUsers()
 * // only returns users if permissions.isProtected() is set to true.
 * var users = permissions.getUsers();
 * Logger.log(users);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSheetProtection
 * @deprecated
 * 
 * @return {SpreadsheetApp.PageProtection} an object describing sheet access permissions
 */


/**
 * Returns the rectangular grid of values for this range starting at the given coordinates. A -1
 * value given as the row or column position is equivalent to getting the very last row or column
 * that has data in the sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // The two samples below produce the same output
 * var values = sheet.getSheetValues(1, 1, 3, 3);
 * Logger.log(values);
 * 
 * var range = sheet.getRange(1, 1, 3, 3);
 * values = range.getValues();
 * Logger.log(values);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSheetValues
 * 
 * @param {IntegerNum} startRow - The position of the starting row.
 * @param {IntegerNum} startColumn - The position of the starting column.
 * @param {IntegerNum} numRows - The number of rows to return values for.
 * @param {IntegerNum} numColumns - The number of columns to return values for.
 * 
 * @return {Object[][]} a two-dimensional array of values
 */


/**
 * Gets all the sheets in this spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the name of the second sheet
 * var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
 * if (sheets.length &gt; 1) {
 *   Logger.log(sheets[1].getName());
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getSheets
 * 
 * @return {SpreadsheetApp.Sheet[]} an array of all the sheets in the spreadsheet
 */


/**
 * Gets the spreadsheet locale.
 * 
 * @function SpreadsheetApp.Spreadsheet#getSpreadsheetLocale
 * 
 * @return {String} the spreadsheet locale
 */


/**
 * Gets the time zone for the spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#getSpreadsheetTimeZone
 * 
 * @return {String} the time zone, specified in "long" format (for example, "America/New_York", as listed
 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 */


/**
 * Returns the url for the given spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * Logger.log(ss.getUrl());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#getUrl
 * 
 * @return {String} the url for the given spreadsheet
 */


/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user who executes
 * the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, this method throws an exception.
 * 
 * @function SpreadsheetApp.Spreadsheet#getViewers
 * 
 * @return {User[]} An array of users with view or comment permission.
 */


/**
 * Hides the columns in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This hides the first column
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.hideColumn(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#hideColumn
 * 
 * @param {SpreadsheetApp.Range} column - The column range to hide.
 * 
 * @return void
 */


/**
 * Hides the rows in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This hides the first row
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.hideRow(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#hideRow
 * 
 * @param {SpreadsheetApp.Range} row - The row range to hide.
 * 
 * @return void
 */


/**
 * Inserts a column after the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a column after the first column position
 * sheet.insertColumnAfter(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertColumnAfter
 * 
 * @param {IntegerNum} afterPosition - The column after which the new column should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a column before the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a column in the first column position
 * sheet.insertColumnBefore(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertColumnBefore
 * 
 * @param {IntegerNum} beforePosition - The column before which the new column should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a number of columns after the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a column in the second column position
 * sheet.insertColumnsAfter(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertColumnsAfter
 * 
 * @param {IntegerNum} afterPosition - The column after which the new column should be added.
 * @param {IntegerNum} howMany - The number of columns to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a number of columns before the given column position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts five columns before the first column
 * sheet.insertColumnsBefore(1, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertColumnsBefore
 * 
 * @param {IntegerNum} beforePosition - The column before which the new column should be added.
 * @param {IntegerNum} howMany - The number of columns to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> as an image in the document at a given row and column. The image
 * size is retrieved from the blob contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 * sheet.insertImage(blob, 1, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertImage
 * 
 * @param {BlobSource} blobSource - The blob containing the image contents, MIME type, and (optionally) name.
 * @param {IntegerNum} column - The column position.
 * @param {IntegerNum} row - The row position.
 * 
 * @return {SpreadsheetApp.OverGridImage} The inserted image.
 */


/**
 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> as an image in the document at a given row and column, with a
 * pixel offset. The image size is retrieved from the blob contents.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
 * sheet.insertImage(blob, 1, 1, 10, 10);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertImage
 * 
 * @param {BlobSource} blobSource - The blob containing the image contents, MIME type, and (optionally) name.
 * @param {IntegerNum} column - The column position.
 * @param {IntegerNum} row - The row position.
 * @param {IntegerNum} offsetX - The horizontal offset from cell corner in pixels.
 * @param {IntegerNum} offsetY - The vertical offset from cell corner in pixels.
 * 
 * @return {SpreadsheetApp.OverGridImage} The inserted image.
 */


/**
 * Inserts an image in the document at a given row and column.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertImage
 * 
 * @param {String} url - The URL of the image.
 * @param {IntegerNum} column - The grid column position.
 * @param {IntegerNum} row - The grid row position.
 * 
 * @return {SpreadsheetApp.OverGridImage} The inserted image.
 */


/**
 * Inserts an image in the document at a given row and column, with a pixel offset.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1, 10, 10);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertImage
 * 
 * @param {String} url - The URL for the image.
 * @param {IntegerNum} column - The column position.
 * @param {IntegerNum} row - The row position.
 * @param {IntegerNum} offsetX - The horizontal offset from cell corner in pixels.
 * @param {IntegerNum} offsetY - The vertical offset from cell corner in pixels.
 * 
 * @return {SpreadsheetApp.OverGridImage} The Inserted image.
 */


/**
 * Inserts a row after the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a row after the first row position
 * sheet.insertRowAfter(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertRowAfter
 * 
 * @param {IntegerNum} afterPosition - The row after which the new row should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a row before the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts a row before the first row position
 * sheet.insertRowBefore(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertRowBefore
 * 
 * @param {IntegerNum} beforePosition - The row before which the new row should be added.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a number of rows after the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts five rows after the first row
 * sheet.insertRowsAfter(1, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertRowsAfter
 * 
 * @param {IntegerNum} afterPosition - The row after which the new rows should be added.
 * @param {IntegerNum} howMany - The number of rows to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a number of rows before the given row position.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This inserts five rows before the first row
 * sheet.insertRowsBefore(1, 5);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertRowsBefore
 * 
 * @param {IntegerNum} beforePosition - The row before which the new rows should be added.
 * @param {IntegerNum} howMany - The number of rows to insert.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Inserts a new sheet into the spreadsheet, using a default sheet name. The new sheet becomes the
 * active sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.insertSheet();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet at the given index. The new sheet becomes the active
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.insertSheet(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {IntegerNum} sheetIndex - The index of the newly created sheet. To insert a sheet as the first one in
 *     the spreadsheet, set it to 0.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet at the given index and uses optional advanced
 * arguments. The new sheet becomes the active sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 * ss.insertSheet(1, {template: templateSheet});
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {IntegerNum} sheetIndex - The index of the newly created sheet. To insert a sheet as the first one in
 *     the spreadsheet, set it to 0.
 * @param {Object} options - Optional JavaScript advanced arguments.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet, using a default sheet name and optional advanced
 * arguments. The new sheet becomes the active sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 * ss.insertSheet({template: templateSheet});
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {Object} options - Optional JavaScript advanced arguments, listed below.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet with the given name. The new sheet becomes the active
 * sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.insertSheet(&#39;My New Sheet&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {String} sheetName - The name of the new sheet.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet with the given name at the given index. The new sheet
 * becomes the active sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.insertSheet(&#39;My New Sheet&#39;, 1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {String} sheetName - The name of the new sheet
 * @param {IntegerNum} sheetIndex - The index of the newly created sheet. To insert a sheet as the first one in
 *     the spreadsheet, set it to 0.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet with the given name at the given index and uses
 * optional advanced arguments. The new sheet becomes the active sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 * ss.insertSheet(&#39;My New Sheet&#39;, 1, {template: templateSheet});
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {String} sheetName - The name of the new sheet.
 * @param {IntegerNum} sheetIndex - The index of the newly inserted sheet. To insert a sheet as the first one in
 *     a spreadsheet, set it to 0.
 * @param {Object} options - Optional JavaScript advanced arguments.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet into the spreadsheet with the given name and uses optional advanced
 * arguments. The new sheet becomes the active sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
 * ss.insertSheet(&#39;My New Sheet&#39;, {template: templateSheet});
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheet
 * 
 * @param {String} sheetName - The name of the new sheet
 * @param {Object} options - Optional JavaScript advanced arguments.
 * 
 * @return {SpreadsheetApp.Sheet} the new sheet
 */


/**
 * Inserts a new sheet in the spreadsheet, creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html'>DataSourceTable</a></code> spanning the
 * entire sheet with the given data source specification, and starts data execution. As a side
 * effect, makes the new sheet the active sheet.
 * 
 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
 * type.
 * 
 * @function SpreadsheetApp.Spreadsheet#insertSheetWithDataSourceTable
 * 
 * @param {SpreadsheetApp.DataSourceSpec} spec - The data source specification to insert with.
 * 
 * @return {SpreadsheetApp.Sheet} The new sheet.
 */


/**
 * Indicates whether the document allows anonymous viewing. As this is no longer supported in the
 * <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>, use
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()'>File.getSharingAccess()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()'>File.getSharingPermission()</a></code> instead.
 * 
 * <pre class="prettyprint"><code>
 * // Determine if the document allows anonymous viewing via the Drive API.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var file = DriveApp.getFileById(ss.getId());
 * var access = file.getSharingAccess();
 * var permission = file.getSharingPermission();
 * var isAnonymousAccess =
 *     access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
 * var isAnonymousEdit = isAnonymousAccess &amp;&amp; permission != DriveApp.Permission.NONE;
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#isAnonymousView
 * @deprecated
 * 
 * @return {Boolean} true if the document allows anonymous viewing, false otherwise
 */


/**
 * Indicates whether the document allows edits from anonymous users. As this is no longer
 * supported in the <a href="https://support.google.com/drive/answer/3541068">new version of
 * Google Sheets</a>, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()'>File.getSharingAccess()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()'>File.getSharingPermission()</a></code> instead.
 * 
 * <pre class="prettyprint"><code>
 * // Determine if the document allow anonymous edits via the Drive API.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var file = DriveApp.getFileById(ss.getId());
 * var access = file.getSharingAccess();
 * var permission = file.getSharingPermission();
 * var isAnonymousAccess =
 *     access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
 * var isAnonymousEdit = isAnonymousAccess &amp;&amp; permission == DriveApp.Permission.EDIT;
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#isAnonymousWrite
 * @deprecated
 * 
 * @return {Boolean} true if the document allows anonymous editing, false otherwise
 */


/**
 * Returns whether the given column is hidden by the user.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Columns start at 1
 * Logger.log(sheet.isColumnHiddenByUser(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#isColumnHiddenByUser
 * 
 * @param {IntegerNum} columnPosition - The position of the column to examine.
 * 
 * @return {Boolean} <code>true</code> if the column is hidden, <code>false</code> otherwise.
 */


/**
 * Returns whether the given row is hidden by a filter (not a filter view).
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Columns start at 1
 * Logger.log(sheet.isColumnHiddenByUser(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#isRowHiddenByFilter
 * 
 * @param {IntegerNum} rowPosition - The position of the row to examine.
 * 
 * @return {Boolean} <code>true</code> if the row is hidden, <code>false</code> otherwise.
 */


/**
 * Returns whether the given row is hidden by the user.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Rows start at 1
 * Logger.log(sheet.isRowHiddenByUser(1));
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#isRowHiddenByUser
 * 
 * @param {IntegerNum} rowPosition - The position of the row to examine.
 * 
 * @return {Boolean} <code>true</code> if the row is hidden, <code>false</code> otherwise.
 */


/**
 * Moves the active sheet to the given position in the list of sheets. Throws an exception if the
 * position is negative or greater than the number of sheets.
 * 
 * <pre class="prettyprint"><code>
 * // This example assumes there are two sheets in the current
 * // active spreadsheet: one named &quot;first&quot;, and another named &quot;second&quot;,
 * // and that the current active sheet (first) is in position 1
 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = spreadsheet.getSheetByName(&quot;first&quot;);
 * 
 * // This should output &#39;Current index of sheet: 1&#39;
 * Logger.log(&quot;Current index of sheet: %s&quot;, sheet.getIndex());
 * 
 * spreadsheet.moveActiveSheet(2);
 * 
 * // This should output &#39;New index of sheet: 2&#39;
 * Logger.log(&quot;New index of sheet: %s&quot;, sheet.getIndex());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#moveActiveSheet
 * 
 * @param {IntegerNum} pos - a position to move the active sheet to in the list of sheets
 * 
 * @return void
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire
 * domain.
 * 
 * @function SpreadsheetApp.Spreadsheet#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire
 * domain.
 * 
 * @function SpreadsheetApp.Spreadsheet#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
 */


/**
 * Removes a menu that was added by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>. The <code>name</code> argument
 * should have the same value as the corresponding call to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // The onOpen function is executed automatically every time a Spreadsheet is loaded
 * function onOpen() {
 *   var ss = SpreadsheetApp.getActiveSpreadsheet();
 *   ss.addMenu(&quot;badMenu&quot;, [{name: &quot;remove bad menu&quot;, functionName: &quot;removeBadMenu&quot;},
 *                                        {name: &quot;foo&quot;, functionName: &quot;foo&quot;}]);
 * }
 * function removeBadMenu() {
 *   var ss = SpreadsheetApp.getActiveSpreadsheet();
 *   ss.removeMenu(&quot;badMenu&quot;);//name must match the name we used when added the menu
 * }
 * function foo(){
 * //do nothing
 * }
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#removeMenu
 * 
 * @param {String} name - The name of the menu to remove.
 * 
 * @return void
 */


/**
 * Deletes a named range with the given name. Throws an exception if no range with the given name
 * is found in the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new named range &quot;foo&quot;, and then remove it.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.setNamedRange(&quot;foo&quot;, ss.getActiveRange());
 * ss.removeNamedRange(&quot;foo&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#removeNamedRange
 * 
 * @param {String} name - The range name.
 * 
 * @return void
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This
 * method has no effect if the user is an editor, not a viewer or commenter. This method also does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who
 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's
 * entire domain.
 * 
 * @function SpreadsheetApp.Spreadsheet#removeViewer
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This
 * method has no effect if the user is an editor, not a viewer. This method also does not block
 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have general
 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire domain.
 * 
 * @function SpreadsheetApp.Spreadsheet#removeViewer
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {SpreadsheetApp.Spreadsheet} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> for chaining.
 */


/**
 * Renames the document.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.rename(&quot;This is the new name&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#rename
 * 
 * @param {String} newName - The new name for the document.
 * 
 * @return void
 */


/**
 * Renames the current active sheet to the given new name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below renames the active sheet to &quot;Hello world&quot;
 * SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet(&quot;Hello world&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#renameActiveSheet
 * 
 * @param {String} newName - The new name for the current active sheet.
 * 
 * @return void
 */


/**
 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()'>active range</a></code> in the active sheet, with
 * the top left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var range = sheet.getRange(&#39;A1:D4&#39;);
 * sheet.setActiveRange(range);
 * 
 * var selection = sheet.getSelection();
 * // Current cell: A1
 * var currentCell = selection.getCurrentCell();
 * // Active Range: A1:D4
 * var activeRange = selection.getActiveRange();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setActiveRange
 * 
 * @param {SpreadsheetApp.Range} range - The range to set as the active range.
 * 
 * @return {SpreadsheetApp.Range} the newly active range
 */


/**
 * Sets the specified list of ranges as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRangeList()'>active ranges</a></code> in the
 * active sheet. The last range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()'>active range</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
 * sheet.setActiveRangeList(rangeList);
 * 
 * var selection = sheet.getSelection();
 * // Current cell: B2
 * var currentCell = selection.getCurrentCell();
 * // Active range: B2:C4
 * var activeRange = selection.getActiveRange();
 * // Active range list: [D4, B2:C4]
 * var activeRangeList = selection.getActiveRangeList();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setActiveRangeList
 * 
 * @param {SpreadsheetApp.RangeList} rangeList - The list of ranges to select.
 * 
 * @return {SpreadsheetApp.RangeList} the newly selected list of ranges
 */


/**
 * Sets the active selection region for this sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var range = sheet.getRange(&quot;A1:D4&quot;);
 * sheet.setActiveSelection(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setActiveSelection
 * 
 * @param {SpreadsheetApp.Range} range - The range to set as the active selection.
 * 
 * @return {SpreadsheetApp.Range} the newly active range
 */


/**
 * Sets the active selection, as specified in A1 notation or R1C1 notation.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * sheet.setActiveSelection(&quot;A1:D4&quot;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setActiveSelection
 * 
 * @param {String} a1Notation - The range to set as active, as specified in A1 notation or R1C1 notation.
 * 
 * @return {SpreadsheetApp.Range} the newly active range
 */


/**
 * Sets the given sheet to be the active sheet in the spreadsheet. The Google Sheets UI displays
 * the chosen sheet unless the sheet belongs to a different spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * // The code below makes the first sheet active in the active spreadsheet.
 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 * spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setActiveSheet
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The sheet to set as the active sheet.
 * 
 * @return {SpreadsheetApp.Sheet} the active sheet
 */


/**
 * Sets the given sheet to be the active sheet in the spreadsheet, with an option to restore the
 * most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless
 * the sheet belongs to a different spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 * var firstSheet = spreadsheet.getSheets()[0];
 * var secondSheet = spreadsheet.getSheets()[1];
 * // Set the first sheet as the active sheet and select the range D4:F4.
 * spreadsheet.setActiveSheet(firstSheet).getRange(&#39;D4:F4&#39;).activate();
 * 
 * // Switch to the second sheet to do some work.
 * spreadsheet.setActiveSheet(secondSheet);
 * // Switch back to first sheet, and restore its selection.
 * spreadsheet.setActiveSheet(firstSheet, true);
 * 
 * // The selection of first sheet is restored, and it logs D4:F4
 * var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
 * Logger.log(range.getA1Notation());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setActiveSheet
 * 
 * @param {SpreadsheetApp.Sheet} sheet - The new active sheet.
 * @param {Boolean} restoreSelection - Tf <code>true</code>, the most recent selection of the new active sheet
 *     becomes selected again as the new sheet becomes active; if <code>false</code>, the new sheet
 *     becomes active without changing the current selection.
 * 
 * @return {SpreadsheetApp.Sheet} the new active sheet
 */


/**
 * Sets the document's policy on anonymous reading and writing. As this is no longer supported in
 * the <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>,
 * use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> as an alternative.
 * 
 * <pre class="prettyprint"><code>
 * // Set the document&#39;s policy on anonymous reading and writing via the Drive API.
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var file = DriveApp.getFileById(ss.getId());
 * 
 * // Set anonymous read.
 * file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.VIEW);
 * 
 * // Set anonymous write.
 * file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.EDIT);
 * 
 * // Disable anonymous access.
 * file.setSharing(DriveApi.Access.PRIVATE, file.getSharingPermission());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setAnonymousAccess
 * @deprecated
 * 
 * @param {Boolean} anonymousReadAllowed - <code>true</code> to allow anonymous reads; <code>false</code> otherwise.
 * @param {Boolean} anonymousWriteAllowed - <code>true</code> to allow anonymous reads; <code>false</code> otherwise.
 * 
 * @return void
 */


/**
 * Sets the width of the given column in pixels.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first column to a width of 200 pixels
 * sheet.setColumnWidth(1, 200);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setColumnWidth
 * 
 * @param {IntegerNum} columnPosition - The position of the given column to set.
 * @param {IntegerNum} width - The width in pixels to set it to.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()'>current cell</a></code>.
 * 
 * <p>If the specified cell is present in an already selected range, then that range becomes the
 * active range with the cell as the current cell.
 * 
 * <p>If the specified cell is not present in any selected range, then any existing selection is
 * removed and the cell becomes the current cell and the active range.
 * 
 * <p><b>Note:</b>The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise it throws an
 * exception.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 * var cell = sheet.getRange(&#39;B5&#39;);
 * sheet.setCurrentCell(cell);
 * 
 * var selection = sheet.getSelection();
 * // Current cell: B5
 * var currentCell = selection.getCurrentCell();
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setCurrentCell
 * 
 * @param {SpreadsheetApp.Range} cell - The cell to set as the current cell.
 * 
 * @return {SpreadsheetApp.Range} the newly set current cell
 */


/**
 * Freezes the given number of columns. If zero, no columns are frozen.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Freezes the first column
 * sheet.setFrozenColumns(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setFrozenColumns
 * 
 * @param {IntegerNum} columns - The number of columns to freeze.
 * 
 * @return void
 */


/**
 * Freezes the given number of rows. If zero, no rows are frozen.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Freezes the first row
 * sheet.setFrozenRows(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setFrozenRows
 * 
 * @param {IntegerNum} rows - The number of rows to freeze.
 * 
 * @return void
 */


/**
 * Names a range.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new named range &quot;TaxRates&quot; in the active spreadsheet
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * ss.setNamedRange(&quot;TaxRates&quot;, SpreadsheetApp.getActiveRange());
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setNamedRange
 * 
 * @param {String} name - The name to give the range.
 * @param {SpreadsheetApp.Range} range - The range specification.
 * 
 * @return void
 */


/**
 * Sets the row height of the given row in pixels.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sets the first row to a height of 200 pixels
 * sheet.setRowHeight(1, 200);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setRowHeight
 * 
 * @param {IntegerNum} rowPosition - The row position to change.
 * @param {IntegerNum} height - The height in pixels to set it to.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sets the permissions for the current sheet.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * var permissions = sheet.getSheetProtection();
 * 
 * // This copies the permissions on the first sheet to the second sheet
 * var sheetToClonePermissionsTo = ss.getSheets()[1];
 * sheetToClonePermissionsTo.setSheetProtection(permissions);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#setSheetProtection
 * @deprecated
 * 
 * @param {SpreadsheetApp.PageProtection} permissions - The access permissions object to set on this sheet.
 * 
 * @return void
 */


/**
 * Sets the spreadsheet locale.
 * 
 * @function SpreadsheetApp.Spreadsheet#setSpreadsheetLocale
 * 
 * @param {String} locale - The locale code to use (e.g., 'en', 'fr', 'en_US').
 * 
 * @return void
 */


/**
 * Sets the time zone for the spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#setSpreadsheetTimeZone
 * 
 * @param {String} timezone - The time zone, specified in "long" format (for example, "America/New_York", as
 *     listed by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>).
 * 
 * @return void
 */


/**
 * Displays a custom user interface component in a dialog centered in the user's browser's
 * viewport. The server-side script's execution is <em>not</em> suspended. To communicate with the
 * server side, the user interface component must make asynchronous callbacks to the server-side
 * script.
 * 
 * <p>If the server-side script previously displayed a dialog that has not yet been dismissed,
 * then the existing dialog is replaced with the newly requested dialog's user interface.
 * 
 * <p>The following code snippet displays a simple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../html/html-service.html'>HtmlService</a></code> application in a dialog with the
 * specified title, height, and width:
 * 
 * <pre class="prettyprint"><code>
 * var htmlApp = HtmlService
 *     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
 *     .setTitle(&#39;My HtmlService Application&#39;)
 *     .setWidth(250)
 *     .setHeight(300);
 * 
 * SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);
 * 
 * // The script resumes execution immediately after showing the dialog.
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#show
 * 
 * @param {Object} userInterface - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../html/html-output.html'>HtmlOutput</a></code> or
 *     <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../ui/ui-instance.html'>UiInstance</a></s></code> web app.
 * 
 * @return void
 */


/**
 * Sorts a sheet by column, ascending.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sorts the sheet by the first column, ascending
 * sheet.sort(1);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#sort
 * 
 * @param {IntegerNum} columnPosition - The column to sort by.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Sorts a sheet by column. Takes a parameter to specify ascending or descending.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // Sorts the sheet by the first column, descending
 * sheet.sort(1, false);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#sort
 * 
 * @param {IntegerNum} columnPosition - The column to sort by.
 * @param {Boolean} ascending - <code>true</code> for ascending sorts, <code>false</code> for descending.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet, useful for method chaining
 */


/**
 * Shows a popup window in the lower right corner of the spreadsheet with the given message.
 * 
 * <pre class="prettyprint"><code>
 * // Show a popup with the message &quot;Task started&quot;.
 * SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#toast
 * 
 * @param {String} msg - The message to be shown in the toast.
 * 
 * @return void
 */


/**
 * Shows a popup window in the lower right corner of the spreadsheet with the given message and
 * title.
 * 
 * <pre class="prettyprint"><code>
 * // Show a popup with the title &quot;Status&quot; and the message &quot;Task started&quot;.
 * SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;, &#39;Status&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#toast
 * 
 * @param {String} msg - The message to be shown in the toast.
 * @param {String} title - The optional title of the toast.
 * 
 * @return void
 */


/**
 * Shows a popup window in the lower right corner of the spreadsheet with the given title and
 * message, that stays visible for a certain length of time.
 * 
 * <pre class="prettyprint"><code>
 * // Show a 3-second popup with the title &quot;Status&quot; and the message &quot;Task started&quot;.
 * SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;, &#39;Status&#39;, 3);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#toast
 * 
 * @param {String} msg - The message to be shown in the toast.
 * @param {String} title - The optional title of the toast.
 * @param {Number} timeoutSeconds - The timeout in seconds; if <code>null</code>, the toast defaults to 5 seconds;
 *     if negative, the toast remains until dismissed.
 * 
 * @return void
 */


/**
 * Unhides the column in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This unhides the first column if it was previously hidden
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.unhideColumn(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#unhideColumn
 * 
 * @param {SpreadsheetApp.Range} column - The range to unhide, if hidden.
 * 
 * @return void
 */


/**
 * Unhides the row in the given range.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var sheet = ss.getSheets()[0];
 * 
 * // This unhides the first row if it was previously hidden
 * var range = sheet.getRange(&quot;A1&quot;);
 * sheet.unhideRow(range);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#unhideRow
 * 
 * @param {SpreadsheetApp.Range} row - The range to unhide, if hidden.
 * 
 * @return void
 */


/**
 * Updates a menu that was added by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>. Works exactly like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var ss = SpreadsheetApp.getActiveSpreadsheet();
 * var menuEntries = [];
 * menuEntries.push({name: &quot;Lone Menu Entry&quot;, functionName: &quot;function1&quot;});
 * ss.updateMenu(&quot;addMenuExample&quot;, menuEntries);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#updateMenu
 * 
 * @param {String} name - The name of the menu to update.
 * @param {Object[]} subMenus - An array of JavaScript maps with <code>name</code> and <code>functionName
 *     </code> parameters. You can use functions from included libraries, such as <code>
 *     Library.libFunction1</code>.
 * 
 * @return void
 */


/**
 * Creates a text finder for the spreadsheet, which can be used to find and replace text within
 * the spreadsheet. The search starts from the first sheet of the spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 * 
 * // Creates  a text finder.
 * var textFinder = spreadsheet.createTextFinder(&#39;dog&#39;);
 * 
 * // Returns the first occurrence of &#39;dog&#39; in the spreadsheet.
 * var firstOccurrence = textFinder.findNext();
 * 
 * // Replaces the last found occurrence of &#39;dog&#39; with &#39;cat&#39; and returns the number
 * // of occurrences replaced.
 * var numOccurrencesReplaced = findOccurrence.replaceWith(&#39;cat&#39;);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#createTextFinder
 * 
 * @param {String} findText - The text to search for.
 * 
 * @return {SpreadsheetApp.TextFinder} the <code>TextFinder</code> for the spreadsheet
 */


/**
 * Returns the threshold value used during iterative calculation. When the results of successive
 * calculation differ by less than this value, the iterative calculation stops.
 * 
 * @function SpreadsheetApp.Spreadsheet#getIterativeCalculationConvergenceThreshold
 * 
 * @return {Number} the convergence threshold
 */


/**
 * Returns the maximum number of iterations to use during iterative calculation.
 * 
 * @function SpreadsheetApp.Spreadsheet#getMaxIterativeCalculationCycles
 * 
 * @return {IntegerNum} the maximum number of calculation iterations
 */


/**
 * Returns the calculation interval for this spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#getRecalculationInterval
 * 
 * @return {SpreadsheetApp.RecalculationInterval} the calculation interval for this spreadsheet
 */


/**
 * Returns whether iterative calculation is enabled in this spreadsheet.
 * 
 * @function SpreadsheetApp.Spreadsheet#isIterativeCalculationEnabled
 * 
 * @return {Boolean} whether iterative calculation is enabled
 */


/**
 * Creates a new <code>SheetType.OBJECT</code> sheet and moves the provided chart to it. If the chart
 * is already on its own sheet, that sheet is returned without creating a new one.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.getActiveSheet();
 * var chart = sheet.newChart().setPosition(1, 1, 0, 0).build();
 * sheet.insertChart(chart);
 * var objectSheet = SpreadsheetApp.getActive().moveChartToObjectSheet(chart);
 * </code></pre>
 * 
 * @function SpreadsheetApp.Spreadsheet#moveChartToObjectSheet
 * 
 * @param {SpreadsheetApp.EmbeddedChart} chart - The chart to move.
 * 
 * @return {SpreadsheetApp.Sheet} the sheet that the chart is on
 */


/**
 * Sets the minimum threshold value for iterative calculation. When the results of successive
 * calculation differ by less than this value, the iterative calculation stops. This value must be
 * non-negative, and defaults to 0.05.
 * 
 * @function SpreadsheetApp.Spreadsheet#setIterativeCalculationConvergenceThreshold
 * 
 * @param {Number} minThreshold - the minimum convergence threshold (must be non-negative).
 * 
 * @return {SpreadsheetApp.Spreadsheet} this spreadsheet, for chaining
 */


/**
 * Sets whether iterative calculation is enabled in this spreadsheet. If the maximum number of
 * calculation cycles and convergence threshold have not previously been set when the calculation
 * is enabled, they default to 50 and 0.05 respectively. If either has been set previously, they
 * retain their previous values.
 * 
 * @function SpreadsheetApp.Spreadsheet#setIterativeCalculationEnabled
 * 
 * @param {Boolean} isEnabled - whether iterative calculation is enabled.
 * 
 * @return {SpreadsheetApp.Spreadsheet} this spreadsheet, for chaining
 */


/**
 * Sets the maximum number of calculation iterations that should be performed during iterative
 * calculation. This value must be between 1 and 10,000 (inclusive), and defaults to 50.
 * 
 * @function SpreadsheetApp.Spreadsheet#setMaxIterativeCalculationCycles
 * 
 * @param {IntegerNum} maxIterations - the maximum number of calculation iterations (between 1 and 10,000).
 * 
 * @return {SpreadsheetApp.Spreadsheet} this spreadsheet, for chaining
 */


/**
 * Sets how often this spreadsheet should recalculate.
 * 
 * @function SpreadsheetApp.Spreadsheet#setRecalculationInterval
 * 
 * @param {SpreadsheetApp.RecalculationInterval} recalculationInterval - the new recalculation interval
 * 
 * @return {SpreadsheetApp.Spreadsheet} this spreadsheet, for chaining
 */



/**
 * @class SpreadsheetApp.TextDirection
 */

/**
 * Left-to-right text direction.
 * 
 * @typedef {SpreadsheetApp.TextDirection} SpreadsheetApp.TextDirection.LEFT_TO_RIGHT
 */
/**
 * Right-to-left text direction.
 * 
 * @typedef {SpreadsheetApp.TextDirection} SpreadsheetApp.TextDirection.RIGHT_TO_LEFT
 */

/**
 * @class SpreadsheetApp.TextRotation
 */

/**
 * Gets the angle between standard text orientation and the current text orientation. For
 * left-to-right text, positive angles are in the counterclockwise direction. If the text is set
 * to stack vertically, this method returns <code>0</code>.
 * 
 * @function SpreadsheetApp.TextRotation#getDegrees
 * 
 * @return {IntegerNum} The degrees between standard text rotation and the current text rotation.
 */


/**
 * Returns <code>true</code> if the text is stacked vertically; returns <code>false</code> otherwise.
 * 
 * @function SpreadsheetApp.TextRotation#isVertical
 * 
 * @return {Boolean} Whether or not the text is stacked vertically.
 */



/**
 * @class SpreadsheetApp.TextStyle
 */

/**
 * Creates a text style builder initialized with the values of this text style.
 * 
 * @function SpreadsheetApp.TextStyle#copy
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} A builder from this text style.
 */


/**
 * Gets the font family of the text. Returns <code>null</code> if the font family isn't set or the
 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
 * families.
 * 
 * @function SpreadsheetApp.TextStyle#getFontFamily
 * 
 * @return {String} The font family of the text (for example, "Arial") or <code>null</code>.
 */


/**
 * Gets the font size of the text in points. Returns <code>null</code> if the font size isn't set or
 * the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
 * sizes.
 * 
 * @function SpreadsheetApp.TextStyle#getFontSize
 * 
 * @return {IntegerNum} The font size of the text or <code>null</code>.
 */


/**
 * Gets the font color of the text. Returns <code>null</code> if the font color isn't set or the
 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
 * colors.
 * 
 * @function SpreadsheetApp.TextStyle#getForegroundColor
 * 
 * @return {String} The font color of the text as a hex CSS value (for example, "#ff0000") or <code>null</code>.
 */


/**
 * Gets whether or not the text is bold. Returns <code>null</code> if bold isn't set or the
 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different bold
 * settings.
 * 
 * @function SpreadsheetApp.TextStyle#isBold
 * 
 * @return {Boolean} Whether or not the cell is bold, or <code>null</code>.
 */


/**
 * Gets whether or not the cell is italic. Returns <code>null</code> if italic isn't set or the
 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different italic
 * settings.
 * 
 * @function SpreadsheetApp.TextStyle#isItalic
 * 
 * @return {Boolean} Whether or not the cell is italic, or <code>null</code>.
 */


/**
 * Gets whether or not the cell has strikethrough. Returns <code>null</code> if strikethrough isn't set
 * or the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different
 * strikethrough settings.
 * 
 * @function SpreadsheetApp.TextStyle#isStrikethrough
 * 
 * @return {Boolean} Whether or not the cell has strikethrough, or <code>null</code>.
 */


/**
 * Gets whether or not the cell is underlined. Returns <code>null</code> if underline isn't set or the
 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different underline
 * settings.
 * 
 * @function SpreadsheetApp.TextStyle#isUnderline
 * 
 * @return {Boolean} Whether or not the cell is underlined, or <code>null</code>.
 */



/**
 * @class SpreadsheetApp.TextStyleBuilder
 */

/**
 * Creates a text style from this builder.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#build
 * 
 * @return {SpreadsheetApp.TextStyle} A text style created from this builder.
 */


/**
 * Sets whether or not the text is bold.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setBold
 * 
 * @param {Boolean} bold - Whether or not the text is bold.
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */


/**
 * Sets the text font family, such as "Arial".
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setFontFamily
 * 
 * @param {String} fontFamily - The desired font family.
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */


/**
 * Sets the text font size in points.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setFontSize
 * 
 * @param {IntegerNum} fontSize - The desired font size.
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */


/**
 * Sets the text font color.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setForegroundColor
 * 
 * @param {String} cssString - The desired font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */


/**
 * Sets whether or not the text is italic.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setItalic
 * 
 * @param {Boolean} italic - Whether or not the text is italic.
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */


/**
 * Sets whether or not the text has strikethrough.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setStrikethrough
 * 
 * @param {Boolean} strikethrough - Whether or not the text has strikethrough.
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */


/**
 * Sets whether or not the text is underlined.
 * 
 * @function SpreadsheetApp.TextStyleBuilder#setUnderline
 * 
 * @param {Boolean} underline - Whether or not the text is underlined.
 * 
 * @return {SpreadsheetApp.TextStyleBuilder} The builder for chaining.
 */



/**
 * @class SpreadsheetApp.TextToColumnsDelimiter
 */

/**
 * <code>&quot;,&quot;</code> delimiter.
 * 
 * @typedef {SpreadsheetApp.TextToColumnsDelimiter} SpreadsheetApp.TextToColumnsDelimiter.COMMA
 */
/**
 * <code>&quot;.&quot;</code> delimiter.
 * 
 * @typedef {SpreadsheetApp.TextToColumnsDelimiter} SpreadsheetApp.TextToColumnsDelimiter.PERIOD
 */
/**
 * <code>&quot;;&quot;</code> delimiter.
 * 
 * @typedef {SpreadsheetApp.TextToColumnsDelimiter} SpreadsheetApp.TextToColumnsDelimiter.SEMICOLON
 */
/**
 * <code>&quot; &quot;</code> delimiter.
 * 
 * @typedef {SpreadsheetApp.TextToColumnsDelimiter} SpreadsheetApp.TextToColumnsDelimiter.SPACE
 */

/**
 * @class SpreadsheetApp.WrapStrategy
 */

/**
 * Clip lines that are longer than the cell width.
 * 
 * @typedef {SpreadsheetApp.WrapStrategy} SpreadsheetApp.WrapStrategy.CLIP
 */
/**
 * Overflow lines into the next cell, so long as that cell is empty. If the next cell over is
 * non-empty, this behaves the same as <code>CLIP</code>.
 * 
 * @typedef {SpreadsheetApp.WrapStrategy} SpreadsheetApp.WrapStrategy.OVERFLOW
 */
/**
 * Wrap lines that are longer than the cell width onto a new line. Single words that are longer
 * than a line are wrapped at the character level.
 * 
 * @typedef {SpreadsheetApp.WrapStrategy} SpreadsheetApp.WrapStrategy.WRAP
 */

/**
 * @class SpreadsheetApp.RecalculationInterval
 */

/**
 * Recalculate when values are changed, and every hour.
 * 
 * @typedef {SpreadsheetApp.RecalculationInterval} SpreadsheetApp.RecalculationInterval.HOUR
 */
/**
 * Recalculate when values are changed, and every minute.
 * 
 * @typedef {SpreadsheetApp.RecalculationInterval} SpreadsheetApp.RecalculationInterval.MINUTE
 */
/**
 * Recalculate only when values are changed.
 * 
 * @typedef {SpreadsheetApp.RecalculationInterval} SpreadsheetApp.RecalculationInterval.ON_CHANGE
 */

/**
 * @class SpreadsheetApp.SheetType
 */

/**
 * A sheet containing a grid. This is the default type.
 * 
 * @typedef {SpreadsheetApp.SheetType} SpreadsheetApp.SheetType.GRID
 */
/**
 * A sheet containing a single embedded object such as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code>.
 * 
 * @typedef {SpreadsheetApp.SheetType} SpreadsheetApp.SheetType.OBJECT
 */

/**
 * @class SpreadsheetApp.TextFinder
 */

/**
 * Returns all cells matching the search criteria.
 * 
 * @function SpreadsheetApp.TextFinder#findAll
 * 
 * @return {SpreadsheetApp.Range[]} all the matching cells
 */


/**
 * Returns the next cell matching the search criteria.
 * 
 * @function SpreadsheetApp.TextFinder#findNext
 * 
 * @return {SpreadsheetApp.Range} the next matching cell, or {code null} if there are no previous matches
 */


/**
 * Returns the previous cell matching the search criteria.
 * 
 * @function SpreadsheetApp.TextFinder#findPrevious
 * 
 * @return {SpreadsheetApp.Range} the previous matching cell, or {code null} if there are no previous matches
 */


/**
 * Returns the current cell matching the search criteria.
 * 
 * @function SpreadsheetApp.TextFinder#getCurrentMatch
 * 
 * @return {SpreadsheetApp.Range} the current matching cell, or {code null} if there are no further matches
 */


/**
 * If <code>true</code>, configures the search to ignore diacritics while matching; otherwise the
 * search matches diacritics. A diacritic is a sign, such as an accent or cedilla, which when
 * written above or below a letter indicates a difference in pronunciation from the same letter
 * when unmarked or differently marked.
 * 
 * @function SpreadsheetApp.TextFinder#ignoreDiacritics
 * 
 * @param {Boolean} ignoreDiacritics - Whether the search considers diacritics.
 * 
 * @return {SpreadsheetApp.TextFinder} this text finder, for chaining
 */


/**
 * If <code>true</code>, configures the search to match the search text's case exactly, otherwise the
 * search defaults to case-insensitive matching.
 * 
 * @function SpreadsheetApp.TextFinder#matchCase
 * 
 * @param {Boolean} matchCase - Whether the matching is case-sensitive.
 * 
 * @return {SpreadsheetApp.TextFinder} this text finder, for chaining
 */


/**
 * If <code>true</code>, configures the search to match the entire contents of a cell; otherwise, the
 * search defaults to partial matching.
 * 
 * @function SpreadsheetApp.TextFinder#matchEntireCell
 * 
 * @param {Boolean} matchEntireCell - Whether the entire cell is matched.
 * 
 * @return {SpreadsheetApp.TextFinder} this text finder, for chaining
 */


/**
 * If <code>true</code>, configures the search to return matches that appear within formula text;
 * otherwise cells with formulas are considered based on their displayed value.
 * 
 * @function SpreadsheetApp.TextFinder#matchFormulaText
 * 
 * @param {Boolean} matchFormulaText - Whether the search examines formula text.
 * 
 * @return {SpreadsheetApp.TextFinder} this text finder, for chaining
 */


/**
 * Replaces all matches with the specified text. Returns the number of occurrences replaced, which
 * may be different from the number of matched cells.
 * 
 * @function SpreadsheetApp.TextFinder#replaceAllWith
 * 
 * @param {String} replaceText - The text that replaces the text in the matched cells.
 * 
 * @return {IntegerNum} the number of occurrences replaced
 */


/**
 * Replaces the search text in the currently matched cell with the specified text and returns the
 * number of occurrences replaced.
 * 
 * @function SpreadsheetApp.TextFinder#replaceWith
 * 
 * @param {String} replaceText - The text that replaces the content in the currently matched cell.
 * 
 * @return {IntegerNum} the number of occurrences replaced
 */


/**
 * Configures the search to start searching immediately after the specified cell range.
 * 
 * @function SpreadsheetApp.TextFinder#startFrom
 * 
 * @param {SpreadsheetApp.Range} startRange - The cell range after which the search should start.
 * 
 * @return {SpreadsheetApp.TextFinder} this text finder, for chaining
 */


/**
 * If <code>true</code>, configures the search to interpret the search string as a regular expression;
 * otherwise the search interprets the search string as normal text. For more details on how to
 * use regular expressions, refer to the <a
 * href="https://support.google.com/docs/answer/62754?p=spreadsheets_find_replace&visit_id=1-636603693162634183-3185740572&rd=1">
 * Find and replace support page.</a>
 * 
 * @function SpreadsheetApp.TextFinder#useRegularExpression
 * 
 * @param {Boolean} useRegEx - Whether to interpret the search string as a regular expression.
 * 
 * @return {SpreadsheetApp.TextFinder} this text finder, for chaining
 */



