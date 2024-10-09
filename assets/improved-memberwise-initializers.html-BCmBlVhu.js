import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,t as m,e as t,n as s,g as i,d as a,a as h,f as d,r,o as u}from"./app-BgNevrm5.js";const g={},w={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},k=n("nav",{class:"table-of-contents"},[n("ul")],-1),v=n("hr",null,null,-1),b=n("blockquote",null,[n("p",null,"Available from Swift 5.1")],-1),y={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0242-default-values-memberwise.md",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"apple/swift-evolution",-1),_=d(`<p>In earlier versions of Swift, a memberwise initializer was automatically created to accept parameters matching the properties of a struct, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> loginCount<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> piper <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Piper Chapman&quot;</span></span><span class="token punctuation">,</span> loginCount<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Swift 5.1 this has been enhanced so that the memberwise initializer now uses default parameter values for any properties that have them. In the <code>User</code> struct we’ve given <code>loginCount</code> a default value of 0, which means we can either specify it or leave it to the memberwise initializer:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> gloria <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Gloria Mendoza&quot;</span></span><span class="token punctuation">,</span> loginCount<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> suzanne <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Suzanne Warren&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>This lets us avoid repeating code, which is always welcome.</p>`,5),S={class:"hint-container details"},C=n("summary",null,"Other Changes in Swift 5.1",-1),I={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip",target:"_blank",rel:"noopener noreferrer"};function q(l,x){const e=r("VPCard"),o=r("FontIcon");return u(),p("div",null,[n("h1",w,[n("a",f,[n("span",null,m(l.$frontmatter.title)+" 관련",1)])]),t(e,s(i({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k,v,t(e,s(i({title:"Improvements to synthesized memberwise initializers | Changes in Swift 5.1",desc:"Improvements to synthesized memberwise initializers",link:"https://hackingwithswift.com/swift/5.1/improved-memberwise-initializers",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,n("p",null,[n("a",y,[a("SE-0242 ("),t(o,{icon:"iconfont icon-github"}),z,a(")")]),a(" introduced major improvements to one of Swift’s most commonly used features: memberwise initializers for structs.")]),_,n("details",S,[C,h(` 
\`\`\`component VPCard
{
  "title": "Improvements to synthesized memberwise initializers | Changes in Swift 5.1",
  "desc": "Improvements to synthesized memberwise initializers",
  "link": "/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),t(e,s(i({title:"Implicit returns from single-expression functions | Changes in Swift 5.1",desc:"Implicit returns from single-expression functions",link:"/hackingwithswift.com/swift/5.1/implicit-returns.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Universal Self | Changes in Swift 5.1",desc:"Universal Self",link:"/hackingwithswift.com/swift/5.1/universal-self.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Opaque return types | Changes in Swift 5.1",desc:"Opaque return types",link:"/hackingwithswift.com/swift/5.1/opaque-return-types.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Static and class subscripts | Changes in Swift 5.1",desc:"Static and class subscripts",link:"/hackingwithswift.com/swift/5.1/static-subscripts.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Warnings for ambiguous none cases | Changes in Swift 5.1",desc:"Warnings for ambiguous none cases",link:"/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Matching optional enums against non-optionals | Changes in Swift 5.1",desc:"Matching optional enums against non-optionals",link:"/hackingwithswift.com/swift/5.1/matching-optional-enums.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Ordered collection diffing | Changes in Swift 5.1",desc:"Ordered collection diffing",link:"/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(e,s(i({title:"Creating uninitialized arrays | Changes in Swift 5.1",desc:"Creating uninitialized arrays",link:"/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",I,[t(o,{icon:"fas fa-file-zipper"}),a("Download Swift 5.1 playground")])])])])}const N=c(g,[["render",q],["__file","improved-memberwise-initializers.html.vue"]]),O=JSON.parse('{"path":"/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.html","title":"Improvements to synthesized memberwise initializers","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Improvements to synthesized memberwise initializers","description":"Article(s) > Improvements to synthesized memberwise initializers","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.1"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Improvements to synthesized memberwise initializers"},{"property":"og:description","content":"Improvements to synthesized memberwise initializers"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Improvements to synthesized memberwise initializers"}],["meta",{"property":"og:description","content":"Article(s) > Improvements to synthesized memberwise initializers"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.1"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Improvements to synthesized memberwise initializers\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/hackingwithswift.com/swift/5.2/new-diagnostics.md","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md","excerpt":"\\n"}');export{N as comp,O as data};
