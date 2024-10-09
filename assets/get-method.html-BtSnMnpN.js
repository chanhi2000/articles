import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as e,t as d,e as a,n as h,g as u,w as n,f as g,r as o,o as m,d as s}from"./app-BgNevrm5.js";const f={},v={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},T=e("hr",null,null,-1),E=g(`<p>The GET method is one of the most common HTTP methods and is used to request data from a server. Think of it as asking for information without changing anything.</p><p>When you visit a webpage, your browser sends a GET request to the server asking for the content of the page. The server then responds with the data (such as HTML, images, or other files) that the browser displays.</p><p>One important thing about GET is that it doesn&#39;t make any changes to the data. It simply &quot;reads&quot; or retrieves the information. For example, when you browse through social media or search for products online, the app or website uses GET to display data without altering it.</p><p>Another key point is that GET requests send parameters in the URL itself. This means any data you&#39;re asking for is visible in the browser&#39;s address bar. For example, if you&#39;re searching for a product on an online store, the search term is included in the URL.</p><hr><h2 id="example-of-a-get-request" tabindex="-1"><a class="header-anchor" href="#example-of-a-get-request"><span>Example of a GET Request</span></a></h2><p>Here’s a simple example of a GET request in JavaScript using the Fetch API:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.example.com/products?category=shoes&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the GET request is made to the URL <code>https://api.example.com/products</code> with a query parameter <code>category=shoes</code>, asking the server to return products in the shoes category.</p><hr><h2 id="use-cases-of-the-get-method" tabindex="-1"><a class="header-anchor" href="#use-cases-of-the-get-method"><span>Use Cases of the GET Method</span></a></h2><p>GET is mainly used to fetch information, and there are many common scenarios where it&#39;s applied:</p><h3 id="_1-loading-a-webpage" tabindex="-1"><a class="header-anchor" href="#_1-loading-a-webpage"><span>1. Loading a Webpage</span></a></h3><p>Every time you type a URL into your browser or click a link, you&#39;re making a GET request. The browser asks the server for the webpage, and the server sends back the content to display.</p><div class="hint-container info"><p class="hint-container-title">Example</p><p><code>GET /index.html HTTP/1.1</code></p></div><h3 id="_2-fetching-data-from-apis" tabindex="-1"><a class="header-anchor" href="#_2-fetching-data-from-apis"><span>2. Fetching Data from APIs</span></a></h3><p>When developers build applications, they often use APIs (Application Programming Interfaces) to get data from external servers. For instance, a weather app uses a GET request to fetch the current temperature from a weather API.</p><div class="hint-container info"><p class="hint-container-title">Example</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.weather.com/current?city=Lagos&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_3-search-queries" tabindex="-1"><a class="header-anchor" href="#_3-search-queries"><span>3. Search Queries</span></a></h3><p>When you search for something on Google or other search engines, a GET request is made. The search term you entered is included in the URL, and the server returns a list of matching results.</p><div class="hint-container info"><p class="hint-container-title">Example</p><p><code>GET /search?q=JavaScript</code></p></div><h3 id="_4-retrieving-files" tabindex="-1"><a class="header-anchor" href="#_4-retrieving-files"><span>4. Retrieving Files</span></a></h3><p>Whether you&#39;re downloading an image, viewing a PDF, or playing a video, GET is used to fetch those files from a server.</p><div class="hint-container info"><p class="hint-container-title">Example</p><p><code>GET /files/image.jpg</code></p></div><hr><h2 id="best-practices-for-get-requests" tabindex="-1"><a class="header-anchor" href="#best-practices-for-get-requests"><span>Best Practices for GET Requests</span></a></h2><p>To use GET requests effectively, it&#39;s important to follow some good practices to ensure smooth and secure data handling:</p><h3 id="_1-use-get-only-for-retrieving-data" tabindex="-1"><a class="header-anchor" href="#_1-use-get-only-for-retrieving-data"><span>1. Use GET Only for Retrieving Data</span></a></h3><p>GET requests are meant to fetch data, not to send sensitive information like passwords or personal data. Since the parameters in a GET request are included in the URL, anyone can see them. For example, if you&#39;re logging into a website, you shouldn&#39;t use GET to send your password, because it would show up in the URL.</p><div class="hint-container info"><p class="hint-container-title">Example of what <strong>not</strong> to do:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.com/login?username=john&amp;password=secret&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h3 id="_2-keep-urls-short-and-clean" tabindex="-1"><a class="header-anchor" href="#_2-keep-urls-short-and-clean"><span>2. Keep URLs Short and Clean</span></a></h3><p>Since GET requests include data in the URL, long URLs can become problematic. There is also a limit to how much data can be included in a GET request URL (depending on the browser and server), so avoid putting too much information there. If you need to send a lot of data, consider using a POST request instead.</p><h3 id="_3-enable-caching-for-performance" tabindex="-1"><a class="header-anchor" href="#_3-enable-caching-for-performance"><span>3. Enable Caching for Performance</span></a></h3><p>GET requests are often cached by browsers, meaning the browser can store the response and reuse it without contacting the server again. This improves performance, especially for static content that doesn’t change often, like images or style sheets. To take advantage of this, ensure your server sends proper cache-control headers, so frequently requested data can be loaded faster.</p><div class="hint-container info"><p class="hint-container-title">Example of setting cache headers:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Cache-Control: max-age=3600</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h3 id="_4-avoid-making-get-requests-for-actions-that-change-data" tabindex="-1"><a class="header-anchor" href="#_4-avoid-making-get-requests-for-actions-that-change-data"><span>4. Avoid Making GET Requests for Actions That Change Data</span></a></h3><p>Since GET is a &quot;safe&quot; method, it should only be used for actions that don&#39;t modify data. If you want to create, update, or delete data, use methods like POST, PUT, or DELETE. For instance, if you accidentally use GET to delete a resource, someone could remove it just by clicking a link or refreshing the page, which is not safe.</p><div class="hint-container info"><p class="hint-container-title">Example of **not** using GET for deletion:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /delete/user/123</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><h3 id="_5-be-cautious-with-sensitive-data" tabindex="-1"><a class="header-anchor" href="#_5-be-cautious-with-sensitive-data"><span>5. Be Cautious with Sensitive Data</span></a></h3><p>Since GET requests are part of the URL, they can be logged or saved in a browser’s history. Avoid sending sensitive information like passwords, credit card details, or private data in a GET request. Always use methods like POST for handling such information, which keeps it hidden.</p>`,40);function y(i,_){const r=o("VPCard"),t=o("router-link"),l=o("SiteInfo");return m(),p("div",null,[e("h1",v,[e("a",k,[e("span",null,d(i.$frontmatter.title)+" 관련",1)])]),a(r,h(u({title:"Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples",desc:"When you interact with websites or apps, a lot happens behind the scenes. A key part of this process is how your browser or app talks to a server. HTTPS methods define what action needs to happen – it could be fetching data, sending information, or m...",link:"/freecodecamp.org/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/README.md",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",background:"rgba(10,10,35,0.2)"})),null,16),e("nav",b,[e("ul",null,[e("li",null,[a(t,{to:"#example-of-a-get-request"},{default:n(()=>[s("Example of a GET Request")]),_:1})]),e("li",null,[a(t,{to:"#use-cases-of-the-get-method"},{default:n(()=>[s("Use Cases of the GET Method")]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#_1-loading-a-webpage"},{default:n(()=>[s("1. Loading a Webpage")]),_:1})]),e("li",null,[a(t,{to:"#_2-fetching-data-from-apis"},{default:n(()=>[s("2. Fetching Data from APIs")]),_:1})]),e("li",null,[a(t,{to:"#_3-search-queries"},{default:n(()=>[s("3. Search Queries")]),_:1})]),e("li",null,[a(t,{to:"#_4-retrieving-files"},{default:n(()=>[s("4. Retrieving Files")]),_:1})])])]),e("li",null,[a(t,{to:"#best-practices-for-get-requests"},{default:n(()=>[s("Best Practices for GET Requests")]),_:1}),e("ul",null,[e("li",null,[a(t,{to:"#_1-use-get-only-for-retrieving-data"},{default:n(()=>[s("1. Use GET Only for Retrieving Data")]),_:1})]),e("li",null,[a(t,{to:"#_2-keep-urls-short-and-clean"},{default:n(()=>[s("2. Keep URLs Short and Clean")]),_:1})]),e("li",null,[a(t,{to:"#_3-enable-caching-for-performance"},{default:n(()=>[s("3. Enable Caching for Performance")]),_:1})]),e("li",null,[a(t,{to:"#_4-avoid-making-get-requests-for-actions-that-change-data"},{default:n(()=>[s("4. Avoid Making GET Requests for Actions That Change Data")]),_:1})]),e("li",null,[a(t,{to:"#_5-be-cautious-with-sensitive-data"},{default:n(()=>[s("5. Be Cautious with Sensitive Data")]),_:1})])])])])]),T,a(l,{name:"Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples",desc:"When you interact with websites or apps, a lot happens behind the scenes. A key part of this process is how your browser or app talks to a server. HTTPS methods define what action needs to happen – it could be fetching data, sending information, or m...",url:"https://freecodecamp.org/news/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",preview:"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}),E])}const G=c(f,[["render",y],["__file","get-method.html.vue"]]),q=JSON.parse('{"path":"/freecodecamp.org/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/get-method.html","title":"GET Method","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"GET Method","description":"Article(s) > (1/10) Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples","category":["JavaScript","Article(s)"],"tag":["blog","freecodecamp.org","js","javascript"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > (1/10) Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples"},{"property":"og:description","content":"GET Method"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/get-method.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/get-method.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"GET Method"}],["meta",{"property":"og:description","content":"Article(s) > (1/10) Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"}],["meta",{"name":"twitter:image:alt","content":"GET Method"}],["meta",{"property":"article:author","content":"Ashutosh Krishna"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"freecodecamp.org"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:published_time","content":"2024-10-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GET Method\\",\\"image\\":[\\"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png\\"],\\"datePublished\\":\\"2024-10-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ashutosh Krishna\\"}]}"]],"date":"2024-10-02T00:00:00.000Z","isOriginal":false,"author":"Ashutosh Krishna","cover":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727862097228/24433377-ebb8-49b5-b0ee-5736f629399d.png"},"headers":[{"level":2,"title":"Example of a GET Request","slug":"example-of-a-get-request","link":"#example-of-a-get-request","children":[]},{"level":2,"title":"Use Cases of the GET Method","slug":"use-cases-of-the-get-method","link":"#use-cases-of-the-get-method","children":[{"level":3,"title":"1. Loading a Webpage","slug":"_1-loading-a-webpage","link":"#_1-loading-a-webpage","children":[]},{"level":3,"title":"2. Fetching Data from APIs","slug":"_2-fetching-data-from-apis","link":"#_2-fetching-data-from-apis","children":[]},{"level":3,"title":"3. Search Queries","slug":"_3-search-queries","link":"#_3-search-queries","children":[]},{"level":3,"title":"4. Retrieving Files","slug":"_4-retrieving-files","link":"#_4-retrieving-files","children":[]}]},{"level":2,"title":"Best Practices for GET Requests","slug":"best-practices-for-get-requests","link":"#best-practices-for-get-requests","children":[{"level":3,"title":"1. Use GET Only for Retrieving Data","slug":"_1-use-get-only-for-retrieving-data","link":"#_1-use-get-only-for-retrieving-data","children":[]},{"level":3,"title":"2. Keep URLs Short and Clean","slug":"_2-keep-urls-short-and-clean","link":"#_2-keep-urls-short-and-clean","children":[]},{"level":3,"title":"3. Enable Caching for Performance","slug":"_3-enable-caching-for-performance","link":"#_3-enable-caching-for-performance","children":[]},{"level":3,"title":"4. Avoid Making GET Requests for Actions That Change Data","slug":"_4-avoid-making-get-requests-for-actions-that-change-data","link":"#_4-avoid-making-get-requests-for-actions-that-change-data","children":[]},{"level":3,"title":"5. Be Cautious with Sensitive Data","slug":"_5-be-cautious-with-sensitive-data","link":"#_5-be-cautious-with-sensitive-data","children":[]}]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":1}]},"readingTime":{"minutes":3.62,"words":1086},"filePathRelative":"freecodecamp.org/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/get-method.md","localizedDate":"2024년 10월 2일","excerpt":"\\n","copyright":{"author":"Ashutosh Krishna"}}');export{G as comp,q as data};
