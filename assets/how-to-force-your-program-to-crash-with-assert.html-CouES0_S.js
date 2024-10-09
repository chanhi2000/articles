import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as l,e as a,n as r,g as s,a as t,r as h,o as p}from"./app-BgNevrm5.js";const m={},g={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),d=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 7.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/how-to-force-a-crash-using-fatalerror">How to force a crash using fatalError() 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/language/how-to-check-your-program-state-using-precondition">How to check your program state using precondition() 
/example-code/system/how-to-run-an-external-program-using-process">How to run an external program using Process 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
`)],-1);function k(n,b){const o=h("VPCard");return p(),c("div",null,[e("h1",g,[e("a",u,[e("span",null,l(n.$frontmatter.title)+" 관련",1)])]),a(o,r(s({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,d,a(o,r(s({title:"How to force your program to crash with assert() | Language - free Swift example code",desc:"How to force your program to crash with assert()",link:"https://hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
This might seem like a strange topic – after all, why would anyone want their program to crash? Well, the answer is two-fold.

First, if something has gone wrong that leaves your program in an unsafe state, continuing might mean corrupting user data.

Second, if you're debugging your app (i.e., it's still in development), having your app refuse to continue if a serious problem is found is a huge advantage and a very common way to spot problems.

Swift lets you force an app crash using the \`assert()\` function. This takes two parameters: a condition to check, and a message to print if the assertion fails. Helpfully, any calls to \`assert()\` are ignored when your app is compiled in release mode (i.e., for the App Store), which means these checks have no impact on your code's final performance.

Here are two examples of \`assert()\` being used:

\`\`\`swift
assert(1 == 1, "Maths failure!")
assert(1 == 2, "Maths failure!")
\`\`\`

The first one asserts that 1 is equal to 1, which is clearly true, so nothing will happen. The second one asserts that 1 is equal to 2, which is clearly false, so that assertion will fail: your app will halt, and the message "Maths failure!" will be printed out to help you identify the problem.

Because assertions are ignored in release builds, you don't need to worry about running expensive checks in your assertions. For example:

\`\`\`swift
assert(myReallySlowMethod() == true, "The slow method returned false, which is a bad thing!")
\`\`\`

In release builds, that code will never be run, so you won't see any performance impact.

`),y])}const v=i(m,[["render",k],["__file","how-to-force-your-program-to-crash-with-assert.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert.html","title":"How to force your program to crash with assert()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to force your program to crash with assert()","description":"Article(s) > How to force your program to crash with assert()","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to force your program to crash with assert()"},{"property":"og:description","content":"How to force your program to crash with assert()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to force your program to crash with assert()"}],["meta",{"property":"og:description","content":"Article(s) > How to force your program to crash with assert()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-03-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to force your program to crash with assert()\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-03-11T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert.md","localizedDate":"2021년 3월 11일","excerpt":"\\n"}');export{v as comp,H as data};
