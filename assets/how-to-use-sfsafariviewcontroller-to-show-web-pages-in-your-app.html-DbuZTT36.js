import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as c,e as a,n as i,g as r,a as t,r as p,o as w}from"./app-BgNevrm5.js";const h={},u={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),m=e("hr",null,null,-1),d=e("blockquote",null,[e("p",null,"Available from iOS 9.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-create-scrolling-pages-of-content-using-tabviewstyle">How to create scrolling pages of content using tabViewStyle() 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/quick-start/swiftui/how-to-open-web-links-in-safari">How to open web links in Safari 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
`)],-1);function S(n,b){const o=p("VPCard");return w(),l("div",null,[e("h1",u,[e("a",f,[e("span",null,c(n.$frontmatter.title)+" 관련",1)])]),a(o,i(r({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,m,a(o,i(r({title:"How to use SFSafariViewController to show web pages in your app | UIKit - free Swift example code",desc:"How to use SFSafariViewController to show web pages in your app",link:"https://hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,t(" TODO: 작성 "),t(`
If a user clicks a web link in your app, you used to have two options before iOS 9.0 came along: exit your app and launch the web page in Safari, or bring up a new web view controller that you've designed, along with various user interface controls. Exiting your app is rarely what users want, so unsurprisingly lots of app ended up creating mini-Safari experiences to browse inside their app.

As of iOS 9.0, Apple allows you to embed Safari right into your app, which means you get its great user interface, you get its access to stored user data, and you even get Reader Mode right out of the box. To get started, import the SafariServices framework into your view controller, like this:

\`\`\`swift
import SafariServices
\`\`\`

Now make your view controller conform to the \`SFSafariViewControllerDelegate\` protocol, then give it a try:

\`\`\`swift
let urlString = "https://www.hackingwithswift.com"

if let url = URL(string: urlString) {
    let vc = SFSafariViewController(url: url, entersReaderIfAvailable: true)
    vc.delegate = self

    present(vc, animated: true)
}
\`\`\`

That's all it takes to launch Safari inside your app now – cool, huh? We need to assign ourselves as the delegate of the Safari view controller because when the user taps "Done" inside Safari we should dismiss it and take any other appropriate action.

To do that, add this method to your view controller:

\`\`\`swift
func safariViewControllerDidFinish(_ controller: SFSafariViewController) {
    dismiss(animated: true)
}
\`\`\`

`),y])}const _=s(h,[["render",S],["__file","how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app.html","title":"How to use SFSafariViewController to show web pages in your app","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to use SFSafariViewController to show web pages in your app","description":"Article(s) > How to use SFSafariViewController to show web pages in your app","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-9.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to use SFSafariViewController to show web pages in your app"},{"property":"og:description","content":"How to use SFSafariViewController to show web pages in your app"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to use SFSafariViewController to show web pages in your app"}],["meta",{"property":"og:description","content":"Article(s) > How to use SFSafariViewController to show web pages in your app"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-9.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to use SFSafariViewController to show web pages in your app\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-use-sfsafariviewcontroller-to-show-web-pages-in-your-app.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,x as data};
