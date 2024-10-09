import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as c,e as n,n as i,g as a,f as l,r as p,o as d}from"./app-BgNevrm5.js";const u={},h={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),g=l(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>There are three common reasons this error occurs, and all are relatively easy to fix.</p><p>The first reason is using a <code>List</code> or <code>ForEach</code> like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">...</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>SwiftUI supports the half-open range operator, <code>..&lt;</code>, but not the closed range operator. As a result, you need to rewrite the above code to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">..&lt;</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The second reason is using a <code>List</code> or <code>ForEach</code> on primitive types that don’t conform to the <code>Identifiable</code> protocol, such as an array of strings or integers. In this situation, you should use <code>id: \\.self</code> as the second parameter to your <code>List</code> or <code>ForEach</code>, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ForEach</span><span class="token punctuation">(</span>stringArray<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That tells SwiftUI that each value in the array is unique, and so can be used to identify each item in the loop.</p><p>The final reason its happens is if you’re looping over an array of custom structs that don’t conform to <code>Identifiable</code>. Here you should add either add a conformance to that protocol (which means adding an <code>id</code> property that is unique), or use <code>id: \\.someUniquePropertyName</code> as the second parameter to your <code>List</code> or <code>ForEach</code>, which uses that property instead of the ID.</p><p>For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you were looping over an array of those <code>User</code> objects and wanted to identify them uniquely by their username, you’d use this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ForEach</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\\</span><span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,14),b={class:"hint-container details"},y=e("summary",null,"Similar solutions…",-1);function k(o,v){const t=p("VPCard");return d(),r("div",null,[e("h1",h,[e("a",f,[e("span",null,c(o.$frontmatter.title)+" 관련",1)])]),n(t,i(a({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,n(t,i(a({title:"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'” | SwiftUI by Example",desc:"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g,e("details",b,[y,n(t,i(a({title:"How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'” | SwiftUI by Example",desc:"How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that 'SomeType' conform to 'ObservableObject'”",link:"/hackingwithswift.com/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,i(a({title:"How to fix “Fatal error: No ObservableObject of type SomeType found” | SwiftUI by Example",desc:"How to fix “Fatal error: No ObservableObject of type SomeType found”",link:"/hackingwithswift.com/swiftui/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,i(a({title:"How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type” | SwiftUI by Example",desc:"How to fix “Property declares an opaque return type, but has no initializer expression from which to infer an underlying type”",link:"/hackingwithswift.com/swiftui/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,i(a({title:"How to fix “Modifying state during view update, this will cause undefined behavior” | SwiftUI by Example",desc:"How to fix “Modifying state during view update, this will cause undefined behavior”",link:"/hackingwithswift.com/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,i(a({title:"How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” | SwiftUI by Example",desc:"How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”",link:"/hackingwithswift.com/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const _=s(u,[["render",k],["__file","how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.html.vue"]]),q=JSON.parse(`{"path":"/hackingwithswift.com/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.html","title":"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”","description":"Article(s) > How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”"},{"property":"og:description","content":"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”"}],["meta",{"property":"og:description","content":"Article(s) > How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2022-12-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to fix “Initializer 'init(_:rowContent:)' requires that 'SomeType' conform to 'Identifiable'”\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2022-12-01T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.53,"words":760},"filePathRelative":"hackingwithswift.com/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.md","localizedDate":"2022년 12월 1일","excerpt":"\\n"}`);export{_ as comp,q as data};
