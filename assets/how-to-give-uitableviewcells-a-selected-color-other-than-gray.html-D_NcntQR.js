import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as e,t as s,e as a,n as i,g as l,a as t,r as h,o as g}from"./app-BgNevrm5.js";const d={},w={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},p=e("nav",{class:"table-of-contents"},[e("ul")],-1),u=e("hr",null,null,-1),b=e("blockquote",null,[e("p",null,"Available from iOS 7.0")],-1),f=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-give-a-uistackview-a-background-color">How to give a UIStackView a background color 
/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content 
/example-code/uikit/how-to-swipe-to-delete-uitableviewcells">How to swipe to delete UITableViewCells 
/quick-start/swiftui/how-to-give-a-view-a-custom-frame">How to give a view a custom frame 
/example-code/uikit/how-to-give-a-uinavigationbar-a-background-image-setbackgroundimage">How to give a UINavigationBar a background image: setBackgroundImage()</a>
`)],-1);function v(r,y){const o=h("VPCard");return g(),n("div",null,[e("h1",w,[e("a",m,[e("span",null,s(r.$frontmatter.title)+" 관련",1)])]),a(o,i(l({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),p,u,a(o,i(l({title:"How to give UITableViewCells a selected color other than gray | UIKit - free Swift example code",desc:"How to give UITableViewCells a selected color other than gray",link:"https://hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,t(" TODO: 작성 "),t(`
Ever since iOS 7.0, table view cells have been gray when tapped, even when you specifically told Interface Builder you wanted them to be blue. Don't worry, though: it's an easy thing to change, as long as you don't mind writing three lines of code. Specifically, you need to add something like this to your \`cellForRowAt\` method:

\`\`\`swift
let backgroundView = UIView()
backgroundView.backgroundColor = UIColor.red
cell.selectedBackgroundView = backgroundView
\`\`\`

You can customize the view as much as you want to, but remember to keep the overall amount of work low to avoid hurting scroll performance.

`),f])}const V=c(d,[["render",v],["__file","how-to-give-uitableviewcells-a-selected-color-other-than-gray.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray.html","title":"How to give UITableViewCells a selected color other than gray","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to give UITableViewCells a selected color other than gray","description":"Article(s) > How to give UITableViewCells a selected color other than gray","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to give UITableViewCells a selected color other than gray"},{"property":"og:description","content":"How to give UITableViewCells a selected color other than gray"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to give UITableViewCells a selected color other than gray"}],["meta",{"property":"og:description","content":"Article(s) > How to give UITableViewCells a selected color other than gray"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to give UITableViewCells a selected color other than gray\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{V as comp,I as data};
