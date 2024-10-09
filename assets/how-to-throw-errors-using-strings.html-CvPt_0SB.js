import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as r,n,g as i,a as o,r as g,o as h}from"./app-BgNevrm5.js";const w={},m={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},u=t("nav",{class:"table-of-contents"},[t("ul")],-1),d=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 8.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),o(`
/quick-start/concurrency/how-to-create-continuations-that-can-throw-errors">How to create continuations that can throw errors 
/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error">How to add warnings and errors to your code using #warning and #error 
/quick-start/swiftui/common-swiftui-errors-and-how-to-fix-them">Common SwiftUI errors and how to fix them 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/strings/how-to-concatenate-strings-to-make-one-joined-string">How to concatenate strings to make one joined string</a>
`)],-1);function k(a,_){const e=g("VPCard");return h(),c("div",null,[t("h1",m,[t("a",p,[t("span",null,l(a.$frontmatter.title)+" 관련",1)])]),r(e,n(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,d,r(e,n(i({title:"How to throw errors using strings | Language - free Swift example code",desc:"How to throw errors using strings",link:"https://hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,o(" TODO: 작성 "),o(` 
Throwing functions in Swift are the main way we have of signaling that an operation failed, but sometimes it can be annoying to define a whole new error enum just to report a simple failure.

With a small extension to \`String\` you can make the whole process easier:

\`\`\`swift
extension String: LocalizedError {
    public var errorDescription: String? { return self }
}
\`\`\`

With that change you can now throw strings as errors, and they work just like regular errors. For example, you can create a throwing function like this one:

\`\`\`swift
func doDangerousThing() throws {
    throw "I'm sorry, Dave, I can't do that."
}
\`\`\`

Then attempt to run it and print any errors that are thrown, like this:

\`\`\`swift
do {
    try doDangerousThing()
} catch {
    print(error.localizedDescription)
}
\`\`\`

This only really works for errors that have one case, because you can’t match specific string errors.

`),y])}const S=s(w,[["render",k],["__file","how-to-throw-errors-using-strings.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings.html","title":"How to throw errors using strings","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to throw errors using strings","description":"Article(s) > How to throw errors using strings","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to throw errors using strings"},{"property":"og:description","content":"How to throw errors using strings"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to throw errors using strings"}],["meta",{"property":"og:description","content":"Article(s) > How to throw errors using strings"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to throw errors using strings\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{S as comp,v as data};
