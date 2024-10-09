import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as g,e as t,n as a,g as e,d as o,f as c,r as l,o as m}from"./app-BgNevrm5.js";const d={},h={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),f=n("hr",null,null,-1),v=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>When SwiftUI&#39;s <code>Text</code> views wrap across multiple lines, they align to their leading edge by default. If you want to change that, use the <code>multilineTextAlignment()</code> modifier to specify an alternative, such as <code>.center</code>, or <code>.trailing</code>.</p><p>For example, this will center several lines of text as they wrap across lines:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;This is an extremely long text string that will never fit even the widest of phones without wrapping&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">multilineTextAlignment</span><span class="token punctuation">(</span><span class="token punctuation">.</span>center<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1.zip",target:"_blank",rel:"noopener noreferrer"},b=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1~dark.png" alt="A center-aligned multiline paragraph of text." tabindex="0" loading="lazy"><figcaption>A center-aligned multiline paragraph of text.</figcaption></figure><p>You can compare all three text alignments side by side using a picker such as this one:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> alignments<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">TextAlignment</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>leading<span class="token punctuation">,</span> <span class="token punctuation">.</span>center<span class="token punctuation">,</span> <span class="token punctuation">.</span>trailing<span class="token punctuation">]</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> alignment <span class="token operator">=</span> <span class="token class-name">TextAlignment</span><span class="token punctuation">.</span>leading</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Picker</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Text alignment&quot;</span></span><span class="token punctuation">,</span> selection<span class="token punctuation">:</span> $alignment<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">ForEach</span><span class="token punctuation">(</span>alignments<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> alignment <span class="token keyword">in</span></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">(</span>describing<span class="token punctuation">:</span> alignment<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;This is an extremely long text string that will never fit even the widest of phones without wrapping&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">multilineTextAlignment</span><span class="token punctuation">(</span>alignment<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1.zip",target:"_blank",rel:"noopener noreferrer"},j=n("figure",null,[n("img",{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-2~dark.png",alt:"Three images showing paragraphs with left-aligned, centered, and right-aligned text.",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Three images showing paragraphs with left-aligned, centered, and right-aligned text.")],-1),_={class:"hint-container details"},T=n("summary",null,"Similar solutions…",-1);function A(p,H){const s=l("VPCard"),i=l("FontIcon");return m(),r("div",null,[n("h1",h,[n("a",k,[n("span",null,g(p.$frontmatter.title)+" 관련",1)])]),t(s,a(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,f,t(s,a(e({title:"How to adjust text alignment using multilineTextAlignment() | SwiftUI by Example",desc:"How to adjust text alignment using multilineTextAlignment()",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("blockquote",null,[n("p",null,[n("a",x,[t(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),b,n("blockquote",null,[n("p",null,[n("a",y,[t(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),j,n("details",_,[T,t(s,a(e({title:"How to customize stack layouts with alignment and spacing | SwiftUI by Example",desc:"How to customize stack layouts with alignment and spacing",link:"/hackingwithswift.com/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(s,a(e({title:"How to adjust the position of a view using its offset | SwiftUI by Example",desc:"How to adjust the position of a view using its offset",link:"/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(s,a(e({title:"How to adjust the opacity of a view | SwiftUI by Example",desc:"How to adjust the opacity of a view",link:"/hackingwithswift.com/swiftui/how-to-adjust-the-opacity-of-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(s,a(e({title:"How to adjust views by tinting, desaturating, and more | SwiftUI by Example",desc:"How to adjust views by tinting, desaturating, and more",link:"/hackingwithswift.com/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),t(s,a(e({title:"How to adjust List row separator insets | SwiftUI by Example",desc:"How to adjust List row separator insets",link:"/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-insets.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const I=u(d,[["render",A],["__file","how-to-adjust-text-alignment-using-multilinetextalignment.html.vue"]]),E=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment.html","title":"How to adjust text alignment using multilineTextAlignment()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to adjust text alignment using multilineTextAlignment()","description":"Article(s) > How to adjust text alignment using multilineTextAlignment()","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to adjust text alignment using multilineTextAlignment()"},{"property":"og:description","content":"How to adjust text alignment using multilineTextAlignment()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to adjust text alignment using multilineTextAlignment()"}],["meta",{"property":"og:description","content":"Article(s) > How to adjust text alignment using multilineTextAlignment()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to adjust text alignment using multilineTextAlignment()\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-1~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment-2~dark.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"hackingwithswift.com/swiftui/how-to-adjust-text-alignment-using-multilinetextalignment.md","excerpt":"\\n"}');export{I as comp,E as data};
