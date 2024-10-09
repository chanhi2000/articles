import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as n,t as d,e as s,n as t,g as a,d as o,a as h,f as u,r as c,o as w}from"./app-BgNevrm5.js";const m={},k={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},f=n("nav",{class:"table-of-contents"},[n("ul")],-1),y=n("hr",null,null,-1),v=n("blockquote",null,[n("p",null,"Available from Swift 6.0")],-1),b={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0413-typed-throws.md",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"apple/swift-evolution",-1),C=u(`<p>As an example of typed throws, we could define a <code>CopierError</code> that can track when a photocopier runs out of paper:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name">CopierError</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> outOfPaper</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We could then create a <code>Photocopier</code> struct that creates some number of copies of a page. This might throw errors if there isn&#39;t enough paper loaded for the requested operation, but rather than mark it simply as <code>throws</code> we&#39;ll use <code>throws(CopierError)</code> to be clear exactly what kind of errors can be thrown:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Photocopier</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> pagesRemaining<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">mutating</span> <span class="token keyword">func</span> <span class="token function-definition function">copy</span><span class="token punctuation">(</span>count<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token keyword">throws</span><span class="token punctuation">(</span><span class="token class-name">CopierError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">guard</span> count <span class="token operator">&gt;=</span> pagesRemaining <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token class-name">CopierError</span><span class="token punctuation">.</span>outOfPaper</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        pagesRemaining <span class="token operator">-=</span> count</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>With this change you can either use <code>throws</code> to specify any kind of error being thrown, or <code>throws(OneSpecificErrorType)</code> to signal that only one type can be thrown. You cannot write <code>throws(A, B, C)</code> to throw one of several errors.</p></div><p>Now we can write code to attempt photocopying, catching the single error that can possibly be thrown:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> copier <span class="token operator">=</span> <span class="token class-name">Photocopier</span><span class="token punctuation">(</span>pagesRemaining<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">try</span> copier<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>count<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token class-name">CopierError</span><span class="token punctuation">.</span>outOfPaper <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Please refill the paper&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That call site is the important change here: in earlier versions of Swift we&#39;d need a so-called &quot;Pokémon catch&quot; at the end, because Swift couldn&#39;t be sure exactly error types could be thrown – you&#39;ve &quot;gotta catch &#39;em all.&quot;</p><p>This comes with several other advantages:</p><ol><li>Because Swift knows that <code>CopierError</code> is the only error type that can be thrown, we can write <code>throw .outOfPaper</code>.</li><li>If the code in a <code>do</code> block only throws one kind of error, the <code>error</code> value in a general <code>catch</code> block will automatically have the same error type rather than being any kind of error.</li><li>If we attempt to throw any other kind of error not listed in the <code>throws</code> clause, Swift will issue a compile error.</li></ol><p>Where this gets really clever is that <code>throws(any Error)</code> is equivalent to using just <code>throws</code> by itself, and <code>throws(Never)</code> is equivalent to a non-throwing function. That might sound obscure, but it means in many places <code>rethrows</code> can be expressed more clearly: the function throws whatever the function parameter throws.</p><p>As an example, Swift 6&#39;s new <code>count(where:)</code> method accepts a closure used to evaluate how many items match whatever kind of filter you&#39;re running. That closure might throw errors, and if it does <code>count(where:)</code> will throw that same error type:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">func</span> <span class="token function-definition function">count</span><span class="token operator">&lt;</span><span class="token class-name">E</span><span class="token operator">&gt;</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token keyword">where</span> predicate<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token keyword">throws</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token keyword">throws</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Code goes here&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If that closure <em>doesn&#39;t</em> throw an error, <code>throws(E)</code> is effectively <code>throws(Never)</code>, meaning that <code>count(where:)</code> will also not throw errors.</p><p>Even though typed throws seem very appealing, they are aren&#39;t a great choice when the errors that can be thrown might change in the future. They are a particularly poor choice in library code, because they lock you into a contract you might not want to stick to in the future.</p><p>In fact, here I&#39;ll just defer to the authors of the evolution proposal, who sum it up like this: <strong>even with the addition of typed throws to Swift, untyped throws is better for most scenarios.</strong></p><p>Where typed throws <em>are</em> particularly useful is in the increasingly important realm of embedded Swift, where performance and predictability is critical.</p>`,17),S={class:"hint-container details"},T=n("summary",null,"Other Changes in Swift 6.0",-1),E={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-10-to-6-0.playground.zip",target:"_blank",rel:"noopener noreferrer"};function P(r,x){const e=c("VPCard"),i=c("FontIcon");return w(),l("div",null,[n("h1",k,[n("a",g,[n("span",null,d(r.$frontmatter.title)+" 관련",1)])]),s(e,t(a({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,y,s(e,t(a({title:"Typed throws | Changes in Swift 6.0",desc:"Typed throws",link:"https://hackingwithswift.com/swift/6.0/typed-throws",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("p",null,[n("a",b,[o("SE-0413 ("),s(i,{icon:"iconfont icon-github"}),_,o(")")]),o(' introduced the ability to specify exactly what types of errors a function can throw, known as "typed throws". This resolves an annoyance with errors in Swift: we needed a general catch clause even when we had specifically caught all possible errors.')]),C,n("details",S,[T,s(e,t(a({title:"Complete concurrency enabled by default | Changes in Swift 6.0",desc:"Complete concurrency enabled by default",link:"/hackingwithswift.com/swift/6.0/concurrency.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(e,t(a({title:"count(where:) | Changes in Swift 6.0",desc:"count(where:)",link:"/hackingwithswift.com/swift/6.0/count-where.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),h(` 
\`\`\`component VPCard
{
  "title": "Typed throws | Changes in Swift 6.0",
  "desc": "Typed throws",
  "link": "/hackingwithswift.com/swift/6.0/typed-throws.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(e,t(a({title:"Pack iteration | Changes in Swift 6.0",desc:"Pack iteration",link:"/hackingwithswift.com/swift/6.0/pack-iteration.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(e,t(a({title:"Add Collection Operations on Noncontiguous Elements | Changes in Swift 6.0",desc:"Add Collection Operations on Noncontiguous Elements",link:"/hackingwithswift.com/swift/6.0/rangeset.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(e,t(a({title:"Access-level modifiers on import declarations | Changes in Swift 6.0",desc:"Access-level modifiers on import declarations",link:"/hackingwithswift.com/swift/6.0/access-level-import.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(e,t(a({title:"Upgrades for noncopyable types | Changes in Swift 6.0",desc:"Upgrades for noncopyable types",link:"/hackingwithswift.com/swift/6.0/noncopyable-upgrades.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(e,t(a({title:"128-bit Integer Types | Changes in Swift 6.0",desc:"128-bit Integer Types",link:"/hackingwithswift.com/swift/6.0/int128.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(e,t(a({title:"BitwiseCopyable | Changes in Swift 6.0",desc:"BitwiseCopyable",link:"/hackingwithswift.com/swift/6.0/bitwisecopyable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",E,[s(i,{icon:"fas fa-file-zipper"}),o("Download Swift 6.0 playground")])])])])}const N=p(m,[["render",P],["__file","typed-throws.html.vue"]]),q=JSON.parse('{"path":"/hackingwithswift.com/swift/6.0/typed-throws.html","title":"Typed throws","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Typed throws","description":"Article(s) > Typed throws","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-6.0"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Typed throws"},{"property":"og:description","content":"Typed throws"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/6.0/typed-throws.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/6.0/typed-throws.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Typed throws"}],["meta",{"property":"og:description","content":"Article(s) > Typed throws"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-6.0"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Typed throws\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.26,"words":978},"filePathRelative":"hackingwithswift.com/swift/6.0/typed-throws.md","excerpt":"\\n"}');export{N as comp,q as data};
