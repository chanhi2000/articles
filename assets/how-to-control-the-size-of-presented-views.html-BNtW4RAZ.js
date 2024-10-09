import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as u,e as s,n as t,g as e,d,f as i,r as o,o as k}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=n("nav",{class:"table-of-contents"},[n("ul")],-1),v=n("hr",null,null,-1),g=i(`<blockquote><p>Updated for Xcode 16</p></blockquote><p><strong>Improved in iOS 18</strong></p><p>SwiftUI has a dedicated <code>presentationSizing()</code> modifier that gives us fine-grained control over how presented views are sized on the screen.</p><p><strong>This is <em>different</em> from the <code>presentationDetents()</code> modifier that allows us to create bottom sheets and similar – <code>presentationSizing()</code> is for controlling the <em>shape</em> of the view.</strong></p><p>For example, we could make a <code>DetailView</code> struct such as this one</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">DetailView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Detail View&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">presentationSizing</span><span class="token punctuation">(</span><span class="token punctuation">.</span>form<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That uses the <code>.form</code> setting, which is one of the built-in sizes – on iPhone it will just be a regular sheet, but on iPad it&#39;s a large square shape that&#39;s centered neatly.</p><p>You don&#39;t need to do anything special to present a view sized this way; just using the regular <code>sheet()</code> modifier is fine, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> showingSheet <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Detail View&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            showingSheet<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span>isPresented<span class="token punctuation">:</span> $showingSheet<span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token class-name">DetailView</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another great option for <code>presentationSizing()</code> is <code>.fitted</code>, which sizes the sheet according to its content. Even better, this can be <em>added</em> to other sizes: you can use <code>.form.fitted(horizontal: true, vertical: false)</code> to mean &quot;start with the form size, but shrink horizontally to fit my content&quot;.</p><p>If you have more complex layouts, try using sticky sizing to tell SwiftUI to expand the sheet automatically in one or both dimensions based on the size of your content. It will still honor the minimum size you request, but it has that potential to grow as needed.</p><p>The best way to understand sticky sizing is to try it yourself. In the code below, tapping the button adds more text to <code>content</code>, and it will eventually cause the sheet to expand because of that sticky sizing:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> content <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;This is some very important content.&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">fixedSize</span><span class="token punctuation">(</span>horizontal<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> vertical<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Tap to expand&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                content <span class="token operator">+=</span> <span class="token string-literal"><span class="token string">&quot;This is more important content. This is more important content. This is more important content. This is more important content.&quot;</span></span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">presentationSizing</span><span class="token punctuation">(</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span><span class="token function">sticky</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),b={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-control-the-size-of-presented-views-2.zip",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>I used <code>fixedSize()</code> on the text to stop it from clipping.</p></div><p>You can go even further if you want – you could use fitted <em>and</em> sticky sizing.</p><p>Where things get really interesting is the <code>PresentationSizing</code> protocol, which lets you create your own sizes. Adopting this protocol means adding just one method that asks you to propose a size for some content.</p><p>For example, we could make a <code>PaddedSizing</code> type that asks its contents for their ideal size, then adds 100 points of extra width and height:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">PaddedSizing</span><span class="token punctuation">:</span> <span class="token class-name">PresentationSizing</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">proposedSize</span><span class="token punctuation">(</span><span class="token keyword">for</span> root<span class="token punctuation">:</span> <span class="token class-name">PresentationSizingRoot</span><span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token class-name">PresentationSizingContext</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">ProposedViewSize</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> size <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">sizeThatFits</span><span class="token punctuation">(</span><span class="token punctuation">.</span>unspecified<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">ProposedViewSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> size<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> size<span class="token punctuation">.</span>height <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s not required, but adding a small extension on <code>PresentationSizing</code> makes this new sizing type easier to use:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">extension</span> <span class="token class-name">PresentationSizing</span> <span class="token keyword">where</span> <span class="token keyword">Self</span> <span class="token operator">==</span> <span class="token class-name">PaddedSizing</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">var</span> padded<span class="token punctuation">:</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">PaddedSizing</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And now we can use that by adding <code>.presentationSizing(.padded)</code> to any sheet content.</p>`,8),z={class:"hint-container details"},S=n("summary",null,"Similar solutions…",-1);function x(p,_){const a=o("VPCard"),c=o("FontIcon");return k(),r("div",null,[n("h1",m,[n("a",w,[n("span",null,u(p.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,v,s(a,t(e({title:"How to control the size of presented views | SwiftUI by Example",desc:"How to control the size of presented views",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-control-the-size-of-presented-views",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g,n("blockquote",null,[n("p",null,[n("a",b,[s(c,{icon:"fas fa-file-zipper"}),d("Download this as an Xcode project")])])]),y,n("details",z,[S,s(a,t(e({title:"How to make a fixed size Spacer | SwiftUI by Example",desc:"How to make a fixed size Spacer",link:"/hackingwithswift.com/swiftui/how-to-make-a-fixed-size-spacer.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",desc:"How to dynamically adjust the appearance of a view based on its size and location",link:"/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to adjust the size of a view relative to its container | SwiftUI by Example",desc:"How to adjust the size of a view relative to its container",link:"/hackingwithswift.com/swiftui/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to read the size and position of a scrollview | SwiftUI by Example",desc:"How to read the size and position of a scrollview",link:"/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to animate the size of text | SwiftUI by Example",desc:"How to animate the size of text",link:"/hackingwithswift.com/swiftui/how-to-animate-the-size-of-text.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const T=l(h,[["render",x],["__file","how-to-control-the-size-of-presented-views.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.html","title":"How to control the size of presented views","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to control the size of presented views","description":"Article(s) > How to control the size of presented views","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to control the size of presented views"},{"property":"og:description","content":"How to control the size of presented views"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to control the size of presented views"}],["meta",{"property":"og:description","content":"Article(s) > How to control the size of presented views"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2023-06-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to control the size of presented views\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"next":"/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md","date":"2023-06-21T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.1,"words":931},"filePathRelative":"hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.md","localizedDate":"2023년 6월 21일","excerpt":"\\n"}');export{T as comp,H as data};
