import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as s,e as o,n as i,g as n,a as t,r as h,o as m}from"./app-BgNevrm5.js";const p={},u={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},d=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),k=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/what-is-whole-module-optimization">What is whole module optimization? 
/example-code/language/how-to-use-available-to-check-for-api-availability">How to use #available to check for API availability 
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range 
/example-code/system/how-to-check-whether-your-other-apps-are-installed">How to check whether your other apps are installed 
/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range</a>
`)],-1);function b(c,y){const a=h("VPCard");return m(),r("div",null,[e("h1",u,[e("a",g,[e("span",null,s(c.$frontmatter.title)+" 관련",1)])]),o(a,i(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,w,o(a,i(n({title:"How to check whether a module is available using canImport() | Language - free Swift example code",desc:"How to check whether a module is available using canImport()",link:"https://hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
Writing multi-platform code has its own challenges, but if you use the \`canImport()\` compiler test then one big challenge is solved for you: you can write one chunk code to run if a specific module is available, and another chunk otherwise.

For example, this code will check for UIKit, AppKit, and all other possibilities so that you can pick whichever color type is best for the current platform:

\`\`\`swift
#if canImport(UIKit)
// iOS, tvOS, and watchOS – use UIColor
#elseif canImport(AppKit)
// macOS – use NSColor
#else
// all other platforms – use a custom color object
#endif
\`\`\`

Before \`canImport()\` was available we need to use \`#if os(macOS)\` instead, like this:

\`\`\`swift
#if os(iOS) || os(tvOS) || os(watchOS)
// use UIColor
#else
// use NSColor
#endif
\`\`\`

Using \`canImport()\` is an improvement because it lets you focus on what *functionality* you want rather than what operating system. So, if UIKit became available on macOS tomorrow you wouldn’t need to change your code to use it.

`),k])}const S=l(p,[["render",b],["__file","how-to-check-whether-a-module-is-available-using-canimport.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport.html","title":"How to check whether a module is available using canImport()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to check whether a module is available using canImport()","description":"Article(s) > How to check whether a module is available using canImport()","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to check whether a module is available using canImport()"},{"property":"og:description","content":"How to check whether a module is available using canImport()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to check whether a module is available using canImport()"}],["meta",{"property":"og:description","content":"Article(s) > How to check whether a module is available using canImport()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to check whether a module is available using canImport()\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{S as comp,I as data};
