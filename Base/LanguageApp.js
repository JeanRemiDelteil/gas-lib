var LanguageApp = {};


/**
 * Automatically translates some text from a source language to a destination language.

 <pre class="prettyprint"><code>
 // The code below will write &quot;Esta es una prueba&quot; to the log.
   var spanish = LanguageApp.translate(&#39;This is a test&#39;, &#39;en&#39;, &#39;es&#39;);
   Logger.log(spanish);
 </code></pre>

 A list of language codes is available <a href="/translate/v2/using_rest#language-params">
 here</a>.
 *
 * @param {String} text - the text to translate
 * @param {String} sourceLanguage - the language code in which text is written. If it is set to the empty
     string, the source language code will be auto-detected
 * @param {String} targetLanguage - the language code to which the text should be translated
 *
 * @return {String} the translated text
 */
LanguageApp.translate = function(text, sourceLanguage, targetLanguage){};

