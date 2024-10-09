import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as c,e as i,n as a,g as n,a as t,r as h,o as p}from"./app-BgNevrm5.js";const w={},d={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Available from iOS 2.0")],-1),v=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers" 
/example-code/uikit/how-to-use-view-controller-containment">How to use view controller containment 
/example-code/media/how-to-scan-a-barcode">How to scan a barcode 
/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view">How to find the view controller responsible for a view</a>
`)],-1);function y(r,k){const o=h("VPCard");return p(),s("div",null,[e("h1",d,[e("a",m,[e("span",null,c(r.$frontmatter.title)+" 관련",1)])]),i(o,a(n({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,g,i(o,a(n({title:"What is a UIViewController | UIKit - free Swift example code",desc:"What is a UIViewController",link:"https://hackingwithswift.com/example-code/uikit/what-is-a-uiviewcontroller",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,t(" TODO: 작성 "),t(`
iOS developers often like to talk about the Model-View-Controller architecture (MVC), where every component in their code is either a Model, a View, or a Controller. This is the standard architecture on iOS, which makes it strange that one of the first types you meet is \`UIViewController\` – it has both “view” and “controller” in its name, so what is it?

Well, there is no single answer. In the early days of iPhones, \`UIViewController\` represented one screen of content. Your mailbox was one view controller, and when you tapped to read a message that was shown in a different view controller.

However, the story is more complex than that, because of view controller containment – you can put one view controller inside another, which helps break up your code. As a result, one screen of content might consist of four or five view controllers all working together.

The main (and inescapable) role of view controllers is to respond to view lifecycle event. That is, your view controller code will get call when your view is created, shown, hidden, and destroyed, so it’s down to you to write code to respond to those events properly.

Some people make their view controllers more view than controller (i.e., make it handle layout code and as little else as possible), some people make it more controller than view (i.e., put layout code into \`UIView\` subclasses and put glue code into their view controllers), and some people make it do both: they put all their view code and all their controller code in one place.

If you want to make your view controller more view than controller that’s fine. If you want to make it more controller than view that’s less fine, but it can still work. If you want to use it as both, chances are you’ll stop using Model-View-Controller and start using Massive-View-Controller instead.
`),v])}const V=l(w,[["render",y],["__file","what-is-a-uiviewcontroller.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/what-is-a-uiviewcontroller.html","title":"What is a UIViewController","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is a UIViewController","description":"Article(s) > What is a UIViewController","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-2.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is a UIViewController"},{"property":"og:description","content":"What is a UIViewController"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/what-is-a-uiviewcontroller.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/what-is-a-uiviewcontroller.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is a UIViewController"}],["meta",{"property":"og:description","content":"Article(s) > What is a UIViewController"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-2.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is a UIViewController\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.81,"words":543},"filePathRelative":"hackingwithswift.com/example-code/uikit/what-is-a-uiviewcontroller.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{V as comp,x as data};
