/**********************************************
 * @namespace Jdbc
 ***********************************************/


/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.

 <p><aside class="note"><b>Note:</b> Database URLs of the form <code>jdbc:google:rdbms:subname</code>
 are <a href="/apps-script/guides/support/sunset">deprecated</a>. These should be migrated to a
 <code>jdbc:google:mysql:subname</code> form.</aside>
 *
 * @function Jdbc.getCloudSqlConnection
 *
 * @param {String} url - a database URL of the form <code>jdbc:google:mysql:subname</code>
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */

/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.

 <p><aside class="note"><b>Note:</b> Database URLs of the form <code>jdbc:google:rdbms:subname</code>
 are <a href="/apps-script/guides/support/sunset">deprecated</a>. These should be migrated to a
 <code>jdbc:google:mysql:subname</code> form.</aside>
 *
 * @function Jdbc.getCloudSqlConnection
 *
 * @param {String} url - a database URL of the form <code>jdbc:google:mysql:subname</code>
 * @param {Object} info - optional JavaScript object specifying advanced parameters as defined below
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */

/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.

 <p><aside class="note"><b>Note:</b> Database URLs of the form <code>jdbc:google:rdbms:subname</code>
 are <a href="/apps-script/guides/support/sunset">deprecated</a>. These should be migrated to a
 <code>jdbc:google:mysql:subname</code> form.</aside>
 *
 * @function Jdbc.getCloudSqlConnection
 *
 * @param {String} url - a database URL of the form <code>jdbc:google:mysql:subname</code>
 * @param {String} userName - the username to pass to the database
 * @param {String} password - the user's password
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */

/**
 * Attempts to establish a connection to the given database URL.

 <pre class="prettyprint"><code>
 var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;);
 </code></pre>
 *
 * @function Jdbc.getConnection
 *
 * @param {String} url - a database URL of the form <code>jdbc:subprotocol:subname</code>
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */

/**
 * Attempts to establish a connection to the given database URL.

 <pre class="prettyprint"><code>
 var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
                               {user: &#39;username&#39;, password: &#39;password&#39;});
 </code></pre>
 *
 * @function Jdbc.getConnection
 *
 * @param {String} url - a database URL of the form <code>jdbc:subprotocol:subname</code>
 * @param {Object} info - optional JavaScript object specifying advanced parameters as defined below
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */

/**
 * Attempts to establish a connection to the given database using a username and password.

 <pre class="prettyprint"><code>
 var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
                               &#39;username&#39;, &#39;password&#39;);
 </code></pre>
 *
 * @function Jdbc.getConnection
 *
 * @param {String} url - a database URL of the form <code>jdbc:subprotocol:subname</code>
 * @param {String} userName - the username to pass to the database
 * @param {String} password - the user's password
 *
 * @return {Jdbc.JdbcConnection} a JdbcConnection object
 */

/**
 * Create a date from milliseconds since epoch.
 *
 * @function Jdbc.newDate
 *
 * @param {number} milliseconds - milliseconds since epoch
 *
 * @return {Jdbc.JdbcDate} a JdbcDate object
 */

/**
 * Create a time from milliseconds since epoch.
 *
 * @function Jdbc.newTime
 *
 * @param {number} milliseconds - milliseconds since epoch
 *
 * @return {Jdbc.JdbcTime} a JdbcTime object
 */

/**
 * Create a timestamp from milliseconds since epoch.
 *
 * @function Jdbc.newTimestamp
 *
 * @param {number} milliseconds - milliseconds since epoch
 *
 * @return {Jdbc.JdbcTimestamp} a JdbcTimestamp object
 */

/**
 * Create a date by parsing the SQL date string.
 *
 * @function Jdbc.parseDate
 *
 * @param {String} date - a string containing a SQL date string
 *
 * @return {Jdbc.JdbcDate} a JdbcDate object
 */

/**
 * Create a time by parsing the SQL time string.
 *
 * @function Jdbc.parseTime
 *
 * @param {String} time - a string containing a SQL time string
 *
 * @return {Jdbc.JdbcTime} a JdbcTime object
 */

/**
 * Create a timestamp by parsing the SQL timestamp string.
 *
 * @function Jdbc.parseTimestamp
 *
 * @param {String} timestamp - a string containing a SQL timestamp string
 *
 * @return {Jdbc.JdbcTimestamp} a JdbcTimestamp object
 */

/**
 * @class Jdbc.JdbcArray
 */

/**
 * For documentation of this method, see <code>Array.free()</code>.
 *
 * @function Jdbc.JdbcArray#free
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Array.getArray()</code>.
 *
 * @function Jdbc.JdbcArray#getArray
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>Array.getArray(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcArray#getArray
 *
 * @param {number} index - 
 * @param {number} count - 
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>Array.getBaseType()</code>.
 *
 * @function Jdbc.JdbcArray#getBaseType
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Array.getBaseTypeName()</code>.
 *
 * @function Jdbc.JdbcArray#getBaseTypeName
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>Array.getResultSet()</code>.
 *
 * @function Jdbc.JdbcArray#getResultSet
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Array.getResultSet(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcArray#getResultSet
 *
 * @param {number} index - 
 * @param {number} count - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * @class Jdbc.JdbcBlob
 */

/**
 * For documentation of this method, see <code>Blob.free()</code>.
 *
 * @function Jdbc.JdbcBlob#free
 *
 * @return void
 */

/**
 * Gets the content of this JdbcBlob as an Apps Script blob.
 *
 * @function Jdbc.JdbcBlob#getAppsScriptBlob
 *
 * @return {Blob} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" becomes
 "ChristmasList.12.25.pdf".
 *
 * @function Jdbc.JdbcBlob#getAs
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
     valid.
 *
 * @return {Blob} the data as a blob
 */

/**
 * For documentation of this method, see <code>Blob.getBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcBlob#getBytes
 *
 * @param {number} position - 
 * @param {number} length - 
 *
 * @return {Byte[]}
 */

/**
 * For documentation of this method, see <code>Blob.length()</code>.
 *
 * @function Jdbc.JdbcBlob#____length
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Blob.position(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcBlob#position
 *
 * @param {Byte[]} pattern - 
 * @param {number} start - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Blob.position(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcBlob#position
 *
 * @param {Jdbc.JdbcBlob} pattern - 
 * @param {number} start - 
 *
 * @return {number}
 */

/**
 * Convenience method for BlobSources.
 *
 * @function Jdbc.JdbcBlob#setBytes
 *
 * @param {number} position - 
 * @param {BlobSource} blobSource - 
 *
 * @return {number}
 */

/**
 * Convenience method for BlobSources.
 *
 * @function Jdbc.JdbcBlob#setBytes
 *
 * @param {number} position - 
 * @param {BlobSource} blobSource - 
 * @param {number} offset - 
 * @param {number} length - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Blob.setBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcBlob#setBytes
 *
 * @param {number} position - 
 * @param {Byte[]} bytes - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Blob.setBytes(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcBlob#setBytes
 *
 * @param {number} position - 
 * @param {Byte[]} bytes - 
 * @param {number} offset - 
 * @param {number} length - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Blob.truncate(arg0)</code>.
 *
 * @function Jdbc.JdbcBlob#truncate
 *
 * @param {number} length - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcCallableStatement
 */

/**
 * For documentation of this method, see <code>PreparedStatement.addBatch()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#addBatch
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.addBatch(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#addBatch
 *
 * @param {String} sql - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.cancel()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#cancel
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.clearBatch()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#clearBatch
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.clearParameters()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#clearParameters
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.clearWarnings()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#clearWarnings
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.close()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#close
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.execute()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#execute
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#execute
 *
 * @param {String} sql - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#execute
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#execute
 *
 * @param {String} sql - 
 * @param {Integer[]} columnIndexes - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#execute
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.executeBatch()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeBatch
 *
 * @return {Integer[]}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.executeQuery()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeQuery
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.executeQuery(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeQuery
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.executeUpdate()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 *
 * @param {String} sql - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {Integer[]} columnIndexes - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getArray(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getArray
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcArray}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getArray(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getArray
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcArray}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBigDecimal(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBigDecimal
 *
 * @param {number} parameterIndex - 
 *
 * @return {BigNumber}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBigDecimal(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBigDecimal
 *
 * @param {String} parameterName - 
 *
 * @return {BigNumber}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBlob(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBlob
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcBlob}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBlob(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBlob
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcBlob}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBoolean(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBoolean
 *
 * @param {number} parameterIndex - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBoolean(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBoolean
 *
 * @param {String} parameterName - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getByte(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getByte
 *
 * @param {number} parameterIndex - 
 *
 * @return {Byte}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getByte(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getByte
 *
 * @param {String} parameterName - 
 *
 * @return {Byte}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBytes(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBytes
 *
 * @param {number} parameterIndex - 
 *
 * @return {Byte[]}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getBytes(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getBytes
 *
 * @param {String} parameterName - 
 *
 * @return {Byte[]}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getClob(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getClob
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getClob(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getClob
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>Statement.getConnection()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getConnection
 *
 * @return {Jdbc.JdbcConnection}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getDate(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getDate
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getDate
 *
 * @param {number} parameterIndex - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getDate(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getDate
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getDate
 *
 * @param {String} parameterName - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getDouble(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getDouble
 *
 * @param {number} parameterIndex - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getDouble(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getDouble
 *
 * @param {String} parameterName - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>Statement.getFetchDirection()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getFetchDirection
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getFetchSize()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getFetchSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getFloat(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getFloat
 *
 * @param {number} parameterIndex - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getFloat(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getFloat
 *
 * @param {String} parameterName - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>Statement.getGeneratedKeys()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getGeneratedKeys
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getInt(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getInt
 *
 * @param {number} parameterIndex - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getInt(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getInt
 *
 * @param {String} parameterName - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getLong(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getLong
 *
 * @param {number} parameterIndex - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getLong(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getLong
 *
 * @param {String} parameterName - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getMaxFieldSize()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getMaxFieldSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getMaxRows()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getMaxRows
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.getMetaData()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getMetaData
 *
 * @return {Jdbc.JdbcResultSetMetaData}
 */

/**
 * For documentation of this method, see <code>Statement.getMoreResults()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getMoreResults
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.getMoreResults(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getMoreResults
 *
 * @param {number} current - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getNClob(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getNClob
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getNClob(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getNClob
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getNString(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getNString
 *
 * @param {number} parameterIndex - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getNString(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getNString
 *
 * @param {String} parameterName - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getObject(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getObject
 *
 * @param {number} parameterIndex - 
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getObject(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getObject
 *
 * @param {String} parameterName - 
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.getParameterMetaData()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getParameterMetaData
 *
 * @return {Jdbc.JdbcParameterMetaData}
 */

/**
 * For documentation of this method, see <code>Statement.getQueryTimeout()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getQueryTimeout
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getRef(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getRef
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcRef}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getRef(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getRef
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcRef}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSet()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getResultSet
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetConcurrency()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getResultSetConcurrency
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetHoldability()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getResultSetHoldability
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetType()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getResultSetType
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getRowId(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getRowId
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcRowId}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getRowId(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getRowId
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcRowId}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getSQLXML(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getSQLXML
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcSQLXML}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getSQLXML(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getSQLXML
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcSQLXML}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getShort(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getShort
 *
 * @param {number} parameterIndex - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getShort(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getShort
 *
 * @param {String} parameterName - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getString(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getString
 *
 * @param {number} parameterIndex - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getString(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getString
 *
 * @param {String} parameterName - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTime(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTime
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTime
 *
 * @param {number} parameterIndex - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTime(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTime
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTime
 *
 * @param {String} parameterName - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTimestamp(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 *
 * @param {number} parameterIndex - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 *
 * @param {number} parameterIndex - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTimestamp(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 *
 * @param {String} parameterName - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 *
 * @param {String} parameterName - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getURL(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getURL
 *
 * @param {number} parameterIndex - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>CallableStatement.getURL(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getURL
 *
 * @param {String} parameterName - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>Statement.getUpdateCount()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#getUpdateCount
 *
 * @return {number}
 */

/**
 * Returns the current set of warnings reported by the driver. For documentation of this method,
 see <code>Statement.getWarnings()</code>
 *
 * @function Jdbc.JdbcCallableStatement#getWarnings
 *
 * @return {String[]} array of warnings
 */

/**
 * For documentation of this method, see <code>Statement.isClosed()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#isClosed
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.isPoolable()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#isPoolable
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>CallableStatement.registerOutParameter(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.registerOutParameter(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 * @param {number} scale - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.registerOutParameter(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.registerOutParameter(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.registerOutParameter(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 * @param {number} scale - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.registerOutParameter(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setArray(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setArray
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBigDecimal(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBigDecimal
 *
 * @param {number} parameterIndex - 
 * @param {BigNumber} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setBigDecimal(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBigDecimal
 *
 * @param {String} parameterName - 
 * @param {BigNumber} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBlob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBlob
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setBlob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBlob
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBoolean(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBoolean
 *
 * @param {number} parameterIndex - 
 * @param {Boolean} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setBoolean(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBoolean
 *
 * @param {String} parameterName - 
 * @param {Boolean} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setByte(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setByte
 *
 * @param {number} parameterIndex - 
 * @param {Byte} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setByte(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setByte
 *
 * @param {String} parameterName - 
 * @param {Byte} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBytes
 *
 * @param {number} parameterIndex - 
 * @param {Byte[]} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setBytes
 *
 * @param {String} parameterName - 
 * @param {Byte[]} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setClob
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setClob
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setCursorName(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setCursorName
 *
 * @param {String} name - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setDate
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcDate} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setDate(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setDate
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcDate} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setDate
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcDate} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setDate(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setDate
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcDate} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setDouble(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setDouble
 *
 * @param {number} parameterIndex - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setDouble(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setDouble
 *
 * @param {String} parameterName - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setEscapeProcessing(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setEscapeProcessing
 *
 * @param {Boolean} enable - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setFetchDirection(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setFetchDirection
 *
 * @param {number} direction - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setFetchSize(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setFetchSize
 *
 * @param {number} rows - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setFloat(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setFloat
 *
 * @param {number} parameterIndex - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setFloat(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setFloat
 *
 * @param {String} parameterName - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setInt(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setInt
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setInt(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setInt
 *
 * @param {String} parameterName - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setLong(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setLong
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setLong(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setLong
 *
 * @param {String} parameterName - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setMaxFieldSize(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setMaxFieldSize
 *
 * @param {number} max - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setMaxRows(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setMaxRows
 *
 * @param {number} max - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNClob
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setNClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNClob
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcClob} value - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNString
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setNString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNString
 *
 * @param {String} parameterName - 
 * @param {String} value - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNull(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNull
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNull(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNull
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setNull(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNull
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setNull(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setNull
 *
 * @param {String} parameterName - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setObject(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setObject
 *
 * @param {number} index - 
 * @param {Object} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setObject(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setObject
 *
 * @param {number} parameterIndex - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setObject(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setObject
 *
 * @param {number} parameterIndex - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 * @param {number} scaleOrLength - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setObject(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setObject
 *
 * @param {String} parameterName - 
 * @param {Object} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setObject(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setObject
 *
 * @param {String} parameterName - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setObject(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setObject
 *
 * @param {String} parameterName - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 * @param {number} scale - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setPoolable(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setPoolable
 *
 * @param {Boolean} poolable - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setQueryTimeout(arg0)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setQueryTimeout
 *
 * @param {number} seconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setRef(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setRef
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setRowId(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setRowId
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setRowId(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setRowId
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setSQLXML(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setSQLXML
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcSQLXML} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setSQLXML(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setSQLXML
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcSQLXML} xmlObject - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setShort(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setShort
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setShort(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setShort
 *
 * @param {String} parameterName - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setString
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setString
 *
 * @param {String} parameterName - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTime
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTime} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTime(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTime
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTime} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTime
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcTime} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setTime(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTime
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcTime} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTimestamp} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTimestamp(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTimestamp} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcTimestamp} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setTimestamp(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 *
 * @param {String} parameterName - 
 * @param {Jdbc.JdbcTimestamp} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setURL(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setURL
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.setURL(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcCallableStatement#setURL
 *
 * @param {String} parameterName - 
 * @param {String} val - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>CallableStatement.wasNull()</code>.
 *
 * @function Jdbc.JdbcCallableStatement#wasNull
 *
 * @return {Boolean}
 */

/**
 * @class Jdbc.JdbcClob
 */

/**
 * For documentation of this method, see <code>Clob.free()</code>.
 *
 * @function Jdbc.JdbcClob#free
 *
 * @return void
 */

/**
 * Gets the content of this JdbcClob as an Apps Script blob.
 *
 * @function Jdbc.JdbcClob#getAppsScriptBlob
 *
 * @return {Blob} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs
 */

/**
 * Return the data inside this object as a blob converted to the specified content type. This
 method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 assumes that the part of the filename that follows the last period (if any) is an existing
 extension that should be replaced. Consequently, "ChristmasList.12.25.2014" becomes
 "ChristmasList.12.25.pdf".
 *
 * @function Jdbc.JdbcClob#getAs
 *
 * @param {String} contentType - the MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
     valid.
 *
 * @return {Blob} the data as a blob
 */

/**
 * For documentation of this method, see <code>Clob.getSubString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcClob#getSubString
 *
 * @param {number} position - 
 * @param {number} length - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>Clob.length()</code>.
 *
 * @function Jdbc.JdbcClob#____length
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Clob.position(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcClob#position
 *
 * @param {Jdbc.JdbcClob} search - 
 * @param {number} start - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Clob.position(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcClob#position
 *
 * @param {String} search - 
 * @param {number} start - 
 *
 * @return {number}
 */

/**
 * Convenience method for BlobSources.
 *
 * @function Jdbc.JdbcClob#setString
 *
 * @param {number} position - 
 * @param {BlobSource} blobSource - 
 *
 * @return {number}
 */

/**
 * Convenience method for BlobSources.
 *
 * @function Jdbc.JdbcClob#setString
 *
 * @param {number} position - 
 * @param {BlobSource} blobSource - 
 * @param {number} offset - 
 * @param {number} len - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Clob.setString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcClob#setString
 *
 * @param {number} position - 
 * @param {String} value - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Clob.setString(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcClob#setString
 *
 * @param {number} position - 
 * @param {String} value - 
 * @param {number} offset - 
 * @param {number} len - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Clob.truncate(arg0)</code>.
 *
 * @function Jdbc.JdbcClob#truncate
 *
 * @param {number} length - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcConnection
 */

/**
 * For documentation of this method, see <code>Connection.clearWarnings()</code>.
 *
 * @function Jdbc.JdbcConnection#clearWarnings
 *
 * @return void
 */

/**
 * Release the JdbcConnection's database and all associated resources.

 <pre class="prettyprint"><code>
 var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
 conn.close();
 </code></pre>
 *
 * @function Jdbc.JdbcConnection#close
 *
 * @return void
 */

/**
 * Makes all pending changes permanent, releases database locks held by this JdbcConnection.

 <pre class="prettyprint"><code>
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
 * @function Jdbc.JdbcConnection#commit
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.createArrayOf(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcConnection#createArrayOf
 *
 * @param {String} typeName - 
 * @param {Object[]} elements - 
 *
 * @return {Jdbc.JdbcArray}
 */

/**
 * Constructs a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> instance

 <p>The object returned initially contains no data. The setBytes methods of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> may
 be used to set the data it should contain. Note that the blob used here is not the same as the
 blob created with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../utilities/utilities.html#newBlob(Byte)'>Utilities.newBlob(data)</a></code>. To convert
 between the two formats, use the defined getBytes() and setBytes() methods. Alternatively, both
 <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> provide a getAppsScriptBlob() convenience method for
 converting to a format that can be used by Apps Script.
 *
 * @function Jdbc.JdbcConnection#createBlob
 *
 * @return {Jdbc.JdbcBlob}
 */

/**
 * For documentation of this method, see <code>Connection.createClob()</code>.
 *
 * @function Jdbc.JdbcConnection#createClob
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>Connection.createNClob()</code>.
 *
 * @function Jdbc.JdbcConnection#createNClob
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>Connection.createSQLXML()</code>.
 *
 * @function Jdbc.JdbcConnection#createSQLXML
 *
 * @return {Jdbc.JdbcSQLXML}
 */

/**
 * Creates a JdbcStatement object for sending SQL statements to the database.

 <pre class="prettyprint"><code>
 // This sample code assumes authentication is off
 var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
 var stmt = conn.createStatement();

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
 * @function Jdbc.JdbcConnection#createStatement
 *
 * @return {Jdbc.JdbcStatement} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> instance to execute queries with
 */

/**
 * Creates a JdbcStatement object for sending SQL statements to the database.

 <p>This version allows the result set type and concurrency to be overridden.

 <pre class="prettyprint"><code>
 // This sample code assumes authentication is off
 // For more information about this method, see documentation here:
 //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
 var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
 var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
                                 Jdbc.ResultSet.CONCUR_READ_ONLY);

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
 * @function Jdbc.JdbcConnection#createStatement
 *
 * @param {number} resultSetType - a result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY,
     Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE
 * @param {number} resultSetConcurrency - a concurrency type; one of Jdbc.ResultSet.CONCUR_READ_ONLY or
     Jdbc.ResultSet.CONCUR_UPDATABLE
 *
 * @return {Jdbc.JdbcStatement} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> instance to execute queries with
 */

/**
 * Creates a JdbcStatement object for sending SQL statements to the database.

 <p>This version allows the result set type, concurrency and holdability to be overridden.

 <pre class="prettyprint"><code>
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
 * @function Jdbc.JdbcConnection#createStatement
 *
 * @param {number} resultSetType - a result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY,
     Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE
 * @param {number} resultSetConcurrency - a concurrency type; one of Jdbc.ResultSet.CONCUR_READ_ONLY or
     Jdbc.ResultSet.CONCUR_UPDATABLE
 * @param {number} resultSetHoldability - a Jdbc.ResultSet holdability constant; one of
     Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT
 *
 * @return {Jdbc.JdbcStatement} a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> instance to execute queries with
 */

/**
 * For documentation of this method, see <code>Connection.createStruct(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcConnection#createStruct
 *
 * @param {String} typeName - 
 * @param {Object[]} attributes - 
 *
 * @return {Jdbc.JdbcStruct}
 */

/**
 * For documentation of this method, see <code>Connection.getAutoCommit()</code>.
 *
 * @function Jdbc.JdbcConnection#getAutoCommit
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Connection.getCatalog()</code>.
 *
 * @function Jdbc.JdbcConnection#getCatalog
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>Connection.getHoldability()</code>.
 *
 * @function Jdbc.JdbcConnection#getHoldability
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Connection.getMetaData()</code>.
 *
 * @function Jdbc.JdbcConnection#getMetaData
 *
 * @return {Jdbc.JdbcDatabaseMetaData}
 */

/**
 * For documentation of this method, see <code>Connection.getTransactionIsolation()</code>.
 *
 * @function Jdbc.JdbcConnection#getTransactionIsolation
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Connection.getWarnings()</code>.
 *
 * @function Jdbc.JdbcConnection#getWarnings
 *
 * @return {String[]}
 */

/**
 * For documentation of this method, see <code>Connection.isClosed()</code>.
 *
 * @function Jdbc.JdbcConnection#isClosed
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Connection.isReadOnly()</code>.
 *
 * @function Jdbc.JdbcConnection#isReadOnly
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Connection.isValid(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#isValid
 *
 * @param {number} timeout - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Connection.nativeSQL(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#nativeSQL
 *
 * @param {String} sql - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>Connection.prepareCall(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareCall
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcCallableStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareCall(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareCall
 *
 * @param {String} sql - 
 * @param {number} resultSetType - 
 * @param {number} resultSetConcurrency - 
 *
 * @return {Jdbc.JdbcCallableStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareCall(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareCall
 *
 * @param {String} sql - 
 * @param {number} resultSetType - 
 * @param {number} resultSetConcurrency - 
 * @param {number} resultSetHoldability - 
 *
 * @return {Jdbc.JdbcCallableStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareStatement(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareStatement
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareStatement(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareStatement
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareStatement(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareStatement
 *
 * @param {String} sql - 
 * @param {number} resultSetType - 
 * @param {number} resultSetConcurrency - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareStatement(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareStatement
 *
 * @param {String} sql - 
 * @param {number} resultSetType - 
 * @param {number} resultSetConcurrency - 
 * @param {number} resultSetHoldability - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareStatement(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareStatementByIndex
 *
 * @param {String} sql - 
 * @param {Integer[]} indices - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */

/**
 * For documentation of this method, see <code>Connection.prepareStatement(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcConnection#prepareStatementByName
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Jdbc.JdbcPreparedStatement}
 */

/**
 * For documentation of this method, see <code>Connection.releaseSavepoint(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#releaseSavepoint
 *
 * @param {Jdbc.JdbcSavepoint} savepoint - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.rollback()</code>.
 *
 * @function Jdbc.JdbcConnection#rollback
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.rollback(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#rollback
 *
 * @param {Jdbc.JdbcSavepoint} savepoint - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.setAutoCommit(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#setAutoCommit
 *
 * @param {Boolean} autoCommit - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.setCatalog(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#setCatalog
 *
 * @param {String} catalog - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.setHoldability(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#setHoldability
 *
 * @param {number} holdability - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.setReadOnly(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#setReadOnly
 *
 * @param {Boolean} readOnly - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Connection.setSavepoint()</code>.
 *
 * @function Jdbc.JdbcConnection#setSavepoint
 *
 * @return {Jdbc.JdbcSavepoint}
 */

/**
 * For documentation of this method, see <code>Connection.setSavepoint(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#setSavepoint
 *
 * @param {String} name - 
 *
 * @return {Jdbc.JdbcSavepoint}
 */

/**
 * For documentation of this method, see <code>Connection.setTransactionIsolation(arg0)</code>.
 *
 * @function Jdbc.JdbcConnection#setTransactionIsolation
 *
 * @param {number} level - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcDatabaseMetaData
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.allProceduresAreCallable()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#allProceduresAreCallable
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.allTablesAreSelectable()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#allTablesAreSelectable
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.autoCommitFailureClosesAllResultSets()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#autoCommitFailureClosesAllResultSets
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.dataDefinitionCausesTransactionCommit()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#dataDefinitionCausesTransactionCommit
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.dataDefinitionIgnoredInTransactions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#dataDefinitionIgnoredInTransactions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.deletesAreDetected(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#deletesAreDetected
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.doesMaxRowSizeIncludeBlobs()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#doesMaxRowSizeIncludeBlobs
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getAttributes(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getAttributes
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} typeNamePattern - 
 * @param {String} attributeNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getBestRowIdentifier(arg0, arg1, arg2, arg3, arg4)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getBestRowIdentifier
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 * @param {number} scope - 
 * @param {Boolean} nullable - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getCatalogSeparator()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getCatalogSeparator
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getCatalogTerm()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getCatalogTerm
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getCatalogs()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getCatalogs
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getClientInfoProperties()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getClientInfoProperties
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getColumnPrivileges(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getColumnPrivileges
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getColumns(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getColumns
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getConnection()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getConnection
 *
 * @return {Jdbc.JdbcConnection}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getCrossReference(arg0, arg1, arg2, arg3, arg4, arg5)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getCrossReference
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

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDatabaseMajorVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseMajorVersion
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDatabaseMinorVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseMinorVersion
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDatabaseProductName()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseProductName
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDatabaseProductVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseProductVersion
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDefaultTransactionIsolation()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDefaultTransactionIsolation
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDriverMajorVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDriverMajorVersion
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDriverMinorVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDriverMinorVersion
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDriverName()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDriverName
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getDriverVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getDriverVersion
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getExportedKeys(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getExportedKeys
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getExtraNameCharacters()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getExtraNameCharacters
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getFunctionColumns(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getFunctionColumns
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} functionNamePattern - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getFunctions(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getFunctions
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} functionNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getIdentifierQuoteString()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getIdentifierQuoteString
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getImportedKeys(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getImportedKeys
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getIndexInfo(arg0, arg1, arg2, arg3, arg4)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getIndexInfo
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 * @param {Boolean} unique - 
 * @param {Boolean} approximate - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getJDBCMajorVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getJDBCMajorVersion
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getJDBCMinorVersion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getJDBCMinorVersion
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxBinaryLiteralLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxBinaryLiteralLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxCatalogNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxCatalogNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxCharLiteralLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxCharLiteralLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxColumnNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxColumnsInGroupBy()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInGroupBy
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxColumnsInIndex()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInIndex
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxColumnsInOrderBy()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInOrderBy
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxColumnsInSelect()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInSelect
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxColumnsInTable()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInTable
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxConnections()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxConnections
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxCursorNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxCursorNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxIndexLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxIndexLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxProcedureNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxProcedureNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxRowSize()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxRowSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxSchemaNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxSchemaNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxStatementLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxStatementLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxStatements()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxStatements
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxTableNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxTableNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxTablesInSelect()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxTablesInSelect
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getMaxUserNameLength()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getMaxUserNameLength
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getNumericFunctions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getNumericFunctions
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getPrimaryKeys(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getPrimaryKeys
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getProcedureColumns(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getProcedureColumns
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} procedureNamePattern - 
 * @param {String} columnNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getProcedureTerm()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getProcedureTerm
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getProcedures(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getProcedures
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} procedureNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getResultSetHoldability()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getResultSetHoldability
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getRowIdLifetime()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getRowIdLifetime
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSQLKeywords()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSQLKeywords
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSQLStateType()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSQLStateType
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSchemaTerm()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSchemaTerm
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSchemas()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSchemas
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSchemas(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSchemas
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSearchStringEscape()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSearchStringEscape
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getStringFunctions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getStringFunctions
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSuperTables(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSuperTables
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSuperTypes(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSuperTypes
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} typeNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getSystemFunctions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getSystemFunctions
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getTablePrivileges(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getTablePrivileges
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getTableTypes()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getTableTypes
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getTables(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getTables
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} tableNamePattern - 
 * @param {String[]} types - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getTimeDateFunctions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getTimeDateFunctions
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getTypeInfo()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getTypeInfo
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getUDTs(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getUDTs
 *
 * @param {String} catalog - 
 * @param {String} schemaPattern - 
 * @param {String} typeNamePattern - 
 * @param {Integer[]} types - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getURL()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getURL
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getUserName()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getUserName
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.getVersionColumns(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#getVersionColumns
 *
 * @param {String} catalog - 
 * @param {String} schema - 
 * @param {String} table - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.insertsAreDetected(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#insertsAreDetected
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.isCatalogAtStart()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#isCatalogAtStart
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.isReadOnly()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#isReadOnly
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.locatorsUpdateCopy()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#locatorsUpdateCopy
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.nullPlusNonNullIsNull()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#nullPlusNonNullIsNull
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.nullsAreSortedAtEnd()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedAtEnd
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.nullsAreSortedAtStart()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedAtStart
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.nullsAreSortedHigh()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedHigh
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.nullsAreSortedLow()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedLow
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.othersDeletesAreVisible(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#othersDeletesAreVisible
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.othersInsertsAreVisible(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#othersInsertsAreVisible
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.othersUpdatesAreVisible(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#othersUpdatesAreVisible
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.ownDeletesAreVisible(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#ownDeletesAreVisible
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.ownInsertsAreVisible(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#ownInsertsAreVisible
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.ownUpdatesAreVisible(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#ownUpdatesAreVisible
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.storesLowerCaseIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#storesLowerCaseIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.storesLowerCaseQuotedIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#storesLowerCaseQuotedIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.storesMixedCaseIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#storesMixedCaseIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.storesMixedCaseQuotedIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#storesMixedCaseQuotedIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.storesUpperCaseIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#storesUpperCaseIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.storesUpperCaseQuotedIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#storesUpperCaseQuotedIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsANSI92EntryLevelSQL()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsANSI92EntryLevelSQL
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsANSI92FullSQL()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsANSI92FullSQL
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsANSI92IntermediateSQL()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsANSI92IntermediateSQL
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsAlterTableWithAddColumn()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsAlterTableWithAddColumn
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsAlterTableWithDropColumn()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsAlterTableWithDropColumn
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsBatchUpdates()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsBatchUpdates
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCatalogsInDataManipulation()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInDataManipulation
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCatalogsInIndexDefinitions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInIndexDefinitions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCatalogsInPrivilegeDefinitions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInPrivilegeDefinitions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCatalogsInProcedureCalls()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInProcedureCalls
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCatalogsInTableDefinitions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInTableDefinitions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsColumnAliasing()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsColumnAliasing
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsConvert()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsConvert
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsConvert(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsConvert
 *
 * @param {number} fromType - 
 * @param {number} toType - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCoreSQLGrammar()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCoreSQLGrammar
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsCorrelatedSubqueries()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsCorrelatedSubqueries
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsDataDefinitionAndDataManipulationTransactions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsDataManipulationTransactionsOnly()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsDataManipulationTransactionsOnly
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsDifferentTableCorrelationNames()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsDifferentTableCorrelationNames
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsExpressionsInOrderBy()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsExpressionsInOrderBy
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsExtendedSQLGrammar()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsExtendedSQLGrammar
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsFullOuterJoins()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsFullOuterJoins
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsGetGeneratedKeys()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsGetGeneratedKeys
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsGroupBy()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsGroupBy
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsGroupByBeyondSelect()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsGroupByBeyondSelect
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsGroupByUnrelated()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsGroupByUnrelated
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsIntegrityEnhancementFacility()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsIntegrityEnhancementFacility
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsLikeEscapeClause()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsLikeEscapeClause
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsLimitedOuterJoins()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsLimitedOuterJoins
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsMinimumSQLGrammar()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsMinimumSQLGrammar
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsMixedCaseIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsMixedCaseIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsMixedCaseQuotedIdentifiers()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsMixedCaseQuotedIdentifiers
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsMultipleOpenResults()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsMultipleOpenResults
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsMultipleResultSets()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsMultipleResultSets
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsMultipleTransactions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsMultipleTransactions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsNamedParameters()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsNamedParameters
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsNonNullableColumns()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsNonNullableColumns
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsOpenCursorsAcrossCommit()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenCursorsAcrossCommit
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsOpenCursorsAcrossRollback()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenCursorsAcrossRollback
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsOpenStatementsAcrossCommit()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenStatementsAcrossCommit
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsOpenStatementsAcrossRollback()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenStatementsAcrossRollback
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsOrderByUnrelated()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsOrderByUnrelated
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsOuterJoins()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsOuterJoins
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsPositionedDelete()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsPositionedDelete
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsPositionedUpdate()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsPositionedUpdate
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsResultSetConcurrency(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsResultSetConcurrency
 *
 * @param {number} type - 
 * @param {number} concurrency - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsResultSetHoldability(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsResultSetHoldability
 *
 * @param {number} holdability - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsResultSetType(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsResultSetType
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSavepoints()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSavepoints
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSchemasInDataManipulation()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInDataManipulation
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSchemasInIndexDefinitions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInIndexDefinitions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSchemasInPrivilegeDefinitions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInPrivilegeDefinitions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSchemasInProcedureCalls()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInProcedureCalls
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSchemasInTableDefinitions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInTableDefinitions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSelectForUpdate()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSelectForUpdate
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsStatementPooling()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsStatementPooling
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsStoredFunctionsUsingCallSyntax()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsStoredFunctionsUsingCallSyntax
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsStoredProcedures()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsStoredProcedures
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSubqueriesInComparisons()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInComparisons
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSubqueriesInExists()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInExists
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSubqueriesInIns()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInIns
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsSubqueriesInQuantifieds()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInQuantifieds
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsTableCorrelationNames()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsTableCorrelationNames
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsTransactionIsolationLevel(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsTransactionIsolationLevel
 *
 * @param {number} level - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsTransactions()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsTransactions
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsUnion()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsUnion
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.supportsUnionAll()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#supportsUnionAll
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.updatesAreDetected(arg0)</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#updatesAreDetected
 *
 * @param {number} type - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.usesLocalFilePerTable()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#usesLocalFilePerTable
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>DatabaseMetaData.usesLocalFiles()</code>.
 *
 * @function Jdbc.JdbcDatabaseMetaData#usesLocalFiles
 *
 * @return {Boolean}
 */

/**
 * @class Jdbc.JdbcDate
 */

/**
 * For documentation of this method, see <code>Date.after(arg0)</code>.
 *
 * @function Jdbc.JdbcDate#after
 *
 * @param {Jdbc.JdbcDate} when - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Date.before(arg0)</code>.
 *
 * @function Jdbc.JdbcDate#before
 *
 * @param {Jdbc.JdbcDate} when - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Date.getDate()</code>.
 *
 * @function Jdbc.JdbcDate#getDate
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Date.getMonth()</code>.
 *
 * @function Jdbc.JdbcDate#getMonth
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Date.getTime()</code>.
 *
 * @function Jdbc.JdbcDate#getTime
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Date.getYear()</code>.
 *
 * @function Jdbc.JdbcDate#getYear
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Date.setDate(arg0)</code>.
 *
 * @function Jdbc.JdbcDate#setDate
 *
 * @param {number} date - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Date.setMonth(arg0)</code>.
 *
 * @function Jdbc.JdbcDate#setMonth
 *
 * @param {number} month - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Date.setTime(arg0)</code>.
 *
 * @function Jdbc.JdbcDate#setTime
 *
 * @param {number} milliseconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Date.setYear(arg0)</code>.
 *
 * @function Jdbc.JdbcDate#setYear
 *
 * @param {number} year - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcParameterMetaData
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getParameterClassName(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getParameterClassName
 *
 * @param {number} param - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getParameterCount()</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getParameterCount
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getParameterMode(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getParameterMode
 *
 * @param {number} param - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getParameterType(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getParameterType
 *
 * @param {number} param - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getParameterTypeName(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getParameterTypeName
 *
 * @param {number} param - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getPrecision(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getPrecision
 *
 * @param {number} param - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.getScale(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#getScale
 *
 * @param {number} param - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.isNullable(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#isNullable
 *
 * @param {number} param - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ParameterMetaData.isSigned(arg0)</code>.
 *
 * @function Jdbc.JdbcParameterMetaData#isSigned
 *
 * @param {number} param - 
 *
 * @return {Boolean}
 */

/**
 * @class Jdbc.JdbcPreparedStatement
 */

/**
 * For documentation of this method, see <code>PreparedStatement.addBatch()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#addBatch
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.addBatch(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#addBatch
 *
 * @param {String} sql - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.cancel()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#cancel
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.clearBatch()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#clearBatch
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.clearParameters()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#clearParameters
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.clearWarnings()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#clearWarnings
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.close()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#close
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.execute()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#execute
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#execute
 *
 * @param {String} sql - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#execute
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#execute
 *
 * @param {String} sql - 
 * @param {Integer[]} columnIndexes - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#execute
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.executeBatch()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeBatch
 *
 * @return {Integer[]}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.executeQuery()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeQuery
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.executeQuery(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeQuery
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.executeUpdate()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 *
 * @param {String} sql - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {Integer[]} columnIndexes - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getConnection()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getConnection
 *
 * @return {Jdbc.JdbcConnection}
 */

/**
 * For documentation of this method, see <code>Statement.getFetchDirection()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getFetchDirection
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getFetchSize()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getFetchSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getGeneratedKeys()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getGeneratedKeys
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.getMaxFieldSize()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getMaxFieldSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getMaxRows()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getMaxRows
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.getMetaData()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getMetaData
 *
 * @return {Jdbc.JdbcResultSetMetaData}
 */

/**
 * For documentation of this method, see <code>Statement.getMoreResults()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getMoreResults
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.getMoreResults(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getMoreResults
 *
 * @param {number} current - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.getParameterMetaData()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getParameterMetaData
 *
 * @return {Jdbc.JdbcParameterMetaData}
 */

/**
 * For documentation of this method, see <code>Statement.getQueryTimeout()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getQueryTimeout
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSet()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getResultSet
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetConcurrency()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getResultSetConcurrency
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetHoldability()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getResultSetHoldability
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetType()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getResultSetType
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getUpdateCount()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#getUpdateCount
 *
 * @return {number}
 */

/**
 * Returns the current set of warnings reported by the driver. For documentation of this method,
 see <code>Statement.getWarnings()</code>
 *
 * @function Jdbc.JdbcPreparedStatement#getWarnings
 *
 * @return {String[]} array of warnings
 */

/**
 * For documentation of this method, see <code>Statement.isClosed()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#isClosed
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.isPoolable()</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#isPoolable
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setArray(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setArray
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBigDecimal(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setBigDecimal
 *
 * @param {number} parameterIndex - 
 * @param {BigNumber} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBlob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setBlob
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBoolean(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setBoolean
 *
 * @param {number} parameterIndex - 
 * @param {Boolean} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setByte(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setByte
 *
 * @param {number} parameterIndex - 
 * @param {Byte} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setBytes
 *
 * @param {number} parameterIndex - 
 * @param {Byte[]} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setClob
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setCursorName(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setCursorName
 *
 * @param {String} name - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setDate
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcDate} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setDate(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setDate
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcDate} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setDouble(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setDouble
 *
 * @param {number} parameterIndex - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setEscapeProcessing(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setEscapeProcessing
 *
 * @param {Boolean} enable - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setFetchDirection(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setFetchDirection
 *
 * @param {number} direction - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setFetchSize(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setFetchSize
 *
 * @param {number} rows - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setFloat(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setFloat
 *
 * @param {number} parameterIndex - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setInt(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setInt
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setLong(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setLong
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setMaxFieldSize(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setMaxFieldSize
 *
 * @param {number} max - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setMaxRows(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setMaxRows
 *
 * @param {number} max - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setNClob
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setNString
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNull(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setNull
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setNull(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setNull
 *
 * @param {number} parameterIndex - 
 * @param {number} sqlType - 
 * @param {String} typeName - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setObject(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setObject
 *
 * @param {number} index - 
 * @param {Object} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setObject(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setObject
 *
 * @param {number} parameterIndex - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setObject(arg0, arg1, arg2, arg3)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setObject
 *
 * @param {number} parameterIndex - 
 * @param {Object} x - 
 * @param {number} targetSqlType - 
 * @param {number} scaleOrLength - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setPoolable(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setPoolable
 *
 * @param {Boolean} poolable - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setQueryTimeout(arg0)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setQueryTimeout
 *
 * @param {number} seconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setRef(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setRef
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setRowId(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setRowId
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setSQLXML(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setSQLXML
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcSQLXML} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setShort(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setShort
 *
 * @param {number} parameterIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setString
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setTime
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTime} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTime(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setTime
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTime} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setTimestamp
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTimestamp} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setTimestamp(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setTimestamp
 *
 * @param {number} parameterIndex - 
 * @param {Jdbc.JdbcTimestamp} x - 
 * @param {String} timeZone - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>PreparedStatement.setURL(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcPreparedStatement#setURL
 *
 * @param {number} parameterIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcRef
 */

/**
 * For documentation of this method, see <code>Ref.getBaseTypeName()</code>.
 *
 * @function Jdbc.JdbcRef#getBaseTypeName
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>Ref.getObject()</code>.
 *
 * @function Jdbc.JdbcRef#getObject
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>Ref.setObject(arg0)</code>.
 *
 * @function Jdbc.JdbcRef#setObject
 *
 * @param {Object} object - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcResultSet
 */

/**
 * For documentation of this method, see <code>ResultSet.absolute(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#absolute
 *
 * @param {number} row - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.afterLast()</code>.
 *
 * @function Jdbc.JdbcResultSet#afterLast
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.beforeFirst()</code>.
 *
 * @function Jdbc.JdbcResultSet#beforeFirst
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.cancelRowUpdates()</code>.
 *
 * @function Jdbc.JdbcResultSet#cancelRowUpdates
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.clearWarnings()</code>.
 *
 * @function Jdbc.JdbcResultSet#clearWarnings
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.close()</code>.
 *
 * @function Jdbc.JdbcResultSet#close
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.deleteRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#deleteRow
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.findColumn(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#findColumn
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.first()</code>.
 *
 * @function Jdbc.JdbcResultSet#first
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.getArray(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getArray
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcArray}
 */

/**
 * For documentation of this method, see <code>ResultSet.getArray(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getArray
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcArray}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBigDecimal(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBigDecimal
 *
 * @param {number} columnIndex - 
 *
 * @return {BigNumber}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBigDecimal(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBigDecimal
 *
 * @param {String} columnLabel - 
 *
 * @return {BigNumber}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBlob(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBlob
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcBlob}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBlob(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBlob
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcBlob}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBoolean(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBoolean
 *
 * @param {number} columnIndex - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBoolean(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBoolean
 *
 * @param {String} columnLabel - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.getByte(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getByte
 *
 * @param {number} columnIndex - 
 *
 * @return {Byte}
 */

/**
 * For documentation of this method, see <code>ResultSet.getByte(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getByte
 *
 * @param {String} columnLabel - 
 *
 * @return {Byte}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBytes(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBytes
 *
 * @param {number} columnIndex - 
 *
 * @return {Byte[]}
 */

/**
 * For documentation of this method, see <code>ResultSet.getBytes(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getBytes
 *
 * @param {String} columnLabel - 
 *
 * @return {Byte[]}
 */

/**
 * For documentation of this method, see <code>ResultSet.getClob(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getClob
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>ResultSet.getClob(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getClob
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>ResultSet.getConcurrency()</code>.
 *
 * @function Jdbc.JdbcResultSet#getConcurrency
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getCursorName()</code>.
 *
 * @function Jdbc.JdbcResultSet#getCursorName
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSet.getDate(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getDate
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>ResultSet.getDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#getDate
 *
 * @param {number} columnIndex - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>ResultSet.getDate(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getDate
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>ResultSet.getDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#getDate
 *
 * @param {String} columnLabel - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcDate}
 */

/**
 * For documentation of this method, see <code>ResultSet.getDouble(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getDouble
 *
 * @param {number} columnIndex - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getDouble(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getDouble
 *
 * @param {String} columnLabel - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getFetchDirection()</code>.
 *
 * @function Jdbc.JdbcResultSet#getFetchDirection
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getFetchSize()</code>.
 *
 * @function Jdbc.JdbcResultSet#getFetchSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getFloat(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getFloat
 *
 * @param {number} columnIndex - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getFloat(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getFloat
 *
 * @param {String} columnLabel - 
 *
 * @return {Number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getHoldability()</code>.
 *
 * @function Jdbc.JdbcResultSet#getHoldability
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getInt(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getInt
 *
 * @param {number} columnIndex - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getInt(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getInt
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getLong(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getLong
 *
 * @param {number} columnIndex - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getLong(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getLong
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getMetaData()</code>.
 *
 * @function Jdbc.JdbcResultSet#getMetaData
 *
 * @return {Jdbc.JdbcResultSetMetaData}
 */

/**
 * For documentation of this method, see <code>ResultSet.getNClob(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getNClob
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>ResultSet.getNClob(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getNClob
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcClob}
 */

/**
 * For documentation of this method, see <code>ResultSet.getNString(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getNString
 *
 * @param {number} columnIndex - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSet.getNString(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getNString
 *
 * @param {String} columnLabel - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSet.getObject(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getObject
 *
 * @param {number} columnIndex - 
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>ResultSet.getObject(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getObject
 *
 * @param {String} columnLabel - 
 *
 * @return {Object}
 */

/**
 * For documentation of this method, see <code>ResultSet.getRef(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getRef
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcRef}
 */

/**
 * For documentation of this method, see <code>ResultSet.getRef(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getRef
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcRef}
 */

/**
 * For documentation of this method, see <code>ResultSet.getRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#getRow
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getRowId(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getRowId
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcRowId}
 */

/**
 * For documentation of this method, see <code>ResultSet.getRowId(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getRowId
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcRowId}
 */

/**
 * For documentation of this method, see <code>ResultSet.getSQLXML(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getSQLXML
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcSQLXML}
 */

/**
 * For documentation of this method, see <code>ResultSet.getSQLXML(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getSQLXML
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcSQLXML}
 */

/**
 * For documentation of this method, see <code>ResultSet.getShort(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getShort
 *
 * @param {number} columnIndex - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getShort(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getShort
 *
 * @param {String} columnLabel - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getStatement()</code>.
 *
 * @function Jdbc.JdbcResultSet#getStatement
 *
 * @return {Jdbc.JdbcStatement}
 */

/**
 * For documentation of this method, see <code>ResultSet.getString(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getString
 *
 * @param {number} columnIndex - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSet.getString(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getString
 *
 * @param {String} columnLabel - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTime(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTime
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTime
 *
 * @param {number} columnIndex - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTime(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTime
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTime
 *
 * @param {String} columnLabel - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTime}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTimestamp(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTimestamp
 *
 * @param {number} columnIndex - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTimestamp
 *
 * @param {number} columnIndex - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTimestamp(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTimestamp
 *
 * @param {String} columnLabel - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>ResultSet.getTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#getTimestamp
 *
 * @param {String} columnLabel - 
 * @param {String} timeZone - 
 *
 * @return {Jdbc.JdbcTimestamp}
 */

/**
 * For documentation of this method, see <code>ResultSet.getType()</code>.
 *
 * @function Jdbc.JdbcResultSet#getType
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSet.getURL(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getURL
 *
 * @param {number} columnIndex - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSet.getURL(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#getURL
 *
 * @param {String} columnLabel - 
 *
 * @return {String}
 */

/**
 * Returns the current set of warnings reported by the driver.
 *
 * @function Jdbc.JdbcResultSet#getWarnings
 *
 * @return {String[]} array of warnings
 */

/**
 * For documentation of this method, see <code>ResultSet.insertRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#insertRow
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.isAfterLast()</code>.
 *
 * @function Jdbc.JdbcResultSet#isAfterLast
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.isBeforeFirst()</code>.
 *
 * @function Jdbc.JdbcResultSet#isBeforeFirst
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.isClosed()</code>.
 *
 * @function Jdbc.JdbcResultSet#isClosed
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.isFirst()</code>.
 *
 * @function Jdbc.JdbcResultSet#isFirst
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.isLast()</code>.
 *
 * @function Jdbc.JdbcResultSet#isLast
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.last()</code>.
 *
 * @function Jdbc.JdbcResultSet#last
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.moveToCurrentRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#moveToCurrentRow
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.moveToInsertRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#moveToInsertRow
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.next()</code>.
 *
 * @function Jdbc.JdbcResultSet#next
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.previous()</code>.
 *
 * @function Jdbc.JdbcResultSet#previous
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.refreshRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#refreshRow
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.relative(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#relative
 *
 * @param {number} rows - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.rowDeleted()</code>.
 *
 * @function Jdbc.JdbcResultSet#rowDeleted
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.rowInserted()</code>.
 *
 * @function Jdbc.JdbcResultSet#rowInserted
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.rowUpdated()</code>.
 *
 * @function Jdbc.JdbcResultSet#rowUpdated
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSet.setFetchDirection(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#setFetchDirection
 *
 * @param {number} direction - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.setFetchSize(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#setFetchSize
 *
 * @param {number} rows - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateArray(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateArray
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateArray(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateArray
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcArray} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBigDecimal(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBigDecimal
 *
 * @param {number} columnIndex - 
 * @param {BigNumber} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBigDecimal(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBigDecimal
 *
 * @param {String} columnLabel - 
 * @param {BigNumber} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBlob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBlob
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBlob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBlob
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcBlob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBoolean(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBoolean
 *
 * @param {number} columnIndex - 
 * @param {Boolean} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBoolean(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBoolean
 *
 * @param {String} columnLabel - 
 * @param {Boolean} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateByte(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateByte
 *
 * @param {number} columnIndex - 
 * @param {Byte} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateByte(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateByte
 *
 * @param {String} columnLabel - 
 * @param {Byte} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBytes
 *
 * @param {number} columnIndex - 
 * @param {Byte[]} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateBytes(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateBytes
 *
 * @param {String} columnLabel - 
 * @param {Byte[]} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateClob
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateClob
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateDate
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcDate} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateDate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateDate
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcDate} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateDouble(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateDouble
 *
 * @param {number} columnIndex - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateDouble(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateDouble
 *
 * @param {String} columnLabel - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateFloat(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateFloat
 *
 * @param {number} columnIndex - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateFloat(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateFloat
 *
 * @param {String} columnLabel - 
 * @param {Number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateInt(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateInt
 *
 * @param {number} columnIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateInt(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateInt
 *
 * @param {String} columnLabel - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateLong(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateLong
 *
 * @param {number} columnIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateLong(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateLong
 *
 * @param {String} columnLabel - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateNClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateNClob
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateNClob(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateNClob
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcClob} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateNString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateNString
 *
 * @param {number} columnIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateNString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateNString
 *
 * @param {String} columnLabel - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateNull(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateNull
 *
 * @param {number} columnIndex - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateNull(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateNull
 *
 * @param {String} columnLabel - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateObject(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateObject
 *
 * @param {number} columnIndex - 
 * @param {Object} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateObject(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateObject
 *
 * @param {number} columnIndex - 
 * @param {Object} x - 
 * @param {number} scaleOrLength - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateObject(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateObject
 *
 * @param {String} columnLabel - 
 * @param {Object} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateObject(arg0, arg1, arg2)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateObject
 *
 * @param {String} columnLabel - 
 * @param {Object} x - 
 * @param {number} scaleOrLength - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateRef(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateRef
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateRef(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateRef
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcRef} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateRow()</code>.
 *
 * @function Jdbc.JdbcResultSet#updateRow
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateRowId(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateRowId
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateRowId(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateRowId
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcRowId} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateSQLXML(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateSQLXML
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcSQLXML} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateSQLXML(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateSQLXML
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcSQLXML} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateShort(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateShort
 *
 * @param {number} columnIndex - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateShort(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateShort
 *
 * @param {String} columnLabel - 
 * @param {number} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateString
 *
 * @param {number} columnIndex - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateString(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateString
 *
 * @param {String} columnLabel - 
 * @param {String} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateTime
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcTime} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateTime(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateTime
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcTime} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateTimestamp
 *
 * @param {number} columnIndex - 
 * @param {Jdbc.JdbcTimestamp} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.updateTimestamp(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcResultSet#updateTimestamp
 *
 * @param {String} columnLabel - 
 * @param {Jdbc.JdbcTimestamp} x - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>ResultSet.wasNull()</code>.
 *
 * @function Jdbc.JdbcResultSet#wasNull
 *
 * @return {Boolean}
 */

/**
 * @class Jdbc.JdbcResultSetMetaData
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getCatalogName(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getCatalogName
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnClassName(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnClassName
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnCount()</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnCount
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnDisplaySize(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnDisplaySize
 *
 * @param {number} column - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnLabel(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnLabel
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnName(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnName
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnType(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnType
 *
 * @param {number} column - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getColumnTypeName(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getColumnTypeName
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getPrecision(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getPrecision
 *
 * @param {number} column - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getScale(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getScale
 *
 * @param {number} column - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getSchemaName(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getSchemaName
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.getTableName(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#getTableName
 *
 * @param {number} column - 
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isAutoIncrement(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isAutoIncrement
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isCaseSensitive(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isCaseSensitive
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isCurrency(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isCurrency
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isDefinitelyWritable(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isDefinitelyWritable
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isNullable(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isNullable
 *
 * @param {number} column - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isReadOnly(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isReadOnly
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isSearchable(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isSearchable
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isSigned(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isSigned
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>ResultSetMetaData.isWritable(arg0)</code>.
 *
 * @function Jdbc.JdbcResultSetMetaData#isWritable
 *
 * @param {number} column - 
 *
 * @return {Boolean}
 */

/**
 * @class Jdbc.JdbcRowId
 */

/**
 * For documentation of this method, see <code>RowId.getBytes()</code>.
 *
 * @function Jdbc.JdbcRowId#getBytes
 *
 * @return {Byte[]}
 */

/**
 * @class Jdbc.JdbcRowIdLifetime
 */

/**
 * @class Jdbc.JdbcSQLXML
 */

/**
 * For documentation of this method, see <code>SQLXML.free()</code>.
 *
 * @function Jdbc.JdbcSQLXML#free
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>SQLXML.getString()</code>.
 *
 * @function Jdbc.JdbcSQLXML#getString
 *
 * @return {String}
 */

/**
 * For documentation of this method, see <code>SQLXML.setString(arg0)</code>.
 *
 * @function Jdbc.JdbcSQLXML#setString
 *
 * @param {String} value - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcSavepoint
 */

/**
 * For documentation of this method, see <code>Savepoint.getSavepointId()</code>.
 *
 * @function Jdbc.JdbcSavepoint#getSavepointId
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Savepoint.getSavepointName()</code>.
 *
 * @function Jdbc.JdbcSavepoint#getSavepointName
 *
 * @return {String}
 */

/**
 * @class Jdbc.JdbcStatement
 */

/**
 * For documentation of this method, see <code>Statement.addBatch(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#addBatch
 *
 * @param {String} sql - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.cancel()</code>.
 *
 * @function Jdbc.JdbcStatement#cancel
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.clearBatch()</code>.
 *
 * @function Jdbc.JdbcStatement#clearBatch
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.clearWarnings()</code>.
 *
 * @function Jdbc.JdbcStatement#clearWarnings
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.close()</code>.
 *
 * @function Jdbc.JdbcStatement#close
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#execute
 *
 * @param {String} sql - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcStatement#execute
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcStatement#execute
 *
 * @param {String} sql - 
 * @param {Integer[]} columnIndexes - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.execute(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcStatement#execute
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.executeBatch()</code>.
 *
 * @function Jdbc.JdbcStatement#executeBatch
 *
 * @return {Integer[]}
 */

/**
 * For documentation of this method, see <code>Statement.executeQuery(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#executeQuery
 *
 * @param {String} sql - 
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#executeUpdate
 *
 * @param {String} sql - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {number} autoGeneratedKeys - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {Integer[]} columnIndexes - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.executeUpdate(arg0, arg1)</code>.
 *
 * @function Jdbc.JdbcStatement#executeUpdate
 *
 * @param {String} sql - 
 * @param {String[]} columnNames - 
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getConnection()</code>.
 *
 * @function Jdbc.JdbcStatement#getConnection
 *
 * @return {Jdbc.JdbcConnection}
 */

/**
 * For documentation of this method, see <code>Statement.getFetchDirection()</code>.
 *
 * @function Jdbc.JdbcStatement#getFetchDirection
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getFetchSize()</code>.
 *
 * @function Jdbc.JdbcStatement#getFetchSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getGeneratedKeys()</code>.
 *
 * @function Jdbc.JdbcStatement#getGeneratedKeys
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.getMaxFieldSize()</code>.
 *
 * @function Jdbc.JdbcStatement#getMaxFieldSize
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getMaxRows()</code>.
 *
 * @function Jdbc.JdbcStatement#getMaxRows
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getMoreResults()</code>.
 *
 * @function Jdbc.JdbcStatement#getMoreResults
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.getMoreResults(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#getMoreResults
 *
 * @param {number} current - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.getQueryTimeout()</code>.
 *
 * @function Jdbc.JdbcStatement#getQueryTimeout
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSet()</code>.
 *
 * @function Jdbc.JdbcStatement#getResultSet
 *
 * @return {Jdbc.JdbcResultSet}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetConcurrency()</code>.
 *
 * @function Jdbc.JdbcStatement#getResultSetConcurrency
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetHoldability()</code>.
 *
 * @function Jdbc.JdbcStatement#getResultSetHoldability
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getResultSetType()</code>.
 *
 * @function Jdbc.JdbcStatement#getResultSetType
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Statement.getUpdateCount()</code>.
 *
 * @function Jdbc.JdbcStatement#getUpdateCount
 *
 * @return {number}
 */

/**
 * Returns the current set of warnings reported by the driver. For documentation of this method,
 see <code>Statement.getWarnings()</code>
 *
 * @function Jdbc.JdbcStatement#getWarnings
 *
 * @return {String[]} array of warnings
 */

/**
 * For documentation of this method, see <code>Statement.isClosed()</code>.
 *
 * @function Jdbc.JdbcStatement#isClosed
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.isPoolable()</code>.
 *
 * @function Jdbc.JdbcStatement#isPoolable
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Statement.setCursorName(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setCursorName
 *
 * @param {String} name - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setEscapeProcessing(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setEscapeProcessing
 *
 * @param {Boolean} enable - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setFetchDirection(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setFetchDirection
 *
 * @param {number} direction - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setFetchSize(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setFetchSize
 *
 * @param {number} rows - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setMaxFieldSize(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setMaxFieldSize
 *
 * @param {number} max - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setMaxRows(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setMaxRows
 *
 * @param {number} max - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setPoolable(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setPoolable
 *
 * @param {Boolean} poolable - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Statement.setQueryTimeout(arg0)</code>.
 *
 * @function Jdbc.JdbcStatement#setQueryTimeout
 *
 * @param {number} seconds - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcStatment
 */

/**
 * @class Jdbc.JdbcStruct
 */

/**
 * For documentation of this method, see <code>Struct.getAttributes()</code>.
 *
 * @function Jdbc.JdbcStruct#getAttributes
 *
 * @return {Object[]}
 */

/**
 * For documentation of this method, see <code>Struct.getSQLTypeName()</code>.
 *
 * @function Jdbc.JdbcStruct#getSQLTypeName
 *
 * @return {String}
 */

/**
 * @class Jdbc.JdbcTime
 */

/**
 * For documentation of this method, see <code>Time.after(arg0)</code>.
 *
 * @function Jdbc.JdbcTime#after
 *
 * @param {Jdbc.JdbcTime} when - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Time.before(arg0)</code>.
 *
 * @function Jdbc.JdbcTime#before
 *
 * @param {Jdbc.JdbcTime} when - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Time.getHours()</code>.
 *
 * @function Jdbc.JdbcTime#getHours
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Time.getMinutes()</code>.
 *
 * @function Jdbc.JdbcTime#getMinutes
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Time.getSeconds()</code>.
 *
 * @function Jdbc.JdbcTime#getSeconds
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Time.getTime()</code>.
 *
 * @function Jdbc.JdbcTime#getTime
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Time.setHours(arg0)</code>.
 *
 * @function Jdbc.JdbcTime#setHours
 *
 * @param {number} hours - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Time.setMinutes(arg0)</code>.
 *
 * @function Jdbc.JdbcTime#setMinutes
 *
 * @param {number} minutes - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Time.setSeconds(arg0)</code>.
 *
 * @function Jdbc.JdbcTime#setSeconds
 *
 * @param {number} seconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Time.setTime(arg0)</code>.
 *
 * @function Jdbc.JdbcTime#setTime
 *
 * @param {number} milliseconds - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcTimestamp
 */

/**
 * For documentation of this method, see <code>Timestamp.after(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#after
 *
 * @param {Jdbc.JdbcTimestamp} when - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Timestamp.before(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#before
 *
 * @param {Jdbc.JdbcTimestamp} when - 
 *
 * @return {Boolean}
 */

/**
 * For documentation of this method, see <code>Timestamp.getDate()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getDate
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getHours()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getHours
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getMinutes()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getMinutes
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getMonth()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getMonth
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getNanos()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getNanos
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getSeconds()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getSeconds
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getTime()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getTime
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.getYear()</code>.
 *
 * @function Jdbc.JdbcTimestamp#getYear
 *
 * @return {number}
 */

/**
 * For documentation of this method, see <code>Timestamp.setDate(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setDate
 *
 * @param {number} date - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setHours(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setHours
 *
 * @param {number} hours - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setMinutes(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setMinutes
 *
 * @param {number} minutes - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setMonth(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setMonth
 *
 * @param {number} month - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setNanos(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setNanos
 *
 * @param {number} nanoseconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setSeconds(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setSeconds
 *
 * @param {number} seconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setTime(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setTime
 *
 * @param {number} milliseconds - 
 *
 * @return void
 */

/**
 * For documentation of this method, see <code>Timestamp.setYear(arg0)</code>.
 *
 * @function Jdbc.JdbcTimestamp#setYear
 *
 * @param {number} year - 
 *
 * @return void
 */

/**
 * @class Jdbc.JdbcTypes
 */

