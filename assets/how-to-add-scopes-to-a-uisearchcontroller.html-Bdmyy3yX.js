import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as t,t as l,e as a,n as r,g as n,a as e,r as h,o as d}from"./app-BgNevrm5.js";const p={},u={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},w=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 8.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words">How to use UISearchController to let users enter search words 
/example-code/uikit/how-to-stop-your-uisearchcontroller-bar-hiding-when-you-scroll">How to stop your UISearchController bar hiding when you scroll 
/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a>
`)],-1);function k(c,b){const o=h("VPCard");return d(),s("div",null,[t("h1",u,[t("a",m,[t("span",null,l(c.$frontmatter.title)+" 관련",1)])]),a(o,r(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,a(o,r(n({title:"How to add scopes to a UISearchController | UIKit - free Swift example code",desc:"How to add scopes to a UISearchController",link:"https://hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e('\nBy default a `UISearchController` provides just a text input field, but with a few small changes you can make it add scopes buttons underneath to let the user control how their search happens.\n\nFirst, make your view controller conform to `UISearchBarDelegate` as well as `UISearchResultsUpdating`.\n\nYou need to add two new lines where you create your search controller: one to add the scope button titles you want to use, and one to tell the search bar to report changes back to the view controller:\n\n```swift\nsearch.searchBar.scopeButtonTitles = ["Friends", "Everyone"]\nsearch.searchBar.delegate = self\n```\n\nFinally, implement the `selectedScopeButtonIndexDidChange` method so you get notified when the user tapped a scope button:\n\n```swift\nfunc searchBar(_ searchBar: UISearchBar, selectedScopeButtonIndexDidChange selectedScope: Int) {\n    print("New scope index is now \\(selectedScope)")\n}\n```\n\nYou can read the selected index at any time by using the `searchController.searchBar.selectedScopeButtonIndex` property.\n\n'),y])}const x=i(p,[["render",k],["__file","how-to-add-scopes-to-a-uisearchcontroller.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller.html","title":"How to add scopes to a UISearchController","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add scopes to a UISearchController","description":"Article(s) > How to add scopes to a UISearchController","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add scopes to a UISearchController"},{"property":"og:description","content":"How to add scopes to a UISearchController"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add scopes to a UISearchController"}],["meta",{"property":"og:description","content":"Article(s) > How to add scopes to a UISearchController"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add scopes to a UISearchController\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,I as data};
