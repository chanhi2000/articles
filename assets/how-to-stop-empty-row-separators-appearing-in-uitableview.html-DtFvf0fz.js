import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as e,t as l,e as a,n as i,g as r,a as t,r as c,o as w}from"./app-BgNevrm5.js";const m={},h={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),u=e("hr",null,null,-1),b=e("blockquote",null,[e("p",null,"Available from iOS 2.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-make-uitableviewcell-separators-go-edge-to-edge">How to make UITableViewCell separators go edge to edge 
/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet 
/example-code/uikit/how-to-reload-a-uitableview-while-preserving-selections">How to reload a UITableView while preserving selections 
/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview">How to add peek and pop to a UITableView 
/example-code/uikit/how-to-customize-swipe-edit-buttons-in-a-uitableview">How to customize swipe edit buttons in a UITableView</a>
`)],-1);function f(n,k){const o=c("VPCard");return w(),p("div",null,[e("h1",h,[e("a",d,[e("span",null,l(n.$frontmatter.title)+" 관련",1)])]),a(o,i(r({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,u,a(o,i(r({title:"How to stop empty row separators appearing in UITableView | UIKit - free Swift example code",desc:"How to stop empty row separators appearing in UITableView",link:"https://hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,t(" TODO: 작성 "),t(`
Table views show separators between empty rows by default, which looks quite strange when you have only a handful of visible rows. Fortunately, one simple line of code is all it takes to force iOS not to draw these separators, and it's this:

\`\`\`swift
tableView.tableFooterView = UIView()
\`\`\`

What's actually happening is that you're creating an empty \`UIView\` and making it act as the footer of the table – this is the bottom most thing visible in the table. When iOS reaches the bottom of the cells you provide, it draws this view at the end rather than drawing empty rows and their separators, so it totally clears up the problem.

`),y])}const V=s(m,[["render",f],["__file","how-to-stop-empty-row-separators-appearing-in-uitableview.html.vue"]]),T=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview.html","title":"How to stop empty row separators appearing in UITableView","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to stop empty row separators appearing in UITableView","description":"Article(s) > How to stop empty row separators appearing in UITableView","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to stop empty row separators appearing in UITableView"},{"property":"og:description","content":"How to stop empty row separators appearing in UITableView"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to stop empty row separators appearing in UITableView"}],["meta",{"property":"og:description","content":"Article(s) > How to stop empty row separators appearing in UITableView"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to stop empty row separators appearing in UITableView\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{V as comp,T as data};
