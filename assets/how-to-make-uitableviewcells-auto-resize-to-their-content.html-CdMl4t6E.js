import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as c,e as i,n as a,g as n,a as t,r as h,o as m}from"./app-BgNevrm5.js";const u={},w={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},d=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),b=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-use-dynamic-type-to-resize-your-apps-text">How to use Dynamic Type to resize your app's text 
/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics 
/example-code/uikit/how-to-swipe-to-delete-uitableviewcells">How to swipe to delete UITableViewCells 
/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray">How to give UITableViewCells a selected color other than gray 
/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed">How to make buttons that repeat their action when pressed</a>
`)],-1);function k(l,y){const o=h("VPCard");return m(),r("div",null,[e("h1",w,[e("a",p,[e("span",null,c(l.$frontmatter.title)+" 관련",1)])]),i(o,a(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,g,i(o,a(n({title:"How to make UITableViewCells auto resize to their content | UIKit - free Swift example code",desc:"How to make UITableViewCells auto resize to their content",link:"https://hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(`
Since iOS 11, table view cells automatically resize to fit their content as long as your cells use Auto Layout to configure themselves. For example, if you use the built-in Basic style for your cell prototype, all you need to do is change the Lines property to 0 for its label and the cell will grow as needed.

**Tip:** If you find your cells *aren’t* autosizing, go to the size inspector with your table view selected then check “Automatic” next to both Row Height and Estimate.

The situation is slightly more complicated when you want some cells to be autosized and others not. To make this work you should add two methods to your table view controller, \`heightForRowAt\` and \`estimatedHeightForRowAt\`, then make them both return the special value \`UITableView.automaticDimension\` for the cells you want to be sized automatically.

In case you're still not sure, here's some example code. This demonstrates a fairly common scenario where you want some important cells at the start to show all their content, but cells in subsequent sections to get clipped:

\`\`\`swift
func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
    if indexPath.section == 0 {
        return UITableView.automaticDimension
    } else {
        return 40
    }
}

override func tableView(_ tableView: UITableView, estimatedHeightForRowAt indexPath: IndexPath) -> CGFloat {
    if indexPath.section == 0 {
        return UITableView.automaticDimension
    } else {
        return 40
    }
}
\`\`\`

`),b])}const _=s(u,[["render",k],["__file","how-to-make-uitableviewcells-auto-resize-to-their-content.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content.html","title":"How to make UITableViewCells auto resize to their content","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to make UITableViewCells auto resize to their content","description":"Article(s) > How to make UITableViewCells auto resize to their content","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to make UITableViewCells auto resize to their content"},{"property":"og:description","content":"How to make UITableViewCells auto resize to their content"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to make UITableViewCells auto resize to their content"}],["meta",{"property":"og:description","content":"Article(s) > How to make UITableViewCells auto resize to their content"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to make UITableViewCells auto resize to their content\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,v as data};
