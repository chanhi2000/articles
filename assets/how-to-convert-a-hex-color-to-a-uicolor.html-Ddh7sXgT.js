import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as o,t as s,e as r,n,g as a,a as e,r as h,o as m}from"./app-BgNevrm5.js";const d={},p={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},f=o("nav",{class:"table-of-contents"},[o("ul")],-1),g=o("hr",null,null,-1),w=o("blockquote",null,[o("p",null,"Available from iOS 2.0")],-1),x=o("details",{class:"hint-container details"},[o("summary",null,"Similar solutions…"),e(`
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor 
/example-code/uicolor/how-to-read-the-red-green-blue-and-alpha-color-components-from-a-uicolor">How to read the red, green, blue, and alpha color components from a UIColor 
/example-code/uicolor/how-to-use-an-image-for-your-background-color-with-uicolorpatternimage">How to use an image for your background color with UIColor(patternImage:) 
/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues">How to create custom colors using UIColor RGB and hues 
/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder">How to used a named UIColor in code and Interface Builder</a>
`)],-1);function b(l,y){const t=h("VPCard");return m(),i("div",null,[o("h1",p,[o("a",u,[o("span",null,s(l.$frontmatter.title)+" 관련",1)])]),r(t,n(a({title:"UIClolr - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uicolor/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,g,r(t,n(a({title:"How to convert a hex color to a UIColor | UIClolr - free Swift example code",desc:"How to convert a hex color to a UIColor",link:"https://hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e(` 
Here's a simple extension to \`UIColor\` that lets you create colors from hex strings. The new method is a failable initializer, which means it returns nil if you don't specify a color in the correct format. It should be a # symbol, followed by red, green, blue and alpha in hex format, for a total of nine characters. For example, #ffe700ff is gold.

Here's the code:

\`\`\`swift
extension UIColor {
    public convenience init?(hex: String) {
        let r, g, b, a: CGFloat

        if hex.hasPrefix("#") {
            let start = hex.index(hex.startIndex, offsetBy: 1)
            let hexColor = String(hex[start...])

            if hexColor.count == 8 {
                let scanner = Scanner(string: hexColor)
                var hexNumber: UInt64 = 0

                if scanner.scanHexInt64(&hexNumber) {
                    r = CGFloat((hexNumber & 0xff000000) >> 24) / 255
                    g = CGFloat((hexNumber & 0x00ff0000) >> 16) / 255
                    b = CGFloat((hexNumber & 0x0000ff00) >> 8) / 255
                    a = CGFloat(hexNumber & 0x000000ff) / 255

                    self.init(red: r, green: g, blue: b, alpha: a)
                    return
                }
            }
        }

        return nil
    }
}
\`\`\`

If you wanted it always to return a value, change \`init?\` to be \`init\` then change the \`return nil\` line at the end to be \`return UIColor.black\` or whatever you'd like the default value to be.

To use the extension, write code like this:

\`\`\`swift
let gold = UIColor(hex: "#ffe700ff")
\`\`\`

`),x])}const k=c(d,[["render",b],["__file","how-to-convert-a-hex-color-to-a-uicolor.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor.html","title":"How to convert a hex color to a UIColor","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to convert a hex color to a UIColor","description":"Article(s) > How to convert a hex color to a UIColor","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to convert a hex color to a UIColor"},{"property":"og:description","content":"How to convert a hex color to a UIColor"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to convert a hex color to a UIColor"}],["meta",{"property":"og:description","content":"Article(s) > How to convert a hex color to a UIColor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to convert a hex color to a UIColor\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.68,"words":505},"filePathRelative":"hackingwithswift.com/example-code/uicolor/how-to-convert-a-hex-color-to-a-uicolor.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{k as comp,I as data};
