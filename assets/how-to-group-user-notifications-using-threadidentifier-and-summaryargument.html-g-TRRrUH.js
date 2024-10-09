import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as m,e as o,n,g as r,a as e,r as u,o as l}from"./app-BgNevrm5.js";const d={},h={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},p=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 12.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
`)],-1);function k(a,b){const i=u("VPCard");return l(),c("div",null,[t("h1",h,[t("a",g,[t("span",null,m(a.$frontmatter.title)+" 관련",1)])]),o(i,n(r({title:"System - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/system/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),p,f,o(i,n(r({title:"How to group user notifications using threadIdentifier and summaryArgument | System - free Swift example code",desc:"How to group user notifications using threadIdentifier and summaryArgument",link:"https://hackingwithswift.com/example-code/how-to-group-user-notifications-using-threadidentifier-and-summaryargument",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e(` 
If your app shows notifications that can be split into sensible groups – such as messages from a person, updates for a news story, scores from a sports match, and so on on – you can have iOS group them together using the \`threadIdentifier\` and \`summaryArgument\` properties of \`UNMutableNotificationContent\`. iOS will then show those messages together, rather than in a long chain mixed up with other messages.

For example, you might write code like this:

\`\`\`swift
let content = UNMutableNotificationContent()
content.title = reminder.title
content.threadIdentifier = "F39-C521-A7A"
\`\`\`

The “F39-C521-A7A” part is a free text string – it won’t be shown to users, but it’s what allows iOS to group things together so it should be unique enough that you don’t get message crossover. If you were building a messaging app you might use the user’s unique identifier for your notification rather than their name, to avoid two messages from different people called Andrew being grouped together.

If you want to customize this further, you can also set the \`summaryArgument\` property of your notification content. This is a string that *is* shown to users, so you might write something like this:

\`\`\`swift
content.summaryArgument = messageSender.name
\`\`\`

That will make iOS write something “5 more alerts from Andrew” in small text underneath the alert, which helps make it clear to users which reminder group that alert belongs to.

`),y])}const x=s(d,[["render",k],["__file","how-to-group-user-notifications-using-threadidentifier-and-summaryargument.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.html","title":"How to group user notifications using threadIdentifier and summaryArgument","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to group user notifications using threadIdentifier and summaryArgument","description":"Article(s) > How to group user notifications using threadIdentifier and summaryArgument","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-12.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to group user notifications using threadIdentifier and summaryArgument"},{"property":"og:description","content":"How to group user notifications using threadIdentifier and summaryArgument"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to group user notifications using threadIdentifier and summaryArgument"}],["meta",{"property":"og:description","content":"Article(s) > How to group user notifications using threadIdentifier and summaryArgument"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-12.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-11-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to group user notifications using threadIdentifier and summaryArgument\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-11-01T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.65,"words":494},"filePathRelative":"hackingwithswift.com/example-code/system/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.md","localizedDate":"2019년 11월 1일","excerpt":"\\n"}');export{x as comp,S as data};
