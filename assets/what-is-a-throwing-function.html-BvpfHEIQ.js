import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as h,e as o,n as a,g as i,a as n,r as l,o as u}from"./app-BgNevrm5.js";const g={},f={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},w=t("nav",{class:"table-of-contents"},[t("ul")],-1),m=t("hr",null,null,-1),d=t("blockquote",null,[t("p",null,"Available from iOS 8.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),n(`
/quick-start/concurrency/how-to-call-async-throwing-functions">How to call async throwing functions 
/example-code/testing/how-to-test-throwing-functions">How to test throwing functions 
/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function? 
/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function? 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a>
`)],-1);function b(r,k){const e=l("VPCard");return u(),c("div",null,[t("h1",f,[t("a",p,[t("span",null,h(r.$frontmatter.title)+" 관련",1)])]),o(e,a(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,m,o(e,a(i({title:"What is a throwing function? | Language - free Swift example code",desc:"What is a throwing function?",link:"https://hackingwithswift.com/example-code/language/what-is-a-throwing-function",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,n(" TODO: 작성 "),n(` 
Throwing functions are those that will flag up errors if problems happen, and Swift requires you to handle those errors in your code.

To make a throwing function, just write \`throws\` before your function’s return value. You should define the error types you can throw, so users of this function know what to expect.

As an example, try adding this custom error enum to a playground:

\`\`\`swift
enum LoginErrors: Error {
    case badUsername
    case badPassword
}
\`\`\`

We can now use that to create a throwing function called \`login()\`. If the username is empty we’ll throw \`badUsername\`, if the password is empty we’ll throw \`badPassword\`, and if both are non-empty we’ll return true:

\`\`\`swift
func login(username: String, password: String) throws -> Bool {
    if username.isEmpty { throw LoginErrors.badUsername }
    if password.isEmpty { throw LoginErrors.badPassword }
    return true
}
\`\`\`

Because that function throws errors, it must be called using either \`try\`, \`try?\`, or \`try!\`.

There’s a subtle difference between throwing functions and functions that return optionals, but it’s usually a better idea to use throwing functions if there might be several different reasons why the function failed.

`),y])}const S=s(g,[["render",b],["__file","what-is-a-throwing-function.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-is-a-throwing-function.html","title":"What is a throwing function?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is a throwing function?","description":"Article(s) > What is a throwing function?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is a throwing function?"},{"property":"og:description","content":"What is a throwing function?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-a-throwing-function.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-a-throwing-function.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is a throwing function?"}],["meta",{"property":"og:description","content":"Article(s) > What is a throwing function?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is a throwing function?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"hackingwithswift.com/example-code/language/what-is-a-throwing-function.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{S as comp,v as data};
