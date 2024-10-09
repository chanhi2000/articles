import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as a,t as r,e as n,n as t,g as o,d as u,f as d,r as e,o as h}from"./app-BgNevrm5.js";const w={},k={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},g=a("nav",{class:"table-of-contents"},[a("ul")],-1),f=a("hr",null,null,-1),b=d(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftUI lets us draw custom paths by conforming to the <code>Shape</code> protocol, so we can create our own shapes that work the same as <code>Rectangle</code>, <code>Capsule</code>, and <code>Circle</code>. Conforming to this protocol isn’t hard, because all you need to do is support a <code>path(in:)</code> method that accepts a <code>CGRect</code> and returns a <code>Path</code>. Even better, you can use any paths you’ve previously built using <code>CGPath</code> or <code>UIBezierPath</code>, then convert the result to a SwiftUI path.</p><p>If you want to use SwiftUI’s native <code>Path</code> type, create a variable instance of it then add as many points or shapes as you need. Don’t think about colors, fills, or stroke widths – you’re focusing on the raw shape here, and those kinds of settings are provided when your custom path is used.</p><p>For example, we could make a creative effect by drawing a series of shrinking squares, then placing that shape into a SwiftUI view with a stroke and a size:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ShrinkingSquares</span><span class="token punctuation">:</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">path</span><span class="token punctuation">(</span><span class="token keyword">in</span> rect<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Path</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">stride</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> through<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> by<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> rect<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> rect<span class="token punctuation">.</span>height<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">let</span> insetRect <span class="token operator">=</span> rect<span class="token punctuation">.</span><span class="token function">insetBy</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> i<span class="token punctuation">,</span> dy<span class="token punctuation">:</span> i<span class="token punctuation">)</span></span>
<span class="line">            path<span class="token punctuation">.</span><span class="token function">addRect</span><span class="token punctuation">(</span>insetRect<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> path</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">ShrinkingSquares</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-custom-path-1.zip",target:"_blank",rel:"noopener noreferrer"},y=a("figure",null,[a("img",{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-custom-path-1~dark@2x.png",alt:"A series of concentric square outlines creating an optical illusion.",tabindex:"0",loading:"lazy"}),a("figcaption",null,"A series of concentric square outlines creating an optical illusion.")],-1),_={class:"hint-container details"},x=a("summary",null,"Similar solutions…",-1);function S(i,H){const s=e("VPCard"),c=e("FontIcon");return h(),l("div",null,[a("h1",k,[a("a",m,[a("span",null,r(i.$frontmatter.title)+" 관련",1)])]),n(s,t(o({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,n(s,t(o({title:"How to draw a custom path | SwiftUI by Example",desc:"How to draw a custom path",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-custom-path",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,a("blockquote",null,[a("p",null,[a("a",v,[n(c,{icon:"fas fa-file-zipper"}),u("Download this as an Xcode project")])])]),y,a("details",_,[x,n(s,t(o({title:"How to draw polygons and stars | SwiftUI by Example",desc:"How to draw polygons and stars",link:"/hackingwithswift.com/swiftui/how-to-draw-polygons-and-stars.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to draw a checkerboard | SwiftUI by Example",desc:"How to draw a checkerboard",link:"/hackingwithswift.com/swiftui/how-to-draw-a-checkerboard.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to draw a border inside a view | SwiftUI by Example",desc:"How to draw a border inside a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-border-inside-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to draw a shadow around a view | SwiftUI by Example",desc:"How to draw a shadow around a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to draw a border around a view | SwiftUI by Example",desc:"How to draw a border around a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-border-around-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const R=p(w,[["render",S],["__file","how-to-draw-a-custom-path.html.vue"]]),q=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.html","title":"How to draw a custom path","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to draw a custom path","description":"Article(s) > How to draw a custom path","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to draw a custom path"},{"property":"og:description","content":"How to draw a custom path"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to draw a custom path"}],["meta",{"property":"og:description","content":"Article(s) > How to draw a custom path"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-custom-path-1~dark@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to draw a custom path\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-custom-path-1~dark@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"hackingwithswift.com/swiftui/how-to-draw-a-custom-path.md","excerpt":"\\n"}');export{R as comp,q as data};
