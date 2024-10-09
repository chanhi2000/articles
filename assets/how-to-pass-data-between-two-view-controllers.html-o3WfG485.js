import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as c,e as n,n as a,g as r,a as t,r as w,o as p}from"./app-BgNevrm5.js";const d={},h={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 2.0")],-1),v=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-disable-interactive-swipe-to-dismiss-for-view-controllers">How to disable interactive swipe to dismiss for view controllers 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a>
`)],-1);function y(i,b){const o=w("VPCard");return p(),l("div",null,[e("h1",h,[e("a",m,[e("span",null,c(i.$frontmatter.title)+" 관련",1)])]),n(o,a(r({title:"System - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/system/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,g,n(o,a(r({title:"How to pass data between two view controllers | System - free Swift example code",desc:"How to pass data between two view controllers",logo:"https://hackingwithswift.com/favicon.svg",link:"https://hackingwithswift.com/example-code/how-to-pass-data-between-two-view-controllers",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
If you have a value in one view controller and want to pass it to another, there are two approaches: for passing data forward you should communicate using properties, and for passing data backwards you can either use a delegate or a block.

Passing data forward is used when you want to show some information in a detail view controller. For example, view controller A might contain a list of names that the user can select, and view controller B might show some detailed information on a single name that the user selected. In this case, you would create a property on B like this:

\`\`\`swift
class ViewControllerB: UIViewController {
    var selectedName: String = "Anonymous"
}
\`\`\`

How you set that property depends on how are you showing the detail view controller. For example, if you're using a \`UINavigationController\` and want to push the new view controller onto the stack, you would write this:

\`\`\`swift
let viewControllerB = ViewControllerB()
viewControllerB.selectedName = "Taylor Swift"
navigationController?.pushViewController(viewControllerB, animated: true)
\`\`\`

If you're using segues, you'll want to use code like this instead:

\`\`\`swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    if segue.identifier == "showDetail" {
        if let indexPath = self.tableView.indexPathForSelectedRow {
            let controller = segue.destination as! ViewControllerB
            controller.selectedName = objects[indexPath.row]
        }
    }
}
\`\`\`

To pass data back, the most common approach is to create a delegate property in your detail view controller, like this:

\`\`\`swift
class ViewControllerB: UIViewController {
    var selectedName: String = "Anonymous"
    weak var delegate: ViewControllerA!
}
\`\`\`

When creating your detail view controller, make sure you set up its \`delegate\` property, like this:

\`\`\`swift
let viewControllerB = ViewControllerB()
viewControllerB.selectedName = "Taylor Swift"
viewControllerB.delegate = self
navigationController?.pushViewController(viewControllerB, animated: true)
\`\`\`

With this set up complete, you can now create a method in your master view controller that should be called by the detail view controller. For example, you might have something like this:

\`\`\`swift
func updatedSelectedName(newName: String) {
    // do something with newName
}
\`\`\`

`),v])}const S=s(d,[["render",y],["__file","how-to-pass-data-between-two-view-controllers.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/system/how-to-pass-data-between-two-view-controllers.html","title":"How to pass data between two view controllers","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to pass data between two view controllers","description":"Article(s) > How to pass data between two view controllers","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to pass data between two view controllers"},{"property":"og:description","content":"How to pass data between two view controllers"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/how-to-pass-data-between-two-view-controllers.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-pass-data-between-two-view-controllers.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to pass data between two view controllers"}],["meta",{"property":"og:description","content":"Article(s) > How to pass data between two view controllers"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2018-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to pass data between two view controllers\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2018-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.88,"words":564},"filePathRelative":"hackingwithswift.com/example-code/system/how-to-pass-data-between-two-view-controllers.md","localizedDate":"2018년 3월 28일","excerpt":"\\n"}');export{S as comp,x as data};
