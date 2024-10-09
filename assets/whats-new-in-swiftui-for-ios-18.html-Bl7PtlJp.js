import{_ as w}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,b as e,t as m,e as s,n as a,g as o,w as i,d as n,f as p,r,o as f}from"./app-BgNevrm5.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},y=e("hr",null,null,-1),S=p(`<hr><p>This is another good year for SwiftUI, with another batch of scrollview improvements, some welcome macOS features, remarkable control over text rendering, and more – the team at Apple have a lot to be proud of, and many developers will breathe a sigh of relief as API such as fine-grained subview control is now public for all of us to use.</p><p>But there&#39;s also one major architectural change you need to be aware of, so let&#39;s start with that…</p><hr><h2 id="view-is-now-on-the-main-actor" tabindex="-1"><a class="header-anchor" href="#view-is-now-on-the-main-actor"><span>View is now on the main actor</span></a></h2><p>For a long time, the <code>View</code> protocol looked a bit like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">protocol</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@MainActor</span> <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That meant code in your view&#39;s <code>body</code> ran on the main actor, but code <em>elsewhere</em> in your view did not.</p><p>This allowed our views to do work across tasks naturally, but caused problems when using <code>@Observable</code> classes that ran on the main actor. For example, code like this simply wouldn&#39;t compile:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@Observable</span> <span class="token attribute atrule">@MainActor</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewModel</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Anonymous&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> viewModel <span class="token operator">=</span> <span class="token class-name">ViewModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello, </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">viewModel<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That would throw up &quot;Call to main actor-isolated initializer &#39;init()&#39; in a synchronous nonisolated context&quot;, which is a rather complex way of saying &quot;your class says it must be on the main actor, but you&#39;re creating it away from the main actor.&quot;</p><p>When you rebuild your code with Xcode 16 that error goes away completely, and with no work from us – it&#39;s just gone. However, it&#39;s important to know <em>why</em>. You see, the <code>View</code> protocol now looks more like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@MainActor</span> <span class="token keyword">protocol</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The difference is small, but makes a huge difference: the <code>@MainActor</code> attribute moved from <code>body</code> up to the protocol itself, which means the <code>body</code> property <em>along with all other properties and methods we make</em> are run on the main actor.</p><p>You can see the impact with this sample code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello, world!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">onAppear</span><span class="token punctuation">(</span>perform<span class="token punctuation">:</span> doSampleWork<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">doSampleWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Task</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">10_000</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Work 1-</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">Task</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">10_000</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Work 2-</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Previously that would run both tasks at the same time, so you&#39;d see &quot;Work 1&quot; and &quot;Work 2&quot; outputs being printed intermingled. However, now that <code>View</code> runs on the main actor, my whole view runs on the main actor, and therefore the <code>doSampleWork()</code> work method also runs on the main actor.</p><p>This means the onus is on <em>you</em> to make sure you push work off the main actor as necessary, otherwise you&#39;ll see a pretty dramatic decrease in performance.</p><p>So, the overall change is a welcome one: fewer errors for the most common work. However, it will create a little churn in the short term as you spin work off to other actors manually.</p><hr><h2 id="on-to-the-new-apis" tabindex="-1"><a class="header-anchor" href="#on-to-the-new-apis"><span>On to the new APIs…</span></a></h2><p>We got another batch of major improvements this year, delivering more scrollview power, incredible new animation effects, and better control over how we place subviews:</p>`,22),_=e("div",{class:"hint-container note"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,"This list is currently incomplete; some of the new APIs didn't quite ship for seed 1, and some others aren't quite functioning well enough for me to talk about. Hopefully seed 2 or 3 will see improvements here.")],-1),I=e("hr",null,null,-1),x=e("h2",{id:"smaller-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#smaller-improvements"},[e("span",null,"Smaller improvements")])],-1),A=e("p",null,"Alongside those major features, we also received some smaller but still important adjustments:",-1),U=e("code",null,"@Entry",-1),H=e("code",null,"TabView",-1),V=e("code",null,"Tab",-1),W=e("code",null,".rotate",-1),T=p('<p>That <code>@Entry</code> change alone is a real delight – it makes things like environment and preference key significantly easier.</p><hr><h2 id="what-s-still-missing" tabindex="-1"><a class="header-anchor" href="#what-s-still-missing"><span>What&#39;s still missing?</span></a></h2><p>We&#39;re now five years into SwiftUI, so you might expect the platform has reached maturity. However, there are a handful of omissions that continue to cause problems, and we can only hope these get addressed soon.</p><p>First, we still don&#39;t have any kind of WebKit or Safari integration. While a full <code>WebView</code> might perhaps be a lot of work, even some kind of <code>SafariView</code> to match <code>SFSafariViewController</code> would be <em>something</em>. I&#39;ve filed feedback, I&#39;ve talked to Apple&#39;s engineers in labs, and at this point I don&#39;t know what else to do. UIKit had <code>UIWebView</code> in its very first release – what do we need to get something similar in SwiftUI?</p><p>Second, working with the keychain remains incredibly hard. This API has always been problematic, but by ignoring it SwiftUI makes the problem worse – it&#39;s trivial to use <code>@AppStorage</code>, but doing so sacrifices essential user security. Sadly, we&#39;re in a state where the wrong choice is by far the easiest to reach for.</p><p>Third, we desperately need more control over remote images. SwiftUI for iOS 15 gave us the rather surprising <code>AsyncImageView</code> – still the only API that silently swallows errors, from what I can tell – but years on we haven&#39;t acquired any ability to adjust caching, retries, and more. Some configuration API similar to <code>defaultAppStorage()</code> would make a huge difference.</p><p>And finally, <code>TextEditor</code> still has no rich text support. I can imagine this being an extremely complex task, not least because it&#39;s clear the SwiftUI team want their text to retain meaningful metadata rather than just being blobs of attributes. However, this missing support limits where SwiftUI can be used, and I know many apps would benefit from adding more functionality here.</p><p>Those are just four ideas, and I know other folks have their own priorities. Please do continue to file feedback with Apple – I know it can feel like a bit of a black hole sometimes, but your feedback reports <em>are</em> read and discussed internally, and every time someone duplicates a request it&#39;s effectively one more vote for that feature.</p><p>SwiftUI is by far the best way to create apps for Apple&#39;s platforms, and this release continues to stretch its lead. Once we reach feature parity with UIKit – yes, <code>WKWebView</code> and <code>SFSafariViewController</code>, but also <code>DataScannerViewController</code>, list section index titles, and pretty much everything that still needs <code>@UIApplicationDelegateAdaptor</code> – then really there&#39;s nothing holding it back.</p>',10);function P(d,q){const t=r("VPCard"),c=r("router-link"),u=r("SiteInfo"),l=r("RouteLink");return f(),h("div",null,[e("h1",g,[e("a",v,[e("span",null,m(d.$frontmatter.title)+" 관련",1)])]),s(t,a(o({title:"Swift > Article(s)",desc:"Article(s)",link:"/programming/swift/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),e("nav",b,[e("ul",null,[e("li",null,[s(c,{to:"#view-is-now-on-the-main-actor"},{default:i(()=>[n("View is now on the main actor")]),_:1})]),e("li",null,[s(c,{to:"#on-to-the-new-apis"},{default:i(()=>[n("On to the new APIs…")]),_:1})]),e("li",null,[s(c,{to:"#smaller-improvements"},{default:i(()=>[n("Smaller improvements")]),_:1})]),e("li",null,[s(c,{to:"#what-s-still-missing"},{default:i(()=>[n("What's still missing?")]),_:1})])])]),y,s(u,{name:"What’s new in SwiftUI for iOS 18 – Hacking with Swift",desc:"We got new API for colors and gradients, more scrollview improvements, tab improvements, and more.",url:"https://hackingwithswift.com/articles/270/whats-new-in-swiftui-for-ios-18",logo:"https://hackingwithswift.com/favicon.svg",preview:"https://hackingwithswift.com/uploads/swiftui.jpg"}),S,s(t,a(o({title:"How to create custom text effects and animations | SwiftUI by Example",desc:"How to create custom text effects and animations",link:"/hackingwithswift.com/swiftui/how-to-create-custom-text-effects-and-animations.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to create zoom animations between views | SwiftUI by Example",desc:"How to create zoom animations between views",link:"/hackingwithswift.com/swiftui/how-to-create-zoom-animations-between-views.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to read user contacts with ContactAccessButton | SwiftUI by Example",desc:"How to read user contacts with ContactAccessButton",link:"/hackingwithswift.com/swiftui/how-to-read-user-contacts-with-contactaccessbutton.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to create new colors by blending two other SwiftUI colors | SwiftUI by Example",desc:"How to create new colors by blending two other SwiftUI colors",link:"/hackingwithswift.com/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to create a mesh gradient | SwiftUI by Example",desc:"How to create a mesh gradient",link:"/hackingwithswift.com/swiftui/how-to-create-a-mesh-gradient.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to control the size of presented views | SwiftUI by Example",desc:"How to control the size of presented views",link:"/hackingwithswift.com/swiftui/how-to-control-the-size-of-presented-views.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to detect when the size or position of a view changes | SwiftUI by Example",desc:"How to detect when the size or position of a view changes",link:"/hackingwithswift.com/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to read the size and position of a scrollview | SwiftUI by Example",desc:"How to read the size and position of a scrollview",link:"/hackingwithswift.com/swiftui/how-to-read-the-size-and-position-of-a-scrollview.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to scroll to exact locations inside a scrollview | SwiftUI by Example",desc:"How to scroll to exact locations inside a scrollview",link:"/hackingwithswift.com/swiftui/how-to-scroll-to-exact-locations-inside-a-scrollview.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to detect whether a scrollview is currently moving or is idle | SwiftUI by Example",desc:"How to detect whether a scrollview is currently moving or is idle",link:"/hackingwithswift.com/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to position and style subviews that come from a different view | SwiftUI by Example",desc:"How to position and style subviews that come from a different view",link:"/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(o({title:"How to use @State inside SwiftUI previews using @Previewable | SwiftUI by Example",desc:"How to use @State inside SwiftUI previews using @Previewable",link:"/hackingwithswift.com/swiftui/how-to-use-state-inside-swiftui-previews-using-previewable.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),_,I,x,A,e("ul",null,[e("li",null,[n("The "),U,n(" macro makes it much easier to "),s(l,{to:"/hackingwithswift.com/swiftui/how-to-create-and-use-custom-environment-values.html"},{default:i(()=>[n("create and use custom environment values")]),_:1})]),e("li",null,[s(l,{to:"/hackingwithswift.com/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview.html"},{default:i(()=>[H,n(" now has dedicated "),V,n(" children")]),_:1}),n(" (This sounds small, but the new tab layout needs to be handled carefully to ensure your app works great on both iOS and iPadOS!)")]),e("li",null,[n("We can now "),s(l,{to:"/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.html"},{default:i(()=>[n("compile Metal shaders before use in SwiftUI")]),_:1})]),e("li",null,[n("We can now use "),s(l,{to:"/hackingwithswift.com/swiftui/how-to-set-custom-accessibility-labels-and-hints.html"},{default:i(()=>[n("fully custom views for accessibility labels")]),_:1})]),e("li",null,[s(l,{to:"/hackingwithswift.com/swiftui/how-to-animate-sf-symbols.html"},{default:i(()=>[n("There's a new "),W,n(" animation for SF Symbols")]),_:1})]),e("li",null,[s(l,{to:"/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.html"},{default:i(()=>[n("How to activate different button behaviors when a modifier key is pressed")]),_:1})]),e("li",null,[s(l,{to:"/hackingwithswift.com/swiftui/how-to-lets-users-drag-anywhere-to-move-a-window.html"},{default:i(()=>[n("How to lets users drag anywhere to move a window")]),_:1})])]),T])}const j=w(k,[["render",P],["__file","whats-new-in-swiftui-for-ios-18.html.vue"]]),z=JSON.parse(`{"path":"/hackingwithswift.com/whats-new-in-swiftui-for-ios-18.html","title":"What’s new in SwiftUI for iOS 18","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What’s new in SwiftUI for iOS 18","description":"We got new API for colors and gradients, more scrollview improvements, tab improvements, and more.","icon":"fa-brands fa-swift","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","ios","xcode"],"head":[[{"meta":null},{"property":"og:title","content":"We got new API for colors and gradients, more scrollview improvements, tab improvements, and more."},{"property":"og:description","content":"What’s new in SwiftUI for iOS 18"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/whats-new-in-swiftui-for-ios-18.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/whats-new-in-swiftui-for-ios-18.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What’s new in SwiftUI for iOS 18"}],["meta",{"property":"og:description","content":"We got new API for colors and gradients, more scrollview improvements, tab improvements, and more."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/uploads/swiftui.jpg"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://hackingwithswift.com/uploads/swiftui.jpg"}],["meta",{"name":"twitter:image:alt","content":"What’s new in SwiftUI for iOS 18"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What’s new in SwiftUI for iOS 18\\",\\"image\\":[\\"https://hackingwithswift.com/uploads/swiftui.jpg\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/programming/swift/articles/README.md","date":"2024-06-21T00:00:00.000Z","isOriginal":false,"cover":"https://hackingwithswift.com/uploads/swiftui.jpg"},"headers":[{"level":2,"title":"View is now on the main actor","slug":"view-is-now-on-the-main-actor","link":"#view-is-now-on-the-main-actor","children":[]},{"level":2,"title":"On to the new APIs…","slug":"on-to-the-new-apis","link":"#on-to-the-new-apis","children":[]},{"level":2,"title":"Smaller improvements","slug":"smaller-improvements","link":"#smaller-improvements","children":[]},{"level":2,"title":"What's still missing?","slug":"what-s-still-missing","link":"#what-s-still-missing","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":6.18,"words":1853},"filePathRelative":"hackingwithswift.com/whats-new-in-swiftui-for-ios-18.md","localizedDate":"2024년 6월 21일","excerpt":"\\n"}`);export{j as comp,z as data};
