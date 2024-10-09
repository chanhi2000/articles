import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as u,e as n,n as i,g as a,a as e,r as p,o as l}from"./app-BgNevrm5.js";const d={},h={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),y=t("blockquote",null,[t("p",null,"Available from iOS 3.2")],-1),f=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a>
`)],-1);function k(s,x){const o=p("VPCard");return l(),c("div",null,[t("h1",h,[t("a",m,[t("span",null,u(s.$frontmatter.title)+" 관련",1)])]),n(o,i(a({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,w,n(o,i(a({title:"How to create custom text input using UIKeyInput | UIKit - free Swift example code",desc:"How to create custom text input using UIKeyInput",link:"https://hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,e(" TODO: 작성 "),e(`
Although we can use \`pressesBegan()\` and \`pressesEnded()\` to read keypresses, they won’t show the on-screen keyboard and so won’t let you provide custom text input for users without a hardware keyboard. If you need that keyboard to be shown, you should create a class that adopts the \`UIKeyInput\` protocol instead, which has just three requirements:

- What to do when text is inserted.
<li>What to do when text is deleted.
<li>Whether your custom text input currently has text or not.

The only other thing you need to know is that your custom input control will show the keyboard when it becomes first responder. So, you should override the \`canBecomeFirstResponder\` property of your subclass, setting it to true rather than the default of false.

To demonstrate this, we could create a simple \`UIView\` subclass that draws text to the screen as it’s typed, like this:

\`\`\`swift
class TextRenderingView: UIView, UIKeyInput {
    // the string we'll be drawing
    var input = ""

    override var canBecomeFirstResponder: Bool {
        true
    }

    var hasText: Bool {
        input.isEmpty == false
    }

    func insertText(_ text: String) {
        input += text
        setNeedsDisplay()
    }

    func deleteBackward() {
        _ = input.popLast()
        setNeedsDisplay()
    }

    override func draw(_ rect: CGRect) {
        let attrs: [NSAttributedString.Key: Any] = [.font: UIFont.systemFont(ofSize: 32)]
        let attributedString = NSAttributedString(string: input, attributes: attrs)
        attributedString.draw(in: rect)
    }
}
\`\`\`

If you want to handle more complex user input, such as selecting ranges of text or drawing the caret, you should use the more advanced \`UITextInput\` protocol instead.

`),f])}const _=r(d,[["render",k],["__file","how-to-create-custom-text-input-using-uikeyinput.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput.html","title":"How to create custom text input using UIKeyInput","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create custom text input using UIKeyInput","description":"Article(s) > How to create custom text input using UIKeyInput","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-3.2","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create custom text input using UIKeyInput"},{"property":"og:description","content":"How to create custom text input using UIKeyInput"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create custom text input using UIKeyInput"}],["meta",{"property":"og:description","content":"Article(s) > How to create custom text input using UIKeyInput"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-3.2"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2020-04-23T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create custom text input using UIKeyInput\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-23T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2020-04-23T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput.md","localizedDate":"2020년 4월 23일","excerpt":"\\n"}');export{_ as comp,v as data};
