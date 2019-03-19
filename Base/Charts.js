/**********************************************
 * @namespace Charts
 ***********************************************/

/**
 * @class Charts
 */

/**
 * An enumeration of how hidden dimensions in a source are expressed in a chart.
 * 
 * @typedef {Charts.ChartHiddenDimensionStrategy} Charts.ChartHiddenDimensionStrategy
 */
/**
 * An enumeration of how multiple ranges in the source are expressed in a chart.
 * 
 * @typedef {Charts.ChartMergeStrategy} Charts.ChartMergeStrategy
 */
/**
 * An enumeration of chart types supported by the Charts service.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType
 */
/**
 * An enumeration of the valid data types for columns in a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/data-table.html'>DataTable</a></code>.
 * 
 * @typedef {ColumnType} Charts.ColumnType
 */
/**
 * An enumeration of the styles for curves in a chart.
 * 
 * @typedef {Charts.CurveStyle} Charts.CurveStyle
 */
/**
 * An enumeration of how a string value should be matched.
 * 
 * @typedef {Charts.MatchType} Charts.MatchType
 */
/**
 * An enumeration of the orientation of an object.
 * 
 * @typedef {Charts.Orientation} Charts.Orientation
 */
/**
 * An enumeration of how to display selected values in a picker widget.
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout
 */
/**
 * An enumeration of the styles of points in a line.
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle
 */
/**
 * An enumeration of legend positions within a chart.
 * 
 * @typedef {Charts.Position} Charts.Position
 */
/**
 * Starts building an area chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newAreaChart
 * 
 * @return {Charts.AreaChartBuilder} an AreaChartBuilder, which can be used to build an area chart
 */


/**
 * Starts building a bar chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/barchart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newBarChart
 * 
 * @return {Charts.BarChartBuilder} a BarChartBuilder, which can be used to build a bar chart
 */


/**
 * Starts building a category filter control, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/controls#categoryfilter">
 * Google Chart Tools</a> documentation.
 * 
 * @function Charts.newCategoryFilter
 * 
 * @return {Charts.CategoryFilterBuilder} a CategoryFilterBuilder, which can be used to build a category filter
 */


/**
 * Starts building a column chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/columnchart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newColumnChart
 * 
 * @return {Charts.ColumnChartBuilder} a ColumnChartBuilder, which can be used to build a column chart
 */


/**
 * Starts building a dashboard panel, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/controls#dashboardobject">
 * Google Chart Tools</a> documentation.
 * 
 * @function Charts.newDashboardPanel
 * 
 * @return {Charts.DashboardPanelBuilder} a DashboardPanelBuilder, which can be used to build a dashboard panel
 */


/**
 * Creates an empty data table, which can have its values set manually.
 * 
 * <p>Data tables hold the data for all chart types.
 * 
 * @function Charts.newDataTable
 * 
 * @return {DataTableBuilder} a DataTableBuilder, which can hold data for charts
 */


/**
 * Creates a new data view definition.
 * 
 * <p>Use setters to define the different properties of the data view.
 * 
 * @function Charts.newDataViewDefinition
 * 
 * @return {Charts.DataViewDefinitionBuilder} a DataViewDefinitionBuilder, which can be used to build a data view definition
 */


/**
 * Starts building a line chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/linechart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newLineChart
 * 
 * @return {Charts.LineChartBuilder} a LineChartBuilder, which can be used to build a line chart
 */


/**
 * Starts building a number range filter control, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/controls#numberrangefilter">
 * Google Chart Tools</a> documentation.
 * 
 * @function Charts.newNumberRangeFilter
 * 
 * @return {Charts.NumberRangeFilterBuilder} a NumberRangeFilterBuilder, which can be used to build a number range filter
 */


/**
 * Starts building a pie chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/piechart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newPieChart
 * 
 * @return {Charts.PieChartBuilder} a PieChartBuilder, which can be used to build a pie chart
 */


/**
 * Starts building a scatter chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/scatterchart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newScatterChart
 * 
 * @return {Charts.ScatterChartBuilder} a ScatterChartBuilder, which can be used to build a scatter chart
 */


/**
 * Starts building a string filter control, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/controls#stringfilter">
 * Google Chart Tools</a> documentation.
 * 
 * @function Charts.newStringFilter
 * 
 * @return {Charts.StringFilterBuilder} a StringFilterBuilder, which can be used to build a string filter
 */


/**
 * Starts building a table chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/table">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newTableChart
 * 
 * @return {Charts.TableChartBuilder} a TableChartBuilder, which can be used to build a table chart
 */


/**
 * Creates a new text style builder.
 * 
 * <p>To change the default values, use the setter functions.
 * 
 * @function Charts.newTextStyle
 * 
 * @return {Charts.TextStyleBuilder} a TextStyleBuilder, which can be used to build a text style configuration object
 */



/**
 * @class Charts.AreaChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.AreaChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
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
 * @function Charts.AreaChartBuilder#reverseCategories
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.AreaChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.AreaChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.AreaChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.AreaChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.AreaChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/areachart">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build an area chart with a 1-second animation duration.
 * var builder = Charts.newAreaChart();
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.AreaChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - the style to use for points in the line
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function Charts.AreaChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function Charts.AreaChartBuilder#setStacked
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
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
 * @function Charts.AreaChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function Charts.AreaChartBuilder#useLogScale
 * 
 * @return {Charts.AreaChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.BarChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.BarChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
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
 * @function Charts.BarChartBuilder#reverseCategories
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Reverses the direction in which the bars grow along the horizontal axis. By default, values
 * grow from left to right. Calling this method will cause them to grow from right to left.
 * 
 * @function Charts.BarChartBuilder#reverseDirection
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.BarChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.BarChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.BarChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.BarChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.BarChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/barchart">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a bar chart with a 1-second animation duration.
 * var builder = Charts.newBarChart();
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.BarChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function Charts.BarChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function Charts.BarChartBuilder#setStacked
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
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
 * @function Charts.BarChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function Charts.BarChartBuilder#useLogScale
 * 
 * @return {Charts.BarChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.CategoryFilterBuilder
 */

/**
 * Builds a control.
 * 
 * @function Charts.CategoryFilterBuilder#build
 * 
 * @return {Charts.Control} a control object, that can be used as a UI element
 */


/**
 * Sets whether multiple values can be selected, rather than just one. The default value of this
 * option is true (allowing multiple selection).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter and disallows multiple value selection.
 * var builder = Charts.newCategoryFilter().setAllowMultiple(false);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setAllowMultiple
 * 
 * @param {Boolean} allowMultiple - if false, the user will not be able to select multiple values
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the user is allowed not to choose any value. If false the user must choose at
 * least one value from the available ones. The default value of this option is true.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter and force the user to choose at least one value.
 * var builder = Charts.newCategoryFilter().setAllowNone(false);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setAllowNone
 * 
 * @param {Boolean} allowNone - if false, the user must choose at least one value
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the user is allowed to type in a text field to narrow down the list of possible
 * choices (via an autocompleter), or not. The default value of this option is true (allowing the
 * user to type in values in the picker).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter and disallows the user from typing in text to filter the values,
 * // so the user must use the drop down to pick values.
 * var builder = Charts.newCategoryFilter().setAllowTyping(false);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setAllowTyping
 * 
 * @param {Boolean} allowTyping - if false, the user will not be allowed to type in a text field to narrow
 *     down the list of possible choices
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the caption to display inside the value picker widget when no item is selected.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter with a caption.
 * var builder = Charts.newCategoryFilter().setCaption(&#39;select a value&#39;);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setCaption
 * 
 * @param {String} caption - the caption to display inside the value picker widget when no item is selected
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the control using a DataTableBuilder.
 * 
 * <p>This is a convenience method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/category-filter-builder.html#build()'>build()</a></code>.
 * 
 * @function Charts.CategoryFilterBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the control.
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the control data table, which will be the control's underlying data model.
 * 
 * @function Charts.CategoryFilterBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the control
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the index of the data table column to filter on.
 * 
 * <p>The values of that column will determine whether or not each row should be filtered. It is
 * mandatory to set either this or the column label using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/category-filter-builder.html#setFilterColumnLabel(String)'>setFilterColumnLabel(columnLabel)</a></code>.
 * 
 * @function Charts.CategoryFilterBuilder#setFilterColumnIndex
 * 
 * @param {IntegerNum} columnIndex - the index of the data table column the filter should operate upon
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the label of the data table column to filter on.
 * 
 * <p>The values of that column will determine whether or not each row should be filtered. It is
 * mandatory to set either this or a column index using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/category-filter-builder.html#setFilterColumnIndex(Integer)'>setFilterColumnIndex(columnIndex)</a></code>.
 * 
 * @function Charts.CategoryFilterBuilder#setFilterColumnLabel
 * 
 * @param {String} columnLabel - the label of the column to filter on
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the label to display next to the slider.
 * 
 * <p>If unspecified, the label of the column the control operates on will be used.
 * 
 * @function Charts.CategoryFilterBuilder#setLabel
 * 
 * @param {String} label - the label to display next to the slider
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets a separator string appended to the label, to visually separate the label from the category
 * picker.
 * 
 * @function Charts.CategoryFilterBuilder#setLabelSeparator
 * 
 * @param {String} labelSeparator - the string to use to separate the label from the category picker
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the label should display above (vertical stacking) or beside (horizontal stacking)
 * the input field.
 * 
 * @function Charts.CategoryFilterBuilder#setLabelStacking
 * 
 * @param {Charts.Orientation} orientation - the orientation of the stacking
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets how to display selected values, when multiple selection is allowed.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter and sets it to display selected values below the picker.
 * var builder = Charts.newCategoryFilter()
 *     .setSelectedValuesLayout(Charts.PickerValuesLayout.BELOW);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setSelectedValuesLayout
 * 
 * @param {Charts.PickerValuesLayout} layout - the layout in which to display the selected values
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the values to choose from should be sorted.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter that sorts the values.
 * var builder = Charts.newCategoryFilter().setSortValues(true);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setSortValues
 * 
 * @param {Boolean} sortValues - if true, sorts the values displayed in the widget alphabetically
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the list of values (categories) the user can choose from.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a category filter with two choices.
 * var builder = Charts.newCategoryFilter().setValues([&#39;choice 1&#39;,&#39;choice 2&#39;]);
 * </code></pre>
 * 
 * @function Charts.CategoryFilterBuilder#setValues
 * 
 * @param {String[]} values - list of values the user can choose from
 * 
 * @return {Charts.CategoryFilterBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.Chart
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function Charts.Chart#getAs
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
 * @function Charts.Chart#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Returns the id that has been assigned to this object.
 * 
 * <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 * object.
 * 
 * @function Charts.Chart#getId
 * 
 * @return {String} the id that has been assigned to this object
 */


/**
 * Returns the options for this chart, such as height, colors, axes, etc.
 * 
 * <p>The returned options are immutable.
 * 
 * @function Charts.Chart#getOptions
 * 
 * @return {Charts.ChartOptions} the options for this chart, such as height, colors, axes, etc.
 */


/**
 * Gets the type of this object.
 * 
 * @function Charts.Chart#getType
 * 
 * @return {String} the object type
 */


/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/chart.html'>Chart</a></code> to be used with UiApp.
 * 
 * @function Charts.Chart#setId
 * 
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/chart.html'>Chart</a></code> from
 *     app.getElementById(id).
 * 
 * @return {Charts.Chart} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/chart.html'>Chart</a></code> itself, useful for chaining.
 */



/**
 * @class Charts.ChartHiddenDimensionStrategy
 */

/**
 * Default; charts skips any hidden columns and hidden rows.
 * 
 * @typedef {Charts.ChartHiddenDimensionStrategy} Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH
 */
/**
 * Charts skips hidden columns only.
 * 
 * @typedef {Charts.ChartHiddenDimensionStrategy} Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS
 */
/**
 * Charts skips hidden rows only.
 * 
 * @typedef {Charts.ChartHiddenDimensionStrategy} Charts.ChartHiddenDimensionStrategy.IGNORE_ROWS
 */
/**
 * Charts does not skip hidden columns or hidden rows.
 * 
 * @typedef {Charts.ChartHiddenDimensionStrategy} Charts.ChartHiddenDimensionStrategy.SHOW_BOTH
 */

/**
 * @class Charts.ChartMergeStrategy
 */

/**
 * Default. Charts merges the columns of multiple ranges.
 * 
 * @typedef {Charts.ChartMergeStrategy} Charts.ChartMergeStrategy.MERGE_COLUMNS
 */
/**
 * Charts merges the rows of multiple ranges.
 * 
 * @typedef {Charts.ChartMergeStrategy} Charts.ChartMergeStrategy.MERGE_ROWS
 */

/**
 * @class Charts.ChartOptions
 */

/**
 * Returns a configured option for this chart.
 * 
 * @function Charts.ChartOptions#get
 * 
 * @param {String} option - string representing the desired option
 * 
 * @return {Object} the value currently set for the specified option or null if the option was not set
 */



/**
 * @class Charts.ChartType
 */

/**
 * Area chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.AREA
 */
/**
 * Bar chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.BAR
 */
/**
 * Bubble chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.BUBBLE
 */
/**
 * Candlestick chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.CANDLESTICK
 */
/**
 * Column chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.COLUMN
 */
/**
 * Combo chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.COMBO
 */
/**
 * Gauge chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.GAUGE
 */
/**
 * Geo chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.GEO
 */
/**
 * Histogram
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.HISTOGRAM
 */
/**
 * Line chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.LINE
 */
/**
 * Org chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.ORG
 */
/**
 * Pie chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.PIE
 */
/**
 * Radar chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.RADAR
 */
/**
 * Scatter chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.SCATTER
 */
/**
 * Sparkline chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.SPARKLINE
 */
/**
 * Stepped area chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.STEPPED_AREA
 */
/**
 * Table chart
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.TABLE
 */
/**
 * Timeline chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.TIMELINE
 */
/**
 * Treemap chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.TREEMAP
 */
/**
 * Waterfall chart.
 * 
 * @typedef {Charts.ChartType} Charts.ChartType.WATERFALL
 */

/**
 * @class Charts.ColumnChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.ColumnChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
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
 * @function Charts.ColumnChartBuilder#reverseCategories
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.ColumnChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.ColumnChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.ColumnChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.ColumnChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.ColumnChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/columnchart">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a column chart with a 1-second animation duration.
 * var builder = Charts.newColumnChart();
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.ColumnChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function Charts.ColumnChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function Charts.ColumnChartBuilder#setStacked
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
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
 * @function Charts.ColumnChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function Charts.ColumnChartBuilder#useLogScale
 * 
 * @return {Charts.ColumnChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.Control
 */

/**
 * Returns the id that has been assigned to this object.
 * 
 * <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 * object.
 * 
 * @function Charts.Control#getId
 * 
 * @return {String} the id that has been assigned to this object
 */


/**
 * Gets the type of this object.
 * 
 * @function Charts.Control#getType
 * 
 * @return {String} the object type
 */


/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/control.html'>Control</a></code> to be used with UiApp.
 * 
 * @function Charts.Control#setId
 * 
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/control.html'>Control</a></code> from
 *     app.getElementById(id).
 * 
 * @return {Charts.Control} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/control.html'>Control</a></code> itself, useful for chaining.
 */



/**
 * @class Charts.CurveStyle
 */

/**
 * Straight lines without curve
 * 
 * @typedef {Charts.CurveStyle} Charts.CurveStyle.NORMAL
 */
/**
 * The angles of the line will be smoothed
 * 
 * @typedef {Charts.CurveStyle} Charts.CurveStyle.SMOOTH
 */

/**
 * @class Charts.DashboardPanel
 */

/**
 * Add a widget to the DashboardPanel.
 * 
 * <p>The DashboardPanel is a simple panel which contains a single widget in it. A good practice
 * for building a dashboard to place all of its components (the charts and controls that are bound
 * in it) in a complex panel (vertical or horizontal panel for example), and to add that panel to
 * it.
 * 
 * @function Charts.DashboardPanel#add
 * @deprecated
 * 
 * @param {UiApp.Widget} widget - the widget to add
 * 
 * @return {Charts.DashboardPanel} the DashboardPanel itself, useful for chaining.
 */


/**
 * Returns the id that has been assigned to this object.
 * 
 * <p>This can be used in conjunction with app.getElementById() to retrieve a reference to this
 * object.
 * 
 * @function Charts.DashboardPanel#getId
 * 
 * @return {String} the id that has been assigned to this object
 */


/**
 * Gets the type of this object.
 * 
 * @function Charts.DashboardPanel#getType
 * 
 * @return {String} the object type
 */


/**
 * Sets the id of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel.html'>DashboardPanel</a></code> to be used with UiApp.
 * 
 * @function Charts.DashboardPanel#setId
 * 
 * @param {String} id - the new id, which can be used to retrieve the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel.html'>DashboardPanel</a></code> from
 *     app.getElementById(id).
 * 
 * @return {Charts.DashboardPanel} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel.html'>DashboardPanel</a></code> itself, useful for chaining.
 */



/**
 * @class Charts.DashboardPanelBuilder
 */

/**
 * Binds a control to a chart, so that the chart is redrawn whenever the control collects a user
 * interaction that affects the data managed by the dashboard.
 * 
 * <p>For example, when binding a range selector to a chart, a user interaction will be sliding
 * the the range selector to the desired range. The effect on the data will be keeping only the
 * data that's in the chosen range.
 * 
 * @function Charts.DashboardPanelBuilder#bind
 * 
 * @param {Charts.Control} control - a control to bind
 * @param {Charts.Chart} chart - a chart to bind
 * 
 * @return {Charts.DashboardPanelBuilder} this builder, useful for chaining
 */


/**
 * Binds multiple controls to multiple charts, so that the charts are redrawn whenever the
 * controls collect a user interaction that affects the data managed by the dashboard. When
 * binding multiple controls to a chart (or multiple charts), the data that's displayed in the
 * chart is that which passes the filters of all of the controls (of this specific binding).
 * 
 * <p>For more information about object binding see the Gviz <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/controls">documentation</a>.
 * 
 * @function Charts.DashboardPanelBuilder#bind
 * 
 * @param {Charts.Control[]} controls - an array of controls to bind
 * @param {Charts.Chart[]} charts - an array charts to bind
 * 
 * @return {Charts.DashboardPanelBuilder} this builder, useful for chaining
 */


/**
 * Builds a dashboard.
 * 
 * @function Charts.DashboardPanelBuilder#build
 * 
 * @return {Charts.DashboardPanel} a control object, that can be used as a UI element
 */


/**
 * Sets the data table to use for the dashboard using a DataTableBuilder. This is a convenience
 * method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/dashboard-panel-builder.html#build()'>build()</a></code>.
 * 
 * @function Charts.DashboardPanelBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the dashboard.
 * 
 * @return {Charts.DashboardPanelBuilder} this builder, useful for chaining
 */


/**
 * Sets the dashboard's data table, which will be the control's underlying data model.
 * 
 * @function Charts.DashboardPanelBuilder#setDataTable
 * 
 * @param {DataTableSource} source - the data source to use for the dashboard
 * 
 * @return {Charts.DashboardPanelBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.DataViewDefinition
 */


/**
 * @class Charts.DataViewDefinitionBuilder
 */

/**
 * Builds and returns the data view definition object that was built using this builder.
 * 
 * @function Charts.DataViewDefinitionBuilder#build
 * 
 * @return {Charts.DataViewDefinition} a data view definition object that was built using this builder
 */


/**
 * Sets the indexes of the columns to include in the data view as well as specifying role-column
 * information. This subset of column indexes refer to the columns of the data source that the
 * data view will be derived from.
 * 
 * <p>A column role describes the purpose of the data in that column: for example, a column might
 * hold data describing tooltip text, data point annotations, or uncertainty indicators. For more
 * details, see <a href="/chart/interactive/docs/roles">DataTable Roles</a> in the Google Charts
 * documentation.
 * 
 * <p>Assuming a spreadsheet with the following data in A1:C3:
 * 
 * <pre class="prettyprint">
 *   "abc", 20, "blue"
 *   "def", 30, "red"
 *   "ghi", 40, "orange"
 * </pre>
 * 
 * The following code creates a bar chart where each bar is a different color. The colors are
 * assigned via a style "role column".
 * 
 * <pre class="prettyprint"><code>
 * var COLUMN_SPEC = [
 *   0, // categories
 *   1, // counts
 *   {sourceColumn: 2, role: &#39;style&#39;}
 * ];
 * 
 * function roleColumnChart() {
 *   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
 *   var sheet = spreadsheet.getActiveSheet();
 *   var viewSpec = Charts.newDataViewDefinition()
 *       .setColumns(COLUMN_SPEC)
 *       .build();
 *   var chartBuilder = sheet.newChart()
 *       .setChartType(Charts.ChartType.BAR)
 *       .setDataViewDefinition(viewSpec)
 *       .setOption(&#39;useFirstColumnAsDomain&#39;, true)
 *       .setPosition(5, 1, 0, 0)
 *       .setOption(&#39;hAxis&#39;, { title: &#39;Counts&#39; })
 *       .setOption(&#39;vAxis&#39;, { title: &#39;Categories&#39; })
 *       .addRange(sheet.getRange(&#39;A1:C3&#39;));
 *   sheet.insertChart(chartBuilder.build());
 * };
 * </code></pre>
 * 
 * @function Charts.DataViewDefinitionBuilder#setColumns
 * 
 * @param {Object[]} columns - an array of column indexes, or column descriptions (an object), to include in
 *     the data view. The column descriptions define a column role. The data table and the
 *     enumeration for data view columns are zero-based.
 * 
 * @return {Charts.DataViewDefinitionBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.LineChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.LineChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
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
 * @function Charts.LineChartBuilder#reverseCategories
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the style to use for curves in the chart. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/curve-style.html'>CurveStyle</a></code> for allowed curve
 * styles.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and curves the lines in the chart.
 * var builder = Charts.newLineChart();
 * builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
 * </code></pre>
 * 
 * @function Charts.LineChartBuilder#setCurveStyle
 * 
 * @param {Charts.CurveStyle} style - the style for curves in the chart
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.LineChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.LineChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.LineChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.LineChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.LineChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/linechart">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a line chart with a 1-second animation duration.
 * var builder = Charts.newLineChart();
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.LineChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - the style to use for points in the line
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range will be expanded to include those data
 * points.
 * 
 * @function Charts.LineChartBuilder#setRange
 * 
 * @param {Number} start - value for the lowest grid line of the range axis
 * @param {Number} end - value for the highest grid line of the range axis
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
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
 * @function Charts.LineChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis will be the vertical axis for vertical charts (line, area, column, etc.) and the
 * horizontal axis for horizontal charts (bar, etc.)
 * 
 * @function Charts.LineChartBuilder#useLogScale
 * 
 * @return {Charts.LineChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.MatchType
 */

/**
 * Match any substring
 * 
 * @typedef {Charts.MatchType} Charts.MatchType.ANY
 */
/**
 * Match exact values only
 * 
 * @typedef {Charts.MatchType} Charts.MatchType.EXACT
 */
/**
 * Match prefixes starting from the beginning of the value
 * 
 * @typedef {Charts.MatchType} Charts.MatchType.PREFIX
 */
/**
 * Returns the name of the MatchType to be used in the options JSON.
 * 
 * @function Charts.MatchType#getName
 * 
 * @return {String} the name of the MatchType
 */



/**
 * @class Charts.NumberRangeFilterBuilder
 */

/**
 * Builds a control.
 * 
 * @function Charts.NumberRangeFilterBuilder#build
 * 
 * @return {Charts.Control} a control object, that can be used as a UI element
 */


/**
 * Sets the data table to use for the control using a DataTableBuilder.
 * 
 * <p>This is a convenience method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/number-range-filter-builder.html#build()'>build()</a></code>.
 * 
 * @function Charts.NumberRangeFilterBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the control.
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the control data table, which will be the control's underlying data model.
 * 
 * @function Charts.NumberRangeFilterBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the control
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the index of the data table column to filter on.
 * 
 * <p>The values of that column will determine whether or not each row should be filtered. It is
 * mandatory to set either this or the column label using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/number-range-filter-builder.html#setFilterColumnLabel(String)'>setFilterColumnLabel(columnLabel)</a></code>.
 * 
 * @function Charts.NumberRangeFilterBuilder#setFilterColumnIndex
 * 
 * @param {IntegerNum} columnIndex - the index of the data table column the filter should operate upon
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the label of the data table column to filter on.
 * 
 * <p>The values of that column will determine whether or not each row should be filtered. It is
 * mandatory to set either this or a column index using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/number-range-filter-builder.html#setFilterColumnIndex(Integer)'>setFilterColumnIndex(columnIndex)</a></code>.
 * 
 * @function Charts.NumberRangeFilterBuilder#setFilterColumnLabel
 * 
 * @param {String} columnLabel - the label of the column to filter on
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the label to display next to the slider.
 * 
 * <p>If unspecified, the label of the column the control operates on will be used.
 * 
 * @function Charts.NumberRangeFilterBuilder#setLabel
 * 
 * @param {String} label - the label to display next to the slider
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets a separator string appended to the label, to visually separate the label from the category
 * picker.
 * 
 * @function Charts.NumberRangeFilterBuilder#setLabelSeparator
 * 
 * @param {String} labelSeparator - the string to use to separate the label from the category picker
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the label should display above (vertical stacking) or beside (horizontal stacking)
 * the input field.
 * 
 * @function Charts.NumberRangeFilterBuilder#setLabelStacking
 * 
 * @param {Charts.Orientation} orientation - the orientation of the stacking
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the maximum allowed value for the range lower extent. If undefined, the value will be
 * inferred from the contents of the DataTable managed by the control.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a number range filter and sets the maximum value to 100.
 * var numberRangeFilter = Charts.newNumberRangeFilter()
 *   .setFilterColumnLabel(&quot;Col2&quot;)
 *   .setMaxValue(100)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.NumberRangeFilterBuilder#setMaxValue
 * 
 * @param {IntegerNum} maxValue - the maximum value of the slider
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the minimum allowed value for the range lower extent. If undefined, the value will be
 * inferred from the contents of the DataTable managed by the control.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a number range filter and sets the minimum value to 10.
 * var numberRangeFilter = Charts.newNumberRangeFilter()
 *   .setFilterColumnLabel(&quot;Col2&quot;)
 *   .setMinValue(10)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.NumberRangeFilterBuilder#setMinValue
 * 
 * @param {IntegerNum} minValue - the minimum value of the slider
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the slider orientation.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a number range filter and sets it to have a horizontal orientation.
 * var numberRangeFilter = Charts.newNumberRangeFilter()
 *   .setFilterColumnLabel(&quot;Col2&quot;)
 *   .setOrientation(Charts.Orientation.HORIZONTAL)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.NumberRangeFilterBuilder#setOrientation
 * 
 * @param {Charts.Orientation} orientation - the slider orientation
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether to have labels next to the slider displaying extents of the selected range.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a number range filter and enables showing of the number range values.
 * var numberRangeFilter = Charts.newNumberRangeFilter()
 *   .setFilterColumnLabel(&quot;Col2&quot;)
 *   .setShowRangeValues(true)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.NumberRangeFilterBuilder#setShowRangeValues
 * 
 * @param {Boolean} showRangeValues - if true, enables showing of labels next to the slider
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the number of ticks (fixed positions in a range bar) a number range filter slider thumbs
 * can fall in.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a number range filter and sets the number of ticks for the range to 10.
 * var numberRangeFilter = Charts.newNumberRangeFilter()
 *   .setFilterColumnLabel(&quot;Col2&quot;)
 *   .setTicks(10)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.NumberRangeFilterBuilder#setTicks
 * 
 * @param {IntegerNum} ticks - the number of ticks on the slider
 * 
 * @return {Charts.NumberRangeFilterBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.Orientation
 */

/**
 * Horizontal orientation
 * 
 * @typedef {Charts.Orientation} Charts.Orientation.HORIZONTAL
 */
/**
 * Vertical orientation
 * 
 * @typedef {Charts.Orientation} Charts.Orientation.VERTICAL
 */

/**
 * @class Charts.PickerValuesLayout
 */

/**
 * Selected values will display in a single text line next to the value picker widget
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.ASIDE
 */
/**
 * Selected values will display in a single text line below the widget
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW
 */
/**
 * Selected values will be displayed in a column below the widget
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW_STACKED
 */
/**
 * Similar to below, but entries that cannot fit in the picker will wrap to a new line
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW_WRAPPING
 */

/**
 * @class Charts.PieChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.PieChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
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
 * @function Charts.PieChartBuilder#reverseCategories
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the chart to be three-dimensional.
 * 
 * @function Charts.PieChartBuilder#set3D
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
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
 * @function Charts.PieChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
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
 * @function Charts.PieChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.PieChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.PieChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.PieChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.PieChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.PieChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
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
 * @function Charts.PieChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
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
 * @function Charts.PieChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/piechart">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a pie chart with a pretty legend.
 * var builder = Charts.newPieChart();
 * builder.setOption(&#39;legend&#39;, {textStyle: {color: &#39;blue&#39;, fontSize: 16}});
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.PieChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
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
 * @function Charts.PieChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
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
 * @function Charts.PieChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {Charts.PieChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.PointStyle
 */

/**
 * Use largest sized line points *
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.HUGE
 */
/**
 * Use large sized line points *
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.LARGE
 */
/**
 * Use medium sized line points *
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.MEDIUM
 */
/**
 * Do not display line points *
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.NONE
 */
/**
 * Use tiny line points *
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.TINY
 */

/**
 * @class Charts.Position
 */

/**
 * Below the chart.
 * 
 * @typedef {Charts.Position} Charts.Position.BOTTOM
 */
/**
 * No legend is displayed.
 * 
 * @typedef {Charts.Position} Charts.Position.NONE
 */
/**
 * To the right of the chart.
 * 
 * @typedef {Charts.Position} Charts.Position.RIGHT
 */
/**
 * Above the chart.
 * 
 * @typedef {Charts.Position} Charts.Position.TOP
 */

/**
 * @class Charts.ScatterChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.ScatterChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
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
 * @function Charts.ScatterChartBuilder#setBackgroundColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f")
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setColors
 * 
 * @param {String[]} cssValues - an array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.ScatterChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.ScatterChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.ScatterChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.ScatterChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.ScatterChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - the position of the legend
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setLegendTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart legend.
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/scatterchart">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a scatter chart with a 1-second animation duration.
 * var builder = Charts.newScatterChart();
 * builder.setOption(&#39;animation.duration&#39;, 1000);
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.ScatterChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - the style to use for points in the line
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setTitle
 * 
 * @param {String} chartTitle - the chart title.
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the chart title. TextStyleBuilder object can be
 *     created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
 * 
 * @function Charts.ScatterChartBuilder#setXAxisLogScale
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setXAxisRange
 * 
 * @param {Number} start - value for the lowest grid line of the horizontal axis
 * @param {Number} end - value for the highest grid line of the horizontal axis
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setXAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setXAxisTitle
 * 
 * @param {String} title - the title for the X-axis
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setXAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */


/**
 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
 * 
 * @function Charts.ScatterChartBuilder#setYAxisLogScale
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setYAxisRange
 * 
 * @param {Number} start - value for the lowest grid line of the vertical axis
 * @param {Number} end - value for the highest grid line of the vertical axis
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setYAxisTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setYAxisTitle
 * 
 * @param {String} title - the title for the Y-axis
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
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
 * @function Charts.ScatterChartBuilder#setYAxisTitleTextStyle
 * 
 * @param {Charts.TextStyle} textStyle - the text style to use for the horizontal axis title. TextStyleBuilder object
 *     can be created by calling Charts.newTextStyle().
 * 
 * @return {Charts.ScatterChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.StringFilterBuilder
 */

/**
 * Builds a control.
 * 
 * @function Charts.StringFilterBuilder#build
 * 
 * @return {Charts.Control} a control object, that can be used as a UI element
 */


/**
 * Sets whether matching should be case sensitive or not.
 * 
 * <pre class="prettyprint"><code>
 * // Builds a case insensitive string filter to filter column &quot;Col1&quot;.
 * var stringFilter = Charts.newStringFilter()
 *   .setFilterColumnLabel(&quot;Col1&quot;)
 *   .setCaseSensitive(false)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.StringFilterBuilder#setCaseSensitive
 * 
 * @param {Boolean} caseSensitive - if true, enables string matching case sensitivity
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the control using a DataTableBuilder.
 * 
 * <p>This is a convenience method for setting the data table without needing to call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/string-filter-builder.html#build()'>build()</a></code>.
 * 
 * @function Charts.StringFilterBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the control.
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the control data table, which will be the control's underlying data model.
 * 
 * @function Charts.StringFilterBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the control
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the index of the data table column to filter on.
 * 
 * <p>The values of that column will determine whether or not each row should be filtered. It is
 * mandatory to set either this or the column label using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/string-filter-builder.html#setFilterColumnLabel(String)'>setFilterColumnLabel(columnLabel)</a></code>.
 * 
 * @function Charts.StringFilterBuilder#setFilterColumnIndex
 * 
 * @param {IntegerNum} columnIndex - the index of the data table column the filter should operate upon
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the label of the data table column to filter on.
 * 
 * <p>The values of that column will determine whether or not each row should be filtered. It is
 * mandatory to set either this or a column index using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/string-filter-builder.html#setFilterColumnIndex(Integer)'>setFilterColumnIndex(columnIndex)</a></code>.
 * 
 * @function Charts.StringFilterBuilder#setFilterColumnLabel
 * 
 * @param {String} columnLabel - the label of the column to filter on
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets the label to display next to the slider.
 * 
 * <p>If unspecified, the label of the column the control operates on will be used.
 * 
 * @function Charts.StringFilterBuilder#setLabel
 * 
 * @param {String} label - the label to display next to the slider
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets a separator string appended to the label, to visually separate the label from the category
 * picker.
 * 
 * @function Charts.StringFilterBuilder#setLabelSeparator
 * 
 * @param {String} labelSeparator - the string to use to separate the label from the category picker
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the label should display above (vertical stacking) or beside (horizontal stacking)
 * the input field.
 * 
 * @function Charts.StringFilterBuilder#setLabelStacking
 * 
 * @param {Charts.Orientation} orientation - the orientation of the stacking
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the control should match exact values only (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#EXACT'>MatchType.EXACT</a></code>), prefixes
 * starting from the beginning of the value (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#PREFIX'>MatchType.PREFIX</a></code>), or any substring
 * (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#ANY'>MatchType.ANY</a></code>).
 * 
 * <pre class="prettyprint"><code>
 * // Builds a string filter to filter column &quot;Col1&quot; matching the prefix.
 * var stringFilter = Charts.newStringFilter()
 *   .setFilterColumnLabel(&quot;Col1&quot;)
 *   .setMatchType(Charts.MatchType.PREFIX)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.StringFilterBuilder#setMatchType
 * 
 * @param {Charts.MatchType} matchType - the string matching type
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */


/**
 * Sets whether the control should match any time a key is pressed or only when the input field
 * 'changes' (loss of focus or pressing the Enter key).
 * 
 * <pre class="prettyprint"><code>
 * // Builds a string filter to filter column &quot;Col1&quot; that checks the match any time a key is
 * // pressed.
 * var stringFilter = Charts.newStringFilter()
 *   .setFilterColumnLabel(&quot;Col1&quot;)
 *   .setRealtimeTrigger(true)
 *   .build();
 * </code></pre>
 * 
 * @function Charts.StringFilterBuilder#setRealtimeTrigger
 * 
 * @param {Boolean} realtimeTrigger - if true, sets events to be triggered at real time (when a key is
 *     pressed)
 * 
 * @return {Charts.StringFilterBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.TableChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.TableChartBuilder#build
 * 
 * @return {Charts.Chart} a Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image
 */


/**
 * Sets whether to enable paging through the data.
 * 
 * <p>The default behavior is paging disabled. If paging is enabled the default page size is 10.
 * 
 * @function Charts.TableChartBuilder#enablePaging
 * 
 * @param {Boolean} enablePaging - true if paging should be enabled, false otherwise
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
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
 * @function Charts.TableChartBuilder#enablePaging
 * 
 * @param {IntegerNum} pageSize - the number of rows in each page of the table
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
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
 * @function Charts.TableChartBuilder#enablePaging
 * 
 * @param {IntegerNum} pageSize - the number of rows in each page of the table
 * @param {IntegerNum} startPage - the first table page to display (page numbers are zero based)
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
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
 * @function Charts.TableChartBuilder#enableRtlTable
 * 
 * @param {Boolean} rtlEnabled - true if right-to-left support should be enabled, false otherwise
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether to sort columns when the user clicks a column heading.
 * 
 * <p>If sorting is enabled, when users click on the column header the rows will be automatically
 * sorted. The default behavior is sorting enabled.
 * 
 * @function Charts.TableChartBuilder#enableSorting
 * 
 * @param {Boolean} enableSorting - true if to enable sorting by clicking on column headers, false otherwise
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data source URL that will be used to pull data in from an external source, such as
 * Google Sheets. If a data source URL and a DataTable are provided, the data source URL is
 * ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.TableChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - the data source URL, including any query parameters
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.TableChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - a data table builder. A new data table will be created instantly as part of
 *     this call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.TableChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - the data table to use for the chart
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.TableChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - a data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.TableChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - the width of the chart, in pixels
 * @param {IntegerNum} height - the height of the chart, in pixels
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
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
 * @function Charts.TableChartBuilder#setFirstRowNumber
 * 
 * @param {IntegerNum} number - the row number for the first row in the data table
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
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
 * @function Charts.TableChartBuilder#setInitialSortingAscending
 * 
 * @param {IntegerNum} column - the number of the column according to which the table should be initially sorted
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
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
 * @function Charts.TableChartBuilder#setInitialSortingDescending
 * 
 * @param {IntegerNum} column - the number of the column according to which the table should be initially sorted
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/table">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a table chart which renders HTML.
 * var builder = Charts.newTableChart();
 * builder.setOption(&#39;allowHtml&#39;, true);
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.TableChartBuilder#setOption
 * 
 * @param {String} option - the option to set
 * @param {Object} value - the value to set
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether to show the row number as the first column of the table.
 * 
 * <p>The default behavior is not showing row numbers.
 * 
 * @function Charts.TableChartBuilder#showRowNumberColumn
 * 
 * @param {Boolean} showRowNumber - true if the first column of the table should show the row number, false
 *     otherwise
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */


/**
 * Sets whether alternating color style will be assigned to odd and even rows of a table chart.
 * 
 * <p>The default behavior is the rows having alternating color style.
 * 
 * @function Charts.TableChartBuilder#useAlternatingRowStyle
 * 
 * @param {Boolean} alternate - true if color styles should be alternating, false otherwise
 * 
 * @return {Charts.TableChartBuilder} this builder, useful for chaining
 */



/**
 * @class Charts.TextStyle
 */

/**
 * Gets the color of the text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses blue text and logs the color.
 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).build();
 * Logger.log(textStyle.getColor());
 * </code></pre>
 * 
 * @function Charts.TextStyle#getColor
 * 
 * @return {String} the CSS value for the color (such as "blue" or "#00f")
 */


/**
 * Gets the font name of the text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses Ariel font and logs the font name.
 * var textStyle = Charts.newTextStyle().setFontName(&#39;Ariel&#39;).build();
 * Logger.log(textStyle.getFontName());
 * </code></pre>
 * 
 * @function Charts.TextStyle#getFontName
 * 
 * @return {String} the font name
 */


/**
 * Gets the font size of the text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses 18 pixel font size and logs the font size.
 * var textStyle = Charts.newTextStyle().setFontSize(18).build();
 * Logger.log(textStyle.getFontSize());
 * </code></pre>
 * 
 * @function Charts.TextStyle#getFontSize
 * 
 * @return {Number} the font size in pixels
 */



/**
 * @class Charts.TextStyleBuilder
 */

/**
 * Builds and returns a text style configuration object that was built using this builder.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses 26-point blue font.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
 * var style = textStyleBuilder.build();
 * </code></pre>
 * 
 * @function Charts.TextStyleBuilder#build
 * 
 * @return {Charts.TextStyle} a TextStyle object built using this builder
 */


/**
 * Sets the color of the text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses blue font.
 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;);
 * var style = textStyleBuilder.build();
 * </code></pre>
 * 
 * @function Charts.TextStyleBuilder#setColor
 * 
 * @param {String} cssValue - the CSS value for the color (such as "blue" or "#00f").
 * 
 * @return {Charts.TextStyleBuilder} this builder, useful for chaining.
 */


/**
 * Sets the font name of the text style
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses Ariel font.
 * var textStyleBuilder = Charts.newTextStyle().setFontName(&#39;Ariel&#39;);
 * var style = textStyleBuilder.build();
 * </code></pre>
 * 
 * @function Charts.TextStyleBuilder#setFontName
 * 
 * @param {String} fontName - the font name to use for the text style
 * 
 * @return {Charts.TextStyleBuilder} this builder, useful for chaining.
 */


/**
 * Sets the font size of the text style.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new text style that uses 26-point font.
 * var textStyleBuilder = Charts.newTextStyle().setFontSize(26);
 * var style = textStyleBuilder.build();
 * </code></pre>
 * 
 * @function Charts.TextStyleBuilder#setFontSize
 * 
 * @param {Number} fontSize - the font size in pixels to use for the text style
 * 
 * @return {Charts.TextStyleBuilder} this builder, useful for chaining.
 */



