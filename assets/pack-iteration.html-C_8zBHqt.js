import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as h,e as n,n as s,g as o,d as a,a as u,f as d,r as c,o as g}from"./app-BgNevrm5.js";const f={},k={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),y=t("blockquote",null,[t("p",null,"Available from Swift 6.0")],-1),v={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0408-pack-iteration.md",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"apple/swift-evolutino",-1),S=d(`<p>Although value packs remain one of the most complex features of Swift, the evolution proposal shows just how useful this feature is by adding tuple comparison for any arity in just a few lines of code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token operator">==</span> <span class="token operator">&lt;</span>each <span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">repeat</span> each <span class="token class-name">Element</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">repeat</span> each <span class="token class-name">Element</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">left</span><span class="token punctuation">,</span> <span class="token keyword">right</span><span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token keyword">repeat</span> <span class="token punctuation">(</span>each lhs<span class="token punctuation">,</span> each rhs<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">guard</span> <span class="token keyword">left</span> <span class="token operator">==</span> <span class="token keyword">right</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0015-tuple-comparison-operators.md",target:"_blank",rel:"noopener noreferrer"},P=t("code",null,"apple/swift-evolution",-1),A=t("code",null,"(1, 2, 3, 4, 5, 6, 7) == (1, 2, 3, 4, 5, 6, 7)",-1),E={href:"https://github.com/apple/swift-evolution/blob/main/proposals/0408-pack-iteration.md#future-directions",target:"_blank",rel:"noopener noreferrer"},I=t("code",null,"apple/swift-evolution",-1),x=t("code",null,"zip()",-1),N={class:"hint-container details"},T=t("summary",null,"Other Changes in Swift 6.0",-1),V={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-10-to-6-0.playground.zip",target:"_blank",rel:"noopener noreferrer"};function B(l,R){const e=c("VPCard"),i=c("FontIcon");return g(),r("div",null,[t("h1",k,[t("a",w,[t("span",null,h(l.$frontmatter.title)+" 관련",1)])]),n(e,s(o({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),m,b,n(e,s(o({title:"Pack iteration | Changes in Swift 6.0",desc:"Pack iteration",link:"https://hackingwithswift.com/swift/6.0/pack-iteration",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,t("p",null,[t("a",v,[a("SE-0408 ("),n(i,{icon:"iconfont icon-github"}),_,a(")")]),a(" introduces pack iteration, which adds the ability to loop over the parameter pack feature introduced in Swift 5.9.")]),S,t("p",null,[a("If that means nothing to you, the Simple English version is that "),t("a",C,[a("SE-0015 ("),n(i,{icon:"iconfont icon-github"}),P,a(")")]),a(" added support for direct tuple comparison up to arity 6, meaning that two tuples with up to six items could be compared using ==. If you tried comparing tuples with seven items – e.g. "),A,a(" – Swift would throw up an error. SE-0408, along with the code above, removes that restriction.")]),t("p",null,[a("Tantalizingly, the "),t("a",E,[a("Future Directions section ("),n(i,{icon:"iconfont icon-github"}),I,a(")")]),a(" of this evolution proposal suggests that in the future we might see a variant of Swift's "),x,a(" function that supports any number of sequences.")]),t("details",N,[T,n(e,s(o({title:"Complete concurrency enabled by default | Changes in Swift 6.0",desc:"Complete concurrency enabled by default",link:"/hackingwithswift.com/swift/6.0/concurrency.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(o({title:"count(where:) | Changes in Swift 6.0",desc:"count(where:)",link:"/hackingwithswift.com/swift/6.0/count-where.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(o({title:"Typed throws | Changes in Swift 6.0",desc:"Typed throws",link:"/hackingwithswift.com/swift/6.0/typed-throws.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),u(` 
\`\`\`component VPCard
{
  "title": "Pack iteration | Changes in Swift 6.0",
  "desc": "Pack iteration",
  "link": "/hackingwithswift.com/swift/6.0/pack-iteration.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),n(e,s(o({title:"Add Collection Operations on Noncontiguous Elements | Changes in Swift 6.0",desc:"Add Collection Operations on Noncontiguous Elements",link:"/hackingwithswift.com/swift/6.0/rangeset.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(o({title:"Access-level modifiers on import declarations | Changes in Swift 6.0",desc:"Access-level modifiers on import declarations",link:"/hackingwithswift.com/swift/6.0/access-level-import.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(o({title:"Upgrades for noncopyable types | Changes in Swift 6.0",desc:"Upgrades for noncopyable types",link:"/hackingwithswift.com/swift/6.0/noncopyable-upgrades.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(o({title:"128-bit Integer Types | Changes in Swift 6.0",desc:"128-bit Integer Types",link:"/hackingwithswift.com/swift/6.0/int128.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(o({title:"BitwiseCopyable | Changes in Swift 6.0",desc:"BitwiseCopyable",link:"/hackingwithswift.com/swift/6.0/bitwisecopyable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t("p",null,[t("a",V,[n(i,{icon:"fas fa-file-zipper"}),a("Download Swift 6.0 playground")])])])])}const j=p(f,[["render",B],["__file","pack-iteration.html.vue"]]),D=JSON.parse('{"path":"/hackingwithswift.com/swift/6.0/pack-iteration.html","title":"Pack iteration","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Pack iteration","description":"Article(s) > Pack iteration","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-6.0"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Pack iteration"},{"property":"og:description","content":"Pack iteration"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/6.0/pack-iteration.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/6.0/pack-iteration.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Pack iteration"}],["meta",{"property":"og:description","content":"Article(s) > Pack iteration"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-6.0"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Pack iteration\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2,"words":601},"filePathRelative":"hackingwithswift.com/swift/6.0/pack-iteration.md","excerpt":"\\n"}');export{j as comp,D as data};
