import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as u,e as a,n as d,g as m,w as e,f as h,r as o,o as k,d as t}from"./app-BgNevrm5.js";const g={},v={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},y=n("hr",null,null,-1),w=h(`<p>The &quot;comma ok&quot; idiom and the package system are two fundamental concepts in Go. They help enhance the readability of your code, and reflect Go&#39;s philosophy of simplicity and explicitness.</p><p>In this article, you&#39;ll learn about both the comma ok idiom and package system. We&#39;ll talk about what they are and how they work, and I&#39;ll show some examples along the way.</p><hr><h2 id="what-is-the-comma-ok-idiom" tabindex="-1"><a class="header-anchor" href="#what-is-the-comma-ok-idiom"><span>What is the Comma OK Idiom?</span></a></h2><p>The comma OK idiom, also known as the comma ok pattern, is a construct used in specific situations in Go. In these situations, an operation might return an optional value and the second return value will be a boolean (ok) indicating whether the operation succeeded or not.</p><p>The Comma Ok idiom follows a specific syntax:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> expression</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>value</code> represents the outcome of the operation if it&#39;s successful. The second return value, <code>ok</code>, indicates whether the action was successful, that is true or false. Finally, \`expression is the operation being performed, which typically involves a lookup, type assertion, channel receive, or any function that might fail.</p><p>When dealing with error handling, a similar pattern is used:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">value<span class="token punctuation">,</span> err <span class="token operator">:=</span> expression</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>err</code> represents an error if one occurred; otherwise, it is nil. This pattern is commonly used for functions that may fail and return an error.</p><p>Let’s take a look at an example using the comma ok idiom:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  myMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> myMap<span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> ok <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Value found:&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token comment">// Output: Value found: 5</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Key not found&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  value<span class="token punctuation">,</span> ok <span class="token operator">=</span> myMap<span class="token punctuation">[</span><span class="token string">&quot;cherry&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> ok <span class="token punctuation">{</span></span>
<span class="line">   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Value found:&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Key not found&quot;</span><span class="token punctuation">)</span> <span class="token comment">// Output: Key not found</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, we retrieve a value from the map using a key and determine if the key exists in the map using the Comma OK idiom.</p><p>If the key exists, then <code>ok</code> returns true, and the value is printed. If the key doesn&#39;t exist, then <code>ok</code> returns false, and the message &quot;Key not found&quot; is printed.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;fmt&quot;</span></span>
<span class="line">  <span class="token string">&quot;strconv&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> num<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Successfully converted to number: %d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Conversion failed: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> num<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Successfully converted to number: %d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Conversion failed: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the ok error pattern is used to handle potential errors that might occur during the execution of the <code>strconv.Atoi</code> function.</p><p>The <code>num, err := strconv.Atoi(&quot;123&quot;)</code> attempts to convert a string to an integer. If the conversion succeeds, <code>err</code> is nil, and num contains the converted number. If the conversion fails, &#39;err&#39; contains an error message indicating what went wrong, and num is 0.</p><h3 id="use-cases-of-the-comma-ok-idiom" tabindex="-1"><a class="header-anchor" href="#use-cases-of-the-comma-ok-idiom"><span>Use Cases of the Comma OK Idiom</span></a></h3><p>Below are some use cases of the OK syntax:</p><h4 id="map-key-lookup" tabindex="-1"><a class="header-anchor" href="#map-key-lookup"><span>Map Key Lookup</span></a></h4><p>When retrieving a value from a map, the Comma OK idiom allows you to check if the key exists in the map.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> myMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">if</span> ok <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value found: %v\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Key not found in map&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It allows you to differentiate between a key that doesn&#39;t exist and a key that exists with a zero value, thereby avoiding incorrect assumptions in your code.</p><h4 id="type-assertions" tabindex="-1"><a class="header-anchor" href="#type-assertions"><span>Type Assertions</span></a></h4><p>When working with interfaces, you can use the Comma OK idiom to safely attempt type assertions. For example:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span></span>
<span class="line">s<span class="token punctuation">,</span> ok <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> ok <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;i&#39; is a string: %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;i&#39; is not a string&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows you to check if an interface value holds a specific type without causing panic if the assertion fails.</p><h4 id="reading-from-channels" tabindex="-1"><a class="header-anchor" href="#reading-from-channels"><span>Reading from Channels</span></a></h4><p>When reading from a channel, you can use the Comma OK idiom to check if the channel has been closed.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch</span>
<span class="line"><span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Channel is closed&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Received value: %v\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This helps distinguish between a zero value received from an open channel and a zero value received because the channel is closed.</p><h4 id="comma-ok-with-blank-identifier" tabindex="-1"><a class="header-anchor" href="#comma-ok-with-blank-identifier"><span>Comma OK with Blank Identifier</span></a></h4><p>You can use the blank identifier (<code>_</code>) when you only care about the boolean result of the Comma OK idiom and don’t need to use the value itself.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> myMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Key exists in map&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows you to check for the existence of a key without assigning the value to a variable. This is particularly useful when the value is not needed but you still want to confirm the presence of the key.</p><hr><h2 id="package-system-in-go" tabindex="-1"><a class="header-anchor" href="#package-system-in-go"><span>Package System in Go</span></a></h2><p>In Go, a package is a collection of compiled source files from the same directory. It&#39;s the basic unit of code reusability and organization in Go.</p><p>Packages allow you to structure your codebase in a logical and maintainable manner. With packages, you can easily manage dependencies and reduce the amount of code you have to write. You can also use packages to encapsulate your code, providing for explicit interfaces and obscuring implementation details.</p><h3 id="how-to-declare-a-package-in-go" tabindex="-1"><a class="header-anchor" href="#how-to-declare-a-package-in-go"><span>How to Declare a Package in Go</span></a></h3><p>In Go, every code file begins with a package declaration, which specifies the package to which the file belongs. This declaration often appears like this:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> mypackage</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If a package is meant to be an executable program, its name should be <code>main.</code></p><p>One of the main purposes of declaring a package is to determine the default identifier for that package when it is imported by another package.</p><h3 id="package-naming-conventions" tabindex="-1"><a class="header-anchor" href="#package-naming-conventions"><span>Package Naming Conventions</span></a></h3><p>Below are some naming convention rules for packages:</p><ul><li>Package names should be brief, meaningful, and written in lowercase characters without underscores or mixed caps.</li><li>Use lowercase, single-word names.</li><li>The package name should not clash with any other package in the Go standard library.</li></ul><h3 id="built-in-packages" tabindex="-1"><a class="header-anchor" href="#built-in-packages"><span>Built-in Packages</span></a></h3><p>Go comes with a rich standard library with a collection of packages that cover a wide range of functionalities, including file handling, network connection, and text processing. This library allows you to accomplish many tasks without needing external dependencies.</p><p>Below are some commonly used packages:</p><ul><li><strong>fmt:</strong> Formatted I/O with functions similar to C&#39;s <code>printf</code> and <code>scanf</code>.</li><li><strong>os</strong>: Provides a platform-independent interface to operating system functionality.</li><li><strong>io:</strong> Basic interfaces to I/O primitives.</li><li><strong>net/http:</strong> HTTP client and server implementations.</li><li><strong>encoding/json:</strong> JSON encoding and decoding.</li></ul><h3 id="how-to-create-custom-packages-in-go" tabindex="-1"><a class="header-anchor" href="#how-to-create-custom-packages-in-go"><span>How to Create Custom Packages in Go</span></a></h3><p>When creating custom packages, it&#39;s important for you to follow a clear folder structure. Each package resides in its own directory, and the directory name should match the package name.</p><p>File names in a package should be descriptive and represent their content or usefulness. The folder names should all be lowercase, with no special characters or underscores. The main.go serves as a perfect example, it has no special characters or underscores and starts with a lowercase letter.</p><p>In Go, only identifiers (functions, types, variables, constants) that start with an uppercase letter are exported and accessible outside the package. This approach enables encapsulation, which hides internal implementation details.</p><h3 id="how-to-import-a-package-in-go" tabindex="-1"><a class="header-anchor" href="#how-to-import-a-package-in-go"><span>How to Import a Package in Go</span></a></h3><p>To import a package, use the <code>import</code> keyword followed by its path. You can import multiple packages within parenthesis, which is the typical way of doing it.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;Fmt&quot;</span></span>
<span class="line">  <span class="token string">&quot;os&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dot imports allow you to import a package&#39;s identifiers straight into the current namespace, without having to prefix them with the package name. For example:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the dot import allowed us to use the <code>Println</code> function directly without the <code>fmt</code> Prefix.</p><p>While this seems cool, you should use it cautiously, as it can cause confusion.</p><p>Another way to import a package is through the alias import technique. This allows you to rename a package upon import to avoid conflicts or improve code clarity:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> io <span class="token string">&quot;io/ioutil&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Lastly, you can use the blank identifier technique. This can be useful in situations when you want to import a package solely for its side effects (such as initializing variables or registering types).</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token boolean">_</span> <span class="token string">&quot;net/http/pprof&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="how-to-initialize-a-package-in-go" tabindex="-1"><a class="header-anchor" href="#how-to-initialize-a-package-in-go"><span>How to Initialize a Package in Go</span></a></h3><p>The primary way to initialize a function is by using the init function. The <code>init()</code> function is a special function in Go that is automatically executed when a package is imported. It&#39;s used to perform package-level initialization operations, including configuration setup and variable initialization.</p><p>When it comes to the order of initialization, Go ensures that packages are initialized in a specific order:</p><ul><li>Dependencies are initialized first.</li><li>The <code>init()</code> functions within a package are executed in the order they are defined.</li><li>The <code>main()</code> function is called last when the main package is executed.</li></ul><hr><h2 id="that-s-a-wrap" tabindex="-1"><a class="header-anchor" href="#that-s-a-wrap"><span>That&#39;s a Wrap!</span></a></h2><p>In this article, we looked at what the comma ok idiom is along with its use cases. We also talked about packages and naming conventions.</p><p>Mastering the &quot;comma ok&quot; idiom and understanding Go&#39;s package system is a must for any Go developer. Both of these concepts not only improve code readability but also make your code easier to maintain and less prone to errors.</p>`,75);function q(i,x){const p=o("VPCard"),s=o("router-link"),l=o("SiteInfo");return k(),r("div",null,[n("h1",v,[n("a",f,[n("span",null,u(i.$frontmatter.title)+" 관련",1)])]),a(p,d(m({title:"Go > Article(s)",desc:"Article(s)",link:"/programming/go/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",b,[n("ul",null,[n("li",null,[a(s,{to:"#what-is-the-comma-ok-idiom"},{default:e(()=>[t("What is the Comma OK Idiom?")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#use-cases-of-the-comma-ok-idiom"},{default:e(()=>[t("Use Cases of the Comma OK Idiom")]),_:1})])])]),n("li",null,[a(s,{to:"#package-system-in-go"},{default:e(()=>[t("Package System in Go")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#how-to-declare-a-package-in-go"},{default:e(()=>[t("How to Declare a Package in Go")]),_:1})]),n("li",null,[a(s,{to:"#package-naming-conventions"},{default:e(()=>[t("Package Naming Conventions")]),_:1})]),n("li",null,[a(s,{to:"#built-in-packages"},{default:e(()=>[t("Built-in Packages")]),_:1})]),n("li",null,[a(s,{to:"#how-to-create-custom-packages-in-go"},{default:e(()=>[t("How to Create Custom Packages in Go")]),_:1})]),n("li",null,[a(s,{to:"#how-to-import-a-package-in-go"},{default:e(()=>[t("How to Import a Package in Go")]),_:1})]),n("li",null,[a(s,{to:"#how-to-initialize-a-package-in-go"},{default:e(()=>[t("How to Initialize a Package in Go")]),_:1})])])]),n("li",null,[a(s,{to:"#that-s-a-wrap"},{default:e(()=>[t("That's a Wrap!")]),_:1})])])]),y,a(l,{name:"How the Comma Ok Idiom and Package System Work in Go",desc:"The 'comma ok' idiom and the package system are two fundamental concepts in Go. They help enhance the readability of your code, and reflect Go's philosophy of simplicity and explicitness. In this article, you'll learn about both the comma ok idiom an...",url:"https://freecodecamp.org/news/how-the-comma-ok-idiom-and-package-system-work-in-go/",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",preview:"https://cdn.hashnode.com/res/hashnode/image/upload/v1725897093899/c5eaedaf-7695-4eb8-b0a8-f3d6efffc2a8.png"}),w])}const C=c(g,[["render",q],["__file","how-the-comma-ok-idiom-and-package-system-work-in-go.html.vue"]]),_=JSON.parse(`{"path":"/freecodecamp.org/how-the-comma-ok-idiom-and-package-system-work-in-go.html","title":"How the Comma Ok Idiom and Package System Work in Go","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How the Comma Ok Idiom and Package System Work in Go","description":"Article(s) > How the Comma Ok Idiom and Package System Work in Go","icon":"fa-brands fa-golang","category":["Go","Article(s)"],"tag":["blog","freecodecamp.org","go","golang"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How the Comma Ok Idiom and Package System Work in Go"},{"property":"og:description","content":"How the Comma Ok Idiom and Package System Work in Go"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/how-the-comma-ok-idiom-and-package-system-work-in-go.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/how-the-comma-ok-idiom-and-package-system-work-in-go.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How the Comma Ok Idiom and Package System Work in Go"}],["meta",{"property":"og:description","content":"Article(s) > How the Comma Ok Idiom and Package System Work in Go"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1725897093899/c5eaedaf-7695-4eb8-b0a8-f3d6efffc2a8.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1725897093899/c5eaedaf-7695-4eb8-b0a8-f3d6efffc2a8.png"}],["meta",{"name":"twitter:image:alt","content":"How the Comma Ok Idiom and Package System Work in Go"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"freecodecamp.org"}],["meta",{"property":"article:tag","content":"go"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2024-09-09T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How the Comma Ok Idiom and Package System Work in Go\\",\\"image\\":[\\"https://cdn.hashnode.com/res/hashnode/image/upload/v1725897093899/c5eaedaf-7695-4eb8-b0a8-f3d6efffc2a8.png\\"],\\"datePublished\\":\\"2024-09-09T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/programming/go/articles/README.md","date":"2024-09-09T00:00:00.000Z","isOriginal":false,"cover":"https://cdn.hashnode.com/res/hashnode/image/upload/v1725897093899/c5eaedaf-7695-4eb8-b0a8-f3d6efffc2a8.png"},"headers":[{"level":2,"title":"What is the Comma OK Idiom?","slug":"what-is-the-comma-ok-idiom","link":"#what-is-the-comma-ok-idiom","children":[{"level":3,"title":"Use Cases of the Comma OK Idiom","slug":"use-cases-of-the-comma-ok-idiom","link":"#use-cases-of-the-comma-ok-idiom","children":[]}]},{"level":2,"title":"Package System in Go","slug":"package-system-in-go","link":"#package-system-in-go","children":[{"level":3,"title":"How to Declare a Package in Go","slug":"how-to-declare-a-package-in-go","link":"#how-to-declare-a-package-in-go","children":[]},{"level":3,"title":"Package Naming Conventions","slug":"package-naming-conventions","link":"#package-naming-conventions","children":[]},{"level":3,"title":"Built-in Packages","slug":"built-in-packages","link":"#built-in-packages","children":[]},{"level":3,"title":"How to Create Custom Packages in Go","slug":"how-to-create-custom-packages-in-go","link":"#how-to-create-custom-packages-in-go","children":[]},{"level":3,"title":"How to Import a Package in Go","slug":"how-to-import-a-package-in-go","link":"#how-to-import-a-package-in-go","children":[]},{"level":3,"title":"How to Initialize a Package in Go","slug":"how-to-initialize-a-package-in-go","link":"#how-to-initialize-a-package-in-go","children":[]}]},{"level":2,"title":"That's a Wrap!","slug":"that-s-a-wrap","link":"#that-s-a-wrap","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.74,"words":1721},"filePathRelative":"freecodecamp.org/how-the-comma-ok-idiom-and-package-system-work-in-go.md","localizedDate":"2024년 9월 9일","excerpt":"\\n"}`);export{C as comp,_ as data};
