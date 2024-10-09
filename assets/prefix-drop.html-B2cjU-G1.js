import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as r,e as n,n as s,g as a,a as u,d as h,f as d,r as o,o as g}from"./app-BgNevrm5.js";const f={},k={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},w=t("nav",{class:"table-of-contents"},[t("ul")],-1),q=t("hr",null,null,-1),y=d(`<blockquote><p>Available from Swift 3.1</p></blockquote><p>Two useful new methods have been added to the <code>Sequence</code> protocol: <code>prefix(while:)</code> and <code>drop(while:)</code>. The former returns the longest subsequence that satisfies a predicate, which is a fancy way of saying that you give it a closure to run on every item, and it will go through all the elements in the sequence and return those that match the closure – but will stop as soon as it finds a non-matching element.</p><p>Let&#39;s take a look at a code example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Michael Jackson&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael Jordan&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael Caine&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Taylor Swift&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Adele Adkins&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael Douglas&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> prefixed <span class="token operator">=</span> names<span class="token punctuation">.</span><span class="token keyword">prefix</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Michael&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>prefixed<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That uses the <code>hasPrefix()</code> method to return the subsequence <code>[&quot;Michael Jackson&quot;, &quot;Michael Jordan&quot;, &quot;Michael Caine&quot;</code> – the first three elements in the sequence. It won&#39;t include &quot;Michael Douglas&quot;, because that comes after the first non-Michael. If you wanted <em>all</em> the Michaels regardless of their position, you should use <code>filter()</code> instead.</p><p>The second new method, <code>drop(while:)</code> is effectively the opposite: it finds the longest subsequence that satisfies your predicate, then returns everything <em>after</em> it. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Michael Jackson&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael Jordan&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael Caine&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Taylor Swift&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Adele Adkins&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michael Douglas&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> dropped <span class="token operator">=</span> names<span class="token punctuation">.</span>drop <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span><span class="token function">hasPrefix</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Michael&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>dropped<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That will return the subsequence <code>[&quot;Taylor Swift&quot;, &quot;Adele Adkins&quot;, &quot;Michael Douglas&quot;]</code> – everything after the initial Michaels.</p>`,8),b={class:"hint-container details"},v=t("summary",null,"Other Changes in Swift 3.1",-1),x={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-3-0-to-3-1.playground.zip",target:"_blank",rel:"noopener noreferrer"};function _(i,S){const e=o("VPCard"),c=o("FontIcon");return g(),l("div",null,[t("h1",k,[t("a",m,[t("span",null,r(i.$frontmatter.title)+" 관련",1)])]),n(e,s(a({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),w,q,n(e,s(a({title:"All function parameters have labels unless you request otherwise | Changes in Swift 3.1",desc:"Sequences get prefix(while:) and drop(while:) methods",link:"https://hackingwithswift.com/swift/3.1/prefix-drop",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,t("details",b,[v,n(e,s(a({title:"Concrete constrained extensions | Changes in Swift 3.1",desc:"Concrete constrained extensions",link:"/hackingwithswift.com/swift/3.1/concrete-constrained-extensions.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(a({title:"Generics with nested types | Changes in Swift 3.1",desc:"Generics with nested types",link:"/hackingwithswift.com/swift/3.1/generic-nested-types.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),u(` 
\`\`\`component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift 3.1",
  "desc": "Sequences get prefix(while:) and drop(while:) methods",
  "link": "/hackingwithswift.com/swift/3.1/prefix-drop.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),t("p",null,[t("a",x,[n(c,{icon:"fas fa-file-zipper"}),h("Download Swift 3.1 playground")])])])])}const C=p(f,[["render",_],["__file","prefix-drop.html.vue"]]),T=JSON.parse('{"path":"/hackingwithswift.com/swift/3.1/prefix-drop.html","title":"Sequences get prefix(while:) and drop(while:) methods","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Sequences get prefix(while:) and drop(while:) methods","description":"Article(s) > Sequences get prefix(while:) and drop(while:) methods","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-3.1"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Sequences get prefix(while:) and drop(while:) methods"},{"property":"og:description","content":"Sequences get prefix(while:) and drop(while:) methods"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/3.1/prefix-drop.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/3.1/prefix-drop.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Sequences get prefix(while:) and drop(while:) methods"}],["meta",{"property":"og:description","content":"Article(s) > Sequences get prefix(while:) and drop(while:) methods"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-3.1"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sequences get prefix(while:) and drop(while:) methods\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"next":"/hackingwithswift.com/swift/3.0/function-parameters.md","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.59,"words":478},"filePathRelative":"hackingwithswift.com/swift/3.1/prefix-drop.md","excerpt":"\\n"}');export{C as comp,T as data};
