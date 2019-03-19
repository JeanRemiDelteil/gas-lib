/**********************************************
 * @namespace CalendarApp
 ***********************************************/

/**
 * @class CalendarApp
 */

/**
 * An enum representing the named colors available in the Calendar service.
 * 
 * @typedef {CalendarApp.Color} CalendarApp.Color
 */
/**
 * An enum representing the named event colors available in the Calendar service.
 * 
 * @typedef {CalendarApp.EventColor} CalendarApp.EventColor
 */
/**
 * An enum representing the statuses a guest can have for an event.
 * 
 * @typedef {CalendarApp.GuestStatus} CalendarApp.GuestStatus
 */
/**
 * An enum representing the months of the year.
 * 
 * @typedef {Month} CalendarApp.Month
 */
/**
 * An enum representing the visibility of an event.
 * 
 * @typedef {CalendarApp.Visibility} CalendarApp.Visibility
 */
/**
 * An enum representing the days of the week.
 * 
 * @typedef {Weekday} CalendarApp.Weekday
 */
/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969&#39;));
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} date - the date of the event (only the day is used; the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
 *     new Date(&#39;August 15, 1969&#39;),
 *     new Date(&#39;August 18, 1969&#39;));
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startDate - the date when the event starts (only the day is used; the time is ignored)
 * @param {Date} endDate - the date when the event ends (only the day is used; the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
 *     new Date(&#39;August 15, 1969&#39;),
 *     new Date(&#39;August 18, 1969&#39;),
 *     {location: &#39;Bethel, White Lake, New York, U.S.&#39;, sendInvites: true});
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startDate - the date when the event starts (only the day is used; the time is ignored)
 * @param {Date} endDate - the date when the event ends (only the day is used; the time is ignored)
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969&#39;),
 *     {location: &#39;The Moon&#39;});
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} date - the date of the event (only the day is used; the time is ignored)
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
 *         .until(new Date(&#39;January 1, 2014&#39;)));
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createAllDayEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
 *     ignored)
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Creates a new all-day event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
 *         .until(new Date(&#39;January 1, 2014&#39;)),
 *     {guests: &#39;everyone@example.com&#39;});
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createAllDayEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
 *     ignored)
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Creates a new calendar, owned by the user.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new calendar named &quot;Travel Plans&quot;.
 * var calendar = CalendarApp.createCalendar(&#39;Travel Plans&#39;);
 * Logger.log(&#39;Created the calendar &quot;%s&quot;, with the ID &quot;%s&quot;.&#39;,
 *     calendar.getName(), calendar.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createCalendar
 * 
 * @param {String} name - the name of the new calendar
 * 
 * @return {CalendarApp.Calendar} the newly created calendar
 */


/**
 * Creates a new calendar, owned by the user.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new calendar named &quot;Travel Plans&quot; with a summary and color.
 * var calendar = CalendarApp.createCalendar(&#39;Travel Plans&#39;, {
 *   summary: &#39;A calendar to plan my travel schedule.&#39;,
 *   color: CalendarApp.Color.BLUE
 * });
 * Logger.log(&#39;Created the calendar &quot;%s&quot;, with the ID &quot;%s&quot;.&#39;,
 *     calendar.getName(), calendar.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createCalendar
 * 
 * @param {String} name - the name of the new calendar
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.Calendar} the newly created calendar
 */


/**
 * Creates a new event.
 * 
 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
 * time zone, which may be different than the calendar's time zone.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
 *     new Date(&#39;July 21, 1969 21:00:00 UTC&#39;));
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startTime - the date and time when the event starts
 * @param {Date} endTime - the date and time when the event ends
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new event.
 * 
 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
 * time zone, which may be different than the calendar's time zone.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
 *     new Date(&#39;July 20, 1969 21:00:00 UTC&#39;),
 *     {location: &#39;The Moon&#39;});
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startTime - the date and time when the event starts
 * @param {Date} endTime - the date and time when the event ends
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates an event from a free-form description.
 * 
 * <p>The description should use the same format as the UI's <a
 * href="http://support.google.com/calendar/answer/36604">"Quick Add"</a> feature.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new event and logs its ID.
 * var event = CalendarApp.getDefaultCalendar()
 *     .createEventFromDescription(&#39;Lunch with Mary, Friday at 1PM&#39;);
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createEventFromDescription
 * 
 * @param {String} description - a free-form description of the event
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
 *         .until(new Date(&#39;January 1, 2014&#39;)));
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Creates a new event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
 *         .until(new Date(&#39;January 1, 2014&#39;)),
 *     {location: &#39;Conference Room&#39;});
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.createEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Gets all calendars that the user owns or is subscribed to.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many calendars the user can access.
 * var calendars = CalendarApp.getAllCalendars();
 * Logger.log(&#39;This user owns or is subscribed to %s calendars.&#39;,
 *     calendars.length);
 * </code></pre>
 * 
 * @function CalendarApp.getAllCalendars
 * 
 * @return {CalendarApp.Calendar[]} all calendars that the user can access
 */


/**
 * Gets all calendars that the user owns.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many calendars the user owns.
 * var calendars = CalendarApp.getAllOwnedCalendars();
 * Logger.log(&#39;This user owns %s calendars.&#39;, calendars.length);
 * </code></pre>
 * 
 * @function CalendarApp.getAllOwnedCalendars
 * 
 * @return {CalendarApp.Calendar[]} all calendars that the user owns
 */


/**
 * Gets the calendar with the given ID.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the public calendar &quot;US Holidays&quot; by ID.
 * var calendar = CalendarApp.getCalendarById(
 *     &#39;en.usa#holiday@group.v.calendar.google.com&#39;);
 * Logger.log(&#39;The calendar is named &quot;%s&quot;.&#39;, calendar.getName());
 * </code></pre>
 * 
 * @function CalendarApp.getCalendarById
 * 
 * @param {String} id - the calendar ID
 * 
 * @return {CalendarApp.Calendar} the calendar with the given ID, or <code>null</code> if the calendar does not exist, if the
 *     user cannot access it, or if the user is not subscribed to the calendar
 */


/**
 * Gets all calendars with a given name that the user owns or is subscribed to. Names are not
 * case-sensitive.
 * 
 * <pre class="prettyprint"><code>
 * // Gets the public calendar named &quot;US Holidays&quot;.
 * var calendars = CalendarApp.getCalendarsByName(&#39;US Holidays&#39;);
 * Logger.log(&#39;Found %s matching calendars.&#39;, calendars.length);
 * </code></pre>
 * 
 * @function CalendarApp.getCalendarsByName
 * 
 * @param {String} name - the calendar name
 * 
 * @return {CalendarApp.Calendar[]} all calendars with this name that the user can access
 */


/**
 * Gets the color of the calendar.
 * 
 * @function CalendarApp.getColor
 * 
 * @return {String} a hexadecimal color string ("#rrggbb")
 */


/**
 * Gets the user's default calendar.
 * 
 * <pre class="prettyprint"><code>
 * // Determines the time zone of the user&#39;s default calendar.
 * var calendar = CalendarApp.getDefaultCalendar();
 * Logger.log(&#39;My default calendar is set to the time zone &quot;%s&quot;.&#39;,
 *     calendar.getTimeZone());
 * </code></pre>
 * 
 * @function CalendarApp.getDefaultCalendar
 * 
 * @return {CalendarApp.Calendar} the user's default calendar
 */


/**
 * Gets the description of the calendar.
 * 
 * @function CalendarApp.getDescription
 * 
 * @return {String} the description of this calendar
 */


/**
 * Gets the event with the given ID. If the series belongs to a calendar other than the default
 * calendar, this method must be called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html'>CalendarApp</a></code>. Calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventById(String)'>getEventById(iCalId)</a></code> only
 * returns an event in the default calendar.
 * 
 * <p>Multiple events may have the same ID if they are part of an event series. In this case this
 * method returns only the first event from that series.
 * 
 * @function CalendarApp.getEventById
 * 
 * @param {String} iCalId - ID of the event
 * 
 * @return {CalendarApp.CalendarEvent} the event with the given ID, or <code>null</code> if the event doesn't exist or the user
 *     cannot access it.
 */


/**
 * Gets the event series with the given ID. If the ID given is for a single <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code>,
 * then a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> is returned with a single event in the series. Note that if
 * the event series belongs to a calendar other than the default calendar, this method must be
 * called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html'>CalendarApp</a></code>; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventSeriesById(String)'>getEventSeriesById(iCalId)</a></code>
 * directly only returns an event series that exists in the default calendar.
 * 
 * @function CalendarApp.getEventSeriesById
 * 
 * @param {String} iCalId - ID of the event series
 * 
 * @return {CalendarApp.CalendarEventSeries} the series with the given ID, or <code>null</code> if the series doesn't exist or the user
 *     cannot access it
 */


/**
 * Gets all events that occur within a given time range.
 * 
 * <p>This method returns events that start during the given time range, end during the time
 * range, or encompass the time range. If no time zone is specified, the time values are
 * interpreted in the context of the script's time zone, which may be different from the
 * calendar's time zone.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening in the next two hours.
 * var now = new Date();
 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.getEvents
 * 
 * @param {Date} startTime - the start of the time range
 * @param {Date} endTime - the end of the time range, non-inclusive
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that occur within the time range
 */


/**
 * Gets all events that occur within a given time range and meet the specified criteria.
 * 
 * <p>This method returns events that start during the given time range, ends during the time
 * range, or encompasses the time range. If no time zone is specified, the time values are
 * interpreted in the context of the script's time zone, which may be different from the
 * calendar's time zone.
 * 
 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
 * returned may be less than <code>max</code>, even though additional events meet the criteria.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening in the next two hours that contain the term
 * // &quot;meeting&quot;.
 * var now = new Date();
 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
 *     {search: &#39;meeting&#39;});
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.getEvents
 * 
 * @param {Date} startTime - the start of the time range
 * @param {Date} endTime - the end of the time range, non-inclusive
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that take place within the time range and match the criteria
 */


/**
 * Gets all events that occur on a given day.
 * 
 * <p>This method returns events if they start during the given day, end during the day, or
 * encompass the day.
 * 
 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
 * zone.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening today.
 * var today = new Date();
 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.getEventsForDay
 * 
 * @param {Date} date - the date to retrieve events for (only the day is used; the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that occur on the given date
 */


/**
 * Gets all events that occur on a given day and meet specified criteria.
 * 
 * <p>This method returns events if they start during the given day, end during the day, or
 * encompass the day.
 * 
 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
 * zone.
 * 
 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
 * returned may be less than <code>max</code>, even though additional events meet the criteria.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening today and contain the term &quot;meeting&quot;.
 * var today = new Date();
 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: &#39;meeting&#39;});
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.getEventsForDay
 * 
 * @param {Date} date - the date to retrieve events for (only the day is used; the time is ignored)
 * @param {Object} options - advanced filtering options
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that occur on the given date and match the criteria
 */


/**
 * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
 * 
 * @function CalendarApp.getId
 * 
 * @return {String} the ID of the calendar
 */


/**
 * Gets the name of the calendar.
 * 
 * @function CalendarApp.getName
 * 
 * @return {String} this calendar's name
 */


/**
 * Gets the calendar with the given ID, if the user owns it.
 * 
 * <p>To find a calendar ID, click the arrow next to the calendar's name in Google Calendar and
 * select <strong>Calendar settings</strong>. The ID is shown near the bottom of the settings
 * page.
 * 
 * <pre class="prettyprint"><code>
 * // Gets a (non-existent) private calendar by ID.
 * var calendar = CalendarApp.getOwnedCalendarById(
 *     &#39;123456789@group.calendar.google.com&#39;);
 * Logger.log(&#39;The calendar is named &quot;%s&quot;.&#39;, calendar.getName());
 * </code></pre>
 * 
 * @function CalendarApp.getOwnedCalendarById
 * 
 * @param {String} id - the calendar id
 * 
 * @return {CalendarApp.Calendar} the calendar with the given ID, or <code>null</code> if the calendar does not exist or the
 *     user does not own it
 */


/**
 * Gets all calendars with a given name that the user owns. Names are not case-sensitive.
 * 
 * <pre class="prettyprint"><code>
 * // Gets a private calendar named &quot;Travel Plans&quot;.
 * var calendars = CalendarApp.getOwnedCalendarsByName(&#39;Travel Plans&#39;);
 * Logger.log(&#39;Found %s matching calendars.&#39;, calendars.length);
 * </code></pre>
 * 
 * @function CalendarApp.getOwnedCalendarsByName
 * 
 * @param {String} name - the calendar name
 * 
 * @return {CalendarApp.Calendar[]} all calendars with this name that the user owns
 */


/**
 * Gets the time zone of the calendar.
 * 
 * @function CalendarApp.getTimeZone
 * 
 * @return {String} the time zone, specified in "long" format (e.g., "America/New_York", as listed by <a
 *     href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 */


/**
 * Determines whether the calendar is hidden in the user interface.
 * 
 * @function CalendarApp.isHidden
 * 
 * @return {Boolean} <code>true</code> if the calendar is hidden in the user interface; <code>false</code> if not
 */


/**
 * Determines whether the calendar is the default calendar for the effective user.
 * 
 * @function CalendarApp.isMyPrimaryCalendar
 * 
 * @return {Boolean} <code>true</code> if the calendar is the default calendar for the effective user; <code>false</code> if not
 */


/**
 * Determines whether the calendar is owned by the effective user.
 * 
 * @function CalendarApp.isOwnedByMe
 * 
 * @return {Boolean} <code>true</code> if the calendar is owned by the effective user; <code>false</code> if not
 */


/**
 * Determines whether the calendar's events are displayed in the user interface.
 * 
 * @function CalendarApp.isSelected
 * 
 * @return {Boolean} <code>true</code> if the calendar's events are displayed in the user interface; <code>false</code> if not
 */


/**
 * Creates a new recurrence object, which can be used to create rules for event recurrence.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
 *     .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
 *     .until(new Date(&#39;January 1, 2014&#39;));
 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
 *     recurrence);
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.newRecurrence
 * 
 * @return {CalendarApp.EventRecurrence} a new recurrence object with no rules set (behaves as a weekly recurrence)
 */


/**
 * Sets the color of the calendar.
 * 
 * @function CalendarApp.setColor
 * 
 * @param {String} color - a hexadecimal color string ("#rrggbb") or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/color.html'>CalendarApp.Colors</a></code>
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets the description of the calendar.
 * 
 * @function CalendarApp.setDescription
 * 
 * @param {String} description - the description of this calendar
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets whether the calendar is visible in the user interface.
 * 
 * @function CalendarApp.setHidden
 * 
 * @param {Boolean} hidden - <code>true</code> to hide the calendar in the user interface; <code>false</code> to show it
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets the name of the calendar.
 * 
 * @function CalendarApp.setName
 * 
 * @param {String} name - the new name
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets whether the calendar's events are displayed in the user interface.
 * 
 * @function CalendarApp.setSelected
 * 
 * @param {Boolean} selected - <code>true</code> to show the calendar's events in the user interface; <code>false</code>
 *     to hide them
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets the time zone of the calendar.
 * 
 * @function CalendarApp.setTimeZone
 * 
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.
 * 
 * <pre class="prettyprint"><code>
 * // Subscribe to the calendar &quot;US Holidays&quot;.
 * var calendar = CalendarApp.subscribeToCalendar(
 *     &#39;en.usa#holiday@group.v.calendar.google.com&#39;);
 * Logger.log(&#39;Subscribed to the calendar &quot;%s&quot;.&#39;, calendar.getName());
 * </code></pre>
 * 
 * @function CalendarApp.subscribeToCalendar
 * 
 * @param {String} id - the ID of the calendar to subscribe to
 * 
 * @return {CalendarApp.Calendar} the newly subscribed to calendar
 */


/**
 * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.
 * 
 * <pre class="prettyprint"><code>
 * // Subscribe to the calendar &quot;US Holidays&quot;, and set it to the color blue.
 * var calendar = CalendarApp.subscribeToCalendar(
 *     &#39;en.usa#holiday@group.v.calendar.google.com&#39;,
 *     { color: CalendarApp.Color.BLUE });
 * Logger.log(&#39;Subscribed to the calendar &quot;%s&quot;.&#39;, calendar.getName());
 * </code></pre>
 * 
 * @function CalendarApp.subscribeToCalendar
 * 
 * @param {String} id - the ID of the calendar to subscribe to
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.Calendar} the newly subscribed calendar
 */



/**
 * @class CalendarApp.Calendar
 */

/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969&#39;));
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} date - the date of the event (only the day is used; the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
 *     new Date(&#39;August 15, 1969&#39;),
 *     new Date(&#39;August 18, 1969&#39;));
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startDate - the date when the event starts (only the day is used; the time is ignored)
 * @param {Date} endDate - the date when the event ends (only the day is used; the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
 *     new Date(&#39;August 15, 1969&#39;),
 *     new Date(&#39;August 18, 1969&#39;),
 *     {location: &#39;Bethel, White Lake, New York, U.S.&#39;, sendInvites: true});
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startDate - the date when the event starts (only the day is used; the time is ignored)
 * @param {Date} endDate - the date when the event ends (only the day is used; the time is ignored)
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an all-day event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969&#39;),
 *     {location: &#39;The Moon&#39;});
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createAllDayEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} date - the date of the event (only the day is used; the time is ignored)
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new all-day event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
 *         .until(new Date(&#39;January 1, 2014&#39;)));
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createAllDayEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
 *     ignored)
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Creates a new all-day event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
 *         .until(new Date(&#39;January 1, 2014&#39;)),
 *     {guests: &#39;everyone@example.com&#39;});
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createAllDayEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
 *     ignored)
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Creates a new event.
 * 
 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
 * time zone, which may be different than the calendar's time zone.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
 *     new Date(&#39;July 21, 1969 21:00:00 UTC&#39;));
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startTime - the date and time when the event starts
 * @param {Date} endTime - the date and time when the event ends
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new event.
 * 
 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
 * time zone, which may be different than the calendar's time zone.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event for the moon landing and logs the ID.
 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
 *     new Date(&#39;July 20, 1969 21:00:00 UTC&#39;),
 *     {location: &#39;The Moon&#39;});
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createEvent
 * 
 * @param {String} title - the title of the event
 * @param {Date} startTime - the date and time when the event starts
 * @param {Date} endTime - the date and time when the event ends
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates an event from a free-form description.
 * 
 * <p>The description should use the same format as the UI's <a
 * href="http://support.google.com/calendar/answer/36604">"Quick Add"</a> feature.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a new event and logs its ID.
 * var event = CalendarApp.getDefaultCalendar()
 *     .createEventFromDescription(&#39;Lunch with Mary, Friday at 1PM&#39;);
 * Logger.log(&#39;Event ID: &#39; + event.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createEventFromDescription
 * 
 * @param {String} description - a free-form description of the event
 * 
 * @return {CalendarApp.CalendarEvent} the created event
 */


/**
 * Creates a new event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
 *         .until(new Date(&#39;January 1, 2014&#39;)));
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Creates a new event series.
 * 
 * <pre class="prettyprint"><code>
 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
 *     CalendarApp.newRecurrence().addWeeklyRule()
 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
 *         .until(new Date(&#39;January 1, 2014&#39;)),
 *     {location: &#39;Conference Room&#39;});
 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#createEventSeries
 * 
 * @param {String} title - the title of the events in the series
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence settings of the event series
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEventSeries} the created event series
 */


/**
 * Deletes the calendar permanently. A user can only delete a calendar they own.
 * 
 * @function CalendarApp.Calendar#deleteCalendar
 * 
 * @return void
 */


/**
 * Gets the color of the calendar.
 * 
 * @function CalendarApp.Calendar#getColor
 * 
 * @return {String} a hexadecimal color string ("#rrggbb")
 */


/**
 * Gets the description of the calendar.
 * 
 * @function CalendarApp.Calendar#getDescription
 * 
 * @return {String} the description of this calendar
 */


/**
 * Gets the event with the given ID. If the series belongs to a calendar other than the default
 * calendar, this method must be called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar.html'>Calendar</a></code>. Calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventById(String)'>CalendarApp.getEventById(iCalId)</a></code> only
 * returns an event in the default calendar.
 * 
 * <p>Multiple events may have the same ID if they are part of an event series. In this case this
 * method returns only the first event from that series.
 * 
 * @function CalendarApp.Calendar#getEventById
 * 
 * @param {String} iCalId - ID of the event
 * 
 * @return {CalendarApp.CalendarEvent} the event with the given ID, or <code>null</code> if the event doesn't exist or the user
 *     cannot access it.
 */


/**
 * Gets the event series with the given ID. If the ID given is for a single <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code>,
 * then a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> is returned with a single event in the series. Note that if
 * the event series belongs to a calendar other than the default calendar, this method must be
 * called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar.html'>Calendar</a></code>; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventSeriesById(String)'>CalendarApp.getEventSeriesById(iCalId)</a></code>
 * directly only returns an event series that exists in the default calendar.
 * 
 * @function CalendarApp.Calendar#getEventSeriesById
 * 
 * @param {String} iCalId - ID of the event series
 * 
 * @return {CalendarApp.CalendarEventSeries} the series with the given ID, or <code>null</code> if the series doesn't exist or the user
 *     cannot access it
 */


/**
 * Gets all events that occur within a given time range.
 * 
 * <p>This method returns events that start during the given time range, end during the time
 * range, or encompass the time range. If no time zone is specified, the time values are
 * interpreted in the context of the script's time zone, which may be different from the
 * calendar's time zone.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening in the next two hours.
 * var now = new Date();
 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#getEvents
 * 
 * @param {Date} startTime - the start of the time range
 * @param {Date} endTime - the end of the time range, non-inclusive
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that occur within the time range
 */


/**
 * Gets all events that occur within a given time range and meet the specified criteria.
 * 
 * <p>This method returns events that start during the given time range, ends during the time
 * range, or encompasses the time range. If no time zone is specified, the time values are
 * interpreted in the context of the script's time zone, which may be different from the
 * calendar's time zone.
 * 
 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
 * returned may be less than <code>max</code>, even though additional events meet the criteria.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening in the next two hours that contain the term
 * // &quot;meeting&quot;.
 * var now = new Date();
 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
 *     {search: &#39;meeting&#39;});
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#getEvents
 * 
 * @param {Date} startTime - the start of the time range
 * @param {Date} endTime - the end of the time range, non-inclusive
 * @param {Object} options - a JavaScript object that specifies advanced parameters, as listed below
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that take place within the time range and match the criteria
 */


/**
 * Gets all events that occur on a given day.
 * 
 * <p>This method returns events if they start during the given day, end during the day, or
 * encompass the day.
 * 
 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
 * zone.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening today.
 * var today = new Date();
 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#getEventsForDay
 * 
 * @param {Date} date - the date to retrieve events for (only the day is used; the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that occur on the given date
 */


/**
 * Gets all events that occur on a given day and meet specified criteria.
 * 
 * <p>This method returns events if they start during the given day, end during the day, or
 * encompass the day.
 * 
 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
 * zone.
 * 
 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
 * returned may be less than <code>max</code>, even though additional events meet the criteria.
 * 
 * <pre class="prettyprint"><code>
 * // Determines how many events are happening today and contain the term &quot;meeting&quot;.
 * var today = new Date();
 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: &#39;meeting&#39;});
 * Logger.log(&#39;Number of events: &#39; + events.length);
 * </code></pre>
 * 
 * @function CalendarApp.Calendar#getEventsForDay
 * 
 * @param {Date} date - the date to retrieve events for (only the day is used; the time is ignored)
 * @param {Object} options - advanced filtering options
 * 
 * @return {CalendarApp.CalendarEvent[]} the events that occur on the given date and match the criteria
 */


/**
 * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
 * 
 * @function CalendarApp.Calendar#getId
 * 
 * @return {String} the ID of the calendar
 */


/**
 * Gets the name of the calendar.
 * 
 * @function CalendarApp.Calendar#getName
 * 
 * @return {String} this calendar's name
 */


/**
 * Gets the time zone of the calendar.
 * 
 * @function CalendarApp.Calendar#getTimeZone
 * 
 * @return {String} the time zone, specified in "long" format (e.g., "America/New_York", as listed by <a
 *     href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 */


/**
 * Determines whether the calendar is hidden in the user interface.
 * 
 * @function CalendarApp.Calendar#isHidden
 * 
 * @return {Boolean} <code>true</code> if the calendar is hidden in the user interface; <code>false</code> if not
 */


/**
 * Determines whether the calendar is the default calendar for the effective user.
 * 
 * @function CalendarApp.Calendar#isMyPrimaryCalendar
 * 
 * @return {Boolean} <code>true</code> if the calendar is the default calendar for the effective user; <code>false</code> if not
 */


/**
 * Determines whether the calendar is owned by the effective user.
 * 
 * @function CalendarApp.Calendar#isOwnedByMe
 * 
 * @return {Boolean} <code>true</code> if the calendar is owned by the effective user; <code>false</code> if not
 */


/**
 * Determines whether the calendar's events are displayed in the user interface.
 * 
 * @function CalendarApp.Calendar#isSelected
 * 
 * @return {Boolean} <code>true</code> if the calendar's events are displayed in the user interface; <code>false</code> if not
 */


/**
 * Sets the color of the calendar.
 * 
 * @function CalendarApp.Calendar#setColor
 * 
 * @param {String} color - a hexadecimal color string ("#rrggbb") or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/color.html'>CalendarApp.Colors</a></code>
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets the description of the calendar.
 * 
 * @function CalendarApp.Calendar#setDescription
 * 
 * @param {String} description - the description of this calendar
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets whether the calendar is visible in the user interface.
 * 
 * @function CalendarApp.Calendar#setHidden
 * 
 * @param {Boolean} hidden - <code>true</code> to hide the calendar in the user interface; <code>false</code> to show it
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets the name of the calendar.
 * 
 * @function CalendarApp.Calendar#setName
 * 
 * @param {String} name - the new name
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets whether the calendar's events are displayed in the user interface.
 * 
 * @function CalendarApp.Calendar#setSelected
 * 
 * @param {Boolean} selected - <code>true</code> to show the calendar's events in the user interface; <code>false</code>
 *     to hide them
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Sets the time zone of the calendar.
 * 
 * @function CalendarApp.Calendar#setTimeZone
 * 
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 * 
 * @return {CalendarApp.Calendar} this calendar for chaining
 */


/**
 * Unsubscribes the user from the calendar. A user cannot unsubscribe from a calendar they own.
 * 
 * @function CalendarApp.Calendar#unsubscribeFromCalendar
 * 
 * @return void
 */



/**
 * @class CalendarApp.CalendarEvent
 */

/**
 * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
 * weeks (40320 minutes), before the event.
 * 
 * @function CalendarApp.CalendarEvent#addEmailReminder
 * 
 * @param {IntegerNum} minutesBefore - the number of minutes before the event
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Adds a guest to the event.
 * 
 * @function CalendarApp.CalendarEvent#addGuest
 * 
 * @param {String} email - the email address of the guest
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most 4
 * weeks (40320 minutes), before the event.
 * 
 * @function CalendarApp.CalendarEvent#addPopupReminder
 * 
 * @param {IntegerNum} minutesBefore - the number of minutes before the event
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
 * weeks (40320 minutes), before the event.
 * 
 * @function CalendarApp.CalendarEvent#addSmsReminder
 * 
 * @param {IntegerNum} minutesBefore - the number of minutes before the event
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Determines whether anyone can invite themselves.
 * 
 * @function CalendarApp.CalendarEvent#anyoneCanAddSelf
 * 
 * @return {Boolean} <code>true</code> if non-guests can add themselves to the event; <code>false</code> if not
 */


/**
 * Deletes the event.
 * 
 * @function CalendarApp.CalendarEvent#deleteEvent
 * 
 * @return void
 */


/**
 * Deletes a key/value tag from the event.
 * 
 * @function CalendarApp.CalendarEvent#deleteTag
 * 
 * @param {String} key - the tag key
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Gets the date on which this all-day calendar event ends. (If this is not an all-day event, then
 * this method throws an exception.) The returned <code>Date</code> represents midnight at the
 * beginning of the day after the event ends <em>in the script's time zone</em>. To use the
 * calendar's time zone instead, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getEndTime()'>getEndTime()</a></code>.
 * 
 * @function CalendarApp.CalendarEvent#getAllDayEndDate
 * 
 * @return {Date} this all-day calendar event's end date
 */


/**
 * Gets the date on which this all-day calendar event begins. (If this is not an all-day event,
 * then this method throws an exception.) The returned <code>Date</code> represents midnight at the
 * beginning of the day on which the event starts <em>in the script's time zone</em>. To use the
 * calendar's time zone instead, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getStartTime()'>getStartTime()</a></code>.
 * 
 * @function CalendarApp.CalendarEvent#getAllDayStartDate
 * 
 * @return {Date} this all-day calendar event's start date
 */


/**
 * Gets all keys for tags that have been set on the event.
 * 
 * @function CalendarApp.CalendarEvent#getAllTagKeys
 * 
 * @return {String[]} an array of string keys
 */


/**
 * Returns the color of the calendar event.
 * 
 * @function CalendarApp.CalendarEvent#getColor
 * 
 * @return {String} the string representation of the event color, as an index (1-11) of values from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
 */


/**
 * Gets the creators of the event.
 * 
 * @function CalendarApp.CalendarEvent#getCreators
 * 
 * @return {String[]} the email addresses of the event's creators
 */


/**
 * Gets the date the event was created.
 * 
 * @function CalendarApp.CalendarEvent#getDateCreated
 * 
 * @return {Date} the date of creation
 */


/**
 * Gets the description of the event.
 * 
 * @function CalendarApp.CalendarEvent#getDescription
 * 
 * @return {String} the description
 */


/**
 * Gets the minute values for all email reminders for the event.
 * 
 * @function CalendarApp.CalendarEvent#getEmailReminders
 * 
 * @return {IntegerNum[]} an array in which each value corresponds to the number of minutes before the event that
 *     a reminder triggers
 */


/**
 * Gets the date and time at which this calendar event ends. For non&ndash;all-day events, this is
 * the instant in time at which the event was defined to end. For all-day events, which only store
 * an end date (not a date and time), this is midnight at the beginning of the day after the event
 * ends <em>in the calendar's time zone</em>. This allows meaningful comparison of end times for
 * all types of events; however, it does not necessarily preserve the original day-of-year
 * unmodified.
 * 
 * <p>For <a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()'>all-day events</a>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayEndDate()'>getAllDayEndDate()</a></code> should almost
 * always be called in preference to this method.
 * 
 * @function CalendarApp.CalendarEvent#getEndTime
 * 
 * @return {Date} this calendar event's end time
 */


/**
 * Gets the series of recurring events that this event belongs to. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code>
 * object is returned even if this event doesn't belong to a series, so that you can add new
 * recurrence settings.
 * 
 * @function CalendarApp.CalendarEvent#getEventSeries
 * 
 * @return {CalendarApp.CalendarEventSeries} the event series this event belongs to, or a new event series if it does not yet belong
 *     to a series
 */


/**
 * Gets a guest by email address.
 * 
 * @function CalendarApp.CalendarEvent#getGuestByEmail
 * 
 * @param {String} email - the address of the guest
 * 
 * @return {CalendarApp.EventGuest} the guest, or null if the email address does not correspond to a guest
 */


/**
 * Gets the guests for the event, not including the event owner.
 * 
 * @function CalendarApp.CalendarEvent#getGuestList
 * 
 * @return {CalendarApp.EventGuest[]} an array of the guests
 */


/**
 * Gets the guests for the event, potentially including the event owners.
 * 
 * @function CalendarApp.CalendarEvent#getGuestList
 * 
 * @param {Boolean} includeOwner - whether to include the owners as a guest
 * 
 * @return {CalendarApp.EventGuest[]} an array of the guests
 */


/**
 * Gets the unique iCalUID of the event. Note that the iCalUID and the event <a
 * href="calendar/v3/reference/events#resource-representations"><code>id</code></a> used by the <a
 * href="calendar/v3/reference/">Calendar v3 API</a> and <a
 * href="/apps-script/advanced/calendar">Calendar advanced service</a> are not identical and
 * cannot be used interchangebly. One difference in their semantics is that in recurring events
 * all occurrences of one event have different <code>ids</code> while they all share the same iCalUIDs.
 * 
 * @function CalendarApp.CalendarEvent#getId
 * 
 * @return {String} the iCalUID of the event
 */


/**
 * Gets the date the event was last updated.
 * 
 * @function CalendarApp.CalendarEvent#getLastUpdated
 * 
 * @return {Date} the last updated date
 */


/**
 * Gets the location of the event.
 * 
 * @function CalendarApp.CalendarEvent#getLocation
 * 
 * @return {String} the event location
 */


/**
 * Gets the event status (attending, etc.) of the effective user. Always returns <code>GuestStatus.OWNER</code> if the effective user is the owner of the event.
 * 
 * @function CalendarApp.CalendarEvent#getMyStatus
 * 
 * @return {CalendarApp.GuestStatus} the status
 */


/**
 * Get the ID of the calendar where this event was originally created.
 * 
 * @function CalendarApp.CalendarEvent#getOriginalCalendarId
 * 
 * @return {String} the ID of the original calendar
 */


/**
 * Gets the minute values for all popup reminders for the event.
 * 
 * @function CalendarApp.CalendarEvent#getPopupReminders
 * 
 * @return {IntegerNum[]} an array in which each value corresponds to the number of minutes before the event that
 *     a reminder triggers
 */


/**
 * Gets the minute values for all SMS reminders for the event.
 * 
 * @function CalendarApp.CalendarEvent#getSmsReminders
 * 
 * @return {IntegerNum[]} an array in which each value corresponds to the number of minutes before the event that
 *     a reminder triggers
 */


/**
 * Gets the date and time at which this calendar event begins. For non&ndash;all-day events, this
 * is the instant in time at which the event was defined to start. For all-day events, which only
 * store a start date (not a date and time), this is midnight at the beginning of the day on which
 * the event starts <em>in the calendar's time zone</em>. This allows meaningful comparison of
 * start times for all types of events; however, it is not necessarily preserve the original
 * day-of-year unmodified.
 * 
 * <p>For <a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()'>all-day events</a>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayStartDate()'>getAllDayStartDate()</a></code> should
 * almost always be called in preference to this method.
 * 
 * @function CalendarApp.CalendarEvent#getStartTime
 * 
 * @return {Date} this calendar event's start time
 */


/**
 * Gets a tag value of the event.
 * 
 * @function CalendarApp.CalendarEvent#getTag
 * 
 * @param {String} key - the key
 * 
 * @return {String} the tag value
 */


/**
 * Gets the title of the event.
 * 
 * @function CalendarApp.CalendarEvent#getTitle
 * 
 * @return {String} the title
 */


/**
 * Gets the visibility of the event.
 * 
 * @function CalendarApp.CalendarEvent#getVisibility
 * 
 * @return {CalendarApp.Visibility} the visibility value
 */


/**
 * Determines whether guests can invite other guests.
 * 
 * @function CalendarApp.CalendarEvent#guestsCanInviteOthers
 * 
 * @return {Boolean} <code>true</code> if guests can invite others; <code>false</code> if not
 */


/**
 * Determines whether guests can modify the event.
 * 
 * @function CalendarApp.CalendarEvent#guestsCanModify
 * 
 * @return {Boolean} <code>true</code> if guests can modify the event; <code>false</code> if not
 */


/**
 * Determines whether guests can see other guests.
 * 
 * @function CalendarApp.CalendarEvent#guestsCanSeeGuests
 * 
 * @return {Boolean} <code>true</code> if guests can see other guests; <code>false</code> if not
 */


/**
 * Determines whether this is an all-day event.
 * 
 * @function CalendarApp.CalendarEvent#isAllDayEvent
 * 
 * @return {Boolean} <code>true</code> if the event is all-day; <code>false</code> if not
 */


/**
 * Determines whether the event is owned by the effective user.
 * 
 * @function CalendarApp.CalendarEvent#isOwnedByMe
 * 
 * @return {Boolean} <code>true</code> if the event is owned by the effective user; <code>false</code> if not
 */


/**
 * Determines whether the event is part of an event series.
 * 
 * @function CalendarApp.CalendarEvent#isRecurringEvent
 * 
 * @return {Boolean} <code>true</code> if the event is part of an event series; <code>false</code> if not
 */


/**
 * Removes all reminders from the event.
 * 
 * @function CalendarApp.CalendarEvent#removeAllReminders
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Removes a guest from the event.
 * 
 * @function CalendarApp.CalendarEvent#removeGuest
 * 
 * @param {String} email - the email address of the guest
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Resets the reminders using the calendar's default settings.
 * 
 * @function CalendarApp.CalendarEvent#resetRemindersToDefault
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets the date of the event. Applying this method changes a regular event into an all-day event.
 * 
 * @function CalendarApp.CalendarEvent#setAllDayDate
 * 
 * @param {Date} date - the date for the event (the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent} this CalendarEvent for chaining
 */


/**
 * Sets the dates of the event. Applying this method changes a regular event into an all-day
 * event.
 * 
 * @function CalendarApp.CalendarEvent#setAllDayDates
 * 
 * @param {Date} startDate - the date when the event starts (the time is ignored)
 * @param {Date} endDate - the date when the event ends (the time is ignored)
 * 
 * @return {CalendarApp.CalendarEvent} this CalendarEvent for chaining
 */


/**
 * Sets whether non-guests can add themselves to the event.
 * 
 * @function CalendarApp.CalendarEvent#setAnyoneCanAddSelf
 * 
 * @param {Boolean} anyoneCanAddSelf - whether anyone can invite themselves
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets the color of the calendar event.
 * 
 * @function CalendarApp.CalendarEvent#setColor
 * 
 * @param {String} color - an integer color index as a string, or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
 * 
 * @return {CalendarApp.CalendarEvent} this calendar event, for chaining
 */


/**
 * Sets the description of the event.
 * 
 * @function CalendarApp.CalendarEvent#setDescription
 * 
 * @param {String} description - the new description
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets whether guests can invite other guests.
 * 
 * @function CalendarApp.CalendarEvent#setGuestsCanInviteOthers
 * 
 * @param {Boolean} guestsCanInviteOthers - whether guests can invite others
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets whether guests can modify the event.
 * 
 * @function CalendarApp.CalendarEvent#setGuestsCanModify
 * 
 * @param {Boolean} guestsCanModify - whether guests can modify the event
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets whether guests can see other guests.
 * 
 * @function CalendarApp.CalendarEvent#setGuestsCanSeeGuests
 * 
 * @param {Boolean} guestsCanSeeGuests - whether guests can see others
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets the location of the event.
 * 
 * @function CalendarApp.CalendarEvent#setLocation
 * 
 * @param {String} location - the new location
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets the event status (attending, etc.) of the effective user.
 * 
 * @function CalendarApp.CalendarEvent#setMyStatus
 * 
 * @param {CalendarApp.GuestStatus} status - the new status
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets a key/value tag on the event, for storing custom metadata.
 * 
 * @function CalendarApp.CalendarEvent#setTag
 * 
 * @param {String} key - the tag key
 * @param {String} value - the tag value
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets the dates and times for the start and end of the event. Applying this method changes an
 * all-day event into a regular event.
 * 
 * @function CalendarApp.CalendarEvent#setTime
 * 
 * @param {Date} startTime - the new start of the event
 * @param {Date} endTime - the new end of the event
 * 
 * @return {CalendarApp.CalendarEvent} this CalendarEvent for chaining
 */


/**
 * Sets the title of the event.
 * 
 * @function CalendarApp.CalendarEvent#setTitle
 * 
 * @param {String} title - the new title
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */


/**
 * Sets the visibility of the event.
 * 
 * @function CalendarApp.CalendarEvent#setVisibility
 * 
 * @param {CalendarApp.Visibility} visibility
 * 
 * @return {CalendarApp.CalendarEvent} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
 */



/**
 * @class CalendarApp.CalendarEventSeries
 */

/**
 * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
 * weeks (40320 minutes), before the event.
 * 
 * @function CalendarApp.CalendarEventSeries#addEmailReminder
 * 
 * @param {IntegerNum} minutesBefore - the number of minutes before the event
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Adds a guest to the event.
 * 
 * @function CalendarApp.CalendarEventSeries#addGuest
 * 
 * @param {String} email - the email address of the guest
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most 4
 * weeks (40320 minutes), before the event.
 * 
 * @function CalendarApp.CalendarEventSeries#addPopupReminder
 * 
 * @param {IntegerNum} minutesBefore - the number of minutes before the event
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
 * weeks (40320 minutes), before the event.
 * 
 * @function CalendarApp.CalendarEventSeries#addSmsReminder
 * 
 * @param {IntegerNum} minutesBefore - the number of minutes before the event
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Determines whether anyone can invite themselves.
 * 
 * @function CalendarApp.CalendarEventSeries#anyoneCanAddSelf
 * 
 * @return {Boolean} <code>true</code> if non-guests can add themselves to the event; <code>false</code> if not
 */


/**
 * Deletes the event series.
 * 
 * @function CalendarApp.CalendarEventSeries#deleteEventSeries
 * 
 * @return void
 */


/**
 * Deletes a key/value tag from the event.
 * 
 * @function CalendarApp.CalendarEventSeries#deleteTag
 * 
 * @param {String} key - the tag key
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Gets all keys for tags that have been set on the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getAllTagKeys
 * 
 * @return {String[]} an array of string keys
 */


/**
 * Returns the color of the calendar event.
 * 
 * @function CalendarApp.CalendarEventSeries#getColor
 * 
 * @return {String} the string representation of the event color, as an index (1-11) of values from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
 */


/**
 * Gets the creators of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getCreators
 * 
 * @return {String[]} the email addresses of the event's creators
 */


/**
 * Gets the date the event was created.
 * 
 * @function CalendarApp.CalendarEventSeries#getDateCreated
 * 
 * @return {Date} the date of creation
 */


/**
 * Gets the description of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getDescription
 * 
 * @return {String} the description
 */


/**
 * Gets the minute values for all email reminders for the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getEmailReminders
 * 
 * @return {IntegerNum[]} an array in which each value corresponds to the number of minutes before the event that
 *     a reminder triggers
 */


/**
 * Gets a guest by email address.
 * 
 * @function CalendarApp.CalendarEventSeries#getGuestByEmail
 * 
 * @param {String} email - the address of the guest
 * 
 * @return {CalendarApp.EventGuest} the guest, or null if the email address does not correspond to a guest
 */


/**
 * Gets the guests for the event, not including the event owner.
 * 
 * @function CalendarApp.CalendarEventSeries#getGuestList
 * 
 * @return {CalendarApp.EventGuest[]} an array of the guests
 */


/**
 * Gets the guests for the event, potentially including the event owners.
 * 
 * @function CalendarApp.CalendarEventSeries#getGuestList
 * 
 * @param {Boolean} includeOwner - whether to include the owners as a guest
 * 
 * @return {CalendarApp.EventGuest[]} an array of the guests
 */


/**
 * Gets the unique iCalUID of the event. Note that the iCalUID and the event <a
 * href="calendar/v3/reference/events#resource-representations"><code>id</code></a> used by the <a
 * href="calendar/v3/reference/">Calendar v3 API</a> and <a
 * href="/apps-script/advanced/calendar">Calendar advanced service</a> are not identical and
 * cannot be used interchangebly. One difference in their semantics is that in recurring events
 * all occurrences of one event have different <code>ids</code> while they all share the same iCalUIDs.
 * 
 * @function CalendarApp.CalendarEventSeries#getId
 * 
 * @return {String} the iCalUID of the event
 */


/**
 * Gets the date the event was last updated.
 * 
 * @function CalendarApp.CalendarEventSeries#getLastUpdated
 * 
 * @return {Date} the last updated date
 */


/**
 * Gets the location of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getLocation
 * 
 * @return {String} the event location
 */


/**
 * Gets the event status (attending, etc.) of the effective user. Always returns <code>GuestStatus.OWNER</code> if the effective user is the owner of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getMyStatus
 * 
 * @return {CalendarApp.GuestStatus} the status
 */


/**
 * Get the ID of the calendar where this event was originally created.
 * 
 * @function CalendarApp.CalendarEventSeries#getOriginalCalendarId
 * 
 * @return {String} the ID of the original calendar
 */


/**
 * Gets the minute values for all popup reminders for the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getPopupReminders
 * 
 * @return {IntegerNum[]} an array in which each value corresponds to the number of minutes before the event that
 *     a reminder triggers
 */


/**
 * Gets the minute values for all SMS reminders for the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getSmsReminders
 * 
 * @return {IntegerNum[]} an array in which each value corresponds to the number of minutes before the event that
 *     a reminder triggers
 */


/**
 * Gets a tag value of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getTag
 * 
 * @param {String} key - the key
 * 
 * @return {String} the tag value
 */


/**
 * Gets the title of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getTitle
 * 
 * @return {String} the title
 */


/**
 * Gets the visibility of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#getVisibility
 * 
 * @return {CalendarApp.Visibility} the visibility value
 */


/**
 * Determines whether guests can invite other guests.
 * 
 * @function CalendarApp.CalendarEventSeries#guestsCanInviteOthers
 * 
 * @return {Boolean} <code>true</code> if guests can invite others; <code>false</code> if not
 */


/**
 * Determines whether guests can modify the event.
 * 
 * @function CalendarApp.CalendarEventSeries#guestsCanModify
 * 
 * @return {Boolean} <code>true</code> if guests can modify the event; <code>false</code> if not
 */


/**
 * Determines whether guests can see other guests.
 * 
 * @function CalendarApp.CalendarEventSeries#guestsCanSeeGuests
 * 
 * @return {Boolean} <code>true</code> if guests can see other guests; <code>false</code> if not
 */


/**
 * Determines whether the event is owned by the effective user.
 * 
 * @function CalendarApp.CalendarEventSeries#isOwnedByMe
 * 
 * @return {Boolean} <code>true</code> if the event is owned by the effective user; <code>false</code> if not
 */


/**
 * Removes all reminders from the event.
 * 
 * @function CalendarApp.CalendarEventSeries#removeAllReminders
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Removes a guest from the event.
 * 
 * @function CalendarApp.CalendarEventSeries#removeGuest
 * 
 * @param {String} email - the email address of the guest
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Resets the reminders using the calendar's default settings.
 * 
 * @function CalendarApp.CalendarEventSeries#resetRemindersToDefault
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets whether non-guests can add themselves to the event.
 * 
 * @function CalendarApp.CalendarEventSeries#setAnyoneCanAddSelf
 * 
 * @param {Boolean} anyoneCanAddSelf - whether anyone can invite themselves
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets the color of the calendar event.
 * 
 * @function CalendarApp.CalendarEventSeries#setColor
 * 
 * @param {String} color - an integer color index as a string, or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
 * 
 * @return {CalendarApp.CalendarEventSeries} this calendar event, for chaining
 */


/**
 * Sets the description of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#setDescription
 * 
 * @param {String} description - the new description
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets whether guests can invite other guests.
 * 
 * @function CalendarApp.CalendarEventSeries#setGuestsCanInviteOthers
 * 
 * @param {Boolean} guestsCanInviteOthers - whether guests can invite others
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets whether guests can modify the event.
 * 
 * @function CalendarApp.CalendarEventSeries#setGuestsCanModify
 * 
 * @param {Boolean} guestsCanModify - whether guests can modify the event
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets whether guests can see other guests.
 * 
 * @function CalendarApp.CalendarEventSeries#setGuestsCanSeeGuests
 * 
 * @param {Boolean} guestsCanSeeGuests - whether guests can see others
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets the location of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#setLocation
 * 
 * @param {String} location - the new location
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets the event status (attending, etc.) of the effective user.
 * 
 * @function CalendarApp.CalendarEventSeries#setMyStatus
 * 
 * @param {CalendarApp.GuestStatus} status - the new status
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets the recurrence rules for an all-day event series. Applying this method changes a regular
 * event series into an all-day event series.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the events in a series to take place every Wednesday in 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(&#39;123456789@google.com&#39;);
 * var startDate = new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;);
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
 *     .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
 *     .until(new Date(&#39;January 1, 2014&#39;));
 * eventSeries.setRecurrence(recurrence, startDate);
 * </code></pre>
 * 
 * @function CalendarApp.CalendarEventSeries#setRecurrence
 * 
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence rules to use
 * @param {Date} startDate - the date of the first event in the series (only the day is used; the time is
 *     ignored)
 * 
 * @return {CalendarApp.CalendarEventSeries} this CalendarEventSeries for chaining
 */


/**
 * Sets the recurrence rules for this event series. Applying this method changes an all-day event
 * series into a regular event series.
 * 
 * <pre class="prettyprint"><code>
 * // Sets the events in a series to take place from 3pm to 4pm every Tuesday and Thursday in
 * // 2013.
 * var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(&#39;123456789@google.com&#39;);
 * var startTime = new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;);
 * var endTime = new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;);
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
 *      .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
 *      .until(new Date(&#39;January 1, 2014&#39;));
 * eventSeries.setRecurrence(recurrence, startTime, endTime);
 * </code></pre>
 * 
 * @function CalendarApp.CalendarEventSeries#setRecurrence
 * 
 * @param {CalendarApp.EventRecurrence} recurrence - the recurrence rules to use
 * @param {Date} startTime - the date and time when the first event in the series starts
 * @param {Date} endTime - the date and time when the first event in the series ends
 * 
 * @return {CalendarApp.CalendarEventSeries} this CalendarEventSeries for chaining
 */


/**
 * Sets a key/value tag on the event, for storing custom metadata.
 * 
 * @function CalendarApp.CalendarEventSeries#setTag
 * 
 * @param {String} key - the tag key
 * @param {String} value - the tag value
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets the title of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#setTitle
 * 
 * @param {String} title - the new title
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */


/**
 * Sets the visibility of the event.
 * 
 * @function CalendarApp.CalendarEventSeries#setVisibility
 * 
 * @param {CalendarApp.Visibility} visibility
 * 
 * @return {CalendarApp.CalendarEventSeries} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
 */



/**
 * @class CalendarApp.Color
 */

/**
 * <div style="background-color: #2952A3; display: inline-block; height: 10px; width: 10px;">
 * </div> Blue (<code>#2952A3</code>).
 * 
 * @typedef {String} CalendarApp.Color.BLUE
 */
/**
 * <div style="background-color: #8D6F47; display: inline-block; height: 10px; width: 10px;">
 * </div> Brown (<code>#8D6F47</code>).
 * 
 * @typedef {String} CalendarApp.Color.BROWN
 */
/**
 * <div style="background-color: #4E5D6C; display: inline-block; height: 10px; width: 10px;">
 * </div> Charcoal (<code>#4E5D6C</code>).
 * 
 * @typedef {String} CalendarApp.Color.CHARCOAL
 */
/**
 * <div style="background-color: #865A5A; display: inline-block; height: 10px; width: 10px;">
 * </div> Chestnut (<code>#865A5A</code>).
 * 
 * @typedef {String} CalendarApp.Color.CHESTNUT
 */
/**
 * <div style="background-color: #5A6986; display: inline-block; height: 10px; width: 10px;">
 * </div> Gray (<code>#5A6986</code>).
 * 
 * @typedef {String} CalendarApp.Color.GRAY
 */
/**
 * <div style="background-color: #0D7813; display: inline-block; height: 10px; width: 10px;">
 * </div> Green (<code>#0D7813</code>).
 * 
 * @typedef {String} CalendarApp.Color.GREEN
 */
/**
 * <div style="background-color: #5229A3; display: inline-block; height: 10px; width: 10px;">
 * </div> Indigo (<code>#5229A3</code>).
 * 
 * @typedef {String} CalendarApp.Color.INDIGO
 */
/**
 * <div style="background-color: #528800; display: inline-block; height: 10px; width: 10px;">
 * </div> Lime (<code>#528800</code>).
 * 
 * @typedef {String} CalendarApp.Color.LIME
 */
/**
 * <div style="background-color: #88880E; display: inline-block; height: 10px; width: 10px;">
 * </div> Mustard (<code>#88880E</code>).
 * 
 * @typedef {String} CalendarApp.Color.MUSTARD
 */
/**
 * <div style="background-color: #6E6E41; display: inline-block; height: 10px; width: 10px;">
 * </div> Olive (<code>#6E6E41</code>).
 * 
 * @typedef {String} CalendarApp.Color.OLIVE
 */
/**
 * <div style="background-color: #BE6D00; display: inline-block; height: 10px; width: 10px;">
 * </div> Orange (<code>#BE6D00</code>).
 * 
 * @typedef {String} CalendarApp.Color.ORANGE
 */
/**
 * <div style="background-color: #B1365F; display: inline-block; height: 10px; width: 10px;">
 * </div> Pink (<code>#B1365F</code>).
 * 
 * @typedef {String} CalendarApp.Color.PINK
 */
/**
 * <div style="background-color: #705770; display: inline-block; height: 10px; width: 10px;">
 * </div> Plum (<code>#705770</code>).
 * 
 * @typedef {String} CalendarApp.Color.PLUM
 */
/**
 * <div style="background-color: #7A367A; display: inline-block; height: 10px; width: 10px;">
 * </div> Purple (<code>#7A367A</code>).
 * 
 * @typedef {String} CalendarApp.Color.PURPLE
 */
/**
 * <div style="background-color: #A32929; display: inline-block; height: 10px; width: 10px;">
 * </div> Red (<code>#A32929</code>).
 * 
 * @typedef {String} CalendarApp.Color.RED
 */
/**
 * <div style="background-color: #B1440E; display: inline-block; height: 10px; width: 10px;">
 * </div> Red-Orange (<code>#B1440E</code>).
 * 
 * @typedef {String} CalendarApp.Color.RED_ORANGE
 */
/**
 * <div style="background-color: #29527A; display: inline-block; height: 10px; width: 10px;">
 * </div> Sea Blue (<code>#29527A</code>).
 * 
 * @typedef {String} CalendarApp.Color.SEA_BLUE
 */
/**
 * <div style="background-color: #4A716C; display: inline-block; height: 10px; width: 10px;">
 * </div> Slate (<code>#4A716C</code>).
 * 
 * @typedef {String} CalendarApp.Color.SLATE
 */
/**
 * <div style="background-color: #28754E; display: inline-block; height: 10px; width: 10px;">
 * </div> Teal (<code>#28754E</code>).
 * 
 * @typedef {String} CalendarApp.Color.TEAL
 */
/**
 * <div style="background-color: #1B887A; display: inline-block; height: 10px; width: 10px;">
 * </div> Turquoise (<code>#1B887A</code>).
 * 
 * @typedef {String} CalendarApp.Color.TURQOISE
 */
/**
 * <div style="background-color: #AB8B00; display: inline-block; height: 10px; width: 10px;">
 * </div> Yellow (<code>#AB8B00</code>).
 * 
 * @typedef {String} CalendarApp.Color.YELLOW
 */

/**
 * @class CalendarApp.EventColor
 */

/**
 * <div style="background-color: #5484ED; display: inline-block; height: 10px; width: 10px;">
 * </div> Blue (<code>&quot;9&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.BLUE
 */
/**
 * <div style="background-color: #46D6DB; display: inline-block; height: 10px; width: 10px;">
 * </div> Cyan (<code>&quot;7&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.CYAN
 */
/**
 * <div style="background-color: #E1E1E1; display: inline-block; height: 10px; width: 10px;">
 * </div> Gray (<code>&quot;8&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.GRAY
 */
/**
 * <div style="background-color: #51B749; display: inline-block; height: 10px; width: 10px;">
 * </div> Green (<code>&quot;10&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.GREEN
 */
/**
 * <div style="background-color: #BDADFF; display: inline-block; height: 10px; width: 10px;">
 * </div> Mauve (<code>&quot;3&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.MAUVE
 */
/**
 * <div style="background-color: #FFB878; display: inline-block; height: 10px; width: 10px;">
 * </div> Orange (<code>&quot;6&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.ORANGE
 */
/**
 * <div style="background-color: #a4bdfc; display: inline-block; height: 10px; width: 10px;">
 * </div> Pale Blue (<code>&quot;1&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.PALE_BLUE
 */
/**
 * <div style="background-color: #7AE7BF; display: inline-block; height: 10px; width: 10px;">
 * </div> Pale Green (<code>&quot;2&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.PALE_GREEN
 */
/**
 * <div style="background-color: #FF887C; display: inline-block; height: 10px; width: 10px;">
 * </div> Pale Red (<code>&quot;4&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.PALE_RED
 */
/**
 * <div style="background-color: #DC2127; display: inline-block; height: 10px; width: 10px;">
 * </div> Red (<code>&quot;11&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.RED
 */
/**
 * <div style="background-color: #FBD75B; display: inline-block; height: 10px; width: 10px;">
 * </div> Yellow (<code>&quot;5&quot;</code>).
 * 
 * @typedef {String} CalendarApp.EventColor.YELLOW
 */

/**
 * @class CalendarApp.EventGuest
 */

/**
 * Gets the number of additional people that this guest has said are attending.
 * 
 * @function CalendarApp.EventGuest#getAdditionalGuests
 * 
 * @return {IntegerNum} the number of additional people this guest has said are attending
 */


/**
 * Gets the email address of the guest.
 * 
 * @function CalendarApp.EventGuest#getEmail
 * 
 * @return {String} the guest's email address
 */


/**
 * Gets the status of the guest for the event.
 * 
 * @function CalendarApp.EventGuest#getGuestStatus
 * 
 * @return {CalendarApp.GuestStatus} the status of this guest
 */


/**
 * Gets the name of the guest. If the name of the guest is not available, this method returns the
 * guest's email address.
 * 
 * @function CalendarApp.EventGuest#getName
 * 
 * @return {String} the guest's name, or the guest's email address if the name is not available
 */


/**
 * Gets the status of the guest for the event.
 * 
 * @function CalendarApp.EventGuest#getStatus
 * @deprecated
 * 
 * @return {String} the status of this guest
 */



/**
 * @class CalendarApp.EventRecurrence
 */

/**
 * Adds a rule that excludes occurrences on a daily basis.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week after the first 30 days.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
 * </code></pre>
 * 
 * @function CalendarApp.EventRecurrence#addDailyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a daily basis.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every day for ten days.
 * var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
 * </code></pre>
 * 
 * @function CalendarApp.EventRecurrence#addDailyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a specific date.
 * 
 * @function CalendarApp.EventRecurrence#addDate
 * 
 * @param {Date} date
 * 
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */


/**
 * Adds a rule that excludes an occurrence for a specific date.
 * 
 * @function CalendarApp.EventRecurrence#addDateExclusion
 * 
 * @param {Date} date
 * 
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */


/**
 * Adds a rule that excludes occurrences on a monthly basis.
 * 
 * <p>By default the exclusion is applied on the same day of the month as the first event in the
 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>RecurrenceRule.onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>RecurrenceRule.onlyOnMonthDays(days)</a></code>.
 * 
 * @function CalendarApp.EventRecurrence#addMonthlyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a monthly basis.
 * 
 * <p>By default the event recurs on the same day of the month as the first event in the series,
 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>RecurrenceRule.onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>RecurrenceRule.onlyOnMonthDays(days)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every month for three months.
 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
 * </code></pre>
 * 
 * @function CalendarApp.EventRecurrence#addMonthlyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that excludes occurrences on a weekly basis.
 * 
 * <p>By default the exclusion is applied on the same day of the week as the first event in the
 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>RecurrenceRule.onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>RecurrenceRule.onlyOnWeekdays(days)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every day except the first four Wednesdays.
 * var recurrence = CalendarApp.newRecurrence().addDailyRule()
 *     .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
 * </code></pre>
 * 
 * @function CalendarApp.EventRecurrence#addWeeklyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a weekly basis.
 * 
 * <p>By default the event recurs on the same day of the week as the first event in the series,
 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>RecurrenceRule.onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>RecurrenceRule.onlyOnWeekdays(days)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week for ten weeks.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
 * </code></pre>
 * 
 * @function CalendarApp.EventRecurrence#addWeeklyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that excludes occurrences on a yearly basis.
 * 
 * <p>By default the exclusion is applied on the same day of the year as the first event in the
 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>RecurrenceRule.onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>RecurrenceRule.onlyOnYearDays(days)</a></code>.
 * 
 * @function CalendarApp.EventRecurrence#addYearlyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a yearly basis.
 * 
 * <p>By default the event recurs on the same day of the year as the first event in the series,
 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>RecurrenceRule.onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>RecurrenceRule.onlyOnYearDays(days)</a></code>.
 * 
 * @function CalendarApp.EventRecurrence#addYearlyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Sets the time zone for this recurrence. This affects the date and time that events recur on,
 * and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
 * 
 * @function CalendarApp.EventRecurrence#setTimeZone
 * 
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., 'America/New_York', as listed
 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 * 
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */



/**
 * @class CalendarApp.GuestStatus
 */

/**
 * The guest has been invited, but has not indicated whether he or she is attending.
 * 
 * @typedef {CalendarApp.GuestStatus} CalendarApp.GuestStatus.INVITED
 */
/**
 * The guest has indicated he or she might attend.
 * 
 * @typedef {CalendarApp.GuestStatus} CalendarApp.GuestStatus.MAYBE
 */
/**
 * The guest has indicated he or she is not attending.
 * 
 * @typedef {CalendarApp.GuestStatus} CalendarApp.GuestStatus.NO
 */
/**
 * The guest is the owner of the event.
 * 
 * @typedef {CalendarApp.GuestStatus} CalendarApp.GuestStatus.OWNER
 */
/**
 * The guest has indicated he or she is attending.
 * 
 * @typedef {CalendarApp.GuestStatus} CalendarApp.GuestStatus.YES
 */

/**
 * @class CalendarApp.RecurrenceRule
 */

/**
 * Adds a rule that excludes occurrences on a daily basis.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week after the first 30 days.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#addDailyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a daily basis.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every day for ten days.
 * var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#addDailyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a specific date.
 * 
 * @function CalendarApp.RecurrenceRule#addDate
 * 
 * @param {Date} date
 * 
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */


/**
 * Adds a rule that excludes an occurrence for a specific date.
 * 
 * @function CalendarApp.RecurrenceRule#addDateExclusion
 * 
 * @param {Date} date
 * 
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */


/**
 * Adds a rule that excludes occurrences on a monthly basis.
 * 
 * <p>By default the exclusion is applied on the same day of the month as the first event in the
 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>onlyOnMonthDays(days)</a></code>.
 * 
 * @function CalendarApp.RecurrenceRule#addMonthlyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a monthly basis.
 * 
 * <p>By default the event recurs on the same day of the month as the first event in the series,
 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>onlyOnMonthDays(days)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every month for three months.
 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#addMonthlyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that excludes occurrences on a weekly basis.
 * 
 * <p>By default the exclusion is applied on the same day of the week as the first event in the
 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>onlyOnWeekdays(days)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every day except the first four Wednesdays.
 * var recurrence = CalendarApp.newRecurrence().addDailyRule()
 *     .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#addWeeklyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a weekly basis.
 * 
 * <p>By default the event recurs on the same day of the week as the first event in the series,
 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>onlyOnWeekdays(days)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week for ten weeks.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#addWeeklyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that excludes occurrences on a yearly basis.
 * 
 * <p>By default the exclusion is applied on the same day of the year as the first event in the
 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>onlyOnYearDays(days)</a></code>.
 * 
 * @function CalendarApp.RecurrenceRule#addYearlyExclusion
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Adds a rule that causes the event to recur on a yearly basis.
 * 
 * <p>By default the event recurs on the same day of the year as the first event in the series,
 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>onlyOnYearDays(days)</a></code>.
 * 
 * @function CalendarApp.RecurrenceRule#addYearlyRule
 * 
 * @return {CalendarApp.RecurrenceRule} the new RecurrenceRule
 */


/**
 * Configures the rule to only apply at this interval of the rule's time unit.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every fourth week.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().interval(4);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#interval
 * 
 * @param {IntegerNum} interval - the interval in the rule's time unit
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to a specific month.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week in February.
 * var recurrence = CalendarApp.newRecurrence()
 *     .addWeeklyRule().onlyInMonth(CalendarApp.Month.FEBRUARY);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyInMonth
 * 
 * @param {Month} month - the month
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to specific months.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week in February and March.
 * var recurrence = CalendarApp.newRecurrence()
 *     .addWeeklyRule().onlyInMonths([CalendarApp.Month.FEBRUARY, CalendarApp.Month.MARCH]);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyInMonths
 * 
 * @param {Month[]} months - the months
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to a specific day of the month.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every month on the fifth day of the month.
 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDay(5);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnMonthDay
 * 
 * @param {IntegerNum} day - the day of the month
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to specific days of the month.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every month on the first and fifteenth day of the month.
 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDays([1, 15]);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnMonthDays
 * 
 * @param {IntegerNum[]} days - the days of the month
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to a specific week of the year.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs on the fifth week of every year.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeek(5);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnWeek
 * 
 * @param {IntegerNum} week - the week
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to a specific day of the week.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week on Wednesdays.
 * var recurrence = CalendarApp.newRecurrence()
 *     .addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnWeekday
 * 
 * @param {Weekday} day - the day of the week
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to specific days of the week.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every week on Tuesdays and Thursdays.
 * var recurrence = CalendarApp.newRecurrence()
 *     .addWeeklyRule().onlyOnWeekdays(
 *         [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY]);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnWeekdays
 * 
 * @param {Weekday[]} days - the days of the week
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to specific weeks of the year.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs on the fifth and tenth weeks of every year.
 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeeks([5, 10]);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnWeeks
 * 
 * @param {IntegerNum[]} weeks - the weeks
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to a specific day of the year.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every year on February 15 (the 46th day).
 * var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay(46);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnYearDay
 * 
 * @param {IntegerNum} day - the day of the year
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to only apply to specific days of the year.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every year on January 20 and February 15.
 * var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay([20, 46]);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#onlyOnYearDays
 * 
 * @param {IntegerNum[]} days - the days of the year
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Sets the time zone for this recurrence. This affects the date and time that events recur on,
 * and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
 * 
 * @function CalendarApp.RecurrenceRule#setTimeZone
 * 
 * @param {String} timeZone - the time zone, specified in "long" format (e.g., 'America/New_York', as listed
 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
 * 
 * @return {CalendarApp.EventRecurrence} this EventRecurrence for chaining
 */


/**
 * Configures the rule to end after a given number of occurrences.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every day for ten days.
 * var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#times
 * 
 * @param {IntegerNum} times - the number of times to recur
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures the rule to end on a given date (inclusive).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a rule that recurs every day through the end of 2013.
 * var recurrence = CalendarApp.newRecurrence()
 *     .addDailyRule().until(new Date(&#39;December 31, 2013&#39;));
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#until
 * 
 * @param {Date} endDate
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */


/**
 * Configures which day a week starts on, for the purposes of applying the rule.
 * 
 * <pre class="prettyprint"><code>
 * // Creates a weekly rule where weeks start on Monday.
 * var recurrence = CalendarApp.newRecurrence()
 *     .addWeeklyRule().weekStartsOn(CalendarApp.Weekday.MONDAY);
 * </code></pre>
 * 
 * @function CalendarApp.RecurrenceRule#weekStartsOn
 * 
 * @param {Weekday} day - the day on which the week starts
 * 
 * @return {CalendarApp.RecurrenceRule} this RecurrenceRule for chaining
 */



/**
 * @class CalendarApp.Visibility
 */

/**
 * The event is private. This value is provided for compatibility reasons.
 * 
 * @typedef {CalendarApp.Visibility} CalendarApp.Visibility.CONFIDENTIAL
 */
/**
 * Uses the default visibility for events on the calendar.
 * 
 * @typedef {CalendarApp.Visibility} CalendarApp.Visibility.DEFAULT
 */
/**
 * The event is private and only event attendees may view event details.
 * 
 * @typedef {CalendarApp.Visibility} CalendarApp.Visibility.PRIVATE
 */
/**
 * The event is public and event details are visible to all readers of the calendar.
 * 
 * @typedef {CalendarApp.Visibility} CalendarApp.Visibility.PUBLIC
 */

