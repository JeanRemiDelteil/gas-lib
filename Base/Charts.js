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
 * @return {Charts.AreaChartBuilder} An AreaChartBuilder, which can be used to build an area chart.
 */


/**
 * Starts building a bar chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/barchart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newBarChart
 * 
 * @return {Charts.BarChartBuilder} A BarChartBuilder, which can be used to build a bar chart.
 */


/**
 * Starts building a column chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/columnchart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newColumnChart
 * 
 * @return {Charts.ColumnChartBuilder} A ColumnChartBuilder, which can be used to build a column chart.
 */


/**
 * Creates an empty data table, which can have its values set manually.
 * 
 * <p>Data tables hold the data for all chart types.
 * 
 * @function Charts.newDataTable
 * 
 * @return {DataTableBuilder} A DataTableBuilder, which can hold data for charts.
 */


/**
 * Creates a new data view definition.
 * 
 * <p>Use setters to define the different properties of the data view.
 * 
 * @function Charts.newDataViewDefinition
 * 
 * @return {Charts.DataViewDefinitionBuilder} A DataViewDefinitionBuilder, which can be used to build a data view definition.
 */


/**
 * Starts building a line chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/linechart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newLineChart
 * 
 * @return {Charts.LineChartBuilder} A LineChartBuilder, which can be used to build a line chart.
 */


/**
 * Starts building a pie chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/piechart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newPieChart
 * 
 * @return {Charts.PieChartBuilder} A PieChartBuilder, which can be used to build a pie chart.
 */


/**
 * Starts building a scatter chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/scatterchart">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newScatterChart
 * 
 * @return {Charts.ScatterChartBuilder} A ScatterChartBuilder, which can be used to build a scatter chart.
 */


/**
 * Starts building a table chart, as described in the <a
 * href="https://developers.google.com/chart/interactive/docs/gallery/table">Google Chart
 * Tools</a> documentation.
 * 
 * @function Charts.newTableChart
 * 
 * @return {Charts.TableChartBuilder} A TableChartBuilder, which can be used to build a table chart.
 */


/**
 * Creates a new text style builder.
 * 
 * <p>To change the default values, use the setter functions.
 * 
 * @function Charts.newTextStyle
 * 
 * @return {Charts.TextStyleBuilder} A TextStyleBuilder, which can be used to build a text style configuration object.
 */



/**
 * @class Charts.AreaChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.AreaChartBuilder#build
 * 
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
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
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {String[]} cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.AreaChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.AreaChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.AreaChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.AreaChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.AreaChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there is no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function Charts.AreaChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - The position of the legend.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart legend.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the style for points in the line. By default, points have no particular styles, and only
 * the line is visible.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets large point style.
 * var builder = Charts.newLineChart();
 * builder.setPointStyle(Charts.PointStyle.LARGE);
 * </code></pre>
 * 
 * @function Charts.AreaChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - The style to use for points in the line.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range is expanded to include those data
 * points.
 * 
 * @function Charts.AreaChartBuilder#setRange
 * 
 * @param {Number} start - The value for the lowest grid line of the range axis.
 * @param {Number} end - The value for the highest grid line of the range axis.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function Charts.AreaChartBuilder#setStacked
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the title of the chart. The title is displayed centered above the chart.
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
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.AreaChartBuilder#setXAxisTitle
 * 
 * @param {String} title - The title for the X-axis.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.AreaChartBuilder#setYAxisTitle
 * 
 * @param {String} title - The title for the Y-axis.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
 * horizontal axis for horizontal charts (such as bar).
 * 
 * @function Charts.AreaChartBuilder#useLogScale
 * 
 * @return {Charts.AreaChartBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.BarChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.BarChartBuilder#build
 * 
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
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
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Reverses the direction in which the bars grow along the horizontal axis. By default, values
 * grow from left to right. Calling this method causes them to grow from right to left.
 * 
 * @function Charts.BarChartBuilder#reverseDirection
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {String[]} cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.BarChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.BarChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.BarChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.BarChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.BarChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there is no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function Charts.BarChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - The position of the legend.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart legend.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range is expanded to include those data
 * points.
 * 
 * @function Charts.BarChartBuilder#setRange
 * 
 * @param {Number} start - The value for the lowest grid line of the range axis.
 * @param {Number} end - The value for the highest grid line of the range axis.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function Charts.BarChartBuilder#setStacked
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the title of the chart. The title is displayed centered above the chart.
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
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.BarChartBuilder#setXAxisTitle
 * 
 * @param {String} title - The title for the X-axis.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.BarChartBuilder#setYAxisTitle
 * 
 * @param {String} title - The title for the Y-axis.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
 * horizontal axis for horizontal charts (such as bar).
 * 
 * @function Charts.BarChartBuilder#useLogScale
 * 
 * @return {Charts.BarChartBuilder} This builder, useful for chaining.
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
 * <p>To view the daily quotas for conversions, see <a
 * href="https://developers.google.com/apps-script/guides/services/quotas">Quotas for Google
 * Services</a>. Newly created G Suite domains might be temporarily subject to stricter quotas.
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
 * Returns the options for this chart, such as height, colors, and axes.
 * 
 * <p>The returned options are immutable.
 * 
 * @function Charts.Chart#getOptions
 * 
 * @return {Charts.ChartOptions} The options for this chart, such as height, colors, and axes.
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
 * @param {String} option - The string representing the desired option.
 * 
 * @return {Object} The value currently set for the specified option or <code>null</code> if the option was not
 *     set.
 */


/**
 * Returns a configured option for this chart. If the chart option is not set, returns the default
 * value of this option if available, or returns <code>null</code> if the default value is not
 * available.
 * 
 * @function Charts.ChartOptions#getOrDefault
 * 
 * @param {String} option - The string representing the desired option.
 * 
 * @return {Object} The value currently set for the specified option. If the option was not set and the
 *     default value is available, returns the default value.
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
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
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
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {String[]} cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.ColumnChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.ColumnChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.ColumnChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.ColumnChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.ColumnChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there is no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function Charts.ColumnChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - The position of the legend.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart legend.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range is expanded to include those data
 * points.
 * 
 * @function Charts.ColumnChartBuilder#setRange
 * 
 * @param {Number} start - The value for the lowest grid line of the range axis.
 * @param {Number} end - The value for the highest grid line of the range axis.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
 * there is no stacking.
 * 
 * @function Charts.ColumnChartBuilder#setStacked
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the title of the chart. The title is displayed centered above the chart.
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
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.ColumnChartBuilder#setXAxisTitle
 * 
 * @param {String} title - The title for the X-axis.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.ColumnChartBuilder#setYAxisTitle
 * 
 * @param {String} title - The title for the Y-axis.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
 * horizontal axis for horizontal charts (such as bar).
 * 
 * @function Charts.ColumnChartBuilder#useLogScale
 * 
 * @return {Charts.ColumnChartBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.CurveStyle
 */

/**
 * Straight lines without curve.
 * 
 * @typedef {Charts.CurveStyle} Charts.CurveStyle.NORMAL
 */
/**
 * The angles of the line are smoothed.
 * 
 * @typedef {Charts.CurveStyle} Charts.CurveStyle.SMOOTH
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
 * @return {Charts.DataViewDefinition} A data view definition object that was built using this builder.
 */


/**
 * Sets the indexes of the columns to include in the data view as well as specifying role-column
 * information. This subset of column indexes refer to the columns of the data source that the
 * data view is derived from.
 * 
 * <p>A column role describes the purpose of the data in that column: for example, a column might
 * hold data describing tooltip text, data point annotations, or uncertainty indicators. For more
 * details, see <a href="/chart/interactive/docs/roles">DataTable Roles</a> in the Google Charts
 * documentation.
 * 
 * <p>Assuming a spreadsheet with the following data in A1:C3:
 * 
 * <pre class="prettyprint"><code>
 * &quot;abc&quot;, 20, &quot;blue&quot;
 * &quot;def&quot;, 30, &quot;red&quot;
 * &quot;ghi&quot;, 40, &quot;orange&quot;
 * </code></pre>
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
 * @param {Object[]} columns - An array of column indexes, or column descriptions (an object), to include in
 *     the data view. The column descriptions define a column role. The data table and the
 *     enumeration for data view columns are zero-based.
 * 
 * @return {Charts.DataViewDefinitionBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.LineChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.LineChartBuilder#build
 * 
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
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
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {String[]} cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.CurveStyle} style - The style for curves in the chart.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.LineChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.LineChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.LineChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.LineChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.LineChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there is no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function Charts.LineChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - The position of the legend.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart legend.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the style for points in the line. By default, points have no particular styles, and only
 * the line is visible.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets large point style.
 * var builder = Charts.newLineChart();
 * builder.setPointStyle(Charts.PointStyle.LARGE);
 * </code></pre>
 * 
 * @function Charts.LineChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - The style to use for points in the line.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the range for the chart.
 * 
 * <p>If any data points fall outside the range, the range is expanded to include those data
 * points.
 * 
 * @function Charts.LineChartBuilder#setRange
 * 
 * @param {Number} start - The value for the lowest grid line of the range axis.
 * @param {Number} end - The value for the highest grid line of the range axis.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the title of the chart. The title is displayed centered above the chart.
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
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.LineChartBuilder#setXAxisTitle
 * 
 * @param {String} title - The title for the X-axis.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.LineChartBuilder#setYAxisTitle
 * 
 * @param {String} title - The title for the Y-axis.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
 */


/**
 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
 * horizontal axis for horizontal charts (such as bar).
 * 
 * @function Charts.LineChartBuilder#useLogScale
 * 
 * @return {Charts.LineChartBuilder} This builder, useful for chaining.
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
 * Returns the name of the match type to be used in the options JSON.
 * 
 * @function Charts.MatchType#getName
 * 
 * @return {String} The name of the type.
 */



/**
 * @class Charts.NumberRangeFilterBuilder
 */

/**
 * Sets the maximum allowed value for the range lower extent. If undefined, the value is inferred
 * from the contents of the DataTable managed by the control.
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
 * @param {IntegerNum} maxValue - The maximum value of the slider.
 * 
 * @return {Charts.NumberRangeFilterBuilder} This builder, useful for chaining.
 */


/**
 * Sets the minimum allowed value for the range lower extent. If undefined, the value is inferred
 * from the contents of the DataTable managed by the control.
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
 * @param {IntegerNum} minValue - The minimum value of the slider.
 * 
 * @return {Charts.NumberRangeFilterBuilder} This builder, useful for chaining.
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
 * @param {Charts.Orientation} orientation - The slider orientation to set.
 * 
 * @return {Charts.NumberRangeFilterBuilder} This builder, useful for chaining.
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
 * @param {Boolean} showRangeValues - If <code>true</code>, enables showing of labels next to the slider.
 * 
 * @return {Charts.NumberRangeFilterBuilder} This builder, useful for chaining.
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
 * @param {IntegerNum} ticks - The number of ticks on the slider.
 * 
 * @return {Charts.NumberRangeFilterBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.Orientation
 */

/**
 * Horizontal orientation.
 * 
 * @typedef {Charts.Orientation} Charts.Orientation.HORIZONTAL
 */
/**
 * Vertical orientation.
 * 
 * @typedef {Charts.Orientation} Charts.Orientation.VERTICAL
 */

/**
 * @class Charts.PickerValuesLayout
 */

/**
 * Selected values display in a single text line next to the value picker widget.
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.ASIDE
 */
/**
 * Selected values display in a single text line below the widget.
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW
 */
/**
 * Selected values display in a column below the widget.
 * 
 * @typedef {Charts.PickerValuesLayout} Charts.PickerValuesLayout.BELOW_STACKED
 */
/**
 * Similar to below, but entries that cannot fit in the picker wrap to a new line.
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
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
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
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the chart to be three-dimensional.
 * 
 * @function Charts.PieChartBuilder#set3D
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
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
 * @param {String[]} cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.PieChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.PieChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.PieChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.PieChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.PieChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there is no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function Charts.PieChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - The position of the legend.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart legend.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
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
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the title of the chart. The title is displayed centered above the chart.
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
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.PieChartBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.PointStyle
 */

/**
 * Use largest sized line points.
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.HUGE
 */
/**
 * Use large sized line points.
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.LARGE
 */
/**
 * Use medium sized line points.
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.MEDIUM
 */
/**
 * Do not display line points.
 * 
 * @typedef {Charts.PointStyle} Charts.PointStyle.NONE
 */
/**
 * Use tiny line points.
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
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {String[]} cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
 *     in the array represents the color of the nth line in the chart.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.ScatterChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.ScatterChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.ScatterChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.ScatterChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.ScatterChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the position of the legend with respect to the chart. By default, there is no legend.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the legend position to right.
 * var builder = Charts.newLineChart();
 * builder.setLegendPosition(Charts.Position.RIGHT);
 * </code></pre>
 * 
 * @function Charts.ScatterChartBuilder#setLegendPosition
 * 
 * @param {Charts.Position} position - The position of the legend.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart legend.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the style for points in the line. By default, points have no particular styles, and only
 * the line is visible.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets large point style.
 * var builder = Charts.newLineChart();
 * builder.setPointStyle(Charts.PointStyle.LARGE);
 * </code></pre>
 * 
 * @function Charts.ScatterChartBuilder#setPointStyle
 * 
 * @param {Charts.PointStyle} style - The style to use for points in the line.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the title of the chart. The title is displayed centered above the chart.
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
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
 * 
 * @function Charts.ScatterChartBuilder#setXAxisLogScale
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the range for the horizontal axis of the chart.
 * 
 * <p>If any data points fall outside the range, the range is expanded to include those data
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
 * @param {Number} start - The value for the lowest grid line of the horizontal axis.
 * @param {Number} end - The value for the highest grid line of the horizontal axis.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the X-axis title.
 * var builder = Charts.newLineChart();
 * builder.setTitle(&#39;X-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.ScatterChartBuilder#setXAxisTitle
 * 
 * @param {String} title - The title for the X-axis.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
 * 
 * @function Charts.ScatterChartBuilder#setYAxisLogScale
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
 * the range is expanded to include those data points.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
 * var builder = Charts.newTableChart();
 * builder.setYAxisRange(0, 100);
 * </code></pre>
 * 
 * @function Charts.ScatterChartBuilder#setYAxisRange
 * 
 * @param {Number} start - The value for the lowest grid line of the vertical axis.
 * @param {Number} end - The value for the highest grid line of the vertical axis.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
 * labels.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a line chart builder and sets the Y-axis title.
 * var builder = Charts.newLineChart();
 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
 * </code></pre>
 * 
 * @function Charts.ScatterChartBuilder#setYAxisTitle
 * 
 * @param {String} title - The title for the Y-axis.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
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
 * @param {Charts.TextStyle} textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
 * 
 * @return {Charts.ScatterChartBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.StringFilterBuilder
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
 * @param {Boolean} caseSensitive - If <code>true</code>, enables string matching case sensitivity.
 * 
 * @return {Charts.StringFilterBuilder} This builder, useful for chaining.
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
 * @param {Charts.MatchType} matchType - The string matching type.
 * 
 * @return {Charts.StringFilterBuilder} This builder, useful for chaining.
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
 * @param {Boolean} realtimeTrigger - If <code>true</code>, sets events to be triggered at real time (when a key is
 *     pressed).
 * 
 * @return {Charts.StringFilterBuilder} This builder, useful for chaining.
 */



/**
 * @class Charts.TableChartBuilder
 */

/**
 * Builds the chart.
 * 
 * @function Charts.TableChartBuilder#build
 * 
 * @return {Charts.Chart} A Chart object, which can be embedded into documents, UI elements, or used as a static
 *     image.
 */


/**
 * Sets whether to enable paging through the data.
 * 
 * <p>The default behavior is paging disabled. If paging is enabled the default page size is 10.
 * 
 * @function Charts.TableChartBuilder#enablePaging
 * 
 * @param {Boolean} enablePaging - <code>true</code> if paging should be enabled, <code>false</code> otherwise.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
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
 * @param {IntegerNum} pageSize - The number of rows in each page of the table.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
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
 * @param {IntegerNum} pageSize - The number of rows in each page of the table.
 * @param {IntegerNum} startPage - The first table page to display (page numbers are zero-based).
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the
 * column order of the table, so that column zero is the right-most column, and the last column is
 * the left-most column.
 * 
 * <p>This does not affect the column index in the underlying data, only the order of display.
 * Full bi-directional (BiDi) language display is not supported by the table visualization even
 * with this option. This option is ignored if you enable paging (using the page option), or if
 * the table has scroll bars because you have specified height and width options smaller than the
 * required table size. The default behavior is RTL support disabled.
 * 
 * @function Charts.TableChartBuilder#enableRtlTable
 * 
 * @param {Boolean} rtlEnabled - <code>true</code> if right-to-left support should be enabled, <code>false</code>
 *     otherwise.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets whether to sort columns when the user clicks a column heading.
 * 
 * <p>If sorting is enabled, when users click on the column header the rows are automatically
 * sorted. The default behavior is sorting enabled.
 * 
 * @function Charts.TableChartBuilder#enableSorting
 * 
 * @param {Boolean} enableSorting - <code>true</code> to enable sorting by clicking on column headers, <code>false</code> otherwise.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data source URL that is used to pull data in from an external source, such as Google
 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
 * 
 * <p>For more information about querying data sources, check out the <a
 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
 * 
 * @function Charts.TableChartBuilder#setDataSourceUrl
 * 
 * @param {String} url - The data source URL, including any query parameters.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
 * for setting the data table without needing to call <code>build()</code>.
 * 
 * @function Charts.TableChartBuilder#setDataTable
 * 
 * @param {DataTableBuilder} tableBuilder - A data table builder. A new data table is created instantly as part of this
 *     call, so any further updates to the builder won't be reflected in the chart.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
 * first column should be a string, and contain the horizontal axis labels. Any number of columns
 * can follow, all must be numeric. Each column is displayed as a separate line.
 * 
 * @function Charts.TableChartBuilder#setDataTable
 * 
 * @param {DataTableSource} table - The data table to use for the chart.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the data view definition to use for the chart.
 * 
 * @function Charts.TableChartBuilder#setDataViewDefinition
 * 
 * @param {Charts.DataViewDefinition} dataViewDefinition - A data view definition object that defines the view that should be
 *     derived from the given data source for the chart drawing.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the dimensions for the chart.
 * 
 * @function Charts.TableChartBuilder#setDimensions
 * 
 * @param {IntegerNum} width - The width of the chart, in pixels.
 * @param {IntegerNum} height - The height of the chart, in pixels.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
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
 * @param {IntegerNum} number - The row number for the first row in the data table.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the index of the column according to which the table should be initially sorted
 * (ascending).
 * 
 * <p>The column os sorted in ascending order and is marked with a small arrow indicating that.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and sorts it by the second column (ascending).
 * var builder = Charts.newTableChart();
 * builder.setInitialSortingAscending(2);
 * </code></pre>
 * 
 * @function Charts.TableChartBuilder#setInitialSortingAscending
 * 
 * @param {IntegerNum} column - The number of the column according to which the table should be initially sorted.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets the index of the column according to which the table should be initially sorted
 * (descending).
 * 
 * <p>The column os sorted in descending order and is marked with a a small arrow indicating that.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a table chart builder and sorts it by the second column (descending).
 * var builder = Charts.newTableChart();
 * builder.setInitialSortingDescending(2);
 * </code></pre>
 * 
 * @function Charts.TableChartBuilder#setInitialSortingDescending
 * 
 * @param {IntegerNum} column - The number of the column according to which the table should be initially sorted.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/table">the available options for
 * this chart</a>. This method has no effect if the given option is invalid.
 * 
 * <pre class="prettyprint"><code>
 * // Build a table chart which renders HTML.
 * var builder = Charts.newTableChart();
 * builder.setOption(&#39;allowHtml&#39;, {@code true});
 * var chart = builder.build();
 * </code></pre>
 * 
 * @function Charts.TableChartBuilder#setOption
 * 
 * @param {String} option - The option to set.
 * @param {Object} value - The value to set.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets whether to show the row number as the first column of the table.
 * 
 * <p>The default behavior is not showing row numbers.
 * 
 * @function Charts.TableChartBuilder#showRowNumberColumn
 * 
 * @param {Boolean} showRowNumber - <code>true</code> if the first column of the table should show the row number,
 *     <code>false</code> otherwise.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
 */


/**
 * Sets whether alternating color style is assigned to odd and even rows of a table chart.
 * 
 * <p>The default behavior is the rows having alternating color style.
 * 
 * @function Charts.TableChartBuilder#useAlternatingRowStyle
 * 
 * @param {Boolean} alternate - <code>true</code> if color styles should be alternating, <code>false</code> otherwise.
 * 
 * @return {Charts.TableChartBuilder} This builder, useful for chaining.
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
 * @return {String} The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
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
 * @return {String} The font name.
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
 * @return {Number} The font size in pixels.
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
 * @return {Charts.TextStyle} A text style object built using this builder.
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
 * @param {String} cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
 * 
 * @return {Charts.TextStyleBuilder} This builder, useful for chaining.
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
 * @param {String} fontName - The font name to use for the text style.
 * 
 * @return {Charts.TextStyleBuilder} This builder, useful for chaining.
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
 * @param {Number} fontSize - The font size in pixels to use for the text style.
 * 
 * @return {Charts.TextStyleBuilder} This builder, useful for chaining.
 */



