import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,t as l,e as n,n as o,g as r,a as t,r as h,o as g}from"./app-BgNevrm5.js";const d={},p={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator">How to use compiler directives to detect the iOS Simulator 
/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword 
/example-code/language/how-to-convert-a-string-to-an-nsstring">How to convert a string to an NSString 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/tips-for-android-developers-switching-to-swift">Tips for Android developers switching to Swift</a>
`)],-1);function k(i,v){const a=h("VPCard");return g(),s("div",null,[e("h1",p,[e("a",m,[e("span",null,l(i.$frontmatter.title)+" 관련",1)])]),n(a,o(r({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,f,n(a,o(r({title:"What are generics? | Language - free Swift example code",desc:"What are generics?",link:"https://hackingwithswift.com/example-code/language/what-are-generics",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(` 
Generics are a way of making one data type act in a variety of ways depending on how it is created. You’ve already used them whether you realized or not: Swift has an \`Array\` type, but it is *generic* – it doesn’t contain any sort of specific data. Instead, you ask for arrays that hold specific kinds of data by using things like \`[String]\` to get a string array.

It’s not hard to create generics of your own, and to demonstrate that we’re going to create a simple \`Queue\` type. These are first-in, first-out data structures (FIFO), which means you add things to the back and remove them from the front – much like a real-life queue.

We want this queue to be generic, and in Swift you do that by writing the name of a generic placeholder inside angle brackets, like this: \`struct Queue<T> {\`. That \`T\` doesn’t mean anything special – it could have been \`R\` or \`Element\` – but \`T\` is commonly used.

Inside the queue we’re going to have an internal array tracking the items we’re storing, and we’ll write methods to add and remove items.

Here’s the complete \`Queue\` struct:

\`\`\`swift
struct Queue<T> {
    private var internalArray = [T]()

    var count: Int {
        return internalArray.count
    }

    mutating func add(_ item: T) {
        internalArray.append(item)
    }

    mutating func remove() -> T? {
        if internalArray.count > 0 {
            return internalArray.removeFirst()
        } else {
            return nil
        }
    }
}
\`\`\`

You can now create a queue to store any object you want. For example, this create a queue of integers:

\`\`\`swift
let queue = Queue<Int>()
\`\`\`

`),y])}const x=c(d,[["render",k],["__file","what-are-generics.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-are-generics.html","title":"What are generics?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What are generics?","description":"Article(s) > What are generics?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What are generics?"},{"property":"og:description","content":"What are generics?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-are-generics.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-are-generics.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What are generics?"}],["meta",{"property":"og:description","content":"Article(s) > What are generics?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What are generics?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.63,"words":490},"filePathRelative":"hackingwithswift.com/example-code/language/what-are-generics.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,S as data};
