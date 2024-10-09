import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as n,t as d,e as a,n as k,g,w as p,d as s,f as h,r as t,o as v}from"./app-BgNevrm5.js";const f={},b={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},_=n("hr",null,null,-1),I=h(`<p>Although <strong>C#</strong> is an <strong>object-oriented programming</strong> language, it received many new functional features in recent versions.</p><p>To mention just a few of these features:</p><ul><li>Pattern matching</li><li>Switch expressions</li><li>Records</li></ul><p>You&#39;re probably already doing <strong>functional programming</strong> without even knowing it.</p><p>Do you use LINQ? If you do, then you&#39;re doing functional programming. Because LINQ is a functional .NET library.</p><p>In today&#39;s issue, I will show you how to <strong>refactor</strong> some <strong>imperative code</strong> with <strong>functional programming</strong>.</p><p>Let&#39;s dive in.</p><hr><h2 id="benefits-of-functional-programming" tabindex="-1"><a class="header-anchor" href="#benefits-of-functional-programming"><span>Benefits Of Functional Programming</span></a></h2><p>Before we take a look at some code, let&#39;s see what are the <strong>benefits</strong> of using <strong>functional programming</strong>:</p><ul><li>Emphasis on immutability</li><li>Emphasis on function purity</li><li>Code is easier to reason about</li><li>Less prone to bugs and errors</li><li>Ability to compose functions and create higher-order functions</li><li>Easier to test and debug</li></ul><p>From my experience, I think functional programming is more enjoyable once you get used to it. Starting out, it feels strange because your old object-oriented programming habits will kick in. But after a while, <strong>functional programming</strong> feels easier to work with than imperative code.</p><hr><h2 id="starting-with-imperative-code" tabindex="-1"><a class="header-anchor" href="#starting-with-imperative-code"><span>Starting With Imperative Code</span></a></h2><p><strong>Imperative programming</strong> is the most basic programming approach. We describe a step-by-step process to execute a program. It&#39;s easier for beginners to reason with imperative code by following along with the steps in the process.</p><p>Here&#39;s an example of an <code>EmailValidator</code> class written with imperative code:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailValidator</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> MaxLength <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token punctuation">(</span><span class="token keyword">bool</span> IsValid<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">?</span> Error<span class="token punctuation">)</span></span> <span class="token function">Validate</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> email<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Email is empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>email<span class="token punctuation">.</span>Length <span class="token operator">&gt;</span> MaxLength<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Email is too long&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token char">&#39;@&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Length <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Email format is invalid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>Uri<span class="token punctuation">.</span><span class="token function">CheckHostName</span><span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token char">&#39;@&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> UriHostNameType<span class="token punctuation">.</span>Unknown<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Email domain is invalid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can clearly see the distinct steps:</p><ul><li>Check if email is null or empty</li><li>Check if email is not too long</li><li>Check if email format is valid</li><li>Check if email domain is valid</li></ul><p>Let&#39;s see how we can refactor this using <strong>functional programming</strong>.</p><hr><h2 id="applying-functional-programming" tabindex="-1"><a class="header-anchor" href="#applying-functional-programming"><span>Applying Functional Programming</span></a></h2><p>The basic building block in <strong>functional programming</strong> is - <strong>a function</strong>. And programs are written by composing function calls. There are a few other things you need to keep in mind, like keeping your functions pure. A function is pure if it always returns the same output for the same input.</p><p>We can capture each step from the imperative version of <code>EmailValidator</code> with a <code>Func</code> delegate. To also capture the respective error message together with the validation check, we can use a tuple. And since we know all of our validation steps, we can create an array of <code>Func</code> delegates to store all of the individual <strong>functions</strong>.</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailValidator</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">int</span></span> MaxLength <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">bool</span> IsValid<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">?</span> Error<span class="token punctuation">)</span><span class="token punctuation">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> _validations <span class="token operator">=</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        email <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Email is empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        email <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>email<span class="token punctuation">.</span>Length <span class="token operator">&lt;=</span> MaxLength<span class="token punctuation">,</span> <span class="token string">&quot;Email is too long&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        email <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token char">&#39;@&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Length <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Email format is invalid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        email <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">            Uri<span class="token punctuation">.</span><span class="token function">CheckHostName</span><span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token char">&#39;@&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> UriHostNameType<span class="token punctuation">.</span>Unknown<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;Email domain is invalid&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> IsValid<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Error<span class="token punctuation">)</span> _successResult <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token punctuation">(</span><span class="token keyword">bool</span> IsValid<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">?</span> Error<span class="token punctuation">)</span></span> <span class="token function">Validate</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> email<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> validationResult <span class="token operator">=</span> _validations</span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>func <span class="token operator">=&gt;</span> <span class="token function">func</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>func <span class="token operator">=&gt;</span> <span class="token operator">!</span>func<span class="token punctuation">.</span>IsValid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> validationResult <span class="token keyword">is</span> <span class="token punctuation">{</span> IsValid<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">Error</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> Length<span class="token punctuation">:</span> <span class="token operator">&gt;</span><span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">?</span></span>
<span class="line">            validationResult <span class="token punctuation">:</span> _successResult<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that this allows us to do all sorts of interesting things with the <code>_validations</code> array. How hard would it be to modify this function to return <em>all of the errors</em> instead of just the first one?</p><p>If you&#39;re thinking we can use LINQ&#39;s <code>Select</code> method somehow, you&#39;re thinking in the right direction.</p><hr><h2 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span>Further Reading</span></a></h2><p>We only scratched the surface of what functional programming is, and what you can do with it. If you want to learn more, here are some learning materials:</p>`,30),A={href:"https://manning.com/books/functional-programming-in-c-sharp",target:"_blank",rel:"noopener noreferrer"},C={href:"https://youtu.be/dDasAmowFts",target:"_blank",rel:"noopener noreferrer"},F={href:"https://youtu.be/zuy2j8vxgYc",target:"_blank",rel:"noopener noreferrer"},P={href:"https://youtu.be/AVA2mKG4WOc",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"Thank you for reading, and have a wonderful Saturday.",-1);function T(l,j){const c=t("VPCard"),e=t("router-link"),r=t("SiteInfo"),o=t("FontIcon"),i=t("VidStack");return v(),m("div",null,[n("h1",b,[n("a",y,[n("span",null,d(l.$frontmatter.title)+" 관련",1)])]),a(c,k(g({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",w,[n("ul",null,[n("li",null,[a(e,{to:"#benefits-of-functional-programming"},{default:p(()=>[s("Benefits Of Functional Programming")]),_:1})]),n("li",null,[a(e,{to:"#starting-with-imperative-code"},{default:p(()=>[s("Starting With Imperative Code")]),_:1})]),n("li",null,[a(e,{to:"#applying-functional-programming"},{default:p(()=>[s("Applying Functional Programming")]),_:1})]),n("li",null,[a(e,{to:"#further-reading"},{default:p(()=>[s("Further Reading")]),_:1})])])]),_,a(r,{name:"How To Apply Functional Programming In C#",desc:"Although C# is an object-oriented programming language, it received many new functional features in recent versions. To mention just a few of these features: - Pattern matching - Switch expressions - Records You're probably already doing functional programming without even knowing it. Do you use LINQ? If you do, then you're doing functional programming. Because LINQ is a functional .NET library.",url:"https://milanjovanovic.tech/blog/how-to-apply-functional-programming-in-csharp/",logo:"https://milanjovanovic.tech/profile_favicon.png",preview:"https://milanjovanovic.tech/blog-covers/mnw_027.png"}),I,n("ul",null,[n("li",null,[n("a",A,[a(o,{icon:"fas fa-globe"}),s("Functional Programming in C#, by Enrico Buonanno")])]),n("li",null,[n("a",C,[a(o,{icon:"fa-brands fa-youtube"}),s("Functional Programming With C# Using Railway-Oriented Programming")])]),n("li",null,[n("a",F,[a(o,{icon:"fa-brands fa-youtube"}),s("How Function Composition Can Make Your Code Better")])]),n("li",null,[n("a",P,[a(o,{icon:"fa-brands fa-youtube"}),s("Make Your ASP.NET Core API Controllers Incredibly Simple With Functional Programming")])])]),a(i,{src:"youtube/dDasAmowFts"}),a(i,{src:"youtube/zuy2j8vxgYc"}),a(i,{src:"youtube/AVA2mKG4WOc"}),E])}const V=u(f,[["render",T],["__file","how-to-apply-functional-programming-in-csharp.html.vue"]]),N=JSON.parse('{"path":"/milanjovanovic.tech/how-to-apply-functional-programming-in-csharp.html","title":"How To Apply Functional Programming In C#","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How To Apply Functional Programming In C#","description":"Article(s) > How To Apply Functional Programming In C#","icon":"iconfont icon-csharp","category":["C#","DotNet","Article(s)"],"tag":["blog","milanjovanovic.tech","cs","c#","csharp","dotnet"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How To Apply Functional Programming In C#"},{"property":"og:description","content":"How To Apply Functional Programming In C#"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/how-to-apply-functional-programming-in-csharp.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/how-to-apply-functional-programming-in-csharp.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How To Apply Functional Programming In C#"}],["meta",{"property":"og:description","content":"Article(s) > How To Apply Functional Programming In C#"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://milanjovanovic.tech/blog-covers/mnw_027.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://milanjovanovic.tech/blog-covers/mnw_027.png"}],["meta",{"name":"twitter:image:alt","content":"How To Apply Functional Programming In C#"}],["meta",{"property":"article:author","content":"Milan Jovanović"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"milanjovanovic.tech"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:published_time","content":"2023-03-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How To Apply Functional Programming In C#\\",\\"image\\":[\\"https://milanjovanovic.tech/blog-covers/mnw_027.png\\"],\\"datePublished\\":\\"2023-03-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Milan Jovanović\\"}]}"]],"prev":"/programming/cs/articles/README.md","date":"2023-03-04T00:00:00.000Z","isOriginal":false,"author":"Milan Jovanović","cover":"https://milanjovanovic.tech/blog-covers/mnw_027.png"},"headers":[{"level":2,"title":"Benefits Of Functional Programming","slug":"benefits-of-functional-programming","link":"#benefits-of-functional-programming","children":[]},{"level":2,"title":"Starting With Imperative Code","slug":"starting-with-imperative-code","link":"#starting-with-imperative-code","children":[]},{"level":2,"title":"Applying Functional Programming","slug":"applying-functional-programming","link":"#applying-functional-programming","children":[]},{"level":2,"title":"Further Reading","slug":"further-reading","link":"#further-reading","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.07,"words":920},"filePathRelative":"milanjovanovic.tech/how-to-apply-functional-programming-in-csharp.md","localizedDate":"2023년 3월 4일","excerpt":"\\n","copyright":{"author":"Milan Jovanović"}}');export{V as comp,N as data};
