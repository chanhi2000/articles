import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as t,t as u,e,n as i,g as a,d as s,f as h,r as n,o as f}from"./app-BgNevrm5.js";const p={},w={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),y=h("<blockquote><p>Updated for Xcode 15</p></blockquote><p>Every experienced iOS developer is familiar with Interface Builder and storyboards, and perhaps even XIBs too. They might not <em>like</em> them, but they are at least <em>familiar</em> with them. If you haven&#39;t used these before, you should just skip this bit.</p><p>Still here? That means you&#39;ve used IB before and are probably curious how SwiftUI is different. Well, let me ask you this: have you ever edited a storyboard or XIB by hand?</p><p>Probably not. Well, apart from that one time once, but broadly the answer is <em>no</em> – storyboards and XIBs contain a fairly large amount of XML that isn&#39;t easy to read or easy to edit.</p><p>Worse, storyboards have a habit of growing larger and larger over time. Sure, they might <em>start off</em> small, but then you add another view controller and another, and another, and suddenly you realize that you have ten screens of data in a single file, and any source control changes you make are suddenly quite painful.</p><p>But although being a single point of failure isn&#39;t great, and it&#39;s basically impossible to see what&#39;s changed when someone opens a pull request with a storyboard modification, storyboards and XIBs have a bigger problem.</p><p>You see, Interface Builder doesn&#39;t know much about our Swift code, and our Swift code doesn&#39;t know much about Interface Builder. As a result, we end up with lots of unsafe functionality: we <kbd>Ctrl</kbd>-drag from IB into our code to connect something to an action, but if we then delete that action the code still compiles – IB really doesn&#39;t mind if the code it intends to call no longer exists.</p><p>Similarly, when we create view controllers from a storyboard or dequeue table view cells, we use strings to identify important objects in our code – a system so pervasive, it even has its own name: “stringly typed APIs”. Even then we need to use typecasts because Swift can&#39;t know that the table view cell it got back is actually a <code>MooncakeTableViewCell</code>.</p><p>These problems exist because IB and Swift are very separate things. This isn&#39;t a huge surprise – not only does Interface Builder date from way before the original Mac OS X was a thing, but it&#39;s also very much designed around the way Objective-C works.</p>",9),k=t("p",null,"Anyway, we'll get onto exactly how SwiftUI works soon. For now, the least you need to know is that SwiftUI fixes many problems people had with the old Swift + Interface Builder approach:",-1),I=t("ul",null,[t("li",null,"We no longer have to argue about programmatic or storyboard-based design, because SwiftUI gives us both at the same time."),t("li",null,"We no longer have to worry about creating source control problems when committing user interface work, because code is much easier to read and manage than storyboard XML."),t("li",null,"We no longer need to worry so much about stringly typed APIs – there are still some, but significantly fewer."),t("li",null,"We no longer need to worry about calling functions that don't exist, because our user interface gets checked by the Swift compiler.")],-1),v=t("p",null,"So, I hope you'll agree there are lots of benefits to be had from moving to SwiftUI!",-1),S={class:"hint-container details"},_=t("summary",null,"Similar solutions…",-1);function U(r,B){const o=n("VPCard"),l=n("FontIcon");return f(),d("div",null,[t("h1",w,[t("a",m,[t("span",null,u(r.$frontmatter.title)+" 관련",1)])]),e(o,i(a({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,b,e(o,i(a({title:"SwiftUI vs Interface Builder and storyboards | SwiftUI by Example",desc:"SwiftUI vs Interface Builder and storyboards",link:"https://hackingwithswift.com/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),y,t("p",null,[s("SwiftUI makes a hard break from that past. It's a Swift-only framework, not because Apple has decided that it's time for "),e(l,{icon:"iconfont icon-objective-c"}),s("Objective-C to die, but because it lets SwiftUI leverage the full range of Swift's functionality – value types, opaque return types, protocol extensions, and more.")]),k,I,v,t("details",S,[_,e(o,i(a({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,i(a({title:"All SwiftUI property wrappers explained and compared | SwiftUI by Example",desc:"All SwiftUI property wrappers explained and compared",link:"/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,i(a({title:"How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",desc:"How to use Instruments to profile your SwiftUI code and identify slow layouts",link:"/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,i(a({title:"Building a menu using List | SwiftUI by Example",desc:"Building a menu using List",link:"/hackingwithswift.com/swiftui/building-a-menu-using-list.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),e(o,i(a({title:"Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",desc:"Answering the big question: should you learn SwiftUI, UIKit, or both?",link:"/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const E=c(p,[["render",U],["__file","swiftui-vs-interface-builder-and-storyboards.html.vue"]]),q=JSON.parse('{"path":"/hackingwithswift.com/swiftui/swiftui-vs-interface-builder-and-storyboards.html","title":"SwiftUI vs Interface Builder and storyboards","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"SwiftUI vs Interface Builder and storyboards","description":"Article(s) > SwiftUI vs Interface Builder and storyboards","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > SwiftUI vs Interface Builder and storyboards"},{"property":"og:description","content":"SwiftUI vs Interface Builder and storyboards"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/swiftui-vs-interface-builder-and-storyboards.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/swiftui-vs-interface-builder-and-storyboards.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"SwiftUI vs Interface Builder and storyboards"}],["meta",{"property":"og:description","content":"Article(s) > SwiftUI vs Interface Builder and storyboards"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-02-09T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SwiftUI vs Interface Builder and storyboards\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-09T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-02-09T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.11,"words":933},"filePathRelative":"hackingwithswift.com/swiftui/swiftui-vs-interface-builder-and-storyboards.md","localizedDate":"2021년 2월 9일","excerpt":"\\n"}');export{E as comp,q as data};
