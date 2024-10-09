import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as a,t as d,e as n,n as t,g as o,d as i,f as c,r as l,o as m}from"./app-BgNevrm5.js";const h={},k={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=a("nav",{class:"table-of-contents"},[a("ul")],-1),g=a("hr",null,null,-1),y=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 16</strong></p><p>Some SF Symbols support variable coloring, which means they can have different parts filled based on a fraction between 0 and 1.</p><p>For example, this shows a Wi-Fi icon that is partly filled in:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;wifi&quot;</span></span><span class="token punctuation">,</span> variableValue<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,5),b={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-1.zip",target:"_blank",rel:"noopener noreferrer"},v=c(`<p>This value can change over time based on whatever state you&#39;re using in your code. For example, we could use a slider to change various icons according to a local property:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">0.0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">HStack</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;aqi.low&quot;</span></span><span class="token punctuation">,</span> variableValue<span class="token punctuation">:</span> value<span class="token punctuation">)</span></span>
<span class="line">                <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;wifi&quot;</span></span><span class="token punctuation">,</span> variableValue<span class="token punctuation">:</span> value<span class="token punctuation">)</span></span>
<span class="line">                <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;chart.bar.fill&quot;</span></span><span class="token punctuation">,</span> variableValue<span class="token punctuation">:</span> value<span class="token punctuation">)</span></span>
<span class="line">                <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;waveform&quot;</span></span><span class="token punctuation">,</span> variableValue<span class="token punctuation">:</span> value<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Slider</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> $value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">system</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-2.zip",target:"_blank",rel:"noopener noreferrer"},j=a("figure",null,[a("img",{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-1~dark.gif",alt:"Four variable color icons automatically adapting as a slider is dragged up then down",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Four variable color icons automatically adapting as a slider is dragged up then down")],-1),_={class:"hint-container details"},H=a("summary",null,"Similar solutions…",-1);function x(p,q){const s=l("VPCard"),e=l("FontIcon");return m(),u("div",null,[a("h1",k,[a("a",w,[a("span",null,d(p.$frontmatter.title)+" 관련",1)])]),n(s,t(o({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,g,n(s,t(o({title:"How to dynamically adjust the color of an SF Symbol | SwiftUI by Example",desc:"How to dynamically adjust the color of an SF Symbol",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,a("blockquote",null,[a("p",null,[a("a",b,[n(e,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),v,a("blockquote",null,[a("p",null,[a("a",S,[n(e,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),j,a("details",_,[H,n(s,t(o({title:"How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",desc:"How to dynamically adjust the appearance of a view based on its size and location",link:"/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to adjust the accent color of a view | SwiftUI by Example",desc:"How to adjust the accent color of a view",link:"/hackingwithswift.com/swiftui/how-to-adjust-the-accent-color-of-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to adjust List row separator visibility and color | SwiftUI by Example",desc:"How to adjust List row separator visibility and color",link:"/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-visibility-and-color.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to dynamically change between VStack and HStack | SwiftUI by Example",desc:"How to dynamically change between VStack and HStack",link:"/hackingwithswift.com/swiftui/how-to-dynamically-change-between-vstack-and-hstack.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(s,t(o({title:"How to adjust views by tinting, desaturating, and more | SwiftUI by Example",desc:"How to adjust views by tinting, desaturating, and more",link:"/hackingwithswift.com/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const I=r(h,[["render",x],["__file","how-to-dynamically-adjust-the-color-of-an-sf-symbol.html.vue"]]),N=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html","title":"How to dynamically adjust the color of an SF Symbol","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to dynamically adjust the color of an SF Symbol","description":"Article(s) > How to dynamically adjust the color of an SF Symbol","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to dynamically adjust the color of an SF Symbol"},{"property":"og:description","content":"How to dynamically adjust the color of an SF Symbol"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to dynamically adjust the color of an SF Symbol"}],["meta",{"property":"og:description","content":"Article(s) > How to dynamically adjust the color of an SF Symbol"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-1~dark.gif"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to dynamically adjust the color of an SF Symbol\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-1~dark.gif\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2,"words":601},"filePathRelative":"hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md","excerpt":"\\n"}');export{I as comp,N as data};
