var FormApp = {};


/**
 * An enumeration of types of image alignment.

 */
FormApp.Alignment = function(){};

/**
 * Align the image to the center of the form.
 *
 * @type {{}}
 */
FormApp.Alignment.prototype.CENTER = {};

/**
 * Align the image to the left side of the form.
 *
 * @type {{}}
 */
FormApp.Alignment.prototype.LEFT = {};

/**
 * Align the image to the right side of the form.
 *
 * @type {{}}
 */
FormApp.Alignment.prototype.RIGHT = {};

/**
 * An enumeration of types of destinations that can store form responses.

 */
FormApp.DestinationType = function(){};

/**
 * A Google Sheets spreadsheet as a destination for form responses.
 *
 * @type {{}}
 */
FormApp.DestinationType.prototype.SPREADSHEET = {};

/**
 * An enumeration of types of form <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Items</a></code>.

 */
FormApp.ItemType = function(){};

/**
 * A question item that allows the respondent to select one or more checkboxes, as well as an
 optional "other" field.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.CHECKBOX = {};

/**
 * A question item that allows the respondent to indicate a date.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.DATE = {};

/**
 * A question item that allows the respondent to indicate a date and time.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.DATETIME = {};

/**
 * A question item that allows the respondent to indicate a length of time.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.DURATION = {};

/**
 * A question item, presented as a grid of columns and rows, that allows the respondent to select
 one choice per row from a sequence of radio buttons.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.GRID = {};

/**
 * A layout item that displays an image.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.IMAGE = {};

/**
 * A question item that allows the respondent to select one choice from a drop-down list.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.LIST = {};

/**
 * A question item that allows the respondent to select one choice from a list of radio buttons or
 an optional "other" field.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.MULTIPLE_CHOICE = {};

/**
 * A layout item that marks the start of a page.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.PAGE_BREAK = {};

/**
 * A question item that allows the respondent to enter a block of text.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.PARAGRAPH_TEXT = {};

/**
 * A question item that allows the respondent to choose one option from a numbered sequence of
 radio buttons.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.SCALE = {};

/**
 * A layout item that visually indicates the start of a section.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.SECTION_HEADER = {};

/**
 * A question item that allows the respondent to enter a single line of text.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.TEXT = {};

/**
 * A question item that allows the respondent to indicate a time of day.
 *
 * @type {{}}
 */
FormApp.ItemType.prototype.TIME = {};

/**
 * An enumeration of possible behaviors for navigating pages.

 */
FormApp.PageNavigationType = function(){};

/**
 * Continue to the next page of the form after completing the current page.
 *
 * @type {{}}
 */
FormApp.PageNavigationType.prototype.CONTINUE = {};

/**
 * Jump to a specified page of the form after completing the current page.
 *
 * @type {{}}
 */
FormApp.PageNavigationType.prototype.GO_TO_PAGE = {};

/**
 * Restart the form from the beginning, without clearing answers entered so far, after completing
 the current page.
 *
 * @type {{}}
 */
FormApp.PageNavigationType.prototype.RESTART = {};

/**
 * Submit the form response after completing the current page.
 *
 * @type {{}}
 */
FormApp.PageNavigationType.prototype.SUBMIT = {};

/**
 * Creates and returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. Throws an exception if the given title is <code>null</code>
 or empty.

 <pre class="prettyprint">
 // Create and open a form.
 var form = FormApp.create('Form Name');
 </pre>
 *
 * @param {String} title - the name of the new form
 *
 * @return {FormApp.Form} the new form
 */
FormApp.create = function(title){};

/**
 * Returns the form to which the script is 
 <a href="/apps-script/scripts_containers">container-bound</a>. To interact with forms to which
 the script is not container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-app.html#openById(String)'>openById(id)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-app.html#openByUrl(String)'>openByUrl(url)</a></code>
 instead.

 <pre class="prettyprint">
 // Get the form to which this script is bound.
 var form = FormApp.getActiveForm();
 </pre>
 *
 * @return {FormApp.Form} the form to which the script is bound, or <code>null</code> if the script is not bound to a
     form
 */
FormApp.getActiveForm = function(){};

/**
 * Returns an instance of the form editor's user-interface environment that allows the script to
 add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 current instance of an open form editor (not the view that a respondent sees), and only
 if the script is <a href="/apps-script/scripts_containers">bound</a> to the form. For more
 information, see the guides to <a href="/apps-script/guides/menus">menus</a> and
 <a href="/apps-script/guides/dialogs">dialogs and sidebars</a>.

 <pre class="prettyprint">
 // Add a custom menu to the active form, including a separator and a sub-menu.
 function onOpen(e) {
   FormApp.getUi()
       .createMenu('My Menu')
       .addItem('My menu item', 'myFunction')
       .addSeparator()
       .addSubMenu(FormApp.getUi().createMenu('My sub-menu')
           .addItem('One sub-menu item', 'mySecondFunction')
           .addItem('Another sub-menu item', 'myThirdFunction'))
       .addToUi();
 }
 </pre>
 *
 * @return {Ui} an instance of this form's user-interface environment
 */
FormApp.getUi = function(){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> with the specified ID. Throws an exception if the ID is invalid or the
 user does not have permission to open the form.

 <pre class="prettyprint">
 // Open a form by ID.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 </pre>
 *
 * @param {String} id - the ID of the form to open
 *
 * @return {FormApp.Form} the form with the given ID
 */
FormApp.openById = function(id){};

/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> with the specified URL. Throws an exception if the URL is invalid or
 the user does not have permission to open the form.

 <pre class="prettyprint">
 // Open a form by URL.
 var form = FormApp.openByUrl(
     'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit'
     );
 </pre>
 *
 * @param {String} url - the URL of the form to open
 *
 * @return {FormApp.Form} the form with the given URL
 */
FormApp.openByUrl = function(url){};

/** @constructor */
FormApp.CheckboxItem = function(){};

/**
 * Creates a new choice.
 *
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 *
 * @return {FormApp.Choice} the new choice
 */
FormApp.CheckboxItem.prototype.createChoice = function(value){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this checkbox item. The argument <code>responses</code> is a
 <code>String[]</code> array containing values that need to be checked. Throws an exception if any
 value does not match a valid choice for this item, unless
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html#showOtherOption(Boolean)'>showOtherOption(enabled)</a></code> is set to <code>true</code>.
 *
 * @param {String[]} responses - an array of valid answers for this multiple-choice item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.CheckboxItem.prototype.createResponse = function(responses){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.CheckboxItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */
FormApp.CheckboxItem.prototype.duplicate = function(){};

/**
 * Gets all choices for an item.
 *
 * @return {FormApp.Choice[]} an array of choices
 */
FormApp.CheckboxItem.prototype.getChoices = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.CheckboxItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.CheckboxItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.CheckboxItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.CheckboxItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.CheckboxItem.prototype.getType = function(){};

/**
 * Determines whether the item has an "other" option.
 *
 * @return {Boolean} <code>true</code> if the item has an "other" option; <code>false</code> if not
 */
FormApp.CheckboxItem.prototype.hasOtherOption = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.CheckboxItem.prototype.isRequired = function(){};

/**
 * Sets the choices for an item from an array of strings. Throws an exception if the given array
 is empty.

 <pre class="prettyprint">
 // Open a form by ID and add a new list item.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 var item = form.addListItem();
 item.setTitle('Do you prefer cats or dogs?');
 item.setChoiceValues(['Dogs', 'Cats']);
 </pre>
 *
 * @param {String[]} values - the array of choice values, which respondents see as labels when viewing the form
 *
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */
FormApp.CheckboxItem.prototype.setChoiceValues = function(values){};

/**
 * Sets an array of choices for an item. Throws an exception if the given array is empty or
 contains a <code>null</code> element.

 <pre class="prettyprint">
 // Open a form by ID and add a new list item.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 var item = form.addListItem();
 item.setTitle('Do you prefer cats or dogs?')
 item.setChoices([
     item.createChoice('Cats'),
     item.createChoice('Dogs')
 ]);
 </pre>
 *
 * @param {FormApp.Choice[]} choices - an array of choices
 *
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */
FormApp.CheckboxItem.prototype.setChoices = function(choices){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */
FormApp.CheckboxItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.CheckboxItem} the current item (for chaining)
 */
FormApp.CheckboxItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */
FormApp.CheckboxItem.prototype.setTitle = function(title){};

/**
 * Sets whether the item has an "other" option. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> is <code>false</code>.
 *
 * @param {Boolean} enabled - <code>true</code> if the item has an "other" option; <code>false</code> if not
 *
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */
FormApp.CheckboxItem.prototype.showOtherOption = function(enabled){};

/** @constructor */
FormApp.Choice = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code> set as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>GO_TO_PAGE</a></code> destination
 if the responder selects this choice and completes the current page. This method applies only
 to choices associated with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItems</a></code>; for other choices,
 it returns <code>null</code>.
 *
 * @return {FormApp.PageBreakItem} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>GO_TO_PAGE</a></code> destination for this choice, or
     <code>null</code> if there is none
 */
FormApp.Choice.prototype.getGotoPage = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>PageNavigationType</a></code> that occurs if the responder selects this choice and
 completes the current page. This method applies only to choices associated with
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItems</a></code>; for other choices, it returns <code>null</code>.
 *
 * @return {FormApp.PageNavigationType} the navigation action for this choice, or <code>null</code> if there is none
 */
FormApp.Choice.prototype.getPageNavigationType = function(){};

/**
 * Gets the choice's value, which respondents see as a label when viewing the form.
 *
 * @return {String} the choice's value
 */
FormApp.Choice.prototype.getValue = function(){};

/** @constructor */
FormApp.DateItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date item. The time fields of the <code>Date</code>
 object are ignored; by default, only the year, month, and day fields are used. If
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html#setIncludesYear(Boolean)'>setIncludesYear(enabled)</a></code> is set to <code>false</code>,
 the year is ignored as well.
 *
 * @param {Date} response - a <code>Date</code> object that represents a month, day, and possibly year
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.DateItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.DateItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */
FormApp.DateItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.DateItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.DateItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.DateItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.DateItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.DateItem.prototype.getType = function(){};

/**
 * Determines whether the date item includes a year option.
 *
 * @return {Boolean} <code>true</code> if the date includes a year setting; <code>false</code> if not
 */
FormApp.DateItem.prototype.includesYear = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.DateItem.prototype.isRequired = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */
FormApp.DateItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the date item includes a year setting. The default for new date items is
 <code>true</code>.
 *
 * @param {Boolean} enableYear - <code>true</code> if the date includes a year setting; <code>false</code> if not
 *
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */
FormApp.DateItem.prototype.setIncludesYear = function(enableYear){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.DateItem} the current item (for chaining)
 */
FormApp.DateItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */
FormApp.DateItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.DateTimeItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date-time item. The seconds field of the
 <code>Date</code> object is ignored; by default, the year, month, day, hour, and minute fields are
 used. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html#setIncludesYear(Boolean)'>setIncludesYear(enabled)</a></code> is set to <code>false</code>,
 the year is ignored as well.
 *
 * @param {Date} response - a <code>Date</code> object that represents a month, day, hour, minute, and possibly
     year
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.DateTimeItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.DateTimeItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */
FormApp.DateTimeItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.DateTimeItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.DateTimeItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.DateTimeItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.DateTimeItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.DateTimeItem.prototype.getType = function(){};

/**
 * Determines whether the date item includes a year option.
 *
 * @return {Boolean} <code>true</code> if the date includes a year setting; <code>false</code> if not
 */
FormApp.DateTimeItem.prototype.includesYear = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.DateTimeItem.prototype.isRequired = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */
FormApp.DateTimeItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the date item includes a year setting. The default for new date items is
 <code>true</code>.
 *
 * @param {Boolean} enableYear - <code>true</code> if the date includes a year setting; <code>false</code> if not
 *
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */
FormApp.DateTimeItem.prototype.setIncludesYear = function(enableYear){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.DateTimeItem} the current item (for chaining)
 */
FormApp.DateTimeItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */
FormApp.DateTimeItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.DurationItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date item. The arguments <code>hours</code>,
 <code>minutes</code>, and <code>seconds</code> are best represented as integers from <code>0</code> to
 <code>72</code> for <code>hours</code> and <code>0</code> to <code>59</code> for <code>minutes</code> and
 <code>seconds</code>. Values that exceed those bounds are clamped: for example, <code>24, 60, 90</code>
 is interpreted as 24:59:59.
 *
 * @param {number} hours - the hours, represented as an integer from <code>0</code> to <code>72</code>
 * @param {number} minutes - the minutes, represented as an integer from <code>0</code> to <code>59</code>
 * @param {number} seconds - the seconds, represented as an integer from <code>0</code> to <code>59</code>
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.DurationItem.prototype.createResponse = function(hours, minutes, seconds){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.DurationItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */
FormApp.DurationItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.DurationItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.DurationItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.DurationItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.DurationItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.DurationItem.prototype.getType = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.DurationItem.prototype.isRequired = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.DurationItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */
FormApp.DurationItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.DurationItem} the current item (for chaining)
 */
FormApp.DurationItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.DurationItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */
FormApp.DurationItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.Form = function(){};

/**
 * Appends a new question item that allows the respondent to select one or more checkboxes, as
 well as an optional "other" field.
 *
 * @return {FormApp.CheckboxItem} the newly created item
 */
FormApp.Form.prototype.addCheckboxItem = function(){};

/**
 * Appends a new question item that allows the respondent to indicate a date.
 *
 * @return {FormApp.DateItem} the newly created item
 */
FormApp.Form.prototype.addDateItem = function(){};

/**
 * Appends a new question item that allows the respondent to indicate a date and time.
 *
 * @return {FormApp.DateTimeItem} the newly created item
 */
FormApp.Form.prototype.addDateTimeItem = function(){};

/**
 * Appends a new question item that allows the respondent to indicate a length of time.
 *
 * @return {FormApp.DurationItem} the newly created item
 */
FormApp.Form.prototype.addDurationItem = function(){};

/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user was already
 on the list of viewers, this method promotes the user out of the list of viewers.
 *
 * @param {User} user - a representation of the user to add
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.addEditor = function(user){};

/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If any of the
 users were already on the list of viewers, this method promotes them out of the list of
 viewers.
 *
 * @param {String[]} emailAddresses - an array of email addresses of the users to add
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.addEditors = function(emailAddresses){};

/**
 * Appends a new question item, presented as a grid of columns and rows, that allows the
 respondent to select one choice per row from a sequence of radio buttons.
 *
 * @return {FormApp.GridItem} the newly created item
 */
FormApp.Form.prototype.addGridItem = function(){};

/**
 * Appends a new layout item that displays an image.
 *
 * @return {FormApp.ImageItem} the newly created item
 */
FormApp.Form.prototype.addImageItem = function(){};

/**
 * Appends a new question item that allows the respondent to select one choice from a drop-down
 list.
 *
 * @return {FormApp.ListItem} the newly created item
 */
FormApp.Form.prototype.addListItem = function(){};

/**
 * Appends a new question item that allows the respondent to select one choice from a list of
 radio buttons or an optional "other" field.
 *
 * @return {FormApp.MultipleChoiceItem} the newly created item
 */
FormApp.Form.prototype.addMultipleChoiceItem = function(){};

/**
 * Appends a new layout item that marks the start of a page.
 *
 * @return {FormApp.PageBreakItem} the newly created item
 */
FormApp.Form.prototype.addPageBreakItem = function(){};

/**
 * Appends a new question item that allows the respondent to enter a block of text.
 *
 * @return {FormApp.ParagraphTextItem} the newly created item
 */
FormApp.Form.prototype.addParagraphTextItem = function(){};

/**
 * Appends a new question item that allows the respondent to choose one option from a numbered
 sequence of radio buttons.
 *
 * @return {FormApp.ScaleItem} the newly created item
 */
FormApp.Form.prototype.addScaleItem = function(){};

/**
 * Appends a new layout item that visually indicates the start of a section.
 *
 * @return {FormApp.SectionHeaderItem} the newly created item
 */
FormApp.Form.prototype.addSectionHeaderItem = function(){};

/**
 * Appends a new question item that allows the respondent to enter a single line of text.
 *
 * @return {FormApp.TextItem} the newly created item
 */
FormApp.Form.prototype.addTextItem = function(){};

/**
 * Appends a new question item that allows the respondent to indicate a time of day.
 *
 * @return {FormApp.TimeItem} the newly created item
 */
FormApp.Form.prototype.addTimeItem = function(){};

/**
 * Appends a new layout item that displays a video.
 *
 * @return {FormApp.VideoItem} the newly created item
 */
FormApp.Form.prototype.addVideoItem = function(){};

/**
 * Determines whether the form displays a link to edit a response after
 submitting it.

 <p>Regardless of this setting, the method <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()'>FormResponse.getEditResponseUrl()</a></code> allows a
 script author who has edit access to the form to generate a URL that can be used to edit a
 response.</p>
 *
 * @return {Boolean} <code>true</code> if the form displays an "Edit your response" link; <code>false</code> if not
 */
FormApp.Form.prototype.canEditResponse = function(){};

/**
 * Determines whether the form collects respondents' email addresses.

 <p>This feature is available only for forms created by users of Google Apps for Business,
 Google Apps for Education, or Google Apps for Your Domain. Email addresses for other types of
 Google accounts cannot be collected.</p>
 *
 * @return {Boolean} <code>true</code> if the form collects email addresses; <code>false</code> if not
 */
FormApp.Form.prototype.collectsEmail = function(){};

/**
 * Creates a new response to the form. To answer a question item, create an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code>
 from the item, then attach it to this form response by calling
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#withItemResponse(ItemResponse)'>FormResponse.withItemResponse(response)</a></code>. To save the assembled response, call
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#submit()'>FormResponse.submit()</a></code>.
 *
 * @return {FormApp.FormResponse} the newly created form response
 */
FormApp.Form.prototype.createResponse = function(){};

/**
 * Deletes all submitted responses from the form's response store. This method does not delete
 copies of responses stored in an external response destination (like a spreadsheet), but does
 clear the form's summary view.

 <aside class="warning">Beware: this method is irreversible.</aside>
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.deleteAllResponses = function(){};

/**
 * Deletes the item at a given index among all the items in the form. Throws a scripting exception
 if no item exists at the given index.
 *
 * @param {number} index - the index of the item among all the items in the form
 *
 * @return void
 */
FormApp.Form.prototype.deleteItem = function(index){};

/**
 * Gets the form's confirmation message.
 *
 * @return {String} the form's confirmation message
 */
FormApp.Form.prototype.getConfirmationMessage = function(){};

/**
 * Gets the custom message that will be displayed if the form is not accepting responses, or an
 empty string if no custom message has been set.
 *
 * @return {String} the custom message that will be displayed if the form is not accepting responses, or an
 empty string if no custom message has been set
 */
FormApp.Form.prototype.getCustomClosedFormMessage = function(){};

/**
 * Gets the form's description.
 *
 * @return {String} the form's description
 */
FormApp.Form.prototype.getDescription = function(){};

/**
 * Gets the ID of the form's response destination.
 *
 * @return {String} the ID of the form's response destination
 */
FormApp.Form.prototype.getDestinationId = function(){};

/**
 * Gets the type of the form's response destination.
 *
 * @return {FormApp.DestinationType} the type of the form's response destination
 */
FormApp.Form.prototype.getDestinationType = function(){};

/**
 * Gets the URL that can be used to access the form's edit mode.
 *
 * @return {String} the URL to edit the form
 */
FormApp.Form.prototype.getEditUrl = function(){};

/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user who executes the script does
 not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, this method throws an exception.
 *
 * @return {User[]} an array of users with edit permission
 */
FormApp.Form.prototype.getEditors = function(){};

/**
 * Gets the ID of the form.
 *
 * @return {String} the ID of the form
 */
FormApp.Form.prototype.getId = function(){};

/**
 * Gets the item with a given ID. Returns <code>null</code> if the ID does not correspond to an item in
 the form.
 *
 * @param {number} id - the item's ID
 *
 * @return {FormApp.Item} the item with the given ID, or <code>null</code> if the item does not exist in the form
 */
FormApp.Form.prototype.getItemById = function(id){};

/**
 * Gets an array of all items of a given type.
 *
 * @param {FormApp.ItemType} itemType - the type of items to retrieve
 *
 * @return {FormApp.Item[]} an array of all items of that type
 */
FormApp.Form.prototype.getItems = function(itemType){};

/**
 * Gets the URL that can be used to respond to the form.
 *
 * @return {String} the URL to respond to the form
 */
FormApp.Form.prototype.getPublishedUrl = function(){};

/**
 * Gets a single form response based on its response ID. Response IDs can be retrieved from
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getId()'>FormResponse.getId()</a></code>.
 *
 * @param {String} responseId - the ID for the form response
 *
 * @return {FormApp.FormResponse} the form response
 */
FormApp.Form.prototype.getResponse = function(responseId){};

/**
 * Gets an array of all of the form's responses after a given date and time.
 *
 * @param {Date} timestamp - the earliest date and time for which form responses should be returned
 *
 * @return {FormApp.FormResponse[]} the list of form responses
 */
FormApp.Form.prototype.getResponses = function(timestamp){};

/**
 * Determines whether the order of the questions on each page of the form is randomized.
 *
 * @return {Boolean} <code>true</code> if the order of the questions on each page of the form is randomized;
     <code>false</code> if not
 */
FormApp.Form.prototype.getShuffleQuestions = function(){};

/**
 * Gets the URL that can be used to view a summary of the form's responses. Unless
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setPublishingSummary(Boolean)'>setPublishingSummary(enabled)</a></code> is set to <code>true</code>, only users with edit permission to
 the form will be able to access the URL.
 *
 * @return {String} the URL to view a summary of responses
 */
FormApp.Form.prototype.getSummaryUrl = function(){};

/**
 * Gets the form's title.
 *
 * @return {String} the form's title
 */
FormApp.Form.prototype.getTitle = function(){};

/**
 * Determines whether the form allows only one response per respondent. If the value is
 <code>true</code>, the script cannot submit form responses at all.
 *
 * @return {Boolean} <code>true</code> if the form allows only one response per respondent; <code>false</code> if not
 */
FormApp.Form.prototype.hasLimitOneResponsePerUser = function(){};

/**
 * Determines whether the form displays a progress bar.
 *
 * @return {Boolean} <code>true</code> if the form displays a progress bar; <code>false</code> if not
 */
FormApp.Form.prototype.hasProgressBar = function(){};

/**
 * Determines whether the form displays a link to submit another response after a respondent
 completes the form.
 *
 * @return {Boolean} <code>true</code> if the form displays a "Submit another response" link; <code>false</code> if
     not
 */
FormApp.Form.prototype.hasRespondAgainLink = function(){};

/**
 * Determines whether the form is currently accepting responses.
 *
 * @return {Boolean} <code>true</code> if the form is accepting responses; <code>false</code> if not
 */
FormApp.Form.prototype.isAcceptingResponses = function(){};

/**
 * Determines whether the form displays a link to view a summary of responses after a respondent
 completes the form.
 *
 * @return {Boolean} <code>true</code> if the form displays a "See previous responses" link; <code>false</code> if not
 */
FormApp.Form.prototype.isPublishingSummary = function(){};

/**
 * Moves an item at a given index among all the items in the form to another given index. Throws a
 scripting exception if the <code>to</code> index is out of bounds.
 *
 * @param {number} from - the current index of the item among all the items in the form
 * @param {number} to - the new index for the item among all the items in the form
 *
 * @return {FormApp.Item} the item that was moved
 */
FormApp.Form.prototype.moveItem = function(from, to){};

/**
 * Unlinks the form from its current response destination. The unlinked former destination still
 retains a copy of all previous responses. All forms, including those that do not have a
 destination set explicitly,
 <a href="https://support.google.com/drive/answer/2917686?hl=en&p=forms_response">save
 a copy of responses in the form's response store</a>. If the form does not currently have a
 response destination, this method has no effect.
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.removeDestination = function(){};

/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. This method does not
 block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> if they belong to a class of users who have
 general access ? for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is shared with the user's entire domain.
 *
 * @param {User} user - a representation of the user to remove
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.removeEditor = function(user){};

/**
 * Determines whether the form requires respondents to log in to an account in the same domain or
 a subdomain before responding.
 *
 * @return {Boolean} <code>true</code> if the form requires users to log in; <code>false</code> if not
 */
FormApp.Form.prototype.requiresLogin = function(){};

/**
 * Sets whether the form is currently accepting responses. The default for new forms is
 <code>true</code>.
 *
 * @param {Boolean} enabled - <code>true</code> if the form should accept responses; <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setAcceptingResponses = function(enabled){};

/**
 * Sets whether the form displays a link to edit a response after submitting it. The default for
 new forms is <code>false</code>.

 <p>Regardless of this setting, the method <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()'>FormResponse.getEditResponseUrl()</a></code> allows a
 script author who has edit permission to the form to generate a URL that can be used to edit a
 response.</p>
 *
 * @param {Boolean} enabled - <code>true</code> if the form should display an "Edit your response" link;
     <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setAllowResponseEdits = function(enabled){};

/**
 * Sets whether the form collects respondents' email addresses. The default for new forms is
 <code>false</code>. As a side effect, setting this property to <code>true</code> also sets
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setRequireLogin(Boolean)'>setRequireLogin(requireLogin)</a></code> to <code>true</code>.

 <p>This feature is available only for forms created by users of Google Apps for Business,
 Google Apps for Education, or Google Apps for Your Domain. Email addresses for other types of
 Google accounts cannot be collected. For forms created with other Google accounts, this method
 throws a scripting exception.</p>
 *
 * @param {Boolean} collect - <code>true</code> if the form should collect email addresses; <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setCollectEmail = function(collect){};

/**
 * Sets the form's confirmation message.
 *
 * @param {String} message - the form's new confirmation message
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setConfirmationMessage = function(message){};

/**
 * Sets the message to display if the form is not accepting responses. If no message is
 set, the form will use a default message.
 *
 * @param {String} message - the message to display if the form is not accepting responses
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setCustomClosedFormMessage = function(message){};

/**
 * Sets the form's description.
 *
 * @param {String} description - the form's new description
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setDescription = function(description){};

/**
 * Sets the destination where form responses are saved. All forms, including those that do not
 have a destination set explicitly,
 <a href="https://support.google.com/drive/answer/2917686?hl=en&p=forms_response">save
 a copy of responses in the form's response store</a>.
 *
 * @param {FormApp.DestinationType} type - the type of the form's response destination
 * @param {String} id - the ID of the form's response destination
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setDestination = function(type, id){};

/**
 * Sets whether the form allows only one response per respondent. The default for new forms is
 <code>false</code>. If the value is set to <code>true</code>, the script cannot submit form responses
 at all.
 *
 * @param {Boolean} enabled - <code>true</code> if the form should allow only one response per respondent;
     <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setLimitOneResponsePerUser = function(enabled){};

/**
 * Sets whether the form has a progress bar. The default for new forms is <code>false</code>.
 *
 * @param {Boolean} enabled - <code>true</code> if the form should display a progress bar; <code>false</code>
     if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setProgressBar = function(enabled){};

/**
 * Sets whether the form displays a link to view a summary of responses after a respondent submits
 the form. The default for new forms is <code>false</code>.
 *
 * @param {Boolean} enabled - <code>true</code> if the form should display a "See previous responses" link;
     <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setPublishingSummary = function(enabled){};

/**
 * Sets whether the form requires respondents to log in to an account in the same domain or a
 subdomain before responding. The default for new forms is <code>false</code> unless a domain
 administrator changes the default.

 <p>This feature is available only for forms created by users of Google Apps for Business,
 Google Apps for Education, or Google Apps for Your Domain. Users of other types of Google
 accounts cannot be required to log in. This method throws a scripting exception for forms
 created with other Google accounts or if it is set to <code>false</code> while
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>setCollectEmail(collect)</a></code> is set to <code>true</code>.</p>
 *
 * @param {Boolean} requireLogin - <code>true</code> if the form requires users to log in; <code>false</code> if not
 *
 * @return {FormApp.Form} the current form (for chaining)
 */
FormApp.Form.prototype.setRequireLogin = function(requireLogin){};

/**
 * Sets whether the form displays a link to submit another response after a respondent completes
 the form. The default for new forms is <code>true</code>.
 *
 * @param {Boolean} enabled - <code>true</code> if the form should display a "Submit another response" link;
     <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setShowLinkToRespondAgain = function(enabled){};

/**
 * Sets whether the order of the questions on each page of the form is randomized.
 *
 * @param {Boolean} shuffle - <code>true</code> if the order of the questions on each page of the form should be
     randomized; <code>false</code> if not
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setShuffleQuestions = function(shuffle){};

/**
 * Sets the form's title.
 *
 * @param {String} title - the form's new title
 *
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */
FormApp.Form.prototype.setTitle = function(title){};

/**
 * Converts a long URL for a form to a short URL. Throws an exception if the long URL does not
 belong to Google Forms.
 *
 * @param {String} url - 
 *
 * @return {String} a URL in the form <code>http://goo.gl/forms/1234</code>
 */
FormApp.Form.prototype.shortenFormUrl = function(url){};

/** @constructor */
FormApp.FormResponse = function(){};

/**
 * Generates a URL that can be used to edit a response that has already been submitted, even if
 the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setAllowResponseEdits(Boolean)'>Form.setAllowResponseEdits(enabled)</a></code> setting is disabled. Anyone who visits the link
 can edit the response, although they need an account with access to the form if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setRequireLogin(Boolean)'>Form.setRequireLogin(requireLogin)</a></code> setting is enabled. If the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>Form.setCollectEmail(collect)</a></code> setting is enabled, the form records the email address of
 the user who edited the response instead of the email address of the original respondent.

 <p>For a form response that the script has created but not yet submitted, this method returns
 <code>null</code>.</p>
 *
 * @return {String} the URL to change a submitted response
 */
FormApp.FormResponse.prototype.getEditResponseUrl = function(){};

/**
 * Gets the ID of the form response. This method returns <code>null</code> if the form response has not
 been submitted.
 *
 * @return {String} the ID of the form response, or <code>null</code> if the form response has not been
     submitted
 */
FormApp.FormResponse.prototype.getId = function(){};

/**
 * Gets all item responses contained in this form response, in the same order as the items appear
 in the form. If form response does not contain a response for an item, that item response is
 excluded from the array.
 *
 * @return {FormApp.ItemResponse[]} an array of responses to every question item within the form for which the respondent
     provided an answer
 */
FormApp.FormResponse.prototype.getItemResponses = function(){};

/**
 * Gets the email address of the person who submitted this response, if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>Form.setCollectEmail(collect)</a></code> setting is enabled.

 <p>For a form response that the script has created but not yet submitted, this method returns
 <code>null</code>.</p>
 *
 * @return {String} the email address of the person who submitted this response, if available, or
     <code>null</code> if the script created this response but has not yet submitted it
 */
FormApp.FormResponse.prototype.getRespondentEmail = function(){};

/**
 * Gets the item response contained in this form response for a given item.
 *
 * @param {FormApp.Item} item - 
 *
 * @return {FormApp.ItemResponse} the response for a given item, or <code>null</code> if none exists
 */
FormApp.FormResponse.prototype.getResponseForItem = function(item){};

/**
 * Gets the timestamp at which this response was submitted.
 
 <p>For a form response that the script has created but not yet submitted, this method returns
 <code>null</code>.</p>
 *
 * @return {Date} the timestamp at which this response was submitted, or <code>null</code>
     if the script created this response but has not yet submitted it
 */
FormApp.FormResponse.prototype.getTimestamp = function(){};

/**
 * Submits the response. Throws a scripting exception if the response has already been submitted.
 *
 * @return {FormApp.FormResponse} a newly created response saved to the form's response store
 */
FormApp.FormResponse.prototype.submit = function(){};

/**
 * Generates a URL for the form in which the answers are pre-filled based on the answers in this
 form response.
 *
 * @return {String} the URL for a form with pre-filled answers
 */
FormApp.FormResponse.prototype.toPrefilledUrl = function(){};

/**
 * Adds an item response to this form response. This method applies only to form responses that
 the script has created but not yet submitted; it cannot affect stored responses. If this method
 is called multiple times for the same item, only the last item response is retained.
 *
 * @param {FormApp.ItemResponse} response - 
 *
 * @return {FormApp.FormResponse} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html'>FormResponse</a></code>, for chaining
 */
FormApp.FormResponse.prototype.withItemResponse = function(response){};

/** @constructor */
FormApp.GridItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this grid item. The argument <code>responses</code> must be a
 <code>String[]</code> array containing as many values as the number of rows in the grid. A
 <code>null</code> element for a non-required grid question indicates no response to that row. Throws
 an exception if any of the values does not match a valid choice.
 *
 * @param {String[]} responses - an array of valid answers for this grid item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.GridItem.prototype.createResponse = function(responses){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.GridItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */
FormApp.GridItem.prototype.duplicate = function(){};

/**
 * Gets the values for every column in the grid.
 *
 * @return {String[]} an array of column values, which respondents see as labels when viewing the form
 */
FormApp.GridItem.prototype.getColumns = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.GridItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.GridItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.GridItem.prototype.getIndex = function(){};

/**
 * Gets the values for every row in the grid.
 *
 * @return {String[]} an array of row values, which respondents see as labels when viewing the form
 */
FormApp.GridItem.prototype.getRows = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.GridItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.GridItem.prototype.getType = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.GridItem.prototype.isRequired = function(){};

/**
 * Sets the columns of the grid based on an array of values. Throws an exception if the given
 array is empty.
 *
 * @param {String[]} columns - an array of column values, which respondents see as labels when viewing the form
 *
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */
FormApp.GridItem.prototype.setColumns = function(columns){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */
FormApp.GridItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.GridItem} the current item (for chaining)
 */
FormApp.GridItem.prototype.setRequired = function(enabled){};

/**
 * Sets the rows of the grid based on an array of values. Throws an exception if the given array
 is empty.
 *
 * @param {String[]} rows - an array of row values, which respondents see as labels when viewing the form
 *
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */
FormApp.GridItem.prototype.setRows = function(rows){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */
FormApp.GridItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.ImageItem = function(){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.ImageItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */
FormApp.ImageItem.prototype.duplicate = function(){};

/**
 * Gets the image's horizontal alignment.
 *
 * @return {FormApp.Alignment} the horizontal alignment
 */
FormApp.ImageItem.prototype.getAlignment = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.ImageItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.ImageItem.prototype.getId = function(){};

/**
 * Gets the image that is currently assigned to the item.
 *
 * @return {Blob} the image data
 */
FormApp.ImageItem.prototype.getImage = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.ImageItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.ImageItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.ImageItem.prototype.getType = function(){};

/**
 * Gets the image's width in pixels.
 *
 * @return {number} the width in pixels
 */
FormApp.ImageItem.prototype.getWidth = function(){};

/**
 * Sets the image's horizontal alignment.
 *
 * @param {FormApp.Alignment} alignment - the horizontal alignment
 *
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */
FormApp.ImageItem.prototype.setAlignment = function(alignment){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */
FormApp.ImageItem.prototype.setHelpText = function(text){};

/**
 * Sets the image itself.
 *
 * @param {BlobSource} image - the image data
 *
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */
FormApp.ImageItem.prototype.setImage = function(image){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */
FormApp.ImageItem.prototype.setTitle = function(title){};

/**
 * Sets the image's width in pixels. Only the image's width can be set. Height is set
 automatically to maintain the image's proportions.
 *
 * @param {number} width - the width in pixels
 *
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */
FormApp.ImageItem.prototype.setWidth = function(width){};

/** @constructor */
FormApp.Item = function(){};

/**
 * Returns the item as a checkbox item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>CHECKBOX</code>.
 *
 * @return {FormApp.CheckboxItem} the checkbox item
 */
FormApp.Item.prototype.asCheckboxItem = function(){};

/**
 * Returns the item as a date item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>DATE</code>.
 *
 * @return {FormApp.DateItem} the date item
 */
FormApp.Item.prototype.asDateItem = function(){};

/**
 * Returns the item as a date-time item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>DATETIME</code>.
 *
 * @return {FormApp.DateTimeItem} the date-time item
 */
FormApp.Item.prototype.asDateTimeItem = function(){};

/**
 * Returns the item as a duration item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>DURATION</code>.
 *
 * @return {FormApp.DurationItem} the duration item
 */
FormApp.Item.prototype.asDurationItem = function(){};

/**
 * Returns the item as a grid item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>GRID</code>.
 *
 * @return {FormApp.GridItem} the grid item
 */
FormApp.Item.prototype.asGridItem = function(){};

/**
 * Returns the item as an image item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>
 was not already <code>IMAGE</code>.
 *
 * @return {FormApp.ImageItem} the image item
 */
FormApp.Item.prototype.asImageItem = function(){};

/**
 * Returns the item as a list item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>LIST</code>.
 *
 * @return {FormApp.ListItem} the list item
 */
FormApp.Item.prototype.asListItem = function(){};

/**
 * Returns the item as a multiple-choice item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>MULTIPLE_CHOICE</code>.
 *
 * @return {FormApp.MultipleChoiceItem} the multiple-choice item
 */
FormApp.Item.prototype.asMultipleChoiceItem = function(){};

/**
 * Returns the item as a page-break item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>PAGE_BREAK</code>.
 *
 * @return {FormApp.PageBreakItem} the page-break item
 */
FormApp.Item.prototype.asPageBreakItem = function(){};

/**
 * Returns the item as a paragraph-text item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>PARAGRAPH_TEXT</code>.
 *
 * @return {FormApp.ParagraphTextItem} the paragraph-text item
 */
FormApp.Item.prototype.asParagraphTextItem = function(){};

/**
 * Returns the item as a scale item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>SCALE</code>.
 *
 * @return {FormApp.ScaleItem} the scale item
 */
FormApp.Item.prototype.asScaleItem = function(){};

/**
 * Returns the item as a section-header item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>SECTION_HEADER</code>.
 *
 * @return {FormApp.SectionHeaderItem} the section-header item
 */
FormApp.Item.prototype.asSectionHeaderItem = function(){};

/**
 * Returns the item as a text item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>TEXT</code>.
 *
 * @return {FormApp.TextItem} the text item
 */
FormApp.Item.prototype.asTextItem = function(){};

/**
 * Returns the item as a time item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already
 <code>TIME</code>.
 *
 * @return {FormApp.TimeItem} the time item
 */
FormApp.Item.prototype.asTimeItem = function(){};

/**
 * Returns the item as a video item. Throws a scripting exception if the
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>
 was not already <code>VIDEO</code>.
 *
 * @return {FormApp.VideoItem} the video item
 */
FormApp.Item.prototype.asVideoItem = function(){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.Item} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
 */
FormApp.Item.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.Item.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.Item.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.Item.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.Item.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.Item.prototype.getType = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.Item} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
 */
FormApp.Item.prototype.setHelpText = function(text){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.Item} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
 */
FormApp.Item.prototype.setTitle = function(title){};

/** @constructor */
FormApp.ItemResponse = function(){};

/**
 * Gets the question item that this response answers.
 *
 * @return {FormApp.Item} the question item that this response answers
 */
FormApp.ItemResponse.prototype.getItem = function(){};

/**
 * Gets the answer that the respondent submitted. For most types of question items, this returns a
 <code>String</code>. 

 <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> questions, this returns a <code>String[]</code> array containing the
 responder's choices. The order of the strings in the array may vary.</p>

 <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code> questions, this returns a <code>String[]</code> array in which the answer at
 index <code>n</code> corresponds to the question at row <code>n + 1</code> in the grid. If a respondent
 did not answer a question in the grid, that answer is returned as <code>&#39;&#39;</code>.</p>
 *
 * @return {Object} a <code>String</code> or <code>String[]</code> of answers to the question item
 */
FormApp.ItemResponse.prototype.getResponse = function(){};

/** @constructor */
FormApp.ListItem = function(){};

/**
 * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
 combined in the same item with choices that do not use page navigation.
 
 <p>The page navigation occurs after the respondent completes a page that contains the option,
 and only if the respondent chose that option. If the respondent chose multiple options with
 page-navigation instructions on the same page, only the last navigation option has any effect.
 Page navigation also has no effect on the last page of a form.</p>
 *
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {FormApp.PageNavigationType} navigationType - the choice's navigation type
 *
 * @return {FormApp.Choice} the new choice
 */
FormApp.ListItem.prototype.createChoice = function(value, navigationType){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this list item. Throws an exception if the
 <code>response</code> argument does not match a valid choice for this item.
 *
 * @param {String} response - a valid answer for this list item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.ListItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.ListItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */
FormApp.ListItem.prototype.duplicate = function(){};

/**
 * Gets all choices for an item.
 *
 * @return {FormApp.Choice[]} an array of choices
 */
FormApp.ListItem.prototype.getChoices = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.ListItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.ListItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.ListItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.ListItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.ListItem.prototype.getType = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.ListItem.prototype.isRequired = function(){};

/**
 * Sets the choices for an item from an array of strings. Throws an exception if the given array
 is empty.

 <pre class="prettyprint">
 // Open a form by ID and add a new list item.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 var item = form.addListItem();
 item.setTitle('Do you prefer cats or dogs?');
 item.setChoiceValues(['Dogs', 'Cats']);
 </pre>
 *
 * @param {String[]} values - the array of choice values, which respondents see as labels when viewing the form
 *
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */
FormApp.ListItem.prototype.setChoiceValues = function(values){};

/**
 * Sets an array of choices for an item. Throws an exception if the given array is empty or
 contains a <code>null</code> element.

 <pre class="prettyprint">
 // Open a form by ID and add a new list item.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 var item = form.addListItem();
 item.setTitle('Do you prefer cats or dogs?')
 item.setChoices([
     item.createChoice('Cats'),
     item.createChoice('Dogs')
 ]);
 </pre>
 *
 * @param {FormApp.Choice[]} choices - an array of choices
 *
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */
FormApp.ListItem.prototype.setChoices = function(choices){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */
FormApp.ListItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.ListItem} the current item (for chaining)
 */
FormApp.ListItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */
FormApp.ListItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.MultipleChoiceItem = function(){};

/**
 * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
 combined in the same item with choices that do not use page navigation.
 
 <p>The page navigation occurs after the respondent completes a page that contains the option,
 and only if the respondent chose that option. If the respondent chose multiple options with
 page-navigation instructions on the same page, only the last navigation option has any effect.
 Page navigation also has no effect on the last page of a form.</p>
 *
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {FormApp.PageNavigationType} navigationType - the choice's navigation type
 *
 * @return {FormApp.Choice} the new choice
 */
FormApp.MultipleChoiceItem.prototype.createChoice = function(value, navigationType){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this multiple-choice item. Throws an exception if the
 <code>response</code> argument does not match a valid choice for this item, unless
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#showOtherOption(Boolean)'>showOtherOption(enabled)</a></code> is set to <code>true</code>.
 *
 * @param {String} response - a valid answer for this multiple-choice item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.MultipleChoiceItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.MultipleChoiceItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */
FormApp.MultipleChoiceItem.prototype.duplicate = function(){};

/**
 * Gets all choices for an item.
 *
 * @return {FormApp.Choice[]} an array of choices
 */
FormApp.MultipleChoiceItem.prototype.getChoices = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.MultipleChoiceItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.MultipleChoiceItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.MultipleChoiceItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.MultipleChoiceItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.MultipleChoiceItem.prototype.getType = function(){};

/**
 * Determines whether the item has an "other" option.
 *
 * @return {Boolean} <code>true</code> if the item has an "other" option; <code>false</code> if not
 */
FormApp.MultipleChoiceItem.prototype.hasOtherOption = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.MultipleChoiceItem.prototype.isRequired = function(){};

/**
 * Sets the choices for an item from an array of strings. Throws an exception if the given array
 is empty.

 <pre class="prettyprint">
 // Open a form by ID and add a new list item.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 var item = form.addListItem();
 item.setTitle('Do you prefer cats or dogs?');
 item.setChoiceValues(['Dogs', 'Cats']);
 </pre>
 *
 * @param {String[]} values - the array of choice values, which respondents see as labels when viewing the form
 *
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */
FormApp.MultipleChoiceItem.prototype.setChoiceValues = function(values){};

/**
 * Sets an array of choices for an item. Throws an exception if the given array is empty or
 contains a <code>null</code> element.

 <pre class="prettyprint">
 // Open a form by ID and add a new list item.
 var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 var item = form.addListItem();
 item.setTitle('Do you prefer cats or dogs?')
 item.setChoices([
     item.createChoice('Cats'),
     item.createChoice('Dogs')
 ]);
 </pre>
 *
 * @param {FormApp.Choice[]} choices - an array of choices
 *
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */
FormApp.MultipleChoiceItem.prototype.setChoices = function(choices){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */
FormApp.MultipleChoiceItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.MultipleChoiceItem} the current item (for chaining)
 */
FormApp.MultipleChoiceItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */
FormApp.MultipleChoiceItem.prototype.setTitle = function(title){};

/**
 * Sets whether the item has an "other" option. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> is <code>false</code>.
 *
 * @param {Boolean} enabled - <code>true</code> if the item has an "other" option; <code>false</code> if not
 *
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */
FormApp.MultipleChoiceItem.prototype.showOtherOption = function(enabled){};

/** @constructor */
FormApp.PageBreakItem = function(){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.PageBreakItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */
FormApp.PageBreakItem.prototype.duplicate = function(){};

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code> that the form will jump to after completing the page before this
 page break (that is, upon reaching this page break by normal linear progression through the
 form).
 *
 * @return {FormApp.PageBreakItem} the page break to jump to after completing the page before this page break, or
     <code>null</code> if none is set
 */
FormApp.PageBreakItem.prototype.getGoToPage = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.PageBreakItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.PageBreakItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.PageBreakItem.prototype.getIndex = function(){};

/**
 * Gets the type of page navigation that occurs after completing the page before this page break
 (that is, upon reaching this page break by normal linear progression through the form).
 *
 * @return {FormApp.PageNavigationType} the navigation action to take after completing the page before this page break
 */
FormApp.PageBreakItem.prototype.getPageNavigationType = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.PageBreakItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.PageBreakItem.prototype.getType = function(){};

/**
 * Sets the type of page navigation that occurs after completing the page before this page break
 (that is, upon reaching this page break by normal linear progression through the form). If the
 page contained a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code> with a navigation option, that
 navigation overrules this navigation.
 *
 * @param {FormApp.PageNavigationType} navigationType - the navigation action to take after completing the page before this page
     break
 *
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */
FormApp.PageBreakItem.prototype.setGoToPage = function(navigationType){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */
FormApp.PageBreakItem.prototype.setHelpText = function(text){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */
FormApp.PageBreakItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.ParagraphTextItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this paragraph text item.
 *
 * @param {String} response - an answer to the question posed by the item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.ParagraphTextItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.ParagraphTextItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */
FormApp.ParagraphTextItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.ParagraphTextItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.ParagraphTextItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.ParagraphTextItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.ParagraphTextItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.ParagraphTextItem.prototype.getType = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.ParagraphTextItem.prototype.isRequired = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */
FormApp.ParagraphTextItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.ParagraphTextItem} the current item (for chaining)
 */
FormApp.ParagraphTextItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */
FormApp.ParagraphTextItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.ScaleItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this scale item. Throws an exception if the
 <code>response</code> argument is outside the bounds set for the item.
 *
 * @param {number} response - a value answer for this scale item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.ScaleItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.ScaleItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */
FormApp.ScaleItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.ScaleItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.ScaleItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.ScaleItem.prototype.getIndex = function(){};

/**
 * Gets the label for the scale's lower bound, if any.
 *
 * @return {String} the label for the scale's lower bound
 */
FormApp.ScaleItem.prototype.getLeftLabel = function(){};

/**
 * Gets the scale's lower bound.
 *
 * @return {number} the scale's lower bound
 */
FormApp.ScaleItem.prototype.getLowerBound = function(){};

/**
 * Gets the label for the scale's upper bound, if any.
 *
 * @return {String} the label for the scale's upper bound
 */
FormApp.ScaleItem.prototype.getRightLabel = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.ScaleItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.ScaleItem.prototype.getType = function(){};

/**
 * Gets the scale's upper bound.
 *
 * @return {number} the scale's upper bound
 */
FormApp.ScaleItem.prototype.getUpperBound = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.ScaleItem.prototype.isRequired = function(){};

/**
 * Sets the scale's lower and upper bounds. The lower bound must be <code>0</code> or <code>1</code>. The
 upper bound must be between <code>3</code> and <code>10</code>, inclusive. A new scale defaults to a
 lower bound of <code>1</code> and an upper bound of <code>5</code>.
 
 <p>Throws a scripting exception if the given values are outside the permitted limits. Decimals
 are truncated to the preceding integer.</p>
 *
 * @param {number} lower - the new lower bound
 * @param {number} upper - the new upper bound
 *
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */
FormApp.ScaleItem.prototype.setBounds = function(lower, upper){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */
FormApp.ScaleItem.prototype.setHelpText = function(text){};

/**
 * Sets labels for the scale's lower and upper bounds.
 *
 * @param {String} lower - the new label for the lower bound
 * @param {String} upper - the new label for the upper bound
 *
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */
FormApp.ScaleItem.prototype.setLabels = function(lower, upper){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.ScaleItem} the current item (for chaining)
 */
FormApp.ScaleItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */
FormApp.ScaleItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.SectionHeaderItem = function(){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.SectionHeaderItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
 */
FormApp.SectionHeaderItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.SectionHeaderItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.SectionHeaderItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.SectionHeaderItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.SectionHeaderItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.SectionHeaderItem.prototype.getType = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.SectionHeaderItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
 */
FormApp.SectionHeaderItem.prototype.setHelpText = function(text){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.SectionHeaderItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
 */
FormApp.SectionHeaderItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.TextItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this text item.
 *
 * @param {String} response - an answer to the question posed by the item
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.TextItem.prototype.createResponse = function(response){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.TextItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */
FormApp.TextItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.TextItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.TextItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.TextItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.TextItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.TextItem.prototype.getType = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.TextItem.prototype.isRequired = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */
FormApp.TextItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.TextItem} the current item (for chaining)
 */
FormApp.TextItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */
FormApp.TextItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.TimeItem = function(){};

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this time item. The arguments <code>hour</code> and
 <code>minute</code> are best represented as integers from <code>0</code> to <code>23</code> and from <code>0</code>
 to <code>59</code>, respectively. If they exceed those bounds, they behave as a clock would: for
 example, <code>10, 90</code> is interpreted as 11:30, and <code>-1, 60</code> is intepreted as 00:00.
 *
 * @param {number} hour - the hour, represented as an integer from <code>0</code> to <code>23</code>
 * @param {number} minute - the minute of the hour, represented as an integer from <code>0</code> to <code>59</code>
 *
 * @return {FormApp.ItemResponse} the item response
 */
FormApp.TimeItem.prototype.createResponse = function(hour, minute){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.TimeItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */
FormApp.TimeItem.prototype.duplicate = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.TimeItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.TimeItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.TimeItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.TimeItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.TimeItem.prototype.getType = function(){};

/**
 * Determines whether the respondent must answer the question.
 *
 * @return {Boolean} whether the respondent must answer the question
 */
FormApp.TimeItem.prototype.isRequired = function(){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.TimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */
FormApp.TimeItem.prototype.setHelpText = function(text){};

/**
 * Sets whether the respondent must answer the question.
 *
 * @param {Boolean} enabled - whether the respondent must answer the question
 *
 * @return {FormApp.TimeItem} the current item (for chaining)
 */
FormApp.TimeItem.prototype.setRequired = function(enabled){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.TimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */
FormApp.TimeItem.prototype.setTitle = function(title){};

/** @constructor */
FormApp.VideoItem = function(){};

/**
 * Creates a copy of this item and appends it to the end of the form.
 *
 * @return {FormApp.VideoItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */
FormApp.VideoItem.prototype.duplicate = function(){};

/**
 * Gets the video's horizontal alignment.
 *
 * @return {FormApp.Alignment} the horizontal alignment
 */
FormApp.VideoItem.prototype.getAlignment = function(){};

/**
 * Gets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @return {String} the item's help text or description text
 */
FormApp.VideoItem.prototype.getHelpText = function(){};

/**
 * Gets the item's unique identifier.
 *
 * @return {number} the item's ID
 */
FormApp.VideoItem.prototype.getId = function(){};

/**
 * Gets the index of the item among all the items in the form.
 *
 * @return {number} the index of the item
 */
FormApp.VideoItem.prototype.getIndex = function(){};

/**
 * Gets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @return {String} the item's title or header text
 */
FormApp.VideoItem.prototype.getTitle = function(){};

/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 *
 * @return {FormApp.ItemType} the item's type
 */
FormApp.VideoItem.prototype.getType = function(){};

/**
 * Gets the video's width in pixels.
 *
 * @return {number} the width in pixels
 */
FormApp.VideoItem.prototype.getWidth = function(){};

/**
 * Sets the video's horizontal alignment.
 *
 * @param {FormApp.Alignment} alignment - the horizontal alignment
 *
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */
FormApp.VideoItem.prototype.setAlignment = function(alignment){};

/**
 * Sets the item's help text (sometimes called description text for layout
 items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>,
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 *
 * @param {String} text - the new help text
 *
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */
FormApp.VideoItem.prototype.setHelpText = function(text){};

/**
 * Sets the item's title (sometimes called header text, in the case of a
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 *
 * @param {String} title - the new title or header text
 *
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */
FormApp.VideoItem.prototype.setTitle = function(title){};

/**
 * Sets the video itself from a given YouTube URL or YouTube video ID.
 *
 * @param {String} youtubeUrl - the YouTube URL or ID
 *
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */
FormApp.VideoItem.prototype.setVideoUrl = function(youtubeUrl){};

/**
 * Sets the video's width in pixels. Only the video's width can be set. Height is set
 automatically to maintain the video's proportions.
 *
 * @param {number} width - the width in pixels
 *
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */
FormApp.VideoItem.prototype.setWidth = function(width){};

