import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as l,e as a,n,g as o,a as t,r as d,o as f}from"./app-BgNevrm5.js";const u={},w={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),h=e("hr",null,null,-1),g=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),b=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
`)],-1);function y(r,v){const i=d("VPCard");return f(),s("div",null,[e("h1",w,[e("a",p,[e("span",null,l(r.$frontmatter.title)+" 관련",1)])]),a(i,n(o({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,h,a(i,n(o({title:"How to add blur and vibrancy using UIVisualEffectView | UIKit - free Swift example code",desc:"How to add blur and vibrancy using UIVisualEffectView",link:"https://hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,t(" TODO: 작성 "),t(`
As of iOS 8.0, visual effects such as blur and vibrancy are a cinch because Apple provides a built in \`UIView\` subclass that does all the hard work: \`UIVisualEffectView\`. For example, if you want to blur an image, you would use this code:

\`\`\`swift
let imageView = UIImageView(image: UIImage(named: "example"))
imageView.frame = view.bounds
imageView.contentMode = .scaleToFill
view.addSubview(imageView)

let blurEffect = UIBlurEffect(style: .dark)
let blurredEffectView = UIVisualEffectView(effect: blurEffect)
blurredEffectView.frame = imageView.bounds
view.addSubview(blurredEffectView)
\`\`\`

As well as blurring content, Apple also lets you add a "vibrancy" effect to your views – this is a translucency effect designed to ensure that text is readable when it's over any kind of blurred background, and it's used to create that soft glow effect you see in the notification center.

We could extend the previous example so that it adds a segmented control in the middle of the view, using a vibrancy effect. This is accomplished by created a second \`UIVisualEffectView\` inside the first one, this time using \`UIVibrancyEffect\` to create the glow. Note that you need to use the same blur type for both your visual effect views, otherwise the glow effect will be incorrect.

\`\`\`swift
let segmentedControl = UISegmentedControl(items: ["First Item", "Second Item"])
segmentedControl.sizeToFit()
segmentedControl.center = view.center

let vibrancyEffect = UIVibrancyEffect(blurEffect: blurEffect)
let vibrancyEffectView = UIVisualEffectView(effect: vibrancyEffect)
vibrancyEffectView.frame = imageView.bounds

vibrancyEffectView.contentView.addSubview(segmentedControl)
blurredEffectView.contentView.addSubview(vibrancyEffectView)
\`\`\`

Warning: you need to add child views to the \`contentView\` property of a \`UIVisualEffectView\` otherwise they will not be drawn correctly.

`),b])}const E=c(u,[["render",y],["__file","how-to-add-blur-and-vibrancy-using-uivisualeffectview.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview.html","title":"How to add blur and vibrancy using UIVisualEffectView","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add blur and vibrancy using UIVisualEffectView","description":"Article(s) > How to add blur and vibrancy using UIVisualEffectView","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add blur and vibrancy using UIVisualEffectView"},{"property":"og:description","content":"How to add blur and vibrancy using UIVisualEffectView"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add blur and vibrancy using UIVisualEffectView"}],["meta",{"property":"og:description","content":"Article(s) > How to add blur and vibrancy using UIVisualEffectView"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add blur and vibrancy using UIVisualEffectView\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{E as comp,I as data};
