import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as s,t as m,e as n,n as t,g as e,d as c,f as l,r as i,o as k}from"./app-BgNevrm5.js";const h={},w={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},g=s("nav",{class:"table-of-contents"},[s("ul")],-1),f=s("hr",null,null,-1),b=l(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 15</strong></p><p>SwiftUI provides the <code>interactiveDismissDisabled()</code> modifier to control whether the user can swipe downwards to dismiss a sheet. Although swipe to dismiss is usually nice to have, sometimes that’s something you can’t allow – if the user must accept some terms and conditions, for example, then they must take some sort of action before the sheet can be dismissed.</p><p>In its simplest form, you just need to attach the <code>interactiveDismissDisabled()</code> modifier directly to your sheet content, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ExampleSheet</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Environment</span><span class="token punctuation">(</span><span class="token punctuation">\\</span><span class="token punctuation">.</span>dismiss<span class="token punctuation">)</span> <span class="token keyword">var</span> dismiss</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Sheet view&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Dismiss&quot;</span></span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> close<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">interactiveDismissDisabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span>  <span class="token function-definition function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> showingSheet <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Sheet&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            showingSheet<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span>isPresented<span class="token punctuation">:</span> $showingSheet<span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token class-name">ExampleSheet</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-1.zip",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>If you prefer, you can bind a Boolean to the modifier to allow swipe to dismiss only when some criteria is successfully met. So, our terms and conditions example might look like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ExampleSheet</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Environment</span><span class="token punctuation">(</span><span class="token punctuation">\\</span><span class="token punctuation">.</span>dismiss<span class="token punctuation">)</span> <span class="token keyword">var</span> dismiss</span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> termsAccepted <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Terms and conditions&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Lots of legalese here.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Accept&quot;</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $termsAccepted<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">interactiveDismissDisabled</span><span class="token punctuation">(</span><span class="token operator">!</span>termsAccepted<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span>  <span class="token function-definition function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> showingSheet <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Sheet&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            showingSheet<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span>isPresented<span class="token punctuation">:</span> $showingSheet<span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token class-name">ExampleSheet</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-2.zip",target:"_blank",rel:"noopener noreferrer"},x={class:"hint-container details"},q=s("summary",null,"Similar solutions…",-1);function V(u,H){const a=i("VPCard"),o=i("FontIcon"),p=i("VidStack");return k(),d("div",null,[s("h1",w,[s("a",v,[s("span",null,m(u.$frontmatter.title)+" 관련",1)])]),n(a,t(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,n(a,t(e({title:"How to prevent a sheet from being dismissed with a swipe | SwiftUI by Example",desc:"How to prevent a sheet from being dismissed with a swipe",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,s("blockquote",null,[s("p",null,[s("a",y,[n(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),n(p,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-1~dark.mp4"}),S,s("blockquote",null,[s("p",null,[s("a",_,[n(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),n(p,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe-2~dark.mp4"}),s("details",x,[q,n(a,t(e({title:"How to display a bottom sheet | SwiftUI by Example",desc:"How to display a bottom sheet",link:"/hackingwithswift.com/swiftui/how-to-display-a-bottom-sheet.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to add custom swipe action buttons to a List row | SwiftUI by Example",desc:"How to add custom swipe action buttons to a List row",link:"/hackingwithswift.com/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to show an action sheet | SwiftUI by Example",desc:"How to show an action sheet",link:"/hackingwithswift.com/swiftui/how-to-show-an-action-sheet.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to let users share content using the system share sheet | SwiftUI by Example",desc:"How to let users share content using the system share sheet",link:"/hackingwithswift.com/swiftui/how-to-let-users-share-content-using-the-system-share-sheet.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Adding swipe to delete and EditButton | SwiftUI by Example",desc:"Adding swipe to delete and EditButton",link:"/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const D=r(h,[["render",V],["__file","how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.html","title":"How to prevent a sheet from being dismissed with a swipe","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to prevent a sheet from being dismissed with a swipe","description":"Article(s) > How to prevent a sheet from being dismissed with a swipe","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to prevent a sheet from being dismissed with a swipe"},{"property":"og:description","content":"How to prevent a sheet from being dismissed with a swipe"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to prevent a sheet from being dismissed with a swipe"}],["meta",{"property":"og:description","content":"Article(s) > How to prevent a sheet from being dismissed with a swipe"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to prevent a sheet from being dismissed with a swipe\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.29,"words":687},"filePathRelative":"hackingwithswift.com/swiftui/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.md","excerpt":"\\n"}');export{D as comp,I as data};
