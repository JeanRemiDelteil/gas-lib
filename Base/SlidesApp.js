/**********************************************
 * @namespace SlidesApp
 ***********************************************/

/**
 * @class SlidesApp
 */

/**
 * An enumeration of the types of alignment positions.
 * 
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition
 */
/**
 * An enumeration of the different arrow styles that a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> can have.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle
 */
/**
 * An enumeration of the types of auto text.
 * 
 * @typedef {SlidesApp.AutoTextType} SlidesApp.AutoTextType
 */
/**
 * An enumeration of the different merge states of a table cell.
 * 
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState
 */
/**
 * An enumeration of color types.
 * 
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType
 */
/**
 * An enumeration of values used to specify content alignment.
 * 
 * @typedef {SlidesApp.ContentAlignment} SlidesApp.ContentAlignment
 */
/**
 * An enumeration of the different dash styles that a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> can have.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle
 */
/**
 * An enumeration of fill types.
 * 
 * @typedef {SlidesApp.FillType} SlidesApp.FillType
 */
/**
 * An enumeration of the categories of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code>.
 * 
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory
 */
/**
 * An enumeration of the types of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code>.
 * 
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType
 */
/**
 * An enumeration of the types of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code>.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType
 */
/**
 * An enumeration of the types of links.
 * 
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType
 */
/**
 * An enumeration of the types of list presets.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset
 */
/**
 * An enumeration of the types of page backgrounds.
 * 
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType
 */
/**
 * An enumeration of the types of page elements.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType
 */
/**
 * An enumeration of the types of pages.
 * 
 * @typedef {SlidesApp.PageType} SlidesApp.PageType
 */
/**
 * An enumeration of the types of paragraph alignment.
 * 
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment
 */
/**
 * An enumeration of the types of placeholders.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType
 */
/**
 * An enumeration of the predefined layouts.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout
 */
/**
 * An enumeration of the types of selections.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType
 */
/**
 * An enumeration of the types of shapes.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType
 */
/**
 * An enumeration of Sheets chart embed types.
 * 
 * @typedef {SlidesApp.SheetsChartEmbedType} SlidesApp.SheetsChartEmbedType
 */
/**
 * An enumeration of the ways Slides can be linked.
 * 
 * @typedef {SlidesApp.SlideLinkingMode} SlidesApp.SlideLinkingMode
 */
/**
 * An enumeration of the types of slide positions.
 * 
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition
 */
/**
 * An enumeration of the types of spacing modes.
 * 
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode
 */
/**
 * An enumeration of the types of text baseline offset.
 * 
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset
 */
/**
 * An enumeration of the types of text directions.
 * 
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection
 */
/**
 * An enumeration of theme colors.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType
 */
/**
 * An enumeration of the types of video source.
 * 
 * @typedef {SlidesApp.VideoSourceType} SlidesApp.VideoSourceType
 */
/**
 * Creates and opens a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>.
 * 
 * @function SlidesApp.create
 * 
 * @param {String} name - The name to be given to the created presentation.
 * 
 * @return {SlidesApp.Presentation} the presentation with the given name.
 */


/**
 * Returns the currently active presentation to which the script is <a
 * href="/apps-script/scripts_containers">container-bound</a>, or <code>null</code> if there is no
 * active presentation. To interact with a presentation to which the script is not
 * container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slides-app.html#openById(String)'>openById(id)</a></code> instead.
 * 
 * <pre class="prettyprint">
 * // Get the current presentation to which this script is bound.
 * var presentation = SlidesApp.getActivePresentation();
 * </pre>
 * 
 * If the presentation is already open, the same presentation instance is returned.
 * 
 * @function SlidesApp.getActivePresentation
 * 
 * @return {SlidesApp.Presentation}
 */


/**
 * Returns an instance of the presentation's user-interface environment that allows the script to
 * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 * current instance of an open presentation, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the presentation. For more information, see
 * the guides to <a href="/apps-script/guides/menus">menus</a> and <a
 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint">
 * // Add a custom menu to the active presentation, including a separator and a sub-menu.
 * function onOpen(e) {
 *   SlidesApp.getUi()
 *       .createMenu('My Menu')
 *       .addItem('My menu item', 'myFunction')
 *       .addSeparator()
 *       .addSubMenu(SlidesApp.getUi().createMenu('My sub-menu')
 *           .addItem('One sub-menu item', 'mySecondFunction')
 *           .addItem('Another sub-menu item', 'myThirdFunction'))
 *       .addToUi();
 * }
 * </pre>
 * 
 * @function SlidesApp.getUi
 * 
 * @return {Ui}
 */


/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html'>AffineTransformBuilder</a></code> to build an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform.html'>AffineTransform</a></code>. The builder
 * is preset with the identity affine transform.
 * 
 * @function SlidesApp.newAffineTransformBuilder
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */


/**
 * Opens the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> with the given ID.
 * 
 * <pre class="prettyprint">
 * // Open a presentation by ID.
 * var presentation = SlidesApp.openById('docId');
 * </pre>
 * 
 * If the presentation is already open, the same presentation instance is returned.
 * 
 * @function SlidesApp.openById
 * 
 * @param {String} id
 * 
 * @return {SlidesApp.Presentation} the presentation with the given ID
 */


/**
 * Opens the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> with the given URL.
 * 
 * <pre class="prettyprint">
 * // Open a presentation by URL.
 * var presentation = SlidesApp.openByUrl('https://docs.google.com/presentation/d/docId/edit');
 * </pre>
 * 
 * If the presentation is already open, the same presentation instance is returned.
 * 
 * @function SlidesApp.openByUrl
 * 
 * @param {String} url
 * 
 * @return {SlidesApp.Presentation} the presentation with the given URL
 */



/**
 * @class SlidesApp.AffineTransform
 */

/**
 * Gets the X coordinate scaling element.
 * 
 * @function SlidesApp.AffineTransform#getScaleX
 * 
 * @return {Number}
 */


/**
 * Gets the Y coordinate scaling element.
 * 
 * @function SlidesApp.AffineTransform#getScaleY
 * 
 * @return {Number}
 */


/**
 * Gets the X coordinate shearing element.
 * 
 * @function SlidesApp.AffineTransform#getShearX
 * 
 * @return {Number}
 */


/**
 * Gets the Y coordinate shearing element.
 * 
 * @function SlidesApp.AffineTransform#getShearY
 * 
 * @return {Number}
 */


/**
 * Gets the X coordinate translation element in points.
 * 
 * @function SlidesApp.AffineTransform#getTranslateX
 * 
 * @return {Number}
 */


/**
 * Gets the Y coordinate translation element in points.
 * 
 * @function SlidesApp.AffineTransform#getTranslateY
 * 
 * @return {Number}
 */


/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html'>AffineTransformBuilder</a></code> based on this transform.
 * 
 * @function SlidesApp.AffineTransform#toBuilder
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */



/**
 * @class SlidesApp.AffineTransformBuilder
 */

/**
 * Creates an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform.html'>AffineTransform</a></code> object initialized with the elements set in the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#build
 * 
 * @return {SlidesApp.AffineTransform}
 */


/**
 * Sets the X coordinate scaling element and returns the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#setScaleX
 * 
 * @param {Number} scaleX
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */


/**
 * Sets the Y coordinate scaling element and returns the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#setScaleY
 * 
 * @param {Number} scaleY
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */


/**
 * Sets the X coordinate shearing element and returns the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#setShearX
 * 
 * @param {Number} shearX
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */


/**
 * Sets the Y coordinate shearing element and returns the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#setShearY
 * 
 * @param {Number} shearY
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */


/**
 * Sets the X coordinate translation element in points, and returns the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#setTranslateX
 * 
 * @param {Number} translateX
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */


/**
 * Sets the Y coordinate translation element in points, and returns the builder.
 * 
 * @function SlidesApp.AffineTransformBuilder#setTranslateY
 * 
 * @param {Number} translateY
 * 
 * @return {SlidesApp.AffineTransformBuilder}
 */



/**
 * @class SlidesApp.AlignmentPosition
 */

/**
 * Align to the center.
 * 
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition.CENTER
 */
/**
 * Align to the horizontal center.
 * 
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition.HORIZONTAL_CENTER
 */
/**
 * Align to the vertical center.
 * 
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition.VERTICAL_CENTER
 */

/**
 * @class SlidesApp.ArrowStyle
 */

/**
 * Filled arrow. Corresponds to ECMA-376 ST_LineEndType value 'triangle'.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_ARROW
 */
/**
 * Filled circle. Corresponds to ECMA-376 ST_LineEndType value 'oval'.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_CIRCLE
 */
/**
 * Filled diamond. Corresponds to ECMA-376 ST_LineEndType value 'diamond'.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_DIAMOND
 */
/**
 * Filled square.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_SQUARE
 */
/**
 * No arrow.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.NONE
 */
/**
 * Hollow arrow.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_ARROW
 */
/**
 * Hollow circle.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_CIRCLE
 */
/**
 * Hollow diamond.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_DIAMOND
 */
/**
 * Hollow square.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_SQUARE
 */
/**
 * Arrow with notched back. Corresponds to ECMA-376 ST_LineEndType value 'stealth'.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.STEALTH_ARROW
 */
/**
 * An arrow style that is not supported.
 * 
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.UNSUPPORTED
 */

/**
 * @class SlidesApp.AutoText
 */

/**
 * Returns the type of auto text. Returns <code>null</code> if the auto text has been deleted.
 * 
 * @function SlidesApp.AutoText#getAutoTextType
 * 
 * @return {SlidesApp.AutoTextType}
 */


/**
 * Returns the index of the auto text. Returns <code>null</code> if the auto text has been deleted.
 * 
 * @function SlidesApp.AutoText#getIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> spanning the auto text. Returns <code>null</code> if the auto text has
 * been deleted.
 * 
 * @function SlidesApp.AutoText#getRange
 * 
 * @return {SlidesApp.TextRange}
 */



/**
 * @class SlidesApp.AutoTextType
 */

/**
 * A slide number.
 * 
 * @typedef {SlidesApp.AutoTextType} SlidesApp.AutoTextType.SLIDE_NUMBER
 */
/**
 * An auto text type that is not supported.
 * 
 * @typedef {SlidesApp.AutoTextType} SlidesApp.AutoTextType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Border
 */

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the border.
 * 
 * @function SlidesApp.Border#getDashStyle
 * 
 * @return {SlidesApp.DashStyle}
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code> of the border.
 * 
 * @function SlidesApp.Border#getLineFill
 * 
 * @return {SlidesApp.LineFill}
 */


/**
 * Gets the thickness of the border in points. Returns <code>null</code> if the element does not have a
 * border.
 * 
 * @function SlidesApp.Border#getWeight
 * 
 * @return {Number}
 */


/**
 * Gets whether the border is visible or not.
 * 
 * @function SlidesApp.Border#isVisible
 * 
 * @return {Boolean}
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the border.
 * 
 * <p>Setting a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> on a transparent border makes it visible.
 * 
 * @function SlidesApp.Border#setDashStyle
 * 
 * @param {SlidesApp.DashStyle} style
 * 
 * @return {SlidesApp.Border}
 */


/**
 * Sets the border to be transparent.
 * 
 * @function SlidesApp.Border#setTransparent
 * 
 * @return {SlidesApp.Border}
 */


/**
 * Sets the thickness of the border in points.
 * 
 * <p>Setting a weight on a transparent border makes it visible.
 * 
 * @function SlidesApp.Border#setWeight
 * 
 * @param {Number} points
 * 
 * @return {SlidesApp.Border}
 */



/**
 * @class SlidesApp.CellMergeState
 */

/**
 * The cell is merged and it is the head (i.e. upper left) cell within the merged set of cells.
 * 
 * <p>As an example, assume the following table.
 * 
 * <pre class="prettyprint">
 * -------------------
 * |(0,0)|(0,1)|(0,2)|
 * -------------------
 * </pre>
 * 
 * If the first two cells are merged to form the following table, cell (0,0) is the head cell and
 * (0,1) is a merged cell.
 * 
 * <pre class="prettyprint">
 * -------------------
 * |(0,0)      |(0,2)|
 * -------------------
 * </pre>
 * 
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState.HEAD
 */
/**
 * The cell is merged but is not the head (i.e. upper left) cell.
 * 
 * <p>As an example, assume the following table.
 * 
 * <pre class="prettyprint">
 * -------------------
 * |(0,0)|(0,1)|(0,2)|
 * -------------------
 * </pre>
 * 
 * If the first two cells are merged to form the following table, cell (0,0) is the head cell and
 * (0,1) is a merged cell.
 * 
 * <pre class="prettyprint">
 * -------------------
 * |(0,0)      |(0,2)|
 * -------------------
 * </pre>
 * 
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState.MERGED
 */
/**
 * The cell is not merged.
 * 
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState.NORMAL
 */

/**
 * @class SlidesApp.Color
 */

/**
 * Converts this color to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/rgb-color.html'>RgbColor</a></code>.
 * 
 * @function SlidesApp.Color#asRgbColor
 * 
 * @return {SlidesApp.RgbColor}
 */


/**
 * Converts this color to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color.html'>ThemeColor</a></code>.
 * 
 * @function SlidesApp.Color#asThemeColor
 * 
 * @return {SlidesApp.ThemeColor}
 */


/**
 * Get the type of this color.
 * 
 * @function SlidesApp.Color#getColorType
 * 
 * @return {SlidesApp.ColorType}
 */



/**
 * @class SlidesApp.ColorScheme
 */

/**
 * Returns the concrete <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code> associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code> in this color
 * scheme.
 * 
 * <p>The returned color is guaranteed to not be an instance of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color.html'>ThemeColor</a></code>.
 * 
 * @function SlidesApp.ColorScheme#getConcreteColor
 * 
 * @param {SlidesApp.ThemeColorType} theme
 * 
 * @return {SlidesApp.Color}
 */


/**
 * Returns a list of all possible theme color types in a color scheme.
 * 
 * @function SlidesApp.ColorScheme#getThemeColors
 * 
 * @return {SlidesApp.ThemeColorType[]}
 */



/**
 * @class SlidesApp.ColorType
 */

/**
 * A color defined by red, green, blue color channels.
 * 
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType.RGB
 */
/**
 * A color that refers to an entry in the page's color scheme.
 * 
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType.THEME
 */
/**
 * A color type that is not supported.
 * 
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType.UNSUPPORTED
 */

/**
 * @class SlidesApp.ConnectionSite
 */

/**
 * Returns the index of the connection site. The index is unique among all the connection sites on
 * the same page element.
 * 
 * <p>In most cases, it corresponds to the predefined connection site index from the ECMA-376
 * standard. More information on those connection sites can be found in the description of the
 * "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text
 * Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part
 * 1 of <a href="http://www.ecma-international.org/publications/standards/Ecma-376.htm">ECMA-376
 * 5th edition</a>.
 * 
 * @function SlidesApp.ConnectionSite#getIndex
 * 
 * @return {IntegerNum} The index of the connection site.
 */


/**
 * Returns the <code>PageElement</code> that the connection site is on.
 * 
 * @function SlidesApp.ConnectionSite#getPageElement
 * 
 * @return {SlidesApp.PageElement} The page element of the connection site.
 */



/**
 * @class SlidesApp.ContentAlignment
 */

/**
 * Aligns the content to the bottom of the content holder. Corresponds to ECMA-376
 * ST_TextAnchoringType 'b'.
 * 
 * @typedef {SlidesApp.ContentAlignment} SlidesApp.ContentAlignment.BOTTOM
 */
/**
 * Aligns the content to the middle of the content holder. Corresponds to ECMA-376
 * ST_TextAnchoringType 'ctr'.
 * 
 * @typedef {SlidesApp.ContentAlignment} SlidesApp.ContentAlignment.MIDDLE
 */
/**
 * Aligns the content to the top of the content holder. Corresponds to ECMA-376
 * ST_TextAnchoringType 't'.
 * 
 * @typedef {SlidesApp.ContentAlignment} SlidesApp.ContentAlignment.TOP
 */
/**
 * A content alignment that is not supported.
 * 
 * @typedef {SlidesApp.ContentAlignment} SlidesApp.ContentAlignment.UNSUPPORTED
 */

/**
 * @class SlidesApp.DashStyle
 */

/**
 * Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.DASH
 */
/**
 * Alternating dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dashDot'.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.DASH_DOT
 */
/**
 * Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.DOT
 */
/**
 * Line with large dashes. Corresponds to ECMA-376 ST_PresetLineDashVal value 'lgDash'.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.LONG_DASH
 */
/**
 * Alternating large dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value
 * 'lgDashDot'.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.LONG_DASH_DOT
 */
/**
 * Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default
 * dash style.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.SOLID
 */
/**
 * A dash style that is not supported.
 * 
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.UNSUPPORTED
 */

/**
 * @class SlidesApp.Fill
 */

/**
 * Get the solid fill of this background, or <code>null</code> if the fill type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/fill-type.html#SOLID'>FillType.SOLID</a></code>.
 * 
 * @function SlidesApp.Fill#getSolidFill
 * 
 * @return {SlidesApp.SolidFill} The solid fill setting, or <code>null</code> if this fill type is not solid.
 */


/**
 * Get the type of this fill.
 * 
 * @function SlidesApp.Fill#getType
 * 
 * @return {SlidesApp.FillType} The type of this fill.
 */


/**
 * Whether the background is visible.
 * 
 * @function SlidesApp.Fill#isVisible
 * 
 * @return {Boolean} <code>true</code> if the background is visible; <code>false</code> otherwise.
 */


/**
 * Sets the solid fill to the given RGB values.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and RGB values.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {SlidesApp.Color} color
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {SlidesApp.Color} color
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {SlidesApp.ThemeColorType} color
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {SlidesApp.ThemeColorType} color
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {String} hexString
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.Fill#setSolidFill
 * 
 * @param {String} hexString
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the background to transparent.
 * 
 * @function SlidesApp.Fill#setTransparent
 * 
 * @return void
 */



/**
 * @class SlidesApp.FillType
 */

/**
 * No fill, so the background is transparent.
 * 
 * @typedef {SlidesApp.FillType} SlidesApp.FillType.NONE
 */
/**
 * A solid color fill.
 * 
 * @typedef {SlidesApp.FillType} SlidesApp.FillType.SOLID
 */
/**
 * A fill type that is not supported.
 * 
 * @typedef {SlidesApp.FillType} SlidesApp.FillType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Group
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.Group#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Group#bringForward
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Group#bringToFront
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.Group#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Gets the collection of page elements in the group. The minimum size of a group is 2.
 * 
 * @function SlidesApp.Group#getChildren
 * 
 * @return {SlidesApp.PageElement[]} The list of page elements in this group.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.Group#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.Group#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Group#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Group#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Group#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Group#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.Group#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.Group#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.Group#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.Group#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.Group#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.Group#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Group#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Gets the page element's transform.
 * 
 * <p>The initial transform for a newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> is always the identity transform:
 * 1.0 scale parameters, and 0.0 shear and translate parameters.
 * 
 * @function SlidesApp.Group#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.Group#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.Group#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.Group#remove
 * 
 * @return void
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Group#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Group#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.Group#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.Group#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Group#sendBackward
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Group#sendToBack
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.Group#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.Group} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Group#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Group#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.Group#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.Group#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.Group} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Group#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.Group#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.Group} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Group#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.Group} This page element, for chaining.
 */


/**
 * Ungroups the elements of the group.
 * 
 * <p>The group itself is removed.
 * 
 * <p>Groups inside other groups cannot be ungrouped.
 * 
 * @function SlidesApp.Group#ungroup
 * 
 * @return void
 */



/**
 * @class SlidesApp.Image
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.Image#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Image#bringForward
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Image#bringToFront
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.Image#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function SlidesApp.Image#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Return the data inside this image as a blob.
 * 
 * @function SlidesApp.Image#getBlob
 * 
 * @return {Blob} The image data as a blob.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the image.
 * 
 * @function SlidesApp.Image#getBorder
 * 
 * @return {SlidesApp.Border} The border of the image.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.Image#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Gets a URL to the image.
 * 
 * <p>This URL is tagged with the account of the requester, so anyone with the URL effectively
 * accesses the image as the original requester. Access to the image may be lost if the
 * presentation's sharing settings change. The returned URL expires after a short period of time.
 * 
 * @function SlidesApp.Image#getContentUrl
 * 
 * @return {String}
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.Image#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Image#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Image#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Image#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Image#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null) {
 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
 * }
 * </pre>
 * 
 * @function SlidesApp.Image#getLink
 * 
 * @return {SlidesApp.Link}
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.Image#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.Image#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.Image#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.Image#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.Image#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Gets the image's source URL, if available.
 * 
 * <p>When an image is inserted by URL, returns the URL provided during image insertion.
 * 
 * @function SlidesApp.Image#getSourceUrl
 * 
 * @return {String} The image URL or <code>null</code> if the image does not have a source URL.
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.Image#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Image#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.Image#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.Image#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.Image#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.Image#remove
 * 
 * @return void
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
 * 
 * <pre class="prettyprint">
 * shape.removeLink();
 * </pre>
 * 
 * @function SlidesApp.Image#removeLink
 * 
 * @return void
 */


/**
 * Replaces this image with an image described by a <a
 * href="/apps-script/reference/base/blob-source"><code>BlobSource</code></a> object.
 * 
 * <p>Inserting the image fetches it from the <a href="/apps-script/reference/base/blob-source">
 * <code>BlobSource</code></a> once and a copy is stored for display inside the presentation.
 * Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
 * PNG, JPEG, or GIF format.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the size of the existing image.
 * 
 * <pre class="prettyprint"><code>
 * var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
 * // Get the Drive image file with the given ID.
 * var driveImage = DriveApp.getFileById(fileId);
 * image.replace(driveImage);
 * </code></pre>
 * 
 * @function SlidesApp.Image#replace
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return {SlidesApp.Image} This <code>Image</code> after the replacement.
 */


/**
 * Replaces this image with an image described by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> object, optionally cropping
 * the image to fit.
 * 
 * <p>Inserting the image fetches it from the <a href="/apps-script/reference/base/blob-source">
 * <code>BlobSource</code></a> once and a copy is stored for display inside the presentation.
 * Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
 * PNG, JPEG, or GIF format.
 * 
 * <pre class="prettyprint"><code>
 * var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
 * // Get the Drive image file with the given ID.
 * var driveImage = DriveApp.getFileById(fileId);
 * // Replace and crop the drive image.
 * image.replace(driveImage, true);
 * </code></pre>
 * 
 * @function SlidesApp.Image#replace
 * 
 * @param {BlobSource} blobSource - The image data.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing image's size. Otherwise, the
 *     image is scaled and centered.
 * 
 * @return {SlidesApp.Image} This <code>Image</code> after the replacement.
 */


/**
 * Replaces this image with another image downloaded from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>getSourceUrl()</a></code>.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the size of the existing image.
 * 
 * @function SlidesApp.Image#replace
 * 
 * @param {String} imageUrl - The URL to download the image from.
 * 
 * @return {SlidesApp.Image} This <code>Image</code> after the replacement.
 */


/**
 * Replaces this image with another image downloaded from the provided URL, optionally cropping
 * the image to fit.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB.
 * 
 * @function SlidesApp.Image#replace
 * 
 * @param {String} imageUrl - The URL to download the image from.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing image's size. Otherwise, the
 *     image is scaled and centered.
 * 
 * @return {SlidesApp.Image} This <code>Image</code> after the replacement.
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Image#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Image#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.Image#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.Image#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Image#sendBackward
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Image#sendToBack
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.Image#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.Image} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Image#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Image#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(0);
 * </pre>
 * 
 * @function SlidesApp.Image#setLinkSlide
 * 
 * @param {IntegerNum} slideIndex - The zero-based index to the slide.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * var slide = presentation.getSlides()[0];
 * shape.setLinkSlide(slide);
 * </pre>
 * 
 * @function SlidesApp.Image#setLinkSlide
 * 
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 * </pre>
 * 
 * @function SlidesApp.Image#setLinkSlide
 * 
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
 * 
 * <pre class="prettyprint">
 * // Set a link to the URL.
 * shape.setLinkUrl("https://slides.google.com");
 * </pre>
 * 
 * @function SlidesApp.Image#setLinkUrl
 * 
 * @param {String} url - The URL string.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.Image#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.Image#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.Image} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Image#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.Image#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.Image} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Image#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.Image} This page element, for chaining.
 */



/**
 * @class SlidesApp.Layout
 */

/**
 * Gets the page's background.
 * 
 * @function SlidesApp.Layout#getBackground
 * 
 * @return {SlidesApp.PageBackground} The page's background.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 * 
 * @function SlidesApp.Layout#getColorScheme
 * 
 * @return {SlidesApp.ColorScheme} The page's color scheme.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getGroups
 * 
 * @return {SlidesApp.Group[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getImages
 * 
 * @return {SlidesApp.Image[]}
 */


/**
 * Gets the name of the layout.
 * 
 * @function SlidesApp.Layout#getLayoutName
 * 
 * @return {String}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getLines
 * 
 * @return {SlidesApp.Line[]}
 */


/**
 * Gets the master that the layout is based on.
 * 
 * @function SlidesApp.Layout#getMaster
 * 
 * @return {SlidesApp.Master}
 */


/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 * namespace.
 * 
 * @function SlidesApp.Layout#getObjectId
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.Layout#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 * 
 * @function SlidesApp.Layout#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Gets the type of the page.
 * 
 * @function SlidesApp.Layout#getPageType
 * 
 * @return {SlidesApp.PageType} The page type.
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 * <code>null</code> if a matching placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
 * placeholder index. If there are multiple matching placeholders with the same index, it returns
 * the first placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 * </pre>
 * 
 * @function SlidesApp.Layout#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 * a placeholder index, or <code>null</code> if the placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type and index, it returns the first
 * placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 * </pre>
 * 
 * @function SlidesApp.Layout#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * @param {IntegerNum} placeholderIndex
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
 * 
 * <pre class="prettyprint">
 * var master = SlidesApp.getActivePresentation().getMasters()[0];
 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 * </pre>
 * 
 * @function SlidesApp.Layout#getPlaceholders
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getShapes
 * 
 * @return {SlidesApp.Shape[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getSheetsCharts
 * 
 * @return {SlidesApp.SheetsChart[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getTables
 * 
 * @return {SlidesApp.Table[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getVideos
 * 
 * @return {SlidesApp.Video[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 * 
 * @function SlidesApp.Layout#getWordArts
 * 
 * @return {SlidesApp.WordArt[]}
 */


/**
 * Groups all the specified page elements.
 * 
 * <p>There should be at least two page elements on the same page that are not already in another
 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
 * 
 * @function SlidesApp.Layout#group
 * 
 * @param {SlidesApp.PageElement[]} pageElements - The elements to group together.
 * 
 * @return {SlidesApp.Group} The new group.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a group between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var group = otherPresentationSlide.getGroups()[0];
 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertGroup
 * 
 * @param {SlidesApp.Group} group - The group to be copied and inserted.
 * 
 * @return {SlidesApp.Group} The inserted group.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 * image blob.
 * 
 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 * megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * slide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the specified image blob.
 * 
 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * var position = {left: 0, top: 0};
 * var size = {width: 300, height: 100};
 * slide.insertImage(image, position.left, position.top, size.width, size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy an image between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var image = otherPresentationSlide.getImages[0];
 * currentPresentationSlide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertImage
 * 
 * @param {SlidesApp.Image} image - The image to be copied and inserted.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * @function SlidesApp.Layout#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * @function SlidesApp.Layout#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a line between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var line = otherPresentationSlide.getLines[0];
 * currentPresentationSlide.insertLine(line);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertLine
 * 
 * @param {SlidesApp.Line} line - The line to be copied and inserted.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var startPoint = {left: 10, top: 10};
 * var endPoint = {left: 40, top: 40};
 * slide.insertLine(
 *     SlidesApp.LineCategory.STRAIGHT,
 *     startPoint.left,
 *     startPoint.top,
 *     endPoint.left,
 *     endPoint.top);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
 *     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
 *     upper left corner of the page.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
 * connection sites must be on this page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation connecting two shapes.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
 * slide.insertLine(
 *     SlidesApp.LineCategory.BENT,
 *     shape1.getConnectionSites()[0],
 *     shape2.getConnectionSites()[1]);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {SlidesApp.ConnectionSite} startConnectionSite - The connection site where the start of the line is to be connected.
 * @param {SlidesApp.ConnectionSite} endConnectionSite - The connection site where the end of the line is to be connected.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a page element between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = otherPresentationSlide.getPageElements[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertPageElement(pageElement);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertPageElement
 * 
 * @param {SlidesApp.PageElement} pageElement - The page element to be copied and inserted.
 * 
 * @return {SlidesApp.PageElement} The inserted page element.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a shape between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape = otherPresentationSlide.getShapes[0];
 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertShape
 * 
 * @param {SlidesApp.Shape} shape - The shape to be copied and inserted.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * <p>The shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a shape in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * @function SlidesApp.Layout#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a sheets chart between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertSheetsChart(sheetsChart);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertSheetsChart
 * 
 * @param {SlidesApp.SheetsChart} sheetsChart - The sheets chart to be copied and inserted.
 * 
 * @return {SlidesApp.SheetsChart} The inserted sheets chart.
 */


/**
 * Inserts a Google Sheets chart on the page.
 * 
 * <p>The chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChart(chart);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart on the page with the provided position and size.
 * 
 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 * to the provided size.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChart(
 *     chart,
 *     position.left,
 *     position.top,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 * size.
 * 
 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 * respect to the provided size.
 * 
 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChartAsImage(
 *     chart,
 *     position.left,
 *     position.right,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a table on the page.
 * 
 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
 * 
 * @function SlidesApp.Layout#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a table on the page with the provided position and size.
 * 
 * <p>Rows and columns are evenly distributed in the created table.
 * 
 * @function SlidesApp.Layout#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
 *     on factors such as text font size.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a table between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var table = otherPresentationSlide.getTables[0];
 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertTable
 * 
 * @param {SlidesApp.Table} table - The table to be copied and inserted.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <p>The text box shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
 * // with a length of 10 points on each side.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * @param {Number} left - The horizontal position of the text box shape, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the text box shape, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the text box shape.
 * @param {Number} height - The height of the text box shape.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a video between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var video = otherPresentationSlide.getVideos[0];
 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertVideo
 * 
 * @param {SlidesApp.Video} video - The video to be copied and inserted.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video at the top left corner of the page with a default size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Layout#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video on the page with the provided position and size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Layout#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a word art between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var wordArt = otherPresentationSlide.getWordArts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertWordArt(wordArt);
 * </code></pre>
 * 
 * @function SlidesApp.Layout#insertWordArt
 * 
 * @param {SlidesApp.WordArt} wordArt - The group to be copied and inserted.
 * 
 * @return {SlidesApp.WordArt} The inserted word art.
 */


/**
 * Removes the page.
 * 
 * @function SlidesApp.Layout#remove
 * 
 * @return void
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.Layout#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.Layout#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Select the first slide as the current page selection and replace any previous selection.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Layout#selectAsCurrentPage
 * 
 * @return void
 */



/**
 * @class SlidesApp.Line
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.Line#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Line#bringForward
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Line#bringToFront
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.Line#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.Line#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the line.
 * 
 * @function SlidesApp.Line#getDashStyle
 * 
 * @return {SlidesApp.DashStyle} The style of the dashing used with this line.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.Line#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Returns the end point of the line, measured from the upper-left corner of the page.
 * 
 * @function SlidesApp.Line#getEnd
 * 
 * @return {SlidesApp.Point} The ending point of the line.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the end of the line.
 * 
 * @function SlidesApp.Line#getEndArrow
 * 
 * @return {SlidesApp.ArrowStyle} The style of the arrow at the end of this line.
 */


/**
 * Returns the connection at the end of the line, or <code>null</code> if there is no connection.
 * 
 * @function SlidesApp.Line#getEndConnection
 * 
 * @return {SlidesApp.ConnectionSite} The connection at the end of the line.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Line#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Line#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Line#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Line#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-category.html'>LineCategory</a></code> of the line.
 * 
 * @function SlidesApp.Line#getLineCategory
 * 
 * @return {SlidesApp.LineCategory} The line category.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code> of the line.
 * 
 * @function SlidesApp.Line#getLineFill
 * 
 * @return {SlidesApp.LineFill} The fill setting of this line.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-type.html'>LineType</a></code> of the line.
 * 
 * @function SlidesApp.Line#getLineType
 * 
 * @return {SlidesApp.LineType} The type of this line.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null) {
 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
 * }
 * </pre>
 * 
 * @function SlidesApp.Line#getLink
 * 
 * @return {SlidesApp.Link}
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.Line#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.Line#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.Line#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.Line#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.Line#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Returns the start point of the line, measured from the upper-left corner of the page.
 * 
 * @function SlidesApp.Line#getStart
 * 
 * @return {SlidesApp.Point} The starting point of the line.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the beginning of the line.
 * 
 * @function SlidesApp.Line#getStartArrow
 * 
 * @return {SlidesApp.ArrowStyle} The style of the arrow at the beginning of this line.
 */


/**
 * Returns the connection at the beginning of the line, or <code>null</code> if there is no connection.
 * 
 * @function SlidesApp.Line#getStartConnection
 * 
 * @return {SlidesApp.ConnectionSite} The connection at the beginning of the line.
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.Line#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Line#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.Line#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the thickness of the line in points.
 * 
 * @function SlidesApp.Line#getWeight
 * 
 * @return {Number} The thickness of the line in points.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.Line#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns <code>true</code> if the line is a connector, or <code>false</code> if not.
 * 
 * <p>Connector is a type of line that is used to connect connections sites on applicable page
 * elements. Each end of the connector can be connected to at most one connection site.
 * 
 * @function SlidesApp.Line#isConnector
 * 
 * @return {Boolean} <code>True</code> if the line is a connector, or <code>false</code> if not.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.Line#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.Line#remove
 * 
 * @return void
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
 * 
 * <pre class="prettyprint">
 * shape.removeLink();
 * </pre>
 * 
 * @function SlidesApp.Line#removeLink
 * 
 * @return void
 */


/**
 * Reroutes the start and end of the line to the closest two connection sites on the connected
 * page elements. The start and end of the line must be connected to different page elements.
 * 
 * @function SlidesApp.Line#reroute
 * 
 * @return {SlidesApp.Line} The line.
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Line#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Line#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.Line#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.Line#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Line#sendBackward
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Line#sendToBack
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the line.
 * 
 * @function SlidesApp.Line#setDashStyle
 * 
 * @param {SlidesApp.DashStyle} style - The style of the dashing to set for this line.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.Line#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.Line} This page element.
 */


/**
 * Sets the position of the end point of the line.
 * 
 * <p>The line path may be adjusted after the position changes.
 * 
 * @function SlidesApp.Line#setEnd
 * 
 * @param {Number} left - The horizontal position of the end point of the line, measured in points from the
 *     upper left corner of the page.
 * @param {Number} top - The vertical position of the end point of the line, measured in points from the
 *     upper left corner of the page.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the position of the end point of the line.
 * 
 * <p>The line path may be adjusted after the position changes.
 * 
 * @function SlidesApp.Line#setEnd
 * 
 * @param {SlidesApp.Point} point - The end point of the line, whose position is measured from the upper left corner
 *     of the page.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the end of the line.
 * 
 * @function SlidesApp.Line#setEndArrow
 * 
 * @param {SlidesApp.ArrowStyle} style - The style to set.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the connection at the end of the line. It moves the end of the line to the specified
 * connection site while keeping the other end intact.
 * 
 * @function SlidesApp.Line#setEndConnection
 * 
 * @param {SlidesApp.ConnectionSite} connectionSite - The connection site the end connection is updated to, or <code>null</code> if
 *     removing the end connection.
 * 
 * @return {SlidesApp.Line} The line.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Line#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Line#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-category.html'>LineCategory</a></code> of the line.
 * 
 * <p>You can only set the category on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#isConnector()'>connectors</a></code>. The connector may be
 * rerouted after changing its category.
 * 
 * @function SlidesApp.Line#setLineCategory
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The line category to set.
 * 
 * @return {SlidesApp.Line} The line.
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(0);
 * </pre>
 * 
 * @function SlidesApp.Line#setLinkSlide
 * 
 * @param {IntegerNum} slideIndex - The zero-based index to the slide.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * var slide = presentation.getSlides()[0];
 * shape.setLinkSlide(slide);
 * </pre>
 * 
 * @function SlidesApp.Line#setLinkSlide
 * 
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 * </pre>
 * 
 * @function SlidesApp.Line#setLinkSlide
 * 
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
 * 
 * <pre class="prettyprint">
 * // Set a link to the URL.
 * shape.setLinkUrl("https://slides.google.com");
 * </pre>
 * 
 * @function SlidesApp.Line#setLinkUrl
 * 
 * @param {String} url - The URL string.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.Line#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Sets the position of the start point of the line.
 * 
 * <p>The line path may be adjusted after the position changes.
 * 
 * @function SlidesApp.Line#setStart
 * 
 * @param {Number} left - The horizontal position of the start point of the line, measured in points from the
 *     upper left corner of the page.
 * @param {Number} top - The vertical position of the start point of the line, measured in points from the
 *     upper left corner of the page.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the position of the start point of the line.
 * 
 * <p>The line path may be adjusted after the position changes.
 * 
 * @function SlidesApp.Line#setStart
 * 
 * @param {SlidesApp.Point} point - The start point of the line, whose position is measured from the upper left corner
 *     of the page.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the beginning of the line.
 * 
 * @function SlidesApp.Line#setStartArrow
 * 
 * @param {SlidesApp.ArrowStyle} style - The new arrow style to set.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the connection at the beginning of the line. It moves the start of the line to the
 * specified connection site while keeping the other end intact.
 * 
 * @function SlidesApp.Line#setStartConnection
 * 
 * @param {SlidesApp.ConnectionSite} connectionSite - The connection site the start connection is updated to, or <code>null</code>
 *     if removing the start connection.
 * 
 * @return {SlidesApp.Line} The line.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.Line#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.Line} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Line#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.Line#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.Line} This element, for chaining.
 */


/**
 * Sets the thickness of the line in points.
 * 
 * @function SlidesApp.Line#setWeight
 * 
 * @param {Number} points - The new thickness of the line in points.
 * 
 * @return {SlidesApp.Line} This line, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Line#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.Line} This page element, for chaining.
 */



/**
 * @class SlidesApp.LineCategory
 */

/**
 * Bent connectors, including bent connector 2 to 5.
 * 
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.BENT
 */
/**
 * Curved connectors, including curved connector 2 to 5.
 * 
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.CURVED
 */
/**
 * Straight connectors, including straight connector 1.
 * 
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.STRAIGHT
 */
/**
 * A line category that is not supported.
 * 
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.UNSUPPORTED
 */

/**
 * @class SlidesApp.LineFill
 */

/**
 * Gets the type of the line fill.
 * 
 * @function SlidesApp.LineFill#getFillType
 * 
 * @return {SlidesApp.LineFillType}
 */


/**
 * Gets the solid fill of the line, or <code>null</code> if the fill type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill-type.html#SOLID'>LineFillType.SOLID</a></code>.
 * 
 * @function SlidesApp.LineFill#getSolidFill
 * 
 * @return {SlidesApp.SolidFill}
 */


/**
 * Sets the solid fill to the given RGB values.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and RGB values.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {SlidesApp.Color} color
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {SlidesApp.Color} color
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {SlidesApp.ThemeColorType} color
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {SlidesApp.ThemeColorType} color
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {String} hexString
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.LineFill#setSolidFill
 * 
 * @param {String} hexString
 * @param {Number} alpha
 * 
 * @return void
 */



/**
 * @class SlidesApp.LineFillType
 */

/**
 * No fill, so the line or outline is transparent.
 * 
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType.NONE
 */
/**
 * A solid color fill.
 * 
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType.SOLID
 */
/**
 * A line fill type that is not supported.
 * 
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType.UNSUPPORTED
 */

/**
 * @class SlidesApp.LineType
 */

/**
 * Bent connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector2'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_2
 */
/**
 * Bent connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector3'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_3
 */
/**
 * Bent connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector4'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_4
 */
/**
 * Bent connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector5'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_5
 */
/**
 * Curved connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector2'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_2
 */
/**
 * Curved connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector3'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_3
 */
/**
 * Curved connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector4'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_4
 */
/**
 * Curved connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector5'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_5
 */
/**
 * Straight connector 1 form. Corresponds to ECMA-376 ST_ShapeType 'straightConnector1'.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.STRAIGHT_CONNECTOR_1
 */
/**
 * Straight line. Corresponds to ECMA-376 ST_ShapeType 'line'. This line type is not a connector.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.STRAIGHT_LINE
 */
/**
 * A line type that is not supported.
 * 
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Link
 */

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code>.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null) {
 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
 * }
 * </pre>
 * 
 * @function SlidesApp.Link#getLinkType
 * 
 * @return {SlidesApp.LinkType}
 */


/**
 * Returns the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> for non-URL links types, if it exists. Returns <code>null</code> if
 * the slide doesn't exist in the presentation, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#URL'>LinkType.URL</a></code>.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null && link.getLinkType() != SlidesApp.LinkType.URL) {
 *   Logger.log('Shape has link to slide: ' + link.getLinkedSlide());
 * }
 * </pre>
 * 
 * @function SlidesApp.Link#getLinkedSlide
 * 
 * @return {SlidesApp.Slide}
 */


/**
 * Returns the ID of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_ID'>LinkType.SLIDE_ID</a></code>.
 * 
 * <p>Note that the slide with the returned ID might not exist.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_ID) {
 *   Logger.log('Shape has link to slide with ID: ' + link.getSlideId());
 * }
 * </pre>
 * 
 * @function SlidesApp.Link#getSlideId
 * 
 * @return {String}
 */


/**
 * Returns the zero-based index of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_INDEX'>LinkType.SLIDE_INDEX</a></code>.
 * 
 * <p>Note that the slide at the returned index might not exist.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_INDEX) {
 *   Logger.log('Shape has link to slide with index: ' + link.getSlideIndex());
 * }
 * </pre>
 * 
 * @function SlidesApp.Link#getSlideIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code> of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_POSITION'>LinkType.SLIDE_POSITION</a></code>.
 * 
 * <p>Note that the slide with the returned relative position might not exist.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_POSITION) {
 *   Logger.log('Shape has link to slide with relative position: ' + link.getSlidePosition());
 * }
 * </pre>
 * 
 * @function SlidesApp.Link#getSlidePosition
 * 
 * @return {SlidesApp.SlidePosition}
 */


/**
 * Returns the URL to the external web page or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#URL'>LinkType.URL</a></code>.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null && link.getLinkType() == SlidesApp.LinkType.URL) {
 *   Logger.log('Shape has link to URL: ' + link.getUrl());
 * }
 * </pre>
 * 
 * @function SlidesApp.Link#getUrl
 * 
 * @return {String}
 */



/**
 * @class SlidesApp.LinkType
 */

/**
 * A link to a specific slide in this presentation, addressed by its ID.
 * 
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.SLIDE_ID
 */
/**
 * A link to a specific slide in this presentation, addressed by its zero-based index.
 * 
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.SLIDE_INDEX
 */
/**
 * A link to a specific slide in this presentation, addressed by its position.
 * 
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.SLIDE_POSITION
 */
/**
 * A link type that is not supported.
 * 
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.UNSUPPORTED
 */
/**
 * A link to an external web page.
 * 
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.URL
 */

/**
 * @class SlidesApp.List
 */

/**
 * Returns the ID of the list.
 * 
 * @function SlidesApp.List#getListId
 * 
 * @return {String}
 */


/**
 * Returns all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraphs</a></code> in the list.
 * 
 * @function SlidesApp.List#getListParagraphs
 * 
 * @return {SlidesApp.Paragraph[]}
 */



/**
 * @class SlidesApp.ListPreset
 */

/**
 * A list with a `ARROW3D`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.ARROW3D_CIRCLE_SQUARE
 */
/**
 * A list with a `ARROW`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.ARROW_DIAMOND_DISC
 */
/**
 * A list with `CHECKBOX` glyphs for all list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.CHECKBOX
 */
/**
 * A list with a `DIAMONDX`, `ARROW3D` and `SQUARE` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIAMONDX_ARROW3D_SQUARE
 */
/**
 * A list with a `DIAMONDX`, `HOLLOWDIAMOND` and `SQUARE` glyphs for the first 3 list nesting
 * levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIAMONDX_HOLLOWDIAMOND_SQUARE
 */
/**
 * A list with a `DIAMOND`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIAMOND_CIRCLE_SQUARE
 */
/**
 * A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
 * by periods.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIGIT_ALPHA_ROMAN
 */
/**
 * A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
 * by parenthesis.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIGIT_ALPHA_ROMAN_PARENS
 */
/**
 * A list with `DIGIT` glyphs separated by periods, where each nesting level uses the previous
 * nesting level's glyph as a prefix. For example: '1.', '1.1.', '2.', '2.2.'.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIGIT_NESTED
 */
/**
 * A list with a `DISC`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DISC_CIRCLE_SQUARE
 */
/**
 * A list with a `LEFTTRIANGLE`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.LEFTTRIANGLE_DIAMOND_DISC
 */
/**
 * A list with a `STAR`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.STAR_CIRCLE_SQUARE
 */
/**
 * A list with `UPPERALPHA`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
 * followed by periods.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.UPPERALPHA_ALPHA_ROMAN
 */
/**
 * A list with `UPPERROMAN`, `UPPERALPHA` and `DIGIT` glyphs for the first 3 list nesting levels,
 * followed by periods.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.UPPERROMAN_UPPERALPHA_DIGIT
 */
/**
 * A list with `ZERODIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
 * followed by periods.
 * 
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.ZERODIGIT_ALPHA_ROMAN
 */

/**
 * @class SlidesApp.ListStyle
 */

/**
 * Applies the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-preset.html'>ListPreset</a></code> to all of the paragraphs that overlap with the text.
 * 
 * <p>The nesting level of each paragraph is determined by counting leading tabs in front of each
 * paragraph. To avoid excess space between the glyphs and the corresponding paragraph, these
 * leading tabs are removed by this method.
 * 
 * <p>If the paragraph immediately before paragraphs being updated is in a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list.html'>List</a></code> with a
 * matching list preset and the paragraphs being updated are not already in a different list, the
 * paragraphs being updated are added to that preceding list.
 * 
 * @function SlidesApp.ListStyle#applyListPreset
 * 
 * @param {SlidesApp.ListPreset} listPreset
 * 
 * @return {SlidesApp.ListStyle}
 */


/**
 * Returns the rendered glyph for the text. Returns <code>null</code> if the text spans more than one
 * paragraph or the text is not in a list.
 * 
 * @function SlidesApp.ListStyle#getGlyph
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list.html'>List</a></code> the text is in, or <code>null</code> if none of the text is in a list, or
 * part of the text is in a list, or the text is in multiple lists. Call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-style.html#isInList()'>isInList()</a></code> to
 * determine whether the text is in a list.
 * 
 * @function SlidesApp.ListStyle#getList
 * 
 * @return {SlidesApp.List}
 */


/**
 * Returns the 0-based nesting level of the text. Returns <code>null</code> if the text is not in a
 * list or there are mixed values.
 * 
 * @function SlidesApp.ListStyle#getNestingLevel
 * 
 * @return {IntegerNum}
 */


/**
 * Returns <code>true</code> if the text is in exactly one list, <code>false</code> if none of the text is
 * in a list, and <code>null</code> if only some of the text is in a list or if the text is in multiple
 * lists.
 * 
 * @function SlidesApp.ListStyle#isInList
 * 
 * @return {Boolean}
 */


/**
 * Removes the paragraphs that overlap with the text from any lists.
 * 
 * <p>The nesting level of each paragraph is visually preserved by adding indent to the start of
 * the corresponding paragraph.
 * 
 * @function SlidesApp.ListStyle#removeFromList
 * 
 * @return {SlidesApp.ListStyle}
 */



/**
 * @class SlidesApp.Master
 */

/**
 * Gets the page's background.
 * 
 * @function SlidesApp.Master#getBackground
 * 
 * @return {SlidesApp.PageBackground} The page's background.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 * 
 * @function SlidesApp.Master#getColorScheme
 * 
 * @return {SlidesApp.ColorScheme} The page's color scheme.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getGroups
 * 
 * @return {SlidesApp.Group[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getImages
 * 
 * @return {SlidesApp.Image[]}
 */


/**
 * Gets this master's layouts.
 * 
 * @function SlidesApp.Master#getLayouts
 * 
 * @return {SlidesApp.Layout[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getLines
 * 
 * @return {SlidesApp.Line[]}
 */


/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 * namespace.
 * 
 * @function SlidesApp.Master#getObjectId
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.Master#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 * 
 * @function SlidesApp.Master#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Gets the type of the page.
 * 
 * @function SlidesApp.Master#getPageType
 * 
 * @return {SlidesApp.PageType} The page type.
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 * <code>null</code> if a matching placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
 * placeholder index. If there are multiple matching placeholders with the same index, it returns
 * the first placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 * </pre>
 * 
 * @function SlidesApp.Master#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 * a placeholder index, or <code>null</code> if the placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type and index, it returns the first
 * placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 * </pre>
 * 
 * @function SlidesApp.Master#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * @param {IntegerNum} placeholderIndex
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
 * 
 * <pre class="prettyprint">
 * var master = SlidesApp.getActivePresentation().getMasters()[0];
 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 * </pre>
 * 
 * @function SlidesApp.Master#getPlaceholders
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getShapes
 * 
 * @return {SlidesApp.Shape[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getSheetsCharts
 * 
 * @return {SlidesApp.SheetsChart[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getTables
 * 
 * @return {SlidesApp.Table[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getVideos
 * 
 * @return {SlidesApp.Video[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 * 
 * @function SlidesApp.Master#getWordArts
 * 
 * @return {SlidesApp.WordArt[]}
 */


/**
 * Groups all the specified page elements.
 * 
 * <p>There should be at least two page elements on the same page that are not already in another
 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
 * 
 * @function SlidesApp.Master#group
 * 
 * @param {SlidesApp.PageElement[]} pageElements - The elements to group together.
 * 
 * @return {SlidesApp.Group} The new group.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a group between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var group = otherPresentationSlide.getGroups()[0];
 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertGroup
 * 
 * @param {SlidesApp.Group} group - The group to be copied and inserted.
 * 
 * @return {SlidesApp.Group} The inserted group.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 * image blob.
 * 
 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 * megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * slide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the specified image blob.
 * 
 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * var position = {left: 0, top: 0};
 * var size = {width: 300, height: 100};
 * slide.insertImage(image, position.left, position.top, size.width, size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy an image between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var image = otherPresentationSlide.getImages[0];
 * currentPresentationSlide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertImage
 * 
 * @param {SlidesApp.Image} image - The image to be copied and inserted.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * @function SlidesApp.Master#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * @function SlidesApp.Master#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a line between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var line = otherPresentationSlide.getLines[0];
 * currentPresentationSlide.insertLine(line);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertLine
 * 
 * @param {SlidesApp.Line} line - The line to be copied and inserted.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var startPoint = {left: 10, top: 10};
 * var endPoint = {left: 40, top: 40};
 * slide.insertLine(
 *     SlidesApp.LineCategory.STRAIGHT,
 *     startPoint.left,
 *     startPoint.top,
 *     endPoint.left,
 *     endPoint.top);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
 *     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
 *     upper left corner of the page.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
 * connection sites must be on this page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation connecting two shapes.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
 * slide.insertLine(
 *     SlidesApp.LineCategory.BENT,
 *     shape1.getConnectionSites()[0],
 *     shape2.getConnectionSites()[1]);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {SlidesApp.ConnectionSite} startConnectionSite - The connection site where the start of the line is to be connected.
 * @param {SlidesApp.ConnectionSite} endConnectionSite - The connection site where the end of the line is to be connected.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a page element between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = otherPresentationSlide.getPageElements[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertPageElement(pageElement);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertPageElement
 * 
 * @param {SlidesApp.PageElement} pageElement - The page element to be copied and inserted.
 * 
 * @return {SlidesApp.PageElement} The inserted page element.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a shape between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape = otherPresentationSlide.getShapes[0];
 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertShape
 * 
 * @param {SlidesApp.Shape} shape - The shape to be copied and inserted.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * <p>The shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a shape in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * @function SlidesApp.Master#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a sheets chart between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertSheetsChart(sheetsChart);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertSheetsChart
 * 
 * @param {SlidesApp.SheetsChart} sheetsChart - The sheets chart to be copied and inserted.
 * 
 * @return {SlidesApp.SheetsChart} The inserted sheets chart.
 */


/**
 * Inserts a Google Sheets chart on the page.
 * 
 * <p>The chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChart(chart);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart on the page with the provided position and size.
 * 
 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 * to the provided size.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChart(
 *     chart,
 *     position.left,
 *     position.top,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 * size.
 * 
 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 * respect to the provided size.
 * 
 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChartAsImage(
 *     chart,
 *     position.left,
 *     position.right,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a table on the page.
 * 
 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
 * 
 * @function SlidesApp.Master#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a table on the page with the provided position and size.
 * 
 * <p>Rows and columns are evenly distributed in the created table.
 * 
 * @function SlidesApp.Master#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
 *     on factors such as text font size.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a table between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var table = otherPresentationSlide.getTables[0];
 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertTable
 * 
 * @param {SlidesApp.Table} table - The table to be copied and inserted.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <p>The text box shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
 * // with a length of 10 points on each side.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * @param {Number} left - The horizontal position of the text box shape, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the text box shape, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the text box shape.
 * @param {Number} height - The height of the text box shape.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a video between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var video = otherPresentationSlide.getVideos[0];
 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertVideo
 * 
 * @param {SlidesApp.Video} video - The video to be copied and inserted.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video at the top left corner of the page with a default size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Master#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video on the page with the provided position and size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Master#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a word art between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var wordArt = otherPresentationSlide.getWordArts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertWordArt(wordArt);
 * </code></pre>
 * 
 * @function SlidesApp.Master#insertWordArt
 * 
 * @param {SlidesApp.WordArt} wordArt - The group to be copied and inserted.
 * 
 * @return {SlidesApp.WordArt} The inserted word art.
 */


/**
 * Removes the page.
 * 
 * @function SlidesApp.Master#remove
 * 
 * @return void
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.Master#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.Master#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Select the first slide as the current page selection and replace any previous selection.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Master#selectAsCurrentPage
 * 
 * @return void
 */



/**
 * @class SlidesApp.NotesMaster
 */

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getGroups
 * 
 * @return {SlidesApp.Group[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getImages
 * 
 * @return {SlidesApp.Image[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getLines
 * 
 * @return {SlidesApp.Line[]}
 */


/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 * namespace.
 * 
 * @function SlidesApp.NotesMaster#getObjectId
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.NotesMaster#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 * 
 * @function SlidesApp.NotesMaster#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 * <code>null</code> if a matching placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
 * placeholder index. If there are multiple matching placeholders with the same index, it returns
 * the first placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 * </pre>
 * 
 * @function SlidesApp.NotesMaster#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 * a placeholder index, or <code>null</code> if the placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type and index, it returns the first
 * placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 * </pre>
 * 
 * @function SlidesApp.NotesMaster#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * @param {IntegerNum} placeholderIndex
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
 * 
 * <pre class="prettyprint">
 * var master = SlidesApp.getActivePresentation().getMasters()[0];
 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 * </pre>
 * 
 * @function SlidesApp.NotesMaster#getPlaceholders
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getShapes
 * 
 * @return {SlidesApp.Shape[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getSheetsCharts
 * 
 * @return {SlidesApp.SheetsChart[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getTables
 * 
 * @return {SlidesApp.Table[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getVideos
 * 
 * @return {SlidesApp.Video[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesMaster#getWordArts
 * 
 * @return {SlidesApp.WordArt[]}
 */



/**
 * @class SlidesApp.NotesPage
 */

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getGroups
 * 
 * @return {SlidesApp.Group[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getImages
 * 
 * @return {SlidesApp.Image[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getLines
 * 
 * @return {SlidesApp.Line[]}
 */


/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 * namespace.
 * 
 * @function SlidesApp.NotesPage#getObjectId
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.NotesPage#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 * 
 * @function SlidesApp.NotesPage#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 * <code>null</code> if a matching placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
 * placeholder index. If there are multiple matching placeholders with the same index, it returns
 * the first placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 * </pre>
 * 
 * @function SlidesApp.NotesPage#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 * a placeholder index, or <code>null</code> if the placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type and index, it returns the first
 * placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 * </pre>
 * 
 * @function SlidesApp.NotesPage#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * @param {IntegerNum} placeholderIndex
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
 * 
 * <pre class="prettyprint">
 * var master = SlidesApp.getActivePresentation().getMasters()[0];
 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 * </pre>
 * 
 * @function SlidesApp.NotesPage#getPlaceholders
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getShapes
 * 
 * @return {SlidesApp.Shape[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getSheetsCharts
 * 
 * @return {SlidesApp.SheetsChart[]}
 */


/**
 * Gets the shape containing the speaker notes on the page.
 * 
 * @function SlidesApp.NotesPage#getSpeakerNotesShape
 * 
 * @return {SlidesApp.Shape}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getTables
 * 
 * @return {SlidesApp.Table[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getVideos
 * 
 * @return {SlidesApp.Video[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 * 
 * @function SlidesApp.NotesPage#getWordArts
 * 
 * @return {SlidesApp.WordArt[]}
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.NotesPage#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.NotesPage#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */



/**
 * @class SlidesApp.Page
 */

/**
 * Returns the page as a layout.
 * 
 * @function SlidesApp.Page#asLayout
 * 
 * @return {SlidesApp.Layout} The page as a layout.
 */


/**
 * Returns the page as a master.
 * 
 * @function SlidesApp.Page#asMaster
 * 
 * @return {SlidesApp.Master} The page as a master.
 */


/**
 * Returns the page as a slide.
 * 
 * @function SlidesApp.Page#asSlide
 * 
 * @return {SlidesApp.Slide} The page as a slide.
 */


/**
 * Gets the page's background.
 * 
 * @function SlidesApp.Page#getBackground
 * 
 * @return {SlidesApp.PageBackground} The page's background.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 * 
 * @function SlidesApp.Page#getColorScheme
 * 
 * @return {SlidesApp.ColorScheme} The page's color scheme.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getGroups
 * 
 * @return {SlidesApp.Group[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getImages
 * 
 * @return {SlidesApp.Image[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getLines
 * 
 * @return {SlidesApp.Line[]}
 */


/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 * namespace.
 * 
 * @function SlidesApp.Page#getObjectId
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.Page#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 * 
 * @function SlidesApp.Page#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Gets the type of the page.
 * 
 * @function SlidesApp.Page#getPageType
 * 
 * @return {SlidesApp.PageType} The page type.
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 * <code>null</code> if a matching placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
 * placeholder index. If there are multiple matching placeholders with the same index, it returns
 * the first placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 * </pre>
 * 
 * @function SlidesApp.Page#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 * a placeholder index, or <code>null</code> if the placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type and index, it returns the first
 * placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 * </pre>
 * 
 * @function SlidesApp.Page#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * @param {IntegerNum} placeholderIndex
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
 * 
 * <pre class="prettyprint">
 * var master = SlidesApp.getActivePresentation().getMasters()[0];
 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 * </pre>
 * 
 * @function SlidesApp.Page#getPlaceholders
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getShapes
 * 
 * @return {SlidesApp.Shape[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getSheetsCharts
 * 
 * @return {SlidesApp.SheetsChart[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getTables
 * 
 * @return {SlidesApp.Table[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getVideos
 * 
 * @return {SlidesApp.Video[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 * 
 * @function SlidesApp.Page#getWordArts
 * 
 * @return {SlidesApp.WordArt[]}
 */


/**
 * Groups all the specified page elements.
 * 
 * <p>There should be at least two page elements on the same page that are not already in another
 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
 * 
 * @function SlidesApp.Page#group
 * 
 * @param {SlidesApp.PageElement[]} pageElements - The elements to group together.
 * 
 * @return {SlidesApp.Group} The new group.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a group between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var group = otherPresentationSlide.getGroups()[0];
 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertGroup
 * 
 * @param {SlidesApp.Group} group - The group to be copied and inserted.
 * 
 * @return {SlidesApp.Group} The inserted group.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 * image blob.
 * 
 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 * megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * slide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the specified image blob.
 * 
 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * var position = {left: 0, top: 0};
 * var size = {width: 300, height: 100};
 * slide.insertImage(image, position.left, position.top, size.width, size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy an image between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var image = otherPresentationSlide.getImages[0];
 * currentPresentationSlide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertImage
 * 
 * @param {SlidesApp.Image} image - The image to be copied and inserted.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * @function SlidesApp.Page#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * @function SlidesApp.Page#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a line between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var line = otherPresentationSlide.getLines[0];
 * currentPresentationSlide.insertLine(line);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertLine
 * 
 * @param {SlidesApp.Line} line - The line to be copied and inserted.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var startPoint = {left: 10, top: 10};
 * var endPoint = {left: 40, top: 40};
 * slide.insertLine(
 *     SlidesApp.LineCategory.STRAIGHT,
 *     startPoint.left,
 *     startPoint.top,
 *     endPoint.left,
 *     endPoint.top);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
 *     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
 *     upper left corner of the page.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
 * connection sites must be on this page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation connecting two shapes.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
 * slide.insertLine(
 *     SlidesApp.LineCategory.BENT,
 *     shape1.getConnectionSites()[0],
 *     shape2.getConnectionSites()[1]);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {SlidesApp.ConnectionSite} startConnectionSite - The connection site where the start of the line is to be connected.
 * @param {SlidesApp.ConnectionSite} endConnectionSite - The connection site where the end of the line is to be connected.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a page element between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = otherPresentationSlide.getPageElements[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertPageElement(pageElement);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertPageElement
 * 
 * @param {SlidesApp.PageElement} pageElement - The page element to be copied and inserted.
 * 
 * @return {SlidesApp.PageElement} The inserted page element.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a shape between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape = otherPresentationSlide.getShapes[0];
 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertShape
 * 
 * @param {SlidesApp.Shape} shape - The shape to be copied and inserted.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * <p>The shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a shape in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * @function SlidesApp.Page#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a sheets chart between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertSheetsChart(sheetsChart);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertSheetsChart
 * 
 * @param {SlidesApp.SheetsChart} sheetsChart - The sheets chart to be copied and inserted.
 * 
 * @return {SlidesApp.SheetsChart} The inserted sheets chart.
 */


/**
 * Inserts a Google Sheets chart on the page.
 * 
 * <p>The chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChart(chart);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart on the page with the provided position and size.
 * 
 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 * to the provided size.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChart(
 *     chart,
 *     position.left,
 *     position.top,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 * size.
 * 
 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 * respect to the provided size.
 * 
 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChartAsImage(
 *     chart,
 *     position.left,
 *     position.right,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a table on the page.
 * 
 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
 * 
 * @function SlidesApp.Page#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a table on the page with the provided position and size.
 * 
 * <p>Rows and columns are evenly distributed in the created table.
 * 
 * @function SlidesApp.Page#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
 *     on factors such as text font size.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a table between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var table = otherPresentationSlide.getTables[0];
 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertTable
 * 
 * @param {SlidesApp.Table} table - The table to be copied and inserted.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <p>The text box shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
 * // with a length of 10 points on each side.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * @param {Number} left - The horizontal position of the text box shape, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the text box shape, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the text box shape.
 * @param {Number} height - The height of the text box shape.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a video between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var video = otherPresentationSlide.getVideos[0];
 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertVideo
 * 
 * @param {SlidesApp.Video} video - The video to be copied and inserted.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video at the top left corner of the page with a default size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Page#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video on the page with the provided position and size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Page#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a word art between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var wordArt = otherPresentationSlide.getWordArts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertWordArt(wordArt);
 * </code></pre>
 * 
 * @function SlidesApp.Page#insertWordArt
 * 
 * @param {SlidesApp.WordArt} wordArt - The group to be copied and inserted.
 * 
 * @return {SlidesApp.WordArt} The inserted word art.
 */


/**
 * Removes the page.
 * 
 * @function SlidesApp.Page#remove
 * 
 * @return void
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.Page#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.Page#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Select the first slide as the current page selection and replace any previous selection.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Page#selectAsCurrentPage
 * 
 * @return void
 */



/**
 * @class SlidesApp.PageBackground
 */

/**
 * Get the stretched picture fill of this background, or <code>null</code> if the background fill type
 * is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-background-type.html#PICTURE'>PageBackgroundType.PICTURE</a></code>.
 * 
 * @function SlidesApp.PageBackground#getPictureFill
 * 
 * @return {SlidesApp.PictureFill}
 */


/**
 * Get the solid fill of this background, or <code>null</code> if the background fill type is not
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-background-type.html#SOLID'>PageBackgroundType.SOLID</a></code>.
 * 
 * @function SlidesApp.PageBackground#getSolidFill
 * 
 * @return {SlidesApp.SolidFill}
 */


/**
 * Get the type of this page background.
 * 
 * @function SlidesApp.PageBackground#getType
 * 
 * @return {SlidesApp.PageBackgroundType}
 */


/**
 * Whether the background is visible.
 * 
 * @function SlidesApp.PageBackground#isVisible
 * 
 * @return {Boolean}
 */


/**
 * Sets an image from the specified image blob as the page background. The image is stretched to
 * match the dimensions of the page.
 * 
 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 * megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * @function SlidesApp.PageBackground#setPictureFill
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return void
 */


/**
 * Sets the image at the provided URL as the page background. The image is stretched to match the
 * dimensions of the page.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/picture-fill.html#getSourceUrl()'>PictureFill.getSourceUrl()</a></code>.
 * 
 * @function SlidesApp.PageBackground#setPictureFill
 * 
 * @param {String} imageUrl - The URL to download the image from.
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given RGB values.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and RGB values.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {SlidesApp.Color} color
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {SlidesApp.Color} color
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {SlidesApp.ThemeColorType} color
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {SlidesApp.ThemeColorType} color
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {String} hexString
 * 
 * @return void
 */


/**
 * Sets the solid fill to the given alpha and hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.PageBackground#setSolidFill
 * 
 * @param {String} hexString
 * @param {Number} alpha
 * 
 * @return void
 */


/**
 * Sets the background to transparent.
 * 
 * @function SlidesApp.PageBackground#setTransparent
 * 
 * @return void
 */



/**
 * @class SlidesApp.PageBackgroundType
 */

/**
 * No fill, so the background is rendered white.
 * 
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.NONE
 */
/**
 * A picture that is stretched to fill the page.
 * 
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.PICTURE
 */
/**
 * A solid color fill.
 * 
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.SOLID
 */
/**
 * A page background type that is not supported.
 * 
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.UNSUPPORTED
 */

/**
 * @class SlidesApp.PageElement
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.PageElement#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Returns the page element as a group.
 * 
 * @function SlidesApp.PageElement#asGroup
 * 
 * @return {SlidesApp.Group} This page element as a group.
 */


/**
 * Returns the page element as an image.
 * 
 * @function SlidesApp.PageElement#asImage
 * 
 * @return {SlidesApp.Image} This page element as an image.
 */


/**
 * Returns the page element as a line.
 * 
 * @function SlidesApp.PageElement#asLine
 * 
 * @return {SlidesApp.Line} This page element as a line.
 */


/**
 * Returns the page element as a shape.
 * 
 * @function SlidesApp.PageElement#asShape
 * 
 * @return {SlidesApp.Shape} This page element as a shape.
 */


/**
 * Returns the page element as a linked chart embedded from Google Sheets.
 * 
 * @function SlidesApp.PageElement#asSheetsChart
 * 
 * @return {SlidesApp.SheetsChart} The page element as a chart.
 */


/**
 * Returns the page element as a table.
 * 
 * @function SlidesApp.PageElement#asTable
 * 
 * @return {SlidesApp.Table} This page element as a table.
 */


/**
 * Returns the page element as a video.
 * 
 * @function SlidesApp.PageElement#asVideo
 * 
 * @return {SlidesApp.Video} This page element as a video.
 */


/**
 * Returns the page element as word art.
 * 
 * @function SlidesApp.PageElement#asWordArt
 * 
 * @return {SlidesApp.WordArt} This page element as word art.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.PageElement#bringForward
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.PageElement#bringToFront
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.PageElement#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.PageElement#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.PageElement#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.PageElement#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.PageElement#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.PageElement#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.PageElement#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.PageElement#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.PageElement#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.PageElement#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.PageElement#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.PageElement#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.PageElement#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.PageElement#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.PageElement#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.PageElement#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.PageElement#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.PageElement#remove
 * 
 * @return void
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.PageElement#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.PageElement#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.PageElement#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.PageElement#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.PageElement#sendBackward
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.PageElement#sendToBack
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.PageElement#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.PageElement} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.PageElement#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.PageElement#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.PageElement#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.PageElement#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.PageElement} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.PageElement#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.PageElement#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.PageElement} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.PageElement#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.PageElement} This page element, for chaining.
 */



/**
 * @class SlidesApp.PageElementRange
 */

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances.
 * 
 * @function SlidesApp.PageElementRange#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */



/**
 * @class SlidesApp.PageElementType
 */

/**
 * Represents a collection of page elements joined as a single unit.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.GROUP
 */
/**
 * Represents an image.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.IMAGE
 */
/**
 * Represents a line.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.LINE
 */
/**
 * Represents a generic shape that does not have a more specific classification.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.SHAPE
 */
/**
 * Represents a linked chart embedded from Google Sheets.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.SHEETS_CHART
 */
/**
 * Represents a table.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.TABLE
 */
/**
 * Represents a page element that is not supported and cannot be further classified.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.UNSUPPORTED
 */
/**
 * Represents a video.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.VIDEO
 */
/**
 * Represents word art.
 * 
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.WORD_ART
 */

/**
 * @class SlidesApp.PageRange
 */

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> instances.
 * 
 * @function SlidesApp.PageRange#getPages
 * 
 * @return {SlidesApp.Page[]}
 */



/**
 * @class SlidesApp.PageType
 */

/**
 * A layout page.
 * 
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.LAYOUT
 */
/**
 * A master page.
 * 
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.MASTER
 */
/**
 * A slide page.
 * 
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.SLIDE
 */
/**
 * A page type that is not supported.
 * 
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Paragraph
 */

/**
 * Returns the index of the paragraph's newline. Returns <code>null</code> if the newline has been
 * deleted.
 * 
 * @function SlidesApp.Paragraph#getIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> spanning the text in the paragraph ended by this object's newline
 * character. Returns <code>null</code> if the paragraph's newline has been deleted.
 * 
 * @function SlidesApp.Paragraph#getRange
 * 
 * @return {SlidesApp.TextRange}
 */



/**
 * @class SlidesApp.ParagraphAlignment
 */

/**
 * The paragraph is centered.
 * 
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.CENTER
 */
/**
 * The paragraph is aligned to the end of the line. Right-aligned for left-to-right text,
 * left-aligned otherwise.
 * 
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.END
 */
/**
 * The paragraph is justified.
 * 
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.JUSTIFIED
 */
/**
 * The paragraph is aligned to the start of the line. Left-aligned for left-to-right text,
 * right-aligned otherwise.
 * 
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.START
 */
/**
 * A paragraph alignment that is not supported.
 * 
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.UNSUPPORTED
 */

/**
 * @class SlidesApp.ParagraphStyle
 */

/**
 * Returns the text end indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if there are multiple paragraph styles on the given text.
 * 
 * <p>The side that corresponds to the end of the text is based on the current text direction.
 * 
 * @function SlidesApp.ParagraphStyle#getIndentEnd
 * 
 * @return {Number}
 */


/**
 * Returns the indentation for the first line of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or
 * <code>null</code> if there are multiple paragraph styles on the given text.
 * 
 * @function SlidesApp.ParagraphStyle#getIndentFirstLine
 * 
 * @return {Number}
 */


/**
 * Returns the text start indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if there are multiple paragraph styles on the given text.
 * 
 * <p>The side that corresponds to the start of the text is based on the current text direction.
 * 
 * @function SlidesApp.ParagraphStyle#getIndentStart
 * 
 * @return {Number}
 */


/**
 * Returns the line spacing, or <code>null</code> if there are multiple paragraph styles on the given
 * text.
 * 
 * <p>This is a value that corresponds to the space between lines, as a percentage of normal.
 * Normal is represented as 100.0.
 * 
 * @function SlidesApp.ParagraphStyle#getLineSpacing
 * 
 * @return {Number}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html'>ParagraphAlignment</a></code> of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code>
 * if there are multiple paragraph styles on the given text.
 * 
 * @function SlidesApp.ParagraphStyle#getParagraphAlignment
 * 
 * @return {SlidesApp.ParagraphAlignment}
 */


/**
 * Returns the extra space above paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if
 * there are multiple paragraph styles on the given text.
 * 
 * @function SlidesApp.ParagraphStyle#getSpaceAbove
 * 
 * @return {Number}
 */


/**
 * Returns the extra space below paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if
 * there are multiple paragraph styles on the given text.
 * 
 * @function SlidesApp.ParagraphStyle#getSpaceBelow
 * 
 * @return {Number}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/spacing-mode.html'>SpacingMode</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code> if
 * there are multiple paragraph styles on the given text.
 * 
 * @function SlidesApp.ParagraphStyle#getSpacingMode
 * 
 * @return {SlidesApp.SpacingMode}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-direction.html'>TextDirection</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code> if
 * there are multiple paragraph styles on the given text.
 * 
 * @function SlidesApp.ParagraphStyle#getTextDirection
 * 
 * @return {SlidesApp.TextDirection}
 */


/**
 * Sets the text end indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 * 
 * <p>The side that corresponds to the end of the text is based on the current text direction.
 * 
 * @function SlidesApp.ParagraphStyle#setIndentEnd
 * 
 * @param {Number} indent
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the indentation for the first line of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 * 
 * @function SlidesApp.ParagraphStyle#setIndentFirstLine
 * 
 * @param {Number} indent
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the text start indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 * 
 * <p>The side that corresponds to the start of the text is based on the current text direction.
 * 
 * @function SlidesApp.ParagraphStyle#setIndentStart
 * 
 * @param {Number} indent
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the line spacing.
 * 
 * <p>This is a value that corresponds to the space between lines, as a percentage of normal.
 * Normal is represented as 100.0.
 * 
 * @function SlidesApp.ParagraphStyle#setLineSpacing
 * 
 * @param {Number} spacing
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html'>ParagraphAlignment</a></code> of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
 * 
 * @function SlidesApp.ParagraphStyle#setParagraphAlignment
 * 
 * @param {SlidesApp.ParagraphAlignment} alignment
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the extra space above paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 * 
 * @function SlidesApp.ParagraphStyle#setSpaceAbove
 * 
 * @param {Number} space
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the extra space below paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 * 
 * @function SlidesApp.ParagraphStyle#setSpaceBelow
 * 
 * @param {Number} space
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/spacing-mode.html'>SpacingMode</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
 * 
 * @function SlidesApp.ParagraphStyle#setSpacingMode
 * 
 * @param {SlidesApp.SpacingMode} mode
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-direction.html'>TextDirection</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
 * 
 * @function SlidesApp.ParagraphStyle#setTextDirection
 * 
 * @param {SlidesApp.TextDirection} direction
 * 
 * @return {SlidesApp.ParagraphStyle}
 */



/**
 * @class SlidesApp.PictureFill
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function SlidesApp.PictureFill#getAs
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
 * @function SlidesApp.PictureFill#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Gets a URL to the image.
 * 
 * <p>This URL is tagged with the account of the requester, so anyone with the URL effectively
 * accesses the image as the original requester. Access to the image may be lost if the
 * presentation's sharing settings change. The URL expires after a short period of time.
 * 
 * @function SlidesApp.PictureFill#getContentUrl
 * 
 * @return {String}
 */


/**
 * Gets the image's source URL, if available.
 * 
 * <p>When an image is inserted by URL, returns the URL provided during image insertion.
 * 
 * @function SlidesApp.PictureFill#getSourceUrl
 * 
 * @return {String} the image URL or <code>null</code> if the image does not have a source URL
 */



/**
 * @class SlidesApp.PlaceholderType
 */

/**
 * Body text.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.BODY
 */
/**
 * Title centered.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.CENTERED_TITLE
 */
/**
 * Chart or graph.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.CHART
 */
/**
 * Clip art image.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.CLIP_ART
 */
/**
 * Date and time.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.DATE_AND_TIME
 */
/**
 * Diagram.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.DIAGRAM
 */
/**
 * Footer text.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.FOOTER
 */
/**
 * Header text.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.HEADER
 */
/**
 * Multimedia.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.MEDIA
 */
/**
 * Not a Placeholder.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.NONE
 */
/**
 * Any content type.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.OBJECT
 */
/**
 * Picture.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.PICTURE
 */
/**
 * Slide image.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.SLIDE_IMAGE
 */
/**
 * Number of a slide.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.SLIDE_NUMBER
 */
/**
 * Subtitle.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.SUBTITLE
 */
/**
 * Table.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.TABLE
 */
/**
 * Slide title.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.TITLE
 */
/**
 * A placeholder type that is not supported.
 * 
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Point
 */

/**
 * Gets the horizontal coordinate, measured in points.
 * 
 * @function SlidesApp.Point#getX
 * 
 * @return {Number}
 */


/**
 * Gets the vertical coordinate, measured in points.
 * 
 * @function SlidesApp.Point#getY
 * 
 * @return {Number}
 */



/**
 * @class SlidesApp.PredefinedLayout
 */

/**
 * Layout with a big number heading.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.BIG_NUMBER
 */
/**
 * Blank layout, with no placeholders.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.BLANK
 */
/**
 * Layout with a caption at the bottom.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.CAPTION_ONLY
 */
/**
 * Layout with a main point.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.MAIN_POINT
 */
/**
 * Layout with one title and one body, arranged in a single column.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.ONE_COLUMN_TEXT
 */
/**
 * Layout with a section title.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.SECTION_HEADER
 */
/**
 * Layout with a title and subtitle on one side and description on the other.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.SECTION_TITLE_AND_DESCRIPTION
 */
/**
 * Layout with a title and a subtitle.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE
 */
/**
 * Layout with a title and body.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE_AND_BODY
 */
/**
 * Layout with a title and two columns.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE_AND_TWO_COLUMNS
 */
/**
 * Layout with only a title.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE_ONLY
 */
/**
 * A layout that is not supported.
 * 
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.UNSUPPORTED
 */

/**
 * @class SlidesApp.Presentation
 */

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function SlidesApp.Presentation#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function SlidesApp.Presentation#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If any of the
 * users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function SlidesApp.Presentation#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function SlidesApp.Presentation#addViewer
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function SlidesApp.Presentation#addViewer
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If any of the
 * users were already on the list of editors, this method has no effect for them.
 * 
 * @function SlidesApp.Presentation#addViewers
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Appends a slide to the end of the presentation using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK'>PredefinedLayout.BLANK</a></code>
 * predefined layout based on the current master. The current master is one of the following:
 * 
 * <ul>
 *   <li>The master of the current last slide.
 *   <li>The first master in the presentation, if there is no slide.
 * </ul>
 * 
 * @function SlidesApp.Presentation#appendSlide
 * 
 * @return {SlidesApp.Slide} The new slide that is appended.
 */


/**
 * Appends a slide to the end of the presentation using the specified layout based on the current
 * master. The current master is one of the following:
 * 
 * <ul>
 *   <li>The master of the current last slide.
 *   <li>The first master in the presentation, if there is no slide.
 * </ul>
 * 
 * @function SlidesApp.Presentation#appendSlide
 * 
 * @param {SlidesApp.Layout} layout - The layout to use for the new slide; it should be present in the current master.
 * 
 * @return {SlidesApp.Slide} The new slide that is appended.
 */


/**
 * Appends a slide to the end of the presentation using the specified predefined layout based on
 * the current master. The current master is one of the following:
 * 
 * <ul>
 *   <li>The master of the current last slide.
 *   <li>The first master in the presentation, if there is no slide.
 * </ul>
 * 
 * @function SlidesApp.Presentation#appendSlide
 * 
 * @param {SlidesApp.PredefinedLayout} predefinedLayout - The predefined layout to use for the new slide; it should be present in
 *     the current master.
 * 
 * @return {SlidesApp.Slide} The new slide that is appended.
 */


/**
 * Appends a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to the end of the presentation.
 * 
 * <p>If the slide being copied is from a different presentation, the parent master and layout
 * pages are copied as well if they do not already exist in this presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a slide from another presentation and appends it.
 * var otherPresentation = SlidesApp.openById(&#39;presentationId&#39;);
 * var currentPresentation = SlidesApp.getActivePresentation();
 * var slide = otherPresentation.getSlides[0];
 * currentPresentation.appendSlide(slide);
 * </code></pre>
 * 
 * @function SlidesApp.Presentation#appendSlide
 * 
 * @param {SlidesApp.Slide} slide - The slide to be copied and appended.
 * 
 * @return {SlidesApp.Slide} The new slide that is appended.
 */


/**
 * Appends a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> from the source presentation to the end of the
 * current presentation, and sets the slide link as specified by the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html'>SlideLinkingMode</a></code>.
 * 
 * <p>If the slide being copied is from a different presentation, the parent master and layout
 * pages are copied as well if they do not already exist in the current presentation.
 * 
 * <p>If the link mode is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code>, the appended slide can be updated to
 * match the provided source slide when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html#refreshSlide()'>Slide.refreshSlide()</a></code> is called. Other collaborators
 * can see the link to the source slide. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code> cannot be used with
 * source slides from the current presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a slide from another presentation, then append and link it.
 * var sourcePresentation = SlidesApp.openById(&#39;presentationId&#39;);
 * var currentPresentation = SlidesApp.getActivePresentation();
 * var slide = sourcePresentation.getSlides()[0];
 * var appendedSlide = currentPresentation.appendSlide(slide, SlideApp.SlideLinkingMode.LINKED);
 * </code></pre>
 * 
 * @function SlidesApp.Presentation#appendSlide
 * 
 * @param {SlidesApp.Slide} slide - The slide to be copied, appended, and linked.
 * @param {SlidesApp.SlideLinkingMode} linkingMode - The link mode to use.
 * 
 * @return {SlidesApp.Slide} The new slide.
 */


/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user who executes the script does
 * not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, this method throws an exception.
 * 
 * @function SlidesApp.Presentation#getEditors
 * 
 * @return {User[]} An array of users with edit permission.
 */


/**
 * Gets the presentation's unique identifier. The presentation ID is used with <code>SlidesApp.openById()</code> to open a specific presentation instance.
 * 
 * @function SlidesApp.Presentation#getId
 * 
 * @return {String} The ID of this presentation.
 */


/**
 * Gets the layouts in the presentation.
 * 
 * @function SlidesApp.Presentation#getLayouts
 * 
 * @return {SlidesApp.Layout[]} The list of layouts in this presentation.
 */


/**
 * Gets the masters in the presentation.
 * 
 * @function SlidesApp.Presentation#getMasters
 * 
 * @return {SlidesApp.Master[]} The list of masters in this presentation.
 */


/**
 * Gets the name or title of the presentation.
 * 
 * @function SlidesApp.Presentation#getName
 * 
 * @return {String} The title of this presentation.
 */


/**
 * Gets the notes master of the presentation.
 * 
 * @function SlidesApp.Presentation#getNotesMaster
 * 
 * @return {SlidesApp.NotesMaster} The notes master of the presentation.
 */


/**
 * Gets the page height of the notes master and notes pages in the presentation in points. They
 * all have the same page height.
 * 
 * @function SlidesApp.Presentation#getNotesPageHeight
 * 
 * @return {Number} The notes page height in points.
 */


/**
 * Gets the page width of the notes master and notes pages in the presentation in points. They all
 * have the same page width.
 * 
 * @function SlidesApp.Presentation#getNotesPageWidth
 * 
 * @return {Number} The notes page width in points.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.Presentation#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Gets the page height of the slides, layouts, and masters in the presentation in points. They
 * all have the same page height.
 * 
 * @function SlidesApp.Presentation#getPageHeight
 * 
 * @return {Number} The page height in points.
 */


/**
 * Gets the page width of the slides, layouts, and masters in the presentation in points. They all
 * have the same page width.
 * 
 * @function SlidesApp.Presentation#getPageWidth
 * 
 * @return {Number} The page width in points.
 */


/**
 * Gets the user’s selection in the active presentation. A script can only access the selection of
 * the user who is running the script, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Note that the selection returned is the current effective selection. As the script performs
 * various changes to the presentation, the selection is transformed to take them into account.
 * For example if two shapes A and B are selected, and then the script removes shape B, the
 * returned selection object is implicitly updated such that only shape A is selected.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the current active page that is selected in the active presentation.
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var currentPage = selection.getCurrentPage();
 * </code></pre>
 * 
 * @function SlidesApp.Presentation#getSelection
 * 
 * @return {SlidesApp.Selection} A representation of the user's selection, or <code>null</code> if the script is not bound to
 *     the presentation or if there is no valid user selection.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.Presentation#getSlideById
 * 
 * @param {String} id - The ID of the slide that is being retrieved.
 * 
 * @return {SlidesApp.Slide} The slide with the given ID.
 */


/**
 * Gets the slides in the presentation.
 * 
 * @function SlidesApp.Presentation#getSlides
 * 
 * @return {SlidesApp.Slide[]} The list of slides in this presentation.
 */


/**
 * Retrieves the URL to access this presentation.
 * 
 * <pre class="prettyprint"><code>
 * var presentation = SlidesApp.getActivePresentation();
 * 
 * // Send out the link to open the presentation.
 * MailApp.sendEmail(&quot;&lt;email-address&gt;&quot;, presentation.getName(), presentation.getUrl());
 * </code></pre>
 * 
 * @function SlidesApp.Presentation#getUrl
 * 
 * @return {String} The URL to access the current presentation.
 */


/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user who executes
 * the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, this method throws an exception.
 * 
 * @function SlidesApp.Presentation#getViewers
 * 
 * @return {User[]} An array of users with view or comment permission.
 */


/**
 * Inserts a slide at the specified index in the presentation using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK'>PredefinedLayout.BLANK</a></code> predefined layout based on the current master. The current master is
 * one of the following:
 * 
 * <ul>
 *   <li>The master of the previous slide.
 *   <li>The master of the first slide, if the insertionIndex is zero.
 *   <li>The first master in the presentation, if there is no slide.
 * </ul>
 * 
 * @function SlidesApp.Presentation#insertSlide
 * 
 * @param {IntegerNum} insertionIndex - The zero-based index indicating where to insert the slide.
 * 
 * @return {SlidesApp.Slide} The new slide that is inserted.
 */


/**
 * Inserts a slide at the specified index in the presentation using the specified layout based on
 * the current master. The current master is one of the following:
 * 
 * <ul>
 *   <li>The master of the previous slide.
 *   <li>The master of the first slide, if the insertionIndex is zero.
 *   <li>The first master in the presentation, if there is no slide.
 * </ul>
 * 
 * @function SlidesApp.Presentation#insertSlide
 * 
 * @param {IntegerNum} insertionIndex - The zero-based index indicating where to insert the slide.
 * @param {SlidesApp.Layout} layout - The layout to use for the new slide; it should be present in the current master.
 * 
 * @return {SlidesApp.Slide} The new slide that is inserted.
 */


/**
 * Inserts a slide at the specified index in the presentation using the specified predefined
 * layout based on the current master. The current master is one of the following:
 * 
 * <ul>
 *   <li>The master of the previous slide.
 *   <li>The master of the first slide, if the insertionIndex is zero.
 *   <li>The first master in the presentation, if there is no slide.
 * </ul>
 * 
 * @function SlidesApp.Presentation#insertSlide
 * 
 * @param {IntegerNum} insertionIndex - The zero-based index indicating where to insert the slide.
 * @param {SlidesApp.PredefinedLayout} predefinedLayout - The predefined layout to use for the new slide; it should be present in
 *     the current master.
 * 
 * @return {SlidesApp.Slide} The new slide that is inserted.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> at the specified index in the presentation.
 * 
 * <p>If the slide being copied is from a different presentation, the parent master and layout
 * pages are copied as well if they do not already exist in this presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a slide from another presentation and inserts it.
 * var otherPresentation = SlidesApp.openById(&#39;presentationId&#39;);
 * var currentPresentation = SlidesApp.getActivePresentation();
 * var slide = otherPresentation.getSlides[0];
 * var insertionIndex = 1;
 * currentPresentation.insertSlide(insertionIndex, slide);
 * </code></pre>
 * 
 * @function SlidesApp.Presentation#insertSlide
 * 
 * @param {IntegerNum} insertionIndex - The zero-based index indicating where to insert the slide.
 * @param {SlidesApp.Slide} slide - The slide to be copied and inserted.
 * 
 * @return {SlidesApp.Slide} The new slide that is inserted.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> from the source presentation into the specified
 * index in the current presentation, and sets the slide link as specified by the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html'>SlideLinkingMode</a></code>.
 * 
 * <p>If the slide being copied is from a different presentation, the parent master and layout
 * pages are copied as well if they do not already exist in the current presentation.
 * 
 * <p>If the link mode is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code>, the inserted slide can be updated to
 * match the provided source slide when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html#refreshSlide()'>Slide.refreshSlide()</a></code> is called. Other collaborators
 * can see the link to the source slide. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code> cannot be used with
 * source slides from the current presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a slide from another presentation, then insert and link it.
 * var sourcePresentation = SlidesApp.openById(&#39;presentationId&#39;);
 * var currentPresentation = SlidesApp.getActivePresentation();
 * var slide = sourcePresentation.getSlides()[0];
 * var insertionIndex = 1;
 * var insertedSlide =
 *     currentPresentation.insertSlide(
 *     insertionIndex, slide, SlidesApp.SlideLinkingMode.LINKED);
 * </code></pre>
 * 
 * @function SlidesApp.Presentation#insertSlide
 * 
 * @param {IntegerNum} insertionIndex - The zero-based index indicating where to insert the slide.
 * @param {SlidesApp.Slide} slide - The slide to be copied and inserted.
 * @param {SlidesApp.SlideLinkingMode} linkingMode - The link mode to use.
 * 
 * @return {SlidesApp.Slide} The new slide.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire
 * domain.
 * 
 * @function SlidesApp.Presentation#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire
 * domain.
 * 
 * @function SlidesApp.Presentation#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This
 * method has no effect if the user is an editor, not a viewer or commenter. This method also does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who
 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's
 * entire domain.
 * 
 * @function SlidesApp.Presentation#removeViewer
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This
 * method has no effect if the user is an editor, not a viewer. This method also does not block
 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have general
 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire domain.
 * 
 * @function SlidesApp.Presentation#removeViewer
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {SlidesApp.Presentation} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> for chaining.
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.Presentation#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.Presentation#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Saves the current <code>Presentation</code>. Causes pending updates to be flushed and applied.
 * 
 * <p>The <code>saveAndClose()</code> method is automatically invoked at the end of script execution
 * for each open <code>Presentation</code>, even if the script execution terminated with an error.
 * 
 * <p>A closed <code>Presentation</code> cannot be edited. Use one of the open methods on <code>SlidesApp</code> to reopen a given presentation for editing.
 * 
 * @function SlidesApp.Presentation#saveAndClose
 * 
 * @return void
 */


/**
 * Sets the name or title of the presentation.
 * 
 * @function SlidesApp.Presentation#setName
 * 
 * @param {String} name - The name to set for this presentation.
 * 
 * @return void
 */



/**
 * @class SlidesApp.RgbColor
 */

/**
 * Returns the color as a CSS-style 7 character hexadecimal string, #rrggbb.
 * 
 * @function SlidesApp.RgbColor#asHexString
 * 
 * @return {String}
 */


/**
 * The blue channel of this color, as a number from 0 to 255.
 * 
 * @function SlidesApp.RgbColor#getBlue
 * 
 * @return {IntegerNum}
 */


/**
 * Get the type of this color.
 * 
 * @function SlidesApp.RgbColor#getColorType
 * 
 * @return {SlidesApp.ColorType}
 */


/**
 * The green channel of this color, as a number from 0 to 255.
 * 
 * @function SlidesApp.RgbColor#getGreen
 * 
 * @return {IntegerNum}
 */


/**
 * The red channel of this color, as a number from 0 to 255.
 * 
 * @function SlidesApp.RgbColor#getRed
 * 
 * @return {IntegerNum}
 */



/**
 * @class SlidesApp.Selection
 */

/**
 * Returns the currently active <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> or <code>null</code> if there is no active page.
 * 
 * <pre class="prettyprint">
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var currentPage = selection.getCurrentPage();
 * if (currentPage != null) {
 *   Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
 * }
 * </pre>
 * 
 * @function SlidesApp.Selection#getCurrentPage
 * 
 * @return {SlidesApp.Page}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-range.html'>PageElementRange</a></code> collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances that are
 * selected or <code>null</code> if there are no <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances selected.
 * 
 * <pre class="prettyprint">
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var selectionType = selection.getSelectionType();
 * if (selectionType == SlidesApp.SelectionType.PAGE_ELEMENT) {
 *   var currentPage = selection.getCurrentPage();
 *   var pageElements = selection.getPageElementRange().getPageElements();
 *   Logger.log('Number of page elements selected: ' + pageElements.length);
 * }
 * </pre>
 * 
 * @function SlidesApp.Selection#getPageElementRange
 * 
 * @return {SlidesApp.PageElementRange}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-range.html'>PageRange</a></code> a collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> instances in the flimstrip that are
 * selected or <code>null</code> if the selection is not of type <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html#PAGE'>SelectionType.PAGE</a></code>.
 * 
 * <pre class="prettyprint">
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var selectionType = selection.getSelectionType();
 * if (selectionType == SlidesApp.SelectionType.PAGE) {
 *   var pageRange = selection.getPageRange();
 *   Logger.log('Number of pages in the flimstrip selected: ' + pageRange.getPages().length);
 * }
 * }</pre>
 * 
 * @function SlidesApp.Selection#getPageRange
 * 
 * @return {SlidesApp.PageRange}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html'>SelectionType</a></code>.
 * 
 * <pre class="prettyprint">
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var selectionType = selection.getSelectionType();
 * if (selectionType == SlidesApp.SelectionType.CURRENT_PAGE) {
 *   var currentPage = selection.getCurrentPage();
 *   Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
 * }
 * </pre>
 * 
 * @function SlidesApp.Selection#getSelectionType
 * 
 * @return {SlidesApp.SelectionType}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell-range.html'>TableCellRange</a></code> collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances that are selected
 * or <code>null</code> if there are no <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances selected.
 * 
 * <pre class="prettyprint">
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var selectionType = selection.getSelectionType();
 * if (selectionType == SlidesApp.SelectionType.TABLE_CELL) {
 *   var currentPage = selection.getCurrentPage();
 *   var tableCells = selection.getTableCellRange().getTableCells();
 *   var table = tableCells[0].getParentTable();
 *   Logger.log('Number of table cells selected: ' + tableCells.length);
 * }
 * </pre>
 * 
 * @function SlidesApp.Selection#getTableCellRange
 * 
 * @return {SlidesApp.TableCellRange}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> that is selected or <code>null</code> if the selection is not of type
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html#TEXT'>SelectionType.TEXT</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> represents two scenarios:
 * 
 * <p>1. Range of text selected. For example if a shape has text "Hello", and "He" is selected,
 * the returned range has <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()'>TextRange.getStartIndex()</a></code> = 0, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()'>TextRange.getEndIndex()</a></code> =
 * 2.
 * 
 * <p>2. Cursor position. For example if a shape has text "Hello", and cursor is after "H",
 * ("H|ello"), the returned range has <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()'>TextRange.getStartIndex()</a></code> = 1 and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()'>TextRange.getEndIndex()</a></code> = 1.
 * 
 * <pre class="prettyprint">
 * var selection = SlidesApp.getActivePresentation().getSelection();
 * var selectionType = selection.getSelectionType();
 * if (selectionType == SlidesApp.SelectionType.TEXT) {
 *   var currentPage = selection.getCurrentPage();
 *   var pageElement = selection.getPageElementRange().getPageElements()[0];
 *   var textRange = selection.getTextRange();
 *   Logger.log('Text selected: ' + textRange.asString());
 * }
 * </pre>
 * 
 * @function SlidesApp.Selection#getTextRange
 * 
 * @return {SlidesApp.TextRange}
 */



/**
 * @class SlidesApp.SelectionType
 */

/**
 * Current page selection.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.CURRENT_PAGE
 */
/**
 * No selection.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.NONE
 */
/**
 * Page selection in the thumbnail flimstrip.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.PAGE
 */
/**
 * Page element selection.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.PAGE_ELEMENT
 */
/**
 * Table cell selection.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.TABLE_CELL
 */
/**
 * Text selection.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.TEXT
 */
/**
 * A selection type that is not supported.
 * 
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Shape
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.Shape#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Shape#bringForward
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Shape#bringToFront
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.Shape#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the shape.
 * 
 * @function SlidesApp.Shape#getBorder
 * 
 * @return {SlidesApp.Border} The border setting of this shape.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.Shape#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the shape.
 * 
 * @function SlidesApp.Shape#getContentAlignment
 * 
 * @return {SlidesApp.ContentAlignment} The alignment of text within this shape.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.Shape#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/fill.html'>Fill</a></code> of the shape.
 * 
 * @function SlidesApp.Shape#getFill
 * 
 * @return {SlidesApp.Fill} The fill setting of this shape.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Shape#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Shape#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Shape#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Shape#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null) {
 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
 * }
 * </pre>
 * 
 * @function SlidesApp.Shape#getLink
 * 
 * @return {SlidesApp.Link}
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.Shape#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.Shape#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.Shape#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.Shape#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the parent page element of the placeholder. Returns <code>null</code> if the shape is not a
 * placeholder or has no parent.
 * 
 * @function SlidesApp.Shape#getParentPlaceholder
 * 
 * @return {SlidesApp.PageElement} The parent page elemnt of this shape placeholder, or <code>null</code> this shape is not a
 *     placeholder or doesn't have a parent.
 */


/**
 * Returns the placeholder index of the shape. If two or more instances of the same placeholder
 * types are present in the same page, they each have their own unique index value. Returns <code>null</code> if the shape is not a placeholder.
 * 
 * @function SlidesApp.Shape#getPlaceholderIndex
 * 
 * @return {IntegerNum} This shape's placeholder index, or <code>null</code> if the shape is not a placeholder.
 */


/**
 * Returns the placeholder type of the shape, or <code>PlaceholderType.NONE</code> if the shape is not
 * a placeholder.
 * 
 * @function SlidesApp.Shape#getPlaceholderType
 * 
 * @return {SlidesApp.PlaceholderType} The placeholder type of this shape.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.Shape#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Returns the type of the shape.
 * 
 * @function SlidesApp.Shape#getShapeType
 * 
 * @return {SlidesApp.ShapeType} The type of this shape.
 */


/**
 * Returns the text content of the shape.
 * 
 * <p>Text within a shape always terminates with a newline character.
 * 
 * @function SlidesApp.Shape#getText
 * 
 * @return {SlidesApp.TextRange} The text content of this shape.
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.Shape#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Shape#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.Shape#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.Shape#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.Shape#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.Shape#remove
 * 
 * @return void
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
 * 
 * <pre class="prettyprint">
 * shape.removeLink();
 * </pre>
 * 
 * @function SlidesApp.Shape#removeLink
 * 
 * @return void
 */


/**
 * Replaces this shape with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code>.
 * 
 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 * exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the size of the existing shape.
 * 
 * <pre class="prettyprint"><code>
 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 * // Get the Drive image file with the given ID.
 * var driveImage = DriveApp.getFileById(fileId);
 * shape.replaceWithImage(driveImage);
 * </code></pre>
 * 
 * @function SlidesApp.Shape#replaceWithImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return {SlidesApp.Image} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
 */


/**
 * Replaces this shape with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code>.
 * 
 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 * megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <pre class="prettyprint"><code>
 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 * // Get the Drive image file with the given ID.
 * var driveImage = DriveApp.getFileById(fileId);
 * // Replace and crop the replaced image.
 * shape.replaceWithImage(driveImage, true);
 * </code></pre>
 * 
 * @function SlidesApp.Shape#replaceWithImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing shape's size. Otherwise, the
 *     image is scaled and centered.
 * 
 * @return {SlidesApp.Image} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
 */


/**
 * Replaces this shape with an image.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the size of the existing shape.
 * 
 * @function SlidesApp.Shape#replaceWithImage
 * 
 * @param {String} imageUrl - The image URL to download the image from.
 * 
 * @return {SlidesApp.Image} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
 */


/**
 * Replaces this shape with an image.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * @function SlidesApp.Shape#replaceWithImage
 * 
 * @param {String} imageUrl - The image URL to download the image from.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing shape's size. Otherwise, the
 *     image is scaled and centered.
 * 
 * @return {SlidesApp.Image} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
 */


/**
 * Replaces this shape with an Google Sheets chart.
 * 
 * <p>The chart is linked with the source Google Sheets chart which allows it to be updated. Other
 * collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Replace the shape with the Sheets chart.
 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 * shape.replaceWithSheetsChart(chart);
 * </code></pre>
 * 
 * @function SlidesApp.Shape#replaceWithSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet that replaces the shape.
 * 
 * @return {SlidesApp.SheetsChart} The chart that replaced the shape.
 */


/**
 * Replaces this shape with an image of a Google Sheets chart.
 * 
 * <p>In order to maintain the Google Sheets chart's aspect ratio, the chart image is scaled and
 * centered with respect to the size of the existing shape.
 * 
 * <p>The image of the chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Replace the shape with the Sheets chart as an image.
 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 * shape.replaceWithSheetsChartAsImage(chart);
 * </code></pre>
 * 
 * @function SlidesApp.Shape#replaceWithSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet that replaces the shape.
 * 
 * @return {SlidesApp.Image} The image of the chart that replaced the shape.
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Shape#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Shape#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.Shape#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.Shape#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Shape#sendBackward
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Shape#sendToBack
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the shape.
 * 
 * @function SlidesApp.Shape#setContentAlignment
 * 
 * @param {SlidesApp.ContentAlignment} contentAlignment - The alignment to set.
 * 
 * @return {SlidesApp.Shape} This shape, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.Shape#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.Shape} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Shape#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Shape#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(0);
 * </pre>
 * 
 * @function SlidesApp.Shape#setLinkSlide
 * 
 * @param {IntegerNum} slideIndex - The zero-based index to the slide.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * var slide = presentation.getSlides()[0];
 * shape.setLinkSlide(slide);
 * </pre>
 * 
 * @function SlidesApp.Shape#setLinkSlide
 * 
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 * </pre>
 * 
 * @function SlidesApp.Shape#setLinkSlide
 * 
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
 * 
 * <pre class="prettyprint">
 * // Set a link to the URL.
 * shape.setLinkUrl("https://slides.google.com");
 * </pre>
 * 
 * @function SlidesApp.Shape#setLinkUrl
 * 
 * @param {String} url - The URL string.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.Shape#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.Shape#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.Shape} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Shape#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.Shape#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.Shape} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Shape#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.Shape} This page element, for chaining.
 */



/**
 * @class SlidesApp.ShapeType
 */

/**
 * Curved arc shape. Corresponds to ECMA-376 ST_ShapeType 'arc'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARC
 */
/**
 * East arrow shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARROW_EAST
 */
/**
 * North arrow shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARROW_NORTH
 */
/**
 * Northeast arrow shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARROW_NORTH_EAST
 */
/**
 * Bent arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BENT_ARROW
 */
/**
 * Bent up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentUpArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BENT_UP_ARROW
 */
/**
 * Bevel shape. Corresponds to ECMA-376 ST_ShapeType 'bevel'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BEVEL
 */
/**
 * Block arc shape. Corresponds to ECMA-376 ST_ShapeType 'blockArc'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BLOCK_ARC
 */
/**
 * Brace pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracePair'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BRACE_PAIR
 */
/**
 * Bracket pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracketPair'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BRACKET_PAIR
 */
/**
 * Can shape. Corresponds to ECMA-376 ST_ShapeType 'can'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CAN
 */
/**
 * Chevron shape. Corresponds to ECMA-376 ST_ShapeType 'chevron'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CHEVRON
 */
/**
 * Chord shape. Corresponds to ECMA-376 ST_ShapeType 'chord'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CHORD
 */
/**
 * Cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloud'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CLOUD
 */
/**
 * Callout cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloudCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CLOUD_CALLOUT
 */
/**
 * Corner shape. Corresponds to ECMA-376 ST_ShapeType 'corner'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CORNER
 */
/**
 * Cube shape. Corresponds to ECMA-376 ST_ShapeType 'cube'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CUBE
 */
/**
 * Curved down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedDownArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_DOWN_ARROW
 */
/**
 * Curved left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedLeftArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_LEFT_ARROW
 */
/**
 * Curved right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedRightArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_RIGHT_ARROW
 */
/**
 * Curved up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedUpArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_UP_ARROW
 */
/**
 * Custom shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CUSTOM
 */
/**
 * Decagon shape. Corresponds to ECMA-376 ST_ShapeType 'decagon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DECAGON
 */
/**
 * Diagonal stripe shape. Corresponds to ECMA-376 ST_ShapeType 'diagStripe'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DIAGONAL_STRIPE
 */
/**
 * Diamond shape. Corresponds to ECMA-376 ST_ShapeType 'diamond'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DIAMOND
 */
/**
 * Dodecagon shape. Corresponds to ECMA-376 ST_ShapeType 'dodecagon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DODECAGON
 */
/**
 * Donut shape. Corresponds to ECMA-376 ST_ShapeType 'donut'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DONUT
 */
/**
 * Double wave shape. Corresponds to ECMA-376 ST_ShapeType 'doubleWave'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DOUBLE_WAVE
 */
/**
 * Down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DOWN_ARROW
 */
/**
 * Callout down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrowCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DOWN_ARROW_CALLOUT
 */
/**
 * Ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'ellipse'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ELLIPSE
 */
/**
 * Ellipse ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ELLIPSE_RIBBON
 */
/**
 * Ellipse ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon2'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ELLIPSE_RIBBON_2
 */
/**
 * Alternate process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartAlternateProcess'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_ALTERNATE_PROCESS
 */
/**
 * Collate flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartCollate'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_COLLATE
 */
/**
 * Connector flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartConnector'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_CONNECTOR
 */
/**
 * Decision flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDecision'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DECISION
 */
/**
 * Delay flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDelay'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DELAY
 */
/**
 * Display flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDisplay'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DISPLAY
 */
/**
 * Document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDocument'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DOCUMENT
 */
/**
 * Extract flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartExtract'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_EXTRACT
 */
/**
 * Input output flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInputOutput'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_INPUT_OUTPUT
 */
/**
 * Internal storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInternalStorage'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_INTERNAL_STORAGE
 */
/**
 * Magnetic disk flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDisk'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MAGNETIC_DISK
 */
/**
 * Magnetic drum flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDrum'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MAGNETIC_DRUM
 */
/**
 * Magnetic tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticTape'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MAGNETIC_TAPE
 */
/**
 * Manual input flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualInput'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MANUAL_INPUT
 */
/**
 * Manual operation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualOperation'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MANUAL_OPERATION
 */
/**
 * Merge flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMerge'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MERGE
 */
/**
 * Multi-document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMultidocument'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MULTIDOCUMENT
 */
/**
 * Offline storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOfflineStorage'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_OFFLINE_STORAGE
 */
/**
 * Off-page connector flow shape. Corresponds to ECMA-376 ST_ShapeType
 * 'flowChartOffpageConnector'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_OFFPAGE_CONNECTOR
 */
/**
 * Online storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOnlineStorage'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_ONLINE_STORAGE
 */
/**
 * Or flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOr'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_OR
 */
/**
 * Predefined process flow shape. Corresponds to ECMA-376 ST_ShapeType
 * 'flowChartPredefinedProcess'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PREDEFINED_PROCESS
 */
/**
 * Preparation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPreparation'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PREPARATION
 */
/**
 * Process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartProcess'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PROCESS
 */
/**
 * Punched card flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedCard'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PUNCHED_CARD
 */
/**
 * Punched tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedTape'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PUNCHED_TAPE
 */
/**
 * Sort flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSort'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_SORT
 */
/**
 * Summing junction flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSummingJunction'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_SUMMING_JUNCTION
 */
/**
 * Terminator flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartTerminator'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_TERMINATOR
 */
/**
 * Folded corner shape. Corresponds to ECMA-376 ST_ShapeType 'foldedCorner'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FOLDED_CORNER
 */
/**
 * Frame shape. Corresponds to ECMA-376 ST_ShapeType 'frame'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FRAME
 */
/**
 * Half frame shape. Corresponds to ECMA-376 ST_ShapeType 'halfFrame'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HALF_FRAME
 */
/**
 * Heart shape. Corresponds to ECMA-376 ST_ShapeType 'heart'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HEART
 */
/**
 * Heptagon shape. Corresponds to ECMA-376 ST_ShapeType 'heptagon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HEPTAGON
 */
/**
 * Hexagon shape. Corresponds to ECMA-376 ST_ShapeType 'hexagon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HEXAGON
 */
/**
 * Home plate shape. Corresponds to ECMA-376 ST_ShapeType 'homePlate'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HOME_PLATE
 */
/**
 * Horizontal scroll shape. Corresponds to ECMA-376 ST_ShapeType 'horizontalScroll'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HORIZONTAL_SCROLL
 */
/**
 * Irregular seal 1 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal1'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.IRREGULAR_SEAL_1
 */
/**
 * Irregular seal 2 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal2'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.IRREGULAR_SEAL_2
 */
/**
 * Left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_ARROW
 */
/**
 * Callout left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrowCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_ARROW_CALLOUT
 */
/**
 * Left brace shape. Corresponds to ECMA-376 ST_ShapeType 'leftBrace'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_BRACE
 */
/**
 * Left bracket shape. Corresponds to ECMA-376 ST_ShapeType 'leftBracket'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_BRACKET
 */
/**
 * Left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_RIGHT_ARROW
 */
/**
 * Callout left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrowCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_RIGHT_ARROW_CALLOUT
 */
/**
 * Left right up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightUpArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_RIGHT_UP_ARROW
 */
/**
 * Left up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftUpArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_UP_ARROW
 */
/**
 * Lightning bolt shape. Corresponds to ECMA-376 ST_ShapeType 'lightningBolt'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LIGHTNING_BOLT
 */
/**
 * Divide math shape. Corresponds to ECMA-376 ST_ShapeType 'mathDivide'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_DIVIDE
 */
/**
 * Equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathEqual'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_EQUAL
 */
/**
 * Minus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMinus'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_MINUS
 */
/**
 * Multiply math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMultiply'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_MULTIPLY
 */
/**
 * Not equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathNotEqual'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_NOT_EQUAL
 */
/**
 * Plus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathPlus'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_PLUS
 */
/**
 * Moon shape. Corresponds to ECMA-376 ST_ShapeType 'moon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MOON
 */
/**
 * Notched right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'notchedRightArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.NOTCHED_RIGHT_ARROW
 */
/**
 * No smoking shape. Corresponds to ECMA-376 ST_ShapeType 'noSmoking'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.NO_SMOKING
 */
/**
 * Octagon shape. Corresponds to ECMA-376 ST_ShapeType 'octagon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.OCTAGON
 */
/**
 * Parallelogram shape. Corresponds to ECMA-376 ST_ShapeType 'parallelogram'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PARALLELOGRAM
 */
/**
 * Pentagon shape. Corresponds to ECMA-376 ST_ShapeType 'pentagon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PENTAGON
 */
/**
 * Pie shape. Corresponds to ECMA-376 ST_ShapeType 'pie'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PIE
 */
/**
 * Plaque shape. Corresponds to ECMA-376 ST_ShapeType 'plaque'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PLAQUE
 */
/**
 * Plus shape. Corresponds to ECMA-376 ST_ShapeType 'plus'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PLUS
 */
/**
 * Quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.QUAD_ARROW
 */
/**
 * Callout quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrowCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.QUAD_ARROW_CALLOUT
 */
/**
 * Rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'rect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RECTANGLE
 */
/**
 * Ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIBBON
 */
/**
 * Ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon2'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIBBON_2
 */
/**
 * Right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_ARROW
 */
/**
 * Callout right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrowCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_ARROW_CALLOUT
 */
/**
 * Right brace shape. Corresponds to ECMA-376 ST_ShapeType 'rightBrace'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_BRACE
 */
/**
 * Right bracket shape. Corresponds to ECMA-376 ST_ShapeType 'rightBracket'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_BRACKET
 */
/**
 * Right triangle shape. Corresponds to ECMA-376 ST_ShapeType 'rtTriangle'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_TRIANGLE
 */
/**
 * One round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'round1Rect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_1_RECTANGLE
 */
/**
 * Two diagonal round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 * 'round2DiagRect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_2_DIAGONAL_RECTANGLE
 */
/**
 * Two same-side round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 * 'round2SameRect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_2_SAME_RECTANGLE
 */
/**
 * Round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'roundRect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_RECTANGLE
 */
/**
 * Smiley face shape. Corresponds to ECMA-376 ST_ShapeType 'smileyFace'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SMILEY_FACE
 */
/**
 * One snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip1Rect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_1_RECTANGLE
 */
/**
 * Two diagonal snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip2DiagRect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_2_DIAGONAL_RECTANGLE
 */
/**
 * Two same-side snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 * 'snip2SameRect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_2_SAME_RECTANGLE
 */
/**
 * One snip one round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 * 'snipRoundRect'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_ROUND_RECTANGLE
 */
/**
 * Speech shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SPEECH
 */
/**
 * Star burst shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STARBURST
 */
/**
 * Ten pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star10'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_10
 */
/**
 * Twelve pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star12'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_12
 */
/**
 * Sixteen pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star16'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_16
 */
/**
 * Twenty four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star24'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_24
 */
/**
 * Thirty two pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star32'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_32
 */
/**
 * Four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star4'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_4
 */
/**
 * Five pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star5'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_5
 */
/**
 * Six pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star6'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_6
 */
/**
 * Seven pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star7'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_7
 */
/**
 * Eight pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star8'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_8
 */
/**
 * Striped right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'stripedRightArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STRIPED_RIGHT_ARROW
 */
/**
 * Sun shape. Corresponds to ECMA-376 ST_ShapeType 'sun'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SUN
 */
/**
 * Teardrop shape. Corresponds to ECMA-376 ST_ShapeType 'teardrop'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TEARDROP
 */
/**
 * Text box shape.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TEXT_BOX
 */
/**
 * Trapezoid shape. Corresponds to ECMA-376 ST_ShapeType 'trapezoid'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TRAPEZOID
 */
/**
 * Triangle shape. Corresponds to ECMA-376 ST_ShapeType 'triangle'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TRIANGLE
 */
/**
 * A shape type that is not supported.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UNSUPPORTED
 */
/**
 * Up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UP_ARROW
 */
/**
 * Callout up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrowCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UP_ARROW_CALLOUT
 */
/**
 * Up down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upDownArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UP_DOWN_ARROW
 */
/**
 * U-turn arrow shape. Corresponds to ECMA-376 ST_ShapeType 'uturnArrow'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UTURN_ARROW
 */
/**
 * Vertical scroll shape. Corresponds to ECMA-376 ST_ShapeType 'verticalScroll'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.VERTICAL_SCROLL
 */
/**
 * Wave shape. Corresponds to ECMA-376 ST_ShapeType 'wave'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WAVE
 */
/**
 * Callout wedge ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeEllipseCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WEDGE_ELLIPSE_CALLOUT
 */
/**
 * Callout wedge rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeRectCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WEDGE_RECTANGLE_CALLOUT
 */
/**
 * Callout wedge round rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 * 'wedgeRoundRectCallout'.
 * 
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WEDGE_ROUND_RECTANGLE_CALLOUT
 */

/**
 * @class SlidesApp.SheetsChart
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.SheetsChart#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Returns the chart as an image or <code>null</code> if the chart is not an embedded image.
 * 
 * @function SlidesApp.SheetsChart#asImage
 * 
 * @return {SlidesApp.Image} This chart as an image, or <code>null</code> if the chart is not an embedded image.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.SheetsChart#bringForward
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.SheetsChart#bringToFront
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.SheetsChart#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Gets the ID of the specific chart in the Google Sheets spreadsheet that is embedded.
 * 
 * @function SlidesApp.SheetsChart#getChartId
 * 
 * @return {IntegerNum} The ID of the embedded chart.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.SheetsChart#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.SheetsChart#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Returns the embed type of the Sheets chart.
 * 
 * @function SlidesApp.SheetsChart#getEmbedType
 * 
 * @return {SlidesApp.SheetsChartEmbedType} The embed type of this chart.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.SheetsChart#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.SheetsChart#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null) {
 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
 * }
 * </pre>
 * 
 * @function SlidesApp.SheetsChart#getLink
 * 
 * @return {SlidesApp.Link}
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.SheetsChart#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.SheetsChart#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.SheetsChart#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.SheetsChart#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.SheetsChart#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Gets the ID of the Google Sheets spreadsheet that contains the source chart.
 * 
 * @function SlidesApp.SheetsChart#getSpreadsheetId
 * 
 * @return {String} The ID of the spreadsheet that contains the source chart.
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.SheetsChart#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.SheetsChart#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.SheetsChart#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Refreshes the chart by replacing it with the latest version of the chart from Google Sheets. If
 * the chart is already up to date, does not make any change to the chart in the presentation.
 * 
 * @function SlidesApp.SheetsChart#refresh
 * 
 * @return void
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.SheetsChart#remove
 * 
 * @return void
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
 * 
 * <pre class="prettyprint">
 * shape.removeLink();
 * </pre>
 * 
 * @function SlidesApp.SheetsChart#removeLink
 * 
 * @return void
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.SheetsChart#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.SheetsChart#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.SheetsChart#sendBackward
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.SheetsChart#sendToBack
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.SheetsChart#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.SheetsChart} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(0);
 * </pre>
 * 
 * @function SlidesApp.SheetsChart#setLinkSlide
 * 
 * @param {IntegerNum} slideIndex - The zero-based index to the slide.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * var slide = presentation.getSlides()[0];
 * shape.setLinkSlide(slide);
 * </pre>
 * 
 * @function SlidesApp.SheetsChart#setLinkSlide
 * 
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 * </pre>
 * 
 * @function SlidesApp.SheetsChart#setLinkSlide
 * 
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
 * 
 * <pre class="prettyprint">
 * // Set a link to the URL.
 * shape.setLinkUrl("https://slides.google.com");
 * </pre>
 * 
 * @function SlidesApp.SheetsChart#setLinkUrl
 * 
 * @param {String} url - The URL string.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.SheetsChart#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.SheetsChart#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.SheetsChart} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.SheetsChart#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.SheetsChart} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.SheetsChart#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.SheetsChart} This page element, for chaining.
 */



/**
 * @class SlidesApp.SheetsChartEmbedType
 */

/**
 * Indicates that the chart is embedded as an image.
 * 
 * @typedef {SlidesApp.SheetsChartEmbedType} SlidesApp.SheetsChartEmbedType.IMAGE
 */
/**
 * Represents a chart that is not supported and cannot be further classified.
 * 
 * @typedef {SlidesApp.SheetsChartEmbedType} SlidesApp.SheetsChartEmbedType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Slide
 */

/**
 * Duplicates the slide.
 * 
 * <p>The duplicate slide is created immediately following the original.
 * 
 * @function SlidesApp.Slide#duplicate
 * 
 * @return {SlidesApp.Slide}
 */


/**
 * Gets the page's background.
 * 
 * @function SlidesApp.Slide#getBackground
 * 
 * @return {SlidesApp.PageBackground} The page's background.
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 * 
 * @function SlidesApp.Slide#getColorScheme
 * 
 * @return {SlidesApp.ColorScheme} The page's color scheme.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getGroups
 * 
 * @return {SlidesApp.Group[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getImages
 * 
 * @return {SlidesApp.Image[]}
 */


/**
 * Gets the layout that the slide is based on or <code>null</code> if the slide is not based on a
 * layout.
 * 
 * @function SlidesApp.Slide#getLayout
 * 
 * @return {SlidesApp.Layout}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getLines
 * 
 * @return {SlidesApp.Line[]}
 */


/**
 * Returns the notes page associated with the slide.
 * 
 * @function SlidesApp.Slide#getNotesPage
 * 
 * @return {SlidesApp.NotesPage}
 */


/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 * namespace.
 * 
 * @function SlidesApp.Slide#getObjectId
 * 
 * @return {String}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
 * 
 * @function SlidesApp.Slide#getPageElementById
 * 
 * @param {String} id - The ID of the page element that is being retrieved.
 * 
 * @return {SlidesApp.PageElement} The page element with the given ID.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 * 
 * @function SlidesApp.Slide#getPageElements
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Gets the type of the page.
 * 
 * @function SlidesApp.Slide#getPageType
 * 
 * @return {SlidesApp.PageType} The page type.
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 * <code>null</code> if a matching placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
 * placeholder index. If there are multiple matching placeholders with the same index, it returns
 * the first placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 * </pre>
 * 
 * @function SlidesApp.Slide#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 * a placeholder index, or <code>null</code> if the placeholder is not present.
 * 
 * <p>If there are multiple placeholders with the same type and index, it returns the first
 * placeholder from the page's page elements collection.
 * 
 * <pre class="prettyprint">
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 * </pre>
 * 
 * @function SlidesApp.Slide#getPlaceholder
 * 
 * @param {SlidesApp.PlaceholderType} placeholderType
 * @param {IntegerNum} placeholderIndex
 * 
 * @return {SlidesApp.PageElement}
 */


/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
 * 
 * <pre class="prettyprint">
 * var master = SlidesApp.getActivePresentation().getMasters()[0];
 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 * </pre>
 * 
 * @function SlidesApp.Slide#getPlaceholders
 * 
 * @return {SlidesApp.PageElement[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getShapes
 * 
 * @return {SlidesApp.Shape[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getSheetsCharts
 * 
 * @return {SlidesApp.SheetsChart[]}
 */


/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html'>SlideLinkingMode</a></code> indicating if the slide is linked to another slide.
 * 
 * @function SlidesApp.Slide#getSlideLinkingMode
 * 
 * @return {SlidesApp.SlideLinkingMode} The slide linking mode.
 */


/**
 * Returns the source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> ID or <code>null</code> if the slide is not linked.
 * 
 * <p>A slide only has a source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> ID when it is linked to a slide within
 * another presentation.
 * 
 * @function SlidesApp.Slide#getSourcePresentationId
 * 
 * @return {String} The source presentation ID or <code>null</code>.
 */


/**
 * Returns the source slide ID or <code>null</code> if the slide is not linked.
 * 
 * <p>A slide only has a source slide ID when it is linked to a slide within another presentation.
 * 
 * @function SlidesApp.Slide#getSourceSlideObjectId
 * 
 * @return {String} The source slide ID or <code>null</code>.
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getTables
 * 
 * @return {SlidesApp.Table[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getVideos
 * 
 * @return {SlidesApp.Video[]}
 */


/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 * 
 * @function SlidesApp.Slide#getWordArts
 * 
 * @return {SlidesApp.WordArt[]}
 */


/**
 * Groups all the specified page elements.
 * 
 * <p>There should be at least two page elements on the same page that are not already in another
 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
 * 
 * @function SlidesApp.Slide#group
 * 
 * @param {SlidesApp.PageElement[]} pageElements - The elements to group together.
 * 
 * @return {SlidesApp.Group} The new group.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a group between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var group = otherPresentationSlide.getGroups()[0];
 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertGroup
 * 
 * @param {SlidesApp.Group} group - The group to be copied and inserted.
 * 
 * @return {SlidesApp.Group} The inserted group.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 * image blob.
 * 
 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 * megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * slide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the specified image blob.
 * 
 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // Get the Drive image file with the given ID.
 * var image = DriveApp.getFileById(fileId);
 * var position = {left: 0, top: 0};
 * var size = {width: 300, height: 100};
 * slide.insertImage(image, position.left, position.top, size.width, size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertImage
 * 
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy an image between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var image = otherPresentationSlide.getImages[0];
 * currentPresentationSlide.insertImage(image);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertImage
 * 
 * @param {SlidesApp.Image} image - The image to be copied and inserted.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * @function SlidesApp.Slide#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts an image on the page with the provided position and size from the provided URL.
 * 
 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 * in either in PNG, JPEG, or GIF format.
 * 
 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
 * 
 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 * to the provided size.
 * 
 * @function SlidesApp.Slide#insertImage
 * 
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 * 
 * @return {SlidesApp.Image} The inserted image.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a line between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var line = otherPresentationSlide.getLines[0];
 * currentPresentationSlide.insertLine(line);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertLine
 * 
 * @param {SlidesApp.Line} line - The line to be copied and inserted.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var startPoint = {left: 10, top: 10};
 * var endPoint = {left: 40, top: 40};
 * slide.insertLine(
 *     SlidesApp.LineCategory.STRAIGHT,
 *     startPoint.left,
 *     startPoint.top,
 *     endPoint.left,
 *     endPoint.top);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
 *     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
 *     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
 *     upper left corner of the page.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
 * connection sites must be on this page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a line in the first slide of the presentation connecting two shapes.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
 * slide.insertLine(
 *     SlidesApp.LineCategory.BENT,
 *     shape1.getConnectionSites()[0],
 *     shape2.getConnectionSites()[1]);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertLine
 * 
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {SlidesApp.ConnectionSite} startConnectionSite - The connection site where the start of the line is to be connected.
 * @param {SlidesApp.ConnectionSite} endConnectionSite - The connection site where the end of the line is to be connected.
 * 
 * @return {SlidesApp.Line} The inserted line.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a page element between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = otherPresentationSlide.getPageElements[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertPageElement(pageElement);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertPageElement
 * 
 * @param {SlidesApp.PageElement} pageElement - The page element to be copied and inserted.
 * 
 * @return {SlidesApp.PageElement} The inserted page element.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a shape between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var shape = otherPresentationSlide.getShapes[0];
 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertShape
 * 
 * @param {SlidesApp.Shape} shape - The shape to be copied and inserted.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * <p>The shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert a shape in the first slide of the presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a shape on the page.
 * 
 * @function SlidesApp.Slide#insertShape
 * 
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 * 
 * @return {SlidesApp.Shape} The inserted shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a sheets chart between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertSheetsChart(sheetsChart);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertSheetsChart
 * 
 * @param {SlidesApp.SheetsChart} sheetsChart - The sheets chart to be copied and inserted.
 * 
 * @return {SlidesApp.SheetsChart} The inserted sheets chart.
 */


/**
 * Inserts a Google Sheets chart on the page.
 * 
 * <p>The chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChart(chart);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart on the page with the provided position and size.
 * 
 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 * to the provided size.
 * 
 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 * updated. Other collaborators can see the link to the source spreadsheet.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChart(
 *     chart,
 *     position.left,
 *     position.top,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertSheetsChart
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.SheetsChart} The inserted chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
 * 
 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
 * 
 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 * size.
 * 
 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 * respect to the provided size.
 * 
 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
 * 
 * <pre class="prettyprint"><code>
 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
 * var chart = sheet.getCharts()[0];
 * // Insert the spreadsheet chart in the first slide.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var position = {left: 0, top: 0};
 * var size = {width: 200, height: 200};
 * 
 * // Also available for Layout, Master, and Page.
 * slide.insertSheetsChartAsImage(
 *     chart,
 *     position.left,
 *     position.right,
 *     size.width,
 *     size.height);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertSheetsChartAsImage
 * 
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 * 
 * @return {SlidesApp.Image} The inserted image of the chart in the page.
 */


/**
 * Inserts a table on the page.
 * 
 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
 * 
 * @function SlidesApp.Slide#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a table on the page with the provided position and size.
 * 
 * <p>Rows and columns are evenly distributed in the created table.
 * 
 * @function SlidesApp.Slide#insertTable
 * 
 * @param {IntegerNum} numRows - The number of rows in the table.
 * @param {IntegerNum} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
 *     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
 *     on factors such as text font size.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a table between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var table = otherPresentationSlide.getTables[0];
 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertTable
 * 
 * @param {SlidesApp.Table} table - The table to be copied and inserted.
 * 
 * @return {SlidesApp.Table} The inserted table.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <p>The text box shape is inserted with a default size at the top left corner of the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
 * 
 * <pre class="prettyprint"><code>
 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
 * // with a length of 10 points on each side.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertTextBox
 * 
 * @param {String} text - The string the text box shape should contain.
 * @param {Number} left - The horizontal position of the text box shape, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the text box shape, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the text box shape.
 * @param {Number} height - The height of the text box shape.
 * 
 * @return {SlidesApp.Shape} The inserted text box shape.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a video between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var video = otherPresentationSlide.getVideos[0];
 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertVideo
 * 
 * @param {SlidesApp.Video} video - The video to be copied and inserted.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video at the top left corner of the page with a default size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Slide#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a video on the page with the provided position and size.
 * 
 * <p>Only YouTube videos are currently supported.
 * 
 * @function SlidesApp.Slide#insertVideo
 * 
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
 *     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
 *     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 * 
 * @return {SlidesApp.Video} The inserted video.
 */


/**
 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
 * 
 * <p>The inserted element's position on this page is determined from the source element's
 * position on its respective page.
 * 
 * <p>If the provided element is a placeholder being copied from within the current presentation,
 * properties that inherit from master or layout pages also inherit on the inserted element.
 * 
 * <p>If the provided element is a placeholder being copied from a different presentation,
 * properties that inherit from master or layout pages are copied onto the element from the source
 * presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Copy a word art between presentations.
 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
 * var wordArt = otherPresentationSlide.getWordArts[0];
 * 
 * // Also available for Layout, Master, and Page.
 * currentPresentationSlide.insertWordArt(wordArt);
 * </code></pre>
 * 
 * @function SlidesApp.Slide#insertWordArt
 * 
 * @param {SlidesApp.WordArt} wordArt - The group to be copied and inserted.
 * 
 * @return {SlidesApp.WordArt} The inserted word art.
 */


/**
 * Move the slide to the specified index.
 * 
 * @function SlidesApp.Slide#move
 * 
 * @param {IntegerNum} index - The index where the slide should be moved to, based on the slide arrangement
 *     before the move. The index should be between zero and the number of slides in the
 *     presentation, inclusive.
 * 
 * @return void
 */


/**
 * Refreshes the slide to reflect any changes made to the linked source slide. If this slide is
 * not linked, returns without making any changes.
 * 
 * <p>The <code>refreshSlide</code> method copies the linked source slide's corresponding master and
 * layout pages into the slide's presentation if they do not already exist. If they do already
 * exist, they are likewise updated to reflect any changes made to the source.
 * 
 * <p><aside class="note"><b>Note</b>: The refresh overwrites any changes made to the current
 * slide in order to reflect the state of the source slide.</aside>
 * 
 * <pre class="prettyprint"><code>
 * var currentPresentation = SlidesApp.getActivePresentation();
 * var sourcePresentation = SlidesApp.openById(&#39;sourcePresentationId&#39;);
 * var sourceSlide = sourcePresentation.getSlides()[0];
 * var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);
 * 
 * sourceSlide.insertText(&#39;hello world&#39;); // Only the source slide has the text box.
 * 
 * linkedSlide.refreshSlide(); // The linked slide now has the text box.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#refreshSlide
 * 
 * @return void
 */


/**
 * Removes the page.
 * 
 * @function SlidesApp.Slide#remove
 * 
 * @return void
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.Slide#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.Slide#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <pre class="prettyprint"><code>
 * // Select the first slide as the current page selection and replace any previous selection.
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
 * </code></pre>
 * 
 * @function SlidesApp.Slide#selectAsCurrentPage
 * 
 * @return void
 */


/**
 * Unlinks the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> from its source slide. If this slide is not linked, returns
 * without making any changes.
 * 
 * <pre class="prettyprint"><code>
 * var currentPresentation = SlidesApp.getActivePresentation();
 * var sourcePresentation = SlidesApp.openById(&#39;sourcePresentationId&#39;);
 * var sourceSlide = sourcePresentation.getSlides()[0];
 * var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);
 * 
 * linkedSlide.unlink();
 * 
 * linkedSlide.getSourcePresentationId(); // returns null
 * linkedSlide.getSourceSlideObjectId();  // returns null
 * linkedSlide.getSlideLinkingMode();     // returns SlidesApp.SlideLinkingMode.NOT_LINKED
 * </code></pre>
 * 
 * @function SlidesApp.Slide#unlink
 * 
 * @return void
 */



/**
 * @class SlidesApp.SlideLinkingMode
 */

/**
 * Indicates that slides are linked.
 * 
 * @typedef {SlidesApp.SlideLinkingMode} SlidesApp.SlideLinkingMode.LINKED
 */
/**
 * Indicates that slides aren't linked.
 * 
 * @typedef {SlidesApp.SlideLinkingMode} SlidesApp.SlideLinkingMode.NOT_LINKED
 */
/**
 * A slide linking mode that isn't supported.
 * 
 * @typedef {SlidesApp.SlideLinkingMode} SlidesApp.SlideLinkingMode.UNSUPPORTED
 */

/**
 * @class SlidesApp.SlidePosition
 */

/**
 * The first slide in the presentation.
 * 
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.FIRST_SLIDE
 */
/**
 * The last slide in the presentation.
 * 
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.LAST_SLIDE
 */
/**
 * The next slide.
 * 
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.NEXT_SLIDE
 */
/**
 * The previous slide.
 * 
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.PREVIOUS_SLIDE
 */

/**
 * @class SlidesApp.SolidFill
 */

/**
 * Get the opacity of the color, in the interval from [0, 1.0], where 1.0 means fully opaque.
 * 
 * @function SlidesApp.SolidFill#getAlpha
 * 
 * @return {Number}
 */


/**
 * Get the color of the fill.
 * 
 * @function SlidesApp.SolidFill#getColor
 * 
 * @return {SlidesApp.Color}
 */



/**
 * @class SlidesApp.SpacingMode
 */

/**
 * Paragraph spacing is skipped between list elements.
 * 
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode.COLLAPSE_LISTS
 */
/**
 * Paragraph spacing is always rendered.
 * 
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode.NEVER_COLLAPSE
 */
/**
 * A spacing mode that is not supported.
 * 
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode.UNSUPPORTED
 */

/**
 * @class SlidesApp.Table
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.Table#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Appends a new column to the right of the last column of the table.
 * 
 * @function SlidesApp.Table#appendColumn
 * 
 * @return {SlidesApp.TableColumn} The new appended column.
 */


/**
 * Appends a new row below the last row of the table.
 * 
 * @function SlidesApp.Table#appendRow
 * 
 * @return {SlidesApp.TableRow} The new appended row.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Table#bringForward
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Table#bringToFront
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.Table#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Returns the specified cell in the table.
 * 
 * @function SlidesApp.Table#getCell
 * 
 * @param {IntegerNum} rowIndex - The row index of the cell to retrieve.
 * @param {IntegerNum} columnIndex - The column index of the cell to retrieve.
 * 
 * @return {SlidesApp.TableCell} The table cell retrieved.
 */


/**
 * Returns the specified column in the table.
 * 
 * @function SlidesApp.Table#getColumn
 * 
 * @param {IntegerNum} columnIndex - The 0-based column index.
 * 
 * @return {SlidesApp.TableColumn} The table column retrieved.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.Table#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.Table#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Table#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Table#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Table#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Table#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the number of columns in the table.
 * 
 * @function SlidesApp.Table#getNumColumns
 * 
 * @return {IntegerNum} The number fo columns in this table.
 */


/**
 * Returns the number of rows in the table.
 * 
 * @function SlidesApp.Table#getNumRows
 * 
 * @return {IntegerNum} The number of rows in this table.
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.Table#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.Table#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.Table#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.Table#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.Table#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Returns the specified row in the table.
 * 
 * @function SlidesApp.Table#getRow
 * 
 * @param {IntegerNum} rowIndex - The index of the row to retrieve.
 * 
 * @return {SlidesApp.TableRow} The table row retrieved.
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.Table#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Table#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.Table#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.Table#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Inserts a new column at the specified index of the table.
 * 
 * <p>If all the cells in the column to the left of the specified index are merged with other
 * columns, the new column is inserted to the right of the common columns spanned by these cells.
 * 
 * @function SlidesApp.Table#insertColumn
 * 
 * @param {IntegerNum} index - The index at which to insert a new column.
 * 
 * @return {SlidesApp.TableColumn} The new inserted column.
 */


/**
 * Inserts a new row at the specified index of the table.
 * 
 * <p>If all the cells in the row above the specified index are merged with other rows, the new
 * row is inserted below the common rows spanned by these cells.
 * 
 * @function SlidesApp.Table#insertRow
 * 
 * @param {IntegerNum} index - The index at which to insert a new row.
 * 
 * @return {SlidesApp.TableRow} The new inserted row.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.Table#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.Table#remove
 * 
 * @return void
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Table#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Table#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.Table#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.Table#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Table#sendBackward
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Table#sendToBack
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.Table#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.Table} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Table#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Table#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.Table#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.Table#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.Table} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Table#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.Table#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.Table} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Table#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.Table} This page element, for chaining.
 */



/**
 * @class SlidesApp.TableCell
 */

/**
 * Returns the 0-based column index of the table cell.
 * 
 * @function SlidesApp.TableCell#getColumnIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the column span of the table cell.
 * 
 * @function SlidesApp.TableCell#getColumnSpan
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the table cell.
 * 
 * @function SlidesApp.TableCell#getContentAlignment
 * 
 * @return {SlidesApp.ContentAlignment}
 */


/**
 * Returns the fill of the table cell.
 * 
 * @function SlidesApp.TableCell#getFill
 * 
 * @return {SlidesApp.Fill}
 */


/**
 * Returns the head cell of this table cell. Returns <code>null</code> if this cell has not been merged
 * or if this cell is the head cell.
 * 
 * @function SlidesApp.TableCell#getHeadCell
 * 
 * @return {SlidesApp.TableCell}
 */


/**
 * Returns the merge state of the table cell.
 * 
 * @function SlidesApp.TableCell#getMergeState
 * 
 * @return {SlidesApp.CellMergeState}
 */


/**
 * Returns the table column containing the current cell.
 * 
 * @function SlidesApp.TableCell#getParentColumn
 * 
 * @return {SlidesApp.TableColumn}
 */


/**
 * Returns the table row containing the current cell.
 * 
 * @function SlidesApp.TableCell#getParentRow
 * 
 * @return {SlidesApp.TableRow}
 */


/**
 * Returns the table containing the current cell.
 * 
 * @function SlidesApp.TableCell#getParentTable
 * 
 * @return {SlidesApp.Table}
 */


/**
 * Returns the 0-based row index of the table cell.
 * 
 * @function SlidesApp.TableCell#getRowIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the row span of the table cell.
 * 
 * @function SlidesApp.TableCell#getRowSpan
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the text content of the table cell. Returns <code>null</code> if the cell is merged but is
 * not a head cell.
 * 
 * <p>Text within a table cell always terminates with a newline character.
 * 
 * @function SlidesApp.TableCell#getText
 * 
 * @return {SlidesApp.TextRange}
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the table cell.
 * 
 * @function SlidesApp.TableCell#setContentAlignment
 * 
 * @param {SlidesApp.ContentAlignment} contentAlignment
 * 
 * @return {SlidesApp.TableCell}
 */



/**
 * @class SlidesApp.TableCellRange
 */

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances.
 * 
 * @function SlidesApp.TableCellRange#getTableCells
 * 
 * @return {SlidesApp.TableCell[]}
 */



/**
 * @class SlidesApp.TableColumn
 */

/**
 * Returns the cell at the specified index.
 * 
 * @function SlidesApp.TableColumn#getCell
 * 
 * @param {IntegerNum} cellIndex - The 0-based index of the cell to retrieve.
 * 
 * @return {SlidesApp.TableCell}
 */


/**
 * Returns the 0-based index of the column.
 * 
 * @function SlidesApp.TableColumn#getIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the number of cells in this column.
 * 
 * @function SlidesApp.TableColumn#getNumCells
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the table containing the current column.
 * 
 * @function SlidesApp.TableColumn#getParentTable
 * 
 * @return {SlidesApp.Table}
 */


/**
 * Returns the width of the column in points.
 * 
 * @function SlidesApp.TableColumn#getWidth
 * 
 * @return {Number}
 */


/**
 * Removes the table column.
 * 
 * <p>If all the cells in the column are merged with other columns, the common columns spanned by
 * these cells are removed.
 * 
 * <p>If no columns remain in the table after this removal, the whole table is removed.
 * 
 * @function SlidesApp.TableColumn#remove
 * 
 * @return void
 */



/**
 * @class SlidesApp.TableRow
 */

/**
 * Returns the cell at the specified index.
 * 
 * @function SlidesApp.TableRow#getCell
 * 
 * @param {IntegerNum} cellIndex - The 0-based index of the cell to retrieve.
 * 
 * @return {SlidesApp.TableCell} the cell.
 */


/**
 * Returns the 0-based index of the row.
 * 
 * @function SlidesApp.TableRow#getIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the minimum height of the row in points. The actual height depends on the length of the
 * content of the cell.
 * 
 * @function SlidesApp.TableRow#getMinimumHeight
 * 
 * @return {Number}
 */


/**
 * Returns the number of cells in this row.
 * 
 * @function SlidesApp.TableRow#getNumCells
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the table containing the current row.
 * 
 * @function SlidesApp.TableRow#getParentTable
 * 
 * @return {SlidesApp.Table}
 */


/**
 * Removes the table row.
 * 
 * <p>If all the cells in the row are merged with other rows, the common rows spanned by these
 * cells are removed.
 * 
 * <p>If no rows remain in the table after this removal, the whole table is removed.
 * 
 * @function SlidesApp.TableRow#remove
 * 
 * @return void
 */



/**
 * @class SlidesApp.TextBaselineOffset
 */

/**
 * The text is not vertically offset.
 * 
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.NONE
 */
/**
 * The text is vertically offset downwards.
 * 
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.SUBSCRIPT
 */
/**
 * The text is vertically offset upwards.
 * 
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.SUPERSCRIPT
 */
/**
 * An text baseline offset that is not supported.
 * 
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.UNSUPPORTED
 */

/**
 * @class SlidesApp.TextDirection
 */

/**
 * The text goes from left to right.
 * 
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection.LEFT_TO_RIGHT
 */
/**
 * The text goes from right to left.
 * 
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection.RIGHT_TO_LEFT
 */
/**
 * A text direction that is not supported.
 * 
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection.UNSUPPORTED
 */

/**
 * @class SlidesApp.TextRange
 */

/**
 * Appends a paragraph at the end of the text range. The paragraph maintains the styling of the
 * end of the current text range.
 * 
 * <p>The provided text string is appended as a paragraph by adding at least one surrounding
 * newline character to the string.
 * 
 * <p>When the provided text string contains newline characters (thus consisting of multiple
 * paragraphs), the final paragraph added is returned.
 * 
 * @function SlidesApp.TextRange#appendParagraph
 * 
 * @param {String} text - The string to append as a paragraph.
 * 
 * @return {SlidesApp.Paragraph} the appended <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraph</a></code>.
 */


/**
 * Appends a copy of the provided text range to the end of the current text range.
 * 
 * <p>The formatting of the inserted text will match that of the source text.
 * 
 * @function SlidesApp.TextRange#appendRange
 * 
 * @param {SlidesApp.TextRange} textRange - The text range to append.
 * 
 * @return {SlidesApp.TextRange} the text range representing the appended text
 */


/**
 * Appends a copy of the provided text range to the end of the current text range.
 * 
 * <p>If set to match the formatting of the destination text, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/auto-text.html'>AutoText</a></code> within the provided
 * text range are replaced with their rendered values. Furthermore, any non-text elements within
 * the provided text range are not appended.
 * 
 * @function SlidesApp.TextRange#appendRange
 * 
 * @param {SlidesApp.TextRange} textRange - The text range to append.
 * @param {Boolean} matchSourceFormatting - If <code>true</code>, match the formatting of the source text; if
 *     <code>false</code>, match the formatting of the destination text.
 * 
 * @return {SlidesApp.TextRange} the text range representing the appended text
 */


/**
 * Appends text at the end of the text range. The text maintains the styling of the end of the
 * existing text.
 * 
 * @function SlidesApp.TextRange#appendText
 * 
 * @param {String} text - The string to append.
 * 
 * @return {SlidesApp.TextRange} the text range representing the appended text.
 */


/**
 * Returns the rendered text bounded by this range of the associated shape or table cell in a
 * format appropriate to display to end users.
 * 
 * <p>AutoText elements, such as generated slide numbers, are replaced with their rendered values.
 * Any non-text elements in the range are omitted.
 * 
 * @function SlidesApp.TextRange#asRenderedString
 * 
 * @return {String}
 */


/**
 * Returns the raw text bounded by this range of the associated shape or table cell.
 * 
 * <p>AutoText elements such as generated slide numbers and any non-text elements in the range are
 * replaced with the Unicode character U+E907.
 * 
 * @function SlidesApp.TextRange#asString
 * 
 * @return {String}
 */


/**
 * Clears the text bounded by this range.
 * 
 * <p>Since the entire text in a Shape or TableCell must end in a newline, the final newline in
 * the text is not removed.
 * 
 * @function SlidesApp.TextRange#clear
 * 
 * @return void
 */


/**
 * Clears the text bounded by the start and end offsets in the range.
 * 
 * <p>Since the text must end in a newline, the final newline in text is not removed even if it's
 * covered by the given offsets.
 * 
 * @function SlidesApp.TextRange#clear
 * 
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the range to clear. The start offset must be
 *     equal to or greater than 0 and less than or equal to <code>endOffset</code>. <code>startOffset</code>
 *     must also be less than the length of the current range.
 * @param {IntegerNum} endOffset - The number of characters past the start index of the current text range used
 *     to determine the exclusive end index of the range to clear. The <code>endOffset</code> must be
 *     equal to or greater than <code>startOffset</code>. <code>endOffset</code> must also be less than or
 *     equal to the length of the current range.
 * 
 * @return void
 */


/**
 * Returns all the ranges matching the search pattern in the current text range. The search is
 * case sensitive.
 * 
 * @function SlidesApp.TextRange#find
 * 
 * @param {String} pattern - The regular expression pattern to search; any backslashes in the pattern should
 *     be escaped.
 * 
 * @return {SlidesApp.TextRange[]}
 */


/**
 * Returns all the ranges matching the search pattern in the current text range starting from the
 * start offset. The search is case sensitive.
 * 
 * @function SlidesApp.TextRange#find
 * 
 * @param {String} pattern - The regular expression pattern to search; any backslashes in the pattern should
 *     be escaped.
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the range to search. <code>startOffset</code> must
 *     also be less than the length of the current range.
 * 
 * @return {SlidesApp.TextRange[]}
 */


/**
 * Returns the auto texts within the current text range.
 * 
 * @function SlidesApp.TextRange#getAutoTexts
 * 
 * @return {SlidesApp.AutoText[]}
 */


/**
 * Returns the exclusive, 0-based index for the last character in this range. If the start and end
 * indices are equal, the range is considered to be empty.
 * 
 * @function SlidesApp.TextRange#getEndIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the number of characters in this range.
 * 
 * @function SlidesApp.TextRange#getLength
 * 
 * @return {IntegerNum}
 */


/**
 * Returns a collection of text ranges that correspond to all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>s within the current
 * text range or overlapping the current text range.
 * 
 * <p>Each returned range is guaranteed to span one link when it is created. Text modifications
 * can cause it to no longer represent exactly one link.
 * 
 * <p>Each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> on the returned ranges can be accessed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#getLink()'>TextStyle.getLink()</a></code>.
 * 
 * <pre class="prettyprint">
 * // Accesses the first link on a TextRange object.
 * var linkTextRange = textRange.getLinks()[0];
 * var textStyle = textRange.getTextStyle();
 * Logger.log(textStyle.hasLink()); // logs 'true'
 * var link = textStyle.getLink();  // Link object
 * </pre>
 * 
 * @function SlidesApp.TextRange#getLinks
 * 
 * @return {SlidesApp.TextRange[]}
 */


/**
 * Returns the paragraphs in lists that overlap the current text range.
 * 
 * @function SlidesApp.TextRange#getListParagraphs
 * 
 * @return {SlidesApp.Paragraph[]}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-style.html'>ListStyle</a></code> of the current text range.
 * 
 * @function SlidesApp.TextRange#getListStyle
 * 
 * @return {SlidesApp.ListStyle}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-style.html'>ParagraphStyle</a></code> of the current text range.
 * 
 * @function SlidesApp.TextRange#getParagraphStyle
 * 
 * @return {SlidesApp.ParagraphStyle}
 */


/**
 * Returns the paragraphs that overlap the current text range.
 * 
 * @function SlidesApp.TextRange#getParagraphs
 * 
 * @return {SlidesApp.Paragraph[]}
 */


/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> covering part of the range from which it is derived.
 * 
 * @function SlidesApp.TextRange#getRange
 * 
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the returned range. The start offset must be
 *     equal to or greater than 0 and less than or equal to <code>endOffset</code>. <code>startOffset</code>
 *     must also be less than the length of the current range.
 * @param {IntegerNum} endOffset - The number of characters past the start index of the current text range used
 *     to determine the exclusive end index of the returned range. The <code>endOffset</code> must be
 *     equal to or greater than <code>startOffset</code>. <code>endOffset</code> must also be less than or
 *     equal to the length of the current range.
 * 
 * @return {SlidesApp.TextRange}
 */


/**
 * Returns the text runs that overlap the current text range. A text run is a segment of text
 * where all the characters have the same text style.
 * 
 * <p>Each returned range is only guaranteed to span one run when it is created. Text or style
 * modifications can cause it to no longer represent exactly one run.
 * 
 * @function SlidesApp.TextRange#getRuns
 * 
 * @return {SlidesApp.TextRange[]}
 */


/**
 * Returns the inclusive, 0-based index for the first character in this range. If the start and
 * end indices are equal, the range is considered to be empty.
 * 
 * @function SlidesApp.TextRange#getStartIndex
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the text style of the range, or <code>null</code> if the range is empty.
 * 
 * @function SlidesApp.TextRange#getTextStyle
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Inserts a paragraph at the start offset. The paragraph maintains the styling of the current
 * text range at the start offset.
 * 
 * <p>The provided text string is inserted as a paragraph by adding at least one surrounding
 * newline character to the string.
 * 
 * <p>When the provided text string contains newline characters (thus consisting of multiple
 * paragraphs), the final paragraph added is returned.
 * 
 * @function SlidesApp.TextRange#insertParagraph
 * 
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the text to insert.
 * @param {String} text - The string to insert.
 * 
 * @return {SlidesApp.Paragraph} the inserted <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraph</a></code>.
 */


/**
 * Inserts a copy of the provided text range at the start offset.
 * 
 * <p>The formatting of the inserted text will match that of the source text.
 * 
 * @function SlidesApp.TextRange#insertRange
 * 
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the text to insert.
 * @param {SlidesApp.TextRange} textRange - The text range to insert.
 * 
 * @return {SlidesApp.TextRange} the text range representing the inserted text
 */


/**
 * Inserts a copy of the provided text range at the start offset.
 * 
 * <p>If set to match the formatting of the destination text, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/auto-text.html'>AutoText</a></code> within the provided
 * text range are replaced with their rendered values. Furthermore, any non-text elements within
 * the provided text range are not inserted.
 * 
 * @function SlidesApp.TextRange#insertRange
 * 
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the text to insert.
 * @param {SlidesApp.TextRange} textRange - The text range to insert.
 * @param {Boolean} matchSourceFormatting - If <code>true</code>, match the formatting of the source text; if
 *     <code>false</code>, match the formatting of the destination text.
 * 
 * @return {SlidesApp.TextRange} the text range representing the inserted text
 */


/**
 * Inserts text at the start offset. The text maintains the styling of the existing text at the
 * start offset.
 * 
 * @function SlidesApp.TextRange#insertText
 * 
 * @param {IntegerNum} startOffset - The number of characters past the start index of the current text range used
 *     to determine the inclusive start index of the text to insert.
 * @param {String} text - The string to insert.
 * 
 * @return {SlidesApp.TextRange} the text range representing the inserted text.
 */


/**
 * Returns <code>true</code> if there are no characters in this range, and returns <code>false</code>
 * otherwise.
 * 
 * @function SlidesApp.TextRange#isEmpty
 * 
 * @return {Boolean}
 */


/**
 * Replaces all instances of text matching find text with replace text. The search is case
 * insensitive.
 * 
 * @function SlidesApp.TextRange#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Replaces all instances of text matching find text with replace text.
 * 
 * @function SlidesApp.TextRange#replaceAllText
 * 
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
 *     case insensitive.
 * 
 * @return {IntegerNum} the number of occurrences changed
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in the active presentation and removes any previous
 * selection.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> or the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> is set
 * as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> or the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getPageElementRange()'>selected page element</a></code>.
 * 
 * <ol>
 *   The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html'>Selection</a></code> can be of two types:
 *   <li>1. Range of text, use select on a non-empty TextRange to select the range of the
 *       characters.
 *   <li>2. Cursor position, use an empty TextRange to place the cursor at the desired index.
 * </ol>
 * 
 * <pre class="prettyprint">
 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 * shape.getText().setText("Hello");
 * // Range selection: Select the text range "He".
 * shape.getText().getRange(0, 2).select();
 * // Cursor selection: Place the cursor after "H" like "H|ello".
 * shape.getText().getRange(1, 1).select();
 * </pre>
 * 
 * @function SlidesApp.TextRange#select
 * 
 * @return void
 */


/**
 * Sets the text bounded by this range of the associated shape or table cell. The text maintains
 * the styling of the start of the existing text.
 * 
 * @function SlidesApp.TextRange#setText
 * 
 * @param {String} newText - The string to set as the new text.
 * 
 * @return {SlidesApp.TextRange} the text range representing the set text
 */



/**
 * @class SlidesApp.TextStyle
 */

/**
 * Returns the background color of the text, or <code>null</code> if there are multiple styles on the
 * text.
 * 
 * @function SlidesApp.TextStyle#getBackgroundColor
 * 
 * @return {SlidesApp.Color}
 */


/**
 * Returns the vertical offset of text from its normal position, or <code>null</code> if there are
 * multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#getBaselineOffset
 * 
 * @return {SlidesApp.TextBaselineOffset}
 */


/**
 * Returns the font family of the text, or <code>null</code> if there are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#getFontFamily
 * 
 * @return {String}
 */


/**
 * Returns the font size of the text in points, or <code>null</code> if there are multiple styles on
 * the text.
 * 
 * @function SlidesApp.TextStyle#getFontSize
 * 
 * @return {Number}
 */


/**
 * Returns the font weight of the text, or <code>null</code> if there are multiple styles on the text.
 * 
 * <p>The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
 * the numerical values described in the CSS 2.1 Specification, <a
 * href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with
 * non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
 * which case <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()'>isBold()</a></code> returns <code>true</code>. The default value is 400
 * ("normal").
 * 
 * @function SlidesApp.TextStyle#getFontWeight
 * 
 * @return {IntegerNum}
 */


/**
 * Returns the foreground color of the text, or <code>null</code> if there are multiple styles on the
 * text.
 * 
 * @function SlidesApp.TextStyle#getForegroundColor
 * 
 * @return {SlidesApp.Color}
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> on the text, or <code>null</code> if there is no link or if the link is on
 * part of the text or if there are multiple links. Call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#hasLink()'>hasLink()</a></code> to determine whether
 * the text has no link.
 * 
 * <pre class="prettyprint"><code>
 * var textLink = shape.getText().getTextStyle().getLink();
 * if (textLink != null) {
 *   Logger.log(&#39;Shape text has a link of type: &#39; + textLink.getLinkType());
 * }
 * </code></pre>
 * 
 * @function SlidesApp.TextStyle#getLink
 * 
 * @return {SlidesApp.Link}
 */


/**
 * Returns <code>true</code> if there is link on the text, <code>false</code> if not, or <code>null</code> if the
 * link is on part of the text or there are multiple links.
 * 
 * <p>Links cannot be set on newline characters. Therefore, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> contains a
 * newline character, this method always returns either <code>null</code> or <code>false</code>.
 * 
 * @function SlidesApp.TextStyle#hasLink
 * 
 * @return {Boolean}
 */


/**
 * Returns <code>true</code> if the background of the text is transparent, <code>false</code> if not, or
 * <code>null</code> if there are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#isBackgroundTransparent
 * 
 * @return {Boolean}
 */


/**
 * Returns <code>true</code> if the text is rendered as bold, <code>false</code> if not, or <code>null</code> if
 * there are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#isBold
 * 
 * @return {Boolean}
 */


/**
 * Returns <code>true</code> if the text is italicized, <code>false</code> if not, or <code>null</code> if there
 * are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#isItalic
 * 
 * @return {Boolean}
 */


/**
 * Returns <code>true</code> if the text is in small capital letters, <code>false</code> if not, or <code>null</code> if there are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#isSmallCaps
 * 
 * @return {Boolean}
 */


/**
 * Returns <code>true</code> if the text is struck through, <code>false</code> if not, or <code>null</code> if
 * there are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#isStrikethrough
 * 
 * @return {Boolean}
 */


/**
 * Returns <code>true</code> if the text is underlined, <code>false</code> if not, or <code>null</code> if there
 * are multiple styles on the text.
 * 
 * @function SlidesApp.TextStyle#isUnderline
 * 
 * @return {Boolean}
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
 * 
 * <p>Removing a link removes the hyperlink foreground color and underline style on the text. If
 * possible, these styles are applied to match the text preceding the link.
 * 
 * <pre class="prettyprint">
 * text.getTextStyle().removeLink();
 * </pre>
 * 
 * @function SlidesApp.TextStyle#removeLink
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the background color of the text to the given RGB values from 0 to 255.
 * 
 * @function SlidesApp.TextStyle#setBackgroundColor
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the background color of the text.
 * 
 * @function SlidesApp.TextStyle#setBackgroundColor
 * 
 * @param {SlidesApp.Color} color
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the background color of the text to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.TextStyle#setBackgroundColor
 * 
 * @param {SlidesApp.ThemeColorType} color
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the background color of the text to the given hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.TextStyle#setBackgroundColor
 * 
 * @param {String} hexColor
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the background color of the text to transparent.
 * 
 * @function SlidesApp.TextStyle#setBackgroundColorTransparent
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the vertical offset of the text relative to its normal position.
 * 
 * @function SlidesApp.TextStyle#setBaselineOffset
 * 
 * @param {SlidesApp.TextBaselineOffset} offset
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets whether the text should be rendered as bold.
 * 
 * <p>Changing the text's boldness updates the font weight used to render the text.
 * 
 * @function SlidesApp.TextStyle#setBold
 * 
 * @param {Boolean} bold
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the font family of the text .
 * 
 * @function SlidesApp.TextStyle#setFontFamily
 * 
 * @param {String} fontFamily
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the font family and weight of the text.
 * 
 * <p>The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
 * the numerical values described in the CSS 2.1 Specification, <a
 * href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with
 * non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
 * which case <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()'>isBold()</a></code> returns <code>true</code>. The default value is 400
 * ("normal").
 * 
 * @function SlidesApp.TextStyle#setFontFamilyAndWeight
 * 
 * @param {String} fontFamily
 * @param {IntegerNum} fontWeight
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the font size of the text, in points.
 * 
 * @function SlidesApp.TextStyle#setFontSize
 * 
 * @param {Number} fontSize
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the foreground color of the text to the given RGB values from 0 to 255.
 * 
 * @function SlidesApp.TextStyle#setForegroundColor
 * 
 * @param {IntegerNum} red
 * @param {IntegerNum} green
 * @param {IntegerNum} blue
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the foreground color of the text.
 * 
 * @function SlidesApp.TextStyle#setForegroundColor
 * 
 * @param {SlidesApp.Color} foregroundColor
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the foreground color of the text to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 * 
 * @function SlidesApp.TextStyle#setForegroundColor
 * 
 * @param {SlidesApp.ThemeColorType} color
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the foreground color of the text to the given hex color string.
 * 
 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 * '#FFC0CB'.
 * 
 * @function SlidesApp.TextStyle#setForegroundColor
 * 
 * @param {String} hexColor
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets the whether the text is italicized.
 * 
 * @function SlidesApp.TextStyle#setItalic
 * 
 * @param {Boolean} italic
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
 * 
 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
 * 
 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 * are ignored.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * text.getTextStyle().setLinkSlide(0);
 * </pre>
 * 
 * @function SlidesApp.TextStyle#setLinkSlide
 * 
 * @param {IntegerNum} slideIndex - The zero-based index to the slide.
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
 * 
 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
 * 
 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 * are ignored.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * var slide = presentation.getSlides()[0];
 * text.getTextStyle().setLinkSlide(slide);
 * </pre>
 * 
 * @function SlidesApp.TextStyle#setLinkSlide
 * 
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
 * 
 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
 * 
 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 * are ignored.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * text.getTextStyle().setLinkSlide(SlidesApp.SlidePosition.FIRST_SLIDE);
 * </pre>
 * 
 * @function SlidesApp.TextStyle#setLinkSlide
 * 
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
 * 
 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
 * 
 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 * are ignored.
 * 
 * <pre class="prettyprint">
 * // Set a link to the URL.
 * text.getTextStyle().setLinkUrl("https://slides.google.com");
 * </pre>
 * 
 * @function SlidesApp.TextStyle#setLinkUrl
 * 
 * @param {String} url - The URL string.
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets whether the text is rendered in small capital letters.
 * 
 * @function SlidesApp.TextStyle#setSmallCaps
 * 
 * @param {Boolean} smallCaps
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets whether the text is struck through.
 * 
 * @function SlidesApp.TextStyle#setStrikethrough
 * 
 * @param {Boolean} strikethrough
 * 
 * @return {SlidesApp.TextStyle}
 */


/**
 * Sets whether the text is underlined.
 * 
 * @function SlidesApp.TextStyle#setUnderline
 * 
 * @param {Boolean} underline
 * 
 * @return {SlidesApp.TextStyle}
 */



/**
 * @class SlidesApp.ThemeColor
 */

/**
 * Get the type of this color.
 * 
 * @function SlidesApp.ThemeColor#getColorType
 * 
 * @return {SlidesApp.ColorType}
 */


/**
 * Get the theme color type of this color.
 * 
 * @function SlidesApp.ThemeColor#getThemeColorType
 * 
 * @return {SlidesApp.ThemeColorType}
 */



/**
 * @class SlidesApp.ThemeColorType
 */

/**
 * Represents the first accent color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT1
 */
/**
 * Represents the second accent color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT2
 */
/**
 * Represents the third accent color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT3
 */
/**
 * Represents the fourth accent color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT4
 */
/**
 * Represents the fifth accent color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT5
 */
/**
 * Represents the sixth accent color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT6
 */
/**
 * Represents the first dark color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.DARK1
 */
/**
 * Represents the second dark color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.DARK2
 */
/**
 * Represents the color to use for visited hyperlinks.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.FOLLOWED_HYPERLINK
 */
/**
 * Represents the color to use for hyperlinks.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.HYPERLINK
 */
/**
 * Represents the first light color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.LIGHT1
 */
/**
 * Represents the second light color.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.LIGHT2
 */
/**
 * Represents a theme color that is not supported.
 * 
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.UNSUPPORTED
 */

/**
 * @class SlidesApp.Video
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.Video#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Video#bringForward
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Video#bringToFront
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.Video#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the video.
 * 
 * @function SlidesApp.Video#getBorder
 * 
 * @return {SlidesApp.Border} The border setting for this video.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.Video#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.Video#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Video#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Video#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.Video#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Video#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.Video#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.Video#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.Video#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.Video#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.Video#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Gets the video source.
 * 
 * @function SlidesApp.Video#getSource
 * 
 * @return {SlidesApp.VideoSourceType} The source of this video.
 */


/**
 * Gets an URL to the video thumbnail. This URL is tagged with the account of the requester.
 * Anyone with the URL effectively accesses the thumbnail as the original requester. Access to the
 * thumbnail may be lost if the presentation's sharing settings change. The URL expires after a
 * short period of time.
 * 
 * @function SlidesApp.Video#getThumbnailUrl
 * 
 * @return {String} The URL of the video thumbnail.
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.Video#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Video#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.Video#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Gets an URL to the video. The URL is valid as long as the source video exists and sharing
 * settings do not change. Returns <code>null</code> when the video source is not supported.
 * 
 * @function SlidesApp.Video#getUrl
 * 
 * @return {String} The URL of this video, or <code>null</code> if the video source is not supported.
 */


/**
 * Gets the video source's unique identifier for this video.
 * 
 * @function SlidesApp.Video#getVideoId
 * 
 * @return {String} The source ID for this video.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.Video#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.Video#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.Video#remove
 * 
 * @return void
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Video#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.Video#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.Video#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.Video#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Video#sendBackward
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.Video#sendToBack
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.Video#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.Video} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Video#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.Video#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.Video#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.Video#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.Video} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.Video#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.Video#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.Video} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.Video#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.Video} This page element, for chaining.
 */



/**
 * @class SlidesApp.VideoSourceType
 */

/**
 * A video source type that is not supported.
 * 
 * @typedef {SlidesApp.VideoSourceType} SlidesApp.VideoSourceType.UNSUPPORTED
 */
/**
 * YouTube video.
 * 
 * @typedef {SlidesApp.VideoSourceType} SlidesApp.VideoSourceType.YOUTUBE
 */

/**
 * @class SlidesApp.WordArt
 */

/**
 * Aligns the element to the specified alignment position on the page.
 * 
 * @function SlidesApp.WordArt#alignOnPage
 * 
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - The position to align this page element to on the page.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Brings the page element forward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.WordArt#bringForward
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Brings the page element to the front of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.WordArt#bringToFront
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Duplicates the page element.
 * 
 * <p>The duplicate page element is placed on the same page at the same position as the original.
 * 
 * @function SlidesApp.WordArt#duplicate
 * 
 * @return {SlidesApp.PageElement} The new duplicate of this page element.
 */


/**
 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
 * element does not have any connection sites.
 * 
 * @function SlidesApp.WordArt#getConnectionSites
 * 
 * @return {SlidesApp.ConnectionSite[]} The connection sites list, which may be empty if this element has no connection sites.
 */


/**
 * Returns the page element's description. The description is combined with the title to display
 * and read alt text.
 * 
 * @function SlidesApp.WordArt#getDescription
 * 
 * @return {String} The page element's description.
 */


/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.WordArt#getHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent height in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.WordArt#getInherentHeight
 * 
 * @return {Number} The page element's inherent height in points, or <code>null</code> if the page element does
 *     not have a height.
 */


/**
 * Returns the element's inherent width in points.
 * 
 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
 * conjunction with the element's transform to determine the element's final visual appearance.
 * 
 * @function SlidesApp.WordArt#getInherentWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Returns the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.WordArt#getLeft
 * 
 * @return {Number} This element's horizonal position in points, from the upper-left corner of the page.
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
 * 
 * <pre class="prettyprint">
 * var link = shape.getLink();
 * if (link != null) {
 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
 * }
 * </pre>
 * 
 * @function SlidesApp.WordArt#getLink
 * 
 * @return {SlidesApp.Link}
 */


/**
 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
 * same namespace.
 * 
 * @function SlidesApp.WordArt#getObjectId
 * 
 * @return {String} The unique ID for this object.
 */


/**
 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 * 
 * @function SlidesApp.WordArt#getPageElementType
 * 
 * @return {SlidesApp.PageElementType} The page element's type.
 */


/**
 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
 * group.
 * 
 * @function SlidesApp.WordArt#getParentGroup
 * 
 * @return {SlidesApp.Group} The group this page element belongs to, or <code>null</code>.
 */


/**
 * Returns the page this page element is on.
 * 
 * @function SlidesApp.WordArt#getParentPage
 * 
 * @return {SlidesApp.Page} The page this element resides on.
 */


/**
 * Gets the text that is rendered as word art.
 * 
 * @function SlidesApp.WordArt#getRenderedText
 * 
 * @return {String} The text that is rendered as this word art.
 */


/**
 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
 * means no rotation.
 * 
 * @function SlidesApp.WordArt#getRotation
 * 
 * @return {Number} The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
 */


/**
 * Returns the page element's title. The title is combined with the description to display and
 * read alt text.
 * 
 * @function SlidesApp.WordArt#getTitle
 * 
 * @return {String} The page element's title.
 */


/**
 * Gets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.WordArt#getTop
 * 
 * @return {Number} This element's vertical position in points, from the upper-left corner of the page.
 */


/**
 * Returns the page element's transform.
 * 
 * <p>The visual appearance of the page element is determined by its absolute transform. To
 * compute the absolute transform, preconcatenate a page element's transform with the transforms
 * of all of its parent groups. If the page element is not in a group, its absolute transform is
 * the same as the value in this field.
 * 
 * @function SlidesApp.WordArt#getTransform
 * 
 * @return {SlidesApp.AffineTransform} The page element's transform.
 */


/**
 * Returns the element's width in points, which is the width of the element's bounding box when
 * the element has no rotation.
 * 
 * @function SlidesApp.WordArt#getWidth
 * 
 * @return {Number} The page element's inherent width in points, or <code>null</code> if the page element does
 *     not have a width.
 */


/**
 * Preconcatenates the provided transform to the existing transform of the page element.
 * 
 * <pre class="prettyprint"><code>
 * newTransform = argument * existingTransform
 * </code></pre>
 * 
 * <p>For example, to move a page elements 36 points to the left:
 * 
 * <pre class="prettyprint"><code>
 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
 *     .setTranslateX(-36.0)
 *     .build());
 * </code></pre>
 * 
 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 * 
 * @function SlidesApp.WordArt#preconcatenateTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform to preconcatenate onto this page element's transform.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Removes the page element.
 * 
 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 * group itself is also removed.
 * 
 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 * are also removed.
 * 
 * @function SlidesApp.WordArt#remove
 * 
 * @return void
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
 * 
 * <pre class="prettyprint">
 * shape.removeLink();
 * </pre>
 * 
 * @function SlidesApp.WordArt#removeLink
 * 
 * @return void
 */


/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.WordArt#scaleHeight
 * 
 * @param {Number} ratio - The ratio to scale this page element's height by.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 * bounding box when the element has no rotation.
 * 
 * @function SlidesApp.WordArt#scaleWidth
 * 
 * @param {Number} ratio - The ratio to scale this page element's width by.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * var pageElement = slide.getPageElements()[0];
 * // Only select this page element and replace any previous selection.
 * pageElement.select();
 * </code></pre>
 * 
 * @function SlidesApp.WordArt#select
 * 
 * @return void
 */


/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
 * 
 * <p>A script can only access the selection of the user who is running the script, and only if
 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
 * 
 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 * 
 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
 * 
 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
 * parameter:
 * 
 * <ol>
 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
 * </ol>
 * 
 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
 * 
 * <pre class="prettyprint"><code>
 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
 * // First select the slide page, as the current page selection.
 * slide.selectAsCurrentPage();
 * // Then select all the page elements in the selected slide page.
 * var pageElements = slide.getPageElements();
 * for (var i = 0; i &lt; pageElements.length; i++) {
 *   pageElements[i].select(false);
 * }
 * </code></pre>
 * 
 * @function SlidesApp.WordArt#select
 * 
 * @param {Boolean} replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
 *     selection is added to any previous selection.
 * 
 * @return void
 */


/**
 * Sends the page element backward on the page by one element.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.WordArt#sendBackward
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Sends the page element to the back of the page.
 * 
 * <p>The page element must not be in a group.
 * 
 * @function SlidesApp.WordArt#sendToBack
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Sets the page element's alt text description.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setDescription(&#39;new alt text description&#39;);
 * Logger.log(pageElement.getDescription());
 * </code></pre>
 * 
 * @function SlidesApp.WordArt#setDescription
 * 
 * @param {String} description - The string to set the alt text description to.
 * 
 * @return {SlidesApp.WordArt} This page element.
 */


/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.WordArt#setHeight
 * 
 * @param {Number} height - The new height of this page element to set, in points.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Sets the element's horizontal position in points, measured from the upper-left corner of the
 * page when the element has no rotation.
 * 
 * @function SlidesApp.WordArt#setLeft
 * 
 * @param {Number} left - The new horizontal position to set, in points.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(0);
 * </pre>
 * 
 * @function SlidesApp.WordArt#setLinkSlide
 * 
 * @param {IntegerNum} slideIndex - The zero-based index to the slide.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * var slide = presentation.getSlides()[0];
 * shape.setLinkSlide(slide);
 * </pre>
 * 
 * @function SlidesApp.WordArt#setLinkSlide
 * 
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
 * 
 * <pre class="prettyprint">
 * // Set a link to the first slide of the presentation.
 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 * </pre>
 * 
 * @function SlidesApp.WordArt#setLinkSlide
 * 
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
 * 
 * <pre class="prettyprint">
 * // Set a link to the URL.
 * shape.setLinkUrl("https://slides.google.com");
 * </pre>
 * 
 * @function SlidesApp.WordArt#setLinkUrl
 * 
 * @param {String} url - The URL string.
 * 
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */


/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 * 
 * @function SlidesApp.WordArt#setRotation
 * 
 * @param {Number} angle - The new clockwise rotation angle to set, in degrees.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Sets the page element's alt text title.
 * 
 * <pre class="prettyprint"><code>
 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
 * pageElement.setTitle(&#39;new alt text title&#39;);
 * Logger.log(pageElement.getTitle());
 * </code></pre>
 * 
 * @function SlidesApp.WordArt#setTitle
 * 
 * @param {String} title - The string to set the alt text title to.
 * 
 * @return {SlidesApp.WordArt} This page element.
 */


/**
 * Sets the element's vertical position in points, measured from the upper-left corner of the page
 * when the element has no rotation.
 * 
 * @function SlidesApp.WordArt#setTop
 * 
 * @param {Number} top - The new vertical position to set, in points.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */


/**
 * Sets the transform of the page element with the provided transform.
 * 
 * <p>Updating the transform of a group changes the absolute transform of the page elements in
 * that group, which can change their visual appearance.
 * 
 * <p>Updating the transform of a page element that is in a group only changes the transform of
 * that page element; it doesn't affect the transforms of the group or other page elements in the
 * group.
 * 
 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#getTransform()'>getTransform()</a></code>.
 * 
 * @function SlidesApp.WordArt#setTransform
 * 
 * @param {SlidesApp.AffineTransform} transform - The transform that is set for this page element.
 * 
 * @return {SlidesApp.WordArt} This element, for chaining.
 */


/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 * element has no rotation.
 * 
 * @function SlidesApp.WordArt#setWidth
 * 
 * @param {Number} width - The new width of this page element to set, in points.
 * 
 * @return {SlidesApp.WordArt} This page element, for chaining.
 */



