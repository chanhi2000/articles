import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as h,e as i,n,g as a,a as t,r as d,o as l}from"./app-BgNevrm5.js";const p={},w={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),g=e("blockquote",null,[e("p",null,"Available from iOS 3.2")],-1),k=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad 
/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock() 
/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down 
/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition 
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a>
`)],-1);function y(r,b){const o=d("VPCard");return l(),s("div",null,[e("h1",w,[e("a",u,[e("span",null,h(r.$frontmatter.title)+" 관련",1)])]),i(o,n(a({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,f,i(o,n(a({title:"How to check whether an iPhone or iPad is upside down or face up | UIKit - free Swift example code",desc:"How to check whether an iPhone or iPad is upside down or face up",link:"https://hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,t(" TODO: 작성 "),t(`
If your app needs to know the orientation of the user’s device – face up or face down – it takes only four steps to implement.

First, write a method that can be called when the device orientation changes:

\`\`\`swift
@objc func orientationChanged() {

}
\`\`\`

That needs to be marked \`@objc\` because it’s going to be called by the system whenever the accelerometer signals the orientation has changed. So, step two is to request those changes be sent to the new method:

\`\`\`swift
NotificationCenter.default.addObserver(self, selector: #selector(orientationChanged), name: UIDevice.orientationDidChangeNotification, object: nil)
\`\`\`

Third, ask the system to start checking for orientation changes:

\`\`\`swift
UIDevice.current.beginGeneratingDeviceOrientationNotifications()
\`\`\`

You shouldn’t leave that on all the time unless you need it; you should call \`endGeneratingDeviceOrientationNotifications()\` when you’re done with the data.

Finally, you can read the \`orientation\` property of the current \`UIDevice\` to see what the orientation currently is. This property doesn’t work correctly unless you already asked UIKit to begin generating device orientation notifications, which is why the above steps were required:

\`\`\`swift
if UIDevice.current.orientation == .faceDown {
    // it's face down
}
\`\`\`

You probably want that inside \`orientationChanged()\` so that it reads values as they change.

`),k])}const _=c(p,[["render",y],["__file","how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.html","title":"How to check whether an iPhone or iPad is upside down or face up","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to check whether an iPhone or iPad is upside down or face up","description":"Article(s) > How to check whether an iPhone or iPad is upside down or face up","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-3.2","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to check whether an iPhone or iPad is upside down or face up"},{"property":"og:description","content":"How to check whether an iPhone or iPad is upside down or face up"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to check whether an iPhone or iPad is upside down or face up"}],["meta",{"property":"og:description","content":"Article(s) > How to check whether an iPhone or iPad is upside down or face up"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-3.2"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to check whether an iPhone or iPad is upside down or face up\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.73,"words":520},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.md","localizedDate":"2019년 11월 28일","excerpt":"\\n"}');export{_ as comp,x as data};
