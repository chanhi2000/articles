import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as w,e as i,n as a,g as n,a as t,r as c,o as g}from"./app-BgNevrm5.js";const p={},h={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),u=e("hr",null,null,-1),b=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),v=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects 
/quick-start/swiftui/how-to-show-indeterminate-progress-using-progressview">How to show indeterminate progress using ProgressView 
/example-code/uikit/how-to-load-a-html-string-into-a-wkwebview-or-uiwebview-loadhtmlstring">How to load a HTML string into a WKWebView or UIWebView: loadHTMLString() 
/example-code/wkwebview/how-to-load-http-content-in-wkwebview-and-uiwebview">How to load HTTP content in WKWebView and UIWebView 
/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController</a>
`)],-1);function f(r,y){const o=c("VPCard");return g(),l("div",null,[e("h1",h,[e("a",d,[e("span",null,w(r.$frontmatter.title)+" 관련",1)])]),i(o,a(n({title:"WKWebView - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/wkwebview/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,u,i(o,a(n({title:"How to monitor WKWebView page load progress using key-value observing | WKWebView - free Swift example code",desc:"How to monitor WKWebView page load progress using key-value observing",link:"https://hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,t(" TODO: 작성 "),t(' \niOS often uses a delegate system to report important changes, such as when a table view cell has been tapped or when a web page has finished loading. But the delegate system only goes so far, and if you want fine-grained detailed information sometimes you need to turn to KVO, or "key-value observing."\n\nIn the case of seeing how much of a page has loaded in `WKWebView`, KVO is exactly what you need: each web view has a property called `estimatedProgress`, and you can be asked to be notified when that value has changed.\n\nFirst, create a progress view that will be used to show the loading progress:\n\n```swift\nprogressView = UIProgressView(progressViewStyle: .default)\nprogressView.sizeToFit()\n```\n\nYou can place that anywhere you like. Now add the current view controller as an observer of the `estimatedProgress` property of your `WKWebView`, like this:\n\n```swift\nwebView.addObserver(self, forKeyPath: #keyPath(WKWebView.estimatedProgress), options: .new, context: nil)\n```\n\nThe `.new` in that line of code means "when the value changes, tell me the new value."\n\nFinally, implement the `observeValue(forKeyPath:)` method in your view controller, updating the progress view with the estimated progress from the web view, like this:\n\n```swift\noverride func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {\n    if keyPath == "estimatedProgress" {\n        progressView.progress = Float(webView.estimatedProgress)\n    }\n}\n```\n\n'),v])}const W=s(p,[["render",f],["__file","how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.html.vue"]]),K=JSON.parse('{"path":"/hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.html","title":"How to monitor WKWebView page load progress using key-value observing","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to monitor WKWebView page load progress using key-value observing","description":"Article(s) > How to monitor WKWebView page load progress using key-value observing","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to monitor WKWebView page load progress using key-value observing"},{"property":"og:description","content":"How to monitor WKWebView page load progress using key-value observing"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to monitor WKWebView page load progress using key-value observing"}],["meta",{"property":"og:description","content":"Article(s) > How to monitor WKWebView page load progress using key-value observing"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to monitor WKWebView page load progress using key-value observing\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.72,"words":515},"filePathRelative":"hackingwithswift.com/example-code/wkwebview/how-to-monitor-wkwebview-page-load-progress-using-key-value-observing.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{W as comp,K as data};
