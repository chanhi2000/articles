import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as t,t as u,e as n,n as s,g as a,d as o,f as c,r as l,o as w}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),b=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 15</strong></p><p>SwiftUI has built-in support for rendering Markdown, including bold, italic, links, and more. It&#39;s literally built right into SwiftUI&#39;s <code>Text</code> view, so you can write code like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;This is regular text.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;* This is **bold** text, this is *italic* text, and this is ***bold, italic*** text.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;~~A strikethrough example~~&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;\`Monospaced works too\`&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Visit Apple: [click here](https://apple.com)&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-1.zip",target:"_blank",rel:"noopener noreferrer"},x=c(`<p>Several lines of text appropriately formatted with Markdown styling.</p><p>And yes, that link is automatically tappable. Markdown links will use your app&#39;s accent color by default, but you can change that using the <code>tint()</code> modifier:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Visit Apple: [click here](https://apple.com)&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">tint</span><span class="token punctuation">(</span><span class="token punctuation">.</span>indigo<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-2.zipp",target:"_blank",rel:"noopener noreferrer"},_=c(`<div class="hint-container note"><p class="hint-container-title">Note</p><p>Images aren&#39;t supported.</p></div><p>This automatic Markdown conversion happens because SwiftUI interprets those strings as being instances of <code>LocalizedStringKey</code> – strings that can be localized by our app. This means if you want to create Markdown text from a property or variable, you should mark it explicitly as being <code>LocalizedStringKey</code> to get the Markdown rendering:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> markdownText<span class="token punctuation">:</span> <span class="token class-name">LocalizedStringKey</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;* This is **bold** text, this is *italic* text, and this is ***bold, italic*** text.&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span>markdownText<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),S={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-render-markdown-content-in-text-3.zip",target:"_blank",rel:"noopener noreferrer"},M=t("p",null,[o("If you wanted the original text unchanged – i.e., you wanted the raw, unformatted Markdown symbols to be left in place – just remove the "),t("code",null,"LocalizedStringKey"),o(" annotation. Alternatively, you can disable both Markdown and localization entirely using the "),t("code",null,"Text(verbatim:)"),o(" initializer.")],-1),H={class:"hint-container details"},q=t("summary",null,"Similar solutions…",-1);function T(r,I){const e=l("VPCard"),i=l("FontIcon");return w(),d("div",null,[t("h1",m,[t("a",k,[t("span",null,u(r.$frontmatter.title)+" 관련",1)])]),n(e,s(a({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,n(e,s(a({title:"How to render Markdown content in text | SwiftUI by Example",desc:"How to render Markdown content in text",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-render-markdown-content-in-text",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,t("blockquote",null,[t("p",null,[t("a",v,[n(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),x,t("blockquote",null,[t("p",null,[t("a",y,[n(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),_,t("blockquote",null,[t("p",null,[t("a",S,[n(i,{icon:"fas fa-file-zipper"}),o("Download this as an Xcode project")])])]),M,t("details",H,[q,n(e,s(a({title:"How to render a SwiftUI view to a PDF | SwiftUI by Example",desc:"How to render a SwiftUI view to a PDF",link:"/hackingwithswift.com/swiftui/how-to-render-a-swiftui-view-to-a-pdf.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(a({title:"How to render a gradient | SwiftUI by Example",desc:"How to render a gradient",link:"/hackingwithswift.com/swiftui/how-to-render-a-gradient.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(a({title:"How to render images using SF Symbols | SwiftUI by Example",desc:"How to render images using SF Symbols",link:"/hackingwithswift.com/swiftui/how-to-render-images-using-sf-symbols.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(a({title:"How to format text inside text views | SwiftUI by Example",desc:"How to format text inside text views",link:"/hackingwithswift.com/swiftui/how-to-format-text-inside-text-views.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(e,s(a({title:"How to create scrolling pages of content using tabViewStyle() | SwiftUI by Example",desc:"How to create scrolling pages of content using tabViewStyle()",link:"/hackingwithswift.com/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const V=p(h,[["render",T],["__file","how-to-render-markdown-content-in-text.html.vue"]]),j=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-render-markdown-content-in-text.html","title":"How to render Markdown content in text","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to render Markdown content in text","description":"Article(s) > How to render Markdown content in text","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to render Markdown content in text"},{"property":"og:description","content":"How to render Markdown content in text"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-render-markdown-content-in-text.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-render-markdown-content-in-text.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to render Markdown content in text"}],["meta",{"property":"og:description","content":"Article(s) > How to render Markdown content in text"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to render Markdown content in text\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"hackingwithswift.com/swiftui/how-to-render-markdown-content-in-text.md","excerpt":"\\n"}');export{V as comp,j as data};
