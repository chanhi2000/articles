import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as t,t as d,e as n,n as a,g as o,d as i,f as c,r as p,o as h}from"./app-BgNevrm5.js";const g={},b={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},k=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 15</strong></p><p>SwiftUI has a dedicated <code>.bordered</code> button style that mimics a common look and feel used across many of Apple&#39;s apps. In its most basic form it looks like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Buy: $0.99&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Buying…&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>bordered<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-1.zip",target:"_blank",rel:"noopener noreferrer"},y=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-1~dark.png" alt="A grey capsule-shaped button containing the text “Buy: $0.99” in blue." tabindex="0" loading="lazy"><figcaption>A grey capsule-shaped button containing the text “Buy: $0.99” in blue.</figcaption></figure><p>However, for buttons that should really stand out on the screen, you are likely to want to use the <code>borderedProminent</code> option to make their color much stronger:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Buy: $0.99&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Buying for $0.99&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>borderedProminent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-1.zip",target:"_blank",rel:"noopener noreferrer"},q=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-2~dark.png" alt="A bright blue capsule containing the text “Buy: $0.99”." tabindex="0" loading="lazy"><figcaption>A bright blue capsule containing the text “Buy: $0.99”.</figcaption></figure><div class="hint-container important"><p class="hint-container-title">Important</p><p>Having lots of prominent buttons is not good UI practice.</p></div><p>You can customize the color of these buttons either by using <code>tint()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Submit&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Submitting…&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">tint</span><span class="token punctuation">(</span><span class="token punctuation">.</span>indigo<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>borderedProminent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-3.zip",target:"_blank",rel:"noopener noreferrer"},S=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-3~dark.png" alt="A deep blue capsule containing the text “Submit”." tabindex="0" loading="lazy"><figcaption>A deep blue capsule containing the text “Submit”.</figcaption></figure><p>Or by attaching a role to the button:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Delete&quot;</span></span><span class="token punctuation">,</span> role<span class="token punctuation">:</span> <span class="token punctuation">.</span>destructive<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Deleting…&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>borderedProminent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),H={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-get-bordered-buttons-that-stand-out-4.zip",target:"_blank",rel:"noopener noreferrer"},B=t("figure",null,[t("img",{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-4~dark.png",alt:"A red capsule containing the text “Delete”.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"A red capsule containing the text “Delete”.")],-1),z={class:"hint-container details"},A=t("summary",null,"Similar solutions…",-1);function I(l,j){const s=p("VPCard"),e=p("FontIcon");return h(),u("div",null,[t("h1",b,[t("a",m,[t("span",null,d(l.$frontmatter.title)+" 관련",1)])]),n(s,a(o({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),k,w,n(s,a(o({title:"How to get bordered buttons that stand out | SwiftUI by Example",desc:"How to get bordered buttons that stand out",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,t("blockquote",null,[t("p",null,[t("a",v,[n(e,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),y,t("blockquote",null,[t("p",null,[t("a",_,[n(e,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),q,t("blockquote",null,[t("p",null,[t("a",x,[n(e,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),S,t("blockquote",null,[t("p",null,[t("a",H,[n(e,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),B,t("details",z,[A,n(s,a(o({title:"How to add custom swipe action buttons to a List row | SwiftUI by Example",desc:"How to add custom swipe action buttons to a List row",link:"/hackingwithswift.com/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(o({title:"How to let users customize toolbar buttons | SwiftUI by Example",desc:"How to let users customize toolbar buttons",link:"/hackingwithswift.com/swiftui/how-to-let-users-customize-toolbar-buttons.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(o({title:"How to create a toolbar and add buttons to it | SwiftUI by Example",desc:"How to create a toolbar and add buttons to it",link:"/hackingwithswift.com/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(o({title:"How to add actions to alert buttons | SwiftUI by Example",desc:"How to add actions to alert buttons",link:"/hackingwithswift.com/swiftui/how-to-add-actions-to-alert-buttons.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,a(o({title:"How to make buttons that repeat their action when pressed | SwiftUI by Example",desc:"How to make buttons that repeat their action when pressed",link:"/hackingwithswift.com/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const E=r(g,[["render",I],["__file","how-to-get-bordered-buttons-that-stand-out.html.vue"]]),P=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-get-bordered-buttons-that-stand-out.html","title":"How to get bordered buttons that stand out","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to get bordered buttons that stand out","description":"Article(s) > How to get bordered buttons that stand out","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to get bordered buttons that stand out"},{"property":"og:description","content":"How to get bordered buttons that stand out"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-get-bordered-buttons-that-stand-out.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-get-bordered-buttons-that-stand-out.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to get bordered buttons that stand out"}],["meta",{"property":"og:description","content":"Article(s) > How to get bordered buttons that stand out"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-1~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to get bordered buttons that stand out\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-1~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-2~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-3~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-bordered-buttons-that-stand-out-4~dark.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"hackingwithswift.com/swiftui/how-to-get-bordered-buttons-that-stand-out.md","excerpt":"\\n"}');export{E as comp,P as data};
