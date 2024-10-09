import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as s,e as o,n as a,g as n,a as t,r as u,o as d}from"./app-BgNevrm5.js";const f={},h={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),p=e("hr",null,null,-1),b=e("blockquote",null,[e("p",null,"Available from iOS 6.0")],-1),w=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier">Fixing "Unable to dequeue a cell with identifier" 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers" 
/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a>
`)],-1);function y(l,x){const i=u("VPCard");return d(),c("div",null,[e("h1",h,[e("a",m,[e("span",null,s(l.$frontmatter.title)+" 관련",1)])]),o(i,a(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,p,o(i,a(n({title:"Fixing ”Failed to obtain a cell from its DataSource” | UIKit - free Swift example code",desc:"Fixing ”Failed to obtain a cell from its DataSource”",link:"https://hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,t(" TODO: 작성 "),t(`
This is a common error, but it's easily fixed. There are two main reasons why table views fail to return cells, but they give different error messages. If you get an error like this:

\`\`\`swift
Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'UITableView (<UITableView: 0x7f9cd8830c00; frame = (0 0; 414 736); clipsToBounds = YES; autoresize = W+H; gestureRecognizers = <NSArray: 0x7f9cd8430900>; layer = <CALayer: 0x7f9cd8428370>; contentOffset: {0, -64}; contentSize: {414, 0}>) failed to obtain a cell from its dataSource 
\`\`\`

…it means that your \`cellForRowAt\` method is returning nil for some reason, and it's usually because you are failing to dequeue a reusable cell.

If you want to confirm this, just set a breakpoint after your current dequeue call. For example, if you have code like this:

\`\`\`swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "Cell")!
    let object = objects[indexPath.row]
    cell.textLabel!.text = object.description
    return cell
}
\`\`\`

…then you should set the breakpoint on the \`let object =\` line. If the problem is that \`tableView.dequeueReusableCell(withIdentifier:)\` is returning nil, you'll find \`cell\` is set to nil.

If you're using modern Xcode templates where you get a prototype cell made for you, you should probably be using this instead:

\`\`\`swift
let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
\`\`\`

If you aren't using an Xcode template, use that line of code anyway then register your own re-use identifier like this:

\`\`\`swift
tableView.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")
\`\`\`

All being well that should resolve the problem. If not, check that the cell identifier is correct: it's "Cell" by default, but you might have changed it. Such a misspelling ought to cause a crash when \`tableView.dequeueReusableCell(withIdentifier:)\` fails, but it's worth checking anyway.

`),w])}const S=r(f,[["render",y],["__file","fixing-failed-to-obtain-a-cell-from-its-datasource.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource.html","title":"Fixing ”Failed to obtain a cell from its DataSource”","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Fixing ”Failed to obtain a cell from its DataSource”","description":"Article(s) > Fixing ”Failed to obtain a cell from its DataSource”","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-6.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Fixing ”Failed to obtain a cell from its DataSource”"},{"property":"og:description","content":"Fixing ”Failed to obtain a cell from its DataSource”"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Fixing ”Failed to obtain a cell from its DataSource”"}],["meta",{"property":"og:description","content":"Article(s) > Fixing ”Failed to obtain a cell from its DataSource”"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-6.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fixing ”Failed to obtain a cell from its DataSource”\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.74,"words":522},"filePathRelative":"hackingwithswift.com/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{S as comp,_ as data};
