var DocumentApp = {};


/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/attribute.html'>Attribute</a></code> enumeration.

 */
DocumentApp.Attribute = function(){};

/**
 * The background color of an element (Paragraph, Table, etc) or document.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.BACKGROUND_COLOR = {};

/**
 * The font weight setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.BOLD = {};

/**
 * The border color, for table elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.BORDER_COLOR = {};

/**
 * The border width in points, for table elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.BORDER_WIDTH = {};

/**
 * The code contents, for equation elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.CODE = {};

/**
 * The font family setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.FONT_FAMILY = {};

/**
 * The font size setting in points, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.FONT_SIZE = {};

/**
 * The foreground color setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.FOREGROUND_COLOR = {};

/**
 * The glyph type, for list item elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.GLYPH_TYPE = {};

/**
 * The heading type, for paragraph elements (for example,
 <code>DocumentApp.ParagraphHeading.HEADING1</code>).
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.HEADING = {};

/**
 * The height setting, for image elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.HEIGHT = {};

/**
 * The horizontal alignment, for paragraph elements (for example,
 <code>DocumentApp.HorizontalAlignment.CENTER</code>).
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.HORIZONTAL_ALIGNMENT = {};

/**
 * The end indentation setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.INDENT_END = {};

/**
 * The first line indentation setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.INDENT_FIRST_LINE = {};

/**
 * The start indentation setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.INDENT_START = {};

/**
 * The font style setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.ITALIC = {};

/**
 * The text direction setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.LEFT_TO_RIGHT = {};

/**
 * The line spacing setting as a multiplier, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.LINE_SPACING = {};

/**
 * The link URL, for rich text. The default link style (foreground color, underline) is
 automatically applied.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.LINK_URL = {};

/**
 * The ID of the encompassing list, for list item elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.LIST_ID = {};

/**
 * The bottom margin setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.MARGIN_BOTTOM = {};

/**
 * The left margin setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.MARGIN_LEFT = {};

/**
 * The right margin setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.MARGIN_RIGHT = {};

/**
 * The top margin setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.MARGIN_TOP = {};

/**
 * The minimum height setting in points, for table row elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.MINIMUM_HEIGHT = {};

/**
 * The item nesting level, for list item elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.NESTING_LEVEL = {};

/**
 * The bottom padding setting in points, for table cell elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.PADDING_BOTTOM = {};

/**
 * The left padding setting in points, for table cell elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.PADDING_LEFT = {};

/**
 * The right padding setting in points, for table cell elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.PADDING_RIGHT = {};

/**
 * The top padding setting in points, for table cell elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.PADDING_TOP = {};

/**
 * The page height setting in points, for documents.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.PAGE_HEIGHT = {};

/**
 * The page width setting in points, for documents.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.PAGE_WIDTH = {};

/**
 * The bottom spacing setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.SPACING_AFTER = {};

/**
 * The top spacing setting in points, for paragraph elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.SPACING_BEFORE = {};

/**
 * The strike-through setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.STRIKETHROUGH = {};

/**
 * The underline setting, for rich text.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.UNDERLINE = {};

/**
 * The vertical alignment setting, for table cell elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.VERTICAL_ALIGNMENT = {};

/**
 * The width setting, for table cell and image elements.
 *
 * @type {{}}
 */
DocumentApp.Attribute.prototype.WIDTH = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> enumeration.

 */
DocumentApp.ElementType = function(){};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.BODY_SECTION = {};

/**
 * The type corresponding to the
 <code><s>CommentSection</s></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.COMMENT_SECTION = {};

/**
 * The type that corresponds to the root of the document.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.DOCUMENT = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.EQUATION = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function.html'>EquationFunction</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.EQUATION_FUNCTION = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html'>EquationFunctionArgumentSeparator</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.EQUATION_FUNCTION_ARGUMENT_SEPARATOR = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-symbol.html'>EquationSymbol</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.EQUATION_SYMBOL = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.FOOTER_SECTION = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.FOOTNOTE = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.FOOTNOTE_SECTION = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.HEADER_SECTION = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.HORIZONTAL_RULE = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-drawing.html'>InlineDrawing</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.INLINE_DRAWING = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.INLINE_IMAGE = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.LIST_ITEM = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.PAGE_BREAK = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.PARAGRAPH = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.TABLE = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.TABLE_CELL = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.TABLE_OF_CONTENTS = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>
 element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.TABLE_ROW = {};

/**
 * The type corresponding to the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.TEXT = {};

/**
 * The type corresponding to
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/unsupported-element.html'>UnsupportedElement</a></code>.
 Unsupported elements represent document portions that do not support
 scripting.
 *
 * @type {{}}
 */
DocumentApp.ElementType.prototype.UNSUPPORTED = {};

/**
 * The <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enumeration.

 */
DocumentApp.FontFamily = function(){};

/**
 * The Amaranth font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.AMARANTH = {};

/**
 * The Arial font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.ARIAL = {};

/**
 * The Arial Black font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.ARIAL_BLACK = {};

/**
 * The Arial Narrow font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.ARIAL_NARROW = {};

/**
 * The Arvo font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.ARVO = {};

/**
 * The Calibri font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.CALIBRI = {};

/**
 * The Cambria font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.CAMBRIA = {};

/**
 * The Comic Sans MS font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.COMIC_SANS_MS = {};

/**
 * The Consolas font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.CONSOLAS = {};

/**
 * The Corsiva font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.CORSIVA = {};

/**
 * The Courier New font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.COURIER_NEW = {};

/**
 * The Dancing Script font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.DANCING_SCRIPT = {};

/**
 * The Droid Sans font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.DROID_SANS = {};

/**
 * The Droid Serif font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.DROID_SERIF = {};

/**
 * The Garamond font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.GARAMOND = {};

/**
 * The Georgia font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.GEORGIA = {};

/**
 * The Gloria Hallelujah font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.GLORIA_HALLELUJAH = {};

/**
 * The Great Vibes font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.GREAT_VIBES = {};

/**
 * The Lobster font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.LOBSTER = {};

/**
 * The Merriweather font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.MERRIWEATHER = {};

/**
 * The Pacifico font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.PACIFICO = {};

/**
 * The Philosopher font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.PHILOSOPHER = {};

/**
 * The Poiret One font family
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.POIRET_ONE = {};

/**
 * The Quattrocento font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.QUATTROCENTO = {};

/**
 * The Roboto font family
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.ROBOTO = {};

/**
 * The Shadows Into Light font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.SHADOWS_INTO_LIGHT = {};

/**
 * The Syncopate font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.SYNCOPATE = {};

/**
 * The Tahoma font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.TAHOMA = {};

/**
 * The Times New Roman font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.TIMES_NEW_ROMAN = {};

/**
 * The Trebuchet MS font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.TREBUCHET_MS = {};

/**
 * The Ubuntu font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.UBUNTU = {};

/**
 * The Verdana font family.
 *
 * @type {{}}
 */
DocumentApp.FontFamily.prototype.VERDANA = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code> enumeration.

 */
DocumentApp.GlyphType = function(){};

/**
 * The default bullet, circular and filled.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.BULLET = {};

/**
 * A hollow bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.HOLLOW_BULLET = {};

/**
 * A latin, lowercase bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.LATIN_LOWER = {};

/**
 * A latin, uppercase bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.LATIN_UPPER = {};

/**
 * A number based bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.NUMBER = {};

/**
 * A roman numeral, lowercase bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.ROMAN_LOWER = {};

/**
 * A roman numeral, uppercase bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.ROMAN_UPPER = {};

/**
 * A square bullet.
 *
 * @type {{}}
 */
DocumentApp.GlyphType.prototype.SQUARE_BULLET = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code> enumeration.

 */
DocumentApp.HorizontalAlignment = function(){};

/**
 * The center-alignment option.
 *
 * @type {{}}
 */
DocumentApp.HorizontalAlignment.prototype.CENTER = {};

/**
 * The justify-alignment option.
 *
 * @type {{}}
 */
DocumentApp.HorizontalAlignment.prototype.JUSTIFY = {};

/**
 * The left-alignment option.
 *
 * @type {{}}
 */
DocumentApp.HorizontalAlignment.prototype.LEFT = {};

/**
 * The right-alignment option.
 *
 * @type {{}}
 */
DocumentApp.HorizontalAlignment.prototype.RIGHT = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code> enumeration.

 */
DocumentApp.ParagraphHeading = function(){};

/**
 * The highest heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.HEADING1 = {};

/**
 * The second heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.HEADING2 = {};

/**
 * The third heading option
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.HEADING3 = {};

/**
 * The fourth heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.HEADING4 = {};

/**
 * The fifth heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.HEADING5 = {};

/**
 * The lowest heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.HEADING6 = {};

/**
 * The heading option for normal text.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.NORMAL = {};

/**
 * The subtitle heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.SUBTITLE = {};

/**
 * The title heading option.
 *
 * @type {{}}
 */
DocumentApp.ParagraphHeading.prototype.TITLE = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-layout.html'>PositionedLayout</a></code> enumeration.

 */
DocumentApp.PositionedLayout = function(){};

/**
 * The image is positioned above the text.
 *
 * @type {{}}
 */
DocumentApp.PositionedLayout.prototype.ABOVE_TEXT = {};

/**
 * The image breaks the text on the left and right.
 *
 * @type {{}}
 */
DocumentApp.PositionedLayout.prototype.BREAK_BOTH = {};

/**
 * The image breaks the text on the left.
 *
 * @type {{}}
 */
DocumentApp.PositionedLayout.prototype.BREAK_LEFT = {};

/**
 * The image breaks the text on the right.
 *
 * @type {{}}
 */
DocumentApp.PositionedLayout.prototype.BREAK_RIGHT = {};

/**
 * The image is wrapped by text.
 *
 * @type {{}}
 */
DocumentApp.PositionedLayout.prototype.WRAP_TEXT = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text-alignment.html'>TextAlignment</a></code> enumeration.

 */
DocumentApp.TextAlignment = function(){};

/**
 * The normal text alignment.
 *
 * @type {{}}
 */
DocumentApp.TextAlignment.prototype.NORMAL = {};

/**
 * The subscript text alignment.
 *
 * @type {{}}
 */
DocumentApp.TextAlignment.prototype.SUBSCRIPT = {};

/**
 * The superscript text alignment.
 *
 * @type {{}}
 */
DocumentApp.TextAlignment.prototype.SUPERSCRIPT = {};

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/vertical-alignment.html'>VerticalAlignment</a></code> enumeration.

 */
DocumentApp.VerticalAlignment = function(){};

/**
 * The bottom-alignment option.
 *
 * @type {{}}
 */
DocumentApp.VerticalAlignment.prototype.BOTTOM = {};

/**
 * The center-alignment option.
 *
 * @type {{}}
 */
DocumentApp.VerticalAlignment.prototype.CENTER = {};

/**
 * The top-alignment option.
 *
 * @type {{}}
 */
DocumentApp.VerticalAlignment.prototype.TOP = {};

/**
 * Creates and returns a new document.

 <pre class="prettyprint">
 // Create and open a new document.
 var doc = DocumentApp.create('Document Name');
 </pre>
 *
 * @param {String} name - the new document's name
 *
 * @return {DocumentApp.Document} the new document instance
 */
DocumentApp.create = function(name){};

/**
 * Returns the document to which the script is
 <a href="/apps-script/scripts_containers">container-bound</a>. To interact with document to
 which the script is not container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#openById(String)'>openById(id)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#openByUrl(String)'>openByUrl(url)</a></code> instead.

 <pre class="prettyprint">
 // Get the document to which this script is bound.
 var doc = DocumentApp.getActiveDocument();
 </pre>
 *
 * @return {DocumentApp.Document} the document instance
 */
DocumentApp.getActiveDocument = function(){};

/**
 * Returns an instance of the document's user-interface environment that allows the script to add
 features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 current instance of an open document, and only if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the document. For more information, see
 the guides to <a href="/apps-script/guides/menus">menus</a> and
 <a href="/apps-script/guides/dialogs">dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Add a custom menu to the active document, including a separator and a sub-menu.
 function onOpen(e) {
   DocumentApp.getUi()
       .createMenu('My Menu')
       .addItem('My menu item', 'myFunction')
       .addSeparator()
       .addSubMenu(DocumentApp.getUi().createMenu('My sub-menu')
           .addItem('One sub-menu item', 'mySecondFunction')
           .addItem('Another sub-menu item', 'myThirdFunction'))
       .addToUi();
 }
 </pre>
 *
 * @return {Ui} an instance of this document's user-interface environment
 */
DocumentApp.getUi = function(){};

/**
 * Returns the document with the specified ID. If the script is container-bound to the document,
 use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()'>getActiveDocument()</a></code> instead.

 <pre class="prettyprint">
 // Open a document by ID.
 var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
 </pre>
 *
 * @param {String} id - the ID of the document to open
 *
 * @return {DocumentApp.Document} the document instance
 */
DocumentApp.openById = function(id){};

/**
 * Opens and returns the document with the specified URL. If the script is container-bound to the
 document, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()'>getActiveDocument()</a></code> instead.

 <pre class="prettyprint">
 // Open a document by URL.
 var doc = DocumentApp.openByUrl(
     'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit');
 </pre>
 *
 * @param {String} url - the URL of the document to open
 *
 * @return {DocumentApp.Document} the document instance
 */
DocumentApp.openByUrl = function(url){};

/** @constructor */
DocumentApp.Body = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.Body.prototype.appendHorizontalRule = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified
 image blob.

 <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the appended image
 */
DocumentApp.Body.prototype.appendImage = function(image){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.

 <p>Use this version of <code>appendListItem</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 *
 * @param {DocumentApp.ListItem} listItem - the list item to append
 *
 * @return {DocumentApp.ListItem} the appended list item
 */
DocumentApp.Body.prototype.appendListItem = function(listItem){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @return {DocumentApp.PageBreak} the new page break
 */
DocumentApp.Body.prototype.appendPageBreak = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.

 <p>Use this version of <code>appendParagraph</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 *
 * @return {DocumentApp.Paragraph} the appended paragraph
 */
DocumentApp.Body.prototype.appendParagraph = function(paragraph){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>This method will also append an empty paragraph after the table,
 since Google Docs documents cannot end with a table.
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.Body.prototype.appendTable = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>Use this version of <code>appendTable</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>. This method will also append an empty paragraph
 after the table, since Google Docs documents cannot end with a table.
 *
 * @param {DocumentApp.Table} table - the table to append
 *
 * @return {DocumentApp.Table} the appended table
 */
DocumentApp.Body.prototype.appendTable = function(table){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Body} the new copy
 */
DocumentApp.Body.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.Body.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.Body.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.Body.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Body.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.Body.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.Body.prototype.getChildIndex = function(child){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 *
 * @return {DocumentApp.Footnote[]} the section footnotes
 */
DocumentApp.Body.prototype.getFootnotes = function(){};

/**
 * Retrieves the set of attributes for the provided <code>ParagraphHeading</code>.
 *
 * @param {DocumentApp.ParagraphHeading} paragraphHeading - the heading whose attributes will be retrieved
 *
 * @return {Object} a map of the attributes and their current values
 */
DocumentApp.Body.prototype.getHeadingAttributes = function(paragraphHeading){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
 *
 * @return {DocumentApp.InlineImage[]} the section images
 */
DocumentApp.Body.prototype.getImages = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Body.prototype.getLinkUrl = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
 *
 * @return {DocumentApp.ListItem[]} the section list items
 */
DocumentApp.Body.prototype.getListItems = function(){};

/**
 * Retrieves the bottom margin, in points.
 *
 * @return {Number} the bottom margin, in points
 */
DocumentApp.Body.prototype.getMarginBottom = function(){};

/**
 * Retrieves the left margin, in points.
 *
 * @return {Number} the left margin, in points
 */
DocumentApp.Body.prototype.getMarginLeft = function(){};

/**
 * Retrieves the right margin.
 *
 * @return {Number} the right margin, in points
 */
DocumentApp.Body.prototype.getMarginRight = function(){};

/**
 * Retrieves the top margin.
 *
 * @return {Number} the top margin, in points
 */
DocumentApp.Body.prototype.getMarginTop = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Body.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.Body.prototype.getNumChildren = function(){};

/**
 * Retrieves the page height, in points.
 *
 * @return {Number} the page height, in points
 */
DocumentApp.Body.prototype.getPageHeight = function(){};

/**
 * Retrieves the page width, in points.
 *
 * @return {Number} the page width, in points
 */
DocumentApp.Body.prototype.getPageWidth = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 *
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */
DocumentApp.Body.prototype.getParagraphs = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Body.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Body.prototype.getPreviousSibling = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
 *
 * @return {DocumentApp.Table[]} the section tables
 */
DocumentApp.Body.prototype.getTables = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.Body.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.Body.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Body.prototype.getType = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.Body.prototype.insertHorizontalRule = function(childIndex){};

/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob,
 at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the inserted inline image
 */
DocumentApp.Body.prototype.insertImage = function(childIndex, image){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 *
 * @return {DocumentApp.ListItem} the inserted list item
 */
DocumentApp.Body.prototype.insertListItem = function(childIndex, listItem){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.PageBreak} the new page break
 */
DocumentApp.Body.prototype.insertPageBreak = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 *
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */
DocumentApp.Body.prototype.insertParagraph = function(childIndex, paragraph){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.Body.prototype.insertTable = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Table} table - the table to insert
 *
 * @return {DocumentApp.Table} the inserted table
 */
DocumentApp.Body.prototype.insertTable = function(childIndex, table){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Body.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.removeChild = function(child){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.Body.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setAttributes = function(attributes){};

/**
 * Sets the attributes for the provided <code>ParagraphHeading</code>.
 *
 * @param {DocumentApp.ParagraphHeading} paragraphHeading - the heading whose attributes will be set
 * @param {Object} attributes - a map of attributes and the values to set them to
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setHeadingAttributes = function(paragraphHeading, attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setLinkUrl = function(url){};

/**
 * Sets the bottom margin, in points.
 *
 * @param {Number} marginBottom - the bottom margin, in points
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setMarginBottom = function(marginBottom){};

/**
 * Sets the left margin, in points.
 *
 * @param {Number} marginLeft - the left margin, in points
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setMarginLeft = function(marginLeft){};

/**
 * Sets the right margin, in points.
 *
 * @param {Number} marginRight - the right margin
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setMarginRight = function(marginRight){};

/**
 * Sets the top margin.
 *
 * @param {Number} marginTop - the top margin, in points
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setMarginTop = function(marginTop){};

/**
 * Sets the page height, in points.
 *
 * @param {Number} pageHeight - the page height, in points
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setPageHeight = function(pageHeight){};

/**
 * Sets the page width, in points.
 *
 * @param {Number} pageWidth - the page width, in points
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setPageWidth = function(pageWidth){};

/**
 * Sets the contents as plain text.

 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Body.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.Bookmark = function(){};

/**
 * Gets the ID of the <code>Bookmark</code>. The ID is unique within the document.
 *
 * @return {String} the <code>Bookmark</code>'s ID, which is unique within the document
 */
DocumentApp.Bookmark.prototype.getId = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code> of the <code>Bookmark</code> within the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. The
 <code>Position</code> remains accurate so long as the <code>Bookmark</code> is not deleted, even if the
 script changes the document structure.
 *
 * @return {DocumentApp.Position} the position of the <code>Bookmark</code>
 */
DocumentApp.Bookmark.prototype.getPosition = function(){};

/**
 * Deletes the <code>Bookmark</code>. Calling this method on a <code>Bookmark</code> that has already been
 deleted has no effect.
 *
 * @return void
 */
DocumentApp.Bookmark.prototype.remove = function(){};

/** @constructor */
DocumentApp.ContainerElement = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.ContainerElement.prototype.asBody = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Equation} the current element
 */
DocumentApp.ContainerElement.prototype.asEquation = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.ContainerElement.prototype.asFooterSection = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.ContainerElement.prototype.asFootnoteSection = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.ContainerElement.prototype.asHeaderSection = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ContainerElement.prototype.asListItem = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.ContainerElement.prototype.asParagraph = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.ContainerElement.prototype.asTable = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.ContainerElement.prototype.asTableCell = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.TableOfContents} the current element
 */
DocumentApp.ContainerElement.prototype.asTableOfContents = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.ContainerElement.prototype.asTableRow = function(){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.ContainerElement} the current element
 */
DocumentApp.ContainerElement.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.ContainerElement} the new copy
 */
DocumentApp.ContainerElement.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.ContainerElement.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.ContainerElement.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.ContainerElement.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.ContainerElement.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.ContainerElement.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.ContainerElement.prototype.getChildIndex = function(child){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.ContainerElement.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.ContainerElement.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.ContainerElement.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.ContainerElement.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.ContainerElement.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.ContainerElement.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.ContainerElement.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.ContainerElement.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.ContainerElement.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.ContainerElement} the merged element
 */
DocumentApp.ContainerElement.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.ContainerElement} the removed element
 */
DocumentApp.ContainerElement.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.ContainerElement.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.ContainerElement} the current element
 */
DocumentApp.ContainerElement.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.ContainerElement} the current element
 */
DocumentApp.ContainerElement.prototype.setLinkUrl = function(url){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.ContainerElement} the current element
 */
DocumentApp.ContainerElement.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.Document = function(){};

/**
 * Adds a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> at the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>.
 *
 * @param {DocumentApp.Position} position - the position of the new bookmark
 *
 * @return {DocumentApp.Bookmark} the new bookmark
 */
DocumentApp.Document.prototype.addBookmark = function(position){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DocumentApp.Document} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining
 */
DocumentApp.Document.prototype.addEditor = function(emailAddress){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DocumentApp.Document} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining
 */
DocumentApp.Document.prototype.addEditors = function(emailAddresses){};

/**
 * Adds a document footer section, if none exists.
 *
 * @return {DocumentApp.FooterSection} the document footer
 */
DocumentApp.Document.prototype.addFooter = function(){};

/**
 * Adds a document header section, if none exists.
 *
 * @return {DocumentApp.HeaderSection} the document header
 */
DocumentApp.Document.prototype.addHeader = function(){};

/**
 * Adds a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code>, which is a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code> that has a name and ID to allow
 later retrieval. Names are not necessarily unique; several different ranges in the same
 document may share the same name, much like a class in HTML. By contrast, IDs are unique within
 the document, like an ID in HTML. Once a <code>NamedRange</code> has been added to a document, it
 cannot be modified, only removed.

 <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
 unintended conflicts between scripts, consider prefixing range names with a unique string.</p>

 <pre class="prettyprint"><code>
 // Change the user&#39;s selection to a range that includes every table in the document.
 var doc = DocumentApp.getActiveDocument();
 var rangeBuilder = doc.newRange();
 var tables = doc.getBody().getTables();
 for (var i = 0; i &lt; tables.length; i++) {
   rangeBuilder.addElement(tables[i]);
 }
 doc.setSelection(rangeBuilder.build());
 </code></pre>
 *
 * @param {String} name - the name for the range, which does not need to be unique; range names must be at
     least 1 character, and no more than 256 characters
 * @param {DocumentApp.Range} range - the range of elements to associate with the name; the range can be
     <a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#getSelection()'>the active selection</a>, a
     <a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html#findText(String)'>search result</a>, or manually constructed
     with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#newRange()'>newRange()</a></code>
 *
 * @return {DocumentApp.NamedRange} the new <code>NamedRange</code>
 */
DocumentApp.Document.prototype.addNamedRange = function(name, range){};

/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
 on the list of editors, this method has no effect.
 *
 * @param {String} emailAddress - the email address of the user to add
 *
 * @return {DocumentApp.Document} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining
 */
DocumentApp.Document.prototype.addViewer = function(emailAddress){};

/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If any of the
 users were already on the list of editors, this method has no effect for them.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {DocumentApp.Document} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining
 */
DocumentApp.Document.prototype.addViewers = function(emailAddresses){};

/**
 * Retrieves the current <code>Document</code> contents as a blob of the specified
 type.
 *
 * @param {String} contentType - the MIME type to convert to; currently only <code>&#39;application/pdf&#39;</code> is
     supported
 *
 * @return {Blob} the current document as a blob
 */
DocumentApp.Document.prototype.getAs = function(contentType){};

/**
 * Retrieves the current <code>Document</code> contents as a blob.
 *
 * @return {Blob} the current document as a blob
 */
DocumentApp.Document.prototype.getBlob = function(){};

/**
 * Retrieves the active document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.

 <p>Documents may contain different types of sections (e.g.
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>). The active section for a
 document is the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.

 <p>Element methods in <code>Document</code> delegate to the active
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
 *
 * @return {DocumentApp.Body} the active document body section
 */
DocumentApp.Document.prototype.getBody = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> with the given ID. This method returns <code>null</code> if no such
 <code>Bookmark</code> exists.
 *
 * @param {String} id - the ID for the <code>Bookmark</code>
 *
 * @return {DocumentApp.Bookmark} the <code>Bookmark</code> with the given ID, or <code>null</code> if no such <code>Bookmark</code>
     exists
 */
DocumentApp.Document.prototype.getBookmark = function(id){};

/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> objects in the document.
 *
 * @return {DocumentApp.Bookmark[]} an array of the <code>Bookmark</code> objects in the document
 */
DocumentApp.Document.prototype.getBookmarks = function(){};

/**
 * Gets the user's cursor in the active document. A script can only access the cursor of the user
 who is running the script, and only if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the document.

 <pre class="prettyprint">
 // Insert some text at the cursor position and make it bold.
 var cursor = DocumentApp.getActiveDocument().getCursor();
 if (cursor) {
   // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
   // containing element doesn't allow insertions, so show the user an error message.
   var element = cursor.insertText('???');
   if (element) {
     element.setBold(true);
   } else {
     DocumentApp.getUi().alert('Cannot insert text here.');
   }
 } else {
   DocumentApp.getUi().alert('Cannot find a cursor.');
 }
 </pre>
 *
 * @return {DocumentApp.Position} a representation of the user's cursor, or <code>null</code> if the user does not have a
     cursor placed in the document or if the script is not bound to the document
 */
DocumentApp.Document.prototype.getCursor = function(){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user who executes the script does
 not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with edit permission
 */
DocumentApp.Document.prototype.getEditors = function(){};

/**
 * Retrieves the document's footer section, if one exists.
 *
 * @return {DocumentApp.FooterSection} the document footer
 */
DocumentApp.Document.prototype.getFooter = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code> elements in the document body.

 <p>Calls to <code>getFootnotes</code> cause an iteration over the document's
 elements. For large documents, avoid unnecessary calls to this method.
 *
 * @return {DocumentApp.Footnote[]} the document footnotes
 */
DocumentApp.Document.prototype.getFootnotes = function(){};

/**
 * Retrieves the document's header section, if one exists.
 *
 * @return {DocumentApp.HeaderSection} the document header
 */
DocumentApp.Document.prototype.getHeader = function(){};

/**
 * Retrieves the document's unique identifier. The document ID is used
 with <code>DocumentApp.openById()</code> to open a specific document instance.
 *
 * @return {String} the document's ID
 */
DocumentApp.Document.prototype.getId = function(){};

/**
 * Retrieves the title of the document.
 *
 * @return {String} the document title
 */
DocumentApp.Document.prototype.getName = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> with the given ID. This method returns <code>null</code> if no such
 <code>NamedRange</code> exists. Names are not necessarily unique; several different ranges in the
 same document may share the same name, much like a class in HTML. By contrast, IDs are unique
 within the document, like an ID in HTML.
 *
 * @param {String} id - the range's ID, which is unique within the document
 *
 * @return {DocumentApp.NamedRange} the <code>NamedRange</code> with the given ID, or <code>null</code> if no such range exists
 */
DocumentApp.Document.prototype.getNamedRangeById = function(id){};

/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> objects in the document.

 <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
 unintended conflicts between scripts, consider prefixing range names with a unique string.</p>
 *
 * @return {DocumentApp.NamedRange[]} an array of the <code>NamedRange</code> objects in the document, possibly including multiple
     ranges with the same name
 */
DocumentApp.Document.prototype.getNamedRanges = function(){};

/**
 * Gets the user's selection in the active document. A script can only access the selection of the
 user who is running the script, and only if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the document.

 <pre class="prettyprint">
 // Display a dialog box that tells the user how many elements are included in the selection.
 var selection = DocumentApp.getActiveDocument().getSelection();
 if (selection) {
   var elements = selection.getRangeElements();
   DocumentApp.getUi().alert('Number of selected elements: ' + elements.length);
 } else {
   DocumentApp.getUi().alert('Nothing is selected.');
 }
 </pre>
 *
 * @return {DocumentApp.Range} a representation of the user's selection, or <code>null</code> if the user does not have
     anything selected in the document or if the script is not bound to the document
 */
DocumentApp.Document.prototype.getSelection = function(){};

/**
 * Retrieves the URL to access the current document.

 <pre class="prettyprint">
 <code>
 var doc = DocumentApp.getActiveDocument();

 // Send out the link to open the document.
 MailApp.sendEmail(&quot;&lt;email-address&gt;&quot;, doc.getName(), doc.getUrl());
 </code></pre>
 *
 * @return {String} the URL to access the current document
 */
DocumentApp.Document.prototype.getUrl = function(){};

/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.  If the user who executes
 the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with view or comment permission
 */
DocumentApp.Document.prototype.getViewers = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>, which is a reference to a location in the document,
 relative to a specific element. The user's cursor is represented as a <code>Position</code>, among
 other uses.

 <pre class="prettyprint"><code>
 // Append a paragraph, then place the user&#39;s cursor after the first word of the new paragraph.
 var doc = DocumentApp.getActiveDocument();
 var paragraph = doc.getBody().appendParagraph(&#39;My new paragraph.&#39;);
 var position = doc.newPosition(paragraph.getChild(0), 2);
 doc.setCursor(position);
 </code></pre>
 *
 * @param {DocumentApp.Element} element - the element that will contain the new <code>Position</code>; this must be either a
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element or a container element like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>
 * @param {number} offset - for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the number of characters before the <code>Position</code>;
     for other elements, the number of child elements before the <code>Position</code> within the
     same container element
 *
 * @return {DocumentApp.Position} the new <code>Position</code>
 */
DocumentApp.Document.prototype.newPosition = function(element, offset){};

/**
 * Creates a builder used to construct <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code> objects from document elements.

 <pre class="prettyprint"><code>
 // Change the user&#39;s selection to a range that includes every table in the document.
 var doc = DocumentApp.getActiveDocument();
 var rangeBuilder = doc.newRange();
 var tables = doc.getBody().getTables();
 for (var i = 0; i &lt; tables.length; i++) {
   rangeBuilder.addElement(tables[i]);
 }
 doc.setSelection(rangeBuilder.build());
 </code></pre>
 *
 * @return {DocumentApp.RangeBuilder} the new builder
 */
DocumentApp.Document.prototype.newRange = function(){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have
 general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DocumentApp.Document} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining
 */
DocumentApp.Document.prototype.removeEditor = function(emailAddress){};

/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.  This
 method has no effect if the user is an editor, not a viewer or commenter. This method also does
 not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who
 have general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire
 domain.
 *
 * @param {String} emailAddress - the email address of the user to remove
 *
 * @return {DocumentApp.Document} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> for chaining
 */
DocumentApp.Document.prototype.removeViewer = function(emailAddress){};

/**
 * Saves the current <code>Document</code>. Causes pending updates to be flushed
 and applied.

 <p>The <code>saveAndClose()</code> method is automatically invoked at the end
 of script execution, for each open <code>Document</code>.

 <p>A closed <code>Document</code> cannot be edited. Use
 <code>DocumentApp.openById()</code> to reopen a given document for editing.
 *
 * @return void
 */
DocumentApp.Document.prototype.saveAndClose = function(){};

/**
 * Sets the user's cursor in the active document, given a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>. A script can only
 access the cursor of the user who is running the script, and only if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the document.

 <pre class="prettyprint"><code>
 // Append a paragraph, then place the user&#39;s cursor after the first word of the new paragraph.
 var doc = DocumentApp.getActiveDocument();
 var paragraph = doc.getBody().appendParagraph(&#39;My new paragraph.&#39;);
 var position = doc.newPosition(paragraph.getChild(0), 2);
 doc.setCursor(position);
 </code></pre>
 *
 * @param {DocumentApp.Position} position - the new cursor location
 *
 * @return {DocumentApp.Document} this <code>Document</code>, for chaining
 */
DocumentApp.Document.prototype.setCursor = function(position){};

/**
 * Sets the document title.
 *
 * @param {String} name - the new document title
 *
 * @return {DocumentApp.Document} the current document
 */
DocumentApp.Document.prototype.setName = function(name){};

/**
 * Sets the user's selection in the active document, given a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code>. A script can
 only access the selection of the user who is running the script, and only if the script is
 <a href="/apps-script/scripts_containers">bound</a> to the document.

 <pre class="prettyprint"><code>
 // Change the user&#39;s selection to a range that includes every table in the document.
 var doc = DocumentApp.getActiveDocument();
 var rangeBuilder = doc.newRange();
 var tables = doc.getBody().getTables();
 for (var i = 0; i &lt; tables.length; i++) {
   rangeBuilder.addElement(tables[i]);
 }
 doc.setSelection(rangeBuilder.build());
 </code></pre>
 *
 * @param {DocumentApp.Range} range - the new range of elements to select
 *
 * @return {DocumentApp.Document} this <code>Document</code>, for chaining
 */
DocumentApp.Document.prototype.setSelection = function(range){};

/** @constructor */
DocumentApp.Element = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Body} the current element
 */
DocumentApp.Element.prototype.asBody = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Equation} the current element
 */
DocumentApp.Element.prototype.asEquation = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function.html'>EquationFunction</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.EquationFunction} the current element
 */
DocumentApp.Element.prototype.asEquationFunction = function(){};

/**
 * Returns the current element as a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html'>EquationFunctionArgumentSeparator</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the current element
 */
DocumentApp.Element.prototype.asEquationFunctionArgumentSeparator = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-symbol.html'>EquationSymbol</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.EquationSymbol} the current element
 */
DocumentApp.Element.prototype.asEquationSymbol = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.Element.prototype.asFooterSection = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Footnote} the current element
 */
DocumentApp.Element.prototype.asFootnote = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.Element.prototype.asFootnoteSection = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.Element.prototype.asHeaderSection = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.HorizontalRule} the current element
 */
DocumentApp.Element.prototype.asHorizontalRule = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-drawing.html'>InlineDrawing</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.InlineDrawing} the current element
 */
DocumentApp.Element.prototype.asInlineDrawing = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.InlineImage} the current element
 */
DocumentApp.Element.prototype.asInlineImage = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.Element.prototype.asListItem = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.PageBreak} the current element
 */
DocumentApp.Element.prototype.asPageBreak = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Element.prototype.asParagraph = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Element.prototype.asTable = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.Element.prototype.asTableCell = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.TableOfContents} the current element
 */
DocumentApp.Element.prototype.asTableOfContents = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.Element.prototype.asTableRow = function(){};

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>.

 <p>Use this method to aid auto-complete whenever a given element is known
 to be of a specific type.
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Element.prototype.asText = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Element} the new copy
 */
DocumentApp.Element.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Element.prototype.getAttributes = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Element.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Element.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Element.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Element.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Element.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.Element} the merged element
 */
DocumentApp.Element.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.Element} the removed element
 */
DocumentApp.Element.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.Element.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.Equation = function(){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.Equation} the current element
 */
DocumentApp.Equation.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Equation} the new copy
 */
DocumentApp.Equation.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.Equation.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.Equation.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.Equation.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Equation.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.Equation.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.Equation.prototype.getChildIndex = function(child){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Equation.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Equation.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.Equation.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Equation.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Equation.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.Equation.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.Equation.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Equation.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Equation.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.Equation} the merged element
 */
DocumentApp.Equation.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.Equation} the removed element
 */
DocumentApp.Equation.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.Equation.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Equation} the current element
 */
DocumentApp.Equation.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.Equation} the current element
 */
DocumentApp.Equation.prototype.setLinkUrl = function(url){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.Equation} the current element
 */
DocumentApp.Equation.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.EquationFunction = function(){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.EquationFunction} the current element
 */
DocumentApp.EquationFunction.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.EquationFunction} the new copy
 */
DocumentApp.EquationFunction.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.EquationFunction.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.EquationFunction.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.EquationFunction.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.EquationFunction.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.EquationFunction.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.EquationFunction.prototype.getChildIndex = function(child){};

/**
 * Retrieves the code corresponding to the equation function.
 *
 * @return {String} the function code
 */
DocumentApp.EquationFunction.prototype.getCode = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.EquationFunction.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.EquationFunction.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.EquationFunction.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.EquationFunction.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.EquationFunction.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.EquationFunction.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.EquationFunction.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.EquationFunction.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.EquationFunction.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.EquationFunction} the merged element
 */
DocumentApp.EquationFunction.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.EquationFunction} the removed element
 */
DocumentApp.EquationFunction.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.EquationFunction.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.EquationFunction} the current element
 */
DocumentApp.EquationFunction.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.EquationFunction} the current element
 */
DocumentApp.EquationFunction.prototype.setLinkUrl = function(url){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.EquationFunction} the current element
 */
DocumentApp.EquationFunction.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.EquationFunctionArgumentSeparator = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the new copy
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.getAttributes = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the merged element
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the removed element
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the current element
 */
DocumentApp.EquationFunctionArgumentSeparator.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.EquationSymbol = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.EquationSymbol} the new copy
 */
DocumentApp.EquationSymbol.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.EquationSymbol.prototype.getAttributes = function(){};

/**
 * Retrieves the code corresponding to the equation symbol.
 *
 * @return {String} the symbol code
 */
DocumentApp.EquationSymbol.prototype.getCode = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.EquationSymbol.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.EquationSymbol.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.EquationSymbol.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.EquationSymbol.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.EquationSymbol.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.EquationSymbol} the merged element
 */
DocumentApp.EquationSymbol.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.EquationSymbol} the removed element
 */
DocumentApp.EquationSymbol.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.EquationSymbol} the current element
 */
DocumentApp.EquationSymbol.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.FooterSection = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.FooterSection.prototype.appendHorizontalRule = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified
 image blob.

 <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the appended image
 */
DocumentApp.FooterSection.prototype.appendImage = function(image){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.

 <p>Use this version of <code>appendListItem</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 *
 * @param {DocumentApp.ListItem} listItem - the list item to append
 *
 * @return {DocumentApp.ListItem} the appended list item
 */
DocumentApp.FooterSection.prototype.appendListItem = function(listItem){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.

 <p>Use this version of <code>appendParagraph</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 *
 * @return {DocumentApp.Paragraph} the appended paragraph
 */
DocumentApp.FooterSection.prototype.appendParagraph = function(paragraph){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>This method will also append an empty paragraph after the table,
 since Google Docs documents cannot end with a table.
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.FooterSection.prototype.appendTable = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>Use this version of <code>appendTable</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>. This method will also append an empty paragraph
 after the table, since Google Docs documents cannot end with a table.
 *
 * @param {DocumentApp.Table} table - the table to append
 *
 * @return {DocumentApp.Table} the appended table
 */
DocumentApp.FooterSection.prototype.appendTable = function(table){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.FooterSection.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.FooterSection} the new copy
 */
DocumentApp.FooterSection.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.FooterSection.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.FooterSection.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.FooterSection.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.FooterSection.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.FooterSection.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.FooterSection.prototype.getChildIndex = function(child){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 *
 * @return {DocumentApp.Footnote[]} the section footnotes
 */
DocumentApp.FooterSection.prototype.getFootnotes = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
 *
 * @return {DocumentApp.InlineImage[]} the section images
 */
DocumentApp.FooterSection.prototype.getImages = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.FooterSection.prototype.getLinkUrl = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
 *
 * @return {DocumentApp.ListItem[]} the section list items
 */
DocumentApp.FooterSection.prototype.getListItems = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.FooterSection.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.FooterSection.prototype.getNumChildren = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 *
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */
DocumentApp.FooterSection.prototype.getParagraphs = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.FooterSection.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.FooterSection.prototype.getPreviousSibling = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
 *
 * @return {DocumentApp.Table[]} the section tables
 */
DocumentApp.FooterSection.prototype.getTables = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.FooterSection.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.FooterSection.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.FooterSection.prototype.getType = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.FooterSection.prototype.insertHorizontalRule = function(childIndex){};

/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob,
 at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the inserted inline image
 */
DocumentApp.FooterSection.prototype.insertImage = function(childIndex, image){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 *
 * @return {DocumentApp.ListItem} the inserted list item
 */
DocumentApp.FooterSection.prototype.insertListItem = function(childIndex, listItem){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 *
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */
DocumentApp.FooterSection.prototype.insertParagraph = function(childIndex, paragraph){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.FooterSection.prototype.insertTable = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Table} table - the table to insert
 *
 * @return {DocumentApp.Table} the inserted table
 */
DocumentApp.FooterSection.prototype.insertTable = function(childIndex, table){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.FooterSection.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.FooterSection.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.FooterSection} the removed element
 */
DocumentApp.FooterSection.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.FooterSection.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.FooterSection.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.FooterSection.prototype.setLinkUrl = function(url){};

/**
 * Sets the contents as plain text.

 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.FooterSection.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.FooterSection} the current element
 */
DocumentApp.FooterSection.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.Footnote = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Footnote} the new copy
 */
DocumentApp.Footnote.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Footnote.prototype.getAttributes = function(){};

/**
 * Retrieves the contents of the footnote element.
 *
 * @return {DocumentApp.FootnoteSection} the footnote section
 */
DocumentApp.Footnote.prototype.getFootnoteContents = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Footnote.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Footnote.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Footnote.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Footnote.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Footnote.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.Footnote} the removed element
 */
DocumentApp.Footnote.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Footnote} the current element
 */
DocumentApp.Footnote.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.FootnoteSection = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.

 <p>Use this version of <code>appendParagraph</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 *
 * @return {DocumentApp.Paragraph} the appended paragraph
 */
DocumentApp.FootnoteSection.prototype.appendParagraph = function(paragraph){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.FootnoteSection.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.FootnoteSection} the new copy
 */
DocumentApp.FootnoteSection.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.FootnoteSection.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.FootnoteSection.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.FootnoteSection.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.FootnoteSection.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.FootnoteSection.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.FootnoteSection.prototype.getChildIndex = function(child){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 *
 * @return {DocumentApp.Footnote[]} the section footnotes
 */
DocumentApp.FootnoteSection.prototype.getFootnotes = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.FootnoteSection.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.FootnoteSection.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.FootnoteSection.prototype.getNumChildren = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 *
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */
DocumentApp.FootnoteSection.prototype.getParagraphs = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.FootnoteSection.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.FootnoteSection.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.FootnoteSection.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.FootnoteSection.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.FootnoteSection.prototype.getType = function(){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 *
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */
DocumentApp.FootnoteSection.prototype.insertParagraph = function(childIndex, paragraph){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.FootnoteSection.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.FootnoteSection.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.FootnoteSection} the removed element
 */
DocumentApp.FootnoteSection.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.FootnoteSection.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.FootnoteSection.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.FootnoteSection.prototype.setLinkUrl = function(url){};

/**
 * Sets the contents as plain text.

 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.FootnoteSection.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.FootnoteSection} the current element
 */
DocumentApp.FootnoteSection.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.HeaderSection = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.HeaderSection.prototype.appendHorizontalRule = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified
 image blob.

 <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the appended image
 */
DocumentApp.HeaderSection.prototype.appendImage = function(image){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.

 <p>Use this version of <code>appendListItem</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 *
 * @param {DocumentApp.ListItem} listItem - the list item to append
 *
 * @return {DocumentApp.ListItem} the appended list item
 */
DocumentApp.HeaderSection.prototype.appendListItem = function(listItem){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.

 <p>Use this version of <code>appendParagraph</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 *
 * @return {DocumentApp.Paragraph} the appended paragraph
 */
DocumentApp.HeaderSection.prototype.appendParagraph = function(paragraph){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>This method will also append an empty paragraph after the table,
 since Google Docs documents cannot end with a table.
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.HeaderSection.prototype.appendTable = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.

 <p>Use this version of <code>appendTable</code> when appending a copy of
 an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>. This method will also append an empty paragraph
 after the table, since Google Docs documents cannot end with a table.
 *
 * @param {DocumentApp.Table} table - the table to append
 *
 * @return {DocumentApp.Table} the appended table
 */
DocumentApp.HeaderSection.prototype.appendTable = function(table){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.HeaderSection.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.HeaderSection} the new copy
 */
DocumentApp.HeaderSection.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.HeaderSection.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.HeaderSection.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.HeaderSection.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.HeaderSection.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.HeaderSection.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.HeaderSection.prototype.getChildIndex = function(child){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 *
 * @return {DocumentApp.Footnote[]} the section footnotes
 */
DocumentApp.HeaderSection.prototype.getFootnotes = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
 *
 * @return {DocumentApp.InlineImage[]} the section images
 */
DocumentApp.HeaderSection.prototype.getImages = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.HeaderSection.prototype.getLinkUrl = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
 *
 * @return {DocumentApp.ListItem[]} the section list items
 */
DocumentApp.HeaderSection.prototype.getListItems = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.HeaderSection.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.HeaderSection.prototype.getNumChildren = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 *
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */
DocumentApp.HeaderSection.prototype.getParagraphs = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.HeaderSection.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.HeaderSection.prototype.getPreviousSibling = function(){};

/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
 *
 * @return {DocumentApp.Table[]} the section tables
 */
DocumentApp.HeaderSection.prototype.getTables = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.HeaderSection.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.HeaderSection.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.HeaderSection.prototype.getType = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.

 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.HeaderSection.prototype.insertHorizontalRule = function(childIndex){};

/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob,
 at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the inserted inline image
 */
DocumentApp.HeaderSection.prototype.insertImage = function(childIndex, image){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 *
 * @return {DocumentApp.ListItem} the inserted list item
 */
DocumentApp.HeaderSection.prototype.insertListItem = function(childIndex, listItem){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 *
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */
DocumentApp.HeaderSection.prototype.insertParagraph = function(childIndex, paragraph){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.HeaderSection.prototype.insertTable = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert
 * @param {DocumentApp.Table} table - the table to insert
 *
 * @return {DocumentApp.Table} the inserted table
 */
DocumentApp.HeaderSection.prototype.insertTable = function(childIndex, table){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.HeaderSection.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.HeaderSection.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.HeaderSection} the removed element
 */
DocumentApp.HeaderSection.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.HeaderSection.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.HeaderSection.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.HeaderSection.prototype.setLinkUrl = function(url){};

/**
 * Sets the contents as plain text.

 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.HeaderSection.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.HeaderSection} the current element
 */
DocumentApp.HeaderSection.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.HorizontalRule = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.HorizontalRule} the new copy
 */
DocumentApp.HorizontalRule.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.HorizontalRule.prototype.getAttributes = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.HorizontalRule.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.HorizontalRule.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.HorizontalRule.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.HorizontalRule.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.HorizontalRule.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.HorizontalRule} the removed element
 */
DocumentApp.HorizontalRule.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.HorizontalRule} the current element
 */
DocumentApp.HorizontalRule.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.InlineDrawing = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.InlineDrawing} the new copy
 */
DocumentApp.InlineDrawing.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.InlineDrawing.prototype.getAttributes = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.InlineDrawing.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.InlineDrawing.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.InlineDrawing.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.InlineDrawing.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.InlineDrawing.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.InlineDrawing} the merged element
 */
DocumentApp.InlineDrawing.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.InlineDrawing} the removed element
 */
DocumentApp.InlineDrawing.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.InlineDrawing} the current element
 */
DocumentApp.InlineDrawing.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.InlineImage = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.InlineImage} the new copy
 */
DocumentApp.InlineImage.prototype.copy = function(){};

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
DocumentApp.InlineImage.prototype.getAs = function(contentType){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.InlineImage.prototype.getAttributes = function(){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
DocumentApp.InlineImage.prototype.getBlob = function(){};

/**
 * Retrieves the image's height, in pixels.
 *
 * @return {number} the image's height, in pixels
 */
DocumentApp.InlineImage.prototype.getHeight = function(){};

/**
 * Retrieves the link URL.
 *
 * @return {String} the link URL, or <code>null</code> if the element contains multiple values for this
     attribute.
 */
DocumentApp.InlineImage.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.InlineImage.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.InlineImage.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.InlineImage.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.InlineImage.prototype.getType = function(){};

/**
 * Retrieves the image's width, in pixels.
 *
 * @return {number} the image's width, in pixels
 */
DocumentApp.InlineImage.prototype.getWidth = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.InlineImage.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.InlineImage} the merged element
 */
DocumentApp.InlineImage.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.InlineImage} the removed element
 */
DocumentApp.InlineImage.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.InlineImage} the current element
 */
DocumentApp.InlineImage.prototype.setAttributes = function(attributes){};

/**
 * Sets the image's height, in pixels.
 *
 * @param {number} height - the image's height, in pixels
 *
 * @return {DocumentApp.InlineImage} the current object
 */
DocumentApp.InlineImage.prototype.setHeight = function(height){};

/**
 * Sets the link URL. If the given URL is <code>null</code> or an empty string, this method will
 create a link with an empty URL that may display as "Invalid link" in Google Docs.
 *
 * @param {String} url - the link URL
 *
 * @return {DocumentApp.InlineImage} the current object
 */
DocumentApp.InlineImage.prototype.setLinkUrl = function(url){};

/**
 * Sets the image's width, in pixels.
 *
 * @param {number} width - the image's width, in pixels
 *
 * @return {DocumentApp.InlineImage} the current object
 */
DocumentApp.InlineImage.prototype.setWidth = function(width){};

/** @constructor */
DocumentApp.ListItem = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> from the specified image
 blob.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.PositionedImage} the new positioned image
 */
DocumentApp.ListItem.prototype.addPositionedImage = function(image){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.ListItem.prototype.appendHorizontalRule = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image
 blob.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the appended image
 */
DocumentApp.ListItem.prototype.appendInlineImage = function(image){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.

 <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>. If the current element is contained in a table cell,
 an exception will be thrown.
 *
 * @return {DocumentApp.PageBreak} the new page break element
 */
DocumentApp.ListItem.prototype.appendPageBreak = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
 *
 * @param {DocumentApp.Text} text - the text element to append
 *
 * @return {DocumentApp.Text} the appended text element
 */
DocumentApp.ListItem.prototype.appendText = function(text){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.ListItem} the new copy
 */
DocumentApp.ListItem.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.ListItem.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.ListItem.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.ListItem.prototype.findText = function(searchPattern){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 *
 * @return {DocumentApp.HorizontalAlignment} the alignment
 */
DocumentApp.ListItem.prototype.getAlignment = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.ListItem.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.ListItem.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.ListItem.prototype.getChildIndex = function(child){};

/**
 * Retrieves the list item's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code>.
 *
 * @return {DocumentApp.GlyphType} the glyph type
 */
DocumentApp.ListItem.prototype.getGlyphType = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 *
 * @return {DocumentApp.ParagraphHeading} the heading
 */
DocumentApp.ListItem.prototype.getHeading = function(){};

/**
 * Retrieves the end indentation, in points.
 *
 * @return {Number} the end indentation, in points
 */
DocumentApp.ListItem.prototype.getIndentEnd = function(){};

/**
 * Retrieves the first line indentation, in points.
 *
 * @return {Number} the first line indentation, in points
 */
DocumentApp.ListItem.prototype.getIndentFirstLine = function(){};

/**
 * Retrieves the start indentation.
 *
 * @return {Number} the start indentation
 */
DocumentApp.ListItem.prototype.getIndentStart = function(){};

/**
 * Retrieves the line spacing, in points.
 *
 * @return {Number} the line spacing, in points
 */
DocumentApp.ListItem.prototype.getLineSpacing = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.ListItem.prototype.getLinkUrl = function(){};

/**
 * Retrieves the list ID.
 *
 * @return {String} the list ID
 */
DocumentApp.ListItem.prototype.getListId = function(){};

/**
 * Retrieves the list item's nesting level.

 <p>By default, list items have a nesting level of zero. The nesting level
 determines the glyph that is used by the list item.
 *
 * @return {number} the nesting level
 */
DocumentApp.ListItem.prototype.getNestingLevel = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.ListItem.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.ListItem.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.ListItem.prototype.getParent = function(){};

/**
 * Gets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 *
 * @param {String} id - the image id
 *
 * @return {DocumentApp.PositionedImage} the positioned image
 */
DocumentApp.ListItem.prototype.getPositionedImage = function(id){};

/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> objects anchored to the paragraph.
 *
 * @return {DocumentApp.PositionedImage[]} a list of positioned images
 */
DocumentApp.ListItem.prototype.getPositionedImages = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.ListItem.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the spacing after the element, in points.
 *
 * @return {Number} the spacing after the element, in points
 */
DocumentApp.ListItem.prototype.getSpacingAfter = function(){};

/**
 * Retrieves the spacing before the element, in points.
 *
 * @return {Number} the spacing before the element, in points
 */
DocumentApp.ListItem.prototype.getSpacingBefore = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.ListItem.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.ListItem.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.ListItem.prototype.getType = function(){};

/**
 * Creates and inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule element
 */
DocumentApp.ListItem.prototype.insertHorizontalRule = function(childIndex){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image
 blob, at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the inserted inline image element
 */
DocumentApp.ListItem.prototype.insertInlineImage = function(childIndex, image){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.

 <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>. If the current element is contained in a table cell,
 an exception will be thrown.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.PageBreak} the new page break element
 */
DocumentApp.ListItem.prototype.insertPageBreak = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element at the specified index, with the
 specified text contents.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {DocumentApp.Text} text - the text element to insert
 *
 * @return {DocumentApp.Text} the inserted text element
 */
DocumentApp.ListItem.prototype.insertText = function(childIndex, text){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.ListItem.prototype.isAtDocumentEnd = function(){};

/**
 * Retrieves the left-to-right setting.
 *
 * @return {Boolean} the left-to-right setting
 */
DocumentApp.ListItem.prototype.isLeftToRight = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.ListItem} the merged element
 */
DocumentApp.ListItem.prototype.merge = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.ListItem} the removed element
 */
DocumentApp.ListItem.prototype.removeFromParent = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 *
 * @param {String} id - 
 *
 * @return {Boolean} whether or not the specified image was removed
 */
DocumentApp.ListItem.prototype.removePositionedImage = function(id){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.ListItem.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 *
 * @param {DocumentApp.HorizontalAlignment} alignment - the horizontal alignment
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setAlignment = function(alignment){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setAttributes = function(attributes){};

/**
 * Sets the list item's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code>.
 *
 * @param {DocumentApp.GlyphType} glyphType - the glyph type
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setGlyphType = function(glyphType){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 *
 * @param {DocumentApp.ParagraphHeading} heading - the heading
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setHeading = function(heading){};

/**
 * Sets the end indentation, in points.
 *
 * @param {Number} indentEnd - the end indentation, in points
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setIndentEnd = function(indentEnd){};

/**
 * Sets the first line indentation, in points.
 *
 * @param {Number} indentFirstLine - the first line indentation, in points
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setIndentFirstLine = function(indentFirstLine){};

/**
 * Sets the start indentation, in points.
 *
 * @param {Number} indentStart - the start indentation, in points
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setIndentStart = function(indentStart){};

/**
 * Sets the left-to-right setting.
 *
 * @param {Boolean} leftToRight - the left-to-right setting
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setLeftToRight = function(leftToRight){};

/**
 * Sets the line spacing, as a quantity indicating the number of lines to use
 for spacing.
 *
 * @param {Number} multiplier - the number of lines
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setLineSpacing = function(multiplier){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setLinkUrl = function(url){};

/**
 * Sets the list ID.

 <p>The list ID is set to the same value for the specified
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>. The two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> will be treated as members of
 the same list.
 *
 * @param {DocumentApp.ListItem} listItem - the list item whose list ID to use
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setListId = function(listItem){};

/**
 * Sets the list item's nesting level.

 <p>By default, list items have a nesting level of zero. The nesting level
 determines the glyph that is used by the list item.
 *
 * @param {number} nestingLevel - the nesting level
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setNestingLevel = function(nestingLevel){};

/**
 * Sets the spacing after the element, in points.
 *
 * @param {Number} spacingAfter - the spacing after the element, in points
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setSpacingAfter = function(spacingAfter){};

/**
 * Sets the spacing before the element, in points.
 *
 * @param {Number} spacingBefore - the spacing before the element, in points
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setSpacingBefore = function(spacingBefore){};

/**
 * Sets the contents of the list item as text.

 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return void
 */
DocumentApp.ListItem.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.ListItem} the current element
 */
DocumentApp.ListItem.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.NamedRange = function(){};

/**
 * Gets the ID of this <code>NamedRange</code>. The ID is unique within the document.
 *
 * @return {String} the range's ID, which is unique within the document
 */
DocumentApp.NamedRange.prototype.getId = function(){};

/**
 * Gets the name of this <code>NamedRange</code>. The name is not necessarily unique.
 *
 * @return {String} the range's name, which is not necessarily unique
 */
DocumentApp.NamedRange.prototype.getName = function(){};

/**
 * Gets the range of elements associated with this <code>NamedRange</code>.
 *
 * @return {DocumentApp.Range} the range of elements associated with the name and ID
 */
DocumentApp.NamedRange.prototype.getRange = function(){};

/**
 * Removes this <code>NamedRange</code> from the document. This method does not delete the contents of
 the range; it merely the removes the reference. Calling this method on a <code>NamedRange</code>
 that has already been removed has no effect.
 *
 * @return void
 */
DocumentApp.NamedRange.prototype.remove = function(){};

/** @constructor */
DocumentApp.PageBreak = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.PageBreak} the new copy
 */
DocumentApp.PageBreak.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.PageBreak.prototype.getAttributes = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.PageBreak.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.PageBreak.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.PageBreak.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.PageBreak.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.PageBreak.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.PageBreak} the removed element
 */
DocumentApp.PageBreak.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.PageBreak} the current element
 */
DocumentApp.PageBreak.prototype.setAttributes = function(attributes){};

/** @constructor */
DocumentApp.Paragraph = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> from the specified image
 blob.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.PositionedImage} the new positioned image
 */
DocumentApp.Paragraph.prototype.addPositionedImage = function(image){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.Paragraph.prototype.appendHorizontalRule = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image
 blob.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the appended image
 */
DocumentApp.Paragraph.prototype.appendInlineImage = function(image){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.

 <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>. If the current element is contained in a table cell,
 an exception will be thrown.
 *
 * @return {DocumentApp.PageBreak} the new page break element
 */
DocumentApp.Paragraph.prototype.appendPageBreak = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
 *
 * @param {DocumentApp.Text} text - the text element to append
 *
 * @return {DocumentApp.Text} the appended text element
 */
DocumentApp.Paragraph.prototype.appendText = function(text){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Paragraph} the new copy
 */
DocumentApp.Paragraph.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.Paragraph.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.Paragraph.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.Paragraph.prototype.findText = function(searchPattern){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 *
 * @return {DocumentApp.HorizontalAlignment} the alignment
 */
DocumentApp.Paragraph.prototype.getAlignment = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Paragraph.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.Paragraph.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.Paragraph.prototype.getChildIndex = function(child){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 *
 * @return {DocumentApp.ParagraphHeading} the heading
 */
DocumentApp.Paragraph.prototype.getHeading = function(){};

/**
 * Retrieves the end indentation, in points.
 *
 * @return {Number} the end indentation, in points
 */
DocumentApp.Paragraph.prototype.getIndentEnd = function(){};

/**
 * Retrieves the first line indentation, in points.
 *
 * @return {Number} the first line indentation, in points
 */
DocumentApp.Paragraph.prototype.getIndentFirstLine = function(){};

/**
 * Retrieves the start indentation.
 *
 * @return {Number} the start indentation
 */
DocumentApp.Paragraph.prototype.getIndentStart = function(){};

/**
 * Retrieves the line spacing, in points.
 *
 * @return {Number} the line spacing, in points
 */
DocumentApp.Paragraph.prototype.getLineSpacing = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Paragraph.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Paragraph.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.Paragraph.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Paragraph.prototype.getParent = function(){};

/**
 * Gets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 *
 * @param {String} id - the image id
 *
 * @return {DocumentApp.PositionedImage} the positioned image
 */
DocumentApp.Paragraph.prototype.getPositionedImage = function(id){};

/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> objects anchored to the paragraph.
 *
 * @return {DocumentApp.PositionedImage[]} a list of positioned images
 */
DocumentApp.Paragraph.prototype.getPositionedImages = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Paragraph.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the spacing after the element, in points.
 *
 * @return {Number} the spacing after the element, in points
 */
DocumentApp.Paragraph.prototype.getSpacingAfter = function(){};

/**
 * Retrieves the spacing before the element, in points.
 *
 * @return {Number} the spacing before the element, in points
 */
DocumentApp.Paragraph.prototype.getSpacingBefore = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.Paragraph.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.Paragraph.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Paragraph.prototype.getType = function(){};

/**
 * Creates and inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule element
 */
DocumentApp.Paragraph.prototype.insertHorizontalRule = function(childIndex){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image
 blob, at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the inserted inline image element
 */
DocumentApp.Paragraph.prototype.insertInlineImage = function(childIndex, image){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.

 <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>. If the current element is contained in a table cell,
 an exception will be thrown.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.PageBreak} the new page break element
 */
DocumentApp.Paragraph.prototype.insertPageBreak = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element at the specified index, with the
 specified text contents.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {DocumentApp.Text} text - the text element to insert
 *
 * @return {DocumentApp.Text} the inserted text element
 */
DocumentApp.Paragraph.prototype.insertText = function(childIndex, text){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Paragraph.prototype.isAtDocumentEnd = function(){};

/**
 * Retrieves the left-to-right setting.
 *
 * @return {Boolean} the left-to-right setting
 */
DocumentApp.Paragraph.prototype.isLeftToRight = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.Paragraph} the merged element
 */
DocumentApp.Paragraph.prototype.merge = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.Paragraph} the removed element
 */
DocumentApp.Paragraph.prototype.removeFromParent = function(){};

/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 *
 * @param {String} id - the image id
 *
 * @return {Boolean} whether or not the specified image was removed
 */
DocumentApp.Paragraph.prototype.removePositionedImage = function(id){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.Paragraph.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 *
 * @param {DocumentApp.HorizontalAlignment} alignment - the horizontal alignment
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setAlignment = function(alignment){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setAttributes = function(attributes){};

/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 *
 * @param {DocumentApp.ParagraphHeading} heading - the heading
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setHeading = function(heading){};

/**
 * Sets the end indentation, in points.
 *
 * @param {Number} indentEnd - the end indentation, in points
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setIndentEnd = function(indentEnd){};

/**
 * Sets the first line indentation, in points.
 *
 * @param {Number} indentFirstLine - the first line indentation, in points
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setIndentFirstLine = function(indentFirstLine){};

/**
 * Sets the start indentation, in points.
 *
 * @param {Number} indentStart - the start indentation, in points
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setIndentStart = function(indentStart){};

/**
 * Sets the left-to-right setting.
 *
 * @param {Boolean} leftToRight - the left-to-right setting
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setLeftToRight = function(leftToRight){};

/**
 * Sets the line spacing, as a quantity indicating the number of lines to use
 for spacing.
 *
 * @param {Number} multiplier - the number of lines
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setLineSpacing = function(multiplier){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setLinkUrl = function(url){};

/**
 * Sets the spacing after the element, in points.
 *
 * @param {Number} spacingAfter - the spacing after the element, in points
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setSpacingAfter = function(spacingAfter){};

/**
 * Sets the spacing before the element, in points.
 *
 * @param {Number} spacingBefore - the spacing before the element, in points
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setSpacingBefore = function(spacingBefore){};

/**
 * Sets the contents of the paragraph as text.

 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return void
 */
DocumentApp.Paragraph.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.Paragraph} the current element
 */
DocumentApp.Paragraph.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.Position = function(){};

/**
 * Gets the element that contains this <code>Position</code>. This will be either a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 element or a container element like
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>. In either case, the
 relative position within the element can be determined with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getOffset()'>getOffset()</a></code>.
 *
 * @return {DocumentApp.Element} the container or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element in which this <code>Position</code> object is located
 */
DocumentApp.Position.prototype.getElement = function(){};

/**
 * Gets this <code>Position</code>'s relative location within the element that contains it. If the
 element is a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element, the offset is the number of characters before the
 <code>Position</code> (that is, the index of the character after this <code>Position</code>); for any
 other element, the offset is the number of child elements before this <code>Position</code> within
 the same container element (that is, the index of the child element after the
 <code>Position</code>).
 *
 * @return {number} for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the number of characters before this <code>Position</code>; for
     other elements, the number of child elements before this <code>Position</code> within the same
     container element
 */
DocumentApp.Position.prototype.getOffset = function(){};

/**
 * Creates an artificial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element that represents the text and formatting of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the
 <code>Position</code>, either directly or through a chain of child elements. To determine the
 <code>Position</code>'s offset in the returned <code>Text</code> element, use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getSurroundingTextOffset()'>getSurroundingTextOffset()</a></code>.
 *
 * @return {DocumentApp.Text} an element equivalent to the result of calling
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html#editAsText()'>editAsText()</a></code> on the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>
     or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the
     <code>Position</code>, either directly or through a chain of child elements
 */
DocumentApp.Position.prototype.getSurroundingText = function(){};

/**
 * Gets the offset of this <code>Position</code> within the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element returned by
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getSurroundingText()'>getSurroundingText()</a></code>. The offset is the number of characters before the
 <code>Position</code> (that is, the index of the character after this <code>Position</code>).
 *
 * @return {number} the number of characters before this <code>Position</code> in the
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the
     <code>Position</code>, either directly or through a chain of child elements
 */
DocumentApp.Position.prototype.getSurroundingTextOffset = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> at this <code>Position</code>.
 *
 * @return {DocumentApp.Bookmark} the new bookmark
 */
DocumentApp.Position.prototype.insertBookmark = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at this <code>Position</code> from the specified image
 blob.
 *
 * @param {BlobSource} image - the image data to insert at this <code>Position</code>
 *
 * @return {DocumentApp.InlineImage} the new image element, or <code>null</code> if the element in which this <code>Position</code> is
     located does not allow images to be inserted
 */
DocumentApp.Position.prototype.insertInlineImage = function(image){};

/**
 * Inserts the specified text at this <code>Position</code>. This method creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 element, even if the string is inserted within an existing <code>Text</code> element, so that it is
 easy to style the new element.
 *
 * @param {String} text - the string to insert at this <code>Position</code>
 *
 * @return {DocumentApp.Text} the new text element, or <code>null</code> if the element in which this <code>Position</code> is
     located does not allow text to be inserted
 */
DocumentApp.Position.prototype.insertText = function(text){};

/** @constructor */
DocumentApp.PositionedImage = function(){};

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
DocumentApp.PositionedImage.prototype.getAs = function(contentType){};

/**
 * Return the data inside this object as a blob.
 *
 * @return {Blob} the data as a blob
 */
DocumentApp.PositionedImage.prototype.getBlob = function(){};

/**
 * Retrieves the image's height, in pixels.
 *
 * @return {number} the image's height, in pixels
 */
DocumentApp.PositionedImage.prototype.getHeight = function(){};

/**
 * Gets the image's ID.
 *
 * @return {String} the image ID
 */
DocumentApp.PositionedImage.prototype.getId = function(){};

/**
 * Gets an enum value that represents how the image is laid out.
 *
 * @return {DocumentApp.PositionedLayout} the image layout
 */
DocumentApp.PositionedImage.prototype.getLayout = function(){};

/**
 * Gets the image's offset, in points, from the paragraph's left.
 *
 * @return {Number} the image offset from the left paragraph's left
 */
DocumentApp.PositionedImage.prototype.getLeftOffset = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> the image is anchored to.
 *
 * @return {DocumentApp.Paragraph} the parent paragraph
 */
DocumentApp.PositionedImage.prototype.getParagraph = function(){};

/**
 * Gets the image's offset, in points, from the paragraph's top.
 *
 * @return {Number} the image offset from the left paragraph's top
 */
DocumentApp.PositionedImage.prototype.getTopOffset = function(){};

/**
 * Retrieves the image's width, in pixels.
 *
 * @return {number} the image's width, in pixels
 */
DocumentApp.PositionedImage.prototype.getWidth = function(){};

/**
 * Sets the image's height, in pixels.
 *
 * @param {number} height - the image's height, in pixels
 *
 * @return {DocumentApp.PositionedImage} the current object
 */
DocumentApp.PositionedImage.prototype.setHeight = function(height){};

/**
 * Sets the definition of how the image is laid out.
 *
 * @param {DocumentApp.PositionedLayout} layout - an enum representing the layout mode
 *
 * @return {DocumentApp.PositionedImage} this object for chaining
 */
DocumentApp.PositionedImage.prototype.setLayout = function(layout){};

/**
 * Sets the image's offset, in points, from the paragraph's left.
 *
 * @param {Number} offset - offset from the paragraph's left
 *
 * @return {DocumentApp.PositionedImage} this object for chaining
 */
DocumentApp.PositionedImage.prototype.setLeftOffset = function(offset){};

/**
 * Sets the image's offset, in points, from the paragraph's top.
 *
 * @param {Number} offset - offset from the paragraph's top
 *
 * @return {DocumentApp.PositionedImage} this object for chaining
 */
DocumentApp.PositionedImage.prototype.setTopOffset = function(offset){};

/**
 * Sets the image's width, in pixels.
 *
 * @param {number} width - the image's width, in pixels
 *
 * @return {DocumentApp.PositionedImage} the current object
 */
DocumentApp.PositionedImage.prototype.setWidth = function(width){};

/** @constructor */
DocumentApp.Range = function(){};

/**
 * Gets all elements in this <code>Range</code>, including any partial
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements (for example, in the
 case of a selection that includes only part of a <code>Text</code> element). To determine whether a
 <code>Text</code> element is only partially included in the range, see
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>RangeElement.isPartial()</a></code>.
 *
 * @return {DocumentApp.RangeElement[]} an array of elements, in the order they appear in the document
 */
DocumentApp.Range.prototype.getRangeElements = function(){};

/**
 * Gets all elements that the user has selected in the open instance of the document, including
 any partially selected <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 elements.
 *
 * @return {DocumentApp.RangeElement[]} an array of selected or partially selected elements, in the order they appear in the
     document
 */
DocumentApp.Range.prototype.getSelectedElements = function(){};

/** @constructor */
DocumentApp.RangeBuilder = function(){};

/**
 * Adds an entire <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element.html'>Element</a></code> to this <code>RangeBuilder</code>.
 *
 * @param {DocumentApp.Element} element - the element to be added
 *
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */
DocumentApp.RangeBuilder.prototype.addElement = function(element){};

/**
 * Adds two entire elements, and all elements between them, to this <code>RangeBuilder</code>.
 *
 * @param {DocumentApp.Element} startElement - the first element to be added
 * @param {DocumentApp.Element} endElementInclusive - the last element to be added
 *
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */
DocumentApp.RangeBuilder.prototype.addElementsBetween = function(startElement, endElementInclusive){};

/**
 * Adds the contents of another <code>Range</code> to this <code>RangeBuilder</code>.
 *
 * @param {DocumentApp.Range} range - the range whose elements should be added
 *
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */
DocumentApp.RangeBuilder.prototype.addRange = function(range){};

/**
 * Constructs a <code>Range</code> from the settings applied to the builder.
 *
 * @return {DocumentApp.Range} the newly constructed range
 */
DocumentApp.RangeBuilder.prototype.build = function(){};

/**
 * Gets all elements in this <code>Range</code>, including any partial
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements (for example, in the
 case of a selection that includes only part of a <code>Text</code> element). To determine whether a
 <code>Text</code> element is only partially included in the range, see
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>RangeElement.isPartial()</a></code>.
 *
 * @return {DocumentApp.RangeElement[]} an array of elements, in the order they appear in the document
 */
DocumentApp.RangeBuilder.prototype.getRangeElements = function(){};

/**
 * Gets all elements that the user has selected in the open instance of the document, including
 any partially selected <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 elements.
 *
 * @return {DocumentApp.RangeElement[]} an array of selected or partially selected elements, in the order they appear in the
     document
 */
DocumentApp.RangeBuilder.prototype.getSelectedElements = function(){};

/** @constructor */
DocumentApp.RangeElement = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element.html'>Element</a></code> that corresponds to this <code>RangeElement</code>.

 <pre class="prettyprint">
 <code>
 // Log debug information about a range element.
 Logger.log(&#39;Element type: &#39; + rangeElement.getElement().getType());
 if (rangeElement.isPartial()) {
   Logger.log(&#39;The character range begins at &#39; + rangeElement.getStartOffset());
   Logger.log(&#39;The character range ends at &#39; + rangeElement.getEndOffsetInclusive());
 } else {
   Logger.log(&#39;The entire range element is included.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.Element} the element that corresponds to this <code>RangeElement</code>
 */
DocumentApp.RangeElement.prototype.getElement = function(){};

/**
 * Gets the position of the end of a partial range within the range element. If the element is a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>isPartial()</a></code> returns <code>true</code>, the offset is the number of characters before the last
 character in the range (that is, the index of the last character in the range); in any other
 case, this method returns <code>-1</code>.
 *
 * @return {number} for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the
     number of character before the last character in the range; for other elements, <code>-1</code>
 */
DocumentApp.RangeElement.prototype.getEndOffsetInclusive = function(){};

/**
 * Gets the position of the start of a partial range within the range element. If the element is a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>isPartial()</a></code> returns <code>true</code>, the offset is the number of characters before the start of
 the range (that is, the index of the first character in the range); in any other case, this
 method returns <code>-1</code>.
 *
 * @return {number} for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the
     number of characters before the start of the range; for other elements, <code>-1</code>
 */
DocumentApp.RangeElement.prototype.getStartOffset = function(){};

/**
 * Determines whether this range element covers the entire element or a partial selection of the
 element's characters. The beginning and end of a partial range element's range can be
 determined using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#getStartOffset()'>getStartOffset()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#getEndOffsetInclusive()'>getEndOffsetInclusive()</a></code>, respectively.
 *
 * @return {Boolean} <code>true</code> if the element is partially included; <code>false</code> if not
 */
DocumentApp.RangeElement.prototype.isPartial = function(){};

/** @constructor */
DocumentApp.Table = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
 *
 * @return {DocumentApp.TableRow} the new table row element
 */
DocumentApp.Table.prototype.appendTableRow = function(){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Table} the new copy
 */
DocumentApp.Table.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.Table.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.Table.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.Table.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Table.prototype.getAttributes = function(){};

/**
 * Retrieves the border color.
 *
 * @return {String} the border color
 */
DocumentApp.Table.prototype.getBorderColor = function(){};

/**
 * Retrieves the border width, in points.
 *
 * @return {Number} the border width, in points
 */
DocumentApp.Table.prototype.getBorderWidth = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified row and cell indices.
 *
 * @param {number} rowIndex - the index of the row containing the cell to retrieve
 * @param {number} cellIndex - the index of the cell to retrieve
 *
 * @return {DocumentApp.TableCell} the table cell
 */
DocumentApp.Table.prototype.getCell = function(rowIndex, cellIndex){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.Table.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.Table.prototype.getChildIndex = function(child){};

/**
 * Retrieves the width of the specified table column, in points.
 *
 * @param {number} columnIndex - the column index
 *
 * @return {Number} the column width, in points
 */
DocumentApp.Table.prototype.getColumnWidth = function(columnIndex){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Table.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Table.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.Table.prototype.getNumChildren = function(){};

/**
 * Retrieves the number of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRows</a></code>.
 *
 * @return {number} the number of table rows
 */
DocumentApp.Table.prototype.getNumRows = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Table.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Table.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified row index.
 *
 * @param {number} rowIndex - the index of the row to retrieve
 *
 * @return {DocumentApp.TableRow} the table row
 */
DocumentApp.Table.prototype.getRow = function(rowIndex){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.Table.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.Table.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Table.prototype.getType = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.Table.prototype.insertTableRow = function(childIndex){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Table.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.Table} the removed element
 */
DocumentApp.Table.prototype.removeFromParent = function(){};

/**
 * Removes the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified row index.
 *
 * @param {number} rowIndex - the index of the row to remove
 *
 * @return {DocumentApp.TableRow} the removed row
 */
DocumentApp.Table.prototype.removeRow = function(rowIndex){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.Table.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.setAttributes = function(attributes){};

/**
 * Sets the border color.
 *
 * @param {String} color - the border color
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.setBorderColor = function(color){};

/**
 * Sets the border width, in points.
 *
 * @param {Number} width - the border width, in points
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.setBorderWidth = function(width){};

/**
 * Sets the width of the specified column, in points.
 *
 * @param {number} columnIndex - the column index
 * @param {Number} width - the border width, in points
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.setColumnWidth = function(columnIndex, width){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.setLinkUrl = function(url){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.Table} the current element
 */
DocumentApp.Table.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.TableCell = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 
 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.TableCell.prototype.appendHorizontalRule = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image
 blob.
 
 <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the new image
 */
DocumentApp.TableCell.prototype.appendImage = function(image){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 *
 * @param {DocumentApp.ListItem} listItem - the list item to append
 *
 * @return {DocumentApp.ListItem} the appended list item
 */
DocumentApp.TableCell.prototype.appendListItem = function(listItem){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 *
 * @return {DocumentApp.Paragraph} the appended paragraph
 */
DocumentApp.TableCell.prototype.appendParagraph = function(paragraph){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.TableCell.prototype.appendTable = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 *
 * @param {DocumentApp.Table} table - the table to append
 *
 * @return {DocumentApp.Table} the appended table
 */
DocumentApp.TableCell.prototype.appendTable = function(table){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.TableCell} the new copy
 */
DocumentApp.TableCell.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.TableCell.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.TableCell.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.TableCell.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.TableCell.prototype.getAttributes = function(){};

/**
 * Retrieves the background color.
 *
 * @return {String} the background color
 */
DocumentApp.TableCell.prototype.getBackgroundColor = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.TableCell.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.TableCell.prototype.getChildIndex = function(child){};

/**
 * Retrieves the column span, which is the number of columns of table cells this cell spans.
 Non-merged cells have a col span of 1.
 *
 * @return {number} the column span or 0 for a cell which is merged over by another cell
 */
DocumentApp.TableCell.prototype.getColSpan = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.TableCell.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.TableCell.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.TableCell.prototype.getNumChildren = function(){};

/**
 * Retrieves the bottom padding, in points.
 *
 * @return {Number} the bottom padding, in points
 */
DocumentApp.TableCell.prototype.getPaddingBottom = function(){};

/**
 * Retrieves the left padding, in points.
 *
 * @return {Number} the left padding, in points
 */
DocumentApp.TableCell.prototype.getPaddingLeft = function(){};

/**
 * Retrieves the right padding, in points.
 *
 * @return {Number} the right padding, in points
 */
DocumentApp.TableCell.prototype.getPaddingRight = function(){};

/**
 * Retrieves the top padding, in points.
 *
 * @return {Number} the top padding, in points
 */
DocumentApp.TableCell.prototype.getPaddingTop = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.TableCell.prototype.getParent = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> containing the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 *
 * @return {DocumentApp.TableRow} the table row containing the current cell
 */
DocumentApp.TableCell.prototype.getParentRow = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 *
 * @return {DocumentApp.Table} the table containing the current cell
 */
DocumentApp.TableCell.prototype.getParentTable = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.TableCell.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged 
 cells have a row span of 1.
 *
 * @return {number} the row span or 0 for a cell which is merged over by another cell
 */
DocumentApp.TableCell.prototype.getRowSpan = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.TableCell.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.TableCell.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.TableCell.prototype.getType = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/vertical-alignment.html'>VerticalAlignment</a></code>.
 *
 * @return {DocumentApp.VerticalAlignment} the vertical alignment
 */
DocumentApp.TableCell.prototype.getVerticalAlignment = function(){};

/**
 * Retrieves the width of the column containing the cell, in points.
 *
 * @return {Number} the column width, in points
 */
DocumentApp.TableCell.prototype.getWidth = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 
 <p>The horizontal rule will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */
DocumentApp.TableCell.prototype.insertHorizontalRule = function(childIndex){};

/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob,
 at the specified index.
 
 <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 *
 * @return {DocumentApp.InlineImage} the inserted inline image
 */
DocumentApp.TableCell.prototype.insertImage = function(childIndex, image){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 *
 * @return {DocumentApp.ListItem} inserted new list item
 */
DocumentApp.TableCell.prototype.insertListItem = function(childIndex, listItem){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 *
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */
DocumentApp.TableCell.prototype.insertParagraph = function(childIndex, paragraph){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.Table} the new table
 */
DocumentApp.TableCell.prototype.insertTable = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {DocumentApp.Table} table - the table to insert
 *
 * @return {DocumentApp.Table} the inserted table
 */
DocumentApp.TableCell.prototype.insertTable = function(childIndex, table){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.TableCell.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.TableCell} the merged element
 */
DocumentApp.TableCell.prototype.merge = function(){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.TableCell} the removed element
 */
DocumentApp.TableCell.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.TableCell.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setAttributes = function(attributes){};

/**
 * Sets the background color.
 *
 * @param {String} color - the background color
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setBackgroundColor = function(color){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setLinkUrl = function(url){};

/**
 * Sets the bottom padding, in points.
 *
 * @param {Number} paddingBottom - the bottom padding, in points
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setPaddingBottom = function(paddingBottom){};

/**
 * Sets the left padding, in points.
 *
 * @param {Number} paddingLeft - the left padding, in points
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setPaddingLeft = function(paddingLeft){};

/**
 * Sets the right padding, in points.
 *
 * @param {Number} paddingTop - the right padding, in points
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setPaddingRight = function(paddingTop){};

/**
 * Sets the top padding, in points.
 *
 * @param {Number} paddingTop - the top padding, in points
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setPaddingTop = function(paddingTop){};

/**
 * Sets the contents as plain text.
 
 <p>Note: existing contents are cleared.
 *
 * @param {String} text - the new text contents
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setTextAlignment = function(textAlignment){};

/**
 * Sets the vertical alignment.
 *
 * @param {DocumentApp.VerticalAlignment} alignment - the vertical alignment
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setVerticalAlignment = function(alignment){};

/**
 * Sets the width of the column containing the current cell, in points.
 *
 * @param {Number} width - the column width, in points
 *
 * @return {DocumentApp.TableCell} the current element
 */
DocumentApp.TableCell.prototype.setWidth = function(width){};

/** @constructor */
DocumentApp.TableOfContents = function(){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.TableOfContents} the current element
 */
DocumentApp.TableOfContents.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.TableOfContents} the new copy
 */
DocumentApp.TableOfContents.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.TableOfContents.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.TableOfContents.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.TableOfContents.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.TableOfContents.prototype.getAttributes = function(){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.TableOfContents.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.TableOfContents.prototype.getChildIndex = function(child){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.TableOfContents.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.TableOfContents.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.TableOfContents.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.TableOfContents.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.TableOfContents.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.TableOfContents.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.TableOfContents.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.TableOfContents.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.TableOfContents.prototype.isAtDocumentEnd = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.TableOfContents} the removed element
 */
DocumentApp.TableOfContents.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.TableOfContents.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.TableOfContents} the current element
 */
DocumentApp.TableOfContents.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.TableOfContents} the current element
 */
DocumentApp.TableOfContents.prototype.setLinkUrl = function(url){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.TableOfContents} the current element
 */
DocumentApp.TableOfContents.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.TableRow = function(){};

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 *
 * @return {DocumentApp.TableCell} the new table cell
 */
DocumentApp.TableRow.prototype.appendTableCell = function(){};

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 *
 * @param {DocumentApp.TableCell} tableCell - the table cell to append
 *
 * @return {DocumentApp.TableCell} the appended table cell
 */
DocumentApp.TableRow.prototype.appendTableCell = function(tableCell){};

/**
 * Clears the contents of the element.
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.TableRow.prototype.clear = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.TableRow} the new copy
 */
DocumentApp.TableRow.prototype.copy = function(){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.TableRow.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for a descendant of the specified
 type.
 *
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */
DocumentApp.TableRow.prototype.findElement = function(elementType){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.TableRow.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.TableRow.prototype.getAttributes = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified cell index.
 *
 * @param {number} cellIndex - the index of the cell to retrieve
 *
 * @return {DocumentApp.TableCell} the table cell
 */
DocumentApp.TableRow.prototype.getCell = function(cellIndex){};

/**
 * Retrieves the child element at the specified child index.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document.
 var firstChild = body.getChild(0);

 // If it&#39;s a paragraph, set its contents.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 }
 </code></pre>
 *
 * @param {number} childIndex - the index of the child element to retrieve
 *
 * @return {DocumentApp.Element} the child element at the specified index
 */
DocumentApp.TableRow.prototype.getChild = function(childIndex){};

/**
 * Retrieves the child index for the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 *
 * @return {number} the child index
 */
DocumentApp.TableRow.prototype.getChildIndex = function(child){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.TableRow.prototype.getLinkUrl = function(){};

/**
 * Retrieves the minimum height, in points.
 *
 * @return {number} the minimum height, in points
 */
DocumentApp.TableRow.prototype.getMinimumHeight = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.TableRow.prototype.getNextSibling = function(){};

/**
 * Retrieves the number of cells in the row.
 *
 * @return {number} the number of cells
 */
DocumentApp.TableRow.prototype.getNumCells = function(){};

/**
 * Retrieves the number of children.

 <pre class="prettyprint">
 <code>
 // Get the body section of the active document.
 var body = DocumentApp.getActiveDocument().getBody();

 // Log the number of elements in the document.
 Logger.log(&quot;There are &quot; + body.getNumChildren() +
     &quot; elements in the document body.&quot;);
 </code></pre>
 *
 * @return {number} the number of children
 */
DocumentApp.TableRow.prototype.getNumChildren = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.TableRow.prototype.getParent = function(){};

/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the current row.
 *
 * @return {DocumentApp.Table} the table containing the current row
 */
DocumentApp.TableRow.prototype.getParentTable = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.TableRow.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.TableRow.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.TableRow.prototype.getTextAlignment = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.TableRow.prototype.getType = function(){};

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 *
 * @return {DocumentApp.TableCell} the new table cell
 */
DocumentApp.TableRow.prototype.insertTableCell = function(childIndex){};

/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index.
 *
 * @param {number} childIndex - the index at which to insert the element
 * @param {DocumentApp.TableCell} tableCell - the table cell to insert
 *
 * @return {DocumentApp.TableCell} the inserted table cell
 */
DocumentApp.TableRow.prototype.insertTableCell = function(childIndex, tableCell){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.TableRow.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.TableRow} the merged element
 */
DocumentApp.TableRow.prototype.merge = function(){};

/**
 * Removes the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified cell index.
 *
 * @param {number} cellIndex - the index of the cell to remove
 *
 * @return {DocumentApp.TableCell} the removed cell
 */
DocumentApp.TableRow.prototype.removeCell = function(cellIndex){};

/**
 * Removes the specified child element.
 *
 * @param {DocumentApp.Element} child - the child element to remove
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.TableRow.prototype.removeChild = function(child){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.TableRow} the removed element
 */
DocumentApp.TableRow.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.TableRow.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.TableRow.prototype.setAttributes = function(attributes){};

/**
 * Sets the link url.
 *
 * @param {String} url - the link url
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.TableRow.prototype.setLinkUrl = function(url){};

/**
 * Sets the minimum height, in points.
 *
 * @param {number} minHeight - the minimum height, in points
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.TableRow.prototype.setMinimumHeight = function(minHeight){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.TableRow} the current element
 */
DocumentApp.TableRow.prototype.setTextAlignment = function(textAlignment){};

/** @constructor */
DocumentApp.Text = function(){};

/**
 * Appends the specified text at the given character offset.
 *
 * @param {String} text - the text to append
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.appendText = function(text){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.Text} the new copy
 */
DocumentApp.Text.prototype.copy = function(){};

/**
 * Deletes a range of text.
 *
 * @param {number} startOffset - the character offset of the first character to delete
 * @param {number} endOffsetInclusive - the character offset of the last character to delete
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.deleteText = function(startOffset, endOffsetInclusive){};

/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.

 <p>Use <code>editAsText</code> for manipulating the elements contents as rich
 text. The <code>editAsText</code> mode ignores non-text elements (such as
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).

 <p>Child elements fully contained within a deleted text range are removed
 from the element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Insert two paragraphs separated by a paragraph containing an
 // horizontal rule.
 body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 body.insertHorizontalRule(0);
 body.insertParagraph(0, &quot;An example.&quot;);

 // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 body.editAsText().deleteText(14, 25);
 </code></pre>
 *
 * @return {DocumentApp.Text} a text version of the current element
 */
DocumentApp.Text.prototype.editAsText = function(){};

/**
 * Searches the contents of the element for the specified text pattern using
 regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.
 *
 * @param {String} searchPattern - the pattern to search for
 *
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null
     if there is no match
 */
DocumentApp.Text.prototype.findText = function(searchPattern){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.Text.prototype.getAttributes = function(){};

/**
 * Retrieves the background color setting.
 *
 * @return {String} the background color, or null if the element contains multiple
     values for this attribute
 */
DocumentApp.Text.prototype.getBackgroundColor = function(){};

/**
 * Retrieves the font family setting. The name can be any font from the Font
 menu in Docs or
 <a href="https://www.google.com/fonts">Google Fonts</a>, and is
 case-sensitive. The methods <code>getFontFamily()</code> and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#setFontFamily(String)'>setFontFamily(fontFamilyName)</a></code> now use string names for fonts instead of
 the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code>
 enum. Although this enum is deprecated, it will remain available for
 compatibility with older scripts.
 *
 * @return {String} the font family, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Text.prototype.getFontFamily = function(){};

/**
 * Retrieves the font size setting.
 *
 * @return {number} the font size, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Text.prototype.getFontSize = function(){};

/**
 * Retrieves the foreground color setting.
 *
 * @return {String} the foreground color, or null if the element contains multiple
     values for this attribute
 */
DocumentApp.Text.prototype.getForegroundColor = function(){};

/**
 * Retrieves the link url.
 *
 * @return {String} the link url, or null if the element contains multiple values
     for this attribute
 */
DocumentApp.Text.prototype.getLinkUrl = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.Text.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.Text.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.Text.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the contents of the element as a text string.
 *
 * @return {String} the contents of the element as text string
 */
DocumentApp.Text.prototype.getText = function(){};

/**
 * Gets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 *
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of
     text alignments or if the text alignment has never been set
 */
DocumentApp.Text.prototype.getTextAlignment = function(){};

/**
 * Retrieves the set of text indices that correspond to the start of
 distinct text formatting runs.
 *
 * @return {Integer[]} the set of text indices at which text formatting changes
 */
DocumentApp.Text.prototype.getTextAttributeIndices = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.Text.prototype.getType = function(){};

/**
 * Inserts the specified text at the given character offset.
 *
 * @param {number} offset - the character offset at which to insert
 * @param {String} text - the text to insert
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.insertText = function(offset, text){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.Text.prototype.isAtDocumentEnd = function(){};

/**
 * Retrieves the bold setting.
 *
 * @return {Boolean} whether the text is bold, or null if the element contains multiple
     values for this attribute
 */
DocumentApp.Text.prototype.isBold = function(){};

/**
 * Retrieves the italic setting.
 *
 * @return {Boolean} whether the text is italic, or null if the element contains
     multiple values for this attribute
 */
DocumentApp.Text.prototype.isItalic = function(){};

/**
 * Retrieves the strikethrough setting.
 *
 * @return {Boolean} whether the text is strikethrough, or null if the element contains
     multiple values for this attribute
 */
DocumentApp.Text.prototype.isStrikethrough = function(){};

/**
 * Retrieves the underline setting.
 *
 * @return {Boolean} whether the text is underlined, or null if the element contains
   multiple values for this attribute
 */
DocumentApp.Text.prototype.isUnderline = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.Text} the merged element
 */
DocumentApp.Text.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.Text} the removed element
 */
DocumentApp.Text.prototype.removeFromParent = function(){};

/**
 * Replaces all occurrences of a given text pattern with a given replacement
 string, using regular expressions.

 <p>A subset of the JavaScript regular expression features are not
 fully supported, such as capture groups and mode modifiers.

 <p>The provided regular expression pattern is independently matched
 against each text block contained in the current element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 </code></pre>
 *
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 *
 * @return {DocumentApp.Element} the current element
 */
DocumentApp.Text.prototype.replaceText = function(searchPattern, replacement){};

/**
 * Applies the specified attributes to the given character range.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.
 *
 * @param {number} startOffset - the text range's start offset
 * @param {number} endOffsetInclusive - the text range's end offset
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setAttributes = function(startOffset, endOffsetInclusive, attributes){};

/**
 * Sets the background color for the specified character range.
 *
 * @param {number} startOffset - the text range's start offset
 * @param {number} endOffsetInclusive - the text range's end offset
 * @param {String} color - the background color
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setBackgroundColor = function(startOffset, endOffsetInclusive, color){};

/**
 * Sets the bold setting.
 *
 * @param {Boolean} bold - the bold setting
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setBold = function(bold){};

/**
 * Sets the font family for the specified character range. The name can be any
 font from the Font menu in Docs or
 <a href="https://www.google.com/fonts">Google Fonts</a>, and is
 case-sensitive. Unrecognized font names will render as Arial. The
 methods <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#getFontFamily(Integer)'>getFontFamily(offset)</a></code> and
 <code>setFontFamily(fontFamilyName)</code> now use string names for fonts
 instead of the
 <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code>
 enum. Although this enum is deprecated, it will remain available for
 compatibility with older scripts.
 *
 * @param {number} startOffset - the text range's start offset
 * @param {number} endOffsetInclusive - the text range's end offset
 * @param {String} fontFamilyName - the name of the font family, from the Font menu in Docs or Google Fonts
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setFontFamily = function(startOffset, endOffsetInclusive, fontFamilyName){};

/**
 * Sets the font size.
 *
 * @param {number} size - the font size
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setFontSize = function(size){};

/**
 * Sets the foreground color for the specified character range.
 *
 * @param {number} startOffset - the text range's start offset
 * @param {number} endOffsetInclusive - the text range's end offset
 * @param {String} color - the foreground color
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setForegroundColor = function(startOffset, endOffsetInclusive, color){};

/**
 * Sets the italic setting.
 *
 * @param {Boolean} italic - the italic setting
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setItalic = function(italic){};

/**
 * Sets the link url for the specified character range.
 *
 * @param {number} startOffset - the text range's start offset
 * @param {number} endOffsetInclusive - the text range's end offset
 * @param {String} url - the link url
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setLinkUrl = function(startOffset, endOffsetInclusive, url){};

/**
 * Sets the strikethrough setting.
 *
 * @param {Boolean} strikethrough - the strikethrough setting
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setStrikethrough = function(strikethrough){};

/**
 * Sets the text contents.
 *
 * @param {String} text - the new text contents
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setText = function(text){};

/**
 * Sets the text alignment. The available types of alignment are
 <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.

 <pre class="prettyprint">
 <code>
 // Make the entire first paragraph be superscript.
 var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 </code></pre>
 *
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setTextAlignment = function(textAlignment){};

/**
 * Sets the underline setting.
 *
 * @param {Boolean} underline - the underline setting
 *
 * @return {DocumentApp.Text} the current element
 */
DocumentApp.Text.prototype.setUnderline = function(underline){};

/** @constructor */
DocumentApp.UnsupportedElement = function(){};

/**
 * Returns a detached, deep copy of the current element.

 <p>Any child elements present in the element are also copied. The new
 element will not have a parent.
 *
 * @return {DocumentApp.UnsupportedElement} the new copy
 */
DocumentApp.UnsupportedElement.prototype.copy = function(){};

/**
 * Retrieves the element's attributes.

 <p>The result is an object containing a property for each valid element
 attribute where each property name corresponds to an item in the
 <code>DocumentApp.Attribute</code> enumeration.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append a styled paragraph.
 var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 par.setBold(true);
 par.setItalic(true);

 // Retrieve the paragraph&#39;s attributes.
 var atts = par.getAttributes();

 // Log the paragraph attributes.
 for (var att in atts) {
   Logger.log(att + &quot;:&quot; + atts[att]);
 }
 </code></pre>
 *
 * @return {Object} the element's attributes
 */
DocumentApp.UnsupportedElement.prototype.getAttributes = function(){};

/**
 * Retrieves the element's next sibling element.

 <p>The next sibling has the same parent and follows the current
 element.
 *
 * @return {DocumentApp.Element} the next sibling element
 */
DocumentApp.UnsupportedElement.prototype.getNextSibling = function(){};

/**
 * Retrieves the element's parent element.

 <p>The parent element contains the current element.
 *
 * @return {DocumentApp.ContainerElement} the parent element
 */
DocumentApp.UnsupportedElement.prototype.getParent = function(){};

/**
 * Retrieves the element's previous sibling element.

 <p>The previous sibling has the same parent and precedes the current
 element.
 *
 * @return {DocumentApp.Element} the previous sibling element
 */
DocumentApp.UnsupportedElement.prototype.getPreviousSibling = function(){};

/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.

 <p>Use <code>getType()</code> to determine the exact type of a given element.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Obtain the first element in the document body.

 var firstChild = body.getChild(0);

 // Use getType() to determine the element&#39;s type.
 if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
   Logger.log(&#39;The first element is a paragraph.&#39;);
 } else {
   Logger.log(&#39;The first element is not a paragraph.&#39;);
 }
 </code></pre>
 *
 * @return {DocumentApp.ElementType} the element type
 */
DocumentApp.UnsupportedElement.prototype.getType = function(){};

/**
 * Determines whether the element is at the end of the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 *
 * @return {Boolean} whether the element is at the end of the document
 */
DocumentApp.UnsupportedElement.prototype.isAtDocumentEnd = function(){};

/**
 * Merges the element with the preceding sibling of the same type.

 <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any
 child elements contained in the current element are moved to the preceding
 sibling element.

 <p>The current element is removed from the document.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Append two paragraphs to the document.
 var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);

 // Merge the newly added paragraphs into a single paragraph.
 par2.merge();
 </code></pre>
 *
 * @return {DocumentApp.UnsupportedElement} the merged element
 */
DocumentApp.UnsupportedElement.prototype.merge = function(){};

/**
 * Removes the element from its parent.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Remove all images in the document body.
 var imgs = body.getImages();
 for (var i = 0; i &lt; imgs.length; i++) {
   imgs[i].removeFromParent();
 }
 </code></pre>
 *
 * @return {DocumentApp.UnsupportedElement} the removed element
 */
DocumentApp.UnsupportedElement.prototype.removeFromParent = function(){};

/**
 * Sets the element's attributes.

 <p>The specified attributes parameter must be an object where each
 property name is an item in the <code>DocumentApp.Attribute</code> enumeration
 and each property value is the new value to be applied.

 <pre class="prettyprint">
 <code>
 var body = DocumentApp.getActiveDocument().getBody();

 // Define a custom paragraph style.
 var style = {};
 style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
     DocumentApp.HorizontalAlignment.RIGHT;
 style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 style[DocumentApp.Attribute.FONT_SIZE] = 18;
 style[DocumentApp.Attribute.BOLD] = true;

 // Append a plain paragraph.
 var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);

 // Apply the custom style.
 par.setAttributes(style);
 </code></pre>
 *
 * @param {Object} attributes - the element's attributes
 *
 * @return {DocumentApp.UnsupportedElement} the current element
 */
DocumentApp.UnsupportedElement.prototype.setAttributes = function(attributes){};

