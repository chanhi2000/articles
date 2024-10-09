import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as l,e as o,n as s,g as n,a as t,r as d,o as u}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/how-to-add-raw-values-to-enums">How to add raw values to enums 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type 
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a>
`)],-1);function v(i,b){const a=d("VPCard");return u(),r("div",null,[e("h1",m,[e("a",p,[e("span",null,l(i.$frontmatter.title)+" 관련",1)])]),o(a,s(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,w,o(a,s(n({title:"How to add associated values to enums | Language - free Swift example code",desc:"How to add associated values to enums",link:"https://hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
Enums with associated values let you associate extra data with an enum case. This helps make them significantly more useful, because we can create gradations of cases rather than have them be absolute.

For example, we could create a \`Weather\` enum that can store various weather types: sunny, cloudy, windy, and rainy. However, that doesn’t really describe those conditions very well – how cloudy is it? Is it gale force winds or just a breeze? Is the rain definitely going to happen, or is it a fairly remote chance?

With enum associated values we can describe these situations more accurately. For example:

\`\`\`swift
enum Weather {
    case sunny
    case cloudy(coverage: Int)
    case windy(speed: Int)
    case rainy(chance: Int)
}
\`\`\`

That leaves “sunny” as a simple value, but the other three all have associated values – how cloudy it is, what the speed of the wind is, and how likely the rain is.

Using those values we can now create instances of those enums:

\`\`\`swift
let london = Weather.cloudy(coverage: 90)
let gusty = Weather.windy(speed: 10)
let guaranteedRain = Weather.rainy(chance: 100)
\`\`\`

`),y])}const x=c(h,[["render",v],["__file","how-to-add-associated-values-to-enums.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums.html","title":"How to add associated values to enums","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add associated values to enums","description":"Article(s) > How to add associated values to enums","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add associated values to enums"},{"property":"og:description","content":"How to add associated values to enums"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add associated values to enums"}],["meta",{"property":"og:description","content":"Article(s) > How to add associated values to enums"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add associated values to enums\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-add-associated-values-to-enums.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,H as data};
