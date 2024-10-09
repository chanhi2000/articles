import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,t as h,e as t,n,g as s,d as o,a as g,f,r as c,o as m}from"./app-BgNevrm5.js";const p={},w={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},k=e("nav",{class:"table-of-contents"},[e("ul")],-1),b=e("hr",null,null,-1),y=e("blockquote",null,[e("p",null,"Available from Swift 5.3")],-1),v={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0268-didset-semantics.md",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"apple/swift-evolution",-1),S=e("code",null,"didSet",-1),C=f(`<p>Internally, this change makes Swift <em>not</em> retrieve the previous value when setting a new value in any instance where you weren’t using the old value, and if you don’t reference <code>oldValue</code> <em>and</em> don’t have a <code>willSet</code> Swift will change your data in-place.</p><p>If you do happen to be relying on the old behavior, you can work around it simply by referencing <code>oldValue</code> to trigger your custom getter, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">didSet</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token omit keyword">_</span> <span class="token operator">=</span> oldValue</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R={class:"hint-container details"},V=e("summary",null,"Other Changes in Swift 5.3",-1),A={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-2-to-5-3.playground.zip",target:"_blank",rel:"noopener noreferrer"};function x(l,M){const i=c("VPCard"),a=c("FontIcon");return m(),d("div",null,[e("h1",w,[e("a",u,[e("span",null,h(l.$frontmatter.title)+" 관련",1)])]),t(i,n(s({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k,b,t(i,n(s({title:"Refined didSet semantics | Changes in Swift 5.3",desc:"Refined didSet semantics",link:"https://hackingwithswift.com/swift/5.3/refined-didset",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,e("p",null,[e("a",v,[o("SE-0268 ("),t(a,{icon:"iconfont icon-github"}),_,o(")")]),o(" adjusts the way the "),S,o(" property observers work so that they are more efficient. This doesn’t require a code change unless you were somehow relying on the previous buggy behavior; you’ll just get a small performance improvement for free.")]),C,e("details",R,[V,t(i,n(s({title:"Multi-pattern catch clauses | Changes in Swift 5.3",desc:"Multi-pattern catch clauses",link:"/hackingwithswift.com/swift/5.3/multipattern-catch.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"Multiple trailing closures | Changes in Swift 5.3",desc:"Multiple trailing closures",link:"/hackingwithswift.com/swift/5.3/multiple-trailing-closures.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"Synthesized Comparable conformance for enums | Changes in Swift 5.3",desc:"Synthesized Comparable conformance for enums",link:"/hackingwithswift.com/swift/5.3/synthesized-comparable-enum.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"self is no longer required in many places | Changes in Swift 5.3",desc:"self is no longer required in many places",link:"/hackingwithswift.com/swift/5.3/removing-self.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"Type-based program entry points | Changes in Swift 5.3",desc:"Type-based program entry points",link:"/hackingwithswift.com/swift/5.3/atmain.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"where clauses on contextually generic declarations | Changes in Swift 5.3",desc:"where clauses on contextually generic declarations",link:"/hackingwithswift.com/swift/5.3/where-clauses.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"Enum cases as protocol witnesses | Changes in Swift 5.3",desc:"Enum cases as protocol witnesses",link:"/hackingwithswift.com/swift/5.3/enum-protocol-witnesses.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g(` 
\`\`\`component VPCard
{
  "title": "Refined didSet semantics | Changes in Swift 5.3",
  "desc": "Refined didSet semantics",
  "link": "/hackingwithswift.com/swift/5.3/refined-didset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),t(i,n(s({title:"A new Float16 type | Changes in Swift 5.3",desc:"A new Float16 type",link:"/hackingwithswift.com/swift/5.3/float16.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(i,n(s({title:"Swift Package Manager gains binary dependencies, resources, and more | Changes in Swift 5.3",desc:"Swift Package Manager gains binary dependencies, resources, and more",link:"/hackingwithswift.com/swift/5.3/spm-improvements.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e("p",null,[e("a",A,[t(a,{icon:"fas fa-file-zipper"}),o("Download Swift 5.3 playground")])])])])}const N=r(p,[["render",x],["__file","refined-didset.html.vue"]]),T=JSON.parse('{"path":"/hackingwithswift.com/swift/5.3/refined-didset.html","title":"Refined didSet semantics","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Refined didSet semantics","description":"Article(s) > Refined didSet semantics","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.3"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Refined didSet semantics"},{"property":"og:description","content":"Refined didSet semantics"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.3/refined-didset.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.3/refined-didset.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Refined didSet semantics"}],["meta",{"property":"og:description","content":"Article(s) > Refined didSet semantics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.3"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Refined didSet semantics\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"hackingwithswift.com/swift/5.3/refined-didset.md","excerpt":"\\n"}');export{N as comp,T as data};
