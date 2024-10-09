import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as c,e as i,n as a,g as n,a as e,r as m,o as h}from"./app-BgNevrm5.js";const d={},p={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},w=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 3.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-send-state-updates-manually-using-objectwillchange">How to send state updates manually using objectWillChange 
/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue">How to send notifications asynchronously using NotificationQueue 
/quick-start/swiftui/how-to-create-and-compose-custom-views">How to create and compose custom views 
/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton">How to read user contacts with ContactAccessButton 
/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons">How to let users customize toolbar buttons</a>
`)],-1);function k(s,b){const o=m("VPCard");return h(),r("div",null,[t("h1",p,[t("a",u,[t("span",null,c(s.$frontmatter.title)+" 관련",1)])]),i(o,a(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,i(o,a(n({title:"How to send an email | UIKit - free Swift example code",desc:"How to send an email",link:"https://hackingwithswift.com/example-code/uikit/how-to-send-an-email",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(`
In the MessageUI framework lies the \`MFMailComposeViewController\` class, which handles sending emails from your app. You get to set the recipients, message title and message text, but you don't get to send it – that's for the user to tap themselves.

Here's some example code:

\`\`\`swift
func sendEmail() {
    if MFMailComposeViewController.canSendMail() {
        let mail = MFMailComposeViewController()
        mail.mailComposeDelegate = self
        mail.setToRecipients(["you@yoursite.com"])
        mail.setMessageBody("<p>You're so awesome!</p>", isHTML: true)

        present(mail, animated: true)
    } else {
        // show failure alert
    }
}

func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
    controller.dismiss(animated: true)
}
\`\`\`

Make sure you add \`import MessageUI\` to any Swift file that uses this code, and you’ll also need to conform to the \`MFMailComposeViewControllerDelegate\` protocol.

Note that not all users have their device configure to send emails, which is why we need to check the result of \`canSendMail()\` before trying to send. Note also that you need to catch the \`didFinishWith\` callback in order to dismiss the mail window.

Warning: this code frequently fails in the iOS Simulator. If you want to test it, try on a real device.

`),y])}const C=l(d,[["render",k],["__file","how-to-send-an-email.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-send-an-email.html","title":"How to send an email","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to send an email","description":"Article(s) > How to send an email","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-3.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to send an email"},{"property":"og:description","content":"How to send an email"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-send-an-email.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-send-an-email.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to send an email"}],["meta",{"property":"og:description","content":"Article(s) > How to send an email"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-3.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to send an email\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-send-an-email.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{C as comp,x as data};
