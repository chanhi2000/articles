import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as l,e as n,n as o,g as i,a as t,r as h,o as g}from"./app-BgNevrm5.js";const u={},p={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},d=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/what-is-trailing-closure-syntax">What is trailing closure syntax? 
/example-code/language/what-is-a-closure">What is a closure? 
/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value 
/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure? 
/example-code/language/what-are-the-changes-in-swift-3">What are the changes in Swift 3?</a>
`)],-1);function b(s,k){const a=h("VPCard");return g(),c("div",null,[e("h1",p,[e("a",m,[e("span",null,l(s.$frontmatter.title)+" 관련",1)])]),n(a,o(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,f,n(a,o(i({title:"What is an escaping closure? | Language - free Swift example code",desc:"What is an escaping closure?",link:"https://hackingwithswift.com/example-code/language/what-is-an-escaping-closure",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(` 
Swift’s closures are reference types, which means if you point two variables at the same closure they share that closure – Swift just remembers that there are two things relying on it by incrementing its reference count.

When a closure gets passed into a function to be used, Swift needs to know whether that function will get used immediately or whether it will be saved for use later on. If it’s used immediately, the compiler can skip adding one to its reference count because the closure will be run straight away then forgotten about. But if it’s used later – or even *might* be used later – Swift needs to add one to its reference count so that it won’t accidentally be destroyed.

For performance reasons, Swift assumes all closures are nonescaping closures, which means they will be used immediately inside the function and not stored, which in turn means Swift doesn’t touch the reference count. If this isn’t the case – if you take any measure to store the closure – then Swift will force you to mark it as \`@escaping\` so that the reference count must be changed.

`),y])}const S=r(u,[["render",b],["__file","what-is-an-escaping-closure.html.vue"]]),v=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-is-an-escaping-closure.html","title":"What is an escaping closure?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is an escaping closure?","description":"Article(s) > What is an escaping closure?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is an escaping closure?"},{"property":"og:description","content":"What is an escaping closure?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-an-escaping-closure.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-an-escaping-closure.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is an escaping closure?"}],["meta",{"property":"og:description","content":"Article(s) > What is an escaping closure?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is an escaping closure?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"hackingwithswift.com/example-code/language/what-is-an-escaping-closure.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{S as comp,v as data};
