import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as l,e as o,n as r,g as n,a as t,r as p,o as h}from"./app-BgNevrm5.js";const u={},d={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},f=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),g=e("blockquote",null,[e("p",null,"Available from iOS 11.0")],-1),b=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually 
/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext 
/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile” 
/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable">How to fix a Form Picker or a NavigationLink that isn’t tappable 
/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock">How to fix “Ambiguous reference to member 'buildBlock()’”</a>
`)],-1);function y(a,v){const i=p("VPCard");return h(),s("div",null,[e("h1",d,[e("a",m,[e("span",null,l(a.$frontmatter.title)+" 관련",1)])]),o(i,r(n({title:"Accessibility - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/accessibility/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,w,o(i,r(n({title:"How to fix incorrect VoiceOver pronunciations | Accessibility - free Swift example code",desc:"How to fix incorrect VoiceOver pronunciations",link:"https://hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,t(" TODO: 작성 "),t(`
As clever as VoiceOver is, sometimes it will get the pronunciation wrong for certain words – particularly when it’s missing some context that would have made clear what the correct pronunciation was.

For example, if you have a \`UILabel\` containing the string “Live” should that be pronounced as “liv” or as “lyve”? Or how about “Read” – is that pronounced as “reed” or “red”? There’s no way for VoiceOver to know unless you tell it.

The official way to do this is by using the \`UIAccessibilitySpeechAttributeIPANotation\` key in an attributed string, but in practice using that just makes your sounds come out poorly.

An easier way that also produces better results is just to use your own phonetic lettering. For example:

\`\`\`swift
label.text = "read"
label.accessibilityLabel = "red"
\`\`\`

Using this approach, the screen will show “read” but VoiceOver users will hear “red” – it works for everyone.

There are two places where this approach either won’t be enough or will prove extremely complicated.

First, if you use foreign languages inside your app they will be read out as if they were the user’s primary language. So, French words might be pronounced as if they were English, for example.

Second, if your app uses punctuation that the user needs to hear audibly, the result won’t be what you hoped for. For example, if you write some Swift code like \`user.name\` that will be interpreted by VoiceOver as “user (pause) name” rather than “user period name”.

Both of these problems can be fixed by using special attributes of \`NSAttributedString\`. For example, we can specify the language for an attributed string like this:

\`\`\`swift
let attributedString1 = NSAttributedString(
    string: "Bonjour", attributes: [.accessibilitySpeechLanguage: "fr-FR"]
)

label.text = "Bonjour"
label.accessibilityAttributedLabel = attributedString1
\`\`\`

And we can tell VoiceOver to read all punctuation like this:

\`\`\`swift
let attributedString2 = NSAttributedString(
    string: "user.name", attributes: [.accessibilitySpeechPunctuation: true]
)

label.text = "user.name"
label.accessibilityAttributedLabel = attributedString2
\`\`\`

Much better!

`),b])}const S=c(u,[["render",y],["__file","how-to-fix-incorrect-voiceover-pronunciations.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.html","title":"How to fix incorrect VoiceOver pronunciations","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to fix incorrect VoiceOver pronunciations","description":"Article(s) > How to fix incorrect VoiceOver pronunciations","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-13.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to fix incorrect VoiceOver pronunciations"},{"property":"og:description","content":"How to fix incorrect VoiceOver pronunciations"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to fix incorrect VoiceOver pronunciations"}],["meta",{"property":"og:description","content":"Article(s) > How to fix incorrect VoiceOver pronunciations"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-13.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-10-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to fix incorrect VoiceOver pronunciations\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-10-20T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.95,"words":585},"filePathRelative":"hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.md","localizedDate":"2019년 10월 20일","excerpt":"\\n"}');export{S as comp,_ as data};
