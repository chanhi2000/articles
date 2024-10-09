import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as h,e,n as m,g,w as o,d as s,f as i,r as a,o as k}from"./app-BgNevrm5.js";const y={},b={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},v={class:"table-of-contents"},w=n("hr",null,null,-1),x=i('<p>In this section, we’ll discuss how to handle errors and exceptions when working with SQLite in Python. Proper error handling is crucial for maintaining the integrity of your database and ensuring that your application behaves predictably.</p><hr><h2 id="common-errors-in-sqlite-operations" tabindex="-1"><a class="header-anchor" href="#common-errors-in-sqlite-operations"><span>Common Errors in SQLite Operations</span></a></h2><p>When interacting with an SQLite database, several common errors may arise:</p><ol><li><strong>Constraint Violations</strong>: This occurs when you try to insert or update data that violates a database constraint, such as primary key uniqueness or foreign key constraints. For example, trying to insert a duplicate primary key will trigger an error.</li><li><strong>Data Type Mismatches</strong>: Attempting to insert data of the wrong type (for example, inserting a string where a number is expected) can lead to an error.</li><li><strong>Database Locked Errors</strong>: If a database is being written to by another process or connection, trying to access it can result in a &quot;database is locked&quot; error.</li><li><strong>Syntax Errors</strong>: Mistakes in your SQL syntax will result in errors when you try to execute your commands.</li></ol><hr><h2 id="how-to-use-python-s-exception-handling" tabindex="-1"><a class="header-anchor" href="#how-to-use-python-s-exception-handling"><span>How to Use Python&#39;s Exception Handling</span></a></h2>',7),_={href:"https://blog.ashutoshkrris.in/exception-handling-in-python",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"try",-1),q=n("code",null,"except",-1),H=i(`<p>Here’s a basic example of how to handle errors when inserting data into the database:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> sqlite3</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add_customer_with_error_handling</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> balance<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;Add a new customer with error handling.&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">with</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;my_database.db&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span></span>
<span class="line">            cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span></span>
<span class="line">                <span class="token string">&quot;INSERT INTO Customers (name, balance) VALUES (?, ?);&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> balance<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            connection<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Added customer: </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string"> with balance: </span><span class="token interpolation"><span class="token punctuation">{</span>balance<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">except</span> sqlite3<span class="token punctuation">.</span>IntegrityError <span class="token keyword">as</span> e<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Error: Integrity constraint violated - </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">except</span> sqlite3<span class="token punctuation">.</span>OperationalError <span class="token keyword">as</span> e<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Error: Operational issue - </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;An unexpected error occurred: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Example usage</span></span>
<span class="line">add_customer_with_error_handling<span class="token punctuation">(</span><span class="token string">&#39;Vishakha&#39;</span><span class="token punctuation">,</span> <span class="token number">100.0</span><span class="token punctuation">)</span>  <span class="token comment"># Valid</span></span>
<span class="line">add_customer_with_error_handling<span class="token punctuation">(</span><span class="token string">&#39;Vishakha&#39;</span><span class="token punctuation">,</span> <span class="token number">150.0</span><span class="token punctuation">)</span>  <span class="token comment"># Duplicate entry</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example:</p><ul><li>We catch <code>IntegrityError</code>, which is raised for violations like unique constraints.</li><li>We catch <code>OperationalError</code> for general database-related issues (like database locked errors).</li><li>We also have a generic <code>except</code> block to handle any unexpected exceptions.</li></ul><p>Output:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Added customer: Vishakha with balance: 100.0</span>
<span class="line">Error: Integrity constraint violated - UNIQUE constraint failed: Customers.name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="best-practices-for-ensuring-database-integrity" tabindex="-1"><a class="header-anchor" href="#best-practices-for-ensuring-database-integrity"><span>Best Practices for Ensuring Database Integrity</span></a></h2><ol><li><strong>Use Transactions</strong>: Always use transactions (as discussed in the previous section) when performing multiple related operations. This helps ensure that either all operations succeed or none do, maintaining consistency.</li><li><strong>Validate Input Data</strong>: Before executing SQL commands, validate the input data to ensure it meets the expected criteria (for example, correct types, within allowable ranges).</li><li><strong>Catch Specific Exceptions</strong>: Always catch specific exceptions to handle different types of errors appropriately. This allows for clearer error handling and debugging.</li><li><strong>Log Errors</strong>: Instead of just printing errors to the console, consider logging them to a file or monitoring system. This will help you track issues in production.</li><li><strong>Graceful Degradation</strong>: Design your application to handle errors gracefully. If an operation fails, provide meaningful feedback to the user rather than crashing the application.</li><li><strong>Regularly Backup Data</strong>: Regularly back up your database to prevent data loss in case of critical failures or corruption.</li><li><strong>Use Prepared Statements</strong>: Prepared statements help prevent SQL injection attacks and can also provide better performance for repeated queries.</li></ol>`,9);function S(r,A){const p=a("VPCard"),t=a("router-link"),l=a("SiteInfo"),c=a("FontIcon");return k(),u("div",null,[n("h1",b,[n("a",f,[n("span",null,h(r.$frontmatter.title)+" 관련",1)])]),e(p,m(g({title:"How to Work with SQLite in Python – A Handbook for Beginners",desc:"SQLite is one of the most popular relational database management systems (RDBMS). It’s lightweight, meaning that it doesn’t take up much space on your system. One of its best features is that it’s serverless, so you don’t need to install or manage a ...",link:"/freecodecamp.org/work-with-sqlite-in-python-handbook/README.md",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",background:"rgba(10,10,35,0.2)"})),null,16),n("nav",v,[n("ul",null,[n("li",null,[e(t,{to:"#common-errors-in-sqlite-operations"},{default:o(()=>[s("Common Errors in SQLite Operations")]),_:1})]),n("li",null,[e(t,{to:"#how-to-use-python-s-exception-handling"},{default:o(()=>[s("How to Use Python's Exception Handling")]),_:1})]),n("li",null,[e(t,{to:"#best-practices-for-ensuring-database-integrity"},{default:o(()=>[s("Best Practices for Ensuring Database Integrity")]),_:1})])])]),w,e(l,{name:"How to Work with SQLite in Python – A Handbook for Beginners",desc:"SQLite is one of the most popular relational database management systems (RDBMS). It’s lightweight, meaning that it doesn’t take up much space on your system. One of its best features is that it’s serverless, so you don’t need to install or manage a ...",url:"https://freecodecamp.org/news/work-with-sqlite-in-python-handbook/",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",preview:"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}),x,n("p",null,[s("Python’s built-in "),n("a",_,[e(c,{icon:"fas fa-globe"}),s("exception handling")]),s(" mechanisms ("),E,s(" and "),q,s(") are essential for managing errors in SQLite operations. By using these constructs, you can catch exceptions and respond appropriately without crashing your program.")]),H])}const L=d(y,[["render",S],["__file","how-to-handle-errors-and-exceptions.html.vue"]]),Q=JSON.parse(`{"path":"/freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-handle-errors-and-exceptions.html","title":"How to Handle Errors and Exceptions","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to Handle Errors and Exceptions","description":"Article(s) > (9/11) How to Work with SQLite in Python – A Handbook for Beginners","category":["Python","SQLite","Article(s)"],"tag":["blog","freecodecamp.org","py","python","sqlite"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > (9/11) How to Work with SQLite in Python – A Handbook for Beginners"},{"property":"og:description","content":"How to Handle Errors and Exceptions"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-handle-errors-and-exceptions.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-handle-errors-and-exceptions.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to Handle Errors and Exceptions"}],["meta",{"property":"og:description","content":"Article(s) > (9/11) How to Work with SQLite in Python – A Handbook for Beginners"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}],["meta",{"name":"twitter:image:alt","content":"How to Handle Errors and Exceptions"}],["meta",{"property":"article:author","content":"Ashutosh Krishna"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"freecodecamp.org"}],["meta",{"property":"article:tag","content":"py"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"sqlite"}],["meta",{"property":"article:published_time","content":"2024-10-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to Handle Errors and Exceptions\\",\\"image\\":[\\"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png\\"],\\"datePublished\\":\\"2024-10-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ashutosh Krishna\\"}]}"]],"date":"2024-10-02T00:00:00.000Z","isOriginal":false,"author":"Ashutosh Krishna","cover":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"},"headers":[{"level":2,"title":"Common Errors in SQLite Operations","slug":"common-errors-in-sqlite-operations","link":"#common-errors-in-sqlite-operations","children":[]},{"level":2,"title":"How to Use Python's Exception Handling","slug":"how-to-use-python-s-exception-handling","link":"#how-to-use-python-s-exception-handling","children":[]},{"level":2,"title":"Best Practices for Ensuring Database Integrity","slug":"best-practices-for-ensuring-database-integrity","link":"#best-practices-for-ensuring-database-integrity","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":1}]},"readingTime":{"minutes":2.71,"words":812},"filePathRelative":"freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-handle-errors-and-exceptions.md","localizedDate":"2024년 10월 2일","excerpt":"\\n","copyright":{"author":"Ashutosh Krishna"}}`);export{L as comp,Q as data};
