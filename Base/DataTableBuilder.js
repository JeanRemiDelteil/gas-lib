var DataTableBuilder = {};


/**
 * Adds a column to the data table. Columns will be added from 0 to n.

 <p>The first column is often used by charts for labels (for instance, X-axis labels on line
 charts, or slice labels in pie charts). The other columns are often used for data and therefore
 often require numeric values.
 *
 * @param {ColumnType} type - type of data in the column (number, string, or date)
 * @param {String} label - label of the column (it's used for chart legends).
 *
 * @return {DataTableBuilder} this builder, for chaining.
 */
DataTableBuilder.addColumn = function(type, label){};

/**
 * Adds a row to the data table.
 *
 * @param {Object[]} values - values for the row, specified in the same order that the columns are entered.
 *
 * @return {DataTableBuilder} this builder, for chaining.
 */
DataTableBuilder.addRow = function(values){};

/**
 * Builds and returns a data table.
 *
 * @return {DataTable} the data table
 */
DataTableBuilder.build = function(){};

/**
 * Sets a specific value in the table.

 <p>You may set a value before adding the column to the data table. However, unless the column
 is added at some point, the value will be ignored.

 <p>Not all column values need to be filled in. Those missing will be considered <code>null</code>.
 *
 * @param {number} row - the row index (the first row has index 0)
 * @param {number} column - the column index (the first column has index 0)
 * @param {Object} value - the value of the table cell (should have the right type for the column).
 *
 * @return {DataTableBuilder} this builder, for chaining
 */
DataTableBuilder.setValue = function(row, column, value){};

