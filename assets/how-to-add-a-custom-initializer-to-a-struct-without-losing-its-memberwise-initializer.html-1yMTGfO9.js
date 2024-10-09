import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as c,e as a,n as o,g as n,a as e,r as m,o as u}from"./app-BgNevrm5.js";const h={},d={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},p=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 8.0")],-1),b=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it">How to change a view’s anchor point without moving it 
/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct">How to create modifiers for a UIViewRepresentable struct 
/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct? 
/example-code/language/what-is-a-nested-class-or-nested-struct">What is a nested class or nested struct? 
/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable</a>
`)],-1);function z(s,y){const i=m("VPCard");return u(),l("div",null,[t("h1",d,[t("a",w,[t("span",null,c(s.$frontmatter.title)+" 관련",1)])]),a(i,o(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),p,g,a(i,o(n({title:"How to add a custom initializer to a struct without losing its memberwise initializer | Language - free Swift example code",desc:"How to add a custom initializer to a struct without losing its memberwise initializer",link:"https://hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(` 
All structs in Swift come with a default memberwise initializer, which is an initializer that accepts values for all the properties in the struct. However, as soon as you add your *own* initializer to the struct that memberwise initializer goes away, because it’s possible you’re doing special work that the default initializer isn’t aware of.

If you want to keep both the default initializer and your own custom ones, there’s a simple trick: create your initializers inside an extension rather than as part of the main struct definition.

For example:

\`\`\`swift
struct Person {
    var firstName: String
    var lastName: String
}

extension Person {
    init(name: String) {
        let split = name.components(separatedBy: " ")
        firstName = split.first ?? ""
        lastName = split.last ?? ""
    }
}
\`\`\`

Because my custom initializer is inside an extension, you can create instances of \`Person\` in two ways:

\`\`\`swift
let taylor1 = Person(firstName: "Taylor", lastName: "Swift")
let taylor2 = Person(name: "Taylor Swift")
\`\`\`

`),b])}const x=r(h,[["render",z],["__file","how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.html","title":"How to add a custom initializer to a struct without losing its memberwise initializer","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add a custom initializer to a struct without losing its memberwise initializer","description":"Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer"},{"property":"og:description","content":"How to add a custom initializer to a struct without losing its memberwise initializer"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add a custom initializer to a struct without losing its memberwise initializer"}],["meta",{"property":"og:description","content":"Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add a custom initializer to a struct without losing its memberwise initializer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.58,"words":473},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,v as data};
