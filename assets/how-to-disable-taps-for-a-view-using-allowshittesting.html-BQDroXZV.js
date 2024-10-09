import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as t,t as w,e as n,n as a,g as i,d as e,f as h,r as o,o as d}from"./app-BgNevrm5.js";const g={},f={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),v=h(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftUI lets us stop a view from receiving any kind of taps using the <code>allowsHitTesting()</code> modifier. If hit testing is disallowed for a view, any taps automatically continue through the view on to whatever is behind it.</p><p>To demonstrate this, here&#39;s a <code>ZStack</code> containing a translucent rectangle with a button underneath:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ZStack</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Tap Me&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Button was tapped&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>gray<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">clipShape</span><span class="token punctuation">(</span><span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">allowsHitTesting</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting-1.zip",target:"_blank",rel:"noopener noreferrer"},_=t("p",null,[e("Even though the rectangle is on top of the button, it has "),t("code",null,"allowsHitTesting(false)"),e(" – any taps on the rectangle won't be trapped by the rectangle, but instead passed through to the button below.")],-1),H=t("p",null,"This kind of effect is useful for when you want to highlight one view with another – the red circle above might be part of a tutorial saying “Tap here to get started”, and that wouldn't work if the circle itself caught the tap.",-1),S={class:"hint-container details"},T=t("summary",null,"Similar solutions…",-1);function x(l,I){const s=o("VPCard"),c=o("FontIcon"),p=o("VidStack");return d(),u("div",null,[t("h1",f,[t("a",k,[t("span",null,w(l.$frontmatter.title)+" 관련",1)])]),n(s,a(i({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,b,n(s,a(i({title:"How to disable taps for a view using allowsHitTesting() | SwiftUI by Example",desc:"How to disable taps for a view using allowsHitTesting()",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,t("blockquote",null,[t("p",null,[t("a",y,[n(c,{icon:"fas fa-file-zipper"}),e("Download this as an Xcode project")])])]),n(p,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting-1~dark.mp4"}),_,H,t("details",S,[T,n(s,a(i({title:"How to disable autocorrect in a TextField | SwiftUI by Example",desc:"How to disable autocorrect in a TextField",link:"/hackingwithswift.com/swiftui/how-to-disable-autocorrect-in-a-textfield.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(i({title:"How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",desc:"How to disable the overlay color for images inside Button and NavigationLink",link:"/hackingwithswift.com/swiftui/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(i({title:"How to disable ScrollView clipping so contents overflow | SwiftUI by Example",desc:"How to disable ScrollView clipping so contents overflow",link:"/hackingwithswift.com/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(i({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(i({title:"How to convert a SwiftUI view to an image | SwiftUI by Example",desc:"How to convert a SwiftUI view to an image",link:"/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const V=r(g,[["render",x],["__file","how-to-disable-taps-for-a-view-using-allowshittesting.html.vue"]]),q=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting.html","title":"How to disable taps for a view using allowsHitTesting()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to disable taps for a view using allowsHitTesting()","description":"Article(s) > How to disable taps for a view using allowsHitTesting()","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to disable taps for a view using allowsHitTesting()"},{"property":"og:description","content":"How to disable taps for a view using allowsHitTesting()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to disable taps for a view using allowsHitTesting()"}],["meta",{"property":"og:description","content":"Article(s) > How to disable taps for a view using allowsHitTesting()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to disable taps for a view using allowsHitTesting()\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.87,"words":562},"filePathRelative":"hackingwithswift.com/swiftui/how-to-disable-taps-for-a-view-using-allowshittesting.md","excerpt":"\\n"}');export{V as comp,q as data};
