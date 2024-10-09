import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as d,e as s,n as t,g as e,d as i,a as u,f,r as c,o as h}from"./app-BgNevrm5.js";const m={},k={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),v=n("hr",null,null,-1),b=n("blockquote",null,[n("p",null,"Available from Swift 5.1")],-1),y={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0240-ordered-collection-diffing.md",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"apple/swift-evolution",-1),S=f(`<p>The basic principle is straightforward: Swift 5.1 gives us a new <code>difference(from:)</code> method that calculates the differences between two ordered collections – what items to remove and what items to insert. This can be used with any ordered collection that contains <code>Equatable</code> elements.</p><p>To demonstrate this, we can create an array of scores, calculate the difference from one to the other, then loop over those differences and apply each one to make our two collections the same.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Because Swift now ships inside Apple’s operating systems, new features like this one must be used with an <code>#available</code> check to make sure the code is being run on an OS that includes the new functionality. For features that will land in an unknown, unannounced operating system shipping at some point in the future, a special version number of “9999” is used to mean “we don’t know what the actual number is just yet.”</p></div><p>Here’s the code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> scores1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">91</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> scores2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">91</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token other-directive property">#available</span><span class="token punctuation">(</span>iOS <span class="token number">9999</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> diff <span class="token operator">=</span> scores2<span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> scores1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> change <span class="token keyword">in</span> diff <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">switch</span> change <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">let</span> offset<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            scores1<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> offset<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">let</span> offset<span class="token punctuation">,</span> <span class="token keyword">let</span> element<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            scores1<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> at<span class="token punctuation">:</span> offset<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span>scores1<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more advanced animations, you can use the third value of the changes: <code>associatedWith</code>. So, rather than using <code>.insert(let offset, let element, _)</code> above you might write <code>.insert(let offset, let element, let associatedWith)</code> instead. This lets you track pairs of changes at the same time: moving an item two places down in your collection is a removal then an insertion, but the <code>associatedWith</code> value ties those two changes together so you treat it as a move instead.</p><p>Rather than applying changes by hand, you can apply the whole collection using a new <code>applying()</code> method, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token other-directive property">#available</span><span class="token punctuation">(</span>iOS <span class="token number">9999</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> diff <span class="token operator">=</span> scores2<span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> scores1<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> scores1<span class="token punctuation">.</span><span class="token function">applying</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),C={class:"hint-container details"},O=n("summary",null,"Other Changes in Swift 5.1",-1),x={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip",target:"_blank",rel:"noopener noreferrer"};function z(l,A){const a=c("VPCard"),o=c("FontIcon");return h(),r("div",null,[n("h1",k,[n("a",g,[n("span",null,d(l.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),w,v,s(a,t(e({title:"Ordered collection diffing | Changes in Swift 5.1",desc:"Ordered collection diffing",link:"https://hackingwithswift.com/swift/5.1/ordered-collection-diffing",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,n("p",null,[n("a",y,[i("SE-0240 ("),s(o,{icon:"iconfont icon-github"}),_,i(")")]),i(" introduced the ability to calculate and apply the differences between ordered collections. This could prove particularly interesting for developers who have complex collections in table views, where they want to add and remove lots of items smoothly using animations.")]),S,n("details",C,[O,s(a,t(e({title:"Improvements to synthesized memberwise initializers | Changes in Swift 5.1",desc:"Improvements to synthesized memberwise initializers",link:"/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Implicit returns from single-expression functions | Changes in Swift 5.1",desc:"Implicit returns from single-expression functions",link:"/hackingwithswift.com/swift/5.1/implicit-returns.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Universal Self | Changes in Swift 5.1",desc:"Universal Self",link:"/hackingwithswift.com/swift/5.1/universal-self.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Opaque return types | Changes in Swift 5.1",desc:"Opaque return types",link:"/hackingwithswift.com/swift/5.1/opaque-return-types.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Static and class subscripts | Changes in Swift 5.1",desc:"Static and class subscripts",link:"/hackingwithswift.com/swift/5.1/static-subscripts.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Warnings for ambiguous none cases | Changes in Swift 5.1",desc:"Warnings for ambiguous none cases",link:"/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Matching optional enums against non-optionals | Changes in Swift 5.1",desc:"Matching optional enums against non-optionals",link:"/hackingwithswift.com/swift/5.1/matching-optional-enums.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),u(` 
\`\`\`component VPCard
{
  "title": "Ordered collection diffing | Changes in Swift 5.1",
  "desc": "Ordered collection diffing",
  "link": "/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(a,t(e({title:"Creating uninitialized arrays | Changes in Swift 5.1",desc:"Creating uninitialized arrays",link:"/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",x,[s(o,{icon:"fas fa-file-zipper"}),i("Download Swift 5.1 playground")])])])])}const N=p(m,[["render",z],["__file","ordered-collection-diffing.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/swift/5.1/ordered-collection-diffing.html","title":"Ordered collection diffing","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Ordered collection diffing","description":"Article(s) > Ordered collection diffing","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.1"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Ordered collection diffing"},{"property":"og:description","content":"Ordered collection diffing"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.1/ordered-collection-diffing.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.1/ordered-collection-diffing.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Ordered collection diffing"}],["meta",{"property":"og:description","content":"Article(s) > Ordered collection diffing"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.1"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ordered collection diffing\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.57,"words":770},"filePathRelative":"hackingwithswift.com/swift/5.1/ordered-collection-diffing.md","excerpt":"\\n"}');export{N as comp,V as data};
