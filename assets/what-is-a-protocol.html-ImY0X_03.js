import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as t,t as c,e as a,n as i,g as n,a as e,r as h,o as p}from"./app-BgNevrm5.js";const d={},m={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 2.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming? 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/what-are-protocol-extensions">What are protocol extensions? 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a>
`)],-1);function b(r,_){const o=h("VPCard");return p(),s("div",null,[t("h1",m,[t("a",u,[t("span",null,c(r.$frontmatter.title)+" 관련",1)])]),a(o,i(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,w,a(o,i(n({title:"What is a protocol? | Language - free Swift example code",desc:"What is a protocol?",link:"https://hackingwithswift.com/example-code/language/what-is-a-protocol",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(` 
A protocol is a collection of methods that describe a specific set of similar actions or behaviors. I realize that probably didn't help much, so I'll try to rephrase in more detail: how many rows should a table view have? How many sections? What should the section titles be? Can the user move rows? If so, what should happen when they do?

All those questions concern a similar thing: data going into a \`UITableView\`. As a result, they all go into a single protocol, called \`UITableViewDataSource\`. Some of the behaviors inside that protocol are optional. For example, \`canEditRowAt\` is optional and defaults to true if you don't provide a value yourself.

When you work in Swift you will frequently have to make your class conform to a protocol. This is done by adding the protocol name to your class definition, then filling in any required methods, like this:

\`\`\`swift
class ViewController: UIViewController, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // request 10 rows
        return 10
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // return a dummy table view cell; your own code should use prototype cells or similar
        return UITableViewCell()
    }
}
\`\`\`

When you do that – when you promise Swift that your class conforms to a protocol – you can be darn sure it checks to make sure you're right. And that means it will refuse to build your code if you haven't added support for all the required methods, which is a helpful security measure.

`),y])}const v=l(d,[["render",b],["__file","what-is-a-protocol.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-is-a-protocol.html","title":"What is a protocol?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is a protocol?","description":"Article(s) > What is a protocol?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is a protocol?"},{"property":"og:description","content":"What is a protocol?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-a-protocol.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-a-protocol.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is a protocol?"}],["meta",{"property":"og:description","content":"Article(s) > What is a protocol?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is a protocol?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.65,"words":495},"filePathRelative":"hackingwithswift.com/example-code/language/what-is-a-protocol.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{v as comp,S as data};
