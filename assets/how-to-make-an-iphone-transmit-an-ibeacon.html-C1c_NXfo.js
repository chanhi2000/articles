import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as s,e as a,n,g as i,a as t,r as h,o as p}from"./app-BgNevrm5.js";const m={},d={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),u=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 7.0")],-1),k=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x">How to hide the home indicator on iPhone X 
/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad 
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
`)],-1);function B(r,b){const o=h("VPCard");return p(),l("div",null,[e("h1",d,[e("a",g,[e("span",null,s(r.$frontmatter.title)+" 관련",1)])]),a(o,n(i({title:"Location - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/location/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,u,a(o,n(i({title:"How to make an iPhone transmit an iBeacon | Location - free Swift example code",desc:"How to make an iPhone transmit an iBeacon",link:"https://hackingwithswift.com/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
iOS 7.0 introduced not only the ability to detect iBeacons, but also the ability to create iBeacons – for iPhones and iPads to broadcast their own beacon signal that can then be detected by other devices. To make this work, you add these two imports:

\`\`\`swift
import CoreBluetooth
import CoreLocation
\`\`\`

Now you need to make your view controller (or other class) conform to the \`CBPeripheralManagerDelegate\` protocol so that it’s capable of handling Bluetooth state changes. You also need to create three properties: the beacon itself, plus two Bluetooth properties that store configuration and management information. 

Once that’s done, there are three methods you need to include. The first one creates the beacon and starts broadcasting, the second one stops the beacon, and the third one acts as an intermediary between your app and the iOS Bluetooth stack.

Here’s a working example to get you started:

\`\`\`swift
class ViewController: UIViewController, CBPeripheralManagerDelegate {
    var localBeacon: CLBeaconRegion!
    var beaconPeripheralData: NSDictionary!
    var peripheralManager: CBPeripheralManager!

    func initLocalBeacon() {
        if localBeacon != nil {
            stopLocalBeacon()
        }

        let localBeaconUUID = "5A4BCFCE-174E-4BAC-A814-092E77F6B7E5"
        let localBeaconMajor: CLBeaconMajorValue = 123
        let localBeaconMinor: CLBeaconMinorValue = 456

        let uuid = UUID(uuidString: localBeaconUUID)!
        localBeacon = CLBeaconRegion(proximityUUID: uuid, major: localBeaconMajor, minor: localBeaconMinor, identifier: "Your private identifer here")

        beaconPeripheralData = localBeacon.peripheralData(withMeasuredPower: nil)
        peripheralManager = CBPeripheralManager(delegate: self, queue: nil, options: nil)
    }

    func stopLocalBeacon() {
        peripheralManager.stopAdvertising()
        peripheralManager = nil
        beaconPeripheralData = nil
        localBeacon = nil
    }

    func peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager) {
        if peripheral.state == .poweredOn {
            peripheralManager.startAdvertising(beaconPeripheralData as? [String: Any])
        } else if peripheral.state == .poweredOff {
            peripheralManager.stopAdvertising()
        }
    }
}
\`\`\`

`),k])}const _=c(m,[["render",B],["__file","how-to-make-an-iphone-transmit-an-ibeacon.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon.html","title":"How to make an iPhone transmit an iBeacon","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to make an iPhone transmit an iBeacon","description":"Article(s) > How to make an iPhone transmit an iBeacon","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to make an iPhone transmit an iBeacon"},{"property":"og:description","content":"How to make an iPhone transmit an iBeacon"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to make an iPhone transmit an iBeacon"}],["meta",{"property":"og:description","content":"Article(s) > How to make an iPhone transmit an iBeacon"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to make an iPhone transmit an iBeacon\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"hackingwithswift.com/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,v as data};
