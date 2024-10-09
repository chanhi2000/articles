import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as i,n as a,g as n,a as e,r as p,o as m}from"./app-BgNevrm5.js";const u={},h={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},d=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 13.0")],-1),f=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
`)],-1);function k(s,b){const o=p("VPCard");return m(),c("div",null,[t("h1",h,[t("a",y,[t("span",null,l(s.$frontmatter.title)+" 관련",1)])]),i(o,a(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,g,i(o,a(n({title:"How to use system icons in your app | UIKit - free Swift example code",desc:"How to use system icons in your app",link:"https://hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e(`
iOS 13 lets us use icons from a range of over 1500 designed by Apple, all of which come in a variety of weights and sizes. These icons form part of new \`UIImage\` API, and they are vector-based so you can us them at a range of sizes without loss of quality.

**Note:** This is a stringly typed API, so you should download the new SF Symbols app that lists all variants – <a href="https://developer.apple.com/design/resources/">download it here</a>.

To load a system icon you use the new \`UIImage(systemName:)\` initializer. In its most basic form it looks like this:

\`\`\`swift
let paperPlane = UIImage(systemName: "paperplane.fill")
let action = UIImage(systemName: "square.and.arrow.down")
\`\`\`

You can request specific weights of your icon by creating an instance of \`UIImage.SymbolConfiguration\` like this:

\`\`\`swift
let boldConfig = UIImage.SymbolConfiguration(weight: .bold)
let boldBell = UIImage(systemName: "bell", withConfiguration: boldConfig)
\`\`\`

More usefully, you can also tell UIKit what kind of text is being rendered nearby so it can ensure the icon is sized appropriately, like this:

\`\`\`swift
let largeConfig = UIImage.SymbolConfiguration(textStyle: .largeTitle)
let largeBolt = UIImage(systemName: "bolt", withConfiguration: largeConfig)
\`\`\`

This ensures your icons work correctly alongside your other Dynamic Type code.

`),f])}const S=r(u,[["render",k],["__file","how-to-use-system-icons-in-your-app.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app.html","title":"How to use system icons in your app","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to use system icons in your app","description":"Article(s) > How to use system icons in your app","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-13.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to use system icons in your app"},{"property":"og:description","content":"How to use system icons in your app"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to use system icons in your app"}],["meta",{"property":"og:description","content":"Article(s) > How to use system icons in your app"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-13.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-06-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to use system icons in your app\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-06-04T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app.md","localizedDate":"2019년 6월 4일","excerpt":"\\n"}');export{S as comp,x as data};
