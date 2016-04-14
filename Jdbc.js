var Jdbc = {};


/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.
 *
 * @param {String} url - a database URL of the form <code>jdbc:google:rdbms:subname</code>
 * @param {String} userName - the username to pass to the database
 * @param {String} password - the user's password
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */
Jdbc.getCloudSqlConnection = function(url, userName, password){};

/**
 * Attempts to establish a connection to the given database using a username and password.

 <pre class="prettyprint">
 <code>
  var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
                                &#39;username&#39;, &#39;password&#39;);
 </code></pre>
 *
 * @param {String} url - a database URL of the form <code>jdbc:subprotocol:subname</code>
 * @param {String} userName - the username to pass to the database
 * @param {String} password - the user's password
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */
Jdbc.getConnection = function(url, userName, password){};

/**
 * Create a date from milliseconds since epoch.
 *
 * @param {number} milliseconds - milliseconds since epoch
 *
 * @return {Jdbc.JdbcDate} a JdbcDate object
 */
Jdbc.newDate = function(milliseconds){};

/**
 * Create a time from milliseconds since epoch.
 *
 * @param {number} milliseconds - milliseconds since epoch
 *
 * @return {Jdbc.JdbcTime} a JdbcTime object
 */
Jdbc.newTime = function(milliseconds){};

/**
 * Create a timestamp from milliseconds since epoch.
 *
 * @param {number} milliseconds - milliseconds since epoch
 *
 * @return {Jdbc.JdbcTimestamp} a JdbcTimestamp object
 */
Jdbc.newTimestamp = function(milliseconds){};

/**
 * Create a date by parsing the SQL date string.
 *
 * @param {String} date - a string containing a SQL date string
 *
 * @return {Jdbc.JdbcDate} a JdbcDate object
 */
Jdbc.parseDate = function(date){};

/**
 * Create a time by parsing the SQL time string.
 *
 * @param {String} time - a string containing a SQL time string
 *
 * @return {Jdbc.JdbcTime} a JdbcTime object
 */
Jdbc.parseTime = function(time){};

/**
 * Create a timestamp by parsing the SQL timestamp string.
 *
 * @param {String} timestamp - a string containing a SQL timestamp string
 *
 * @return {Jdbc.JdbcTimestamp} a JdbcTimestamp object
 */
Jdbc.parseTimestamp = function(timestamp){};

/** @constructor */
Jdbc.JdbcArray = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#free()">java.sql.Array#free()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcArray.prototype.free = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray(long, int)">java.sql.Array#getArray(long, int)</a></code>.
 *
 * @param {number} index - 
 * @param {number} count - 
 *
 * @return {Object}
 */
Jdbc.JdbcArray.prototype.getArray = function(index, count){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseType()">java.sql.Array#getBaseType()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcArray.prototype.getBaseType = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseTypeName()">java.sql.Array#getBaseTypeName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcArray.prototype.getBaseTypeName = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet(long, int)">java.sql.Array#getResultSet(long, int)</a></code>.
 *
 * @param {number} index - 
 * @param {number} count - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcArray.prototype.getResultSet = function(index, count){};

/** @constructor */
Jdbc.JdbcBlob = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#free()">java.sql.Blob#free()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcBlob.prototype.free = function(){};

/**
 * Gets the content of this JdbcBlob as an Apps Script blob.
 *
 * @return {Blob} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs
 */
Jdbc.JdbcBlob.prototype.getAppsScriptBlob = function(){};

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename ? for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" will become
 "ChristmasList.12.25.pdf".
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs,
     <code>&#39;application/pdf&#39;</code> is the only valid option. For images in BMP, GIF, JPEG,
     or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>,
     <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also valid.
 *
 * @return {Blob} the data as a blob
 */
Jdbc.JdbcBlob.prototype.getAs = function(contentType){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#getBytes(long, int)">java.sql.Blob#getBytes(long, int)</a></code>.
 *
 * @param {number} position - 
 * @param {number} length - 
 *
 * @return {Byte[]}
 */
Jdbc.JdbcBlob.prototype.getBytes = function(position, length){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(java.sql.Blob, long)">java.sql.Blob#position(java.sql.Blob, long)</a></code>.
 *
 * @param {Jdbc.JdbcBlob} pattern - 
 * @param {number} start - 
 *
 * @return {number}
 */
Jdbc.JdbcBlob.prototype.position = function(pattern, start){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long, byte[], int, int)">java.sql.Blob#setBytes(long, byte[], int, int)</a></code>.
 *
 * @param {number} position - 
 * @param {Byte[]} bytes - 
 * @param {number} offset - 
 * @param {number} length - 
 *
 * @return {number}
 */
Jdbc.JdbcBlob.prototype.setBytes = function(position, bytes, offset, length){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#truncate(long)">java.sql.Blob#truncate(long)</a></code>.
 *
 * @param {number} length - 
 *
 * @return void
 */
Jdbc.JdbcBlob.prototype.truncate = function(length){};

/** @constructor */
Jdbc.JdbcCallableStatement = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(String)">java.sql.Statement#addBatch(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.addBatch = function(sql){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()">java.sql.Statement#cancel()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.cancel = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()">java.sql.Statement#clearBatch()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.clearBatch = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()">java.sql.PreparedStatement#clearParameters()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.clearParameters = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()">java.sql.Statement#clearWarnings()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.clearWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()">java.sql.Statement#close()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.close = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(String, String[])">java.sql.Statement#execute(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcCallableStatement.prototype.execute = function(sql, columnNames){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()">java.sql.Statement#executeBatch()</a></code>.
 *
 * @return {Integer[]}
 */
Jdbc.JdbcCallableStatement.prototype.executeBatch = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(String)">java.sql.Statement#executeQuery(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcCallableStatement.prototype.executeQuery = function(sql){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(String, String[])">java.sql.Statement#executeUpdate(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.executeUpdate = function(sql, columnNames){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(String)">java.sql.CallableStatement#getArray(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcArray}
 */
Jdbc.JdbcCallableStatement.prototype.getArray = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(String)">java.sql.CallableStatement#getBigDecimal(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {BigNumber}
 */
Jdbc.JdbcCallableStatement.prototype.getBigDecimal = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(String)">java.sql.CallableStatement#getBlob(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcBlob}
 */
Jdbc.JdbcCallableStatement.prototype.getBlob = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(String)">java.sql.CallableStatement#getBoolean(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcCallableStatement.prototype.getBoolean = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(String)">java.sql.CallableStatement#getByte(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Byte}
 */
Jdbc.JdbcCallableStatement.prototype.getByte = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(String)">java.sql.CallableStatement#getBytes(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Byte[]}
 */
Jdbc.JdbcCallableStatement.prototype.getBytes = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(String)">java.sql.CallableStatement#getClob(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcClob}
 */
Jdbc.JdbcCallableStatement.prototype.getClob = function(parameterName){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()">java.sql.Statement#getConnection()</a></code>.
 *
 * @return {Jdbc.JdbcConnection}
 */
Jdbc.JdbcCallableStatement.prototype.getConnection = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(String, java.util.Calendar)">java.sql.CallableStatement#getDate(String, java.util.Calendar)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcDate}
 */
Jdbc.JdbcCallableStatement.prototype.getDate = function(parameterName, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(String)">java.sql.CallableStatement#getDouble(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Number}
 */
Jdbc.JdbcCallableStatement.prototype.getDouble = function(parameterName){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">java.sql.Statement#getFetchDirection()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getFetchDirection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()">java.sql.Statement#getFetchSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getFetchSize = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(String)">java.sql.CallableStatement#getFloat(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Number}
 */
Jdbc.JdbcCallableStatement.prototype.getFloat = function(parameterName){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">java.sql.Statement#getGeneratedKeys()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcCallableStatement.prototype.getGeneratedKeys = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(String)">java.sql.CallableStatement#getInt(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getInt = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(String)">java.sql.CallableStatement#getLong(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getLong = function(parameterName){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">java.sql.Statement#getMaxFieldSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getMaxFieldSize = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()">java.sql.Statement#getMaxRows()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getMaxRows = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()">java.sql.PreparedStatement#getMetaData()</a></code>.
 *
 * @return {Jdbc.JdbcResultSetMetaData}
 */
Jdbc.JdbcCallableStatement.prototype.getMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">java.sql.Statement#getMoreResults(int)</a></code>.
 *
 * @param {number} current - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcCallableStatement.prototype.getMoreResults = function(current){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(String)">java.sql.CallableStatement#getNClob(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcClob}
 */
Jdbc.JdbcCallableStatement.prototype.getNClob = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(String)">java.sql.CallableStatement#getNString(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {String}
 */
Jdbc.JdbcCallableStatement.prototype.getNString = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(String)">java.sql.CallableStatement#getObject(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Object}
 */
Jdbc.JdbcCallableStatement.prototype.getObject = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()">java.sql.PreparedStatement#getParameterMetaData()</a></code>.
 *
 * @return {Jdbc.JdbcParameterMetaData}
 */
Jdbc.JdbcCallableStatement.prototype.getParameterMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">java.sql.Statement#getQueryTimeout()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getQueryTimeout = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(String)">java.sql.CallableStatement#getRef(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcRef}
 */
Jdbc.JdbcCallableStatement.prototype.getRef = function(parameterName){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()">java.sql.Statement#getResultSet()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcCallableStatement.prototype.getResultSet = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">java.sql.Statement#getResultSetConcurrency()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getResultSetConcurrency = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">java.sql.Statement#getResultSetHoldability()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getResultSetHoldability = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">java.sql.Statement#getResultSetType()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getResultSetType = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(String)">java.sql.CallableStatement#getRowId(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcRowId}
 */
Jdbc.JdbcCallableStatement.prototype.getRowId = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(String)">java.sql.CallableStatement#getSQLXML(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcSQLXML}
 */
Jdbc.JdbcCallableStatement.prototype.getSQLXML = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(String)">java.sql.CallableStatement#getShort(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getShort = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(String)">java.sql.CallableStatement#getString(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {String}
 */
Jdbc.JdbcCallableStatement.prototype.getString = function(parameterName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(String, java.util.Calendar)">java.sql.CallableStatement#getTime(String, java.util.Calendar)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTime}
 */
Jdbc.JdbcCallableStatement.prototype.getTime = function(parameterName, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(String, java.util.Calendar)">java.sql.CallableStatement#getTimestamp(String, java.util.Calendar)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */
Jdbc.JdbcCallableStatement.prototype.getTimestamp = function(parameterName, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(String)">java.sql.CallableStatement#getURL(String)</a></code>.
 *
 * @param {String} parameterName - 
 *
 * @return {String}
 */
Jdbc.JdbcCallableStatement.prototype.getURL = function(parameterName){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">java.sql.Statement#getUpdateCount()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcCallableStatement.prototype.getUpdateCount = function(){};

/**
 * Returns the current set of warnings reported by the driver. For documentation of this method,
 see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()">java.sql.Statement#getWarnings()</a></code>
 *
 * @return {String[]} array of warnings
 */
Jdbc.JdbcCallableStatement.prototype.getWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()">java.sql.Statement#isClosed()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcCallableStatement.prototype.isClosed = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()">java.sql.Statement#isPoolable()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcCallableStatement.prototype.isPoolable = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(String, int, String)">java.sql.CallableStatement#registerOutParameter(String, int, String)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.registerOutParameter = function(parameterName, sqlType, typeName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int, java.sql.Array)">java.sql.PreparedStatement#setArray(int, java.sql.Array)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setArray = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBigDecimal(String, java.math.BigDecimal)">java.sql.CallableStatement#setBigDecimal(String, java.math.BigDecimal)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {BigNumber} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setBigDecimal = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBlob(String, java.sql.Blob)">java.sql.CallableStatement#setBlob(String, java.sql.Blob)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setBlob = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBoolean(String, boolean)">java.sql.CallableStatement#setBoolean(String, boolean)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Boolean} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setBoolean = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setByte(String, byte)">java.sql.CallableStatement#setByte(String, byte)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Byte} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setByte = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBytes(String, byte[])">java.sql.CallableStatement#setBytes(String, byte[])</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Byte[]} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setBytes = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setClob(String, java.sql.Clob)">java.sql.CallableStatement#setClob(String, java.sql.Clob)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setClob = function(parameterName, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(String)">java.sql.Statement#setCursorName(String)</a></code>.
 *
 * @param {String} name - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setCursorName = function(name){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(String, java.sql.Date, java.util.Calendar)">java.sql.CallableStatement#setDate(String, java.sql.Date, java.util.Calendar)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcDate} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setDate = function(parameterName, x, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDouble(String, double)">java.sql.CallableStatement#setDouble(String, double)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Number} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setDouble = function(parameterName, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">java.sql.Statement#setEscapeProcessing(boolean)</a></code>.
 *
 * @param {Boolean} enable - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setEscapeProcessing = function(enable){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">java.sql.Statement#setFetchDirection(int)</a></code>.
 *
 * @param {number} direction - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setFetchDirection = function(direction){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">java.sql.Statement#setFetchSize(int)</a></code>.
 *
 * @param {number} rows - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setFetchSize = function(rows){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setFloat(String, float)">java.sql.CallableStatement#setFloat(String, float)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Number} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setFloat = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setInt(String, int)">java.sql.CallableStatement#setInt(String, int)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setInt = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setLong(String, long)">java.sql.CallableStatement#setLong(String, long)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setLong = function(parameterName, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">java.sql.Statement#setMaxFieldSize(int)</a></code>.
 *
 * @param {number} max - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setMaxFieldSize = function(max){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)">java.sql.Statement#setMaxRows(int)</a></code>.
 *
 * @param {number} max - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setMaxRows = function(max){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNClob(String, java.sql.NClob)">java.sql.CallableStatement#setNClob(String, java.sql.NClob)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcClob} value - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setNClob = function(parameterName, value){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNString(String, String)">java.sql.CallableStatement#setNString(String, String)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {String} value - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setNString = function(parameterName, value){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(String, int, String)">java.sql.CallableStatement#setNull(String, int, String)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setNull = function(parameterName, sqlType, typeName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(String, Object, int, int)">java.sql.CallableStatement#setObject(String, Object, int, int)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 * @param {number} scale - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setObject = function(parameterName, x, targetSqlType, scale){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">java.sql.Statement#setPoolable(boolean)</a></code>.
 *
 * @param {Boolean} poolable - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setPoolable = function(poolable){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">java.sql.Statement#setQueryTimeout(int)</a></code>.
 *
 * @param {number} seconds - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setQueryTimeout = function(seconds){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int, java.sql.Ref)">java.sql.PreparedStatement#setRef(int, java.sql.Ref)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setRef = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setRowId(String, java.sql.RowId)">java.sql.CallableStatement#setRowId(String, java.sql.RowId)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setRowId = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setSQLXML(String, java.sql.SQLXML)">java.sql.CallableStatement#setSQLXML(String, java.sql.SQLXML)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcSQLXML} xmlObject - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setSQLXML = function(parameterName, xmlObject){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setShort(String, short)">java.sql.CallableStatement#setShort(String, short)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setShort = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setString(String, String)">java.sql.CallableStatement#setString(String, String)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {String} x - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setString = function(parameterName, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(String, java.sql.Time, java.util.Calendar)">java.sql.CallableStatement#setTime(String, java.sql.Time, java.util.Calendar)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcTime} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setTime = function(parameterName, x, timeZone){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(String, java.sql.Timestamp, java.util.Calendar)">java.sql.CallableStatement#setTimestamp(String, java.sql.Timestamp, java.util.Calendar)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcTimestamp} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setTimestamp = function(parameterName, x, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setURL(String, java.net.URL)">java.sql.CallableStatement#setURL(String, java.net.URL)</a></code>.
 *
 * @param {String} parameterName - 
 * @param {String} val - 
 *
 * @return void
 */
Jdbc.JdbcCallableStatement.prototype.setURL = function(parameterName, val){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#wasNull()">java.sql.CallableStatement#wasNull()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcCallableStatement.prototype.wasNull = function(){};

/** @constructor */
Jdbc.JdbcClob = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#free()">java.sql.Clob#free()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcClob.prototype.free = function(){};

/**
 * Gets the content of this JdbcClob as an Apps Script blob.
 *
 * @return {Blob} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs
 */
Jdbc.JdbcClob.prototype.getAppsScriptBlob = function(){};

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename ? for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" will become
 "ChristmasList.12.25.pdf".
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs,
     <code>&#39;application/pdf&#39;</code> is the only valid option. For images in BMP, GIF, JPEG,
     or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>,
     <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also valid.
 *
 * @return {Blob} the data as a blob
 */
Jdbc.JdbcClob.prototype.getAs = function(contentType){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#getSubString(long, int)">java.sql.Clob#getSubString(long, int)</a></code>.
 *
 * @param {number} position - 
 * @param {number} length - 
 *
 * @return {String}
 */
Jdbc.JdbcClob.prototype.getSubString = function(position, length){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(String, long)">java.sql.Clob#position(String, long)</a></code>.
 *
 * @param {String} search - 
 * @param {number} start - 
 *
 * @return {number}
 */
Jdbc.JdbcClob.prototype.position = function(search, start){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long, String, int, int)">java.sql.Clob#setString(long, String, int, int)</a></code>.
 *
 * @param {number} position - 
 * @param {String} value - 
 * @param {number} offset - 
 * @param {number} len - 
 *
 * @return {number}
 */
Jdbc.JdbcClob.prototype.setString = function(position, value, offset, len){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#truncate(long)">java.sql.Clob#truncate(long)</a></code>.
 *
 * @param {number} length - 
 *
 * @return void
 */
Jdbc.JdbcClob.prototype.truncate = function(length){};

/** @constructor */
Jdbc.JdbcConnection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#clearWarnings()">java.sql.Connection#clearWarnings()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.clearWarnings = function(){};

/**
 * Release the JdbcConnection's database and all associated resources.

 <pre class="prettyprint">
 <code>
 var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
 conn.close();
 </code></pre>
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.close = function(){};

/**
 * Makes all pending changes permanent, releases database locks held by this JdbcConnection.

 <pre class="prettyprint">
 <code>
 var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
 conn.setAutoCommit(false);
 var stmt = conn.prepareStatement(&quot;insert into person (lname,fname) values (?,?)&quot;);
 var start = new Date();
 for (var i = 0; i &lt; 5000; i++) {
   // Objects are accessed using 1-based indexing
   stmt.setObject(1, &#39;firstName&#39; + i);
   stmt.setObject(2, &#39;lastName&#39; + i);
   stmt.addBatch();
 }
 var res = stmt.executeBatch();
 conn.commit(); // When this returns, this is when changes are actually commited
 conn.close();
 </code></pre>
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.commit = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createArrayOf(String, Object[])">java.sql.Connection#createArrayOf(String, Object[])</a></code>.
 *
 * @param {String} typeName - 
 * @param {Object[]} elements - 
 *
 * @return {Jdbc.JdbcArray}
 */
Jdbc.JdbcConnection.prototype.createArrayOf = function(typeName, elements){};

/**
 * Constructs a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> instance

 The object returned initially contains no data. The setBytes methods of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> may
 be used to set the data it should contain. Note that the blob used here is not the same
 as the blob created with
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../utilities/utilities.html#newBlob(Byte)'>Utilities.newBlob(data)</a></code>. To
 convert between the two formats, use the defined getBytes() and setBytes() methods.
 Alternatively, both <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> provide a getAppsScriptBlob()
 convenience method for converting to a format that can be used by Apps Script.
 *
 * @return {Jdbc.JdbcBlob}
 */
Jdbc.JdbcConnection.prototype.createBlob = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createClob()">java.sql.Connection#createClob()</a></code>.
 *
 * @return {Jdbc.JdbcClob}
 */
Jdbc.JdbcConnection.prototype.createClob = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createNClob()">java.sql.Connection#createNClob()</a></code>.
 *
 * @return {Jdbc.JdbcClob}
 */
Jdbc.JdbcConnection.prototype.createNClob = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createSQLXML()">java.sql.Connection#createSQLXML()</a></code>.
 *
 * @return {Jdbc.JdbcSQLXML}
 */
Jdbc.JdbcConnection.prototype.createSQLXML = function(){};

/**
 * Creates a JdbcStatement object for sending SQL statements to the database.

 This version allows the result set type, concurrency and holdability to be overridden.

 <pre class="prettyprint">
 <code>
 // This sample code assumes authentication is off
 // For more information about this method, see documentation here:
 //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
 var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
 var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
                                 Jdbc.ResultSet.CONCUR_READ_ONLY,
                                 Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT);

 stmt.setMaxRows(100);
 var rs = stmt.execute(&quot;select * from person&quot;);

 while(rs.next()) {
   // Do something
 }

 rs.close();
 stmt.close();
 conn.close();
</code></pre>
 *
 * @param {number} resultSetType - a result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY,
                      Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or
                      Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE
 * @param {number} resultSetConcurrency - a concurrency type; one of Jdbc.ResultSet.CONCUR_READ_ONLY or
                      Jdbc.ResultSet.CONCUR_UPDATABLE
 * @param {number} resultSetHoldability - a Jdbc.ResultSet holdability constant; one of
                      Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or
                      Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT
 *
 * @return {Jdbc.JdbcStatement} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> instance to execute queries with
 */
Jdbc.JdbcConnection.prototype.createStatement = function(resultSetType, resultSetConcurrency, resultSetHoldability){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStruct(String, Object[])">java.sql.Connection#createStruct(String, Object[])</a></code>.
 *
 * @param {String} typeName - 
 * @param {Object[]} attributes - 
 *
 * @return {Jdbc.JdbcStruct}
 */
Jdbc.JdbcConnection.prototype.createStruct = function(typeName, attributes){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getAutoCommit()">java.sql.Connection#getAutoCommit()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcConnection.prototype.getAutoCommit = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getCatalog()">java.sql.Connection#getCatalog()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcConnection.prototype.getCatalog = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getHoldability()">java.sql.Connection#getHoldability()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcConnection.prototype.getHoldability = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getMetaData()">java.sql.Connection#getMetaData()</a></code>.
 *
 * @return {Jdbc.JdbcDatabaseMetaData}
 */
Jdbc.JdbcConnection.prototype.getMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getTransactionIsolation()">java.sql.Connection#getTransactionIsolation()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcConnection.prototype.getTransactionIsolation = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getWarnings()">java.sql.Connection#getWarnings()</a></code>.
 *
 * @return {String[]}
 */
Jdbc.JdbcConnection.prototype.getWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isClosed()">java.sql.Connection#isClosed()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcConnection.prototype.isClosed = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isReadOnly()">java.sql.Connection#isReadOnly()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcConnection.prototype.isReadOnly = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isValid(int)">java.sql.Connection#isValid(int)</a></code>.
 *
 * @param {number} timeout - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcConnection.prototype.isValid = function(timeout){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#nativeSQL(String)">java.sql.Connection#nativeSQL(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return {String}
 */
Jdbc.JdbcConnection.prototype.nativeSQL = function(sql){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(String, int, int, int)">java.sql.Connection#prepareCall(String, int, int, int)</a></code>.
 *
 * @param {String} sql - 
 * @param {number} resultSetType - 
 * @param {number} resultSetConcurrency - 
 * @param {number} resultSetHoldability - 
 *
 * @return {Jdbc.JdbcCallableStatement}
 */
Jdbc.JdbcConnection.prototype.prepareCall = function(sql, resultSetType, resultSetConcurrency, resultSetHoldability){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(String, int, int, int)">java.sql.Connection#prepareStatement(String, int, int, int)</a></code>.
 *
 * @param {String} sql - 
 * @param {number} resultSetType - 
 * @param {number} resultSetConcurrency - 
 * @param {number} resultSetHoldability - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */
Jdbc.JdbcConnection.prototype.prepareStatement = function(sql, resultSetType, resultSetConcurrency, resultSetHoldability){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(String, int[])">java.sql.Connection#prepareStatement(String, int[])</a></code>.
 *
 * @param {String} sql - 
 * @param {Integer[]} indices - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */
Jdbc.JdbcConnection.prototype.prepareStatementByIndex = function(sql, indices){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(String, String[])">java.sql.Connection#prepareStatement(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */
Jdbc.JdbcConnection.prototype.prepareStatementByName = function(sql, columnNames){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#releaseSavepoint(java.sql.Savepoint)">java.sql.Connection#releaseSavepoint(java.sql.Savepoint)</a></code>.
 *
 * @param {Jdbc.JdbcSavepoint} savepoint - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.releaseSavepoint = function(savepoint){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback(java.sql.Savepoint)">java.sql.Connection#rollback(java.sql.Savepoint)</a></code>.
 *
 * @param {Jdbc.JdbcSavepoint} savepoint - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.rollback = function(savepoint){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setAutoCommit(boolean)">java.sql.Connection#setAutoCommit(boolean)</a></code>.
 *
 * @param {Boolean} autoCommit - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.setAutoCommit = function(autoCommit){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setCatalog(String)">java.sql.Connection#setCatalog(String)</a></code>.
 *
 * @param {String} catalog - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.setCatalog = function(catalog){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setHoldability(int)">java.sql.Connection#setHoldability(int)</a></code>.
 *
 * @param {number} holdability - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.setHoldability = function(holdability){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setReadOnly(boolean)">java.sql.Connection#setReadOnly(boolean)</a></code>.
 *
 * @param {Boolean} readOnly - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.setReadOnly = function(readOnly){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint(String)">java.sql.Connection#setSavepoint(String)</a></code>.
 *
 * @param {String} name - 
 *
 * @return {Jdbc.JdbcSavepoint}
 */
Jdbc.JdbcConnection.prototype.setSavepoint = function(name){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setTransactionIsolation(int)">java.sql.Connection#setTransactionIsolation(int)</a></code>.
 *
 * @param {number} level - 
 *
 * @return void
 */
Jdbc.JdbcConnection.prototype.setTransactionIsolation = function(level){};

/** @constructor */
Jdbc.JdbcDatabaseMetaData = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allProceduresAreCallable()">java.sql.DatabaseMetaData#allProceduresAreCallable()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.allProceduresAreCallable = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allTablesAreSelectable()">java.sql.DatabaseMetaData#allTablesAreSelectable()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.allTablesAreSelectable = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#autoCommitFailureClosesAllResultSets()">java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.autoCommitFailureClosesAllResultSets = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionCausesTransactionCommit()">java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.dataDefinitionCausesTransactionCommit = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionIgnoredInTransactions()">java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.dataDefinitionIgnoredInTransactions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#deletesAreDetected(int)">java.sql.DatabaseMetaData#deletesAreDetected(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.deletesAreDetected = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#doesMaxRowSizeIncludeBlobs()">java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.doesMaxRowSizeIncludeBlobs = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getAttributes(String, String, String, String)">java.sql.DatabaseMetaData#getAttributes(String, String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} typeNamePattern - 
 * @param {String} attributeNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getAttributes = function(catalog, schemaPattern, typeNamePattern, attributeNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getBestRowIdentifier(String, String, String, int, boolean)">java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 * @param {number} scope - 
 * @param {Boolean} nullable - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getBestRowIdentifier = function(catalog, schema, table, scope, nullable){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogSeparator()">java.sql.DatabaseMetaData#getCatalogSeparator()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getCatalogSeparator = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogTerm()">java.sql.DatabaseMetaData#getCatalogTerm()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getCatalogTerm = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogs()">java.sql.DatabaseMetaData#getCatalogs()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getCatalogs = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getClientInfoProperties()">java.sql.DatabaseMetaData#getClientInfoProperties()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getClientInfoProperties = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumnPrivileges(String, String, String, String)">java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getColumnPrivileges = function(catalog, schema, table, columnNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumns(String, String, String, String)">java.sql.DatabaseMetaData#getColumns(String, String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getColumns = function(catalog, schemaPattern, tableNamePattern, columnNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getConnection()">java.sql.DatabaseMetaData#getConnection()</a></code>.
 *
 * @return {Jdbc.JdbcConnection}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getConnection = function(){};

/**
 * For documentation of this method, see
 java.sql.DatabaseMetaData#getCrossReference(String, String, String, String, String,
 String).
 *
 * @param {String} parentCatalog - 
 * @param {String} parentSchema - 
 * @param {String} parentTable - 
 * @param {String} foreignCatalog - 
 * @param {String} foreignSchema - 
 * @param {String} foreignTable - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getCrossReference = function(parentCatalog, parentSchema, parentTable, foreignCatalog, foreignSchema, foreignTable){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMajorVersion()">java.sql.DatabaseMetaData#getDatabaseMajorVersion()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDatabaseMajorVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMinorVersion()">java.sql.DatabaseMetaData#getDatabaseMinorVersion()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDatabaseMinorVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductName()">java.sql.DatabaseMetaData#getDatabaseProductName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDatabaseProductName = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductVersion()">java.sql.DatabaseMetaData#getDatabaseProductVersion()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDatabaseProductVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDefaultTransactionIsolation()">java.sql.DatabaseMetaData#getDefaultTransactionIsolation()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDefaultTransactionIsolation = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMajorVersion()">java.sql.DatabaseMetaData#getDriverMajorVersion()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDriverMajorVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMinorVersion()">java.sql.DatabaseMetaData#getDriverMinorVersion()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDriverMinorVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverName()">java.sql.DatabaseMetaData#getDriverName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDriverName = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverVersion()">java.sql.DatabaseMetaData#getDriverVersion()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getDriverVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExportedKeys(String, String, String)">java.sql.DatabaseMetaData#getExportedKeys(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getExportedKeys = function(catalog, schema, table){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExtraNameCharacters()">java.sql.DatabaseMetaData#getExtraNameCharacters()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getExtraNameCharacters = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctionColumns(String, String, String, String)">java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} functionNamePattern - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getFunctionColumns = function(catalog, schemaPattern, functionNamePattern, columnNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctions(String, String, String)">java.sql.DatabaseMetaData#getFunctions(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} functionNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getFunctions = function(catalog, schemaPattern, functionNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIdentifierQuoteString()">java.sql.DatabaseMetaData#getIdentifierQuoteString()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getIdentifierQuoteString = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getImportedKeys(String, String, String)">java.sql.DatabaseMetaData#getImportedKeys(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getImportedKeys = function(catalog, schema, table){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIndexInfo(String, String, String, boolean, boolean)">java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 * @param {Boolean} unique - 
 * @param {Boolean} approximate - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getIndexInfo = function(catalog, schema, table, unique, approximate){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMajorVersion()">java.sql.DatabaseMetaData#getJDBCMajorVersion()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getJDBCMajorVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMinorVersion()">java.sql.DatabaseMetaData#getJDBCMinorVersion()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getJDBCMinorVersion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxBinaryLiteralLength()">java.sql.DatabaseMetaData#getMaxBinaryLiteralLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxBinaryLiteralLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCatalogNameLength()">java.sql.DatabaseMetaData#getMaxCatalogNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxCatalogNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCharLiteralLength()">java.sql.DatabaseMetaData#getMaxCharLiteralLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxCharLiteralLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnNameLength()">java.sql.DatabaseMetaData#getMaxColumnNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxColumnNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInGroupBy()">java.sql.DatabaseMetaData#getMaxColumnsInGroupBy()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxColumnsInGroupBy = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInIndex()">java.sql.DatabaseMetaData#getMaxColumnsInIndex()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxColumnsInIndex = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInOrderBy()">java.sql.DatabaseMetaData#getMaxColumnsInOrderBy()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxColumnsInOrderBy = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInSelect()">java.sql.DatabaseMetaData#getMaxColumnsInSelect()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxColumnsInSelect = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInTable()">java.sql.DatabaseMetaData#getMaxColumnsInTable()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxColumnsInTable = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxConnections()">java.sql.DatabaseMetaData#getMaxConnections()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxConnections = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCursorNameLength()">java.sql.DatabaseMetaData#getMaxCursorNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxCursorNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxIndexLength()">java.sql.DatabaseMetaData#getMaxIndexLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxIndexLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxProcedureNameLength()">java.sql.DatabaseMetaData#getMaxProcedureNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxProcedureNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxRowSize()">java.sql.DatabaseMetaData#getMaxRowSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxRowSize = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxSchemaNameLength()">java.sql.DatabaseMetaData#getMaxSchemaNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxSchemaNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatementLength()">java.sql.DatabaseMetaData#getMaxStatementLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxStatementLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatements()">java.sql.DatabaseMetaData#getMaxStatements()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxStatements = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTableNameLength()">java.sql.DatabaseMetaData#getMaxTableNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxTableNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTablesInSelect()">java.sql.DatabaseMetaData#getMaxTablesInSelect()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxTablesInSelect = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxUserNameLength()">java.sql.DatabaseMetaData#getMaxUserNameLength()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getMaxUserNameLength = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getNumericFunctions()">java.sql.DatabaseMetaData#getNumericFunctions()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getNumericFunctions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getPrimaryKeys(String, String, String)">java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getPrimaryKeys = function(catalog, schema, table){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureColumns(String, String, String, String)">java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} procedureNamePattern - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getProcedureColumns = function(catalog, schemaPattern, procedureNamePattern, columnNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureTerm()">java.sql.DatabaseMetaData#getProcedureTerm()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getProcedureTerm = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedures(String, String, String)">java.sql.DatabaseMetaData#getProcedures(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} procedureNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getProcedures = function(catalog, schemaPattern, procedureNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getResultSetHoldability()">java.sql.DatabaseMetaData#getResultSetHoldability()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getResultSetHoldability = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getRowIdLifetime()">java.sql.DatabaseMetaData#getRowIdLifetime()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getRowIdLifetime = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLKeywords()">java.sql.DatabaseMetaData#getSQLKeywords()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSQLKeywords = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLStateType()">java.sql.DatabaseMetaData#getSQLStateType()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSQLStateType = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemaTerm()">java.sql.DatabaseMetaData#getSchemaTerm()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSchemaTerm = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas(String, String)">java.sql.DatabaseMetaData#getSchemas(String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSchemas = function(catalog, schemaPattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSearchStringEscape()">java.sql.DatabaseMetaData#getSearchStringEscape()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSearchStringEscape = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getStringFunctions()">java.sql.DatabaseMetaData#getStringFunctions()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getStringFunctions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTables(String, String, String)">java.sql.DatabaseMetaData#getSuperTables(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSuperTables = function(catalog, schemaPattern, tableNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTypes(String, String, String)">java.sql.DatabaseMetaData#getSuperTypes(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} typeNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSuperTypes = function(catalog, schemaPattern, typeNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSystemFunctions()">java.sql.DatabaseMetaData#getSystemFunctions()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getSystemFunctions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTablePrivileges(String, String, String)">java.sql.DatabaseMetaData#getTablePrivileges(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getTablePrivileges = function(catalog, schemaPattern, tableNamePattern){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTableTypes()">java.sql.DatabaseMetaData#getTableTypes()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getTableTypes = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTables(String, String, String, String[])">java.sql.DatabaseMetaData#getTables(String, String, String, String[])</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 * @param {String[]} types - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getTables = function(catalog, schemaPattern, tableNamePattern, types){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTimeDateFunctions()">java.sql.DatabaseMetaData#getTimeDateFunctions()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getTimeDateFunctions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTypeInfo()">java.sql.DatabaseMetaData#getTypeInfo()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getTypeInfo = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUDTs(String, String, String, int[])">java.sql.DatabaseMetaData#getUDTs(String, String, String, int[])</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} typeNamePattern - 
 * @param {Integer[]} types - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getUDTs = function(catalog, schemaPattern, typeNamePattern, types){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getURL()">java.sql.DatabaseMetaData#getURL()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getURL = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUserName()">java.sql.DatabaseMetaData#getUserName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getUserName = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getVersionColumns(String, String, String)">java.sql.DatabaseMetaData#getVersionColumns(String, String, String)</a></code>.
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcDatabaseMetaData.prototype.getVersionColumns = function(catalog, schema, table){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#insertsAreDetected(int)">java.sql.DatabaseMetaData#insertsAreDetected(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.insertsAreDetected = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isCatalogAtStart()">java.sql.DatabaseMetaData#isCatalogAtStart()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.isCatalogAtStart = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isReadOnly()">java.sql.DatabaseMetaData#isReadOnly()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.isReadOnly = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#locatorsUpdateCopy()">java.sql.DatabaseMetaData#locatorsUpdateCopy()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.locatorsUpdateCopy = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullPlusNonNullIsNull()">java.sql.DatabaseMetaData#nullPlusNonNullIsNull()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.nullPlusNonNullIsNull = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtEnd()">java.sql.DatabaseMetaData#nullsAreSortedAtEnd()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.nullsAreSortedAtEnd = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtStart()">java.sql.DatabaseMetaData#nullsAreSortedAtStart()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.nullsAreSortedAtStart = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedHigh()">java.sql.DatabaseMetaData#nullsAreSortedHigh()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.nullsAreSortedHigh = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedLow()">java.sql.DatabaseMetaData#nullsAreSortedLow()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.nullsAreSortedLow = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersDeletesAreVisible(int)">java.sql.DatabaseMetaData#othersDeletesAreVisible(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.othersDeletesAreVisible = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersInsertsAreVisible(int)">java.sql.DatabaseMetaData#othersInsertsAreVisible(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.othersInsertsAreVisible = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersUpdatesAreVisible(int)">java.sql.DatabaseMetaData#othersUpdatesAreVisible(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.othersUpdatesAreVisible = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownDeletesAreVisible(int)">java.sql.DatabaseMetaData#ownDeletesAreVisible(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.ownDeletesAreVisible = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownInsertsAreVisible(int)">java.sql.DatabaseMetaData#ownInsertsAreVisible(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.ownInsertsAreVisible = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownUpdatesAreVisible(int)">java.sql.DatabaseMetaData#ownUpdatesAreVisible(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.ownUpdatesAreVisible = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseIdentifiers()">java.sql.DatabaseMetaData#storesLowerCaseIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.storesLowerCaseIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseQuotedIdentifiers()">java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.storesLowerCaseQuotedIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseIdentifiers()">java.sql.DatabaseMetaData#storesMixedCaseIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.storesMixedCaseIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseQuotedIdentifiers()">java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.storesMixedCaseQuotedIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseIdentifiers()">java.sql.DatabaseMetaData#storesUpperCaseIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.storesUpperCaseIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseQuotedIdentifiers()">java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.storesUpperCaseQuotedIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92EntryLevelSQL()">java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsANSI92EntryLevelSQL = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92FullSQL()">java.sql.DatabaseMetaData#supportsANSI92FullSQL()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsANSI92FullSQL = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92IntermediateSQL()">java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsANSI92IntermediateSQL = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithAddColumn()">java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsAlterTableWithAddColumn = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithDropColumn()">java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsAlterTableWithDropColumn = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsBatchUpdates()">java.sql.DatabaseMetaData#supportsBatchUpdates()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsBatchUpdates = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInDataManipulation()">java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCatalogsInDataManipulation = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInIndexDefinitions()">java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCatalogsInIndexDefinitions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInPrivilegeDefinitions()">java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCatalogsInPrivilegeDefinitions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInProcedureCalls()">java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCatalogsInProcedureCalls = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInTableDefinitions()">java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCatalogsInTableDefinitions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsColumnAliasing()">java.sql.DatabaseMetaData#supportsColumnAliasing()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsColumnAliasing = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert(int, int)">java.sql.DatabaseMetaData#supportsConvert(int, int)</a></code>.
 *
 * @param {number} fromType - 
 * @param {number} toType - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsConvert = function(fromType, toType){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCoreSQLGrammar()">java.sql.DatabaseMetaData#supportsCoreSQLGrammar()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCoreSQLGrammar = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCorrelatedSubqueries()">java.sql.DatabaseMetaData#supportsCorrelatedSubqueries()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsCorrelatedSubqueries = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataDefinitionAndDataManipulationTransactions()">java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsDataDefinitionAndDataManipulationTransactions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataManipulationTransactionsOnly()">java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsDataManipulationTransactionsOnly = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDifferentTableCorrelationNames()">java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsDifferentTableCorrelationNames = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExpressionsInOrderBy()">java.sql.DatabaseMetaData#supportsExpressionsInOrderBy()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsExpressionsInOrderBy = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExtendedSQLGrammar()">java.sql.DatabaseMetaData#supportsExtendedSQLGrammar()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsExtendedSQLGrammar = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsFullOuterJoins()">java.sql.DatabaseMetaData#supportsFullOuterJoins()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsFullOuterJoins = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGetGeneratedKeys()">java.sql.DatabaseMetaData#supportsGetGeneratedKeys()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsGetGeneratedKeys = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupBy()">java.sql.DatabaseMetaData#supportsGroupBy()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsGroupBy = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByBeyondSelect()">java.sql.DatabaseMetaData#supportsGroupByBeyondSelect()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsGroupByBeyondSelect = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByUnrelated()">java.sql.DatabaseMetaData#supportsGroupByUnrelated()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsGroupByUnrelated = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsIntegrityEnhancementFacility()">java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsIntegrityEnhancementFacility = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLikeEscapeClause()">java.sql.DatabaseMetaData#supportsLikeEscapeClause()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsLikeEscapeClause = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLimitedOuterJoins()">java.sql.DatabaseMetaData#supportsLimitedOuterJoins()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsLimitedOuterJoins = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMinimumSQLGrammar()">java.sql.DatabaseMetaData#supportsMinimumSQLGrammar()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsMinimumSQLGrammar = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseIdentifiers()">java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsMixedCaseIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseQuotedIdentifiers()">java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsMixedCaseQuotedIdentifiers = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleOpenResults()">java.sql.DatabaseMetaData#supportsMultipleOpenResults()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsMultipleOpenResults = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleResultSets()">java.sql.DatabaseMetaData#supportsMultipleResultSets()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsMultipleResultSets = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleTransactions()">java.sql.DatabaseMetaData#supportsMultipleTransactions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsMultipleTransactions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNamedParameters()">java.sql.DatabaseMetaData#supportsNamedParameters()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsNamedParameters = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNonNullableColumns()">java.sql.DatabaseMetaData#supportsNonNullableColumns()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsNonNullableColumns = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossCommit()">java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsOpenCursorsAcrossCommit = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossRollback()">java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsOpenCursorsAcrossRollback = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossCommit()">java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsOpenStatementsAcrossCommit = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossRollback()">java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsOpenStatementsAcrossRollback = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOrderByUnrelated()">java.sql.DatabaseMetaData#supportsOrderByUnrelated()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsOrderByUnrelated = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOuterJoins()">java.sql.DatabaseMetaData#supportsOuterJoins()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsOuterJoins = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedDelete()">java.sql.DatabaseMetaData#supportsPositionedDelete()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsPositionedDelete = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedUpdate()">java.sql.DatabaseMetaData#supportsPositionedUpdate()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsPositionedUpdate = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetConcurrency(int, int)">java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int)</a></code>.
 *
 * @param {number} type - 
 * @param {number} concurrency - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsResultSetConcurrency = function(type, concurrency){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetHoldability(int)">java.sql.DatabaseMetaData#supportsResultSetHoldability(int)</a></code>.
 *
 * @param {number} holdability - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsResultSetHoldability = function(holdability){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetType(int)">java.sql.DatabaseMetaData#supportsResultSetType(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsResultSetType = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSavepoints()">java.sql.DatabaseMetaData#supportsSavepoints()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSavepoints = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInDataManipulation()">java.sql.DatabaseMetaData#supportsSchemasInDataManipulation()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSchemasInDataManipulation = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInIndexDefinitions()">java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSchemasInIndexDefinitions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInPrivilegeDefinitions()">java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSchemasInPrivilegeDefinitions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInProcedureCalls()">java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSchemasInProcedureCalls = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInTableDefinitions()">java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSchemasInTableDefinitions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSelectForUpdate()">java.sql.DatabaseMetaData#supportsSelectForUpdate()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSelectForUpdate = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStatementPooling()">java.sql.DatabaseMetaData#supportsStatementPooling()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsStatementPooling = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredFunctionsUsingCallSyntax()">java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsStoredFunctionsUsingCallSyntax = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredProcedures()">java.sql.DatabaseMetaData#supportsStoredProcedures()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsStoredProcedures = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInComparisons()">java.sql.DatabaseMetaData#supportsSubqueriesInComparisons()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSubqueriesInComparisons = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInExists()">java.sql.DatabaseMetaData#supportsSubqueriesInExists()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSubqueriesInExists = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInIns()">java.sql.DatabaseMetaData#supportsSubqueriesInIns()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSubqueriesInIns = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInQuantifieds()">java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsSubqueriesInQuantifieds = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTableCorrelationNames()">java.sql.DatabaseMetaData#supportsTableCorrelationNames()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsTableCorrelationNames = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactionIsolationLevel(int)">java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int)</a></code>.
 *
 * @param {number} level - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsTransactionIsolationLevel = function(level){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactions()">java.sql.DatabaseMetaData#supportsTransactions()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsTransactions = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnion()">java.sql.DatabaseMetaData#supportsUnion()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsUnion = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnionAll()">java.sql.DatabaseMetaData#supportsUnionAll()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.supportsUnionAll = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#updatesAreDetected(int)">java.sql.DatabaseMetaData#updatesAreDetected(int)</a></code>.
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.updatesAreDetected = function(type){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFilePerTable()">java.sql.DatabaseMetaData#usesLocalFilePerTable()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.usesLocalFilePerTable = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFiles()">java.sql.DatabaseMetaData#usesLocalFiles()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcDatabaseMetaData.prototype.usesLocalFiles = function(){};

/** @constructor */
Jdbc.JdbcDate = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#after(java.util.Date)">java.sql.Date#after(java.util.Date)</a></code>.
 *
 * @param {Jdbc.JdbcDate} when - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDate.prototype.after = function(when){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#before(java.util.Date)">java.sql.Date#before(java.util.Date)</a></code>.
 *
 * @param {Jdbc.JdbcDate} when - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcDate.prototype.before = function(when){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#getDate()">java.sql.Date#getDate()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDate.prototype.getDate = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#getMonth()">java.sql.Date#getMonth()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDate.prototype.getMonth = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#getTime()">java.sql.Date#getTime()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDate.prototype.getTime = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#getYear()">java.sql.Date#getYear()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcDate.prototype.getYear = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setDate(int)">java.sql.Date#setDate(int)</a></code>.
 *
 * @param {number} date - 
 *
 * @return void
 */
Jdbc.JdbcDate.prototype.setDate = function(date){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setMonth(int)">java.sql.Date#setMonth(int)</a></code>.
 *
 * @param {number} month - 
 *
 * @return void
 */
Jdbc.JdbcDate.prototype.setMonth = function(month){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setTime(long)">java.sql.Date#setTime(long)</a></code>.
 *
 * @param {number} milliseconds - 
 *
 * @return void
 */
Jdbc.JdbcDate.prototype.setTime = function(milliseconds){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setYear(int)">java.sql.Date#setYear(int)</a></code>.
 *
 * @param {number} year - 
 *
 * @return void
 */
Jdbc.JdbcDate.prototype.setYear = function(year){};

/** @constructor */
Jdbc.JdbcParameterMetaData = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterClassName(int)">java.sql.ParameterMetaData#getParameterClassName(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {String}
 */
Jdbc.JdbcParameterMetaData.prototype.getParameterClassName = function(param){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterCount()">java.sql.ParameterMetaData#getParameterCount()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcParameterMetaData.prototype.getParameterCount = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterMode(int)">java.sql.ParameterMetaData#getParameterMode(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {number}
 */
Jdbc.JdbcParameterMetaData.prototype.getParameterMode = function(param){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterType(int)">java.sql.ParameterMetaData#getParameterType(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {number}
 */
Jdbc.JdbcParameterMetaData.prototype.getParameterType = function(param){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterTypeName(int)">java.sql.ParameterMetaData#getParameterTypeName(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {String}
 */
Jdbc.JdbcParameterMetaData.prototype.getParameterTypeName = function(param){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getPrecision(int)">java.sql.ParameterMetaData#getPrecision(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {number}
 */
Jdbc.JdbcParameterMetaData.prototype.getPrecision = function(param){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getScale(int)">java.sql.ParameterMetaData#getScale(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {number}
 */
Jdbc.JdbcParameterMetaData.prototype.getScale = function(param){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isNullable(int)">java.sql.ParameterMetaData#isNullable(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {number}
 */
Jdbc.JdbcParameterMetaData.prototype.isNullable = function(param){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isSigned(int)">java.sql.ParameterMetaData#isSigned(int)</a></code>.
 *
 * @param {number} param - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcParameterMetaData.prototype.isSigned = function(param){};

/** @constructor */
Jdbc.JdbcPreparedStatement = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(String)">java.sql.Statement#addBatch(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.addBatch = function(sql){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()">java.sql.Statement#cancel()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.cancel = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()">java.sql.Statement#clearBatch()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.clearBatch = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()">java.sql.PreparedStatement#clearParameters()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.clearParameters = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()">java.sql.Statement#clearWarnings()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.clearWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()">java.sql.Statement#close()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.close = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(String, String[])">java.sql.Statement#execute(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcPreparedStatement.prototype.execute = function(sql, columnNames){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()">java.sql.Statement#executeBatch()</a></code>.
 *
 * @return {Integer[]}
 */
Jdbc.JdbcPreparedStatement.prototype.executeBatch = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(String)">java.sql.Statement#executeQuery(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcPreparedStatement.prototype.executeQuery = function(sql){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(String, String[])">java.sql.Statement#executeUpdate(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.executeUpdate = function(sql, columnNames){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()">java.sql.Statement#getConnection()</a></code>.
 *
 * @return {Jdbc.JdbcConnection}
 */
Jdbc.JdbcPreparedStatement.prototype.getConnection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">java.sql.Statement#getFetchDirection()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getFetchDirection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()">java.sql.Statement#getFetchSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getFetchSize = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">java.sql.Statement#getGeneratedKeys()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcPreparedStatement.prototype.getGeneratedKeys = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">java.sql.Statement#getMaxFieldSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getMaxFieldSize = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()">java.sql.Statement#getMaxRows()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getMaxRows = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()">java.sql.PreparedStatement#getMetaData()</a></code>.
 *
 * @return {Jdbc.JdbcResultSetMetaData}
 */
Jdbc.JdbcPreparedStatement.prototype.getMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">java.sql.Statement#getMoreResults(int)</a></code>.
 *
 * @param {number} current - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcPreparedStatement.prototype.getMoreResults = function(current){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()">java.sql.PreparedStatement#getParameterMetaData()</a></code>.
 *
 * @return {Jdbc.JdbcParameterMetaData}
 */
Jdbc.JdbcPreparedStatement.prototype.getParameterMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">java.sql.Statement#getQueryTimeout()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getQueryTimeout = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()">java.sql.Statement#getResultSet()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcPreparedStatement.prototype.getResultSet = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">java.sql.Statement#getResultSetConcurrency()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getResultSetConcurrency = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">java.sql.Statement#getResultSetHoldability()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getResultSetHoldability = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">java.sql.Statement#getResultSetType()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getResultSetType = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">java.sql.Statement#getUpdateCount()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcPreparedStatement.prototype.getUpdateCount = function(){};

/**
 * Returns the current set of warnings reported by the driver. For documentation of this method,
 see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()">java.sql.Statement#getWarnings()</a></code>
 *
 * @return {String[]} array of warnings
 */
Jdbc.JdbcPreparedStatement.prototype.getWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()">java.sql.Statement#isClosed()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcPreparedStatement.prototype.isClosed = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()">java.sql.Statement#isPoolable()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcPreparedStatement.prototype.isPoolable = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int, java.sql.Array)">java.sql.PreparedStatement#setArray(int, java.sql.Array)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setArray = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int, java.math.BigDecimal)">java.sql.PreparedStatement#setBigDecimal(int, java.math.BigDecimal)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {BigNumber} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setBigDecimal = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int, java.sql.Blob)">java.sql.PreparedStatement#setBlob(int, java.sql.Blob)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setBlob = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int, boolean)">java.sql.PreparedStatement#setBoolean(int, boolean)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Boolean} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setBoolean = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int, byte)">java.sql.PreparedStatement#setByte(int, byte)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Byte} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setByte = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int, byte[])">java.sql.PreparedStatement#setBytes(int, byte[])</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Byte[]} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setBytes = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int, java.sql.Clob)">java.sql.PreparedStatement#setClob(int, java.sql.Clob)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setClob = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(String)">java.sql.Statement#setCursorName(String)</a></code>.
 *
 * @param {String} name - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setCursorName = function(name){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int, java.sql.Date, java.util.Calendar)">java.sql.PreparedStatement#setDate(int, java.sql.Date, java.util.Calendar)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcDate} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setDate = function(parameterIndex, x, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int, double)">java.sql.PreparedStatement#setDouble(int, double)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Number} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setDouble = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">java.sql.Statement#setEscapeProcessing(boolean)</a></code>.
 *
 * @param {Boolean} enable - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setEscapeProcessing = function(enable){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">java.sql.Statement#setFetchDirection(int)</a></code>.
 *
 * @param {number} direction - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setFetchDirection = function(direction){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">java.sql.Statement#setFetchSize(int)</a></code>.
 *
 * @param {number} rows - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setFetchSize = function(rows){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int, float)">java.sql.PreparedStatement#setFloat(int, float)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Number} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setFloat = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int, int)">java.sql.PreparedStatement#setInt(int, int)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setInt = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int, long)">java.sql.PreparedStatement#setLong(int, long)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setLong = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">java.sql.Statement#setMaxFieldSize(int)</a></code>.
 *
 * @param {number} max - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setMaxFieldSize = function(max){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)">java.sql.Statement#setMaxRows(int)</a></code>.
 *
 * @param {number} max - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setMaxRows = function(max){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int, java.sql.NClob)">java.sql.PreparedStatement#setNClob(int, java.sql.NClob)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setNClob = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int, String)">java.sql.PreparedStatement#setNString(int, String)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setNString = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int, int, String)">java.sql.PreparedStatement#setNull(int, int, String)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setNull = function(parameterIndex, sqlType, typeName){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int, Object, int, int)">java.sql.PreparedStatement#setObject(int, Object, int, int)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 * @param {number} scaleOrLength - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setObject = function(parameterIndex, x, targetSqlType, scaleOrLength){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">java.sql.Statement#setPoolable(boolean)</a></code>.
 *
 * @param {Boolean} poolable - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setPoolable = function(poolable){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">java.sql.Statement#setQueryTimeout(int)</a></code>.
 *
 * @param {number} seconds - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setQueryTimeout = function(seconds){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int, java.sql.Ref)">java.sql.PreparedStatement#setRef(int, java.sql.Ref)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setRef = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int, java.sql.RowId)">java.sql.PreparedStatement#setRowId(int, java.sql.RowId)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setRowId = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int, java.sql.SQLXML)">java.sql.PreparedStatement#setSQLXML(int, java.sql.SQLXML)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcSQLXML} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setSQLXML = function(parameterIndex, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int, short)">java.sql.PreparedStatement#setShort(int, short)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setShort = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int, String)">java.sql.PreparedStatement#setString(int, String)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setString = function(parameterIndex, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int, java.sql.Time, java.util.Calendar)">java.sql.PreparedStatement#setTime(int, java.sql.Time, java.util.Calendar)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTime} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setTime = function(parameterIndex, x, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int, java.sql.Timestamp, java.util.Calendar)">java.sql.PreparedStatement#setTimestamp(int, java.sql.Timestamp, java.util.Calendar)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTimestamp} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setTimestamp = function(parameterIndex, x, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int, java.net.URL)">java.sql.PreparedStatement#setURL(int, java.net.URL)</a></code>.
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */
Jdbc.JdbcPreparedStatement.prototype.setURL = function(parameterIndex, x){};

/** @constructor */
Jdbc.JdbcRef = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getBaseTypeName()">java.sql.Ref#getBaseTypeName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcRef.prototype.getBaseTypeName = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getObject()">java.sql.Ref#getObject()</a></code>.
 *
 * @return {Object}
 */
Jdbc.JdbcRef.prototype.getObject = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#setObject(Object)">java.sql.Ref#setObject(Object)</a></code>.
 *
 * @param {Object} object - 
 *
 * @return void
 */
Jdbc.JdbcRef.prototype.setObject = function(object){};

/** @constructor */
Jdbc.JdbcResultSet = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#absolute(int)">java.sql.ResultSet#absolute(int)</a></code>.
 *
 * @param {number} row - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.absolute = function(row){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#afterLast()">java.sql.ResultSet#afterLast()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.afterLast = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#beforeFirst()">java.sql.ResultSet#beforeFirst()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.beforeFirst = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#cancelRowUpdates()">java.sql.ResultSet#cancelRowUpdates()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.cancelRowUpdates = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#clearWarnings()">java.sql.ResultSet#clearWarnings()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.clearWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#close()">java.sql.ResultSet#close()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.close = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#deleteRow()">java.sql.ResultSet#deleteRow()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.deleteRow = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#findColumn(String)">java.sql.ResultSet#findColumn(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.findColumn = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#first()">java.sql.ResultSet#first()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.first = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(String)">java.sql.ResultSet#getArray(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcArray}
 */
Jdbc.JdbcResultSet.prototype.getArray = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(String)">java.sql.ResultSet#getBigDecimal(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {BigNumber}
 */
Jdbc.JdbcResultSet.prototype.getBigDecimal = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(String)">java.sql.ResultSet#getBlob(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcBlob}
 */
Jdbc.JdbcResultSet.prototype.getBlob = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(String)">java.sql.ResultSet#getBoolean(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.getBoolean = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(String)">java.sql.ResultSet#getByte(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Byte}
 */
Jdbc.JdbcResultSet.prototype.getByte = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(String)">java.sql.ResultSet#getBytes(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Byte[]}
 */
Jdbc.JdbcResultSet.prototype.getBytes = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(String)">java.sql.ResultSet#getClob(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcClob}
 */
Jdbc.JdbcResultSet.prototype.getClob = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getConcurrency()">java.sql.ResultSet#getConcurrency()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getConcurrency = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getCursorName()">java.sql.ResultSet#getCursorName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcResultSet.prototype.getCursorName = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(String, java.util.Calendar)">java.sql.ResultSet#getDate(String, java.util.Calendar)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcDate}
 */
Jdbc.JdbcResultSet.prototype.getDate = function(columnLabel, timeZone){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(String)">java.sql.ResultSet#getDouble(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Number}
 */
Jdbc.JdbcResultSet.prototype.getDouble = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchDirection()">java.sql.ResultSet#getFetchDirection()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getFetchDirection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchSize()">java.sql.ResultSet#getFetchSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getFetchSize = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(String)">java.sql.ResultSet#getFloat(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Number}
 */
Jdbc.JdbcResultSet.prototype.getFloat = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getHoldability()">java.sql.ResultSet#getHoldability()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getHoldability = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(String)">java.sql.ResultSet#getInt(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getInt = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(String)">java.sql.ResultSet#getLong(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getLong = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getMetaData()">java.sql.ResultSet#getMetaData()</a></code>.
 *
 * @return {Jdbc.JdbcResultSetMetaData}
 */
Jdbc.JdbcResultSet.prototype.getMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(String)">java.sql.ResultSet#getNClob(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcClob}
 */
Jdbc.JdbcResultSet.prototype.getNClob = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(String)">java.sql.ResultSet#getNString(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSet.prototype.getNString = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(String)">java.sql.ResultSet#getObject(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Object}
 */
Jdbc.JdbcResultSet.prototype.getObject = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(String)">java.sql.ResultSet#getRef(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcRef}
 */
Jdbc.JdbcResultSet.prototype.getRef = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRow()">java.sql.ResultSet#getRow()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getRow = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(String)">java.sql.ResultSet#getRowId(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcRowId}
 */
Jdbc.JdbcResultSet.prototype.getRowId = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(String)">java.sql.ResultSet#getSQLXML(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcSQLXML}
 */
Jdbc.JdbcResultSet.prototype.getSQLXML = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(String)">java.sql.ResultSet#getShort(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getShort = function(columnLabel){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getStatement()">java.sql.ResultSet#getStatement()</a></code>.
 *
 * @return {Jdbc.JdbcStatement}
 */
Jdbc.JdbcResultSet.prototype.getStatement = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(String)">java.sql.ResultSet#getString(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSet.prototype.getString = function(columnLabel){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(String, java.util.Calendar)">java.sql.ResultSet#getTime(String, java.util.Calendar)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTime}
 */
Jdbc.JdbcResultSet.prototype.getTime = function(columnLabel, timeZone){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(String, java.util.Calendar)">java.sql.ResultSet#getTimestamp(String, java.util.Calendar)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */
Jdbc.JdbcResultSet.prototype.getTimestamp = function(columnLabel, timeZone){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getType()">java.sql.ResultSet#getType()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSet.prototype.getType = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(String)">java.sql.ResultSet#getURL(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSet.prototype.getURL = function(columnLabel){};

/**
 * Returns the current set of warnings reported by the driver.
 *
 * @return {String[]} array of warnings
 */
Jdbc.JdbcResultSet.prototype.getWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#insertRow()">java.sql.ResultSet#insertRow()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.insertRow = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isAfterLast()">java.sql.ResultSet#isAfterLast()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.isAfterLast = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isBeforeFirst()">java.sql.ResultSet#isBeforeFirst()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.isBeforeFirst = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isClosed()">java.sql.ResultSet#isClosed()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.isClosed = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isFirst()">java.sql.ResultSet#isFirst()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.isFirst = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isLast()">java.sql.ResultSet#isLast()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.isLast = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#last()">java.sql.ResultSet#last()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.last = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToCurrentRow()">java.sql.ResultSet#moveToCurrentRow()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.moveToCurrentRow = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToInsertRow()">java.sql.ResultSet#moveToInsertRow()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.moveToInsertRow = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#next()">java.sql.ResultSet#next()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.next = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#previous()">java.sql.ResultSet#previous()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.previous = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#refreshRow()">java.sql.ResultSet#refreshRow()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.refreshRow = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#relative(int)">java.sql.ResultSet#relative(int)</a></code>.
 *
 * @param {number} rows - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.relative = function(rows){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowDeleted()">java.sql.ResultSet#rowDeleted()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.rowDeleted = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowInserted()">java.sql.ResultSet#rowInserted()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.rowInserted = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowUpdated()">java.sql.ResultSet#rowUpdated()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.rowUpdated = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchDirection(int)">java.sql.ResultSet#setFetchDirection(int)</a></code>.
 *
 * @param {number} direction - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.setFetchDirection = function(direction){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchSize(int)">java.sql.ResultSet#setFetchSize(int)</a></code>.
 *
 * @param {number} rows - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.setFetchSize = function(rows){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(String, java.sql.Array)">java.sql.ResultSet#updateArray(String, java.sql.Array)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateArray = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(String, java.math.BigDecimal)">java.sql.ResultSet#updateBigDecimal(String, java.math.BigDecimal)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {BigNumber} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateBigDecimal = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(String, java.sql.Blob)">java.sql.ResultSet#updateBlob(String, java.sql.Blob)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateBlob = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(String, boolean)">java.sql.ResultSet#updateBoolean(String, boolean)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Boolean} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateBoolean = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(String, byte)">java.sql.ResultSet#updateByte(String, byte)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Byte} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateByte = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(String, byte[])">java.sql.ResultSet#updateBytes(String, byte[])</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Byte[]} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateBytes = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(String, java.sql.Clob)">java.sql.ResultSet#updateClob(String, java.sql.Clob)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateClob = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(String, java.sql.Date)">java.sql.ResultSet#updateDate(String, java.sql.Date)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcDate} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateDate = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(String, double)">java.sql.ResultSet#updateDouble(String, double)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Number} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateDouble = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(String, float)">java.sql.ResultSet#updateFloat(String, float)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Number} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateFloat = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(String, int)">java.sql.ResultSet#updateInt(String, int)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateInt = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(String, long)">java.sql.ResultSet#updateLong(String, long)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateLong = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(String, java.sql.NClob)">java.sql.ResultSet#updateNClob(String, java.sql.NClob)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateNClob = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(String, String)">java.sql.ResultSet#updateNString(String, String)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {String} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateNString = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(String)">java.sql.ResultSet#updateNull(String)</a></code>.
 *
 * @param {String} columnLabel - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateNull = function(columnLabel){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(String, Object, int)">java.sql.ResultSet#updateObject(String, Object, int)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Object} x - 
 * @param {number} scaleOrLength - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateObject = function(columnLabel, x, scaleOrLength){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(String, java.sql.Ref)">java.sql.ResultSet#updateRef(String, java.sql.Ref)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateRef = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRow()">java.sql.ResultSet#updateRow()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateRow = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(String, java.sql.RowId)">java.sql.ResultSet#updateRowId(String, java.sql.RowId)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateRowId = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(String, java.sql.SQLXML)">java.sql.ResultSet#updateSQLXML(String, java.sql.SQLXML)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcSQLXML} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateSQLXML = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(String, short)">java.sql.ResultSet#updateShort(String, short)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {number} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateShort = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(String, String)">java.sql.ResultSet#updateString(String, String)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {String} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateString = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(String, java.sql.Time)">java.sql.ResultSet#updateTime(String, java.sql.Time)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcTime} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateTime = function(columnLabel, x){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(String, java.sql.Timestamp)">java.sql.ResultSet#updateTimestamp(String, java.sql.Timestamp)</a></code>.
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcTimestamp} x - 
 *
 * @return void
 */
Jdbc.JdbcResultSet.prototype.updateTimestamp = function(columnLabel, x){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#wasNull()">java.sql.ResultSet#wasNull()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSet.prototype.wasNull = function(){};

/** @constructor */
Jdbc.JdbcResultSetMetaData = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getCatalogName(int)">java.sql.ResultSetMetaData#getCatalogName(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getCatalogName = function(column){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnClassName(int)">java.sql.ResultSetMetaData#getColumnClassName(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnClassName = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnCount()">java.sql.ResultSetMetaData#getColumnCount()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnCount = function(){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnDisplaySize(int)">java.sql.ResultSetMetaData#getColumnDisplaySize(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnDisplaySize = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnLabel(int)">java.sql.ResultSetMetaData#getColumnLabel(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnLabel = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnName(int)">java.sql.ResultSetMetaData#getColumnName(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnName = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnType(int)">java.sql.ResultSetMetaData#getColumnType(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnType = function(column){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnTypeName(int)">java.sql.ResultSetMetaData#getColumnTypeName(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getColumnTypeName = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getPrecision(int)">java.sql.ResultSetMetaData#getPrecision(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSetMetaData.prototype.getPrecision = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getScale(int)">java.sql.ResultSetMetaData#getScale(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSetMetaData.prototype.getScale = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getSchemaName(int)">java.sql.ResultSetMetaData#getSchemaName(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getSchemaName = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getTableName(int)">java.sql.ResultSetMetaData#getTableName(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {String}
 */
Jdbc.JdbcResultSetMetaData.prototype.getTableName = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isAutoIncrement(int)">java.sql.ResultSetMetaData#isAutoIncrement(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isAutoIncrement = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCaseSensitive(int)">java.sql.ResultSetMetaData#isCaseSensitive(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isCaseSensitive = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCurrency(int)">java.sql.ResultSetMetaData#isCurrency(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isCurrency = function(column){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isDefinitelyWritable(int)">java.sql.ResultSetMetaData#isDefinitelyWritable(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isDefinitelyWritable = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isNullable(int)">java.sql.ResultSetMetaData#isNullable(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {number}
 */
Jdbc.JdbcResultSetMetaData.prototype.isNullable = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isReadOnly(int)">java.sql.ResultSetMetaData#isReadOnly(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isReadOnly = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSearchable(int)">java.sql.ResultSetMetaData#isSearchable(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isSearchable = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSigned(int)">java.sql.ResultSetMetaData#isSigned(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isSigned = function(column){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isWritable(int)">java.sql.ResultSetMetaData#isWritable(int)</a></code>.
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcResultSetMetaData.prototype.isWritable = function(column){};

/** @constructor */
Jdbc.JdbcRowId = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/RowId.html#getBytes()">java.sql.RowId#getBytes()</a></code>.
 *
 * @return {Byte[]}
 */
Jdbc.JdbcRowId.prototype.getBytes = function(){};

/** @constructor */
Jdbc.JdbcRowIdLifetime = function(){};

/** @constructor */
Jdbc.JdbcSQLXML = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#free()">java.sql.SQLXML#free()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcSQLXML.prototype.free = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#getString()">java.sql.SQLXML#getString()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcSQLXML.prototype.getString = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#setString(String)">java.sql.SQLXML#setString(String)</a></code>.
 *
 * @param {String} value - 
 *
 * @return void
 */
Jdbc.JdbcSQLXML.prototype.setString = function(value){};

/** @constructor */
Jdbc.JdbcSavepoint = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointId()">java.sql.Savepoint#getSavepointId()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcSavepoint.prototype.getSavepointId = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointName()">java.sql.Savepoint#getSavepointName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcSavepoint.prototype.getSavepointName = function(){};

/** @constructor */
Jdbc.JdbcStatement = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(String)">java.sql.Statement#addBatch(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.addBatch = function(sql){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()">java.sql.Statement#cancel()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.cancel = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()">java.sql.Statement#clearBatch()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.clearBatch = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()">java.sql.Statement#clearWarnings()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.clearWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()">java.sql.Statement#close()</a></code>.
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.close = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(String, String[])">java.sql.Statement#execute(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcStatement.prototype.execute = function(sql, columnNames){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()">java.sql.Statement#executeBatch()</a></code>.
 *
 * @return {Integer[]}
 */
Jdbc.JdbcStatement.prototype.executeBatch = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(String)">java.sql.Statement#executeQuery(String)</a></code>.
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcStatement.prototype.executeQuery = function(sql){};

/**
 * For documentation of this method, see
 <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(String, String[])">java.sql.Statement#executeUpdate(String, String[])</a></code>.
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.executeUpdate = function(sql, columnNames){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()">java.sql.Statement#getConnection()</a></code>.
 *
 * @return {Jdbc.JdbcConnection}
 */
Jdbc.JdbcStatement.prototype.getConnection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">java.sql.Statement#getFetchDirection()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getFetchDirection = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()">java.sql.Statement#getFetchSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getFetchSize = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">java.sql.Statement#getGeneratedKeys()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcStatement.prototype.getGeneratedKeys = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">java.sql.Statement#getMaxFieldSize()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getMaxFieldSize = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()">java.sql.Statement#getMaxRows()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getMaxRows = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">java.sql.Statement#getMoreResults(int)</a></code>.
 *
 * @param {number} current - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcStatement.prototype.getMoreResults = function(current){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">java.sql.Statement#getQueryTimeout()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getQueryTimeout = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()">java.sql.Statement#getResultSet()</a></code>.
 *
 * @return {Jdbc.JdbcResultSet}
 */
Jdbc.JdbcStatement.prototype.getResultSet = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">java.sql.Statement#getResultSetConcurrency()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getResultSetConcurrency = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">java.sql.Statement#getResultSetHoldability()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getResultSetHoldability = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">java.sql.Statement#getResultSetType()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getResultSetType = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">java.sql.Statement#getUpdateCount()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcStatement.prototype.getUpdateCount = function(){};

/**
 * Returns the current set of warnings reported by the driver. For documentation of this method,
 see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()">java.sql.Statement#getWarnings()</a></code>
 *
 * @return {String[]} array of warnings
 */
Jdbc.JdbcStatement.prototype.getWarnings = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()">java.sql.Statement#isClosed()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcStatement.prototype.isClosed = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()">java.sql.Statement#isPoolable()</a></code>.
 *
 * @return {Boolean}
 */
Jdbc.JdbcStatement.prototype.isPoolable = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(String)">java.sql.Statement#setCursorName(String)</a></code>.
 *
 * @param {String} name - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setCursorName = function(name){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">java.sql.Statement#setEscapeProcessing(boolean)</a></code>.
 *
 * @param {Boolean} enable - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setEscapeProcessing = function(enable){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">java.sql.Statement#setFetchDirection(int)</a></code>.
 *
 * @param {number} direction - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setFetchDirection = function(direction){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">java.sql.Statement#setFetchSize(int)</a></code>.
 *
 * @param {number} rows - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setFetchSize = function(rows){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">java.sql.Statement#setMaxFieldSize(int)</a></code>.
 *
 * @param {number} max - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setMaxFieldSize = function(max){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)">java.sql.Statement#setMaxRows(int)</a></code>.
 *
 * @param {number} max - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setMaxRows = function(max){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">java.sql.Statement#setPoolable(boolean)</a></code>.
 *
 * @param {Boolean} poolable - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setPoolable = function(poolable){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">java.sql.Statement#setQueryTimeout(int)</a></code>.
 *
 * @param {number} seconds - 
 *
 * @return void
 */
Jdbc.JdbcStatement.prototype.setQueryTimeout = function(seconds){};

/** @constructor */
Jdbc.JdbcStatment = function(){};

/** @constructor */
Jdbc.JdbcStruct = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getAttributes()">java.sql.Struct#getAttributes()</a></code>.
 *
 * @return {Object[]}
 */
Jdbc.JdbcStruct.prototype.getAttributes = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getSQLTypeName()">java.sql.Struct#getSQLTypeName()</a></code>.
 *
 * @return {String}
 */
Jdbc.JdbcStruct.prototype.getSQLTypeName = function(){};

/** @constructor */
Jdbc.JdbcTime = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#after(java.util.Date)">java.sql.Time#after(java.util.Date)</a></code>.
 *
 * @param {Jdbc.JdbcTime} when - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcTime.prototype.after = function(when){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#before(java.util.Date)">java.sql.Time#before(java.util.Date)</a></code>.
 *
 * @param {Jdbc.JdbcTime} when - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcTime.prototype.before = function(when){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#getHours()">java.sql.Time#getHours()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTime.prototype.getHours = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#getMinutes()">java.sql.Time#getMinutes()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTime.prototype.getMinutes = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#getSeconds()">java.sql.Time#getSeconds()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTime.prototype.getSeconds = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#getTime()">java.sql.Time#getTime()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTime.prototype.getTime = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setHours(int)">java.sql.Time#setHours(int)</a></code>.
 *
 * @param {number} hours - 
 *
 * @return void
 */
Jdbc.JdbcTime.prototype.setHours = function(hours){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setMinutes(int)">java.sql.Time#setMinutes(int)</a></code>.
 *
 * @param {number} minutes - 
 *
 * @return void
 */
Jdbc.JdbcTime.prototype.setMinutes = function(minutes){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setSeconds(int)">java.sql.Time#setSeconds(int)</a></code>.
 *
 * @param {number} seconds - 
 *
 * @return void
 */
Jdbc.JdbcTime.prototype.setSeconds = function(seconds){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setTime(long)">java.sql.Time#setTime(long)</a></code>.
 *
 * @param {number} milliseconds - 
 *
 * @return void
 */
Jdbc.JdbcTime.prototype.setTime = function(milliseconds){};

/** @constructor */
Jdbc.JdbcTimestamp = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#after(java.sql.Timestamp)">java.sql.Timestamp#after(java.sql.Timestamp)</a></code>.
 *
 * @param {Jdbc.JdbcTimestamp} when - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcTimestamp.prototype.after = function(when){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#before(java.sql.Timestamp)">java.sql.Timestamp#before(java.sql.Timestamp)</a></code>.
 *
 * @param {Jdbc.JdbcTimestamp} when - 
 *
 * @return {Boolean}
 */
Jdbc.JdbcTimestamp.prototype.before = function(when){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getDate()">java.sql.Timestamp#getDate()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getDate = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getHours()">java.sql.Timestamp#getHours()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getHours = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getMinutes()">java.sql.Timestamp#getMinutes()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getMinutes = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getMonth()">java.sql.Timestamp#getMonth()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getMonth = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getNanos()">java.sql.Timestamp#getNanos()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getNanos = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getSeconds()">java.sql.Timestamp#getSeconds()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getSeconds = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getTime()">java.sql.Timestamp#getTime()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getTime = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getYear()">java.sql.Timestamp#getYear()</a></code>.
 *
 * @return {number}
 */
Jdbc.JdbcTimestamp.prototype.getYear = function(){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setDate(int)">java.sql.Timestamp#setDate(int)</a></code>.
 *
 * @param {number} date - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setDate = function(date){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setHours(int)">java.sql.Timestamp#setHours(int)</a></code>.
 *
 * @param {number} hours - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setHours = function(hours){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setMinutes(int)">java.sql.Timestamp#setMinutes(int)</a></code>.
 *
 * @param {number} minutes - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setMinutes = function(minutes){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setMonth(int)">java.sql.Timestamp#setMonth(int)</a></code>.
 *
 * @param {number} month - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setMonth = function(month){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setNanos(int)">java.sql.Timestamp#setNanos(int)</a></code>.
 *
 * @param {number} nanoseconds - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setNanos = function(nanoseconds){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setSeconds(int)">java.sql.Timestamp#setSeconds(int)</a></code>.
 *
 * @param {number} seconds - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setSeconds = function(seconds){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setTime(long)">java.sql.Timestamp#setTime(long)</a></code>.
 *
 * @param {number} milliseconds - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setTime = function(milliseconds){};

/**
 * For documentation of this method, see <code><a href="http://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setYear(int)">java.sql.Timestamp#setYear(int)</a></code>.
 *
 * @param {number} year - 
 *
 * @return void
 */
Jdbc.JdbcTimestamp.prototype.setYear = function(year){};

/** @constructor */
Jdbc.JdbcTypes = function(){};

