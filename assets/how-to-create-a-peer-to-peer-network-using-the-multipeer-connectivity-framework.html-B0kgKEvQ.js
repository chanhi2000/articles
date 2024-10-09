import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as l,e as o,n as r,g as i,a as t,r as m,o as h}from"./app-BgNevrm5.js";const p={},d={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 7.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor">How to check for internet connectivity using NWPathMonitor 
/example-code/networking/how-to-make-a-network-request-wait-for-an-internet-connection-using-waitsforconnectivity">How to make a network request wait for an internet connection using waitsForConnectivity 
/example-code/uikit/how-to-share-content-with-the-social-framework-and-slcomposeviewcontroller">How to share content with the Social framework and SLComposeViewController 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
`)],-1);function k(s,v){const n=m("VPCard");return h(),c("div",null,[e("h1",d,[e("a",w,[e("span",null,l(s.$frontmatter.title)+" 관련",1)])]),o(n,r(i({title:"Networking - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/networking/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,g,o(n,r(i({title:"How to create a peer-to-peer network using the multipeer connectivity framework | Networking - free Swift example code",desc:"How to create a peer-to-peer network using the multipeer connectivity framework",link:"https://hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(` 
The \`MultipeerConnectivity\` framework is designed to allow ad hoc data transfer between devices that are in close proximity. The connection is started managed for you by iOS, but you're responsible for presenting useful interface to your users and for understanding the data that is being sent and received.

First things first, import the \`MultipeerConnectivity\` framework:

\`\`\`swift
import MultipeerConnectivity
\`\`\`

Now define these three properties to hold the multipeer session information:

\`\`\`swift
var peerID: MCPeerID!
var mcSession: MCSession!
var mcAdvertiserAssistant: MCAdvertiserAssistant!
\`\`\`

The peer ID is simply the name of the current device, which is useful for identifying who is joining a session. We're just going to use the current device's name when creating our connection, but we're also going to require encryption. Add this to your \`viewDidLoad()\` method:

\`\`\`swift
peerID = MCPeerID(displayName: UIDevice.current.name)
mcSession = MCSession(peer: peerID, securityIdentity: nil, encryptionPreference: .required)
mcSession.delegate = self
\`\`\`

You will need to tell iOS that your view controller conforms to the \`MCSessionDelegate\` and \`MCBrowserViewControllerDelegate\` delegates, like this:

\`\`\`swift
class ViewController: UIViewController, MCSessionDelegate, MCBrowserViewControllerDelegate {
    // your view controller here
}
\`\`\`

Conforming to those two delegates means implementing quite a few methods. Fortunately, five of them are super simple because three are empty and the other two just dismiss a view controller. Add this code now:

\`\`\`swift
func session(_ session: MCSession, didReceive stream: InputStream, withName streamName: String, fromPeer peerID: MCPeerID) {

}

func session(_ session: MCSession, didStartReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, with progress: Progress) {

}

func session(_ session: MCSession, didFinishReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, at localURL: URL?, withError error: Error?) {

}

func browserViewControllerDidFinish(_ browserViewController: MCBrowserViewController) {
    dismiss(animated: true)
}

func browserViewControllerWasCancelled(_ browserViewController: MCBrowserViewController) {
    dismiss(animated: true)
}
\`\`\`

Next comes a slightly harder method: you need to do something when clients connect or disconnect. That something could just be "I don't care; do nothing," or it might be where you show a message on the screen to tell your user. Here's a basic version that just prints out a status message to the Xcode log:

\`\`\`swift
func session(_ session: MCSession, peer peerID: MCPeerID, didChange state: MCSessionState) {
    switch state {
    case MCSessionState.connected:
        print("Connected: \\(peerID.displayName)")

    case MCSessionState.connecting:
        print("Connecting: \\(peerID.displayName)")

    case MCSessionState.notConnected:
        print("Not Connected: \\(peerID.displayName)")
    }
}
\`\`\`

Time for the important stuff: sending and receiving data. Now, obviously the data you will send and receive depends on what your app does, so you will need to customize this code to fit your needs. In the example I'm going to give, we'll use sending and receiving images, but you could just as easily send strings or anything else.

So, here's how to encode an image into a \`Data\` then send that to all connected peers:

\`\`\`swift
func sendImage(img: UIImage) {
    if mcSession.connectedPeers.count > 0 {
        if let imageData = img.pngData() {
            do {
                try mcSession.send(imageData, toPeers: mcSession.connectedPeers, with: .reliable)
            } catch let error as NSError {
                let ac = UIAlertController(title: "Send error", message: error.localizedDescription, preferredStyle: .alert)
                ac.addAction(UIAlertAction(title: "OK", style: .default))
                present(ac, animated: true)
            }
        }
    }
}
\`\`\`

To receive that on the other side, you need a method like this:

\`\`\`swift
func session(_ session: MCSession, didReceive data: Data, fromPeer peerID: MCPeerID) {
    if let image = UIImage(data: data) {
        DispatchQueue.main.async { [unowned self] in
            // do something with the image
        }
    }
}
\`\`\`

Note that I've explicitly pushed the work to the main thread so that you're safe to do UI work.

All that remains now is to either host a session or join a session. Add these two methods to your code, then call whichever one you need:

\`\`\`swift
func startHosting(action: UIAlertAction!) {
    mcAdvertiserAssistant = MCAdvertiserAssistant(serviceType: "hws-kb", discoveryInfo: nil, session: mcSession)
    mcAdvertiserAssistant.start()
}

func joinSession(action: UIAlertAction!) {
    let mcBrowser = MCBrowserViewController(serviceType: "hws-kb", session: mcSession)
    mcBrowser.delegate = self
    present(mcBrowser, animated: true)
}
\`\`\`

Note: to test this code you'll need either two iOS devices or one device and the simulator.

`),y])}const b=a(p,[["render",k],["__file","how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.html","title":"How to create a peer-to-peer network using the multipeer connectivity framework","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create a peer-to-peer network using the multipeer connectivity framework","description":"Article(s) > How to create a peer-to-peer network using the multipeer connectivity framework","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create a peer-to-peer network using the multipeer connectivity framework"},{"property":"og:description","content":"How to create a peer-to-peer network using the multipeer connectivity framework"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create a peer-to-peer network using the multipeer connectivity framework"}],["meta",{"property":"og:description","content":"Article(s) > How to create a peer-to-peer network using the multipeer connectivity framework"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2018-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create a peer-to-peer network using the multipeer connectivity framework\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2018-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.12,"words":936},"filePathRelative":"hackingwithswift.com/example-code/networking/how-to-create-a-peer-to-peer-network-using-the-multipeer-connectivity-framework.md","localizedDate":"2018년 3월 28일","excerpt":"\\n"}');export{b as comp,I as data};
