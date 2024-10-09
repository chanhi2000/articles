import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as i,n as a,g as n,a as o,r as h,o as u}from"./app-BgNevrm5.js";const p={},w={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),m=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 9.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),o(`
/example-code/uikit/how-to-make-a-uiview-fill-the-screen-using-auto-layout-anchors">How to make a UIView fill the screen using Auto Layout anchors 
/quick-start/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view">How to position and style subviews that come from a different view 
/quick-start/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid">How to position views in a grid using LazyVGrid and LazyHGrid 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes">How to detect when the size or position of a view changes</a>
`)],-1);function v(s,k){const e=h("VPCard");return u(),c("div",null,[t("h1",w,[t("a",d,[t("span",null,l(s.$frontmatter.title)+" 관련",1)])]),i(e,a(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,m,i(e,a(n({title:"How to position a view using Auto Layout anchors | UIKit - free Swift example code",desc:"How to position a view using Auto Layout anchors",link:"https://hackingwithswift.com/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,o(" TODO: 작성 "),o(`
Auto Layout anchors make it easy to position your views relative to others. There are lots of anchors to choose from: leading and trailing edges, top and bottom edges, center X and center Y, and more. 

To try it out, first create a view something like this:

\`\`\`swift
let child = UIView()
child.translatesAutoresizingMaskIntoConstraints = false
child.backgroundColor = .red
view.addSubview(child)
\`\`\`

Now we can position that view by activating various anchors. For example, we could pin it to the top and bottom edges of the screen, make it precisely 128 points wide, then center it horizontally:

\`\`\`swift
child.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
child.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
child.widthAnchor.constraint(equalToConstant: 128).isActive = true
child.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor).isActive = true
\`\`\`

To explore anchors further, try typing \`child.anchor\` and exploring the code completion options.

`),y])}const _=r(p,[["render",v],["__file","how-to-position-a-view-using-auto-layout-anchors.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors.html","title":"How to position a view using Auto Layout anchors","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to position a view using Auto Layout anchors","description":"Article(s) > How to position a view using Auto Layout anchors","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-9.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to position a view using Auto Layout anchors"},{"property":"og:description","content":"How to position a view using Auto Layout anchors"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to position a view using Auto Layout anchors"}],["meta",{"property":"og:description","content":"Article(s) > How to position a view using Auto Layout anchors"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-9.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to position a view using Auto Layout anchors\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,x as data};
