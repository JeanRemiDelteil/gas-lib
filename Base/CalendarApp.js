var CalendarApp = {};


/**
 * An enum representing the named colors available in the Calendar service.

 */
CalendarApp.Color = function(){};

/**
 * <div style="background-color: #2952A3; display: inline-block; height: 10px; width: 10px;">
 </div> Blue (<code>#2952A3</code>).
 *
 * @type {{}}
 */
String.prototype.BLUE = {};

/**
 * <div style="background-color: #8D6F47; display: inline-block; height: 10px; width: 10px;">
 </div> Brown (<code>#8D6F47</code>).
 *
 * @type {{}}
 */
String.prototype.BROWN = {};

/**
 * <div style="background-color: #4E5D6C; display: inline-block; height: 10px; width: 10px;">
 </div> Charcoal (<code>#4E5D6C</code>).
 *
 * @type {{}}
 */
String.prototype.CHARCOAL = {};

/**
 * <div style="background-color: #865A5A; display: inline-block; height: 10px; width: 10px;">
 </div> Chestnut (<code>#865A5A</code>).
 *
 * @type {{}}
 */
String.prototype.CHESTNUT = {};

/**
 * <div style="background-color: #5A6986; display: inline-block; height: 10px; width: 10px;">
 </div> Gray (<code>#5A6986</code>).
 *
 * @type {{}}
 */
String.prototype.GRAY = {};

/**
 * <div style="background-color: #0D7813; display: inline-block; height: 10px; width: 10px;">
 </div> Green (<code>#0D7813</code>).
 *
 * @type {{}}
 */
String.prototype.GREEN = {};

/**
 * <div style="background-color: #5229A3; display: inline-block; height: 10px; width: 10px;">
 </div> Indigo (<code>#5229A3</code>).
 *
 * @type {{}}
 */
String.prototype.INDIGO = {};

/**
 * <div style="background-color: #528800; display: inline-block; height: 10px; width: 10px;">
 </div> Lime (<code>#528800</code>).
 *
 * @type {{}}
 */
String.prototype.LIME = {};

/**
 * <div style="background-color: #88880E; display: inline-block; height: 10px; width: 10px;">
 </div> Mustard (<code>#88880E</code>).
 *
 * @type {{}}
 */
String.prototype.MUSTARD = {};

/**
 * <div style="background-color: #6E6E41; display: inline-block; height: 10px; width: 10px;">
 </div> Olive (<code>#6E6E41</code>).
 *
 * @type {{}}
 */
String.prototype.OLIVE = {};

/**
 * <div style="background-color: #BE6D00; display: inline-block; height: 10px; width: 10px;">
 </div> Orange (<code>#BE6D00</code>).
 *
 * @type {{}}
 */
String.prototype.ORANGE = {};

/**
 * <div style="background-color: #B1365F; display: inline-block; height: 10px; width: 10px;">
 </div> Pink (<code>#B1365F</code>).
 *
 * @type {{}}
 */
String.prototype.PINK = {};

/**
 * <div style="background-color: #705770; display: inline-block; height: 10px; width: 10px;">
 </div> Plum (<code>#705770</code>).
 *
 * @type {{}}
 */
String.prototype.PLUM = {};

/**
 * <div style="background-color: #7A367A; display: inline-block; height: 10px; width: 10px;">
 </div> Purple (<code>#7A367A</code>).
 *
 * @type {{}}
 */
String.prototype.PURPLE = {};

/**
 * <div style="background-color: #A32929; display: inline-block; height: 10px; width: 10px;">
 </div> Red (<code>#A32929</code>).
 *
 * @type {{}}
 */
String.prototype.RED = {};

/**
 * <div style="background-color: #B1440E; display: inline-block; height: 10px; width: 10px;">
 </div> Red-Orange (<code>#B1440E</code>).
 *
 * @type {{}}
 */
String.prototype.RED_ORANGE = {};

/**
 * <div style="background-color: #29527A; display: inline-block; height: 10px; width: 10px;">
 </div> Sea Blue (<code>#29527A</code>).
 *
 * @type {{}}
 */
String.prototype.SEA_BLUE = {};

/**
 * <div style="background-color: #4A716C; display: inline-block; height: 10px; width: 10px;">
 </div> Slate (<code>#4A716C</code>).
 *
 * @type {{}}
 */
String.prototype.SLATE = {};

/**
 * <div style="background-color: #28754E; display: inline-block; height: 10px; width: 10px;">
 </div> Teal (<code>#28754E</code>).
 *
 * @type {{}}
 */
String.prototype.TEAL = {};

/**
 * <div style="background-color: #1B887A; display: inline-block; height: 10px; width: 10px;">
 </div> Turquoise (<code>#1B887A</code>).
 *
 * @type {{}}
 */
String.prototype.TURQOISE = {};

/**
 * <div style="background-color: #AB8B00; display: inline-block; height: 10px; width: 10px;">
 </div> Yellow (<code>#AB8B00</code>).
 *
 * @type {{}}
 */
String.prototype.YELLOW = {};

/**
 * An enum representing the statuses a guest can have for an event.

 */
CalendarApp.GuestStatus = function(){};

/**
 * The guest has been invited, but has not indicated whether he or she will attend.
 *
 * @type {{}}
 */
CalendarApp.GuestStatus.prototype.INVITED = {};

/**
 * The guest has indicated he or she might attend.
 *
 * @type {{}}
 */
CalendarApp.GuestStatus.prototype.MAYBE = {};

/**
 * The guest has indicated he or she will not attend.
 *
 * @type {{}}
 */
CalendarApp.GuestStatus.prototype.NO = {};

/**
 * The guest is the owner of the event.
 *
 * @type {{}}
 */
CalendarApp.GuestStatus.prototype.OWNER = {};

/**
 * The guest has indicated he or she will attend.
 *
 * @type {{}}
 */
CalendarApp.GuestStatus.prototype.YES = {};

/**
 * An enum representing the months of the year.

 */
Month = function(){};

/**
 * An enum representing the visibility of an event.

 */
CalendarApp.Visibility = function(){};

/**
 * The event is private. This value is provided for compatibility reasons.
 *
 * @type {{}}
 */
CalendarApp.Visibility.prototype.CONFIDENTIAL = {};

/**
 * Uses the default visibility for events on the calendar.
 *
 * @type {{}}
 */
CalendarApp.Visibility.prototype.DEFAULT = {};

/**
 * The event is private and only event attendees may view event details.
 *
 * @type {{}}
 */
CalendarApp.Visibility.prototype.PRIVATE = {};

/**
 * The event is public and event details are visible to all readers of the calendar.
 *
 * @type {{}}
 */
CalendarApp.Visibility.prototype.PUBLIC = {};

/**
 * An enum representing the days of the week.

 */
Weekday = function(){};

/**
 * Creates a new all-day event.

 <pre class="prettyprint">
 <code>
 // Creates an all-day event for the moon landing and logs the ID.
 var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
     new Date(&#39;July 20, 1969&#39;));
 Logger.log(&#39;Event ID: &#39; + event.getId());
 </code></pre>
 *
 * @param {String} title - the title of the event
 * @param {Date} date - the date of the event (only the day is used; the time is ignored)
 *
 * @return {CalendarApp.CalendarEvent} the created event
 */
CalendarApp.createAllDayEvent = function(title, date){};

/**
 * Creates a new all-day event series.

 <pre class="prettyprint">
 <code>
 // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
     CalendarApp.newRecurrence().addWeeklyRule()
         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
         .until(new Date(&#39;January 1, 2014&#39;)));
 Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 </code></pre>
 *
 * @param {String} title - the title of the events in the series
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
     ignored)
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 *
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */
CalendarApp.createAllDayEventSeries = function(title, startDate, recurrence){};

/**
 * Creates a new calendar, owned by the user.

 <pre class="prettyprint">
 <code>
 // Creates a new calendar named &quot;Travel Plans&quot;.
 var calendar = CalendarApp.createCalendar(&#39;Travel Plans&#39;);
 Logger.log(&#39;Created the calendar &quot;%s&quot;, with the ID &quot;%s&quot;.&#39;,
     calendar.getName(), calendar.getId());
 </code></pre>
 *
 * @param {String} name - the name of the new calendar
 *
 * @return {CalendarApp.Calendar} the newly created calendar
 */
CalendarApp.createCalendar = function(name){};

/**
 * Creates a new event.

 <p>If no time zone is specified, the time values are interpreted in the context of the
 script's time zone, which may be different than the calendar's time zone.

 <pre class="prettyprint">
 <code>
 // Creates an event for the moon landing and logs the ID.
 var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
     new Date(&#39;July 21, 1969 21:00:00 UTC&#39;));
 Logger.log(&#39;Event ID: &#39; + event.getId());
 </code></pre>
 *
 * @param {String} title - the title of the event
 * @param {Date} startTime - the date and time when the event starts
 * @param {Date} endTime - the date and time when the event ends
 *
 * @return {CalendarApp.CalendarEvent} the created event
 */
CalendarApp.createEvent = function(title, startTime, endTime){};

/**
 * Creates an event from a free-form description.

 <p>The description should use the same format as the UI's
 <a href="http://support.google.com/calendar/answer/36604?hl=en">"Quick Add"</a>
 feature.

 <pre class="prettyprint">
 <code>
 // Creates a new event and logs its ID.
 var event = CalendarApp.getDefaultCalendar()
     .createEventFromDescription(&#39;Lunch with Mary, Friday at 1PM&#39;);
 Logger.log(&#39;Event ID: &#39; + event.getId());
 </code></pre>
 *
 * @param {String} description - a free-form description of the event
 *
 * @return {CalendarApp.CalendarEvent} the created event
 */
CalendarApp.createEventFromDescription = function(description){};

/**
 * Creates a new event series.

 <pre class="prettyprint">
 <code>
 // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
 var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
     CalendarApp.newRecurrence().addWeeklyRule()
         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
         .until(new Date(&#39;January 1, 2014&#39;)));
 Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 </code></pre>
 *
 * @param {String} title - the title of the events in the series
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 *
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */
CalendarApp.createEventSeries = function(title, startTime, endTime, recurrence){};

/**
 * Gets all calendars that the user owns or is subscribed to.

 <pre class="prettyprint">
 <code>
 // Determines how many calendars the user can access.
 var calendars = CalendarApp.getAllCalendars();
 Logger.log(&#39;This user owns or is subscribed to %s calendars.&#39;,
     calendars.length);
 </code></pre>
 *
 * @return {CalendarApp.Calendar[]} all calendars that the user can access
 */
CalendarApp.getAllCalendars = function(){};

/**
 * Gets all calendars that the user owns.

 <pre class="prettyprint">
 <code>
 // Determines how many calendars the user owns.
 var calendars = CalendarApp.getAllOwnedCalendars();
 Logger.log(&#39;This user owns %s calendars.&#39;, calendars.length);
 </code></pre>
 *
 * @return {CalendarApp.Calendar[]} all calendars that the user owns
 */
CalendarApp.getAllOwnedCalendars = function(){};

/**
 * Gets the calendar with the given ID.

 <pre class="prettyprint">
 <code>
 // Gets the public calendar &quot;US Holidays&quot; by ID.
 var calendar = CalendarApp.getCalendarById(
     &#39;en.usa#holiday@group.v.calendar.google.com&#39;);
 Logger.log(&#39;The calendar is named &quot;%s&quot;.&#39;, calendar.getName());
 </code></pre>
 *
 * @param {String} id - the calendar ID
 *
 * @return {CalendarApp.Calendar} the calendar with the given ID, or <code>null</code> if the calendar does not exist or the
     user cannot access it
 */
CalendarApp.getCalendarById = function(id){};

/**
 * Gets all calendars with a given name that the user owns or is subscribed to. Names are not
 case-sensitive.

 <pre class="prettyprint">
 <code>
 // Gets the public calendar named &quot;US Holidays&quot;.
 var calendars = CalendarApp.getCalendarsByName(&#39;US Holidays&#39;);
 Logger.log(&#39;Found %s matching calendars.&#39;, calendars.length);
 </code></pre>
 *
 * @param {String} name - the calendar name
 *
 * @return {CalendarApp.Calendar[]} all calendars with this name that the user can access
 */
CalendarApp.getCalendarsByName = function(name){};

/**
 * Gets the color of the calendar.
 *
 * @return {String} a hexadecimal color string ("#rrggbb")
 */
CalendarApp.getColor = function(){};

/**
 * Gets the user's default calendar.

 <pre class="prettyprint">
 <code>
 // Determines the time zone of the user&#39;s default calendar.
 var calendar = CalendarApp.getDefaultCalendar();
 Logger.log(&#39;My default calendar is set to the time zone &quot;%s&quot;.&#39;,
     calendar.getTimeZone());
 </code></pre>
 *
 * @return {CalendarApp.Calendar} the user's default calendar
 */
CalendarApp.getDefaultCalendar = function(){};

/**
 * Gets the description of the calendar.
 *
 * @return {String} the description of this calendar
 */
CalendarApp.getDescription = function(){};

/**
 * Gets the event series with the given ID. If the ID given is for a single <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code>,
 then a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> will be returned with a single event in the series. Note
 that if the event series belongs to a calendar other than the default calendar, this method
 must be called from that <code>Calendar</code>; calling <code>CalendarApp.getEventSeriesById(id)</code>
 directly will only return an event series that exists in the default calendar.
 *
 * @param {String} iCalId - ID of the event series
 *
 * @return {CalendarApp.CalendarEventSeries} the series with the given ID, or <code>null</code> if the series doesn't exist or the user
     cannot access it
 */
CalendarApp.getEventSeriesById = function(iCalId){};

/**
 * Gets all events that occur within a given time range.

 <p>An event will be returned if it starts during the time range, ends during the time range, or
 encompasses the time range. If no time zone is specified, the time values are interpreted in
 the context of the script's time zone, which may be different from the calendar's time zone.

 <pre class="prettyprint">
 <code>
 // Determines how many events are happening in the next two hours.
 var now = new Date();
 var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
 Logger.log(&#39;Number of events: &#39; + events.length);
 </code></pre>
 *
 * @param {Date} startTime - the start of the time range
 * @param {Date} endTime - the end of the time range, non-inclusive
 *
 * @return {CalendarApp.CalendarEvent[]} the events that occur within the time range
 */
CalendarApp.getEvents = function(startTime, endTime){};

/**
 * Gets all events that occur on a given day.

 <p>An event will be returned if it starts during the day, ends during the day, or encompasses
 the day.

 <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
 The date is interpreted as midnight that day to midnight the next day in the calendar's
 time zone.

 <pre class="prettyprint">
 <code>
 // Determines how many events are happening today.
 var today = new Date();
 var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
 Logger.log(&#39;Number of events: &#39; + events.length);
 </code></pre>
 *
 * @param {Date} date - the date to retrieve events for (only the day is used; the time is ignored)
 *
 * @return {CalendarApp.CalendarEvent[]} the events that occur on the given date
 */
CalendarApp.getEventsForDay = function(date){};

/**
 * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
 *
 * @return {String} the ID of the calendar
 */
CalendarApp.getId = function(){};

/**
 * Gets the name of the calendar.
 *
 * @return {String} this calendar's name
 */
CalendarApp.getName = function(){};

/**
 * Gets the calendar with the given ID, if the user owns it.

 <p>To find a calendar ID, click the arrow next to the calendar's name in Google Calendar and
 select <strong>Calendar settings</strong>. The ID is shown near the bottom of the settings
 page.

 <pre class="prettyprint">
 <code>
 // Gets a (non-existent) private calendar by ID.
 var calendar = CalendarApp.getOwnedCalendarById(
     &#39;123456789@group.calendar.google.com&#39;);
 Logger.log(&#39;The calendar is named &quot;%s&quot;.&#39;, calendar.getName());
 </code></pre>
 *
 * @param {String} id - the calendar id
 *
 * @return {CalendarApp.Calendar} the calendar with the given ID, or <code>null</code> if the calendar does not exist or the
     user does not own it
 */
CalendarApp.getOwnedCalendarById = function(id){};

/**
 * Gets all calendars with a given name that the user owns. Names are not case-sensitive.

 <pre class="prettyprint">
 <code>
 // Gets a private calendar named &quot;Travel Plans&quot;.
 var calendars = CalendarApp.getOwnedCalendarsByName(&#39;Travel Plans&#39;);
 Logger.log(&#39;Found %s matching calendars.&#39;, calendars.length);
 </code></pre>
 *
 * @param {String} name - the calendar name
 *
 * @return {CalendarApp.Calendar[]} all calendars with this name that the user owns
 */
CalendarApp.getOwnedCalendarsByName = function(name){};

/**
 * Gets the time zone of the calendar.
 *
 * @return {String} the time zone, specified in "long" format (e.g., "America/New_York", as listed by
     <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 */
CalendarApp.getTimeZone = function(){};

/**
 * Determines whether the calendar is hidden in the user interface.
 *
 * @return {Boolean} <code>true</code> if the calendar is hidden in the user interface; <code>false</code> if not
 */
CalendarApp.isHidden = function(){};

/**
 * Determines whether the calendar is the default calendar for the effective user.
 *
 * @return {Boolean} <code>true</code> if the calendar is the default calendar for the effective user;
     <code>false</code> if not
 */
CalendarApp.isMyPrimaryCalendar = function(){};

/**
 * Determines whether the calendar is owned by the effective user.
 *
 * @return {Boolean} <code>true</code> if the calendar is owned by the effective user; <code>false</code> if not
 */
CalendarApp.isOwnedByMe = function(){};

/**
 * Determines whether the calendar's events are displayed in the user interface.
 *
 * @return {Boolean} <code>true</code> if the calendar's events are displayed in the user interface;
     <code>false</code> if not
 */
CalendarApp.isSelected = function(){};

/**
 * Creates a new recurrence object, which can be used to create rules for event recurrence.

 <pre class="prettyprint">
 <code>
 // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
     .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
     .until(new Date(&#39;January 1, 2014&#39;));
 var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
     recurrence);
 Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 </code></pre>
 *
 * @return {CalendarApp.EventRecurrence} a new recurrence object with no rules set (behaves as a weekly recurrence)
 */
CalendarApp.newRecurrence = function(){};

/**
 * Sets the color of the calendar.
 *
 * @param {String} color - a hexadecimal color string ("#rrggbb") or a value from
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/color.html'>CalendarApp.Colors</a></code>
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.setColor = function(color){};

/**
 * Sets the description of the calendar.
 *
 * @param {String} description - the description of this calendar
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.setDescription = function(description){};

/**
 * Sets whether the calendar is visible in the user interface.
 *
 * @param {Boolean} hidden - <code>true</code> to hide the calendar in the user interface; <code>false</code> to show
     it
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.setHidden = function(hidden){};

/**
 * Sets the name of the calendar.
 *
 * @param {String} name - the new name
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.setName = function(name){};

/**
 * Sets whether the calendar's events are displayed in the user interface.
 *
 * @param {Boolean} selected - <code>true</code> to show the calendar's events in the user interface;
     <code>false</code> to hide them
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.setSelected = function(selected){};

/**
 * Sets the time zone of the calendar.
 *
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.setTimeZone = function(timeZone){};

/**
 * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.

 <pre class="prettyprint">
 <code>
 // Subscribe to the calendar &quot;US Holidays&quot;.
 var calendar = CalendarApp.subscribeToCalendar(
     &#39;en.usa#holiday@group.v.calendar.google.com&#39;);
 Logger.log(&#39;Subscribed to the calendar &quot;%s&quot;.&#39;, calendar.getName());
 </code></pre>
 *
 * @param {String} id - the ID of the calendar to subscribe to
 *
 * @return {CalendarApp.Calendar} the newly subscribed to calendar
 */
CalendarApp.subscribeToCalendar = function(id){};

/** @constructor */
CalendarApp.Calendar = function(){};

/**
 * Creates a new all-day event.

 <pre class="prettyprint">
 <code>
 // Creates an all-day event for the moon landing and logs the ID.
 var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
     new Date(&#39;July 20, 1969&#39;));
 Logger.log(&#39;Event ID: &#39; + event.getId());
 </code></pre>
 *
 * @param {String} title - the title of the event
 * @param {Date} date - the date of the event (only the day is used; the time is ignored)
 *
 * @return {CalendarApp.CalendarEvent} the created event
 */
CalendarApp.Calendar.prototype.createAllDayEvent = function(title, date){};

/**
 * Creates a new all-day event series.

 <pre class="prettyprint">
 <code>
 // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
     CalendarApp.newRecurrence().addWeeklyRule()
         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
         .until(new Date(&#39;January 1, 2014&#39;)));
 Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 </code></pre>
 *
 * @param {String} title - the title of the events in the series
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
     ignored)
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 *
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */
CalendarApp.Calendar.prototype.createAllDayEventSeries = function(title, startDate, recurrence){};

/**
 * Creates a new event.

 <p>If no time zone is specified, the time values are interpreted in the context of the
 script's time zone, which may be different than the calendar's time zone.

 <pre class="prettyprint">
 <code>
 // Creates an event for the moon landing and logs the ID.
 var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
     new Date(&#39;July 21, 1969 21:00:00 UTC&#39;));
 Logger.log(&#39;Event ID: &#39; + event.getId());
 </code></pre>
 *
 * @param {String} title - the title of the event
 * @param {Date} startTime - the date and time when the event starts
 * @param {Date} endTime - the date and time when the event ends
 *
 * @return {CalendarApp.CalendarEvent} the created event
 */
CalendarApp.Calendar.prototype.createEvent = function(title, startTime, endTime){};

/**
 * Creates an event from a free-form description.

 <p>The description should use the same format as the UI's
 <a href="http://support.google.com/calendar/answer/36604?hl=en">"Quick Add"</a>
 feature.

 <pre class="prettyprint">
 <code>
 // Creates a new event and logs its ID.
 var event = CalendarApp.getDefaultCalendar()
     .createEventFromDescription(&#39;Lunch with Mary, Friday at 1PM&#39;);
 Logger.log(&#39;Event ID: &#39; + event.getId());
 </code></pre>
 *
 * @param {String} description - a free-form description of the event
 *
 * @return {CalendarApp.CalendarEvent} the created event
 */
CalendarApp.Calendar.prototype.createEventFromDescription = function(description){};

/**
 * Creates a new event series.

 <pre class="prettyprint">
 <code>
 // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
 var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
     CalendarApp.newRecurrence().addWeeklyRule()
         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
         .until(new Date(&#39;January 1, 2014&#39;)));
 Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 </code></pre>
 *
 * @param {String} title - the title of the events in the series
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 *
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */
CalendarApp.Calendar.prototype.createEventSeries = function(title, startTime, endTime, recurrence){};

/**
 * Deletes the calendar permanently. A user can only delete a calendar they own.
 *
 * @return void
 */
CalendarApp.Calendar.prototype.deleteCalendar = function(){};

/**
 * Gets the color of the calendar.
 *
 * @return {String} a hexadecimal color string ("#rrggbb")
 */
CalendarApp.Calendar.prototype.getColor = function(){};

/**
 * Gets the description of the calendar.
 *
 * @return {String} the description of this calendar
 */
CalendarApp.Calendar.prototype.getDescription = function(){};

/**
 * Gets the event series with the given ID. If the ID given is for a single <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code>,
 then a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> will be returned with a single event in the series. Note
 that if the event series belongs to a calendar other than the default calendar, this method
 must be called from that <code>Calendar</code>; calling <code>CalendarApp.getEventSeriesById(id)</code>
 directly will only return an event series that exists in the default calendar.
 *
 * @param {String} iCalId - ID of the event series
 *
 * @return {CalendarApp.CalendarEventSeries} the series with the given ID, or <code>null</code> if the series doesn't exist or the user
     cannot access it
 */
CalendarApp.Calendar.prototype.getEventSeriesById = function(iCalId){};

/**
 * Gets all events that occur within a given time range.

 <p>An event will be returned if it starts during the time range, ends during the time range, or
 encompasses the time range. If no time zone is specified, the time values are interpreted in
 the context of the script's time zone, which may be different from the calendar's time zone.

 <pre class="prettyprint">
 <code>
 // Determines how many events are happening in the next two hours.
 var now = new Date();
 var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
 Logger.log(&#39;Number of events: &#39; + events.length);
 </code></pre>
 *
 * @param {Date} startTime - the start of the time range
 * @param {Date} endTime - the end of the time range, non-inclusive
 *
 * @return {CalendarApp.CalendarEvent[]} the events that occur within the time range
 */
CalendarApp.Calendar.prototype.getEvents = function(startTime, endTime){};

/**
 * Gets all events that occur on a given day.

 <p>An event will be returned if it starts during the day, ends during the day, or encompasses
 the day.

 <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
 The date is interpreted as midnight that day to midnight the next day in the calendar's
 time zone.

 <pre class="prettyprint">
 <code>
 // Determines how many events are happening today.
 var today = new Date();
 var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
 Logger.log(&#39;Number of events: &#39; + events.length);
 </code></pre>
 *
 * @param {Date} date - the date to retrieve events for (only the day is used; the time is ignored)
 *
 * @return {CalendarApp.CalendarEvent[]} the events that occur on the given date
 */
CalendarApp.Calendar.prototype.getEventsForDay = function(date){};

/**
 * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
 *
 * @return {String} the ID of the calendar
 */
CalendarApp.Calendar.prototype.getId = function(){};

/**
 * Gets the name of the calendar.
 *
 * @return {String} this calendar's name
 */
CalendarApp.Calendar.prototype.getName = function(){};

/**
 * Gets the time zone of the calendar.
 *
 * @return {String} the time zone, specified in "long" format (e.g., "America/New_York", as listed by
     <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 */
CalendarApp.Calendar.prototype.getTimeZone = function(){};

/**
 * Determines whether the calendar is hidden in the user interface.
 *
 * @return {Boolean} <code>true</code> if the calendar is hidden in the user interface; <code>false</code> if not
 */
CalendarApp.Calendar.prototype.isHidden = function(){};

/**
 * Determines whether the calendar is the default calendar for the effective user.
 *
 * @return {Boolean} <code>true</code> if the calendar is the default calendar for the effective user;
     <code>false</code> if not
 */
CalendarApp.Calendar.prototype.isMyPrimaryCalendar = function(){};

/**
 * Determines whether the calendar is owned by the effective user.
 *
 * @return {Boolean} <code>true</code> if the calendar is owned by the effective user; <code>false</code> if not
 */
CalendarApp.Calendar.prototype.isOwnedByMe = function(){};

/**
 * Determines whether the calendar's events are displayed in the user interface.
 *
 * @return {Boolean} <code>true</code> if the calendar's events are displayed in the user interface;
     <code>false</code> if not
 */
CalendarApp.Calendar.prototype.isSelected = function(){};

/**
 * Sets the color of the calendar.
 *
 * @param {String} color - a hexadecimal color string ("#rrggbb") or a value from
     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/color.html'>CalendarApp.Colors</a></code>
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.Calendar.prototype.setColor = function(color){};

/**
 * Sets the description of the calendar.
 *
 * @param {String} description - the description of this calendar
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.Calendar.prototype.setDescription = function(description){};

/**
 * Sets whether the calendar is visible in the user interface.
 *
 * @param {Boolean} hidden - <code>true</code> to hide the calendar in the user interface; <code>false</code> to show
     it
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.Calendar.prototype.setHidden = function(hidden){};

/**
 * Sets the name of the calendar.
 *
 * @param {String} name - the new name
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.Calendar.prototype.setName = function(name){};

/**
 * Sets whether the calendar's events are displayed in the user interface.
 *
 * @param {Boolean} selected - <code>true</code> to show the calendar's events in the user interface;
     <code>false</code> to hide them
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.Calendar.prototype.setSelected = function(selected){};

/**
 * Sets the time zone of the calendar.
 *
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 *
 * @return {CalendarApp.Calendar} this calendar for chaining
 */
CalendarApp.Calendar.prototype.setTimeZone = function(timeZone){};

/**
 * Unsubscribes the user from the calendar. A user cannot unsubscribe from a calendar they own.
 *
 * @return void
 */
CalendarApp.Calendar.prototype.unsubscribeFromCalendar = function(){};

/** @constructor */
CalendarApp.CalendarEvent = function(){};

/**
 * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most
 4 weeks (40320 minutes), before the event.
 *
 * @param {number} minutesBefore - the number of minutes before the event
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.addEmailReminder = function(minutesBefore){};

/**
 * Adds a guest to the event.
 *
 * @param {String} email - the email address of the guest
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.addGuest = function(email){};

/**
 * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most
 4 weeks (40320 minutes), before the event.
 *
 * @param {number} minutesBefore - the number of minutes before the event
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.addPopupReminder = function(minutesBefore){};

/**
 * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most
 4 weeks (40320 minutes), before the event.
 *
 * @param {number} minutesBefore - the number of minutes before the event
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.addSmsReminder = function(minutesBefore){};

/**
 * Determines whether anyone can invite themselves.
 *
 * @return {Boolean} <code>true</code> if non-guests can add themselves to the event; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.anyoneCanAddSelf = function(){};

/**
 * Deletes the event.
 *
 * @return void
 */
CalendarApp.CalendarEvent.prototype.deleteEvent = function(){};

/**
 * Deletes a key/value tag from the event.
 *
 * @param {String} key - the tag key
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.deleteTag = function(key){};

/**
 * Gets the date on which this all-day calendar event ends. (If this is not an all-day event, then
 this method will throw an exception.) The returned <code>Date</code> will represent midnight at the
 beginning of the day after the event ends <em>in the script's time zone</em>. To use the
 calendar's time zone instead, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getEndTime()'>getEndTime()</a></code>.
 *
 * @return {Date} this all-day calendar event's end date
 */
CalendarApp.CalendarEvent.prototype.getAllDayEndDate = function(){};

/**
 * Gets the date on which this all-day calendar event begins. (If this is not an all-day event,
 then this method will throw an exception.) The returned <code>Date</code> will represent midnight at
 the beginning of the day on which the event starts <em>in the script's time zone</em>. To use
 the calendar's time zone instead, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getStartTime()'>getStartTime()</a></code>.
 *
 * @return {Date} this all-day calendar event's start date
 */
CalendarApp.CalendarEvent.prototype.getAllDayStartDate = function(){};

/**
 * Gets all keys for tags that have been set on the event.
 *
 * @return {String[]} an array of string keys
 */
CalendarApp.CalendarEvent.prototype.getAllTagKeys = function(){};

/**
 * Gets the creators of the event.
 *
 * @return {String[]} the email addresses of the event's creators
 */
CalendarApp.CalendarEvent.prototype.getCreators = function(){};

/**
 * Gets the date the event was created.
 *
 * @return {Date} the date of creation
 */
CalendarApp.CalendarEvent.prototype.getDateCreated = function(){};

/**
 * Gets the description of the event.
 *
 * @return {String} the description
 */
CalendarApp.CalendarEvent.prototype.getDescription = function(){};

/**
 * Gets the minute values for all email reminders for the event.
 *
 * @return {Integer[]} an array in which each value corresponds to the number of minutes before the event that
     a reminder will trigger
 */
CalendarApp.CalendarEvent.prototype.getEmailReminders = function(){};

/**
 * Gets the date and time at which this calendar event ends. For non&ndash;all-day events, this
 will be the instant in time at which the event was defined to end. For all-day events, which
 only store an end date (not a date and time), this will be midnight at the beginning of the day
 after the event ends <em>in the calendar's time zone</em>. This allows meaningful comparison
 of end times for all types of events; however, it will not necessarily preserve the original
 day-of-year unmodified.

 <p>For <a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()'>all-day events</a>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayEndDate()'>getAllDayEndDate()</a></code> should almost
 always be called in preference to this method.
 *
 * @return {Date} this calendar event's end time
 */
CalendarApp.CalendarEvent.prototype.getEndTime = function(){};

/**
 * Gets the series of recurring events that this event belongs to. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code>
 object will be returned even if this event doesn't belong to a series, so that you can add new
 recurrence settings.
 *
 * @return {CalendarApp.CalendarEventSeries} the event series this event belongs to, or a new event series if it does not yet
     belong to a series
 */
CalendarApp.CalendarEvent.prototype.getEventSeries = function(){};

/**
 * Gets a guest by email address.
 *
 * @param {String} email - the address of the guest
 *
 * @return {CalendarApp.EventGuest} the guest, or null if the email address does not correspond to a guest
 */
CalendarApp.CalendarEvent.prototype.getGuestByEmail = function(email){};

/**
 * Gets the guests for the event, not including the event owner.
 *
 * @return {CalendarApp.EventGuest[]} an array of the guests
 */
CalendarApp.CalendarEvent.prototype.getGuestList = function(){};

/**
 * Gets the ID of the event.
 *
 * @return {String} the ID of the event
 */
CalendarApp.CalendarEvent.prototype.getId = function(){};

/**
 * Gets the date the event was last updated.
 *
 * @return {Date} the last updated date
 */
CalendarApp.CalendarEvent.prototype.getLastUpdated = function(){};

/**
 * Gets the location of the event.
 *
 * @return {String} the event location
 */
CalendarApp.CalendarEvent.prototype.getLocation = function(){};

/**
 * Gets the event status (attending, etc.) of the effective user. Always returns
 <code>GuestStatus.OWNER</code> if the effective user is the owner of the event.
 *
 * @return {CalendarApp.GuestStatus} the status
 */
CalendarApp.CalendarEvent.prototype.getMyStatus = function(){};

/**
 * Get the ID of the calendar where this event was originally created.
 *
 * @return {String} the ID of the original calendar
 */
CalendarApp.CalendarEvent.prototype.getOriginalCalendarId = function(){};

/**
 * Gets the minute values for all popup reminders for the event.
 *
 * @return {Integer[]} an array in which each value corresponds to the number of minutes before the event that
     a reminder will trigger
 */
CalendarApp.CalendarEvent.prototype.getPopupReminders = function(){};

/**
 * Gets the minute values for all SMS reminders for the event.
 *
 * @return {Integer[]} an array in which each value corresponds to the number of minutes before the event that
     a reminder will trigger
 */
CalendarApp.CalendarEvent.prototype.getSmsReminders = function(){};

/**
 * Gets the date and time at which this calendar event begins. For non&ndash;all-day events, this
 will be the instant in time at which the event was defined to start. For all-day events, which
 only store a start date (not a date and time), this will be midnight at the beginning of the
 day on which the event starts <em>in the calendar's time zone</em>. This allows meaningful
 comparison of start times for all types of events; however, it will not necessarily preserve
 the original day-of-year unmodified.

 <p>For <a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()'>all-day events</a>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayStartDate()'>getAllDayStartDate()</a></code> should
 almost always be called in preference to this method.
 *
 * @return {Date} this calendar event's start time
 */
CalendarApp.CalendarEvent.prototype.getStartTime = function(){};

/**
 * Gets a tag value of the event.
 *
 * @param {String} key - the key
 *
 * @return {String} the tag value
 */
CalendarApp.CalendarEvent.prototype.getTag = function(key){};

/**
 * Gets the title of the event.
 *
 * @return {String} the title
 */
CalendarApp.CalendarEvent.prototype.getTitle = function(){};

/**
 * Gets the visibility of the event.
 *
 * @return {CalendarApp.Visibility} the visibility value
 */
CalendarApp.CalendarEvent.prototype.getVisibility = function(){};

/**
 * Determines whether guests can invite other guests.
 *
 * @return {Boolean} <code>true</code> if guests can invite others; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.guestsCanInviteOthers = function(){};

/**
 * Determines whether guests can modify the event.
 *
 * @return {Boolean} <code>true</code> if guests can modify the event; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.guestsCanModify = function(){};

/**
 * Determines whether guests can see other guests.
 *
 * @return {Boolean} <code>true</code> if guests can see other guests; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.guestsCanSeeGuests = function(){};

/**
 * Determines whether this is an all-day event.
 *
 * @return {Boolean} <code>true</code> if the event is all-day; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.isAllDayEvent = function(){};

/**
 * Determines whether the event is owned by the effective user.
 *
 * @return {Boolean} <code>true</code> if the event is owned by the effective user; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.isOwnedByMe = function(){};

/**
 * Determines whether the event is part of an event series.
 *
 * @return {Boolean} <code>true</code> if the event is part of an event series; <code>false</code> if not
 */
CalendarApp.CalendarEvent.prototype.isRecurringEvent = function(){};

/**
 * Removes all reminders from the event.
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.removeAllReminders = function(){};

/**
 * Removes a guest from the event.
 *
 * @param {String} email - the email address of the guest
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.removeGuest = function(email){};

/**
 * Resets the reminders using the calendar's default settings.
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.resetRemindersToDefault = function(){};

/**
 * Sets the date of the event. Applying this method will change a regular event into an all-day
 event.
 *
 * @param {Date} date - the date for the event (the time is ignored)
 *
 * @return {CalendarApp.CalendarEvent} this CalendarEvent for chaining
 */
CalendarApp.CalendarEvent.prototype.setAllDayDate = function(date){};

/**
 * Sets whether non-guests can add themselves to the event.
 *
 * @param {Boolean} anyoneCanAddSelf - whether anyone can invite themselves
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setAnyoneCanAddSelf = function(anyoneCanAddSelf){};

/**
 * Sets the description of the event.
 *
 * @param {String} description - the new description
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setDescription = function(description){};

/**
 * Sets whether guests can invite other guests.
 *
 * @param {Boolean} guestsCanInviteOthers - whether guests can invite others
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setGuestsCanInviteOthers = function(guestsCanInviteOthers){};

/**
 * Sets whether guests can modify the event.
 *
 * @param {Boolean} guestsCanModify - whether guests can modify the event
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setGuestsCanModify = function(guestsCanModify){};

/**
 * Sets whether guests can see other guests.
 *
 * @param {Boolean} guestsCanSeeGuests - whether guests can see others
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setGuestsCanSeeGuests = function(guestsCanSeeGuests){};

/**
 * Sets the location of the event.
 *
 * @param {String} location - the new location
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setLocation = function(location){};

/**
 * Sets the event status (attending, etc.) of the effective user.
 *
 * @param {CalendarApp.GuestStatus} status - the new status
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setMyStatus = function(status){};

/**
 * Sets a key/value tag on the event, for storing custom metadata.
 *
 * @param {String} key - the tag key
 * @param {String} value - the tag value
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setTag = function(key, value){};

/**
 * Sets the dates and times for the start and end of the event. Applying this method will change
 an all-day event into a regular event.
 *
 * @param {Date} startTime - the new start of the event
 * @param {Date} endTime - the new end of the event
 *
 * @return {CalendarApp.CalendarEvent} this CalendarEvent for chaining
 */
CalendarApp.CalendarEvent.prototype.setTime = function(startTime, endTime){};

/**
 * Sets the title of the event.
 *
 * @param {String} title - the new title
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setTitle = function(title){};

/**
 * Sets the visibility of the event.
 *
 * @param {CalendarApp.Visibility} visibility - 
 *
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */
CalendarApp.CalendarEvent.prototype.setVisibility = function(visibility){};

/** @constructor */
CalendarApp.CalendarEventSeries = function(){};

/**
 * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most
 4 weeks (40320 minutes), before the event.
 *
 * @param {number} minutesBefore - the number of minutes before the event
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.addEmailReminder = function(minutesBefore){};

/**
 * Adds a guest to the event.
 *
 * @param {String} email - the email address of the guest
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.addGuest = function(email){};

/**
 * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most
 4 weeks (40320 minutes), before the event.
 *
 * @param {number} minutesBefore - the number of minutes before the event
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.addPopupReminder = function(minutesBefore){};

/**
 * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most
 4 weeks (40320 minutes), before the event.
 *
 * @param {number} minutesBefore - the number of minutes before the event
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.addSmsReminder = function(minutesBefore){};

/**
 * Determines whether anyone can invite themselves.
 *
 * @return {Boolean} <code>true</code> if non-guests can add themselves to the event; <code>false</code> if not
 */
CalendarApp.CalendarEventSeries.prototype.anyoneCanAddSelf = function(){};

/**
 * Deletes the event series.
 *
 * @return void
 */
CalendarApp.CalendarEventSeries.prototype.deleteEventSeries = function(){};

/**
 * Deletes a key/value tag from the event.
 *
 * @param {String} key - the tag key
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.deleteTag = function(key){};

/**
 * Gets all keys for tags that have been set on the event.
 *
 * @return {String[]} an array of string keys
 */
CalendarApp.CalendarEventSeries.prototype.getAllTagKeys = function(){};

/**
 * Gets the creators of the event.
 *
 * @return {String[]} the email addresses of the event's creators
 */
CalendarApp.CalendarEventSeries.prototype.getCreators = function(){};

/**
 * Gets the date the event was created.
 *
 * @return {Date} the date of creation
 */
CalendarApp.CalendarEventSeries.prototype.getDateCreated = function(){};

/**
 * Gets the description of the event.
 *
 * @return {String} the description
 */
CalendarApp.CalendarEventSeries.prototype.getDescription = function(){};

/**
 * Gets the minute values for all email reminders for the event.
 *
 * @return {Integer[]} an array in which each value corresponds to the number of minutes before the event that
     a reminder will trigger
 */
CalendarApp.CalendarEventSeries.prototype.getEmailReminders = function(){};

/**
 * Gets a guest by email address.
 *
 * @param {String} email - the address of the guest
 *
 * @return {CalendarApp.EventGuest} the guest, or null if the email address does not correspond to a guest
 */
CalendarApp.CalendarEventSeries.prototype.getGuestByEmail = function(email){};

/**
 * Gets the guests for the event, not including the event owner.
 *
 * @return {CalendarApp.EventGuest[]} an array of the guests
 */
CalendarApp.CalendarEventSeries.prototype.getGuestList = function(){};

/**
 * Gets the ID of the event.
 *
 * @return {String} the ID of the event
 */
CalendarApp.CalendarEventSeries.prototype.getId = function(){};

/**
 * Gets the date the event was last updated.
 *
 * @return {Date} the last updated date
 */
CalendarApp.CalendarEventSeries.prototype.getLastUpdated = function(){};

/**
 * Gets the location of the event.
 *
 * @return {String} the event location
 */
CalendarApp.CalendarEventSeries.prototype.getLocation = function(){};

/**
 * Gets the event status (attending, etc.) of the effective user. Always returns
 <code>GuestStatus.OWNER</code> if the effective user is the owner of the event.
 *
 * @return {CalendarApp.GuestStatus} the status
 */
CalendarApp.CalendarEventSeries.prototype.getMyStatus = function(){};

/**
 * Get the ID of the calendar where this event was originally created.
 *
 * @return {String} the ID of the original calendar
 */
CalendarApp.CalendarEventSeries.prototype.getOriginalCalendarId = function(){};

/**
 * Gets the minute values for all popup reminders for the event.
 *
 * @return {Integer[]} an array in which each value corresponds to the number of minutes before the event that
     a reminder will trigger
 */
CalendarApp.CalendarEventSeries.prototype.getPopupReminders = function(){};

/**
 * Gets the minute values for all SMS reminders for the event.
 *
 * @return {Integer[]} an array in which each value corresponds to the number of minutes before the event that
     a reminder will trigger
 */
CalendarApp.CalendarEventSeries.prototype.getSmsReminders = function(){};

/**
 * Gets a tag value of the event.
 *
 * @param {String} key - the key
 *
 * @return {String} the tag value
 */
CalendarApp.CalendarEventSeries.prototype.getTag = function(key){};

/**
 * Gets the title of the event.
 *
 * @return {String} the title
 */
CalendarApp.CalendarEventSeries.prototype.getTitle = function(){};

/**
 * Gets the visibility of the event.
 *
 * @return {CalendarApp.Visibility} the visibility value
 */
CalendarApp.CalendarEventSeries.prototype.getVisibility = function(){};

/**
 * Determines whether guests can invite other guests.
 *
 * @return {Boolean} <code>true</code> if guests can invite others; <code>false</code> if not
 */
CalendarApp.CalendarEventSeries.prototype.guestsCanInviteOthers = function(){};

/**
 * Determines whether guests can modify the event.
 *
 * @return {Boolean} <code>true</code> if guests can modify the event; <code>false</code> if not
 */
CalendarApp.CalendarEventSeries.prototype.guestsCanModify = function(){};

/**
 * Determines whether guests can see other guests.
 *
 * @return {Boolean} <code>true</code> if guests can see other guests; <code>false</code> if not
 */
CalendarApp.CalendarEventSeries.prototype.guestsCanSeeGuests = function(){};

/**
 * Determines whether the event is owned by the effective user.
 *
 * @return {Boolean} <code>true</code> if the event is owned by the effective user; <code>false</code> if not
 */
CalendarApp.CalendarEventSeries.prototype.isOwnedByMe = function(){};

/**
 * Removes all reminders from the event.
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.removeAllReminders = function(){};

/**
 * Removes a guest from the event.
 *
 * @param {String} email - the email address of the guest
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.removeGuest = function(email){};

/**
 * Resets the reminders using the calendar's default settings.
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.resetRemindersToDefault = function(){};

/**
 * Sets whether non-guests can add themselves to the event.
 *
 * @param {Boolean} anyoneCanAddSelf - whether anyone can invite themselves
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setAnyoneCanAddSelf = function(anyoneCanAddSelf){};

/**
 * Sets the description of the event.
 *
 * @param {String} description - the new description
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setDescription = function(description){};

/**
 * Sets whether guests can invite other guests.
 *
 * @param {Boolean} guestsCanInviteOthers - whether guests can invite others
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setGuestsCanInviteOthers = function(guestsCanInviteOthers){};

/**
 * Sets whether guests can modify the event.
 *
 * @param {Boolean} guestsCanModify - whether guests can modify the event
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setGuestsCanModify = function(guestsCanModify){};

/**
 * Sets whether guests can see other guests.
 *
 * @param {Boolean} guestsCanSeeGuests - whether guests can see others
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setGuestsCanSeeGuests = function(guestsCanSeeGuests){};

/**
 * Sets the location of the event.
 *
 * @param {String} location - the new location
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setLocation = function(location){};

/**
 * Sets the event status (attending, etc.) of the effective user.
 *
 * @param {CalendarApp.GuestStatus} status - the new status
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setMyStatus = function(status){};

/**
 * Sets the recurrence rules for an all-day event series. Applying this method will change a
 regular event series into an all-day event series.

 <pre class="prettyprint">
 <code>
 // Sets the events in a series to take place every Wednesday in 2013.
 var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(&#39;123456789@google.com&#39;);
 var startDate = new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;);
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
     .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
     .until(new Date(&#39;January 1, 2014&#39;));
 eventSeries.setRecurrence(recurrence, startDate);
 </code></pre>
 *
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence rules to use
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
     ignored)
 *
 * @return {CalendarApp.CalendarEventSeries} this CalendarEventSeries for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setRecurrence = function(recurrence, startDate){};

/**
 * Sets a key/value tag on the event, for storing custom metadata.
 *
 * @param {String} key - the tag key
 * @param {String} value - the tag value
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setTag = function(key, value){};

/**
 * Sets the title of the event.
 *
 * @param {String} title - the new title
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setTitle = function(title){};

/**
 * Sets the visibility of the event.
 *
 * @param {CalendarApp.Visibility} visibility - 
 *
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */
CalendarApp.CalendarEventSeries.prototype.setVisibility = function(visibility){};

/** @constructor */
CalendarApp.EventGuest = function(){};

/**
 * Gets the number of additional people that this guest has said will attend.
 *
 * @return {number} the number of additional people this guest has said will attend
 */
CalendarApp.EventGuest.prototype.getAdditionalGuests = function(){};

/**
 * Gets the email address of the guest.
 *
 * @return {String} the guest's email address
 */
CalendarApp.EventGuest.prototype.getEmail = function(){};

/**
 * Gets the status of the guest for the event.
 *
 * @return {CalendarApp.GuestStatus} the status of this guest
 */
CalendarApp.EventGuest.prototype.getGuestStatus = function(){};

/**
 * Gets the name of the guest. If the name of the guest is not available, this method returns the
 guest's email address.
 *
 * @return {String} the guest's name, or the guest's email address if the name is not available
 */
CalendarApp.EventGuest.prototype.getName = function(){};

/**
 * Gets the status of the guest for the event.
 *
 * @return {String} the status of this guest
 */
CalendarApp.EventGuest.prototype.getStatus = function(){};

/** @constructor */
CalendarApp.EventRecurrence = function(){};

/**
 * Adds a rule that excludes occurrences on a daily basis.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week after the first 30 days.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addDailyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a daily basis.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every day for ten days.
 var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addDailyRule = function(){};

/**
 * Adds a rule that causes the event to recur on a specific date.
 *
 * @param {Date} date - 
 *
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */
CalendarApp.EventRecurrence.prototype.addDate = function(date){};

/**
 * Adds a rule that excludes an occurrence for a specific date.
 *
 * @param {Date} date - 
 *
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */
CalendarApp.EventRecurrence.prototype.addDateExclusion = function(date){};

/**
 * Adds a rule that excludes occurrences on a monthly basis.

 <p>By default the exclusion will be applied on the same day of the month as the first event in
 the series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>RecurrenceRule.onlyOnMonthDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>RecurrenceRule.onlyOnMonthDays(days)</a></code>.
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addMonthlyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a monthly basis.

 <p>By default the event will recur on the same day of the month as the first event in the
 series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>RecurrenceRule.onlyOnMonthDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>RecurrenceRule.onlyOnMonthDays(days)</a></code>.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every month for three months.
 var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addMonthlyRule = function(){};

/**
 * Adds a rule that excludes occurrences on a weekly basis.

 <p>By default the exclusion will be applied on the same day of the week as the first event in
 the series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>RecurrenceRule.onlyOnWeekday(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>RecurrenceRule.onlyOnWeekdays(days)</a></code>.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every day except the first four Wednesdays.
 var recurrence = CalendarApp.newRecurrence().addDailyRule()
     .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addWeeklyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a weekly basis.

 <p>By default the event will recur on the same day of the week as the first event in the
 series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>RecurrenceRule.onlyOnWeekday(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>RecurrenceRule.onlyOnWeekdays(days)</a></code>.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week for ten weeks.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addWeeklyRule = function(){};

/**
 * Adds a rule that excludes occurrences on a yearly basis.

 <p>By default the exclusion will be applied on the same day of the year as the first event in
 the series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>RecurrenceRule.onlyOnYearDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>RecurrenceRule.onlyOnYearDays(days)</a></code>.
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addYearlyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a yearly basis.

 <p>By default the event will recur on the same day of the year as the first event in the
 series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>RecurrenceRule.onlyOnYearDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>RecurrenceRule.onlyOnYearDays(days)</a></code>.
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.EventRecurrence.prototype.addYearlyRule = function(){};

/**
 * Sets the time zone for this recurrence. This affects the date and time that events recur on,
 and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
 *
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., 'America/New_York', as listed
     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 *
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */
CalendarApp.EventRecurrence.prototype.setTimeZone = function(timeZone){};

/** @constructor */
CalendarApp.RecurrenceRule = function(){};

/**
 * Adds a rule that excludes occurrences on a daily basis.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week after the first 30 days.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addDailyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a daily basis.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every day for ten days.
 var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addDailyRule = function(){};

/**
 * Adds a rule that causes the event to recur on a specific date.
 *
 * @param {Date} date - 
 *
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */
CalendarApp.RecurrenceRule.prototype.addDate = function(date){};

/**
 * Adds a rule that excludes an occurrence for a specific date.
 *
 * @param {Date} date - 
 *
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */
CalendarApp.RecurrenceRule.prototype.addDateExclusion = function(date){};

/**
 * Adds a rule that excludes occurrences on a monthly basis.

 <p>By default the exclusion will be applied on the same day of the month as the first event in
 the series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>onlyOnMonthDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>onlyOnMonthDays(days)</a></code>.
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addMonthlyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a monthly basis.

 <p>By default the event will recur on the same day of the month as the first event in the
 series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>onlyOnMonthDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>onlyOnMonthDays(days)</a></code>.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every month for three months.
 var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addMonthlyRule = function(){};

/**
 * Adds a rule that excludes occurrences on a weekly basis.

 <p>By default the exclusion will be applied on the same day of the week as the first event in
 the series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>onlyOnWeekday(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>onlyOnWeekdays(days)</a></code>.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every day except the first four Wednesdays.
 var recurrence = CalendarApp.newRecurrence().addDailyRule()
     .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addWeeklyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a weekly basis.

 <p>By default the event will recur on the same day of the week as the first event in the
 series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>onlyOnWeekday(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>onlyOnWeekdays(days)</a></code>.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week for ten weeks.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
 </code></pre>
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addWeeklyRule = function(){};

/**
 * Adds a rule that excludes occurrences on a yearly basis.

 <p>By default the exclusion will be applied on the same day of the year as the first event in
 the series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>onlyOnYearDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>onlyOnYearDays(days)</a></code>.
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addYearlyExclusion = function(){};

/**
 * Adds a rule that causes the event to recur on a yearly basis.

 <p>By default the event will recur on the same day of the year as the first event in the
 series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>onlyOnYearDay(day)</a></code> or
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>onlyOnYearDays(days)</a></code>.
 *
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */
CalendarApp.RecurrenceRule.prototype.addYearlyRule = function(){};

/**
 * Configures the rule to only apply at this interval of the rule's time unit.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every fourth week.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().interval(4);
 </code></pre>
 *
 * @param {number} interval - the interval in the rule's time unit
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.interval = function(interval){};

/**
 * Configures the rule to only apply to a specific month.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week in February.
 var recurrence = CalendarApp.newRecurrence()
     .addWeeklyRule().onlyInMonth(CalendarApp.Month.FEBRUARY);
 </code></pre>
 *
 * @param {Month} month - the month
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyInMonth = function(month){};

/**
 * Configures the rule to only apply to specific months.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week in February and March.
 var recurrence = CalendarApp.newRecurrence()
     .addWeeklyRule().onlyInMonths([CalendarApp.Month.FEBRUARY, CalendarApp.Month.MARCH]);
 </code></pre>
 *
 * @param {Month[]} months - the months
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyInMonths = function(months){};

/**
 * Configures the rule to only apply to a specific day of the month.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every month on the fifth day of the month.
 var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDay(5);
 </code></pre>
 *
 * @param {number} day - the day of the month
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnMonthDay = function(day){};

/**
 * Configures the rule to only apply to specific days of the month.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every month on the first and fifteenth day of the month.
 var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDays([1, 15]);
 </code></pre>
 *
 * @param {Integer[]} days - the days of the month
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnMonthDays = function(days){};

/**
 * Configures the rule to only apply to a specific week of the year.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs on the fifth week of every year.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeek(5);
 </code></pre>
 *
 * @param {number} week - the week
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnWeek = function(week){};

/**
 * Configures the rule to only apply to a specific day of the week.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week on Wednesdays.
 var recurrence = CalendarApp.newRecurrence()
     .addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY);
 </code></pre>
 *
 * @param {Weekday} day - the day of the week
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnWeekday = function(day){};

/**
 * Configures the rule to only apply to specific days of the week.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every week on Tuesdays and Thursdays.
 var recurrence = CalendarApp.newRecurrence()
     .addWeeklyRule().onlyOnWeekdays(
         [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY]);
 </code></pre>
 *
 * @param {Weekday[]} days - the days of the week
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnWeekdays = function(days){};

/**
 * Configures the rule to only apply to specific weeks of the year.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs on the fifth and tenth weeks of every year.
 var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeeks([5, 10]);
 </code></pre>
 *
 * @param {Integer[]} weeks - the weeks
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnWeeks = function(weeks){};

/**
 * Configures the rule to only apply to a specific day of the year.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every year on February 15 (the 46th day).
 var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay(46);
 </code></pre>
 *
 * @param {number} day - the day of the year
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnYearDay = function(day){};

/**
 * Configures the rule to only apply to specific days of the year.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every year on January 20 and February 15.
 var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay([20, 46]);
 </code></pre>
 *
 * @param {Integer[]} days - the days of the year
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.onlyOnYearDays = function(days){};

/**
 * Sets the time zone for this recurrence. This affects the date and time that events recur on,
 and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
 *
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., 'America/New_York', as listed
     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 *
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */
CalendarApp.RecurrenceRule.prototype.setTimeZone = function(timeZone){};

/**
 * Configures the rule to end after a given number of occurrences.

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every day for ten days.
 var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
 </code></pre>
 *
 * @param {number} times - the number of times to recur
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.times = function(times){};

/**
 * Configures the rule to end on a given date (inclusive).

 <pre class="prettyprint">
 <code>
 // Creates a rule that recurs every day through the end of 2013.
 var recurrence = CalendarApp.newRecurrence()
     .addDailyRule().until(new Date(&#39;December 31, 2013&#39;));
 </code></pre>
 *
 * @param {Date} endDate - 
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.until = function(endDate){};

/**
 * Configures which day a week starts on, for the purposes of applying the rule.

 <pre class="prettyprint">
 <code>
 // Creates a weekly rule where weeks start on Monday.
 var recurrence = CalendarApp.newRecurrence()
     .addWeeklyRule().weekStartsOn(CalendarApp.Weekday.MONDAY);
 </code></pre>
 *
 * @param {Weekday} day - the day on which the week will start
 *
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */
CalendarApp.RecurrenceRule.prototype.weekStartsOn = function(day){};

