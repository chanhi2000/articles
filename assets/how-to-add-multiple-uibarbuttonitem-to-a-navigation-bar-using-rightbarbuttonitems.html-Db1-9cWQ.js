import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as u,e as a,n as i,g as n,a as e,r as m,o as d}from"./app-BgNevrm5.js";const c={},h={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},p=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 5.0")],-1),B=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem">How to add a flexible space to a UIBarButtonItem 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/example-code/uikit/how-to-add-a-custom-view-to-a-uibarbuttonitem">How to add a custom view to a UIBarButtonItem 
/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars 
/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards">How to add a button to a navigation bar using storyboards</a>
`)],-1);function f(r,I){const o=m("VPCard");return d(),l("div",null,[t("h1",h,[t("a",g,[t("span",null,u(r.$frontmatter.title)+" 관련",1)])]),a(o,i(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),p,b,a(o,i(n({title:"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems | UIKit - free Swift example code",desc:"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems",link:"https://hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e("\nThe `navigationItem` property of your view controller has two properties responsible for displaying multiple bar button items on either side of `UINavigationBar`: `leftBarButtonItems` for the left-hand side and `rightBarButtonItems` for the right-hand side. These are *not* to be confused with `leftBarButtonItem` and `rightBarButtonItem`, which are older properties designed to store single items.\n\nOne confusion when working with arrays of bar button items is the order in which they are displayed: they fill from the outside in. So, when using `leftBarButtonItems` they appear in the order of your array, and when using `rightBarButtonItems` they appear in *reverse* order.\n\nFor example, here’s some code to display a share button and an add button on the right-hand side of the navigation bar, and the add button will be on the *right* of the share button:\n\n```swift\nlet share = UIBarButtonItem(barButtonSystemItem: .action, target: self, action: #selector(shareTapped))\nlet add = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addTapped))\nnavigationItem.rightBarButtonItems = [add, share]\n```\n\n"),B])}const k=s(c,[["render",f],["__file","how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems.html","title":"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems","description":"Article(s) > How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-5.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"},{"property":"og:description","content":"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"}],["meta",{"property":"og:description","content":"Article(s) > How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-5.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{k as comp,_ as data};
