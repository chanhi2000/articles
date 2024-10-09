import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as p,e as o,n as i,g as n,a as e,r as l,o as h}from"./app-BgNevrm5.js";const d={},m={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),g=t("blockquote",null,[t("p",null,"Available from iOS 5.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes">How to detect when the size or position of a view changes 
/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location">How to dynamically adjust the appearance of a view based on its size and location 
/quick-start/swiftui/how-to-scroll-to-a-specific-row-in-a-list">How to scroll to a specific row in a list 
/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects">How to add Metal shaders to SwiftUI views using layer effects 
/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a>
`)],-1);function k(r,x){const a=l("VPCard");return h(),c("div",null,[t("h1",m,[t("a",u,[t("span",null,p(r.$frontmatter.title)+" 관련",1)])]),o(a,i(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,w,o(a,i(n({title:"What is the UIAppearance proxy? | UIKit - free Swift example code",desc:"What is the UIAppearance proxy?",link:"https://hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,e(" TODO: 작성 "),e(`
If you need to make broad changes to UIKit components, the UIAppearance proxy is your friend: you can treat it like an instance of any given UIKit type, except the changes you make there apply to all new instances of that type. Note: it applies to *new* instances of that, and won’t change any *existing* instances you have created.

For example, if you want all navigation bars to have a red background color regardless of where they appear in your app, you could put this into the \`didFinishLaunching\` method of your app delegate:

\`\`\`swift
UINavigationBar.appearance().barTintColor = .red
\`\`\`

For more precise changes you can use \`appearance(whenContainedInInstancesOf:)\` and specify a container appearance proxy. For example, you might want to make bar button items one color when they appear in navigation bars and another color when they appear in toolbars:

\`\`\`swift
UIBarButtonItem.appearance(whenContainedInInstancesOf: [UINavigationBar.self]).tintColor = .green
UIBarButtonItem.appearance(whenContainedInInstancesOf: [UIToolbar.self]).tintColor = .red
\`\`\`

While that’s easy to do, I hope you at least choose better colors!

`),y])}const _=s(d,[["render",k],["__file","what-is-the-uiappearance-proxy.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy.html","title":"What is the UIAppearance proxy?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is the UIAppearance proxy?","description":"Article(s) > What is the UIAppearance proxy?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-5.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is the UIAppearance proxy?"},{"property":"og:description","content":"What is the UIAppearance proxy?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is the UIAppearance proxy?"}],["meta",{"property":"og:description","content":"Article(s) > What is the UIAppearance proxy?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-5.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is the UIAppearance proxy?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,v as data};
