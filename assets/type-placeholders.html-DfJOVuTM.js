import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as u,e as s,n as t,g as e,d as o,a as d,f as h,r as p,o as k}from"./app-BgNevrm5.js";const m={},g={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y=n("nav",{class:"table-of-contents"},[n("ul")],-1),w=n("hr",null,null,-1),v=n("blockquote",null,[n("p",null,"Available from Swift 5.6")],-1),b={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0315-placeholder-types.md",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"apple/swift-evolution",-1),x=h(`<p>In practice, this means writing <code>_</code> as your type in any place you want Swift to use type inference, meaning that these three lines of code are the same:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> score1 <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"><span class="token keyword">let</span> score2<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"><span class="token keyword">let</span> score3<span class="token punctuation">:</span> <span class="token omit keyword">_</span> <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In those trivial examples type placeholders don’t add anything, but they <em>are</em> useful when the compiler is able to correctly infer part of a type but not all. For example, if you were creating a dictionary of student names and all the exam results they had this year, you might write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> results1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Cynthia&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Jenny&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Trixie&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Swift will infer that to be a dictionary with strings as keys, and an array of <code>Any</code> as values – almost certainly not what you want. You could specify the entire type explicitly, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> results2<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Cynthia&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Jenny&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Trixie&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, type placeholders allow you to write <code>_</code> in place of the parts you want the compiler to infer – it’s a way for us to explicitly say “this part should use type inference”, alongside places where we want an exact type of our choosing.</p><p>So, we could also write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> results3<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token omit keyword">_</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Cynthia&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Jenny&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-literal"><span class="token string">&quot;Trixie&quot;</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, the <code>_</code> there is an explicit request for type inference, but we still have the opportunity to specify the exact array type.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Type placeholders can be optional too – use <code>_?</code> to have Swift infer your type as optional.</p></div><p>Types placeholders do <em>not</em> affect the way we write function signatures: you must still provide their parameter and return types in full. However, I have found that type placeholders do still serve a purpose for when you’re busy experimenting with a prototype: telling the compiler you want it to infer some type often prompts Xcode to offer a Fix-it to complete the code for you.</p><p>For example, you might write code to create a player like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Player</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Numeric</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> score<span class="token punctuation">:</span> <span class="token class-name">T</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">createPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token omit keyword">_</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Player</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Anonymous&quot;</span></span><span class="token punctuation">,</span> score<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That fails to specify a return type for <code>createPlayer()</code>, which will cause a compiler error. However, as we’ve asked Swift to infer the type, the error in Xcode will offer a Fix-it to replace <code>_</code> with <code>Player&lt;Int&gt;</code> – you can imagine that saving a fair amount of hassle when dealing with more complex types.</p><p>Think of type placeholders as a way of simplifying long type annotations: you can replace all the less relevant or boilerplate parts with underscores, leaving the important parts spelled out to help make your code more readable.</p>`,16),S={class:"hint-container details"},T=n("summary",null,"Other Changes in Swift 5.6",-1),q={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip",target:"_blank",rel:"noopener noreferrer"};function C(l,I){const a=p("VPCard"),i=p("FontIcon");return k(),r("div",null,[n("h1",g,[n("a",f,[n("span",null,u(l.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,w,s(a,t(e({title:"Type placeholders | Changes in Swift 5.6",desc:"Type placeholders",link:"https://hackingwithswift.com/swift/5.6/type-placeholders",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("p",null,[n("a",b,[o("SE-0315 ("),s(i,{icon:"iconfont icon-github"}),_,o(")")]),o(" introduces the concept of type placeholders, which allow us to explicitly specify only some parts of a value’s type so that the remainder can be filled in using type inference.")]),x,n("details",S,[T,s(a,t(e({title:"Introduce existential any | Changes in Swift 5.6",desc:"Introduce existential any",link:"/hackingwithswift.com/swift/5.6/existential-any.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),d(` 
\`\`\`component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(a,t(e({title:"Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",desc:"Allow coding of non String/Int keyed Dictionary into a KeyedContainer",link:"/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Unavailability condition | Changes in Swift 5.6",desc:"Unavailability condition",link:"/hackingwithswift.com/swift/5.6/unavailable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"More concurrency changes | Changes in Swift 5.6",desc:"More concurrency changes",link:"/hackingwithswift.com/swift/5.6/preconcurrency.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Plugins for Swift Package Manager | Changes in Swift 5.6",desc:"Plugins for Swift Package Manager",link:"/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",q,[s(i,{icon:"fas fa-file-zipper"}),o("Download Swift 5.6 playground")])])])])}const N=c(m,[["render",C],["__file","type-placeholders.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/swift/5.6/type-placeholders.html","title":"Type placeholders","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Type placeholders","description":"Article(s) > Type placeholders","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.6"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Type placeholders"},{"property":"og:description","content":"Type placeholders"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.6/type-placeholders.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.6/type-placeholders.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Type placeholders"}],["meta",{"property":"og:description","content":"Article(s) > Type placeholders"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.6"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Type placeholders\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.57,"words":772},"filePathRelative":"hackingwithswift.com/swift/5.6/type-placeholders.md","excerpt":"\\n"}');export{N as comp,V as data};
