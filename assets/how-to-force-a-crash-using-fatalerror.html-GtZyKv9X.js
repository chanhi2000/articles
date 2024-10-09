import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as c,e as a,n as r,g as n,a as t,r as h,o as u}from"./app-BgNevrm5.js";const f={},g={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},d=e("nav",{class:"table-of-contents"},[e("ul")],-1),m=e("hr",null,null,-1),w=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert() 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/example-code/uikit/how-to-force-a-uiview-to-redraw-setneedsdisplay">How to force a UIView to redraw: setNeedsDisplay() 
/quick-start/swiftui/how-to-force-views-to-one-side-inside-a-stack-using-spacer">How to force views to one side inside a stack using Spacer 
/example-code/language/when-is-it-safe-to-force-unwrap-optionals">When is it safe to force unwrap optionals?</a>
`)],-1);function y(i,b){const o=h("VPCard");return u(),l("div",null,[e("h1",g,[e("a",p,[e("span",null,c(i.$frontmatter.title)+" 관련",1)])]),a(o,r(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,m,a(o,r(n({title:"How to force a crash using fatalError() | Language - free Swift example code",desc:"How to force a crash using fatalError()",link:"https://hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(" TODO: 작성 "),t(' \nSwift has a built-in function called `fatalError()`, which forces your application to crash. This might sound useful, but bear with me – this is an indispensable function for anyone serious about writing good Swift.\n\nThe `fatalError()` function has a special return type called `Never`, which Swift understands as meaning execution will never continue after this function has been called. As a result, you can use `fatalError()` in methods that return a value but you have nothing sensible to return.\n\nFor example, the `cellForRowAt` method must return a `UITableViewCell`, but what happens if you dequeue a reusable cell and try to conditionally typecast it to your custom cell type, only for that to fail? \n\nNormally you might try to return an empty, unconfigured cell, but that doesn’t really make much sense – if you got a bad cell back you have a bug, and trying to limp along will just cause issues.\n\nFortunately, `fatalError()` can fix that: if your typecast fails you can call `fatalError()` with a message explaining what happened, and if the typecast fails your app will terminate.\n\n```swift\noverride func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n    guard let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath) as? MyCustomCell else {\n        fatalError("Failed to load a MyCustomCell from the table.")\n    }\n\n    return cell\n}\n```\n\nObviously you never want that code to get hit in production, but using `fatalError()` helps stop that from happening – you will now get a very obvious problem in development if things aren’t going well.\n\n'),w])}const x=s(f,[["render",y],["__file","how-to-force-a-crash-using-fatalerror.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror.html","title":"How to force a crash using fatalError()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to force a crash using fatalError()","description":"Article(s) > How to force a crash using fatalError()","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to force a crash using fatalError()"},{"property":"og:description","content":"How to force a crash using fatalError()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to force a crash using fatalError()"}],["meta",{"property":"og:description","content":"Article(s) > How to force a crash using fatalError()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to force a crash using fatalError()\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-force-a-crash-using-fatalerror.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,v as data};
