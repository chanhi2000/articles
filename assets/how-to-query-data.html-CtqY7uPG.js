import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as d,e as s,n as u,g as m,w as e,f as h,r as l,o as v,d as t}from"./app-BgNevrm5.js";const b={},k={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},w=n("hr",null,null,-1),f=h(`<p>Now that we’ve inserted some data into our <code>Students</code> table, let’s learn how to retrieve the data from the table. We&#39;ll explore different methods for fetching data in Python, including <code>fetchone()</code>, <code>fetchall()</code>, and <code>fetchmany()</code>.</p><p>To query data from a table, we use the <code>SELECT</code> statement. Here’s a simple SQL command to select all columns from the <code>Students</code> table:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Students<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This command retrieves all records and columns from the <code>Students</code> table. We can execute this <code>SELECT</code> query in Python and fetch the results.</p><hr><h2 id="how-to-fetch-all-records" tabindex="-1"><a class="header-anchor" href="#how-to-fetch-all-records"><span>How to Fetch All Records</span></a></h2><p>Here’s how we can fetch all records from the <code>Students</code> table:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> sqlite3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Use &#39;with&#39; to connect to the SQLite database</span></span>
<span class="line"><span class="token keyword">with</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;my_database.db&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Create a cursor object</span></span>
<span class="line">    cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Write the SQL command to select all records from the Students table</span></span>
<span class="line">    select_query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM Students;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Execute the SQL command</span></span>
<span class="line">    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>select_query<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Fetch all records</span></span>
<span class="line">    all_students <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Display results in the terminal</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;All Students:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> student <span class="token keyword">in</span> all_students<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code>fetchall()</code> method retrieves all rows returned by the query as a list of tuples.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">All Students:</span>
<span class="line">(1, &#39;Jane Doe&#39;, 23, &#39;jane@example.com&#39;)</span>
<span class="line">(2, &#39;Bahadurjit Sabharwal&#39;, 18, &#39;tristanupadhyay@example.net&#39;)</span>
<span class="line">(3, &#39;Zayyan Arya&#39;, 20, &#39;yashawinibhakta@example.org&#39;)</span>
<span class="line">(4, &#39;Hemani Shukla&#39;, 18, &#39;gaurikanarula@example.com&#39;)</span>
<span class="line">(5, &#39;Warda Kara&#39;, 20, &#39;npatil@example.net&#39;)</span>
<span class="line">(6, &#39;Mitali Nazareth&#39;, 19, &#39;sparekh@example.org&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="how-to-fetch-a-single-record" tabindex="-1"><a class="header-anchor" href="#how-to-fetch-a-single-record"><span>How to Fetch a Single Record</span></a></h2><p>If you want to retrieve only one record, you can use the <code>fetchone()</code> method:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> sqlite3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Use &#39;with&#39; to connect to the SQLite database</span></span>
<span class="line"><span class="token keyword">with</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;my_database.db&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Create a cursor object</span></span>
<span class="line">    cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Write the SQL command to select all records from the Students table</span></span>
<span class="line">    select_query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM Students;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Execute the SQL command</span></span>
<span class="line">    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>select_query<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Fetch one record</span></span>
<span class="line">    student <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Display the result</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;First Student:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">First Student:</span>
<span class="line">(1, &#39;Jane Doe&#39;, 23, &#39;jane@example.com&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="how-to-fetch-multiple-records" tabindex="-1"><a class="header-anchor" href="#how-to-fetch-multiple-records"><span>How to Fetch Multiple Records</span></a></h2><p>To fetch a specific number of records, you can use <code>fetchmany(size)</code>:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> sqlite3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Use &#39;with&#39; to connect to the SQLite database</span></span>
<span class="line"><span class="token keyword">with</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;my_database.db&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Create a cursor object</span></span>
<span class="line">    cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Write the SQL command to select all records from the Students table</span></span>
<span class="line">    select_query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM Students;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Execute the SQL command</span></span>
<span class="line">    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>select_query<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Fetch three records</span></span>
<span class="line">    three_students <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchmany<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Display results</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Three Students:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> student <span class="token keyword">in</span> three_students<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Three Students:</span>
<span class="line">(1, &#39;Jane Doe&#39;, 23, &#39;jane@example.com&#39;)</span>
<span class="line">(2, &#39;Bahadurjit Sabharwal&#39;, 18, &#39;tristanupadhyay@example.net&#39;)</span>
<span class="line">(3, &#39;Zayyan Arya&#39;, 20, &#39;yashawinibhakta@example.org&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="how-to-use-pandas-for-better-data-presentation" tabindex="-1"><a class="header-anchor" href="#how-to-use-pandas-for-better-data-presentation"><span>How to Use <code>pandas</code> for Better Data Presentation</span></a></h2><p>For better data presentation, we can use the <code>pandas</code> library to create a <code>DataFrame</code> from our query results. This makes it easier to manipulate and visualize the data.</p><p>Here’s how to fetch all records and display them as a pandas DataFrame:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> sqlite3</span>
<span class="line"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Use &#39;with&#39; to connect to the SQLite database</span></span>
<span class="line"><span class="token keyword">with</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;my_database.db&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># Write the SQL command to select all records from the Students table</span></span>
<span class="line">    select_query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM Students;&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Use pandas to read SQL query directly into a DataFrame</span></span>
<span class="line">    df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_sql_query<span class="token punctuation">(</span>select_query<span class="token punctuation">,</span> connection<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Display the DataFrame</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;All Students as DataFrame:&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">All Students as DataFrame:</span>
<span class="line">    id                  name  age                        email</span>
<span class="line">0   1              Jane Doe   23             jane@example.com</span>
<span class="line">1   2  Bahadurjit Sabharwal   18  tristanupadhyay@example.net</span>
<span class="line">2   3           Zayyan Arya   20  yashawinibhakta@example.org</span>
<span class="line">3   4         Hemani Shukla   18    gaurikanarula@example.com</span>
<span class="line">4   5            Warda Kara   20           npatil@example.net</span>
<span class="line">5   6       Mitali Nazareth   19          sparekh@example.org</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>pd.read_sql_query()</code> function executes the SQL query and directly returns the results as a pandas DataFrame.</p>`,30);function S(o,q){const i=l("VPCard"),a=l("router-link"),p=l("SiteInfo");return v(),r("div",null,[n("h1",k,[n("a",y,[n("span",null,d(o.$frontmatter.title)+" 관련",1)])]),s(i,u(m({title:"How to Work with SQLite in Python – A Handbook for Beginners",desc:"SQLite is one of the most popular relational database management systems (RDBMS). It’s lightweight, meaning that it doesn’t take up much space on your system. One of its best features is that it’s serverless, so you don’t need to install or manage a ...",link:"/freecodecamp.org/work-with-sqlite-in-python-handbook/README.md",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",background:"rgba(10,10,35,0.2)"})),null,16),n("nav",g,[n("ul",null,[n("li",null,[s(a,{to:"#how-to-fetch-all-records"},{default:e(()=>[t("How to Fetch All Records")]),_:1})]),n("li",null,[s(a,{to:"#how-to-fetch-a-single-record"},{default:e(()=>[t("How to Fetch a Single Record")]),_:1})]),n("li",null,[s(a,{to:"#how-to-fetch-multiple-records"},{default:e(()=>[t("How to Fetch Multiple Records")]),_:1})]),n("li",null,[s(a,{to:"#how-to-use-pandas-for-better-data-presentation"},{default:e(()=>[t("How to Use pandas for Better Data Presentation")]),_:1})])])]),w,s(p,{name:"How to Work with SQLite in Python – A Handbook for Beginners",desc:"SQLite is one of the most popular relational database management systems (RDBMS). It’s lightweight, meaning that it doesn’t take up much space on your system. One of its best features is that it’s serverless, so you don’t need to install or manage a ...",url:"https://freecodecamp.org/news/work-with-sqlite-in-python-handbook/",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",preview:"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}),f])}const H=c(b,[["render",S],["__file","how-to-query-data.html.vue"]]),D=JSON.parse('{"path":"/freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-query-data.html","title":"How to Query Data","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to Query Data","description":"Article(s) > (5/11) How to Work with SQLite in Python – A Handbook for Beginners","category":["Python","SQLite","Article(s)"],"tag":["blog","freecodecamp.org","py","python","sqlite"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > (5/11) How to Work with SQLite in Python – A Handbook for Beginners"},{"property":"og:description","content":"How to Query Data"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-query-data.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-query-data.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to Query Data"}],["meta",{"property":"og:description","content":"Article(s) > (5/11) How to Work with SQLite in Python – A Handbook for Beginners"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}],["meta",{"name":"twitter:image:alt","content":"How to Query Data"}],["meta",{"property":"article:author","content":"Ashutosh Krishna"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"freecodecamp.org"}],["meta",{"property":"article:tag","content":"py"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"sqlite"}],["meta",{"property":"article:published_time","content":"2024-10-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to Query Data\\",\\"image\\":[\\"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png\\"],\\"datePublished\\":\\"2024-10-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ashutosh Krishna\\"}]}"]],"date":"2024-10-02T00:00:00.000Z","isOriginal":false,"author":"Ashutosh Krishna","cover":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"},"headers":[{"level":2,"title":"How to Fetch All Records","slug":"how-to-fetch-all-records","link":"#how-to-fetch-all-records","children":[]},{"level":2,"title":"How to Fetch a Single Record","slug":"how-to-fetch-a-single-record","link":"#how-to-fetch-a-single-record","children":[]},{"level":2,"title":"How to Fetch Multiple Records","slug":"how-to-fetch-multiple-records","link":"#how-to-fetch-multiple-records","children":[]},{"level":2,"title":"How to Use pandas for Better Data Presentation","slug":"how-to-use-pandas-for-better-data-presentation","link":"#how-to-use-pandas-for-better-data-presentation","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":1}]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"freecodecamp.org/work-with-sqlite-in-python-handbook/how-to-query-data.md","localizedDate":"2024년 10월 2일","excerpt":"\\n","copyright":{"author":"Ashutosh Krishna"}}');export{H as comp,D as data};
