import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as t,t as w,e as a,n,g as e,d as o,f as l,r as c,o as m}from"./app-BgNevrm5.js";const h={},k={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),v=l(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>The <code>blur()</code> modifier lets us apply a real-time Gaussian blur to our views, at a strength of our choosing.</p><p>For example, this creates a 300x300 profile picture, then adds a 20-point Gaussian blur:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;dog&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">resizable</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span>radius<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-blur-a-view-1.zip",target:"_blank",rel:"noopener noreferrer"},_=l(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-blur-a-view-1~dark@2x.png" alt="A very blurry image of a vague dog head shape." tabindex="0" loading="lazy"><figcaption>A very blurry image of a vague dog head shape.</figcaption></figure><p>You can blur anything you want, including text views:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Welcome to my SwiftUI app&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span>radius<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-blur-a-view-2.zip",target:"_blank",rel:"noopener noreferrer"},S=l(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-blur-a-view-2~dark@2x.png" alt="The text “Welcome to my SwiftUI app” in blurry print." tabindex="0" loading="lazy"><figcaption>The text “Welcome to my SwiftUI app” in blurry print.</figcaption></figure><p>Blurring is extremely efficient, and you can adjust it dynamically just like any other kind of state. For example, this lets you try adjusting the blur of our text dynamically by dragging around a slider:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> blurAmount <span class="token operator">=</span> <span class="token number">0.0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Drag the slider to blur me&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span>radius<span class="token punctuation">:</span> blurAmount<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Slider</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> $blurAmount<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token operator">...</span><span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-blur-a-view-3.zip",target:"_blank",rel:"noopener noreferrer"},H={class:"hint-container details"},I=t("summary",null,"Similar solutions…",-1);function j(p,U){const s=c("VPCard"),i=c("FontIcon"),r=c("VidStack");return m(),d("div",null,[t("h1",k,[t("a",g,[t("span",null,w(p.$frontmatter.title)+" 관련",1)])]),a(s,n(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,b,a(s,n(e({title:"How to blur a view | SwiftUI by Example",desc:"How to blur a view",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-blur-a-view",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,t("blockquote",null,[t("p",null,[t("a",y,[a(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),_,t("blockquote",null,[t("p",null,[t("a",x,[a(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),S,t("blockquote",null,[t("p",null,[t("a",q,[a(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),a(r,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-blur-a-view-3~dark.mp4"}),t("details",H,[I,a(s,n(e({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,n(e({title:"How to convert a SwiftUI view to an image | SwiftUI by Example",desc:"How to convert a SwiftUI view to an image",link:"/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,n(e({title:"How to make a view dismiss itself | SwiftUI by Example",desc:"How to make a view dismiss itself",link:"/hackingwithswift.com/swiftui/how-to-make-a-view-dismiss-itself.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,n(e({title:"How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",desc:"How to dynamically adjust the appearance of a view based on its size and location",link:"/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,n(e({title:"How to create and compose custom views | SwiftUI by Example",desc:"How to create and compose custom views",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const A=u(h,[["render",j],["__file","how-to-blur-a-view.html.vue"]]),E=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-blur-a-view.html","title":"How to blur a view","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to blur a view","description":"Article(s) > How to blur a view","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to blur a view"},{"property":"og:description","content":"How to blur a view"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-blur-a-view.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-blur-a-view.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to blur a view"}],["meta",{"property":"og:description","content":"Article(s) > How to blur a view"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-blur-a-view-1~dark@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to blur a view\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-blur-a-view-1~dark@2x.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-blur-a-view-2~dark@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"hackingwithswift.com/swiftui/how-to-blur-a-view.md","excerpt":"\\n"}');export{A as comp,E as data};
