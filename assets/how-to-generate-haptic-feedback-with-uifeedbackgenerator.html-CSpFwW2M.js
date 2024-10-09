import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as h,e as n,n as o,g as i,a as t,r as l,o as d}from"./app-BgNevrm5.js";const p={},u={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},f=e("nav",{class:"table-of-contents"},[e("ul")],-1),m=e("hr",null,null,-1),b=e("blockquote",null,[e("p",null,"Available from iOS 10.0")],-1),w=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback">How to add haptic effects using sensory feedback 
/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve 
/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported">How to detect whether haptic event playback is supported 
/example-code/games/how-to-generate-shaped-random-numbers-using-gkgaussiandistribution">How to generate shaped random numbers using GKGaussianDistribution 
/example-code/system/how-to-generate-a-random-identifier-using-uuid">How to generate a random identifier using UUID</a>
`)],-1);function k(r,y){const a=l("VPCard");return d(),s("div",null,[e("h1",u,[e("a",g,[e("span",null,h(r.$frontmatter.title)+" 관련",1)])]),n(a,o(i({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,m,n(a,o(i({title:"How to generate haptic feedback with UIFeedbackGenerator | UIKit - free Swift example code",desc:"How to generate haptic feedback with UIFeedbackGenerator",link:"https://hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,t(" TODO: 작성 "),t(`
iOS 10 introduced new ways of generating haptic feedback using predefined vibration patterns shared by all apps, thus helping users understand that various types of feedback carry special significance. The core of this functionality is provided by \`UIFeedbackGenerator\`, but that's just an abstract class – the three classes you really care about are \`UINotificationFeedbackGenerator\`, \`UIImpactFeedbackGenerator\`, and \`UISelectionFeedbackGenerator\`.

The first of these, \`UINotificationFeedbackGenerator\`, lets you generate feedback based on three system events: error, success, and warning. The second, \`UIImpactFeedbackGenerator\`, lets you generate light, medium, and heavy effects that Apple says provide a "physical metaphor that complements the visual experience." Finally, \`UISelectionFeedbackGenerator\` generates feedback that should be triggered when the user is changing their selection on screen, e.g. moving through a picker wheel.

**At this time, only the new Taptic Engine found in the iPhone 7 and iPhone 7 Plus support these APIs. Other devices silently ignore the haptic requests.**

To start trying these APIs yourself, create a Single View App template in Xcode, then replace the built-in \`ViewController\` class with this test harness:

\`\`\`swift
import UIKit

class ViewController: UIViewController {
    var i = 0

    override func viewDidLoad() {
        super.viewDidLoad()

        let btn = UIButton()
        btn.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(btn)            

        btn.widthAnchor.constraint(equalToConstant: 128).isActive = true
        btn.heightAnchor.constraint(equalToConstant: 128).isActive = true
        btn.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        btn.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true

        btn.setTitle("Tap here!", for: .normal)
        btn.setTitleColor(UIColor.red, for: .normal)
        btn.addTarget(self, action: #selector(tapped), for: .touchUpInside)
    }

    @objc func tapped() {
        i += 1
        print("Running \\(i)")

        switch i {
        case 1:
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.error)

        case 2:
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.success)

        case 3:
            let generator = UINotificationFeedbackGenerator()
            generator.notificationOccurred(.warning)

        case 4:
            let generator = UIImpactFeedbackGenerator(style: .light)
            generator.impactOccurred()

        case 5:
            let generator = UIImpactFeedbackGenerator(style: .medium)
            generator.impactOccurred()

        case 6:
            let generator = UIImpactFeedbackGenerator(style: .heavy)
            generator.impactOccurred()

        default:
            let generator = UISelectionFeedbackGenerator()
            generator.selectionChanged()
            i = 0
        }
    }
}
\`\`\`

When you run that on your phone, pressing the "Tap here!" button cycles through all the vibration options in order.

One tip: because it can take a small amount of time for the system to prepare haptic feedback, Apple recommends you call the \`prepare()\` method on your generator before triggering the haptic effect. If you don't do this, and there *is* a slight delay between the visual effect and the matching haptic, it might confuse users more than it helps.

Although you can technically use a success notification feedback for whatever you want, doing so inappropriately may confuse users, particularly those who are heavily reliant on haptic feedback for device interaction. Apple specifically requests that you use them judiciously, that you avoid using the wrong haptic for a given situation, and that you remember not all devices support this new haptic feedback – you need to consider older iPhones too.

`),w])}const U=c(p,[["render",k],["__file","how-to-generate-haptic-feedback-with-uifeedbackgenerator.html.vue"]]),G=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator.html","title":"How to generate haptic feedback with UIFeedbackGenerator","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to generate haptic feedback with UIFeedbackGenerator","description":"Article(s) > How to generate haptic feedback with UIFeedbackGenerator","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-10.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to generate haptic feedback with UIFeedbackGenerator"},{"property":"og:description","content":"How to generate haptic feedback with UIFeedbackGenerator"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to generate haptic feedback with UIFeedbackGenerator"}],["meta",{"property":"og:description","content":"Article(s) > How to generate haptic feedback with UIFeedbackGenerator"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-10.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2020-02-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to generate haptic feedback with UIFeedbackGenerator\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-02-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2020-02-07T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator.md","localizedDate":"2020년 2월 7일","excerpt":"\\n"}');export{U as comp,G as data};
