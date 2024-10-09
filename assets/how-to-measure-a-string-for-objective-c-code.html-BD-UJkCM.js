import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as l,e as i,n as r,g as n,a as t,r as h,o as m}from"./app-BgNevrm5.js";const d={},g={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},p=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 7.0")],-1),b=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/how-to-create-an-objective-c-bridging-header-to-use-code-in-swift">How to create an Objective-C bridging header to use code in Swift 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure() 
/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
`)],-1);function y(a,k){const o=h("VPCard");return m(),c("div",null,[e("h1",g,[e("a",u,[e("span",null,l(a.$frontmatter.title)+" 관련",1)])]),i(o,r(n({title:"Strings - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/strings/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),p,f,i(o,r(n({title:"How to measure a string for Objective-C code | Strings - free Swift example code",desc:"How to measure a string for Objective-C code",link:"https://hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(' \nRegular Swift code can treat strings like other kinds of sequence, so you can use its `count` property to read the number of characters it contains:\n\n```swift\nlet str = "Hello, world"\nlet count = str.count\n```\n\nHowever, this falls down when you need to work with Objective-C code, for example `NSRegularExpression`, `NSDataDetector`, `UITextChecker`, and more – they use UTF-16 rather than Swift’s extended grapheme clusters, and so if you use `count` with them you’re likely to miss characters.\n\nInstead, the correct solution is to measure your string’s length using `utf16.count`, like this:\n\n```swift\nlet input = "This is a test with the URL https://www.hackingwithswift.com to be detected."\nlet detector = try! NSDataDetector(types: NSTextCheckingResult.CheckingType.link.rawValue)\nlet matches = detector.matches(in: input, options: [], range: NSRange(location: 0, length: input.utf16.count))\n```\n\nThat guarantees your string’s length is reported fully when interacting with Objective-C code.\n\n'),b])}const _=s(d,[["render",y],["__file","how-to-measure-a-string-for-objective-c-code.html.vue"]]),j=JSON.parse('{"path":"/hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code.html","title":"How to measure a string for Objective-C code","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to measure a string for Objective-C code","description":"Article(s) > How to measure a string for Objective-C code","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to measure a string for Objective-C code"},{"property":"og:description","content":"How to measure a string for Objective-C code"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to measure a string for Objective-C code"}],["meta",{"property":"og:description","content":"Article(s) > How to measure a string for Objective-C code"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2018-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to measure a string for Objective-C code\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2018-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.5,"words":450},"filePathRelative":"hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code.md","localizedDate":"2018년 3월 28일","excerpt":"\\n"}');export{_ as comp,j as data};
