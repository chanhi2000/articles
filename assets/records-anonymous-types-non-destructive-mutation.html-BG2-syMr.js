import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as d,e as n,n as u,g as m,w as t,f as h,r as a,o as v,d as o}from"./app-BgNevrm5.js";const y={},g={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},b=e("hr",null,null,-1),f=h(`<p>Today, I&#39;m going to share some fascinating things you can do with records and anonymous types. I will introduce you to the concept of non-destructive mutation. And I will talk about when and why we might want to use this C# language feature.</p><hr><h2 id="what-is-a-record" tabindex="-1"><a class="header-anchor" href="#what-is-a-record"><span>What Is a Record?</span></a></h2><p>With <strong>C# 9</strong> we can use <strong>records</strong> that are a new reference type. <strong>C# 10</strong> introduced record structs so that you can define records as value types. Records are distinct from classes in that record types use value-based equality.</p><p>Let&#39;s see how we would define a <code>record</code>:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">Food</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> Name<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">double</span></span> Price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This way of declaring a <code>record</code> is called a positional record. The constructor we have defined here is called the <strong>primary constructor</strong>.</p><p>The <code>Name</code> and <code>Price</code> properties are init only properties. This means they can only be set in the constructor or using a property initializer.</p><p>Since our properties are init only, is there any way to change their value?</p><hr><h2 id="non-destructive-mutation-using-the-with-expression" tabindex="-1"><a class="header-anchor" href="#non-destructive-mutation-using-the-with-expression"><span>Non-Destructive Mutation Using The With Expression</span></a></h2><p>We said we can&#39;t modify the properties of our <code>record</code>, because the properties are init only. However, we can use the <code>with</code> expression (introduced in <strong>C# 9</strong>) to create a new instance of our record with modified values.</p><p>Let&#39;s see how we would use the <code>with</code> expression:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> banana <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Food</span><span class="token punctuation">(</span><span class="token string">&quot;🍌&quot;</span><span class="token punctuation">,</span> <span class="token number">1.95</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> bananaOnSale <span class="token operator">=</span> banana <span class="token keyword">with</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    Price <span class="token operator">=</span> <span class="token number">0.99</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s important to highlight two things here:</p><ul><li>The original banana instance remains unchanged</li><li>The <code>with</code> expression creates a new record instance with only the <code>Price</code> property modified</li></ul><p>I mentioned Anonymous Types in the title, so let me show you something interesting you can do with them.</p><hr><h2 id="anonymous-types-and-non-destructive-mutation" tabindex="-1"><a class="header-anchor" href="#anonymous-types-and-non-destructive-mutation"><span>Anonymous Types And Non-Destructive Mutation</span></a></h2><p>Did you know that you can use the <code>with</code> expression with anonymous types?</p><p>Just a reminder that the <code>with</code> expression is available from <strong>C# 9</strong> and later.</p><p>Let&#39;s create an anonymous type:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> apple <span class="token operator">=</span> <span class="token keyword">new</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    Name <span class="token operator">=</span> <span class="token string">&quot;🍎&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    Price <span class="token operator">=</span> <span class="token number">1.21</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is how we can modify it using the with expression:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> orange <span class="token operator">=</span> apple <span class="token keyword">with</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    Name <span class="token operator">=</span> <span class="token string">&quot;🍊&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And again the same rules apply:</p><ul><li>The original apple instance remains unchanged</li><li>The with expression creates a new anonymous type instance with only the Name property modified</li></ul><p>I found this feature useful in LINQ method chains.</p><p>For example, loading an anonymous type from the database where some properties have a default value. You can then use this feature to calculate the values for these properties in memory.</p>`,29);function _(i,T){const r=a("VPCard"),s=a("router-link"),c=a("SiteInfo");return v(),l("div",null,[e("h1",g,[e("a",w,[e("span",null,d(i.$frontmatter.title)+" 관련",1)])]),n(r,u(m({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),e("nav",k,[e("ul",null,[e("li",null,[n(s,{to:"#what-is-a-record"},{default:t(()=>[o("What Is a Record?")]),_:1})]),e("li",null,[n(s,{to:"#non-destructive-mutation-using-the-with-expression"},{default:t(()=>[o("Non-Destructive Mutation Using The With Expression")]),_:1})]),e("li",null,[n(s,{to:"#anonymous-types-and-non-destructive-mutation"},{default:t(()=>[o("Anonymous Types And Non-Destructive Mutation")]),_:1})])])]),b,n(c,{name:"Records, Anonymous Types, and Non-Destructive Mutation",desc:"Today, I'm going to share some fascinating things you can do with records and anonymous types. I will introduce you to the concept of non-destructive mutation. And I will talk about when and why we might want to use this C# language feature.",url:"https://milanjovanovic.tech/blog/records-anonymous-types-non-destructive-mutation/",logo:"https://milanjovanovic.tech/profile_favicon.png",preview:"https://www.milanjovanovic.tech/blog-covers/mnw_002.png"}),f])}const N=p(y,[["render",_],["__file","records-anonymous-types-non-destructive-mutation.html.vue"]]),D=JSON.parse('{"path":"/milanjovanovic.tech/records-anonymous-types-non-destructive-mutation.html","title":"Records, Anonymous Types, and Non-Destructive Mutation","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Records, Anonymous Types, and Non-Destructive Mutation","description":"Article(s) > Records, Anonymous Types, and Non-Destructive Mutation","icon":"iconfont icon-csharp","category":["C#","DotNet","Article(s)"],"tag":["blog","milanjovanovic.tech","cs","c#","csharp","dotnet"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Records, Anonymous Types, and Non-Destructive Mutation"},{"property":"og:description","content":"Records, Anonymous Types, and Non-Destructive Mutation"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/records-anonymous-types-non-destructive-mutation.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/records-anonymous-types-non-destructive-mutation.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Records, Anonymous Types, and Non-Destructive Mutation"}],["meta",{"property":"og:description","content":"Article(s) > Records, Anonymous Types, and Non-Destructive Mutation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.milanjovanovic.tech/blog-covers/mnw_002.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.milanjovanovic.tech/blog-covers/mnw_002.png"}],["meta",{"name":"twitter:image:alt","content":"Records, Anonymous Types, and Non-Destructive Mutation"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"milanjovanovic.tech"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:published_time","content":"2022-09-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Records, Anonymous Types, and Non-Destructive Mutation\\",\\"image\\":[\\"https://www.milanjovanovic.tech/blog-covers/mnw_002.png\\"],\\"datePublished\\":\\"2022-09-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/programming/cs/articles/README.md","date":"2022-09-10T00:00:00.000Z","isOriginal":false,"cover":"https://www.milanjovanovic.tech/blog-covers/mnw_002.png"},"headers":[{"level":2,"title":"What Is a Record?","slug":"what-is-a-record","link":"#what-is-a-record","children":[]},{"level":2,"title":"Non-Destructive Mutation Using The With Expression","slug":"non-destructive-mutation-using-the-with-expression","link":"#non-destructive-mutation-using-the-with-expression","children":[]},{"level":2,"title":"Anonymous Types And Non-Destructive Mutation","slug":"anonymous-types-and-non-destructive-mutation","link":"#anonymous-types-and-non-destructive-mutation","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.97,"words":591},"filePathRelative":"milanjovanovic.tech/records-anonymous-types-non-destructive-mutation.md","localizedDate":"2022년 9월 10일","excerpt":"\\n"}');export{N as comp,D as data};
