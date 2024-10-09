import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as c,e as a,n as i,g as n,a as t,r as u,o as d}from"./app-BgNevrm5.js";const p={},h={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),b=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),g=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-draw-custom-views-in-interface-builder-using-ibdesignable">How to draw custom views in Interface Builder using IBDesignable 
/example-code/xcode/how-to-used-a-named-uicolor-in-code-and-interface-builder">How to used a named UIColor in code and Interface Builder 
/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards 
/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes">How to lock Interface Builder controls to stop accidental changes 
/quick-start/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset">How to adjust the position of a view using its offset</a>
`)],-1);function I(s,y){const o=u("VPCard");return d(),l("div",null,[e("h1",h,[e("a",f,[e("span",null,c(s.$frontmatter.title)+" 관련",1)])]),a(o,i(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,a(o,i(n({title:"How to use IBInspectable to adjust values in Interface Builder | UIKit - free Swift example code",desc:"How to use IBInspectable to adjust values in Interface Builder",link:"https://hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,t(" TODO: 작성 "),t(`
The \`@IBInspectable\` keyword lets you specify that some parts of a custom \`UIView\` subclass should be configurable inside Interface Builder. Only some kinds of values are supported (booleans, numbers, strings, points, rects, colors and images) but that ought to be enough for most purposes.

When your app is run, the values that were set in Interface Builder are automatically set, just like any other IB value. Neat, huh?

Here's an example that creates a \`GradientView\` class. This wraps the \`CAGradientLayer\` class up in a \`UIView\` that you can place anywhere in your app. Even better, thanks to \`@IBInspectable\` you can customize the colors in your gradient right inside IB. Add this class to your project now:

\`\`\`swift
@IBDesignable class GradientView: UIView {
    @IBInspectable var startColor: UIColor = UIColor.white
    @IBInspectable var endColor: UIColor = UIColor.white

    override class var layerClass: AnyClass {
        return CAGradientLayer.self
    }

    override func layoutSubviews() {
        (layer as! CAGradientLayer).colors = [startColor.cgColor, endColor.cgColor]
    }
}
\`\`\`

Now go to IB, drop a \`UIView\` on to your storyboard, then change its class to be \`GradientView\`. Once that's done, Xcode will compile your project automatically, and then inside the attributes inspector you'll see two color selectors for the start and end color.

::: note 

\`@IBInspectable\` frequently does not play nicely with type inference, which is why I've explicitly declared both the type (\`UIColor\`) and default value (\`UIColor.white\`).

:::

`),g])}const k=r(p,[["render",I],["__file","how-to-use-ibinspectable-to-adjust-values-in-interface-builder.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder.html","title":"How to use IBInspectable to adjust values in Interface Builder","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to use IBInspectable to adjust values in Interface Builder","description":"Article(s) > How to use IBInspectable to adjust values in Interface Builder","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to use IBInspectable to adjust values in Interface Builder"},{"property":"og:description","content":"How to use IBInspectable to adjust values in Interface Builder"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to use IBInspectable to adjust values in Interface Builder"}],["meta",{"property":"og:description","content":"Article(s) > How to use IBInspectable to adjust values in Interface Builder"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to use IBInspectable to adjust values in Interface Builder\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.72,"words":517},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-use-ibinspectable-to-adjust-values-in-interface-builder.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{k as comp,_ as data};
