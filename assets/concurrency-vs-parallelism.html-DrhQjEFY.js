import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as e,t as c,e as o,n,g as a,f as l,r as p,o as h}from"./app-BgNevrm5.js";const u={},m={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},d=e("nav",{class:"table-of-contents"},[e("ul")],-1),y=e("hr",null,null,-1),f=l("<blockquote><p>Updated for Xcode 15</p></blockquote><p>When working through concurrency in Swift, there are two words we use a lot: <em>concurrency</em> and <em>parallelism</em>. We give them very specific meanings that might not quite match how you use them in English, so it’s worth clarifying up front what they mean in this specific context.</p><p>Imagine a single-core CPU running a desktop operating system: the user can run lots of programs, use the internet, maybe play some music, and from the user’s perspective all those things are happening at the same time. However, we know that isn’t possible: they have a single-core CPU, which means it can literally only do <em>one</em> thing at a time.</p><p>What you’re seeing here is called <em>concurrency</em>: our user’s apps have been written in such a way that one CPU core can juggle them so they appear to be running at the same time. One starts, makes a tiny bit of progress on its work, then pauses so that another one can start, make a bit of progress on <em>its</em> work, then pause, and so on. Because the CPU flips between programs so quickly, they appear to be running all at the same time, when really they aren’t.</p><p>As soon as you add a <em>second</em> CPU core to a computer, then things can run in <em>parallel</em>. This is when two or more programs run at the same instant: one on the first core, and another on the second. As you might imagine, this means work can happen up to twice as fast because two programs are able to run at the same time.</p><p>The really interesting stuff lies in our ability to split up work in a single program. Yes, having two CPU cores allows a computer to run two separate programs at the same time, but we can also split up our work into smaller parts called threads, and <em>those</em> can be run in parallel too.</p><p>This splitting up of functionality requires us to do work – Swift can’t decide by itself to run some parts of our code in parallel with other parts, because that would introduce a lot of surprising bugs. Instead, we have to tell Swift ahead of time which parts of our code can be split up if needed, and also tell it what we should do when those tasks complete.</p><p>When you boil it right down, that’s the topic of this whole book: teaching Swift how it can split up the work in our programs so it runs as efficiently as possible. And it <em>is</em> about efficiency, because some Apple devices have many CPU cores – if your app is running full screen on that device and you’re only ever using one of those cores, you’re only getting a tiny fraction of the device’s possible performance.</p><p>More importantly, you’re also helping to make sure your app remains responsive the entire time. Imagine if your user interface froze up every time you were waiting for the response to a network request – it would be a pretty horrible experience, right?</p><p>There’s a famous computer scientist called Rob Pike, and I think he explained the difference between concurrency and parallelism beautifully. Here’s what he said:</p><blockquote><p>“Concurrency is about dealing with many things at once, parallelism is about doing many things at once. Concurrency is a way to structure things so you can maybe use parallelism to do a better job.”</p></blockquote>",11),w={class:"hint-container details"},k=e("summary",null,"Similar solutions…",-1);function b(r,v){const t=p("VPCard");return h(),i("div",null,[e("h1",m,[e("a",g,[e("span",null,c(r.$frontmatter.title)+" 관련",1)])]),o(t,n(a({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,y,o(t,n(a({title:"Concurrency vs parallelism | Swift Concurrency by Example",desc:"Concurrency vs parallelism",link:"https://hackingwithswift.com/quick-start/concurrency/concurrency-vs-parallelism",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,e("details",w,[k,o(t,n(a({title:"Where is Swift concurrency supported? | Swift Concurrency by Example",desc:"Where is Swift concurrency supported?",link:"/hackingwithswift.com/concurrency/where-is-swift-concurrency-supported.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(t,n(a({title:"How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",desc:"How to fix the error “async call in a function that does not support concurrency”",link:"/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(t,n(a({title:"What are tasks and task groups? | Swift Concurrency by Example",desc:"What are tasks and task groups?",link:"/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(t,n(a({title:"What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",desc:"What’s the difference between async let, tasks, and task groups?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(t,n(a({title:"Important: Do not use an actor for your SwiftUI data models | Swift Concurrency by Example",desc:"Important: Do not use an actor for your SwiftUI data models",link:"/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const x=s(u,[["render",b],["__file","concurrency-vs-parallelism.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/concurrency/concurrency-vs-parallelism.html","title":"Concurrency vs parallelism","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Concurrency vs parallelism","description":"Article(s) > Concurrency vs parallelism","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Concurrency vs parallelism"},{"property":"og:description","content":"Concurrency vs parallelism"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/concurrency-vs-parallelism.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/concurrency-vs-parallelism.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Concurrency vs parallelism"}],["meta",{"property":"og:description","content":"Article(s) > Concurrency vs parallelism"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-07-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concurrency vs parallelism\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-07-01T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.08,"words":925},"filePathRelative":"hackingwithswift.com/concurrency/concurrency-vs-parallelism.md","localizedDate":"2021년 7월 1일","excerpt":"\\n"}');export{x as comp,S as data};
