/**********************************************
 * @namespace FormApp
 ***********************************************/

/**
 * @class FormApp
 */

/**
 * An enumeration of types of image alignment.
 * 
 * @typedef {FormApp.Alignment} FormApp.Alignment
 */
/**
 * An enumeration of types of destinations that can store form responses.
 * 
 * @typedef {FormApp.DestinationType} FormApp.DestinationType
 */
/**
 * An enumeration of types of form <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback.html'>Feedbacks</a></code>.
 * 
 * @typedef {FormApp.FeedbackType} FormApp.FeedbackType
 */
/**
 * An enumeration of types of form <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Items</a></code>.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType
 */
/**
 * An enumeration of possible behaviors for navigating pages.
 * 
 * @typedef {FormApp.PageNavigationType} FormApp.PageNavigationType
 */
/**
 * Creates and returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. Throws an exception if the given title is <code>null</code>
 * or empty.
 * 
 * <pre class="prettyprint">
 * // Create and open a form.
 * var form = FormApp.create('Form Name');
 * </pre>
 * 
 * @function FormApp.create
 * 
 * @param {String} title - the name of the new form
 * 
 * @return {FormApp.Form} the new form
 */


/**
 * Returns an instance of a CheckboxGridValidationBuilder which can be used to set validation on a
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>.
 * 
 * @function FormApp.createCheckboxGridValidation
 * 
 * @return {FormApp.CheckboxGridValidationBuilder}
 */


/**
 * Returns an instance of a CheckboxValidationBuilder which can be used to set validation on a
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>.
 * 
 * @function FormApp.createCheckboxValidation
 * 
 * @return {FormApp.CheckboxValidationBuilder}
 */


/**
 * Returns an instance of a QuizFeedbackBuilder which can be used to set feedback on a gradeable
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>.
 * 
 * @function FormApp.createFeedback
 * 
 * @return {FormApp.QuizFeedbackBuilder}
 */


/**
 * Returns an instance of a GridValidationBuilder which can be used to set validation on a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>.
 * 
 * @function FormApp.createGridValidation
 * 
 * @return {FormApp.GridValidationBuilder}
 */


/**
 * Returns an instance of a ParagraphTextValidationBuilder which can be used to set validation on
 * a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>.
 * 
 * @function FormApp.createParagraphTextValidation
 * 
 * @return {FormApp.ParagraphTextValidationBuilder}
 */


/**
 * Returns an instance of a TextValidationBuilder which can be used to set validation on a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>.
 * 
 * @function FormApp.createTextValidation
 * 
 * @return {FormApp.TextValidationBuilder}
 */


/**
 * Returns the form to which the script is <a
 * href="/apps-script/scripts_containers">container-bound</a>. To interact with forms to which the
 * script is not container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-app.html#openById(String)'>openById(id)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-app.html#openByUrl(String)'>openByUrl(url)</a></code>
 * instead.
 * 
 * <pre class="prettyprint">
 * // Get the form to which this script is bound.
 * var form = FormApp.getActiveForm();
 * </pre>
 * 
 * @function FormApp.getActiveForm
 * 
 * @return {FormApp.Form} the form to which the script is bound, or <code>null</code> if the script is not bound to a
 *     form
 */


/**
 * Returns an instance of the form editor's user-interface environment that allows the script to
 * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
 * current instance of an open form editor (not the view that a respondent sees), and only if the
 * script is <a href="/apps-script/scripts_containers">bound</a> to the form. For more
 * information, see the guides to <a href="/apps-script/guides/menus">menus</a> and <a
 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
 * 
 * <pre class="prettyprint">
 * // Add a custom menu to the active form, including a separator and a sub-menu.
 * function onOpen(e) {
 *   FormApp.getUi()
 *       .createMenu('My Menu')
 *       .addItem('My menu item', 'myFunction')
 *       .addSeparator()
 *       .addSubMenu(FormApp.getUi().createMenu('My sub-menu')
 *           .addItem('One sub-menu item', 'mySecondFunction')
 *           .addItem('Another sub-menu item', 'myThirdFunction'))
 *       .addToUi();
 * }
 * </pre>
 * 
 * @function FormApp.getUi
 * 
 * @return {Ui} an instance of this form's user-interface environment
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> with the specified ID. Throws an exception if the ID is invalid or the
 * user does not have permission to open the form.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * </pre>
 * 
 * @function FormApp.openById
 * 
 * @param {String} id - the ID of the form to open
 * 
 * @return {FormApp.Form} the form with the given ID
 */


/**
 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> with the specified URL. Throws an exception if the URL is invalid or
 * the user does not have permission to open the form.
 * 
 * <pre class="prettyprint">
 * // Open a form by URL.
 * var form = FormApp.openByUrl(
 *     'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit'
 *     );
 * </pre>
 * 
 * @function FormApp.openByUrl
 * 
 * @param {String} url - the URL of the form to open
 * 
 * @return {FormApp.Form} the form with the given URL
 */



/**
 * @class FormApp.Alignment
 */

/**
 * Align the image to the center of the form.
 * 
 * @typedef {FormApp.Alignment} FormApp.Alignment.CENTER
 */
/**
 * Align the image to the left side of the form.
 * 
 * @typedef {FormApp.Alignment} FormApp.Alignment.LEFT
 */
/**
 * Align the image to the right side of the form.
 * 
 * @typedef {FormApp.Alignment} FormApp.Alignment.RIGHT
 */

/**
 * @class FormApp.CheckboxGridItem
 */

/**
 * Removes any data validation for this grid item.
 * 
 * @function FormApp.CheckboxGridItem#clearValidation
 * 
 * @return {FormApp.CheckboxGridItem} this item, for chaining
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this checkbox grid item. The argument <code>responses</code>
 * must be a <code>String[][]</code> array of arrays containing as many values as the number of inputs
 * in the checkbox grid. A <code>null</code> element for a non-required checkbox grid question
 * indicates no response to that row. Throws an exception if any of the values does not match a
 * valid choice.
 * 
 * @function FormApp.CheckboxGridItem#createResponse
 * 
 * @param {String[][]} responses - an array of arrays of valid answers for this checkbox grid item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.CheckboxGridItem#duplicate
 * 
 * @return {FormApp.CheckboxGridItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
 */


/**
 * Gets the values for every column in the grid.
 * 
 * @function FormApp.CheckboxGridItem#getColumns
 * 
 * @return {String[]} an array of column values, which respondents see as labels when viewing the form
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.CheckboxGridItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.CheckboxGridItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.CheckboxGridItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the values for every row in the grid.
 * 
 * @function FormApp.CheckboxGridItem#getRows
 * 
 * @return {String[]} an array of row values, which respondents see as labels when viewing the form
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.CheckboxGridItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.CheckboxGridItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.CheckboxGridItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the columns of the grid based on an array of values. Throws an exception if the given
 * array is empty.
 * 
 * @function FormApp.CheckboxGridItem#setColumns
 * 
 * @param {String[]} columns - an array of column values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.CheckboxGridItem} this item, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.CheckboxGridItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.CheckboxGridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.CheckboxGridItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.CheckboxGridItem} the current item (for chaining)
 */


/**
 * Sets the rows of the grid based on an array of values. Throws an exception if the given array
 * is empty.
 * 
 * @function FormApp.CheckboxGridItem#setRows
 * 
 * @param {String[]} rows - an array of row values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.CheckboxGridItem} this item, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.CheckboxGridItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.CheckboxGridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
 */


/**
 * Sets the data validation for this checkbox grid item. Passing in null or a validation without
 * any require functions called will remove any prior validation.
 * 
 * @function FormApp.CheckboxGridItem#setValidation
 * 
 * @param {FormApp.CheckboxGridValidation} validation - a CheckboxGridValidation to apply to this item.
 * 
 * @return {FormApp.CheckboxGridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
 */



/**
 * @class FormApp.CheckboxGridValidation
 */


/**
 * @class FormApp.CheckboxGridValidationBuilder
 */

/**
 * Requires limit of one response per column for a grid item.
 * 
 * @function FormApp.CheckboxGridValidationBuilder#requireLimitOneResponsePerColumn
 * 
 * @return {FormApp.CheckboxGridValidationBuilder} this validation builder, for chaining
 */



/**
 * @class FormApp.CheckboxItem
 */

/**
 * Removes any data validation for this checkbox item.
 * 
 * @function FormApp.CheckboxItem#clearValidation
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Creates a new choice.
 * 
 * @function FormApp.CheckboxItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice.
 * 
 * @function FormApp.CheckboxItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {Boolean} isCorrect - whether the choice is a correct answer
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this checkbox item. The argument <code>responses</code> is a
 * <code>String[]</code> array containing values that need to be checked. Throws an exception if any
 * value does not match a valid choice for this item, unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html#showOtherOption(Boolean)'>showOtherOption(enabled)</a></code> is set to <code>true</code>.
 * 
 * @function FormApp.CheckboxItem#createResponse
 * 
 * @param {String[]} responses - an array of valid answers for this multiple-choice item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.CheckboxItem#duplicate
 * 
 * @return {FormApp.CheckboxItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Gets all choices for an item.
 * 
 * @function FormApp.CheckboxItem#getChoices
 * 
 * @return {FormApp.Choice[]} an array of choices
 */


/**
 * Returns the feedback that is shown to respondents when they respond correctly to a question.
 * 
 * @function FormApp.CheckboxItem#getFeedbackForCorrect
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
 * 
 * @function FormApp.CheckboxItem#getFeedbackForIncorrect
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.CheckboxItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.CheckboxItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.CheckboxItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.CheckboxItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.CheckboxItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.CheckboxItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the item has an "other" option.
 * 
 * @function FormApp.CheckboxItem#hasOtherOption
 * 
 * @return {Boolean} <code>true</code> if the item has an "other" option; <code>false</code> if not
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.CheckboxItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the choices for an item from an array of strings. Throws an exception if the given array
 * is empty.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?');
 * item.setChoiceValues(['Dogs', 'Cats']);
 * </pre>
 * 
 * @function FormApp.CheckboxItem#setChoiceValues
 * 
 * @param {String[]} values - the array of choice values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets an array of choices for an item. Throws an exception if the given array is empty or
 * contains a <code>null</code> element.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?')
 * item.setChoices([
 *     item.createChoice('Cats'),
 *     item.createChoice('Dogs')
 * ]);
 * </pre>
 * 
 * @function FormApp.CheckboxItem#setChoices
 * 
 * @param {FormApp.Choice[]} choices - an array of choices
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond correctly to a question.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?');
 * // Set "Dogs" as the correct answer to this question.
 * item.setChoices([
 *   item.createChoice('Dogs', true),
 *   item.createChoice('Cats', false)]);
 * // Add feedback which will be shown for correct responses; ie "Dogs".
 * item.setFeedbackForCorrect(
 *     FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
 * </pre>
 * 
 * @function FormApp.CheckboxItem#setFeedbackForCorrect
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback. A null value will clear the feedback.
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
 * 
 * @function FormApp.CheckboxItem#setFeedbackForIncorrect
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.CheckboxItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.CheckboxItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.CheckboxItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.CheckboxItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.CheckboxItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets the data validation for this checkbox item. Passing in null or a validation without any
 * require functions called will remove any prior validation.
 * 
 * @function FormApp.CheckboxItem#setValidation
 * 
 * @param {FormApp.CheckboxValidation} validation - a CheckboxValidation to apply to this item.
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */


/**
 * Sets whether the item has an "other" option. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> or
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> is <code>false</code>.
 * 
 * @function FormApp.CheckboxItem#showOtherOption
 * 
 * @param {Boolean} enabled - <code>true</code> if the item has an "other" option; <code>false</code> if not
 * 
 * @return {FormApp.CheckboxItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
 */



/**
 * @class FormApp.CheckboxValidation
 */


/**
 * @class FormApp.CheckboxValidationBuilder
 */

/**
 * Require at least this many choices to be selected.
 * 
 * @function FormApp.CheckboxValidationBuilder#requireSelectAtLeast
 * 
 * @param {IntegerNum} number
 * 
 * @return {FormApp.CheckboxValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html'>CheckboxValidationBuilder</a></code>, for chaining
 */


/**
 * Require at most this many choices to be selected.
 * 
 * @function FormApp.CheckboxValidationBuilder#requireSelectAtMost
 * 
 * @param {IntegerNum} number
 * 
 * @return {FormApp.CheckboxValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html'>CheckboxValidationBuilder</a></code>, for chaining
 */


/**
 * Require exactly this many choices to be selected.
 * 
 * @function FormApp.CheckboxValidationBuilder#requireSelectExactly
 * 
 * @param {IntegerNum} number
 * 
 * @return {FormApp.CheckboxValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html'>CheckboxValidationBuilder</a></code>, for chaining
 */



/**
 * @class FormApp.Choice
 */

/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code> set as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>GO_TO_PAGE</a></code> destination
 * if the responder selects this choice and completes the current page. This method applies only
 * to choices associated with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItems</a></code>; for other choices,
 * it returns <code>null</code>.
 * 
 * @function FormApp.Choice#getGotoPage
 * 
 * @return {FormApp.PageBreakItem} the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>GO_TO_PAGE</a></code> destination for this choice, or <code>null</code> if there is none
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>PageNavigationType</a></code> that occurs if the responder selects this choice and
 * completes the current page. This method applies only to choices associated with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItems</a></code>; for other choices, it returns <code>null</code>.
 * 
 * @function FormApp.Choice#getPageNavigationType
 * 
 * @return {FormApp.PageNavigationType} the navigation action for this choice, or <code>null</code> if there is none
 */


/**
 * Gets the choice's value, which respondents see as a label when viewing the form.
 * 
 * @function FormApp.Choice#getValue
 * 
 * @return {String} the choice's value
 */


/**
 * Gets whether the choice is a correct answer for the question. This method only applies to
 * questions that are part of a quiz; for non-quiz forms, it returns false.
 * 
 * @function FormApp.Choice#isCorrectAnswer
 * 
 * @return {Boolean} Whether the choice is a correct answer.
 */



/**
 * @class FormApp.DateItem
 */

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date item. The time fields of the <code>Date</code>
 * object are ignored; by default, only the year, month, and day fields are used. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html#setIncludesYear(Boolean)'>setIncludesYear(enabled)</a></code> is set to <code>false</code>, the year is
 * ignored as well.
 * 
 * @function FormApp.DateItem#createResponse
 * 
 * @param {Date} response - a <code>Date</code> object that represents a month, day, and possibly year
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.DateItem#duplicate
 * 
 * @return {FormApp.DateItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.DateItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.DateItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.DateItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.DateItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.DateItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.DateItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.DateItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the date item includes a year option.
 * 
 * @function FormApp.DateItem#includesYear
 * 
 * @return {Boolean} <code>true</code> if the date includes a year setting; <code>false</code> if not
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.DateItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.DateItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.DateItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */


/**
 * Sets whether the date item includes a year setting. The default for new date items is <code>true</code>.
 * 
 * @function FormApp.DateItem#setIncludesYear
 * 
 * @param {Boolean} enableYear - <code>true</code> if the date includes a year setting; <code>false</code> if not
 * 
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.DateItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.DateItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.DateItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.DateItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.DateItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
 */



/**
 * @class FormApp.DateTimeItem
 */

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date-time item. The seconds field of the <code>Date</code> object is ignored; by default, the year, month, day, hour, and minute fields are used. If
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html#setIncludesYear(Boolean)'>setIncludesYear(enabled)</a></code> is set to <code>false</code>, the year is
 * ignored as well.
 * 
 * @function FormApp.DateTimeItem#createResponse
 * 
 * @param {Date} response - a <code>Date</code> object that represents a month, day, hour, minute, and possibly
 *     year
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.DateTimeItem#duplicate
 * 
 * @return {FormApp.DateTimeItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.DateTimeItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.DateTimeItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.DateTimeItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.DateTimeItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.DateTimeItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.DateTimeItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.DateTimeItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the date item includes a year option.
 * 
 * @function FormApp.DateTimeItem#includesYear
 * 
 * @return {Boolean} <code>true</code> if the date includes a year setting; <code>false</code> if not
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.DateTimeItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.DateTimeItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.DateTimeItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */


/**
 * Sets whether the date item includes a year setting. The default for new date items is <code>true</code>.
 * 
 * @function FormApp.DateTimeItem#setIncludesYear
 * 
 * @param {Boolean} enableYear - <code>true</code> if the date includes a year setting; <code>false</code> if not
 * 
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.DateTimeItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.DateTimeItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.DateTimeItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.DateTimeItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.DateTimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
 */



/**
 * @class FormApp.DestinationType
 */

/**
 * A Google Sheets spreadsheet as a destination for form responses.
 * 
 * @typedef {FormApp.DestinationType} FormApp.DestinationType.SPREADSHEET
 */

/**
 * @class FormApp.DurationItem
 */

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date item. The arguments <code>hours</code>, <code>minutes</code>, and <code>seconds</code> are best represented as integers from <code>0</code> to <code>72</code> for
 * <code>hours</code> and <code>0</code> to <code>59</code> for <code>minutes</code> and <code>seconds</code>. Values that
 * exceed those bounds are clamped: for example, <code>24, 60, 90</code> is interpreted as 24:59:59.
 * 
 * @function FormApp.DurationItem#createResponse
 * 
 * @param {IntegerNum} hours - the hours, represented as an integer from <code>0</code> to <code>72</code>
 * @param {IntegerNum} minutes - the minutes, represented as an integer from <code>0</code> to <code>59</code>
 * @param {IntegerNum} seconds - the seconds, represented as an integer from <code>0</code> to <code>59</code>
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.DurationItem#duplicate
 * 
 * @return {FormApp.DurationItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.DurationItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.DurationItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.DurationItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.DurationItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.DurationItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.DurationItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.DurationItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.DurationItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.DurationItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.DurationItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.DurationItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.DurationItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.DurationItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.DurationItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.DurationItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.DurationItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.DurationItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.DurationItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
 */



/**
 * @class FormApp.FeedbackType
 */

/**
 * Feedback that is automatically displayed to respondents for a question answered correctly.
 * Correct feedback can only be attached to a question type that supports autograding (e.g. radio,
 * checkbox, select)
 * 
 * @typedef {FormApp.FeedbackType} FormApp.FeedbackType.CORRECT
 */
/**
 * Feedback that is automatically displayed to respondents when they submit their response.
 * General feedback can only be attached to question types that do not support auto-grading, but
 * are gradeable (ie everything but grid)
 * 
 * @typedef {FormApp.FeedbackType} FormApp.FeedbackType.GENERAL
 */
/**
 * Feedback that is automatically displayed to respondents for a question answered incorrectly.
 * Incorrect feedback can only be attached to a question type that supports autograding (e.g.
 * radio, checkbox, select)
 * 
 * @typedef {FormApp.FeedbackType} FormApp.FeedbackType.INCORRECT
 */

/**
 * @class FormApp.Form
 */

/**
 * Appends a new question item, presented as a grid of columns and rows, that allows the
 * respondent to select multiple choices per row from a sequence of checkboxes.
 * 
 * @function FormApp.Form#addCheckboxGridItem
 * 
 * @return {FormApp.CheckboxGridItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to select one or more checkboxes, as
 * well as an optional "other" field.
 * 
 * @function FormApp.Form#addCheckboxItem
 * 
 * @return {FormApp.CheckboxItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to indicate a date.
 * 
 * @function FormApp.Form#addDateItem
 * 
 * @return {FormApp.DateItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to indicate a date and time.
 * 
 * @function FormApp.Form#addDateTimeItem
 * 
 * @return {FormApp.DateTimeItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to indicate a length of time.
 * 
 * @function FormApp.Form#addDurationItem
 * 
 * @return {FormApp.DurationItem} the newly created item
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function FormApp.Form#addEditor
 * 
 * @param {String} emailAddress - The email address of the user to add.
 * 
 * @return {FormApp.Form} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
 */


/**
 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user was already
 * on the list of viewers, this method promotes the user out of the list of viewers.
 * 
 * @function FormApp.Form#addEditor
 * 
 * @param {User} user - A representation of the user to add.
 * 
 * @return {FormApp.Form} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
 */


/**
 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If any of the
 * users were already on the list of viewers, this method promotes them out of the list of
 * viewers.
 * 
 * @function FormApp.Form#addEditors
 * 
 * @param {String[]} emailAddresses - An array of email addresses of the users to add.
 * 
 * @return {FormApp.Form} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
 */


/**
 * Appends a new question item, presented as a grid of columns and rows, that allows the
 * respondent to select one choice per row from a sequence of radio buttons.
 * 
 * @function FormApp.Form#addGridItem
 * 
 * @return {FormApp.GridItem} the newly created item
 */


/**
 * Appends a new layout item that displays an image.
 * 
 * @function FormApp.Form#addImageItem
 * 
 * @return {FormApp.ImageItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to select one choice from a drop-down
 * list.
 * 
 * @function FormApp.Form#addListItem
 * 
 * @return {FormApp.ListItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to select one choice from a list of
 * radio buttons or an optional "other" field.
 * 
 * @function FormApp.Form#addMultipleChoiceItem
 * 
 * @return {FormApp.MultipleChoiceItem} the newly created item
 */


/**
 * Appends a new layout item that marks the start of a page.
 * 
 * @function FormApp.Form#addPageBreakItem
 * 
 * @return {FormApp.PageBreakItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to enter a block of text.
 * 
 * @function FormApp.Form#addParagraphTextItem
 * 
 * @return {FormApp.ParagraphTextItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to choose one option from a numbered
 * sequence of radio buttons.
 * 
 * @function FormApp.Form#addScaleItem
 * 
 * @return {FormApp.ScaleItem} the newly created item
 */


/**
 * Appends a new layout item that visually indicates the start of a section.
 * 
 * @function FormApp.Form#addSectionHeaderItem
 * 
 * @return {FormApp.SectionHeaderItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to enter a single line of text.
 * 
 * @function FormApp.Form#addTextItem
 * 
 * @return {FormApp.TextItem} the newly created item
 */


/**
 * Appends a new question item that allows the respondent to indicate a time of day.
 * 
 * @function FormApp.Form#addTimeItem
 * 
 * @return {FormApp.TimeItem} the newly created item
 */


/**
 * Appends a new layout item that displays a video.
 * 
 * @function FormApp.Form#addVideoItem
 * 
 * @return {FormApp.VideoItem} the newly created item
 */


/**
 * Determines whether the form displays a link to edit a response after submitting it.
 * 
 * <p>Regardless of this setting, the method <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()'>FormResponse.getEditResponseUrl()</a></code> allows a
 * script author who has edit access to the form to generate a URL that can be used to edit a
 * response.
 * 
 * @function FormApp.Form#canEditResponse
 * 
 * @return {Boolean} <code>true</code> if the form displays an "Edit your response" link; <code>false</code> if not
 */


/**
 * Determines whether the form collects respondents' email addresses.
 * 
 * @function FormApp.Form#collectsEmail
 * 
 * @return {Boolean} <code>true</code> if the form collects email addresses; <code>false</code> if not
 */


/**
 * Creates a new response to the form. To answer a question item, create an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code>
 * from the item, then attach it to this form response by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#withItemResponse(ItemResponse)'>FormResponse.withItemResponse(response)</a></code>. To save the assembled response, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#submit()'>FormResponse.submit()</a></code>.
 * 
 * @function FormApp.Form#createResponse
 * 
 * @return {FormApp.FormResponse} the newly created form response
 */


/**
 * Deletes all submitted responses from the form's response store. This method does not delete
 * copies of responses stored in an external response destination (like a spreadsheet), but does
 * clear the form's summary view.
 * 
 * <p><aside class="warning">Beware: this method is irreversible.</aside>
 * 
 * @function FormApp.Form#deleteAllResponses
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Deletes the given item. Throws a scripting exception if the item has already been deleted.
 * 
 * @function FormApp.Form#deleteItem
 * 
 * @param {FormApp.Item} item - the item to be deleted
 * 
 * @return void
 */


/**
 * Deletes the item at a given index among all the items in the form. Throws a scripting exception
 * if no item exists at the given index.
 * 
 * @function FormApp.Form#deleteItem
 * 
 * @param {IntegerNum} index - the index of the item among all the items in the form
 * 
 * @return void
 */


/**
 * Deletes a single response from the form's response store. This method does not delete copies of
 * responses stored in an external response destination (like a spreadsheet), but does remove the
 * response from the form's summary view. The response ID can be retrieved with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getId()'>FormResponse.getId()</a></code>.
 * 
 * <p><aside class="warning"><b>Warning</b>: This method is irreversible.</aside>
 * 
 * @function FormApp.Form#deleteResponse
 * 
 * @param {String} responseId - the ID of the form response to delete
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Gets the form's confirmation message.
 * 
 * @function FormApp.Form#getConfirmationMessage
 * 
 * @return {String} the form's confirmation message
 */


/**
 * Gets the custom message that will be displayed if the form is not accepting responses, or an
 * empty string if no custom message has been set.
 * 
 * @function FormApp.Form#getCustomClosedFormMessage
 * 
 * @return {String} the custom message that will be displayed if the form is not accepting responses, or an
 *     empty string if no custom message has been set
 */


/**
 * Gets the form's description.
 * 
 * @function FormApp.Form#getDescription
 * 
 * @return {String} the form's description
 */


/**
 * Gets the ID of the form's response destination.
 * 
 * @function FormApp.Form#getDestinationId
 * 
 * @return {String} the ID of the form's response destination
 */


/**
 * Gets the type of the form's response destination.
 * 
 * @function FormApp.Form#getDestinationType
 * 
 * @return {FormApp.DestinationType} the type of the form's response destination
 */


/**
 * Gets the URL that can be used to access the form's edit mode.
 * 
 * @function FormApp.Form#getEditUrl
 * 
 * @return {String} the URL to edit the form
 */


/**
 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user who executes the script does
 * not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, this method throws an exception.
 * 
 * @function FormApp.Form#getEditors
 * 
 * @return {User[]} An array of users with edit permission.
 */


/**
 * Gets the ID of the form.
 * 
 * @function FormApp.Form#getId
 * 
 * @return {String} the ID of the form
 */


/**
 * Gets the item with a given ID. Returns <code>null</code> if the ID does not correspond to an item in
 * the form.
 * 
 * @function FormApp.Form#getItemById
 * 
 * @param {IntegerNum} id - the item's ID
 * 
 * @return {FormApp.Item} the item with the given ID, or <code>null</code> if the item does not exist in the form
 */


/**
 * Gets an array of all items in the form.
 * 
 * @function FormApp.Form#getItems
 * 
 * @return {FormApp.Item[]} an array of all items in the form
 */


/**
 * Gets an array of all items of a given type.
 * 
 * @function FormApp.Form#getItems
 * 
 * @param {FormApp.ItemType} itemType - the type of items to retrieve
 * 
 * @return {FormApp.Item[]} an array of all items of that type
 */


/**
 * Gets the URL that can be used to respond to the form.
 * 
 * @function FormApp.Form#getPublishedUrl
 * 
 * @return {String} the URL to respond to the form
 */


/**
 * Gets a single form response based on its response ID. Response IDs can be retrieved from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getId()'>FormResponse.getId()</a></code>.
 * 
 * @function FormApp.Form#getResponse
 * 
 * @param {String} responseId - the ID for the form response
 * 
 * @return {FormApp.FormResponse} the form response
 */


/**
 * Gets an array of all of the form's responses.
 * 
 * @function FormApp.Form#getResponses
 * 
 * @return {FormApp.FormResponse[]} an array of all of the form's responses
 */


/**
 * Gets an array of all of the form's responses after a given date and time.
 * 
 * @function FormApp.Form#getResponses
 * 
 * @param {Date} timestamp - the earliest date and time for which form responses should be returned
 * 
 * @return {FormApp.FormResponse[]} the list of form responses
 */


/**
 * Determines whether the order of the questions on each page of the form is randomized.
 * 
 * @function FormApp.Form#getShuffleQuestions
 * 
 * @return {Boolean} <code>true</code> if the order of the questions on each page of the form is randomized;
 *     <code>false</code> if not
 */


/**
 * Gets the URL that can be used to view a summary of the form's responses. Unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setPublishingSummary(Boolean)'>setPublishingSummary(enabled)</a></code> is set to <code>true</code>, only users with edit permission to the form
 * will be able to access the URL.
 * 
 * @function FormApp.Form#getSummaryUrl
 * 
 * @return {String} the URL to view a summary of responses
 */


/**
 * Gets the form's title.
 * 
 * @function FormApp.Form#getTitle
 * 
 * @return {String} the form's title
 */


/**
 * Determines whether the form allows only one response per respondent. If the value is <code>true</code>, the script cannot submit form responses at all.
 * 
 * @function FormApp.Form#hasLimitOneResponsePerUser
 * 
 * @return {Boolean} <code>true</code> if the form allows only one response per respondent; <code>false</code> if not
 */


/**
 * Determines whether the form displays a progress bar.
 * 
 * @function FormApp.Form#hasProgressBar
 * 
 * @return {Boolean} <code>true</code> if the form displays a progress bar; <code>false</code> if not
 */


/**
 * Determines whether the form displays a link to submit another response after a respondent
 * completes the form.
 * 
 * @function FormApp.Form#hasRespondAgainLink
 * 
 * @return {Boolean} <code>true</code> if the form displays a "Submit another response" link; <code>false</code> if
 *     not
 */


/**
 * Determines whether the form is currently accepting responses.
 * 
 * @function FormApp.Form#isAcceptingResponses
 * 
 * @return {Boolean} <code>true</code> if the form is accepting responses; <code>false</code> if not
 */


/**
 * Determines whether the form displays a link to view a summary of responses after a respondent
 * completes the form.
 * 
 * @function FormApp.Form#isPublishingSummary
 * 
 * @return {Boolean} <code>true</code> if the form displays a "See previous responses" link; <code>false</code> if not
 */


/**
 * Determines whether the form is a quiz.
 * 
 * @function FormApp.Form#isQuiz
 * 
 * @return {Boolean} <code>true</code> if the form is accepting responses; <code>false</code> if not
 */


/**
 * Moves a given item to an given index among all the items in the form. Throws a scripting
 * exception if the given index is out of bounds.
 * 
 * @function FormApp.Form#moveItem
 * 
 * @param {FormApp.Item} item - the item to move
 * @param {IntegerNum} toIndex - the new index for the item among all the items in the form
 * 
 * @return {FormApp.Item} the item that was moved
 */


/**
 * Moves an item at a given index among all the items in the form to another given index. Throws a
 * scripting exception if the <code>to</code> index is out of bounds.
 * 
 * @function FormApp.Form#moveItem
 * 
 * @param {IntegerNum} from - the current index of the item among all the items in the form
 * @param {IntegerNum} to - the new index for the item among all the items in the form
 * 
 * @return {FormApp.Item} the item that was moved
 */


/**
 * Unlinks the form from its current response destination. The unlinked former destination still
 * retains a copy of all previous responses. All forms, including those that do not have a
 * destination set explicitly, <a href="https://support.google.com/drive/answer/2917686">save a
 * copy of responses in the form's response store</a>. If the form does not currently have a
 * response destination, this method has no effect.
 * 
 * @function FormApp.Form#removeDestination
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is shared with the user's entire
 * domain.
 * 
 * @function FormApp.Form#removeEditor
 * 
 * @param {String} emailAddress - The email address of the user to remove.
 * 
 * @return {FormApp.Form} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
 */


/**
 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. This method does not
 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> if they belong to a class of users who have
 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is shared with the user's entire
 * domain.
 * 
 * @function FormApp.Form#removeEditor
 * 
 * @param {User} user - A representation of the user to remove.
 * 
 * @return {FormApp.Form} This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
 */


/**
 * Determines whether the form requires respondents to log in to an account in the same domain or
 * a subdomain before responding.
 * 
 * @function FormApp.Form#requiresLogin
 * 
 * @return {Boolean} <code>true</code> if the form requires users to log in; <code>false</code> if not
 */


/**
 * Sets whether the form is currently accepting responses. The default for new forms is <code>true</code>.
 * 
 * @function FormApp.Form#setAcceptingResponses
 * 
 * @param {Boolean} enabled - <code>true</code> if the form should accept responses; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form displays a link to edit a response after submitting it. The default for
 * new forms is <code>false</code>.
 * 
 * <p>Regardless of this setting, the method <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()'>FormResponse.getEditResponseUrl()</a></code> allows a
 * script author who has edit permission to the form to generate a URL that can be used to edit a
 * response.
 * 
 * @function FormApp.Form#setAllowResponseEdits
 * 
 * @param {Boolean} enabled - <code>true</code> if the form should display an "Edit your response" link; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form collects respondents' email addresses. The default for new forms is
 * <code>false</code>.
 * 
 * @function FormApp.Form#setCollectEmail
 * 
 * @param {Boolean} collect - <code>true</code> if the form should collect email addresses; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets the form's confirmation message.
 * 
 * @function FormApp.Form#setConfirmationMessage
 * 
 * @param {String} message - the form's new confirmation message
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets the message to display if the form is not accepting responses. If no message is set, the
 * form will use a default message.
 * 
 * @function FormApp.Form#setCustomClosedFormMessage
 * 
 * @param {String} message - the message to display if the form is not accepting responses
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets the form's description.
 * 
 * @function FormApp.Form#setDescription
 * 
 * @param {String} description - the form's new description
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets the destination where form responses are saved. All forms, including those that do not
 * have a destination set explicitly, <a
 * href="https://support.google.com/drive/answer/2917686">save a copy of responses in the form's
 * response store</a>.
 * 
 * @function FormApp.Form#setDestination
 * 
 * @param {FormApp.DestinationType} type - the type of the form's response destination
 * @param {String} id - the ID of the form's response destination
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form is a quiz. The default for new forms is <code>false</code>.
 * 
 * <p>Graded questions are only allowed in Quizzes, so setting this to false will cause all
 * grading options to be removed from all questions.
 * 
 * <p>Quiz settings are only available in the new Forms UI; making a form a Quiz will opt the form
 * into using the new UI.
 * 
 * @function FormApp.Form#setIsQuiz
 * 
 * @param {Boolean} enabled - <code>true</code> if quiz features should be enabled for the form; <code>false</code> if
 *     not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form allows only one response per respondent. The default for new forms is
 * <code>false</code>. If the value is set to <code>true</code>, the script cannot submit form responses at
 * all.
 * 
 * @function FormApp.Form#setLimitOneResponsePerUser
 * 
 * @param {Boolean} enabled - <code>true</code> if the form should allow only one response per respondent; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form has a progress bar. The default for new forms is <code>false</code>.
 * 
 * @function FormApp.Form#setProgressBar
 * 
 * @param {Boolean} enabled - <code>true</code> if the form should display a progress bar; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form displays a link to view a summary of responses after a respondent submits
 * the form. The default for new forms is <code>false</code>.
 * 
 * @function FormApp.Form#setPublishingSummary
 * 
 * @param {Boolean} enabled - <code>true</code> if the form should display a "See previous responses" link; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the form requires respondents to log in to an account in the same domain or a
 * subdomain before responding. The default for new forms is <code>false</code> unless a domain
 * administrator changes the default.
 * 
 * <p>This feature is available only for forms created by G Suite users. Users of other types of
 * Google accounts cannot be required to log in.
 * 
 * @function FormApp.Form#setRequireLogin
 * 
 * @param {Boolean} requireLogin - <code>true</code> if the form requires users to log in; <code>false</code> if not
 * 
 * @return {FormApp.Form} the current form (for chaining)
 */


/**
 * Sets whether the form displays a link to submit another response after a respondent completes
 * the form. The default for new forms is <code>true</code>.
 * 
 * @function FormApp.Form#setShowLinkToRespondAgain
 * 
 * @param {Boolean} enabled - <code>true</code> if the form should display a "Submit another response" link; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets whether the order of the questions on each page of the form is randomized.
 * 
 * @function FormApp.Form#setShuffleQuestions
 * 
 * @param {Boolean} shuffle - <code>true</code> if the order of the questions on each page of the form should be
 *     randomized; <code>false</code> if not
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Sets the form's title.
 * 
 * @function FormApp.Form#setTitle
 * 
 * @param {String} title - the form's new title
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */


/**
 * Converts a long URL for a form to a short URL. Throws an exception if the long URL does not
 * belong to Google Forms.
 * 
 * @function FormApp.Form#shortenFormUrl
 * 
 * @param {String} url
 * 
 * @return {String} a URL in the form <code>http://goo.gl/forms/1234</code>
 */


/**
 * Submits grades for the given FormResponses.
 * 
 * @function FormApp.Form#submitGrades
 * 
 * @param {FormApp.FormResponse[]} responses
 * 
 * @return {FormApp.Form} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
 */



/**
 * @class FormApp.FormResponse
 */

/**
 * Generates a URL that can be used to edit a response that has already been submitted, even if
 * the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setAllowResponseEdits(Boolean)'>Form.setAllowResponseEdits(enabled)</a></code> setting is disabled. Anyone who visits the link
 * can edit the response, although they need an account with access to the form if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setRequireLogin(Boolean)'>Form.setRequireLogin(requireLogin)</a></code> setting is enabled. If the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>Form.setCollectEmail(collect)</a></code>
 * setting is enabled, the form records the email address of the user who edited the response
 * instead of the email address of the original respondent.
 * 
 * <p>For a form response that the script has created but not yet submitted, this method returns
 * <code>null</code>.
 * 
 * @function FormApp.FormResponse#getEditResponseUrl
 * 
 * @return {String} the URL to change a submitted response
 */


/**
 * Gets all item responses contained in a form response, in the same order that the items appear
 * in the form. This method works similarly to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getItemResponses()'>getItemResponses()</a></code>, but to allow for grading
 * a missing answer, it still returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> if the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>
 * can be graded (ie has a point value), even if there isn't an actual response. However, if the
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code> isn't gradable, this method excludes that item from its returned array.
 * 
 * @function FormApp.FormResponse#getGradableItemResponses
 * 
 * @return {FormApp.ItemResponse[]} an array of responses to every question item within the form for which the respondent
 *     could receive a score.
 */


/**
 * Gets the item response contained in a form response for a given item. This method works
 * similarly to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getResponseForItem(Item)'>getResponseForItem(item)</a></code>, but to allow for grading a missing answer, it still
 * returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> if the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code> can be graded (ie has a point
 * value), even if there isn't an actual response. However, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code> isn't gradable,
 * this method returns <code>null</code>.
 * 
 * @function FormApp.FormResponse#getGradableResponseForItem
 * 
 * @param {FormApp.Item} item
 * 
 * @return {FormApp.ItemResponse} the response for a given item, or <code>null</code> if none exists and the item is ungraded
 */


/**
 * Gets the ID of the form response. This method returns <code>null</code> if the form response has not
 * been submitted.
 * 
 * @function FormApp.FormResponse#getId
 * 
 * @return {String} the ID of the form response, or <code>null</code> if the form response has not been
 *     submitted
 */


/**
 * Gets all item responses contained in a form response, in the same order that the items appear
 * in the form. If the form response does not contain a response for a given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>,
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code>
 * returned for that item will have an empty string as the response. If the form response omits a
 * response for any other item type, this method excludes that item from its returned array.
 * 
 * @function FormApp.FormResponse#getItemResponses
 * 
 * @return {FormApp.ItemResponse[]} an array of responses to every question item within the form for which the respondent
 *     provided an answer
 */


/**
 * Gets the email address of the person who submitted a response, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>Form.setCollectEmail(collect)</a></code> setting is enabled.
 * 
 * <p>For a form response that the script has created but not yet submitted, this method returns
 * <code>null</code>.
 * 
 * @function FormApp.FormResponse#getRespondentEmail
 * 
 * @return {String} the email address of the person who submitted this response, if available, or <code>null</code> if the script created this response but has not yet submitted it
 */


/**
 * Gets the item response contained in this form response for a given item.
 * 
 * @function FormApp.FormResponse#getResponseForItem
 * 
 * @param {FormApp.Item} item
 * 
 * @return {FormApp.ItemResponse} the response for a given item, or <code>null</code> if none exists
 */


/**
 * Gets the timestamp for a form response submission.
 * 
 * <p>For a form response that the script has created but not yet submitted, this method returns
 * <code>null</code>.
 * 
 * @function FormApp.FormResponse#getTimestamp
 * 
 * @return {Date} the timestamp at which this response was submitted, or <code>null</code> if the script
 *     created this response but has not yet submitted it
 */


/**
 * Submits the response. Throws a scripting exception if the response has already been submitted.
 * 
 * @function FormApp.FormResponse#submit
 * 
 * @return {FormApp.FormResponse} a newly created response saved to the form's response store
 */


/**
 * Generates a URL for the form in which the answers are pre-filled based on the answers in this
 * form response.
 * 
 * @function FormApp.FormResponse#toPrefilledUrl
 * 
 * @return {String} the URL for a form with pre-filled answers
 */


/**
 * Adds the given item response's grades to a form response. This method applies only to form
 * responses that have already been submitted, and only affects stored grades once they are
 * submitted. This method also only updates the item response's grades; it does not affect the
 * actual response (since the response has already been submitted). If this method is called
 * multiple times for the same item, only the last grade is retained. If the ItemResponse contains
 * no grades, this method will remove grades for the item.
 * 
 * <pre class="prettyprint">
 * // Programmatically award partial credit for a given response
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var formResponses = form.getResponses();
 * var formItems = form.getItems();
 * for (var i = 0; i < formResponses.length; i++) {
 *   var formResponse = formResponses[i];
 *   for (var j = 0; j < formItems.length; j++) {
 *     var item = formItems[i];
 *     var points = item.asMultipleChoiceItem().getPoints();
 *     var itemResponse = formResponse.getGradableResponseForItem(item);
 *     Logger.log('Award half credit for answers containing the word "Kennedy"');
 *     var answer = itemResponse.getResponse();
 *     if (answer != null && answer.includes('Kennedy')) {
 *       itemResponse.setScore(points / 2);
 *       formResponse.withItemGrades(itemResponse);
 *     }
 *   }
 * }
 * form.submitGrades(formResponses);
 * </pre>
 * 
 * @function FormApp.FormResponse#withItemGrade
 * 
 * @param {FormApp.ItemResponse} gradedResponse
 * 
 * @return {FormApp.FormResponse} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html'>FormResponse</a></code>, for chaining
 */


/**
 * Adds the given item response to a form response. This method applies only to form responses
 * that the script has created but not yet submitted; it cannot affect stored responses. If this
 * method is called multiple times for the same item, only the last item response is retained.
 * 
 * @function FormApp.FormResponse#withItemResponse
 * 
 * @param {FormApp.ItemResponse} response
 * 
 * @return {FormApp.FormResponse} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html'>FormResponse</a></code>, for chaining
 */



/**
 * @class FormApp.GridItem
 */

/**
 * Removes any data validation for this grid item.
 * 
 * @function FormApp.GridItem#clearValidation
 * 
 * @return {FormApp.GridItem} this item, for chaining
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this grid item. The argument <code>responses</code> must be a
 * <code>String[]</code> array containing as many values as the number of rows in the grid. A <code>null</code> element for a non-required grid question indicates no response to that row. Throws an
 * exception if any of the values does not match a valid choice.
 * 
 * @function FormApp.GridItem#createResponse
 * 
 * @param {String[]} responses - an array of valid answers for this grid item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.GridItem#duplicate
 * 
 * @return {FormApp.GridItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */


/**
 * Gets the values for every column in the grid.
 * 
 * @function FormApp.GridItem#getColumns
 * 
 * @return {String[]} an array of column values, which respondents see as labels when viewing the form
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.GridItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.GridItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.GridItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the values for every row in the grid.
 * 
 * @function FormApp.GridItem#getRows
 * 
 * @return {String[]} an array of row values, which respondents see as labels when viewing the form
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.GridItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.GridItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.GridItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the columns of the grid based on an array of values. Throws an exception if the given
 * array is empty.
 * 
 * @function FormApp.GridItem#setColumns
 * 
 * @param {String[]} columns - an array of column values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.GridItem} this item, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.GridItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.GridItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.GridItem} the current item (for chaining)
 */


/**
 * Sets the rows of the grid based on an array of values. Throws an exception if the given array
 * is empty.
 * 
 * @function FormApp.GridItem#setRows
 * 
 * @param {String[]} rows - an array of row values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.GridItem} this item, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.GridItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */


/**
 * Sets the data validation for this grid item. Passing in null or a validation without any
 * require functions called will remove any prior validation.
 * 
 * @function FormApp.GridItem#setValidation
 * 
 * @param {FormApp.GridValidation} validation - a GridValidation to apply to this item.
 * 
 * @return {FormApp.GridItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
 */



/**
 * @class FormApp.GridValidation
 */


/**
 * @class FormApp.GridValidationBuilder
 */

/**
 * Requires limit of one response per column for a grid item.
 * 
 * @function FormApp.GridValidationBuilder#requireLimitOneResponsePerColumn
 * 
 * @return {FormApp.GridValidationBuilder} this validation builder, for chaining
 */



/**
 * @class FormApp.ImageItem
 */

/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.ImageItem#duplicate
 * 
 * @return {FormApp.ImageItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */


/**
 * Gets the image's horizontal alignment.
 * 
 * @function FormApp.ImageItem#getAlignment
 * 
 * @return {FormApp.Alignment} the horizontal alignment
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ImageItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.ImageItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the image that is currently assigned to the item.
 * 
 * @function FormApp.ImageItem#getImage
 * 
 * @return {Blob} the image data
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.ImageItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ImageItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.ImageItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Gets the image's width in pixels.
 * 
 * @function FormApp.ImageItem#getWidth
 * 
 * @return {IntegerNum} the width in pixels
 */


/**
 * Sets the image's horizontal alignment.
 * 
 * @function FormApp.ImageItem#setAlignment
 * 
 * @param {FormApp.Alignment} alignment - the horizontal alignment
 * 
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ImageItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */


/**
 * Sets the image itself.
 * 
 * @function FormApp.ImageItem#setImage
 * 
 * @param {BlobSource} image - the image data
 * 
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ImageItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */


/**
 * Sets the image's width in pixels. Only the image's width can be set. Height is set
 * automatically to maintain the image's proportions.
 * 
 * @function FormApp.ImageItem#setWidth
 * 
 * @param {IntegerNum} width - the width in pixels
 * 
 * @return {FormApp.ImageItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
 */



/**
 * @class FormApp.Item
 */

/**
 * Returns the item as a checkbox grid item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>CHECKBOX_GRID</code>.
 * 
 * @function FormApp.Item#asCheckboxGridItem
 * 
 * @return {FormApp.CheckboxGridItem} the checkbox grid item
 */


/**
 * Returns the item as a checkbox item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>CHECKBOX</code>.
 * 
 * @function FormApp.Item#asCheckboxItem
 * 
 * @return {FormApp.CheckboxItem} the checkbox item
 */


/**
 * Returns the item as a date item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>DATE</code>.
 * 
 * @function FormApp.Item#asDateItem
 * 
 * @return {FormApp.DateItem} the date item
 */


/**
 * Returns the item as a date-time item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>DATETIME</code>.
 * 
 * @function FormApp.Item#asDateTimeItem
 * 
 * @return {FormApp.DateTimeItem} the date-time item
 */


/**
 * Returns the item as a duration item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>DURATION</code>.
 * 
 * @function FormApp.Item#asDurationItem
 * 
 * @return {FormApp.DurationItem} the duration item
 */


/**
 * Returns the item as a grid item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>GRID</code>.
 * 
 * @function FormApp.Item#asGridItem
 * 
 * @return {FormApp.GridItem} the grid item
 */


/**
 * Returns the item as an image item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>IMAGE</code>.
 * 
 * @function FormApp.Item#asImageItem
 * 
 * @return {FormApp.ImageItem} the image item
 */


/**
 * Returns the item as a list item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>LIST</code>.
 * 
 * @function FormApp.Item#asListItem
 * 
 * @return {FormApp.ListItem} the list item
 */


/**
 * Returns the item as a multiple-choice item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>MULTIPLE_CHOICE</code>.
 * 
 * @function FormApp.Item#asMultipleChoiceItem
 * 
 * @return {FormApp.MultipleChoiceItem} the multiple-choice item
 */


/**
 * Returns the item as a page-break item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>PAGE_BREAK</code>.
 * 
 * @function FormApp.Item#asPageBreakItem
 * 
 * @return {FormApp.PageBreakItem} the page-break item
 */


/**
 * Returns the item as a paragraph-text item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>PARAGRAPH_TEXT</code>.
 * 
 * @function FormApp.Item#asParagraphTextItem
 * 
 * @return {FormApp.ParagraphTextItem} the paragraph-text item
 */


/**
 * Returns the item as a scale item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>SCALE</code>.
 * 
 * @function FormApp.Item#asScaleItem
 * 
 * @return {FormApp.ScaleItem} the scale item
 */


/**
 * Returns the item as a section-header item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>SECTION_HEADER</code>.
 * 
 * @function FormApp.Item#asSectionHeaderItem
 * 
 * @return {FormApp.SectionHeaderItem} the section-header item
 */


/**
 * Returns the item as a text item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>TEXT</code>.
 * 
 * @function FormApp.Item#asTextItem
 * 
 * @return {FormApp.TextItem} the text item
 */


/**
 * Returns the item as a time item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>TIME</code>.
 * 
 * @function FormApp.Item#asTimeItem
 * 
 * @return {FormApp.TimeItem} the time item
 */


/**
 * Returns the item as a video item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>VIDEO</code>.
 * 
 * @function FormApp.Item#asVideoItem
 * 
 * @return {FormApp.VideoItem} the video item
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.Item#duplicate
 * 
 * @return {FormApp.Item} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.Item#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.Item#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.Item#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.Item#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.Item#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.Item#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.Item} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.Item#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.Item} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
 */



/**
 * @class FormApp.ItemResponse
 */

/**
 * Gets the feedback that was given for the respondent's submitted answer.
 * 
 * @function FormApp.ItemResponse#getFeedback
 * 
 * @return {Object} a <code>QuizFeedback</code> for the question item
 */


/**
 * Gets the question item that this response answers.
 * 
 * @function FormApp.ItemResponse#getItem
 * 
 * @return {FormApp.Item} the question item that this response answers
 */


/**
 * Gets the answer that the respondent submitted. For most types of question items, this returns a
 * <code>String</code>.
 * 
 * <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> questions, this returns a <code>String[]</code> array containing the
 * responder's choices. The order of the strings in the array may vary.
 * 
 * <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code> questions, this returns a <code>String[]</code> array in which the answer at
 * index <code>n</code> corresponds to the question at row <code>n + 1</code> in the grid. If a respondent
 * did not answer a question in the grid, that answer is returned as <code>&#39;&#39;</code>.
 * 
 * <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code> questions, this returns a <code>String[][]</code> array in which the
 * answers at row index <code>n</code> corresponds to the question at row <code>n + 1</code> in the checkbox
 * grid. If a respondent did not answer a question in the grid, that answer is returned as <code>&#39;&#39;</code>.
 * 
 * @function FormApp.ItemResponse#getResponse
 * 
 * @return {Object} a <code>String</code> or <code>String[]</code> or <code>String[][]</code> of answers to the question
 *     item
 */


/**
 * Gets the score for the respondent's submitted answer.
 * 
 * @function FormApp.ItemResponse#getScore
 * 
 * @return {Object} a <code>Double</code> representing the score for the question item
 */


/**
 * Sets the feedback that should be displayed for the respondent's submitted answer.
 * 
 * <p>This method does not actually save the feedback in Forms until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#submitGrades(FormResponse)'>Form.submitGrades(responses)</a></code> is called with the updated FormResponses. See <code>setScore()</code> for an example.
 * 
 * @function FormApp.ItemResponse#setFeedback
 * 
 * @param {Object} feedback
 * 
 * @return {FormApp.ItemResponse} a <code>ItemResponse</code> for chaining
 */


/**
 * Sets the score for the respondent's submitted answer. A null value will clear the existing
 * score.
 * 
 * <p>This method does not actually save the score in Forms until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#submitGrades(FormResponse)'>Form.submitGrades(responses)</a></code> is called with the updated FormResponses.
 * 
 * <pre class="prettyprint">
 * // For a multiple choice question with options: "Always true", "Sometimes true", and "Never",
 * // award half credit for responses that answered "Sometimes true".
 * var formResponses = FormApp.getActiveForm().getResponses();
 * // Go through each form response
 * for (var i = 0; i < formResponses.length; i++) {
 *   var response = formResponses[i];
 *   var items = FormApp.getActiveForm().getItems();
 *   // Assume it's the first item
 *   var item = items[0];
 *   var itemResponse = response.getGradableResponseForItem(item);
 *   // Give half credit for "Sometimes true".
 *   if (itemResponse != null && itemResponse.getResponse() == 'Sometimes true') {
 *     var points = item.asMultipleChoiceItem().getPoints();
 *     itemResponse.setScore(points * .5);
 *     // This saves the grade, but does not submit to Forms yet.
 *     response.withItemGrade(itemResponse);
 *   }
 * }
 * // Grades are actually submitted to Forms here.
 * FormApp.getActiveForm().submitGrades(formResponses);
 * </pre>
 * 
 * @function FormApp.ItemResponse#setScore
 * 
 * @param {Object} score
 * 
 * @return {FormApp.ItemResponse} a <code>ItemResponse</code> for chaining
 */



/**
 * @class FormApp.ItemType
 */

/**
 * A question item that allows the respondent to select one or more checkboxes, as well as an
 * optional "other" field.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.CHECKBOX
 */
/**
 * A question item, presented as a grid of columns and rows, that allows the respondent to select
 * multiple choices per row from a sequence of checkboxes.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.CHECKBOX_GRID
 */
/**
 * A question item that allows the respondent to indicate a date.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.DATE
 */
/**
 * A question item that allows the respondent to indicate a date and time.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.DATETIME
 */
/**
 * A question item that allows the respondent to indicate a length of time.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.DURATION
 */
/**
 * A question item, presented as a grid of columns and rows, that allows the respondent to select
 * one choice per row from a sequence of radio buttons.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.GRID
 */
/**
 * A layout item that displays an image.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.IMAGE
 */
/**
 * A question item that allows the respondent to select one choice from a drop-down list.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.LIST
 */
/**
 * A question item that allows the respondent to select one choice from a list of radio buttons or
 * an optional "other" field.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.MULTIPLE_CHOICE
 */
/**
 * A layout item that marks the start of a page.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.PAGE_BREAK
 */
/**
 * A question item that allows the respondent to enter a block of text.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.PARAGRAPH_TEXT
 */
/**
 * A question item that allows the respondent to choose one option from a numbered sequence of
 * radio buttons.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.SCALE
 */
/**
 * A layout item that visually indicates the start of a section.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.SECTION_HEADER
 */
/**
 * A question item that allows the respondent to enter a single line of text.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.TEXT
 */
/**
 * A question item that allows the respondent to indicate a time of day.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.TIME
 */
/**
 * A layout item that displays a YouTube video.
 * 
 * @typedef {FormApp.ItemType} FormApp.ItemType.VIDEO
 */

/**
 * @class FormApp.ListItem
 */

/**
 * Creates a new choice.
 * 
 * @function FormApp.ListItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice.
 * 
 * @function FormApp.ListItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {Boolean} isCorrect - whether the choice is a correct answer
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice with a page-navigation option that jumps to a given page-break item. This
 * is equivalent to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html#createChoice(String,PageNavigationType)'>createChoice(value, navigationType)</a></code> with <code>navigationType</code> set to <code>FormApp.PageNavigationType.GO_TO_PAGE</code>. Choices that use page
 * navigation cannot be combined in the same item with choices that do not use page navigation.
 * 
 * <p>The page navigation occurs after the respondent completes a page that contains the option,
 * and only if the respondent chose that option. If the respondent chose multiple options with
 * page-navigation instructions on the same page, only the last navigation option has any effect.
 * Page navigation also has no effect on the last page of a form.
 * 
 * @function FormApp.ListItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {FormApp.PageBreakItem} navigationItem - the item to navigate to
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
 * combined in the same item with choices that do not use page navigation.
 * 
 * <p>The page navigation occurs after the respondent completes a page that contains the option,
 * and only if the respondent chose that option. If the respondent chose multiple options with
 * page-navigation instructions on the same page, only the last navigation option has any effect.
 * Page navigation also has no effect on the last page of a form.
 * 
 * @function FormApp.ListItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {FormApp.PageNavigationType} navigationType - the choice's navigation type
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this list item. Throws an exception if the <code>response</code> argument does not match a valid choice for this item.
 * 
 * @function FormApp.ListItem#createResponse
 * 
 * @param {String} response - a valid answer for this list item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.ListItem#duplicate
 * 
 * @return {FormApp.ListItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Gets all choices for an item.
 * 
 * @function FormApp.ListItem#getChoices
 * 
 * @return {FormApp.Choice[]} an array of choices
 */


/**
 * Returns the feedback that is shown to respondents when they respond correctly to a question.
 * 
 * @function FormApp.ListItem#getFeedbackForCorrect
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
 * 
 * @function FormApp.ListItem#getFeedbackForIncorrect
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ListItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.ListItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.ListItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.ListItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ListItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.ListItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.ListItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the choices for an item from an array of strings. Throws an exception if the given array
 * is empty.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?');
 * item.setChoiceValues(['Dogs', 'Cats']);
 * </pre>
 * 
 * @function FormApp.ListItem#setChoiceValues
 * 
 * @param {String[]} values - the array of choice values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Sets an array of choices for an item. Throws an exception if the given array is empty or
 * contains a <code>null</code> element.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?')
 * item.setChoices([
 *     item.createChoice('Cats'),
 *     item.createChoice('Dogs')
 * ]);
 * </pre>
 * 
 * @function FormApp.ListItem#setChoices
 * 
 * @param {FormApp.Choice[]} choices - an array of choices
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond correctly to a question.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?');
 * // Set "Dogs" as the correct answer to this question.
 * item.setChoices([
 *   item.createChoice('Dogs', true),
 *   item.createChoice('Cats', false)]);
 * // Add feedback which will be shown for correct responses; ie "Dogs".
 * item.setFeedbackForCorrect(
 *     FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
 * </pre>
 * 
 * @function FormApp.ListItem#setFeedbackForCorrect
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback. A null value will clear the feedback.
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
 * 
 * @function FormApp.ListItem#setFeedbackForIncorrect
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ListItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.ListItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.ListItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.ListItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ListItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.ListItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
 */



/**
 * @class FormApp.MultipleChoiceItem
 */

/**
 * Creates a new choice.
 * 
 * @function FormApp.MultipleChoiceItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice.
 * 
 * @function FormApp.MultipleChoiceItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {Boolean} isCorrect - whether the choice is a correct answer
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice with a page-navigation option that jumps to a given page-break item. This
 * is equivalent to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#createChoice(String,PageNavigationType)'>createChoice(value, navigationType)</a></code> with <code>navigationType</code> set to <code>FormApp.PageNavigationType.GO_TO_PAGE</code>. Choices that use page
 * navigation cannot be combined in the same item with choices that do not use page navigation.
 * 
 * <p>The page navigation occurs after the respondent completes a page that contains the option,
 * and only if the respondent chose that option. If the respondent chose multiple options with
 * page-navigation instructions on the same page, only the last navigation option has any effect.
 * Page navigation also has no effect on the last page of a form.
 * 
 * @function FormApp.MultipleChoiceItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {FormApp.PageBreakItem} navigationItem - the item to navigate to
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
 * combined in the same item with choices that do not use page navigation.
 * 
 * <p>The page navigation occurs after the respondent completes a page that contains the option,
 * and only if the respondent chose that option. If the respondent chose multiple options with
 * page-navigation instructions on the same page, only the last navigation option has any effect.
 * Page navigation also has no effect on the last page of a form.
 * 
 * @function FormApp.MultipleChoiceItem#createChoice
 * 
 * @param {String} value - the choice's value, which respondents see as a label when viewing the form
 * @param {FormApp.PageNavigationType} navigationType - the choice's navigation type
 * 
 * @return {FormApp.Choice} the new choice
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this multiple-choice item. Throws an exception if the
 * <code>response</code> argument does not match a valid choice for this item, unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#showOtherOption(Boolean)'>showOtherOption(enabled)</a></code> is set to <code>true</code>.
 * 
 * @function FormApp.MultipleChoiceItem#createResponse
 * 
 * @param {String} response - a valid answer for this multiple-choice item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.MultipleChoiceItem#duplicate
 * 
 * @return {FormApp.MultipleChoiceItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Gets all choices for an item.
 * 
 * @function FormApp.MultipleChoiceItem#getChoices
 * 
 * @return {FormApp.Choice[]} an array of choices
 */


/**
 * Returns the feedback that is shown to respondents when they respond correctly to a question.
 * 
 * @function FormApp.MultipleChoiceItem#getFeedbackForCorrect
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
 * 
 * @function FormApp.MultipleChoiceItem#getFeedbackForIncorrect
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.MultipleChoiceItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.MultipleChoiceItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.MultipleChoiceItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.MultipleChoiceItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.MultipleChoiceItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.MultipleChoiceItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the item has an "other" option.
 * 
 * @function FormApp.MultipleChoiceItem#hasOtherOption
 * 
 * @return {Boolean} <code>true</code> if the item has an "other" option; <code>false</code> if not
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.MultipleChoiceItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the choices for an item from an array of strings. Throws an exception if the given array
 * is empty.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?');
 * item.setChoiceValues(['Dogs', 'Cats']);
 * </pre>
 * 
 * @function FormApp.MultipleChoiceItem#setChoiceValues
 * 
 * @param {String[]} values - the array of choice values, which respondents see as labels when viewing the form
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets an array of choices for an item. Throws an exception if the given array is empty or
 * contains a <code>null</code> element.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?')
 * item.setChoices([
 *     item.createChoice('Cats'),
 *     item.createChoice('Dogs')
 * ]);
 * </pre>
 * 
 * @function FormApp.MultipleChoiceItem#setChoices
 * 
 * @param {FormApp.Choice[]} choices - an array of choices
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond correctly to a question.
 * 
 * <pre class="prettyprint">
 * // Open a form by ID and add a new list item.
 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
 * var item = form.addListItem();
 * item.setTitle('Do you prefer cats or dogs?');
 * // Set "Dogs" as the correct answer to this question.
 * item.setChoices([
 *   item.createChoice('Dogs', true),
 *   item.createChoice('Cats', false)]);
 * // Add feedback which will be shown for correct responses; ie "Dogs".
 * item.setFeedbackForCorrect(
 *     FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
 * </pre>
 * 
 * @function FormApp.MultipleChoiceItem#setFeedbackForCorrect
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback. A null value will clear the feedback.
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
 * 
 * @function FormApp.MultipleChoiceItem#setFeedbackForIncorrect
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.MultipleChoiceItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.MultipleChoiceItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.MultipleChoiceItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.MultipleChoiceItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.MultipleChoiceItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */


/**
 * Sets whether the item has an "other" option. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> or
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> is <code>false</code>.
 * 
 * @function FormApp.MultipleChoiceItem#showOtherOption
 * 
 * @param {Boolean} enabled - <code>true</code> if the item has an "other" option; <code>false</code> if not
 * 
 * @return {FormApp.MultipleChoiceItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
 */



/**
 * @class FormApp.PageBreakItem
 */

/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.PageBreakItem#duplicate
 * 
 * @return {FormApp.PageBreakItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */


/**
 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code> that the form will jump to after completing the page before this
 * page break (that is, upon reaching this page break by normal linear progression through the
 * form).
 * 
 * @function FormApp.PageBreakItem#getGoToPage
 * 
 * @return {FormApp.PageBreakItem} the page break to jump to after completing the page before this page break, or <code>null</code> if none is set
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.PageBreakItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.PageBreakItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.PageBreakItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the type of page navigation that occurs after completing the page before this page break
 * (that is, upon reaching this page break by normal linear progression through the form).
 * 
 * @function FormApp.PageBreakItem#getPageNavigationType
 * 
 * @return {FormApp.PageNavigationType} the navigation action to take after completing the page before this page break
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.PageBreakItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.PageBreakItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Sets the page to jump to after completing the page before this page break (that is, upon
 * reaching this page break by normal linear progression through the form). If the previous page
 * contained a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code> with a navigation option, that
 * navigation overrules this navigation.
 * 
 * @function FormApp.PageBreakItem#setGoToPage
 * 
 * @param {FormApp.PageBreakItem} goToPageItem - the page break to jump to after completing the page before this page break
 * 
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */


/**
 * Sets the type of page navigation that occurs after completing the page before this page break
 * (that is, upon reaching this page break by normal linear progression through the form). If the
 * page contained a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code> with a navigation option, that
 * navigation overrules this navigation.
 * 
 * @function FormApp.PageBreakItem#setGoToPage
 * 
 * @param {FormApp.PageNavigationType} navigationType - the navigation action to take after completing the page before this page
 *     break
 * 
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.PageBreakItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.PageBreakItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.PageBreakItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
 */



/**
 * @class FormApp.PageNavigationType
 */

/**
 * Continue to the next page of the form after completing the current page.
 * 
 * @typedef {FormApp.PageNavigationType} FormApp.PageNavigationType.CONTINUE
 */
/**
 * Jump to a specified page of the form after completing the current page.
 * 
 * @typedef {FormApp.PageNavigationType} FormApp.PageNavigationType.GO_TO_PAGE
 */
/**
 * Restart the form from the beginning, without clearing answers entered so far, after completing
 * the current page.
 * 
 * @typedef {FormApp.PageNavigationType} FormApp.PageNavigationType.RESTART
 */
/**
 * Submit the form response after completing the current page.
 * 
 * @typedef {FormApp.PageNavigationType} FormApp.PageNavigationType.SUBMIT
 */

/**
 * @class FormApp.ParagraphTextItem
 */

/**
 * Removes any data validation for this paragraph text item.
 * 
 * @function FormApp.ParagraphTextItem#clearValidation
 * 
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this paragraph text item.
 * 
 * @function FormApp.ParagraphTextItem#createResponse
 * 
 * @param {String} response - an answer to the question posed by the item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.ParagraphTextItem#duplicate
 * 
 * @return {FormApp.ParagraphTextItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.ParagraphTextItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ParagraphTextItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.ParagraphTextItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.ParagraphTextItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.ParagraphTextItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ParagraphTextItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.ParagraphTextItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.ParagraphTextItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.ParagraphTextItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ParagraphTextItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.ParagraphTextItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.ParagraphTextItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.ParagraphTextItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ParagraphTextItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */


/**
 * Sets the data validation for this paragraph text item. Passing in null or a validation without
 * any require functions called will remove any prior validation.
 * 
 * @function FormApp.ParagraphTextItem#setValidation
 * 
 * @param {FormApp.ParagraphTextValidation} validation - a ParagraphTextValidation to apply to this item.
 * 
 * @return {FormApp.ParagraphTextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
 */



/**
 * @class FormApp.ParagraphTextValidation
 */


/**
 * @class FormApp.ParagraphTextValidationBuilder
 */

/**
 * Requires response to contain pattern.
 * 
 * @function FormApp.ParagraphTextValidationBuilder#requireTextContainsPattern
 * 
 * @param {String} pattern - text must contain pattern
 * 
 * @return {FormApp.ParagraphTextValidationBuilder} this for chaining
 */


/**
 * Requires response to not contain pattern.
 * 
 * @function FormApp.ParagraphTextValidationBuilder#requireTextDoesNotContainPattern
 * 
 * @param {String} pattern - text must not contain pattern
 * 
 * @return {FormApp.ParagraphTextValidationBuilder} this for chaining
 */


/**
 * Requires response to not match pattern.
 * 
 * @function FormApp.ParagraphTextValidationBuilder#requireTextDoesNotMatchPattern
 * 
 * @param {String} pattern - text must not match pattern
 * 
 * @return {FormApp.ParagraphTextValidationBuilder} this for chaining
 */


/**
 * Requires response length to be greater than or equal to value.
 * 
 * @function FormApp.ParagraphTextValidationBuilder#requireTextLengthGreaterThanOrEqualTo
 * 
 * @param {IntegerNum} number - paragraph text length must be greater than this value
 * 
 * @return {FormApp.ParagraphTextValidationBuilder} this for chaining
 */


/**
 * Requires response length to be less than value.
 * 
 * @function FormApp.ParagraphTextValidationBuilder#requireTextLengthLessThanOrEqualTo
 * 
 * @param {IntegerNum} number - paragraph text length must be less than or equal to this value
 * 
 * @return {FormApp.ParagraphTextValidationBuilder} this for chaining
 */


/**
 * Requires response to match pattern.
 * 
 * @function FormApp.ParagraphTextValidationBuilder#requireTextMatchesPattern
 * 
 * @param {String} pattern - text must match pattern
 * 
 * @return {FormApp.ParagraphTextValidationBuilder} this for chaining
 */



/**
 * @class FormApp.QuizFeedback
 */

/**
 * Gets a list of the URLs associated with the Feedback. These are displayed to the user as a list
 * of helpful links.
 * 
 * @function FormApp.QuizFeedback#getLinkUrls
 * 
 * @return {String[]} a list of the URLs associated with the Feedback
 */


/**
 * Gets the Feedback's display text. This text is shown to the user after they've submitted a
 * response.
 * 
 * @function FormApp.QuizFeedback#getText
 * 
 * @return {String} the Feedback's text
 */



/**
 * @class FormApp.QuizFeedbackBuilder
 */

/**
 * Adds a link to the feedback's supplemental material.
 * 
 * @function FormApp.QuizFeedbackBuilder#addLink
 * 
 * @param {String} url - the link to display under the display text
 * 
 * @return {FormApp.QuizFeedbackBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>, for chaining
 */


/**
 * Adds a link to the feedback's supplemental material.
 * 
 * @function FormApp.QuizFeedbackBuilder#addLink
 * 
 * @param {String} url - the link to display under the display text
 * @param {String} displayText - the text to display for the link
 * 
 * @return {FormApp.QuizFeedbackBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>, for chaining
 */


/**
 * Builds a Feedback of the corresponding type for this builder.
 * 
 * @function FormApp.QuizFeedbackBuilder#build
 * 
 * @return {FormApp.QuizFeedback} <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback.html'>QuizFeedback</a></code>
 */


/**
 * Returns a copy of this builder.
 * 
 * @function FormApp.QuizFeedbackBuilder#copy
 * 
 * @return {FormApp.QuizFeedbackBuilder} <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>
 */


/**
 * Sets the feedback text.
 * 
 * @function FormApp.QuizFeedbackBuilder#setText
 * 
 * @param {String} text - the new text
 * 
 * @return {FormApp.QuizFeedbackBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>, for chaining
 */



/**
 * @class FormApp.ScaleItem
 */

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this scale item. Throws an exception if the <code>response</code> argument is outside the bounds set for the item.
 * 
 * @function FormApp.ScaleItem#createResponse
 * 
 * @param {IntegerNum} response - a value answer for this scale item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.ScaleItem#duplicate
 * 
 * @return {FormApp.ScaleItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.ScaleItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ScaleItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.ScaleItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.ScaleItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the label for the scale's lower bound, if any.
 * 
 * @function FormApp.ScaleItem#getLeftLabel
 * 
 * @return {String} the label for the scale's lower bound
 */


/**
 * Gets the scale's lower bound.
 * 
 * @function FormApp.ScaleItem#getLowerBound
 * 
 * @return {IntegerNum} the scale's lower bound
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.ScaleItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the label for the scale's upper bound, if any.
 * 
 * @function FormApp.ScaleItem#getRightLabel
 * 
 * @return {String} the label for the scale's upper bound
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ScaleItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.ScaleItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Gets the scale's upper bound.
 * 
 * @function FormApp.ScaleItem#getUpperBound
 * 
 * @return {IntegerNum} the scale's upper bound
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.ScaleItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the scale's lower and upper bounds. The lower bound must be <code>0</code> or <code>1</code>. The
 * upper bound must be between <code>3</code> and <code>10</code>, inclusive. A new scale defaults to a
 * lower bound of <code>1</code> and an upper bound of <code>5</code>.
 * 
 * <p>Throws a scripting exception if the given values are outside the permitted limits. Decimals
 * are truncated to the preceding integer.
 * 
 * @function FormApp.ScaleItem#setBounds
 * 
 * @param {IntegerNum} lower - the new lower bound
 * @param {IntegerNum} upper - the new upper bound
 * 
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.ScaleItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.ScaleItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */


/**
 * Sets labels for the scale's lower and upper bounds.
 * 
 * @function FormApp.ScaleItem#setLabels
 * 
 * @param {String} lower - the new label for the lower bound
 * @param {String} upper - the new label for the upper bound
 * 
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.ScaleItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.ScaleItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.ScaleItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.ScaleItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.ScaleItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
 */



/**
 * @class FormApp.SectionHeaderItem
 */

/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.SectionHeaderItem#duplicate
 * 
 * @return {FormApp.SectionHeaderItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.SectionHeaderItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.SectionHeaderItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.SectionHeaderItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.SectionHeaderItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.SectionHeaderItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.SectionHeaderItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.SectionHeaderItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.SectionHeaderItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.SectionHeaderItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
 */



/**
 * @class FormApp.TextItem
 */

/**
 * Removes any data validation for this text item.
 * 
 * @function FormApp.TextItem#clearValidation
 * 
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */


/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this text item.
 * 
 * @function FormApp.TextItem#createResponse
 * 
 * @param {String} response - an answer to the question posed by the item
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.TextItem#duplicate
 * 
 * @return {FormApp.TextItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.TextItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.TextItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.TextItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.TextItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.TextItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.TextItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.TextItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.TextItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.TextItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.TextItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.TextItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.TextItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.TextItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.TextItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */


/**
 * Sets the data validation for this text item. Passing in null or a validation without any
 * require functions called will remove any prior validation.
 * 
 * @function FormApp.TextItem#setValidation
 * 
 * @param {FormApp.TextValidation} validation - a TextValidation to apply to this item.
 * 
 * @return {FormApp.TextItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
 */



/**
 * @class FormApp.TextValidation
 */


/**
 * @class FormApp.TextValidationBuilder
 */

/**
 * Requires text item to be a number.
 * 
 * @function FormApp.TextValidationBuilder#requireNumber
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number between start and end, inclusive.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberBetween
 * 
 * @param {Number} start - the lower bounds of the inclusive range
 * @param {Number} end - the upper bounds of the inclusive range
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number equal to value specified.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberEqualTo
 * 
 * @param {Number} number - the value which the item must be equal to.
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number greater than the value specified.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberGreaterThan
 * 
 * @param {Number} number - the value which the item must be greater than.
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number greater than or equal to the value specified.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberGreaterThanOrEqualTo
 * 
 * @param {Number} number - the value which the item must be greater than or equal to.
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number less than the value specified.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberLessThan
 * 
 * @param {Number} number - the value which the item must be greater than.
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number less than or equal to the value specified.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberLessThanOrEqualTo
 * 
 * @param {Number} number - the value which the item must be less than or equal to.
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number not between start and end, inclusive.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberNotBetween
 * 
 * @param {Number} start - the lower bounds of the inclusive range
 * @param {Number} end - the upper bounds of the inclusive range
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a number not equal to the value specified.
 * 
 * @function FormApp.TextValidationBuilder#requireNumberNotEqualTo
 * 
 * @param {Number} number - the value which the item must not be equal to.
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires response to contain pattern.
 * 
 * @function FormApp.TextValidationBuilder#requireTextContainsPattern
 * 
 * @param {String} pattern - text must contain pattern
 * 
 * @return {FormApp.TextValidationBuilder} this for chaining
 */


/**
 * Requires response to not contain pattern.
 * 
 * @function FormApp.TextValidationBuilder#requireTextDoesNotContainPattern
 * 
 * @param {String} pattern - text must not contain pattern
 * 
 * @return {FormApp.TextValidationBuilder} this for chaining
 */


/**
 * Requires response to not match pattern.
 * 
 * @function FormApp.TextValidationBuilder#requireTextDoesNotMatchPattern
 * 
 * @param {String} pattern - text must not match pattern
 * 
 * @return {FormApp.TextValidationBuilder} this for chaining
 */


/**
 * Requires text item to be an email address.
 * 
 * @function FormApp.TextValidationBuilder#requireTextIsEmail
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires text item to be a URL.
 * 
 * @function FormApp.TextValidationBuilder#requireTextIsUrl
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */


/**
 * Requires response length to be greater than or equal to value.
 * 
 * @function FormApp.TextValidationBuilder#requireTextLengthGreaterThanOrEqualTo
 * 
 * @param {IntegerNum} number - paragraph text length must be greater than this value
 * 
 * @return {FormApp.TextValidationBuilder} this for chaining
 */


/**
 * Requires response length to be less than value.
 * 
 * @function FormApp.TextValidationBuilder#requireTextLengthLessThanOrEqualTo
 * 
 * @param {IntegerNum} number - paragraph text length must be less than or equal to this value
 * 
 * @return {FormApp.TextValidationBuilder} this for chaining
 */


/**
 * Requires response to match pattern.
 * 
 * @function FormApp.TextValidationBuilder#requireTextMatchesPattern
 * 
 * @param {String} pattern - text must match pattern
 * 
 * @return {FormApp.TextValidationBuilder} this for chaining
 */


/**
 * Requires text item to be a whole number.
 * 
 * @function FormApp.TextValidationBuilder#requireWholeNumber
 * 
 * @return {FormApp.TextValidationBuilder} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
 */



/**
 * @class FormApp.TimeItem
 */

/**
 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this time item. The arguments <code>hour</code> and <code>minute</code> are best represented as integers from <code>0</code> to <code>23</code> and from <code>0</code> to
 * <code>59</code>, respectively. If they exceed those bounds, they behave as a clock would: for
 * example, <code>10, 90</code> is interpreted as 11:30, and <code>-1, 60</code> is intepreted as 00:00.
 * 
 * @function FormApp.TimeItem#createResponse
 * 
 * @param {IntegerNum} hour - the hour, represented as an integer from <code>0</code> to <code>23</code>
 * @param {IntegerNum} minute - the minute of the hour, represented as an integer from <code>0</code> to <code>59</code>
 * 
 * @return {FormApp.ItemResponse} the item response
 */


/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.TimeItem#duplicate
 * 
 * @return {FormApp.TimeItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */


/**
 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
 * 
 * @function FormApp.TimeItem#getGeneralFeedback
 * 
 * @return {FormApp.QuizFeedback} the feedback, if any.
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.TimeItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.TimeItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.TimeItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Returns the point value of a gradeable item.
 * 
 * @function FormApp.TimeItem#getPoints
 * 
 * @return {IntegerNum} the number of points a question is worth.
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.TimeItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.TimeItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Determines whether the respondent must answer the question.
 * 
 * @function FormApp.TimeItem#isRequired
 * 
 * @return {Boolean} whether the respondent must answer the question
 */


/**
 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
 * 
 * @function FormApp.TimeItem#setGeneralFeedback
 * 
 * @param {FormApp.QuizFeedback} feedback - the new feedback
 * 
 * @return {FormApp.TimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.TimeItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.TimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */


/**
 * Sets the number of points a gradeable item is worth. The default for new items is 0.
 * 
 * @function FormApp.TimeItem#setPoints
 * 
 * @param {IntegerNum} points - the number of a points a question item is worth
 * 
 * @return {FormApp.TimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */


/**
 * Sets whether the respondent must answer the question.
 * 
 * @function FormApp.TimeItem#setRequired
 * 
 * @param {Boolean} enabled - whether the respondent must answer the question
 * 
 * @return {FormApp.TimeItem} the current item (for chaining)
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.TimeItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.TimeItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
 */



/**
 * @class FormApp.VideoItem
 */

/**
 * Creates a copy of this item and appends it to the end of the form.
 * 
 * @function FormApp.VideoItem#duplicate
 * 
 * @return {FormApp.VideoItem} a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */


/**
 * Gets the video's horizontal alignment.
 * 
 * @function FormApp.VideoItem#getAlignment
 * 
 * @return {FormApp.Alignment} the horizontal alignment
 */


/**
 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.VideoItem#getHelpText
 * 
 * @return {String} the item's help text or description text
 */


/**
 * Gets the item's unique identifier.
 * 
 * @function FormApp.VideoItem#getId
 * 
 * @return {IntegerNum} the item's ID
 */


/**
 * Gets the index of the item among all the items in the form.
 * 
 * @function FormApp.VideoItem#getIndex
 * 
 * @return {IntegerNum} the index of the item
 */


/**
 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.VideoItem#getTitle
 * 
 * @return {String} the item's title or header text
 */


/**
 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
 * 
 * @function FormApp.VideoItem#getType
 * 
 * @return {FormApp.ItemType} the item's type
 */


/**
 * Gets the video's width in pixels.
 * 
 * @function FormApp.VideoItem#getWidth
 * 
 * @return {IntegerNum} the width in pixels
 */


/**
 * Sets the video's horizontal alignment.
 * 
 * @function FormApp.VideoItem#setAlignment
 * 
 * @param {FormApp.Alignment} alignment - the horizontal alignment
 * 
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */


/**
 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
 * 
 * @function FormApp.VideoItem#setHelpText
 * 
 * @param {String} text - the new help text
 * 
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */


/**
 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
 * 
 * @function FormApp.VideoItem#setTitle
 * 
 * @param {String} title - the new title or header text
 * 
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */


/**
 * Sets the video itself from a given YouTube URL or YouTube video ID.
 * 
 * @function FormApp.VideoItem#setVideoUrl
 * 
 * @param {String} youtubeUrl - the YouTube URL or ID
 * 
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */


/**
 * Sets the video's width in pixels. Only the video's width can be set. Height is set
 * automatically to maintain the video's proportions.
 * 
 * @function FormApp.VideoItem#setWidth
 * 
 * @param {IntegerNum} width - the width in pixels
 * 
 * @return {FormApp.VideoItem} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
 */



