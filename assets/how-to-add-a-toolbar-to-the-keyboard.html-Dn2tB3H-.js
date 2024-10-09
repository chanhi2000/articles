import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as s,t as k,e as a,n as t,g as o,d as l,f as c,r as e,o as h}from"./app-BgNevrm5.js";const m={},b={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},g=s("nav",{class:"table-of-contents"},[s("ul")],-1),f=s("hr",null,null,-1),v=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 15</strong></p><p>SwiftUI lets us add input accessory views to keyboards, which means that when the user activates some text entry we can present custom buttons there.</p><p>This is all done using by attaching the <code>toolbar()</code> modifier to whatever view should own the input accessory. When creating your toolbar item group, use a placement of <code>.keyboard</code> to attach this toolbar to the keyboard, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Taylor&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Enter your name&quot;</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $name<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">textFieldStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>roundedBorder<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">ToolbarItemGroup</span><span class="token punctuation">(</span>placement<span class="token punctuation">:</span> <span class="token punctuation">.</span>keyboard<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Click me!&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Clicked&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-toolbar-to-the-keyboard-1.zip",target:"_blank",rel:"noopener noreferrer"},_=c(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-1~dark.png" alt="A text field, below which is iOS&#39;s software keyboard. Above the keyboard is a grey row containing the words “Click me!” in blue." tabindex="0" loading="lazy"><figcaption>A text field, below which is iOS&#39;s software keyboard. Above the keyboard is a grey row containing the words “Click me!” in blue.</figcaption></figure><p>In practice this is a great place to use something like <code>@FocusState</code> to move between input fields in your UI, or to hide the keyboard altogether, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Taylor Swift&quot;</span></span></span>
<span class="line">    <span class="token attribute atrule">@FocusState</span> <span class="token keyword">var</span> isInputActive<span class="token punctuation">:</span> <span class="token class-name">Bool</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Enter your name&quot;</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $name<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">textFieldStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>roundedBorder<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">focused</span><span class="token punctuation">(</span>$isInputActive<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">ToolbarItemGroup</span><span class="token punctuation">(</span>placement<span class="token punctuation">:</span> <span class="token punctuation">.</span>keyboard<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                        <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Done&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            isInputActive <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-add-a-toolbar-to-the-keyboard-2.zip",target:"_blank",rel:"noopener noreferrer"},S={class:"hint-container details"},q=s("summary",null,"Similar solutions…",-1);function H(p,I){const n=e("VPCard"),i=e("FontIcon"),r=e("VidStack");return h(),u("div",null,[s("h1",b,[s("a",w,[s("span",null,k(p.$frontmatter.title)+" 관련",1)])]),a(n,t(o({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,a(n,t(o({title:"How to add a toolbar to the keyboard | SwiftUI by Example",desc:"How to add a toolbar to the keyboard",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,s("blockquote",null,[s("p",null,[s("a",y,[a(i,{icon:"fas fa-file-zipper"}),l("Download this as an Xcode project")])])]),_,s("blockquote",null,[s("p",null,[s("a",x,[a(i,{icon:"fas fa-file-zipper"}),l("Download this as an Xcode project")])])]),a(r,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-2~dark.mp4"}),s("details",S,[q,a(n,t(o({title:"How to create a toolbar and add buttons to it | SwiftUI by Example",desc:"How to create a toolbar and add buttons to it",link:"/hackingwithswift.com/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(o({title:"How to let users customize toolbar buttons | SwiftUI by Example",desc:"How to let users customize toolbar buttons",link:"/hackingwithswift.com/swiftui/how-to-let-users-customize-toolbar-buttons.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(o({title:"How to add keyboard shortcuts using keyboardShortcut() | SwiftUI by Example",desc:"How to add keyboard shortcuts using keyboardShortcut()",link:"/hackingwithswift.com/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(o({title:"How to dismiss the keyboard for a TextField | SwiftUI by Example",desc:"How to dismiss the keyboard for a TextField",link:"/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-for-a-textfield.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(o({title:"How to dismiss the keyboard when the user scrolls | SwiftUI by Example",desc:"How to dismiss the keyboard when the user scrolls",link:"/hackingwithswift.com/swiftui/how-to-dismiss-the-keyboard-when-the-user-scrolls.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const V=d(m,[["render",H],["__file","how-to-add-a-toolbar-to-the-keyboard.html.vue"]]),E=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.html","title":"How to add a toolbar to the keyboard","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add a toolbar to the keyboard","description":"Article(s) > How to add a toolbar to the keyboard","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add a toolbar to the keyboard"},{"property":"og:description","content":"How to add a toolbar to the keyboard"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add a toolbar to the keyboard"}],["meta",{"property":"og:description","content":"Article(s) > How to add a toolbar to the keyboard"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-1~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add a toolbar to the keyboard\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard-1~dark.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.06,"words":618},"filePathRelative":"hackingwithswift.com/swiftui/how-to-add-a-toolbar-to-the-keyboard.md","excerpt":"\\n"}');export{V as comp,E as data};
