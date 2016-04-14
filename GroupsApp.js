var GroupsApp = {};


/**
 * 

 */
GroupsApp.Role = function(){};

/**
 * A user who has been invited to join a group by an owner or manager of the
 group but who has not yet accepted the invitation.
 *
 * @type {{}}
 */
GroupsApp.Role.prototype.INVITED = {};

/**
 * The manager of a group.
 *
 * @type {{}}
 */
GroupsApp.Role.prototype.MANAGER = {};

/**
 * A user who is a member of this group but is neither an owner nor a manager.
 *
 * @type {{}}
 */
GroupsApp.Role.prototype.MEMBER = {};

/**
 * The owner of a group.
 *
 * @type {{}}
 */
GroupsApp.Role.prototype.OWNER = {};

/**
 * A user who has requested to join a group but who has not yet been approved
 by an owner or manager.
 *
 * @type {{}}
 */
GroupsApp.Role.prototype.PENDING = {};

/**
 * Retrieves the group having the specified email address. Throws an exception
 if the group does not exist or if you do not have permission to see it.

 Here is an example that gets a group by its email address and outputs
 whether the current user is a member. Before running, replace the sample
 email address with a real group's email.
 <pre class="prettyprint">
 <code>
   var group = GroupsApp.getGroupByEmail(&quot;example@googlegroups.com&quot;);
   var currentUser = Session.getActiveUser();
   if (group.hasUser(currentUser)) {
     Logger.log(&quot;You are a member of this group.&quot;);
   }
   else {
     Logger.log(&quot;You are not a member of this group.&quot;);
   }
 </code></pre>
 *
 * @param {String} email - the email address of the group to retrieve
 *
 * @return {GroupsApp.Group} the group with the specified email address
 */
GroupsApp.getGroupByEmail = function(email){};

/**
 * Retrieves all the groups of which you are a direct member. This will be an
 empty list if you are not in any groups. Throws an exception if the group
 does not exist or if you do not have permission to see it.

 Here's an example of how to print the email address for every group the user belongs to:
 <pre class="prettyprint">
 <code>
   function showMyGroups() {
     var groups = GroupsApp.getGroups();
     var s = &#39;You are in &#39; + groups.length + &#39; groups: &#39;;
     for (var i = 0; i &lt; groups.length; i++) {
       var group = groups[i];
       s = s + group.getEmail() + &#39; &#39;;
     }
     Logger.log(s);
   }
 </code></pre>

 Note that if you are a member of a group, B, which is itself a member of
 another group, A, then you are <em>indirectly</em> subscribed to group A.
 Even though you receive copies of messages sent to the "parent" group A,
 you are not actually subscribed to that group.
 *
 * @return {GroupsApp.Group[]} the list of groups of which the user is a direct member
 */
GroupsApp.getGroups = function(){};

/** @constructor */
GroupsApp.Group = function(){};

/**
 * Gets this group's email address.

 This example lists the email address of all the groups the user belongs
 to.
 <pre class="prettyprint">
 <code>
   function listMyGroupEmails() {
     var groups = GroupsApp.getGroups();
     for (var i = 0; i &lt; groups.length; i++) {
       Logger.log(groups[i].getEmail());
     }
   }
 </code></pre>
 *
 * @return {String} the group's email address
 */
GroupsApp.Group.prototype.getEmail = function(){};

/**
 * Retrieves a user's role in the context of the group. A user who is a direct
 member of a group has exactly one role within that group. Throws an
 exception if the user is not a member of the group or if you do not have
 permission to view the group's member list.

 This example lists the owners of a group:
 <pre class="prettyprint">
 <code>
   var group = GroupsApp.getGroupByEmail(&quot;example@googlegroups.com&quot;);
   var users = group.getUsers();
   Logger.log(&#39;These are the group owners:&#39;);
   for (var i = 0; i &lt; users.length; i++) {
     var user = users[i];
     if (group.getRole(user) == GroupsApp.Role.OWNER) {
       Logger.log(user.getEmail());
     }
   }
 </code></pre>
 *
 * @param {User} user - the user whose role to retrieve
 *
 * @return {GroupsApp.Role} that user's role within the group
 */
GroupsApp.Group.prototype.getRole = function(user){};

/**
 * Retrieves all the direct members of the group. Throws an exception if you
 do not have permission to view the group's member list.

 Note: if you are a member of a group B which is itself a member of another
 group A then you are <em>indirectly</em> subscribed to group A. Although
 you receive copies of messages sent to it, you are not actually subscribed
 to the parent group A.

 Here's an example which shows the members of a group. Before running it,
 replace the email address of the group with that of one on your domain.
 <pre class="prettyprint">
 <code>
   function listGroupMembers() {
     var GROUP_EMAIL = &quot;example@googlegroups.com&quot;;
     var group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
     var users = group.getUsers();
     var s = &quot;Group &quot; + GROUP_EMAIL + &quot; has &quot; + users.length +
     &quot; members: &quot;;
     for (var i = 0; i &lt; users.length; i++) {
       var user = users[i];
       s = s + user.getEmail() + &quot;, &quot;;
     }
     Logger.log(s);
   }
 </code></pre>
 *
 * @return {User[]} all the direct members of the group
 */
GroupsApp.Group.prototype.getUsers = function(){};

/**
 * Tests if a user is a direct member of the group. Throws an exception if you
 do not have permission to view the group's member list.

 Here's an example which checks if the current user is a member of a group:
 <pre class="prettyprint">
 <code>
   var group = GroupsApp.getGroupByEmail(&quot;example@googlegroups.com&quot;);
   var currentUser = Session.getActiveUser();
   if (group.hasUser(currentUser)) {
     Logger.log(&quot;You are a member&quot;);
   }
 </code></pre>
 *
 * @param {User} user - the user whose membership to test
 *
 * @return {Boolean} true if that user is a member of the group
 */
GroupsApp.Group.prototype.hasUser = function(user){};

