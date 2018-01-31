var Charts = {};


/**
 * An enumeration of chart types supported by the Charts service.
 * 
 * @class Charts.ChartType
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.AREA
 * 
 * Area chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.BAR
 * 
 * Bar chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.COLUMN
 * 
 * Column chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.COMBO
 * 
 * Combo chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.HISTOGRAM
 * 
 * Histogram
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.LINE
 * 
 * Line chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.PIE
 * 
 * Pie chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.SCATTER
 * 
 * Scatter chart
 */

/**
 * @typedef {Charts.ChartType} Charts.ChartType.TABLE
 * 
 * Table chart
 */

/**
 * An enumeration of the valid data types for columns in a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/data-table.html'>DataTable</a></code>.
 * 
 * @class ColumnType
 */

/**
 * An enumeration of the styles for curves in a chart.
 * 
 * @class Charts.CurveStyle
 */

/**
 * @typedef {Charts.CurveStyle} Charts.CurveStyle.NORMAL
 * 
 * Straight lines without curve
 */

/**
 * @typedef {Charts.CurveStyle} Charts.CurveStyle.SMOOTH
 * 
 * The angles of the line will be smoothed
 */

/**
 * An enumeration of how a string value should be matched.
 * 
 * @class Charts.MatchType
 */

/**
 * @typedef {Charts.MatchType} Charts.MatchType.ANY
 * 
 * Match any substring
 */

/**
 * @typedef {Charts.MatchType} Charts.MatchType.EXACT
 * 
 * Match exact values only
 */

/**
 * @typedef {Charts.MatchType} Charts.MatchType.PREFIX
 * 
 * Match prefixes starting from the beginning of the value
 */

/**
 * An enumeration of the orientation of an object.
 * 
 * @class Charts.Orientation
 */

/**
 * @typedef {Charts.Orientation} Charts.Orientation.HORIZONTAL
 * 
 * Horizontal orientation
 */

/**
 * @typedef {Charts.Orientation} Charts.Orientation.VERTICAL
 * 
 * Vertical orientation
 */

/**
 * An enumeration of how to display selected values in a picker widget.
 * 
 * @class Charts.PickerValuesLayout
 */

/**
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.ASIDE
 * 
 * Selected values will display in a single text line next to the value picker widget
 */

/**
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW
 * 
 * Selected values will display in a single text line below the widget
 */

/**
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW_STACKED
 * 
 * Selected values will be displayed in a column below the widget
 */

/**
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW_WRAPPING
 * 
 * Similar to below, but entries that cannot fit in the picker will wrap to a new line
 */

/**
 * An enumeration of the styles of points in a line.
 * 
 * @class Charts.PointStyle
 */

/**
 * @typedef {Charts.PointStyle} Charts.PointStyle.HUGE
 * 
 * Use largest sized line points *
 */

/**
 * @typedef {Charts.PointStyle} Charts.PointStyle.LARGE
 * 
 * Use large sized line points *
 */

/**
 * @typedef {Charts.PointStyle} Charts.PointStyle.MEDIUM
 * 
 * Use medium sized line points *
 */

/**
 * @typedef {Charts.PointStyle} Charts.PointStyle.NONE
 * 
 * Do not display line points *
 */

/**
 * @typedef {Charts.PointStyle} Charts.PointStyle.TINY
 * 
 * Use tiny line points *
 */

/**
 * An enumeration of legend positions within a chart.
 * 
 * @class Charts.Position
 */

/**
 * @typedef {Charts.Position} Charts.Position.BOTTOM
 * 
 * Below the chart.
 */

/**
 * @typedef {Charts.Position} Charts.Position.NONE
 * 
 * No legend is displayed.
 */

/**
 * @typedef {Charts.Position} Charts.Position.RIGHT
 * 
 * To the right of the chart.
 */

/**
 * @typedef {Charts.Position} Charts.Position.TOP
 * 
 * Above the chart.
 */

/**
 * Starts building an area chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/areachart">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.AreaChartBuilder} an AreaChartBuilder, which can be used to build an area chart
 */
Charts.newAreaChart = function(){};

/**
 * Starts building a bar chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/barchart">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.BarChartBuilder} a BarChartBuilder, which can be used to build a bar chart
 */
Charts.newBarChart = function(){};

/**
 * Starts building a category filter control, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/controls#categoryfilter">
 Google Chart Tools</a> documentation.
 *
 * @return {Charts.CategoryFilterBuilder} a CategoryFilterBuilder, which can be used to build a category filter
 */
Charts.newCategoryFilter = function(){};

/**
 * Starts building a column chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/columnchart">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.ColumnChartBuilder} a ColumnChartBuilder, which can be used to build a column chart
 */
Charts.newColumnChart = function(){};

/**
 * Starts building a dashboard panel, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/controls#dashboardobject">
 Google Chart Tools</a> documentation.
 *
 * @return {Charts.DashboardPanelBuilder} a DashboardPanelBuilder, which can be used to build a dashboard panel
 */
Charts.newDashboardPanel = function(){};

/**
 * Creates an empty data table, which can have its values set manually.

 <p>Data tables hold the data for all chart types.
 *
 * @return {DataTableBuilder} a DataTableBuilder, which can hold data for charts
 */
Charts.newDataTable = function(){};

/**
 * Creates a new data view definition.

 <p>Use setters to define the different properties of the data view.
 *
 * @return {Charts.DataViewDefinitionBuilder} a DataViewDefinitionBuilder, which can be used to build a data view definition
 */
Charts.newDataViewDefinition = function(){};

/**
 * Starts building a line chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/linechart">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.LineChartBuilder} a LineChartBuilder, which can be used to build a line chart
 */
Charts.newLineChart = function(){};

/**
 * Starts building a number range filter control, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/controls#numberrangefilter">
 Google Chart Tools</a> documentation.
 *
 * @return {Charts.NumberRangeFilterBuilder} a NumberRangeFilterBuilder, which can be used to build a number range filter
 */
Charts.newNumberRangeFilter = function(){};

/**
 * Starts building a pie chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/piechart">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.PieChartBuilder} a PieChartBuilder, which can be used to build a pie chart
 */
Charts.newPieChart = function(){};

/**
 * Starts building a scatter chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/scatterchart">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.ScatterChartBuilder} a ScatterChartBuilder, which can be used to build a scatter chart
 */
Charts.newScatterChart = function(){};

/**
 * Starts building a string filter control, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/controls#stringfilter">
 Google Chart Tools</a> documentation.
 *
 * @return {Charts.StringFilterBuilder} a StringFilterBuilder, which can be used to build a string filter
 */
Charts.newStringFilter = function(){};

/**
 * Starts building a table chart, as described in the <a
 href="https://developers.google.com/chart/interactive/docs/gallery/table">Google Chart
 Tools</a> documentation.
 *
 * @return {Charts.TableChartBuilder} a TableChartBuilder, which can be used to build a table chart
 */
Charts.newTableChart = function(){};

/**
 * Creates a new text style builder.

 <p>To change the default values, use the setter functions.
 *
 * @return {Charts.TextStyleBuilder} a TextStyleBuilder, which can be used to build a text style configuration object
 */
Charts.newTextStyle = function(){};

/** @constructor */
Charts.AreaChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.AreaChartBuilder.prototype.build = function(){};

/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left. For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 bottom. For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint"><code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
     in the array represents the color of the nth line in the chart.
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/areachart">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build an area chart with a 1-second animation duration.
 var builder = Charts.newAreaChart();
 builder.setOption(&#39;animation.duration&#39;, 1000);
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the style for points in the line. By default, points will have no particular styles, and
 only the line will be visible.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets large point style.
 var builder = Charts.newLineChart();
 builder.setPointStyle(Charts.PointStyle.LARGE);
 </code></pre>
 *
 * @param {Charts.PointStyle} style - the style to use for points in the line
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setPointStyle = function(style){};

/**
 * Sets the range for the chart.

 <p>If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setRange = function(start, end){};

/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 there is no stacking.
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setStacked = function(){};

/**
 * Sets the title of the chart. The title will be displayed centered above the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
     created by calling Charts.newTextStyle().
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 the value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */
Charts.AreaChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
Charts.BarChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.BarChartBuilder.prototype.build = function(){};

/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left. For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 bottom. For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint"><code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.reverseCategories = function(){};

/**
 * Reverses the direction in which the bars grow along the horizontal axis. By default, values
 grow from left to right. Calling this method will cause them to grow from right to left.
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.reverseDirection = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
     in the array represents the color of the nth line in the chart.
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/barchart">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build a bar chart with a 1-second animation duration.
 var builder = Charts.newBarChart();
 builder.setOption(&#39;animation.duration&#39;, 1000);
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the range for the chart.

 <p>If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setRange = function(start, end){};

/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 there is no stacking.
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setStacked = function(){};

/**
 * Sets the title of the chart. The title will be displayed centered above the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
     created by calling Charts.newTextStyle().
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 the value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */
Charts.BarChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
Charts.CategoryFilterBuilder = function(){};

/**
 * Builds a control.
 *
 * @return {Charts.Control} a control object, that can be used as a UI element
 */
Charts.CategoryFilterBuilder.prototype.build = function(){};

/**
 * Sets whether multiple values can be selected, rather than just one. The default value of this
 option is true (allowing multiple selection).

 <pre class="prettyprint"><code>
 // Creates a category filter and disallows multiple value selection.
 var builder = Charts.newCategoryFilter().setAllowMultiple(false);
 </code></pre>
 *
 * @param {Boolean} allowMultiple - if false, the user will not be able to select multiple values
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setAllowMultiple = function(allowMultiple){};

/**
 * Sets whether the user is allowed not to choose any value. If false the user must choose at
 least one value from the available ones. The default value of this option is true.

 <pre class="prettyprint"><code>
 // Creates a category filter and force the user to choose at least one value.
 var builder = Charts.newCategoryFilter().setAllowNone(false);
 </code></pre>
 *
 * @param {Boolean} allowNone - if false, the user must choose at least one value
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setAllowNone = function(allowNone){};

/**
 * Sets whether the user is allowed to type in a text field to narrow down the list of possible
 choices (via an autocompleter), or not. The default value of this option is true (allowing the
 user to type in values in the picker).

 <pre class="prettyprint"><code>
 // Creates a category filter and disallows the user from typing in text to filter the values,
 // so the user must use the drop down to pick values.
 var builder = Charts.newCategoryFilter().setAllowTyping(false);
 </code></pre>
 *
 * @param {Boolean} allowTyping - if false, the user will not be allowed to type in a text field to narrow
     down the list of possible choices
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setAllowTyping = function(allowTyping){};

/**
 * Sets the caption to display inside the value picker widget when no item is selected.

 <pre class="prettyprint"><code>
 // Creates a category filter with a caption.
 var builder = Charts.newCategoryFilter().setCaption(&#39;select a value&#39;);
 </code></pre>
 *
 * @param {String} caption - the caption to display inside the value picker widget when no item is selected
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setCaption = function(caption){};

/**
 * Sets the data table to use for the control using a DataTableBuilder.

 <p>This is a convenience method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/category-filter-builder.html#build()'>build()</a></code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the control.
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the control data table, which will be the control's underlying data model.
 *
 * @param {DataTableSource} table - the data table to use for the control
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the index of the data table column to filter on.

 <p>The values of that column will determine whether or not each row should be filtered. It is
 mandatory to set either this or the column label using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/category-filter-builder.html#setFilterColumnLabel(String)'>setFilterColumnLabel(columnLabel)</a></code>.
 *
 * @param {number} columnIndex - the index of the data table column the filter should operate upon
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex){};

/**
 * Sets the label of the data table column to filter on.

 <p>The values of that column will determine whether or not each row should be filtered. It is
 mandatory to set either this or a column index using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/category-filter-builder.html#setFilterColumnIndex(Integer)'>setFilterColumnIndex(columnIndex)</a></code>.
 *
 * @param {String} columnLabel - the label of the column to filter on
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel){};

/**
 * Sets the label to display next to the slider.

 <p>If unspecified, the label of the column the control operates on will be used.
 *
 * @param {String} label - the label to display next to the slider
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setLabel = function(label){};

/**
 * Sets a separator string appended to the label, to visually separate the label from the category
 picker.
 *
 * @param {String} labelSeparator - the string to use to separate the label from the category picker
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setLabelSeparator = function(labelSeparator){};

/**
 * Sets whether the label should display above (vertical stacking) or beside (horizontal stacking)
 the input field.
 *
 * @param {Charts.Orientation} orientation - the orientation of the stacking
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setLabelStacking = function(orientation){};

/**
 * Sets how to display selected values, when multiple selection is allowed.

 <pre class="prettyprint"><code>
 // Creates a category filter and sets it to display selected values below the picker.
 var builder = Charts.newCategoryFilter()
     .setSelectedValuesLayout(Charts.PickerValuesLayout.BELOW);
 </code></pre>
 *
 * @param {Charts.PickerValuesLayout} layout - the layout in which to display the selected values
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setSelectedValuesLayout = function(layout){};

/**
 * Sets whether the values to choose from should be sorted.

 <pre class="prettyprint"><code>
 // Creates a category filter that sorts the values.
 var builder = Charts.newCategoryFilter().setSortValues(true);
 </code></pre>
 *
 * @param {Boolean} sortValues - if true, sorts the values displayed in the widget alphabetically
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setSortValues = function(sortValues){};

/**
 * Sets the list of values (categories) the user can choose from.

 <pre class="prettyprint"><code>
 // Creates a category filter with two choices.
 var builder = Charts.newCategoryFilter().setValues([&#39;choice 1&#39;,&#39;choice 2&#39;]);
 </code></pre>
 *
 * @param {String[]} values - list of values the user can choose from
 *
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */
Charts.CategoryFilterBuilder.prototype.setValues = function(values){};

/** @constructor */
Charts.Chart = function(){};

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename — for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" will become
 "ChristmasList.12.25.pdf".
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
     valid.
 *
 * @return {Blob} the data as a blob
 */
Charts.Chart.prototype.getAs = function(contentType){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
Charts.Chart.prototype.getBlob = function(){};

/**
 * Returns the id that has been assigned to this object.

 <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 object.
 *
 * @return {String} the id that has been assigned to this object
 */
Charts.Chart.prototype.getId = function(){};

/**
 * Returns the options for this chart, such as height, colors, axes, etc.

 <p>The returned options are immutable.
 *
 * @return {Charts.ChartOptions} the options for this chart, such as height, colors, axes, etc.
 */
Charts.Chart.prototype.getOptions = function(){};

/**
 * Gets the type of this object.
 *
 * @return {String} the object type
 */
Charts.Chart.prototype.getType = function(){};

/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/chart.html'>Chart</a></code> to be used with UiApp.
 *
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/chart.html'>Chart</a></code> from
     app.getElementById(id).
 *
 * @return {Charts.Chart} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/chart.html'>Chart</a></code> itself, useful for chaining.
 */
Charts.Chart.prototype.setId = function(id){};

/** @constructor */
Charts.ChartOptions = function(){};

/**
 * Returns a configured option for this chart.
 *
 * @param {String} option - string representing the desired option
 *
 * @return {Object} the value currently set for the specified option or null if the option was not set
 */
Charts.ChartOptions.prototype.get = function(option){};

/** @constructor */
Charts.ColumnChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.ColumnChartBuilder.prototype.build = function(){};

/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left. For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 bottom. For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint"><code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
     in the array represents the color of the nth line in the chart.
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/columnchart">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build a column chart with a 1-second animation duration.
 var builder = Charts.newColumnChart();
 builder.setOption(&#39;animation.duration&#39;, 1000);
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the range for the chart.

 <p>If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setRange = function(start, end){};

/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 there is no stacking.
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setStacked = function(){};

/**
 * Sets the title of the chart. The title will be displayed centered above the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
     created by calling Charts.newTextStyle().
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 the value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */
Charts.ColumnChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
Charts.Control = function(){};

/**
 * Returns the id that has been assigned to this object.

 <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 object.
 *
 * @return {String} the id that has been assigned to this object
 */
Charts.Control.prototype.getId = function(){};

/**
 * Gets the type of this object.
 *
 * @return {String} the object type
 */
Charts.Control.prototype.getType = function(){};

/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/control.html'>Control</a></code> to be used with UiApp.
 *
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/control.html'>Control</a></code> from
     app.getElementById(id).
 *
 * @return {Charts.Control} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/control.html'>Control</a></code> itself, useful for chaining.
 */
Charts.Control.prototype.setId = function(id){};

/** @constructor */
Charts.DashboardPanel = function(){};

/**
 * Add a widget to the DashboardPanel.

 <p>The DashboardPanel is a simple panel which contains a single widget in it. A good practice
 for building a dashboard to place all of its components (the charts and controls that are bound
 in it) in a complex panel (vertical or horizontal panel for example), and to add that panel to
 it.
 *
 * @param {UiApp.Widget} widget - the widget to add
 *
 * @return {Charts.DashboardPanel} the DashboardPanel itself, useful for chaining.
 */
Charts.DashboardPanel.prototype.add = function(widget){};

/**
 * Returns the id that has been assigned to this object.

 <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 object.
 *
 * @return {String} the id that has been assigned to this object
 */
Charts.DashboardPanel.prototype.getId = function(){};

/**
 * Gets the type of this object.
 *
 * @return {String} the object type
 */
Charts.DashboardPanel.prototype.getType = function(){};

/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel.html'>DashboardPanel</a></code> to be used with UiApp.
 *
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel.html'>DashboardPanel</a></code> from
     app.getElementById(id).
 *
 * @return {Charts.DashboardPanel} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel.html'>DashboardPanel</a></code> itself, useful for chaining.
 */
Charts.DashboardPanel.prototype.setId = function(id){};

/** @constructor */
Charts.DashboardPanelBuilder = function(){};

/**
 * Builds a dashboard.
 *
 * @return {Charts.DashboardPanel} a control object, that can be used as a UI element
 */
Charts.DashboardPanelBuilder.prototype.build = function(){};

/**
 * Sets the data table to use for the dashboard using a DataTableBuilder. This is a convenience
 method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel-builder.html#build()'>build()</a></code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the dashboard.
 *
 * @return {Charts.DashboardPanelBuilder} this builder, useful for chaining
 */
Charts.DashboardPanelBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the dashboard's data table, which will be the control's underlying data model.
 *
 * @param {DataTableSource} source - the data source to use for the dashboard
 *
 * @return {Charts.DashboardPanelBuilder} this builder, useful for chaining
 */
Charts.DashboardPanelBuilder.prototype.setDataTable = function(source){};

/** @constructor */
Charts.DataViewDefinition = function(){};

/** @constructor */
Charts.DataViewDefinitionBuilder = function(){};

/**
 * Builds and returns the data view definition object that was built using this builder.
 *
 * @return {Charts.DataViewDefinition} a data view definition object that was built using this builder
 */
Charts.DataViewDefinitionBuilder.prototype.build = function(){};

/**
 * Sets the indexes of the columns to include in the data view as well as specifying role-column
 information. This subset of column indexes refer to the columns of the data source that the
 data view will be derived from.

 <p>A column role describes the purpose of the data in that column: for example, a column might
 hold data describing tooltip text, data point annotations, or uncertainty indicators. For more
 details, see <a href="/chart/interactive/docs/roles">DataTable Roles</a> in the Google Charts
 documentation.

 <p>Assuming a spreadsheet with the following data in A1:C3:

 <pre class="prettyprint">
   "abc", 20, "blue"
   "def", 30, "red"
   "ghi", 40, "orange"
 </pre>

 The following code creates a bar chart where each bar is a different color. The colors are
 assigned via a style "role column".

 <pre class="prettyprint"><code>
 var COLUMN_SPEC = [
   0, // categories
   1, // counts
   {sourceColumn: 2, role: &#39;style&#39;}
 ];

 function roleColumnChart() {
   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = spreadsheet.getActiveSheet();
   var viewSpec = Charts.newDataViewDefinition()
       .setColumns(COLUMN_SPEC)
       .build();
   var chartBuilder = sheet.newChart()
       .setChartType(Charts.ChartType.BAR)
       .setDataViewDefinition(viewSpec)
       .setOption(&#39;useFirstColumnAsDomain&#39;, true)
       .setPosition(5, 1, 0, 0)
       .setOption(&#39;hAxis&#39;, { title: &#39;Counts&#39; })
       .setOption(&#39;vAxis&#39;, { title: &#39;Categories&#39; })
       .addRange(sheet.getRange(&#39;A1:C3&#39;));
   sheet.insertChart(chartBuilder.build());
 };
 </code></pre>
 *
 * @param {Object[]} columns - an array of column indexes, or column descriptions (an object), to include in
     the data view. The column descriptions define a column role. The data table and the
     enumeration for data view columns are zero-based.
 *
 * @return {Charts.DataViewDefinitionBuilder} this builder, useful for chaining
 */
Charts.DataViewDefinitionBuilder.prototype.setColumns = function(columns){};

/** @constructor */
Charts.LineChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.LineChartBuilder.prototype.build = function(){};

/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left. For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 bottom. For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint"><code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
     in the array represents the color of the nth line in the chart.
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the style to use for curves in the chart. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/curve-style.html'>CurveStyle</a></code> for allowed curve
 styles.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and curves the lines in the chart.
 var builder = Charts.newLineChart();
 builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
 </code></pre>
 *
 * @param {Charts.CurveStyle} style - the style for curves in the chart
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setCurveStyle = function(style){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/linechart">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build a line chart with a 1-second animation duration.
 var builder = Charts.newLineChart();
 builder.setOption(&#39;animation.duration&#39;, 1000);
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the style for points in the line. By default, points will have no particular styles, and
 only the line will be visible.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets large point style.
 var builder = Charts.newLineChart();
 builder.setPointStyle(Charts.PointStyle.LARGE);
 </code></pre>
 *
 * @param {Charts.PointStyle} style - the style to use for points in the line
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setPointStyle = function(style){};

/**
 * Sets the range for the chart.

 <p>If any data points fall outside the range, the range will be expanded to include those data
 points.
 *
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setRange = function(start, end){};

/**
 * Sets the title of the chart. The title will be displayed centered above the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
     created by calling Charts.newTextStyle().
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 the value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 horizontal axis for horizontal charts (bar, etc.)
 *
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */
Charts.LineChartBuilder.prototype.useLogScale = function(){};

/** @constructor */
Charts.NumberRangeFilterBuilder = function(){};

/**
 * Builds a control.
 *
 * @return {Charts.Control} a control object, that can be used as a UI element
 */
Charts.NumberRangeFilterBuilder.prototype.build = function(){};

/**
 * Sets the data table to use for the control using a DataTableBuilder.

 <p>This is a convenience method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/number-range-filter-builder.html#build()'>build()</a></code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the control.
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the control data table, which will be the control's underlying data model.
 *
 * @param {DataTableSource} table - the data table to use for the control
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the index of the data table column to filter on.

 <p>The values of that column will determine whether or not each row should be filtered. It is
 mandatory to set either this or the column label using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/number-range-filter-builder.html#setFilterColumnLabel(String)'>setFilterColumnLabel(columnLabel)</a></code>.
 *
 * @param {number} columnIndex - the index of the data table column the filter should operate upon
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex){};

/**
 * Sets the label of the data table column to filter on.

 <p>The values of that column will determine whether or not each row should be filtered. It is
 mandatory to set either this or a column index using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/number-range-filter-builder.html#setFilterColumnIndex(Integer)'>setFilterColumnIndex(columnIndex)</a></code>.
 *
 * @param {String} columnLabel - the label of the column to filter on
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel){};

/**
 * Sets the label to display next to the slider.

 <p>If unspecified, the label of the column the control operates on will be used.
 *
 * @param {String} label - the label to display next to the slider
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setLabel = function(label){};

/**
 * Sets a separator string appended to the label, to visually separate the label from the category
 picker.
 *
 * @param {String} labelSeparator - the string to use to separate the label from the category picker
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setLabelSeparator = function(labelSeparator){};

/**
 * Sets whether the label should display above (vertical stacking) or beside (horizontal stacking)
 the input field.
 *
 * @param {Charts.Orientation} orientation - the orientation of the stacking
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setLabelStacking = function(orientation){};

/**
 * Sets the maximum allowed value for the range lower extent. If undefined, the value will be
 inferred from the contents of the DataTable managed by the control.

 <pre class="prettyprint"><code>
 // Builds a number range filter and sets the maximum value to 100.
 var numberRangeFilter = Charts.newNumberRangeFilter()
   .setFilterColumnLabel(&quot;Col2&quot;)
   .setMaxValue(100)
   .build();
 </code></pre>
 *
 * @param {number} maxValue - the maximum value of the slider
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setMaxValue = function(maxValue){};

/**
 * Sets the minimum allowed value for the range lower extent. If undefined, the value will be
 inferred from the contents of the DataTable managed by the control.

 <pre class="prettyprint"><code>
 // Builds a number range filter and sets the minimum value to 10.
 var numberRangeFilter = Charts.newNumberRangeFilter()
   .setFilterColumnLabel(&quot;Col2&quot;)
   .setMinValue(10)
   .build();
 </code></pre>
 *
 * @param {number} minValue - the minimum value of the slider
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setMinValue = function(minValue){};

/**
 * Sets the slider orientation.

 <pre class="prettyprint"><code>
 // Builds a number range filter and sets it to have a horizontal orientation.
 var numberRangeFilter = Charts.newNumberRangeFilter()
   .setFilterColumnLabel(&quot;Col2&quot;)
   .setOrientation(Charts.Orientation.HORIZONTAL)
   .build();
 </code></pre>
 *
 * @param {Charts.Orientation} orientation - the slider orientation
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setOrientation = function(orientation){};

/**
 * Sets whether to have labels next to the slider displaying extents of the selected range.

 <pre class="prettyprint"><code>
 // Builds a number range filter and enables showing of the number range values.
 var numberRangeFilter = Charts.newNumberRangeFilter()
   .setFilterColumnLabel(&quot;Col2&quot;)
   .setShowRangeValues(true)
   .build();
 </code></pre>
 *
 * @param {Boolean} showRangeValues - if true, enables showing of labels next to the slider
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setShowRangeValues = function(showRangeValues){};

/**
 * Sets the number of ticks (fixed positions in a range bar) a number range filter slider thumbs
 can fall in.

 <pre class="prettyprint"><code>
 // Builds a number range filter and sets the number of ticks for the range to 10.
 var numberRangeFilter = Charts.newNumberRangeFilter()
   .setFilterColumnLabel(&quot;Col2&quot;)
   .setTicks(10)
   .build();
 </code></pre>
 *
 * @param {number} ticks - the number of ticks on the slider
 *
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */
Charts.NumberRangeFilterBuilder.prototype.setTicks = function(ticks){};

/** @constructor */
Charts.PieChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.PieChartBuilder.prototype.build = function(){};

/**
 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
 area or column charts), this means the horizontal axis is drawn from right to left. For
 horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
 bottom. For pie charts, this means the slices are drawn counterclockwise.

 <pre class="prettyprint"><code>
 // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
 var builder = Charts.newPieChart();
 builder.reverseCategories();
 </code></pre>
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.reverseCategories = function(){};

/**
 * Sets the chart to be three-dimensional.
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.set3D = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
     in the array represents the color of the nth line in the chart.
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/piechart">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build a pie chart with a pretty legend.
 var builder = Charts.newPieChart();
 builder.setOption(&#39;legend&#39;, {textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the title of the chart. The title will be displayed centered above the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
     created by calling Charts.newTextStyle().
 *
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */
Charts.PieChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/** @constructor */
Charts.ScatterChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.ScatterChartBuilder.prototype.build = function(){};

/**
 * Sets the background color for the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the background color to gray
 var builder = Charts.newLineChart();
 builder.setBackgroundColor(&quot;gray&quot;);
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setBackgroundColor = function(cssValue){};

/**
 * Sets the colors for the lines in the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the first two lines to be drawn in green and red,
 // respectively.
 var builder = Charts.newLineChart();
 builder.setColors([&quot;green&quot;, &quot;red&quot;]);
 </code></pre>
 *
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
     in the array represents the color of the nth line in the chart.
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setColors = function(cssValues){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the position of the legend with respect to the chart. By default, there will be no legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the legend position to right.
 var builder = Charts.newLineChart();
 builder.setLegendPosition(Charts.Position.RIGHT);
 </code></pre>
 *
 * @param {Charts.Position} position - the position of the legend
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setLegendPosition = function(position){};

/**
 * Sets the text style of the chart legend.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point legend.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setLegendTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setLegendTextStyle = function(textStyle){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/scatterchart">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build a scatter chart with a 1-second animation duration.
 var builder = Charts.newScatterChart();
 builder.setOption(&#39;animation.duration&#39;, 1000);
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets the style for points in the line. By default, points will have no particular styles, and
 only the line will be visible.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets large point style.
 var builder = Charts.newLineChart();
 builder.setPointStyle(Charts.PointStyle.LARGE);
 </code></pre>
 *
 * @param {Charts.PointStyle} style - the style to use for points in the line
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setPointStyle = function(style){};

/**
 * Sets the title of the chart. The title will be displayed centered above the chart.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and title to &#39;My Line Chart&#39;.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;My Line Chart&#39;)
 </code></pre>
 *
 * @param {String} chartTitle - the chart title.
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setTitle = function(chartTitle){};

/**
 * Sets the text style of the chart title.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets it up for a  blue, 26-point title.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 var builder = Charts.newLineChart();
 builder.setTitleTextStyle(style);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
     created by calling Charts.newTextStyle().
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setTitleTextStyle = function(textStyle){};

/**
 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setXAxisLogScale = function(){};

/**
 * Sets the range for the horizontal axis of the chart.

 <p>If any data points fall outside the range, the range will be expanded to include those data
 points.

 <pre class="prettyprint"><code>
 // Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
 var builder = Charts.newTableChart();
 builder.setXAxisRange(0, 100);
 </code></pre>
 *
 * @param {Number} start - value for the lowest grid line of the horizontal axis
 * @param {Number} end - value for the highest grid line of the horizontal axis
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setXAxisRange = function(start, end){};

/**
 * Sets the horizontal axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setXAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the horizontal axis. The title will be centered and will appear below the axis
 value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title.
 var builder = Charts.newLineChart();
 builder.setTitle(&#39;X-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the X-axis
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setXAxisTitle = function(title){};

/**
 * Sets the horizontal axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setXAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setXAxisTitleTextStyle = function(textStyle){};

/**
 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setYAxisLogScale = function(){};

/**
 * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
 the range will be expanded to include those data points.

 <pre class="prettyprint"><code>
 // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
 var builder = Charts.newTableChart();
 builder.setYAxisRange(0, 100);
 </code></pre>
 *
 * @param {Number} start - value for the lowest grid line of the vertical axis
 * @param {Number} end - value for the highest grid line of the vertical axis
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setYAxisRange = function(start, end){};

/**
 * Sets the vertical axis text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setYAxisTextStyle = function(textStyle){};

/**
 * Adds a title to the vertical axis. The title will be centered and will appear to the left of
 the value labels.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title.
 var builder = Charts.newLineChart();
 builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 </code></pre>
 *
 * @param {String} title - the title for the Y-axis
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setYAxisTitle = function(title){};

/**
 * Sets the vertical axis title text style.

 <pre class="prettyprint"><code>
 // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
 var builder = Charts.newLineChart();
 builder.setYAxisTitleTextStyle(textStyle);
 </code></pre>
 *
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
     can be created by calling Charts.newTextStyle().
 *
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */
Charts.ScatterChartBuilder.prototype.setYAxisTitleTextStyle = function(textStyle){};

/** @constructor */
Charts.StringFilterBuilder = function(){};

/**
 * Builds a control.
 *
 * @return {Charts.Control} a control object, that can be used as a UI element
 */
Charts.StringFilterBuilder.prototype.build = function(){};

/**
 * Sets whether matching should be case sensitive or not.

 <pre class="prettyprint"><code>
 // Builds a case insensitive string filter to filter column &quot;Col1&quot;.
 var stringFilter = Charts.newStringFilter()
   .setFilterColumnLabel(&quot;Col1&quot;)
   .setCaseSensitive(false)
   .build();
 </code></pre>
 *
 * @param {Boolean} caseSensitive - if true, enables string matching case sensitivity
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setCaseSensitive = function(caseSensitive){};

/**
 * Sets the data table to use for the control using a DataTableBuilder.

 <p>This is a convenience method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/string-filter-builder.html#build()'>build()</a></code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the control.
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the control data table, which will be the control's underlying data model.
 *
 * @param {DataTableSource} table - the data table to use for the control
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the index of the data table column to filter on.

 <p>The values of that column will determine whether or not each row should be filtered. It is
 mandatory to set either this or the column label using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/string-filter-builder.html#setFilterColumnLabel(String)'>setFilterColumnLabel(columnLabel)</a></code>.
 *
 * @param {number} columnIndex - the index of the data table column the filter should operate upon
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setFilterColumnIndex = function(columnIndex){};

/**
 * Sets the label of the data table column to filter on.

 <p>The values of that column will determine whether or not each row should be filtered. It is
 mandatory to set either this or a column index using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/string-filter-builder.html#setFilterColumnIndex(Integer)'>setFilterColumnIndex(columnIndex)</a></code>.
 *
 * @param {String} columnLabel - the label of the column to filter on
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setFilterColumnLabel = function(columnLabel){};

/**
 * Sets the label to display next to the slider.

 <p>If unspecified, the label of the column the control operates on will be used.
 *
 * @param {String} label - the label to display next to the slider
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setLabel = function(label){};

/**
 * Sets a separator string appended to the label, to visually separate the label from the category
 picker.
 *
 * @param {String} labelSeparator - the string to use to separate the label from the category picker
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setLabelSeparator = function(labelSeparator){};

/**
 * Sets whether the label should display above (vertical stacking) or beside (horizontal stacking)
 the input field.
 *
 * @param {Charts.Orientation} orientation - the orientation of the stacking
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setLabelStacking = function(orientation){};

/**
 * Sets whether the control should match exact values only (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#EXACT'>MatchType.EXACT</a></code>), prefixes
 starting from the beginning of the value (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#PREFIX'>MatchType.PREFIX</a></code>), or any substring
 (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#ANY'>MatchType.ANY</a></code>).

 <pre class="prettyprint"><code>
 // Builds a string filter to filter column &quot;Col1&quot; matching the prefix.
 var stringFilter = Charts.newStringFilter()
   .setFilterColumnLabel(&quot;Col1&quot;)
   .setMatchType(Charts.MatchType.PREFIX)
   .build();
 </code></pre>
 *
 * @param {Charts.MatchType} matchType - the string matching type
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setMatchType = function(matchType){};

/**
 * Sets whether the control should match any time a key is pressed or only when the input field
 'changes' (loss of focus or pressing the Enter key).

 <pre class="prettyprint"><code>
 // Builds a string filter to filter column &quot;Col1&quot; that checks the match any time a key is
 // pressed.
 var stringFilter = Charts.newStringFilter()
   .setFilterColumnLabel(&quot;Col1&quot;)
   .setRealtimeTrigger(true)
   .build();
 </code></pre>
 *
 * @param {Boolean} realtimeTrigger - if true, sets events to be triggered at real time (when a key is
     pressed)
 *
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */
Charts.StringFilterBuilder.prototype.setRealtimeTrigger = function(realtimeTrigger){};

/** @constructor */
Charts.TableChartBuilder = function(){};

/**
 * Builds the chart.
 *
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
     image
 */
Charts.TableChartBuilder.prototype.build = function(){};

/**
 * Sets whether to enable paging through the data.

 <p>The default behavior is paging disabled. If paging is enabled the default page size is 10.
 *
 * @param {Boolean} enablePaging - true if paging should be enabled, false otherwise
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.enablePaging = function(enablePaging){};

/**
 * Enables paging and sets the number of rows in each page.

 <p>The default page size is 10.

 <pre class="prettyprint"><code>
 // Creates a table chart builder and enables paging with page size of 5.
 var builder = Charts.newTableChart();
 builder.enablePaging(5);
 </code></pre>
 *
 * @param {number} pageSize - the number of rows in each page of the table
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.enablePaging = function(pageSize){};

/**
 * Enables paging, sets the number of rows in each page and the first table page to display (page
 numbers are zero based).

 <p>The default page size is 10, and the default start page is 0.

 <pre class="prettyprint"><code>
 // Creates a table chart builder and enables paging with page size of 5 and displays page 2
 // first.
 var builder = Charts.newTableChart();
 builder.enablePaging(5, 2);
 </code></pre>
 *
 * @param {number} pageSize - the number of rows in each page of the table
 * @param {number} startPage - the first table page to display (page numbers are zero based)
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.enablePaging = function(pageSize, startPage){};

/**
 * Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the
 column order of the table, so that column zero is the right-most column, and the last column is
 the left-most column.

 <p>This does not affect the column index in the underlying data, only the order of display.
 Full bi-directional (BiDi) language display is not supported by the table visualization even
 with this option. This option will be ignored if you enable paging (using the page option), or
 if the table has scroll bars because you have specified height and width options smaller than
 the required table size. The default behavior is RTL support disabled.
 *
 * @param {Boolean} rtlEnabled - true if right-to-left support should be enabled, false otherwise
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.enableRtlTable = function(rtlEnabled){};

/**
 * Sets whether to sort columns when the user clicks a column heading.

 <p>If sorting is enabled, when users click on the column header the rows will be automatically
 sorted. The default behavior is sorting enabled.
 *
 * @param {Boolean} enableSorting - true if to enable sorting by clicking on column headers, false otherwise
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.enableSorting = function(enableSorting){};

/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 ignored.

 <p>For more information about querying data sources, check out the <a
 href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 *
 * @param {String} url - the data source URL, including any query parameters
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setDataSourceUrl = function(url){};

/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 for setting the data table without needing to call <code>build()</code>.
 *
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
     this call, so any further updates to the builder won't be reflected in the chart.
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setDataTable = function(tableBuilder){};

/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 first column should be a string, and contain the horizontal axis labels. Any number of columns
 can follow, all must be numeric. Each column is displayed as a separate line.
 *
 * @param {DataTableSource} table - the data table to use for the chart
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setDataTable = function(table){};

/**
 * Sets the data view definition to use for the chart.
 *
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
     derived from the given data source for the chart drawing
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setDataViewDefinition = function(dataViewDefinition){};

/**
 * Sets the dimensions for the chart.
 *
 * @param {number} width - the width of the chart, in pixels
 * @param {number} height - the height of the chart, in pixels
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setDimensions = function(width, height){};

/**
 * Sets the row number for the first row in the data table.

 <p>The default row number of the first row is 1.

 <pre class="prettyprint"><code>
 // Creates a table chart builder and sets the first row to be 2.
 var builder = Charts.newTableChart();
 builder.setFirstRowNumber(2);
 </code></pre>
 *
 * @param {number} number - the row number for the first row in the data table
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setFirstRowNumber = function(number){};

/**
 * Sets the index of the column according to which the table should be initially sorted
 (ascending).

 <p>The column will be sorted in ascending order and will be marked with a small arrow
 indicating that.

 <pre class="prettyprint"><code>
 // Creates a table chart builder and sorts it by the second column (ascending).
 var builder = Charts.newTableChart();
 builder.setInitialSortingAscending(2);
 </code></pre>
 *
 * @param {number} column - the number of the column according to which the table should be initially sorted
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setInitialSortingAscending = function(column){};

/**
 * Sets the index of the column according to which the table should be initially sorted
 (descending).

 <p>The column will be sorted in descending order and be marked with a a small arrow indicating
 that.

 <pre class="prettyprint"><code>
 // Creates a table chart builder and sorts it by the second column (descending).
 var builder = Charts.newTableChart();
 builder.setInitialSortingDescending(2);
 </code></pre>
 *
 * @param {number} column - the number of the column according to which the table should be initially sorted
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setInitialSortingDescending = function(column){};

/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/table">the available options for
 this chart</a>. This method has no effect if the given option is invalid.

 <pre class="prettyprint"><code>
 // Build a table chart which renders HTML.
 var builder = Charts.newTableChart();
 builder.setOption(&#39;allowHtml&#39;, true);
 var chart = builder.build();
 </code></pre>
 *
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.setOption = function(option, value){};

/**
 * Sets whether to show the row number as the first column of the table.

 <p>The default behavior is not showing row numbers.
 *
 * @param {Boolean} showRowNumber - true if the first column of the table should show the row number, false
     otherwise
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.showRowNumberColumn = function(showRowNumber){};

/**
 * Sets whether alternating color style will be assigned to odd and even rows of a table chart.

 <p>The default behavior is the rows having alternating color style.
 *
 * @param {Boolean} alternate - true if color styles should be alternating, false otherwise
 *
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */
Charts.TableChartBuilder.prototype.useAlternatingRowStyle = function(alternate){};

/** @constructor */
Charts.TextStyle = function(){};

/**
 * Gets the color of the text style.

 <pre class="prettyprint"><code>
 // Creates a new text style that uses blue text and logs the color.
 var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).build();
 Logger.log(textStyle.getColor());
 </code></pre>
 *
 * @return {String} the CSS value for the color (such as "blue" or "#00f")
 */
Charts.TextStyle.prototype.getColor = function(){};

/**
 * Gets the font name of the text style.

 <pre class="prettyprint"><code>
 // Creates a new text style that uses Ariel font and logs the font name.
 var textStyle = Charts.newTextStyle().setFontName(&#39;Ariel&#39;).build();
 Logger.log(textStyle.getFontName());
 </code></pre>
 *
 * @return {String} the font name
 */
Charts.TextStyle.prototype.getFontName = function(){};

/**
 * Gets the font size of the text style.

 <pre class="prettyprint"><code>
 // Creates a new text style that uses 18 pixel font size and logs the font size.
 var textStyle = Charts.newTextStyle().setFontSize(18).build();
 Logger.log(textStyle.getFontSize());
 </code></pre>
 *
 * @return {Number} the font size in pixels
 */
Charts.TextStyle.prototype.getFontSize = function(){};

/** @constructor */
Charts.TextStyleBuilder = function(){};

/**
 * Builds and returns a text style configuration object that was built using this builder.

 <pre class="prettyprint"><code>
 // Creates a new text style that uses 26-point blue font.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 var style = textStyleBuilder.build();
 </code></pre>
 *
 * @return {Charts.TextStyle} a TextStyle object built using this builder
 */
Charts.TextStyleBuilder.prototype.build = function(){};

/**
 * Sets the color of the text style.

 <pre class="prettyprint"><code>
 // Creates a new text style that uses blue font.
 var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;);
 var style = textStyleBuilder.build();
 </code></pre>
 *
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f").
 *
 * @return {Charts.TextStyleBuilder} this builder, useful for chaining.
 */
Charts.TextStyleBuilder.prototype.setColor = function(cssValue){};

/**
 * Sets the font name of the text style

 <pre class="prettyprint"><code>
 // Creates a new text style that uses Ariel font.
 var textStyleBuilder = Charts.newTextStyle().setFontName(&#39;Ariel&#39;);
 var style = textStyleBuilder.build();
 </code></pre>
 *
 * @param {String} fontName - the font name to use for the text style
 *
 * @return {Charts.TextStyleBuilder} this builder, useful for chaining.
 */
Charts.TextStyleBuilder.prototype.setFontName = function(fontName){};

/**
 * Sets the font size of the text style.

 <pre class="prettyprint"><code>
 // Creates a new text style that uses 26-point font.
 var textStyleBuilder = Charts.newTextStyle().setFontSize(26);
 var style = textStyleBuilder.build();
 </code></pre>
 *
 * @param {Number} fontSize - the font size in pixels to use for the text style
 *
 * @return {Charts.TextStyleBuilder} this builder, useful for chaining.
 */
Charts.TextStyleBuilder.prototype.setFontSize = function(fontSize){};

