import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as i,n as a,g as o,a as e,r as m,o as h}from"./app-BgNevrm5.js";const g={},d={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},u=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),b=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-insert-images-into-text">How to insert images into text 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions 
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor 
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:)</a>
`)],-1);function y(r,x){const n=m("VPCard");return h(),c("div",null,[t("h1",d,[t("a",p,[t("span",null,l(r.$frontmatter.title)+" 관련",1)])]),i(n,a(o({title:"System - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/system/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,w,i(n,a(o({title:"How to insert images into an attributed string with NSTextAttachment | System - free Swift example code",desc:"How to insert images into an attributed string with NSTextAttachment",logo:"https://hackingwithswift.com/favicon.svg",link:"https://hackingwithswift.com/example-code/how-to-insert-images-into-an-attributed-string-with-nstextattachment",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(` 
If you've ever tried to lay out multiple \`UILabels\` mixed in with \`UIImageViews\`, you'll know it's almost impossible to make them line up correctly even after you add dozens of Auto Layout rules.

If you are able to use it, there is a much simpler suggestion: \`NSAttributedString\` and \`NSTextAttachment\`. Attributed strings are strings with formatting attached (bold, italics, alignment, colors, etc), but you can also attach images inside attributed strings, and they just get drawn right along with the text.

Here's an example to help you get started:

\`\`\`swift
// create an NSMutableAttributedString that we'll append everything to
let fullString = NSMutableAttributedString(string: "Start of text")

// create our NSTextAttachment
let image1Attachment = NSTextAttachment()
image1Attachment.image = UIImage(named: "awesomeIcon.png")

// wrap the attachment in its own attributed string so we can append it
let image1String = NSAttributedString(attachment: image1Attachment)

// add the NSTextAttachment wrapper to our full string, then add some more text.
fullString.append(image1String)
fullString.append(NSAttributedString(string: "End of text"))

// draw the result in a label
yourLabel.attributedText = fullString
\`\`\`

Using this technique is much easier than Auto Layout, because iOS becomes responsible for drawing the image directly inside the string. This means if your user interface adjusts because of things like rotation or multi-tasking, the string – and its images – will redraw smoothly, with no further work from you.

`),b])}const k=s(g,[["render",y],["__file","how-to-insert-images-into-an-attributed-string-with-nstextattachment.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/system/how-to-insert-images-into-an-attributed-string-with-nstextattachment.html","title":"How to insert images into an attributed string with NSTextAttachment","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to insert images into an attributed string with NSTextAttachment","description":"Article(s) > How to insert images into an attributed string with NSTextAttachment","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to insert images into an attributed string with NSTextAttachment"},{"property":"og:description","content":"How to insert images into an attributed string with NSTextAttachment"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/how-to-insert-images-into-an-attributed-string-with-nstextattachment.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-insert-images-into-an-attributed-string-with-nstextattachment.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to insert images into an attributed string with NSTextAttachment"}],["meta",{"property":"og:description","content":"Article(s) > How to insert images into an attributed string with NSTextAttachment"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2018-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to insert images into an attributed string with NSTextAttachment\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2018-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.72,"words":517},"filePathRelative":"hackingwithswift.com/example-code/system/how-to-insert-images-into-an-attributed-string-with-nstextattachment.md","localizedDate":"2018년 3월 28일","excerpt":"\\n"}');export{k as comp,_ as data};
