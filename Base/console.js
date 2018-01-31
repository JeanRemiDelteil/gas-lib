var console = {};


/**
 * Outputs an ERROR level message to Stackdriver Logging.
 *
 * @param {Object} formatOrObject - a string containing zero or more substitution strings, or a JavaScript
     object to be logged as a JavaScript object if no other parameters.
 * @param {Object...} values - objects with which to replace substitution strings within the message. This gives
     you additional control over the format of the output.
 *
 * @return void
 */
console.error = function(formatOrObject, values){};

/**
 * Outputs an INFO level message to Stackdriver Logging.
 *
 * @param {Object} formatOrObject - a string containing zero or more substitution strings, or a JavaScript
     object to be logged as a JavaScript object if no other parameters.
 * @param {Object...} values - objects with which to replace substitution strings within the message. This gives
     you additional control over the format of the output.
 *
 * @return void
 */
console.info = function(formatOrObject, values){};

/**
 * Outputs a DEBUG level message to Stackdriver Logging.
 *
 * @param {Object} formatOrObject - a string containing zero or more substitution strings, or a JavaScript
     object to be logged as a JavaScript object if no other parameters.
 * @param {Object...} values - objects with which to replace substitution strings within the message. This gives
     you additional control over the format of the output.
 *
 * @return void
 */
console.log = function(formatOrObject, values){};

/**
 * Starts a timer you can use to track how long an operation takes.
 *
 * @param {String} label - The name to give the new timer.
 *
 * @return void
 */
console.time = function(label){};

/**
 * Stops a timer that was previously started by calling <code>console.time()</code>. The time duration
 is logged in Stackdriver.
 *
 * @param {String} label - the name of the timer to stop.
 *
 * @return void
 */
console.timeEnd = function(label){};

/**
 * Outputs a WARNING level message to Stackdriver Logging.
 *
 * @param {Object} formatOrObject - a string containing zero or more substitution strings, or a JavaScript
     object to be logged as a JavaScript object if no other parameters.
 * @param {Object...} values - objects with which to replace substitution strings within the message. This gives
     you additional control over the format of the output.
 *
 * @return void
 */
console.warn = function(formatOrObject, values){};

