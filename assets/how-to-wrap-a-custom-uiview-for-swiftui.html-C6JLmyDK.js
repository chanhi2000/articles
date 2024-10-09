import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as r,e as s,n as a,g as e,f as u,r as i,o as w}from"./app-BgNevrm5.js";const d={},m={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),k=t("hr",null,null,-1),g=u(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Although SwiftUI does a good job of providing many of UIKit’s <code>UIView</code> subclasses, it doesn’t have them all yet at this time. Fortunately, it’s not hard to create custom wrappers for a <code>UIView</code> that you want.</p><p>As an example, let’s create a simple SwiftUI wrapper for <code>UITextView</code> as the basis of a rich text editor. This takes four steps:</p><ol><li>Creating a struct that conforms to <code>UIViewRepresentable</code>.</li><li>Defining one property that stores the text string we are working with.</li><li>Giving it a <code>makeUIView()</code> method that will return our text view.</li><li>Adding a <code>updateUIView()</code> method that will be called whenever the data for the text view has changed.</li></ol><p>In code we end up with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">TextView</span><span class="token punctuation">:</span> <span class="token class-name">UIViewRepresentable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Binding</span> <span class="token keyword">var</span> text<span class="token punctuation">:</span> <span class="token class-name">NSMutableAttributedString</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">makeUIView</span><span class="token punctuation">(</span>context<span class="token punctuation">:</span> <span class="token class-name">Context</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITextView</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">UITextView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">updateUIView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> uiView<span class="token punctuation">:</span> <span class="token class-name">UITextView</span><span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token class-name">Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        uiView<span class="token punctuation">.</span>attributedText <span class="token operator">=</span> text</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And that’s it! You can now immediately use the <code>TextView</code> component in SwiftUI views, such as this one:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token class-name">NSMutableAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">TextView</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> $text<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>minWidth<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> maxWidth<span class="token punctuation">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">,</span> minHeight<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> maxHeight<span class="token punctuation">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b=t("p",null,"Because that uses attributed text, you could add some buttons to enable formatting such as bold, italics, and more.",-1),v={class:"hint-container details"},y=t("summary",null,"Similar solutions…",-1);function U(o,I){const n=i("VPCard"),c=i("VidStack");return w(),l("div",null,[t("h1",m,[t("a",h,[t("span",null,r(o.$frontmatter.title)+" 관련",1)])]),s(n,a(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,k,s(n,a(e({title:"How to wrap a custom UIView for SwiftUI | SwiftUI by Example",desc:"How to wrap a custom UIView for SwiftUI",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g,s(c,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui-1~dark.mp4"}),b,t("details",v,[y,s(n,a(e({title:"Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",desc:"Answering the big question: should you learn SwiftUI, UIKit, or both?",link:"/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"Frequently asked questions about SwiftUI | SwiftUI by Example",desc:"Frequently asked questions about SwiftUI",link:"/hackingwithswift.com/swiftui/frequently-asked-questions-about-swiftui.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"Wrap up: our SwiftUI project is complete | SwiftUI by Example",desc:"Wrap up: our SwiftUI project is complete",link:"/hackingwithswift.com/swiftui/wrap-up-our-swiftui-project-is-complete.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"How to draw a custom path | SwiftUI by Example",desc:"How to draw a custom path",link:"/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const V=p(d,[["render",U],["__file","how-to-wrap-a-custom-uiview-for-swiftui.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-wrap-a-custom-uiview-for-swiftui.html","title":"How to wrap a custom UIView for SwiftUI","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to wrap a custom UIView for SwiftUI","description":"Article(s) > How to wrap a custom UIView for SwiftUI","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to wrap a custom UIView for SwiftUI"},{"property":"og:description","content":"How to wrap a custom UIView for SwiftUI"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-wrap-a-custom-uiview-for-swiftui.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-wrap-a-custom-uiview-for-swiftui.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to wrap a custom UIView for SwiftUI"}],["meta",{"property":"og:description","content":"Article(s) > How to wrap a custom UIView for SwiftUI"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to wrap a custom UIView for SwiftUI\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.86,"words":557},"filePathRelative":"hackingwithswift.com/swiftui/how-to-wrap-a-custom-uiview-for-swiftui.md","excerpt":"\\n"}');export{V as comp,_ as data};
