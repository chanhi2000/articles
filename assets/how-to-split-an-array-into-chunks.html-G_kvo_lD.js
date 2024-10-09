import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as o,n as a,g as i,a as e,r as p,o as h}from"./app-BgNevrm5.js";const u={},m={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},d=t("nav",{class:"table-of-contents"},[t("ul")],-1),y=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 8.0")],-1),w=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:) 
/example-code/language/how-to-split-an-integer-into-an-array-of-its-digits">How to split an integer into an array of its digits 
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a>
`)],-1);function k(r,_){const n=p("VPCard");return h(),c("div",null,[t("h1",m,[t("a",g,[t("span",null,l(r.$frontmatter.title)+" 관련",1)])]),o(n,a(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,y,o(n,a(i({title:"How to split an array into chunks | Language - free Swift example code",desc:"How to split an array into chunks",link:"https://hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(` 
If you have an array of elements and you want to split them into chunks of a size you specify, here’s a useful extension you can add to your code:

\`\`\`swift
extension Array {
    func chunked(into size: Int) -> [[Element]] {
        return stride(from: 0, to: count, by: size).map {
            Array(self[$0 ..< Swift.min($0 + size, count)])
        }
    }
}
\`\`\`

That converts an array into an array of arrays, using whatever size you specify. For example, if you have the numbers 1 to 100 in an array and you want to split it so that there are many arrays containing five numbers each, you’d write this:

\`\`\`swift
let numbers = Array(1...100)
let result = numbers.chunked(into: 5)
\`\`\`

`),w])}const v=s(u,[["render",k],["__file","how-to-split-an-array-into-chunks.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks.html","title":"How to split an array into chunks","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to split an array into chunks","description":"Article(s) > How to split an array into chunks","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to split an array into chunks"},{"property":"og:description","content":"How to split an array into chunks"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to split an array into chunks"}],["meta",{"property":"og:description","content":"Article(s) > How to split an array into chunks"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to split an array into chunks\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{v as comp,H as data};
