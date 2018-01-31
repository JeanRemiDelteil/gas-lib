var SlidesApp = {};


/**
 * An enumeration of the types of alignment positions.
 * 
 * @class SlidesApp.AlignmentPosition
 */

/**
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition.CENTER
 * 
 * Align to the center.
 */

/**
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition.HORIZONTAL_CENTER
 * 
 * Align to the horizontal center.
 */

/**
 * @typedef {SlidesApp.AlignmentPosition} SlidesApp.AlignmentPosition.VERTICAL_CENTER
 * 
 * Align to the vertical center.
 */

/**
 * An enumeration of the different arrow styles that a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> can have.
 * 
 * @class SlidesApp.ArrowStyle
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_ARROW
 * 
 * Filled arrow. Corresponds to ECMA-376 ST_LineEndType value 'triangle'.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_CIRCLE
 * 
 * Filled circle. Corresponds to ECMA-376 ST_LineEndType value 'oval'.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_DIAMOND
 * 
 * Filled diamond. Corresponds to ECMA-376 ST_LineEndType value 'diamond'.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.FILL_SQUARE
 * 
 * Filled square.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.NONE
 * 
 * No arrow.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_ARROW
 * 
 * Hollow arrow.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_CIRCLE
 * 
 * Hollow circle.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_DIAMOND
 * 
 * Hollow diamond.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.OPEN_SQUARE
 * 
 * Hollow square.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.STEALTH_ARROW
 * 
 * Arrow with notched back. Corresponds to ECMA-376 ST_LineEndType value 'stealth'.
 */

/**
 * @typedef {SlidesApp.ArrowStyle} SlidesApp.ArrowStyle.UNSUPPORTED
 * 
 * An arrow style that is not supported.
 */

/**
 * An enumeration of the types of auto text.
 * 
 * @class SlidesApp.AutoTextType
 */

/**
 * @typedef {SlidesApp.AutoTextType} SlidesApp.AutoTextType.SLIDE_NUMBER
 * 
 * A slide number.
 */

/**
 * @typedef {SlidesApp.AutoTextType} SlidesApp.AutoTextType.UNSUPPORTED
 * 
 * An auto text type that is not supported.
 */

/**
 * An enumeration of the different merge states of a table cell.
 * 
 * @class SlidesApp.CellMergeState
 */

/**
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState.HEAD
 * 
 * The cell is merged and it is the head (i.e. upper left) cell within the merged set of cells.

 <p>As an example, assume the following table.

 <pre class="prettyprint">
 -------------------
 |(0,0)|(0,1)|(0,2)|
 -------------------
 </pre>

 If the first two cells are merged to form the following table, cell (0,0) is the head cell and
 (0,1) is a merged cell.

 <pre class="prettyprint">
 -------------------
 |(0,0)      |(0,2)|
 -------------------
 </pre>
 */

/**
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState.MERGED
 * 
 * The cell is merged but is not the head (i.e. upper left) cell.

 <p>As an example, assume the following table.

 <pre class="prettyprint">
 -------------------
 |(0,0)|(0,1)|(0,2)|
 -------------------
 </pre>

 If the first two cells are merged to form the following table, cell (0,0) is the head cell and
 (0,1) is a merged cell.

 <pre class="prettyprint">
 -------------------
 |(0,0)      |(0,2)|
 -------------------
 </pre>
 */

/**
 * @typedef {SlidesApp.CellMergeState} SlidesApp.CellMergeState.NORMAL
 * 
 * The cell is not merged.
 */

/**
 * An enumeration of color types.
 * 
 * @class SlidesApp.ColorType
 */

/**
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType.RGB
 * 
 * A color defined by red, green, blue color channels.
 */

/**
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType.THEME
 * 
 * A color that refers to an entry in the page's color scheme.
 */

/**
 * @typedef {SlidesApp.ColorType} SlidesApp.ColorType.UNSUPPORTED
 * 
 * A color type that is not supported.
 */

/**
 * An enumeration of the different dash styles that a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> can have.
 * 
 * @class SlidesApp.DashStyle
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.DASH
 * 
 * Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.DASH_DOT
 * 
 * Alternating dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dashDot'.
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.DOT
 * 
 * Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.LONG_DASH
 * 
 * Line with large dashes. Corresponds to ECMA-376 ST_PresetLineDashVal value 'lgDash'.
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.LONG_DASH_DOT
 * 
 * Alternating large dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value
 'lgDashDot'.
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.SOLID
 * 
 * Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default
 dash style.
 */

/**
 * @typedef {SlidesApp.DashStyle} SlidesApp.DashStyle.UNSUPPORTED
 * 
 * A dash style that is not supported.
 */

/**
 * An enumeration of fill types.
 * 
 * @class SlidesApp.FillType
 */

/**
 * @typedef {SlidesApp.FillType} SlidesApp.FillType.NONE
 * 
 * No fill, so the background is transparent.
 */

/**
 * @typedef {SlidesApp.FillType} SlidesApp.FillType.SOLID
 * 
 * A solid color fill.
 */

/**
 * @typedef {SlidesApp.FillType} SlidesApp.FillType.UNSUPPORTED
 * 
 * A fill type that is not supported.
 */

/**
 * An enumeration of the categories of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code>.
 * 
 * @class SlidesApp.LineCategory
 */

/**
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.BENT
 * 
 * Bent connectors, including bent connector 2 to 5.
 */

/**
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.CURVED
 * 
 * Curved connectors, including curved connector 2 to 5.
 */

/**
 * @typedef {SlidesApp.LineCategory} SlidesApp.LineCategory.STRAIGHT
 * 
 * Straight connectors, including straight connector 1
 */

/**
 * An enumeration of the types of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code>.
 * 
 * @class SlidesApp.LineFillType
 */

/**
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType.NONE
 * 
 * No fill, so the line or outline is transparent.
 */

/**
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType.SOLID
 * 
 * A solid color fill.
 */

/**
 * @typedef {SlidesApp.LineFillType} SlidesApp.LineFillType.UNSUPPORTED
 * 
 * A line fill type that is not supported.
 */

/**
 * An enumeration of the types of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code>.
 * 
 * @class SlidesApp.LineType
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_2
 * 
 * Bent connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector2'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_3
 * 
 * Bent connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector3'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_4
 * 
 * Bent connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector4'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.BENT_CONNECTOR_5
 * 
 * Bent connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector5'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_2
 * 
 * Curved connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector2'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_3
 * 
 * Curved connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector3'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_4
 * 
 * Curved connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector4'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.CURVED_CONNECTOR_5
 * 
 * Curved connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector5'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.STRAIGHT_CONNECTOR_1
 * 
 * Straight connector 1 form. Corresponds to ECMA-376 ST_ShapeType 'straightConnector1'.
 */

/**
 * @typedef {SlidesApp.LineType} SlidesApp.LineType.UNSUPPORTED
 * 
 * A line type that is not supported.
 */

/**
 * An enumeration of the types of links.
 * 
 * @class SlidesApp.LinkType
 */

/**
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.SLIDE_ID
 * 
 * A link to a specific slide in this presentation, addressed by its ID.
 */

/**
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.SLIDE_INDEX
 * 
 * A link to a specific slide in this presentation, addressed by its zero-based index.
 */

/**
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.SLIDE_POSITION
 * 
 * A link to a specific slide in this presentation, addressed by its position.
 */

/**
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.UNSUPPORTED
 * 
 * A link type that is not supported.
 */

/**
 * @typedef {SlidesApp.LinkType} SlidesApp.LinkType.URL
 * 
 * A link to an external web page.
 */

/**
 * An enumeration of the types of list presets.
 * 
 * @class SlidesApp.ListPreset
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.ARROW3D_CIRCLE_SQUARE
 * 
 * A list with a `ARROW3D`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.ARROW_DIAMOND_DISC
 * 
 * A list with a `ARROW`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.CHECKBOX
 * 
 * A list with `CHECKBOX` glyphs for all list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIAMONDX_ARROW3D_SQUARE
 * 
 * A list with a `DIAMONDX`, `ARROW3D` and `SQUARE` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIAMONDX_HOLLOWDIAMOND_SQUARE
 * 
 * A list with a `DIAMONDX`, `HOLLOWDIAMOND` and `SQUARE` glyphs for the first 3 list nesting
 levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIAMOND_CIRCLE_SQUARE
 * 
 * A list with a `DIAMOND`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIGIT_ALPHA_ROMAN
 * 
 * A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
 by periods.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIGIT_ALPHA_ROMAN_PARENS
 * 
 * A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
 by parenthesis.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DIGIT_NESTED
 * 
 * A list with `DIGIT` glyphs separated by periods, where each nesting level uses the previous
 nesting level's glyph as a prefix. For example: '1.', '1.1.', '2.', '2.2.'.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.DISC_CIRCLE_SQUARE
 * 
 * A list with a `DISC`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.LEFTTRIANGLE_DIAMOND_DISC
 * 
 * A list with a `LEFTTRIANGLE`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.STAR_CIRCLE_SQUARE
 * 
 * A list with a `STAR`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.UPPERALPHA_ALPHA_ROMAN
 * 
 * A list with `UPPERALPHA`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
 followed by periods.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.UPPERROMAN_UPPERALPHA_DIGIT
 * 
 * A list with `UPPERROMAN`, `UPPERALPHA` and `DIGIT` glyphs for the first 3 list nesting levels,
 followed by periods.
 */

/**
 * @typedef {SlidesApp.ListPreset} SlidesApp.ListPreset.ZERODIGIT_ALPHA_ROMAN
 * 
 * A list with `ZERODIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
 followed by periods.
 */

/**
 * An enumeration of the types of page backgrounds.
 * 
 * @class SlidesApp.PageBackgroundType
 */

/**
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.NONE
 * 
 * No fill, so the background is rendered white.
 */

/**
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.PICTURE
 * 
 * A picture that is stretched to fill the page.
 */

/**
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.SOLID
 * 
 * A solid color fill.
 */

/**
 * @typedef {SlidesApp.PageBackgroundType} SlidesApp.PageBackgroundType.UNSUPPORTED
 * 
 * A page background type that is not supported.
 */

/**
 * An enumeration of the types of page elements.
 * 
 * @class SlidesApp.PageElementType
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.GROUP
 * 
 * Represents a collection of page elements joined as a single unit.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.IMAGE
 * 
 * Represents an image.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.LINE
 * 
 * Represents a line.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.SHAPE
 * 
 * Represents a generic shape that does not have a more specific classification.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.SHEETS_CHART
 * 
 * Represents a linked chart embedded from Google Sheets.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.TABLE
 * 
 * Represents a table.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.UNSUPPORTED
 * 
 * Represents a page element that is not supported and cannot be further classified.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.VIDEO
 * 
 * Represents a video.
 */

/**
 * @typedef {SlidesApp.PageElementType} SlidesApp.PageElementType.WORD_ART
 * 
 * Represents word art.
 */

/**
 * An enumeration of the types of pages.
 * 
 * @class SlidesApp.PageType
 */

/**
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.LAYOUT
 * 
 * A layout page.
 */

/**
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.MASTER
 * 
 * A master page.
 */

/**
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.SLIDE
 * 
 * A slide page.
 */

/**
 * @typedef {SlidesApp.PageType} SlidesApp.PageType.UNSUPPORTED
 * 
 * A page type that is not supported.
 */

/**
 * An enumeration of the types of paragraph alignment.
 * 
 * @class SlidesApp.ParagraphAlignment
 */

/**
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.CENTER
 * 
 * The paragraph is centered.
 */

/**
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.END
 * 
 * The paragraph is aligned to the end of the line. Right-aligned for left-to-right text,
 left-aligned otherwise.
 */

/**
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.JUSTIFIED
 * 
 * The paragraph is justified.
 */

/**
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.START
 * 
 * The paragraph is aligned to the start of the line. Left-aligned for left-to-right text,
 right-aligned otherwise.
 */

/**
 * @typedef {SlidesApp.ParagraphAlignment} SlidesApp.ParagraphAlignment.UNSUPPORTED
 * 
 * A paragraph alignment that is not supported.
 */

/**
 * An enumeration of the types of placeholders.
 * 
 * @class SlidesApp.PlaceholderType
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.BODY
 * 
 * Body text.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.CENTERED_TITLE
 * 
 * Title centered.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.CHART
 * 
 * Chart or graph.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.CLIP_ART
 * 
 * Clip art image.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.DATE_AND_TIME
 * 
 * Date and time.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.DIAGRAM
 * 
 * Diagram.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.FOOTER
 * 
 * Footer text.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.HEADER
 * 
 * Header text.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.MEDIA
 * 
 * Multimedia.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.NONE
 * 
 * Not a Placeholder.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.OBJECT
 * 
 * Any content type.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.PICTURE
 * 
 * Picture.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.SLIDE_IMAGE
 * 
 * Slide image.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.SLIDE_NUMBER
 * 
 * Number of a slide.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.SUBTITLE
 * 
 * Subtitle.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.TABLE
 * 
 * Table.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.TITLE
 * 
 * Slide title.
 */

/**
 * @typedef {SlidesApp.PlaceholderType} SlidesApp.PlaceholderType.UNSUPPORTED
 * 
 * A placeholder type that is not supported.
 */

/**
 * An enumeration of the predefined layouts.
 * 
 * @class SlidesApp.PredefinedLayout
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.BIG_NUMBER
 * 
 * Layout with a big number heading.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.BLANK
 * 
 * Blank layout, with no placeholders.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.CAPTION_ONLY
 * 
 * Layout with a caption at the bottom.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.MAIN_POINT
 * 
 * Layout with a main point.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.ONE_COLUMN_TEXT
 * 
 * Layout with one title and one body, arranged in a single column.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.SECTION_HEADER
 * 
 * Layout with a section title.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.SECTION_TITLE_AND_DESCRIPTION
 * 
 * Layout with a title and subtitle on one side and description on the other.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE
 * 
 * Layout with a title and a subtitle.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE_AND_BODY
 * 
 * Layout with a title and body.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE_AND_TWO_COLUMNS
 * 
 * Layout with a title and two columns.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.TITLE_ONLY
 * 
 * Layout with only a title.
 */

/**
 * @typedef {SlidesApp.PredefinedLayout} SlidesApp.PredefinedLayout.UNSUPPORTED
 * 
 * A layout that is not supported.
 */

/**
 * An enumeration of the types of selections.
 * 
 * @class SlidesApp.SelectionType
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.CURRENT_PAGE
 * 
 * Current page selection.
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.NONE
 * 
 * No selection.
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.PAGE
 * 
 * Page selection in the thumbnail flimstrip.
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.PAGE_ELEMENT
 * 
 * Page element selection.
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.TABLE_CELL
 * 
 * Table cell selection.
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.TEXT
 * 
 * Text selection.
 */

/**
 * @typedef {SlidesApp.SelectionType} SlidesApp.SelectionType.UNSUPPORTED
 * 
 * A selection type that is not supported.
 */

/**
 * An enumeration of the types of shapes.
 * 
 * @class SlidesApp.ShapeType
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARC
 * 
 * Curved arc shape. Corresponds to ECMA-376 ST_ShapeType 'arc'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARROW_EAST
 * 
 * East arrow shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARROW_NORTH
 * 
 * North arrow shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ARROW_NORTH_EAST
 * 
 * Northeast arrow shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BENT_ARROW
 * 
 * Bent arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BENT_UP_ARROW
 * 
 * Bent up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentUpArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BEVEL
 * 
 * Bevel shape. Corresponds to ECMA-376 ST_ShapeType 'bevel'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BLOCK_ARC
 * 
 * Block arc shape. Corresponds to ECMA-376 ST_ShapeType 'blockArc'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BRACE_PAIR
 * 
 * Brace pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracePair'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.BRACKET_PAIR
 * 
 * Bracket pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracketPair'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CAN
 * 
 * Can shape. Corresponds to ECMA-376 ST_ShapeType 'can'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CHEVRON
 * 
 * Chevron shape. Corresponds to ECMA-376 ST_ShapeType 'chevron'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CHORD
 * 
 * Chord shape. Corresponds to ECMA-376 ST_ShapeType 'chord'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CLOUD
 * 
 * Cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloud'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CLOUD_CALLOUT
 * 
 * Callout cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloudCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CORNER
 * 
 * Corner shape. Corresponds to ECMA-376 ST_ShapeType 'corner'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CUBE
 * 
 * Cube shape. Corresponds to ECMA-376 ST_ShapeType 'cube'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_DOWN_ARROW
 * 
 * Curved down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedDownArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_LEFT_ARROW
 * 
 * Curved left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedLeftArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_RIGHT_ARROW
 * 
 * Curved right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedRightArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CURVED_UP_ARROW
 * 
 * Curved up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedUpArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.CUSTOM
 * 
 * Custom shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DECAGON
 * 
 * Decagon shape. Corresponds to ECMA-376 ST_ShapeType 'decagon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DIAGONAL_STRIPE
 * 
 * Diagonal stripe shape. Corresponds to ECMA-376 ST_ShapeType 'diagStripe'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DIAMOND
 * 
 * Diamond shape. Corresponds to ECMA-376 ST_ShapeType 'diamond'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DODECAGON
 * 
 * Dodecagon shape. Corresponds to ECMA-376 ST_ShapeType 'dodecagon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DONUT
 * 
 * Donut shape. Corresponds to ECMA-376 ST_ShapeType 'donut'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DOUBLE_WAVE
 * 
 * Double wave shape. Corresponds to ECMA-376 ST_ShapeType 'doubleWave'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DOWN_ARROW
 * 
 * Down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.DOWN_ARROW_CALLOUT
 * 
 * Callout down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrowCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ELLIPSE
 * 
 * Ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'ellipse'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ELLIPSE_RIBBON
 * 
 * Ellipse ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ELLIPSE_RIBBON_2
 * 
 * Ellipse ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon2'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_ALTERNATE_PROCESS
 * 
 * Alternate process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartAlternateProcess'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_COLLATE
 * 
 * Collate flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartCollate'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_CONNECTOR
 * 
 * Connector flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartConnector'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DECISION
 * 
 * Decision flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDecision'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DELAY
 * 
 * Delay flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDelay'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DISPLAY
 * 
 * Display flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDisplay'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_DOCUMENT
 * 
 * Document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDocument'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_EXTRACT
 * 
 * Extract flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartExtract'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_INPUT_OUTPUT
 * 
 * Input output flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInputOutput'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_INTERNAL_STORAGE
 * 
 * Internal storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInternalStorage'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MAGNETIC_DISK
 * 
 * Magnetic disk flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDisk'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MAGNETIC_DRUM
 * 
 * Magnetic drum flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDrum'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MAGNETIC_TAPE
 * 
 * Magnetic tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticTape'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MANUAL_INPUT
 * 
 * Manual input flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualInput'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MANUAL_OPERATION
 * 
 * Manual operation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualOperation'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MERGE
 * 
 * Merge flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMerge'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_MULTIDOCUMENT
 * 
 * Multi-document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMultidocument'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_OFFLINE_STORAGE
 * 
 * Offline storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOfflineStorage'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_OFFPAGE_CONNECTOR
 * 
 * Off-page connector flow shape. Corresponds to ECMA-376 ST_ShapeType
 'flowChartOffpageConnector'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_ONLINE_STORAGE
 * 
 * Online storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOnlineStorage'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_OR
 * 
 * Or flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOr'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PREDEFINED_PROCESS
 * 
 * Predefined process flow shape. Corresponds to ECMA-376 ST_ShapeType
 'flowChartPredefinedProcess'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PREPARATION
 * 
 * Preparation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPreparation'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PROCESS
 * 
 * Process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartProcess'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PUNCHED_CARD
 * 
 * Punched card flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedCard'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_PUNCHED_TAPE
 * 
 * Punched tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedTape'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_SORT
 * 
 * Sort flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSort'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_SUMMING_JUNCTION
 * 
 * Summing junction flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSummingJunction'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FLOW_CHART_TERMINATOR
 * 
 * Terminator flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartTerminator'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FOLDED_CORNER
 * 
 * Folded corner shape. Corresponds to ECMA-376 ST_ShapeType 'foldedCorner'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.FRAME
 * 
 * Frame shape. Corresponds to ECMA-376 ST_ShapeType 'frame'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HALF_FRAME
 * 
 * Half frame shape. Corresponds to ECMA-376 ST_ShapeType 'halfFrame'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HEART
 * 
 * Heart shape. Corresponds to ECMA-376 ST_ShapeType 'heart'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HEPTAGON
 * 
 * Heptagon shape. Corresponds to ECMA-376 ST_ShapeType 'heptagon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HEXAGON
 * 
 * Hexagon shape. Corresponds to ECMA-376 ST_ShapeType 'hexagon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HOME_PLATE
 * 
 * Home plate shape. Corresponds to ECMA-376 ST_ShapeType 'homePlate'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.HORIZONTAL_SCROLL
 * 
 * Horizontal scroll shape. Corresponds to ECMA-376 ST_ShapeType 'horizontalScroll'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.IRREGULAR_SEAL_1
 * 
 * Irregular seal 1 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal1'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.IRREGULAR_SEAL_2
 * 
 * Irregular seal 2 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal2'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_ARROW
 * 
 * Left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_ARROW_CALLOUT
 * 
 * Callout left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrowCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_BRACE
 * 
 * Left brace shape. Corresponds to ECMA-376 ST_ShapeType 'leftBrace'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_BRACKET
 * 
 * Left bracket shape. Corresponds to ECMA-376 ST_ShapeType 'leftBracket'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_RIGHT_ARROW
 * 
 * Left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_RIGHT_ARROW_CALLOUT
 * 
 * Callout left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrowCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_RIGHT_UP_ARROW
 * 
 * Left right up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightUpArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LEFT_UP_ARROW
 * 
 * Left up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftUpArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.LIGHTNING_BOLT
 * 
 * Lightning bolt shape. Corresponds to ECMA-376 ST_ShapeType 'lightningBolt'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_DIVIDE
 * 
 * Divide math shape. Corresponds to ECMA-376 ST_ShapeType 'mathDivide'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_EQUAL
 * 
 * Equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathEqual'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_MINUS
 * 
 * Minus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMinus'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_MULTIPLY
 * 
 * Multiply math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMultiply'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_NOT_EQUAL
 * 
 * Not equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathNotEqual'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MATH_PLUS
 * 
 * Plus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathPlus'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.MOON
 * 
 * Moon shape. Corresponds to ECMA-376 ST_ShapeType 'moon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.NOTCHED_RIGHT_ARROW
 * 
 * Notched right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'notchedRightArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.NO_SMOKING
 * 
 * No smoking shape. Corresponds to ECMA-376 ST_ShapeType 'noSmoking'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.OCTAGON
 * 
 * Octagon shape. Corresponds to ECMA-376 ST_ShapeType 'octagon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PARALLELOGRAM
 * 
 * Parallelogram shape. Corresponds to ECMA-376 ST_ShapeType 'parallelogram'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PENTAGON
 * 
 * Pentagon shape. Corresponds to ECMA-376 ST_ShapeType 'pentagon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PIE
 * 
 * Pie shape. Corresponds to ECMA-376 ST_ShapeType 'pie'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PLAQUE
 * 
 * Plaque shape. Corresponds to ECMA-376 ST_ShapeType 'plaque'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.PLUS
 * 
 * Plus shape. Corresponds to ECMA-376 ST_ShapeType 'plus'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.QUAD_ARROW
 * 
 * Quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.QUAD_ARROW_CALLOUT
 * 
 * Callout quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrowCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RECTANGLE
 * 
 * Rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'rect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIBBON
 * 
 * Ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIBBON_2
 * 
 * Ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon2'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_ARROW
 * 
 * Right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_ARROW_CALLOUT
 * 
 * Callout right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrowCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_BRACE
 * 
 * Right brace shape. Corresponds to ECMA-376 ST_ShapeType 'rightBrace'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_BRACKET
 * 
 * Right bracket shape. Corresponds to ECMA-376 ST_ShapeType 'rightBracket'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.RIGHT_TRIANGLE
 * 
 * Right triangle shape. Corresponds to ECMA-376 ST_ShapeType 'rtTriangle'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_1_RECTANGLE
 * 
 * One round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'round1Rect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_2_DIAGONAL_RECTANGLE
 * 
 * Two diagonal round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 'round2DiagRect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_2_SAME_RECTANGLE
 * 
 * Two same-side round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 'round2SameRect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.ROUND_RECTANGLE
 * 
 * Round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'roundRect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SMILEY_FACE
 * 
 * Smiley face shape. Corresponds to ECMA-376 ST_ShapeType 'smileyFace'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_1_RECTANGLE
 * 
 * One snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip1Rect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_2_DIAGONAL_RECTANGLE
 * 
 * Two diagonal snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip2DiagRect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_2_SAME_RECTANGLE
 * 
 * Two same-side snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 'snip2SameRect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SNIP_ROUND_RECTANGLE
 * 
 * One snip one round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 'snipRoundRect'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SPEECH
 * 
 * Speech shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STARBURST
 * 
 * Star burst shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_10
 * 
 * Ten pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star10'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_12
 * 
 * Twelve pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star12'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_16
 * 
 * Sixteen pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star16'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_24
 * 
 * Twenty four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star24'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_32
 * 
 * Thirty two pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star32'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_4
 * 
 * Four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star4'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_5
 * 
 * Five pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star5'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_6
 * 
 * Six pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star6'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_7
 * 
 * Seven pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star7'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STAR_8
 * 
 * Eight pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star8'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.STRIPED_RIGHT_ARROW
 * 
 * Striped right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'stripedRightArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.SUN
 * 
 * Sun shape. Corresponds to ECMA-376 ST_ShapeType 'sun'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TEARDROP
 * 
 * Teardrop shape. Corresponds to ECMA-376 ST_ShapeType 'teardrop'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TEXT_BOX
 * 
 * Text box shape.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TRAPEZOID
 * 
 * Trapezoid shape. Corresponds to ECMA-376 ST_ShapeType 'trapezoid'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.TRIANGLE
 * 
 * Triangle shape. Corresponds to ECMA-376 ST_ShapeType 'triangle'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UNSUPPORTED
 * 
 * A shape type that is not supported.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UP_ARROW
 * 
 * Up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UP_ARROW_CALLOUT
 * 
 * Callout up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrowCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UP_DOWN_ARROW
 * 
 * Up down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upDownArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.UTURN_ARROW
 * 
 * U-turn arrow shape. Corresponds to ECMA-376 ST_ShapeType 'uturnArrow'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.VERTICAL_SCROLL
 * 
 * Vertical scroll shape. Corresponds to ECMA-376 ST_ShapeType 'verticalScroll'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WAVE
 * 
 * Wave shape. Corresponds to ECMA-376 ST_ShapeType 'wave'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WEDGE_ELLIPSE_CALLOUT
 * 
 * Callout wedge ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeEllipseCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WEDGE_RECTANGLE_CALLOUT
 * 
 * Callout wedge rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeRectCallout'.
 */

/**
 * @typedef {SlidesApp.ShapeType} SlidesApp.ShapeType.WEDGE_ROUND_RECTANGLE_CALLOUT
 * 
 * Callout wedge round rectangle shape. Corresponds to ECMA-376 ST_ShapeType
 'wedgeRoundRectCallout'.
 */

/**
 * An enumeration of Sheets chart embed types.
 * 
 * @class SlidesApp.SheetsChartEmbedType
 */

/**
 * @typedef {SlidesApp.SheetsChartEmbedType} SlidesApp.SheetsChartEmbedType.IMAGE
 * 
 * Indicates that the chart is embedded as an image.
 */

/**
 * @typedef {SlidesApp.SheetsChartEmbedType} SlidesApp.SheetsChartEmbedType.UNSUPPORTED
 * 
 * Represents a chart that is not supported and cannot be further classified.
 */

/**
 * An enumeration of the types of slide positions.
 * 
 * @class SlidesApp.SlidePosition
 */

/**
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.FIRST_SLIDE
 * 
 * The first slide in the presentation.
 */

/**
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.LAST_SLIDE
 * 
 * The last slide in the presentation.
 */

/**
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.NEXT_SLIDE
 * 
 * The next slide.
 */

/**
 * @typedef {SlidesApp.SlidePosition} SlidesApp.SlidePosition.PREVIOUS_SLIDE
 * 
 * The previous slide.
 */

/**
 * An enumeration of the types of spacing modes.
 * 
 * @class SlidesApp.SpacingMode
 */

/**
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode.COLLAPSE_LISTS
 * 
 * Paragraph spacing is skipped between list elements.
 */

/**
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode.NEVER_COLLAPSE
 * 
 * Paragraph spacing is always rendered.
 */

/**
 * @typedef {SlidesApp.SpacingMode} SlidesApp.SpacingMode.UNSUPPORTED
 * 
 * A spacing mode that is not supported.
 */

/**
 * An enumeration of the types of text baseline offset.
 * 
 * @class SlidesApp.TextBaselineOffset
 */

/**
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.NONE
 * 
 * The text is not vertically offset.
 */

/**
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.SUBSCRIPT
 * 
 * The text is vertically offset downwards.
 */

/**
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.SUPERSCRIPT
 * 
 * The text is vertically offset upwards.
 */

/**
 * @typedef {SlidesApp.TextBaselineOffset} SlidesApp.TextBaselineOffset.UNSUPPORTED
 * 
 * An text baseline offset that is not supported.
 */

/**
 * An enumeration of the types of text directions.
 * 
 * @class SlidesApp.TextDirection
 */

/**
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection.LEFT_TO_RIGHT
 * 
 * The text goes from left to right.
 */

/**
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection.RIGHT_TO_LEFT
 * 
 * The text goes from right to left.
 */

/**
 * @typedef {SlidesApp.TextDirection} SlidesApp.TextDirection.UNSUPPORTED
 * 
 * A text direction that is not supported.
 */

/**
 * An enumeration of theme colors.
 * 
 * @class SlidesApp.ThemeColorType
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT1
 * 
 * Represents the first accent color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT2
 * 
 * Represents the second accent color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT3
 * 
 * Represents the third accent color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT4
 * 
 * Represents the fourth accent color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT5
 * 
 * Represents the fifth accent color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.ACCENT6
 * 
 * Represents the sixth accent color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.DARK1
 * 
 * Represents the first dark color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.DARK2
 * 
 * Represents the second dark color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.FOLLOWED_HYPERLINK
 * 
 * Represents the color to use for visited hyperlinks.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.HYPERLINK
 * 
 * Represents the color to use for hyperlinks.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.LIGHT1
 * 
 * Represents the first light color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.LIGHT2
 * 
 * Represents the second light color.
 */

/**
 * @typedef {SlidesApp.ThemeColorType} SlidesApp.ThemeColorType.UNSUPPORTED
 * 
 * Represents a theme color that is not supported.
 */

/**
 * An enumeration of the types of video source.
 * 
 * @class SlidesApp.VideoSourceType
 */

/**
 * @typedef {SlidesApp.VideoSourceType} SlidesApp.VideoSourceType.UNSUPPORTED
 * 
 * A video source type that is not supported.
 */

/**
 * @typedef {SlidesApp.VideoSourceType} SlidesApp.VideoSourceType.YOUTUBE
 * 
 * YouTube video.
 */

/**
 * Creates and opens a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>.
 *
 * @param {String} name - The name to be given to the created presentation.
 *
 * @return {SlidesApp.Presentation} the presentation with the given name.
 */
SlidesApp.create = function(name){};

/**
 * Returns the currently active presentation to which the script is <a
 href="/apps-script/scripts_containers">container-bound</a>, or <code>null</code> if there is no
 active presentation. To interact with a presentation to which the script is not
 container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slides-app.html#openById(String)'>openById(id)</a></code> instead.

 <pre class="prettyprint">
 // Get the current presentation to which this script is bound.
 var presentation = SlidesApp.getActivePresentation();
 </pre>

 If the presentation is already open, the same presentation instance is returned.
 *
 * @return {SlidesApp.Presentation}
 */
SlidesApp.getActivePresentation = function(){};

/**
 * Returns an instance of the presentation's user-interface environment that allows the script to
 add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 current instance of an open presentation, and only if the script is <a
 href="/apps-script/scripts_containers">bound</a> to the presentation. For more information, see
 the guides to <a href="/apps-script/guides/menus">menus</a> and <a
 href="/apps-script/guides/dialogs">dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Add a custom menu to the active presentation, including a separator and a sub-menu.
 function onOpen(e) {
   SlidesApp.getUi()
       .createMenu('My Menu')
       .addItem('My menu item', 'myFunction')
       .addSeparator()
       .addSubMenu(SlidesApp.getUi().createMenu('My sub-menu')
           .addItem('One sub-menu item', 'mySecondFunction')
           .addItem('Another sub-menu item', 'myThirdFunction'))
       .addToUi();
 }
 </pre>
 *
 * @return {Ui}
 */
SlidesApp.getUi = function(){};

/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html'>AffineTransformBuilder</a></code> to build an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform.html'>AffineTransform</a></code>. The builder
 is preset with the identity affine transform.
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.newAffineTransformBuilder = function(){};

/**
 * Opens the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> with the given ID.

 <pre class="prettyprint">
 // Open a presentation by ID.
 var presentation = SlidesApp.openById('docId');
 </pre>

 If the presentation is already open, the same presentation instance is returned.
 *
 * @param {String} id - 
 *
 * @return {SlidesApp.Presentation} the presentation with the given ID
 */
SlidesApp.openById = function(id){};

/**
 * Opens the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> with the given URL.

 <pre class="prettyprint">
 // Open a presentation by URL.
 var presentation = SlidesApp.openByUrl('https://docs.google.com/presentation/d/docId/edit');
 </pre>

 If the presentation is already open, the same presentation instance is returned.
 *
 * @param {String} url - 
 *
 * @return {SlidesApp.Presentation} the presentation with the given URL
 */
SlidesApp.openByUrl = function(url){};

/** @constructor */
SlidesApp.AffineTransform = function(){};

/**
 * Gets the X coordinate scaling element.
 *
 * @return {Number}
 */
SlidesApp.AffineTransform.prototype.getScaleX = function(){};

/**
 * Gets the Y coordinate scaling element.
 *
 * @return {Number}
 */
SlidesApp.AffineTransform.prototype.getScaleY = function(){};

/**
 * Gets the X coordinate shearing element.
 *
 * @return {Number}
 */
SlidesApp.AffineTransform.prototype.getShearX = function(){};

/**
 * Gets the Y coordinate shearing element.
 *
 * @return {Number}
 */
SlidesApp.AffineTransform.prototype.getShearY = function(){};

/**
 * Gets the X coordinate translation element in points.
 *
 * @return {Number}
 */
SlidesApp.AffineTransform.prototype.getTranslateX = function(){};

/**
 * Gets the Y coordinate translation element in points.
 *
 * @return {Number}
 */
SlidesApp.AffineTransform.prototype.getTranslateY = function(){};

/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html'>AffineTransformBuilder</a></code> based on this transform.
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransform.prototype.toBuilder = function(){};

/** @constructor */
SlidesApp.AffineTransformBuilder = function(){};

/**
 * Creates an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform.html'>AffineTransform</a></code> object initialized with the elements set in the builder.
 *
 * @return {SlidesApp.AffineTransform}
 */
SlidesApp.AffineTransformBuilder.prototype.build = function(){};

/**
 * Sets the X coordinate scaling element and returns the builder.
 *
 * @param {Number} scaleX - 
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransformBuilder.prototype.setScaleX = function(scaleX){};

/**
 * Sets the Y coordinate scaling element and returns the builder.
 *
 * @param {Number} scaleY - 
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransformBuilder.prototype.setScaleY = function(scaleY){};

/**
 * Sets the X coordinate shearing element and returns the builder.
 *
 * @param {Number} shearX - 
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransformBuilder.prototype.setShearX = function(shearX){};

/**
 * Sets the Y coordinate shearing element and returns the builder.
 *
 * @param {Number} shearY - 
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransformBuilder.prototype.setShearY = function(shearY){};

/**
 * Sets the X coordinate translation element in points, and returns the builder.
 *
 * @param {Number} translateX - 
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransformBuilder.prototype.setTranslateX = function(translateX){};

/**
 * Sets the Y coordinate translation element in points, and returns the builder.
 *
 * @param {Number} translateY - 
 *
 * @return {SlidesApp.AffineTransformBuilder}
 */
SlidesApp.AffineTransformBuilder.prototype.setTranslateY = function(translateY){};

/** @constructor */
SlidesApp.AutoText = function(){};

/**
 * Returns the type of auto text. Returns <code>null</code> if the auto text has been deleted.
 *
 * @return {SlidesApp.AutoTextType}
 */
SlidesApp.AutoText.prototype.getAutoTextType = function(){};

/**
 * Returns the index of the auto text. Returns <code>null</code> if the auto text has been deleted.
 *
 * @return {number}
 */
SlidesApp.AutoText.prototype.getIndex = function(){};

/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> spanning the auto text. Returns <code>null</code> if the auto text has
 been deleted.
 *
 * @return {SlidesApp.TextRange}
 */
SlidesApp.AutoText.prototype.getRange = function(){};

/** @constructor */
SlidesApp.Border = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the border.
 *
 * @return {SlidesApp.DashStyle}
 */
SlidesApp.Border.prototype.getDashStyle = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code> of the border.
 *
 * @return {SlidesApp.LineFill}
 */
SlidesApp.Border.prototype.getLineFill = function(){};

/**
 * Gets the thickness of the border in points. Returns <code>null</code> if the element does not have a
 border.
 *
 * @return {Number}
 */
SlidesApp.Border.prototype.getWeight = function(){};

/**
 * Gets whether the border is visible or not.
 *
 * @return {Boolean}
 */
SlidesApp.Border.prototype.isVisible = function(){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the border.

 <p>Setting a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> on a transparent border makes it visible.
 *
 * @param {SlidesApp.DashStyle} style - 
 *
 * @return {SlidesApp.Border}
 */
SlidesApp.Border.prototype.setDashStyle = function(style){};

/**
 * Sets the border to be transparent.
 *
 * @return {SlidesApp.Border}
 */
SlidesApp.Border.prototype.setTransparent = function(){};

/**
 * Sets the thickness of the border in points.

 <p>Setting a weight on a transparent border makes it visible.
 *
 * @param {Number} points - 
 *
 * @return {SlidesApp.Border}
 */
SlidesApp.Border.prototype.setWeight = function(points){};

/** @constructor */
SlidesApp.Color = function(){};

/**
 * Converts this color to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/rgb-color.html'>RgbColor</a></code>.
 *
 * @return {SlidesApp.RgbColor}
 */
SlidesApp.Color.prototype.asRgbColor = function(){};

/**
 * Converts this color to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color.html'>ThemeColor</a></code>.
 *
 * @return {SlidesApp.ThemeColor}
 */
SlidesApp.Color.prototype.asThemeColor = function(){};

/**
 * Get the type of this color.
 *
 * @return {SlidesApp.ColorType}
 */
SlidesApp.Color.prototype.getColorType = function(){};

/** @constructor */
SlidesApp.ColorScheme = function(){};

/**
 * Returns the concrete <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code> associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code> in this color
 scheme.

 <p>The returned color is guaranteed to not be an instance of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color.html'>ThemeColor</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} theme - 
 *
 * @return {SlidesApp.Color}
 */
SlidesApp.ColorScheme.prototype.getConcreteColor = function(theme){};

/**
 * Returns a list of all possible theme color types in a color scheme.
 *
 * @return {SlidesApp.ThemeColorType[]}
 */
SlidesApp.ColorScheme.prototype.getThemeColors = function(){};

/** @constructor */
SlidesApp.Fill = function(){};

/**
 * Get the solid fill of this background, or <code>null</code> if the fill type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/fill-type.html#SOLID'>FillType.SOLID</a></code>.
 *
 * @return {SlidesApp.SolidFill}
 */
SlidesApp.Fill.prototype.getSolidFill = function(){};

/**
 * Get the type of this fill.
 *
 * @return {SlidesApp.FillType}
 */
SlidesApp.Fill.prototype.getType = function(){};

/**
 * Whether the background is visible.
 *
 * @return {Boolean}
 */
SlidesApp.Fill.prototype.isVisible = function(){};

/**
 * Sets the solid fill to the given RGB values.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(red, green, blue){};

/**
 * Sets the solid fill to the given alpha and RGB values.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(red, green, blue, alpha){};

/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 *
 * @param {SlidesApp.Color} color - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(color){};

/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 *
 * @param {SlidesApp.Color} color - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(color, alpha){};

/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(color){};

/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(color, alpha){};

/**
 * Sets the solid fill to the given hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexString - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(hexString){};

/**
 * Sets the solid fill to the given alpha and hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexString - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.Fill.prototype.setSolidFill = function(hexString, alpha){};

/**
 * Sets the background to transparent.
 *
 * @return void
 */
SlidesApp.Fill.prototype.setTransparent = function(){};

/** @constructor */
SlidesApp.Group = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Group.prototype.duplicate = function(){};

/**
 * Gets the collection of page elements in the group. The minimum size of a group is 2.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Group.prototype.getChildren = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.Group.prototype.getDescription = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Group.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Group.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Group.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Group.prototype.getLeft = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.Group.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.Group.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Group.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.Group.prototype.getRotation = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.Group.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Group.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The initial transform for a newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> is always the identity transform:
 1.0 scale parameters, and 0.0 shear and translate parameters.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.Group.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Group.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.Group.prototype.remove = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.Group.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.Group.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.setLeft = function(left){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Group.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.Image = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Image.prototype.duplicate = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the image.
 *
 * @return {SlidesApp.Border}
 */
SlidesApp.Image.prototype.getBorder = function(){};

/**
 * Gets a URL to the image.

 <p>This URL is tagged with the account of the requester, so anyone with the URL effectively
 accesses the image as the original requester. Access to the image may be lost if the
 presentation's sharing settings change. The returned URL expires after a short period of time.
 *
 * @return {String}
 */
SlidesApp.Image.prototype.getContentUrl = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.Image.prototype.getDescription = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Image.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Image.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Image.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Image.prototype.getLeft = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null) {
   Logger.log('Shape has a link of type: ' + link.getLinkType());
 }
 </pre>
 *
 * @return {SlidesApp.Link}
 */
SlidesApp.Image.prototype.getLink = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.Image.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.Image.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Image.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Image.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.Image.prototype.getRotation = function(){};

/**
 * Gets the image's source URL, if available.

 <p>When an image is inserted by URL, returns the URL provided during image insertion.
 *
 * @return {String} the image URL or <code>null</code> if the image does not have a source URL
 */
SlidesApp.Image.prototype.getSourceUrl = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.Image.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Image.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.Image.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Image.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.Image.prototype.remove = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.

 <pre class="prettyprint">
 shape.removeLink();
 </pre>
 *
 * @return void
 */
SlidesApp.Image.prototype.removeLink = function(){};

/**
 * Replaces this image with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code>.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the size of the existing image.

 <pre class="prettyprint">
 var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
 // Get the Drive image file with the given ID.
 var driveImage = DriveApp.getFileById(fileId);
 image.replace(driveImage);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return {SlidesApp.Image} this <code>Image</code>
 */
SlidesApp.Image.prototype.replace = function(blobSource){};

/**
 * Replaces this image with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code>, optionally cropping the
 image to fit.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <pre class="prettyprint">
 var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
 // Get the Drive image file with the given ID.
 var driveImage = DriveApp.getFileById(fileId);
 // Replace and crop the drive image.
 image.replace(driveImage, true);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing image's size. Otherwise, the
     image is scaled and centered.
 *
 * @return {SlidesApp.Image} this <code>Image</code>
 */
SlidesApp.Image.prototype.replace = function(blobSource, crop){};

/**
 * Replaces this image with another image downloaded from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the size of the existing image.
 *
 * @param {String} imageUrl - The URL to download the image from.
 *
 * @return {SlidesApp.Image} this <code>Image</code>
 */
SlidesApp.Image.prototype.replace = function(imageUrl){};

/**
 * Replaces this image with another image downloaded from the provided URL, optionally cropping
 the image to fit.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The URL to download the image from.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing image's size. Otherwise, the
     image is scaled and centered.
 *
 * @return {SlidesApp.Image} this <code>Image</code>
 */
SlidesApp.Image.prototype.replace = function(imageUrl, crop){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.Image.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.Image.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.setLeft = function(left){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(0);
 </pre>
 *
 * @param {number} slideIndex - The zero-based index to the slide.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Image.prototype.setLinkSlide = function(slideIndex){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 var slide = presentation.getSlides()[0];
 shape.setLinkSlide(slide);
 </pre>
 *
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Image.prototype.setLinkSlide = function(slide){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 </pre>
 *
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Image.prototype.setLinkSlide = function(slidePosition){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.

 <pre class="prettyprint">
 // Set a link to the URL.
 shape.setLinkUrl("https://slides.google.com");
 </pre>
 *
 * @param {String} url - The URL string.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Image.prototype.setLinkUrl = function(url){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.Image.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.Layout = function(){};

/**
 * Gets the page's background.
 *
 * @return {SlidesApp.PageBackground}
 */
SlidesApp.Layout.prototype.getBackground = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 *
 * @return {SlidesApp.ColorScheme}
 */
SlidesApp.Layout.prototype.getColorScheme = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 *
 * @return {SlidesApp.Group[]}
 */
SlidesApp.Layout.prototype.getGroups = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 *
 * @return {SlidesApp.Image[]}
 */
SlidesApp.Layout.prototype.getImages = function(){};

/**
 * Gets the name of the layout.
 *
 * @return {String}
 */
SlidesApp.Layout.prototype.getLayoutName = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 *
 * @return {SlidesApp.Line[]}
 */
SlidesApp.Layout.prototype.getLines = function(){};

/**
 * Gets the master that the layout is based on.
 *
 * @return {SlidesApp.Master}
 */
SlidesApp.Layout.prototype.getMaster = function(){};

/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String}
 */
SlidesApp.Layout.prototype.getObjectId = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Layout.prototype.getPageElements = function(){};

/**
 * Gets the type of the page.
 *
 * @return {SlidesApp.PageType}
 */
SlidesApp.Layout.prototype.getPageType = function(){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 <code>null</code> if a matching placeholder is not present.

 <p>If there are multiple placeholders with the same type, it returns the one with minimal
 placeholder index. If there are multiple matching placeholders with the same index, it returns
 the first placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Layout.prototype.getPlaceholder = function(placeholderType){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 a placeholder index, or <code>null</code> if the placeholder is not present.

 <p>If there are multiple placeholders with the same type and index, it returns the first
 placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 * @param {number} placeholderIndex - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Layout.prototype.getPlaceholder = function(placeholderType, placeholderIndex){};

/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.

 <pre class="prettyprint">
 var master = SlidesApp.getActivePresentation().getMasters()[0];
 Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 </pre>
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Layout.prototype.getPlaceholders = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 *
 * @return {SlidesApp.Shape[]}
 */
SlidesApp.Layout.prototype.getShapes = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 *
 * @return {SlidesApp.SheetsChart[]}
 */
SlidesApp.Layout.prototype.getSheetsCharts = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 *
 * @return {SlidesApp.Table[]}
 */
SlidesApp.Layout.prototype.getTables = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 *
 * @return {SlidesApp.Video[]}
 */
SlidesApp.Layout.prototype.getVideos = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 *
 * @return {SlidesApp.WordArt[]}
 */
SlidesApp.Layout.prototype.getWordArts = function(){};

/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 image blob.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 slide.insertImage(image);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Layout.prototype.insertImage = function(blobSource){};

/**
 * Inserts an image on the page with the provided position and size from the specified image blob.

 <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 var position = {left: 0, top: 0};
 var size = {width: 300, height: 100};
 slide.insertImage(image, position.left, position.top, size.width, size.height);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Layout.prototype.insertImage = function(blobSource, left, top, width, height){};

/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The image URL.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Layout.prototype.insertImage = function(imageUrl){};

/**
 * Inserts an image on the page with the provided position and size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.
 *
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Layout.prototype.insertImage = function(imageUrl, left, top, width, height){};

/**
 * Inserts a line on the page.

 <pre class="prettyprint">
 // Insert a line in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var startPoint = {left: 10, top: 10};
 var endPoint = {left: 40, top: 40};
 slide.insertLine(
     SlidesApp.LineCategory.STRAIGHT,
     startPoint.left,
     startPoint.top,
     endPoint.left,
     endPoint.top);
 </pre>
 *
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
     upper left corner of the page.
 *
 * @return {SlidesApp.Line} the inserted line
 */
SlidesApp.Layout.prototype.insertLine = function(lineCategory, startLeft, startTop, endLeft, endTop){};

/**
 * Inserts a shape on the page.

 <p>The shape is inserted with a default size at the top left corner of the page.

 <pre class="prettyprint">
 // Insert a shape in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 </pre>
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 *
 * @return {SlidesApp.Shape} The inserted shape.
 */
SlidesApp.Layout.prototype.insertShape = function(shapeType){};

/**
 * Inserts a shape on the page.
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 *
 * @return {SlidesApp.Shape} the inserted shape
 */
SlidesApp.Layout.prototype.insertShape = function(shapeType, left, top, width, height){};

/**
 * Inserts a Google Sheets chart on the page.

 <p>The chart is inserted with a default size at the top left corner of the page.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChart(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Layout.prototype.insertSheetsChart = function(sourceChart){};

/**
 * Inserts a Google Sheets chart on the page with the provided position and size.

 <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 to the provided size.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChart(
     chart,
     position.left,
     position.top,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Layout.prototype.insertSheetsChart = function(sourceChart, left, top, width, height){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.

 <p>The image of the chart is inserted with a default size at the top left corner of the page.

 <p>The inserted image of chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChartAsImage(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Layout.prototype.insertSheetsChartAsImage = function(sourceChart){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 size.

 <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 respect to the provided size.

 <p>The inserted image of the chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChartAsImage(
     chart,
     position.left,
     position.right,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Layout.prototype.insertSheetsChartAsImage = function(sourceChart, left, top, width, height){};

/**
 * Inserts a table on the page.

 <p>The table is centered on the page with default size and evenly distributed rows and columns.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Layout.prototype.insertTable = function(numRows, numColumns){};

/**
 * Inserts a table on the page with the provided position and size.

 <p>Rows and columns are evenly distributed in the created table.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
     on factors such as text font size.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Layout.prototype.insertTable = function(numRows, numColumns, left, top, width, height){};

/**
 * Inserts a video at the top left corner of the page with a default size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Layout.prototype.insertVideo = function(videoUrl){};

/**
 * Inserts a video on the page with the provided position and size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Layout.prototype.insertVideo = function(videoUrl, left, top, width, height){};

/**
 * Removes the page.
 *
 * @return void
 */
SlidesApp.Layout.prototype.remove = function(){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Layout.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Layout.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <pre class="prettyprint">
 // Select the first slide as the current page selection and replace any previous selection.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.selectAsCurrentPage();
 </pre>
 *
 * @return void
 */
SlidesApp.Layout.prototype.selectAsCurrentPage = function(){};

/** @constructor */
SlidesApp.Line = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Line.prototype.duplicate = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the line.
 *
 * @return {SlidesApp.DashStyle}
 */
SlidesApp.Line.prototype.getDashStyle = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.Line.prototype.getDescription = function(){};

/**
 * Returns the end point of the line, measured from the upper left corner of the page.
 *
 * @return {SlidesApp.Point}
 */
SlidesApp.Line.prototype.getEnd = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the end of the line.
 *
 * @return {SlidesApp.ArrowStyle}
 */
SlidesApp.Line.prototype.getEndArrow = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Line.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Line.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Line.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Line.prototype.getLeft = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code> of the line.
 *
 * @return {SlidesApp.LineFill}
 */
SlidesApp.Line.prototype.getLineFill = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-type.html'>LineType</a></code> of the line.
 *
 * @return {SlidesApp.LineType}
 */
SlidesApp.Line.prototype.getLineType = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null) {
   Logger.log('Shape has a link of type: ' + link.getLinkType());
 }
 </pre>
 *
 * @return {SlidesApp.Link}
 */
SlidesApp.Line.prototype.getLink = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.Line.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.Line.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Line.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Line.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.Line.prototype.getRotation = function(){};

/**
 * Returns the start point of the line, measured from the upper left corner of the page.
 *
 * @return {SlidesApp.Point}
 */
SlidesApp.Line.prototype.getStart = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the beginning of the line.
 *
 * @return {SlidesApp.ArrowStyle}
 */
SlidesApp.Line.prototype.getStartArrow = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.Line.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Line.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.Line.prototype.getTransform = function(){};

/**
 * Gets the thickness of the line in points.
 *
 * @return {Number}
 */
SlidesApp.Line.prototype.getWeight = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Line.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.Line.prototype.remove = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.

 <pre class="prettyprint">
 shape.removeLink();
 </pre>
 *
 * @return void
 */
SlidesApp.Line.prototype.removeLink = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.Line.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.Line.prototype.select = function(replace){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the line.
 *
 * @param {SlidesApp.DashStyle} style - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setDashStyle = function(style){};

/**
 * Sets the position of the end point of the line.

 <p>The line path may be adjusted after the position changes.
 *
 * @param {Number} left - The horizontal position of the end point of the line, measured in points from the
     upper left corner of the page.
 * @param {Number} top - The vertical position of the end point of the line, measured in points from the
     upper left corner of the page.
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setEnd = function(left, top){};

/**
 * Sets the position of the end point of the line.

 <p>The line path may be adjusted after the position changes.
 *
 * @param {SlidesApp.Point} point - The end point of the line, whose position is measured from the upper left corner
     of the page.
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setEnd = function(point){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the end of the line.
 *
 * @param {SlidesApp.ArrowStyle} style - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setEndArrow = function(style){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setLeft = function(left){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(0);
 </pre>
 *
 * @param {number} slideIndex - The zero-based index to the slide.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Line.prototype.setLinkSlide = function(slideIndex){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 var slide = presentation.getSlides()[0];
 shape.setLinkSlide(slide);
 </pre>
 *
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Line.prototype.setLinkSlide = function(slide){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 </pre>
 *
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Line.prototype.setLinkSlide = function(slidePosition){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.

 <pre class="prettyprint">
 // Set a link to the URL.
 shape.setLinkUrl("https://slides.google.com");
 </pre>
 *
 * @param {String} url - The URL string.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Line.prototype.setLinkUrl = function(url){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setRotation = function(angle){};

/**
 * Sets the position of the start point of the line.

 <p>The line path may be adjusted after the position changes.
 *
 * @param {Number} left - The horizontal position of the start point of the line, measured in points from the
     upper left corner of the page.
 * @param {Number} top - The vertical position of the start point of the line, measured in points from the
     upper left corner of the page.
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setStart = function(left, top){};

/**
 * Sets the position of the start point of the line.

 <p>The line path may be adjusted after the position changes.
 *
 * @param {SlidesApp.Point} point - The start point of the line, whose position is measured from the upper left corner
     of the page.
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setStart = function(point){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the beginning of the line.
 *
 * @param {SlidesApp.ArrowStyle} style - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setStartArrow = function(style){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setTransform = function(transform){};

/**
 * Sets the thickness of the line in points.
 *
 * @param {Number} points - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setWeight = function(points){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.Line.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.LineFill = function(){};

/**
 * Gets the type of the line fill.
 *
 * @return {SlidesApp.LineFillType}
 */
SlidesApp.LineFill.prototype.getFillType = function(){};

/**
 * Gets the solid fill of the line, or <code>null</code> if the fill type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill-type.html#SOLID'>LineFillType.SOLID</a></code>.
 *
 * @return {SlidesApp.SolidFill}
 */
SlidesApp.LineFill.prototype.getSolidFill = function(){};

/**
 * Sets the solid fill to the given RGB values.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(red, green, blue){};

/**
 * Sets the solid fill to the given alpha and RGB values.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(red, green, blue, alpha){};

/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 *
 * @param {SlidesApp.Color} color - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(color){};

/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 *
 * @param {SlidesApp.Color} color - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(color, alpha){};

/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(color){};

/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(color, alpha){};

/**
 * Sets the solid fill to the given hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexString - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(hexString){};

/**
 * Sets the solid fill to the given alpha and hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexString - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.LineFill.prototype.setSolidFill = function(hexString, alpha){};

/** @constructor */
SlidesApp.Link = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code>.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null) {
   Logger.log('Shape has a link of type: ' + link.getLinkType());
 }
 </pre>
 *
 * @return {SlidesApp.LinkType}
 */
SlidesApp.Link.prototype.getLinkType = function(){};

/**
 * Returns the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> for non-URL links types, if it exists. Returns <code>null</code> if
 the slide doesn't exist in the presentation, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#URL'>LinkType.URL</a></code>.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null && link.getLinkType() != SlidesApp.LinkType.URL) {
   Logger.log('Shape has link to slide: ' + link.getLinkedSlide());
 }
 </pre>
 *
 * @return {SlidesApp.Slide}
 */
SlidesApp.Link.prototype.getLinkedSlide = function(){};

/**
 * Returns the ID of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_ID'>LinkType.SLIDE_ID</a></code>.

 <p>Note that the slide with the returned ID might not exist.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_ID) {
   Logger.log('Shape has link to slide with ID: ' + link.getSlideId());
 }
 </pre>
 *
 * @return {String}
 */
SlidesApp.Link.prototype.getSlideId = function(){};

/**
 * Returns the zero-based index of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_INDEX'>LinkType.SLIDE_INDEX</a></code>.

 <p>Note that the slide at the returned index might not exist.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_INDEX) {
   Logger.log('Shape has link to slide with index: ' + link.getSlideIndex());
 }
 </pre>
 *
 * @return {number}
 */
SlidesApp.Link.prototype.getSlideIndex = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code> of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_POSITION'>LinkType.SLIDE_POSITION</a></code>.

 <p>Note that the slide with the returned relative position might not exist.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_POSITION) {
   Logger.log('Shape has link to slide with relative position: ' + link.getSlidePosition());
 }
 </pre>
 *
 * @return {SlidesApp.SlidePosition}
 */
SlidesApp.Link.prototype.getSlidePosition = function(){};

/**
 * Returns the URL to the external web page or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#URL'>LinkType.URL</a></code>.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null && link.getLinkType() == SlidesApp.LinkType.URL) {
   Logger.log('Shape has link to URL: ' + link.getUrl());
 }
 </pre>
 *
 * @return {String}
 */
SlidesApp.Link.prototype.getUrl = function(){};

/** @constructor */
SlidesApp.List = function(){};

/**
 * Returns the ID of the list.
 *
 * @return {String}
 */
SlidesApp.List.prototype.getListId = function(){};

/**
 * Returns all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraphs</a></code> in the list.
 *
 * @return {SlidesApp.Paragraph[]}
 */
SlidesApp.List.prototype.getListParagraphs = function(){};

/** @constructor */
SlidesApp.ListStyle = function(){};

/**
 * Applies the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-preset.html'>ListPreset</a></code> to all of the paragraphs that overlap with the text.

 <p>The nesting level of each paragraph is determined by counting leading tabs in front of each
 paragraph. To avoid excess space between the glyphs and the corresponding paragraph, these
 leading tabs are removed by this method.

 <p>If the paragraph immediately before paragraphs being updated is in a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list.html'>List</a></code> with a
 matching list preset and the paragraphs being updated are not already in a different list, the
 paragraphs being updated are added to that preceding list.
 *
 * @param {SlidesApp.ListPreset} listPreset - 
 *
 * @return {SlidesApp.ListStyle}
 */
SlidesApp.ListStyle.prototype.applyListPreset = function(listPreset){};

/**
 * Returns the rendered glyph for the text. Returns <code>null</code> if the text spans more than one
 paragraph or the text is not in a list.
 *
 * @return {String}
 */
SlidesApp.ListStyle.prototype.getGlyph = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list.html'>List</a></code> the text is in, or <code>null</code> if none of the text is in a list, or
 part of the text is in a list, or the text is in multiple lists. Call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-style.html#isInList()'>isInList()</a></code> to
 determine whether the text is in a list.
 *
 * @return {SlidesApp.List}
 */
SlidesApp.ListStyle.prototype.getList = function(){};

/**
 * Returns the 0-based nesting level of the text. Returns <code>null</code> if the text is not in a
 list or there are mixed values.
 *
 * @return {number}
 */
SlidesApp.ListStyle.prototype.getNestingLevel = function(){};

/**
 * Returns <code>true</code> if the text is in exactly one list, <code>false</code> if none of the text is
 in a list, and <code>null</code> if only some of the text is in a list or if the text is in multiple
 lists.
 *
 * @return {Boolean}
 */
SlidesApp.ListStyle.prototype.isInList = function(){};

/**
 * Removes the paragraphs that overlap with the text from any lists.

 <p>The nesting level of each paragraph is visually preserved by adding indent to the start of
 the corresponding paragraph.
 *
 * @return {SlidesApp.ListStyle}
 */
SlidesApp.ListStyle.prototype.removeFromList = function(){};

/** @constructor */
SlidesApp.Master = function(){};

/**
 * Gets the page's background.
 *
 * @return {SlidesApp.PageBackground}
 */
SlidesApp.Master.prototype.getBackground = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 *
 * @return {SlidesApp.ColorScheme}
 */
SlidesApp.Master.prototype.getColorScheme = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 *
 * @return {SlidesApp.Group[]}
 */
SlidesApp.Master.prototype.getGroups = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 *
 * @return {SlidesApp.Image[]}
 */
SlidesApp.Master.prototype.getImages = function(){};

/**
 * Gets this master's layouts.
 *
 * @return {SlidesApp.Layout[]}
 */
SlidesApp.Master.prototype.getLayouts = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 *
 * @return {SlidesApp.Line[]}
 */
SlidesApp.Master.prototype.getLines = function(){};

/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String}
 */
SlidesApp.Master.prototype.getObjectId = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Master.prototype.getPageElements = function(){};

/**
 * Gets the type of the page.
 *
 * @return {SlidesApp.PageType}
 */
SlidesApp.Master.prototype.getPageType = function(){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 <code>null</code> if a matching placeholder is not present.

 <p>If there are multiple placeholders with the same type, it returns the one with minimal
 placeholder index. If there are multiple matching placeholders with the same index, it returns
 the first placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Master.prototype.getPlaceholder = function(placeholderType){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 a placeholder index, or <code>null</code> if the placeholder is not present.

 <p>If there are multiple placeholders with the same type and index, it returns the first
 placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 * @param {number} placeholderIndex - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Master.prototype.getPlaceholder = function(placeholderType, placeholderIndex){};

/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.

 <pre class="prettyprint">
 var master = SlidesApp.getActivePresentation().getMasters()[0];
 Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 </pre>
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Master.prototype.getPlaceholders = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 *
 * @return {SlidesApp.Shape[]}
 */
SlidesApp.Master.prototype.getShapes = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 *
 * @return {SlidesApp.SheetsChart[]}
 */
SlidesApp.Master.prototype.getSheetsCharts = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 *
 * @return {SlidesApp.Table[]}
 */
SlidesApp.Master.prototype.getTables = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 *
 * @return {SlidesApp.Video[]}
 */
SlidesApp.Master.prototype.getVideos = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 *
 * @return {SlidesApp.WordArt[]}
 */
SlidesApp.Master.prototype.getWordArts = function(){};

/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 image blob.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 slide.insertImage(image);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Master.prototype.insertImage = function(blobSource){};

/**
 * Inserts an image on the page with the provided position and size from the specified image blob.

 <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 var position = {left: 0, top: 0};
 var size = {width: 300, height: 100};
 slide.insertImage(image, position.left, position.top, size.width, size.height);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Master.prototype.insertImage = function(blobSource, left, top, width, height){};

/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The image URL.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Master.prototype.insertImage = function(imageUrl){};

/**
 * Inserts an image on the page with the provided position and size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.
 *
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Master.prototype.insertImage = function(imageUrl, left, top, width, height){};

/**
 * Inserts a line on the page.

 <pre class="prettyprint">
 // Insert a line in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var startPoint = {left: 10, top: 10};
 var endPoint = {left: 40, top: 40};
 slide.insertLine(
     SlidesApp.LineCategory.STRAIGHT,
     startPoint.left,
     startPoint.top,
     endPoint.left,
     endPoint.top);
 </pre>
 *
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
     upper left corner of the page.
 *
 * @return {SlidesApp.Line} the inserted line
 */
SlidesApp.Master.prototype.insertLine = function(lineCategory, startLeft, startTop, endLeft, endTop){};

/**
 * Inserts a shape on the page.

 <p>The shape is inserted with a default size at the top left corner of the page.

 <pre class="prettyprint">
 // Insert a shape in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 </pre>
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 *
 * @return {SlidesApp.Shape} The inserted shape.
 */
SlidesApp.Master.prototype.insertShape = function(shapeType){};

/**
 * Inserts a shape on the page.
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 *
 * @return {SlidesApp.Shape} the inserted shape
 */
SlidesApp.Master.prototype.insertShape = function(shapeType, left, top, width, height){};

/**
 * Inserts a Google Sheets chart on the page.

 <p>The chart is inserted with a default size at the top left corner of the page.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChart(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Master.prototype.insertSheetsChart = function(sourceChart){};

/**
 * Inserts a Google Sheets chart on the page with the provided position and size.

 <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 to the provided size.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChart(
     chart,
     position.left,
     position.top,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Master.prototype.insertSheetsChart = function(sourceChart, left, top, width, height){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.

 <p>The image of the chart is inserted with a default size at the top left corner of the page.

 <p>The inserted image of chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChartAsImage(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Master.prototype.insertSheetsChartAsImage = function(sourceChart){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 size.

 <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 respect to the provided size.

 <p>The inserted image of the chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChartAsImage(
     chart,
     position.left,
     position.right,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Master.prototype.insertSheetsChartAsImage = function(sourceChart, left, top, width, height){};

/**
 * Inserts a table on the page.

 <p>The table is centered on the page with default size and evenly distributed rows and columns.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Master.prototype.insertTable = function(numRows, numColumns){};

/**
 * Inserts a table on the page with the provided position and size.

 <p>Rows and columns are evenly distributed in the created table.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
     on factors such as text font size.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Master.prototype.insertTable = function(numRows, numColumns, left, top, width, height){};

/**
 * Inserts a video at the top left corner of the page with a default size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Master.prototype.insertVideo = function(videoUrl){};

/**
 * Inserts a video on the page with the provided position and size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Master.prototype.insertVideo = function(videoUrl, left, top, width, height){};

/**
 * Removes the page.
 *
 * @return void
 */
SlidesApp.Master.prototype.remove = function(){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Master.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Master.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <pre class="prettyprint">
 // Select the first slide as the current page selection and replace any previous selection.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.selectAsCurrentPage();
 </pre>
 *
 * @return void
 */
SlidesApp.Master.prototype.selectAsCurrentPage = function(){};

/** @constructor */
SlidesApp.NotesMaster = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 *
 * @return {SlidesApp.Group[]}
 */
SlidesApp.NotesMaster.prototype.getGroups = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 *
 * @return {SlidesApp.Image[]}
 */
SlidesApp.NotesMaster.prototype.getImages = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 *
 * @return {SlidesApp.Line[]}
 */
SlidesApp.NotesMaster.prototype.getLines = function(){};

/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String}
 */
SlidesApp.NotesMaster.prototype.getObjectId = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.NotesMaster.prototype.getPageElements = function(){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 <code>null</code> if a matching placeholder is not present.

 <p>If there are multiple placeholders with the same type, it returns the one with minimal
 placeholder index. If there are multiple matching placeholders with the same index, it returns
 the first placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.NotesMaster.prototype.getPlaceholder = function(placeholderType){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 a placeholder index, or <code>null</code> if the placeholder is not present.

 <p>If there are multiple placeholders with the same type and index, it returns the first
 placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 * @param {number} placeholderIndex - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.NotesMaster.prototype.getPlaceholder = function(placeholderType, placeholderIndex){};

/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.

 <pre class="prettyprint">
 var master = SlidesApp.getActivePresentation().getMasters()[0];
 Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 </pre>
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.NotesMaster.prototype.getPlaceholders = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 *
 * @return {SlidesApp.Shape[]}
 */
SlidesApp.NotesMaster.prototype.getShapes = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 *
 * @return {SlidesApp.SheetsChart[]}
 */
SlidesApp.NotesMaster.prototype.getSheetsCharts = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 *
 * @return {SlidesApp.Table[]}
 */
SlidesApp.NotesMaster.prototype.getTables = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 *
 * @return {SlidesApp.Video[]}
 */
SlidesApp.NotesMaster.prototype.getVideos = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 *
 * @return {SlidesApp.WordArt[]}
 */
SlidesApp.NotesMaster.prototype.getWordArts = function(){};

/** @constructor */
SlidesApp.NotesPage = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 *
 * @return {SlidesApp.Group[]}
 */
SlidesApp.NotesPage.prototype.getGroups = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 *
 * @return {SlidesApp.Image[]}
 */
SlidesApp.NotesPage.prototype.getImages = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 *
 * @return {SlidesApp.Line[]}
 */
SlidesApp.NotesPage.prototype.getLines = function(){};

/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String}
 */
SlidesApp.NotesPage.prototype.getObjectId = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.NotesPage.prototype.getPageElements = function(){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 <code>null</code> if a matching placeholder is not present.

 <p>If there are multiple placeholders with the same type, it returns the one with minimal
 placeholder index. If there are multiple matching placeholders with the same index, it returns
 the first placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.NotesPage.prototype.getPlaceholder = function(placeholderType){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 a placeholder index, or <code>null</code> if the placeholder is not present.

 <p>If there are multiple placeholders with the same type and index, it returns the first
 placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 * @param {number} placeholderIndex - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.NotesPage.prototype.getPlaceholder = function(placeholderType, placeholderIndex){};

/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.

 <pre class="prettyprint">
 var master = SlidesApp.getActivePresentation().getMasters()[0];
 Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 </pre>
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.NotesPage.prototype.getPlaceholders = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 *
 * @return {SlidesApp.Shape[]}
 */
SlidesApp.NotesPage.prototype.getShapes = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 *
 * @return {SlidesApp.SheetsChart[]}
 */
SlidesApp.NotesPage.prototype.getSheetsCharts = function(){};

/**
 * Gets the shape containing the speaker notes on the page.
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.NotesPage.prototype.getSpeakerNotesShape = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 *
 * @return {SlidesApp.Table[]}
 */
SlidesApp.NotesPage.prototype.getTables = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 *
 * @return {SlidesApp.Video[]}
 */
SlidesApp.NotesPage.prototype.getVideos = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 *
 * @return {SlidesApp.WordArt[]}
 */
SlidesApp.NotesPage.prototype.getWordArts = function(){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.NotesPage.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.NotesPage.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/** @constructor */
SlidesApp.Page = function(){};

/**
 * Returns the page as a layout.
 *
 * @return {SlidesApp.Layout}
 */
SlidesApp.Page.prototype.asLayout = function(){};

/**
 * Returns the page as a master.
 *
 * @return {SlidesApp.Master}
 */
SlidesApp.Page.prototype.asMaster = function(){};

/**
 * Returns the page as a slide.
 *
 * @return {SlidesApp.Slide}
 */
SlidesApp.Page.prototype.asSlide = function(){};

/**
 * Gets the page's background.
 *
 * @return {SlidesApp.PageBackground}
 */
SlidesApp.Page.prototype.getBackground = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 *
 * @return {SlidesApp.ColorScheme}
 */
SlidesApp.Page.prototype.getColorScheme = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 *
 * @return {SlidesApp.Group[]}
 */
SlidesApp.Page.prototype.getGroups = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 *
 * @return {SlidesApp.Image[]}
 */
SlidesApp.Page.prototype.getImages = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 *
 * @return {SlidesApp.Line[]}
 */
SlidesApp.Page.prototype.getLines = function(){};

/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String}
 */
SlidesApp.Page.prototype.getObjectId = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Page.prototype.getPageElements = function(){};

/**
 * Gets the type of the page.
 *
 * @return {SlidesApp.PageType}
 */
SlidesApp.Page.prototype.getPageType = function(){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 <code>null</code> if a matching placeholder is not present.

 <p>If there are multiple placeholders with the same type, it returns the one with minimal
 placeholder index. If there are multiple matching placeholders with the same index, it returns
 the first placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Page.prototype.getPlaceholder = function(placeholderType){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 a placeholder index, or <code>null</code> if the placeholder is not present.

 <p>If there are multiple placeholders with the same type and index, it returns the first
 placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 * @param {number} placeholderIndex - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Page.prototype.getPlaceholder = function(placeholderType, placeholderIndex){};

/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.

 <pre class="prettyprint">
 var master = SlidesApp.getActivePresentation().getMasters()[0];
 Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 </pre>
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Page.prototype.getPlaceholders = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 *
 * @return {SlidesApp.Shape[]}
 */
SlidesApp.Page.prototype.getShapes = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 *
 * @return {SlidesApp.SheetsChart[]}
 */
SlidesApp.Page.prototype.getSheetsCharts = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 *
 * @return {SlidesApp.Table[]}
 */
SlidesApp.Page.prototype.getTables = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 *
 * @return {SlidesApp.Video[]}
 */
SlidesApp.Page.prototype.getVideos = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 *
 * @return {SlidesApp.WordArt[]}
 */
SlidesApp.Page.prototype.getWordArts = function(){};

/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 image blob.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 slide.insertImage(image);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Page.prototype.insertImage = function(blobSource){};

/**
 * Inserts an image on the page with the provided position and size from the specified image blob.

 <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 var position = {left: 0, top: 0};
 var size = {width: 300, height: 100};
 slide.insertImage(image, position.left, position.top, size.width, size.height);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Page.prototype.insertImage = function(blobSource, left, top, width, height){};

/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The image URL.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Page.prototype.insertImage = function(imageUrl){};

/**
 * Inserts an image on the page with the provided position and size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.
 *
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Page.prototype.insertImage = function(imageUrl, left, top, width, height){};

/**
 * Inserts a line on the page.

 <pre class="prettyprint">
 // Insert a line in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var startPoint = {left: 10, top: 10};
 var endPoint = {left: 40, top: 40};
 slide.insertLine(
     SlidesApp.LineCategory.STRAIGHT,
     startPoint.left,
     startPoint.top,
     endPoint.left,
     endPoint.top);
 </pre>
 *
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
     upper left corner of the page.
 *
 * @return {SlidesApp.Line} the inserted line
 */
SlidesApp.Page.prototype.insertLine = function(lineCategory, startLeft, startTop, endLeft, endTop){};

/**
 * Inserts a shape on the page.

 <p>The shape is inserted with a default size at the top left corner of the page.

 <pre class="prettyprint">
 // Insert a shape in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 </pre>
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 *
 * @return {SlidesApp.Shape} The inserted shape.
 */
SlidesApp.Page.prototype.insertShape = function(shapeType){};

/**
 * Inserts a shape on the page.
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 *
 * @return {SlidesApp.Shape} the inserted shape
 */
SlidesApp.Page.prototype.insertShape = function(shapeType, left, top, width, height){};

/**
 * Inserts a Google Sheets chart on the page.

 <p>The chart is inserted with a default size at the top left corner of the page.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChart(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Page.prototype.insertSheetsChart = function(sourceChart){};

/**
 * Inserts a Google Sheets chart on the page with the provided position and size.

 <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 to the provided size.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChart(
     chart,
     position.left,
     position.top,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Page.prototype.insertSheetsChart = function(sourceChart, left, top, width, height){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.

 <p>The image of the chart is inserted with a default size at the top left corner of the page.

 <p>The inserted image of chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChartAsImage(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Page.prototype.insertSheetsChartAsImage = function(sourceChart){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 size.

 <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 respect to the provided size.

 <p>The inserted image of the chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChartAsImage(
     chart,
     position.left,
     position.right,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Page.prototype.insertSheetsChartAsImage = function(sourceChart, left, top, width, height){};

/**
 * Inserts a table on the page.

 <p>The table is centered on the page with default size and evenly distributed rows and columns.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Page.prototype.insertTable = function(numRows, numColumns){};

/**
 * Inserts a table on the page with the provided position and size.

 <p>Rows and columns are evenly distributed in the created table.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
     on factors such as text font size.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Page.prototype.insertTable = function(numRows, numColumns, left, top, width, height){};

/**
 * Inserts a video at the top left corner of the page with a default size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Page.prototype.insertVideo = function(videoUrl){};

/**
 * Inserts a video on the page with the provided position and size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Page.prototype.insertVideo = function(videoUrl, left, top, width, height){};

/**
 * Removes the page.
 *
 * @return void
 */
SlidesApp.Page.prototype.remove = function(){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Page.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Page.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <pre class="prettyprint">
 // Select the first slide as the current page selection and replace any previous selection.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.selectAsCurrentPage();
 </pre>
 *
 * @return void
 */
SlidesApp.Page.prototype.selectAsCurrentPage = function(){};

/** @constructor */
SlidesApp.PageBackground = function(){};

/**
 * Get the stretched picture fill of this background, or <code>null</code> if the background fill type
 is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-background-type.html#PICTURE'>PageBackgroundType.PICTURE</a></code>.
 *
 * @return {SlidesApp.PictureFill}
 */
SlidesApp.PageBackground.prototype.getPictureFill = function(){};

/**
 * Get the solid fill of this background, or <code>null</code> if the background fill type is not
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-background-type.html#SOLID'>PageBackgroundType.SOLID</a></code>.
 *
 * @return {SlidesApp.SolidFill}
 */
SlidesApp.PageBackground.prototype.getSolidFill = function(){};

/**
 * Get the type of this page background.
 *
 * @return {SlidesApp.PageBackgroundType}
 */
SlidesApp.PageBackground.prototype.getType = function(){};

/**
 * Whether the background is visible.
 *
 * @return {Boolean}
 */
SlidesApp.PageBackground.prototype.isVisible = function(){};

/**
 * Sets an image from the specified image blob as the page background. The image is stretched to
 match the dimensions of the page.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setPictureFill = function(blobSource){};

/**
 * Sets the image at the provided URL as the page background. The image is stretched to match the
 dimensions of the page.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The URL to download the image from.
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setPictureFill = function(imageUrl){};

/**
 * Sets the solid fill to the given RGB values.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(red, green, blue){};

/**
 * Sets the solid fill to the given alpha and RGB values.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(red, green, blue, alpha){};

/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 *
 * @param {SlidesApp.Color} color - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(color){};

/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
 *
 * @param {SlidesApp.Color} color - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(color, alpha){};

/**
 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(color){};

/**
 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(color, alpha){};

/**
 * Sets the solid fill to the given hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexString - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(hexString){};

/**
 * Sets the solid fill to the given alpha and hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexString - 
 * @param {Number} alpha - 
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setSolidFill = function(hexString, alpha){};

/**
 * Sets the background to transparent.
 *
 * @return void
 */
SlidesApp.PageBackground.prototype.setTransparent = function(){};

/** @constructor */
SlidesApp.PageElement = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Returns the page element as a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.PageElement.prototype.asGroup = function(){};

/**
 * Returns the page element as an image.
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.PageElement.prototype.asImage = function(){};

/**
 * Returns the page element as a line.
 *
 * @return {SlidesApp.Line}
 */
SlidesApp.PageElement.prototype.asLine = function(){};

/**
 * Returns the page element as a shape.
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.PageElement.prototype.asShape = function(){};

/**
 * Returns the page element as a linked chart embedded from Google Sheets.
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.PageElement.prototype.asSheetsChart = function(){};

/**
 * Returns the page element as a table.
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.PageElement.prototype.asTable = function(){};

/**
 * Returns the page element as a video.
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.PageElement.prototype.asVideo = function(){};

/**
 * Returns the page element as word art.
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.PageElement.prototype.asWordArt = function(){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.duplicate = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.PageElement.prototype.getDescription = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.PageElement.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.PageElement.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.PageElement.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.PageElement.prototype.getLeft = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.PageElement.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.PageElement.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.PageElement.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.PageElement.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.PageElement.prototype.getRotation = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.PageElement.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.PageElement.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.PageElement.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.PageElement.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.PageElement.prototype.remove = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.PageElement.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.PageElement.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.setLeft = function(left){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.PageElement.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.PageElementRange = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.PageElementRange.prototype.getPageElements = function(){};

/** @constructor */
SlidesApp.PageRange = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> instances.
 *
 * @return {SlidesApp.Page[]}
 */
SlidesApp.PageRange.prototype.getPages = function(){};

/** @constructor */
SlidesApp.Paragraph = function(){};

/**
 * Returns the index of the paragraph's newline. Returns <code>null</code> if the newline has been
 deleted.
 *
 * @return {number}
 */
SlidesApp.Paragraph.prototype.getIndex = function(){};

/**
 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> spanning the text in the paragraph ended by this object's newline
 character. Returns <code>null</code> if the paragraph's newline has been deleted.
 *
 * @return {SlidesApp.TextRange}
 */
SlidesApp.Paragraph.prototype.getRange = function(){};

/** @constructor */
SlidesApp.ParagraphStyle = function(){};

/**
 * Returns the text end indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if there are multiple paragraph styles on the given text.

 <p>The side that corresponds to the end of the text is based on the current text direction.
 *
 * @return {Number}
 */
SlidesApp.ParagraphStyle.prototype.getIndentEnd = function(){};

/**
 * Returns the indentation for the first line of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or
 <code>null</code> if there are multiple paragraph styles on the given text.
 *
 * @return {Number}
 */
SlidesApp.ParagraphStyle.prototype.getIndentFirstLine = function(){};

/**
 * Returns the text start indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if there are multiple paragraph styles on the given text.

 <p>The side that corresponds to the start of the text is based on the current text direction.
 *
 * @return {Number}
 */
SlidesApp.ParagraphStyle.prototype.getIndentStart = function(){};

/**
 * Returns the line spacing, or <code>null</code> if there are multiple paragraph styles on the given
 text.

 <p>This is a value that corresponds to the space between lines, as a percentage of normal.
 Normal is represented as 100.0.
 *
 * @return {Number}
 */
SlidesApp.ParagraphStyle.prototype.getLineSpacing = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html'>ParagraphAlignment</a></code> of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code>
 if there are multiple paragraph styles on the given text.
 *
 * @return {SlidesApp.ParagraphAlignment}
 */
SlidesApp.ParagraphStyle.prototype.getParagraphAlignment = function(){};

/**
 * Returns the extra space above paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if
 there are multiple paragraph styles on the given text.
 *
 * @return {Number}
 */
SlidesApp.ParagraphStyle.prototype.getSpaceAbove = function(){};

/**
 * Returns the extra space below paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if
 there are multiple paragraph styles on the given text.
 *
 * @return {Number}
 */
SlidesApp.ParagraphStyle.prototype.getSpaceBelow = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/spacing-mode.html'>SpacingMode</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code> if
 there are multiple paragraph styles on the given text.
 *
 * @return {SlidesApp.SpacingMode}
 */
SlidesApp.ParagraphStyle.prototype.getSpacingMode = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-direction.html'>TextDirection</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code> if
 there are multiple paragraph styles on the given text.
 *
 * @return {SlidesApp.TextDirection}
 */
SlidesApp.ParagraphStyle.prototype.getTextDirection = function(){};

/**
 * Sets the text end indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.

 <p>The side that corresponds to the end of the text is based on the current text direction.
 *
 * @param {Number} indent - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setIndentEnd = function(indent){};

/**
 * Sets the indentation for the first line of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 *
 * @param {Number} indent - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setIndentFirstLine = function(indent){};

/**
 * Sets the text start indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.

 <p>The side that corresponds to the start of the text is based on the current text direction.
 *
 * @param {Number} indent - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setIndentStart = function(indent){};

/**
 * Sets the line spacing.

 <p>This is a value that corresponds to the space between lines, as a percentage of normal.
 Normal is represented as 100.0.
 *
 * @param {Number} spacing - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setLineSpacing = function(spacing){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html'>ParagraphAlignment</a></code> of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
 *
 * @param {SlidesApp.ParagraphAlignment} alignment - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setParagraphAlignment = function(alignment){};

/**
 * Sets the extra space above paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 *
 * @param {Number} space - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setSpaceAbove = function(space){};

/**
 * Sets the extra space below paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
 *
 * @param {Number} space - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setSpaceBelow = function(space){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/spacing-mode.html'>SpacingMode</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
 *
 * @param {SlidesApp.SpacingMode} mode - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setSpacingMode = function(mode){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-direction.html'>TextDirection</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
 *
 * @param {SlidesApp.TextDirection} direction - 
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.ParagraphStyle.prototype.setTextDirection = function(direction){};

/** @constructor */
SlidesApp.PictureFill = function(){};

/**
 * Gets a URL to the image.

 <p>This URL is tagged with the account of the requester, so anyone with the URL effectively
 accesses the image as the original requester. Access to the image may be lost if the
 presentation's sharing settings change. The URL expires after a short period of time.
 *
 * @return {String}
 */
SlidesApp.PictureFill.prototype.getContentUrl = function(){};

/**
 * Gets the image's source URL, if available.

 <p>When an image is inserted by URL, returns the URL provided during image insertion.
 *
 * @return {String} the image URL or <code>null</code> if the image does not have a source URL
 */
SlidesApp.PictureFill.prototype.getSourceUrl = function(){};

/** @constructor */
SlidesApp.Point = function(){};

/**
 * Gets the horizontal coordinate, measured in points.
 *
 * @return {Number}
 */
SlidesApp.Point.prototype.getX = function(){};

/**
 * Gets the vertical coordinate, measured in points.
 *
 * @return {Number}
 */
SlidesApp.Point.prototype.getY = function(){};

/** @constructor */
SlidesApp.Presentation = function(){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {User} user - a representation of the user to add
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.addEditor = function(user){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.addEditors = function(emailAddresses){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.addViewer = function(emailAddress){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {User} user - a representation of the user to add
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.addViewer = function(user){};

/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If any of the
 users were already on the list of editors, this method has no effect for them.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.addViewers = function(emailAddresses){};

/**
 * Appends a slide to the end of the presentation using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK'>PredefinedLayout.BLANK</a></code>
 predefined layout based on the current master. The current master is one of the following:

 <ul>
   <li>The master of the current last slide.
   <li>The first master in the presentation, if there is no slide.
 </ul>
 *
 * @return {SlidesApp.Slide} the new slide
 */
SlidesApp.Presentation.prototype.appendSlide = function(){};

/**
 * Appends a slide to the end of the presentation using the specified layout based on the current
 master. The current master is one of the following:

 <ul>
   <li>The master of the current last slide.
   <li>The first master in the presentation, if there is no slide.
 </ul>
 *
 * @param {SlidesApp.Layout} layout - The layout to use for the new slide; it should be present in the current master.
 *
 * @return {SlidesApp.Slide} the new slide
 */
SlidesApp.Presentation.prototype.appendSlide = function(layout){};

/**
 * Appends a slide to the end of the presentation using the specified predefined layout based on
 the current master. The current master is one of the following:

 <ul>
   <li>The master of the current last slide.
   <li>The first master in the presentation, if there is no slide.
 </ul>
 *
 * @param {SlidesApp.PredefinedLayout} predefinedLayout - The predefined layout to use for the new slide; it should be present in
     the current master.
 *
 * @return {SlidesApp.Slide} the new slide
 */
SlidesApp.Presentation.prototype.appendSlide = function(predefinedLayout){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user who executes the script does
 not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with edit permission
 */
SlidesApp.Presentation.prototype.getEditors = function(){};

/**
 * Gets the presentation's unique identifier. The presentation ID is used with <code>SlidesApp.openById()</code> to open a specific presentation instance.
 *
 * @return {String}
 */
SlidesApp.Presentation.prototype.getId = function(){};

/**
 * Gets the layouts in the presentation.
 *
 * @return {SlidesApp.Layout[]}
 */
SlidesApp.Presentation.prototype.getLayouts = function(){};

/**
 * Gets the masters in the presentation.
 *
 * @return {SlidesApp.Master[]}
 */
SlidesApp.Presentation.prototype.getMasters = function(){};

/**
 * Gets the name or title of the presentation.
 *
 * @return {String}
 */
SlidesApp.Presentation.prototype.getName = function(){};

/**
 * Gets the notes master of the presentation
 *
 * @return {SlidesApp.NotesMaster}
 */
SlidesApp.Presentation.prototype.getNotesMaster = function(){};

/**
 * Gets the page height of the notes master and notes pages in the presentation in points. They
 all have the same page height.
 *
 * @return {Number}
 */
SlidesApp.Presentation.prototype.getNotesPageHeight = function(){};

/**
 * Gets the page width of the notes master and notes pages in the presentation in points. They all
 have the same page width.
 *
 * @return {Number}
 */
SlidesApp.Presentation.prototype.getNotesPageWidth = function(){};

/**
 * Gets the page height of the slides, layouts, and masters in the presentation in points. They
 all have the same page height.
 *
 * @return {Number}
 */
SlidesApp.Presentation.prototype.getPageHeight = function(){};

/**
 * Gets the page width of the slides, layouts, and masters in the presentation in points. They all
 have the same page width.
 *
 * @return {Number}
 */
SlidesApp.Presentation.prototype.getPageWidth = function(){};

/**
 * Gets the user’s selection in the active presentation. A script can only access the selection of
 the user who is running the script, and only if the script is <a
 href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>Note that the selection returned is the current effective selection. As the script performs
 various changes to the presentation, the selection is transformed to take them into account.
 For example if two shapes A and B are selected, and then the script removes shape B, the
 returned selection object is implicitly updated such that only shape A is selected.

 <pre class="prettyprint">
 // Gets the current active page that is selected in the active presentation.
 var selection = SlidesApp.getActivePresentation().getSelection();
 var currentPage = selection.getCurrentPage();
 </pre>
 *
 * @return {SlidesApp.Selection} a representation of the user's selection, or <code>null</code> if the script is not bound to
     the presentation or if there is no valid user selection
 */
SlidesApp.Presentation.prototype.getSelection = function(){};

/**
 * Gets the slides in the presentation.
 *
 * @return {SlidesApp.Slide[]}
 */
SlidesApp.Presentation.prototype.getSlides = function(){};

/**
 * Retrieves the URL to access this presentation.

 <pre class="prettyprint">
 var presentation = SlidesApp.getActivePresentation();

 // Send out the link to open the presentation.
 MailApp.sendEmail("<email-address>", presentation.getName(), presentation.getUrl());
 </pre>
 *
 * @return {String} the URL to access the current presentation
 */
SlidesApp.Presentation.prototype.getUrl = function(){};

/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user who executes
 the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with view or comment permission
 */
SlidesApp.Presentation.prototype.getViewers = function(){};

/**
 * Inserts a slide at the specified index in the presentation using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK'>PredefinedLayout.BLANK</a></code> predefined layout based on the current master. The current master is
 one of the following:

 <ul>
   <li>The master of the previous slide.
   <li>The master of the first slide, if the insertionIndex is zero.
   <li>The first master in the presentation, if there is no slide.
 </ul>
 *
 * @param {number} insertionIndex - The zero-based index indicating where to insert the slide.
 *
 * @return {SlidesApp.Slide} the new slide
 */
SlidesApp.Presentation.prototype.insertSlide = function(insertionIndex){};

/**
 * Inserts a slide at the specified index in the presentation using the specified layout based on
 the current master. The current master is one of the following:

 <ul>
   <li>The master of the previous slide.
   <li>The master of the first slide, if the insertionIndex is zero.
   <li>The first master in the presentation, if there is no slide.
 </ul>
 *
 * @param {number} insertionIndex - The zero-based index indicating where to insert the slide.
 * @param {SlidesApp.Layout} layout - The layout to use for the new slide; it should be present in the current master.
 *
 * @return {SlidesApp.Slide} the new slide
 */
SlidesApp.Presentation.prototype.insertSlide = function(insertionIndex, layout){};

/**
 * Inserts a slide at the specified index in the presentation using the specified predefined
 layout based on the current master. The current master is one of the following:

 <ul>
   <li>The master of the previous slide.
   <li>The master of the first slide, if the insertionIndex is zero.
   <li>The first master in the presentation, if there is no slide.
 </ul>
 *
 * @param {number} insertionIndex - The zero-based index indicating where to insert the slide.
 * @param {SlidesApp.PredefinedLayout} predefinedLayout - The predefined layout to use for the new slide; it should be present in
     the current master.
 *
 * @return {SlidesApp.Slide} the new slide
 */
SlidesApp.Presentation.prototype.insertSlide = function(insertionIndex, predefinedLayout){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have
 general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.removeEditor = function(emailAddress){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have
 general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire domain.
 *
 * @param {User} user - a representation of the user to remove
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining
 */
SlidesApp.Presentation.prototype.removeEditor = function(user){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This
 method has no effect if the user is an editor, not a viewer or commenter. This method also does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who
 have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire
 domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> for chaining
 */
SlidesApp.Presentation.prototype.removeViewer = function(emailAddress){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This
 method has no effect if the user is an editor, not a viewer. This method also does not block
 users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have general
 access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire domain.
 *
 * @param {User} user - a representation of the user to remove
 *
 * @return {SlidesApp.Presentation} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> for chaining
 */
SlidesApp.Presentation.prototype.removeViewer = function(user){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Presentation.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Presentation.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/**
 * Saves the current <code>Presentation</code>. Causes pending updates to be flushed and applied.

 <p>The <code>saveAndClose()</code> method is automatically invoked at the end of script execution
 for each open <code>Presentation</code>, even if the script execution terminated with an error.

 <p>A closed <code>Presentation</code> cannot be edited. Use one of the open methods on <code>SlidesApp</code> to reopen a given presentation for editing.
 *
 * @return void
 */
SlidesApp.Presentation.prototype.saveAndClose = function(){};

/**
 * Sets the name or title of the presentation.
 *
 * @param {String} name - 
 *
 * @return void
 */
SlidesApp.Presentation.prototype.setName = function(name){};

/** @constructor */
SlidesApp.RgbColor = function(){};

/**
 * Returns the color as a CSS-style 7 character hexadecimal string, #rrggbb.
 *
 * @return {String}
 */
SlidesApp.RgbColor.prototype.asHexString = function(){};

/**
 * The blue channel of this color, as a number from 0 to 255.
 *
 * @return {number}
 */
SlidesApp.RgbColor.prototype.getBlue = function(){};

/**
 * Get the type of this color.
 *
 * @return {SlidesApp.ColorType}
 */
SlidesApp.RgbColor.prototype.getColorType = function(){};

/**
 * The green channel of this color, as a number from 0 to 255.
 *
 * @return {number}
 */
SlidesApp.RgbColor.prototype.getGreen = function(){};

/**
 * The red channel of this color, as a number from 0 to 255.
 *
 * @return {number}
 */
SlidesApp.RgbColor.prototype.getRed = function(){};

/** @constructor */
SlidesApp.Selection = function(){};

/**
 * Returns the currently active <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> or <code>null</code> if there is no active page.

 <pre class="prettyprint">
 var selection = SlidesApp.getActivePresentation().getSelection();
 var currentPage = selection.getCurrentPage();
 if (currentPage != null) {
   Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
 }
 </pre>
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Selection.prototype.getCurrentPage = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-range.html'>PageElementRange</a></code> collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances that are
 selected or <code>null</code> if there are no <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances selected.

 <pre class="prettyprint">
 var selection = SlidesApp.getActivePresentation().getSelection();
 var selectionType = selection.getSelectionType();
 if (selectionType == SlidesApp.SelectionType.PAGE_ELEMENT) {
   var currentPage = selection.getCurrentPage();
   var pageElements = selection.getPageElementRange().getPageElements();
   Logger.log('Number of page elements selected: ' + pageElements.length);
 }
 </pre>
 *
 * @return {SlidesApp.PageElementRange}
 */
SlidesApp.Selection.prototype.getPageElementRange = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-range.html'>PageRange</a></code> a collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> instances in the flimstrip that are
 selected or <code>null</code> if the selection is not of type <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html#PAGE'>SelectionType.PAGE</a></code>.

 <pre class="prettyprint">
 var selection = SlidesApp.getActivePresentation().getSelection();
 var selectionType = selection.getSelectionType();
 if (selectionType == SlidesApp.SelectionType.PAGE) {
   var pageRange = selection.getPageRange();
   Logger.log('Number of pages in the flimstrip selected: ' + pageRange.getPages().length);
 }
 }</pre>
 *
 * @return {SlidesApp.PageRange}
 */
SlidesApp.Selection.prototype.getPageRange = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html'>SelectionType</a></code>.

 <pre class="prettyprint">
 var selection = SlidesApp.getActivePresentation().getSelection();
 var selectionType = selection.getSelectionType();
 if (selectionType == SlidesApp.SelectionType.CURRENT_PAGE) {
   var currentPage = selection.getCurrentPage();
   Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
 }
 </pre>
 *
 * @return {SlidesApp.SelectionType}
 */
SlidesApp.Selection.prototype.getSelectionType = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell-range.html'>TableCellRange</a></code> collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances that are selected
 or <code>null</code> if there are no <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances selected.

 <pre class="prettyprint">
 var selection = SlidesApp.getActivePresentation().getSelection();
 var selectionType = selection.getSelectionType();
 if (selectionType == SlidesApp.SelectionType.TABLE_CELL) {
   var currentPage = selection.getCurrentPage();
   var tableCells = selection.getTableCellRange().getTableCells();
   var table = tableCells[0].getParentTable();
   Logger.log('Number of table cells selected: ' + tableCells.length);
 }
 </pre>
 *
 * @return {SlidesApp.TableCellRange}
 */
SlidesApp.Selection.prototype.getTableCellRange = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> that is selected or <code>null</code> if the selection is not of type
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html#TEXT'>SelectionType.TEXT</a></code>.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> represents two scenarios:

 <p>1. Range of text selected. For example if a shape has text "Hello", and "He" is selected,
 the returned range has <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()'>TextRange.getStartIndex()</a></code> = 0, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()'>TextRange.getEndIndex()</a></code> =
 2.

 <p>2. Cursor position. For example if a shape has text "Hello", and cursor is after "H",
 ("H|ello"), the returned range has <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()'>TextRange.getStartIndex()</a></code> = 1 and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()'>TextRange.getEndIndex()</a></code> = 1.

 <pre class="prettyprint">
 var selection = SlidesApp.getActivePresentation().getSelection();
 var selectionType = selection.getSelectionType();
 if (selectionType == SlidesApp.SelectionType.TEXT) {
   var currentPage = selection.getCurrentPage();
   var pageElement = selection.getPageElementRange().getPageElements()[0];
   var textRange = selection.getTextRange();
   Logger.log('Text selected: ' + textRange.asString());
 }
 </pre>
 *
 * @return {SlidesApp.TextRange}
 */
SlidesApp.Selection.prototype.getTextRange = function(){};

/** @constructor */
SlidesApp.Shape = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Shape.prototype.duplicate = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the shape.
 *
 * @return {SlidesApp.Border}
 */
SlidesApp.Shape.prototype.getBorder = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.Shape.prototype.getDescription = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/fill.html'>Fill</a></code> of the shape.
 *
 * @return {SlidesApp.Fill}
 */
SlidesApp.Shape.prototype.getFill = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Shape.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Shape.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Shape.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Shape.prototype.getLeft = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null) {
   Logger.log('Shape has a link of type: ' + link.getLinkType());
 }
 </pre>
 *
 * @return {SlidesApp.Link}
 */
SlidesApp.Shape.prototype.getLink = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.Shape.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.Shape.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Shape.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Shape.prototype.getParentPage = function(){};

/**
 * Returns the parent page element of the placeholder. Returns <code>null</code> if the shape is not a
 placeholder or has no parent.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Shape.prototype.getParentPlaceholder = function(){};

/**
 * Returns the placeholder index of the shape. If two or more instances of the same placeholder
 types are present in the same page, they would each have their own unique index value. Returns
 <code>null</code> if the shape is not a placeholder.
 *
 * @return {number}
 */
SlidesApp.Shape.prototype.getPlaceholderIndex = function(){};

/**
 * Returns the placeholder type of the shape, or <code>PlaceholderType.NONE</code> if the shape is not
 a placeholder.
 *
 * @return {SlidesApp.PlaceholderType}
 */
SlidesApp.Shape.prototype.getPlaceholderType = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.Shape.prototype.getRotation = function(){};

/**
 * Returns the type of the shape.
 *
 * @return {SlidesApp.ShapeType}
 */
SlidesApp.Shape.prototype.getShapeType = function(){};

/**
 * Returns the text content of the shape.

 <p>Text within a shape always terminates with a newline character.
 *
 * @return {SlidesApp.TextRange}
 */
SlidesApp.Shape.prototype.getText = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.Shape.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Shape.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.Shape.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Shape.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.Shape.prototype.remove = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.

 <pre class="prettyprint">
 shape.removeLink();
 </pre>
 *
 * @return void
 */
SlidesApp.Shape.prototype.removeLink = function(){};

/**
 * Replaces this shape with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code>.

 <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the size of the existing shape.

 <pre class="prettyprint">
 var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 // Get the Drive image file with the given ID.
 var driveImage = DriveApp.getFileById(fileId);
 shape.replaceWithImage(driveImage);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return {SlidesApp.Image} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape
 */
SlidesApp.Shape.prototype.replaceWithImage = function(blobSource){};

/**
 * Replaces this shape with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code>.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <pre class="prettyprint">
 var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 // Get the Drive image file with the given ID.
 var driveImage = DriveApp.getFileById(fileId);
 // Replace and crop the replaced image.
 shape.replaceWithImage(driveImage, true);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing shape's size. Otherwise, the
     image is scaled and centered.
 *
 * @return {SlidesApp.Image} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape
 */
SlidesApp.Shape.prototype.replaceWithImage = function(blobSource, crop){};

/**
 * Replaces this shape with an image.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the size of the existing shape.
 *
 * @param {String} imageUrl - The image URL to download the image from.
 *
 * @return {SlidesApp.Image} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape
 */
SlidesApp.Shape.prototype.replaceWithImage = function(imageUrl){};

/**
 * Replaces this shape with an image.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The image URL to download the image from.
 * @param {Boolean} crop - If <code>true</code>, crops the image to fit the existing shape's size. Otherwise, the
     image is scaled and centered.
 *
 * @return {SlidesApp.Image} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape
 */
SlidesApp.Shape.prototype.replaceWithImage = function(imageUrl, crop){};

/**
 * Replaces this shape with an Google Sheets chart.

 <p>The chart is linked with the source Google Sheets chart which allows it to be updated. Other
 collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Replace the shape with the Sheets chart.
 var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 shape.replaceWithSheetsChart(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet that replaces the shape.
 *
 * @return {SlidesApp.SheetsChart} the chart that replaced the shape
 */
SlidesApp.Shape.prototype.replaceWithSheetsChart = function(sourceChart){};

/**
 * Replaces this shape with an image of a Google Sheets chart.

 <p>In order to maintain the Google Sheets chart's aspect ratio, the chart image is scaled and
 centered with respect to the size of the existing shape.

 <p>The image of the chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Replace the shape with the Sheets chart as an image.
 var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 shape.replaceWithSheetsChartAsImage(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet that replaces the shape.
 *
 * @return {SlidesApp.Image} the image of the chart that replaced the shape
 */
SlidesApp.Shape.prototype.replaceWithSheetsChartAsImage = function(sourceChart){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.Shape.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.Shape.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.setLeft = function(left){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(0);
 </pre>
 *
 * @param {number} slideIndex - The zero-based index to the slide.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Shape.prototype.setLinkSlide = function(slideIndex){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 var slide = presentation.getSlides()[0];
 shape.setLinkSlide(slide);
 </pre>
 *
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Shape.prototype.setLinkSlide = function(slide){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 </pre>
 *
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Shape.prototype.setLinkSlide = function(slidePosition){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.

 <pre class="prettyprint">
 // Set a link to the URL.
 shape.setLinkUrl("https://slides.google.com");
 </pre>
 *
 * @param {String} url - The URL string.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.Shape.prototype.setLinkUrl = function(url){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.Shape}
 */
SlidesApp.Shape.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.SheetsChart = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Returns the chart as an image or <code>null</code> if the chart is not an embedded image.
 *
 * @return {SlidesApp.Image}
 */
SlidesApp.SheetsChart.prototype.asImage = function(){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.SheetsChart.prototype.duplicate = function(){};

/**
 * Gets the ID of the specific chart in the Google Sheets spreadsheet that is embedded.
 *
 * @return {number}
 */
SlidesApp.SheetsChart.prototype.getChartId = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.SheetsChart.prototype.getDescription = function(){};

/**
 * Returns the embed type of the Sheets chart.
 *
 * @return {SlidesApp.SheetsChartEmbedType}
 */
SlidesApp.SheetsChart.prototype.getEmbedType = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.SheetsChart.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.SheetsChart.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.SheetsChart.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.SheetsChart.prototype.getLeft = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null) {
   Logger.log('Shape has a link of type: ' + link.getLinkType());
 }
 </pre>
 *
 * @return {SlidesApp.Link}
 */
SlidesApp.SheetsChart.prototype.getLink = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.SheetsChart.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.SheetsChart.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.SheetsChart.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.SheetsChart.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.SheetsChart.prototype.getRotation = function(){};

/**
 * Gets the ID of the Google Sheets spreadsheet that contains the source chart.
 *
 * @return {String}
 */
SlidesApp.SheetsChart.prototype.getSpreadsheetId = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.SheetsChart.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.SheetsChart.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.SheetsChart.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.SheetsChart.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.preconcatenateTransform = function(transform){};

/**
 * Refreshes the chart by replacing it with the latest version of the chart from Google Sheets. If
 the chart is already up to date, does not make any change to the chart in the presentation.
 *
 * @return void
 */
SlidesApp.SheetsChart.prototype.refresh = function(){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.SheetsChart.prototype.remove = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.

 <pre class="prettyprint">
 shape.removeLink();
 </pre>
 *
 * @return void
 */
SlidesApp.SheetsChart.prototype.removeLink = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.SheetsChart.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.SheetsChart.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.setLeft = function(left){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(0);
 </pre>
 *
 * @param {number} slideIndex - The zero-based index to the slide.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.SheetsChart.prototype.setLinkSlide = function(slideIndex){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 var slide = presentation.getSlides()[0];
 shape.setLinkSlide(slide);
 </pre>
 *
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.SheetsChart.prototype.setLinkSlide = function(slide){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 </pre>
 *
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.SheetsChart.prototype.setLinkSlide = function(slidePosition){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.

 <pre class="prettyprint">
 // Set a link to the URL.
 shape.setLinkUrl("https://slides.google.com");
 </pre>
 *
 * @param {String} url - The URL string.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.SheetsChart.prototype.setLinkUrl = function(url){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.SheetsChart}
 */
SlidesApp.SheetsChart.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.Slide = function(){};

/**
 * Duplicates the slide.

 <p>The duplicate slide is created immediately following the original.
 *
 * @return {SlidesApp.Slide}
 */
SlidesApp.Slide.prototype.duplicate = function(){};

/**
 * Gets the page's background.
 *
 * @return {SlidesApp.PageBackground}
 */
SlidesApp.Slide.prototype.getBackground = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
 *
 * @return {SlidesApp.ColorScheme}
 */
SlidesApp.Slide.prototype.getColorScheme = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
 *
 * @return {SlidesApp.Group[]}
 */
SlidesApp.Slide.prototype.getGroups = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
 *
 * @return {SlidesApp.Image[]}
 */
SlidesApp.Slide.prototype.getImages = function(){};

/**
 * Gets the layout that the slide is based on or <code>null</code> if the slide is not based on a
 layout.
 *
 * @return {SlidesApp.Layout}
 */
SlidesApp.Slide.prototype.getLayout = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
 *
 * @return {SlidesApp.Line[]}
 */
SlidesApp.Slide.prototype.getLines = function(){};

/**
 * Returns the notes page associated with the slide.
 *
 * @return {SlidesApp.NotesPage}
 */
SlidesApp.Slide.prototype.getNotesPage = function(){};

/**
 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String}
 */
SlidesApp.Slide.prototype.getObjectId = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Slide.prototype.getPageElements = function(){};

/**
 * Gets the type of the page.
 *
 * @return {SlidesApp.PageType}
 */
SlidesApp.Slide.prototype.getPageType = function(){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
 <code>null</code> if a matching placeholder is not present.

 <p>If there are multiple placeholders with the same type, it returns the one with minimal
 placeholder index. If there are multiple matching placeholders with the same index, it returns
 the first placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Slide.prototype.getPlaceholder = function(placeholderType){};

/**
 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
 a placeholder index, or <code>null</code> if the placeholder is not present.

 <p>If there are multiple placeholders with the same type and index, it returns the first
 placeholder from the page's page elements collection.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
 </pre>
 *
 * @param {SlidesApp.PlaceholderType} placeholderType - 
 * @param {number} placeholderIndex - 
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Slide.prototype.getPlaceholder = function(placeholderType, placeholderIndex){};

/**
 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.

 <pre class="prettyprint">
 var master = SlidesApp.getActivePresentation().getMasters()[0];
 Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
 </pre>
 *
 * @return {SlidesApp.PageElement[]}
 */
SlidesApp.Slide.prototype.getPlaceholders = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
 *
 * @return {SlidesApp.Shape[]}
 */
SlidesApp.Slide.prototype.getShapes = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
 *
 * @return {SlidesApp.SheetsChart[]}
 */
SlidesApp.Slide.prototype.getSheetsCharts = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
 *
 * @return {SlidesApp.Table[]}
 */
SlidesApp.Slide.prototype.getTables = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
 *
 * @return {SlidesApp.Video[]}
 */
SlidesApp.Slide.prototype.getVideos = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
 *
 * @return {SlidesApp.WordArt[]}
 */
SlidesApp.Slide.prototype.getWordArts = function(){};

/**
 * Inserts an image at the top left corner of the page with a default size from the specified
 image blob.

 <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
 display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 slide.insertImage(image);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Slide.prototype.insertImage = function(blobSource){};

/**
 * Inserts an image on the page with the provided position and size from the specified image blob.

 <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
 is stored for display inside the presentation. Images must be less than 50MB in size, cannot
 exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // Get the Drive image file with the given ID.
 var image = DriveApp.getFileById(fileId);
 var position = {left: 0, top: 0};
 var size = {width: 300, height: 100};
 slide.insertImage(image, position.left, position.top, size.width, size.height);
 </pre>
 *
 * @param {BlobSource} blobSource - The image data.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Slide.prototype.insertImage = function(blobSource, left, top, width, height){};

/**
 * Inserts an image at the top left corner of the page with a default size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.
 *
 * @param {String} imageUrl - The image URL.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Slide.prototype.insertImage = function(imageUrl){};

/**
 * Inserts an image on the page with the provided position and size from the provided URL.

 <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
 presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
 in either in PNG, JPEG, or GIF format.

 <p>The provided URL must be no larger than 2kB.

 <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
 to the provided size.
 *
 * @param {String} imageUrl - The image URL.
 * @param {Number} left - The horizontal position of the image in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the image in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the image in points.
 * @param {Number} height - The height of the image in points.
 *
 * @return {SlidesApp.Image} the inserted image
 */
SlidesApp.Slide.prototype.insertImage = function(imageUrl, left, top, width, height){};

/**
 * Inserts a line on the page.

 <pre class="prettyprint">
 // Insert a line in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var startPoint = {left: 10, top: 10};
 var endPoint = {left: 40, top: 40};
 slide.insertLine(
     SlidesApp.LineCategory.STRAIGHT,
     startPoint.left,
     startPoint.top,
     endPoint.left,
     endPoint.top);
 </pre>
 *
 * @param {SlidesApp.LineCategory} lineCategory - The category of the line to insert.
 * @param {Number} startLeft - The horizontal position of the start point of the line, measured in points
     from the upper left corner of the page.
 * @param {Number} startTop - The vertical position of the start point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endLeft - The horizontal position of the end point of the line, measured in points from
     the upper left corner of the page.
 * @param {Number} endTop - The vertical position of the end point of the line, measured in points from the
     upper left corner of the page.
 *
 * @return {SlidesApp.Line} the inserted line
 */
SlidesApp.Slide.prototype.insertLine = function(lineCategory, startLeft, startTop, endLeft, endTop){};

/**
 * Inserts a shape on the page.

 <p>The shape is inserted with a default size at the top left corner of the page.

 <pre class="prettyprint">
 // Insert a shape in the first slide of the presentation.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
 </pre>
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 *
 * @return {SlidesApp.Shape} The inserted shape.
 */
SlidesApp.Slide.prototype.insertShape = function(shapeType){};

/**
 * Inserts a shape on the page.
 *
 * @param {SlidesApp.ShapeType} shapeType - The type of shape to insert.
 * @param {Number} left - The horizontal position of the shape, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the shape, measured from the upper left corner of the page.
 * @param {Number} width - The width of the shape.
 * @param {Number} height - The height of the shape.
 *
 * @return {SlidesApp.Shape} the inserted shape
 */
SlidesApp.Slide.prototype.insertShape = function(shapeType, left, top, width, height){};

/**
 * Inserts a Google Sheets chart on the page.

 <p>The chart is inserted with a default size at the top left corner of the page.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChart(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Slide.prototype.insertSheetsChart = function(sourceChart){};

/**
 * Inserts a Google Sheets chart on the page with the provided position and size.

 <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
 to the provided size.

 <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
 updated. Other collaborators can see the link to the source spreadsheet.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChart(
     chart,
     position.left,
     position.top,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.SheetsChart} the inserted chart in the page
 */
SlidesApp.Slide.prototype.insertSheetsChart = function(sourceChart, left, top, width, height){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.

 <p>The image of the chart is inserted with a default size at the top left corner of the page.

 <p>The inserted image of chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.insertSheetsChartAsImage(chart);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Slide.prototype.insertSheetsChartAsImage = function(sourceChart){};

/**
 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
 size.

 <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
 respect to the provided size.

 <p>The inserted image of the chart is not linked with the source Google Sheets chart.

 <pre class="prettyprint">
 var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
 var chart = sheet.getCharts()[0];
 // Insert the spreadsheet chart in the first slide.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var position = {left: 0, top: 0};
 var size = {width: 200, height: 200};
 slide.insertSheetsChartAsImage(
     chart,
     position.left,
     position.right,
     size.width,
     size.height);
 </pre>
 *
 * @param {SpreadsheetApp.EmbeddedChart} sourceChart - The chart in a spreadsheet to be inserted in the page.
 * @param {Number} left - The horizontal position of the chart in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the chart in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the chart in points.
 * @param {Number} height - The height of the chart in points.
 *
 * @return {SlidesApp.Image} the inserted image of the chart in the page
 */
SlidesApp.Slide.prototype.insertSheetsChartAsImage = function(sourceChart, left, top, width, height){};

/**
 * Inserts a table on the page.

 <p>The table is centered on the page with default size and evenly distributed rows and columns.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Slide.prototype.insertTable = function(numRows, numColumns){};

/**
 * Inserts a table on the page with the provided position and size.

 <p>Rows and columns are evenly distributed in the created table.
 *
 * @param {number} numRows - The number of rows in the table.
 * @param {number} numColumns - The number of columns in the table.
 * @param {Number} left - The horizontal position of the table, measured from the upper left corner of the
     page.
 * @param {Number} top - The vertical position of the table, measured from the upper left corner of the page.
 * @param {Number} width - The width of the table.
 * @param {Number} height - The minimum height of the table. The actual height of the rendered table depends
     on factors such as text font size.
 *
 * @return {SlidesApp.Table} the inserted table
 */
SlidesApp.Slide.prototype.insertTable = function(numRows, numColumns, left, top, width, height){};

/**
 * Inserts a video at the top left corner of the page with a default size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Slide.prototype.insertVideo = function(videoUrl){};

/**
 * Inserts a video on the page with the provided position and size.

 <p>Only YouTube videos are currently supported.
 *
 * @param {String} videoUrl - The URL of the video to insert.
 * @param {Number} left - The horizontal position of the video in points, measured from the upper left corner
     of the page.
 * @param {Number} top - The vertical position of the video in points, measured from the upper left corner of
     the page.
 * @param {Number} width - The width of the video in points.
 * @param {Number} height - The height of the video in points.
 *
 * @return {SlidesApp.Video} the inserted video
 */
SlidesApp.Slide.prototype.insertVideo = function(videoUrl, left, top, width, height){};

/**
 * Move the slide to the specified index.
 *
 * @param {number} index - The index where the slide should be moved to, based on the slide arrangement
     before the move. The index should be between zero and the number of slides in the
     presentation, inclusive.
 *
 * @return void
 */
SlidesApp.Slide.prototype.move = function(index){};

/**
 * Removes the page.
 *
 * @return void
 */
SlidesApp.Slide.prototype.remove = function(){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Slide.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.Slide.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <pre class="prettyprint">
 // Select the first slide as the current page selection and replace any previous selection.
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 slide.selectAsCurrentPage();
 </pre>
 *
 * @return void
 */
SlidesApp.Slide.prototype.selectAsCurrentPage = function(){};

/** @constructor */
SlidesApp.SolidFill = function(){};

/**
 * Get the opacity of the color, in the interval from [0, 1.0], where 1.0 means fully opaque.
 *
 * @return {Number}
 */
SlidesApp.SolidFill.prototype.getAlpha = function(){};

/**
 * Get the color of the fill.
 *
 * @return {SlidesApp.Color}
 */
SlidesApp.SolidFill.prototype.getColor = function(){};

/** @constructor */
SlidesApp.Table = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Appends a column to the right of the last column of the table.
 *
 * @return {SlidesApp.TableColumn} the appended column
 */
SlidesApp.Table.prototype.appendColumn = function(){};

/**
 * Appends a row below the last row of the table.
 *
 * @return {SlidesApp.TableRow} the appended row
 */
SlidesApp.Table.prototype.appendRow = function(){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Table.prototype.duplicate = function(){};

/**
 * Returns the specified cell in the table.
 *
 * @param {number} rowIndex - The row index of the cell to retrieve.
 * @param {number} columnIndex - The column index of the cell to retrieve.
 *
 * @return {SlidesApp.TableCell} the table cell
 */
SlidesApp.Table.prototype.getCell = function(rowIndex, columnIndex){};

/**
 * Returns the specified column in the table.
 *
 * @param {number} columnIndex - The 0-based column index.
 *
 * @return {SlidesApp.TableColumn} the table column
 */
SlidesApp.Table.prototype.getColumn = function(columnIndex){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.Table.prototype.getDescription = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Table.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Table.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Table.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Table.prototype.getLeft = function(){};

/**
 * Returns the number of columns in the table.
 *
 * @return {number}
 */
SlidesApp.Table.prototype.getNumColumns = function(){};

/**
 * Returns the number of rows in the table.
 *
 * @return {number}
 */
SlidesApp.Table.prototype.getNumRows = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.Table.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.Table.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Table.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Table.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.Table.prototype.getRotation = function(){};

/**
 * Returns the specified row in the table.
 *
 * @param {number} rowIndex - The index of the row to retrieve.
 *
 * @return {SlidesApp.TableRow} the table row
 */
SlidesApp.Table.prototype.getRow = function(rowIndex){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.Table.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Table.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.Table.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Table.prototype.getWidth = function(){};

/**
 * Inserts a column at the specified index of the table.

 <p>If all the cells in the column to the left of the specified index are merged with other
 columns, the new column is inserted to the right of the common columns spanned by these cells.
 *
 * @param {number} index - 
 *
 * @return {SlidesApp.TableColumn} the inserted column
 */
SlidesApp.Table.prototype.insertColumn = function(index){};

/**
 * Inserts a row at the specified index of the table.

 <p>If all the cells in the row above the specified index are merged with other rows, the new
 row is inserted below the common rows spanned by these cells.
 *
 * @param {number} index - 
 *
 * @return {SlidesApp.TableRow} the inserted row
 */
SlidesApp.Table.prototype.insertRow = function(index){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.Table.prototype.remove = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.Table.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.Table.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.setLeft = function(left){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.Table.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.TableCell = function(){};

/**
 * Returns the 0-based column index of the table cell.
 *
 * @return {number}
 */
SlidesApp.TableCell.prototype.getColumnIndex = function(){};

/**
 * Returns the column span of the table cell.
 *
 * @return {number}
 */
SlidesApp.TableCell.prototype.getColumnSpan = function(){};

/**
 * Returns the fill of the table cell.
 *
 * @return {SlidesApp.Fill}
 */
SlidesApp.TableCell.prototype.getFill = function(){};

/**
 * Returns the head cell of this table cell. Returns <code>null</code> if this cell has not been merged
 or if this cell is the head cell.
 *
 * @return {SlidesApp.TableCell}
 */
SlidesApp.TableCell.prototype.getHeadCell = function(){};

/**
 * Returns the merge state of the table cell.
 *
 * @return {SlidesApp.CellMergeState}
 */
SlidesApp.TableCell.prototype.getMergeState = function(){};

/**
 * Returns the table column containing the current cell.
 *
 * @return {SlidesApp.TableColumn}
 */
SlidesApp.TableCell.prototype.getParentColumn = function(){};

/**
 * Returns the table row containing the current cell.
 *
 * @return {SlidesApp.TableRow}
 */
SlidesApp.TableCell.prototype.getParentRow = function(){};

/**
 * Returns the table containing the current cell.
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.TableCell.prototype.getParentTable = function(){};

/**
 * Returns the 0-based row index of the table cell.
 *
 * @return {number}
 */
SlidesApp.TableCell.prototype.getRowIndex = function(){};

/**
 * Returns the row span of the table cell.
 *
 * @return {number}
 */
SlidesApp.TableCell.prototype.getRowSpan = function(){};

/**
 * Returns the text content of the table cell. Returns <code>null</code> if the cell is merged but is
 not a head cell.

 <p>Text within a table cell always terminates with a newline character.
 *
 * @return {SlidesApp.TextRange}
 */
SlidesApp.TableCell.prototype.getText = function(){};

/** @constructor */
SlidesApp.TableCellRange = function(){};

/**
 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances.
 *
 * @return {SlidesApp.TableCell[]}
 */
SlidesApp.TableCellRange.prototype.getTableCells = function(){};

/** @constructor */
SlidesApp.TableColumn = function(){};

/**
 * Returns the cell at the specified index.
 *
 * @param {number} cellIndex - The 0-based index of the cell to retrieve.
 *
 * @return {SlidesApp.TableCell}
 */
SlidesApp.TableColumn.prototype.getCell = function(cellIndex){};

/**
 * Returns the 0-based index of the column.
 *
 * @return {number}
 */
SlidesApp.TableColumn.prototype.getIndex = function(){};

/**
 * Returns the number of cells in this column.
 *
 * @return {number}
 */
SlidesApp.TableColumn.prototype.getNumCells = function(){};

/**
 * Returns the table containing the current column.
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.TableColumn.prototype.getParentTable = function(){};

/**
 * Returns the width of the column in points.
 *
 * @return {Number}
 */
SlidesApp.TableColumn.prototype.getWidth = function(){};

/**
 * Removes the table column.

 <p>If all the cells in the column are merged with other columns, the common columns spanned by
 these cells are removed.

 <p>If no columns remain in the table after this removal, the whole table is removed.
 *
 * @return void
 */
SlidesApp.TableColumn.prototype.remove = function(){};

/** @constructor */
SlidesApp.TableRow = function(){};

/**
 * Returns the cell at the specified index.
 *
 * @param {number} cellIndex - The 0-based index of the cell to retrieve.
 *
 * @return {SlidesApp.TableCell} the cell.
 */
SlidesApp.TableRow.prototype.getCell = function(cellIndex){};

/**
 * Returns the 0-based index of the row.
 *
 * @return {number}
 */
SlidesApp.TableRow.prototype.getIndex = function(){};

/**
 * Returns the minimum height of the row in points. The actual height depends on the length of the
 content of the cell.
 *
 * @return {Number}
 */
SlidesApp.TableRow.prototype.getMinimumHeight = function(){};

/**
 * Returns the number of cells in this row.
 *
 * @return {number}
 */
SlidesApp.TableRow.prototype.getNumCells = function(){};

/**
 * Returns the table containing the current row.
 *
 * @return {SlidesApp.Table}
 */
SlidesApp.TableRow.prototype.getParentTable = function(){};

/**
 * Removes the table row.

 <p>If all the cells in the row are merged with other rows, the common rows spanned by these
 cells are removed.

 <p>If no rows remain in the table after this removal, the whole table is removed.
 *
 * @return void
 */
SlidesApp.TableRow.prototype.remove = function(){};

/** @constructor */
SlidesApp.TextRange = function(){};

/**
 * Appends a paragraph at the end of the text range. The paragraph maintains the styling of the
 end of the current text range.

 <p>The provided text string is appended as a paragraph by adding at least one surrounding
 newline character to the string.

 <p>When the provided text string contains newline characters (thus consisting of multiple
 paragraphs), the final paragraph added is returned.
 *
 * @param {String} text - The string to append as a paragraph.
 *
 * @return {SlidesApp.Paragraph} the appended <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraph</a></code>.
 */
SlidesApp.TextRange.prototype.appendParagraph = function(text){};

/**
 * Appends text at the end of the text range. The text maintains the styling of the end of the
 existing text.
 *
 * @param {String} text - The string to append.
 *
 * @return {SlidesApp.TextRange} the text range representing the appended text.
 */
SlidesApp.TextRange.prototype.appendText = function(text){};

/**
 * Returns the rendered text bounded by this range of the associated shape or table cell in a
 format appropriate to display to end users.

 <p>AutoText elements, such as generated slide numbers, are replaced with their rendered values.
 Any non-text elements in the range are omitted.
 *
 * @return {String}
 */
SlidesApp.TextRange.prototype.asRenderedString = function(){};

/**
 * Returns the raw text bounded by this range of the associated shape or table cell.

 <p>AutoText elements such as generated slide numbers and any non-text elements in the range are
 replaced with the Unicode character U+E907.
 *
 * @return {String}
 */
SlidesApp.TextRange.prototype.asString = function(){};

/**
 * Clears the text bounded by this range.

 <p>Since the entire text in a Shape or TableCell must end in a newline, the final newline in
 the text is not removed.
 *
 * @return void
 */
SlidesApp.TextRange.prototype.clear = function(){};

/**
 * Clears the text bounded by the start and end offsets in the range.

 <p>Since the text must end in a newline, the final newline in text is not removed even if it's
 covered by the given offsets.
 *
 * @param {number} startOffset - The number of characters past the start index of the current text range used
     to determine the inclusive start index of the range to clear. The start offset must be
     equal to or greater than 0 and less than or equal to <code>endOffset</code>. <code>startOffset</code>
     must also be less than the length of the current range.
 * @param {number} endOffset - The number of characters past the start index of the current text range used
     to determine the exclusive end index of the range to clear. The <code>endOffset</code> must be
     equal to or greater than <code>startOffset</code>. <code>endOffset</code> must also be less than or
     equal to the length of the current range.
 *
 * @return void
 */
SlidesApp.TextRange.prototype.clear = function(startOffset, endOffset){};

/**
 * Returns all the ranges matching the search pattern in the current text range. The search is
 case sensitive.
 *
 * @param {String} pattern - The regular expression pattern to search; any backslashes in the pattern should
     be escaped.
 *
 * @return {SlidesApp.TextRange[]}
 */
SlidesApp.TextRange.prototype.find = function(pattern){};

/**
 * Returns all the ranges matching the search pattern in the current text range starting from the
 start offset. The search is case sensitive.
 *
 * @param {String} pattern - The regular expression pattern to search; any backslashes in the pattern should
     be escaped.
 * @param {number} startOffset - The number of characters past the start index of the current text range used
     to determine the inclusive start index of the range to search. <code>startOffset</code> must
     also be less than the length of the current range.
 *
 * @return {SlidesApp.TextRange[]}
 */
SlidesApp.TextRange.prototype.find = function(pattern, startOffset){};

/**
 * Returns the auto texts within the current text range.
 *
 * @return {SlidesApp.AutoText[]}
 */
SlidesApp.TextRange.prototype.getAutoTexts = function(){};

/**
 * Returns the exclusive, 0-based index for the last character in this range. If the start and end
 indices are equal, the range is considered to be empty.
 *
 * @return {number}
 */
SlidesApp.TextRange.prototype.getEndIndex = function(){};

/**
 * Returns the number of characters in this range.
 *
 * @return {number}
 */
SlidesApp.TextRange.prototype.getLength = function(){};

/**
 * Returns a collection of text ranges that correspond to all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>s within the current
 text range or overlapping the current text range.

 <p>Each returned range is guaranteed to span one link when it is created. Text modifications
 can cause it to no longer represent exactly one link.

 <p>Each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> on the returned ranges can be accessed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#getLink()'>TextStyle.getLink()</a></code>.

 <pre class="prettyprint">
 // Accesses the first link on a TextRange object.
 var linkTextRange = textRange.getLinks()[0];
 var textStyle = textRange.getTextStyle();
 Logger.log(textStyle.hasLink()); // logs 'true'
 var link = textStyle.getLink();  // Link object
 </pre>
 *
 * @return {SlidesApp.TextRange[]}
 */
SlidesApp.TextRange.prototype.getLinks = function(){};

/**
 * Returns the paragraphs in lists that overlap the current text range.
 *
 * @return {SlidesApp.Paragraph[]}
 */
SlidesApp.TextRange.prototype.getListParagraphs = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-style.html'>ListStyle</a></code> of the current text range.
 *
 * @return {SlidesApp.ListStyle}
 */
SlidesApp.TextRange.prototype.getListStyle = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-style.html'>ParagraphStyle</a></code> of the current text range.
 *
 * @return {SlidesApp.ParagraphStyle}
 */
SlidesApp.TextRange.prototype.getParagraphStyle = function(){};

/**
 * Returns the paragraphs that overlap the current text range.
 *
 * @return {SlidesApp.Paragraph[]}
 */
SlidesApp.TextRange.prototype.getParagraphs = function(){};

/**
 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> covering part of the range from which it is derived.
 *
 * @param {number} startOffset - The number of characters past the start index of the current text range used
     to determine the inclusive start index of the returned range. The start offset must be
     equal to or greater than 0 and less than or equal to <code>endOffset</code>. <code>startOffset</code>
     must also be less than the length of the current range.
 * @param {number} endOffset - The number of characters past the start index of the current text range used
     to determine the exclusive end index of the returned range. The <code>endOffset</code> must be
     equal to or greater than <code>startOffset</code>. <code>endOffset</code> must also be less than or
     equal to the length of the current range.
 *
 * @return {SlidesApp.TextRange}
 */
SlidesApp.TextRange.prototype.getRange = function(startOffset, endOffset){};

/**
 * Returns the text runs that overlap the current text range. A text run is a segment of text
 where all the characters have the same text style.

 <p>Each returned range is only guaranteed to span one run when it is created. Text or style
 modifications can cause it to no longer represent exactly one run.
 *
 * @return {SlidesApp.TextRange[]}
 */
SlidesApp.TextRange.prototype.getRuns = function(){};

/**
 * Returns the inclusive, 0-based index for the first character in this range. If the start and
 end indices are equal, the range is considered to be empty.
 *
 * @return {number}
 */
SlidesApp.TextRange.prototype.getStartIndex = function(){};

/**
 * Returns the text style of the range, or <code>null</code> if the range is empty.
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextRange.prototype.getTextStyle = function(){};

/**
 * Inserts a paragraph at the start offset. The paragraph maintains the styling of the current
 text range at the start offset.

 <p>The provided text string is inserted as a paragraph by adding at least one surrounding
 newline character to the string.

 <p>When the provided text string contains newline characters (thus consisting of multiple
 paragraphs), the final paragraph added is returned.
 *
 * @param {number} startOffset - The number of characters past the start index of the current text range used
     to determine the inclusive start index of the text to insert.
 * @param {String} text - The string to insert.
 *
 * @return {SlidesApp.Paragraph} the inserted <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraph</a></code>.
 */
SlidesApp.TextRange.prototype.insertParagraph = function(startOffset, text){};

/**
 * Inserts text at the start offset. The text maintains the styling of the existing text at the
 start offset.
 *
 * @param {number} startOffset - The number of characters past the start index of the current text range used
     to determine the inclusive start index of the text to insert.
 * @param {String} text - The string to insert.
 *
 * @return {SlidesApp.TextRange} the text range representing the inserted text.
 */
SlidesApp.TextRange.prototype.insertText = function(startOffset, text){};

/**
 * Returns <code>true</code> if there are no characters in this range, and returns <code>false</code>
 otherwise.
 *
 * @return {Boolean}
 */
SlidesApp.TextRange.prototype.isEmpty = function(){};

/**
 * Replaces all instances of text matching find text with replace text. The search is case
 insensitive.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.TextRange.prototype.replaceAllText = function(findText, replaceText){};

/**
 * Replaces all instances of text matching find text with replace text.
 *
 * @param {String} findText - The text to find.
 * @param {String} replaceText - The text to replace the matched text.
 * @param {Boolean} matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
     case insensitive.
 *
 * @return {number} the number of occurrences changed
 */
SlidesApp.TextRange.prototype.replaceAllText = function(findText, replaceText, matchCase){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in the active presentation and removes any previous
 selection.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> or the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> is set
 as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> or the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getPageElementRange()'>selected page element</a></code>.

 <ol>
   The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html'>Selection</a></code> can be of two types:
   <li>1. Range of text, use select on a non-empty TextRange to select the range of the
       characters.
   <li>2. Cursor position, use an empty TextRange to place the cursor at the desired index.
 </ol>

 <pre class="prettyprint">
 var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
 shape.getText().setText("Hello");
 // Range selection: Select the text range "He".
 shape.getText().getRange(0, 2).select();
 // Cursor selection: Place the cursor after "H" like "H|ello".
 shape.getText().getRange(1, 1).select();
 </pre>
 *
 * @return void
 */
SlidesApp.TextRange.prototype.select = function(){};

/**
 * Sets the text bounded by this range of the associated shape or table cell. The text maintains
 the styling of the start of the existing text.
 *
 * @param {String} newText - The string to set as the new text.
 *
 * @return {SlidesApp.TextRange} the text range representing the set text
 */
SlidesApp.TextRange.prototype.setText = function(newText){};

/** @constructor */
SlidesApp.TextStyle = function(){};

/**
 * Returns the background color of the text, or <code>null</code> if there are multiple styles on the
 text.
 *
 * @return {SlidesApp.Color}
 */
SlidesApp.TextStyle.prototype.getBackgroundColor = function(){};

/**
 * Returns the vertical offset of text from its normal position, or <code>null</code> if there are
 multiple styles on the text.
 *
 * @return {SlidesApp.TextBaselineOffset}
 */
SlidesApp.TextStyle.prototype.getBaselineOffset = function(){};

/**
 * Returns the font family of the text, or <code>null</code> if there are multiple styles on the text.
 *
 * @return {String}
 */
SlidesApp.TextStyle.prototype.getFontFamily = function(){};

/**
 * Returns the font size of the text in points, or <code>null</code> if there are multiple styles on
 the text.
 *
 * @return {Number}
 */
SlidesApp.TextStyle.prototype.getFontSize = function(){};

/**
 * Returns the font weight of the text, or <code>null</code> if there are multiple styles on the text.

 <p>The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
 the numerical values described in the CSS 2.1 Specification, <a
 href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with
 non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
 which case <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()'>isBold()</a></code> returns <code>true</code>. The default value is 400
 ("normal").
 *
 * @return {number}
 */
SlidesApp.TextStyle.prototype.getFontWeight = function(){};

/**
 * Returns the foreground color of the text, or <code>null</code> if there are multiple styles on the
 text.
 *
 * @return {SlidesApp.Color}
 */
SlidesApp.TextStyle.prototype.getForegroundColor = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> on the text, or <code>null</code> if there is no link or if the link is on
 part of the text or if there are multiple links. Call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#hasLink()'>hasLink()</a></code> to determine whether
 the text has no link.

 <pre class="prettyprint"><code>
 var textLink = shape.getText().getTextStyle().getLink();
 if (textLink != null) {
   Logger.log(&#39;Shape text has a link of type: &#39; + textLink.getLinkType());
 }
 </code></pre>
 *
 * @return {SlidesApp.Link}
 */
SlidesApp.TextStyle.prototype.getLink = function(){};

/**
 * Returns <code>true</code> if there is link on the text, <code>false</code> if not, or <code>null</code> if the
 link is on part of the text or there are multiple links.

 <p>Links cannot be set on newline characters. Therefore, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> contains a
 newline character, this method always returns either <code>null</code> or <code>false</code>.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.hasLink = function(){};

/**
 * Returns <code>true</code> if the background of the text is transparent, <code>false</code> if not, or
 <code>null</code> if there are multiple styles on the text.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.isBackgroundTransparent = function(){};

/**
 * Returns <code>true</code> if the text is rendered as bold, <code>false</code> if not, or <code>null</code> if
 there are multiple styles on the text.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.isBold = function(){};

/**
 * Returns <code>true</code> if the text is italicized, <code>false</code> if not, or <code>null</code> if there
 are multiple styles on the text.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.isItalic = function(){};

/**
 * Returns <code>true</code> if the text is in small capital letters, <code>false</code> if not, or <code>null</code> if there are multiple styles on the text.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.isSmallCaps = function(){};

/**
 * Returns <code>true</code> if the text is struck through, <code>false</code> if not, or <code>null</code> if
 there are multiple styles on the text.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.isStrikethrough = function(){};

/**
 * Returns <code>true</code> if the text is underlined, <code>false</code> if not, or <code>null</code> if there
 are multiple styles on the text.
 *
 * @return {Boolean}
 */
SlidesApp.TextStyle.prototype.isUnderline = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.

 <p>Removing a link removes the hyperlink foreground color and underline style on the text. If
 possible, these styles are applied to match the text preceding the link.

 <pre class="prettyprint">
 text.getTextStyle().removeLink();
 </pre>
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.removeLink = function(){};

/**
 * Sets the background color of the text to the given RGB values from 0 to 255.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBackgroundColor = function(red, green, blue){};

/**
 * Sets the background color of the text.
 *
 * @param {SlidesApp.Color} color - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBackgroundColor = function(color){};

/**
 * Sets the background color of the text to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBackgroundColor = function(color){};

/**
 * Sets the background color of the text to the given hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexColor - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBackgroundColor = function(hexColor){};

/**
 * Sets the background color of the text to transparent.
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBackgroundColorTransparent = function(){};

/**
 * Sets the vertical offset of the text relative to its normal position.
 *
 * @param {SlidesApp.TextBaselineOffset} offset - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBaselineOffset = function(offset){};

/**
 * Sets whether the text should be rendered as bold.

 <p>Changing the text's boldness updates the font weight used to render the text.
 *
 * @param {Boolean} bold - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setBold = function(bold){};

/**
 * Sets the font family of the text .
 *
 * @param {String} fontFamily - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setFontFamily = function(fontFamily){};

/**
 * Sets the font family and weight of the text.

 <p>The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
 the numerical values described in the CSS 2.1 Specification, <a
 href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with
 non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
 which case <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()'>isBold()</a></code> returns <code>true</code>. The default value is 400
 ("normal").
 *
 * @param {String} fontFamily - 
 * @param {number} fontWeight - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setFontFamilyAndWeight = function(fontFamily, fontWeight){};

/**
 * Sets the font size of the text, in points.
 *
 * @param {Number} fontSize - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setFontSize = function(fontSize){};

/**
 * Sets the foreground color of the text to the given RGB values from 0 to 255.
 *
 * @param {number} red - 
 * @param {number} green - 
 * @param {number} blue - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setForegroundColor = function(red, green, blue){};

/**
 * Sets the foreground color of the text.
 *
 * @param {SlidesApp.Color} foregroundColor - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setForegroundColor = function(foregroundColor){};

/**
 * Sets the foreground color of the text to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
 *
 * @param {SlidesApp.ThemeColorType} color - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setForegroundColor = function(color){};

/**
 * Sets the foreground color of the text to the given hex color string.

 <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
 '#FFC0CB'.
 *
 * @param {String} hexColor - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setForegroundColor = function(hexColor){};

/**
 * Sets the whether the text is italicized.
 *
 * @param {Boolean} italic - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setItalic = function(italic){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.

 <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.

 <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 are ignored.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 text.getTextStyle().setLinkSlide(0);
 </pre>
 *
 * @param {number} slideIndex - The zero-based index to the slide.
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setLinkSlide = function(slideIndex){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.

 <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.

 <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 are ignored.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 var slide = presentation.getSlides()[0];
 text.getTextStyle().setLinkSlide(slide);
 </pre>
 *
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setLinkSlide = function(slide){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.

 <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.

 <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 are ignored.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 text.getTextStyle().setLinkSlide(SlidesApp.SlidePosition.FIRST_SLIDE);
 </pre>
 *
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setLinkSlide = function(slidePosition){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.

 <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.

 <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
 are ignored.

 <pre class="prettyprint">
 // Set a link to the URL.
 text.getTextStyle().setLinkUrl("https://slides.google.com");
 </pre>
 *
 * @param {String} url - The URL string.
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setLinkUrl = function(url){};

/**
 * Sets whether the text is rendered in small capital letters.
 *
 * @param {Boolean} smallCaps - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setSmallCaps = function(smallCaps){};

/**
 * Sets whether the text is struck through.
 *
 * @param {Boolean} strikethrough - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setStrikethrough = function(strikethrough){};

/**
 * Sets whether the text is underlined.
 *
 * @param {Boolean} underline - 
 *
 * @return {SlidesApp.TextStyle}
 */
SlidesApp.TextStyle.prototype.setUnderline = function(underline){};

/** @constructor */
SlidesApp.ThemeColor = function(){};

/**
 * Get the type of this color.
 *
 * @return {SlidesApp.ColorType}
 */
SlidesApp.ThemeColor.prototype.getColorType = function(){};

/**
 * Get the theme color type of this color.
 *
 * @return {SlidesApp.ThemeColorType}
 */
SlidesApp.ThemeColor.prototype.getThemeColorType = function(){};

/** @constructor */
SlidesApp.Video = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.Video.prototype.duplicate = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the video.
 *
 * @return {SlidesApp.Border}
 */
SlidesApp.Video.prototype.getBorder = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.Video.prototype.getDescription = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Video.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.Video.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Video.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Video.prototype.getLeft = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.Video.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.Video.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.Video.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.Video.prototype.getParentPage = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.Video.prototype.getRotation = function(){};

/**
 * Gets the video source.
 *
 * @return {SlidesApp.VideoSourceType}
 */
SlidesApp.Video.prototype.getSource = function(){};

/**
 * Gets an URL to the video thumbnail. This URL is tagged with the account of the requester.
 Anyone with the URL effectively accesses the thumbnail as the original requester. Access to the
 thumbnail may be lost if the presentation's sharing settings change. The URL expires after a
 short period of time.
 *
 * @return {String}
 */
SlidesApp.Video.prototype.getThumbnailUrl = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.Video.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.Video.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.Video.prototype.getTransform = function(){};

/**
 * Gets an URL to the video. The URL is valid as long as the source video exists and sharing
 settings do not change. Returns <code>null</code> when the video source is not supported.
 *
 * @return {String}
 */
SlidesApp.Video.prototype.getUrl = function(){};

/**
 * Gets the video source's unique identifier for this video.
 *
 * @return {String}
 */
SlidesApp.Video.prototype.getVideoId = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.Video.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.Video.prototype.remove = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.Video.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.Video.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.setLeft = function(left){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.Video}
 */
SlidesApp.Video.prototype.setWidth = function(width){};

/** @constructor */
SlidesApp.WordArt = function(){};

/**
 * Aligns the element to the specified alignment position on the page.
 *
 * @param {SlidesApp.AlignmentPosition} alignmentPosition - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.alignOnPage = function(alignmentPosition){};

/**
 * Duplicates the page element.

 <p>The duplicate page element is placed on the same page at the same position as the original.
 *
 * @return {SlidesApp.PageElement}
 */
SlidesApp.WordArt.prototype.duplicate = function(){};

/**
 * Gets the page element's description. The description is combined with the title to display and
 read alt text.
 *
 * @return {String} the page element's description.
 */
SlidesApp.WordArt.prototype.getDescription = function(){};

/**
 * Gets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.WordArt.prototype.getHeight = function(){};

/**
 * Gets the element's inherent height in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent height in points, or <code>null</code> if the page element does
     not have a height.
 */
SlidesApp.WordArt.prototype.getInherentHeight = function(){};

/**
 * Gets the element's inherent width in points.

 <p>The page element's transform is relative to its inherent size. Use the inherent size in
 conjunction with the element's transform to determine the element's final visual appearance.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.WordArt.prototype.getInherentWidth = function(){};

/**
 * Gets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.WordArt.prototype.getLeft = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.

 <pre class="prettyprint">
 var link = shape.getLink();
 if (link != null) {
   Logger.log('Shape has a link of type: ' + link.getLinkType());
 }
 </pre>
 *
 * @return {SlidesApp.Link}
 */
SlidesApp.WordArt.prototype.getLink = function(){};

/**
 * Gets the unique ID for this object. Object IDs used by pages and page elements share the same
 namespace.
 *
 * @return {String} the unique ID for this object.
 */
SlidesApp.WordArt.prototype.getObjectId = function(){};

/**
 * Gets the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
 *
 * @return {SlidesApp.PageElementType} the page element's type.
 */
SlidesApp.WordArt.prototype.getPageElementType = function(){};

/**
 * Gets the group this page element is in, or <code>null</code> if the element is not in a group.
 *
 * @return {SlidesApp.Group}
 */
SlidesApp.WordArt.prototype.getParentGroup = function(){};

/**
 * Gets the page this page element is on.
 *
 * @return {SlidesApp.Page}
 */
SlidesApp.WordArt.prototype.getParentPage = function(){};

/**
 * Gets the text that is rendered as word art
 *
 * @return {String}
 */
SlidesApp.WordArt.prototype.getRenderedText = function(){};

/**
 * Gets the element's clockwise rotation angle around its center in degrees, where 0 degrees means
 no rotation.
 *
 * @return {Number} the rotation angle in degrees between 0 (inclusive) and 360 (exclusive)
 */
SlidesApp.WordArt.prototype.getRotation = function(){};

/**
 * Gets the page element's title. The title is combined with the description to display and read
 alt text.
 *
 * @return {String} the page element's title.
 */
SlidesApp.WordArt.prototype.getTitle = function(){};

/**
 * Gets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @return {Number}
 */
SlidesApp.WordArt.prototype.getTop = function(){};

/**
 * Gets the page element's transform.

 <p>The visual appearance of the page element is determined by its absolute transform. To
 compute the absolute transform, preconcatenate a page element's transform with the transforms
 of all of its parent groups. If the page element is not in a group, its absolute transform is
 the same as the value in this field.
 *
 * @return {SlidesApp.AffineTransform} the page element's transform.
 */
SlidesApp.WordArt.prototype.getTransform = function(){};

/**
 * Gets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @return {Number} the page element's inherent width in points, or <code>null</code> if the page element does
     not have a width.
 */
SlidesApp.WordArt.prototype.getWidth = function(){};

/**
 * Preconcatenates the provided transform to the existing transform of the page element.

 <pre class="prettyprint">newTransform = argument * existingTransform</pre>

 <p>For example, to move a page elements 36 points to the left:

 <pre class="prettyprint"><code>
 element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
     .setTranslateX(-36.0)
     .build());
 </code></pre>

 <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.preconcatenateTransform = function(transform){};

/**
 * Removes the page element.

 <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
 group itself is also removed.

 <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
 are also removed.
 *
 * @return void
 */
SlidesApp.WordArt.prototype.remove = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.

 <pre class="prettyprint">
 shape.removeLink();
 </pre>
 *
 * @return void
 */
SlidesApp.WordArt.prototype.removeLink = function(){};

/**
 * Scales the element's height by the specified ratio. The element's height is the height of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.scaleHeight = function(ratio){};

/**
 * Scales the element's width by the specified ratio. The element's width is the width of its
 bounding box when the element has no rotation.
 *
 * @param {Number} ratio - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.scaleWidth = function(ratio){};

/**
 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
 selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 var pageElement = slide.getPageElements()[0];
 // Only select this page element and replace any previous selection.
 pageElement.select();
 </pre>
 *
 * @return void
 */
SlidesApp.WordArt.prototype.select = function(){};

/**
 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.

 <p>A script can only access the selection of the user who is running the script, and only if
 the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.

 <p>The <code>select(true)</code> selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and removes any previous
 selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.

 <p><code>select(false)</code> should be used to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.

 <p>The following conditions must be met while selecting a page element using <code>select(false)</code>: <br>
 1) The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> <br>
 2) There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected. <br>

 <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
 first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.

 <pre class="prettyprint">
 var slide = SlidesApp.getActivePresentation().getSlides()[0];
 // First select the slide page, as the current page selection.
 slide.selectAsCurrentPage();
 // Then select all the page elements in the selected slide page.
 var pageElements = slide.getPageElements();
 for (var i = 0; i < pageElements.length; i++) {
   pageElements[i].select(false);
 }
 </pre>
 *
 * @param {Boolean} replace - if <code>true</code>, the selection replaces any previous selection, otherwise the
     selection is added to any previous selection.
 *
 * @return void
 */
SlidesApp.WordArt.prototype.select = function(replace){};

/**
 * Sets the element's height in points, which is the height of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} height - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.setHeight = function(height){};

/**
 * Sets the element's horizontal position in points, measured from the upper left corner of the
 page when the element has no rotation.
 *
 * @param {Number} left - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.setLeft = function(left){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(0);
 </pre>
 *
 * @param {number} slideIndex - The zero-based index to the slide.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.WordArt.prototype.setLinkSlide = function(slideIndex){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 var slide = presentation.getSlides()[0];
 shape.setLinkSlide(slide);
 </pre>
 *
 * @param {SlidesApp.Slide} slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.WordArt.prototype.setLinkSlide = function(slide){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.

 <pre class="prettyprint">
 // Set a link to the first slide of the presentation.
 shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
 </pre>
 *
 * @param {SlidesApp.SlidePosition} slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.WordArt.prototype.setLinkSlide = function(slidePosition){};

/**
 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.

 <pre class="prettyprint">
 // Set a link to the URL.
 shape.setLinkUrl("https://slides.google.com");
 </pre>
 *
 * @param {String} url - The URL string.
 *
 * @return {SlidesApp.Link} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
 */
SlidesApp.WordArt.prototype.setLinkUrl = function(url){};

/**
 * Sets the element's clockwise rotation angle around its center in degrees.
 *
 * @param {Number} angle - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.setRotation = function(angle){};

/**
 * Sets the element's vertical position in points, measured from the upper left corner of the page
 when the element has no rotation.
 *
 * @param {Number} top - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.setTop = function(top){};

/**
 * Sets the transform of the page element with the provided transform.

 <p>Updating the transform of a group changes the absolute transform of the page elements in
 that group, which can change their visual appearance.

 <p>Updating the transform of a page element that is in a group only changes the transform of
 that page element; it doesn't affect the transforms of the group or other page elements in the
 group.

 <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#getTransform()'>getTransform()</a></code>.
 *
 * @param {SlidesApp.AffineTransform} transform - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.setTransform = function(transform){};

/**
 * Sets the element's width in points, which is the width of the element's bounding box when the
 element has no rotation.
 *
 * @param {Number} width - 
 *
 * @return {SlidesApp.WordArt}
 */
SlidesApp.WordArt.prototype.setWidth = function(width){};

