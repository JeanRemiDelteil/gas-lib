/**********************************************
 * @namespace XmlService
 ***********************************************/

/**
 * @class XmlService
 */

/**
 * An enumeration representing the types of XML content nodes.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentTypes
 */
/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node with the given value.
 * 
 * @function XmlService.createCdata
 * 
 * @param {String} text - the value to set
 * 
 * @return {XmlService.Cdata} the newly created <code>CDATASection</code> node
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node with the given value.
 * 
 * @function XmlService.createComment
 * 
 * @param {String} text - the value to set
 * 
 * @return {XmlService.Comment} the newly created <code>Comment</code> node
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
 * with the given name.
 * 
 * @function XmlService.createDocType
 * 
 * @param {String} elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
 *     declaration
 * 
 * @return {XmlService.DocType} the newly created <code>DocumentType</code> node
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
 * with the given name, and the given system ID for the external subset data.
 * 
 * @function XmlService.createDocType
 * 
 * @param {String} elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
 *     declaration
 * @param {String} systemId - the system ID of the external subset data to set
 * 
 * @return {XmlService.DocType} the newly created <code>DocumentType</code> node
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
 * with the given name, and the given public ID and system ID for the external subset data.
 * 
 * @function XmlService.createDocType
 * 
 * @param {String} elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
 *     declaration
 * @param {String} publicId - the public ID of the external subset data to set
 * @param {String} systemId - the system ID of the external subset data to set
 * 
 * @return {XmlService.DocType} the newly created <code>DocumentType</code> node
 */


/**
 * Creates an empty XML document.
 * 
 * @function XmlService.createDocument
 * 
 * @return {XmlService.Document} the newly created document
 */


/**
 * Creates an XML document with the given root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
 * 
 * @function XmlService.createDocument
 * 
 * @param {XmlService.Element} rootElement - the root <code>Element</code> node to set
 * 
 * @return {XmlService.Document} the newly created document
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node with the given local name and no namespace.
 * 
 * @function XmlService.createElement
 * 
 * @param {String} name - the local name to set
 * 
 * @return {XmlService.Element} the newly created <code>Element</code> node
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node with the given local name and namespace.
 * 
 * @function XmlService.createElement
 * 
 * @param {String} name - the local name to set
 * @param {XmlService.Namespace} namespace - the namespace to set
 * 
 * @return {XmlService.Element} the newly created <code>Element</code> node
 */


/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node with the given value.
 * 
 * @function XmlService.createText
 * 
 * @param {String} text - the value to set
 * 
 * @return {XmlService.Text} the newly created <code>Text</code> node
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a compact XML document. The formatter
 * defaults to <code>UTF-8</code> encoding, no indentation, and no additional line breaks, but includes
 * the XML declaration and its encoding.
 * 
 * <pre class="prettyprint"><code>
 * // Log an XML document in compact form.
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var document = XmlService.parse(xml);
 * var output = XmlService.getCompactFormat()
 *     .format(document);
 * Logger.log(output);
 * </code></pre>
 * 
 * @function XmlService.getCompactFormat
 * 
 * @return {XmlService.Format} the newly created formatter
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the given URI.
 * 
 * @function XmlService.getNamespace
 * 
 * @param {String} uri - the URI for the namespace
 * 
 * @return {XmlService.Namespace} the newly created namespace
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the given prefix and URI.
 * 
 * @function XmlService.getNamespace
 * 
 * @param {String} prefix - the prefix for the namespace
 * @param {String} uri - the URI for the namespace
 * 
 * @return {XmlService.Namespace} the newly created namespace
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> that represents the absence of a real namespace.
 * 
 * @function XmlService.getNoNamespace
 * 
 * @return {XmlService.Namespace} the newly created namespace
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a human-readable XML document. The formatter
 * defaults to <code>UTF-8</code> encoding, two-space indentation, <code>\r\n</code> line separators after
 * every node, and includes the XML declaration and its encoding.
 * 
 * <pre class="prettyprint"><code>
 * // Log an XML document in human-readable form.
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var document = XmlService.parse(xml);
 * var output = XmlService.getPrettyFormat()
 *     .format(document);
 * Logger.log(output);
 * </code></pre>
 * 
 * @function XmlService.getPrettyFormat
 * 
 * @return {XmlService.Format} the newly created formatter
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a raw XML document. The formatter defaults to
 * <code>UTF-8</code> encoding, no indentation and no line breaks other than those provided in the XML
 * document itself, and includes the XML declaration and its encoding.
 * 
 * <pre class="prettyprint"><code>
 * // Log an XML document in raw form.
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var document = XmlService.parse(xml);
 * var output = XmlService.getRawFormat()
 *     .format(document);
 * Logger.log(output);
 * </code></pre>
 * 
 * @function XmlService.getRawFormat
 * 
 * @return {XmlService.Format} the newly created formatter
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the standard <code>xml</code> prefix.
 * 
 * @function XmlService.getXmlNamespace
 * 
 * @return {XmlService.Namespace} the newly created namespace
 */


/**
 * Creates an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/document.html'>Document</a></code> from the given XML, without validating the XML.
 * 
 * <pre class="prettyprint"><code>
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var doc = XmlService.parse(xml);
 * </code></pre>
 * 
 * @function XmlService.parse
 * 
 * @param {String} xml - the XML to parse
 * 
 * @return {XmlService.Document} the newly created document
 */



/**
 * @class XmlService.Attribute
 */

/**
 * Gets the local name of the attribute. If the attribute has a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/attribute.html#getNamespace()'>getNamespace()</a></code>.<code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()'>getPrefix()</a></code> to get the prefix.
 * 
 * @function XmlService.Attribute#getName
 * 
 * @return {String} the local name of the attribute
 */


/**
 * Gets the namespace for the attribute.
 * 
 * @function XmlService.Attribute#getNamespace
 * 
 * @return {XmlService.Namespace} the namespace for the attribute
 */


/**
 * Gets the value of the attribute.
 * 
 * @function XmlService.Attribute#getValue
 * 
 * @return {String} the value of the attribute
 */


/**
 * Sets the local name of the attribute. To set a namespace prefix for the attribute, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/attribute.html#setNamespace(Namespace)'>setNamespace(namespace)</a></code> in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)'>XmlService.getNamespace(prefix, uri)</a></code>.
 * 
 * @function XmlService.Attribute#setName
 * 
 * @param {String} name - the local name to set
 * 
 * @return {XmlService.Attribute} the attribute, for chaining
 */


/**
 * Sets the namespace for the attribute. The namespace must have a prefix.
 * 
 * @function XmlService.Attribute#setNamespace
 * 
 * @param {XmlService.Namespace} namespace - the namespace to set
 * 
 * @return {XmlService.Attribute} the attribute, for chaining
 */


/**
 * Sets the value of the attribute.
 * 
 * @function XmlService.Attribute#setValue
 * 
 * @param {String} value - the value to set
 * 
 * @return {XmlService.Attribute} the attribute, for chaining
 */



/**
 * @class XmlService.Cdata
 */

/**
 * Appends the given text to any content that already exists in the node.
 * 
 * @function XmlService.Cdata#append
 * 
 * @param {String} text - the text to append to the node
 * 
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */


/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.Cdata#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.Cdata#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the text value of the <code>Text</code> node.
 * 
 * @function XmlService.Cdata#getText
 * 
 * @return {String} the text value of the <code>Text</code> node
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.Cdata#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */


/**
 * Sets the text value of the <code>Text</code> node.
 * 
 * @function XmlService.Cdata#setText
 * 
 * @param {String} text - the text value to set
 * 
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */



/**
 * @class XmlService.Comment
 */

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.Comment#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.Comment#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the text value of the <code>Comment</code> node.
 * 
 * @function XmlService.Comment#getText
 * 
 * @return {String} the text value of the <code>Comment</code> node
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.Comment#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */


/**
 * Sets the text value of the <code>Comment</code> node.
 * 
 * @function XmlService.Comment#setText
 * 
 * @param {String} text - the text value to set
 * 
 * @return {XmlService.Comment} the <code>Comment</code> node, for chaining
 */



/**
 * @class XmlService.Content
 */

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node for the purposes of autocomplete. If the
 * node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>CDATA</code>, this method returns <code>null</code>.
 * 
 * @function XmlService.Content#asCdata
 * 
 * @return {XmlService.Cdata} the <code>CDATASection</code> node
 */


/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node for the purposes of autocomplete. If the node's
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>COMMENT</code>, this method returns <code>null</code>.
 * 
 * @function XmlService.Content#asComment
 * 
 * @return {XmlService.Comment} the <code>Comment</code> node, or <code>null</code> if the node's content type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>COMMENT</a></code>
 */


/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the purposes of autocomplete. If
 * the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>DOCTYPE</code>, this method returns <code>null</code>.
 * 
 * @function XmlService.Content#asDocType
 * 
 * @return {XmlService.DocType} the <code>DocumentType</code> node
 */


/**
 * Casts the node as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node for the purposes of autocomplete. If the node's
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>ELEMENT</code>, this method returns <code>null</code>.
 * 
 * @function XmlService.Content#asElement
 * 
 * @return {XmlService.Element} the <code>Element</code> node
 */


/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/entity-ref.html'>EntityReference</a></code> node for the purposes of autocomplete.
 * If the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>ENTITYREF</code>, this method returns
 * <code>null</code>.
 * 
 * @function XmlService.Content#asEntityRef
 * 
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node
 */


/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html'>ProcessingInstruction</a></code> node for the purposes of autocomplete. If
 * the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>PROCESSINGINSTRUCTION</code>, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.Content#asProcessingInstruction
 * 
 * @return {XmlService.ProcessingInstruction} the <code>ProcessingInstruction</code> node
 */


/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node for the purposes of autocomplete. If the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>TEXT</code>, this method returns <code>null</code>.
 * 
 * @function XmlService.Content#asText
 * 
 * @return {XmlService.Text} the <code>Text</code> node
 */


/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.Content#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.Content#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the node's content type.
 * 
 * @function XmlService.Content#getType
 * 
 * @return {XmlService.ContentType} the node's content type
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.Content#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */



/**
 * @class XmlService.ContentType
 */

/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.CDATA
 */
/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.COMMENT
 */
/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.DOCTYPE
 */
/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.ELEMENT
 */
/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/entity-ref.html'>EntityReference</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.ENTITYREF
 */
/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html'>ProcessingInstruction</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.PROCESSINGINSTRUCTION
 */
/**
 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node.
 * 
 * @typedef {XmlService.ContentType} XmlService.ContentType.TEXT
 */

/**
 * @class XmlService.DocType
 */

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.DocType#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the name of the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node specified in the <code>DocType</code> declaration.
 * 
 * @function XmlService.DocType#getElementName
 * 
 * @return {String} the name of the root <code>Element</code> node specified in the <code>DocType</code> declaration
 */


/**
 * Gets the internal subset data for the <code>DocumentType</code> node.
 * 
 * @function XmlService.DocType#getInternalSubset
 * 
 * @return {String} the internal subset data
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.DocType#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the public ID of the external subset data for the <code>DocumentType</code> node.
 * 
 * @function XmlService.DocType#getPublicId
 * 
 * @return {String} the public ID of the external subset data
 */


/**
 * Gets the system ID of the external subset data for the <code>DocumentType</code> node.
 * 
 * @function XmlService.DocType#getSystemId
 * 
 * @return {String} the system ID of the external subset data
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.DocType#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */


/**
 * Sets the name of the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node to specify in the <code>DocType</code>
 * declaration.
 * 
 * @function XmlService.DocType#setElementName
 * 
 * @param {String} name - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
 *     declaration
 * 
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */


/**
 * Sets the internal subset data for the <code>DocumentType</code> node.
 * 
 * @function XmlService.DocType#setInternalSubset
 * 
 * @param {String} data - the internal subset data to set
 * 
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */


/**
 * Sets the public ID of the external subset data for the <code>DocumentType</code> node.
 * 
 * @function XmlService.DocType#setPublicId
 * 
 * @param {String} id - the public ID of the external subset data to set
 * 
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */


/**
 * Sets the system ID of the external subset data for the <code>DocumentType</code> node.
 * 
 * @function XmlService.DocType#setSystemId
 * 
 * @param {String} id - the system ID of the external subset data to set
 * 
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */



/**
 * @class XmlService.Document
 */

/**
 * Inserts the given node at the given index among all nodes that are immediate children of the
 * document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object
 * that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>. Note, however, that a document
 * can only have one child <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node, which is implicitly the root <code>Element</code>
 * node.
 * 
 * @function XmlService.Document#addContent
 * 
 * @param {IntegerNum} index - the index at which to insert the node among all nodes that are immediate children
 *     of the document
 * @param {XmlService.Content} content - the node to insert
 * 
 * @return {XmlService.Document} the document, for chaining
 */


/**
 * Appends the given node to the end of the document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>. Note, however, that a document can only have one child <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code>
 * node, which is implicitly the root <code>Element</code> node.
 * 
 * @function XmlService.Document#addContent
 * 
 * @param {XmlService.Content} content - the node to append
 * 
 * @return {XmlService.Document} the document, for chaining
 */


/**
 * Creates unattached copies of all nodes that are immediate children of the document.
 * 
 * @function XmlService.Document#cloneContent
 * 
 * @return {XmlService.Content[]} an array of unattached copies of all nodes that are immediate children of the
 *     document
 */


/**
 * Detaches and returns the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document does not have
 * a root <code>Element</code> node, this method returns <code>null</code>.
 * 
 * @function XmlService.Document#detachRootElement
 * 
 * @return {XmlService.Element} the detached <code>Element</code> node, or <code>null</code> if the document does not have a root
 *     <code>Element</code> node
 */


/**
 * Gets all nodes that are immediate children of the document.
 * 
 * @function XmlService.Document#getAllContent
 * 
 * @return {XmlService.Content[]} an array of all nodes that are immediate children of the document
 */


/**
 * Gets the node at the given index among all nodes that are immediate children of the
 * document. If there is no node at the given index, this method returns <code>null</code>.
 * 
 * @function XmlService.Document#getContent
 * 
 * @param {IntegerNum} index - the index for the node among all nodes that are immediate children of the
 *     document
 * 
 * @return {XmlService.Content} the node, or <code>null</code> if there is no node at the given index
 */


/**
 * Gets the number of nodes that are immediate children of the document.
 * 
 * @function XmlService.Document#getContentSize
 * 
 * @return {IntegerNum} the number of nodes that are immediate children of the document
 */


/**
 * Gets all nodes that are direct or indirect children of the document, in the order they
 * appear in the document.
 * 
 * @function XmlService.Document#getDescendants
 * 
 * @return {XmlService.Content[]} an array of all nodes that are direct or indirect children of the document
 */


/**
 * Gets the document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocType</a></code> declaration. If the document does not have a <code>DocumentType</code> node, this method returns <code>null</code>.
 * 
 * @function XmlService.Document#getDocType
 * 
 * @return {XmlService.DocType} the <code>DocumentType</code> node, or <code>null</code> if the document does not have a <code>DocumentType</code> node
 */


/**
 * Gets the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document does not have a root <code>Element</code> node, this method returns <code>null</code>.
 * 
 * @function XmlService.Document#getRootElement
 * 
 * @return {XmlService.Element} the root <code>Element</code> node, or <code>null</code> if the document does not have a root
 *     <code>Element</code> node
 */


/**
 * Determines whether the document has a root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
 * 
 * @function XmlService.Document#hasRootElement
 * 
 * @return {Boolean} <code>true</code> if the document has a root <code>Element</code> node; <code>false</code> if not
 */


/**
 * Removes all nodes that are immediate children of the document.
 * 
 * @function XmlService.Document#removeContent
 * 
 * @return {XmlService.Content[]} an array of all nodes that were immediate children of the document before they
 *     were removed
 */


/**
 * Removes the node at the given index among all nodes that are immediate children of the
 * document. If there is no node at the given index, this method returns <code>null</code>.
 * 
 * @function XmlService.Document#removeContent
 * 
 * @param {IntegerNum} index - the index for the node among all nodes that are immediate children of the
 *     document
 * 
 * @return {XmlService.Content} the node that was removed, or <code>null</code> if there is no node at the given index
 */


/**
 * Removes the given node, if the node is an immediate child of the document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object that corresponds to a
 * type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
 * 
 * @function XmlService.Document#removeContent
 * 
 * @param {XmlService.Content} content - the node to remove
 * 
 * @return {Boolean} <code>true</code> if the node was an immediate child and was removed; <code>false</code> if not
 */


/**
 * Sets the document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocType</a></code> declaration. If the document already has a different
 * <code>DocType</code> node, this method overwrites the old node. This method throws an exception if
 * the document already contains the same <code>DocType</code> node that is being set.
 * 
 * @function XmlService.Document#setDocType
 * 
 * @param {XmlService.DocType} docType - the <code>DocumentType</code> to set
 * 
 * @return {XmlService.Document} the document, for chaining
 */


/**
 * Sets the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document already has a root <code>Element</code> node, this method overwrites the old node.
 * 
 * @function XmlService.Document#setRootElement
 * 
 * @param {XmlService.Element} element - the root <code>Element</code> node to set
 * 
 * @return {XmlService.Document} the document, for chaining
 */



/**
 * @class XmlService.Element
 */

/**
 * Inserts the given node at the given index among all nodes that are immediate children of the
 * <code>Element</code> node. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any
 * node object that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
 * 
 * @function XmlService.Element#addContent
 * 
 * @param {IntegerNum} index - the index at which to insert the node among all nodes that are immediate children
 *     of the <code>Element</code> node
 * @param {XmlService.Content} content - the node to insert
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Appends the given node as the last child of the <code>Element</code> node. The <code>content</code>
 * argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any node object that corresponds to a type
 * listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
 * 
 * @function XmlService.Element#addContent
 * 
 * @param {XmlService.Content} content - the node to append
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Creates unattached copies of all nodes that are immediate children of the {@code Element} node.
 * 
 * @function XmlService.Element#cloneContent
 * 
 * @return {XmlService.Content[]} an array of unattached copies of all nodes that are immediate children of the
 *     {@code Element} node
 */


/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.Element#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets all nodes that are immediate children of the {@code Element} node.
 * 
 * @function XmlService.Element#getAllContent
 * 
 * @return {XmlService.Content[]} an array of all nodes that are immediate children of the {@code Element} node
 */


/**
 * Gets the attribute for this <code>Element</code> node with the given name and no namespace. If there
 * is no such attribute, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#getAttribute
 * 
 * @param {String} name - the name of the attribute
 * 
 * @return {XmlService.Attribute} the attribute, or <code>null</code> if there is no attribute with the given name and no
 *     namespace
 */


/**
 * Gets the attribute for this <code>Element</code> node with the given name and namespace. If there is
 * no such node, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#getAttribute
 * 
 * @param {String} name - the name of the attribute
 * @param {XmlService.Namespace} namespace - the namespace of the attribute
 * 
 * @return {XmlService.Attribute} the attribute, or <code>null</code> if there is no attribute with the given name and
 *     namespace
 */


/**
 * Gets all attributes for this <code>Element</code> node, in the order they appear in the document.
 * 
 * @function XmlService.Element#getAttributes
 * 
 * @return {XmlService.Attribute[]} an array of all attributes for this <code>Element</code> node
 */


/**
 * Gets the first <code>Element</code> node with the given name and no namespace that is an immediate
 * child of this <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#getChild
 * 
 * @param {String} name - the name of the child <code>Element</code> node
 * 
 * @return {XmlService.Element} the <code>Element</code> node, or <code>null</code> if there is no immediate child <code>Element</code> node with the given name and no namespace
 */


/**
 * Gets the first <code>Element</code> node with the given name and namespace that is an immediate
 * child of this <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#getChild
 * 
 * @param {String} name - the name of the child <code>Element</code> node
 * @param {XmlService.Namespace} namespace - the namespace of the child <code>Element</code> node
 * 
 * @return {XmlService.Element} the <code>Element</code> node, or <code>null</code> if there is no immediate child <code>Element</code> node with the given name and namespace
 */


/**
 * Gets the text value of the node with the given name and no namespace, if the node is an
 * immediate child of the <code>Element</code> node. If there is no such node, this method returns
 * <code>null</code>.
 * 
 * @function XmlService.Element#getChildText
 * 
 * @param {String} name - the name of the child node
 * 
 * @return {String} the text value of the child node, or <code>null</code> if there is no immediate child node
 *     with the given name and no namespace
 */


/**
 * Gets the text value of the node with the given name and namespace, if the node is an immediate
 * child of the <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#getChildText
 * 
 * @param {String} name - the name of the child node
 * @param {XmlService.Namespace} namespace - the namespace of the child node
 * 
 * @return {String} the text value of the child node, or <code>null</code> if there is no immediate child node
 *     with the given name and namespace
 */


/**
 * Gets all <code>Element</code> nodes that are immediate children of this <code>Element</code> node, in the
 * order they appear in the document.
 * 
 * @function XmlService.Element#getChildren
 * 
 * @return {XmlService.Element[]} an array of all <code>Element</code> nodes that are immediate children of this <code>Element</code> node
 */


/**
 * Gets all <code>Element</code> nodes with the given name and no namespace that are immediate children
 * of this <code>Element</code> node, in the order they appear in the document.
 * 
 * @function XmlService.Element#getChildren
 * 
 * @param {String} name - the name of the child <code>Element</code> nodes
 * 
 * @return {XmlService.Element[]} an array of all <code>Element</code> nodes with the given name and no namespace that are
 *     immediate children of this <code>Element</code> node
 */


/**
 * Gets all <code>Element</code> nodes with the given name and namespace that are immediate children of
 * this <code>Element</code> node, in the order they appear in the document.
 * 
 * @function XmlService.Element#getChildren
 * 
 * @param {String} name - the name of the child <code>Element</code> nodes
 * @param {XmlService.Namespace} namespace - the namespace of the child <code>Element</code> nodes
 * 
 * @return {XmlService.Element[]} an array of all <code>Element</code> nodes with the given name and namespace that are
 *     immediate children of this <code>Element</code> node
 */


/**
 * Gets the node at the given index among all nodes that are immediate children of the
 * {@code Element} node. If there is no node at the given index, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#getContent
 * 
 * @param {IntegerNum} index - the index for the node among all nodes that are immediate children of the
 *     {@code Element} node
 * 
 * @return {XmlService.Content} the node, or <code>null</code> if there is no node at the given index
 */


/**
 * Gets the number of nodes that are immediate children of the {@code Element} node.
 * 
 * @function XmlService.Element#getContentSize
 * 
 * @return {IntegerNum} the number of nodes that are immediate children of the {@code Element} node
 */


/**
 * Gets all nodes that are direct or indirect children of the {@code Element} node, in the order they
 * appear in the document.
 * 
 * @function XmlService.Element#getDescendants
 * 
 * @return {XmlService.Content[]} an array of all nodes that are direct or indirect children of the {@code Element} node
 */


/**
 * Gets the XML document that contains the {@code Element} node.
 * 
 * @function XmlService.Element#getDocument
 * 
 * @return {XmlService.Document} the document that contains the {@code Element} node
 */


/**
 * Gets the local name of the <code>Element</code> node. If the node has a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getQualifiedName()'>getQualifiedName()</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getNamespace()'>getNamespace()</a></code>.<code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()'>getPrefix()</a></code> to
 * get the prefix.
 * 
 * @function XmlService.Element#getName
 * 
 * @return {String} the local name of the <code>Element</code> node
 */


/**
 * Gets the namespace for the <code>Element</code> node.
 * 
 * @function XmlService.Element#getNamespace
 * 
 * @return {XmlService.Namespace} the namespace for the <code>Element</code> node
 */


/**
 * Gets the namespace with the given prefix for the <code>Element</code> node.
 * 
 * @function XmlService.Element#getNamespace
 * 
 * @param {String} prefix - the prefix for the namespace
 * 
 * @return {XmlService.Namespace} the namespace with the given prefix for the <code>Element</code> node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.Element#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the local name and namespace prefix of the <code>Element</code> node, in the form <code>[namespacePrefix]:[localName]</code>. If the node does not have a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getName()'>getName()</a></code>.
 * 
 * @function XmlService.Element#getQualifiedName
 * 
 * @return {String} the local name and namespace prefix of the <code>Element</code> node, in the form <code>[namespacePrefix]:[localName]</code>
 */


/**
 * Gets the text value of the <code>Element</code> node.
 * 
 * @function XmlService.Element#getText
 * 
 * @return {String} the text value of the <code>Element</code> node
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.Element#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */


/**
 * Determines whether this <code>Element</code> node is a direct or indirect parent of a given <code>Element</code> node.
 * 
 * @function XmlService.Element#isAncestorOf
 * 
 * @param {XmlService.Element} other - the other <code>Element</code> node
 * 
 * @return {Boolean} <code>true</code> if this <code>Element</code> node is a direct or indirect parent of the given
 *     <code>Element</code> node; <code>false</code> if not
 */


/**
 * Determines whether the <code>Element</code> node is the document's root node.
 * 
 * @function XmlService.Element#isRootElement
 * 
 * @return {Boolean} <code>true</code> if the <code>Element</code> node is the document's root node; <code>false</code> if
 *     not
 */


/**
 * Removes the attribute for this <code>Element</code> node with the given name and no namespace, if
 * such an attribute exists.
 * 
 * @function XmlService.Element#removeAttribute
 * 
 * @param {String} attributeName - the name of the attribute
 * 
 * @return {Boolean} <code>true</code> if the attribute existed and was removed; <code>false</code> if not
 */


/**
 * Removes the attribute for this <code>Element</code> node with the given name and namespace, if such
 * an attribute exists.
 * 
 * @function XmlService.Element#removeAttribute
 * 
 * @param {String} attributeName - the name of the attribute
 * @param {XmlService.Namespace} namespace - the namespace of the attribute
 * 
 * @return {Boolean} <code>true</code> if the attribute existed and was removed; <code>false</code> if not
 */


/**
 * Removes the given attribute for this <code>Element</code> node, if such an attribute exists.
 * 
 * @function XmlService.Element#removeAttribute
 * 
 * @param {XmlService.Attribute} attribute - the attribute
 * 
 * @return {Boolean} <code>true</code> if the attribute existed and was removed; <code>false</code> if not
 */


/**
 * Removes all nodes that are immediate children of the {@code Element} node.
 * 
 * @function XmlService.Element#removeContent
 * 
 * @return {XmlService.Content[]} an array of all nodes that were immediate children of the {@code Element} node before they
 *     were removed
 */


/**
 * Removes the node at the given index among all nodes that are immediate children of the
 * {@code Element} node. If there is no node at the given index, this method returns <code>null</code>.
 * 
 * @function XmlService.Element#removeContent
 * 
 * @param {IntegerNum} index - the index for the node among all nodes that are immediate children of the
 *     {@code Element} node
 * 
 * @return {XmlService.Content} the node that was removed, or <code>null</code> if there is no node at the given index
 */


/**
 * Removes the given node, if the node is an immediate child of the {@code Element} node. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any node object that corresponds to a
 * type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
 * 
 * @function XmlService.Element#removeContent
 * 
 * @param {XmlService.Content} content - the node to remove
 * 
 * @return {Boolean} <code>true</code> if the node was an immediate child and was removed; <code>false</code> if not
 */


/**
 * Sets the attribute for this <code>Element</code> node with the given name, value, and no namespace.
 * 
 * @function XmlService.Element#setAttribute
 * 
 * @param {String} name - the name of the attribute to set
 * @param {String} value - the value of the attribute to set
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Sets the attribute for this <code>Element</code> node with the given name, value, and namespace.
 * 
 * @function XmlService.Element#setAttribute
 * 
 * @param {String} name - the name of the attribute to set
 * @param {String} value - the value of the attribute to set
 * @param {XmlService.Namespace} namespace - the namespace of the attribute to set
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Sets the given attribute for this <code>Element</code> node.
 * 
 * @function XmlService.Element#setAttribute
 * 
 * @param {XmlService.Attribute} attribute - the attribute to set
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Sets the local name of the <code>Element</code> node. To set a namespace prefix for the node, use
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#setNamespace(Namespace)'>setNamespace(namespace)</a></code> in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)'>XmlService.getNamespace(prefix, uri)</a></code>.
 * 
 * @function XmlService.Element#setName
 * 
 * @param {String} name - the local name to set
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Sets the namespace for the <code>Element</code> node.
 * 
 * @function XmlService.Element#setNamespace
 * 
 * @param {XmlService.Namespace} namespace - the namespace to set
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */


/**
 * Sets the text value of the <code>Element</code> node. If the node already contains a text value or
 * any child nodes, this method overwrites the old content. To append or insert content instead,
 * use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Content)'>addContent(content)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Integer,Content)'>addContent(index, content)</a></code>.
 * 
 * @function XmlService.Element#setText
 * 
 * @param {String} text - the text to set
 * 
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */



/**
 * @class XmlService.EntityRef
 */

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.EntityRef#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the name of the <code>EntityReference</code> node.
 * 
 * @function XmlService.EntityRef#getName
 * 
 * @return {String} the name of the <code>EntityReference</code> node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.EntityRef#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the public ID of the <code>EntityReference</code> node. If the node does not have a public ID,
 * this method returns <code>null</code>.
 * 
 * @function XmlService.EntityRef#getPublicId
 * 
 * @return {String} the public ID of the <code>EntityReference</code> node, or <code>null</code> if it has none
 */


/**
 * Gets the system ID of the <code>EntityReference</code> node. If the node does not have a system ID,
 * this method returns <code>null</code>.
 * 
 * @function XmlService.EntityRef#getSystemId
 * 
 * @return {String} the system ID of the <code>EntityReference</code> node, or <code>null</code> if it has none
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.EntityRef#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */


/**
 * Sets the name of the <code>EntityReference</code> node.
 * 
 * @function XmlService.EntityRef#setName
 * 
 * @param {String} name - the name to set
 * 
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node, for chaining
 */


/**
 * Sets the public ID of the <code>EntityReference</code> node.
 * 
 * @function XmlService.EntityRef#setPublicId
 * 
 * @param {String} id - the public ID to set
 * 
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node, for chaining
 */


/**
 * Sets the system ID of the <code>EntityReference</code> node.
 * 
 * @function XmlService.EntityRef#setSystemId
 * 
 * @param {String} id - the system ID to set
 * 
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node, for chaining
 */



/**
 * @class XmlService.Format
 */

/**
 * Outputs the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/document.html'>Document</a></code> as a formatted string.
 * 
 * @function XmlService.Format#format
 * 
 * @param {XmlService.Document} document - the document to format
 * 
 * @return {String} the formatted document
 */


/**
 * Outputs the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node as a formatted string.
 * 
 * @function XmlService.Format#format
 * 
 * @param {XmlService.Element} element - the element to format
 * 
 * @return {String} the formatted element
 */


/**
 * Sets the character encoding that the formatter should use. The <code>encoding</code> argument must
 * be an accepted XML encoding like <code>ISO-8859-1</code>, <code>US-ASCII</code>, <code>UTF-8</code>, or <code>UTF-16</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log an XML document with encoding that does not support certain special characters.
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;ಠ‿ಠ&lt;/b&gt;&lt;b&gt;ಠ‿ಠ&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var document = XmlService.parse(xml);
 * var output = XmlService.getRawFormat()
 *     .setEncoding(&#39;ISO-8859-1&#39;)
 *     .format(document);
 * Logger.log(output);
 * </code></pre>
 * 
 * @function XmlService.Format#setEncoding
 * 
 * @param {String} encoding - the encoding to use
 * 
 * @return {XmlService.Format} the formatter, for chaining
 */


/**
 * Sets the string used to indent child nodes relative to their parents. Setting an indent other
 * than <code>null</code> will cause the formatter to insert a line break after every node.
 * 
 * <pre class="prettyprint"><code>
 * // Log an XML document with each child node indented four spaces.
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var document = XmlService.parse(xml);
 * var output = XmlService.getCompactFormat()
 *     .setIndent(&#39;    &#39;)
 *     .format(document);
 * Logger.log(output);
 * </code></pre>
 * 
 * @function XmlService.Format#setIndent
 * 
 * @param {String} indent - the indent to use
 * 
 * @return {XmlService.Format} the formatter, for chaining
 */


/**
 * Sets the string to insert whenever the formatter would normally insert a line break. The three
 * pre-defined formatters have different conditions under which they insert a line break. The
 * default line separator is <code>\r\n</code>.
 * 
 * <pre class="prettyprint"><code>
 * // Log an XML document with several spaces and a pipe character in place of line breaks.
 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 * var document = XmlService.parse(xml);
 * var output = XmlService.getRawFormat()
 *     .setLineSeparator(&#39; | &#39;)
 *     .format(document);
 * Logger.log(output);
 * </code></pre>
 * 
 * @function XmlService.Format#setLineSeparator
 * 
 * @param {String} separator - the separator to use
 * 
 * @return {XmlService.Format} the formatter, for chaining
 */


/**
 * Sets whether the formatter should omit the XML declaration, such as <code>&lt;?xml version=&quot;1.0&quot;
 * encoding=&quot;UTF-8&quot;?&gt;</code>.
 * 
 * @function XmlService.Format#setOmitDeclaration
 * 
 * @param {Boolean} omitDeclaration - <code>true</code> to omit the XML declaration; <code>false</code> to include it
 * 
 * @return {XmlService.Format} the formatter, for chaining
 */


/**
 * Sets whether the formatter should omit the encoding in the XML declaration, such as the
 * encoding field in <code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code>.
 * 
 * @function XmlService.Format#setOmitEncoding
 * 
 * @param {Boolean} omitEncoding - <code>true</code> to omit the encoding in the XML declaration; <code>false</code> to
 *     include it
 * 
 * @return {XmlService.Format} the formatter, for chaining
 */



/**
 * @class XmlService.Namespace
 */

/**
 * Gets the prefix for the namespace.
 * 
 * @function XmlService.Namespace#getPrefix
 * 
 * @return {String} the prefix for the namespace
 */


/**
 * Gets the URI for the namespace.
 * 
 * @function XmlService.Namespace#getURI
 * 
 * @return {String} the URI for the namespace
 */



/**
 * @class XmlService.ProcessingInstruction
 */

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.ProcessingInstruction#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the raw data for every instruction in the <code>ProcessingInstruction</code> node.
 * 
 * @function XmlService.ProcessingInstruction#getData
 * 
 * @return {String} the raw data for every instruction in the <code>ProcessingInstruction</code> node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.ProcessingInstruction#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the target for the <code>ProcessingInstruction</code> node.
 * 
 * @function XmlService.ProcessingInstruction#getTarget
 * 
 * @return {String} the target for the <code>ProcessingInstruction</code> node
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.ProcessingInstruction#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */



/**
 * @class XmlService.Text
 */

/**
 * Appends the given text to any content that already exists in the node.
 * 
 * @function XmlService.Text#append
 * 
 * @param {String} text - the text to append to the node
 * 
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */


/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 * this method has no effect.
 * 
 * @function XmlService.Text#detach
 * 
 * @return {XmlService.Content} the detached node
 */


/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 * returns <code>null</code>.
 * 
 * @function XmlService.Text#getParentElement
 * 
 * @return {XmlService.Element} the parent <code>Element</code> node
 */


/**
 * Gets the text value of the <code>Text</code> node.
 * 
 * @function XmlService.Text#getText
 * 
 * @return {String} the text value of the <code>Text</code> node
 */


/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 * they appear in the document.
 * 
 * @function XmlService.Text#getValue
 * 
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */


/**
 * Sets the text value of the <code>Text</code> node.
 * 
 * @function XmlService.Text#setText
 * 
 * @param {String} text - the text value to set
 * 
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */



