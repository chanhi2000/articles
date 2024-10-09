import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as p,e as a,n as s,g as n,f as c,r as l,o as h}from"./app-BgNevrm5.js";const d={},u={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),g=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftUI’s <code>@StateObject</code> property wrapper is designed to fill a very specific gap in state management: when you need to create a reference type inside one of your views and make sure it stays alive for use in that view and others you share it with.</p><p>As an example, consider a simple <code>User</code> class such as this one:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">ObservableObject</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> username <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;@twostraws&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to use that inside various views, you either need to create it externally to SwiftUI and inject it in, or create it inside one of your SwiftUI views and use <code>@StateObject</code>, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@StateObject</span> <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Username: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">user<span class="token punctuation">.</span>username</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That will make sure the <code>User</code> instance does not get destroyed when the view updates.</p><p>Previously you might have used <code>@ObservedObject</code> to get the same result, but that was dangerous – sometimes, and only sometimes, <code>@ObservedObject</code> could accidentally release the object it was storing, because it wasn’t designed to be the ultimate source of truth for the object. This won’t happen with <code>@StateObject</code>, so you should use it instead.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>You should use <code>@StateObject</code> only once per object, which should be in whichever view is responsible for creating the object. All other views that share your object should use <code>@ObservedObject</code>.</p></div>`,9),k={class:"hint-container details"},f=t("summary",null,"Similar solutions…",-1);function y(i,v){const e=l("VPCard");return h(),r("div",null,[t("h1",u,[t("a",w,[t("span",null,p(i.$frontmatter.title)+" 관련",1)])]),a(e,s(n({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,b,a(e,s(n({title:"What is the @StateObject property wrapper? | SwiftUI by Example",desc:"What is the @StateObject property wrapper?",link:"https://hackingwithswift.com/quick-start/swiftui/what-is-the-stateobject-property-wrapper",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g,t("details",k,[f,a(e,s(n({title:"How to use @StateObject to create and monitor external objects | SwiftUI by Example",desc:"How to use @StateObject to create and monitor external objects",link:"/hackingwithswift.com/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,s(n({title:"What is the @GestureState property wrapper? | SwiftUI by Example",desc:"What is the @GestureState property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,s(n({title:"What is the @ObservedObject property wrapper? | SwiftUI by Example",desc:"What is the @ObservedObject property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,s(n({title:"What is the @Published property wrapper? | SwiftUI by Example",desc:"What is the @Published property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,s(n({title:"What is the @ScaledMetric property wrapper? | SwiftUI by Example",desc:"What is the @ScaledMetric property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const O=o(d,[["render",y],["__file","what-is-the-stateobject-property-wrapper.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.html","title":"What is the @StateObject property wrapper?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is the @StateObject property wrapper?","description":"Article(s) > What is the @StateObject property wrapper?","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is the @StateObject property wrapper?"},{"property":"og:description","content":"What is the @StateObject property wrapper?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is the @StateObject property wrapper?"}],["meta",{"property":"og:description","content":"Article(s) > What is the @StateObject property wrapper?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is the @StateObject property wrapper?\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.8,"words":539},"filePathRelative":"hackingwithswift.com/swiftui/what-is-the-stateobject-property-wrapper.md","excerpt":"\\n"}');export{O as comp,_ as data};
