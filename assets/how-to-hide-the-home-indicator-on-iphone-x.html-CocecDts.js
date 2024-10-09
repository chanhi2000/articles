import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as s,e as i,n,g as a,a as t,r as l,o as d}from"./app-BgNevrm5.js";const m={},p={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),g=e("blockquote",null,[e("p",null,"Available from iOS 11.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/how-to-hide-the-home-indicator-and-other-system-ui">How to hide the home indicator and other system UI 
/example-code/uikit/how-to-change-the-scroll-indicator-inset-for-a-uiscrollview">How to change the scroll indicator inset for a UIScrollView 
/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad 
/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon">How to make an iPhone transmit an iBeacon 
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a>
`)],-1);function k(r,b){const o=l("VPCard");return d(),c("div",null,[e("h1",p,[e("a",w,[e("span",null,s(r.$frontmatter.title)+" 관련",1)])]),i(o,n(a({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,f,i(o,n(a({title:"How to hide the home indicator on iPhone X | UIKit - free Swift example code",desc:"How to hide the home indicator on iPhone X",link:"https://hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,t(" TODO: 작성 "),t(`
iPhone X did away with the home button for the first time in any iPhone, replacing it with an interactive line that sits at the bottom of the screen called the home indicator.

This indicator always remains visible unless you request others, and generally Apple suggests it’s a good idea to keep it visible. At the same time, there are many times when you want full control of the screen to yourself, for example if the user is watching a video, and in those times you’re going to want to hide the home indicator.

To hide the home indicator on iPhone X all you need to do is return true from the \`prefersHomeIndicatorAutoHidden\` property in your view controller. You can add logic if you want, allowing you to hide the home indicator only when certain conditions are reached, or you can just always request it be hidden, like this:

\`\`\`swift
override var prefersHomeIndicatorAutoHidden: Bool {
    return true
}
\`\`\`

That will cause the home indicator to be hidden after a couple of seconds, but it will reappear as soon as the user touches the screen.

`),y])}const P=h(m,[["render",k],["__file","how-to-hide-the-home-indicator-on-iphone-x.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x.html","title":"How to hide the home indicator on iPhone X","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to hide the home indicator on iPhone X","description":"Article(s) > How to hide the home indicator on iPhone X","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-11.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to hide the home indicator on iPhone X"},{"property":"og:description","content":"How to hide the home indicator on iPhone X"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to hide the home indicator on iPhone X"}],["meta",{"property":"og:description","content":"Article(s) > How to hide the home indicator on iPhone X"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-11.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to hide the home indicator on iPhone X\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.61,"words":482},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{P as comp,v as data};
