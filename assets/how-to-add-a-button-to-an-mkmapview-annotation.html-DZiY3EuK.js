import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as s,e as a,n as e,g as i,a as n,r as p,o as d}from"./app-BgNevrm5.js";const w={},m={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},u=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 2.0")],-1),b=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),n(`
/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview">How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView 
/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest">How to find directions using MKMapView and MKDirections.Request 
/example-code/location/how-to-add-an-mkmapview-using-mapkit">How to add an MKMapView using MapKit 
/example-code/location/adding-places-to-mkmapview-using-mkplacemark">Adding places to MKMapView using MKPlacemark 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a>
`)],-1);function M(l,V){const o=p("VPCard");return d(),r("div",null,[t("h1",m,[t("a",h,[t("span",null,s(l.$frontmatter.title)+" 관련",1)])]),a(o,e(i({title:"Location - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/location/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,g,a(o,e(i({title:"How to add a button to an MKMapView annotation | Location - free Swift example code",desc:"How to add a button to an MKMapView annotation",link:"https://hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,n(" TODO: 작성 "),n(` 
The built-in \`MKPinAnnotationView\` annotation view has a \`rightCalloutAccessoryView\` property that can be set to any kind of \`UIView\`, including buttons. The button doesn't need to have an action attached to it, because there's a separate method that gets called when it's tapped.

First up, here's how you'd create a button inside an annotation view:

\`\`\`swift
let btn = UIButton(type: .detailDisclosure)
annotationView.rightCalloutAccessoryView = btn
\`\`\`

For context, here's a complete implementation of \`viewForAnnotation\` that uses a button. This is taken from <a href="/read/19/overview">project 19</a> of Hacking with Swift, where I created a class called \`Capital\` that implemented the \`MKAnnotation\` protocol – you'll need to adjust this for your own annotation type:

\`\`\`swift
func mapView(_ mapView: MKMapView, viewFor annotation: MKAnnotation) -> MKAnnotationView? {
    let identifier = "Capital"

    if annotation is Capital {
        if let annotationView = mapView.dequeueReusableAnnotationView(withIdentifier: identifier) {
            annotationView.annotation = annotation
            return annotationView
        } else {
            let annotationView = MKPinAnnotationView(annotation:annotation, reuseIdentifier:identifier)
            annotationView.isEnabled = true
            annotationView.canShowCallout = true

            let btn = UIButton(type: .detailDisclosure)
            annotationView.rightCalloutAccessoryView = btn
            return annotationView
        }
    }

    return nil
}
\`\`\`

When it comes to detecting taps on your button, implement the \`calloutAccessoryControlTapped\` method. This tells you the annotation view that was tapped (from which you can pull out the annotation), the control that was tapped (in our case it's a button), and also the map view the whole thing belongs to. Here's an example:

\`\`\`swift
func mapView(_ mapView: MKMapView, annotationView view: MKAnnotationView, calloutAccessoryControlTapped control: UIControl) {
    let capital = view.annotation as! Capital
    let placeName = capital.title
    let placeInfo = capital.info

    let ac = UIAlertController(title: placeName, message: placeInfo, preferredStyle: .alert)
    ac.addAction(UIAlertAction(title: "OK", style: .default))
    present(ac, animated: true)
}
\`\`\`

`),b])}const v=c(w,[["render",M],["__file","how-to-add-a-button-to-an-mkmapview-annotation.html.vue"]]),A=JSON.parse('{"path":"/hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.html","title":"How to add a button to an MKMapView annotation","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add a button to an MKMapView annotation","description":"Article(s) > How to add a button to an MKMapView annotation","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add a button to an MKMapView annotation"},{"property":"og:description","content":"How to add a button to an MKMapView annotation"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add a button to an MKMapView annotation"}],["meta",{"property":"og:description","content":"Article(s) > How to add a button to an MKMapView annotation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add a button to an MKMapView annotation\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.8,"words":540},"filePathRelative":"hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{v as comp,A as data};
