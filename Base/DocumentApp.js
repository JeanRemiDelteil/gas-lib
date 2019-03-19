/**********************************************
 * @namespace DocumentApp
 ***********************************************/

/**
 * @class DocumentApp
 */

/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/attribute.html'>Attribute</a></code> enumeration.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> enumeration.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType
 */
/**
 * The <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enumeration.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code> enumeration.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code> enumeration.
 * 
 * @typedef {DocumentApp.HorizontalAlignment} DocumentApp.HorizontalAlignment
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code> enumeration.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-layout.html'>PositionedLayout</a></code> enumeration.
 * 
 * @typedef {DocumentApp.PositionedLayout} DocumentApp.PositionedLayout
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text-alignment.html'>TextAlignment</a></code> enumeration.
 * 
 * @typedef {DocumentApp.TextAlignment} DocumentApp.TextAlignment
 */
/**
 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/vertical-alignment.html'>VerticalAlignment</a></code> enumeration.
 * 
 * @typedef {DocumentApp.VerticalAlignment} DocumentApp.VerticalAlignment
 */
/**
 * Creates and returns a new document.
 * 
 * <pre class="prettyprint">
 * // Create and open a new document.
 * var doc = DocumentApp.create('Document Name');
 * </pre>
 * 
 * @function DocumentApp.create
 * 
 * @param {String} name - the new document's name
 * 
 * @return {DocumentApp.Document} the new document instance
 */


/**
 * Returns the document to which the script is <a
 * href="/apps-script/scripts_containers">container-bound</a>. To interact with document to which
 * the script is not container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#openById(String)'>openById(id)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#openByUrl(String)'>openByUrl(url)</a></code>
 * instead.
 * 
 * <pre class="prettyprint">
 * // Get the document to which this script is bound.
 * var doc = DocumentApp.getActiveDocument();
 * </pre>
 * 
 * @function DocumentApp.getActiveDocument
 * 
 * @return {DocumentApp.Document} the document instance
 */


/**
 * Returns an instance of the document's user-interface environment that allows the script to add
 * features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 * current instance of an open document, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the document. For more information, see the
 * guides to <a href="/apps-script/guides/menus">menus</a> and <a
 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint">
 * // Add a custom menu to the active document, including a separator and a sub-menu.
 * function onOpen(e) {
 *   DocumentApp.getUi()
 *       .createMenu('My Menu')
 *       .addItem('My menu item', 'myFunction')
 *       .addSeparator()
 *       .addSubMenu(DocumentApp.getUi().createMenu('My sub-menu')
 *           .addItem('One sub-menu item', 'mySecondFunction')
 *           .addItem('Another sub-menu item', 'myThirdFunction'))
 *       .addToUi();
 * }
 * </pre>
 * 
 * @function DocumentApp.getUi
 * 
 * @return {Ui} an instance of this document's user-interface environment
 */


/**
 * Returns the document with the specified ID. If the script is container-bound to the document,
 * use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()'>getActiveDocument()</a></code> instead.
 * 
 * <pre class="prettyprint">
 * // Open a document by ID.
 * var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
 * </pre>
 * 
 * @function DocumentApp.openById
 * 
 * @param {String} id - the ID of the document to open
 * 
 * @return {DocumentApp.Document} the document instance
 */


/**
 * Opens and returns the document with the specified URL. If the script is container-bound to the
 * document, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()'>getActiveDocument()</a></code> instead.
 * 
 * <pre class="prettyprint">
 * // Open a document by URL.
 * var doc = DocumentApp.openByUrl(
 *     'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit');
 * </pre>
 * 
 * @function DocumentApp.openByUrl
 * 
 * @param {String} url - the URL of the document to open
 * 
 * @return {DocumentApp.Document} the document instance
 */



/**
 * @class DocumentApp.Attribute
 */

/**
 * The background color of an element (Paragraph, Table, etc) or document.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.BACKGROUND_COLOR
 */
/**
 * The font weight setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.BOLD
 */
/**
 * The border color, for table elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.BORDER_COLOR
 */
/**
 * The border width in points, for table elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.BORDER_WIDTH
 */
/**
 * The code contents, for equation elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.CODE
 */
/**
 * The font family setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.FONT_FAMILY
 */
/**
 * The font size setting in points, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.FONT_SIZE
 */
/**
 * The foreground color setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.FOREGROUND_COLOR
 */
/**
 * The glyph type, for list item elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.GLYPH_TYPE
 */
/**
 * The heading type, for paragraph elements (for example, <code>DocumentApp.ParagraphHeading.HEADING1</code>).
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.HEADING
 */
/**
 * The height setting, for image elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.HEIGHT
 */
/**
 * The horizontal alignment, for paragraph elements (for example, <code>DocumentApp.HorizontalAlignment.CENTER</code>).
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.HORIZONTAL_ALIGNMENT
 */
/**
 * The end indentation setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.INDENT_END
 */
/**
 * The first line indentation setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.INDENT_FIRST_LINE
 */
/**
 * The start indentation setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.INDENT_START
 */
/**
 * The font style setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.ITALIC
 */
/**
 * The text direction setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.LEFT_TO_RIGHT
 */
/**
 * The line spacing setting as a multiplier, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.LINE_SPACING
 */
/**
 * The link URL, for rich text. The default link style (foreground color, underline) is
 * automatically applied.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.LINK_URL
 */
/**
 * The ID of the encompassing list, for list item elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.LIST_ID
 */
/**
 * The bottom margin setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.MARGIN_BOTTOM
 */
/**
 * The left margin setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.MARGIN_LEFT
 */
/**
 * The right margin setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.MARGIN_RIGHT
 */
/**
 * The top margin setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.MARGIN_TOP
 */
/**
 * The minimum height setting in points, for table row elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.MINIMUM_HEIGHT
 */
/**
 * The item nesting level, for list item elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.NESTING_LEVEL
 */
/**
 * The bottom padding setting in points, for table cell elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.PADDING_BOTTOM
 */
/**
 * The left padding setting in points, for table cell elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.PADDING_LEFT
 */
/**
 * The right padding setting in points, for table cell elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.PADDING_RIGHT
 */
/**
 * The top padding setting in points, for table cell elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.PADDING_TOP
 */
/**
 * The page height setting in points, for documents.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.PAGE_HEIGHT
 */
/**
 * The page width setting in points, for documents.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.PAGE_WIDTH
 */
/**
 * The bottom spacing setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.SPACING_AFTER
 */
/**
 * The top spacing setting in points, for paragraph elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.SPACING_BEFORE
 */
/**
 * The strike-through setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.STRIKETHROUGH
 */
/**
 * The underline setting, for rich text.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.UNDERLINE
 */
/**
 * The vertical alignment setting, for table cell elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.VERTICAL_ALIGNMENT
 */
/**
 * The width setting, for table cell and image elements.
 * 
 * @typedef {DocumentApp.Attribute} DocumentApp.Attribute.WIDTH
 */

/**
 * @class DocumentApp.Body
 */

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#appendHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#appendImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendImage</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * @function DocumentApp.Body#appendImage
 * 
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * <p>Use this version of <code>appendListItem</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * @function DocumentApp.Body#appendListItem
 * 
 * @param {DocumentApp.ListItem} listItem - the list item to append
 * 
 * @return {DocumentApp.ListItem} the appended list item
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> containing the specified text contents.
 * 
 * <p>Consecutive list items are added as part of the same list.
 * 
 * @function DocumentApp.Body#appendListItem
 * 
 * @param {String} text - the list item's text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#appendPageBreak
 * 
 * @return {DocumentApp.PageBreak} the new page break
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendPageBreak</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * @function DocumentApp.Body#appendPageBreak
 * 
 * @param {DocumentApp.PageBreak} pageBreak - the page break to append
 * 
 * @return {DocumentApp.PageBreak} the appended page break
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#appendParagraph
 * 
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 * 
 * @return {DocumentApp.Paragraph} the appended paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
 * 
 * @function DocumentApp.Body#appendParagraph
 * 
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.Body#appendTable
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>Use this version of <code>appendTable</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.Body#appendTable
 * 
 * @param {DocumentApp.Table} table - the table to append
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> for each specified string value.
 * 
 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.Body#appendTable
 * 
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.Body#clear
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Body#copy
 * 
 * @return {DocumentApp.Body} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.Body#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.Body#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Body#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Body#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Body#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Body#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Body#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.Body#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 * 
 * @function DocumentApp.Body#getFootnotes
 * @deprecated
 * 
 * @return {DocumentApp.Footnote[]} the section footnotes
 */


/**
 * Retrieves the set of attributes for the provided <code>ParagraphHeading</code>.
 * 
 * @function DocumentApp.Body#getHeadingAttributes
 * 
 * @param {DocumentApp.ParagraphHeading} paragraphHeading - the heading whose attributes will be retrieved
 * 
 * @return {Object} a map of the attributes and their current values
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
 * 
 * @function DocumentApp.Body#getImages
 * 
 * @return {DocumentApp.InlineImage[]} the section images
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.Body#getLinkUrl
 * @deprecated
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
 * 
 * @function DocumentApp.Body#getListItems
 * 
 * @return {DocumentApp.ListItem[]} the section list items
 */


/**
 * Retrieves the bottom margin, in points.
 * 
 * @function DocumentApp.Body#getMarginBottom
 * 
 * @return {Number} the bottom margin, in points
 */


/**
 * Retrieves the left margin, in points.
 * 
 * @function DocumentApp.Body#getMarginLeft
 * 
 * @return {Number} the left margin, in points
 */


/**
 * Retrieves the right margin.
 * 
 * @function DocumentApp.Body#getMarginRight
 * 
 * @return {Number} the right margin, in points
 */


/**
 * Retrieves the top margin.
 * 
 * @function DocumentApp.Body#getMarginTop
 * 
 * @return {Number} the top margin, in points
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Body#getNextSibling
 * @deprecated
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Body#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the page height, in points.
 * 
 * @function DocumentApp.Body#getPageHeight
 * 
 * @return {Number} the page height, in points
 */


/**
 * Retrieves the page width, in points.
 * 
 * @function DocumentApp.Body#getPageWidth
 * 
 * @return {Number} the page width, in points
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 * 
 * @function DocumentApp.Body#getParagraphs
 * 
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Body#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Body#getPreviousSibling
 * @deprecated
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
 * 
 * @function DocumentApp.Body#getTables
 * 
 * @return {DocumentApp.Table[]} the section tables
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.Body#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.Body#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Body#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#insertHorizontalRule
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
 * index.
 * 
 * @function DocumentApp.Body#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.InlineImage} image - the image to insert
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 * 
 * @function DocumentApp.Body#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 * 
 * @return {DocumentApp.ListItem} the inserted list item
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.Body#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the list item's text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#insertPageBreak
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.PageBreak} the new page break
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.Body#insertPageBreak
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.PageBreak} pageBreak - the p[age break to insert
 * 
 * @return {DocumentApp.PageBreak} the inserted page break
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 * 
 * @function DocumentApp.Body#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 * 
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.Body#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.Body#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.Body#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Table} table - the table to insert
 * 
 * @return {DocumentApp.Table} the inserted table
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
 * 
 * @function DocumentApp.Body#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Body#isAtDocumentEnd
 * @deprecated
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.Body#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Body#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Body#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the attributes for the provided <code>ParagraphHeading</code>.
 * 
 * @function DocumentApp.Body#setHeadingAttributes
 * 
 * @param {DocumentApp.ParagraphHeading} paragraphHeading - the heading whose attributes will be set
 * @param {Object} attributes - a map of attributes and the values to set them to
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.Body#setLinkUrl
 * @deprecated
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the bottom margin, in points.
 * 
 * @function DocumentApp.Body#setMarginBottom
 * 
 * @param {Number} marginBottom - the bottom margin, in points
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the left margin, in points.
 * 
 * @function DocumentApp.Body#setMarginLeft
 * 
 * @param {Number} marginLeft - the left margin, in points
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the right margin, in points.
 * 
 * @function DocumentApp.Body#setMarginRight
 * 
 * @param {Number} marginRight - the right margin
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the top margin.
 * 
 * @function DocumentApp.Body#setMarginTop
 * 
 * @param {Number} marginTop - the top margin, in points
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the page height, in points.
 * 
 * @function DocumentApp.Body#setPageHeight
 * 
 * @param {Number} pageHeight - the page height, in points
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the page width, in points.
 * 
 * @function DocumentApp.Body#setPageWidth
 * 
 * @param {Number} pageWidth - the page width, in points
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the contents as plain text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.Body#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.Body#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.Body} the current element
 */



/**
 * @class DocumentApp.Bookmark
 */

/**
 * Gets the ID of the <code>Bookmark</code>. The ID is unique within the document.
 * 
 * @function DocumentApp.Bookmark#getId
 * 
 * @return {String} the <code>Bookmark</code>'s ID, which is unique within the document
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code> of the <code>Bookmark</code> within the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. The <code>Position</code> remains accurate so long as the <code>Bookmark</code> is not deleted, even if the script
 * changes the document structure.
 * 
 * @function DocumentApp.Bookmark#getPosition
 * 
 * @return {DocumentApp.Position} the position of the <code>Bookmark</code>
 */


/**
 * Deletes the <code>Bookmark</code>. Calling this method on a <code>Bookmark</code> that has already been
 * deleted has no effect.
 * 
 * @function DocumentApp.Bookmark#remove
 * 
 * @return void
 */



/**
 * @class DocumentApp.ContainerElement
 */

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asBody
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asEquation
 * 
 * @return {DocumentApp.Equation} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asFooterSection
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asFootnoteSection
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asHeaderSection
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asListItem
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asParagraph
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asTable
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asTableCell
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asTableOfContents
 * 
 * @return {DocumentApp.TableOfContents} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.ContainerElement#asTableRow
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.ContainerElement#clear
 * 
 * @return {DocumentApp.ContainerElement} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.ContainerElement#copy
 * 
 * @return {DocumentApp.ContainerElement} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.ContainerElement#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.ContainerElement#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.ContainerElement#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.ContainerElement#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.ContainerElement#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.ContainerElement#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.ContainerElement#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.ContainerElement#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.ContainerElement#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.ContainerElement#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.ContainerElement#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#merge
 * 
 * @return {DocumentApp.ContainerElement} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#removeFromParent
 * 
 * @return {DocumentApp.ContainerElement} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.ContainerElement} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.ContainerElement#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.ContainerElement} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.ContainerElement#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.ContainerElement} the current element
 */



/**
 * @class DocumentApp.Document
 */

/**
 * Adds a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> at the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>.
 * 
 * @function DocumentApp.Document#addBookmark
 * 
 * @param {DocumentApp.Position} position - the position of the new bookmark
 * 
 * @return {DocumentApp.Bookmark} the new bookmark
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DocumentApp.Document#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function DocumentApp.Document#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If any of the
 * users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function DocumentApp.Document#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Adds a document footer section, if none exists.
 * 
 * @function DocumentApp.Document#addFooter
 * 
 * @return {DocumentApp.FooterSection} the document footer
 */


/**
 * Adds a document header section, if none exists.
 * 
 * @function DocumentApp.Document#addHeader
 * 
 * @return {DocumentApp.HeaderSection} the document header
 */


/**
 * Adds a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code>, which is a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code> that has a name and ID to allow
 * later retrieval. Names are not necessarily unique; several different ranges in the same
 * document may share the same name, much like a class in HTML. By contrast, IDs are unique within
 * the document, like an ID in HTML. Once a <code>NamedRange</code> has been added to a document, it
 * cannot be modified, only removed.
 * 
 * <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
 * unintended conflicts between scripts, consider prefixing range names with a unique string.
 * 
 * <pre class="prettyprint"><code>
 * // Change the user&#39;s selection to a range that includes every table in the document.
 * var doc = DocumentApp.getActiveDocument();
 * var rangeBuilder = doc.newRange();
 * var tables = doc.getBody().getTables();
 * for (var i = 0; i &lt; tables.length; i++) {
 *   rangeBuilder.addElement(tables[i]);
 * }
 * doc.setSelection(rangeBuilder.build());
 * </code></pre>
 * 
 * @function DocumentApp.Document#addNamedRange
 * 
 * @param {String} name - the name for the range, which does not need to be unique; range names must be at
 *     least 1 character, and no more than 256 characters
 * @param {DocumentApp.Range} range - the range of elements to associate with the name; the range can be <a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#getSelection()'>the active selection</a>, a <a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html#findText(String)'>search result</a>, or manually constructed with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#newRange()'>newRange()</a></code>
 * 
 * @return {DocumentApp.NamedRange} the new <code>NamedRange</code>
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function DocumentApp.Document#addViewer
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
 * on the list of editors, this method has no effect.
 * 
 * @function DocumentApp.Document#addViewer
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If any of the
 * users were already on the list of editors, this method has no effect for them.
 * 
 * @function DocumentApp.Document#addViewers
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Retrieves the current <code>Document</code> contents as a blob of the specified type.
 * 
 * @function DocumentApp.Document#getAs
 * 
 * @param {String} contentType - the MIME type to convert to; currently only <code>&#39;application/pdf&#39;</code> is
 *     supported
 * 
 * @return {Blob} the current document as a blob
 */


/**
 * Retrieves the current <code>Document</code> contents as a blob.
 * 
 * @function DocumentApp.Document#getBlob
 * 
 * @return {Blob} the current document as a blob
 */


/**
 * Retrieves the active document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
 * 
 * <p>Documents may contain different types of sections (e.g. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>). The active section for a document is the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
 * 
 * <p>Element methods in <code>Document</code> delegate to the active <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
 * 
 * @function DocumentApp.Document#getBody
 * 
 * @return {DocumentApp.Body} the active document body section
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> with the given ID. This method returns <code>null</code> if no such <code>Bookmark</code> exists.
 * 
 * @function DocumentApp.Document#getBookmark
 * 
 * @param {String} id - the ID for the <code>Bookmark</code>
 * 
 * @return {DocumentApp.Bookmark} the <code>Bookmark</code> with the given ID, or <code>null</code> if no such <code>Bookmark</code>
 *     exists
 */


/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> objects in the document.
 * 
 * @function DocumentApp.Document#getBookmarks
 * 
 * @return {DocumentApp.Bookmark[]} an array of the <code>Bookmark</code> objects in the document
 */


/**
 * Gets the user's cursor in the active document. A script can only access the cursor of the user
 * who is running the script, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the document.
 * 
 * <pre class="prettyprint">
 * // Insert some text at the cursor position and make it bold.
 * var cursor = DocumentApp.getActiveDocument().getCursor();
 * if (cursor) {
 *   // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
 *   // containing element doesn't allow insertions, so show the user an error message.
 *   var element = cursor.insertText('ಠ‿ಠ');
 *   if (element) {
 *     element.setBold(true);
 *   } else {
 *     DocumentApp.getUi().alert('Cannot insert text here.');
 *   }
 * } else {
 *   DocumentApp.getUi().alert('Cannot find a cursor.');
 * }
 * </pre>
 * 
 * @function DocumentApp.Document#getCursor
 * 
 * @return {DocumentApp.Position} a representation of the user's cursor, or <code>null</code> if the user does not have a
 *     cursor placed in the document or if the script is not bound to the document
 */


/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user who executes the script does
 * not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, this method throws an exception.
 * 
 * @function DocumentApp.Document#getEditors
 * 
 * @return {User[]} An array of users with edit permission.
 */


/**
 * Retrieves the document's footer section, if one exists.
 * 
 * @function DocumentApp.Document#getFooter
 * 
 * @return {DocumentApp.FooterSection} the document footer
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code> elements in the document body.
 * 
 * <p>Calls to <code>getFootnotes</code> cause an iteration over the document's elements. For large
 * documents, avoid unnecessary calls to this method.
 * 
 * @function DocumentApp.Document#getFootnotes
 * 
 * @return {DocumentApp.Footnote[]} the document footnotes
 */


/**
 * Retrieves the document's header section, if one exists.
 * 
 * @function DocumentApp.Document#getHeader
 * 
 * @return {DocumentApp.HeaderSection} the document header
 */


/**
 * Retrieves the document's unique identifier. The document ID is used with <code>DocumentApp.openById()</code> to open a specific document instance.
 * 
 * @function DocumentApp.Document#getId
 * 
 * @return {String} the document's ID
 */


/**
 * Retrieves the title of the document.
 * 
 * @function DocumentApp.Document#getName
 * 
 * @return {String} the document title
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> with the given ID. This method returns <code>null</code> if no such
 * <code>NamedRange</code> exists. Names are not necessarily unique; several different ranges in the
 * same document may share the same name, much like a class in HTML. By contrast, IDs are unique
 * within the document, like an ID in HTML.
 * 
 * @function DocumentApp.Document#getNamedRangeById
 * 
 * @param {String} id - the range's ID, which is unique within the document
 * 
 * @return {DocumentApp.NamedRange} the <code>NamedRange</code> with the given ID, or <code>null</code> if no such range exists
 */


/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> objects in the document.
 * 
 * <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
 * unintended conflicts between scripts, consider prefixing range names with a unique string.
 * 
 * @function DocumentApp.Document#getNamedRanges
 * 
 * @return {DocumentApp.NamedRange[]} an array of the <code>NamedRange</code> objects in the document, possibly including multiple
 *     ranges with the same name
 */


/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> objects in the document with the given name. Names are not
 * necessarily unique; several different ranges in the same document may share the same name, much
 * like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML.
 * 
 * <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
 * unintended conflicts between scripts, consider prefixing range names with a unique string.
 * 
 * @function DocumentApp.Document#getNamedRanges
 * 
 * @param {String} name - the range's name, which is not necessarily unique
 * 
 * @return {DocumentApp.NamedRange[]} an array of the <code>NamedRange</code> objects in the document with the given name
 */


/**
 * Gets the user's selection in the active document. A script can only access the selection of the
 * user who is running the script, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the document.
 * 
 * <pre class="prettyprint">
 * // Display a dialog box that tells the user how many elements are included in the selection.
 * var selection = DocumentApp.getActiveDocument().getSelection();
 * if (selection) {
 *   var elements = selection.getRangeElements();
 *   DocumentApp.getUi().alert('Number of selected elements: ' + elements.length);
 * } else {
 *   DocumentApp.getUi().alert('Nothing is selected.');
 * }
 * </pre>
 * 
 * @function DocumentApp.Document#getSelection
 * 
 * @return {DocumentApp.Range} a representation of the user's selection, or <code>null</code> if the user does not have
 *     anything selected in the document or if the script is not bound to the document
 */


/**
 * Retrieves the URL to access the current document.
 * 
 * <pre class="prettyprint"><code>
 * var doc = DocumentApp.getActiveDocument();
 * 
 * // Send out the link to open the document.
 * MailApp.sendEmail(&quot;&lt;email-address&gt;&quot;, doc.getName(), doc.getUrl());
 * </code></pre>
 * 
 * @function DocumentApp.Document#getUrl
 * 
 * @return {String} the URL to access the current document
 */


/**
 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user who executes
 * the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, this method throws an exception.
 * 
 * @function DocumentApp.Document#getViewers
 * 
 * @return {User[]} An array of users with view or comment permission.
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>, which is a reference to a location in the document, relative to
 * a specific element. The user's cursor is represented as a <code>Position</code>, among other uses.
 * 
 * <pre class="prettyprint"><code>
 * // Append a paragraph, then place the user&#39;s cursor after the first word of the new paragraph.
 * var doc = DocumentApp.getActiveDocument();
 * var paragraph = doc.getBody().appendParagraph(&#39;My new paragraph.&#39;);
 * var position = doc.newPosition(paragraph.getChild(0), 2);
 * doc.setCursor(position);
 * </code></pre>
 * 
 * @function DocumentApp.Document#newPosition
 * 
 * @param {DocumentApp.Element} element - the element that will contain the new <code>Position</code>; this must be either a
 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element or a container element like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>
 * @param {IntegerNum} offset - for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the number of characters before the <code>Position</code>;
 *     for other elements, the number of child elements before the <code>Position</code> within the
 *     same container element
 * 
 * @return {DocumentApp.Position} the new <code>Position</code>
 */


/**
 * Creates a builder used to construct <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code> objects from document elements.
 * 
 * <pre class="prettyprint"><code>
 * // Change the user&#39;s selection to a range that includes every table in the document.
 * var doc = DocumentApp.getActiveDocument();
 * var rangeBuilder = doc.newRange();
 * var tables = doc.getBody().getTables();
 * for (var i = 0; i &lt; tables.length; i++) {
 *   rangeBuilder.addElement(tables[i]);
 * }
 * doc.setSelection(rangeBuilder.build());
 * </code></pre>
 * 
 * @function DocumentApp.Document#newRange
 * 
 * @return {DocumentApp.RangeBuilder} the new builder
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire
 * domain.
 * 
 * @function DocumentApp.Document#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire
 * domain.
 * 
 * @function DocumentApp.Document#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This
 * method has no effect if the user is an editor, not a viewer or commenter. This method also does
 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who
 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's
 * entire domain.
 * 
 * @function DocumentApp.Document#removeViewer
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> for chaining.
 */


/**
 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This
 * method has no effect if the user is an editor, not a viewer. This method also does not block
 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have general
 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire domain.
 * 
 * @function DocumentApp.Document#removeViewer
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {DocumentApp.Document} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> for chaining.
 */


/**
 * Saves the current <code>Document</code>. Causes pending updates to be flushed and applied.
 * 
 * <p>The <code>saveAndClose()</code> method is automatically invoked at the end of script execution
 * for each open editable <code>Document</code>.
 * 
 * <p>A closed <code>Document</code> can't be edited. Use <code>DocumentApp.openById()</code> to reopen a
 * given document for editing.
 * 
 * @function DocumentApp.Document#saveAndClose
 * 
 * @return void
 */


/**
 * Sets the user's cursor in the active document, given a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>. A script can only
 * access the cursor of the user who is running the script, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the document.
 * 
 * <pre class="prettyprint"><code>
 * // Append a paragraph, then place the user&#39;s cursor after the first word of the new paragraph.
 * var doc = DocumentApp.getActiveDocument();
 * var paragraph = doc.getBody().appendParagraph(&#39;My new paragraph.&#39;);
 * var position = doc.newPosition(paragraph.getChild(0), 2);
 * doc.setCursor(position);
 * </code></pre>
 * 
 * @function DocumentApp.Document#setCursor
 * 
 * @param {DocumentApp.Position} position - the new cursor location
 * 
 * @return {DocumentApp.Document} this <code>Document</code>, for chaining
 */


/**
 * Sets the document title.
 * 
 * @function DocumentApp.Document#setName
 * 
 * @param {String} name - the new document title
 * 
 * @return {DocumentApp.Document} the current document
 */


/**
 * Sets the user's selection in the active document, given a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code>. A script can
 * only access the selection of the user who is running the script, and only if the script is <a
 * href="/apps-script/scripts_containers">bound</a> to the document.
 * 
 * <pre class="prettyprint"><code>
 * // Change the user&#39;s selection to a range that includes every table in the document.
 * var doc = DocumentApp.getActiveDocument();
 * var rangeBuilder = doc.newRange();
 * var tables = doc.getBody().getTables();
 * for (var i = 0; i &lt; tables.length; i++) {
 *   rangeBuilder.addElement(tables[i]);
 * }
 * doc.setSelection(rangeBuilder.build());
 * </code></pre>
 * 
 * @function DocumentApp.Document#setSelection
 * 
 * @param {DocumentApp.Range} range - the new range of elements to select
 * 
 * @return {DocumentApp.Document} this <code>Document</code>, for chaining
 */



/**
 * @class DocumentApp.Element
 */

/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asBody
 * 
 * @return {DocumentApp.Body} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asEquation
 * 
 * @return {DocumentApp.Equation} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function.html'>EquationFunction</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asEquationFunction
 * 
 * @return {DocumentApp.EquationFunction} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html'>EquationFunctionArgumentSeparator</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asEquationFunctionArgumentSeparator
 * 
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-symbol.html'>EquationSymbol</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asEquationSymbol
 * 
 * @return {DocumentApp.EquationSymbol} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asFooterSection
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asFootnote
 * 
 * @return {DocumentApp.Footnote} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asFootnoteSection
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asHeaderSection
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-drawing.html'>InlineDrawing</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asInlineDrawing
 * 
 * @return {DocumentApp.InlineDrawing} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asInlineImage
 * 
 * @return {DocumentApp.InlineImage} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asListItem
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asPageBreak
 * 
 * @return {DocumentApp.PageBreak} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asParagraph
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asTable
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asTableCell
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asTableOfContents
 * 
 * @return {DocumentApp.TableOfContents} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asTableRow
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>.
 * 
 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
 * type.
 * 
 * @function DocumentApp.Element#asText
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Element#copy
 * 
 * @return {DocumentApp.Element} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Element#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Element#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Element#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Element#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Element#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Element#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.Element#merge
 * 
 * @return {DocumentApp.Element} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Element#removeFromParent
 * 
 * @return {DocumentApp.Element} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Element#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Element} the current element
 */



/**
 * @class DocumentApp.ElementType
 */

/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.BODY_SECTION
 */
/**
 * The type corresponding to the <code><s>CommentSection</s></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.COMMENT_SECTION
 */
/**
 * The type that corresponds to the root of the document.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.DOCUMENT
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.EQUATION
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function.html'>EquationFunction</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.EQUATION_FUNCTION
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html'>EquationFunctionArgumentSeparator</a></code>
 * element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.EQUATION_FUNCTION_ARGUMENT_SEPARATOR
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-symbol.html'>EquationSymbol</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.EQUATION_SYMBOL
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.FOOTER_SECTION
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.FOOTNOTE
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.FOOTNOTE_SECTION
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.HEADER_SECTION
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.HORIZONTAL_RULE
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-drawing.html'>InlineDrawing</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.INLINE_DRAWING
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.INLINE_IMAGE
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.LIST_ITEM
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.PAGE_BREAK
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.PARAGRAPH
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.TABLE
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.TABLE_CELL
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.TABLE_OF_CONTENTS
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.TABLE_ROW
 */
/**
 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 * element.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.TEXT
 */
/**
 * The type corresponding to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/unsupported-element.html'>UnsupportedElement</a></code>. Unsupported elements
 * represent document portions that do not support scripting.
 * 
 * @typedef {DocumentApp.ElementType} DocumentApp.ElementType.UNSUPPORTED
 */

/**
 * @class DocumentApp.Equation
 */

/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.Equation#clear
 * 
 * @return {DocumentApp.Equation} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Equation#copy
 * 
 * @return {DocumentApp.Equation} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.Equation#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.Equation#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Equation#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Equation#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Equation#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Equation#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Equation#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.Equation#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.Equation#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Equation#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Equation#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Equation#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Equation#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.Equation#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.Equation#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Equation#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Equation#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.Equation#merge
 * 
 * @return {DocumentApp.Equation} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Equation#removeFromParent
 * 
 * @return {DocumentApp.Equation} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Equation#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Equation#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Equation} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.Equation#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.Equation} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.Equation#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.Equation} the current element
 */



/**
 * @class DocumentApp.EquationFunction
 */

/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.EquationFunction#clear
 * 
 * @return {DocumentApp.EquationFunction} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.EquationFunction#copy
 * 
 * @return {DocumentApp.EquationFunction} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.EquationFunction#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.EquationFunction#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.EquationFunction#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.EquationFunction#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the code corresponding to the equation function.
 * 
 * @function DocumentApp.EquationFunction#getCode
 * 
 * @return {String} the function code
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.EquationFunction#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.EquationFunction#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.EquationFunction#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.EquationFunction#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.EquationFunction#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.EquationFunction#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.EquationFunction#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#merge
 * 
 * @return {DocumentApp.EquationFunction} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#removeFromParent
 * 
 * @return {DocumentApp.EquationFunction} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.EquationFunction} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.EquationFunction#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.EquationFunction} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunction#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.EquationFunction} the current element
 */



/**
 * @class DocumentApp.EquationFunctionArgumentSeparator
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#copy
 * 
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#merge
 * 
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#removeFromParent
 * 
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.EquationFunctionArgumentSeparator#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.EquationFunctionArgumentSeparator} the current element
 */



/**
 * @class DocumentApp.EquationSymbol
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.EquationSymbol#copy
 * 
 * @return {DocumentApp.EquationSymbol} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationSymbol#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the code corresponding to the equation symbol.
 * 
 * @function DocumentApp.EquationSymbol#getCode
 * 
 * @return {String} the symbol code
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.EquationSymbol#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.EquationSymbol#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.EquationSymbol#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationSymbol#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.EquationSymbol#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.EquationSymbol#merge
 * 
 * @return {DocumentApp.EquationSymbol} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.EquationSymbol#removeFromParent
 * 
 * @return {DocumentApp.EquationSymbol} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.EquationSymbol#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.EquationSymbol} the current element
 */



/**
 * @class DocumentApp.FontFamily
 */

/**
 * The Amaranth font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.AMARANTH
 */
/**
 * The Arial font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.ARIAL
 */
/**
 * The Arial Black font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.ARIAL_BLACK
 */
/**
 * The Arial Narrow font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.ARIAL_NARROW
 */
/**
 * The Arvo font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.ARVO
 */
/**
 * The Calibri font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.CALIBRI
 */
/**
 * The Cambria font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.CAMBRIA
 */
/**
 * The Comic Sans MS font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.COMIC_SANS_MS
 */
/**
 * The Consolas font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.CONSOLAS
 */
/**
 * The Corsiva font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.CORSIVA
 */
/**
 * The Courier New font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.COURIER_NEW
 */
/**
 * The Dancing Script font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.DANCING_SCRIPT
 */
/**
 * The Droid Sans font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.DROID_SANS
 */
/**
 * The Droid Serif font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.DROID_SERIF
 */
/**
 * The Garamond font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.GARAMOND
 */
/**
 * The Georgia font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.GEORGIA
 */
/**
 * The Gloria Hallelujah font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.GLORIA_HALLELUJAH
 */
/**
 * The Great Vibes font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.GREAT_VIBES
 */
/**
 * The Lobster font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.LOBSTER
 */
/**
 * The Merriweather font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.MERRIWEATHER
 */
/**
 * The Pacifico font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.PACIFICO
 */
/**
 * The Philosopher font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.PHILOSOPHER
 */
/**
 * The Poiret One font family
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.POIRET_ONE
 */
/**
 * The Quattrocento font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.QUATTROCENTO
 */
/**
 * The Roboto font family
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.ROBOTO
 */
/**
 * The Shadows Into Light font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.SHADOWS_INTO_LIGHT
 */
/**
 * The Syncopate font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.SYNCOPATE
 */
/**
 * The Tahoma font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.TAHOMA
 */
/**
 * The Times New Roman font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.TIMES_NEW_ROMAN
 */
/**
 * The Trebuchet MS font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.TREBUCHET_MS
 */
/**
 * The Ubuntu font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.UBUNTU
 */
/**
 * The Verdana font family.
 * 
 * @typedef {DocumentApp.FontFamily} DocumentApp.FontFamily.VERDANA
 */

/**
 * @class DocumentApp.FooterSection
 */

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.FooterSection#appendHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.FooterSection#appendImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendImage</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * @function DocumentApp.FooterSection#appendImage
 * 
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * <p>Use this version of <code>appendListItem</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * @function DocumentApp.FooterSection#appendListItem
 * 
 * @param {DocumentApp.ListItem} listItem - the list item to append
 * 
 * @return {DocumentApp.ListItem} the appended list item
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> containing the specified text contents.
 * 
 * <p>Consecutive list items are added as part of the same list.
 * 
 * @function DocumentApp.FooterSection#appendListItem
 * 
 * @param {String} text - the list item's text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.FooterSection#appendParagraph
 * 
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 * 
 * @return {DocumentApp.Paragraph} the appended paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
 * 
 * @function DocumentApp.FooterSection#appendParagraph
 * 
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.FooterSection#appendTable
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>Use this version of <code>appendTable</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.FooterSection#appendTable
 * 
 * @param {DocumentApp.Table} table - the table to append
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> for each specified string value.
 * 
 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.FooterSection#appendTable
 * 
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.FooterSection#clear
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.FooterSection#copy
 * 
 * @return {DocumentApp.FooterSection} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.FooterSection#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.FooterSection#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.FooterSection#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.FooterSection#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 * 
 * @function DocumentApp.FooterSection#getFootnotes
 * @deprecated
 * 
 * @return {DocumentApp.Footnote[]} the section footnotes
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
 * 
 * @function DocumentApp.FooterSection#getImages
 * 
 * @return {DocumentApp.InlineImage[]} the section images
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.FooterSection#getLinkUrl
 * @deprecated
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
 * 
 * @function DocumentApp.FooterSection#getListItems
 * 
 * @return {DocumentApp.ListItem[]} the section list items
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.FooterSection#getNextSibling
 * @deprecated
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 * 
 * @function DocumentApp.FooterSection#getParagraphs
 * 
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.FooterSection#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.FooterSection#getPreviousSibling
 * @deprecated
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
 * 
 * @function DocumentApp.FooterSection#getTables
 * 
 * @return {DocumentApp.Table[]} the section tables
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.FooterSection#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.FooterSection#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.FooterSection#insertHorizontalRule
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
 * index.
 * 
 * @function DocumentApp.FooterSection#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.FooterSection#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.InlineImage} image - the image to insert
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 * 
 * @function DocumentApp.FooterSection#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 * 
 * @return {DocumentApp.ListItem} the inserted list item
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.FooterSection#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the list item's text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 * 
 * @function DocumentApp.FooterSection#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 * 
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.FooterSection#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.FooterSection#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.FooterSection#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Table} table - the table to insert
 * 
 * @return {DocumentApp.Table} the inserted table
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
 * 
 * @function DocumentApp.FooterSection#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.FooterSection#isAtDocumentEnd
 * @deprecated
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.FooterSection#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#removeFromParent
 * 
 * @return {DocumentApp.FooterSection} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.FooterSection#setLinkUrl
 * @deprecated
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Sets the contents as plain text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.FooterSection#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return {DocumentApp.FooterSection} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.FooterSection#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.FooterSection} the current element
 */



/**
 * @class DocumentApp.Footnote
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Footnote#copy
 * 
 * @return {DocumentApp.Footnote} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Footnote#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the contents of the footnote element.
 * 
 * @function DocumentApp.Footnote#getFootnoteContents
 * 
 * @return {DocumentApp.FootnoteSection} the footnote section
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Footnote#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Footnote#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Footnote#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Footnote#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Footnote#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Footnote#removeFromParent
 * 
 * @return {DocumentApp.Footnote} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Footnote#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Footnote} the current element
 */



/**
 * @class DocumentApp.FootnoteSection
 */

/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.FootnoteSection#appendParagraph
 * 
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 * 
 * @return {DocumentApp.Paragraph} the appended paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
 * 
 * @function DocumentApp.FootnoteSection#appendParagraph
 * 
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.FootnoteSection#clear
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.FootnoteSection#copy
 * 
 * @return {DocumentApp.FootnoteSection} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.FootnoteSection#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.FootnoteSection#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.FootnoteSection#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.FootnoteSection#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 * 
 * @function DocumentApp.FootnoteSection#getFootnotes
 * @deprecated
 * 
 * @return {DocumentApp.Footnote[]} the section footnotes
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.FootnoteSection#getLinkUrl
 * @deprecated
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.FootnoteSection#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 * 
 * @function DocumentApp.FootnoteSection#getParagraphs
 * 
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.FootnoteSection#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.FootnoteSection#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.FootnoteSection#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.FootnoteSection#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 * 
 * @function DocumentApp.FootnoteSection#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 * 
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.FootnoteSection#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.FootnoteSection#isAtDocumentEnd
 * @deprecated
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.FootnoteSection#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#removeFromParent
 * 
 * @return {DocumentApp.FootnoteSection} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.FootnoteSection#setLinkUrl
 * @deprecated
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Sets the contents as plain text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.FootnoteSection#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.FootnoteSection#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.FootnoteSection} the current element
 */



/**
 * @class DocumentApp.GlyphType
 */

/**
 * The default bullet, circular and filled.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.BULLET
 */
/**
 * A hollow bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.HOLLOW_BULLET
 */
/**
 * A latin, lowercase bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.LATIN_LOWER
 */
/**
 * A latin, uppercase bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.LATIN_UPPER
 */
/**
 * A number based bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.NUMBER
 */
/**
 * A roman numeral, lowercase bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.ROMAN_LOWER
 */
/**
 * A roman numeral, uppercase bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.ROMAN_UPPER
 */
/**
 * A square bullet.
 * 
 * @typedef {DocumentApp.GlyphType} DocumentApp.GlyphType.SQUARE_BULLET
 */

/**
 * @class DocumentApp.HeaderSection
 */

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.HeaderSection#appendHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.HeaderSection#appendImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendImage</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * @function DocumentApp.HeaderSection#appendImage
 * 
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * <p>Use this version of <code>appendListItem</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * @function DocumentApp.HeaderSection#appendListItem
 * 
 * @param {DocumentApp.ListItem} listItem - the list item to append
 * 
 * @return {DocumentApp.ListItem} the appended list item
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> containing the specified text contents.
 * 
 * <p>Consecutive list items are added as part of the same list.
 * 
 * @function DocumentApp.HeaderSection#appendListItem
 * 
 * @param {String} text - the list item's text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.HeaderSection#appendParagraph
 * 
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 * 
 * @return {DocumentApp.Paragraph} the appended paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
 * 
 * @function DocumentApp.HeaderSection#appendParagraph
 * 
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.HeaderSection#appendTable
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * <p>Use this version of <code>appendTable</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.HeaderSection#appendTable
 * 
 * @param {DocumentApp.Table} table - the table to append
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> for each specified string value.
 * 
 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
 * cannot end with a table.
 * 
 * @function DocumentApp.HeaderSection#appendTable
 * 
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.HeaderSection#clear
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.HeaderSection#copy
 * 
 * @return {DocumentApp.HeaderSection} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.HeaderSection#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.HeaderSection#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.HeaderSection#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.HeaderSection#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
 * 
 * @function DocumentApp.HeaderSection#getFootnotes
 * @deprecated
 * 
 * @return {DocumentApp.Footnote[]} the section footnotes
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
 * 
 * @function DocumentApp.HeaderSection#getImages
 * 
 * @return {DocumentApp.InlineImage[]} the section images
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.HeaderSection#getLinkUrl
 * @deprecated
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
 * 
 * @function DocumentApp.HeaderSection#getListItems
 * 
 * @return {DocumentApp.ListItem[]} the section list items
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.HeaderSection#getNextSibling
 * @deprecated
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
 * 
 * @function DocumentApp.HeaderSection#getParagraphs
 * 
 * @return {DocumentApp.Paragraph[]} the section paragraphs
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.HeaderSection#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.HeaderSection#getPreviousSibling
 * @deprecated
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
 * 
 * @function DocumentApp.HeaderSection#getTables
 * 
 * @return {DocumentApp.Table[]} the section tables
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.HeaderSection#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.HeaderSection#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.HeaderSection#insertHorizontalRule
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
 * index.
 * 
 * @function DocumentApp.HeaderSection#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.HeaderSection#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.InlineImage} image - the image to insert
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 * 
 * @function DocumentApp.HeaderSection#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 * 
 * @return {DocumentApp.ListItem} the inserted list item
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.HeaderSection#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the list item's text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 * 
 * @function DocumentApp.HeaderSection#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 * 
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
 * text contents.
 * 
 * @function DocumentApp.HeaderSection#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String} text - the paragraph's text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.HeaderSection#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.HeaderSection#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {DocumentApp.Table} table - the table to insert
 * 
 * @return {DocumentApp.Table} the inserted table
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
 * 
 * @function DocumentApp.HeaderSection#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.HeaderSection#isAtDocumentEnd
 * @deprecated
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.HeaderSection#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#removeFromParent
 * 
 * @return {DocumentApp.HeaderSection} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.HeaderSection#setLinkUrl
 * @deprecated
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Sets the contents as plain text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.HeaderSection#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.HeaderSection#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.HeaderSection} the current element
 */



/**
 * @class DocumentApp.HorizontalAlignment
 */

/**
 * The center-alignment option.
 * 
 * @typedef {DocumentApp.HorizontalAlignment} DocumentApp.HorizontalAlignment.CENTER
 */
/**
 * The justify-alignment option.
 * 
 * @typedef {DocumentApp.HorizontalAlignment} DocumentApp.HorizontalAlignment.JUSTIFY
 */
/**
 * The left-alignment option.
 * 
 * @typedef {DocumentApp.HorizontalAlignment} DocumentApp.HorizontalAlignment.LEFT
 */
/**
 * The right-alignment option.
 * 
 * @typedef {DocumentApp.HorizontalAlignment} DocumentApp.HorizontalAlignment.RIGHT
 */

/**
 * @class DocumentApp.HorizontalRule
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.HorizontalRule#copy
 * 
 * @return {DocumentApp.HorizontalRule} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HorizontalRule#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.HorizontalRule#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.HorizontalRule#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.HorizontalRule#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HorizontalRule#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.HorizontalRule#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.HorizontalRule#removeFromParent
 * 
 * @return {DocumentApp.HorizontalRule} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.HorizontalRule#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.HorizontalRule} the current element
 */



/**
 * @class DocumentApp.InlineDrawing
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.InlineDrawing#copy
 * 
 * @return {DocumentApp.InlineDrawing} the new copy
 */


/**
 * Returns the drawing's alternate description.
 * 
 * @function DocumentApp.InlineDrawing#getAltDescription
 * 
 * @return {String} the alternate title, or <code>null</code> if the element does not have an alternate title
 */


/**
 * Returns the drawing's alternate title.
 * 
 * @function DocumentApp.InlineDrawing#getAltTitle
 * 
 * @return {String} the alternate title, or <code>null</code> if the element does not have an alternate title
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.InlineDrawing#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.InlineDrawing#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.InlineDrawing#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.InlineDrawing#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.InlineDrawing#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.InlineDrawing#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.InlineDrawing#merge
 * 
 * @return {DocumentApp.InlineDrawing} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.InlineDrawing#removeFromParent
 * 
 * @return {DocumentApp.InlineDrawing} the removed element
 */


/**
 * Sets the drawing's alternate description. If the given title is <code>null</code>, sets the
 * description to the empty string.
 * 
 * @function DocumentApp.InlineDrawing#setAltDescription
 * 
 * @param {String} description - the alternate title
 * 
 * @return {DocumentApp.InlineDrawing} the current object
 */


/**
 * Sets the drawing's alternate title. If the given title is <code>null</code>, sets the title to the
 * empty string.
 * 
 * @function DocumentApp.InlineDrawing#setAltTitle
 * 
 * @param {String} title - the alternate title
 * 
 * @return {DocumentApp.InlineDrawing} the current object
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.InlineDrawing#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.InlineDrawing} the current element
 */



/**
 * @class DocumentApp.InlineImage
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.InlineImage#copy
 * 
 * @return {DocumentApp.InlineImage} the new copy
 */


/**
 * Returns the image's alternate description.
 * 
 * @function DocumentApp.InlineImage#getAltDescription
 * 
 * @return {String} the alternate title, or <code>null</code> if the element does not have an alternate title
 */


/**
 * Returns the image's alternate title.
 * 
 * @function DocumentApp.InlineImage#getAltTitle
 * 
 * @return {String} the alternate title, or <code>null</code> if the element does not have an alternate title
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function DocumentApp.InlineImage#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.InlineImage#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Return the data inside this object as a blob.
 * 
 * @function DocumentApp.InlineImage#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Retrieves the image's height, in pixels.
 * 
 * @function DocumentApp.InlineImage#getHeight
 * 
 * @return {IntegerNum} the image's height, in pixels
 */


/**
 * Retrieves the link URL.
 * 
 * @function DocumentApp.InlineImage#getLinkUrl
 * 
 * @return {String} the link URL, or <code>null</code> if the element contains multiple values for this
 *     attribute.
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.InlineImage#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.InlineImage#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.InlineImage#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.InlineImage#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Retrieves the image's width, in pixels.
 * 
 * @function DocumentApp.InlineImage#getWidth
 * 
 * @return {IntegerNum} the image's width, in pixels
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.InlineImage#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.InlineImage#merge
 * 
 * @return {DocumentApp.InlineImage} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.InlineImage#removeFromParent
 * 
 * @return {DocumentApp.InlineImage} the removed element
 */


/**
 * Sets the image's alternate description. If the given title is <code>null</code>, sets the
 * description to the empty string.
 * 
 * @function DocumentApp.InlineImage#setAltDescription
 * 
 * @param {String} description - the alternate title
 * 
 * @return {DocumentApp.InlineImage} the current object
 */


/**
 * Sets the image's alternate title. If the given title is <code>null</code>, sets the title to the
 * empty string.
 * 
 * @function DocumentApp.InlineImage#setAltTitle
 * 
 * @param {String} title - the alternate title
 * 
 * @return {DocumentApp.InlineImage} the current object
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.InlineImage#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.InlineImage} the current element
 */


/**
 * Sets the image's height, in pixels.
 * 
 * @function DocumentApp.InlineImage#setHeight
 * 
 * @param {IntegerNum} height - the image's height, in pixels
 * 
 * @return {DocumentApp.InlineImage} the current object
 */


/**
 * Sets the link URL. If the given URL is <code>null</code> or an empty string, this method will create
 * a link with an empty URL that may display as "Invalid link" in Google Docs.
 * 
 * @function DocumentApp.InlineImage#setLinkUrl
 * 
 * @param {String} url - the link URL
 * 
 * @return {DocumentApp.InlineImage} the current object
 */


/**
 * Sets the image's width, in pixels.
 * 
 * @function DocumentApp.InlineImage#setWidth
 * 
 * @param {IntegerNum} width - the image's width, in pixels
 * 
 * @return {DocumentApp.InlineImage} the current object
 */



/**
 * @class DocumentApp.ListItem
 */

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> from the specified image blob.
 * 
 * @function DocumentApp.ListItem#addPositionedImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.PositionedImage} the new positioned image
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * @function DocumentApp.ListItem#appendHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
 * 
 * @function DocumentApp.ListItem#appendInlineImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * @function DocumentApp.ListItem#appendInlineImage
 * 
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.ListItem#appendPageBreak
 * 
 * @return {DocumentApp.PageBreak} the new page break element
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.ListItem#appendPageBreak
 * 
 * @param {DocumentApp.PageBreak} pageBreak - the page break to append
 * 
 * @return {DocumentApp.PageBreak} the appended page break element
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
 * 
 * @function DocumentApp.ListItem#appendText
 * 
 * @param {DocumentApp.Text} text - the text element to append
 * 
 * @return {DocumentApp.Text} the appended text element
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element with the specified contents.
 * 
 * @function DocumentApp.ListItem#appendText
 * 
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.Text} the new text element
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.ListItem#clear
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.ListItem#copy
 * 
 * @return {DocumentApp.ListItem} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.ListItem#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.ListItem#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.ListItem#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 * 
 * @function DocumentApp.ListItem#getAlignment
 * 
 * @return {DocumentApp.HorizontalAlignment} the alignment
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.ListItem#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the list item's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code>.
 * 
 * @function DocumentApp.ListItem#getGlyphType
 * 
 * @return {DocumentApp.GlyphType} the glyph type
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 * 
 * @function DocumentApp.ListItem#getHeading
 * 
 * @return {DocumentApp.ParagraphHeading} the heading
 */


/**
 * Retrieves the end indentation, in points.
 * 
 * @function DocumentApp.ListItem#getIndentEnd
 * 
 * @return {Number} the end indentation, in points
 */


/**
 * Retrieves the first line indentation, in points.
 * 
 * @function DocumentApp.ListItem#getIndentFirstLine
 * 
 * @return {Number} the first line indentation, in points
 */


/**
 * Retrieves the start indentation.
 * 
 * @function DocumentApp.ListItem#getIndentStart
 * 
 * @return {Number} the start indentation
 */


/**
 * Retrieves the line spacing, in points.
 * 
 * @function DocumentApp.ListItem#getLineSpacing
 * 
 * @return {Number} the line spacing, in points
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.ListItem#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the list ID.
 * 
 * @function DocumentApp.ListItem#getListId
 * 
 * @return {String} the list ID
 */


/**
 * Retrieves the list item's nesting level.
 * 
 * <p>By default, list items have a nesting level of zero. The nesting level determines the glyph
 * that is used by the list item.
 * 
 * @function DocumentApp.ListItem#getNestingLevel
 * 
 * @return {IntegerNum} the nesting level
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.ListItem#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.ListItem#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Gets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 * 
 * @function DocumentApp.ListItem#getPositionedImage
 * 
 * @param {String} id - the image id
 * 
 * @return {DocumentApp.PositionedImage} the positioned image
 */


/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> objects anchored to the paragraph.
 * 
 * @function DocumentApp.ListItem#getPositionedImages
 * 
 * @return {DocumentApp.PositionedImage[]} a list of positioned images
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.ListItem#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the spacing after the element, in points.
 * 
 * @function DocumentApp.ListItem#getSpacingAfter
 * 
 * @return {Number} the spacing after the element, in points
 */


/**
 * Retrieves the spacing before the element, in points.
 * 
 * @function DocumentApp.ListItem#getSpacingBefore
 * 
 * @return {Number} the spacing before the element, in points
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.ListItem#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.ListItem#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 * 
 * @function DocumentApp.ListItem#insertHorizontalRule
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule element
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
 * index.
 * 
 * @function DocumentApp.ListItem#insertInlineImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
 * 
 * @function DocumentApp.ListItem#insertInlineImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image element
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.ListItem#insertPageBreak
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.PageBreak} the new page break element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.ListItem#insertPageBreak
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.PageBreak} pageBreak - the p[age break to insert
 * 
 * @return {DocumentApp.PageBreak} the inserted page break element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element at the specified index, with the specified text
 * contents.
 * 
 * @function DocumentApp.ListItem#insertText
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.Text} text - the text element to insert
 * 
 * @return {DocumentApp.Text} the inserted text element
 */


/**
 * Creates and inserts a new text element at the specified index.
 * 
 * @function DocumentApp.ListItem#insertText
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.Text} the new text element
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.ListItem#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Retrieves the left-to-right setting.
 * 
 * @function DocumentApp.ListItem#isLeftToRight
 * 
 * @return {Boolean} the left-to-right setting
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#merge
 * 
 * @return {DocumentApp.ListItem} the merged element
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.ListItem#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#removeFromParent
 * 
 * @return {DocumentApp.ListItem} the removed element
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 * 
 * @function DocumentApp.ListItem#removePositionedImage
 * 
 * @param {String} id
 * 
 * @return {Boolean} whether or not the specified image was removed
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 * 
 * @function DocumentApp.ListItem#setAlignment
 * 
 * @param {DocumentApp.HorizontalAlignment} alignment - the horizontal alignment
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the list item's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code>.
 * 
 * @function DocumentApp.ListItem#setGlyphType
 * 
 * @param {DocumentApp.GlyphType} glyphType - the glyph type
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 * 
 * @function DocumentApp.ListItem#setHeading
 * 
 * @param {DocumentApp.ParagraphHeading} heading - the heading
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the end indentation, in points.
 * 
 * @function DocumentApp.ListItem#setIndentEnd
 * 
 * @param {Number} indentEnd - the end indentation, in points
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the first line indentation, in points.
 * 
 * @function DocumentApp.ListItem#setIndentFirstLine
 * 
 * @param {Number} indentFirstLine - the first line indentation, in points
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the start indentation, in points.
 * 
 * @function DocumentApp.ListItem#setIndentStart
 * 
 * @param {Number} indentStart - the start indentation, in points
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the left-to-right setting.
 * 
 * @function DocumentApp.ListItem#setLeftToRight
 * 
 * @param {Boolean} leftToRight - the left-to-right setting
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
 * 
 * @function DocumentApp.ListItem#setLineSpacing
 * 
 * @param {Number} multiplier - the number of lines
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.ListItem#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the list ID.
 * 
 * <p>The list ID is set to the same value for the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>. The two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> will be treated as members of the same list.
 * 
 * @function DocumentApp.ListItem#setListId
 * 
 * @param {DocumentApp.ListItem} listItem - the list item whose list ID to use
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the list item's nesting level.
 * 
 * <p>By default, list items have a nesting level of zero. The nesting level determines the glyph
 * that is used by the list item.
 * 
 * @function DocumentApp.ListItem#setNestingLevel
 * 
 * @param {IntegerNum} nestingLevel - the nesting level
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the spacing after the element, in points.
 * 
 * @function DocumentApp.ListItem#setSpacingAfter
 * 
 * @param {Number} spacingAfter - the spacing after the element, in points
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the spacing before the element, in points.
 * 
 * @function DocumentApp.ListItem#setSpacingBefore
 * 
 * @param {Number} spacingBefore - the spacing before the element, in points
 * 
 * @return {DocumentApp.ListItem} the current element
 */


/**
 * Sets the contents of the list item as text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.ListItem#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return void
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.ListItem#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.ListItem} the current element
 */



/**
 * @class DocumentApp.NamedRange
 */

/**
 * Gets the ID of this <code>NamedRange</code>. The ID is unique within the document.
 * 
 * @function DocumentApp.NamedRange#getId
 * 
 * @return {String} the range's ID, which is unique within the document
 */


/**
 * Gets the name of this <code>NamedRange</code>. The name is not necessarily unique.
 * 
 * @function DocumentApp.NamedRange#getName
 * 
 * @return {String} the range's name, which is not necessarily unique
 */


/**
 * Gets the range of elements associated with this <code>NamedRange</code>.
 * 
 * @function DocumentApp.NamedRange#getRange
 * 
 * @return {DocumentApp.Range} the range of elements associated with the name and ID
 */


/**
 * Removes this <code>NamedRange</code> from the document. This method does not delete the contents of
 * the range; it merely the removes the reference. Calling this method on a <code>NamedRange</code>
 * that has already been removed has no effect.
 * 
 * @function DocumentApp.NamedRange#remove
 * 
 * @return void
 */



/**
 * @class DocumentApp.PageBreak
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.PageBreak#copy
 * 
 * @return {DocumentApp.PageBreak} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.PageBreak#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.PageBreak#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.PageBreak#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.PageBreak#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.PageBreak#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.PageBreak#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.PageBreak#removeFromParent
 * 
 * @return {DocumentApp.PageBreak} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.PageBreak#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.PageBreak} the current element
 */



/**
 * @class DocumentApp.Paragraph
 */

/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> from the specified image blob.
 * 
 * @function DocumentApp.Paragraph#addPositionedImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.PositionedImage} the new positioned image
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * @function DocumentApp.Paragraph#appendHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
 * 
 * @function DocumentApp.Paragraph#appendInlineImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * @function DocumentApp.Paragraph#appendInlineImage
 * 
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.Paragraph#appendPageBreak
 * 
 * @return {DocumentApp.PageBreak} the new page break element
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.Paragraph#appendPageBreak
 * 
 * @param {DocumentApp.PageBreak} pageBreak - the page break to append
 * 
 * @return {DocumentApp.PageBreak} the appended page break element
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
 * 
 * @function DocumentApp.Paragraph#appendText
 * 
 * @param {DocumentApp.Text} text - the text element to append
 * 
 * @return {DocumentApp.Text} the appended text element
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element with the specified contents.
 * 
 * @function DocumentApp.Paragraph#appendText
 * 
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.Text} the new text element
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.Paragraph#clear
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Paragraph#copy
 * 
 * @return {DocumentApp.Paragraph} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.Paragraph#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Paragraph#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Paragraph#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 * 
 * @function DocumentApp.Paragraph#getAlignment
 * 
 * @return {DocumentApp.HorizontalAlignment} the alignment
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.Paragraph#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 * 
 * @function DocumentApp.Paragraph#getHeading
 * 
 * @return {DocumentApp.ParagraphHeading} the heading
 */


/**
 * Retrieves the end indentation, in points.
 * 
 * @function DocumentApp.Paragraph#getIndentEnd
 * 
 * @return {Number} the end indentation, in points
 */


/**
 * Retrieves the first line indentation, in points.
 * 
 * @function DocumentApp.Paragraph#getIndentFirstLine
 * 
 * @return {Number} the first line indentation, in points
 */


/**
 * Retrieves the start indentation.
 * 
 * @function DocumentApp.Paragraph#getIndentStart
 * 
 * @return {Number} the start indentation
 */


/**
 * Retrieves the line spacing, in points.
 * 
 * @function DocumentApp.Paragraph#getLineSpacing
 * 
 * @return {Number} the line spacing, in points
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.Paragraph#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Paragraph#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Paragraph#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Gets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 * 
 * @function DocumentApp.Paragraph#getPositionedImage
 * 
 * @param {String} id - the image id
 * 
 * @return {DocumentApp.PositionedImage} the positioned image
 */


/**
 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> objects anchored to the paragraph.
 * 
 * @function DocumentApp.Paragraph#getPositionedImages
 * 
 * @return {DocumentApp.PositionedImage[]} a list of positioned images
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Paragraph#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the spacing after the element, in points.
 * 
 * @function DocumentApp.Paragraph#getSpacingAfter
 * 
 * @return {Number} the spacing after the element, in points
 */


/**
 * Retrieves the spacing before the element, in points.
 * 
 * @function DocumentApp.Paragraph#getSpacingBefore
 * 
 * @return {Number} the spacing before the element, in points
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.Paragraph#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.Paragraph#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 * 
 * @function DocumentApp.Paragraph#insertHorizontalRule
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule element
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
 * index.
 * 
 * @function DocumentApp.Paragraph#insertInlineImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
 * 
 * @function DocumentApp.Paragraph#insertInlineImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image element
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.Paragraph#insertPageBreak
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.PageBreak} the new page break element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
 * 
 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
 * If the current element is contained in a table cell, an exception will be thrown.
 * 
 * @function DocumentApp.Paragraph#insertPageBreak
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.PageBreak} pageBreak - the p[age break to insert
 * 
 * @return {DocumentApp.PageBreak} the inserted page break element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element at the specified index, with the specified text
 * contents.
 * 
 * @function DocumentApp.Paragraph#insertText
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.Text} text - the text element to insert
 * 
 * @return {DocumentApp.Text} the inserted text element
 */


/**
 * Creates and inserts a new text element at the specified index.
 * 
 * @function DocumentApp.Paragraph#insertText
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.Text} the new text element
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Paragraph#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Retrieves the left-to-right setting.
 * 
 * @function DocumentApp.Paragraph#isLeftToRight
 * 
 * @return {Boolean} the left-to-right setting
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#merge
 * 
 * @return {DocumentApp.Paragraph} the merged element
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.Paragraph#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#removeFromParent
 * 
 * @return {DocumentApp.Paragraph} the removed element
 */


/**
 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
 * 
 * @function DocumentApp.Paragraph#removePositionedImage
 * 
 * @param {String} id - the image id
 * 
 * @return {Boolean} whether or not the specified image was removed
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
 * 
 * @function DocumentApp.Paragraph#setAlignment
 * 
 * @param {DocumentApp.HorizontalAlignment} alignment - the horizontal alignment
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
 * 
 * @function DocumentApp.Paragraph#setHeading
 * 
 * @param {DocumentApp.ParagraphHeading} heading - the heading
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the end indentation, in points.
 * 
 * @function DocumentApp.Paragraph#setIndentEnd
 * 
 * @param {Number} indentEnd - the end indentation, in points
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the first line indentation, in points.
 * 
 * @function DocumentApp.Paragraph#setIndentFirstLine
 * 
 * @param {Number} indentFirstLine - the first line indentation, in points
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the start indentation, in points.
 * 
 * @function DocumentApp.Paragraph#setIndentStart
 * 
 * @param {Number} indentStart - the start indentation, in points
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the left-to-right setting.
 * 
 * @function DocumentApp.Paragraph#setLeftToRight
 * 
 * @param {Boolean} leftToRight - the left-to-right setting
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
 * 
 * @function DocumentApp.Paragraph#setLineSpacing
 * 
 * @param {Number} multiplier - the number of lines
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.Paragraph#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the spacing after the element, in points.
 * 
 * @function DocumentApp.Paragraph#setSpacingAfter
 * 
 * @param {Number} spacingAfter - the spacing after the element, in points
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the spacing before the element, in points.
 * 
 * @function DocumentApp.Paragraph#setSpacingBefore
 * 
 * @param {Number} spacingBefore - the spacing before the element, in points
 * 
 * @return {DocumentApp.Paragraph} the current element
 */


/**
 * Sets the contents of the paragraph as text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.Paragraph#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return void
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.Paragraph#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.Paragraph} the current element
 */



/**
 * @class DocumentApp.ParagraphHeading
 */

/**
 * The highest heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.HEADING1
 */
/**
 * The second heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.HEADING2
 */
/**
 * The third heading option
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.HEADING3
 */
/**
 * The fourth heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.HEADING4
 */
/**
 * The fifth heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.HEADING5
 */
/**
 * The lowest heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.HEADING6
 */
/**
 * The heading option for normal text.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.NORMAL
 */
/**
 * The subtitle heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.SUBTITLE
 */
/**
 * The title heading option.
 * 
 * @typedef {DocumentApp.ParagraphHeading} DocumentApp.ParagraphHeading.TITLE
 */

/**
 * @class DocumentApp.Position
 */

/**
 * Gets the element that contains this <code>Position</code>. This will be either a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 * element or a container element like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>. In either case, the relative
 * position within the element can be determined with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getOffset()'>getOffset()</a></code>.
 * 
 * @function DocumentApp.Position#getElement
 * 
 * @return {DocumentApp.Element} the container or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element in which this <code>Position</code> object is located
 */


/**
 * Gets this <code>Position</code>'s relative location within the element that contains it. If the
 * element is a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element, the offset is the number of characters before the <code>Position</code> (that is, the index of the character after this <code>Position</code>); for any other
 * element, the offset is the number of child elements before this <code>Position</code> within the
 * same container element (that is, the index of the child element after the <code>Position</code>).
 * 
 * @function DocumentApp.Position#getOffset
 * 
 * @return {IntegerNum} for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the number of characters before this <code>Position</code>; for
 *     other elements, the number of child elements before this <code>Position</code> within the same
 *     container element
 */


/**
 * Creates an artificial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element that represents the text and formatting of the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the <code>Position</code>, either directly or through a chain of child elements. To determine the <code>Position</code>'s offset in the returned <code>Text</code> element, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getSurroundingTextOffset()'>getSurroundingTextOffset()</a></code>.
 * 
 * @function DocumentApp.Position#getSurroundingText
 * 
 * @return {DocumentApp.Text} an element equivalent to the result of calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html#editAsText()'>editAsText()</a></code>
 *     on the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the <code>Position</code>, either directly or through a chain of child elements
 */


/**
 * Gets the offset of this <code>Position</code> within the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getSurroundingText()'>getSurroundingText()</a></code>. The offset is the number of characters before the <code>Position</code>
 * (that is, the index of the character after this <code>Position</code>).
 * 
 * @function DocumentApp.Position#getSurroundingTextOffset
 * 
 * @return {IntegerNum} the number of characters before this <code>Position</code> in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the <code>Position</code>, either directly or through a chain of child elements
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> at this <code>Position</code>.
 * 
 * @function DocumentApp.Position#insertBookmark
 * 
 * @return {DocumentApp.Bookmark} the new bookmark
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at this <code>Position</code> from the specified image
 * blob.
 * 
 * @function DocumentApp.Position#insertInlineImage
 * 
 * @param {BlobSource} image - the image data to insert at this <code>Position</code>
 * 
 * @return {DocumentApp.InlineImage} the new image element, or <code>null</code> if the element in which this <code>Position</code> is
 *     located does not allow images to be inserted
 */


/**
 * Inserts the specified text at this <code>Position</code>. This method creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 * element, even if the string is inserted within an existing <code>Text</code> element, so that it is
 * easy to style the new element.
 * 
 * @function DocumentApp.Position#insertText
 * 
 * @param {String} text - the string to insert at this <code>Position</code>
 * 
 * @return {DocumentApp.Text} the new text element, or <code>null</code> if the element in which this <code>Position</code> is
 *     located does not allow text to be inserted
 */



/**
 * @class DocumentApp.PositionedImage
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * @function DocumentApp.PositionedImage#getAs
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
 * @function DocumentApp.PositionedImage#getBlob
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * Retrieves the image's height, in pixels.
 * 
 * @function DocumentApp.PositionedImage#getHeight
 * 
 * @return {IntegerNum} the image's height, in pixels
 */


/**
 * Gets the image's ID.
 * 
 * @function DocumentApp.PositionedImage#getId
 * 
 * @return {String} the image ID
 */


/**
 * Gets an enum value that represents how the image is laid out.
 * 
 * @function DocumentApp.PositionedImage#getLayout
 * 
 * @return {DocumentApp.PositionedLayout} the image layout
 */


/**
 * Gets the image's offset, in points, from the paragraph's left.
 * 
 * @function DocumentApp.PositionedImage#getLeftOffset
 * 
 * @return {Number} the image offset from the left paragraph's left
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> the image is anchored to.
 * 
 * @function DocumentApp.PositionedImage#getParagraph
 * 
 * @return {DocumentApp.Paragraph} the parent paragraph
 */


/**
 * Gets the image's offset, in points, from the paragraph's top.
 * 
 * @function DocumentApp.PositionedImage#getTopOffset
 * 
 * @return {Number} the image offset from the left paragraph's top
 */


/**
 * Retrieves the image's width, in pixels.
 * 
 * @function DocumentApp.PositionedImage#getWidth
 * 
 * @return {IntegerNum} the image's width, in pixels
 */


/**
 * Sets the image's height, in pixels.
 * 
 * @function DocumentApp.PositionedImage#setHeight
 * 
 * @param {IntegerNum} height - the image's height, in pixels
 * 
 * @return {DocumentApp.PositionedImage} the current object
 */


/**
 * Sets the definition of how the image is laid out.
 * 
 * @function DocumentApp.PositionedImage#setLayout
 * 
 * @param {DocumentApp.PositionedLayout} layout - an enum representing the layout mode
 * 
 * @return {DocumentApp.PositionedImage} this object for chaining
 */


/**
 * Sets the image's offset, in points, from the paragraph's left.
 * 
 * @function DocumentApp.PositionedImage#setLeftOffset
 * 
 * @param {Number} offset - offset from the paragraph's left
 * 
 * @return {DocumentApp.PositionedImage} this object for chaining
 */


/**
 * Sets the image's offset, in points, from the paragraph's top.
 * 
 * @function DocumentApp.PositionedImage#setTopOffset
 * 
 * @param {Number} offset - offset from the paragraph's top
 * 
 * @return {DocumentApp.PositionedImage} this object for chaining
 */


/**
 * Sets the image's width, in pixels.
 * 
 * @function DocumentApp.PositionedImage#setWidth
 * 
 * @param {IntegerNum} width - the image's width, in pixels
 * 
 * @return {DocumentApp.PositionedImage} the current object
 */



/**
 * @class DocumentApp.PositionedLayout
 */

/**
 * The image is positioned above the text.
 * 
 * @typedef {DocumentApp.PositionedLayout} DocumentApp.PositionedLayout.ABOVE_TEXT
 */
/**
 * The image breaks the text on the left and right.
 * 
 * @typedef {DocumentApp.PositionedLayout} DocumentApp.PositionedLayout.BREAK_BOTH
 */
/**
 * The image breaks the text on the left.
 * 
 * @typedef {DocumentApp.PositionedLayout} DocumentApp.PositionedLayout.BREAK_LEFT
 */
/**
 * The image breaks the text on the right.
 * 
 * @typedef {DocumentApp.PositionedLayout} DocumentApp.PositionedLayout.BREAK_RIGHT
 */
/**
 * The image is wrapped by text.
 * 
 * @typedef {DocumentApp.PositionedLayout} DocumentApp.PositionedLayout.WRAP_TEXT
 */

/**
 * @class DocumentApp.Range
 */

/**
 * Gets all elements in this <code>Range</code>, including any partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements (for example, in the case
 * of a selection that includes only part of a <code>Text</code> element). To determine whether a
 * <code>Text</code> element is only partially included in the range, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>RangeElement.isPartial()</a></code>.
 * 
 * @function DocumentApp.Range#getRangeElements
 * 
 * @return {DocumentApp.RangeElement[]} an array of elements, in the order they appear in the document
 */


/**
 * Gets all elements that the user has selected in the open instance of the document, including
 * any partially selected <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 * elements.
 * 
 * @function DocumentApp.Range#getSelectedElements
 * @deprecated
 * 
 * @return {DocumentApp.RangeElement[]} an array of selected or partially selected elements, in the order they appear in the
 *     document
 */



/**
 * @class DocumentApp.RangeBuilder
 */

/**
 * Adds an entire <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element.html'>Element</a></code> to this <code>RangeBuilder</code>.
 * 
 * @function DocumentApp.RangeBuilder#addElement
 * 
 * @param {DocumentApp.Element} element - the element to be added
 * 
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */


/**
 * Adds a partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element to this <code>RangeBuilder</code>.
 * 
 * @function DocumentApp.RangeBuilder#addElement
 * 
 * @param {DocumentApp.Text} textElement - the text element to be partially added
 * @param {IntegerNum} startOffset - the number of characters before the first character to be included (that is,
 *     the index of the first character in the range)
 * @param {IntegerNum} endOffsetInclusive - the number of characters before the last character to be included
 *     (that is, the index of the last character in the range)
 * 
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */


/**
 * Adds two entire elements, and all elements between them, to this <code>RangeBuilder</code>.
 * 
 * @function DocumentApp.RangeBuilder#addElementsBetween
 * 
 * @param {DocumentApp.Element} startElement - the first element to be added
 * @param {DocumentApp.Element} endElementInclusive - the last element to be added
 * 
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */


/**
 * Adds two partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, and all elements between them, to the <code>RangeBuilder</code>.
 * 
 * @function DocumentApp.RangeBuilder#addElementsBetween
 * 
 * @param {DocumentApp.Text} startTextElement - the first text element to be partially added
 * @param {IntegerNum} startOffset - the number of characters before the first character of <code>startTextElement</code> to be included (that is, the index of the first character in the range)
 * @param {DocumentApp.Text} endTextElementInclusive - the last text element to be partially added
 * @param {IntegerNum} endOffsetInclusive - the number of characters before the last character of <code>endTextElementInclusive</code> to be included (that is, the index of the last character in the
 *     range)
 * 
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */


/**
 * Adds the contents of another <code>Range</code> to this <code>RangeBuilder</code>.
 * 
 * @function DocumentApp.RangeBuilder#addRange
 * 
 * @param {DocumentApp.Range} range - the range whose elements should be added
 * 
 * @return {DocumentApp.RangeBuilder} this builder, for chaining
 */


/**
 * Constructs a <code>Range</code> from the settings applied to the builder.
 * 
 * @function DocumentApp.RangeBuilder#build
 * 
 * @return {DocumentApp.Range} the newly constructed range
 */


/**
 * Gets all elements in this <code>Range</code>, including any partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements (for example, in the case
 * of a selection that includes only part of a <code>Text</code> element). To determine whether a
 * <code>Text</code> element is only partially included in the range, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>RangeElement.isPartial()</a></code>.
 * 
 * @function DocumentApp.RangeBuilder#getRangeElements
 * 
 * @return {DocumentApp.RangeElement[]} an array of elements, in the order they appear in the document
 */


/**
 * Gets all elements that the user has selected in the open instance of the document, including
 * any partially selected <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
 * elements.
 * 
 * @function DocumentApp.RangeBuilder#getSelectedElements
 * @deprecated
 * 
 * @return {DocumentApp.RangeElement[]} an array of selected or partially selected elements, in the order they appear in the
 *     document
 */



/**
 * @class DocumentApp.RangeElement
 */

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element.html'>Element</a></code> that corresponds to this <code>RangeElement</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log debug information about a range element.
 * Logger.log(&#39;Element type: &#39; + rangeElement.getElement().getType());
 * if (rangeElement.isPartial()) {
 *   Logger.log(&#39;The character range begins at &#39; + rangeElement.getStartOffset());
 *   Logger.log(&#39;The character range ends at &#39; + rangeElement.getEndOffsetInclusive());
 * } else {
 *   Logger.log(&#39;The entire range element is included.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.RangeElement#getElement
 * 
 * @return {DocumentApp.Element} the element that corresponds to this <code>RangeElement</code>
 */


/**
 * Gets the position of the end of a partial range within the range element. If the element is a
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>isPartial()</a></code> returns <code>true</code>, the offset is the number of characters before the last
 * character in the range (that is, the index of the last character in the range); in any other
 * case, this method returns <code>-1</code>.
 * 
 * @function DocumentApp.RangeElement#getEndOffsetInclusive
 * 
 * @return {IntegerNum} for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the
 *     number of character before the last character in the range; for other elements, <code>-1</code>
 */


/**
 * Gets the position of the start of a partial range within the range element. If the element is a
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>isPartial()</a></code> returns <code>true</code>, the offset is the number of characters before the start of
 * the range (that is, the index of the first character in the range); in any other case, this
 * method returns <code>-1</code>.
 * 
 * @function DocumentApp.RangeElement#getStartOffset
 * 
 * @return {IntegerNum} for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the
 *     number of characters before the start of the range; for other elements, <code>-1</code>
 */


/**
 * Determines whether this range element covers the entire element or a partial selection of the
 * element's characters. The beginning and end of a partial range element's range can be
 * determined using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#getStartOffset()'>getStartOffset()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#getEndOffsetInclusive()'>getEndOffsetInclusive()</a></code>, respectively.
 * 
 * @function DocumentApp.RangeElement#isPartial
 * 
 * @return {Boolean} <code>true</code> if the element is partially included; <code>false</code> if not
 */



/**
 * @class DocumentApp.Table
 */

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
 * 
 * @function DocumentApp.Table#appendTableRow
 * 
 * @return {DocumentApp.TableRow} the new table row element
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
 * 
 * @function DocumentApp.Table#appendTableRow
 * 
 * @param {DocumentApp.TableRow} tableRow - the table row to append
 * 
 * @return {DocumentApp.TableRow} the appended table row element
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.Table#clear
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Table#copy
 * 
 * @return {DocumentApp.Table} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.Table#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.Table#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Table#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Table#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Table#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Table#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the border color.
 * 
 * @function DocumentApp.Table#getBorderColor
 * 
 * @return {String} the border color, formatted in CSS notation (like <code>'#ffffff'</code>)
 */


/**
 * Retrieves the border width, in points.
 * 
 * @function DocumentApp.Table#getBorderWidth
 * 
 * @return {Number} the border width, in points
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified row and cell indices.
 * 
 * @function DocumentApp.Table#getCell
 * 
 * @param {IntegerNum} rowIndex - the index of the row containing the cell to retrieve
 * @param {IntegerNum} cellIndex - the index of the cell to retrieve
 * 
 * @return {DocumentApp.TableCell} the table cell
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Table#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.Table#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the width of the specified table column, in points.
 * 
 * @function DocumentApp.Table#getColumnWidth
 * 
 * @param {IntegerNum} columnIndex - the column index
 * 
 * @return {Number} the column width, in points
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.Table#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Table#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Table#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the number of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRows</a></code>.
 * 
 * @function DocumentApp.Table#getNumRows
 * 
 * @return {IntegerNum} the number of table rows
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Table#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Table#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified row index.
 * 
 * @function DocumentApp.Table#getRow
 * 
 * @param {IntegerNum} rowIndex - the index of the row to retrieve
 * 
 * @return {DocumentApp.TableRow} the table row
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.Table#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.Table#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Table#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified index.
 * 
 * @function DocumentApp.Table#insertTableRow
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified index.
 * 
 * @function DocumentApp.Table#insertTableRow
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.TableRow} tableRow - the table row to insert
 * 
 * @return {DocumentApp.TableRow} the inserted table row element
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Table#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.Table#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Table#removeFromParent
 * 
 * @return {DocumentApp.Table} the removed element
 */


/**
 * Removes the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified row index.
 * 
 * @function DocumentApp.Table#removeRow
 * 
 * @param {IntegerNum} rowIndex - the index of the row to remove
 * 
 * @return {DocumentApp.TableRow} the removed row
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Table#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Table#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Sets the border color.
 * 
 * @function DocumentApp.Table#setBorderColor
 * 
 * @param {String} color - the border color, formatted in CSS notation (like <code>'#ffffff'</code>)
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Sets the border width, in points.
 * 
 * @function DocumentApp.Table#setBorderWidth
 * 
 * @param {Number} width - the border width, in points
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Sets the width of the specified column, in points.
 * 
 * @function DocumentApp.Table#setColumnWidth
 * 
 * @param {IntegerNum} columnIndex - the column index
 * @param {Number} width - the border width, in points
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.Table#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.Table} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.Table#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.Table} the current element
 */



/**
 * @class DocumentApp.TableCell
 */

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#appendHorizontalRule
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#appendImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the new image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
 * 
 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#appendImage
 * 
 * @param {DocumentApp.InlineImage} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the appended image
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * @function DocumentApp.TableCell#appendListItem
 * 
 * @param {DocumentApp.ListItem} listItem - the list item to append
 * 
 * @return {DocumentApp.ListItem} the appended list item
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
 * 
 * @function DocumentApp.TableCell#appendListItem
 * 
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#appendParagraph
 * 
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to append
 * 
 * @return {DocumentApp.Paragraph} the appended paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#appendParagraph
 * 
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * @function DocumentApp.TableCell#appendTable
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
 * 
 * @function DocumentApp.TableCell#appendTable
 * 
 * @param {DocumentApp.Table} table - the table to append
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells.
 * 
 * @function DocumentApp.TableCell#appendTable
 * 
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the appended table
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.TableCell#clear
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.TableCell#copy
 * 
 * @return {DocumentApp.TableCell} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.TableCell#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.TableCell#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.TableCell#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the background color.
 * 
 * @function DocumentApp.TableCell#getBackgroundColor
 * 
 * @return {String} the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.TableCell#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the column span, which is the number of columns of table cells this cell spans.
 * Non-merged cells have a col span of 1.
 * 
 * @function DocumentApp.TableCell#getColSpan
 * 
 * @return {IntegerNum} the column span or 0 for a cell which is merged over by another cell
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.TableCell#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.TableCell#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the bottom padding, in points.
 * 
 * @function DocumentApp.TableCell#getPaddingBottom
 * 
 * @return {Number} the bottom padding, in points
 */


/**
 * Retrieves the left padding, in points.
 * 
 * @function DocumentApp.TableCell#getPaddingLeft
 * 
 * @return {Number} the left padding, in points
 */


/**
 * Retrieves the right padding, in points.
 * 
 * @function DocumentApp.TableCell#getPaddingRight
 * 
 * @return {Number} the right padding, in points
 */


/**
 * Retrieves the top padding, in points.
 * 
 * @function DocumentApp.TableCell#getPaddingTop
 * 
 * @return {Number} the top padding, in points
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.TableCell#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> containing the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 * 
 * @function DocumentApp.TableCell#getParentRow
 * 
 * @return {DocumentApp.TableRow} the table row containing the current cell
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 * 
 * @function DocumentApp.TableCell#getParentTable
 * 
 * @return {DocumentApp.Table} the table containing the current cell
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.TableCell#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged
 * cells have a row span of 1.
 * 
 * @function DocumentApp.TableCell#getRowSpan
 * 
 * @return {IntegerNum} the row span or 0 for a cell which is merged over by another cell
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.TableCell#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.TableCell#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/vertical-alignment.html'>VerticalAlignment</a></code>.
 * 
 * @function DocumentApp.TableCell#getVerticalAlignment
 * 
 * @return {DocumentApp.VerticalAlignment} the vertical alignment
 */


/**
 * Retrieves the width of the column containing the cell, in points.
 * 
 * @function DocumentApp.TableCell#getWidth
 * 
 * @return {Number} the column width, in points
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
 * 
 * <p>The horizontal rule will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#insertHorizontalRule
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.HorizontalRule} the new horizontal rule
 */


/**
 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
 * index.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {BlobSource} image - the image data
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
 * 
 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
 * 
 * @function DocumentApp.TableCell#insertImage
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.InlineImage} image - the image to insert
 * 
 * @return {DocumentApp.InlineImage} the inserted inline image
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 * 
 * @function DocumentApp.TableCell#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.ListItem} listItem - the list item to insert
 * 
 * @return {DocumentApp.ListItem} inserted new list item
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
 * 
 * @function DocumentApp.TableCell#insertListItem
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.ListItem} the new list item
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 * 
 * @function DocumentApp.TableCell#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.Paragraph} paragraph - the paragraph to insert
 * 
 * @return {DocumentApp.Paragraph} the inserted paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
 * 
 * @function DocumentApp.TableCell#insertParagraph
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {String} text - the text contents
 * 
 * @return {DocumentApp.Paragraph} the new paragraph
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.TableCell#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
 * 
 * @function DocumentApp.TableCell#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.Table} table - the table to insert
 * 
 * @return {DocumentApp.Table} the inserted table
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
 * 
 * @function DocumentApp.TableCell#insertTable
 * 
 * @param {IntegerNum} childIndex - the index at which to insert
 * @param {String[][]} cells - the text contents of the table cells to add to the new table
 * 
 * @return {DocumentApp.Table} the new table
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.TableCell#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#merge
 * 
 * @return {DocumentApp.TableCell} the merged element
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.TableCell#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#removeFromParent
 * 
 * @return {DocumentApp.TableCell} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the background color.
 * 
 * @function DocumentApp.TableCell#setBackgroundColor
 * 
 * @param {String} color - the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.TableCell#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the bottom padding, in points.
 * 
 * @function DocumentApp.TableCell#setPaddingBottom
 * 
 * @param {Number} paddingBottom - the bottom padding, in points
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the left padding, in points.
 * 
 * @function DocumentApp.TableCell#setPaddingLeft
 * 
 * @param {Number} paddingLeft - the left padding, in points
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the right padding, in points.
 * 
 * @function DocumentApp.TableCell#setPaddingRight
 * 
 * @param {Number} paddingTop - the right padding, in points
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the top padding, in points.
 * 
 * @function DocumentApp.TableCell#setPaddingTop
 * 
 * @param {Number} paddingTop - the top padding, in points
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the contents as plain text.
 * 
 * <p>Note: existing contents are cleared.
 * 
 * @function DocumentApp.TableCell#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.TableCell#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the vertical alignment.
 * 
 * @function DocumentApp.TableCell#setVerticalAlignment
 * 
 * @param {DocumentApp.VerticalAlignment} alignment - the vertical alignment
 * 
 * @return {DocumentApp.TableCell} the current element
 */


/**
 * Sets the width of the column containing the current cell, in points.
 * 
 * @function DocumentApp.TableCell#setWidth
 * 
 * @param {Number} width - the column width, in points
 * 
 * @return {DocumentApp.TableCell} the current element
 */



/**
 * @class DocumentApp.TableOfContents
 */

/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.TableOfContents#clear
 * 
 * @return {DocumentApp.TableOfContents} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.TableOfContents#copy
 * 
 * @return {DocumentApp.TableOfContents} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.TableOfContents#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.TableOfContents#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.TableOfContents#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.TableOfContents#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.TableOfContents#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.TableOfContents#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.TableOfContents#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.TableOfContents#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.TableOfContents#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.TableOfContents#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.TableOfContents#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#removeFromParent
 * 
 * @return {DocumentApp.TableOfContents} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.TableOfContents} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.TableOfContents#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.TableOfContents} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.TableOfContents#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.TableOfContents} the current element
 */



/**
 * @class DocumentApp.TableRow
 */

/**
 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 * 
 * @function DocumentApp.TableRow#appendTableCell
 * 
 * @return {DocumentApp.TableCell} the new table cell
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
 * 
 * @function DocumentApp.TableRow#appendTableCell
 * 
 * @param {DocumentApp.TableCell} tableCell - the table cell to append
 * 
 * @return {DocumentApp.TableCell} the appended table cell
 */


/**
 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> containing the specified text.
 * 
 * @function DocumentApp.TableRow#appendTableCell
 * 
 * @param {String} textContents - the cell's text contents
 * 
 * @return {DocumentApp.TableCell} the appended table cell element
 */


/**
 * Clears the contents of the element.
 * 
 * @function DocumentApp.TableRow#clear
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.TableRow#copy
 * 
 * @return {DocumentApp.TableRow} the new copy
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for a descendant of the specified type.
 * 
 * @function DocumentApp.TableRow#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search element
 */


/**
 * Searches the contents of the element for a descendant of the specified type, starting from the
 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define the search parameters.
 * var searchType = DocumentApp.ElementType.PARAGRAPH;
 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
 * var searchResult = null;
 * 
 * // Search until the paragraph is found.
 * while (searchResult = body.findElement(searchType, searchResult)) {
 *   var par = searchResult.getElement().asParagraph();
 *   if (par.getHeading() == searchHeading) {
 *     // Found one, update and stop.
 *     par.setText(&#39;This is the first header.&#39;);
 *     return;
 *   }
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#findElement
 * 
 * @param {DocumentApp.ElementType} elementType - the type of element to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.TableRow#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.TableRow#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified cell index.
 * 
 * @function DocumentApp.TableRow#getCell
 * 
 * @param {IntegerNum} cellIndex - the index of the cell to retrieve
 * 
 * @return {DocumentApp.TableCell} the table cell
 */


/**
 * Retrieves the child element at the specified child index.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document.
 * var firstChild = body.getChild(0);
 * 
 * // If it&#39;s a paragraph, set its contents.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#getChild
 * 
 * @param {IntegerNum} childIndex - the index of the child element to retrieve
 * 
 * @return {DocumentApp.Element} the child element at the specified index
 */


/**
 * Retrieves the child index for the specified child element.
 * 
 * @function DocumentApp.TableRow#getChildIndex
 * 
 * @param {DocumentApp.Element} child - the child element for which to retrieve the index
 * 
 * @return {IntegerNum} the child index
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.TableRow#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the minimum height, in points.
 * 
 * @function DocumentApp.TableRow#getMinimumHeight
 * 
 * @return {IntegerNum} the minimum height, in points
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.TableRow#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the number of cells in the row.
 * 
 * @function DocumentApp.TableRow#getNumCells
 * 
 * @return {IntegerNum} the number of cells
 */


/**
 * Retrieves the number of children.
 * 
 * <pre class="prettyprint"><code>
 * // Get the body section of the active document.
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Log the number of elements in the document.
 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
 *     &quot; elements in the document body.&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#getNumChildren
 * 
 * @return {IntegerNum} the number of children
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.TableRow#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the current row.
 * 
 * @function DocumentApp.TableRow#getParentTable
 * 
 * @return {DocumentApp.Table} the table containing the current row
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.TableRow#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.TableRow#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.TableRow#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index.
 * 
 * @function DocumentApp.TableRow#insertTableCell
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * 
 * @return {DocumentApp.TableCell} the new table cell
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index.
 * 
 * @function DocumentApp.TableRow#insertTableCell
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {DocumentApp.TableCell} tableCell - the table cell to insert
 * 
 * @return {DocumentApp.TableCell} the inserted table cell
 */


/**
 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index, containing the given text.
 * 
 * @function DocumentApp.TableRow#insertTableCell
 * 
 * @param {IntegerNum} childIndex - the index at which to insert the element
 * @param {String} textContents - the cell's text contents
 * 
 * @return {DocumentApp.TableCell} the inserted table cell
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.TableRow#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#merge
 * 
 * @return {DocumentApp.TableRow} the merged element
 */


/**
 * Removes the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified cell index.
 * 
 * @function DocumentApp.TableRow#removeCell
 * 
 * @param {IntegerNum} cellIndex - the index of the cell to remove
 * 
 * @return {DocumentApp.TableCell} the removed cell
 */


/**
 * Removes the specified child element.
 * 
 * @function DocumentApp.TableRow#removeChild
 * 
 * @param {DocumentApp.Element} child - the child element to remove
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#removeFromParent
 * 
 * @return {DocumentApp.TableRow} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.TableRow#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Sets the minimum height, in points.
 * 
 * @function DocumentApp.TableRow#setMinimumHeight
 * 
 * @param {IntegerNum} minHeight - the minimum height, in points
 * 
 * @return {DocumentApp.TableRow} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.TableRow#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.TableRow} the current element
 */



/**
 * @class DocumentApp.Text
 */

/**
 * Appends the specified text at the given character offset.
 * 
 * @function DocumentApp.Text#appendText
 * 
 * @param {String} text - the text to append
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.Text#copy
 * 
 * @return {DocumentApp.Text} the new copy
 */


/**
 * Deletes a range of text.
 * 
 * @function DocumentApp.Text#deleteText
 * 
 * @param {IntegerNum} startOffset - the character offset of the first character to delete
 * @param {IntegerNum} endOffsetInclusive - the character offset of the last character to delete
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
 * 
 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
 * 
 * <p>Child elements fully contained within a deleted text range are removed from the element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Insert two paragraphs separated by a paragraph containing an
 * // horizontal rule.
 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
 * body.insertHorizontalRule(0);
 * body.insertParagraph(0, &quot;An example.&quot;);
 * 
 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
 * body.editAsText().deleteText(14, 25);
 * </code></pre>
 * 
 * @function DocumentApp.Text#editAsText
 * 
 * @return {DocumentApp.Text} a text version of the current element
 */


/**
 * Searches the contents of the element for the specified text pattern using regular expressions.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Text#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the position of the search text, or null if there is no
 *     match
 */


/**
 * Searches the contents of the element for the specified text pattern, starting from a given
 * search result.
 * 
 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
 * capture groups and mode modifiers.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * @function DocumentApp.Text#findText
 * 
 * @param {String} searchPattern - the pattern to search for
 * @param {DocumentApp.RangeElement} from - the search result to search from
 * 
 * @return {DocumentApp.RangeElement} a search result indicating the next position of the search text, or null if there is no
 *     match
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Text#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the attributes at the specified character offset.
 * 
 * <p>The result is an object containing a property for each valid text attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * @function DocumentApp.Text#getAttributes
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the background color setting.
 * 
 * @function DocumentApp.Text#getBackgroundColor
 * 
 * @return {String} the background color, formatted in CSS notation (like <code>'#ffffff'</code>), or null
 *     if the element contains multiple values for this attribute
 */


/**
 * Retrieves the background color at the specified character offset.
 * 
 * @function DocumentApp.Text#getBackgroundColor
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {String} the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
 */


/**
 * Retrieves the font family setting. The name can be any font from the Font menu in Docs or <a
 * href="https://www.google.com/fonts">Google Fonts</a>, and is case-sensitive. The methods <code>getFontFamily()</code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#setFontFamily(String)'>setFontFamily(fontFamilyName)</a></code> now use string names for fonts instead of
 * the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
 * deprecated, it will remain available for compatibility with older scripts.
 * 
 * @function DocumentApp.Text#getFontFamily
 * 
 * @return {String} the font family, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the font family at the specified character offset. The name can be any font from the
 * Font menu in Docs or <a href="https://www.google.com/fonts">Google Fonts</a>, and is
 * case-sensitive. The methods <code>getFontFamily()</code> and <code>setFontFamily(fontFamilyName)</code>
 * now use string names for fonts instead of the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
 * deprecated, it will remain available for compatibility with older scripts.
 * 
 * @function DocumentApp.Text#getFontFamily
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {String} the font family
 */


/**
 * Retrieves the font size setting.
 * 
 * @function DocumentApp.Text#getFontSize
 * 
 * @return {IntegerNum} the font size, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the font size at the specified character offset.
 * 
 * @function DocumentApp.Text#getFontSize
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {IntegerNum} the font size
 */


/**
 * Retrieves the foreground color setting.
 * 
 * @function DocumentApp.Text#getForegroundColor
 * 
 * @return {String} the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>), or null
 *     if the element contains multiple values for this attribute
 */


/**
 * Retrieves the foreground color at the specified character offset.
 * 
 * @function DocumentApp.Text#getForegroundColor
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {String} the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>)
 */


/**
 * Retrieves the link url.
 * 
 * @function DocumentApp.Text#getLinkUrl
 * 
 * @return {String} the link url, or null if the element contains multiple values for this attribute
 */


/**
 * Retrieves the link url at the specified character offset.
 * 
 * @function DocumentApp.Text#getLinkUrl
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {String} the link url
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.Text#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.Text#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.Text#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the contents of the element as a text string.
 * 
 * @function DocumentApp.Text#getText
 * 
 * @return {String} the contents of the element as text string
 */


/**
 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.Text#getTextAlignment
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text contains multiple types of text
 *     alignments or if the text alignment has never been set
 */


/**
 * Gets the text alignment for a single character. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * @function DocumentApp.Text#getTextAlignment
 * 
 * @param {IntegerNum} offset - the offset of the character
 * 
 * @return {DocumentApp.TextAlignment} the type of text alignment, or <code>null</code> if the text alignment has never been set
 */


/**
 * Retrieves the set of text indices that correspond to the start of distinct text formatting
 * runs.
 * 
 * @function DocumentApp.Text#getTextAttributeIndices
 * 
 * @return {IntegerNum[]} the set of text indices at which text formatting changes
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Text#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Inserts the specified text at the given character offset.
 * 
 * @function DocumentApp.Text#insertText
 * 
 * @param {IntegerNum} offset - the character offset at which to insert
 * @param {String} text - the text to insert
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.Text#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Retrieves the bold setting.
 * 
 * @function DocumentApp.Text#isBold
 * 
 * @return {Boolean} whether the text is bold, or null if the element contains multiple values for this
 *     attribute
 */


/**
 * Retrieves the bold setting at the specified character offset.
 * 
 * @function DocumentApp.Text#isBold
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {Boolean} the bold setting
 */


/**
 * Retrieves the italic setting.
 * 
 * @function DocumentApp.Text#isItalic
 * 
 * @return {Boolean} whether the text is italic, or null if the element contains multiple values for this
 *     attribute
 */


/**
 * Retrieves the italic setting at the specified character offset.
 * 
 * @function DocumentApp.Text#isItalic
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {Boolean} the italic setting
 */


/**
 * Retrieves the strikethrough setting.
 * 
 * @function DocumentApp.Text#isStrikethrough
 * 
 * @return {Boolean} whether the text is strikethrough, or null if the element contains multiple values for
 *     this attribute
 */


/**
 * Retrieves the strikethrough setting at the specified character offset.
 * 
 * @function DocumentApp.Text#isStrikethrough
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {Boolean} the strikethrough setting
 */


/**
 * Retrieves the underline setting.
 * 
 * @function DocumentApp.Text#isUnderline
 * 
 * @return {Boolean} whether the text is underlined, or null if the element contains multiple values for
 *     this attribute
 */


/**
 * Retrieves the underline setting at the specified character offset.
 * 
 * @function DocumentApp.Text#isUnderline
 * 
 * @param {IntegerNum} offset - the character offset
 * 
 * @return {Boolean} the underline setting
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.Text#merge
 * 
 * @return {DocumentApp.Text} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.Text#removeFromParent
 * 
 * @return {DocumentApp.Text} the removed element
 */


/**
 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
 * expressions.
 * 
 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
 * Because of this you'll need to escape any backslashes in the pattern.
 * 
 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
 * expression library, which limits the <a
 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
 * 
 * <p>The provided regular expression pattern is independently matched against each text block
 * contained in the current element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
 * </code></pre>
 * 
 * @function DocumentApp.Text#replaceText
 * 
 * @param {String} searchPattern - the regex pattern to search for
 * @param {String} replacement - the text to use as replacement
 * 
 * @return {DocumentApp.Element} the current element
 */


/**
 * Applies the specified attributes to the given character range.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * @function DocumentApp.Text#setAttributes
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.Text#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the background color for the specified character range.
 * 
 * @function DocumentApp.Text#setBackgroundColor
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {String} color - the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the background color.
 * 
 * @function DocumentApp.Text#setBackgroundColor
 * 
 * @param {String} color - the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the bold setting.
 * 
 * @function DocumentApp.Text#setBold
 * 
 * @param {Boolean} bold - the bold setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the bold setting for the specified character range.
 * 
 * @function DocumentApp.Text#setBold
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {Boolean} bold - the bold setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the font family for the specified character range. The name can be any font from the Font
 * menu in Docs or <a href="https://www.google.com/fonts">Google Fonts</a>, and is case-sensitive.
 * Unrecognized font names will render as Arial. The methods <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#getFontFamily(Integer)'>getFontFamily(offset)</a></code> and
 * <code>setFontFamily(fontFamilyName)</code> now use string names for fonts instead of the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
 * deprecated, it will remain available for compatibility with older scripts.
 * 
 * @function DocumentApp.Text#setFontFamily
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {String} fontFamilyName - the name of the font family, from the Font menu in Docs or Google Fonts
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the font family. The name can be any font from the Font menu in Docs or <a
 * href="https://www.google.com/fonts">Google Fonts</a>, and is case-sensitive. Unrecognized font
 * names will render as Arial. The methods <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#getFontFamily()'>getFontFamily()</a></code> and <code>setFontFamily(fontFamilyName)</code> now use string names for fonts instead of the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
 * deprecated, it will remain available for compatibility with older scripts.
 * 
 * @function DocumentApp.Text#setFontFamily
 * 
 * @param {String} fontFamilyName - the name of the font family, from the Font menu in Docs or Google Fonts
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the font size.
 * 
 * @function DocumentApp.Text#setFontSize
 * 
 * @param {IntegerNum} size - the font size
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the font size for the specified character range.
 * 
 * @function DocumentApp.Text#setFontSize
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {IntegerNum} size - the font size
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the foreground color for the specified character range.
 * 
 * @function DocumentApp.Text#setForegroundColor
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {String} color - the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>)
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the foreground color.
 * 
 * @function DocumentApp.Text#setForegroundColor
 * 
 * @param {String} color - the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>)
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the italic setting.
 * 
 * @function DocumentApp.Text#setItalic
 * 
 * @param {Boolean} italic - the italic setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the italic setting for the specified character range.
 * 
 * @function DocumentApp.Text#setItalic
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {Boolean} italic - the italic setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the link url for the specified character range.
 * 
 * @function DocumentApp.Text#setLinkUrl
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the link url.
 * 
 * @function DocumentApp.Text#setLinkUrl
 * 
 * @param {String} url - the link url
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the strikethrough setting.
 * 
 * @function DocumentApp.Text#setStrikethrough
 * 
 * @param {Boolean} strikethrough - the strikethrough setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the strikethrough setting for the specified character range.
 * 
 * @function DocumentApp.Text#setStrikethrough
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {Boolean} strikethrough - the strikethrough setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the text contents.
 * 
 * @function DocumentApp.Text#setText
 * 
 * @param {String} text - the new text contents
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the entire first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.Text#setTextAlignment
 * 
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the text alignment for a given character range. The available types of alignment are
 * <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
 * <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Make the first character in the first paragraph be superscript.
 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
 * text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
 * </code></pre>
 * 
 * @function DocumentApp.Text#setTextAlignment
 * 
 * @param {IntegerNum} startOffset - the start offset of the character range
 * @param {IntegerNum} endOffsetInclusive - the end offset of the character range (inclusive)
 * @param {DocumentApp.TextAlignment} textAlignment - the type of text alignment to apply
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the underline setting.
 * 
 * @function DocumentApp.Text#setUnderline
 * 
 * @param {Boolean} underline - the underline setting
 * 
 * @return {DocumentApp.Text} the current element
 */


/**
 * Sets the underline setting for the specified character range.
 * 
 * @function DocumentApp.Text#setUnderline
 * 
 * @param {IntegerNum} startOffset - the text range's start offset
 * @param {IntegerNum} endOffsetInclusive - the text range's end offset
 * @param {Boolean} underline - the underline setting
 * 
 * @return {DocumentApp.Text} the current element
 */



/**
 * @class DocumentApp.TextAlignment
 */

/**
 * The normal text alignment.
 * 
 * @typedef {DocumentApp.TextAlignment} DocumentApp.TextAlignment.NORMAL
 */
/**
 * The subscript text alignment.
 * 
 * @typedef {DocumentApp.TextAlignment} DocumentApp.TextAlignment.SUBSCRIPT
 */
/**
 * The superscript text alignment.
 * 
 * @typedef {DocumentApp.TextAlignment} DocumentApp.TextAlignment.SUPERSCRIPT
 */

/**
 * @class DocumentApp.UnsupportedElement
 */

/**
 * Returns a detached, deep copy of the current element.
 * 
 * <p>Any child elements present in the element are also copied. The new element will not have a
 * parent.
 * 
 * @function DocumentApp.UnsupportedElement#copy
 * 
 * @return {DocumentApp.UnsupportedElement} the new copy
 */


/**
 * Retrieves the element's attributes.
 * 
 * <p>The result is an object containing a property for each valid element attribute where each
 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append a styled paragraph.
 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
 * par.setBold(true);
 * par.setItalic(true);
 * 
 * // Retrieve the paragraph&#39;s attributes.
 * var atts = par.getAttributes();
 * 
 * // Log the paragraph attributes.
 * for (var att in atts) {
 *   Logger.log(att + &quot;:&quot; + atts[att]);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.UnsupportedElement#getAttributes
 * 
 * @return {Object} the element's attributes
 */


/**
 * Retrieves the element's next sibling element.
 * 
 * <p>The next sibling has the same parent and follows the current element.
 * 
 * @function DocumentApp.UnsupportedElement#getNextSibling
 * 
 * @return {DocumentApp.Element} the next sibling element
 */


/**
 * Retrieves the element's parent element.
 * 
 * <p>The parent element contains the current element.
 * 
 * @function DocumentApp.UnsupportedElement#getParent
 * 
 * @return {DocumentApp.ContainerElement} the parent element
 */


/**
 * Retrieves the element's previous sibling element.
 * 
 * <p>The previous sibling has the same parent and precedes the current element.
 * 
 * @function DocumentApp.UnsupportedElement#getPreviousSibling
 * 
 * @return {DocumentApp.Element} the previous sibling element
 */


/**
 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
 * 
 * <p>Use <code>getType()</code> to determine the exact type of a given element.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Obtain the first element in the document body.
 * 
 * var firstChild = body.getChild(0);
 * 
 * // Use getType() to determine the element&#39;s type.
 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
 *   Logger.log(&#39;The first element is a paragraph.&#39;);
 * } else {
 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
 * }
 * </code></pre>
 * 
 * @function DocumentApp.UnsupportedElement#getType
 * 
 * @return {DocumentApp.ElementType} the element type
 */


/**
 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
 * 
 * @function DocumentApp.UnsupportedElement#isAtDocumentEnd
 * 
 * @return {Boolean} whether the element is at the end of the document
 */


/**
 * Merges the element with the preceding sibling of the same type.
 * 
 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
 * the current element are moved to the preceding sibling element.
 * 
 * <p>The current element is removed from the document.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Append two paragraphs to the document.
 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
 * 
 * // Merge the newly added paragraphs into a single paragraph.
 * par2.merge();
 * </code></pre>
 * 
 * @function DocumentApp.UnsupportedElement#merge
 * 
 * @return {DocumentApp.UnsupportedElement} the merged element
 */


/**
 * Removes the element from its parent.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Remove all images in the document body.
 * var imgs = body.getImages();
 * for (var i = 0; i &lt; imgs.length; i++) {
 *   imgs[i].removeFromParent();
 * }
 * </code></pre>
 * 
 * @function DocumentApp.UnsupportedElement#removeFromParent
 * 
 * @return {DocumentApp.UnsupportedElement} the removed element
 */


/**
 * Sets the element's attributes.
 * 
 * <p>The specified attributes parameter must be an object where each property name is an item in
 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
 * applied.
 * 
 * <pre class="prettyprint"><code>
 * var body = DocumentApp.getActiveDocument().getBody();
 * 
 * // Define a custom paragraph style.
 * var style = {};
 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
 *     DocumentApp.HorizontalAlignment.RIGHT;
 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
 * style[DocumentApp.Attribute.BOLD] = true;
 * 
 * // Append a plain paragraph.
 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
 * 
 * // Apply the custom style.
 * par.setAttributes(style);
 * </code></pre>
 * 
 * @function DocumentApp.UnsupportedElement#setAttributes
 * 
 * @param {Object} attributes - the element's attributes
 * 
 * @return {DocumentApp.UnsupportedElement} the current element
 */



/**
 * @class DocumentApp.VerticalAlignment
 */

/**
 * The bottom-alignment option.
 * 
 * @typedef {DocumentApp.VerticalAlignment} DocumentApp.VerticalAlignment.BOTTOM
 */
/**
 * The center-alignment option.
 * 
 * @typedef {DocumentApp.VerticalAlignment} DocumentApp.VerticalAlignment.CENTER
 */
/**
 * The top-alignment option.
 * 
 * @typedef {DocumentApp.VerticalAlignment} DocumentApp.VerticalAlignment.TOP
 */

