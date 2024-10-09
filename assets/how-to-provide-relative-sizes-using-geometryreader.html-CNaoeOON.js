import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as u,e,n,g as a,d as i,f as d,r as o,o as h}from"./app-BgNevrm5.js";const w={},g={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},k=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),v=d(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Although it&#39;s usually best to let SwiftUI perform automatic layout using stacks, it&#39;s also possible to give our views sizes relative to their containers using <code>GeometryReader</code>. For example, if you wanted two views to take up half the available width on the screen, this wouldn&#39;t be possible using hard-coded values because we don&#39;t know ahead of time what the screen width will be.</p><p>To solve this, <code>GeometryReader</code> provides us with an input value telling us the width and height we have available, and we can then use that with whatever calculations we need. So, if we had two views and we wanted one to take up a third of the screen and the other take up two thirds, we could write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">GeometryReader</span> <span class="token punctuation">{</span> geometry <span class="token keyword">in</span></span>
<span class="line">    <span class="token class-name">HStack</span><span class="token punctuation">(</span>spacing<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Left&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>black<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> geometry<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.33</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>yellow<span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Right&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>black<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> geometry<span class="token punctuation">.</span>size<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.67</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>orange<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-provide-relative-sizes-using-geometryreader-1.zip",target:"_blank",rel:"noopener noreferrer"},b=t("figure",null,[t("img",{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader-1~dark.png",alt:"A yellow rectangle with the word “Left” beside a twice as wide orange rectangle with the word “Right”.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"A yellow rectangle with the word “Left” beside a twice as wide orange rectangle with the word “Right”.")],-1),z=t("div",{class:"hint-container note"},[t("p",{class:"hint-container-title"},"Note"),t("p",null,[t("code",null,"GeometryReader"),i(" doesn't take into account any offsets or spacing further down in the view hierarchy, which is why there is no spacing on the "),t("code",null,"HStack"),i(" – if we allowed spacing in there, the views would be a little too large for the available space.")])],-1),_={class:"hint-container details"},R=t("summary",null,"Similar solutions…",-1);function H(c,S){const s=o("VPCard"),p=o("FontIcon");return h(),r("div",null,[t("h1",g,[t("a",m,[t("span",null,u(c.$frontmatter.title)+" 관련",1)])]),e(s,n(a({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),k,f,e(s,n(a({title:"How to provide relative sizes using GeometryReader | SwiftUI by Example",desc:"How to provide relative sizes using GeometryReader",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,t("blockquote",null,[t("p",null,[t("a",y,[e(p,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),b,z,t("details",_,[R,e(s,n(a({title:"How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",desc:"How to preview your layout at different Dynamic Type sizes",link:"/hackingwithswift.com/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(s,n(a({title:"How to adjust the size of a view relative to its container | SwiftUI by Example",desc:"How to adjust the size of a view relative to its container",link:"/hackingwithswift.com/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(s,n(a({title:"How to specify the Dynamic Type sizes a view supports | SwiftUI by Example",desc:"How to specify the Dynamic Type sizes a view supports",link:"/hackingwithswift.com/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(s,n(a({title:"How to provide visual structure using foreground styles | SwiftUI by Example",desc:"How to provide visual structure using foreground styles",link:"/hackingwithswift.com/swiftui/how-to-provide-visual-structure-using-foreground-styles.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(s,n(a({title:"How to create 3D effects like Cover Flow using ScrollView and GeometryReader | SwiftUI by Example",desc:"How to create 3D effects like Cover Flow using ScrollView and GeometryReader",link:"/hackingwithswift.com/swiftui/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const T=l(w,[["render",H],["__file","how-to-provide-relative-sizes-using-geometryreader.html.vue"]]),q=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-provide-relative-sizes-using-geometryreader.html","title":"How to provide relative sizes using GeometryReader","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to provide relative sizes using GeometryReader","description":"Article(s) > How to provide relative sizes using GeometryReader","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to provide relative sizes using GeometryReader"},{"property":"og:description","content":"How to provide relative sizes using GeometryReader"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-provide-relative-sizes-using-geometryreader.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-provide-relative-sizes-using-geometryreader.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to provide relative sizes using GeometryReader"}],["meta",{"property":"og:description","content":"Article(s) > How to provide relative sizes using GeometryReader"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader-1~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to provide relative sizes using GeometryReader\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader-1~dark.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.14,"words":642},"filePathRelative":"hackingwithswift.com/swiftui/how-to-provide-relative-sizes-using-geometryreader.md","excerpt":"\\n"}');export{T as comp,q as data};
