import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as t,t as d,e as n,n as e,g as s,d as a,a as m,f as h,r as c,o as g}from"./app-BgNevrm5.js";const u={},f={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},k=t("nav",{class:"table-of-contents"},[t("ul")],-1),v=t("hr",null,null,-1),b=t("blockquote",null,[t("p",null,"Available from Swift 4.1")],-1),y={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0075-import-test.md",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"apple/swift-evolution",-1),S=t("code",null,"canImport",-1),C=h(`<p>This is particularly important for cross-platform code: if you had a Swift file that implemented one behavior on macOS and another on iOS, or if you needed specific functionality for Linux. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token directive property"><span class="token directive-name">#if</span> canImport<span class="token punctuation">(</span>SpriteKit<span class="token punctuation">)</span></span></span>
<span class="line">   <span class="token comment">// this will be true for iOS, macOS, tvOS, and watchOS</span></span>
<span class="line"><span class="token directive property"><span class="token directive-name">#else</span></span></span>
<span class="line">   <span class="token comment">// this will be true for other platforms, such as Linux</span></span>
<span class="line"><span class="token directive property"><span class="token directive-name">#endif</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Previously you would have had to use inclusive or exclusive tests by operating system, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token directive property"><span class="token directive-name">#if</span> <span class="token operator">!</span>os<span class="token punctuation">(</span>Linux<span class="token punctuation">)</span></span></span>
<span class="line">   <span class="token comment">// Matches macOS, iOS, watchOS, tvOS, and any other future platforms</span></span>
<span class="line"><span class="token directive property"><span class="token directive-name">#endif</span></span></span>
<span class="line"></span>
<span class="line"><span class="token directive property"><span class="token directive-name">#if</span> os<span class="token punctuation">(</span>macOS<span class="token punctuation">)</span> <span class="token operator">||</span> os<span class="token punctuation">(</span>iOS<span class="token punctuation">)</span> <span class="token operator">||</span> os<span class="token punctuation">(</span>tvOS<span class="token punctuation">)</span> <span class="token operator">||</span> os<span class="token punctuation">(</span>watchOS<span class="token punctuation">)</span></span></span>
<span class="line">   <span class="token comment">// Matches only Apple platforms, but needs to be kept up to date as new platforms are added</span></span>
<span class="line"><span class="token directive property"><span class="token directive-name">#endif</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The new <code>canImport</code> condition lets us focus on the functionality we care about rather than what platform we&#39;re compiling for, thus avoiding a variety of problems.</p>`,5),O={class:"hint-container details"},B=t("summary",null,"Other Changes in Swift 4.1",-1),x={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-4-0-to-4-1.playground.zip",target:"_blank",rel:"noopener noreferrer"};function A(l,T){const i=c("VPCard"),o=c("FontIcon");return g(),p("div",null,[t("h1",f,[t("a",w,[t("span",null,d(l.$frontmatter.title)+" 관련",1)])]),n(i,e(s({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k,v,n(i,e(s({title:"Build configuration import testing | Changes in Swift 4.1",desc:"Build configuration import testing",link:"https://hackingwithswift.com/swift/4.1/import-testing",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,t("p",null,[a("Swift 4.1 implemented "),t("a",y,[a("SE-0075 ("),n(o,{icon:"iconfont icon-github"}),_,a(")")]),a(", which introduced a new "),S,a(" condition that lets us check whether a specific module can be imported when our code is compiled.")]),C,t("details",O,[B,n(i,e(s({title:"Synthesized Equatable and Hashable | Changes in Swift 4.1",desc:"Synthesized Equatable and Hashable",link:"/hackingwithswift.com/swift/4.1/synthesized-protocols.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(i,e(s({title:"Key decoding strategies for Codable | Changes in Swift 4.1",desc:"Key decoding strategies for Codable",link:"/hackingwithswift.com/swift/4.1/key-decoding-strategies.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(i,e(s({title:"Conditional conformances | Changes in Swift 4.1",desc:"Conditional conformances",link:"/hackingwithswift.com/swift/4.1/conditional-conformance.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(i,e(s({title:"Recursive constraints on associated types | Changes in Swift 4.1",desc:"Recursive constraints on associated types",link:"/hackingwithswift.com/swift/4.1/recursive-constraints.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),m(` 
\`\`\`component VPCard
{
  "title": "Build configuration import testing | Changes in Swift 4.1",
  "desc": "Build configuration import testing",
  "link": "/hackingwithswift.com/swift/4.1/import-testing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),n(i,e(s({title:"Target environment testing | Changes in Swift 4.1",desc:"Target environment testing",link:"/hackingwithswift.com/swift/4.1/target-environment.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(i,e(s({title:"flatMap is now (partly) compactMap() | Changes in Swift 4.1",desc:"flatMap is now (partly) compactMap()",link:"/hackingwithswift.com/swift/4.1/compactmap.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t("p",null,[t("a",x,[n(o,{icon:"fas fa-file-zipper"}),a("Download Swift 4.1 playground")])])])])}const R=r(u,[["render",A],["__file","import-testing.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/swift/4.1/import-testing.html","title":"Build configuration import testing","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Build configuration import testing","description":"Article(s) > Build configuration import testing","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-4.1"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Build configuration import testing"},{"property":"og:description","content":"Build configuration import testing"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/4.1/import-testing.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/4.1/import-testing.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Build configuration import testing"}],["meta",{"property":"og:description","content":"Article(s) > Build configuration import testing"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-4.1"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Build configuration import testing\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"hackingwithswift.com/swift/4.1/import-testing.md","excerpt":"\\n"}');export{R as comp,V as data};
