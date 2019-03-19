/**
 * @class PromptResponse
 */

/**
 * Gets the text that the user entered in the dialog's input field. The text is available even if
 * the user closed the dialog by clicking a button with a negative connotation, like "Cancel" or
 * the close button in the dialog's title bar. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/prompt-response.html#getSelectedButton()'>getSelectedButton()</a></code> can help to determine
 * whether the user intended the response text to be valid.
 * 
 * @function PromptResponse#getResponseText
 * 
 * @return {String} The text that the user entered in the dialog's input field.
 */


/**
 * Gets the button that the user clicked to dismiss the dialog. If the user clicked the close
 * button that is included in every dialog's title bar, this method returns <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/button.html#CLOSE'>Button.CLOSE</a></code>.
 * 
 * @function PromptResponse#getSelectedButton
 * 
 * @return {Button} The button that the user clicked.
 */



