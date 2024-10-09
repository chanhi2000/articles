import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as n,n as o,g as r,a as e,r as h,o as m}from"./app-BgNevrm5.js";const u={},d={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},x=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),g=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),f=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request">How to limit the number of items in a fetch request 
/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually 
/example-code/uikit/how-to-pad-a-uitextview-by-setting-its-text-container-inset">How to pad a UITextView by setting its text container inset 
/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return 
/example-code/uikit/how-to-hide-passwords-in-a-uitextfield">How to hide passwords in a UITextField</a>
`)],-1);function T(a,y){const i=h("VPCard");return m(),c("div",null,[t("h1",d,[t("a",p,[t("span",null,l(a.$frontmatter.title)+" 관련",1)])]),n(i,o(r({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),x,w,n(i,o(r({title:"How to limit the number of characters in a UITextField or UITextView | UIKit - free Swift example code",desc:"How to limit the number of characters in a UITextField or UITextView",link:"https://hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,e(" TODO: 작성 "),e(`
If you have a \`UITextField\` or \`UITextView\` and want to stop users typing in more than a certain number of letters, you need to set yourself as the delegate for the control then implement either \`shouldChangeCharactersIn\` (for text fields) or \`shouldChangeTextIn\` (for text views).

Next, add one of these two methods, depending on whether you are working with text fields (single line) or text views (multiple lines):

\`\`\`swift
// Use this if you have a UITextField
func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
    // get the current text, or use an empty string if that failed
    let currentText = textField.text ?? ""

    // attempt to read the range they are trying to change, or exit if we can't
    guard let stringRange = Range(range, in: currentText) else { return false }

    // add their new text to the existing text
    let updatedText = currentText.replacingCharacters(in: stringRange, with: string)

    // make sure the result is under 16 characters
    return updatedText.count <= 16
}

// Use this if you have a UITextView
func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
    // get the current text, or use an empty string if that failed
    let currentText = textView.text ?? ""

    // attempt to read the range they are trying to change, or exit if we can't
    guard let stringRange = Range(range, in: currentText) else { return false }

    // add their new text to the existing text
    let updatedText = currentText.replacingCharacters(in: stringRange, with: text)

    // make sure the result is under 16 characters
    return updatedText.count <= 16
}
\`\`\`

I've specified 16 as the maximum number of characters, but just change that to whatever you need.

`),f])}const I=s(u,[["render",T],["__file","how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.html.vue"]]),U=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.html","title":"How to limit the number of characters in a UITextField or UITextView","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to limit the number of characters in a UITextField or UITextView","description":"Article(s) > How to limit the number of characters in a UITextField or UITextView","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to limit the number of characters in a UITextField or UITextView"},{"property":"og:description","content":"How to limit the number of characters in a UITextField or UITextView"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to limit the number of characters in a UITextField or UITextView"}],["meta",{"property":"og:description","content":"Article(s) > How to limit the number of characters in a UITextField or UITextView"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-09-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to limit the number of characters in a UITextField or UITextView\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-09-19T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.94,"words":581},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.md","localizedDate":"2019년 9월 19일","excerpt":"\\n"}');export{I as comp,U as data};
