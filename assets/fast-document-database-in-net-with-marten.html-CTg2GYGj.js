import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as n,t as g,e as s,n as h,g as m,w as e,d as t,f as i,r as o,o as k}from"./app-BgNevrm5.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},y=n("hr",null,null,-1),M=i(`<p>Did you know you can turn <strong>PostgreSQL</strong> into a fully-fledged <strong>Document database</strong>?</p><p><strong>Marten</strong> is a <strong>.NET</strong> library that allows developers to use the <strong>PostgreSQL</strong> database as both a <strong>document database</strong> and a fully-featured <strong>event store</strong>.</p><p>You don&#39;t need to install anything else to be able to use <strong>PostgreSQL</strong> as a <strong>document database</strong>, outside of the Nuget package. <strong>Marten</strong> relies on the <strong>JSONB</strong> support available since <strong>PostgreSQL</strong> 9.4.</p><p>In this week&#39;s newsletter, I want to introduce you to the basics of working with <strong>Marten</strong> and show you how easy it is to get started.</p><p>Let&#39;s dive in.</p><hr><h2 id="installing-and-configuring-marten" tabindex="-1"><a class="header-anchor" href="#installing-and-configuring-marten"><span>Installing And Configuring Marten</span></a></h2><p>What are you going to need to start using <strong>PostgreSQL</strong> as a <strong>Document datbase</strong>?</p><p>Other than a running instance of <strong>PostgreSQL</strong>, of course, you will need to install the <strong>Marten</strong> Nuget package:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dotnet <span class="token function">add</span> package Marten</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Marten</strong> can build the required database schema and necessary tables on the fly, and I suggest using this approach in development. For a production environment, you definitely want to apply schema changes on your own with migration scripts.</p><p>To register <strong>Marten</strong> with dependency injection, you need to call the <code>AddMarten</code> method.</p><p>Here&#39;s an example <strong>Marten</strong> configuration inside of a <strong>.NET 7</strong> application:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line">builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddMarten</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    options<span class="token punctuation">.</span><span class="token function">Connection</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span>Configuration<span class="token punctuation">.</span><span class="token function">GetConnectionString</span><span class="token punctuation">(</span><span class="token string">&quot;Marten&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will register a few services with dependency injection:</p><ul><li><code>IDocumentStore</code>: used to create sessions, generate schema migrations, and do bulk inserts</li><li><code>IDocumentSession</code>: used for read and write operations</li><li><code>IQuerySession</code>: used for read operations</li></ul><p>Let&#39;s see how we can work with documents using <strong>Marten</strong>.</p><hr><h2 id="storing-documents-with-marten" tabindex="-1"><a class="header-anchor" href="#storing-documents-with-marten"><span>Storing Documents With Marten</span></a></h2><p>Storing documents in the database is very straightforward. You need to create a new <code>DocumentStore</code> instance, and open an <code>IDocumentSession</code> which exposes methods for storing and persisting documents.</p><p>Let&#39;s see how we can store a <code>Product</code> document:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> store <span class="token operator">=</span> DocumentStore<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token string">&quot;Connection string to PostgreSQL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> session <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">OpenSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Product</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    Name <span class="token operator">=</span> <span class="token string">&quot;C# 11 and .NET 7 - Modern Cross-Platform Fundamentals&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    Price <span class="token operator">=</span> <span class="token number">46.87</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">session<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> session<span class="token punctuation">.</span><span class="token function">SaveChangesAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We&#39;re creating a new <code>DocumentStore</code> instance which we use to open a session to <strong>PostgreSQL</strong>. And then we just call <code>Store</code> and pass in the <code>Product</code> instance. Note that <strong>Marten</strong> will populate the <code>Product.Id</code> at this point. <strong>Marten</strong> can populate keys of <code>Guid</code>, <code>int</code>, <code>long</code>, and other data types. It uses the HiLo algorithm for numeric keys. Finally, when we call <code>SaveChangesAsync</code> the <code>Product</code> is serialized into <strong>JSON</strong> and persisted as a document.</p><p>An important thing to be aware of is that the <code>IDocumentSession</code> created by <code>OpenSession</code> doesn&#39;t track changes on the entities automatically. You need to create a session with dirty checking enabled by calling <code>DirtyTrackedSession</code> on the <code>DocumentStore</code> to enable automatic change detection.</p><hr><h2 id="querying-documents-with-marten" tabindex="-1"><a class="header-anchor" href="#querying-documents-with-marten"><span>Querying Documents With Marten</span></a></h2><p><strong>Marten</strong> has rich support for querying documents in the database. You can write and execute queries using <strong>LINQ</strong>, which you are familiar with if you worked with <strong>EF Core</strong>. And you can also write and execute <strong>SQL</strong> queries, because it&#39;s still a <strong>PostgreSQL</strong> database underneath.</p><p>Here&#39;s an example query to return products that have a higher price than the one which is specified:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> store <span class="token operator">=</span> DocumentStore<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token string">&quot;Connection string to PostgreSQL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> session <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">QuerySession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> products <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Product<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>Price <span class="token operator">&gt;</span> <span class="token number">9.99</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Marten</strong> also has support for:</p><ul><li>Including related documents</li><li>Batched queries</li><li>Paging</li><li>Full text search</li></ul><hr><h2 id="advanced-options-with-marten" tabindex="-1"><a class="header-anchor" href="#advanced-options-with-marten"><span>Advanced Options With Marten</span></a></h2><p><strong>Marten</strong> can utilize the full capabilities <strong>PostgreSQL</strong> has to offer, notably transactions and indexing. <strong>Marten</strong> sessions are transactional by default, either all of the documents are persisted together or none of them are. And you can configure indexes on your documents for faster queries.</p><p><strong>Marten</strong> isn&#39;t just a <strong>document database</strong> on top of <strong>PostgreSQL</strong>!</p><p>You have fully-fledged support for <strong>event sourcing</strong> with <strong>Marten</strong>, as well as projections. This makes it a perfect choice for implementing <strong>CQRS</strong>. But this is a topic for a separate newsletter.</p><hr><h2 id="closing-thoughts" tabindex="-1"><a class="header-anchor" href="#closing-thoughts"><span>Closing Thoughts</span></a></h2>`,38),S={href:"https://martendb.io/",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"PostgreSQL",-1),D=n("strong",null,"Marten",-1),I=i("<p>I still need to explore a few more topics before I can consider it for production use:</p><ul><li>Schema migrations</li><li>Relationships and foreign keys</li><li>Advanced configuration options</li></ul><p>Considering that <strong>PostgreSQL</strong> is cheaper than most <strong>document databases</strong>, I think using <strong>Marten</strong> is an interesting alternative. And if you are familiar with <strong>SQL</strong> databases, you can still use all of that knowledge.</p>",3);function P(r,N){const c=o("VPCard"),a=o("router-link"),l=o("SiteInfo"),p=o("FontIcon");return k(),d("div",null,[n("h1",b,[n("a",f,[n("span",null,g(r.$frontmatter.title)+" 관련",1)])]),s(c,h(m({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",w,[n("ul",null,[n("li",null,[s(a,{to:"#installing-and-configuring-marten"},{default:e(()=>[t("Installing And Configuring Marten")]),_:1})]),n("li",null,[s(a,{to:"#storing-documents-with-marten"},{default:e(()=>[t("Storing Documents With Marten")]),_:1})]),n("li",null,[s(a,{to:"#querying-documents-with-marten"},{default:e(()=>[t("Querying Documents With Marten")]),_:1})]),n("li",null,[s(a,{to:"#advanced-options-with-marten"},{default:e(()=>[t("Advanced Options With Marten")]),_:1})]),n("li",null,[s(a,{to:"#closing-thoughts"},{default:e(()=>[t("Closing Thoughts")]),_:1})])])]),y,s(l,{name:"Fast Document Database In .NET With Marten",desc:"Did you know you can turn PostgreSQL into a fully-fledged Document database? Marten is a .NET library that allows developers to use the PostgreSQL database as both a document database and a fully-featured event store. You don't need to install anything else to be able to use PostgreSQL as a document database, outside of the Nuget pacakge. Marten relies on the JSONB support available since PostgreSQL 9.4. In this week's newsletter, I want to introduce you to the basics of working with Marten and show you how easy it is to get started.",url:"https://milanjovanovic.tech/blog/fast-document-database-in-net-with-marten/",logo:"https://milanjovanovic.tech/profile_favicon.png",preview:"https://milanjovanovic.tech/blog-covers/mnw_016.png"}),M,n("p",null,[t("I'm absolutely amazed with "),n("a",S,[s(p,{icon:"fas fa-globe"}),t("Marten")]),t(" and what it has to offer. And "),_,t(" is also my favorite database, so it's like a match made in heaven. I don't get too excited about learning new technologies, but "),D,t(" has been an endless source of joy this past week.")]),I])}const x=u(v,[["render",P],["__file","fast-document-database-in-net-with-marten.html.vue"]]),A=JSON.parse('{"path":"/milanjovanovic.tech/fast-document-database-in-net-with-marten.html","title":"Fast Document Database In .NET With Marten","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Fast Document Database In .NET With Marten","description":"Article(s) > Fast Document Database In .NET With Marten","icon":"iconfont icon-csharp","category":["C#","DotNet","Article(s)"],"tag":["blog","milanjovanovic.tech","cs","c#","csharp","dotnet"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Fast Document Database In .NET With Marten"},{"property":"og:description","content":"Fast Document Database In .NET With Marten"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/fast-document-database-in-net-with-marten.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/fast-document-database-in-net-with-marten.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Fast Document Database In .NET With Marten"}],["meta",{"property":"og:description","content":"Article(s) > Fast Document Database In .NET With Marten"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://milanjovanovic.tech/blog-covers/mnw_016.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://milanjovanovic.tech/blog-covers/mnw_016.png"}],["meta",{"name":"twitter:image:alt","content":"Fast Document Database In .NET With Marten"}],["meta",{"property":"article:author","content":"Milan Jovanović"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"milanjovanovic.tech"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:published_time","content":"2022-12-17T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fast Document Database In .NET With Marten\\",\\"image\\":[\\"https://milanjovanovic.tech/blog-covers/mnw_016.png\\"],\\"datePublished\\":\\"2022-12-17T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Milan Jovanović\\"}]}"]],"prev":"/programming/cs/articles/README.md","date":"2022-12-17T00:00:00.000Z","isOriginal":false,"author":"Milan Jovanović","cover":"https://milanjovanovic.tech/blog-covers/mnw_016.png"},"headers":[{"level":2,"title":"Installing And Configuring Marten","slug":"installing-and-configuring-marten","link":"#installing-and-configuring-marten","children":[]},{"level":2,"title":"Storing Documents With Marten","slug":"storing-documents-with-marten","link":"#storing-documents-with-marten","children":[]},{"level":2,"title":"Querying Documents With Marten","slug":"querying-documents-with-marten","link":"#querying-documents-with-marten","children":[]},{"level":2,"title":"Advanced Options With Marten","slug":"advanced-options-with-marten","link":"#advanced-options-with-marten","children":[]},{"level":2,"title":"Closing Thoughts","slug":"closing-thoughts","link":"#closing-thoughts","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"milanjovanovic.tech/fast-document-database-in-net-with-marten.md","localizedDate":"2022년 12월 17일","excerpt":"\\n","copyright":{"author":"Milan Jovanović"}}');export{x as comp,A as data};
