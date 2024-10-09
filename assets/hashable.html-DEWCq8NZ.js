import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,t as h,e as s,n as e,g as t,d as i,a as u,f as d,r as c,o as m}from"./app-BgNevrm5.js";const g={},f={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),b=n("hr",null,null,-1),v=n("blockquote",null,[n("p",null,"Available from Swift 4.2")],-1),y={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0206-hashable-enhancements.md",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"apple/swift-evolution",-1),S=n("code",null,"Hashable",-1),C=d(`<p>From Swift 4.1 onwards conformance to <code>Hashable</code> can be synthesized by the compiler. However, if you want your own hashing implementation – for example, if your type has many properties but you know that one of them was enough to identify it uniquely – you still need to write your own code using whatever algorithm you thought was best.</p><p>Swift 4.2 introduced a new <code>Hasher</code> struct that provides a randomly seeded, universal hash function to make this process easier:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> iPad<span class="token punctuation">:</span> <span class="token class-name">Hashable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> serialNumber<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> capacity<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">hash</span><span class="token punctuation">(</span>into hasher<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token class-name">Hasher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can add more properties to your hash by calling <code>combine()</code> repeatedly, and the order in which you add properties affects the finished hash value.</p><p>You can also use <code>Hasher</code> as a standalone hash generator: just provide it with whatever values you want to hash, then call <code>finalize()</code> to generate the final value. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token function">iPad</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;12345&quot;</span></span><span class="token punctuation">,</span> capacity<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token function">iPad</span><span class="token punctuation">(</span>serialNumber<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;54321&quot;</span></span><span class="token punctuation">,</span> capacity<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> hasher <span class="token operator">=</span> <span class="token class-name">Hasher</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span></span>
<span class="line">hasher<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> hash <span class="token operator">=</span> hasher<span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Hasher</code> uses a random seed every time it hashes an object, which means the hash value for any object is effectively guaranteed to be different between runs of your app.</p><p>This in turn means that elements you add to a set or a dictionary are highly likely to have a different order each time you run your app.</p>`,8),H={class:"hint-container details"},N=n("summary",null,"Other Changes in Swift 4.2",-1),x={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-4-1-to-4-2.playground.zip",target:"_blank",rel:"noopener noreferrer"};function P(l,q){const a=c("VPCard"),o=c("FontIcon");return m(),p("div",null,[n("h1",f,[n("a",k,[n("span",null,h(l.$frontmatter.title)+" 관련",1)])]),s(a,e(t({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),w,b,s(a,e(t({title:"Simpler, more secure hashing | Changes in Swift 4.2",desc:"Simpler, more secure hashing",link:"https://hackingwithswift.com/swift/4.2/hashable",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("p",null,[i("Swift 4.2 implemented "),n("a",y,[i("SE-0206 ("),s(o,{icon:"iconfont icon-github"}),_,i(")")]),i(", which simplifies the way we make custom types conform to the "),S,i(" protocol.")]),C,n("details",H,[N,s(a,e(t({title:"Derived collections of enum cases | Changes in Swift 4.2",desc:"Derived collections of enum cases",link:"/hackingwithswift.com/swift/4.2/caseiterable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,e(t({title:"Warning and error diagnostic directives | Changes in Swift 4.2",desc:"Warning and error diagnostic directives",link:"/hackingwithswift.com/swift/4.2/warning-error.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,e(t({title:"Dynamic member look up | Changes in Swift 4.2",desc:"Dynamic member look up",link:"/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,e(t({title:"Enhanced conditional conformances | Changes in Swift 4.2",desc:"Enhanced conditional conformances",link:"/hackingwithswift.com/swift/4.2/conditional-conformance.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,e(t({title:"Random number generation and shuffling | Changes in Swift 4.2",desc:"Random number generation and shuffling",link:"/hackingwithswift.com/swift/4.2/random.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),u(` 
\`\`\`component VPCard
{
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "/hackingwithswift.com/swift/4.2/hashable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(a,e(t({title:"Checking sequence elements match a condition | Changes in Swift 4.2",desc:"Checking sequence elements match a condition",link:"/hackingwithswift.com/swift/4.2/allsatisfy.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,e(t({title:"In-place collection element removal | Changes in Swift 4.2",desc:"In-place collection element removal",link:"/hackingwithswift.com/swift/4.2/remove-where.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,e(t({title:"Boolean toggling | Changes in Swift 4.2",desc:"Boolean toggling",link:"/hackingwithswift.com/swift/4.2/toggle.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",x,[s(o,{icon:"fas fa-file-zipper"}),i("Download Swift 4.2 playground")])])])])}const R=r(g,[["render",P],["__file","hashable.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/swift/4.2/hashable.html","title":"Simpler, more secure hashing","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Simpler, more secure hashing","description":"Article(s) > Simpler, more secure hashing","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-4.2"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Simpler, more secure hashing"},{"property":"og:description","content":"Simpler, more secure hashing"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/4.2/hashable.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/4.2/hashable.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Simpler, more secure hashing"}],["meta",{"property":"og:description","content":"Article(s) > Simpler, more secure hashing"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-4.2"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Simpler, more secure hashing\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"hackingwithswift.com/swift/4.2/hashable.md","excerpt":"\\n"}');export{R as comp,V as data};
