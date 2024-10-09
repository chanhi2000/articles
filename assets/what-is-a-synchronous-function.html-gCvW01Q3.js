import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as t,t as r,e as o,n as e,g as a,f as h,r as l,o as u}from"./app-BgNevrm5.js";const f={},d={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),y=t("hr",null,null,-1),g=h("<blockquote><p>Updated for Xcode 15</p></blockquote><p>By default, all Swift functions are <em>synchronous</em>, but what does that mean?</p><p>A synchronous function is one that executes all its work in a simple, straight line on a single thread. Although the function itself can interact with other threads – it can request that work happens elsewhere, for example – the function itself always runs on a single thread.</p><p>This has a number of advantages, not least that synchronous functions are very easy to think about: when you call function A, it will carry on working until all its work is done, then return a value. If while working, function A calls function B, and perhaps functions C, D, and E as well, it doesn’t matter – they all will execute on the same thread, and run one by one until the work completes.</p><p>Internally this is handled as a function stack: whenever one function calls another, the system creates what’s called a <em>stack frame</em> to store all the data required for that new function – that’s things like its local variables, for example. That new stack frame gets pushed on top of the previous one, like a stack of Lego bricks, and if that function calls a third function then another stack frame is created and added above the others. Eventually the functions finish, and their stack frame is removed and destroyed in a process we call <em>popping</em>, and control goes back to whichever function the code was called from.</p><p>Synchronous functions have an important downside, which is that they are <em>blocking</em>. If function A calls function B and needs to know what its return value is, then function A must wait for function B to finish before it can continue. This sounds self-evident, I know, but blocking code is problematic because now you’ve blocked a whole thread – it might be sitting around for a second or more waiting for some data to return.</p><p>You’re probably thinking that waiting for a second is nothing at all, but in computing terms that’s an ice age! Keep in mind that the Neural Engine in Apple’s A14 Bionic CPU – just one part of the chip that powers the iPhone 12 – is capable of doing 11 <em>trillion</em> things per second, so if you block a thread for even a second that’s 11,000,000,000,000 things you could have done but didn’t.</p><p>One solution is to say “Well, if we’ve got a thread that’s currently blocked, we should just launch a new thread.” That’s definitely <em>a</em> solution, but it’s also a path towards thread explosion and we’ve already covered why that’s every bit as bad as it sounds.</p><p>So, although synchronous functions are easy to think about and work with, they aren’t very efficient for certain kinds of tasks. To make our code more flexible and more efficient, it’s possible to create <em>asynchronous</em> functions instead.</p>",9),w={class:"hint-container details"},k=t("summary",null,"Similar solutions…",-1);function b(c,v){const n=l("VPCard");return u(),s("div",null,[t("h1",d,[t("a",p,[t("span",null,r(c.$frontmatter.title)+" 관련",1)])]),o(n,e(a({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,y,o(n,e(a({title:"What is a synchronous function? | Swift Concurrency by Example",desc:"What is a synchronous function?",link:"https://hackingwithswift.com/quick-start/concurrency/what-is-a-synchronous-function",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g,t("details",w,[k,o(n,e(a({title:"What is an asynchronous function? | Swift Concurrency by Example",desc:"What is an asynchronous function?",link:"/hackingwithswift.com/concurrency/what-is-an-asynchronous-function.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(n,e(a({title:"What calls the first async function? | Swift Concurrency by Example",desc:"What calls the first async function?",link:"/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(n,e(a({title:"What’s the performance cost of calling an async function? | Swift Concurrency by Example",desc:"What’s the performance cost of calling an async function?",link:"/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(n,e(a({title:"How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",desc:"How to fix the error “async call in a function that does not support concurrency”",link:"/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),o(n,e(a({title:"How to create and call an async function | Swift Concurrency by Example",desc:"How to create and call an async function",link:"/hackingwithswift.com/concurrency/how-to-create-and-call-an-async-function.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const W=i(f,[["render",b],["__file","what-is-a-synchronous-function.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/concurrency/what-is-a-synchronous-function.html","title":"What is a synchronous function?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is a synchronous function?","description":"Article(s) > What is a synchronous function?","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is a synchronous function?"},{"property":"og:description","content":"What is a synchronous function?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/what-is-a-synchronous-function.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/what-is-a-synchronous-function.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is a synchronous function?"}],["meta",{"property":"og:description","content":"Article(s) > What is a synchronous function?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-07-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is a synchronous function?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/hackingwithswift.com/concurrency/dedication.md","date":"2021-07-01T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.81,"words":844},"filePathRelative":"hackingwithswift.com/concurrency/what-is-a-synchronous-function.md","localizedDate":"2021년 7월 1일","excerpt":"\\n"}');export{W as comp,S as data};
