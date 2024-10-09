import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as m,e as s,n as t,g as e,d as i,a as u,f as d,r as c,o as h}from"./app-BgNevrm5.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),v=n("hr",null,null,-1),b=n("blockquote",null,[n("p",null,"Available from Swift 5.4")],-1),y={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0287-implicit-member-chains.md",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"apple/swift-evolution",-1),_=d(`<p>Swift has always had the ability to use implicit member syntax for simple expressions, for example if you wanted to color some text in SwiftUI you could use <code>.red</code> rather than <code>Color.red</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">SwiftUI</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView1</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;You&#39;re not my supervisor!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prior to Swift 5.4 this did not work with more complex expressions. For example, if you wanted your red color to be slightly transparent you would need to write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView2</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;You&#39;re not my supervisor!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>From Swift 5.4 onwards the compiler is able to understand multiple chained members, meaning that the <code>Color</code> type can be inferred:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView3</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;You&#39;re not my supervisor!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),C={class:"hint-container details"},S=n("summary",null,"Other Changes in Swift 5.4",-1),I={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-3-to-5-4.playground.zip",target:"_blank",rel:"noopener noreferrer"};function V(l,P){const a=c("VPCard"),o=c("FontIcon");return h(),r("div",null,[n("h1",g,[n("a",f,[n("span",null,m(l.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),w,v,s(a,t(e({title:"Improved implicit member syntax | Changes in Swift 5.4",desc:"Improved implicit member syntax",link:"https://hackingwithswift.com/swift/5.4/improved-implicit-member-syntax",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,n("p",null,[n("a",y,[i("SE-0287 ("),s(o,{icon:"iconfont icon-github"}),x,i(")")]),i(" improves Swift’s ability to use implicit member expressions, so rather than just having support for exactly one single static member you can make chains of them.")]),_,n("details",C,[S,u(` 
\`\`\`component VPCard
{
  "title": "Improved implicit member syntax | Changes in Swift 5.4",
  "desc": "Improved implicit member syntax",
  "link": "/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(a,t(e({title:"Multiple variadic parameters in functions | Changes in Swift 5.4",desc:"Multiple variadic parameters in functions",link:"/hackingwithswift.com/swift/5.4/multiple-variadic-parameters-in-functions.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Local functions now support overloading | Changes in Swift 5.4",desc:"Local functions now support overloading",link:"/hackingwithswift.com/swift/5.4/local-functions-now-support-overloading.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Creating variables that call a function of the same name | Changes in Swift 5.4",desc:"Creating variables that call a function of the same name",link:"/hackingwithswift.com/swift/5.4/local-variables-same-name.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Result builders | Changes in Swift 5.4",desc:"Result builders",link:"/hackingwithswift.com/swift/5.4/result-builders.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Property wrappers are now supported for local variables | Changes in Swift 5.4",desc:"Property wrappers are now supported for local variables",link:"/hackingwithswift.com/swift/5.4/local-property-wrappers.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Packages can now declare executable targets | Changes in Swift 5.4",desc:"Packages can now declare executable targets",link:"/hackingwithswift.com/swift/5.4/spm-executable-targets.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",I,[s(o,{icon:"fas fa-file-zipper"}),i("Download Swift 5.4 playground")])])])])}const q=p(k,[["render",V],["__file","improved-implicit-member-syntax.html.vue"]]),N=JSON.parse('{"path":"/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.html","title":"Improved implicit member syntax","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Improved implicit member syntax","description":"Article(s) > Improved implicit member syntax","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.4"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Improved implicit member syntax"},{"property":"og:description","content":"Improved implicit member syntax"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Improved implicit member syntax"}],["meta",{"property":"og:description","content":"Article(s) > Improved implicit member syntax"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.4"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Improved implicit member syntax\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/hackingwithswift.com/swift/5.5/static-member-generic.md","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"hackingwithswift.com/swift/5.4/improved-implicit-member-syntax.md","excerpt":"\\n"}');export{q as comp,N as data};
