import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as d,e as s,n as t,g as e,d as i,a as h,f as k,r as o,o as m}from"./app-BgNevrm5.js";const f={},g={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},v=n("nav",{class:"table-of-contents"},[n("ul")],-1),y=n("hr",null,null,-1),b=n("blockquote",null,[n("p",null,"Available from Swift 5.6")],-1),_={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0335-existential-any.md",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"apple/swift-evolution",-1),S=n("code",null,"any",-1),I=k(`<p>Protocols allow us to specify a set of requirements that conforming types must adhere to, such as methods they must implement. So, we often write code like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">protocol</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">travel</span><span class="token punctuation">(</span>to destination<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">Car</span><span class="token punctuation">:</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">travel</span><span class="token punctuation">(</span>to destination<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;I&#39;m driving to </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">destination</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> vehicle <span class="token operator">=</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">vehicle<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;London&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It’s also possible to use protocols as generic type constraints in functions, meaning that we write code that can work with any kind of data that conforms to a particular protocol. For example, this will work with any kind of type that conforms to <code>Vehicle</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">travel</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Vehicle</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>to destinations<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">,</span> using vehicle<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> destination <span class="token keyword">in</span> destinations <span class="token punctuation">{</span></span>
<span class="line">        vehicle<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> destination<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;London&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Amarillo&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> using<span class="token punctuation">:</span> vehicle<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When that code compiles, Swift can see we’re calling <code>travel()</code> with a <code>Car</code> instance and so it is able to create optimized code to call the <code>travel()</code> function directly – a process known as <em>static dispatch</em>.</p><p>All this matters because there is a second way to use protocols, and it looks very similar to the other code we’ve used so far:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> vehicle2<span class="token punctuation">:</span> <span class="token class-name">Vehicle</span> <span class="token operator">=</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">vehicle2<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Glasgow&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Here we are still creating a <code>Car</code> struct, but we’re storing it as a <code>Vehicle</code>. This isn’t just a simple matter of hiding the underlying information, but instead this <code>Vehicle</code> type is a whole other thing called an <em>existential type</em>: a new data type that is able to hold any value of any type that conforms to the <code>Vehicle</code> protocol.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>Existential types are different from opaque types that use the <code>some</code> keyword, e.g. <code>some View</code>, which must always represent one specific type that conforms to whatever constraints you specify.</p></div><p>We can use existential types with functions too, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">travel2</span><span class="token punctuation">(</span>to destinations<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">,</span> using vehicle<span class="token punctuation">:</span> <span class="token class-name">Vehicle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> destination <span class="token keyword">in</span> destinations <span class="token punctuation">{</span></span>
<span class="line">        vehicle<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> destination<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That might look similar to the other <code>travel()</code> function, but as this one accepts any kind of <code>Vehicle</code> object Swift can no longer perform the same set of optimizations – it has to use a process called <em>dynamic dispatch</em>, which is less efficient than the static dispatch available in the generic equivalent. So, Swift was in a position where both uses of protocols looked very similar, and actually the slower, existential version of our function was easier to write.</p><p>To resolve this problem, Swift 5.6 introduces a new <code>any</code> keyword for use with existential types, so that we’re explicitly acknowledging the impact of existentials in our code. In Swift 5.6 this new behavior is enabled and works, but in future Swift versions failing to use it will generate warnings, and from Swift 6 onwards the plan is to issue errors – you will be <em>required</em> to mark existential types using <code>any</code>.</p><p>So, you would write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> vehicle3<span class="token punctuation">:</span> any <span class="token class-name">Vehicle</span> <span class="token operator">=</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">vehicle3<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Glasgow&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">travel3</span><span class="token punctuation">(</span>to destinations<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">,</span> using vehicle<span class="token punctuation">:</span> any <span class="token class-name">Vehicle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> destination <span class="token keyword">in</span> destinations <span class="token punctuation">{</span></span>
<span class="line">        vehicle<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> destination<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I know it took a lot of explanation to reach this conclusion, but hopefully it makes sense: when we use <code>Vehicle</code> as a conformance or a generic constraint we will carry on writing <code>Vehicle</code>, but when we use it as its own type we should start moving across to <code>any Vehicle</code>.</p>`,16),C={class:"hint-container note"},V=n("p",{class:"hint-container-title"},"This is a big breaking change in Swift.",-1),q=n("p",null,"Fortunately, like I said the Swift team are taking it slow – here’s what they said in the acceptance decision:",-1),T=n("blockquote",null,[n("p",null,"“The goal is that that one can write code that compiles without warnings for the current Swift release and at least one major release prior, after which warnings can be introduced to guide users to the new syntax in existing language modes. Finally, the old syntax can be removed or repurposed only in a new major language version.”")],-1),A={class:"hint-container details"},P=n("summary",null,"Other Changes in Swift 5.6",-1),j={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip",target:"_blank",rel:"noopener noreferrer"};function E(l,F){const a=o("VPCard"),c=o("FontIcon"),p=o("SiteInfo");return m(),u("div",null,[n("h1",g,[n("a",w,[n("span",null,d(l.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,y,s(a,t(e({title:"Introduce existential any | Changes in Swift 5.6",desc:"Introduce existential any",link:"https://hackingwithswift.com/swift/5.6/existential-any",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,n("p",null,[n("a",_,[i("SE-0335 ("),s(c,{icon:"iconfont icon-github"}),x,i(")")]),i(" introduces a new "),S,i(" keyword to mark existential types, and although that might sound esoteric please don’t skip ahead: this one is a big change, and is likely to break a lot of Swift code in future versions.")]),I,n("div",C,[V,q,T,s(p,{name:"[Accepted with modifications] SE-0335: Introduce existential `any` - Evolution / Announcements - Swift Forums",desc:"Hello Swift Community, The review  of SE-0335: Introduce existential any has completed. We had great discussions throughout the pitch and review phases of this proposal. The Core Team has accepted this proposal with sma...",url:"https://forums.swift.org/t/accepted-with-modifications-se-0335-introduce-existential-any/54504",logo:"https://global.discourse-cdn.com/swift/optimized/1X/0a90dde98a223f5841eeca49d89dc9f57592e8d6_2_180x180.png",preview:"https://global.discourse-cdn.com/swift/original/1X/0a90dde98a223f5841eeca49d89dc9f57592e8d6.png"})]),n("details",A,[P,h(` 
\`\`\`component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(a,t(e({title:"Type placeholders | Changes in Swift 5.6",desc:"Type placeholders",link:"/hackingwithswift.com/swift/5.6/type-placeholders.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",desc:"Allow coding of non String/Int keyed Dictionary into a KeyedContainer",link:"/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Unavailability condition | Changes in Swift 5.6",desc:"Unavailability condition",link:"/hackingwithswift.com/swift/5.6/unavailable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"More concurrency changes | Changes in Swift 5.6",desc:"More concurrency changes",link:"/hackingwithswift.com/swift/5.6/preconcurrency.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Plugins for Swift Package Manager | Changes in Swift 5.6",desc:"Plugins for Swift Package Manager",link:"/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",j,[s(c,{icon:"fas fa-file-zipper"}),i("Download Swift 5.6 playground")])])])])}const K=r(f,[["render",E],["__file","existential-any.html.vue"]]),M=JSON.parse('{"path":"/hackingwithswift.com/swift/5.6/existential-any.html","title":"Introduce existential any","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Introduce existential any","description":"Article(s) > Introduce existential any","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.6"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Introduce existential any"},{"property":"og:description","content":"Introduce existential any"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.6/existential-any.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.6/existential-any.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Introduce existential any"}],["meta",{"property":"og:description","content":"Article(s) > Introduce existential any"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.6"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Introduce existential any\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/hackingwithswift.com/swift/5.7/noasync.md","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.53,"words":1059},"filePathRelative":"hackingwithswift.com/swift/5.6/existential-any.md","excerpt":"\\n"}');export{K as comp,M as data};
