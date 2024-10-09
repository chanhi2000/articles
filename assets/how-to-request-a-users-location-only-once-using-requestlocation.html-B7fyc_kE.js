import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as o,t as l,e as n,n as a,g as i,a as t,r as u,o as h}from"./app-BgNevrm5.js";const p={},m={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},d=o("nav",{class:"table-of-contents"},[o("ul")],-1),w=o("hr",null,null,-1),f=o("blockquote",null,[o("p",null,"Available from iOS 9.0")],-1),y=o("details",{class:"hint-container details"},[o("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/learn-once-apply-anywhere">Learn once, apply anywhere 
/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request 
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:) 
/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton">How to read the user’s location using LocationButton 
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a>
`)],-1);function q(c,L){const e=u("VPCard");return h(),s("div",null,[o("h1",m,[o("a",g,[o("span",null,l(c.$frontmatter.title)+" 관련",1)])]),n(e,a(i({title:"Location - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/location/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,w,n(e,a(i({title:"How to request a user's location only once using requestLocation | Location - free Swift example code",desc:"How to request a user's location only once using requestLocation",link:"https://hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
iOS has a simple way to request a user's location just once, and it's called \`requestLocation()\`. Calling this method returns immediately (meaning that your code carries on executing) but when iOS has managed (or failed) to get a fix on the user's location you will be told. Below is a complete example:

\`\`\`swift
import CoreLocation
import UIKit

class ViewController: UIViewController, CLLocationManagerDelegate {
    let manager = CLLocationManager()

    override func viewDidLoad() {
        manager.delegate = self
        manager.requestLocation()
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if let location = locations.first {
            print("Found user's location: \\(location)")
        }
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print("Failed to find user's location: \\(error.localizedDescription)")
    }
}
\`\`\`

`),y])}const b=r(p,[["render",q],["__file","how-to-request-a-users-location-only-once-using-requestlocation.html.vue"]]),x=JSON.parse(`{"path":"/hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation.html","title":"How to request a user's location only once using requestLocation","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to request a user's location only once using requestLocation","description":"Article(s) > How to request a user's location only once using requestLocation","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-9.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to request a user's location only once using requestLocation"},{"property":"og:description","content":"How to request a user's location only once using requestLocation"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to request a user's location only once using requestLocation"}],["meta",{"property":"og:description","content":"Article(s) > How to request a user's location only once using requestLocation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-9.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to request a user's location only once using requestLocation\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"hackingwithswift.com/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}`);export{b as comp,x as data};
