import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as c,e as a,n as i,g as n,a as e,r as g,o as p}from"./app-BgNevrm5.js";const h={},u={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 9.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui">How to support drag and drop in SwiftUI 
/example-code/uikit/how-to-support-pinch-to-zoom-in-a-uiscrollview">How to support pinch to zoom in a UIScrollView 
/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess">How to support low data mode networking using allowsConstrainedNetworkAccess 
/quick-start/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency">How to fix the error “async call in a function that does not support concurrency” 
/quick-start/swiftui/how-to-create-a-core-data-fetch-request-using-fetchrequest">How to create a Core Data fetch request using @FetchRequest</a>
`)],-1);function k(r,b){const o=g("VPCard");return p(),l("div",null,[t("h1",u,[t("a",d,[t("span",null,c(r.$frontmatter.title)+" 관련",1)])]),a(o,i(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,f,a(o,i(n({title:"How to support right-to-left languages | UIKit - free Swift example code",desc:"How to support right-to-left languages",link:"https://hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e(`
Hebrew, Arabic, Farsi, and more are all languages that use a right-to-left layout, and it doesn’t take much work to make your iOS apps fit in more naturally for those languages. In fact, there are four things you need to do to get most of the way there, and I want to walk through them briefly with some code.

First, make sure you use natural text alignment for your labels and text views. “Natural” automatically becomes either left aligned or right aligned depending on the user’s region, which means you don’t need to worry about. For example:

\`\`\`swift
label.textAlignment = .natural
\`\`\`

Second, use leading and trailing constraints rather than left and right, and again UIKit will automatically flip these when running on right-to-left devices:

\`\`\`swift
label.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
label.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
\`\`\`

Third, flip any images that need it. Most images should be fine without flipping, but if you have images that point to parts of your user interface then they should be flipped. This takes one line of code:

\`\`\`swift
let flipped = originalImage.imageFlippedForRightToLeftLayoutDirection()
\`\`\`

Note: that doesn’t actually flip the \`UIImage\`, but instead configures the image to be drawn flipped when it’s placed inside a \`UIImageView\`.

Finally, test your changes using a right-to-left region. The easiest way to do this is to go to the Product menu, hold down <kbd>Alt</kbd>, then click “Run…” to adjust your run schema. Now go to the Options tab and change Application Language from “System Language” to “Right-to-Left Pseudolanguage”. Now run your app in the simulator, and you should see your flipped layout working.

`),y])}const A=s(h,[["render",k],["__file","how-to-support-right-to-left-languages.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages.html","title":"How to support right-to-left languages","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to support right-to-left languages","description":"Article(s) > How to support right-to-left languages","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-9.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to support right-to-left languages"},{"property":"og:description","content":"How to support right-to-left languages"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to support right-to-left languages"}],["meta",{"property":"og:description","content":"Article(s) > How to support right-to-left languages"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-9.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to support right-to-left languages\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-support-right-to-left-languages.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{A as comp,v as data};
