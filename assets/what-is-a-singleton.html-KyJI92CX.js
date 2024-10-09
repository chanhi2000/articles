import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as c,e as o,n,g as i,a as e,r as h,o as g}from"./app-BgNevrm5.js";const p={},m={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),u=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 13.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array 
/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder">How to specify your own date format with Codable and JSONEncoder 
/example-code/language/what-is-a-protocol">What is a protocol? 
/example-code/language/what-is-the-objcmembers-attribute">What is the @objcMembers attribute? 
/example-code/language/what-is-class-inheritance">What is class inheritance?</a>
`)],-1);function b(s,_){const a=h("VPCard");return g(),l("div",null,[t("h1",m,[t("a",d,[t("span",null,c(s.$frontmatter.title)+" 관련",1)])]),o(a,n(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,u,o(a,n(i({title:"What is a singleton? | Language - free Swift example code",desc:"What is a singleton?",link:"https://hackingwithswift.com/example-code/language/what-is-a-singleton",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e(" \nSingletons are objects that should only ever be created once, then shared everywhere they need to be used. They are common on Apple’s platforms: `FileManager`, `UserDefaults`, `UIApplication`, and `UIAccelerometer` are all mostly used through their singleton implementations.\n\nThe basic implementation of a Swift singleton looks like this:\n\n```swift\nclass Settings {\n    static let shared = Settings()\n    var username: String?\n\n    private init() { }\n}\n```\n\nAdding a `private` initializer is important, because it stops other parts of our code from trying to create a `Settings` class instance. However, the class creates its own instance of itself as a static variable, which means the only instance of the `Settings` class is the one it created: `Settings.shared`.\n\n"),y])}const x=r(p,[["render",b],["__file","what-is-a-singleton.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-is-a-singleton.html","title":"What is a singleton?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is a singleton?","description":"Article(s) > What is a singleton?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-13.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is a singleton?"},{"property":"og:description","content":"What is a singleton?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-a-singleton.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-a-singleton.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is a singleton?"}],["meta",{"property":"og:description","content":"Article(s) > What is a singleton?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-13.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2022-04-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is a singleton?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2022-04-11T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.09,"words":327},"filePathRelative":"hackingwithswift.com/example-code/language/what-is-a-singleton.md","localizedDate":"2022년 4월 11일","excerpt":"\\n"}');export{x as comp,v as data};
