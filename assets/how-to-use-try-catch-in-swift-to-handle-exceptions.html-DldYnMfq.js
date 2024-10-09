import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as n,n as a,g as i,a as e,r as h,o as p}from"./app-BgNevrm5.js";const d={},u={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),g=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/system/how-to-handle-the-https-requirements-in-ios-with-app-transport-security">How to handle the HTTPS requirements in iOS with App Transport Security 
/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup 
/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group 
/quick-start/swiftui/how-to-handle-pinch-to-zoom-for-views">How to handle pinch to zoom for views 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a>
`)],-1);function x(r,k){const o=h("VPCard");return p(),c("div",null,[t("h1",u,[t("a",f,[t("span",null,l(r.$frontmatter.title)+" 관련",1)])]),n(o,a(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,n(o,a(i({title:"How to use try/catch in Swift to handle exceptions | Language - free Swift example code",desc:"How to use try/catch in Swift to handle exceptions",link:"https://hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,e(" TODO: 작성 "),e(` 
The try/catch syntax was added in Swift 2.0 to make exception handling clearer and safer. It's made up of three parts: \`do\` starts a block of code that might fail, \`catch\` is where execution gets transferred if any errors occur, and any function calls that might fail need to be called using \`try\`.

Here's a working example that loads an input.txt file from the app bundle into a string:

\`\`\`swift
if let filename = Bundle.main.path(forResource: "input", ofType: "txt") {
    do {
        let str = try String(contentsOfFile: filename)
        print(str)
    } catch {
        print("The file could not be loaded")
    }
}
\`\`\`

There are two other ways of using \`try\`, but neither are really recommended. The first is like this:

\`\`\`swift
let filename = "somefile.txt"
let str = try! String(contentsOfFile: filename)
\`\`\`

Note the exclamation mark: \`try!\`. This means "I realize this call might throw an exception, but trust me: it never, ever will." This is useful only if you're 100% sure the call is safe. In our example we're loading a file from the app bundle, and if that file isn't there it means our app is corrupted, so it's OK to use here. You don't need do/catch when you use \`try!\`.

The second option is \`try?\` which means "if this call throws an exception, just return nil instead." This is closer to the Objective-C way of handling errors, which was a bit scruffy. If this is your preferred way of handling errors, then go for it! You don't need do/catch when use \`try?\`, but you should check and unwrap the result carefully.

`),y])}const _=s(d,[["render",x],["__file","how-to-use-try-catch-in-swift-to-handle-exceptions.html.vue"]]),T=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions.html","title":"How to use try/catch in Swift to handle exceptions","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to use try/catch in Swift to handle exceptions","description":"Article(s) > How to use try/catch in Swift to handle exceptions","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to use try/catch in Swift to handle exceptions"},{"property":"og:description","content":"How to use try/catch in Swift to handle exceptions"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to use try/catch in Swift to handle exceptions"}],["meta",{"property":"og:description","content":"Article(s) > How to use try/catch in Swift to handle exceptions"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to use try/catch in Swift to handle exceptions\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.86,"words":557},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,T as data};
