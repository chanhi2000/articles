import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as c,e as o,n,g as i,a as e,r as p,o as h}from"./app-BgNevrm5.js";const u={},m={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),d=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference? 
/example-code/language/how-to-use-flatmap-with-an-optional-value">How to use flatMap() with an optional value 
/example-code/language/how-to-use-map-with-an-optional-value">How to use map() with an optional value 
/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced() 
/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a>
`)],-1);function v(l,b){const a=p("VPCard");return h(),r("div",null,[t("h1",m,[t("a",f,[t("span",null,c(l.$frontmatter.title)+" 관련",1)])]),o(a,n(i({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,w,o(a,n(i({title:"What is an optional value in Swift? | Language - free Swift example code",desc:"What is an optional value in Swift?",link:"https://hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,e(" TODO: 작성 "),e(` 
Swift optionals are one of the most confusing parts of the language for beginners, but actually are fairly easy to understand. Put simply, if I declare a variable as an integer, that means it must hold a number. That number might be 0, 1, -1, 159, -758119, or whatever, but it's definitely a number. This works great for telling me, for example, where in an array a certain element can be found.

But what happens if I ask for the position of an element that doesn't exist in an array? Clearly returning 0 or any positive number isn't helpful, because you wouldn't be able to tell whether 0 meant "not found" or meant "found at the first position in an array." That's where optional values come in: an optional data type might have a value (0, 1, -1, etc) or might have no value at all.

Being able to say "has no value" for any kind of data is really important, and it's baked right into the core of Swift. You see, by default Swift won't let you work directly with optional values, because trying to work on data that isn't there causes a crash – imagine trying to uppercase someone's name when they haven't entered it yet. So, Swift forces you to check and unwrap optionals safely: if the optional has a value do something with it, otherwise do something else.

`),y])}const _=s(u,[["render",v],["__file","what-is-an-optional-value-in-swift.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift.html","title":"What is an optional value in Swift?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is an optional value in Swift?","description":"Article(s) > What is an optional value in Swift?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is an optional value in Swift?"},{"property":"og:description","content":"What is an optional value in Swift?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is an optional value in Swift?"}],["meta",{"property":"og:description","content":"Article(s) > What is an optional value in Swift?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is an optional value in Swift?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"hackingwithswift.com/example-code/language/what-is-an-optional-value-in-swift.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,x as data};
