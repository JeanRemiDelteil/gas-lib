var XmlService = {};


/**
 * An enumeration representing the types of XML content nodes.
 * 
 * @class XmlService.ContentType
 */

/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node with the given value.
 *
 * @param {String} text - the value to set
 *
 * @return {XmlService.Cdata} the newly created <code>CDATASection</code> node
 */
XmlService.createCdata = function(text){};

/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node with the given value.
 *
 * @param {String} text - the value to set
 *
 * @return {XmlService.Comment} the newly created <code>Comment</code> node
 */
XmlService.createComment = function(text){};

/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
 with the given name.
 *
 * @param {String} elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
     declaration
 *
 * @return {XmlService.DocType} the newly created <code>DocumentType</code> node
 */
XmlService.createDocType = function(elementName){};

/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
 with the given name, and the given system ID for the external subset data.
 *
 * @param {String} elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
     declaration
 * @param {String} systemId - the system ID of the external subset data to set
 *
 * @return {XmlService.DocType} the newly created <code>DocumentType</code> node
 */
XmlService.createDocType = function(elementName, systemId){};

/**
 * Creates an empty XML document.
 *
 * @return {XmlService.Document} the newly created document
 */
XmlService.createDocument = function(){};

/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node with the given local name and no namespace.
 *
 * @param {String} name - the local name to set
 *
 * @return {XmlService.Element} the newly created <code>Element</code> node
 */
XmlService.createElement = function(name){};

/**
 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node with the given value.
 *
 * @param {String} text - the value to set
 *
 * @return {XmlService.Text} the newly created <code>Text</code> node
 */
XmlService.createText = function(text){};

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a compact XML document. The formatter
 defaults to <code>UTF-8</code> encoding, no indentation, and no additional line breaks, but includes
 the XML declaration and its encoding.

 <pre class="prettyprint"><code>
 // Log an XML document in compact form.
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var document = XmlService.parse(xml);
 var output = XmlService.getCompactFormat()
     .format(document);
 Logger.log(output);
 </code></pre>
 *
 * @return {XmlService.Format} the newly created formatter
 */
XmlService.getCompactFormat = function(){};

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the given URI.
 *
 * @param {String} uri - the URI for the namespace
 *
 * @return {XmlService.Namespace} the newly created namespace
 */
XmlService.getNamespace = function(uri){};

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> that represents the absence of a real namespace.
 *
 * @return {XmlService.Namespace} the newly created namespace
 */
XmlService.getNoNamespace = function(){};

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a human-readable XML document. The formatter
 defaults to <code>UTF-8</code> encoding, two-space indentation, <code>\r\n</code> line separators after
 every node, and includes the XML declaration and its encoding.

 <pre class="prettyprint"><code>
 // Log an XML document in human-readable form.
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var document = XmlService.parse(xml);
 var output = XmlService.getPrettyFormat()
     .format(document);
 Logger.log(output);
 </code></pre>
 *
 * @return {XmlService.Format} the newly created formatter
 */
XmlService.getPrettyFormat = function(){};

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a raw XML document. The formatter defaults to
 <code>UTF-8</code> encoding, no indentation and no line breaks other than those provided in the XML
 document itself, and includes the XML declaration and its encoding.

 <pre class="prettyprint"><code>
 // Log an XML document in raw form.
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var document = XmlService.parse(xml);
 var output = XmlService.getRawFormat()
     .format(document);
 Logger.log(output);
 </code></pre>
 *
 * @return {XmlService.Format} the newly created formatter
 */
XmlService.getRawFormat = function(){};

/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the standard <code>xml</code> prefix.
 *
 * @return {XmlService.Namespace} the newly created namespace
 */
XmlService.getXmlNamespace = function(){};

/**
 * Creates an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/document.html'>Document</a></code> from the given XML, without validating the XML.

 <pre class="prettyprint"><code>
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var doc = XmlService.parse(xml);
 </code></pre>
 *
 * @param {String} xml - the XML to parse
 *
 * @return {XmlService.Document} the newly created document
 */
XmlService.parse = function(xml){};

/** @constructor */
XmlService.Attribute = function(){};

/**
 * Gets the local name of the attribute. If the attribute has a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/attribute.html#getNamespace()'>getNamespace()</a></code>.<code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()'>getPrefix()</a></code> to get the prefix.
 *
 * @return {String} the local name of the attribute
 */
XmlService.Attribute.prototype.getName = function(){};

/**
 * Gets the namespace for the attribute.
 *
 * @return {XmlService.Namespace} the namespace for the attribute
 */
XmlService.Attribute.prototype.getNamespace = function(){};

/**
 * Gets the value of the attribute.
 *
 * @return {String} the value of the attribute
 */
XmlService.Attribute.prototype.getValue = function(){};

/**
 * Sets the local name of the attribute. To set a namespace prefix for the attribute, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/attribute.html#setNamespace(Namespace)'>setNamespace(namespace)</a></code> in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)'>XmlService.getNamespace(prefix, uri)</a></code>.
 *
 * @param {String} name - the local name to set
 *
 * @return {XmlService.Attribute} the attribute, for chaining
 */
XmlService.Attribute.prototype.setName = function(name){};

/**
 * Sets the namespace for the attribute. The namespace must have a prefix.
 *
 * @param {XmlService.Namespace} namespace - the namespace to set
 *
 * @return {XmlService.Attribute} the attribute, for chaining
 */
XmlService.Attribute.prototype.setNamespace = function(namespace){};

/**
 * Sets the value of the attribute.
 *
 * @param {String} value - the value to set
 *
 * @return {XmlService.Attribute} the attribute, for chaining
 */
XmlService.Attribute.prototype.setValue = function(value){};

/** @constructor */
XmlService.Cdata = function(){};

/**
 * Appends the given text to any content that already exists in the node.
 *
 * @param {String} text - the text to append to the node
 *
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */
XmlService.Cdata.prototype.append = function(text){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.Cdata.prototype.detach = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.Cdata.prototype.getParentElement = function(){};

/**
 * Gets the text value of the <code>Text</code> node.
 *
 * @return {String} the text value of the <code>Text</code> node
 */
XmlService.Cdata.prototype.getText = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.Cdata.prototype.getValue = function(){};

/**
 * Sets the text value of the <code>Text</code> node.
 *
 * @param {String} text - the text value to set
 *
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */
XmlService.Cdata.prototype.setText = function(text){};

/** @constructor */
XmlService.Comment = function(){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.Comment.prototype.detach = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.Comment.prototype.getParentElement = function(){};

/**
 * Gets the text value of the <code>Comment</code> node.
 *
 * @return {String} the text value of the <code>Comment</code> node
 */
XmlService.Comment.prototype.getText = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.Comment.prototype.getValue = function(){};

/**
 * Sets the text value of the <code>Comment</code> node.
 *
 * @param {String} text - the text value to set
 *
 * @return {XmlService.Comment} the <code>Comment</code> node, for chaining
 */
XmlService.Comment.prototype.setText = function(text){};

/** @constructor */
XmlService.Content = function(){};

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node for the purposes of autocomplete. If the
 node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>CDATA</code>, this method returns <code>null</code>.
 *
 * @return {XmlService.Cdata} the <code>CDATASection</code> node
 */
XmlService.Content.prototype.asCdata = function(){};

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node for the purposes of autocomplete. If the node's
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>COMMENT</code>, this method returns <code>null</code>.
 *
 * @return {XmlService.Comment} the <code>Comment</code> node, or <code>null</code> if the node's content type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>COMMENT</a></code>
 */
XmlService.Content.prototype.asComment = function(){};

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the purposes of autocomplete. If
 the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>DOCTYPE</code>, this method returns <code>null</code>.
 *
 * @return {XmlService.DocType} the <code>DocumentType</code> node
 */
XmlService.Content.prototype.asDocType = function(){};

/**
 * Casts the node as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node for the purposes of autocomplete. If the node's
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>ELEMENT</code>, this method returns <code>null</code>.
 *
 * @return {XmlService.Element} the <code>Element</code> node
 */
XmlService.Content.prototype.asElement = function(){};

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/entity-ref.html'>EntityReference</a></code> node for the purposes of autocomplete.
 If the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>ENTITYREF</code>, this method returns
 <code>null</code>.
 *
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node
 */
XmlService.Content.prototype.asEntityRef = function(){};

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html'>ProcessingInstruction</a></code> node for the purposes of autocomplete. If
 the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>PROCESSINGINSTRUCTION</code>, this method
 returns <code>null</code>.
 *
 * @return {XmlService.ProcessingInstruction} the <code>ProcessingInstruction</code> node
 */
XmlService.Content.prototype.asProcessingInstruction = function(){};

/**
 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node for the purposes of autocomplete. If the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>TEXT</code>, this method returns <code>null</code>.
 *
 * @return {XmlService.Text} the <code>Text</code> node
 */
XmlService.Content.prototype.asText = function(){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.Content.prototype.detach = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.Content.prototype.getParentElement = function(){};

/**
 * Gets the node's content type.
 *
 * @return {XmlService.ContentType} the node's content type
 */
XmlService.Content.prototype.getType = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.Content.prototype.getValue = function(){};

/** @constructor */
XmlService.ContentType = function(){};

/** @constructor */
XmlService.DocType = function(){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.DocType.prototype.detach = function(){};

/**
 * Gets the name of the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node specified in the <code>DocType</code> declaration.
 *
 * @return {String} the name of the root <code>Element</code> node specified in the <code>DocType</code> declaration
 */
XmlService.DocType.prototype.getElementName = function(){};

/**
 * Gets the internal subset data for the <code>DocumentType</code> node.
 *
 * @return {String} the internal subset data
 */
XmlService.DocType.prototype.getInternalSubset = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.DocType.prototype.getParentElement = function(){};

/**
 * Gets the public ID of the external subset data for the <code>DocumentType</code> node.
 *
 * @return {String} the public ID of the external subset data
 */
XmlService.DocType.prototype.getPublicId = function(){};

/**
 * Gets the system ID of the external subset data for the <code>DocumentType</code> node.
 *
 * @return {String} the system ID of the external subset data
 */
XmlService.DocType.prototype.getSystemId = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.DocType.prototype.getValue = function(){};

/**
 * Sets the name of the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node to specify in the <code>DocType</code>
 declaration.
 *
 * @param {String} name - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
     declaration
 *
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */
XmlService.DocType.prototype.setElementName = function(name){};

/**
 * Sets the internal subset data for the <code>DocumentType</code> node.
 *
 * @param {String} data - the internal subset data to set
 *
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */
XmlService.DocType.prototype.setInternalSubset = function(data){};

/**
 * Sets the public ID of the external subset data for the <code>DocumentType</code> node.
 *
 * @param {String} id - the public ID of the external subset data to set
 *
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */
XmlService.DocType.prototype.setPublicId = function(id){};

/**
 * Sets the system ID of the external subset data for the <code>DocumentType</code> node.
 *
 * @param {String} id - the system ID of the external subset data to set
 *
 * @return {XmlService.DocType} the <code>DocumentType</code> node, for chaining
 */
XmlService.DocType.prototype.setSystemId = function(id){};

/** @constructor */
XmlService.Document = function(){};

/**
 * Inserts the given node at the given index among all nodes that are immediate children of the
 document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object
 that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>. Note, however, that a document
 can only have one child <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node, which is implicitly the root <code>Element</code>
 node.
 *
 * @param {number} index - the index at which to insert the node among all nodes that are immediate children
     of the document
 * @param {XmlService.Content} content - the node to insert
 *
 * @return {XmlService.Document} the document, for chaining
 */
XmlService.Document.prototype.addContent = function(index, content){};

/**
 * Creates unattached copies of all nodes that are immediate children of the document.
 *
 * @return {XmlService.Content[]} an array of unattached copies of all nodes that are immediate children of the
     document
 */
XmlService.Document.prototype.cloneContent = function(){};

/**
 * Detaches and returns the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document does not have
 a root <code>Element</code> node, this method returns <code>null</code>.
 *
 * @return {XmlService.Element} the detached <code>Element</code> node, or <code>null</code> if the document does not have a root
     <code>Element</code> node
 */
XmlService.Document.prototype.detachRootElement = function(){};

/**
 * Gets all nodes that are immediate children of the document.
 *
 * @return {XmlService.Content[]} an array of all nodes that are immediate children of the document
 */
XmlService.Document.prototype.getAllContent = function(){};

/**
 * Gets the node at the given index among all nodes that are immediate children of the
 document. If there is no node at the given index, this method returns <code>null</code>.
 *
 * @param {number} index - the index for the node among all nodes that are immediate children of the
     document
 *
 * @return {XmlService.Content} the node, or <code>null</code> if there is no node at the given index
 */
XmlService.Document.prototype.getContent = function(index){};

/**
 * Gets the number of nodes that are immediate children of the document.
 *
 * @return {number} the number of nodes that are immediate children of the document
 */
XmlService.Document.prototype.getContentSize = function(){};

/**
 * Gets all nodes that are direct or indirect children of the document, in the order they
 appear in the document.
 *
 * @return {XmlService.Content[]} an array of all nodes that are direct or indirect children of the document
 */
XmlService.Document.prototype.getDescendants = function(){};

/**
 * Gets the document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocType</a></code> declaration. If the document does not have a <code>DocumentType</code> node, this method returns <code>null</code>.
 *
 * @return {XmlService.DocType} the <code>DocumentType</code> node, or <code>null</code> if the document does not have a <code>DocumentType</code> node
 */
XmlService.Document.prototype.getDocType = function(){};

/**
 * Gets the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document does not have a root <code>Element</code> node, this method returns <code>null</code>.
 *
 * @return {XmlService.Element} the root <code>Element</code> node, or <code>null</code> if the document does not have a root
     <code>Element</code> node
 */
XmlService.Document.prototype.getRootElement = function(){};

/**
 * Determines whether the document has a root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
 *
 * @return {Boolean} <code>true</code> if the document has a root <code>Element</code> node; <code>false</code> if not
 */
XmlService.Document.prototype.hasRootElement = function(){};

/**
 * Removes all nodes that are immediate children of the document.
 *
 * @return {XmlService.Content[]} an array of all nodes that were immediate children of the document before they
     were removed
 */
XmlService.Document.prototype.removeContent = function(){};

/**
 * Removes the node at the given index among all nodes that are immediate children of the
 document. If there is no node at the given index, this method returns <code>null</code>.
 *
 * @param {number} index - the index for the node among all nodes that are immediate children of the
     document
 *
 * @return {XmlService.Content} the node that was removed, or <code>null</code> if there is no node at the given index
 */
XmlService.Document.prototype.removeContent = function(index){};

/**
 * Sets the document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocType</a></code> declaration. If the document already has a different
 <code>DocType</code> node, this method overwrites the old node. This method throws an exception if
 the document already contains the same <code>DocType</code> node that is being set.
 *
 * @param {XmlService.DocType} docType - the <code>DocumentType</code> to set
 *
 * @return {XmlService.Document} the document, for chaining
 */
XmlService.Document.prototype.setDocType = function(docType){};

/**
 * Sets the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document already has a root <code>Element</code> node, this method overwrites the old node.
 *
 * @param {XmlService.Element} element - the root <code>Element</code> node to set
 *
 * @return {XmlService.Document} the document, for chaining
 */
XmlService.Document.prototype.setRootElement = function(element){};

/** @constructor */
XmlService.Element = function(){};

/**
 * Inserts the given node at the given index among all nodes that are immediate children of the
 <code>Element</code> node. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any
 node object that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
 *
 * @param {number} index - the index at which to insert the node among all nodes that are immediate children
     of the <code>Element</code> node
 * @param {XmlService.Content} content - the node to insert
 *
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */
XmlService.Element.prototype.addContent = function(index, content){};

/**
 * Creates unattached copies of all nodes that are immediate children of the {@code Element} node.
 *
 * @return {XmlService.Content[]} an array of unattached copies of all nodes that are immediate children of the
     {@code Element} node
 */
XmlService.Element.prototype.cloneContent = function(){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.Element.prototype.detach = function(){};

/**
 * Gets all nodes that are immediate children of the {@code Element} node.
 *
 * @return {XmlService.Content[]} an array of all nodes that are immediate children of the {@code Element} node
 */
XmlService.Element.prototype.getAllContent = function(){};

/**
 * Gets the attribute for this <code>Element</code> node with the given name and no namespace. If there
 is no such attribute, this method returns <code>null</code>.
 *
 * @param {String} name - the name of the attribute
 *
 * @return {XmlService.Attribute} the attribute, or <code>null</code> if there is no attribute with the given name and no
     namespace
 */
XmlService.Element.prototype.getAttribute = function(name){};

/**
 * Gets all attributes for this <code>Element</code> node, in the order they appear in the document.
 *
 * @return {XmlService.Attribute[]} an array of all attributes for this <code>Element</code> node
 */
XmlService.Element.prototype.getAttributes = function(){};

/**
 * Gets the first <code>Element</code> node with the given name and no namespace that is an immediate
 child of this <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
 *
 * @param {String} name - the name of the child <code>Element</code> node
 *
 * @return {XmlService.Element} the <code>Element</code> node, or <code>null</code> if there is no immediate child <code>Element</code> node with the given name and no namespace
 */
XmlService.Element.prototype.getChild = function(name){};

/**
 * Gets the text value of the node with the given name and no namespace, if the node is an
 immediate child of the <code>Element</code> node. If there is no such node, this method returns
 <code>null</code>.
 *
 * @param {String} name - the name of the child node
 *
 * @return {String} the text value of the child node, or <code>null</code> if there is no immediate child node
     with the given name and no namespace
 */
XmlService.Element.prototype.getChildText = function(name){};

/**
 * Gets all <code>Element</code> nodes that are immediate children of this <code>Element</code> node, in the
 order they appear in the document.
 *
 * @return {XmlService.Element[]} an array of all <code>Element</code> nodes that are immediate children of this <code>Element</code> node
 */
XmlService.Element.prototype.getChildren = function(){};

/**
 * Gets all <code>Element</code> nodes with the given name and no namespace that are immediate children
 of this <code>Element</code> node, in the order they appear in the document.
 *
 * @param {String} name - the name of the child <code>Element</code> nodes
 *
 * @return {XmlService.Element[]} an array of all <code>Element</code> nodes with the given name and no namespace that are
     immediate children of this <code>Element</code> node
 */
XmlService.Element.prototype.getChildren = function(name){};

/**
 * Gets the node at the given index among all nodes that are immediate children of the
 {@code Element} node. If there is no node at the given index, this method returns <code>null</code>.
 *
 * @param {number} index - the index for the node among all nodes that are immediate children of the
     {@code Element} node
 *
 * @return {XmlService.Content} the node, or <code>null</code> if there is no node at the given index
 */
XmlService.Element.prototype.getContent = function(index){};

/**
 * Gets the number of nodes that are immediate children of the {@code Element} node.
 *
 * @return {number} the number of nodes that are immediate children of the {@code Element} node
 */
XmlService.Element.prototype.getContentSize = function(){};

/**
 * Gets all nodes that are direct or indirect children of the {@code Element} node, in the order they
 appear in the document.
 *
 * @return {XmlService.Content[]} an array of all nodes that are direct or indirect children of the {@code Element} node
 */
XmlService.Element.prototype.getDescendants = function(){};

/**
 * Gets the XML document that contains the {@code Element} node.
 *
 * @return {XmlService.Document} the document that contains the {@code Element} node
 */
XmlService.Element.prototype.getDocument = function(){};

/**
 * Gets the local name of the <code>Element</code> node. If the node has a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getQualifiedName()'>getQualifiedName()</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getNamespace()'>getNamespace()</a></code>.<code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()'>getPrefix()</a></code> to
 get the prefix.
 *
 * @return {String} the local name of the <code>Element</code> node
 */
XmlService.Element.prototype.getName = function(){};

/**
 * Gets the namespace for the <code>Element</code> node.
 *
 * @return {XmlService.Namespace} the namespace for the <code>Element</code> node
 */
XmlService.Element.prototype.getNamespace = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.Element.prototype.getParentElement = function(){};

/**
 * Gets the local name and namespace prefix of the <code>Element</code> node, in the form <code>[namespacePrefix]:[localName]</code>. If the node does not have a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getName()'>getName()</a></code>.
 *
 * @return {String} the local name and namespace prefix of the <code>Element</code> node, in the form <code>[namespacePrefix]:[localName]</code>
 */
XmlService.Element.prototype.getQualifiedName = function(){};

/**
 * Gets the text value of the <code>Element</code> node.
 *
 * @return {String} the text value of the <code>Element</code> node
 */
XmlService.Element.prototype.getText = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.Element.prototype.getValue = function(){};

/**
 * Determines whether this <code>Element</code> node is a direct or indirect parent of a given <code>Element</code> node.
 *
 * @param {XmlService.Element} other - the other <code>Element</code> node
 *
 * @return {Boolean} <code>true</code> if this <code>Element</code> node is a direct or indirect parent of the given
     <code>Element</code> node; <code>false</code> if not
 */
XmlService.Element.prototype.isAncestorOf = function(other){};

/**
 * Determines whether the <code>Element</code> node is the document's root node.
 *
 * @return {Boolean} <code>true</code> if the <code>Element</code> node is the document's root node; <code>false</code> if
     not
 */
XmlService.Element.prototype.isRootElement = function(){};

/**
 * Removes the attribute for this <code>Element</code> node with the given name and no namespace, if
 such an attribute exists.
 *
 * @param {String} attributeName - the name of the attribute
 *
 * @return {Boolean} <code>true</code> if the attribute existed and was removed; <code>false</code> if not
 */
XmlService.Element.prototype.removeAttribute = function(attributeName){};

/**
 * Removes the attribute for this <code>Element</code> node with the given name and namespace, if such
 an attribute exists.
 *
 * @param {String} attributeName - the name of the attribute
 * @param {XmlService.Namespace} namespace - the namespace of the attribute
 *
 * @return {Boolean} <code>true</code> if the attribute existed and was removed; <code>false</code> if not
 */
XmlService.Element.prototype.removeAttribute = function(attributeName, namespace){};

/**
 * Removes all nodes that are immediate children of the {@code Element} node.
 *
 * @return {XmlService.Content[]} an array of all nodes that were immediate children of the {@code Element} node before they
     were removed
 */
XmlService.Element.prototype.removeContent = function(){};

/**
 * Removes the node at the given index among all nodes that are immediate children of the
 {@code Element} node. If there is no node at the given index, this method returns <code>null</code>.
 *
 * @param {number} index - the index for the node among all nodes that are immediate children of the
     {@code Element} node
 *
 * @return {XmlService.Content} the node that was removed, or <code>null</code> if there is no node at the given index
 */
XmlService.Element.prototype.removeContent = function(index){};

/**
 * Sets the attribute for this <code>Element</code> node with the given name, value, and no namespace.
 *
 * @param {String} name - the name of the attribute to set
 * @param {String} value - the value of the attribute to set
 *
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */
XmlService.Element.prototype.setAttribute = function(name, value){};

/**
 * Sets the attribute for this <code>Element</code> node with the given name, value, and namespace.
 *
 * @param {String} name - the name of the attribute to set
 * @param {String} value - the value of the attribute to set
 * @param {XmlService.Namespace} namespace - the namespace of the attribute to set
 *
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */
XmlService.Element.prototype.setAttribute = function(name, value, namespace){};

/**
 * Sets the local name of the <code>Element</code> node. To set a namespace prefix for the node, use
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#setNamespace(Namespace)'>setNamespace(namespace)</a></code> in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)'>XmlService.getNamespace(prefix, uri)</a></code>.
 *
 * @param {String} name - the local name to set
 *
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */
XmlService.Element.prototype.setName = function(name){};

/**
 * Sets the namespace for the <code>Element</code> node.
 *
 * @param {XmlService.Namespace} namespace - the namespace to set
 *
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */
XmlService.Element.prototype.setNamespace = function(namespace){};

/**
 * Sets the text value of the <code>Element</code> node. If the node already contains a text value or
 any child nodes, this method overwrites the old content. To append or insert content instead,
 use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Content)'>addContent(content)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Integer,Content)'>addContent(index, content)</a></code>.
 *
 * @param {String} text - the text to set
 *
 * @return {XmlService.Element} the <code>Element</code> node, for chaining
 */
XmlService.Element.prototype.setText = function(text){};

/** @constructor */
XmlService.EntityRef = function(){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.EntityRef.prototype.detach = function(){};

/**
 * Gets the name of the <code>EntityReference</code> node.
 *
 * @return {String} the name of the <code>EntityReference</code> node
 */
XmlService.EntityRef.prototype.getName = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.EntityRef.prototype.getParentElement = function(){};

/**
 * Gets the public ID of the <code>EntityReference</code> node. If the node does not have a public ID,
 this method returns <code>null</code>.
 *
 * @return {String} the public ID of the <code>EntityReference</code> node, or <code>null</code> if it has none
 */
XmlService.EntityRef.prototype.getPublicId = function(){};

/**
 * Gets the system ID of the <code>EntityReference</code> node. If the node does not have a system ID,
 this method returns <code>null</code>.
 *
 * @return {String} the system ID of the <code>EntityReference</code> node, or <code>null</code> if it has none
 */
XmlService.EntityRef.prototype.getSystemId = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.EntityRef.prototype.getValue = function(){};

/**
 * Sets the name of the <code>EntityReference</code> node.
 *
 * @param {String} name - the name to set
 *
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node, for chaining
 */
XmlService.EntityRef.prototype.setName = function(name){};

/**
 * Sets the public ID of the <code>EntityReference</code> node.
 *
 * @param {String} id - the public ID to set
 *
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node, for chaining
 */
XmlService.EntityRef.prototype.setPublicId = function(id){};

/**
 * Sets the system ID of the <code>EntityReference</code> node.
 *
 * @param {String} id - the system ID to set
 *
 * @return {XmlService.EntityRef} the <code>EntityReference</code> node, for chaining
 */
XmlService.EntityRef.prototype.setSystemId = function(id){};

/** @constructor */
XmlService.Format = function(){};

/**
 * Outputs the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/document.html'>Document</a></code> as a formatted string.
 *
 * @param {XmlService.Document} document - the document to format
 *
 * @return {String} the formatted document
 */
XmlService.Format.prototype.format = function(document){};

/**
 * Sets the character encoding that the formatter should use. The <code>encoding</code> argument must
 be an accepted XML encoding like <code>ISO-8859-1</code>, <code>US-ASCII</code>, <code>UTF-8</code>, or <code>UTF-16</code>.

 <pre class="prettyprint"><code>
 // Log an XML document with encoding that does not support certain special characters.
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;ಠ‿ಠ&lt;/b&gt;&lt;b&gt;ಠ‿ಠ&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var document = XmlService.parse(xml);
 var output = XmlService.getRawFormat()
     .setEncoding(&#39;ISO-8859-1&#39;)
     .format(document);
 Logger.log(output);
 </code></pre>
 *
 * @param {String} encoding - the encoding to use
 *
 * @return {XmlService.Format} the formatter, for chaining
 */
XmlService.Format.prototype.setEncoding = function(encoding){};

/**
 * Sets the string used to indent child nodes relative to their parents. Setting an indent other
 than <code>null</code> will cause the formatter to insert a line break after every node.

 <pre class="prettyprint"><code>
 // Log an XML document with each child node indented four spaces.
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var document = XmlService.parse(xml);
 var output = XmlService.getCompactFormat()
     .setIndent(&#39;    &#39;)
     .format(document);
 Logger.log(output);
 </code></pre>
 *
 * @param {String} indent - the indent to use
 *
 * @return {XmlService.Format} the formatter, for chaining
 */
XmlService.Format.prototype.setIndent = function(indent){};

/**
 * Sets the string to insert whenever the formatter would normally insert a line break. The three
 pre-defined formatters have different conditions under which they insert a line break. The
 default line separator is <code>\r\n</code>.

 <pre class="prettyprint"><code>
 // Log an XML document with several spaces and a pipe character in place of line breaks.
 var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
 var document = XmlService.parse(xml);
 var output = XmlService.getRawFormat()
     .setLineSeparator(&#39; | &#39;)
     .format(document);
 Logger.log(output);
 </code></pre>
 *
 * @param {String} separator - the separator to use
 *
 * @return {XmlService.Format} the formatter, for chaining
 */
XmlService.Format.prototype.setLineSeparator = function(separator){};

/**
 * Sets whether the formatter should omit the XML declaration, such as <code>&lt;?xml version=&quot;1.0&quot;
 encoding=&quot;UTF-8&quot;?&gt;</code>.
 *
 * @param {Boolean} omitDeclaration - <code>true</code> to omit the XML declaration; <code>false</code> to include it
 *
 * @return {XmlService.Format} the formatter, for chaining
 */
XmlService.Format.prototype.setOmitDeclaration = function(omitDeclaration){};

/**
 * Sets whether the formatter should omit the encoding in the XML declaration, such as the
 encoding field in <code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code>.
 *
 * @param {Boolean} omitEncoding - <code>true</code> to omit the encoding in the XML declaration; <code>false</code> to
     include it
 *
 * @return {XmlService.Format} the formatter, for chaining
 */
XmlService.Format.prototype.setOmitEncoding = function(omitEncoding){};

/** @constructor */
XmlService.Namespace = function(){};

/**
 * Gets the prefix for the namespace.
 *
 * @return {String} the prefix for the namespace
 */
XmlService.Namespace.prototype.getPrefix = function(){};

/**
 * Gets the URI for the namespace.
 *
 * @return {String} the URI for the namespace
 */
XmlService.Namespace.prototype.getURI = function(){};

/** @constructor */
XmlService.ProcessingInstruction = function(){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.ProcessingInstruction.prototype.detach = function(){};

/**
 * Gets the raw data for every instruction in the <code>ProcessingInstruction</code> node.
 *
 * @return {String} the raw data for every instruction in the <code>ProcessingInstruction</code> node
 */
XmlService.ProcessingInstruction.prototype.getData = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.ProcessingInstruction.prototype.getParentElement = function(){};

/**
 * Gets the target for the <code>ProcessingInstruction</code> node.
 *
 * @return {String} the target for the <code>ProcessingInstruction</code> node
 */
XmlService.ProcessingInstruction.prototype.getTarget = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.ProcessingInstruction.prototype.getValue = function(){};

/** @constructor */
XmlService.Text = function(){};

/**
 * Appends the given text to any content that already exists in the node.
 *
 * @param {String} text - the text to append to the node
 *
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */
XmlService.Text.prototype.append = function(text){};

/**
 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
 this method has no effect.
 *
 * @return {XmlService.Content} the detached node
 */
XmlService.Text.prototype.detach = function(){};

/**
 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
 returns <code>null</code>.
 *
 * @return {XmlService.Element} the parent <code>Element</code> node
 */
XmlService.Text.prototype.getParentElement = function(){};

/**
 * Gets the text value of the <code>Text</code> node.
 *
 * @return {String} the text value of the <code>Text</code> node
 */
XmlService.Text.prototype.getText = function(){};

/**
 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
 they appear in the document.
 *
 * @return {String} the text value of all nodes that are direct or indirect children of the node
 */
XmlService.Text.prototype.getValue = function(){};

/**
 * Sets the text value of the <code>Text</code> node.
 *
 * @param {String} text - the text value to set
 *
 * @return {XmlService.Text} the <code>Text</code> node, for chaining
 */
XmlService.Text.prototype.setText = function(text){};

