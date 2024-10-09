import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as l,e as a,n,g as o,a as t,r as m,o as h}from"./app-BgNevrm5.js";const d={},g={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),u=e("blockquote",null,[e("p",null,"Available from iOS 2.0")],-1),v=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard">How to adjust a UIScrollView to fit the keyboard 
/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image 
/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text</a>
`)],-1);function k(s,z){const i=m("VPCard");return h(),r("div",null,[e("h1",g,[e("a",p,[e("span",null,l(s.$frontmatter.title)+" 관련",1)])]),a(i,n(o({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,f,a(i,n(o({title:"How to find an aspect fit image’s size inside an image view | UIKit - free Swift example code",desc:"How to find an aspect fit image’s size inside an image view",link:"https://hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,t(" TODO: 작성 "),t(`
All images have a natural size, which is the number of pixels they are wide and high. All image views also have a size, which is whatever width and height they have once their Auto Layout constraints have been resolved. 

Things get a little more complex when you place an image inside an image view and make it use *aspect fit* content mode – the image gets scaled down to fit inside the image view, so that all parts of the image are visible.

If you need to find the size of an aspect fit image inside its image view, I have just the extension for you:

\`\`\`swift
extension UIImageView {
    var contentClippingRect: CGRect {
        guard let image = image else { return bounds }
        guard contentMode == .scaleAspectFit else { return bounds }
        guard image.size.width > 0 && image.size.height > 0 else { return bounds }

        let scale: CGFloat
        if image.size.width > image.size.height {
            scale = bounds.width / image.size.width
        } else {
            scale = bounds.height / image.size.height
        }

        let size = CGSize(width: image.size.width * scale, height: image.size.height * scale)
        let x = (bounds.width - size.width) / 2.0
        let y = (bounds.height - size.height) / 2.0

        return CGRect(x: x, y: y, width: size.width, height: size.height)
    }
}
\`\`\`

You can now use \`imageView.contentClippingRect\` to read the position and size of the image inside.

`),v])}const _=c(d,[["render",k],["__file","how-to-find-an-aspect-fit-images-size-inside-an-image-view.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view.html","title":"How to find an aspect fit image’s size inside an image view","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to find an aspect fit image’s size inside an image view","description":"Article(s) > How to find an aspect fit image’s size inside an image view","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to find an aspect fit image’s size inside an image view"},{"property":"og:description","content":"How to find an aspect fit image’s size inside an image view"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to find an aspect fit image’s size inside an image view"}],["meta",{"property":"og:description","content":"Article(s) > How to find an aspect fit image’s size inside an image view"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-10-24T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to find an aspect fit image’s size inside an image view\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-24T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-10-24T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view.md","localizedDate":"2019년 10월 24일","excerpt":"\\n"}');export{_ as comp,x as data};
