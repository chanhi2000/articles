import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as d,e as s,n as a,g as o,d as e,f as c,r as l,o as h}from"./app-BgNevrm5.js";const k={},w={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},g=n("nav",{class:"table-of-contents"},[n("ul")],-1),f=n("hr",null,null,-1),v=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 17</strong></p><p>By default, SwiftUI&#39;s <code>ScrollView</code> allows its content to fill all the available space, and the scroll indicators sit neatly on the trailing edge of the screen. However, with the <code>contentMargins()</code> modifier we can adjust either of these, insetting the content or the scroll indicators by any amount and on any edges.</p><p>For example, this indents a scroll view&#39;s contents by 50 points on each edge, without adjusting the scroll indicators:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ScrollView</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">..&lt;</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Item </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>maxWidth<span class="token punctuation">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">contentMargins</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>scrollContent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-1.zip",target:"_blank",rel:"noopener noreferrer"},y=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-1~dark.png" alt="50 items in a scrollview, inset by 50 points on all edges." tabindex="0" loading="lazy"><figcaption>50 items in a scrollview, inset by 50 points on all edges.</figcaption></figure><p>If you want only some edges, you can specify either a single value or an option set of your choosing. For example, this indents the content by 150 points on the top edge only:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ScrollView</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">..&lt;</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Item </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>maxWidth<span class="token punctuation">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">contentMargins</span><span class="token punctuation">(</span><span class="token punctuation">.</span>top<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>scrollContent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-2.zip",target:"_blank",rel:"noopener noreferrer"},S=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-2~dark.png" alt="50 items in a scrollview, inset by 150 points on the top edge." tabindex="0" loading="lazy"><figcaption>50 items in a scrollview, inset by 150 points on the top edge.</figcaption></figure><p>In a similar way you can adjust the inset amount for the scroll view&#39;s indicators, either by itself or alongside adjusting the content insets.</p><p>As before you can adjust all edges at once or chose only the ones you care about, so for example this adds 100 points of margin to the top of the scroll indicator, but leaves the rest untouched:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ScrollView</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">..&lt;</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Item </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>maxWidth<span class="token punctuation">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">contentMargins</span><span class="token punctuation">(</span><span class="token punctuation">.</span>top<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>scrollIndicators<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-3.zip",target:"_blank",rel:"noopener noreferrer"},V=n("p",null,"Using content margins rather than simple padding allows your content to scroll edge to edge as the user interacts with it, while also adding a little extra space for scrolling – it's a much better optional than simple padding.",-1),H={class:"hint-container details"},I=n("summary",null,"Similar solutions…",-1);function q(p,j){const t=l("VPCard"),i=l("FontIcon");return h(),u("div",null,[n("h1",w,[n("a",m,[n("span",null,d(p.$frontmatter.title)+" 관련",1)])]),s(t,a(o({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,s(t,a(o({title:"How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",desc:"How to indent the content or scroll indicators in a ScrollView",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("blockquote",null,[n("p",null,[n("a",b,[s(i,{icon:"fas fa-file-zipper"}),e("Download this as an Xcode project")])])]),y,n("blockquote",null,[n("p",null,[n("a",_,[s(i,{icon:"fas fa-file-zipper"}),e("Download this as an Xcode project")])])]),S,n("blockquote",null,[n("p",null,[n("a",x,[s(i,{icon:"fas fa-file-zipper"}),e("Download this as an Xcode project")])])]),V,n("details",H,[I,s(t,a(o({title:"How to flash the scroll bar indicators of a ScrollView or List | SwiftUI by Example",desc:"How to flash the scroll bar indicators of a ScrollView or List",link:"/hackingwithswift.com/swiftui/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to hide the scroll indicators in ScrollView, List, and more | SwiftUI by Example",desc:"How to hide the scroll indicators in ScrollView, List, and more",link:"/hackingwithswift.com/swiftui/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to make views scroll with a custom transition | SwiftUI by Example",desc:"How to make views scroll with a custom transition",link:"/hackingwithswift.com/swiftui/how-to-make-views-scroll-with-a-custom-transition.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to make a scroll view move to a location using ScrollViewReader | SwiftUI by Example",desc:"How to make a scroll view move to a location using ScrollViewReader",link:"/hackingwithswift.com/swiftui/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to add horizontal and vertical scrolling using ScrollView | SwiftUI by Example",desc:"How to add horizontal and vertical scrolling using ScrollView",link:"/hackingwithswift.com/swiftui/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const U=r(k,[["render",q],["__file","how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.html.vue"]]),A=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.html","title":"How to indent the content or scroll indicators in a ScrollView","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to indent the content or scroll indicators in a ScrollView","description":"Article(s) > How to indent the content or scroll indicators in a ScrollView","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to indent the content or scroll indicators in a ScrollView"},{"property":"og:description","content":"How to indent the content or scroll indicators in a ScrollView"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to indent the content or scroll indicators in a ScrollView"}],["meta",{"property":"og:description","content":"Article(s) > How to indent the content or scroll indicators in a ScrollView"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-1~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to indent the content or scroll indicators in a ScrollView\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-1~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview-2~dark.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md","excerpt":"\\n"}');export{U as comp,A as data};
