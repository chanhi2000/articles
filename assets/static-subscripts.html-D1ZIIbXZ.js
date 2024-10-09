import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as s,t as u,e as n,n as t,g as e,d as i,a as k,f as d,r as p,o as g}from"./app-BgNevrm5.js";const m={},h={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=s("nav",{class:"table-of-contents"},[s("ul")],-1),v=s("hr",null,null,-1),b=s("blockquote",null,[s("p",null,"Available from Swift 5.1")],-1),y={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0254-static-subscripts.md",target:"_blank",rel:"noopener noreferrer"},S=s("code",null,"apple/swift-evolution",-1),_=s("em",null,"static",-1),q=d(`<p>Static properties and methods are used when one set of values is shared between all instances of that type. For example, if you had one centralized type to store your app settings, you might write code like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">OldSettings</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">var</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">get</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> values<span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">set</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> to newValue<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Adjusting </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> to </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">newValue <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;nil&quot;</span></span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        values<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> newValue</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">OldSettings</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Captain&quot;</span></span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Gary&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token class-name">OldSettings</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Friend&quot;</span></span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Mooncake&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">OldSettings</span><span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Captain&quot;</span></span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;Unknown&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wrapping the dictionary inside a type means that we can control access more carefully, and using an enum with no cases means we can’t try to instantiate the type – we can’t make various instances of <code>Settings</code>.</p><p>With Swift 5.1 we can now use a static subscript instead, allowing us to rewrite our code to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">NewSettings</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">var</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">subscript</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">get</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> values<span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">set</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Adjusting </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> to </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">newValue <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;nil&quot;</span></span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            values<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> newValue</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">NewSettings</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Captain&quot;</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Gary&quot;</span></span></span>
<span class="line"><span class="token class-name">NewSettings</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Friend&quot;</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Mooncake&quot;</span></span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">NewSettings</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Captain&quot;</span></span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;Unknown&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Custom subscripts like this have always been possible for instances of types; this improvement makes static or class subscripts possible too.</p>`,6),C={class:"hint-container details"},V=s("summary",null,"Other Changes in Swift 5.1",-1),z={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-5-0-to-5-1.playground.zip",target:"_blank",rel:"noopener noreferrer"};function x(c,N){const a=p("VPCard"),o=p("FontIcon");return g(),r("div",null,[s("h1",h,[s("a",w,[s("span",null,u(c.$frontmatter.title)+" 관련",1)])]),n(a,t(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,v,n(a,t(e({title:"Static and class subscripts | Changes in Swift 5.1",desc:"Static and class subscripts",link:"https://hackingwithswift.com/swift/5.1/static-subscripts",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,s("p",null,[s("a",y,[i("SE-0254 ("),n(o,{icon:"iconfont icon-github"}),S,i(")")]),i(" adds the ability to mark subscripts as being "),_,i(", which means they apply to types rather than instances of a type.")]),q,s("details",C,[V,n(a,t(e({title:"Improvements to synthesized memberwise initializers | Changes in Swift 5.1",desc:"Improvements to synthesized memberwise initializers",link:"/hackingwithswift.com/swift/5.1/improved-memberwise-initializers.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Implicit returns from single-expression functions | Changes in Swift 5.1",desc:"Implicit returns from single-expression functions",link:"/hackingwithswift.com/swift/5.1/implicit-returns.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Universal Self | Changes in Swift 5.1",desc:"Universal Self",link:"/hackingwithswift.com/swift/5.1/universal-self.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Opaque return types | Changes in Swift 5.1",desc:"Opaque return types",link:"/hackingwithswift.com/swift/5.1/opaque-return-types.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k(` 
\`\`\`component VPCard
{
  "title": "Static and class subscripts | Changes in Swift 5.1",
  "desc": "Static and class subscripts",
  "link": "/hackingwithswift.com/swift/5.1/static-subscripts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
 `),n(a,t(e({title:"Warnings for ambiguous none cases | Changes in Swift 5.1",desc:"Warnings for ambiguous none cases",link:"/hackingwithswift.com/swift/5.1/ambiguous-none-enum.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Matching optional enums against non-optionals | Changes in Swift 5.1",desc:"Matching optional enums against non-optionals",link:"/hackingwithswift.com/swift/5.1/matching-optional-enums.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Ordered collection diffing | Changes in Swift 5.1",desc:"Ordered collection diffing",link:"/hackingwithswift.com/swift/5.1/ordered-collection-diffing.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Creating uninitialized arrays | Changes in Swift 5.1",desc:"Creating uninitialized arrays",link:"/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s("p",null,[s("a",z,[n(o,{icon:"fas fa-file-zipper"}),i("Download Swift 5.1 playground")])])])])}const I=l(m,[["render",x],["__file","static-subscripts.html.vue"]]),W=JSON.parse('{"path":"/hackingwithswift.com/swift/5.1/static-subscripts.html","title":"Static and class subscripts","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Static and class subscripts","description":"Article(s) > Static and class subscripts","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-5.1"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Static and class subscripts"},{"property":"og:description","content":"Static and class subscripts"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.1/static-subscripts.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/5.1/static-subscripts.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Static and class subscripts"}],["meta",{"property":"og:description","content":"Article(s) > Static and class subscripts"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.1"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Static and class subscripts\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.13,"words":640},"filePathRelative":"hackingwithswift.com/swift/5.1/static-subscripts.md","excerpt":"\\n"}');export{I as comp,W as data};
