import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as r,e as n,n as a,g as i,a as e,r as l,o as h}from"./app-BgNevrm5.js";const w={},u={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},m=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),f=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up 
/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down 
/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation() 
/example-code/language/how-to-use-conditional-conformance-in-swift">How to use conditional conformance in Swift 
/example-code/testing/how-to-test-throwing-functions">How to test throwing functions</a>
`)],-1);function b(s,k){const o=l("VPCard");return h(),c("div",null,[t("h1",u,[t("a",p,[t("span",null,r(s.$frontmatter.title)+" 관련",1)])]),n(o,a(i({title:"Testing - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/testing/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,g,n(o,a(i({title:"How to do conditional test tear down using addTeardownBlock() | Testing - free Swift example code",desc:"How to do conditional test tear down using addTeardownBlock()",link:"https://hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e(" TODO: 작성 "),e(' \nAll `XCTestCase` subclasses have access to `setUp()` and `tearDown()` instance methods, plus `setUp()` and `tearDown()` class methods for one-time setup and tear down. But sometimes you need to add *conditional* tear down code: if your test creates a resource that must be destroyed, you can add that as an additional tear down step using the `addTeardownBlock()` method.\n\nAs an example, consider this test method:\n\n```swift\nfunc testDatabaseQuery() {\n    let database = connectToDatabase()\n    let results = database.fetchExampleData()\n\n    XCTAssertEqual(results.count, 1, "We should receive exactly one result.")\n}\n```\n\nThat connects to a database, runs an example query, and checks the result. However, behind the scenes our database needs to be reset every time a connection is finished. If *all* our tests relied on the database being created then we could add the cleanup code either to the `tearDown()` instance method or to the `tearDown()` class method, but if it’s only used *sometimes* then that isn’t an option.\n\nFortunately, the `addTeardownBlock()` is designed to fix this: you can pass in any code you want to run when your test is being torn down, and it will be run after the current test finishes, but before the `tearDown()` instance method.\n\nIn the case of the `connectToDatabase()` method that needs clean up, we *could* write that clean up code directly into each test, but that just duplicates code and is likely to cause problems. So, instead we’re going to add the clean up right inside the connection code, like this:\n\n```swift\nfunc connectToDatabase() -> Database {\n    let database = Database()\n    database.connect()\n\n    addTeardownBlock {\n        database.cleanUp()\n    }\n\n    return database\n}\n```\n\nThat `database.cleanUp()` code will be called only when the surrounding test is complete, so it acts a bit like `defer` except the scope is the current test.\n\nIt’s important to get the order of set up and tear down correct, because various things happen at different times. If you have two tests in your `XCTestCase` here’s how it would look:\n\n1. The `setUp()` class method is called.\n<li>The `setUp()` instance method is called.\n<li>One test is run.\n<li>Any tear down blocks that were registered are run.\n<li>The `tearDown()` instance method is called.\n<li>The `setUp()` instance method is called again.\n<li>The second test is run.\n<li>Any tear down blocks that were registered are run.\n<li>The `tearDown()` instance method is called again.\n<li>The `tearDown()` class method is called.\n\nYou won’t need to use tear down blocks often, but they are a useful tool to have.\n\n'),f])}const x=d(w,[["render",b],["__file","how-to-do-conditional-test-tear-down-using-addteardownblock.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.html","title":"How to do conditional test tear down using addTeardownBlock()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to do conditional test tear down using addTeardownBlock()","description":"Article(s) > How to do conditional test tear down using addTeardownBlock()","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to do conditional test tear down using addTeardownBlock()"},{"property":"og:description","content":"How to do conditional test tear down using addTeardownBlock()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to do conditional test tear down using addTeardownBlock()"}],["meta",{"property":"og:description","content":"Article(s) > How to do conditional test tear down using addTeardownBlock()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2018-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to do conditional test tear down using addTeardownBlock()\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2018-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.27,"words":680},"filePathRelative":"hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.md","localizedDate":"2018년 3월 28일","excerpt":"\\n"}');export{x as comp,_ as data};
