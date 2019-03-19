/**********************************************
 * @namespace ContactsApp
 ***********************************************/

/**
 * @class ContactsApp
 */

/**
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField
 */
/**
 * @typedef {ContactsApp.Field} ContactsApp.Field
 */
/**
 * @typedef {ContactsApp.Gender} ContactsApp.Gender
 */
/**
 * @typedef {Month} ContactsApp.Month
 */
/**
 * @typedef {ContactsApp.Priority} ContactsApp.Priority
 */
/**
 * @typedef {ContactsApp.Sensitivity} ContactsApp.Sensitivity
 */
/**
 * Creates a new contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new contact with the name &quot;John Doe&quot; and the email address
 * // &quot;john.doe@example.com&quot;.
 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.createContact
 * 
 * @param {String} givenName - the first name of the contact
 * @param {String} familyName - the last name of the contact
 * @param {String} email - the email address of the contact
 * 
 * @return {ContactsApp.Contact} the newly created Contact object
 */


/**
 * Creates a contact group with the given name
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new contact group named &quot;Work Friends&quot;
 * var group = ContactsApp.createContactGroup(&quot;Work Friends&quot;);
 * </code></pre>
 * 
 * @function ContactsApp.createContactGroup
 * 
 * @param {String} name - the name of the new contact group
 * 
 * @return {ContactsApp.ContactGroup} the newly created contact group
 */


/**
 * Deletes the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact with the email address &quot;john.doe@example.com&quot;
 * // and then deletes that contact.
 * var contact = ContactsApp.getContact(&#39;john.doe@example.com&#39;);
 * ContactsApp.deleteContact(contact);
 * </code></pre>
 * 
 * @function ContactsApp.deleteContact
 * 
 * @param {ContactsApp.Contact} contact - the contact to be deleted
 * 
 * @return void
 */


/**
 * Deletes the contact group
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates deletes the contact group named &quot;Work Friends&quot;
 * var group = ContactsApp.getContactGroup(&quot;Work Friends&quot;);
 * ContactsApp.deleteContactGroup(group);
 * </code></pre>
 * 
 * @function ContactsApp.deleteContactGroup
 * 
 * @param {ContactsApp.ContactGroup} group - the contact group to delete
 * 
 * @return void
 */


/**
 * Finds a Contact with the given email address.
 * 
 * @function ContactsApp.findByEmailAddress
 * @deprecated
 * 
 * @param {String} email - the email address of the contact to be found
 * 
 * @return {ContactsApp.Contact} the Contact containing that email address
 */


/**
 * Finds a contact group of the given name.
 * 
 * @function ContactsApp.findContactGroup
 * @deprecated
 * 
 * @param {String} name - the name of the contact group to find
 * 
 * @return {ContactsApp.ContactGroup} the contact group matching the given name
 */


/**
 * Get all the contacts belonging to this user.
 * 
 * @function ContactsApp.getAllContacts
 * @deprecated
 * 
 * @return {ContactsApp.Contact[]} all the contacts for this user
 */


/**
 * Gets a contact by the email address.
 * 
 * <p>If multiple contacts share the same email address, the method favors those contacts who have
 * marked the email address as primary; if none of the contacts had the email address marked as
 * primary or multiple contacts had the email address marked as primary, then it returns the first
 * result in the sorted contacts order.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact with the email address &quot;john.doe@example.com&quot;.
 * var contact = ContactsApp.getContact(&#39;john.doe@example.com&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContact
 * 
 * @param {String} emailAddress - the email address of the contact
 * 
 * @return {ContactsApp.Contact} the contact containing that email address
 */


/**
 * Gets the contact with this id.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves the contact with the id
 * // &quot;http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34ca5&quot;
 * var id = &#39;http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34c&#39;;
 * var contact = ContactApp.getContactById(id);
 * </code></pre>
 * 
 * @function ContactsApp.getContactById
 * 
 * @param {String} id - the id of the contact to retrieve
 * 
 * @return {ContactsApp.Contact} the matching contact or null
 */


/**
 * Gets a contact group with the given name, or returns null if no such contact group is found.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns the contact group with the name &quot;Work Friends&quot;
 * var group  = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactGroup
 * 
 * @param {String} name - the name of the contact group to match
 * 
 * @return {ContactsApp.ContactGroup} the matching contact group or null if no matching contact group is found
 */


/**
 * Gets a contact group with the given id, or returns null if no such contact group is found.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns the contact group with the id
 * // &quot;http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb&quot;
 * var id = &quot;http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb&quot;;
 * var group  = ContactsApp.getContactGroupById(id);
 * </code></pre>
 * 
 * @function ContactsApp.getContactGroupById
 * 
 * @param {String} id - the id of the contact group to match
 * 
 * @return {ContactsApp.ContactGroup} the matching contact group or null if no matching contact group is found
 */


/**
 * Gets the complete list of the user's contact groups.
 * 
 * <p>A user can have a list of Contacts, and potentially a list of Contact Groups also. Each
 * Contact Group can contain Contacts. This method returns a list of all the Contact Groups.
 * 
 * <pre class="prettyprint"><code>
 * // The retrieves all the contract groups for the user and then logs the group name of each
 * // contact group.
 * var groups  = ContactsApp.getContactGroups();
 * for (var i = 0; i &lt; groups.length; i++) {
 *   Logger.log(groups[i].getName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.getContactGroups
 * 
 * @return {ContactsApp.ContactGroup[]} an array of the user's contact groups
 */


/**
 * Gets all of the user's contacts.
 * 
 * <pre class="prettyprint"><code>
 * // The code below will retrieve all the user&#39;s contacts
 * var contacts = ContactsApp.getContacts();
 * </code></pre>
 * 
 * @function ContactsApp.getContacts
 * 
 * @return {ContactsApp.Contact[]} an array of all the user's contacts
 */


/**
 * Get contacts matching an address.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s address contains
 * // &quot;San Francisco&#39;.
 * var contacts = ContactsApp.getContactsByAddress(&#39;San Francisco&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByAddress
 * 
 * @param {String} query - the string to search for in contact's addresses
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an address, limited to a specific field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s address contains
 * // &quot;San Francisco&quot; in the Home address field.
 * var contacts = ContactsApp.getContactsByAddress(&#39;San Francisco&#39;,
 *                                                 ContactsApp.Field.HOME_ADDRESS);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByAddress
 * 
 * @param {String} query - the string to search for in contact's addresses
 * @param {ContactsApp.Field} label - the field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an address, limited to the specified custom address label.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s address contains
 * // &quot;San Francisco&quot; in a custom address label (created by the user) called
 * // &quot;vacation&quot;.
 * var contacts = ContactsApp.getContactsByAddress(&#39;San Francisco&#39;, &#39;vacation&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByAddress
 * 
 * @param {String} query - the string to search for in contact's addresses with the specified custom address
 *     label
 * @param {String} label - the custom address label to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching the company field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s company field
 * // contains &quot;Google&quot;.
 * var contacts = ContactsApp.getContactsByCompany(&#39;Google&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByCompany
 * 
 * @param {String} query - the string to search for in contact's company field
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a given value in a custom field.
 * 
 * <p>The custom field can be specified by a String or as one of the ContactsApp.ExtendedField
 * values.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s custom field
 * // named &quot;Favorite Sport&quot; contains &quot;tennis&quot;.
 * var contacts = ContactsApp.getContactsByCustomField(&#39;tennis&#39;, &#39;Favorite Sport&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByCustomField
 * 
 * @param {Object} query - the string to search for in contact's custom field
 * @param {ContactsApp.ExtendedField} label - the custom field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a given month and day for a particular standard field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s &quot;Birthday&quot; field
 * // contains April for the month and 19 for the day.
 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19,
 *                                               ContactsApp.Field.BIRTHDAY);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByDate
 * 
 * @param {Month} month - the month to match, as one of the values from ContactsApp.Month
 * @param {IntegerNum} day - the day to match
 * @param {ContactsApp.Field} label - the field to search within, from ContactsApp.Field
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a given month, day, and year for a particular standard field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s &quot;Birthday&quot; field
 * // contains April for the month, 19 for the day, and 1950 for the year.
 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 1950,
 *                                              ContactsApp.Field.BIRTHDAY);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByDate
 * 
 * @param {Month} month - the month to match, as one of the values from ContactsApp.Month
 * @param {IntegerNum} day - the day to match
 * @param {IntegerNum} year - the year to match, can be null
 * @param {ContactsApp.Field} label - the field to search within, from ContactsApp.Field
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a given month, day, and year for a particular custom field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s custom &quot;Start Date&quot; field
 * // contains April for the month, 19 for the day, and 2011 for the year.
 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 2011, &#39;Start Date&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByDate
 * 
 * @param {Month} month - the month to match, as one of the values from ContactsApp.Month
 * @param {IntegerNum} day - the day to match
 * @param {IntegerNum} year - the year to match, can be null
 * @param {String} label - the custom field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a given month and day for a particular custom field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s custom &quot;Start Date&quot; field
 * // contains April for the month and 19 for the day.
 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, &#39;Start Date&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByDate
 * 
 * @param {Month} month - the month to match, as one of the values from ContactsApp.Month
 * @param {IntegerNum} day - the day to match
 * @param {String} label - the custom field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an email address.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s email address contains
 * // &quot;john.doe@example.com&#39;.
 * var contacts = ContactsApp.getContactsByEmailAddress(&#39;john.doe@example.com&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByEmailAddress
 * 
 * @param {String} query - the string to search for in contact email addresses
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an email address, limited to a specific field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s email address contains
 * // &quot;john.doe@example.com&quot; in the Home email field.
 * var contacts = ContactsApp.getContactsByEmailAddress(&#39;john.doe@example.com&#39;,
 *                                                      ContactsApp.Field.HOME_EMAIL);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByEmailAddress
 * 
 * @param {String} query - the string to search for in contact email addresses
 * @param {ContactsApp.Field} label - the field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an email address, limited to the specified custom email address label.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s email address contains
 * // &quot;john.doe@example.com&quot; in a custom email address label (created by the user) called
 * // &quot;alternate&quot;.
 * var contacts = ContactsApp.getContactsByEmailAddress(&#39;john.doe@example.com&#39;, &#39;alternate&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByEmailAddress
 * 
 * @param {String} query - the string to search for in contact email addresses with the specified custom
 *     email address label
 * @param {String} label - the custom email address label to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get the contacts in a given ContactGroup.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts in the ContactGroup with the name
 * // &quot;Work Friends&quot;.
 * var group  = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * var contacts = ContactsApp.getContactsByGroup(group);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByGroup
 * 
 * @param {ContactsApp.ContactGroup} group - the group of contacts
 * 
 * @return {ContactsApp.Contact[]} an array of of contacts in the given group
 */


/**
 * Get contacts matching an instant messaging address.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s instant messaging address
 * // contains &quot;ChatWithJohnDoe&quot; in any instant messaging field.
 * var contacts = ContactsApp.getContactsByIM(&#39;ChatWithJohnDoe&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByIM
 * 
 * @param {String} query - the string to search for in contact's instant messaging addresses
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an instant messaging address, limited to a specific field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s instant messaging address
 * // contains &quot;ChatWithJohnDoe&quot; in the AIM instant messaging field.
 * var contacts = ContactsApp.getContactsByIM(&#39;ChatWithJohnDoe&#39;,
 *                                             ContactsApp.Field.AIM);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByIM
 * 
 * @param {String} query - the string to search for in contact's instant messaging addresses
 * @param {ContactsApp.Field} label - the field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching an instant messaging address, limited to the specified custom instant
 * messaging label.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s instant messaging address
 * // contains &quot;ChatWithJohnDoe&quot; in a custom instant messaging label (created by the user) called
 * // &quot;eBuddy&quot;.
 * var contacts = ContactsApp.getContactsByIM(&#39;ChatWithJohnDoe&#39;, &#39;eBuddy&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByIM
 * 
 * @param {String} query - the string to search for in contact's instant messaging addresses with the
 *     specified custom instant messaging label
 * @param {String} label - the custom instant messaging label to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching the job title field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s job title field
 * // contains &quot;Product Manager&quot;.
 * var contacts = ContactsApp.getContactsByJobTitle(&#39;Product Manager&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByJobTitle
 * 
 * @param {String} query - the string to search for in contact's job title field
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact name contains &quot;John&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByName
 * 
 * @param {String} query - the string to search for in contact names
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a name, limited to a specific field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact name contains &quot;John&quot;
 * // in the Given Name field.
 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;, ContactsApp.Field.GIVEN_NAME);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByName
 * 
 * @param {String} query - the string to search for in contact names
 * @param {ContactsApp.Field} label - the field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching the notes field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s notes field
 * // contains &quot;sent birthday card&quot;.
 * var contacts = ContactsApp.getContactsByNotes(&#39;sent birthday card&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByNotes
 * 
 * @param {String} query - the string to search for in contact's notes field
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a phone number.
 * 
 * <p>This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
 * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
 * contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s phone number contains
 * // &quot;212-555-1234&#39; in any phone number field.
 * var contacts = ContactsApp.getContactsByPhone(&#39;212-555-1234&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByPhone
 * 
 * @param {String} query - the string to search for in contact's phone numbers
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a phone number, limited to a specific field.
 * 
 * <p>This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
 * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
 * contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s phone number contains
 * // &quot;212-555-1234&quot; in the Home phone number field.
 * var contacts = ContactsApp.getContactsByPhone(&#39;212-555-1234&#39;,
 *                                               ContactsApp.Field.HOME_PHONE);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByPhone
 * 
 * @param {String} query - the string to search for in contact's phone numbers
 * @param {ContactsApp.Field} label - the field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a phone number, limited to the specified custom phone number label.
 * 
 * <p>This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
 * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
 * contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s phone number contains
 * // &quot;212-555-1234&quot; in a custom phone number label (created by the user) called
 * // &quot;alternate&quot;.
 * var contacts = ContactsApp.getContactsByPhone(&#39;212-555-1234&#39;, &#39;alternate&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByPhone
 * 
 * @param {String} query - the string to search for in contact's phone numbers with the specified custom
 *     phone number label
 * @param {String} label - the custom phone number label to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a URL.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s URL contains
 * // &quot;www.example.com&#39; in any URL field.
 * var contacts = ContactsApp.getContactsByUrl(&#39;www.example.com&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByUrl
 * 
 * @param {String} query - the string to search for in contact's URLs
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a URL, limited to a specific field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s URL contains
 * // &quot;www.example.com&quot; in the Work URL field.
 * var contacts = ContactsApp.getContactsByUrl(&#39;www.example.com&#39;,
 *                                             ContactsApp.Field.WORK_WEBSITE);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByUrl
 * 
 * @param {String} query - the string to search for in contact's URLs
 * @param {ContactsApp.Field} label - the field to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */


/**
 * Get contacts matching a URL, limited to the specified custom URL label.
 * 
 * <pre class="prettyprint"><code>
 * // The code below returns an array of contacts where the contact&#39;s URL contains
 * // &quot;www.example.com&quot; in a custom URL label (created by the user) called
 * // &quot;alternate work&quot;.
 * var contacts = ContactsApp.getContactsByUrl(&#39;www.example.com&#39;, &#39;alternate work&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.getContactsByUrl
 * 
 * @param {String} query - the string to search for in contact's URLs with the specified custom URL label
 * @param {String} label - the custom URL label to search within
 * 
 * @return {ContactsApp.Contact[]} an array of matching contacts
 */



/**
 * @class ContactsApp.AddressField
 */

/**
 * Deletes this address field.
 * 
 * <pre class="prettyprint"><code>
 * // The code below deletes the home addresses for a contact named &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddresses = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * for (var i in homeAddresses) {
 *   homeAddresses[i].deleteAddressField();
 * }
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#deleteAddressField
 * 
 * @return void
 */


/**
 * Get the address for this field.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * Logger.log(homeAddress[0].getAddress());
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#getAddress
 * 
 * @return {String} the address as a string
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Gets whether this is the primary field value.
 * 
 * <pre class="prettyprint"><code>
 * // Logs whether or not the first address field associated with contact
 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
 * // for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * Logger.log(addressFields[0].isPrimary());
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#isPrimary
 * 
 * @return {Boolean} whether this is primary
 */


/**
 * Sets the address of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#setAddress
 * 
 * @param {String} address - the new address
 * 
 * @return {ContactsApp.AddressField} this field, useful for chaining
 */


/**
 * Sets this field to primary.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the the first address field associated with contact &#39;John Doe&#39;
 * // as primary. This method can be similarly called for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setAsPrimary();
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#setAsPrimary
 * 
 * @return {ContactsApp.AddressField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Work&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#setLabel
 * 
 * @param {ContactsApp.Field} field - the new standard label
 * 
 * @return {ContactsApp.AddressField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.AddressField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.AddressField} this field, useful for chaining
 */



/**
 * @class ContactsApp.CompanyField
 */

/**
 * Deletes this company field.
 * 
 * <pre class="prettyprint"><code>
 * // Deletes the first company associated with contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var company = contacts[0].getCompanies()[0];
 * company.deleteCompanyField();
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#deleteCompanyField
 * 
 * @return void
 */


/**
 * Gets the company name.
 * 
 * <pre class="prettyprint"><code>
 * // Logs company name for all companies associated with contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var companies = contacts[0].getCompanies();
 * for (var i in companies) {
 *   Logger.log(companies[i].getCompanyName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#getCompanyName
 * 
 * @return {String} the name of the company
 */


/**
 * Gets the job title.
 * 
 * <pre class="prettyprint"><code>
 * // Logs job title for all companies associated with contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var companies = contacts[0].getCompanies();
 * for (var i in companies) {
 *   Logger.log(companies[i].getJobTitle());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#getJobTitle
 * 
 * @return {String} the job title
 */


/**
 * Gets whether this is the primary company.
 * 
 * <pre class="prettyprint"><code>
 * // Logs true or false depending on whether each company is the primary
 * // company for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var companies = contacts[0].getCompanies();
 * for (var i in companies) {
 *   Logger.log(companies[i].isPrimary());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#isPrimary
 * 
 * @return {Boolean} whether this is primary
 */


/**
 * Sets this company as the primary company, and unsets whatever company was previously primary.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the first company associated with contact &#39;John Doe&#39; as primary
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var company = contacts[0].getCompanies()[0];
 * company.setAsPrimary();
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#setAsPrimary
 * 
 * @return {ContactsApp.CompanyField} this company field, useful for chaining
 */


/**
 * Sets the company name.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the company name for the first company associated with contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var company = contacts[0].getCompanies()[0];
 * company.setCompanyName(&#39;ACME Corp&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#setCompanyName
 * 
 * @param {String} company - the new name for the company
 * 
 * @return {ContactsApp.CompanyField} this company field, useful for chaining
 */


/**
 * Sets the job title.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the job title for the first company associated with contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var company = contacts[0].getCompanies()[0];
 * company.setJobTitle(&#39;Manager&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.CompanyField#setJobTitle
 * 
 * @param {String} title - the new job title for the contact at this company
 * 
 * @return {ContactsApp.CompanyField} this company field, useful for chaining
 */



/**
 * @class ContactsApp.Contact
 */

/**
 * Adds an address to the contact with either a standard or custom label.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the address
 * // &quot;123 Main St, Some City, NY 10011&quot; with the the ContactsApp.Field.WORK_ADDRESS label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var address = contacts[0].addAddress(ContactsApp.Field.WORK_ADDRESS,
 *                                     &#39;123 Main St, Some City, NY 10011&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addAddress
 * 
 * @param {Object} label - the label of the new address, either from ContactsApp.Field or a custom string
 * @param {String} address - the new address
 * 
 * @return {ContactsApp.AddressField} the newly created field
 */


/**
 * Adds a company to the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the company &quot;Google&quot; and the
 * // job title &quot;Product Manager&quot;.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var url = contacts[0].addCompany(&#39;Google&#39;, &#39;Product Manager&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addCompany
 * 
 * @param {String} company - the name of the company to add to this contact
 * @param {String} title - the job title associated with this contact for this company
 * 
 * @return {ContactsApp.CompanyField} the newly created field
 */


/**
 * Adds a custom field to the contact with either an extended or custom label.
 * 
 * <p>The label can be either from ContactsApp.ExtendedField or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the custom field
 * // ContactsApp.ExtendedField.HOBBY with the value &quot;hiking&quot;.
 * // Note that ContactsApp.ExtendedField.HOBBY is not the same as a custom field named &#39;HOBBY&#39;.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * contacts[0].addCustomField(ContactsApp.ExtendedField.HOBBY, &#39;hiking&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addCustomField
 * 
 * @param {Object} label - the label of the new address, either from ContactsApp.ExtendedField or a custom
 *     string
 * @param {Object} content - the value to store in the custom field
 * 
 * @return {ContactsApp.CustomField} the newly created field
 */


/**
 * Adds a date to the contact with either an standard or custom label.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds a
 * // ContactsApp.ExtendedField.BIRTHDAY with the value &quot;April 19, 1950&quot;.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthday = contacts[0].addDate(ContactsApp.Field.BIRTHDAY,
 *                                    ContactsApp.Month.APRIL, 19, 1950);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addDate
 * 
 * @param {Object} label - the label of the new date, either from ContactsApp.Field or a custom string
 * @param {Month} month - the month, from ContactApps.Month
 * @param {IntegerNum} day - the day
 * @param {IntegerNum} year - the year
 * 
 * @return {ContactsApp.DateField} the newly created date
 */


/**
 * Add an email address with a standard label (home, work, etc.) or a custom label
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the email address
 * // &quot;j.doe@example.com&quot; to the ContactsApp.Field.HOME_EMAIL label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var emailField = contacts[0].addEmail(ContactsApp.Field.HOME_EMAIL, &#39;j.doe@example.com&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addEmail
 * 
 * @param {Object} label - the label of the new email, either from ContactsApp.Field or a custom string
 * @param {String} address - the new email address
 * 
 * @return {ContactsApp.EmailField} the newly added field
 */


/**
 * Adds an IM address to the contact with either a standard or custom label.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the IM address &quot;ChatWithJohn&quot;
 * // with the the ContactsApp.Field.AIM label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var email = contacts[0].addIM(ContactsApp.Field.AIM, &#39;ChatWithJohn&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addIM
 * 
 * @param {Object} label - the label of the new IM address, either from ContactsApp.Field or a custom string
 * @param {String} address - the new IM address
 * 
 * @return {ContactsApp.IMField} the newly created field
 */


/**
 * Adds a phone number to the contact with either a standard or custom label.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the phone number
 * // &quot;212-555-1234&quot; with the the ContactsApp.Field.WORK_PHONE label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var phone = contacts[0].addPhone(ContactsApp.Field.WORK_PHONE, &#39;212-555-1234&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addPhone
 * 
 * @param {Object} label - the label of the new phone number, either from ContactsApp.Field or a custom
 *     string
 * @param {String} number - the new phone number
 * 
 * @return {ContactsApp.PhoneField} the newly created field
 */


/**
 * Adds this contact to the given contact group.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new contact and then adds it to the contact group named
 * // &quot;Work Friends&quot;
 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * contact = contact.addToGroup(group);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addToGroup
 * 
 * @param {ContactsApp.ContactGroup} group - the contact group to add this contact to
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Adds a URL to the contact with either a standard or custom label.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the URL
 * // &quot;http://www.example.com&quot; with the the ContactsApp.Field.WORK_WEBSITE label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var url = contacts[0].addUrl(ContactsApp.Field.WORK_WEBSITE, &#39;http://www.example.com&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.Contact#addUrl
 * 
 * @param {Object} label - the label of the new address, either from ContactsApp.Field or a custom string
 * @param {String} url - the new URL
 * 
 * @return {ContactsApp.UrlField} the newly created field
 */


/**
 * Deletes this contact.
 * 
 * <pre class="prettyprint"><code>
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].deleteContact();
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#deleteContact
 * 
 * @return void
 */


/**
 * Gets all the addresses for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the addresses of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getAddresses());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getAddresses
 * 
 * @return {ContactsApp.AddressField[]} a list of addresses
 */


/**
 * Gets all the addresses for this contact matching a particular field.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the addresses
 * // associated with that contact that are in the ContactsApp.Field.WORK_ADDRESS label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addresses = contacts[0].getAddresses(ContactsApp.Field.WORK_ADDRESS);
 * for (var i in addresses) {
 *   Logger.log(addresses[i].getAddress());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getAddresses
 * 
 * @param {Object} label - the label to match, either from ContactsApp.Field or a custom string
 * 
 * @return {ContactsApp.AddressField[]} a list of addresses
 */


/**
 * Gets all the companies for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the company names of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   var companies = contacts[i].getCompanies();
 *   for (var j in companies) {
 *     Logger.log(companies[j].getCompanyName());
 *   }
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getCompanies
 * 
 * @return {ContactsApp.CompanyField[]} a list of companies
 */


/**
 * Gets all the contact groups that contain this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below gets a contact named &quot;John Doe&quot; and retrieves all the contact groups that
 * // the contact belongs to
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var groups = contacts[0].getContactGroups();
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getContactGroups
 * 
 * @return {ContactsApp.ContactGroup[]} the groups containing this contact
 */


/**
 * Gets all the custom fields for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the custom fields
 * // associated with that contact
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var fields = contacts[0].getCustomFields();
 * for (var i in fields) {
 *   Logger.log(fields[i].getValue());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getCustomFields
 * 
 * @return {ContactsApp.CustomField[]} a list of custom fields
 */


/**
 * Gets all the custom fields for this contact matching a particular field.
 * 
 * <p>The label can be either a standard label from ContactsApp.ExtendedField or a custom label
 * string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the custom fields
 * // associated with that contact that are in the ContactsApp.ExtendedField.HOBBY label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var hobbies = contacts[0].getCustomFields(ContactsApp.ExtendedField.HOBBY);
 * for (var i in hobbies) {
 *   Logger.log(hobbies[i].getValue());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getCustomFields
 * 
 * @param {Object} label - the label to match, either from ContactsApp.ExtendedField or a custom string
 * 
 * @return {ContactsApp.CustomField[]} a list of custom fields
 */


/**
 * Gets all the dates for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the label of the date
 * // associated with that contact
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var dates = contacts[0].getDates();
 * for (var i in dates) {
 *   Logger.log(dates[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getDates
 * 
 * @return {ContactsApp.DateField[]} a list of dates
 */


/**
 * Gets all the dates for this contact matching a particular field.
 * 
 * <p>The label can be either a standard label from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the day of the month
 * // associated with that contact that are in the ContactsApp.Field.BIRTHDAY label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthdays = contacts[0].getDates(ContactsApp.Field.BIRTHDAY);
 * for (var i in birthdays) {
 *   Logger.log(birthdays[i].getDay());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getDates
 * 
 * @param {Object} label - the label to match, either from ContactsApp.Field or a custom string
 * 
 * @return {ContactsApp.DateField[]} a list of dates
 */


/**
 * Gets a list of the email addresses available for this Contact.
 * 
 * @function ContactsApp.Contact#getEmailAddresses
 * @deprecated
 * 
 * @return {String[]} a list of email addresses available for this Contact
 */


/**
 * Gets the email addresses of this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the email addresses
 * // associated with that contact
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var emails = contacts[0].getEmails();
 * for (var i in emails) {
 *   Logger.log(emails[i].getAddress());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getEmails
 * 
 * @return {ContactsApp.EmailField[]} the list of email addresses for the the contact
 */


/**
 * Gets the email addresses for this contact matching a particular field.
 * 
 * <p>The label can be either a standard label from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the email addresses
 * // associated with that contact that are in the ContactsApp.Field.HOME_EMAIL label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var emails = contacts[0].getEmails(ContactsApp.Field.HOME_EMAIL);
 * for (var i in emails) {
 *   Logger.log(emails[i].getAddress());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getEmails
 * 
 * @param {Object} label - the label to match, either from ContactsApp.Field or a custom string
 * 
 * @return {ContactsApp.EmailField[]} the list of email addresses for the the contact
 */


/**
 * Gets the family name (last name) of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the family name of all the contacts whose names contain &quot;John&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getFamilyName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getFamilyName
 * 
 * @return {String} the family name of the contact
 */


/**
 * Gets the full name (given name and last name) of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the full name of all the contacts whose names contain &quot;John&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getFullName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getFullName
 * 
 * @return {String} the full name of the contact
 */


/**
 * Gets the given name (first name) of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the given name of all the contacts whose names contain &quot;Smith&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Smith&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getGivenName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getGivenName
 * 
 * @return {String} the given name of the contact
 */


/**
 * Gets the home address of this Contact, or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getHomeAddress
 * @deprecated
 * 
 * @return {String} the home address of this Contact, or empty string if none exists
 */


/**
 * Gets the home fax number of this Contact or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getHomeFax
 * @deprecated
 * 
 * @return {String} the home fax number of this Contact or empty string if none exists
 */


/**
 * Gets the home phone number of this Contact or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getHomePhone
 * @deprecated
 * 
 * @return {String} the home phone number of this Contact or empty string if none exists
 */


/**
 * Gets all the IM addresses for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the IM addresses of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getIMs());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getIMs
 * 
 * @return {ContactsApp.IMField[]} a list of IM addresses
 */


/**
 * Gets all the IM addresses for this contact matching a particular field.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the IM addresses
 * // associated with that contact that are in the ContactsApp.Field.GOOGLE_TALK label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var imAddresses = contacts[0].getIMs(ContactsApp.Field.GOOGLE_TALK);
 * for (var i in imAddresses) {
 *   Logger.log(imAddresses[i].getAddress());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getIMs
 * 
 * @param {Object} label - the label to match, either from ContactsApp.Field or a custom string
 * 
 * @return {ContactsApp.IMField[]} a list of IM addresses
 */


/**
 * Returns the unique id of this contact.
 * 
 * <pre class="prettyprint"><code>
 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
 * var id = contact.getId();
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getId
 * 
 * @return {String} the id of this contact
 */


/**
 * Gets the contact's initials.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the initials of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getInitials());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getInitials
 * 
 * @return {String} the initials of the contact
 */


/**
 * Gets the date this contact was last updated.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the last updated date of all the contacts whose names contain
 * // &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getLastUpdated());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getLastUpdated
 * 
 * @return {Date} the date this contact was last updated
 */


/**
 * Gets the maiden name of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the maiden name of all the contacts whose names contain &quot;Jane&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Jane&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getMaidenName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getMaidenName
 * 
 * @return {String} the maiden name of the contact
 */


/**
 * Gets the middle name of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the middle name of all the contacts whose names contain &quot;Smith&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Smith&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getMiddleName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getMiddleName
 * 
 * @return {String} the middle name of the contact
 */


/**
 * Gets the mobile phone number of this Contact or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getMobilePhone
 * @deprecated
 * 
 * @return {String} the mobile phone number of this Contact or empty string if none exists
 */


/**
 * Gets the nickname of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the nickname of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getNickname());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getNickname
 * 
 * @return {String} the nickname of the contact
 */


/**
 * Gets the notes associated with this contact, or an empty string if there are no notes.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the notes of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getNotes());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getNotes
 * 
 * @return {String} the notes associated with this contact
 */


/**
 * Gets the pager phone number of this Contact or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getPager
 * @deprecated
 * 
 * @return {String} the pager phone number of this Contact or empty string if none exists
 */


/**
 * Gets all the phone numbers for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the phone numbers of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getPhones());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getPhones
 * 
 * @return {ContactsApp.PhoneField[]} a list of phone numbers
 */


/**
 * Gets all the phone numbers for this contact matching a particular field.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the phone numbers
 * // associated with that contact that are in the ContactsApp.Field.WORK_PHONE label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var phones = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
 * for (var i in phones) {
 *   Logger.log(phones[i].getPhoneNumber());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getPhones
 * 
 * @param {Object} label - the label to match, either from ContactsApp.Field or a custom string
 * 
 * @return {ContactsApp.PhoneField[]} a list of phone numbers
 */


/**
 * Gets the prefix to the contact's name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the prefix of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getPrefix());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getPrefix
 * 
 * @return {String} the prefix of the contact's name
 */


/**
 * Gets the primary email address of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the primary email address of all the contacts whose names contain
 * // &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getPrimaryEmail());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getPrimaryEmail
 * 
 * @return {String} the primary email address of the contact
 */


/**
 * Gets the short name of the contact as a string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the short name of all the contacts whose names contain &quot;Johnathan&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getShortName());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getShortName
 * 
 * @return {String} the short name of the contact
 */


/**
 * Gets the suffix to the contact's name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the suffix of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getSuffix());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getSuffix
 * 
 * @return {String} the suffix of the contact's name
 */


/**
 * Gets all the URLs for this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below logs the URLs of all the contacts whose names contain &quot;John Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   Logger.log(contacts[i].getUrls());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getUrls
 * 
 * @return {ContactsApp.UrlField[]} a list of URLs
 */


/**
 * Gets all the URLs for this contact matching a particular field.
 * 
 * <p>The label can be either from ContactsApp.Field or a custom label string.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the URLs
 * // associated with that contact that are in the ContactsApp.Field.WORK_WEBSITE label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var urls = contacts[0].getUrls(ContactsApp.Field.WORK_WEBSITE);
 * for (var i in urls) {
 *   Logger.log(urls[i].getAddress());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#getUrls
 * 
 * @param {Object} label - the label to match, either from ContactsApp.Field or a custom string
 * 
 * @return {ContactsApp.UrlField[]} a list of URLs
 */


/**
 * Gets the user defined value associated with the given key.
 * 
 * @function ContactsApp.Contact#getUserDefinedField
 * @deprecated
 * 
 * @param {String} key - the key can be any basic type (String, int, etc.)
 * 
 * @return {String} the user defined content that has been stored with this key
 */


/**
 * Gets all the user defined fields for this Contact and returns them as the properties of a
 * JavaScript Object.
 * 
 * @function ContactsApp.Contact#getUserDefinedFields
 * @deprecated
 * 
 * @return {Object} the user defined fields for this Contact, as properties of a JavaScript Object
 */


/**
 * Gets the work address of this Contact, or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getWorkAddress
 * @deprecated
 * 
 * @return {String} the work address of this Contact, or empty string if none exists
 */


/**
 * Gets the work fax number of this Contact or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getWorkFax
 * @deprecated
 * 
 * @return {String} the work fax number of this Contact or empty string if none exists
 */


/**
 * Gets the work phone number of this Contact or empty string if none exists.
 * 
 * @function ContactsApp.Contact#getWorkPhone
 * @deprecated
 * 
 * @return {String} the work phone number of this Contact or empty string if none exists
 */


/**
 * Removes this contact from the given contact group.
 * 
 * <pre class="prettyprint"><code>
 * // The code below gets all the contacts named &quot;John Doe&quot; and then removes each of them from
 * // the &quot;Work Friends&quot; contact group
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * for (var i in contacts) {
 *   contacts[i] = contacts[i].removeFromGroup(group);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#removeFromGroup
 * 
 * @param {ContactsApp.ContactGroup} group - the contact group to remove this contact from
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the family name (last name) of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the family name of all the contacts whose names are &quot;John Doe&quot;
 * // to &quot;Doe-Smith&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setFamilyName(&#39;Doe-Smith&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setFamilyName
 * 
 * @param {String} familyName - the new family name of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the full name (given name and last name) of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the full name of all the contacts whose names are &quot;John Doe&quot;
 * // to &quot;Johnny Doe&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setFullName(&#39;Johnny Doe&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setFullName
 * 
 * @param {String} fullName - the new full name of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the given name (first name) of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the given name of all the contacts whose names are &quot;John Doe&quot;
 * // to &quot;Johnny&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setGivenName(&#39;Johnny&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setGivenName
 * 
 * @param {String} givenName - the new given name of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the home address of this Contact.
 * 
 * @function ContactsApp.Contact#setHomeAddress
 * @deprecated
 * 
 * @param {String} addr - the home address to set
 * 
 * @return void
 */


/**
 * Sets the home fax number of this Contact.
 * 
 * @function ContactsApp.Contact#setHomeFax
 * @deprecated
 * 
 * @param {String} phone - the home fax number to set
 * 
 * @return void
 */


/**
 * Sets the home phone number of this Contact.
 * 
 * @function ContactsApp.Contact#setHomePhone
 * @deprecated
 * 
 * @param {String} phone - the home phone number to set
 * 
 * @return void
 */


/**
 * Sets the contact's initials.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets the initials of all the contacts whose names are &quot;Johnathan Doe&quot;
 * // to &quot;JD&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setInitials(&#39;JD&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setInitials
 * 
 * @param {String} initials - the new initials of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the maiden name of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the maiden name of all the contacts whose names are &quot;Jane Doe&quot;
 * // to &quot;Smith&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Jane Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setMaidenName(&#39;Smith&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setMaidenName
 * 
 * @param {String} maidenName - the new maiden name of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the middle name of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the middle name of all the contacts whose names are &quot;John Doe&quot;
 * // to &quot;Danger&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setMiddleName(&#39;Danger&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setMiddleName
 * 
 * @param {String} middleName - the new middle name of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the mobile phone number of this Contact.
 * 
 * @function ContactsApp.Contact#setMobilePhone
 * @deprecated
 * 
 * @param {String} phone - the mobile phone number to set
 * 
 * @return void
 */


/**
 * Sets the nickname of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the nickname of all the contacts whose names are &quot;John Doe&quot;
 * // to &quot;JohnnyD&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setNickname(&#39;JohnnyD&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setNickname
 * 
 * @param {String} nickname - the new nickname of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the notes associated with this contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets the notes of all the contacts whose names are &quot;John Doe&quot;
 * // to &quot;Met him at the hackathon&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setNotes(&#39;Met him at the hackathon&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setNotes
 * 
 * @param {String} notes - the notes to be stored for this contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the pager number of this Contact.
 * 
 * @function ContactsApp.Contact#setPager
 * @deprecated
 * 
 * @param {String} phone - the pager number to set
 * 
 * @return void
 */


/**
 * Sets the prefix to the contact's name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets the prefix of all the contacts whose names are &quot;Johnathan Doe&quot;
 * // to &quot;Mr&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setPrefix(&#39;Mr&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setPrefix
 * 
 * @param {String} prefix - the new prefix of the contact's name
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the primary email address of this Contact.
 * 
 * @function ContactsApp.Contact#setPrimaryEmail
 * @deprecated
 * 
 * @param {String} primaryEmail - the primary email address to set
 * 
 * @return void
 */


/**
 * Sets the short name of the contact.
 * 
 * <pre class="prettyprint"><code>
 * // The code below changes the short name of all the contacts whose names are &quot;Johnathan Doe&quot;
 * // to &quot;John&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setShortName(&#39;John&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setShortName
 * 
 * @param {String} shortName - the new short name of the contact
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets the suffix to the contact's name.
 * 
 * <pre class="prettyprint"><code>
 * // The code below sets the suffix of all the contacts whose names are &quot;Johnathan Doe&quot;
 * // to &quot;Jr&quot;
 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
 * for (var i in contacts) {
 *   contacts[i].setSuffix(&#39;Jr&#39;);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.Contact#setSuffix
 * 
 * @param {String} suffix - the new suffix of the contact's name
 * 
 * @return {ContactsApp.Contact} this contact
 */


/**
 * Sets a single user defined field for this Contact, to be stored with a given key.
 * 
 * @function ContactsApp.Contact#setUserDefinedField
 * @deprecated
 * 
 * @param {String} key - the key can be any basic type (String, int, etc.)
 * @param {String} value - the value can be any basic type (String, int, etc.)
 * 
 * @return void
 */


/**
 * Sets the user defined fields for this Contact with the properties of the given Object.
 * 
 * @function ContactsApp.Contact#setUserDefinedFields
 * @deprecated
 * 
 * @param {Object} o - an Object with one or more properties in the form {key: value}
 * 
 * @return void
 */


/**
 * Sets the work address of this Contact.
 * 
 * @function ContactsApp.Contact#setWorkAddress
 * @deprecated
 * 
 * @param {String} addr - the work address to set
 * 
 * @return void
 */


/**
 * Sets the work fax number of this Contact.
 * 
 * @function ContactsApp.Contact#setWorkFax
 * @deprecated
 * 
 * @param {String} phone - the work fax number to set
 * 
 * @return void
 */


/**
 * Sets the work phone number of this Contact.
 * 
 * @function ContactsApp.Contact#setWorkPhone
 * @deprecated
 * 
 * @param {String} phone - the work phone number to set
 * 
 * @return void
 */



/**
 * @class ContactsApp.ContactGroup
 */

/**
 * Adds the given contact to this group
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new contact and adds it to the &quot;Work Friends&quot; contact group
 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * group.addContact(contact);
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#addContact
 * 
 * @param {ContactsApp.Contact} contact - the contact to be added to the group
 * 
 * @return {ContactsApp.ContactGroup} this contact group
 */


/**
 * Deletes this contact group.
 * 
 * <p>Deletes non-system groups only; system groups cannot be deleted.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact group named &quot;Work Friends&quot; and deletes it
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * group.deleteGroup();
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#deleteGroup
 * 
 * @return void
 */


/**
 * Gets all the contacts in this contact group.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves all the contacts in the group named &quot;Work Friends&quot;
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * var contacts = group.getContacts();
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#getContacts
 * 
 * @return {ContactsApp.Contact[]} the contacts in this group
 */


/**
 * Returns the name of this group.
 * 
 * @function ContactsApp.ContactGroup#getGroupName
 * @deprecated
 * 
 * @return {String} the name of this group
 */


/**
 * Gets the id of this contact group.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves a contact group named &quot;Work Friends&quot; and gets its id
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * var id = group.getId();
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#getId
 * 
 * @return {String} the id of this group
 */


/**
 * Gets the name of this contact group.
 * 
 * <pre class="prettyprint"><code>
 * // The code below creates a new contact group and then retrieves its name
 * var group = ContactsApp.createContactGroup(&#39;Work Friends&#39;);
 * var name = group.getName();
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#getName
 * 
 * @return {String} this name of this contact group
 */


/**
 * Gets a boolean value to determine whether this contact group is a system group (undeletable) or
 * not.
 * 
 * <p>Systems groups are a set of groups that are predefined in Google Contacts, such as "My
 * Contacts", "Family", "Coworkers", etc. The name of a system group usually contains the words
 * "System Group".
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves two contact groups, then logs whether or not
 * // each is a system group.
 * var myGroup = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * var systemGroup = ContactsApp.getContactGroup(&#39;System Group: Coworkers&#39;);
 * Logger.log(myGroup.isSystemGroup()); // Returns false, if the group exists.
 * Logger.log(systemGroup.isSystemGroup()); // Returns true.
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#isSystemGroup
 * 
 * @return {Boolean} whether or not this contact group is a system group
 */


/**
 * Removes the given contact from this group
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves all the contacts named &quot;John Doe&#39; and removes them from the
 * // &quot;Work Friends&quot; contact group
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * for (var i in contacts) {
 *   group.removeContact(contacts[i]);
 * }
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#removeContact
 * 
 * @param {ContactsApp.Contact} contact - the contact to be removed from the group
 * 
 * @return {ContactsApp.ContactGroup} this contact group
 */


/**
 * Sets the name of this group.
 * 
 * @function ContactsApp.ContactGroup#setGroupName
 * @deprecated
 * 
 * @param {String} name - the name to set for this group
 * 
 * @return void
 */


/**
 * Sets the name of this contact group.
 * 
 * <pre class="prettyprint"><code>
 * // The code below retrieves the contact group named &quot;Work Friends&quot; and renames it to
 * // &quot;Work Buddies&quot;
 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
 * group.setName(&#39;Work Buddies&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.ContactGroup#setName
 * 
 * @param {String} name - the new name for the contact group
 * 
 * @return {ContactsApp.ContactGroup} this contact group
 */



/**
 * @class ContactsApp.CustomField
 */

/**
 * Deletes this field.
 * 
 * <pre class="prettyprint"><code>
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var fields = contacts[0].getCustomFields();
 * for (var i = 0; i &lt; fields.length; i++) {
 *   if (fields[i].getLabel() == &#39;foo&#39;) {
 *     fields[i].deleteCustomField();
 *   }
 * }
 * </code></pre>
 * 
 * @function ContactsApp.CustomField#deleteCustomField
 * 
 * @return void
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.CustomField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Gets the value of the field.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the value of all the custom fields for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var fields = contacts[0].getCustomFields();
 * for (var i in fields) {
 *   Logger.log(fields[i].getValue());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.CustomField#getValue
 * 
 * @return {Object} the value stored in the field
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the first custom field associated with contact &#39;John Doe&#39; to use &#39;Mail application&#39; as
 * // a label, with &#39;Gmail&#39; as the value.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var field = contacts[0].getCustomFields()[0];
 * field.setLabel(&#39;Mail application&#39;);
 * field.setValue(&#39;Gmail&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.CustomField#setLabel
 * 
 * @param {ContactsApp.ExtendedField} field - the new standard label
 * 
 * @return {ContactsApp.CustomField} this field, useful for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.CustomField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.CustomField} this field, useful for chaining
 */


/**
 * Sets the value of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the first custom field associated with contact &#39;John Doe&#39; to use &#39;Mail application&#39; as
 * // a label, with &#39;Gmail&#39; as the value.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var field = contacts[0].getCustomFields()[0];
 * field.setLabel(&#39;Mail application&#39;);
 * field.setValue(&#39;Gmail&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.CustomField#setValue
 * 
 * @param {Object} value - the new value
 * 
 * @return {ContactsApp.CustomField} this field, useful for chaining
 */



/**
 * @class ContactsApp.DateField
 */

/**
 * Deletes this date.
 * 
 * <pre class="prettyprint"><code>
 * // Deletes all the dates that are set for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var dates = contacts[0].getDates();
 * for (var i = 0; i &lt; dates.length; i++) {
 *   dates[i].deleteDateField();
 * }
 * </code></pre>
 * 
 * @function ContactsApp.DateField#deleteDateField
 * 
 * @return void
 */


/**
 * Gets the day of the month for this date.
 * 
 * <p>Note: For standard JavaScript Date objects the <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay">
 * <code>getDay()</code></a> method returns the day of the week instead.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the day of the birthday for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
 * Logger.log(birthday.getDay());
 * </code></pre>
 * 
 * @function ContactsApp.DateField#getDay
 * 
 * @return {IntegerNum} the day of the month
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.DateField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Gets the month for this date.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the month of the birthday for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
 * Logger.log(birthday.getMonth());
 * </code></pre>
 * 
 * @function ContactsApp.DateField#getMonth
 * 
 * @return {Month} the month
 */


/**
 * Gets the year for this date.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the year of the birthday for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
 * Logger.log(birthday.getYear());
 * </code></pre>
 * 
 * @function ContactsApp.DateField#getYear
 * 
 * @return {IntegerNum} the year
 */


/**
 * Sets the date to this day, without a year.
 * 
 * <p>This method only applies to date fields that don't require a year, such as birthdays.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the birthday for contact &#39;John Doe&#39; to April 1
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
 * birthday.setDate(ContactsApp.Month.APRIL, 1);
 * </code></pre>
 * 
 * @function ContactsApp.DateField#setDate
 * 
 * @param {Month} month - the month
 * @param {IntegerNum} day - the day
 * 
 * @return {ContactsApp.DateField} this date, useful for chaining
 */


/**
 * Sets the date to this day.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the birthday for contact &#39;John Doe&#39; to April 1, 1980
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
 * birthday.setDate(ContactsApp.Month.APRIL, 1, 1980);
 * </code></pre>
 * 
 * @function ContactsApp.DateField#setDate
 * 
 * @param {Month} month - the month
 * @param {IntegerNum} day - the day
 * @param {IntegerNum} year - the year
 * 
 * @return {ContactsApp.DateField} this date, useful for chaining
 */


/**
 * Sets the label of this field, such as 'Birthday' or 'Anniversary'.
 * 
 * <pre class="prettyprint"><code>
 * // Retrieves the first date that&#39;s set for contact &#39;John Doe&#39; and re-labels
 * // it as an anniversary
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var firstDate = contacts[0].getDates()[0];
 * firstDate.setLabel(ContactsApp.Field.ANNIVERSARY);
 * </code></pre>
 * 
 * @function ContactsApp.DateField#setLabel
 * 
 * @param {ContactsApp.Field} label - the new standard label
 * 
 * @return {ContactsApp.DateField} this field, useful for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.DateField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.DateField} this field, useful for chaining
 */



/**
 * @class ContactsApp.EmailField
 */

/**
 * Deletes this email address from the Contact.
 * 
 * <pre class="prettyprint"><code>
 * // Retrieves and deletes the work email address for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
 * workEmail[0].deleteEmailField();
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#deleteEmailField
 * 
 * @return void
 */


/**
 * Get the address for this field.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * Logger.log(homeAddress[0].getAddress());
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#getAddress
 * 
 * @return {String} the address as a string
 */


/**
 * Returns the display name for this email address.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the display name for the the work email address for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
 * Logger.log(workEmail[0].getDisplayName());
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#getDisplayName
 * 
 * @return {String} the display name for this email
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Gets whether this is the primary field value.
 * 
 * <pre class="prettyprint"><code>
 * // Logs whether or not the first address field associated with contact
 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
 * // for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * Logger.log(addressFields[0].isPrimary());
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#isPrimary
 * 
 * @return {Boolean} whether this is primary
 */


/**
 * Sets the address of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#setAddress
 * 
 * @param {String} address - the new address
 * 
 * @return {ContactsApp.EmailField} this field, useful for chaining
 */


/**
 * Sets this field to primary.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the the first address field associated with contact &#39;John Doe&#39;
 * // as primary. This method can be similarly called for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setAsPrimary();
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#setAsPrimary
 * 
 * @return {ContactsApp.EmailField} this FieldValue for chaining
 */


/**
 * Sets the display name for this email address.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the display name to &#39;Doe, John&#39; for the the work email address for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
 * workEmail[0].setDisplayName(&#39;Doe, John&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#setDisplayName
 * 
 * @param {String} name - the new display name for this email address
 * 
 * @return {ContactsApp.EmailField} this email field, useful for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Work&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#setLabel
 * 
 * @param {ContactsApp.Field} field - the new standard label
 * 
 * @return {ContactsApp.EmailField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.EmailField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.EmailField} this field, useful for chaining
 */



/**
 * @class ContactsApp.ExtendedField
 */

/**
 * the contact's billing information
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.BILLING_INFORMATION
 */
/**
 * the contact's directory server
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.DIRECTORY_SERVER
 */
/**
 * the contact's gender
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.GENDER
 */
/**
 * the contact's hobby
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.HOBBY
 */
/**
 * the contact's home information
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.HOME
 */
/**
 * the contact's language
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.LANGUAGE
 */
/**
 * the contact's mileage
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.MILEAGE
 */
/**
 * the contact's other information
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.OTHER
 */
/**
 * the contact's priority
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.PRIORITY
 */
/**
 * the contact's sensitivity
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.SENSITIVITY
 */
/**
 * the contact's user information
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.USER
 */
/**
 * the contact's work information
 * 
 * @typedef {ContactsApp.ExtendedField} ContactsApp.ExtendedField.WORK
 */

/**
 * @class ContactsApp.Field
 */

/**
 * the contact's AIM identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.AIM
 */
/**
 * the contact's anniversary
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.ANNIVERSARY
 */
/**
 * the contact's assistant's phone number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.ASSISTANT_PHONE
 */
/**
 * the contact's birthday
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.BIRTHDAY
 */
/**
 * the contact's blog URL
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.BLOG
 */
/**
 * the contact's callback phone number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.CALLBACK_PHONE
 */
/**
 * the contact's company
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.COMPANY
 */
/**
 * the contact's family (last) name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.FAMILY_NAME
 */
/**
 * the contact's FTP URL
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.FTP
 */
/**
 * the contact's full name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.FULL_NAME
 */
/**
 * the contact's given (first) name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.GIVEN_NAME
 */
/**
 * the contact's Google Talk identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.GOOGLE_TALK
 */
/**
 * the contact's Google Voice number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.GOOGLE_VOICE
 */
/**
 * the contact's home address
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.HOME_ADDRESS
 */
/**
 * the contact's home email address
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.HOME_EMAIL
 */
/**
 * the contact's home fax number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.HOME_FAX
 */
/**
 * the contact's home page URL
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.HOME_PAGE
 */
/**
 * the contact's home phone number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.HOME_PHONE
 */
/**
 * the contact's home website URL
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.HOME_WEBSITE
 */
/**
 * the contact's ICQ identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.ICQ
 */
/**
 * the contact's initials
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.INITIALS
 */
/**
 * the contact's Jabber identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.JABBER
 */
/**
 * the contact's job title
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.JOB_TITLE
 */
/**
 * the contact's maiden name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.MAIDEN_NAME
 */
/**
 * the contact's main phone number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.MAIN_PHONE
 */
/**
 * the contact's middle name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.MIDDLE_NAME
 */
/**
 * the contact's mobile phone number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.MOBILE_PHONE
 */
/**
 * the contact's MSN identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.MSN
 */
/**
 * the contact's nickname
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.NICKNAME
 */
/**
 * notes about the contact
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.NOTES
 */
/**
 * the contact's pager number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.PAGER
 */
/**
 * the prefix for the contact's name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.PREFIX
 */
/**
 * the contact's profile URL
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.PROFILE
 */
/**
 * the contact's QQ identifer
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.QQ
 */
/**
 * the contact's short name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.SHORT_NAME
 */
/**
 * the contact's Skype identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.SKYPE
 */
/**
 * the suffix for the contact's name
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.SUFFIX
 */
/**
 * the contact's work address
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.WORK_ADDRESS
 */
/**
 * the contact's work email address
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.WORK_EMAIL
 */
/**
 * the contact's work fax number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.WORK_FAX
 */
/**
 * the contact's work phone number
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.WORK_PHONE
 */
/**
 * the contact's work website URL
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.WORK_WEBSITE
 */
/**
 * the contact's Yahoo instant messaging identifier
 * 
 * @typedef {ContactsApp.Field} ContactsApp.Field.YAHOO
 */

/**
 * @class ContactsApp.Gender
 */

/**
 * female gender
 * 
 * @typedef {ContactsApp.Gender} ContactsApp.Gender.FEMALE
 */
/**
 * male gender
 * 
 * @typedef {ContactsApp.Gender} ContactsApp.Gender.MALE
 */

/**
 * @class ContactsApp.IMField
 */

/**
 * Deletes this instant messaging field.
 * 
 * <pre class="prettyprint"><code>
 * // Retrieves and deletes the AIM instant messaging field for contact &#39;John
 * // Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var imFields = contacts[0].getIMs(ContactsApp.Field.AIM);
 * imFields[0].deleteIMField();
 * </code></pre>
 * 
 * @function ContactsApp.IMField#deleteIMField
 * 
 * @return void
 */


/**
 * Get the address for this field.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * Logger.log(homeAddress[0].getAddress());
 * </code></pre>
 * 
 * @function ContactsApp.IMField#getAddress
 * 
 * @return {String} the address as a string
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.IMField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Gets whether this is the primary field value.
 * 
 * <pre class="prettyprint"><code>
 * // Logs whether or not the first address field associated with contact
 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
 * // for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * Logger.log(addressFields[0].isPrimary());
 * </code></pre>
 * 
 * @function ContactsApp.IMField#isPrimary
 * 
 * @return {Boolean} whether this is primary
 */


/**
 * Sets the address of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.IMField#setAddress
 * 
 * @param {String} address - the new address
 * 
 * @return {ContactsApp.IMField} this field, useful for chaining
 */


/**
 * Sets this field to primary.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the the first address field associated with contact &#39;John Doe&#39;
 * // as primary. This method can be similarly called for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setAsPrimary();
 * </code></pre>
 * 
 * @function ContactsApp.IMField#setAsPrimary
 * 
 * @return {ContactsApp.IMField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Work&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
 * </code></pre>
 * 
 * @function ContactsApp.IMField#setLabel
 * 
 * @param {ContactsApp.Field} field - the new standard label
 * 
 * @return {ContactsApp.IMField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.IMField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.IMField} this field, useful for chaining
 */



/**
 * @class ContactsApp.PhoneField
 */

/**
 * Deletes this phone number field.
 * 
 * <pre class="prettyprint"><code>
 * // Retrieves and deletes the work phone number field for contact &#39;John
 * // Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
 * phoneFields[0].deletePhoneField();
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#deletePhoneField
 * 
 * @return void
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Get the phone number for this field.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the work phone number for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
 * Logger.log(phoneFields[0].getPhoneNumber());
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#getPhoneNumber
 * 
 * @return {String} the number as a string
 */


/**
 * Gets whether this is the primary field value.
 * 
 * <pre class="prettyprint"><code>
 * // Logs whether or not the first address field associated with contact
 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
 * // for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * Logger.log(addressFields[0].isPrimary());
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#isPrimary
 * 
 * @return {Boolean} whether this is primary
 */


/**
 * Sets this field to primary.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the the first address field associated with contact &#39;John Doe&#39;
 * // as primary. This method can be similarly called for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setAsPrimary();
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#setAsPrimary
 * 
 * @return {ContactsApp.PhoneField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Work&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#setLabel
 * 
 * @param {ContactsApp.Field} field - the new standard label
 * 
 * @return {ContactsApp.PhoneField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.PhoneField} this field, useful for chaining
 */


/**
 * Sets the phone number for this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the work phone number for contact &#39;John Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
 * phoneFields[0].setPhoneNumber(&#39;212-555-1234&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.PhoneField#setPhoneNumber
 * 
 * @param {String} number - the new number
 * 
 * @return {ContactsApp.PhoneField} this field, useful for chaining
 */



/**
 * @class ContactsApp.Priority
 */

/**
 * high priority
 * 
 * @typedef {ContactsApp.Priority} ContactsApp.Priority.HIGH
 */
/**
 * low priority
 * 
 * @typedef {ContactsApp.Priority} ContactsApp.Priority.LOW
 */
/**
 * normal priority
 * 
 * @typedef {ContactsApp.Priority} ContactsApp.Priority.NORMAL
 */

/**
 * @class ContactsApp.Sensitivity
 */

/**
 * confidential sensitivity
 * 
 * @typedef {ContactsApp.Sensitivity} ContactsApp.Sensitivity.CONFIDENTIAL
 */
/**
 * normal sensitivity
 * 
 * @typedef {ContactsApp.Sensitivity} ContactsApp.Sensitivity.NORMAL
 */
/**
 * personal sensitivity
 * 
 * @typedef {ContactsApp.Sensitivity} ContactsApp.Sensitivity.PERSONAL
 */
/**
 * private sensitivity
 * 
 * @typedef {ContactsApp.Sensitivity} ContactsApp.Sensitivity.PRIVATE
 */

/**
 * @class ContactsApp.UrlField
 */

/**
 * Deletes this URL field.
 * 
 * <pre class="prettyprint"><code>
 * // Retrieves and deletes the Blog URL field for contact &#39;John
 * // Doe&#39;
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var urlFields = contacts[0].getUrls(ContactsApp.Field.BLOG);
 * urlFields[0].deleteUrlField();
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#deleteUrlField
 * 
 * @return void
 */


/**
 * Get the address for this field.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * Logger.log(homeAddress[0].getAddress());
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#getAddress
 * 
 * @return {String} the address as a string
 */


/**
 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
 * 
 * <pre class="prettyprint"><code>
 * // Logs the label for all the address fields associated with contact
 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
 * // a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * for (var i = 0; i &lt; addressFields.length; i++) {
 *   Logger.log(addressFields[i].getLabel());
 * }
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#getLabel
 * 
 * @return {Object} the label for this field
 */


/**
 * Gets whether this is the primary field value.
 * 
 * <pre class="prettyprint"><code>
 * // Logs whether or not the first address field associated with contact
 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
 * // for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * Logger.log(addressFields[0].isPrimary());
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#isPrimary
 * 
 * @return {Boolean} whether this is primary
 */


/**
 * Sets the address of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
 * // Can be used similarly for other fields that contain addresses.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#setAddress
 * 
 * @param {String} address - the new address
 * 
 * @return {ContactsApp.UrlField} this field, useful for chaining
 */


/**
 * Sets this field to primary.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the the first address field associated with contact &#39;John Doe&#39;
 * // as primary. This method can be similarly called for any field.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setAsPrimary();
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#setAsPrimary
 * 
 * @return {ContactsApp.UrlField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Work&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#setLabel
 * 
 * @param {ContactsApp.Field} field - the new standard label
 * 
 * @return {ContactsApp.UrlField} this FieldValue for chaining
 */


/**
 * Sets the label of this field.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the label to &#39;Apartment&#39; for the first address field associated
 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
 * // field that has a label.
 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
 * var addressFields = contacts[0].getAddresses();
 * addressFields[0].setLabel(&#39;Apartment&#39;);
 * </code></pre>
 * 
 * @function ContactsApp.UrlField#setLabel
 * 
 * @param {String} label - the new label for this field
 * 
 * @return {ContactsApp.UrlField} this field, useful for chaining
 */



