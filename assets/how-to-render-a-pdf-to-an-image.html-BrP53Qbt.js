import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as l,e as a,n as r,g as n,a as t,r as d,o as p}from"./app-BgNevrm5.js";const h={},g={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 3.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit 
/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer</a>
`)],-1);function x(i,P){const o=d("VPCard");return p(),s("div",null,[e("h1",g,[e("a",m,[e("span",null,l(i.$frontmatter.title)+" 관련",1)])]),a(o,r(n({title:"Core Graphics - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/core-graphics/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,f,a(o,r(n({title:"How to render a PDF to an image | Core Graphics - free Swift example code",desc:"How to render a PDF to an image",link:"https://hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(` 
iOS has built-in APIs for drawing PDFs, which means it's relatively straight forward to render a PDF to an image. I say "relatively" because there's still some boilerplate you need to worry about: figuring out the document size, filling the background in a solid color to avoid transparency, and flipping the rendering so that the PDF draws the right way up.

To make things easy for you, here's a pre-made method you can use that takes a URL to a PDF and returns either a rendered image or nil if it failed. To call it you should pull out the URL to a resource in your bundle or another local PDF file.

\`\`\`swift
func drawPDFfromURL(url: URL) -> UIImage? {
    guard let document = CGPDFDocument(url as CFURL) else { return nil }
    guard let page = document.page(at: 1) else { return nil }

    let pageRect = page.getBoxRect(.mediaBox)
    let renderer = UIGraphicsImageRenderer(size: pageRect.size)
    let img = renderer.image { ctx in
        UIColor.white.set()
        ctx.fill(pageRect)

        ctx.cgContext.translateBy(x: 0.0, y: pageRect.size.height)
        ctx.cgContext.scaleBy(x: 1.0, y: -1.0)

        ctx.cgContext.drawPDFPage(page)
    }

    return img
}
\`\`\`

`),y])}const k=c(h,[["render",x],["__file","how-to-render-a-pdf-to-an-image.html.vue"]]),F=JSON.parse('{"path":"/hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.html","title":"How to render a PDF to an image","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to render a PDF to an image","description":"Article(s) > How to render a PDF to an image","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-3.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to render a PDF to an image"},{"property":"og:description","content":"How to render a PDF to an image"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to render a PDF to an image"}],["meta",{"property":"og:description","content":"Article(s) > How to render a PDF to an image"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-3.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to render a PDF to an image\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{k as comp,F as data};
