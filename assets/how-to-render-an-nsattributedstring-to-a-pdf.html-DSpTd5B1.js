import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as r,n as a,g as i,a as e,r as d,o as p}from"./app-BgNevrm5.js";const g={},h={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 4.2")],-1),b=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit 
/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString</a>
`)],-1);function S(o,y){const n=d("VPCard");return p(),c("div",null,[t("h1",h,[t("a",u,[t("span",null,l(o.$frontmatter.title)+" 관련",1)])]),r(n,a(i({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,r(n,a(i({title:"How to render an NSAttributedString to a PDF | UIKit - free Swift example code",desc:"How to render an NSAttributedString to a PDF",link:"https://hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(`
Attributed strings contain all the formatting they need to go straight to images, PDFs, and other visual output, although it does take a little setup to get a good PDF out.

First, create your attributed string:

\`\`\`swift
let attributedString = NSAttributedString(string: "This is a test", attributes: [NSAttributedString.Key.foregroundColor: UIColor.red])
\`\`\`

Next, wrap that inside a \`UISimpleTextPrintFormatter\`, which is responsible for layout out that string over as many pages as needed:

\`\`\`swift
let printFormatter = UISimpleTextPrintFormatter(attributedText: attributedString)
\`\`\`

You can then put that formatter inside a page renderer, telling it to start printing at page 0:

\`\`\`swift
let renderer = UIPrintPageRenderer()
renderer.addPrintFormatter(printFormatter, startingAtPageAt: 0)
\`\`\`

Next you need to define a few sizes: how big your paper size is, along with what margins you want.

\`\`\`swift
// A4 size
let pageSize = CGSize(width: 595.2, height: 841.8)

// Use this to get US Letter size instead
// let pageSize = CGSize(width: 612, height: 792)

// create some sensible margins
let pageMargins = UIEdgeInsets(top: 72, left: 72, bottom: 72, right: 72)

// calculate the printable rect from the above two
let printableRect = CGRect(x: pageMargins.left, y: pageMargins.top, width: pageSize.width - pageMargins.left - pageMargins.right, height: pageSize.height - pageMargins.top - pageMargins.bottom)

// and here's the overall paper rectangle
let paperRect = CGRect(x: 0, y: 0, width: pageSize.width, height: pageSize.height)
\`\`\`

You can now pass the paper and printable rectangles to the page renderer, like this:

\`\`\`swift
renderer.setValue(NSValue(cgRect: paperRect), forKey: "paperRect")
renderer.setValue(NSValue(cgRect: printableRect), forKey: "printableRect")
\`\`\`

The next step is to create an empty instance of \`NSMutableData\`, then ask UIKit to render into that data object:

\`\`\`swift
let pdfData = NSMutableData()

UIGraphicsBeginPDFContextToData(pdfData, paperRect, nil)
renderer.prepare(forDrawingPages: NSMakeRange(0, renderer.numberOfPages))
\`\`\`

Now all that remains is to render draw each page into the bounds of the PDF context, like this:

\`\`\`swift
let bounds = UIGraphicsGetPDFContextBounds()

for i in 0  ..< renderer.numberOfPages {
    UIGraphicsBeginPDFPage()

    renderer.drawPage(at: i, in: bounds)
}

UIGraphicsEndPDFContext()
\`\`\`

At this point your \`pdfData\` value contains the finished PDF, so you can write it wherever you want:

\`\`\`swift
do {
    try pdfData.write(to: yourURL)
} catch {
    print(error.localizedDescription)
}
\`\`\`

`),b])}const k=s(g,[["render",S],["__file","how-to-render-an-nsattributedstring-to-a-pdf.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf.html","title":"How to render an NSAttributedString to a PDF","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to render an NSAttributedString to a PDF","description":"Article(s) > How to render an NSAttributedString to a PDF","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-4.2","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to render an NSAttributedString to a PDF"},{"property":"og:description","content":"How to render an NSAttributedString to a PDF"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to render an NSAttributedString to a PDF"}],["meta",{"property":"og:description","content":"Article(s) > How to render an NSAttributedString to a PDF"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-4.2"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to render an NSAttributedString to a PDF\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{k as comp,x as data};
