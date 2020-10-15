/**********************************************
 * @namespace Jdbc
 ***********************************************/

/**
 * @class Jdbc
 */

/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.
 * 
 * @function Jdbc.getCloudSqlConnection
 * 
 * @param {String} url - A database URL of the form <code>jdbc:google:mysql://subname</code>.
 * 
 * @return {Jdbc.JdbcConnection} A JdbcConnection object.
 */


/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.
 * 
 * @function Jdbc.getCloudSqlConnection
 * 
 * @param {String} url - A database URL of the form <code>jdbc:google:mysql://subname</code>.
 * @param {Object} info - Optional JavaScript object specifying advanced parameters as defined below.
 * 
 * @return {Jdbc.JdbcConnection} A JdbcConnection object.
 */


/**
 * Attempts to establish a connection to the given Google Cloud SQL URL.
 * 
 * @function Jdbc.getCloudSqlConnection
 * 
 * @param {String} url - A database URL of the form <code>jdbc:google:mysql://subname</code>.
 * @param {String} userName - The username to pass to the database.
 * @param {String} password - The user's password.
 * 
 * @return {Jdbc.JdbcConnection} A JdbcConnection object.
 */


/**
 * Attempts to establish a connection to the given database URL.
 * 
 * <pre class="prettyprint"><code>
 * var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;);
 * </code></pre>
 * 
 * @function Jdbc.getConnection
 * 
 * @param {String} url - A database URL of the form <code>jdbc:subprotocol:subname</code>.
 * 
 * @return {Jdbc.JdbcConnection} A JdbcConnection object.
 */


/**
 * Attempts to establish a connection to the given database URL.
 * 
 * <pre class="prettyprint"><code>
 * var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
 *                               {user: &#39;username&#39;, password: &#39;password&#39;});
 * </code></pre>
 * 
 * @function Jdbc.getConnection
 * 
 * @param {String} url - A database URL of the form <code>jdbc:subprotocol:subname</code>.
 * @param {Object} info - Optional JavaScript object specifying advanced parameters as defined below.
 * 
 * @return {Jdbc.JdbcConnection} A JdbcConnection object.
 */


/**
 * Attempts to establish a connection to the given database using a username and password.
 * 
 * <pre class="prettyprint"><code>
 * var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
 *                               &#39;username&#39;, &#39;password&#39;);
 * </code></pre>
 * 
 * @function Jdbc.getConnection
 * 
 * @param {String} url - A database URL of the form <code>jdbc:subprotocol:subname</code>.
 * @param {String} userName - The username to pass to the database.
 * @param {String} password - The user's password.
 * 
 * @return {Jdbc.JdbcConnection} A JdbcConnection object.
 */


/**
 * Create a date from milliseconds since epoch.
 * 
 * @function Jdbc.newDate
 * 
 * @param {IntegerNum} milliseconds - Milliseconds since epoch.
 * 
 * @return {Jdbc.JdbcDate} A JdbcDate object.
 */


/**
 * Create a time from milliseconds since epoch.
 * 
 * @function Jdbc.newTime
 * 
 * @param {IntegerNum} milliseconds - Milliseconds since epoch.
 * 
 * @return {Jdbc.JdbcTime} A JdbcTime object.
 */


/**
 * Create a timestamp from milliseconds since epoch.
 * 
 * @function Jdbc.newTimestamp
 * 
 * @param {IntegerNum} milliseconds - Milliseconds since epoch.
 * 
 * @return {Jdbc.JdbcTimestamp} A JdbcTimestamp object.
 */


/**
 * Create a date by parsing the SQL date string.
 * 
 * @function Jdbc.parseDate
 * 
 * @param {String} date - A string containing a SQL date string.
 * 
 * @return {Jdbc.JdbcDate} A JdbcDate object.
 */


/**
 * Create a time by parsing the SQL time string.
 * 
 * @function Jdbc.parseTime
 * 
 * @param {String} time - A string containing a SQL time string.
 * 
 * @return {Jdbc.JdbcTime} A JdbcTime object.
 */


/**
 * Create a timestamp by parsing the SQL timestamp string.
 * 
 * @function Jdbc.parseTimestamp
 * 
 * @param {String} timestamp - A string containing a SQL timestamp string.
 * 
 * @return {Jdbc.JdbcTimestamp} A JdbcTimestamp object.
 */



/**
 * @class Jdbc.JdbcArray
 */

/**
 * For documentation of this method, see <a
 * href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#free()"><code>
 * java.sql.Array#free()</code></a>.
 * 
 * @function Jdbc.JdbcArray#free
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray()"><code>
 * java.sql.Array#getArray()</code></a>
 * 
 * @function Jdbc.JdbcArray#getArray
 * 
 * @return {Object} An object containing the ordered elements of the SQL array value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray(long,%20int)">
 * <code>java.sql.Array#getArray(long, int)</code></a>.
 * 
 * @function Jdbc.JdbcArray#getArray
 * 
 * @param {IntegerNum} index - The array index of the first element to retrieve, where the first element has an
 *     index of 1.
 * @param {IntegerNum} count - The number of successive SQL array elements to retrieve.
 * 
 * @return {Object} An object containing up to the specified number of consecutive SQL array elements.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseType()"><code>
 * java.sql.Array#getBaseType()</code></a>.
 * 
 * @function Jdbc.JdbcArray#getBaseType
 * 
 * @return {IntegerNum} The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
 *     code</a> for the elements in this array.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseTypeName()"><code>
 * java.sql.Array#getBaseTypeName()</code></a>.
 * 
 * @function Jdbc.JdbcArray#getBaseTypeName
 * 
 * @return {String} The database-specific name for the built-in base type or else the fully-qualified SQL
 *     type name for a base type that is a UDT.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet()"><code>
 * java.sql.Array#getResultSet()</code></a>.
 * 
 * @function Jdbc.JdbcArray#getResultSet
 * 
 * @return {Jdbc.JdbcResultSet} The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html'>JdbcResultSet</a></code> containing one row for each of the elements in the array
 *     designated by this Array object, with the rows in ascending order based on the indices.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet(long,%20int)">
 * <code>java.sql.Array#getResultSet(long, int)</code></a>.
 * 
 * @function Jdbc.JdbcArray#getResultSet
 * 
 * @param {IntegerNum} index - The array index of the first element to retrieve, where the first element has an
 *     index of 1.
 * @param {IntegerNum} count - The number of successive SQL array elements to retrieve.
 * 
 * @return {Jdbc.JdbcResultSet} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html'>JdbcResultSet</a></code> containing up to the specified number of consecutive SQL array
 *     elements.
 */



/**
 * @class Jdbc.JdbcBlob
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#free()"><code>
 * java.sql.Blob#free()</code></a>.
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
 * @return {Blob} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs.
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * <p>To view the daily quotas for conversions, see <a
 * href="https://developers.google.com/apps-script/guides/services/quotas">Quotas for Google
 * Services</a>. Newly created G Suite domains might be temporarily subject to stricter quotas.
 * 
 * @function Jdbc.JdbcBlob#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#getBytes(long,%20int)">
 * <code>java.sql.Blob#getBytes(long, int)</code></a>.
 * 
 * @function Jdbc.JdbcBlob#getBytes
 * 
 * @param {IntegerNum} position - The ordinal position of the first byte in the blob value to be extracted; the
 *     first byte is at position 1.
 * @param {IntegerNum} length - The number of consecutive bytes to copy; the value for length must be zero or
 *     greater.
 * 
 * @return {Byte[]} A byte array containing up to the specified number of consecutive bytes from the blob
 *     value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#length()"><code>
 * java.sql.Blob#length()</code></a>.
 * 
 * @function Jdbc.JdbcBlob#length
 * 
 * @return {IntegerNum} The number of bytes in this blob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(byte[],%20long)">
 * <code>java.sql.Blob#position(byte[], long)</code></a>.
 * 
 * @function Jdbc.JdbcBlob#position
 * 
 * @param {Byte[]} pattern - The byte array to search for.
 * @param {IntegerNum} start - The position in the blob value where to beging searching; the first position is 1.
 * 
 * @return {IntegerNum} The position at which the specified pattern begins, or else -1 if the pattern is not
 *     found.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(java.sql.Blob,%20long)">
 * <code>java.sql.Blob#position(blob, long)</code></a>.
 * 
 * @function Jdbc.JdbcBlob#position
 * 
 * @param {Jdbc.JdbcBlob} pattern - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> indicating the value to search for.
 * @param {IntegerNum} start - The position in the blob value where to beging searching; the first position is 1.
 * 
 * @return {IntegerNum} The position at which the specified pattern begins, or else -1 if the pattern is not
 *     found.
 */


/**
 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> to this blob.
 * 
 * @function Jdbc.JdbcBlob#setBytes
 * 
 * @param {IntegerNum} position - The position in the blob at which to start writing; the first position is 1.
 * @param {BlobSource} blobSource - The source of data to write to this blob.
 * 
 * @return {IntegerNum} The number of bytes written.
 */


/**
 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> to this blob.
 * 
 * @function Jdbc.JdbcBlob#setBytes
 * 
 * @param {IntegerNum} position - The position in the blob at which to start writing; the first position is 1.
 * @param {BlobSource} blobSource - The source of data to write to this blob.
 * @param {IntegerNum} offset - The offset into the provided byte array at which to start reading bytes to set.
 * @param {IntegerNum} length - The number of bytes to write to the blob.
 * 
 * @return {IntegerNum} The number of bytes written.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long,%20byte[])">
 * <code>java.sql.Blob#setBytes(long, byte[])</code></a>.
 * 
 * @function Jdbc.JdbcBlob#setBytes
 * 
 * @param {IntegerNum} position - The position in the blob at which to start writing; the first position is 1.
 * @param {Byte[]} bytes - The array of bytes to write to this blob.
 * 
 * @return {IntegerNum} The number of bytes written.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long,%20byte[],%20int,%20int)">
 * <code>java.sql.Blob#setBytes(long, byte[], int, int)</code></a>.
 * 
 * @function Jdbc.JdbcBlob#setBytes
 * 
 * @param {IntegerNum} position - The position in the blob at which to start writing; the first position is 1.
 * @param {Byte[]} bytes - The array of bytes to write to this blob.
 * @param {IntegerNum} offset - The offset into the provided byte array at which to start reading bytes to set.
 * @param {IntegerNum} length - The number of bytes to write to the blob.
 * 
 * @return {IntegerNum} The number of bytes written.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#truncate(long)"><code>
 * java.sql.Blob#truncate(long)</code></a>.
 * 
 * @function Jdbc.JdbcBlob#truncate
 * 
 * @param {IntegerNum} length - The size (in bytes) of this blob after truncation.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcCallableStatement
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch()">
 * <code>java.sql.PreparedStatement#addBatch()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#addBatch
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)">
 * <code>java.sql.Statement#addBatch(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#addBatch
 * 
 * @param {String} sql - The SQL command to add to this statement, typically an SQL <code>INSERT</code> or <code>UPDATE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()"><code>
 * java.sql.Statement#cancel()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#cancel
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()"><code>
 * java.sql.Statement#clearBatch()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#clearBatch
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()">
 * <code>java.sql.PreparedStatement#clearParameters()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#clearParameters
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()"><code>
 * java.sql.Statement#clearWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#clearWarnings
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()"><code>
 * java.sql.Statement#close()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#close
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute()">
 * <code>java.sql.PreparedStatement#execute()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#execute
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if the first result is
 *     an update count or there is no result.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)">
 * <code>java.sql.Statement#execute(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)">
 * <code>java.sql.Statement#execute(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])">
 * <code>java.sql.Statement#execute(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {IntegerNum[]} columnIndexes - The column indices in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Statement#execute(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {String[]} columnNames - The names of columns in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()"><code>
 * java.sql.Statement#executeBatch()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeBatch
 * 
 * @return {IntegerNum[]} The update counts for each command in the batch, using the same order in which commands
 *     were added to the batch.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery()">
 * <code>java.sql.PreparedStatement#executeQuery()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeQuery
 * 
 * @return {Jdbc.JdbcResultSet} A result set that contains the data produced by the query.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)">
 * <code>java.sql.Statement#executeQuery(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeQuery
 * 
 * @param {String} sql - The SQL statement to execute, typically a static <code>SELECT</code>.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the results of the execution. This is never <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate()">
 * <code>java.sql.PreparedStatement#executeUpdate()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 * 
 * @return {IntegerNum} The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)">
 * <code>java.sql.Statement#executeUpdate(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)">
 * <code>java.sql.Statement#executeUpdate(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])">
 * <code>java.sql.Statement#executeUpdate(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {IntegerNum[]} columnIndexes - The column indices in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Statement#executeUpdate(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {String[]} columnNames - The names of columns in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(int)">
 * <code>java.sql.CallableStatement#getArray(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getArray
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcArray} The value of a <code>ARRAY</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(java.lang.String)">
 * <code>java.sql.CallableStatement#getArray(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getArray
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcArray} The value of a <code>ARRAY</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(int)">
 * <code>java.sql.CallableStatement#getBigDecimal(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBigDecimal
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {BigNumber} The value of a <code>NUMERIC</code> parameter in full precision. Returns <code>null</code> if the
 *     value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(java.lang.String)">
 * <code>java.sql.CallableStatement#getBigDecimal(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBigDecimal
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {BigNumber} The value of a <code>NUMERIC</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(int)">
 * <code>java.sql.CallableStatement#getBlob(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBlob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcBlob} The value of a <code>BLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(java.lang.String)">
 * <code>java.sql.CallableStatement#getBlob(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBlob
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcBlob} The value of a <code>BLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(int)">
 * <code>java.sql.CallableStatement#getBoolean(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBoolean
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Boolean} The value of a <code>BIT</code> or <code>BOOLEAN</code> parameter. Returns <code>false</code> if the
 *     value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(java.lang.String)">
 * <code>java.sql.CallableStatement#getBoolean(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBoolean
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Boolean} The value of a <code>BIT</code> or <code>BOOLEAN</code> parameter. Returns <code>false</code> if the
 *     value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(int)">
 * <code>java.sql.CallableStatement#getByte(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getByte
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Byte} The value of a <code>TINYINT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(java.lang.String)">
 * <code>java.sql.CallableStatement#getByte(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getByte
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Byte} The value of a <code>TINYINT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(int)">
 * <code>java.sql.CallableStatement#getBytes(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBytes
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Byte[]} The value of a <code>BINARY</code> or <code>VARBINARY</code> parameter. Returns <code>null</code> if
 *     the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(java.lang.String)">
 * <code>java.sql.CallableStatement#getBytes(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getBytes
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Byte[]} The value of a <code>BINARY</code> or <code>VARBINARY</code> parameter. Returns <code>null</code> if
 *     the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(int)">
 * <code>java.sql.CallableStatement#getClob(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getClob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcClob} The value of a <code>CLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(java.lang.String)">
 * <code>java.sql.CallableStatement#getClob(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getClob
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcClob} The value of a <code>CLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()"><code>
 * java.sql.Statement#getConnection()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getConnection
 * 
 * @return {Jdbc.JdbcConnection} The connection that produced this statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(int)">
 * <code>java.sql.CallableStatement#getDate(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getDate
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcDate} The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(int,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#getDate(int, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getDate
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcDate} The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(java.lang.String)">
 * <code>java.sql.CallableStatement#getDate(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getDate
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcDate} The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(java.lang.String,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#getDate(String, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getDate
 * 
 * @param {String} parameterName - The name of the parameter.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcDate} The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(int)">
 * <code>java.sql.CallableStatement#getDouble(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getDouble
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Number} The value of a <code>DOUBLE</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(java.lang.String)">
 * <code>java.sql.CallableStatement#getDouble(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getDouble
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Number} The value of a <code>DOUBLE</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">
 * <code>java.sql.Statement#getFetchDirection()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getFetchDirection
 * 
 * @return {IntegerNum} The default direction for result sets generated by this statement, which is either
 *     <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()"><code>
 * java.sql.Statement#getFetchSize()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getFetchSize
 * 
 * @return {IntegerNum} The default row fetch size for result sets generated from this statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(int)">
 * <code>java.sql.CallableStatement#getFloat(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getFloat
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Number} The value of a <code>FLOAT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(java.lang.String)">
 * <code>java.sql.CallableStatement#getFloat(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getFloat
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Number} The value of a <code>FLOAT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">
 * <code>java.sql.Statement#getGeneratedKeys()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getGeneratedKeys
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the auto-generated keys generated by the execution of this
 *     statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(int)">
 * <code>java.sql.CallableStatement#getInt(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getInt
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {IntegerNum} The value of a <code>INTEGER</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(java.lang.String)">
 * <code>java.sql.CallableStatement#getInt(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getInt
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {IntegerNum} The value of a <code>INTEGER</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(int)">
 * <code>java.sql.CallableStatement#getLong(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getLong
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {IntegerNum} The value of a <code>BIGINT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(java.lang.String)">
 * <code>java.sql.CallableStatement#getLong(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getLong
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {IntegerNum} The value of a <code>BIGINT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">
 * <code>java.sql.Statement#getMaxFieldSize()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getMaxFieldSize
 * 
 * @return {IntegerNum} The current column byte size limit for columns storing character and binary values; a
 *     value of zero indictates no limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()"><code>
 * java.sql.Statement#getMaxRows()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getMaxRows
 * 
 * @return {IntegerNum} The current maximum number of rows for a result set produced by this statement; a value
 *     of 0 indicates no limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()">
 * <code>java.sql.PreparedStatement#getMetaData()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getMetaData
 * 
 * @return {Jdbc.JdbcResultSetMetaData} The description of a result set's columns, or <code>NULL</code> if this metadata is
 *     unavailable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()">
 * <code>java.sql.Statement#getMoreResults()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getMoreResults
 * 
 * @return {Boolean} <code>true</code> if the next result is a result set; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">
 * <code>java.sql.Statement#getMoreResults(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getMoreResults
 * 
 * @param {IntegerNum} current - A flag that indicates what happens to current result sets when retrieved. This
 *     value is one of <code>Jdbc.Statement.CLOSE_CURRENT_RESULT</code>, <code>Jdbc.Statement.KEEP_CURRENT_RESULT</code>, or <code>Jdbc.Statement.CLOSE_ALL_RESULTS</code>.
 * 
 * @return {Boolean} <code>true</code> if the next result is a result set; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(int)">
 * <code>java.sql.CallableStatement#getNClob(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getNClob
 * 
 * @param {IntegerNum} parameterIndex - An index indicating which paramater to register (the first parameter is
 *     1, the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcClob} The value of a <code>NCLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(java.lang.String)">
 * <code>java.sql.CallableStatement#getNClob(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getNClob
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcClob} The value of a <code>NCLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(int)">
 * <code>java.sql.CallableStatement#getNString(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getNString
 * 
 * @param {IntegerNum} parameterIndex - An index indicating which paramater to register (the first parameter is
 *     1, the second is 2, and so on).
 * 
 * @return {String} A string that maps a <code>NCHAR</code>, <code>NVARCHAR</code>, or <code>LONGNVARCHAR</code> value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(java.lang.String)">
 * <code>java.sql.CallableStatement#getNString(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getNString
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {String} A string that maps a <code>NCHAR</code>, <code>NVARCHAR</code>, or <code>LONGNVARCHAR</code> value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(int)">
 * <code>java.sql.CallableStatement#getObject(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getObject
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Object} An object holding the parameter value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(java.lang.String)">
 * <code>java.sql.CallableStatement#getObject(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getObject
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Object} An object holding the parameter value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()">
 * <code>java.sql.PreparedStatement#getParameterMetaData()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getParameterMetaData
 * 
 * @return {Jdbc.JdbcParameterMetaData} The parameter metadata, including the number, types, and properties for each parameter.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">
 * <code>java.sql.Statement#getQueryTimeout()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getQueryTimeout
 * 
 * @return {IntegerNum} The current query timeout in seconds; a value of zero indicates no timeout.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(int)">
 * <code>java.sql.CallableStatement#getRef(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getRef
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcRef} The value of a <code>REF</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(java.lang.String)">
 * <code>java.sql.CallableStatement#getRef(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getRef
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcRef} The value of a <code>REF</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()"><code>
 * java.sql.Statement#getResultSet()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getResultSet
 * 
 * @return {Jdbc.JdbcResultSet} The current result set, or <code>null</code> if the result is an update count or there are
 *     no more results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">
 * <code>java.sql.Statement#getResultSetConcurrency()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getResultSetConcurrency
 * 
 * @return {IntegerNum} The result set concurrency for result sets generated from this statement, which is
 *     either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">
 * <code>java.sql.Statement#getResultSetHoldability()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getResultSetHoldability
 * 
 * @return {IntegerNum} The result set holdability, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">
 * <code>java.sql.Statement#getResultSetType()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getResultSetType
 * 
 * @return {IntegerNum} The result set type for result sets generated from this statement, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(int)">
 * <code>java.sql.CallableStatement#getRowId(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getRowId
 * 
 * @param {IntegerNum} parameterIndex - An index indicating which paramater to register (the first parameter is
 *     1, the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcRowId} The <code>ROWID</code> value. Returns <code>null</code> if the parameter contains an SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(java.lang.String)">
 * <code>java.sql.CallableStatement#getRowId(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getRowId
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcRowId} The <code>ROWID</code> value. Returns <code>null</code> if the parameter contains an SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(int)">
 * <code>java.sql.CallableStatement#getSQLXML(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getSQLXML
 * 
 * @param {IntegerNum} parameterIndex - An index indicating which paramater to register (the first parameter is
 *     1, the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcSQLXML} A SQLXML object that maps to an SQL XML value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(java.lang.String)">
 * <code>java.sql.CallableStatement#getSQLXML(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getSQLXML
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcSQLXML} A SQLXML object that maps to an SQL XML value.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(int)">
 * <code>java.sql.CallableStatement#getShort(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getShort
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {IntegerNum} The value of a <code>SMALLINT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(java.lang.String)">
 * <code>java.sql.CallableStatement#getShort(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getShort
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {IntegerNum} The value of a <code>SMALLINT</code> parameter. Returns 0 if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(int)">
 * <code>java.sql.CallableStatement#getString(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getString
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {String} The value of a <code>CHAR</code>, <code>VARCHAR</code>, or <code>LONGVARCHAR</code> parameter.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(java.lang.String)">
 * <code>java.sql.CallableStatement#getString(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getString
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {String} The value of a <code>CHAR</code>, <code>VARCHAR</code>, or <code>LONGVARCHAR</code> parameter. Returns
 *     <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(int)">
 * <code>java.sql.CallableStatement#getTime(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTime
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcTime} The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(int,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#getTime(int, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTime
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTime} The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(java.lang.String)">
 * <code>java.sql.CallableStatement#getTime(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTime
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcTime} The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(java.lang.String,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#getTime(String, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTime
 * 
 * @param {String} parameterName - The name of the parameter.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTime} The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(int)">
 * <code>java.sql.CallableStatement#getTimestamp(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {Jdbc.JdbcTimestamp} The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(int,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#getTimestamp(int, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTimestamp} The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(java.lang.String)">
 * <code>java.sql.CallableStatement#getTimestamp(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {Jdbc.JdbcTimestamp} The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(java.lang.String,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#getTimestamp(String, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getTimestamp
 * 
 * @param {String} parameterName - The name of the parameter.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTimestamp} The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(int)">
 * <code>java.sql.CallableStatement#getURL(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getURL
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * 
 * @return {String} The value of a <code>DATALINK</code> parameter as a string.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(java.lang.String)">
 * <code>java.sql.CallableStatement#getURL(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getURL
 * 
 * @param {String} parameterName - The name of the parameter.
 * 
 * @return {String} The value of a <code>DATALINK</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">
 * <code>java.sql.Statement#getUpdateCount()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getUpdateCount
 * 
 * @return {IntegerNum} The current result as an update count, or -1 if the current result is a result set or
 *     if there are no more results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()"><code>
 * java.sql.Statement#getWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#getWarnings
 * 
 * @return {String[]} The current set of warnings, or <code>null</code> if there are no warnings.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()"><code>
 * java.sql.Statement#isClosed()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#isClosed
 * 
 * @return {Boolean} <code>true</code> if this statement is closed; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()"><code>
 * java.sql.Statement#isPoolable()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#isPoolable
 * 
 * @return {Boolean} <code>true</code> if this statement is poolable; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int)">
 * <code>java.sql.CallableStatement#registerOutParameter(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 * 
 * @param {IntegerNum} parameterIndex - An index indicating which paramater to register (the first parameter is
 *     1, the second is 2, and so on).
 * @param {IntegerNum} sqlType - The JDBC <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type code</a> to
 *     register. If the parameter is of JDBC type <code>NUMERIC</code> or <code>DECIMAL</code>,
 *     use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement.html#registerOutParameter(Integer,Integer,Integer)'>registerOutParameter(parameterIndex, sqlType, scale)</a></code> instead.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int,%20int)">
 * <code>java.sql.CallableStatement#registerOutParameter(int, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 * 
 * @param {IntegerNum} parameterIndex - An index indicating which paramater to register (the first parameter is
 *     1, the second is 2, and so on).
 * @param {IntegerNum} sqlType - The JDBC <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type code</a> to
 *     register.
 * @param {IntegerNum} scale - The desired number of digits to the right of the decimal point (must be zero or
 *     greater).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int,%20java.lang.String)">
 * <code>java.sql.CallableStatement#registerOutParameter(int, int, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
 *     second is 2, and so on).
 * @param {IntegerNum} sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
 *     code</a> value.
 * @param {String} typeName - The fully-qualified name of an SQL structured type.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int)">
 * <code>java.sql.CallableStatement#registerOutParameter(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 * 
 * @param {String} parameterName - The name of the parameter to be registered.
 * @param {IntegerNum} sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
 *     code</a> value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int,%20int)">
 * <code>java.sql.CallableStatement#registerOutParameter(String, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 * 
 * @param {String} parameterName - The name of the parameter to be registered.
 * @param {IntegerNum} sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
 *     code</a> value.
 * @param {IntegerNum} scale - The desired number of digits to the right of the decimal point, which must be zero
 *     or greater.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int,%20java.lang.String)">
 * <code>java.sql.CallableStatement#registerOutParameter(String, int, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#registerOutParameter
 * 
 * @param {String} parameterName - The name of the parameter to be registered.
 * @param {IntegerNum} sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
 *     code</a> value.
 * @param {String} typeName - The fully-qualified name of an SQL structured type.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int,%20java.sql.Array)">
 * <code>java.sql.PreparedStatement#setArray(int, Array)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setArray
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcArray} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int,%20java.math.BigDecimal)">
 * <code>java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBigDecimal
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {BigNumber} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBigDecimal(java.lang.String,%20java.math.BigDecimal)">
 * <code>java.sql.CallableStatement#setBigDecimal(String, BigDecimal)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBigDecimal
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {BigNumber} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int,%20java.sql.Blob)">
 * <code>java.sql.PreparedStatement#setBlob(int, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBlob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcBlob} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBlob(java.lang.String,%20java.sql.Blob)">
 * <code>java.sql.CallableStatement#setBlob(String, Blob)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBlob
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcBlob} x - A blob that maps to an SQL <code>BLOB</code> value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int,%20boolean)">
 * <code>java.sql.PreparedStatement#setBoolean(int, boolean)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBoolean
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Boolean} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBoolean(java.lang.String,%20boolean)">
 * <code>java.sql.CallableStatement#setBoolean(String, boolean)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBoolean
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Boolean} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int,%20byte)">
 * <code>java.sql.PreparedStatement#setByte(int, byte)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setByte
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Byte} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setByte(java.lang.String,%20byte)">
 * <code>java.sql.CallableStatement#setByte(String, byte)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setByte
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Byte} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int,%20byte[])">
 * <code>java.sql.PreparedStatement#setBytes(int, byte[])</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBytes
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Byte[]} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBytes(java.lang.String,%20byte[])">
 * <code>java.sql.CallableStatement#setBytes(String, byte[])</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setBytes
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Byte[]} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int,%20java.sql.Clob)">
 * <code>java.sql.PreparedStatement#setClob(int, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setClob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcClob} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setClob(java.lang.String,%20java.sql.Clob)">
 * <code>java.sql.CallableStatement#setBlob(String, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setClob
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcClob} x - A clob that maps to an SQL <code>CLOB</code> value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)">
 * <code>java.sql.Statement#setCursorName(String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setCursorName
 * 
 * @param {String} name - The new cursor name, which must be unique within a connection.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date)">
 * <code>java.sql.PreparedStatement#setDate(int, Date)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setDate
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcDate} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date,%20java.util.Calendar)">
 * <code>java.sql.PreparedStatement#setDate(int, Date, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setDate
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcDate} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(java.lang.String,%20java.sql.Date)">
 * <code>java.sql.CallableStatement#setDate(String, Date)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setDate
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcDate} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(java.lang.String,%20java.sql.Date,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#setDate(String, Date, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setDate
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcDate} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int,%20double)">
 * <code>java.sql.PreparedStatement#setDouble(int, double)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setDouble
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Number} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDouble(java.lang.String,%20double)">
 * <code>java.sql.CallableStatement#setDouble(String, double)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setDouble
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Number} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">
 * <code>java.sql.Statement#setEscapeProcessing(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setEscapeProcessing
 * 
 * @param {Boolean} enable - If <code>true</code>, escape processing is enabled; otherwise it is disabled.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">
 * <code>java.sql.Statement#setFetchDirection(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setFetchDirection
 * 
 * @param {IntegerNum} direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">
 * <code>java.sql.Statement#setFetchSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setFetchSize
 * 
 * @param {IntegerNum} rows - The number of rows to fetch.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int,%20float)">
 * <code>java.sql.PreparedStatement#setFloat(int, float)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setFloat
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Number} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setFloat(java.lang.String,%20float)">
 * <code>java.sql.CallableStatement#setFloat(String, float)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setFloat
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Number} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int,%20int)">
 * <code>java.sql.PreparedStatement#setInt(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setInt
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setInt(java.lang.String,%20int)">
 * <code>java.sql.CallableStatement#setInt(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setInt
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int,%20long)">
 * <code>java.sql.PreparedStatement#setLong(int, long)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setLong
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setLong(java.lang.String,%20long)">
 * <code>java.sql.CallableStatement#setLong(String, long)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setLong
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">
 * <code>java.sql.Statement#setMaxFieldSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setMaxFieldSize
 * 
 * @param {IntegerNum} max - The new column byte size limit; a value of zero indicates no limit.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)"><code>
 * java.sql.Statement#setMaxRows(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setMaxRows
 * 
 * @param {IntegerNum} max - The maximum number of rows a result set generated by this statement can have. A
 *     value of 0 indicates no limit.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int,%20java.sql.NClob)">
 * <code>java.sql.PreparedStatement#setNClob(int, NClob)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNClob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcClob} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNClob(java.lang.String,%20java.sql.NClob)">
 * <code>java.sql.CallableStatement#setNClob(String, NClob)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNClob
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcClob} value - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int,%20java.lang.String)">
 * <code>java.sql.PreparedStatement#setNString(int, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNString
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNString(java.lang.String,%20java.lang.String)">
 * <code>java.sql.CallableStatement#setNString(String, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNString
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {String} value - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int)">
 * <code>java.sql.PreparedStatement#setNull(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNull
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
 *     type</a> of the specified parameter.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int,%20java.lang.String)">
 * <code>java.sql.PreparedStatement#setNull(int, int, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNull
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
 *     type</a> of the specified parameter.
 * @param {String} typeName - The fully-qualifed name of an SQL user-defined type. Ignored if the parameter
 *     isn't a user-defined type or <code>REF</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(java.lang.String,%20int)">
 * <code>java.sql.CallableStatement#setNull(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNull
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {IntegerNum} sqlType - The SQL <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">
 *     type code</a>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(java.lang.String,%20int,%20java.lang.String)">
 * <code>java.sql.CallableStatement#setNull(String, int, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setNull
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {IntegerNum} sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
 *     type</a>.
 * @param {String} typeName - The fully-qualified name of an SQL user-defined type; ignored if the parameter
 *     is not a user-defined type or SQL <code>REF</code> value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object)">
 * <code>java.sql.PreparedStatement#setObject(int, Object)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setObject
 * 
 * @param {IntegerNum} index - The index of the parameter to set (the first parameter is 1, the second is 2, and
 *     so on).
 * @param {Object} x - The object containing the value to set the parameter to.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int)">
 * <code>java.sql.PreparedStatement#setObject(int, Object, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setObject
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Object} x - The object containing the value to set the parameter to.
 * @param {IntegerNum} targetSqlType - The <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
 *     to the database.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int,%20int)">
 * <code>java.sql.PreparedStatement#setObject(int, Object, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setObject
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Object} x - The object containing the value to set the parameter to.
 * @param {IntegerNum} targetSqlType - The <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
 *     to the database. The scale argument may further qualify this type.
 * @param {IntegerNum} scaleOrLength - The number of digits after the decimal for <code>DECIMAL</code> or <code>NUMERIC</code> types, or the length of data for <code>InputStream</code> or <code>Reader</code> types.
 *     Ignored for all other types.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object)">
 * <code>java.sql.CallableStatement#setObject(String, Object)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setObject
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Object} x - The object containing the value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object,%20int)">
 * <code>java.sql.CallableStatement#setObject(String, Object, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setObject
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Object} x - The object containing the value to set.
 * @param {IntegerNum} targetSqlType - The <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> sent to
 *     the database.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object,%20int,%20int)">
 * <code>java.sql.CallableStatement#setObject(String, Object, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setObject
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Object} x - The object containing the value to set.
 * @param {IntegerNum} targetSqlType - The <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> sent to
 *     the database. The scale parameter may further qualify this type.
 * @param {IntegerNum} scale - The number of digits after the decimal point for <code>DECIMAL</code> and <code>NUMERIC</code> types. Ignored for all other types.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">
 * <code>java.sql.Statement#setPoolable(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setPoolable
 * 
 * @param {Boolean} poolable - If <code>true</code>, requests that this statement be pooled; otherwise requests it
 *     not be pooled.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">
 * <code>java.sql.Statement#setQueryTimeout(int)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setQueryTimeout
 * 
 * @param {IntegerNum} seconds - The new query timeout in seconds; a value of 0 indicates no timeout.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int,%20java.sql.Ref)">
 * <code>java.sql.PreparedStatement#setRef(int, Ref)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setRef
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcRef} x - The SQL <code>REF</code> value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int,%20java.sql.RowId)">
 * <code>java.sql.PreparedStatement#setRowId(int, RowId)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setRowId
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcRowId} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setRowId(java.lang.String,%20java.sql.RowId)">
 * <code>java.sql.CallableStatement#setRowId(String, RowId)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setRowId
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcRowId} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int,%20java.sql.SQLXML)">
 * <code>java.sql.PreparedStatement#setSQLXML(int, SQLXML)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setSQLXML
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcSQLXML} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setSQLXML(java.lang.String,%20java.sql.SQLXML)">
 * <code>java.sql.CallableStatement#setSQLXML(String, SQLXML)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setSQLXML
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcSQLXML} xmlObject - A SQLXML object that maps to an SQL XML value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int,%20short)">
 * <code>java.sql.PreparedStatement#setShort(int, short)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setShort
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setShort(java.lang.String,%20short)">
 * <code>java.sql.CallableStatement#setShort(String, short)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setShort
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int,%20java.lang.String)">
 * <code>java.sql.PreparedStatement#setString(int, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setString
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setString(java.lang.String,%20java.lang.String)">
 * <code>java.sql.CallableStatement#setString(String, String)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setString
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time)">
 * <code>java.sql.PreparedStatement#setTime(int, Time)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTime
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTime} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time,%20java.util.Calendar)">
 * <code>java.sql.PreparedStatement#setTime(int, Time, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTime
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTime} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(java.lang.String,%20java.sql.Time)">
 * <code>java.sql.CallableStatement#setTime(String, Time)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTime
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcTime} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(java.lang.String,%20java.sql.Time,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#setTime(String, Time, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTime
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcTime} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp)">
 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTimestamp} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp,%20java.util.Calendar)">
 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTimestamp} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(java.lang.String,%20java.sql.Timestamp)">
 * <code>java.sql.CallableStatement#setTimestamp(String, Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcTimestamp} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(java.lang.String,%20java.sql.Timestamp,%20java.util.Calendar)">
 * <code>java.sql.CallableStatement#setTimestamp(String, Timestamp, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setTimestamp
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {Jdbc.JdbcTimestamp} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int,%20java.net.URL)">
 * <code>java.sql.PreparedStatement#setURL(int, URL)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setURL
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setURL(java.lang.String,%20java.net.URL)">
 * <code>java.sql.CallableStatement#setURL(String, URL)</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#setURL
 * 
 * @param {String} parameterName - The name of the parameter to set.
 * @param {String} val - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#wasNull()">
 * <code>java.sql.CallableStatement#wasNull()</code></a>.
 * 
 * @function Jdbc.JdbcCallableStatement#wasNull
 * 
 * @return {Boolean} <code>true</code> if the last parameter read was <code>null</code>; returns <code>false</code>
 *     otherwise.
 */



/**
 * @class Jdbc.JdbcClob
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#free()"><code>
 * java.sql.Clob#truncate(long)</code></a>.
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
 * @return {Blob} A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs.
 */


/**
 * Return the data inside this object as a blob converted to the specified content type. This
 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
 * assumes that the part of the filename that follows the last period (if any) is an existing
 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
 * "ShoppingList.12.25.pdf".
 * 
 * <p>To view the daily quotas for conversions, see <a
 * href="https://developers.google.com/apps-script/guides/services/quotas">Quotas for Google
 * Services</a>. Newly created G Suite domains might be temporarily subject to stricter quotas.
 * 
 * @function Jdbc.JdbcClob#getAs
 * 
 * @param {String} contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
 *     valid.
 * 
 * @return {Blob} The data as a blob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#getSubString(long,%20int)">
 * <code>java.sql.Clob#getSubString(long, int)</code></a>.
 * 
 * @function Jdbc.JdbcClob#getSubString
 * 
 * @param {IntegerNum} position - The index of the first character of the substring to extract. The first
 *     character is at index 1.
 * @param {IntegerNum} length - The number of consecutive characters to copy (must be 0 or greater).
 * 
 * @return {String} The retrieved substring.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#length()"><code>
 * java.sql.Clob#length()</code></a>.
 * 
 * @function Jdbc.JdbcClob#length
 * 
 * @return {IntegerNum} The length (in characters) of this clob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(java.sql.Clob,%20long)">
 * <code>java.sql.Clob#position(Clob, long)</code></a>.
 * 
 * @function Jdbc.JdbcClob#position
 * 
 * @param {Jdbc.JdbcClob} search - The clob object to search for.
 * @param {IntegerNum} start - The position at which to begin searching; the first position is 1.
 * 
 * @return {IntegerNum} The position at which the specifed clob appears, or -1 if it is not present.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(java.lang.String,%20long)">
 * <code>java.sql.Clob#position(String, long)</code></a>.
 * 
 * @function Jdbc.JdbcClob#position
 * 
 * @param {String} search - The substring to search for.
 * @param {IntegerNum} start - The position at which to begin searching; the first position is 1.
 * 
 * @return {IntegerNum} The position at which the specifed substring appears, or -1 if it is not present.
 */


/**
 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> to a clob.
 * 
 * @function Jdbc.JdbcClob#setString
 * 
 * @param {IntegerNum} position - The position at which writing to the clob starts; the first position is 1.
 * @param {BlobSource} blobSource - The blob source to write.
 * 
 * @return {IntegerNum} The number of characters written.
 */


/**
 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> to a clob.
 * 
 * @function Jdbc.JdbcClob#setString
 * 
 * @param {IntegerNum} position - The position at which writing to the clob starts; the first position is 1.
 * @param {BlobSource} blobSource - The blob source to write.
 * @param {IntegerNum} offset - The offset into the provided string where reading characters to write starts.
 * @param {IntegerNum} len - The number of characters to write.
 * 
 * @return {IntegerNum} The number of characters written.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long,%20java.lang.String)">
 * <code>java.sql.Clob#setString(long, String)</code></a>.
 * 
 * @function Jdbc.JdbcClob#setString
 * 
 * @param {IntegerNum} position - The position at which writing to the clob starts; the first position is 1.
 * @param {String} value - The string to write.
 * 
 * @return {IntegerNum} The number of characters written.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long,%20java.lang.String,%20int,%20int)">
 * <code>java.sql.Clob#setString(long, String, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcClob#setString
 * 
 * @param {IntegerNum} position - The position at which writing to the clob starts; the first position is 1.
 * @param {String} value - The string to write.
 * @param {IntegerNum} offset - The offset into the provided string where reading characters to write starts.
 * @param {IntegerNum} len - The number of characters to write.
 * 
 * @return {IntegerNum} The number of characters written.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#truncate(long)"><code>
 * java.sql.Clob#truncate(long)</code></a>.
 * 
 * @function Jdbc.JdbcClob#truncate
 * 
 * @param {IntegerNum} length - The size (in bytes) of this clob after truncation.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcConnection
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#clearWarnings()">
 * <code>java.sql.Connection#clearWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#clearWarnings
 * 
 * @return void
 */


/**
 * Release this connection's database and all associated resources.
 * 
 * <pre class="prettyprint"><code>
 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
 * conn.close();
 * </code></pre>
 * 
 * @function Jdbc.JdbcConnection#close
 * 
 * @return void
 */


/**
 * Makes all pending changes permanent, releases database locks held by this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-connection.html'>JdbcConnection</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
 * conn.setAutoCommit(false);
 * var stmt = conn.prepareStatement(&quot;insert into person (lname,fname) values (?,?)&quot;);
 * var start = new Date();
 * for (var i = 0; i &lt; 5000; i++) {
 *   // Objects are accessed using 1-based indexing
 *   stmt.setObject(1, &#39;firstName&#39; + i);
 *   stmt.setObject(2, &#39;lastName&#39; + i);
 *   stmt.addBatch();
 * }
 * var res = stmt.executeBatch();
 * conn.commit(); // When this returns, this is when changes are actually committed
 * conn.close();
 * </code></pre>
 * 
 * @function Jdbc.JdbcConnection#commit
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createArrayOf(java.lang.String,%20java.lang.Object[])">
 * <code>java.sql.Connection#createArrayOf(String, Object[])</code></a>.
 * 
 * @function Jdbc.JdbcConnection#createArrayOf
 * 
 * @param {String} typeName - The database-specific SQL name of the array elemnents' type. Options include
 *     built-in types, user-defined types, or standard SQL types supported by the database.
 * @param {Object[]} elements - The elements to populate in the returned object.
 * 
 * @return {Jdbc.JdbcArray} An array whose elements map to the specified SQL type.
 */


/**
 * Constructs a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> instance. See also <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createBlob()"><code>
 * java.sql.Connection#createBlob()</code></a>.
 * 
 * <p>The object returned initially contains no data. You can use the <code>setBytes</code> methods of
 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> to set the data it should contain. The blob used here is not the same as the
 * blob created with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../utilities/utilities.html#newBlob(Byte)'>Utilities.newBlob(data)</a></code>. To convert
 * between the two formats, use the defined <code>getBytes()</code> and <code>setBytes()</code> methods.
 * Alternatively, both <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> provide a <code>getAppsScriptBlob()</code>
 * convenience method for converting to a format that can be used by Apps Script.
 * 
 * @function Jdbc.JdbcConnection#createBlob
 * 
 * @return {Jdbc.JdbcBlob} An empty blob object.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createClob()"><code>
 * java.sql.Connection#createClob()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#createClob
 * 
 * @return {Jdbc.JdbcClob} An empty clob object.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createNClob()"><code>
 * java.sql.Connection#createNClob()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#createNClob
 * 
 * @return {Jdbc.JdbcClob} An empty nclob object.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createSQLXML()"><code>
 * java.sql.Connection#createSQLXML()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#createSQLXML
 * 
 * @return {Jdbc.JdbcSQLXML} An empty SQLXML object.
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> object for sending SQL statements to the database. See also <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement()">
 * <code>java.sql.Connection#createStatement()</code></a>.
 * 
 * <pre class="prettyprint"><code>
 * // This sample code assumes authentication is off
 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
 * var stmt = conn.createStatement();
 * 
 * stmt.setMaxRows(100);
 * var rs = stmt.execute(&quot;select * from person&quot;);
 * 
 * while(rs.next()) {
 *   // Do something
 * }
 * 
 * rs.close();
 * stmt.close();
 * conn.close();
 * </code></pre>
 * 
 * @function Jdbc.JdbcConnection#createStatement
 * 
 * @return {Jdbc.JdbcStatement} A statement instance to execute queries with.
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> object for sending SQL statements to the database. See also <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,%20int)">
 * <code>java.sql.Connection#createStatement(int, int)</code></a>.
 * 
 * <p>This version allows the result set type and concurrency to be overridden.
 * 
 * <pre class="prettyprint"><code>
 * // This sample code assumes authentication is off
 * // For more information about this method, see documentation here:
 * //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
 * var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
 *                                 Jdbc.ResultSet.CONCUR_READ_ONLY);
 * 
 * stmt.setMaxRows(100);
 * var rs = stmt.execute(&quot;select * from person&quot;);
 * 
 * while(rs.next()) {
 *   // Do something
 * }
 * 
 * rs.close();
 * stmt.close();
 * conn.close();
 * </code></pre>
 * 
 * @function Jdbc.JdbcConnection#createStatement
 * 
 * @param {IntegerNum} resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
 * @param {IntegerNum} resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * 
 * @return {Jdbc.JdbcStatement} A statement instance to execute queries with.
 */


/**
 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> object for sending SQL statements to the database. See also <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,%20int,%20int)">
 * <code>java.sql.Connection#createStatement(int, int, int)</code></a>.
 * 
 * <p>This version allows the result set type, concurrency and holdability to be overridden.
 * 
 * <pre class="prettyprint"><code>
 * // This sample code assumes authentication is off
 * // For more information about this method, see documentation here:
 * //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
 * var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
 *                                 Jdbc.ResultSet.CONCUR_READ_ONLY,
 *                                 Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT);
 * 
 * stmt.setMaxRows(100);
 * var rs = stmt.execute(&quot;select * from person&quot;);
 * 
 * while(rs.next()) {
 *   // Do something
 * }
 * 
 * rs.close();
 * stmt.close();
 * conn.close();
 * </code></pre>
 * 
 * @function Jdbc.JdbcConnection#createStatement
 * 
 * @param {IntegerNum} resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
 * @param {IntegerNum} resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * @param {IntegerNum} resultSetHoldability - A holdability setting; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 * 
 * @return {Jdbc.JdbcStatement} A statement instance to execute queries with.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStruct(java.lang.String,%20java.lang.Object[])">
 * <code>java.sql.Connection#createStruct(String, Object[])</code></a>.
 * 
 * @function Jdbc.JdbcConnection#createStruct
 * 
 * @param {String} typeName - The database-specific SQL name of the array elemnents' type. Options include
 *     built-in types, user-defined types, or standard SQL types supported by the database.
 * @param {Object[]} attributes - The attributes that populate the returned object.
 * 
 * @return {Jdbc.JdbcStruct} A structure object that maps to the given SQL type and is populated with the given
 *     attributes.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getAutoCommit()">
 * <code>java.sql.Connection#getAutoCommit()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#getAutoCommit
 * 
 * @return {Boolean} <code>true</code> if the connection's auto-commit mode is enabled; <code>false</code> otherwise.
 */


/**
 * or documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getCatalog()"><code>
 * java.sql.Connection#getCatalog()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#getCatalog
 * 
 * @return {String} The current catalog name or <code>null</code> if no name has been set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getHoldability()">
 * <code>java.sql.Connection#getHoldability()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#getHoldability
 * 
 * @return {IntegerNum} The holdability setting of the connection; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getMetaData()"><code>
 * java.sql.Connection#getMetaData()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#getMetaData
 * 
 * @return {Jdbc.JdbcDatabaseMetaData} The metadata of the database this connection connects to.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getTransactionIsolation()">
 * <code>java.sql.Connection#getTransactionIsolation()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#getTransactionIsolation
 * 
 * @return {IntegerNum} The current transaction level, which is one of: <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getWarnings()"><code>
 * java.sql.Connection#getWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#getWarnings
 * 
 * @return {String[]} An array of warning strings.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isClosed()"><code>
 * java.sql.Connection#isClosed()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#isClosed
 * 
 * @return {Boolean} <code>true</code> if the connection is closed; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isReadOnly()"><code>
 * java.sql.Connection#isReadOnly()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#isReadOnly
 * 
 * @return {Boolean} <code>true</code> if the connection is read-only; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isValid(int)"><code>
 * java.sql.Connection#isValid(int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#isValid
 * 
 * @param {IntegerNum} timeout - The time in seconds to wait for the validation operation to complete. A value of
 *     0 indicates no timeout is applied.
 * 
 * @return {Boolean} <code>true</code> if the connection is valid; <code>false</code> otherwise. Also returns <code>false</code> if the timeout period expires before the operation completes.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#nativeSQL(java.lang.String)">
 * <code>java.sql.Connection#nativeSQL(String)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#nativeSQL
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' placeholders.
 * 
 * @return {String} The native form of the provided statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String)">
 * <code>java.sql.Connection#prepareCall(String)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareCall
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' placeholders, typically provided
 *     using JDBC call escape syntax.
 * 
 * @return {Jdbc.JdbcCallableStatement} A callable statement containing the pre-compiled SQL statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String,%20int,%20int)">
 * <code>java.sql.Connection#prepareCall(String, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareCall
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' placeholders, typically provided
 *     using JDBC call escape syntax.
 * @param {IntegerNum} resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
 * @param {IntegerNum} resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * 
 * @return {Jdbc.JdbcCallableStatement} A callable statement containing the pre-compiled SQL statement that produces result
 *     sets with the provided type and concurrency.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String,%20int,%20int,%20int)">
 * <code>java.sql.Connection#prepareCall(String, int, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareCall
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' placeholders, typically provided
 *     using JDBC call escape syntax.
 * @param {IntegerNum} resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
 * @param {IntegerNum} resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * @param {IntegerNum} resultSetHoldability - A holdability setting; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 * 
 * @return {Jdbc.JdbcCallableStatement} A callable statement containing the pre-compiled SQL statement that produces result
 *     sets with the provided type, concurrency.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String)">
 * <code>java.sql.Connection#prepareStatement(String)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareStatement
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
 * 
 * @return {Jdbc.JdbcPreparedStatement} A prepared statement containing the pre-compiled SQL statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int)">
 * <code>java.sql.Connection#prepareStatement(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareStatement
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are returned; either
 *     <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {Jdbc.JdbcPreparedStatement} A prepared statement containing the pre-compiled SQL statement, possibly capable of
 *     returning auto-generated keys.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int,%20int)">
 * <code>java.sql.Connection#prepareStatement(String, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareStatement
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
 * @param {IntegerNum} resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
 * @param {IntegerNum} resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * 
 * @return {Jdbc.JdbcPreparedStatement} A prepared statement containing the pre-compiled SQL statement that produces result
 *     sets with the provided type and concurrency.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int,%20int,%20int)">
 * <code>java.sql.Connection#prepareStatement(String, int, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareStatement
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
 * @param {IntegerNum} resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
 * @param {IntegerNum} resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * @param {IntegerNum} resultSetHoldability - A holdability setting; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 * 
 * @return {Jdbc.JdbcPreparedStatement} A prepared statement containing the pre-compiled SQL statement that produces result
 *     sets with the provided type, concurrency, and holdability.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int[])">
 * <code>java.sql.Connection#prepareStatement(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareStatementByIndex
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
 * @param {IntegerNum[]} indices - The column indices of columns that are returned from the inserted row or rows.
 * 
 * @return {Jdbc.JdbcPreparedStatement} A prepared statement containing the pre-compiled SQL statement, capable of returning
 *     auto-generated keys specified by the provided column indices.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Connection#prepareStatement(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcConnection#prepareStatementByName
 * 
 * @param {String} sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
 * @param {String[]} columnNames - The column names that specify which columns the method should return from
 *     the inserted row or rows.
 * 
 * @return {Jdbc.JdbcPreparedStatement} A prepared statement containing the pre-compiled SQL statement, capable of returning
 *     auto-generated keys specified by the provided column names.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#releaseSavepoint(java.sql.Savepoint)">
 * <code>java.sql.Connection#releaseSavepoint(Savepoint)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#releaseSavepoint
 * 
 * @param {Jdbc.JdbcSavepoint} savepoint - The save point to remove.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback()"><code>
 * java.sql.Connection#rollback()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#rollback
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback(java.sql.Savepoint)">
 * <code>java.sql.Connection#rollback(Savepoint)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#rollback
 * 
 * @param {Jdbc.JdbcSavepoint} savepoint - The save point to rollback to.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setAutoCommit(boolean)">
 * <code>java.sql.Connection#setAutoCommit(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setAutoCommit
 * 
 * @param {Boolean} autoCommit - If <code>true</code>, auto-commit mode is enabled; <code>false</code> disables.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setCatalog(java.lang.String)">
 * <code>java.sql.Connection#setCatalog(String)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setCatalog
 * 
 * @param {String} catalog - The name of a catalog (the subspace in the connection's database) in which to
 *     work.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setHoldability(int)">
 * <code>java.sql.Connection#setHoldability(int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setHoldability
 * 
 * @param {IntegerNum} holdability - The default holdability of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html'>JdbcResultSet</a></code> objects created with this
 *     connection; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setReadOnly(boolean)">
 * <code>java.sql.Connection#setReadOnly(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setReadOnly
 * 
 * @param {Boolean} readOnly - If <code>true</code>, read-only mode is enabled; <code>false</code> disables.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint()"><code>
 * java.sql.Connection#setSavepoint()</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setSavepoint
 * 
 * @return {Jdbc.JdbcSavepoint} The new unnamed save point.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint(java.lang.String)">
 * <code>java.sql.Connection#setSavepoint(String)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setSavepoint
 * 
 * @param {String} name - The name of the created save point.
 * 
 * @return {Jdbc.JdbcSavepoint} The new named save point.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setTransactionIsolation(int)">
 * <code>java.sql.Connection#setTransactionIsolation(int)</code></a>.
 * 
 * @function Jdbc.JdbcConnection#setTransactionIsolation
 * 
 * @param {IntegerNum} level - The transaction level to set, which is one of: <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcDatabaseMetaData
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allProceduresAreCallable()">
 * <code>java.sql.DatabaseMetaData#allProceduresAreCallable()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#allProceduresAreCallable
 * 
 * @return {Boolean} <code>true</code> if the user can call all of the procedures returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getProcedures(String,String,String)'>getProcedures(catalog, schemaPattern, procedureNamePattern)</a></code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allTablesAreSelectable()">
 * <code>java.sql.DatabaseMetaData#allTablesAreSelectable()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#allTablesAreSelectable
 * 
 * @return {Boolean} <code>true</code> if the user can call all of the tables returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getTables(String,String,String,String)'>getTables(catalog, schemaPattern, tableNamePattern, types)</a></code> in a <code>SELECT</code>
 *     statement; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#autoCommitFailureClosesAllResultSets()">
 * <code>java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#autoCommitFailureClosesAllResultSets
 * 
 * @return {Boolean} <code>true</code> if, when <code>autoCommit</code> is <code>true</code>, a SQL exception indicates
 *     that all open result sets are closed, even if holdable. Returns <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionCausesTransactionCommit()">
 * <code>java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#dataDefinitionCausesTransactionCommit
 * 
 * @return {Boolean} <code>true</code> if a data definition statement within a transaction forces the transaction
 *     to commit; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionIgnoredInTransactions()">
 * <code>java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#dataDefinitionIgnoredInTransactions
 * 
 * @return {Boolean} <code>true</code> if the database ignores a data definition statement within a transaction;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#deletesAreDetected(int)">
 * <code>java.sql.DatabaseMetaData#deletesAreDetected(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#deletesAreDetected
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the specified result set type a visible row delete is detected by
 *     calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowDeleted()'>JdbcResultSet.rowDeleted()</a></code>. If <code>false</code>, the deleted rows are removed
 *     from the result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#doesMaxRowSizeIncludeBlobs()">
 * <code>java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#doesMaxRowSizeIncludeBlobs
 * 
 * @return {Boolean} <code>true</code> if SQL data types <code>LONGVARCHAR</code> and <code>LONGVARBINARY</code> are
 *     included in the size returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getMaxRowSize()'>getMaxRowSize()</a></code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getAttributes(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getAttributes(String, String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getAttributes
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} typeNamePattern - The user-defined type name pattern; it must match the type name as it is
 *     stored in the database.
 * @param {String} attributeNamePattern - The attribute name pattern; it must match the attribute name as it
 *     is declared in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing descriptions the attributes for a specified user-defined type
 *     available in the specified schema and catalog. Each row provides information about a
 *     specific attribute, ordered by <code>TYPE_CAT</code>, <code>TYPE_SCHEM</code>, <code>TYPE_NAME</code>, and
 *     <code>ORDINAL_POSITION</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getBestRowIdentifier(java.lang.String,%20java.lang.String,%20java.lang.String,%20int,%20boolean)">
 * <code>java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean)
 *       </code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getBestRowIdentifier
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The schema name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
 *     the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * @param {IntegerNum} scope - The scope of interest, using the same values as present in the <code>SCOPE</code>
 *     column description column.
 * @param {Boolean} nullable - If <code>true</code>, include columns that are nullable; otherwise do not.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the column descriptions that uniquely identify a row (one
 *     column description per row in the result set, ordered by <code>SCOPE</code>).
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogSeparator()">
 * <code>java.sql.DatabaseMetaData#getCatalogSeparator()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getCatalogSeparator
 * 
 * @return {String} The separator between a catalog and table name used by this database.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogTerm()">
 * <code>java.sql.DatabaseMetaData#getCatalogTerm()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getCatalogTerm
 * 
 * @return {String} The database vendor's preferred term for 'catalog'.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogs()">
 * <code>java.sql.DatabaseMetaData#getCatalogs()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getCatalogs
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the catalog names, one per row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getClientInfoProperties()">
 * <code>java.sql.DatabaseMetaData#getClientInfoProperties()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getClientInfoProperties
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing client info properties the driver supports, ordered by <code>NAME</code>, one per row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumnPrivileges(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String)
 *    </code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getColumnPrivileges
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The name of the schema to filter the search by, as it appears in the database.
 *     Passing an empty string retrieves those procedures without a schema. Passing <code>null</code>
 *     incidates the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * @param {String} columnNamePattern - The column name pattern to filter the search by. It must match the
 *     column name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the column privilege descriptions, one per row, ordered by
 *     <code>COLUMN_NAME</code> and <code>PRIVILEGE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getColumns(String, String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getColumns
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} tableNamePattern - The table name pattern to filter the search by. It must match the table
 *     name as it is stored in the database.
 * @param {String} columnNamePattern - The column name pattern to filter the search by. It must match the
 *     column name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the column descriptions, one per row, ordered according to
 *     <code>TABLE_CAT</code>, <code>TABLE_SCHEM</code>, <code>TABLE_NAME</code>, and <code>ORDINAL_POSITION</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getConnection()">
 * <code>java.sql.DatabaseMetaData#getConnection()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getConnection
 * 
 * @return {Jdbc.JdbcConnection} The connection that produced this metadata.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCrossReference(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getCrossReference(String, String, String,
 *      String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getCrossReference
 * 
 * @param {String} parentCatalog - A parent catalog name as it appears in the database. Passing an empty
 *     string retrieves those procedures without a catalog. Passing <code>null</code> incidates the
 *     catalog name isn't used in the selection criteria.
 * @param {String} parentSchema - A parent schema name as it appears in the database. Passing an empty string
 *     retrieves those procedures without a schema. Passing <code>null</code> incidates the schema name
 *     isn't used in the selection criteria.
 * @param {String} parentTable - The name of the parent table that exports the key. It must match the table
 *     name as it is stored in the database.
 * @param {String} foreignCatalog - A foreign catalog name as it appears in the database. Passing an empty
 *     string retrieves those procedures without a catalog. Passing <code>null</code> incidates the
 *     catalog name isn't used in the selection criteria.
 * @param {String} foreignSchema - A foreign schema name as it appears in the database. Passing an empty
 *     string retrieves those procedures without a schema. Passing <code>null</code> incidates the
 *     schema name isn't used in the selection criteria.
 * @param {String} foreignTable - The name of the foreign table that exports the key. It must match the table
 *     name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} An result set containing the foreign key column descriptions from the specified foreign
 *     key table that reference the primary key or the columns representing a unique constraint of
 *     the parent table. One column description is provided in each row of the result set, and
 *     they are ordered by <code>FKTABLE_CAT</code>, <code>FKTABLE_SCHEM</code>, <code>FKTABLE_NAME</code>, and
 *     <code>KEY_SEQ</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMajorVersion()">
 * <code>java.sql.DatabaseMetaData#getDatabaseMajorVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseMajorVersion
 * 
 * @return {IntegerNum} The major version number of the underlying database.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMinorVersion()">
 * <code>java.sql.DatabaseMetaData#getDatabaseMinorVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseMinorVersion
 * 
 * @return {IntegerNum} The minor version number of the underlying database.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductName()">
 * <code>java.sql.DatabaseMetaData#getDatabaseProductName()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseProductName
 * 
 * @return {String} The name of this database product.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductVersion()">
 * <code>java.sql.DatabaseMetaData#getDatabaseProductVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDatabaseProductVersion
 * 
 * @return {String} The version number of this database product.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDefaultTransactionIsolation()">
 * <code>java.sql.DatabaseMetaData#getDefaultTransactionIsolation()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDefaultTransactionIsolation
 * 
 * @return {IntegerNum} The database's default transaction isolation level, which is one of: <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMajorVersion()">
 * <code>java.sql.DatabaseMetaData#getDriverMajorVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDriverMajorVersion
 * 
 * @return {IntegerNum} The JDBC driver's major version number.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMinorVersion()">
 * <code>java.sql.DatabaseMetaData#getDriverMinorVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDriverMinorVersion
 * 
 * @return {IntegerNum} The JDBC driver's minor version number.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverName()">
 * <code>java.sql.DatabaseMetaData#getDriverName()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDriverName
 * 
 * @return {String} The name of this JDBC driver.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverVersion()">
 * <code>java.sql.DatabaseMetaData#getDriverVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getDriverVersion
 * 
 * @return {String} The version number of this JDBC driver.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExportedKeys(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getImportedKeys(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getExportedKeys
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The schema name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
 *     the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} An result set containing the foreign key column descriptions for the primary key
 *     columns exported by the table. One column description is provided in each row of the result
 *     set, and they are ordered by <code>FKTABLE_CAT</code>, <code>FKTABLE_SCHEM</code>, <code>FKTABLE_NAME</code>, and <code>KEY_SEQ</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExtraNameCharacters()">
 * <code>java.sql.DatabaseMetaData#getExtraNameCharacters()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getExtraNameCharacters
 * 
 * @return {String} The extra characters that are avaiable for use in unquoted identifier names in addition
 *     to a-z, A-Z, 0-9, and _.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctionColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getFunctionColumns
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} functionNamePattern - The function pattern, which match the function name as it is stored
 *     in the database.
 * @param {String} columnNamePattern - The parameter name pattern, which must match the parameter or column
 *     name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the descriptions of system and user function parameters
 *     available in the given catalog. Each row contains one function description, ordered
 *     according to <code>FUNCTION_CAT</code>, <code>FUNCTION_SCHEM</code>, <code>FUNCTION_NAME</code>, and
 *     <code>SPECIFIC_ NAME</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctions(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getFunctions(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getFunctions
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} functionNamePattern - The function pattern, which must match the function name as it is
 *     stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing descriptions of the system and user functions available in the
 *     given catalog. Each row contains one function description, ordered according to <code>FUNCTION_CAT</code>, <code>FUNCTION_SCHEM</code>, <code>FUNCTION_NAME</code>, and <code>SPECIFIC_ NAME</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIdentifierQuoteString()">
 * <code>java.sql.DatabaseMetaData#getIdentifierQuoteString()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getIdentifierQuoteString
 * 
 * @return {String} The string used to quote SQL identifiers. Defaults to a space (" ") if identifier
 *     quoting isn't supported.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getImportedKeys(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getImportedKeys(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getImportedKeys
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The schema name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
 *     the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} An result set containing the column descriptions for the primary key columns referenced
 *     by the given table's foreign key columns (those imported by a table). One column
 *     description is provided in each row of the result set, and they are ordered by <code>PKTABLE_CAT</code>, <code>PKTABLE_SCHEM</code>, <code>PKTABLE_NAME</code>, and <code>KEY_SEQ</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIndexInfo(java.lang.String,%20java.lang.String,%20java.lang.String,%20boolean,%20boolean)">
 * <code>java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean)
 *       </code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getIndexInfo
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The schema name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
 *     the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * @param {Boolean} unique - If <code>true</code>, the method only return indices for unique values; otherwise it
 *     returns indices whether the values are unique or not.
 * @param {Boolean} approximate - If <code>true</code>, the result is allowed to reflect approximate or out-of-data
 *     values; otherwise result accuracy is requested.
 * 
 * @return {Jdbc.JdbcResultSet} An result set containing the index and statistic column descriptions for the specified
 *     table. One column description is provided in each row of the result set, and they are
 *     ordered by <code>NON_UNIQUE</code>, <code>TYPE</code>, <code>INDEX_NAME</code>, and <code>ORDINAL_POSITION</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMajorVersion()">
 * <code>java.sql.DatabaseMetaData#getJDBCMajorVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getJDBCMajorVersion
 * 
 * @return {IntegerNum} The major JDBC version number for this driver.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMinorVersion()">
 * <code>java.sql.DatabaseMetaData#getJDBCMinorVersion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getJDBCMinorVersion
 * 
 * @return {IntegerNum} The minor JDBC version number for this driver.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxBinaryLiteralLength()">
 * <code>java.sql.DatabaseMetaData#getMaxBinaryLiteralLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxBinaryLiteralLength
 * 
 * @return {IntegerNum} The maximum number of hex characters this database allows in an inline binary literal.
 *     A response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCatalogNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxCatalogNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxCatalogNameLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a catalog name. A response of
 *     0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCharLiteralLength()">
 * <code>java.sql.DatabaseMetaData#getMaxCharLiteralLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxCharLiteralLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a character literal. A
 *     response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxColumnNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnNameLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a column name. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInGroupBy()">
 * <code>java.sql.DatabaseMetaData#getMaxColumnsInGroupBy()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInGroupBy
 * 
 * @return {IntegerNum} The maximum number of columns this database allows in a <code>GROUP BY</code> clause. A
 *     response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInIndex()">
 * <code>java.sql.DatabaseMetaData#getMaxColumnsInIndex()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInIndex
 * 
 * @return {IntegerNum} The maximum number of columns this database allows in an index. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInOrderBy()">
 * <code>java.sql.DatabaseMetaData#getMaxColumnsInOrderBy()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInOrderBy
 * 
 * @return {IntegerNum} The maximum number of columns this database allows in an <code>ORDER BY</code> clause. A
 *     response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInSelect()">
 * <code>java.sql.DatabaseMetaData#getMaxColumnsInSelect()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInSelect
 * 
 * @return {IntegerNum} The maximum number of columns this database allows in an <code>SELECT</code> list. A
 *     response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInTable()">
 * <code>java.sql.DatabaseMetaData#getMaxColumnsInTable()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxColumnsInTable
 * 
 * @return {IntegerNum} The maximum number of columns this database allows in a table. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxConnections()">
 * <code>java.sql.DatabaseMetaData#getMaxConnections()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxConnections
 * 
 * @return {IntegerNum} The maximum number of concurrent connections to this database. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCursorNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxCursorNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxCursorNameLength
 * 
 * @return {IntegerNum} The maximum number of characters that this database allows in a cursor name. A response
 *     of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxIndexLength()">
 * <code>java.sql.DatabaseMetaData#getMaxIndexLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxIndexLength
 * 
 * @return {IntegerNum} The maximum number of bytes this database allows for an index, including all its parts.
 *     A response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxProcedureNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxProcedureNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxProcedureNameLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a procedure name. A response
 *     of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxRowSize()">
 * <code>java.sql.DatabaseMetaData#getMaxRowSize()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxRowSize
 * 
 * @return {IntegerNum} The maximum number of bytes this database allows in a single row. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxSchemaNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxSchemaNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxSchemaNameLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a schema name. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatementLength()">
 * <code>java.sql.DatabaseMetaData#getMaxStatementLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxStatementLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in an SQL statement. A response
 *     of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatements()">
 * <code>java.sql.DatabaseMetaData#getMaxStatements()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxStatements
 * 
 * @return {IntegerNum} The maximum number of active statements to this database that can be open
 *     simultaneously. A response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTableNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxTableNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxTableNameLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a table name. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTablesInSelect()">
 * <code>java.sql.DatabaseMetaData#getMaxTablesInSelect()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxTablesInSelect
 * 
 * @return {IntegerNum} The maximum number of tables this database allows in a <code>SELECT</code> statement. A
 *     response of 0 indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxUserNameLength()">
 * <code>java.sql.DatabaseMetaData#getMaxUserNameLength()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getMaxUserNameLength
 * 
 * @return {IntegerNum} The maximum number of characters this database allows in a username. A response of 0
 *     indicates there is no known limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getNumericFunctions()">
 * <code>java.sql.DatabaseMetaData#getNumericFunctions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getNumericFunctions
 * 
 * @return {String} The comma-separated list of math functions available with this database. These are the
 *     Open/Open CLI math function names used in the JDBC function escape clause.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getPrimaryKeys(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getPrimaryKeys
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The schema name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
 *     the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} An result set containing the column descriptions for the primary key columns, one per
 *     row, ordered by <code>COLUMN_NAME</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String)
 *     </code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getProcedureColumns
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} procedureNamePattern - The procedure name pattern to filter the search by. It must match
 *     the procedure name as it is stored in the database.
 * @param {String} columnNamePattern - The column name pattern to filter the search by. It must match the
 *     column name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the procedure and column descriptions, one per row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureTerm()">
 * <code>java.sql.DatabaseMetaData#getProcedureTerm()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getProcedureTerm
 * 
 * @return {String} The database vendor's preferred term for 'procedure'.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedures(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getProcedures(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getProcedures
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} procedureNamePattern - The procedure name pattern to filter the search by. It must match
 *     the procedure name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the procedure descriptions, one per row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getResultSetHoldability()">
 * <code>java.sql.DatabaseMetaData#getResultSetHoldability()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getResultSetHoldability
 * 
 * @return {IntegerNum} The database default holdability; one of <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getRowIdLifetime()">
 * <code>java.sql.DatabaseMetaData#getRowIdLifetime()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getRowIdLifetime
 * 
 * @return {IntegerNum} The status indicatig the lifetime of a <code>ROWID</code>, which is one of <code>Jdbc.RowIdLifetime.ROWID_UNSUPPORTED</code>, <code>Jdbc.RowIdLifetime.ROWID_VALID_OTHER</code>, <code>Jdbc.RowIdLifetime.ROWID_VALID_SESSION</code>, <code>Jdbc.RowIdLifetime.ROWID_VALID_TRANSACTION</code>, or <code>Jdbc.RowIdLifetime.ROWID_VALID_FOREVER</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLKeywords()">
 * <code>java.sql.DatabaseMetaData#getSQLKeywords()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSQLKeywords
 * 
 * @return {String} The comma-separated list of all this database's SQL keywords that aren't also SQL:2003
 *     keywords.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLStateType()">
 * <code>java.sql.DatabaseMetaData#getSQLStateType()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSQLStateType
 * 
 * @return {IntegerNum} The type of <code>SQLSTATE</code>, which is either <code>sqlStateXOpen</code> or <code>sqlStateSQL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemaTerm()">
 * <code>java.sql.DatabaseMetaData#getSchemaTerm()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSchemaTerm
 * 
 * @return {String} The database vendor's preferred term for 'schema'.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas()">
 * <code>java.sql.DatabaseMetaData#getSchemas()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSchemas
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the schema descriptions, one per row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas()">
 * <code>java.sql.DatabaseMetaData#getSchemas()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSchemas
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing scheme descriptions available in this database, ordered by
 *     <code>TABLE_CATALOG</code> and <code>TABLE_SCHEM</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSearchStringEscape()">
 * <code>java.sql.DatabaseMetaData#getSearchStringEscape()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSearchStringEscape
 * 
 * @return {String} The string that is used to escape wildcard characters such as '_' or '%'.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getStringFunctions()">
 * <code>java.sql.DatabaseMetaData#getStringFunctions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getStringFunctions
 * 
 * @return {String} The comma-separated list of string functions available with this database. These are
 *     the Open Group CLI string function names used in the JDBC function escape clause.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTables(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getSuperTables(String, String,String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSuperTables
 * 
 * @param {String} catalog - The catalog name as it appears in the database. Passing an empty string
 *     retrieves those procedures without a catalog. Passing <code>null</code> incidates the catalog
 *     name isn't used in the selection criteria.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema.
 * @param {String} tableNamePattern - The table name pattern; may be a fully qualified name.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing descriptions of the table hierarchies defined in a particular
 *     schema in this database. Each row provides information about a specific table type. Tables
 *     without supers aren't listed.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTypes(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getSuperTypes(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSuperTypes
 * 
 * @param {String} catalog - The catalog name as it appears in the database. Passing an empty string
 *     retrieves those procedures without a catalog. Passing <code>null</code> incidates the catalog
 *     name isn't used in the selection criteria.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema.
 * @param {String} typeNamePattern - The user-defined type name pattern; may be a fully qualified name.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing descriptions of the user-defined type hierarchies defined in a
 *     particular schema in this database. Each row provides information about a specific
 *     user-defined type. Types without supers aren't listed.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSystemFunctions()">
 * <code>java.sql.DatabaseMetaData#getSystemFunctions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getSystemFunctions
 * 
 * @return {String} The comma-separated list of system functions available with this database. These are
 *     the Open Group CLI system function names used in the JDBC function escape clause.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTablePrivileges(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getTablePrivileges(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getTablePrivileges
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} tableNamePattern - The table name pattern to filter the search by. It must match the table
 *     name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the table privilege descriptions, one per row, ordered by
 *     <code>TABLE_CAT</code>, <code>TABLE_SCHEM</code>, <code>TABLE_NAME</code>, and <code>PRIVILEGE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTableTypes()">
 * <code>java.sql.DatabaseMetaData#getTableTypes()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getTableTypes
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the table types, one per row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTables(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String[])">
 * <code>java.sql.DatabaseMetaData#getTables(String, String, String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getTables
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} tableNamePattern - The table name pattern to filter the search by. It must match the table
 *     name as it is stored in the database.
 * @param {String[]} types - A list of type types to return, each of which must be on the list that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getTableTypes()'>getTableTypes()</a></code> returns. Passing <code>null</code> indictates that all table types are
 *     returned.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the table descriptions, one per row, ordered according to
 *     <code>TABLE_TYPE</code>, <code>TABLE_CAT</code>, <code>TABLE_SCHEM</code>, and <code>TABLE_NAME</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTimeDateFunctions()">
 * <code>java.sql.DatabaseMetaData#getTimeDateFunctions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getTimeDateFunctions
 * 
 * @return {String} The comma-separated list of time and date functions available with this database.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTypeInfo()">
 * <code>java.sql.DatabaseMetaData#getTypeInfo()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getTypeInfo
 * 
 * @return {Jdbc.JdbcResultSet} An result set containing the descriptions of data types supported by this database. One
 *     SQL type description is provided in each row of the result set, and they are ordered by
 *     <code>DATA_TYPE</code> and then by how closely the data type maps to the corresponding JDBC SQL
 *     type.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUDTs(java.lang.String,%20java.lang.String,%20java.lang.String,%20int[])">
 * <code>java.sql.DatabaseMetaData#getUDTs(String, String, String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getUDTs
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schemaPattern - The schema name pattern to filter the search by, as it appears in the
 *     database. Passing an empty string retrieves those procedures without a schema. Passing
 *     <code>null</code> incidates the schema name isn't used to narrow the search.
 * @param {String} typeNamePattern - The type name pattern to filter the search by; may be a fully qualified
 *     name.
 * @param {IntegerNum[]} types - A list of user-defined types (<code>JAVA_OBJECT</code>, <code>STRUCT</code>, or <code>DISTINCT</code>) to include. Passing <code>null</code> indictates that all types are returned.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the user-defined type (UDT) descriptions, one per row, ordered
 *     according to <code>DATA_TYPE</code>, <code>TYPE_CAT</code>, <code>TYPE_SCHEM</code>, and <code>TYPE_NAME</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getURL()"><code>
 * java.sql.DatabaseMetaData#getURL()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getURL
 * 
 * @return {String} The URL for this database management system, or <code>null</code> if isn't generated.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUserName()">
 * <code>java.sql.DatabaseMetaData#getUserName()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getUserName
 * 
 * @return {String} The username as known to this database.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getVersionColumns(java.lang.String,%20java.lang.String,%20java.lang.String)">
 * <code>java.sql.DatabaseMetaData#getVersionColumns(String, String, String)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#getVersionColumns
 * 
 * @param {String} catalog - The catalog name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
 *     incidates the catalog name isn't used to narrow the search.
 * @param {String} schema - The schema name to filter the search by, as it appears in the database. Passing
 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
 *     the schema name isn't used to narrow the search.
 * @param {String} table - The table name. It must match the table name as it is stored in the database.
 * 
 * @return {Jdbc.JdbcResultSet} An unordered result set containing the column descriptions that are updated when any
 *     value in a row is updated (one column description per row in the result set).
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#insertsAreDetected(int)">
 * <code>java.sql.DatabaseMetaData#insertsAreDetected(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#insertsAreDetected
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the specified result set type a visible row insert is detected by
 *     calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowInserted()'>JdbcResultSet.rowInserted()</a></code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isCatalogAtStart()">
 * <code>java.sql.DatabaseMetaData#isCatalogAtStart()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#isCatalogAtStart
 * 
 * @return {Boolean} <code>true</code> if a catalog appears at the start of a fully-qualified table name; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isReadOnly()">
 * <code>java.sql.DatabaseMetaData#isReadOnly()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#isReadOnly
 * 
 * @return {Boolean} <code>true</code> if the database is read-only; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#locatorsUpdateCopy()">
 * <code>java.sql.DatabaseMetaData#locatorsUpdateCopy()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#locatorsUpdateCopy
 * 
 * @return {Boolean} <code>true</code> if updates made to a Large Object (LOB) are made to a copy of th LOB;
 *     <code>false</code> if updates are made directly to the LOB.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullPlusNonNullIsNull()">
 * <code>java.sql.DatabaseMetaData#nullPlusNonNullIsNull()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#nullPlusNonNullIsNull
 * 
 * @return {Boolean} <code>true</code> if concatenations of <code>NULL</code> and non-<code>NULL</code> values result in a
 *     <code>NULL</code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtEnd()">
 * <code>java.sql.DatabaseMetaData#nullsAreSortedAtEnd()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedAtEnd
 * 
 * @return {Boolean} <code>true</code> if <code>NULL</code> values are sorted to the end regardless of sort order
 *     (ascending or descending). Returns <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtStart()">
 * <code>java.sql.DatabaseMetaData#nullsAreSortedAtStart()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedAtStart
 * 
 * @return {Boolean} <code>true</code> if <code>NULL</code> values are sorted to the start regardless of sort order
 *     (ascending or descending). Returns <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedHigh()">
 * <code>java.sql.DatabaseMetaData#nullsAreSortedHigh()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedHigh
 * 
 * @return {Boolean} <code>true</code> if the <code>NULL</code> values are sorted high, meaning they are considered to
 *     have a value higher than others in the domain when sorting. Returns <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedLow()">
 * <code>java.sql.DatabaseMetaData#nullsAreSortedLow()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#nullsAreSortedLow
 * 
 * @return {Boolean} <code>true</code> if the <code>NULL</code> values are sorted low, meaning they are considered to
 *     have a value lower than others in the domain when sorting. Returns <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersDeletesAreVisible(int)">
 * <code>java.sql.DatabaseMetaData#othersDeletesAreVisible(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#othersDeletesAreVisible
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the given result set type the deletes made by others are visible;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersInsertsAreVisible(int)">
 * <code>java.sql.DatabaseMetaData#othersInsertsAreVisible(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#othersInsertsAreVisible
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the given result set type the inserts made by others are visible;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersUpdatesAreVisible(int)">
 * <code>java.sql.DatabaseMetaData#othersUpdatesAreVisible(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#othersUpdatesAreVisible
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the given result set type the updates made by others are visible;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownDeletesAreVisible(int)">
 * <code>java.sql.DatabaseMetaData#ownDeletesAreVisible(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#ownDeletesAreVisible
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the given result set type the set's own deletes are visible; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownInsertsAreVisible(int)">
 * <code>java.sql.DatabaseMetaData#ownInsertsAreVisible(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#ownInsertsAreVisible
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the given result set type the set's own inserts are visible; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownUpdatesAreVisible(int)">
 * <code>java.sql.DatabaseMetaData#ownUpdatesAreVisible(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#ownUpdatesAreVisible
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the given result set type the set's own updates are visible; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseIdentifiers()">
 * <code>java.sql.DatabaseMetaData#storesLowerCaseIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#storesLowerCaseIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case unquoted SQL identifiers as
 *     case-insensitive and stores them in lowercase; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseQuotedIdentifiers()">
 * <code>java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#storesLowerCaseQuotedIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case quoted SQL identifiers as
 *     case-insensitive and stores them in lowercase; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseIdentifiers()">
 * <code>java.sql.DatabaseMetaData#storesMixedCaseIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#storesMixedCaseIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case unquoted SQL identifiers as
 *     case-insensitive and stores them in mixed case; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseQuotedIdentifiers()">
 * <code>java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#storesMixedCaseQuotedIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case quoted SQL identifiers as
 *     case-insensitive and stores them in mixed case; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseIdentifiers()">
 * <code>java.sql.DatabaseMetaData#storesUpperCaseIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#storesUpperCaseIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case unquoted SQL identifiers as
 *     case-insensitive and stores them in uppercase; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseQuotedIdentifiers()">
 * <code>java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#storesUpperCaseQuotedIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case quoted SQL identifiers as
 *     case-insensitive and stores them in uppercase; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92EntryLevelSQL()">
 * <code>java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsANSI92EntryLevelSQL
 * 
 * @return {Boolean} <code>true</code> if this database supports the ANSI92 entry level SQL grammar; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92FullSQL()">
 * <code>java.sql.DatabaseMetaData#supportsANSI92FullSQL()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsANSI92FullSQL
 * 
 * @return {Boolean} <code>true</code> if this database supports the ANSI92 full level SQL grammar; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92IntermediateSQL()">
 * <code>java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsANSI92IntermediateSQL
 * 
 * @return {Boolean} <code>true</code> if this database supports the ANSI92 intermediate level SQL grammar;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithAddColumn()">
 * <code>java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsAlterTableWithAddColumn
 * 
 * @return {Boolean} <code>true</code> if the database supports <code>ALTER TABLE</code> with add column; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithDropColumn()">
 * <code>java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsAlterTableWithDropColumn
 * 
 * @return {Boolean} <code>true</code> if the database supports <code>ALTER TABLE</code> with drop column; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsBatchUpdates()">
 * <code>java.sql.DatabaseMetaData#supportsBatchUpdates()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsBatchUpdates
 * 
 * @return {Boolean} <code>true</code> if the database supports batch updates; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInDataManipulation()">
 * <code>java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInDataManipulation
 * 
 * @return {Boolean} <code>true</code> if a data manipulation statement can include a catalog name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInIndexDefinitions()">
 * <code>java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInIndexDefinitions
 * 
 * @return {Boolean} <code>true</code> if an index definition statement can include a catalog name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInPrivilegeDefinitions()">
 * <code>java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInPrivilegeDefinitions
 * 
 * @return {Boolean} <code>true</code> if a privilege definition statement can include a catalog name; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInProcedureCalls()">
 * <code>java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInProcedureCalls
 * 
 * @return {Boolean} <code>true</code> if a procedure call statement can include a catalog name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInTableDefinitions()">
 * <code>java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCatalogsInTableDefinitions
 * 
 * @return {Boolean} <code>true</code> if a table definition statement can include a catalog name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsColumnAliasing()">
 * <code>java.sql.DatabaseMetaData#supportsColumnAliasing()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsColumnAliasing
 * 
 * @return {Boolean} <code>true</code> if the database supports column aliasing; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert()">
 * <code>java.sql.DatabaseMetaData#supportsConvert()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsConvert
 * 
 * @return {Boolean} <code>true</code> if this database supports the JDBC scalar function <code>CONVERT</code> for the
 *     conversion of one <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">JDBC type</a> to
 *     another; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert(int,%20int)">
 * <code>java.sql.DatabaseMetaData#supportsConvert(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsConvert
 * 
 * @param {IntegerNum} fromType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">
 *     type</a> to convert from.
 * @param {IntegerNum} toType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">
 *     type</a> to convert to.
 * 
 * @return {Boolean} <code>true</code> if this database supports the JDBC scalar function <code>CONVERT</code> for the
 *     conversion of the specified JDBC types; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCoreSQLGrammar()">
 * <code>java.sql.DatabaseMetaData#supportsCoreSQLGrammar()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCoreSQLGrammar
 * 
 * @return {Boolean} <code>true</code> if this database supports the ODBC Core SQL grammar; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCorrelatedSubqueries()">
 * <code>java.sql.DatabaseMetaData#supportsCorrelatedSubqueries()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsCorrelatedSubqueries
 * 
 * @return {Boolean} <code>true</code> if this database supports correlated subqueries; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataDefinitionAndDataManipulationTransactions()">
 * <code>java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions()</code>
 * </a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions
 * 
 * @return {Boolean} <code>true</code> if this database supports both data definition and data manipulation
 *     statements within a transaction; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataManipulationTransactionsOnly()">
 * <code>java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsDataManipulationTransactionsOnly
 * 
 * @return {Boolean} <code>true</code> if this database supports data manipulation statements within a
 *     transaction; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDifferentTableCorrelationNames()">
 * <code>java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsDifferentTableCorrelationNames
 * 
 * @return {Boolean} <code>true</code> if table correlation names are supported and are restricted to be
 *     different frm the names of the tables in the database; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExpressionsInOrderBy()">
 * <code>java.sql.DatabaseMetaData#supportsExpressionsInOrderBy()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsExpressionsInOrderBy
 * 
 * @return {Boolean} <code>true</code> if this database supports expressions in <code>ORDER BY</code> lists; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExtendedSQLGrammar()">
 * <code>java.sql.DatabaseMetaData#supportsExtendedSQLGrammar()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsExtendedSQLGrammar
 * 
 * @return {Boolean} <code>true</code> if this database supports the ODBC Extended SQL grammar; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsFullOuterJoins()">
 * <code>java.sql.DatabaseMetaData#supportsFullOuterJoins()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsFullOuterJoins
 * 
 * @return {Boolean} <code>true</code> if this database supports full nested outer joins; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGetGeneratedKeys()">
 * <code>java.sql.DatabaseMetaData#supportsGetGeneratedKeys()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsGetGeneratedKeys
 * 
 * @return {Boolean} <code>true</code> if auto-generated keys can be retrieved after a statement is executed;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupBy()">
 * <code>java.sql.DatabaseMetaData#supportsGroupBy()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsGroupBy
 * 
 * @return {Boolean} <code>true</code> if this database supports some form of <code>GROUP BY</code> clause; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByBeyondSelect()">
 * <code>java.sql.DatabaseMetaData#supportsGroupByBeyondSelect()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsGroupByBeyondSelect
 * 
 * @return {Boolean} <code>true</code> if this database supports using columns that aren't in the <code>SELECT</code>
 *     statement in a <code>GROUP BY</code> clause, provided that all the columns in the <code>SELECT</code>
 *     statement are included in the <code>GROUP BY</code> clause. Returns <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByUnrelated()">
 * <code>java.sql.DatabaseMetaData#supportsGroupByUnrelated()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsGroupByUnrelated
 * 
 * @return {Boolean} <code>true</code> if this database supports using a column that isn't in the <code>SELECT</code>
 *     statement in a <code>GROUP BY</code> clause; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsIntegrityEnhancementFacility()">
 * <code>java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsIntegrityEnhancementFacility
 * 
 * @return {Boolean} <code>true</code> if this database supports the SQL Integrity Enhancement Facility; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLikeEscapeClause()">
 * <code>java.sql.DatabaseMetaData#supportsLikeEscapeClause()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsLikeEscapeClause
 * 
 * @return {Boolean} <code>true</code> if this database supports specifying a <code>LIKE</code> escape clause; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLimitedOuterJoins()">
 * <code>java.sql.DatabaseMetaData#supportsLimitedOuterJoins()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsLimitedOuterJoins
 * 
 * @return {Boolean} <code>true</code> if this database provides limited support for outer joins; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMinimumSQLGrammar()">
 * <code>java.sql.DatabaseMetaData#supportsMinimumSQLGrammar()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsMinimumSQLGrammar
 * 
 * @return {Boolean} <code>true</code> if this database supports the ODBC Minimum SQL grammar; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseIdentifiers()">
 * <code>java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsMixedCaseIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case unquoted SQL identifiers as
 *     case-sensitive and as a result stores them in mixed case; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseQuotedIdentifiers()">
 * <code>java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsMixedCaseQuotedIdentifiers
 * 
 * @return {Boolean} <code>true</code> if the database treats mixed case quoted SQL identifiers as case-sensitive
 *     and as a result stores them in mixed case; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleOpenResults()">
 * <code>java.sql.DatabaseMetaData#supportsMultipleOpenResults()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsMultipleOpenResults
 * 
 * @return {Boolean} <code>true</code> if a callable statement can return multiple result sets simultenously;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleResultSets()">
 * <code>java.sql.DatabaseMetaData#supportsMultipleResultSets()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsMultipleResultSets
 * 
 * @return {Boolean} <code>true</code> if this database supports getting multiple result sets from a single
 *     execution call; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleTransactions()">
 * <code>java.sql.DatabaseMetaData#supportsMultipleTransactions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsMultipleTransactions
 * 
 * @return {Boolean} <code>true</code> if this database supports having multiple transactions on different
 *     connections open at once; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNamedParameters()">
 * <code>java.sql.DatabaseMetaData#supportsNamedParameters()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsNamedParameters
 * 
 * @return {Boolean} <code>true</code> if the database supports named parameters to callable statements; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNonNullableColumns()">
 * <code>java.sql.DatabaseMetaData#supportsNonNullableColumns()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsNonNullableColumns
 * 
 * @return {Boolean} <code>true</code> if columns in this database may be defined as non-nullable; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossCommit()">
 * <code>java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenCursorsAcrossCommit
 * 
 * @return {Boolean} <code>true</code> if this database supports keeping cursors always open across commits;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossRollback()">
 * <code>java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenCursorsAcrossRollback
 * 
 * @return {Boolean} <code>true</code> if this database supports keeping cursors always open across rollbacks;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossCommit()">
 * <code>java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenStatementsAcrossCommit
 * 
 * @return {Boolean} <code>true</code> if this database supports keeping statements always open across commits;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossRollback()">
 * <code>java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsOpenStatementsAcrossRollback
 * 
 * @return {Boolean} <code>true</code> if this database supports keeping statements always open across rollbacks;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOrderByUnrelated()">
 * <code>java.sql.DatabaseMetaData#supportsOrderByUnrelated()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsOrderByUnrelated
 * 
 * @return {Boolean} <code>true</code> if this database supports using a column that isn't in the <code>SELECT</code>
 *     statement in an <code>ORDER BY</code> clause; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOuterJoins()">
 * <code>java.sql.DatabaseMetaData#supportsOuterJoins()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsOuterJoins
 * 
 * @return {Boolean} <code>true</code> if this database supports some form of outer join; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedDelete()">
 * <code>java.sql.DatabaseMetaData#supportsPositionedDelete()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsPositionedDelete
 * 
 * @return {Boolean} <code>true</code> if this database supports positioned <code>DELETE</code> statements; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedUpdate()">
 * <code>java.sql.DatabaseMetaData#supportsPositionedUpdate()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsPositionedUpdate
 * 
 * @return {Boolean} <code>true</code> if this database supports positioned <code>UPDATE</code> statements; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetConcurrency(int,%20int)">
 * <code>java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsResultSetConcurrency
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * @param {IntegerNum} concurrency - The concurrency type, which is either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 * 
 * @return {Boolean} <code>true</code> if this database supports the specified result set and concurrency type
 *     combination; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetHoldability(int)">
 * <code>java.sql.DatabaseMetaData#supportsResultSetHoldability(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsResultSetHoldability
 * 
 * @param {IntegerNum} holdability - A holdability constant to check; one of <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 * 
 * @return {Boolean} <code>true</code> if the database the specified holdability; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetType(int)">
 * <code>java.sql.DatabaseMetaData#supportsResultSetType(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsResultSetType
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if this database supports the specified result set type; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSavepoints()">
 * <code>java.sql.DatabaseMetaData#supportsSavepoints()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSavepoints
 * 
 * @return {Boolean} <code>true</code> if the database supports savepoints; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInDataManipulation()">
 * <code>java.sql.DatabaseMetaData#supportsSchemasInDataManipulation()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInDataManipulation
 * 
 * @return {Boolean} <code>true</code> if a data manipulation statement can include a schema name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInIndexDefinitions()">
 * <code>java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInIndexDefinitions
 * 
 * @return {Boolean} <code>true</code> if an index definition statement can include a schema name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInPrivilegeDefinitions()">
 * <code>java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInPrivilegeDefinitions
 * 
 * @return {Boolean} <code>true</code> if an privilege definition statement can include a schema name; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInProcedureCalls()">
 * <code>java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInProcedureCalls
 * 
 * @return {Boolean} <code>true</code> if a procedure call statement can include a schema name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInTableDefinitions()">
 * <code>java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSchemasInTableDefinitions
 * 
 * @return {Boolean} <code>true</code> if a table definition statement can include a schema name; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSelectForUpdate()">
 * <code>java.sql.DatabaseMetaData#supportsSelectForUpdate()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSelectForUpdate
 * 
 * @return {Boolean} <code>true</code> if this database supports <code>SELECT FOR UPDATE</code> statements; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStatementPooling()">
 * <code>java.sql.DatabaseMetaData#supportsStatementPooling()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsStatementPooling
 * 
 * @return {Boolean} <code>true</code> if the database supports statement pooling; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredFunctionsUsingCallSyntax()">
 * <code>java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsStoredFunctionsUsingCallSyntax
 * 
 * @return {Boolean} <code>true</code> if the database supports invoking user-defined or vendor functions using
 *     the stored procedure escape syntax; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredProcedures()">
 * <code>java.sql.DatabaseMetaData#supportsStoredProcedures()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsStoredProcedures
 * 
 * @return {Boolean} <code>true</code> if this database supports stored procedure calls that used the stored
 *     procedure escape syntax; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInComparisons()">
 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInComparisons()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInComparisons
 * 
 * @return {Boolean} <code>true</code> if this database supports subqueries in comparison expressions; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInExists()">
 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInExists()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInExists
 * 
 * @return {Boolean} <code>true</code> if this database supports subqueries in <code>EXISTS</code> expressions; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInIns()">
 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInIns()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInIns
 * 
 * @return {Boolean} <code>true</code> if this database supports subqueries in <code>IN</code> expressions; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInQuantifieds()">
 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsSubqueriesInQuantifieds
 * 
 * @return {Boolean} <code>true</code> if this database supports subqueries in quantified expressions; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTableCorrelationNames()">
 * <code>java.sql.DatabaseMetaData#supportsTableCorrelationNames()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsTableCorrelationNames
 * 
 * @return {Boolean} <code>true</code> if this database supports table corelation names; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactionIsolationLevel(int)">
 * <code>java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsTransactionIsolationLevel
 * 
 * @param {IntegerNum} level - The transaction isolation level to determine the support of. This must be one of
 *     <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
 * 
 * @return {Boolean} <code>true</code> if this database supports the given transaction isolation level; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactions()">
 * <code>java.sql.DatabaseMetaData#supportsTransactions()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsTransactions
 * 
 * @return {Boolean} <code>true</code> if this database supports transactions; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnion()">
 * <code>java.sql.DatabaseMetaData#supportsUnion()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsUnion
 * 
 * @return {Boolean} <code>true</code> if this database supports SQL <code>UNION</code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnionAll()">
 * <code>java.sql.DatabaseMetaData#supportsUnionAll()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#supportsUnionAll
 * 
 * @return {Boolean} <code>true</code> if this database supports SQL <code>UNION ALL</code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#updatesAreDetected(int)">
 * <code>java.sql.DatabaseMetaData#updatesAreDetected(int)</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#updatesAreDetected
 * 
 * @param {IntegerNum} type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 * 
 * @return {Boolean} <code>true</code> if for the specified result set type a visible row update is detected by
 *     calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowUpdated()'>JdbcResultSet.rowUpdated()</a></code>; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFilePerTable()">
 * <code>java.sql.DatabaseMetaData#usesLocalFilePerTable()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#usesLocalFilePerTable
 * 
 * @return {Boolean} <code>true</code> if the database stores each table in a separate local file; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFiles()">
 * <code>java.sql.DatabaseMetaData#usesLocalFiles()</code></a>.
 * 
 * @function Jdbc.JdbcDatabaseMetaData#usesLocalFiles
 * 
 * @return {Boolean} <code>true</code> if the database stores tables in a local file; <code>false</code> otherwise.
 */



/**
 * @class Jdbc.JdbcDate
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after(java.util.Date)">
 * <code>java.sql.Date#after(date)</code></a>.
 * 
 * @function Jdbc.JdbcDate#after
 * 
 * @param {Jdbc.JdbcDate} when - A date to compare to.
 * 
 * @return {Boolean} <code>true</code> if and only if this date is strictly later than the provided date; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before(java.util.Date)">
 * <code>java.sql.Date#before(date)</code></a>.
 * 
 * @function Jdbc.JdbcDate#before
 * 
 * @param {Jdbc.JdbcDate} when - A date to compare to.
 * 
 * @return {Boolean} <code>true</code> if and only if this date is strictly earlier than the provided date;
 *     <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate()"><code>
 * java.sql.Date#getDate()</code></a>.
 * 
 * @function Jdbc.JdbcDate#getDate
 * 
 * @return {IntegerNum} The day of the month represented by this date. The value is between 1 and 31.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth()"><code>
 * java.sql.Date#getMonth()</code></a>.
 * 
 * @function Jdbc.JdbcDate#getMonth
 * 
 * @return {IntegerNum} The number representing the month that contains or begins with the instant in time
 *     represented by this date. The value returned is between 0 and 11, with the value 0
 *     representing January.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime()"><code>
 * java.sql.Date#getTime()</code></a>.
 * 
 * @function Jdbc.JdbcDate#getTime
 * 
 * @return {IntegerNum} The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this
 *     date.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear()"><code>
 * java.sql.Date#getYear()</code></a>.
 * 
 * @function Jdbc.JdbcDate#getYear
 * 
 * @return {IntegerNum} The result of subtracting 1900 from the year that contains or begins with the instant
 *     in time represented by this date, as interpreted in the local time zone.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate(int)"><code>
 * java.sql.Date#setDate(int)</code></a>.
 * 
 * @function Jdbc.JdbcDate#setDate
 * 
 * @param {IntegerNum} date - The day of the month to set. The value is between 1 and 31, modified as needed. For
 *     example, if the date was April 30, for example, and the date is set to 31, then it is
 *     treated as if it were on May 1, because April has only 30 days.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth(int)"><code>
 * java.sql.Date#setMonth(int)</code></a>.
 * 
 * @function Jdbc.JdbcDate#setMonth
 * 
 * @param {IntegerNum} month - The month value to set. The value returned is between 0 and 11, with the value 0
 *     representing January.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setTime(long)"><code>
 * java.sql.Date#setTime(int)</code></a>.
 * 
 * @function Jdbc.JdbcDate#setTime
 * 
 * @param {IntegerNum} milliseconds - The number of milliseconds since January 1, 1970, 00:00:00 GMT, not to
 *     exceed the milliseconds representation for the year 8099. A negative number indicates the
 *     number of milliseconds before January 1, 1970, 00:00:00 GMT.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear(int)"><code>
 * java.sql.Date#setYear(int)</code></a>.
 * 
 * @function Jdbc.JdbcDate#setYear
 * 
 * @param {IntegerNum} year - The value to set the year with. This value plus 1900 is the resulting year the date
 *     has after this method executes.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcParameterMetaData
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterClassName(int)">
 * <code>java.sql.ParameterMetaData#getParameterClassName(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getParameterClassName
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {String} The fully-qualified Java class name that is used by the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement.html#setObject(Integer,Object)'>JdbcPreparedStatement.setObject(index, x)</a></code> methods.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterCount()">
 * <code>java.sql.ParameterMetaData#getParameterCount()</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getParameterCount
 * 
 * @return {IntegerNum} The number of parameters for which this metadata contains information.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterMode(int)">
 * <code>java.sql.ParameterMetaData#getParameterMode(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getParameterMode
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {IntegerNum} The designated parameter's mode, which is one of <code>Jdbc.ParameterMetaData.parameterModeIn</code>, <code>Jdbc.ParameterMetaData.parameterModeOut</code>,
 *     <code>Jdbc.ParameterMetaData.parameterModeInOut</code>, or <code>Jdbc.ParameterMetaData.parameterModeUnknown</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterType(int)">
 * <code>java.sql.ParameterMetaData#getParameterType(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getParameterType
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {IntegerNum} The designated parameter's <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterTypeName(int)">
 * <code>java.sql.ParameterMetaData#getParameterTypeName(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getParameterTypeName
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {String} The designated parameter's database-specific type name. This is a fully-qualified type
 *     name if the parameter is a user-defined type.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getPrecision(int)">
 * <code>java.sql.ParameterMetaData#getPrecision(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getPrecision
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {IntegerNum} The maximum column size for the given parameter. For numeric data, this is the maximum
 *     precision. For character data, this is the length in characters. For datetime data, this is
 *     the length in characters of the string representation (assuming the maximum allowed
 *     precision of the fractional seconds component). For binary data, this is the length in
 *     bytes. For the <code>ROWID</code> datatype, this is the length in bytes. Returns 0 for types
 *     where the column size is not applicable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getScale(int)">
 * <code>java.sql.ParameterMetaData#getScale(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#getScale
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {IntegerNum} The designated parameter's number of digits to right of the decimal point. Returns 0
 *     for data types where the scale is not applicable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isNullable(int)">
 * <code>java.sql.ParameterMetaData#isNullable(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#isNullable
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {IntegerNum} The nullability status of the given parameter; one of <code>Jdbc.ParameterMetaData.parameterNoNulls</code>, <code>Jdbc.ParameterMetaData.parameterNullable</code>,
 *     or <code>Jdbc.ParameterMetaData.parameterNullableUnknown</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isSigned(int))">
 * <code>java.sql.ParameterMetaData#isSigned(int)</code></a>.
 * 
 * @function Jdbc.JdbcParameterMetaData#isSigned
 * 
 * @param {IntegerNum} param - The index of the parameter to examine. The first parameter has an index of 1.
 * 
 * @return {Boolean} <code>true</code> if the specified parameter can accept signed number values; <code>false</code>
 *     otherwise.
 */



/**
 * @class Jdbc.JdbcPreparedStatement
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch()">
 * <code>java.sql.PreparedStatement#addBatch()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#addBatch
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)">
 * <code>java.sql.Statement#addBatch(String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#addBatch
 * 
 * @param {String} sql - The SQL command to add to this statement, typically an SQL <code>INSERT</code> or <code>UPDATE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()"><code>
 * java.sql.Statement#cancel()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#cancel
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()"><code>
 * java.sql.Statement#clearBatch()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#clearBatch
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()">
 * <code>java.sql.PreparedStatement#clearParameters()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#clearParameters
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()"><code>
 * java.sql.Statement#clearWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#clearWarnings
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()"><code>
 * java.sql.Statement#close()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#close
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute()">
 * <code>java.sql.PreparedStatement#execute()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#execute
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if the first result is
 *     an update count or there is no result.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)">
 * <code>java.sql.Statement#execute(String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)">
 * <code>java.sql.Statement#execute(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])">
 * <code>java.sql.Statement#execute(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {IntegerNum[]} columnIndexes - The column indices in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Statement#execute(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {String[]} columnNames - The names of columns in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()"><code>
 * java.sql.Statement#executeBatch()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeBatch
 * 
 * @return {IntegerNum[]} The update counts for each command in the batch, using the same order in which commands
 *     were added to the batch.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery()">
 * <code>java.sql.PreparedStatement#executeQuery()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeQuery
 * 
 * @return {Jdbc.JdbcResultSet} A result set that contains the data produced by the query.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)">
 * <code>java.sql.Statement#executeQuery(String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeQuery
 * 
 * @param {String} sql - The SQL statement to execute, typically a static <code>SELECT</code>.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the results of the execution. This is never <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate()">
 * <code>java.sql.PreparedStatement#executeUpdate()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 * 
 * @return {IntegerNum} The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)">
 * <code>java.sql.Statement#executeUpdate(String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)">
 * <code>java.sql.Statement#executeUpdate(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])">
 * <code>java.sql.Statement#executeUpdate(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {IntegerNum[]} columnIndexes - The column indices in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Statement#executeUpdate(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {String[]} columnNames - The names of columns in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()"><code>
 * java.sql.Statement#getConnection()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getConnection
 * 
 * @return {Jdbc.JdbcConnection} The connection that produced this statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">
 * <code>java.sql.Statement#getFetchDirection()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getFetchDirection
 * 
 * @return {IntegerNum} The default direction for result sets generated by this statement, which is either
 *     <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()"><code>
 * java.sql.Statement#getFetchSize()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getFetchSize
 * 
 * @return {IntegerNum} The default row fetch size for result sets generated from this statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">
 * <code>java.sql.Statement#getGeneratedKeys()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getGeneratedKeys
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the auto-generated keys generated by the execution of this
 *     statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">
 * <code>java.sql.Statement#getMaxFieldSize()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getMaxFieldSize
 * 
 * @return {IntegerNum} The current column byte size limit for columns storing character and binary values; a
 *     value of zero indictates no limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()"><code>
 * java.sql.Statement#getMaxRows()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getMaxRows
 * 
 * @return {IntegerNum} The current maximum number of rows for a result set produced by this statement; a value
 *     of 0 indicates no limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()">
 * <code>java.sql.PreparedStatement#getMetaData()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getMetaData
 * 
 * @return {Jdbc.JdbcResultSetMetaData} The description of a result set's columns, or <code>NULL</code> if this metadata is
 *     unavailable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()">
 * <code>java.sql.Statement#getMoreResults()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getMoreResults
 * 
 * @return {Boolean} <code>true</code> if the next result is a result set; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">
 * <code>java.sql.Statement#getMoreResults(int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getMoreResults
 * 
 * @param {IntegerNum} current - A flag that indicates what happens to current result sets when retrieved. This
 *     value is one of <code>Jdbc.Statement.CLOSE_CURRENT_RESULT</code>, <code>Jdbc.Statement.KEEP_CURRENT_RESULT</code>, or <code>Jdbc.Statement.CLOSE_ALL_RESULTS</code>.
 * 
 * @return {Boolean} <code>true</code> if the next result is a result set; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()">
 * <code>java.sql.PreparedStatement#getParameterMetaData()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getParameterMetaData
 * 
 * @return {Jdbc.JdbcParameterMetaData} The parameter metadata, including the number, types, and properties for each parameter.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">
 * <code>java.sql.Statement#getQueryTimeout()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getQueryTimeout
 * 
 * @return {IntegerNum} The current query timeout in seconds; a value of zero indicates no timeout.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()"><code>
 * java.sql.Statement#getResultSet()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getResultSet
 * 
 * @return {Jdbc.JdbcResultSet} The current result set, or <code>null</code> if the result is an update count or there are
 *     no more results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">
 * <code>java.sql.Statement#getResultSetConcurrency()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getResultSetConcurrency
 * 
 * @return {IntegerNum} The result set concurrency for result sets generated from this statement, which is
 *     either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">
 * <code>java.sql.Statement#getResultSetHoldability()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getResultSetHoldability
 * 
 * @return {IntegerNum} The result set holdability, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">
 * <code>java.sql.Statement#getResultSetType()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getResultSetType
 * 
 * @return {IntegerNum} The result set type for result sets generated from this statement, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">
 * <code>java.sql.Statement#getUpdateCount()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getUpdateCount
 * 
 * @return {IntegerNum} The current result as an update count, or -1 if the current result is a result set or
 *     if there are no more results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()"><code>
 * java.sql.Statement#getWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#getWarnings
 * 
 * @return {String[]} The current set of warnings, or <code>null</code> if there are no warnings.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()"><code>
 * java.sql.Statement#isClosed()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#isClosed
 * 
 * @return {Boolean} <code>true</code> if this statement is closed; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()"><code>
 * java.sql.Statement#isPoolable()</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#isPoolable
 * 
 * @return {Boolean} <code>true</code> if this statement is poolable; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int,%20java.sql.Array)">
 * <code>java.sql.PreparedStatement#setArray(int, Array)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setArray
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcArray} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int,%20java.math.BigDecimal)">
 * <code>java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setBigDecimal
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {BigNumber} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int,%20java.sql.Blob)">
 * <code>java.sql.PreparedStatement#setBlob(int, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setBlob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcBlob} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int,%20boolean)">
 * <code>java.sql.PreparedStatement#setBoolean(int, boolean)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setBoolean
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Boolean} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int,%20byte)">
 * <code>java.sql.PreparedStatement#setByte(int, byte)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setByte
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Byte} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int,%20byte[])">
 * <code>java.sql.PreparedStatement#setBytes(int, byte[])</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setBytes
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Byte[]} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int,%20java.sql.Clob)">
 * <code>java.sql.PreparedStatement#setClob(int, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setClob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcClob} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)">
 * <code>java.sql.Statement#setCursorName(String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setCursorName
 * 
 * @param {String} name - The new cursor name, which must be unique within a connection.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date)">
 * <code>java.sql.PreparedStatement#setDate(int, Date)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setDate
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcDate} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date,%20java.util.Calendar)">
 * <code>java.sql.PreparedStatement#setDate(int, Date, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setDate
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcDate} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int,%20double)">
 * <code>java.sql.PreparedStatement#setDouble(int, double)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setDouble
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Number} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">
 * <code>java.sql.Statement#setEscapeProcessing(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setEscapeProcessing
 * 
 * @param {Boolean} enable - If <code>true</code>, escape processing is enabled; otherwise it is disabled.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">
 * <code>java.sql.Statement#setFetchDirection(int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setFetchDirection
 * 
 * @param {IntegerNum} direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">
 * <code>java.sql.Statement#setFetchSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setFetchSize
 * 
 * @param {IntegerNum} rows - The number of rows to fetch.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int,%20float)">
 * <code>java.sql.PreparedStatement#setFloat(int, float)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setFloat
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Number} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int,%20int)">
 * <code>java.sql.PreparedStatement#setInt(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setInt
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int,%20long)">
 * <code>java.sql.PreparedStatement#setLong(int, long)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setLong
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">
 * <code>java.sql.Statement#setMaxFieldSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setMaxFieldSize
 * 
 * @param {IntegerNum} max - The new column byte size limit; a value of zero indicates no limit.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)"><code>
 * java.sql.Statement#setMaxRows(int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setMaxRows
 * 
 * @param {IntegerNum} max - The maximum number of rows a result set generated by this statement can have. A
 *     value of 0 indicates no limit.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int,%20java.sql.NClob)">
 * <code>java.sql.PreparedStatement#setNClob(int, NClob)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setNClob
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcClob} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int,%20java.lang.String)">
 * <code>java.sql.PreparedStatement#setNString(int, String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setNString
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int)">
 * <code>java.sql.PreparedStatement#setNull(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setNull
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
 *     type</a> of the specified parameter.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int,%20java.lang.String)">
 * <code>java.sql.PreparedStatement#setNull(int, int, String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setNull
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
 *     type</a> of the specified parameter.
 * @param {String} typeName - The fully-qualifed name of an SQL user-defined type. Ignored if the parameter
 *     isn't a user-defined type or <code>REF</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object)">
 * <code>java.sql.PreparedStatement#setObject(int, Object)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setObject
 * 
 * @param {IntegerNum} index - The index of the parameter to set (the first parameter is 1, the second is 2, and
 *     so on).
 * @param {Object} x - The object containing the value to set the parameter to.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int)">
 * <code>java.sql.PreparedStatement#setObject(int, Object, int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setObject
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Object} x - The object containing the value to set the parameter to.
 * @param {IntegerNum} targetSqlType - The <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
 *     to the database.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int,%20int)">
 * <code>java.sql.PreparedStatement#setObject(int, Object, int, int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setObject
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Object} x - The object containing the value to set the parameter to.
 * @param {IntegerNum} targetSqlType - The <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
 *     to the database. The scale argument may further qualify this type.
 * @param {IntegerNum} scaleOrLength - The number of digits after the decimal for <code>DECIMAL</code> or <code>NUMERIC</code> types, or the length of data for <code>InputStream</code> or <code>Reader</code> types.
 *     Ignored for all other types.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">
 * <code>java.sql.Statement#setPoolable(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setPoolable
 * 
 * @param {Boolean} poolable - If <code>true</code>, requests that this statement be pooled; otherwise requests it
 *     not be pooled.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">
 * <code>java.sql.Statement#setQueryTimeout(int)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setQueryTimeout
 * 
 * @param {IntegerNum} seconds - The new query timeout in seconds; a value of 0 indicates no timeout.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int,%20java.sql.Ref)">
 * <code>java.sql.PreparedStatement#setRef(int, Ref)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setRef
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcRef} x - The SQL <code>REF</code> value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int,%20java.sql.RowId)">
 * <code>java.sql.PreparedStatement#setRowId(int, RowId)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setRowId
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcRowId} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int,%20java.sql.SQLXML)">
 * <code>java.sql.PreparedStatement#setSQLXML(int, SQLXML)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setSQLXML
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcSQLXML} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int,%20short)">
 * <code>java.sql.PreparedStatement#setShort(int, short)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setShort
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {IntegerNum} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int,%20java.lang.String)">
 * <code>java.sql.PreparedStatement#setString(int, String)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setString
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time)">
 * <code>java.sql.PreparedStatement#setTime(int, Time)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setTime
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTime} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time,%20java.util.Calendar)">
 * <code>java.sql.PreparedStatement#setTime(int, Time, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setTime
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTime} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp)">
 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setTimestamp
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTimestamp} x - The parameter value to set.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp,%20java.util.Calendar)">
 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setTimestamp
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {Jdbc.JdbcTimestamp} x - The parameter value to set.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int,%20java.net.URL)">
 * <code>java.sql.PreparedStatement#setURL(int, URL)</code></a>.
 * 
 * @function Jdbc.JdbcPreparedStatement#setURL
 * 
 * @param {IntegerNum} parameterIndex - The index of the parameter to set (the first parameter is 1, the second
 *     is 2, and so on).
 * @param {String} x - The parameter value to set.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcRef
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getBaseTypeName()"><code>
 * java.sql.Ref#getBaseTypeName()</code></a>.
 * 
 * @function Jdbc.JdbcRef#getBaseTypeName
 * 
 * @return {String} The fully-qualified SQL name of the SQL structured type this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-ref.html'>JdbcRef</a></code>
 *     references.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getObject()"><code>
 * java.sql.Ref#getObject()</code></a>.
 * 
 * @function Jdbc.JdbcRef#getObject
 * 
 * @return {Object} The object that this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-ref.html'>JdbcRef</a></code> references.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#setObject(java.lang.Object)">
 * <code>java.sql.Ref#setObject(Object)</code></a>.
 * 
 * @function Jdbc.JdbcRef#setObject
 * 
 * @param {Object} object - The object to set as the refernence target.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcResultSet
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#absolute(int)"><code>
 * java.sql.ResultSet#absolute(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#absolute
 * 
 * @param {IntegerNum} row - The number of the row to which the cursor moves to. A positive number indicates the
 *     row number counting from the start of the result set, while a negative number indicates the
 *     counting from the end of the result set.
 * 
 * @return {Boolean} <code>true</code> if the cursor is moved to a position in this result set; <code>false</code> if
 *     the cursor is before the first row or after the last row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#afterLast()"><code>
 * java.sql.ResultSet#afterLast()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#afterLast
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#beforeFirst()"><code>
 * java.sql.ResultSet#beforeFirst()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#beforeFirst
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#cancelRowUpdates()">
 * <code>java.sql.ResultSet#cancelRowUpdates()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#cancelRowUpdates
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#clearWarnings()"><code>
 * java.sql.ResultSet#clearWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#clearWarnings
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#close()"><code>
 * java.sql.ResultSet#close()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#close
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#deleteRow()"><code>
 * java.sql.ResultSet#deleteRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#deleteRow
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#findColumn(java.lang.String)">
 * <code>java.sql.ResultSet#findColumn(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#findColumn
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {IntegerNum} The column index of the specified column.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#first()"><code>
 * java.sql.ResultSet#first()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#first
 * 
 * @return {Boolean} <code>true</code> if the cursor is on a valid row; <code>false</code> if there are no rows in the
 *     result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(int)"><code>
 * java.sql.ResultSet#getArray(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getArray
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcArray} The value of the designated column in the current row of this result set as an array.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(java.lang.String)">
 * <code>java.sql.ResultSet#getArray(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getArray
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcArray} The value of the designated column in the current row of this result set as an array.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(int)">
 * <code>java.sql.ResultSet#getBigDecimal(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBigDecimal
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {BigNumber} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(java.lang.String)">
 * <code>java.sql.ResultSet#getBigDecimal(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBigDecimal
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {BigNumber} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(int)"><code>
 * java.sql.ResultSet#getBlob(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBlob
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcBlob} The value of the designated column in the current row of this result set as a blob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(java.lang.String)">
 * <code>java.sql.ResultSet#getBlob(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBlob
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcBlob} The value of the designated column in the current row of this result set as a blob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(int)"><code>
 * java.sql.ResultSet#getBoolean(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBoolean
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Boolean} The column value; <code>false</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(java.lang.String)">
 * <code>java.sql.ResultSet#getBoolean(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBoolean
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Boolean} The column value; <code>false</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(int)"><code>
 * java.sql.ResultSet#getByte(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getByte
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Byte} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(java.lang.String)">
 * <code>java.sql.ResultSet#getByte(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getByte
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Byte} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(int)"><code>
 * java.sql.ResultSet#getBytes(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBytes
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Byte[]} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(java.lang.String)">
 * <code>java.sql.ResultSet#getBytes(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getBytes
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Byte[]} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(int)"><code>
 * java.sql.ResultSet#getClob(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getClob
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcClob} The value of the designated column in the current row of this result set as a clob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(java.lang.String)">
 * <code>java.sql.ResultSet#getClob(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getClob
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcClob} The value of the designated column in the current row of this result set as a clob.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getConcurrency()">
 * <code>java.sql.ResultSet#getConcurrency()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getConcurrency
 * 
 * @return {IntegerNum} The concurrency type, which is either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getCursorName()"><code>
 * java.sql.ResultSet#getCursorName()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getCursorName
 * 
 * @return {String} The SQL name for this result set's cursor.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(int)"><code>
 * java.sql.ResultSet#getDate(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getDate
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Jdbc.JdbcDate} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(int,%20java.util.Calendar)">
 * <code>java.sql.ResultSet#getDate(int, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getDate
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcDate} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(java.lang.String)">
 * <code>java.sql.ResultSet#getDate(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getDate
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcDate} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(java.lang.String,%20java.util.Calendar)">
 * <code>java.sql.ResultSet#getDate(String, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getDate
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcDate} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(int)"><code>
 * java.sql.ResultSet#getDouble(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getDouble
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Number} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(java.lang.String)">
 * <code>java.sql.ResultSet#getDouble(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getDouble
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Number} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchDirection()">
 * <code>java.sql.ResultSet#getFetchDirection()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getFetchDirection
 * 
 * @return {IntegerNum} The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or
 *     <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchSize()"><code>
 * java.sql.ResultSet#getFetchSize()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getFetchSize
 * 
 * @return {IntegerNum} The current fetch size for this result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(int)"><code>
 * java.sql.ResultSet#getFloat(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getFloat
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Number} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(java.lang.String)">
 * <code>java.sql.ResultSet#getFloat(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getFloat
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Number} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getHoldability()">
 * <code>java.sql.ResultSet#getHoldability()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getHoldability
 * 
 * @return {IntegerNum} The holdability of this result set, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(int)"><code>
 * java.sql.ResultSet#getInt(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getInt
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {IntegerNum} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(java.lang.String)">
 * <code>java.sql.ResultSet#getInt(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getInt
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {IntegerNum} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(int)"><code>
 * java.sql.ResultSet#getLong(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getLong
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {IntegerNum} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(java.lang.String)">
 * <code>java.sql.ResultSet#getLong(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getLong
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {IntegerNum} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getMetaData()"><code>
 * java.sql.ResultSet#getMetaData()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getMetaData
 * 
 * @return {Jdbc.JdbcResultSetMetaData} The number, types, and properties of this result set's columns.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(int)"><code>
 * java.sql.ResultSet#getNClob(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getNClob
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcClob} The column value of the current row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(java.lang.String)">
 * <code>java.sql.ResultSet#getNClob(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getNClob
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcClob} The column value of the current row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(int)"><code>
 * java.sql.ResultSet#getNString(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getNString
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {String} The column value of the current row; <code>null</code> if the value is SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(java.lang.String)">
 * <code>java.sql.ResultSet#getNString(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getNString
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {String} The column value of the current row; <code>null</code> if the value is SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(int)"><code>
 * java.sql.ResultSet#getObject(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getObject
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Object} The value of the designated column in the current row of this result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(java.lang.String)">
 * <code>java.sql.ResultSet#getObject(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getObject
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Object} The value of the designated column in the current row of this result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(int)"><code>
 * java.sql.ResultSet#getRef(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getRef
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcRef} The value of the designated column in the current row of this result set as a
 *     reference.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(java.lang.String)">
 * <code>java.sql.ResultSet#getRef(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getRef
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcRef} The value of the designated column in the current row of this result set as a
 *     reference.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRow()"><code>
 * java.sql.ResultSet#getRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getRow
 * 
 * @return {IntegerNum} The current row number, or 0 if there is no current row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(int)"><code>
 * java.sql.ResultSet#getRowId(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getRowId
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcRowId} The column row ID value; <code>null</code> if the value is SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(java.lang.String)">
 * <code>java.sql.ResultSet#getRowId(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getRowId
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcRowId} The column row ID value; <code>null</code> if the value is SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(int)"><code>
 * java.sql.ResultSet#getSQLXML(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getSQLXML
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {Jdbc.JdbcSQLXML} The column value of the current row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(java.lang.String)">
 * <code>java.sql.ResultSet#getSQLXML(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getSQLXML
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcSQLXML} The column value of the current row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(int)"><code>
 * java.sql.ResultSet#getShort(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getShort
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {IntegerNum} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(java.lang.String)">
 * <code>java.sql.ResultSet#getShort(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getShort
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {IntegerNum} The column value; 0 if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getStatement()"><code>
 * java.sql.ResultSet#getStatement()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getStatement
 * 
 * @return {Jdbc.JdbcStatement} The statement that produced this result set, or <code>null</code> if the result set was
 *     produced some other way.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(int)"><code>
 * java.sql.ResultSet#getString(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getString
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {String} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(java.lang.String)">
 * <code>java.sql.ResultSet#getString(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getString
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {String} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(int)"><code>
 * java.sql.ResultSet#getTime(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTime
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Jdbc.JdbcTime} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(int,%20java.util.Calendar)">
 * <code>java.sql.ResultSet#getTime(int, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTime
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTime} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(java.lang.String)">
 * <code>java.sql.ResultSet#getTime(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTime
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcTime} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(java.lang.String,%20java.util.Calendar)">
 * <code>java.sql.ResultSet#getTime(String, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTime
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTime} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(int)">
 * <code>java.sql.ResultSet#getTimestamp(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTimestamp
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return {Jdbc.JdbcTimestamp} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(int,%20java.util.Calendar)">
 * <code>java.sql.ResultSet#getTimestamp(int, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTimestamp
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
 *     and so on).
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTimestamp} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(java.lang.String)">
 * <code>java.sql.ResultSet#getTimestamp(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTimestamp
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {Jdbc.JdbcTimestamp} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(java.lang.String,%20java.util.Calendar)">
 * <code>java.sql.ResultSet#getTimestamp(String, Calendar)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getTimestamp
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {String} timeZone - A time zone string used to construct <a
 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
 *     offsets (such as <code>GMT+6:30</code>).
 * 
 * @return {Jdbc.JdbcTimestamp} The column value; <code>null</code> if the value was SQL <code>NULL</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getType()"><code>
 * java.sql.ResultSet#getType()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getType
 * 
 * @return {IntegerNum} The type of this result set, which is one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>,
 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(int)"><code>
 * java.sql.ResultSet#getURL(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getURL
 * 
 * @param {IntegerNum} columnIndex - The index of the column to retrieve the data from (the first column is 1,
 *     the second is 2, and so on).
 * 
 * @return {String} The URL value of the designated column in the current row of this result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(java.lang.String)">
 * <code>java.sql.ResultSet#getURL(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#getURL
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return {String} The URL value of the designated column in the current row of this result set.
 */


/**
 * Returns the current set of warnings reported by the driver.
 * 
 * @function Jdbc.JdbcResultSet#getWarnings
 * 
 * @return {String[]} The current set of warnings.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#insertRow()"><code>
 * java.sql.ResultSet#insertRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#insertRow
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isAfterLast()"><code>
 * java.sql.ResultSet#isAfterLast()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#isAfterLast
 * 
 * @return {Boolean} <code>true</code> if the cursor is after the last row; <code>false</code> if it is in any other
 *     position or if the result set contains no rows.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isBeforeFirst()"><code>
 * java.sql.ResultSet#isBeforeFirst()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#isBeforeFirst
 * 
 * @return {Boolean} <code>true</code> if the cursor is before the first row; <code>false</code> if it is in any other
 *     position or if the result set contains no rows.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isClosed()"><code>
 * java.sql.ResultSet#isClosed()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#isClosed
 * 
 * @return {Boolean} <code>true</code> if this result set is closed; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isFirst()"><code>
 * java.sql.ResultSet#isFirst()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#isFirst
 * 
 * @return {Boolean} <code>true</code> if the cursor is on the first row; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isLast()"><code>
 * java.sql.ResultSet#isLast()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#isLast
 * 
 * @return {Boolean} <code>true</code> if the cursor is on the last row; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#last()"><code>
 * java.sql.ResultSet#first()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#last
 * 
 * @return {Boolean} <code>true</code> if the cursor is on a valid row; <code>false</code> if there are no rows in the
 *     result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToCurrentRow()">
 * <code>java.sql.ResultSet#moveToCurrentRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#moveToCurrentRow
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToInsertRow()">
 * <code>java.sql.ResultSet#moveToInsertRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#moveToInsertRow
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#next()"><code>
 * java.sql.ResultSet#next()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#next
 * 
 * @return {Boolean} <code>true</code> if the new current row is valid; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#previous()"><code>
 * java.sql.ResultSet#previous()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#previous
 * 
 * @return {Boolean} <code>true</code> if the cursor is on a valid row; <code>false</code> if the cursor is positioned
 *     before the first row.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#refreshRow()"><code>
 * java.sql.ResultSet#refreshRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#refreshRow
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#relative(int)"><code>
 * java.sql.ResultSet#relative(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#relative
 * 
 * @param {IntegerNum} rows - The number row steps to move the cursor. A positive number moves the cursor
 *     forward, while a negative number moves the cursor backward.
 * 
 * @return {Boolean} <code>true</code> if the cursor is on a row; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowDeleted()"><code>
 * java.sql.ResultSet#rowDeleted()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#rowDeleted
 * 
 * @return {Boolean} <code>true</code> if the current row was visibly deleted; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowInserted()"><code>
 * java.sql.ResultSet#rowInserted()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#rowInserted
 * 
 * @return {Boolean} <code>true</code> if the current row was visibly inserted; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowUpdated()"><code>
 * java.sql.ResultSet#rowUpdated()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#rowUpdated
 * 
 * @return {Boolean} <code>true</code> if the current row was visibly updated; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchDirection(int)">
 * <code>java.sql.ResultSet#setFetchDirection(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#setFetchDirection
 * 
 * @param {IntegerNum} direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchSize(int)">
 * <code>java.sql.ResultSet#setFetchSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#setFetchSize
 * 
 * @param {IntegerNum} rows - The number of rows to fetch.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(int,%20java.sql.Array)">
 * <code>java.sql.ResultSet#updateArray(int, Array)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateArray
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcArray} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(java.lang.String,%20java.sql.Array)">
 * <code>java.sql.ResultSet#updateArray(String, Array)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateArray
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcArray} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(int,%20java.math.BigDecimal)">
 * <code>java.sql.ResultSet#updateBigDecimal(int, BigDecimal)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBigDecimal
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {BigNumber} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(java.lang.String,%20java.math.BigDecimal)">
 * <code>java.sql.ResultSet#updateBigDecimal(String, BigDecimal)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBigDecimal
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {BigNumber} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(int,%20java.sql.Blob)">
 * <code>java.sql.ResultSet#updateBlob(int, Blob)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBlob
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcBlob} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(java.lang.String,%20java.sql.Blob)">
 * <code>java.sql.ResultSet#updateRef(String, Blob)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBlob
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcBlob} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(int,%20boolean)">
 * <code>java.sql.ResultSet#updateBoolean(int, boolean)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBoolean
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Boolean} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(java.lang.String,%20boolean)">
 * <code>java.sql.ResultSet#updateBoolean(String, boolean)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBoolean
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Boolean} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(int,%20byte)">
 * <code>java.sql.ResultSet#updateByte(int, byte)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateByte
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Byte} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(java.lang.String,%20byte)">
 * <code>java.sql.ResultSet#updateByte(String, byte)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateByte
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Byte} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(int,%20byte[])">
 * <code>java.sql.ResultSet#updateBytes(int, byte[])</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBytes
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Byte[]} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(java.lang.String,%20byte[])">
 * <code>java.sql.ResultSet#updateBytes(String, byte[])</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateBytes
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Byte[]} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(int,%20java.sql.Clob)">
 * <code>java.sql.ResultSet#updateClob(int, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateClob
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcClob} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(java.lang.String,%20java.sql.Clob)">
 * <code>java.sql.ResultSet#updateClob(String, Clob)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateClob
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcClob} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(int,%20java.sql.Date)">
 * <code>java.sql.ResultSet#updateDate(int, Date)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateDate
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcDate} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(java.lang.String,%20java.sql.Date)">
 * <code>java.sql.ResultSet#updateDate(String, Date)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateDate
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcDate} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(int,%20double)">
 * <code>java.sql.ResultSet#updateDouble(int, double)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateDouble
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Number} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(java.lang.String,%20double)">
 * <code>java.sql.ResultSet#updateDouble(String, double)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateDouble
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Number} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(int,%20float)">
 * <code>java.sql.ResultSet#updateFloat(int, float)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateFloat
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Number} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(java.lang.String,%20float)">
 * <code>java.sql.ResultSet#updateFloat(String, float)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateFloat
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Number} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(int,%20int)">
 * <code>java.sql.ResultSet#updateInt(int, int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateInt
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {IntegerNum} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(java.lang.String,%20int)">
 * <code>java.sql.ResultSet#updateInt(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateInt
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {IntegerNum} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(int,%20long)">
 * <code>java.sql.ResultSet#updateLong(int, long)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateLong
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {IntegerNum} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(java.lang.String,%20long)">
 * <code>java.sql.ResultSet#updateLong(String, long)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateLong
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {IntegerNum} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(int,%20java.sql.NClob)">
 * <code>java.sql.ResultSet#updateNClob(int, NClob)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateNClob
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcClob} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(java.lang.String,%20java.sql.NClob)">
 * <code>java.sql.ResultSet#updateNClob(String, NClob)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateNClob
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcClob} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(int,%20java.lang.String)">
 * <code>java.sql.ResultSet#updateNString(int, String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateNString
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {String} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(java.lang.String,%20java.lang.String)">
 * <code>java.sql.ResultSet#updateNString(String, String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateNString
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {String} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(int)"><code>
 * java.sql.ResultSet#updateNull(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateNull
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(java.lang.String)">
 * <code>java.sql.ResultSet#updateNull(String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateNull
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(int,%20java.lang.Object)">
 * <code>java.sql.ResultSet#updateObject(int, Object)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateObject
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Object} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(int,%20java.lang.Object,%20int)">
 * <code>java.sql.ResultSet#updateObject(int, Object, int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateObject
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Object} x - The new column value.
 * @param {IntegerNum} scaleOrLength - The number of digits after the decimal for <code>BigDecimal</code> types, or
 *     the length of data for <code>InputStream</code> or <code>Reader</code> types. Ignored for all other
 *     types.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(java.lang.String,%20java.lang.Object)">
 * <code>java.sql.ResultSet#updateObject(String, Object)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateObject
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Object} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(java.lang.String,%20java.lang.Object,%20int)">
 * <code>java.sql.ResultSet#updateObject(String, Object, int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateObject
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Object} x - The new column value.
 * @param {IntegerNum} scaleOrLength - The number of digits after the decimal for <code>BigDecimal</code> types, or
 *     the length of data for <code>InputStream</code> or <code>Reader</code> types. Ignored for all other
 *     types.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(int,%20java.sql.Ref)">
 * <code>java.sql.ResultSet#updateRef(int, Ref)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateRef
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcRef} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(java.lang.String,%20java.sql.Ref)">
 * <code>java.sql.ResultSet#updateRef(String, Ref)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateRef
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcRef} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRow()"><code>
 * java.sql.ResultSet#updateRow()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateRow
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(int,%20java.sql.RowId)">
 * <code>java.sql.ResultSet#updateRowId(int, RowId)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateRowId
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcRowId} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(java.lang.String,%20java.sql.RowId)">
 * <code>java.sql.ResultSet#updateRowId(String, RowId)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateRowId
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcRowId} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(int,%20java.sql.SQLXML)">
 * <code>java.sql.ResultSet#updateSQLXML(int, SQLXML)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateSQLXML
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcSQLXML} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(java.lang.String,%20java.sql.SQLXML)">
 * <code>java.sql.ResultSet#updateSQLXML(String, SQLXML)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateSQLXML
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcSQLXML} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(int,%20short)">
 * <code>java.sql.ResultSet#updateShort(int, short)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateShort
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {IntegerNum} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(java.lang.String,%20short)">
 * <code>java.sql.ResultSet#updateShort(String, short)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateShort
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {IntegerNum} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(int,%20java.lang.String)">
 * <code>java.sql.ResultSet#updateString(int, String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateString
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {String} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(java.lang.String,%20java.lang.String)">
 * <code>java.sql.ResultSet#updateString(String, String)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateString
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {String} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(int,%20java.sql.Time)">
 * <code>java.sql.ResultSet#updateTime(int, Time)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateTime
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcTime} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(java.lang.String,%20java.sql.Time)">
 * <code>java.sql.ResultSet#updateTime(String, Time)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateTime
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcTime} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(int,%20java.sql.Timestamp)">
 * <code>java.sql.ResultSet#updateTimestamp(int, Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateTimestamp
 * 
 * @param {IntegerNum} columnIndex - The index of the column to update (the first column is 1, the second is 2,
 *     and so on).
 * @param {Jdbc.JdbcTimestamp} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(java.lang.String,%20java.sql.Timestamp)">
 * <code>java.sql.ResultSet#updateTimestamp(String, Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#updateTimestamp
 * 
 * @param {String} columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
 *     wasn't specified, then the label is the name of the column.
 * @param {Jdbc.JdbcTimestamp} x - The new column value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#wasNull()"><code>
 * java.sql.ResultSet#wasNull()</code></a>.
 * 
 * @function Jdbc.JdbcResultSet#wasNull
 * 
 * @return {Boolean} <code>true</code> if the last column read was SQL <code>NULL</code>; <code>false</code> otherwise.
 */



/**
 * @class Jdbc.JdbcResultSetMetaData
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getCatalogName(int)">
 * <code>java.sql.ResultSetMetaData#getCatalogName(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getCatalogName
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The catalog name for the table in the designated column, or an empty string if not
 *     applicable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnClassName(int)">
 * <code>java.sql.ResultSetMetaData#getColumnClassName(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnClassName
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The fully-qualified name of the class of the designated column's values.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnCount()">
 * <code>java.sql.ResultSetMetaData#getColumnCount()</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnCount
 * 
 * @return {IntegerNum} The number of columns in this result set.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnDisplaySize(int)">
 * <code>java.sql.ResultSetMetaData#getColumnDisplaySize(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnDisplaySize
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {IntegerNum} The maximum number of characters allowed as the width of the designated columns.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnLabel(int)">
 * <code>java.sql.ResultSetMetaData#getColumnLabel(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnLabel
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The designated column's suggested title, usually specifed by a SQL <code>AS</code> clause.
 *     Returns the same as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data.html#getColumnName(Integer)'>getColumnName(column)</a></code> if an <code>AS</code> is not specified.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnName(int)">
 * <code>java.sql.ResultSetMetaData#getColumnName(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnName
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The designated column's name.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnType(int)">
 * <code>java.sql.ResultSetMetaData#getColumnType(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnType
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {IntegerNum} The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
 *     type</a> of the designated column.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnTypeName(int)">
 * <code>java.sql.ResultSetMetaData#getColumnTypeName(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getColumnTypeName
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The designated column's database-specific type name. Returns the fully-qualifed type
 *     name if this is a user-defined type.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getPrecision(int)">
 * <code>java.sql.ResultSetMetaData#getPrecision(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getPrecision
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {IntegerNum} The maximum column size for the given column. For numeric data, this is the maximum
 *     precision. For character data, this is the length in characters. For datetime data, this is
 *     the length in characters of the string representation (assuming the maximum allowed
 *     precision of the fractional seconds component). For binary data, this is the length in
 *     bytes. For the <code>ROWID</code> datatype, this is the length in bytes. Returns 0 for types
 *     where the column size is not applicable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getScale(int)">
 * <code>java.sql.ResultSetMetaData#getScale(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getScale
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {IntegerNum} The designated columns's number of digits to right of the decimal point. Returns 0 for
 *     data types where the scale is not applicable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getSchemaName(int)">
 * <code>java.sql.ResultSetMetaData#getSchemaName(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getSchemaName
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The table schema of the designated column.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getTableName(int)">
 * <code>java.sql.ResultSetMetaData#getTableName(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#getTableName
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {String} The table name of the designated column, or an empty string if not applicable.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isAutoIncrement(int)">
 * <code>java.sql.ResultSetMetaData#isAutoIncrement(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isAutoIncrement
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if the specified column is automatically numbered; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCaseSensitive(int)">
 * <code>java.sql.ResultSetMetaData#isCaseSensitive(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isCaseSensitive
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if the specified column is case-sensitive; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCurrency(int)">
 * <code>java.sql.ResultSetMetaData#isCurrency(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isCurrency
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if the specified column is a cash value; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isDefinitelyWritable(int)">
 * <code>java.sql.ResultSetMetaData#isDefinitelyWritable(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isDefinitelyWritable
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if writes to the designated column definitely succeed; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isNullable(int)">
 * <code>java.sql.ResultSetMetaData#isNullable(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isNullable
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {IntegerNum} The nullability status of the specified column, which is <code>Jdbc.ResultSetMetaData.columnNoNulls</code>, <code>Jdbc.ResultSetMetaData.columnNullable</code>, or
 *     <code>Jdbc.ResultSetMetaData.columnNullableUnknown</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isReadOnly(int)">
 * <code>java.sql.ResultSetMetaData#isReadOnly(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isReadOnly
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if the designated column is definitely non-writable; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSearchable(int)">
 * <code>java.sql.ResultSetMetaData#isSearchable(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isSearchable
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if a where clause can use the specified column; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSigned(int)">
 * <code>java.sql.ResultSetMetaData#isSigned(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isSigned
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if the values in the specified column are signed numbers; <code>false</code>
 *     otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isWritable(int)">
 * <code>java.sql.ResultSetMetaData#isWritable(int)</code></a>.
 * 
 * @function Jdbc.JdbcResultSetMetaData#isWritable
 * 
 * @param {IntegerNum} column - The index of the column to examine (the first column is 1, the second is 2, and
 *     so on).
 * 
 * @return {Boolean} <code>true</code> if it is possible to write to the designated column; <code>false</code>
 *     otherwise.
 */



/**
 * @class Jdbc.JdbcRowId
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/RowId.html#getBytes()"><code>
 * java.sql.RowId#getBytes()</code></a>.
 * 
 * @function Jdbc.JdbcRowId#getBytes
 * 
 * @return {Byte[]} The bytes representing the <code>ROWID</code> represented by this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-row-id.html'>JdbcRowId</a></code>.
 */



/**
 * @class Jdbc.JdbcSQLXML
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#free()"><code>
 * java.sql.SQLXML#free()</code></a>.
 * 
 * @function Jdbc.JdbcSQLXML#free
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#getString()"><code>
 * java.sql.SQLXML#getString()</code></a>.
 * 
 * @function Jdbc.JdbcSQLXML#getString
 * 
 * @return {String} The string representation of the XML value designated by this SQLXML instance.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#setString(java.lang.String)">
 * <code>java.sql.SQLXML#setString(String)</code></a>.
 * 
 * @function Jdbc.JdbcSQLXML#setString
 * 
 * @param {String} value - The string representation of the XML value to set.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcSavepoint
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointId()">
 * <code>java.sql.Savepoint#getSavepointId()</code></a>.
 * 
 * @function Jdbc.JdbcSavepoint#getSavepointId
 * 
 * @return {IntegerNum} The numeric ID of this savepoint.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointName()">
 * <code>java.sql.Savepoint#getSavepointName()</code></a>.
 * 
 * @function Jdbc.JdbcSavepoint#getSavepointName
 * 
 * @return {String} The name of this savepoint.
 */



/**
 * @class Jdbc.JdbcStatement
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)">
 * <code>java.sql.Statement#addBatch(String)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#addBatch
 * 
 * @param {String} sql - The SQL command to add to this statement, typically an SQL <code>INSERT</code> or <code>UPDATE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()"><code>
 * java.sql.Statement#cancel()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#cancel
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()"><code>
 * java.sql.Statement#clearBatch()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#clearBatch
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()"><code>
 * java.sql.Statement#clearWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#clearWarnings
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()"><code>
 * java.sql.Statement#close()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#close
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)">
 * <code>java.sql.Statement#execute(String)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)">
 * <code>java.sql.Statement#execute(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])">
 * <code>java.sql.Statement#execute(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {IntegerNum[]} columnIndexes - The column indices in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Statement#execute(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcStatement#execute
 * 
 * @param {String} sql - The SQL statement to execute.
 * @param {String[]} columnNames - The names of columns in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {Boolean} <code>true</code> if the first result is a result set; <code>false</code> if it is an update
 *     count or if there are no results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()"><code>
 * java.sql.Statement#executeBatch()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#executeBatch
 * 
 * @return {IntegerNum[]} The update counts for each command in the batch, using the same order in which commands
 *     were added to the batch.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)">
 * <code>java.sql.Statement#executeQuery(String)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#executeQuery
 * 
 * @param {String} sql - The SQL statement to execute, typically a static <code>SELECT</code>.
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the results of the execution. This is never <code>null</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)">
 * <code>java.sql.Statement#executeUpdate(String)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)">
 * <code>java.sql.Statement#executeUpdate(String, int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {IntegerNum} autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])">
 * <code>java.sql.Statement#executeUpdate(String, int[])</code></a>.
 * 
 * @function Jdbc.JdbcStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {IntegerNum[]} columnIndexes - The column indices in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])">
 * <code>java.sql.Statement#executeUpdate(String, String[])</code></a>.
 * 
 * @function Jdbc.JdbcStatement#executeUpdate
 * 
 * @param {String} sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
 *     statement).
 * @param {String[]} columnNames - The names of columns in the whose auto-generated keys are made available for
 *     future retrieval.
 * 
 * @return {IntegerNum} Either the row count for for Data Manipulation Language statements, or 0 for statements
 *     that return nothing.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()"><code>
 * java.sql.Statement#getConnection()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getConnection
 * 
 * @return {Jdbc.JdbcConnection} The connection that produced this statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">
 * <code>java.sql.Statement#getFetchDirection()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getFetchDirection
 * 
 * @return {IntegerNum} The default direction for result sets generated by this statement, which is either
 *     <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()"><code>
 * java.sql.Statement#getFetchSize()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getFetchSize
 * 
 * @return {IntegerNum} The default row fetch size for result sets generated from this statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">
 * <code>java.sql.Statement#getGeneratedKeys()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getGeneratedKeys
 * 
 * @return {Jdbc.JdbcResultSet} A result set containing the auto-generated keys generated by the execution of this
 *     statement.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">
 * <code>java.sql.Statement#getMaxFieldSize()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getMaxFieldSize
 * 
 * @return {IntegerNum} The current column byte size limit for columns storing character and binary values; a
 *     value of zero indictates no limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()"><code>
 * java.sql.Statement#getMaxRows()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getMaxRows
 * 
 * @return {IntegerNum} The current maximum number of rows for a result set produced by this statement; a value
 *     of 0 indicates no limit.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()">
 * <code>java.sql.Statement#getMoreResults()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getMoreResults
 * 
 * @return {Boolean} <code>true</code> if the next result is a result set; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">
 * <code>java.sql.Statement#getMoreResults(int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getMoreResults
 * 
 * @param {IntegerNum} current - A flag that indicates what happens to current result sets when retrieved. This
 *     value is one of <code>Jdbc.Statement.CLOSE_CURRENT_RESULT</code>, <code>Jdbc.Statement.KEEP_CURRENT_RESULT</code>, or <code>Jdbc.Statement.CLOSE_ALL_RESULTS</code>.
 * 
 * @return {Boolean} <code>true</code> if the next result is a result set; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">
 * <code>java.sql.Statement#getQueryTimeout()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getQueryTimeout
 * 
 * @return {IntegerNum} The current query timeout in seconds; a value of zero indicates no timeout.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()"><code>
 * java.sql.Statement#getResultSet()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getResultSet
 * 
 * @return {Jdbc.JdbcResultSet} The current result set, or <code>null</code> if the result is an update count or there are
 *     no more results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">
 * <code>java.sql.Statement#getResultSetConcurrency()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getResultSetConcurrency
 * 
 * @return {IntegerNum} The result set concurrency for result sets generated from this statement, which is
 *     either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">
 * <code>java.sql.Statement#getResultSetHoldability()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getResultSetHoldability
 * 
 * @return {IntegerNum} The result set holdability, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">
 * <code>java.sql.Statement#getResultSetType()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getResultSetType
 * 
 * @return {IntegerNum} The result set type for result sets generated from this statement, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">
 * <code>java.sql.Statement#getUpdateCount()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getUpdateCount
 * 
 * @return {IntegerNum} The current result as an update count, or -1 if the current result is a result set or
 *     if there are no more results.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()"><code>
 * java.sql.Statement#getWarnings()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#getWarnings
 * 
 * @return {String[]} The current set of warnings, or <code>null</code> if there are no warnings.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()"><code>
 * java.sql.Statement#isClosed()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#isClosed
 * 
 * @return {Boolean} <code>true</code> if this statement is closed; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()"><code>
 * java.sql.Statement#isPoolable()</code></a>.
 * 
 * @function Jdbc.JdbcStatement#isPoolable
 * 
 * @return {Boolean} <code>true</code> if this statement is poolable; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)">
 * <code>java.sql.Statement#setCursorName(String)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setCursorName
 * 
 * @param {String} name - The new cursor name, which must be unique within a connection.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">
 * <code>java.sql.Statement#setEscapeProcessing(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setEscapeProcessing
 * 
 * @param {Boolean} enable - If <code>true</code>, escape processing is enabled; otherwise it is disabled.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">
 * <code>java.sql.Statement#setFetchDirection(int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setFetchDirection
 * 
 * @param {IntegerNum} direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">
 * <code>java.sql.Statement#setFetchSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setFetchSize
 * 
 * @param {IntegerNum} rows - The number of rows to fetch.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">
 * <code>java.sql.Statement#setMaxFieldSize(int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setMaxFieldSize
 * 
 * @param {IntegerNum} max - The new column byte size limit; a value of zero indicates no limit.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)"><code>
 * java.sql.Statement#setMaxRows(int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setMaxRows
 * 
 * @param {IntegerNum} max - The maximum number of rows a result set generated by this statement can have. A
 *     value of 0 indicates no limit.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">
 * <code>java.sql.Statement#setPoolable(boolean)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setPoolable
 * 
 * @param {Boolean} poolable - If <code>true</code>, requests that this statement be pooled; otherwise requests it
 *     not be pooled.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">
 * <code>java.sql.Statement#setQueryTimeout(int)</code></a>.
 * 
 * @function Jdbc.JdbcStatement#setQueryTimeout
 * 
 * @param {IntegerNum} seconds - The new query timeout in seconds; a value of 0 indicates no timeout.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcStruct
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getAttributes()"><code>
 * java.sql.Struct#getAttributes()</code></a>.
 * 
 * @function Jdbc.JdbcStruct#getAttributes
 * 
 * @return {Object[]} The ordered attribute values of this structure.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getSQLTypeName()"><code>
 * java.sql.Struct#getSQLTypeName()</code></a>.
 * 
 * @function Jdbc.JdbcStruct#getSQLTypeName
 * 
 * @return {String} The fully-qualified type name of the SQL structured type that this structure
 *     represents.
 */



/**
 * @class Jdbc.JdbcTime
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after(java.util.Date)">
 * <code>java.sql.Date#after(Date)</code></a>.
 * 
 * @function Jdbc.JdbcTime#after
 * 
 * @param {Jdbc.JdbcTime} when - A time to compare to.
 * 
 * @return {Boolean} <code>true</code> if and only if this time is strictly later than the time specified as a
 *     parameter; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before(java.util.Date)">
 * <code>java.sql.Date#before(Date)</code></a>.
 * 
 * @function Jdbc.JdbcTime#before
 * 
 * @param {Jdbc.JdbcTime} when - A time to compare to.
 * 
 * @return {Boolean} <code>true</code> if and only if this time is strictly earlier than the time specified as a
 *     parameter; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours()"><code>
 * java.sql.Date#getHours()</code></a>.
 * 
 * @function Jdbc.JdbcTime#getHours
 * 
 * @return {IntegerNum} The hour represented by this object; the value is a number (0 through 23) representing
 *     the hour within the day that contains or begins with the instant in time represented by
 *     this object, as interpreted in the local time zone.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes()"><code>
 * java.sql.Date#getMinutes()</code></a>.
 * 
 * @function Jdbc.JdbcTime#getMinutes
 * 
 * @return {IntegerNum} The minutes past the hour represented by this object, as interpreted in the local time
 *     zone. The value is a number between 0 through 59 inclusive.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds()"><code>
 * java.sql.Date#getSeconds()</code></a>.
 * 
 * @function Jdbc.JdbcTime#getSeconds
 * 
 * @return {IntegerNum} The seconds past the minute represented by this object, as interpreted in the local
 *     time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only
 *     possible for machines that take leap seconds into account.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime()"><code>
 * java.sql.Date#getTime()</code></a>.
 * 
 * @function Jdbc.JdbcTime#getTime
 * 
 * @return {IntegerNum} The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time
 *     object.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours(int)"><code>
 * java.sql.Date#setHours(int)</code></a>.
 * 
 * @function Jdbc.JdbcTime#setHours
 * 
 * @param {IntegerNum} hours - The hour to set; this object is updated to represent a point in time within the
 *     specified hour of the day, with the year, month, date, minute, and second the same as
 *     before, as interpreted in the local time zone.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes(int)"><code>
 * java.sql.Date#setMinutes(int)</code></a>.
 * 
 * @function Jdbc.JdbcTime#setMinutes
 * 
 * @param {IntegerNum} minutes - The minutes to set; this object is updated to represent a point in time within
 *     the specified minute of the hour, with the year, month, date, hour, and second the same as
 *     before, as interpreted in the local time zone.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds(int)"><code>
 * java.sql.Date#setSeconds(int)</code></a>.
 * 
 * @function Jdbc.JdbcTime#setSeconds
 * 
 * @param {IntegerNum} seconds - The seconds to set; this object is updated to represent a point in time within
 *     the specified second of the minute, with the year, month, date, hour, and minute the same
 *     as before, as interpreted in the local time zone.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setTime(long)"><code>
 * java.sql.Time#setTime(long)</code></a>.
 * 
 * @function Jdbc.JdbcTime#setTime
 * 
 * @param {IntegerNum} milliseconds - The time value to set. The value is milliseconds since January 1, 1970,
 *     00:00:00 GMT, while a negative number is milliseconds before that time.
 * 
 * @return void
 */



/**
 * @class Jdbc.JdbcTimestamp
 */

/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#after(java.sql.Timestamp)">
 * <code>java.sql.Timestamp#after(Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#after
 * 
 * @param {Jdbc.JdbcTimestamp} when - A timestamp to compare to.
 * 
 * @return {Boolean} <code>true</code> if and only if this timestampe is strictly later than the timestamp
 *     specified as a parameter; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#before(java.sql.Timestamp)">
 * <code>java.sql.Timestamp#before(Timestamp)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#before
 * 
 * @param {Jdbc.JdbcTimestamp} when - A timestamp to compare to.
 * 
 * @return {Boolean} <code>true</code> if and only if this timestamp is strictly earlier than the timestamp
 *     specified as a parameter; <code>false</code> otherwise.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate()"><code>
 * java.sql.Date#getDate()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getDate
 * 
 * @return {IntegerNum} The day of the month represented by this timestamp. The value returned is between 1 and
 *     31 representing the day of the month that contains or begins with the instant in time
 *     represented by this timestamp, as interpreted in the local time zone.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours()"><code>
 * java.sql.Date#getHours()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getHours
 * 
 * @return {IntegerNum} The hour represented by this object; the value is a number (0 through 23) representing
 *     the hour within the day that contains or begins with the instant in time represented by
 *     this object, as interpreted in the local time zone.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes()"><code>
 * java.sql.Date#getMinutes()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getMinutes
 * 
 * @return {IntegerNum} The minutes past the hour represented by this object, as interpreted in the local time
 *     zone. The value is a number between 0 through 59 inclusive.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth()"><code>
 * java.sql.Date#getMonth()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getMonth
 * 
 * @return {IntegerNum} The month that contains or begins with the instant in time represented by this
 *     timestamp. The value returned is between 0 and 11, with the value 0 representing January.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getNanos()"><code>
 * java.sql.Timestamp#getNanos()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getNanos
 * 
 * @return {IntegerNum} This timestamp's fractional seconds value (nanoseconds).
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds()"><code>
 * java.sql.Date#getSeconds()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getSeconds
 * 
 * @return {IntegerNum} The seconds past the minute represented by this object, as interpreted in the local
 *     time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only
 *     possible for machines that take leap seconds into account.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getTime()"><code>
 * java.sql.Timestamp#getTime()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getTime
 * 
 * @return {IntegerNum} The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time
 *     object.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear()"><code>
 * java.sql.Date#getYear()</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#getYear
 * 
 * @return {IntegerNum} A value that is the result of subtracting 1900 from the year that contains or begins
 *     with the instant in time represented by this timestampe, as interpreted in the local time
 *     zone.
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate(int)"><code>
 * java.sql.Date#setDate(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setDate
 * 
 * @param {IntegerNum} date - The day of month to set. This timestamp is updated to represent a point in time
 *     within the specified day of month, with the year, month, hour, minute, and second the same
 *     as before, as interpreted in the local time zone. If the date was April 30, for example,
 *     and the date is set to 31, then it is treated as if it were on May 1, because April has
 *     only 30 days.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours(int)"><code>
 * java.sql.Date#setHours(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setHours
 * 
 * @param {IntegerNum} hours - The hour to set; this object is updated to represent a point in time within the
 *     specified hour of the day, with the year, month, date, minute, and second the same as
 *     before, as interpreted in the local time zone.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes(int)"><code>
 * java.sql.Date#setMinutes(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setMinutes
 * 
 * @param {IntegerNum} minutes - The minutes to set; this object is updated to represent a point in time within
 *     the specified minute of the hour, with the year, month, date, hour, and second the same as
 *     before, as interpreted in the local time zone.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth(int)"><code>
 * java.sql.Date#setMonth(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setMonth
 * 
 * @param {IntegerNum} month - The month to set. This timestamp is updated to represent a point in time within
 *     the specified month, with the year, date, hour, minute, and second the same as before, as
 *     interpreted in the local time zone. If the date was October 31, for example, and the month
 *     is set to June, then the new date is treated as if it were on July 1, because June has only
 *     30 days.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setNanos(int)"><code>
 * java.sql.Timestamp#setNanos(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setNanos
 * 
 * @param {IntegerNum} nanoseconds - The new fractional seconds value.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds(int)"><code>
 * java.sql.Date#setSeconds(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setSeconds
 * 
 * @param {IntegerNum} seconds - The seconds to set; this object is updated to represent a point in time within
 *     the specified second of the minute, with the year, month, date, hour, and minute the same
 *     as before, as interpreted in the local time zone.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setTime(long)"><code>
 * java.sql.Timestamp#setTime(long)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setTime
 * 
 * @param {IntegerNum} milliseconds - The time value to set. The value is milliseconds since January 1, 1970,
 *     00:00:00 GMT.
 * 
 * @return void
 */


/**
 * For documentation of this method, see <a
 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear(int)"><code>
 * java.sql.Date#setYear(int)</code></a>.
 * 
 * @function Jdbc.JdbcTimestamp#setYear
 * 
 * @param {IntegerNum} year - The year value to set; the timestamp's year is set to this value plus 1900. This
 *     timestamp is updated to represent a point in time within the specified year, with the
 *     month, date, hour, minute, and second the same as before, as interpreted in the local time
 *     zone. If the date was February 29, for example, and the year is set to a non-leap year,
 *     then the new date is treated as if it were on March 1.
 * 
 * @return void
 */



