import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as s,t as c,e as a,n as t,g as e,f as l,r,o as u}from"./app-BgNevrm5.js";const d={},k={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},m=s("nav",{class:"table-of-contents"},[s("ul")],-1),w=s("hr",null,null,-1),v=l(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 15</strong></p><p>SwiftUI gives us a specific property wrapper for tracking which view currently receives user input, called <code>@FocusState</code>. This can be bound to a Boolean to control a single field, or to an enum to control movement between several.</p><p>If you just want to control whether a single piece of input has keyboard focus you can use this with a Boolean like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@FocusState</span> <span class="token keyword">private</span> <span class="token keyword">var</span> isUsernameFocused<span class="token punctuation">:</span> <span class="token class-name">Bool</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> username <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Anonymous&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Enter your username&quot;</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $username<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">focused</span><span class="token punctuation">(</span>$isUsernameFocused<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Toggle Focus&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                isUsernameFocused<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to move keyboard focus between more than one view you should use an optional enum. This can be set to one of the cases from your enum to activate a particular piece of input, or you can set it to <code>nil</code> to make nothing focused – effectively dismissing the keyboard on iOS.</p><p>So, we could create two text fields to store a username and password, then move between them using <code>@FocusState</code> and <code>onSubmit()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">enum</span> <span class="token class-name">FocusedField</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> username<span class="token punctuation">,</span> password</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token attribute atrule">@FocusState</span> <span class="token keyword">private</span> <span class="token keyword">var</span> focusedField<span class="token punctuation">:</span> <span class="token class-name">FocusedField</span><span class="token operator">?</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> username <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Anonymous&quot;</span></span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> password <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;sekrit&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Enter your username&quot;</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $username<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">focused</span><span class="token punctuation">(</span>$focusedField<span class="token punctuation">,</span> equals<span class="token punctuation">:</span> <span class="token punctuation">.</span>username<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">SecureField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Enter your password&quot;</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $password<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">focused</span><span class="token punctuation">(</span>$focusedField<span class="token punctuation">,</span> equals<span class="token punctuation">:</span> <span class="token punctuation">.</span>password<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span>onSubmit <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> focusedField <span class="token operator">==</span> <span class="token punctuation">.</span>username <span class="token punctuation">{</span></span>
<span class="line">                focusedField <span class="token operator">=</span> <span class="token punctuation">.</span>password</span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                focusedField <span class="token operator">=</span> <span class="token nil constant">nil</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),g={class:"hint-container details"},f=s("summary",null,"Similar solutions…",-1);function b(p,y){const n=r("VPCard");return u(),i("div",null,[s("h1",k,[s("a",h,[s("span",null,c(p.$frontmatter.title)+" 관련",1)])]),a(n,t(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,a(n,t(e({title:"What is the @FocusState property wrapper? | SwiftUI by Example",desc:"What is the @FocusState property wrapper?",link:"https://hackingwithswift.com/quick-start/swiftui/what-is-the-focusstate-property-wrapper",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,s("details",g,[f,a(n,t(e({title:"What is the @GestureState property wrapper? | SwiftUI by Example",desc:"What is the @GestureState property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(e({title:"What is the @Published property wrapper? | SwiftUI by Example",desc:"What is the @Published property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(e({title:"What is the @ScaledMetric property wrapper? | SwiftUI by Example",desc:"What is the @ScaledMetric property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(e({title:"What is the @ObservedObject property wrapper? | SwiftUI by Example",desc:"What is the @ObservedObject property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(n,t(e({title:"What is the @AppStorage property wrapper? | SwiftUI by Example",desc:"What is the @AppStorage property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-appstorage-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const _=o(d,[["render",b],["__file","what-is-the-focusstate-property-wrapper.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/swiftui/what-is-the-focusstate-property-wrapper.html","title":"What is the @FocusState property wrapper?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is the @FocusState property wrapper?","description":"Article(s) > What is the @FocusState property wrapper?","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is the @FocusState property wrapper?"},{"property":"og:description","content":"What is the @FocusState property wrapper?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/what-is-the-focusstate-property-wrapper.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/what-is-the-focusstate-property-wrapper.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is the @FocusState property wrapper?"}],["meta",{"property":"og:description","content":"Article(s) > What is the @FocusState property wrapper?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is the @FocusState property wrapper?\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.8,"words":540},"filePathRelative":"hackingwithswift.com/swiftui/what-is-the-focusstate-property-wrapper.md","excerpt":"\\n"}');export{_ as comp,x as data};
