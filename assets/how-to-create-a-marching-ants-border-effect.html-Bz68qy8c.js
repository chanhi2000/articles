import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as a,t as h,e as n,n as t,g as e,d as c,f as p,r as o,o as k}from"./app-BgNevrm5.js";const m={},w={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g=a("nav",{class:"table-of-contents"},[a("ul")],-1),b=a("hr",null,null,-1),v=p(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftUI’s stroke can be configured with dash and dash phase options that gives us very fine-grained control over how the line is drawn. For example, we could draw a box with a dashed stroke like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">strokeBorder</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token class-name">StrokeStyle</span><span class="token punctuation">(</span>lineWidth<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> dash<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-marching-ants-border-effect-1.zip",target:"_blank",rel:"noopener noreferrer"},_=p(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-marching-ants-border-effect-1~dark@2x.png" alt="A dotted line outlining a rectangular area." tabindex="0" loading="lazy"><figcaption>A dotted line outlining a rectangular area.</figcaption></figure><p>Using <code>[10]</code> for the <code>dash</code> parameter means SwiftUI will draw 10 points of our stroke then 10 points of space, repeating that pattern until the entire rectangle has been stroked. It’s an array because you can provide more than one value, such as <code>[10, 5]</code>, to mean “10 points of stroke then a 5-point gap.”</p><p>Where this becomes really interesting is when you add in the dash phase, which dictates where the dashes and gaps should be positioned. If we store that phase in a state property, we can then animate that value over time to create a so-called marching ants effect – a dashed stroke that moves around a shape, which is commonly used to signal object selection.</p><p>In code it looks like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> phase <span class="token operator">=</span> <span class="token number">0.0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">strokeBorder</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token class-name">StrokeStyle</span><span class="token punctuation">(</span>lineWidth<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> dash<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dashPhase<span class="token punctuation">:</span> phase<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span>onAppear <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">withAnimation</span><span class="token punctuation">(</span><span class="token punctuation">.</span>linear<span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span>autoreverses<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    phase <span class="token operator">-=</span> <span class="token number">20</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-marching-ants-border-effect-2.zip",target:"_blank",rel:"noopener noreferrer"},S={class:"hint-container details"},H=a("summary",null,"Similar solutions…",-1);function I(r,V){const s=o("VPCard"),i=o("FontIcon"),l=o("VidStack");return k(),d("div",null,[a("h1",w,[a("a",f,[a("span",null,h(r.$frontmatter.title)+" 관련",1)])]),n(s,t(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,b,n(s,t(e({title:"How to create a marching ants border effect | SwiftUI by Example",desc:"How to create a marching ants border effect",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-marching-ants-border-effect",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,a("blockquote",null,[a("p",null,[a("a",y,[n(i,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),_,a("blockquote",null,[a("p",null,[a("a",x,[n(i,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),n(l,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-marching-ants-border-effect-2~dark.mp4"}),a("details",S,[H,n(s,t(e({title:"How to draw a border around a view | SwiftUI by Example",desc:"How to draw a border around a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-border-around-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(e({title:"How to draw a border inside a view | SwiftUI by Example",desc:"How to draw a border inside a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-border-inside-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(e({title:"How to add a border to a TextField | SwiftUI by Example",desc:"How to add a border to a TextField",link:"/hackingwithswift.com/swiftui/how-to-add-a-border-to-a-textfield.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(e({title:"How to add visual effect blurs | SwiftUI by Example",desc:"How to add visual effect blurs",link:"/hackingwithswift.com/swiftui/how-to-add-visual-effect-blurs.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(e({title:"How to draw a shadow around a view | SwiftUI by Example",desc:"How to draw a shadow around a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const E=u(m,[["render",I],["__file","how-to-create-a-marching-ants-border-effect.html.vue"]]),q=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-create-a-marching-ants-border-effect.html","title":"How to create a marching ants border effect","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create a marching ants border effect","description":"Article(s) > How to create a marching ants border effect","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create a marching ants border effect"},{"property":"og:description","content":"How to create a marching ants border effect"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-create-a-marching-ants-border-effect.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-create-a-marching-ants-border-effect.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create a marching ants border effect"}],["meta",{"property":"og:description","content":"Article(s) > How to create a marching ants border effect"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-marching-ants-border-effect-1~dark@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create a marching ants border effect\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-marching-ants-border-effect-1~dark@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.15,"words":645},"filePathRelative":"hackingwithswift.com/swiftui/how-to-create-a-marching-ants-border-effect.md","excerpt":"\\n"}');export{E as comp,q as data};
