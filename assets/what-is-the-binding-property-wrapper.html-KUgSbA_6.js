import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as e,t as r,e as a,n as t,g as n,f as c,r as l,o as d}from"./app-BgNevrm5.js";const h={},u={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),k=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><code>@Binding</code> lets us declare that one value actually comes from elsewhere, and should be shared in both places. This is <em>not</em> the same as <code>@ObservedObject</code> or <code>@EnvironmentObject</code>, both of which are designed for reference types to be shared across potentially many views.</p><p>For example, we might have a <code>ContentView</code> with an <code>@State</code> property storing whether a child view is being presented or not, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> showingAddUser <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// your code here</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span>isPresented<span class="token punctuation">:</span> $showingAddUser<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// show the add user view</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That uses <code>showingAddUser</code> for the <code>isPresented</code> parameter of our sheet, which means when that Boolean becomes true the add user view will be shown. However, how can we allow the add user view to dismiss itself if it needs to – if the user taps a Done button, for example?</p><p>What we <em>want</em> to happen is for the add user view to set <code>showingAddUser</code> back to false, which will cause <code>ContentView</code> to hide it. This is exactly what <code>@Binding</code> is for: it lets us create a property in the add user view that says “this value will be provided from elsewhere, and will be shared between us and that other place.”</p><p>So, we might create an add user view like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">AddView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Binding</span> <span class="token keyword">var</span> isPresented<span class="token punctuation">:</span> <span class="token class-name">Bool</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Dismiss&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            isPresented <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That property literally means “I have a Boolean value called <code>isPresented</code>, but it’s being stored elsewhere.” So, when we create that <code>AddView</code> to replace the <code>// show the add user view</code> comment from earlier, we’d need to provide the value so it can be manipulated:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span>isPresented<span class="token punctuation">:</span> $showingAddUser<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">AddView</span><span class="token punctuation">(</span>isPresented<span class="token punctuation">:</span> $showingAddUser<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows both <code>ContentView</code> and <code>AddView</code> to share the same Boolean value – when it changes in one place it also changes in the other.</p>`,11),v={class:"hint-container details"},b=e("summary",null,"Similar solutions…",-1);function f(i,y){const s=l("VPCard");return d(),o("div",null,[e("h1",u,[e("a",w,[e("span",null,r(i.$frontmatter.title)+" 관련",1)])]),a(s,t(n({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,g,a(s,t(n({title:"What is the @Binding property wrapper? | SwiftUI by Example",desc:"What is the @Binding property wrapper?",link:"https://hackingwithswift.com/quick-start/swiftui/what-is-the-binding-property-wrapper",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k,e("details",v,[b,a(s,t(n({title:"What is the @GestureState property wrapper? | SwiftUI by Example",desc:"What is the @GestureState property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-gesturestate-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,t(n({title:"What is the @Published property wrapper? | SwiftUI by Example",desc:"What is the @Published property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-published-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,t(n({title:"What is the @ScaledMetric property wrapper? | SwiftUI by Example",desc:"What is the @ScaledMetric property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-scaledmetric-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,t(n({title:"What is the @ObservedObject property wrapper? | SwiftUI by Example",desc:"What is the @ObservedObject property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-observedobject-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,t(n({title:"What is the @AppStorage property wrapper? | SwiftUI by Example",desc:"What is the @AppStorage property wrapper?",link:"/hackingwithswift.com/swiftui/what-is-the-appstorage-property-wrapper.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const S=p(h,[["render",f],["__file","what-is-the-binding-property-wrapper.html.vue"]]),W=JSON.parse('{"path":"/hackingwithswift.com/swiftui/what-is-the-binding-property-wrapper.html","title":"What is the @Binding property wrapper?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is the @Binding property wrapper?","description":"Article(s) > What is the @Binding property wrapper?","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is the @Binding property wrapper?"},{"property":"og:description","content":"What is the @Binding property wrapper?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/what-is-the-binding-property-wrapper.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/what-is-the-binding-property-wrapper.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is the @Binding property wrapper?"}],["meta",{"property":"og:description","content":"Article(s) > What is the @Binding property wrapper?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is the @Binding property wrapper?\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.05,"words":615},"filePathRelative":"hackingwithswift.com/swiftui/what-is-the-binding-property-wrapper.md","excerpt":"\\n"}');export{S as comp,W as data};
