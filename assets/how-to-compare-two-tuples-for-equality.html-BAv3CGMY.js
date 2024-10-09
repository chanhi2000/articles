import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as s,e as a,n as i,g as n,a as e,r as p,o as m}from"./app-BgNevrm5.js";const h={},u={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),d=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto">How to compare two CGRects with equalTo() 
/example-code/language/how-to-compare-dates">How to compare dates 
/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI 
/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays 
/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a>
`)],-1);function b(r,_){const o=p("VPCard");return m(),c("div",null,[t("h1",u,[t("a",w,[t("span",null,s(r.$frontmatter.title)+" 관련",1)])]),a(o,i(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,a(o,i(n({title:"How to compare two tuples for equality | Language - free Swift example code",desc:"How to compare two tuples for equality",link:"https://hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,e(" TODO: 작성 "),e(` 
Swift 2.2 introduced the ability to compare two tuples up to arity six, which means the tuples can contain no more than six elements. To compare tuples, just use the \`==\` operator, like this:

\`\`\`swift
let singer = ("Taylor", "Swift")
let alien = ("Justin", "Bieber")

if singer == alien {
    print("Matching tuples!")
} else {
    print("Non-matching tuples!")
}
\`\`\`

**Warning:** if you use labels, these are not evaluated when comparing two tuples. So, the code below will print "Matching tuples!" even though the labels are different:

\`\`\`swift
let taylor = (first: "Taylor", last: "Swift")
let bird = (name: "Taylor", type: "Swift")

if taylor == bird {
    print("Matching tuples!")
} else {
    print("Non-matching tuples!")
}
\`\`\`

`),y])}const x=l(h,[["render",b],["__file","how-to-compare-two-tuples-for-equality.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality.html","title":"How to compare two tuples for equality","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to compare two tuples for equality","description":"Article(s) > How to compare two tuples for equality","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to compare two tuples for equality"},{"property":"og:description","content":"How to compare two tuples for equality"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to compare two tuples for equality"}],["meta",{"property":"og:description","content":"Article(s) > How to compare two tuples for equality"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to compare two tuples for equality\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.17,"words":350},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,S as data};
