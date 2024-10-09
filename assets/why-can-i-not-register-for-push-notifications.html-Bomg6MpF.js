import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as i,n,g as r,a as e,r as h,o as p}from"./app-BgNevrm5.js";const u={},f={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},d=t("nav",{class:"table-of-contents"},[t("ul")],-1),m=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 3.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uikit/how-to-register-a-cell-for-uitableviewcell-reuse">How to register a cell for UITableViewCell reuse 
/example-code/uikit/how-to-register-a-cell-for-uicollectionview-reuse">How to register a cell for UICollectionView reuse 
/quick-start/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped">How to push a new view when a list row is tapped 
/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue">How to send notifications asynchronously using NotificationQueue 
/quick-start/swiftui/how-to-push-a-new-view-onto-a-navigationstack">How to push a new view onto a NavigationStack</a>
`)],-1);function k(a,_){const o=h("VPCard");return p(),c("div",null,[t("h1",f,[t("a",g,[t("span",null,l(a.$frontmatter.title)+" 관련",1)])]),i(o,n(r({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,m,i(o,n(r({title:"Why can I not register for push notifications? | UIKit - free Swift example code",desc:"Why can I not register for push notifications?",link:"https://hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,e(" TODO: 작성 "),e(`
When you register for push notifications, one of two methods ought to be called: \`didRegisterForRemoteNotificationsWithDeviceToken\` is called when everything worked correctly, and \`didFailToRegisterForRemoteNotificationsWithError\` is called if something went wrong.

First, ensure you're correctly registering for push notifications, like this:

\`\`\`swift
UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
    if let error = error {
        print("D'oh: \\(error.localizedDescription)")
    } else {
        application.registerForRemoteNotifications()
    }
}
\`\`\`

You should call that every time your app starts, because the user token can change, and the user can also adjust your app's permissions at any time.

Once you're sure you have registered for notifications, add these two methods to your app delegate:

\`\`\`swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    print("Successfully registered for notifications!")
}

func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    print("Failed to register for notifications: \\(error.localizedDescription)")
}
\`\`\`

Both of those just print out the status of your push request, which should give you an idea of what's going on. The most common reasons push notification request fail are: 1) you're using the iOS simulator, which does not support push notifications, and 2) your user has denied permission for push messages.

`),y])}const x=s(u,[["render",k],["__file","why-can-i-not-register-for-push-notifications.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications.html","title":"Why can I not register for push notifications?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Why can I not register for push notifications?","description":"Article(s) > Why can I not register for push notifications?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-3.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Why can I not register for push notifications?"},{"property":"og:description","content":"Why can I not register for push notifications?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Why can I not register for push notifications?"}],["meta",{"property":"og:description","content":"Article(s) > Why can I not register for push notifications?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-3.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Why can I not register for push notifications?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"hackingwithswift.com/example-code/uikit/why-can-i-not-register-for-push-notifications.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,I as data};
