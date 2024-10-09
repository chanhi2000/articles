import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as o,n as r,g as i,a as e,r as p,o as h}from"./app-BgNevrm5.js";const g={},d={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),u=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 4.0")],-1),x=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect() 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:) 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
`)],-1);function y(n,k){const a=p("VPCard");return h(),c("div",null,[t("h1",d,[t("a",w,[t("span",null,l(n.$frontmatter.title)+" 관련",1)])]),o(a,r(i({title:"Core Graphics - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/core-graphics/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,u,o(a,r(i({title:"How to draw a text string using Core Graphics | Core Graphics - free Swift example code",desc:"How to draw a text string using Core Graphics",link:"https://hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(` 
To draw text in Core Graphics is trivial because every Swift string has a built-in \`draw(with:)\` method that takes an array of attributes and a position and size. There is, like always, some Core Graphics set up work to do, but this next code snippet is a complete example you can re-use easily:

\`\`\`swift
let renderer = UIGraphicsImageRenderer(size: CGSize(width: 512, height: 512))
let img = renderer.image { ctx in
    let paragraphStyle = NSMutableParagraphStyle()
    paragraphStyle.alignment = .center

    let attrs = [NSAttributedString.Key.font: UIFont(name: "HelveticaNeue-Thin", size: 36)!, NSAttributedString.Key.paragraphStyle: paragraphStyle]

    let string = "How much wood would a woodchuck\\nchuck if a woodchuck would chuck wood?"
    string.draw(with: CGRect(x: 32, y: 32, width: 448, height: 448), options: .usesLineFragmentOrigin, attributes: attrs, context: nil)
}
\`\`\`

`),x])}const S=s(g,[["render",y],["__file","how-to-draw-a-text-string-using-core-graphics.html.vue"]]),C=JSON.parse('{"path":"/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.html","title":"How to draw a text string using Core Graphics","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to draw a text string using Core Graphics","description":"Article(s) > How to draw a text string using Core Graphics","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-4.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to draw a text string using Core Graphics"},{"property":"og:description","content":"How to draw a text string using Core Graphics"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to draw a text string using Core Graphics"}],["meta",{"property":"og:description","content":"Article(s) > How to draw a text string using Core Graphics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-4.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to draw a text string using Core Graphics\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"hackingwithswift.com/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{S as comp,C as data};
