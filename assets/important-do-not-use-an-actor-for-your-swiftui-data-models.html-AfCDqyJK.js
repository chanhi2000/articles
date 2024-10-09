import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as t,t as s,e,n as a,g as n,f as l,r as d,o as h}from"./app-BgNevrm5.js";const m={},u={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),y=l("<blockquote><p>Updated for Xcode 15</p></blockquote><p>Swift’s actors allow us to share data in multiple parts of our app <em>without</em> causing problems with concurrency, because they automatically ensure two pieces of code cannot simultaneously access the actor’s protected data.</p><p>Actors are an important addition to our toolset, and help us guarantee safe access to data in concurrent environments. However, if you’ve ever wondered “should I use an actor for my SwiftUI data?”, let me answer that as clearly as I can: actors are a <em>really</em> bad choice for any data models you use with SwiftUI – anything that conforms to the <code>ObservableObject</code> protocol.</p><p>SwiftUI updates its user interface on the main actor, which means when we make a class conform to <code>ObservableObject</code> we’re agreeing that all our work will happen on the main actor. As an example, any time we modify an <code>@Published</code> property that <em>must</em> happen on the main actor, otherwise we’ll be asking for changes to be made somewhere that isn’t allowed.</p><p>Now think about what would happen if you tried to use a custom actor for your data. Not only would any data writes need to happen on that actor rather than the main actor (thus forcing the UI to update away from the main actor), but any data <em>reads</em> would need to happen there too – every time you tried to bind a string to a <code>TextField</code>, for example, you’d be asking Swift to simultaneously use the main actor and your custom actor, which doesn’t make sense.</p><p>The correct solution here is to use a class that conforms to <code>ObservableObject</code>, then annotate it with <code>@MainActor</code> to ensure it does any UI work safely. If you still find that you need to be able to carve off some async work safely, you can create a sibling actor – a separate actor that does not use <code>@MainActor</code>, but does not directly update the UI.</p>",6),g={class:"hint-container details"},b=t("summary",null,"Similar solutions…",-1);function k(r,v){const o=d("VPCard");return h(),i("div",null,[t("h1",u,[t("a",p,[t("span",null,s(r.$frontmatter.title)+" 관련",1)])]),e(o,a(n({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,w,e(o,a(n({title:"Important: Do not use an actor for your SwiftUI data models | Swift Concurrency by Example",desc:"Important: Do not use an actor for your SwiftUI data models",link:"https://hackingwithswift.com/quick-start/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,t("details",g,[b,e(o,a(n({title:"What is an actor and why does Swift have them? | Swift Concurrency by Example",desc:"What is an actor and why does Swift have them?",link:"/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,a(n({title:"What is actor hopping and how can it cause problems? | Swift Concurrency by Example",desc:"What is actor hopping and how can it cause problems?",link:"/hackingwithswift.com/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,a(n({title:"How to use @MainActor to run code on the main queue | Swift Concurrency by Example",desc:"How to use @MainActor to run code on the main queue",link:"/hackingwithswift.com/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,a(n({title:"How to create and use an actor in Swift | Swift Concurrency by Example",desc:"How to create and use an actor in Swift",link:"/hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,a(n({title:"How to make parts of an actor nonisolated | Swift Concurrency by Example",desc:"How to make parts of an actor nonisolated",link:"/hackingwithswift.com/concurrency/how-to-make-parts-of-an-actor-nonisolated.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const _=c(m,[["render",k],["__file","important-do-not-use-an-actor-for-your-swiftui-data-models.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.html","title":"Important: Do not use an actor for your SwiftUI data models","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Important: Do not use an actor for your SwiftUI data models","description":"Article(s) > Important: Do not use an actor for your SwiftUI data models","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Important: Do not use an actor for your SwiftUI data models"},{"property":"og:description","content":"Important: Do not use an actor for your SwiftUI data models"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Important: Do not use an actor for your SwiftUI data models"}],["meta",{"property":"og:description","content":"Article(s) > Important: Do not use an actor for your SwiftUI data models"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Important: Do not use an actor for your SwiftUI data models\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"next":"/hackingwithswift.com/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type.md","date":"2021-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md","localizedDate":"2021년 11월 28일","excerpt":"\\n"}');export{_ as comp,x as data};
