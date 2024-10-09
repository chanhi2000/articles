import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as l,e as n,n as a,g as i,a as t,r as d,o as h}from"./app-BgNevrm5.js";const g={},p={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 7.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration 
/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view">How to detect the location of a tap inside a view 
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/uikit/how-to-detect-edge-swipes">How to detect edge swipes 
/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a>
`)],-1);function b(c,k){const o=d("VPCard");return h(),s("div",null,[e("h1",p,[e("a",u,[e("span",null,l(c.$frontmatter.title)+" 관련",1)])]),n(o,a(i({title:"Location - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/location/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,n(o,a(i({title:"How to detect iBeacons | Location - free Swift example code",desc:"How to detect iBeacons",link:"https://hackingwithswift.com/example-code/location/how-to-detect-ibeacons",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
Detecting iBeacons requires a number of steps, but before we can start writing any code we first need to add some privacy descriptions to your Info.plist file. These are shown to users when you request location access, and it’s your chance to explain to users why you need location access.

The two keys we need to add are “Privacy - Location Always and When In Use Usage Description” and “Privacy - Location When In Use Usage Description”. So, please go to your Info.plist now, and give them both a string describing why you want access.

With that done, we can start to scan for beacons. Open your class in Xcode (it could be a view controller, but it doesn't have to be), add an import for CoreLocation to the top, then tell Swift that your class conforms to the \`CLLocationManagerDelegate\` protocol so that you can start to receive location updates. 

iBeacon tracking is done using the \`CLLocationManager\` class, which is also responsible for requesting location permission from users. You need to create a property for this in your class so that you can store the active location manager, so add this:

\`\`\`swift
var locationManager: CLLocationManager!
\`\`\`

If you're using a view controller, you'll probably want to initialize this property in \`viewDidLoad()\`, like this:

\`\`\`swift
override func viewDidLoad() {
    super.viewDidLoad()

    locationManager = CLLocationManager()
    locationManager.delegate = self
    locationManager.requestAlwaysAuthorization()
}
\`\`\`

If you're using another type of class, you should amend that appropriately. 

Once you request permission to use your user's location, they'll see an alert with the message you wrote earlier. When they make a choice you'll get a delegate callback called \`didChangeAuthorization\`, at which point you can check whether they are authorized you or not:

\`\`\`swift
func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    if status == .authorizedAlways {
        if CLLocationManager.isMonitoringAvailable(for: CLBeaconRegion.self) {
            if CLLocationManager.isRangingAvailable() {
                startScanning()
            }
        }
    }
}
\`\`\`

Don't worry, we haven't written the \`startScanning()\` method yet.

Once you've been authorized to scan for iBeacons, you can create \`CLBeaconRegion\` objects and pass them to the location manager. Each \`CLBeaconRegion\` is uniquely identified by a long number (it's UUID), and optionally also major and minor numbers. As well as monitoring for a beacon's existence, we're also going to ask iOS to range the beacon for us – i.e., tell us how close it thinks we are.

Here's the code:

\`\`\`swift
func startScanning() {
    let uuid = UUID(uuidString: "5A4BCFCE-174E-4BAC-A814-092E77F6B7E5")!
    let beaconRegion = CLBeaconRegion(proximityUUID: uuid, major: 123, minor: 456, identifier: "MyBeacon")

    locationManager.startMonitoring(for: beaconRegion)
    locationManager.startRangingBeacons(in: beaconRegion)
}
\`\`\`

Once you're ranging for beacons, you'll get a delegate callback called \`didRangeBeacons\` every second or so, at which point you can read a beacon's distance using its \`proximity\` value and take appropriate action.

For example, we can make our view change color depending on how far away an iBeacon is with this code:

\`\`\`swift
func locationManager(_ manager: CLLocationManager, didRangeBeacons beacons: [CLBeacon], in region: CLBeaconRegion) {
    if beacons.count > 0 {
        updateDistance(beacons[0].proximity)
    } else {
        updateDistance(.unknown)
    }
}

func updateDistance(_ distance: CLProximity) {
    UIView.animate(withDuration: 0.8) {
        switch distance {
        case .unknown:
            self.view.backgroundColor = UIColor.gray

        case .far:
            self.view.backgroundColor = UIColor.blue

        case .near:
            self.view.backgroundColor = UIColor.orange

        case .immediate:
            self.view.backgroundColor = UIColor.red
        }
    }
}
\`\`\`

`),y])}const L=r(g,[["render",b],["__file","how-to-detect-ibeacons.html.vue"]]),B=JSON.parse('{"path":"/hackingwithswift.com/example-code/location/how-to-detect-ibeacons.html","title":"How to detect iBeacons","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to detect iBeacons","description":"Article(s) > How to detect iBeacons","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to detect iBeacons"},{"property":"og:description","content":"How to detect iBeacons"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-detect-ibeacons.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-detect-ibeacons.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to detect iBeacons"}],["meta",{"property":"og:description","content":"Article(s) > How to detect iBeacons"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to detect iBeacons\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.51,"words":753},"filePathRelative":"hackingwithswift.com/example-code/location/how-to-detect-ibeacons.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{L as comp,B as data};
