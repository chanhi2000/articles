import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as n,n as i,g as r,a as e,r as m,o as d}from"./app-BgNevrm5.js";const h={},g={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},u=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),b=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/system/how-to-create-rich-formatted-text-strings-using-nsattributedstring">How to create rich formatted text strings using NSAttributedString 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/example-code/system/how-to-make-tappable-links-in-nsattributedstring">How to make tappable links in NSAttributedString</a>
`)],-1);function S(a,y){const o=m("VPCard");return d(),c("div",null,[t("h1",g,[t("a",p,[t("span",null,l(a.$frontmatter.title)+" 관련",1)])]),n(o,i(r({title:"System - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/system/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,w,n(o,i(r({title:"How to convert HTML to an NSAttributedString | System - free Swift example code",desc:"How to convert HTML to an NSAttributedString",link:"https://hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(' \nYou can create an `NSAttributedString` directly from HTML, including support for a wide range of formatting, using a special initializer and passing in `NSAttributedString.DocumentType.html` for your document type.\n\nFor example, given the following HTML:\n\n```swift\nlet html = """\n<html>\n<body>\n<h1>Hello, world!</h1>\n</body>\n</html>\n"""\n```\n\nYou first need to convert that string into a `Data` instance, like this:\n\n```swift\nlet data = Data(html.utf8)\n```\n\nYou can now create an `NSAttributedString` from that. This is a *throwing* call because you might try to convert something that isn’t valid, so we’re going to use `try?` and wrap it in `if let`:\n\n```swift\nif let attributedString = try? NSAttributedString(data: data, options: [.documentType: NSAttributedString.DocumentType.html], documentAttributes: nil) {\n    yourLabel.attributedText = attributedString\n}\n```\n\n'),b])}const k=s(h,[["render",S],["__file","how-to-convert-html-to-an-nsattributedstring.html.vue"]]),A=JSON.parse('{"path":"/hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.html","title":"How to convert HTML to an NSAttributedString","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to convert HTML to an NSAttributedString","description":"Article(s) > How to convert HTML to an NSAttributedString","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to convert HTML to an NSAttributedString"},{"property":"og:description","content":"How to convert HTML to an NSAttributedString"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to convert HTML to an NSAttributedString"}],["meta",{"property":"og:description","content":"Article(s) > How to convert HTML to an NSAttributedString"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2018-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to convert HTML to an NSAttributedString\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2018-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"hackingwithswift.com/example-code/system/how-to-convert-html-to-an-nsattributedstring.md","localizedDate":"2018년 3월 28일","excerpt":"\\n"}');export{k as comp,A as data};
