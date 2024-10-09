import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,t as c,e as a,n as t,g as e,f as l,r as u,o as r}from"./app-BgNevrm5.js";const d={},k={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},h=n("nav",{class:"table-of-contents"},[n("ul")],-1),w=n("hr",null,null,-1),v=l(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftData was built with SwiftUI in mind, and it integrates tightly into SwiftUI views. This takes a number of forms:</p><ol><li>The <code>@Query</code> macro queries SwiftData objects, and automatically stays updated as those objects change. This macro works only on SwiftUI views.</li><li>We can inject one or more SwiftData model contains directly into the environment using the <code>modelContainer()</code> modifier. This will create the database if it isn&#39;t there, or load an existing one that was created previously.</li><li>Although each SwiftUI view can have only one model container, we can attach different model containers to different views in our hierarchy.</li><li>We have a <code>.modelContext</code> environment key to read the main context, which automatically uses the main actor to make data manipulation safe from views. This is the same model context used by any <code>@Query</code> properties in that view.</li></ol><p>We can put all the core components together in some sample code, starting with two models to store authors and the books they have written:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@Model</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Author</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> books<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> books<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>books <span class="token operator">=</span> books</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token attribute atrule">@Model</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> author<span class="token punctuation">:</span> <span class="token class-name">Author</span><span class="token operator">?</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> author<span class="token punctuation">:</span> <span class="token class-name">Author</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>author <span class="token operator">=</span> author</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We could then show a list of authors and their books using <code>@Query</code> in a SwiftUI view, such as this one:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">AuthorsView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Query</span><span class="token punctuation">(</span>sort<span class="token punctuation">:</span> <span class="token punctuation">\\</span><span class="token class-name">Author</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token keyword">var</span> authors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Author</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">List</span><span class="token punctuation">(</span>authors<span class="token punctuation">)</span> <span class="token punctuation">{</span> author <span class="token keyword">in</span></span>
<span class="line">                <span class="token class-name">Text</span><span class="token punctuation">(</span>author<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">                <span class="token class-name">Text</span><span class="token punctuation">(</span>author<span class="token punctuation">.</span>books<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">\\</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">formatted</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>and<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;iLibrary&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And finally, tie it all together in our <code>App</code> struct, using the <code>modelContainer(for:)</code> modifier:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@main</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">LibraryApp</span><span class="token punctuation">:</span> <span class="token class-name">App</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">WindowGroup</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">ContentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">modelContainer</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Author</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> <span class="token class-name">Book</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>Because <code>Author</code> and <code>Book</code> share a relationship, we can use either <code>modelContainer(for: Author.self)</code> or <code>modelContainer(for: Book.self)</code> and have SwiftData automatically load both models.</p></div>`,10);function f(o,b){const s=u("VPCard");return r(),p("div",null,[n("h1",k,[n("a",m,[n("span",null,c(o.$frontmatter.title)+" 관련",1)])]),a(s,t(e({title:"SwiftData by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftdata/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),h,w,a(s,t(e({title:"How to connect SwiftData to SwiftUI | SwiftData by Example",desc:"How to connect SwiftData to SwiftUI",link:"https://hackingwithswift.com/quick-start/swiftdata/how-to-connect-swiftdata-to-swiftui",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v])}const S=i(d,[["render",f],["__file","how-to-connect-swiftdata-to-swiftui.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.html","title":"How to connect SwiftData to SwiftUI","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to connect SwiftData to SwiftUI","description":"Article(s) > How to connect SwiftData to SwiftUI","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftdata","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to connect SwiftData to SwiftUI"},{"property":"og:description","content":"How to connect SwiftData to SwiftUI"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to connect SwiftData to SwiftUI"}],["meta",{"property":"og:description","content":"Article(s) > How to connect SwiftData to SwiftUI"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftdata"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2023-09-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to connect SwiftData to SwiftUI\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/hackingwithswift.com/swiftdata/how-to-create-a-complex-migration-using-versionedschema.md","date":"2023-09-22T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.md","localizedDate":"2023년 9월 22일","excerpt":"\\n"}');export{S as comp,_ as data};
