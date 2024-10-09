import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as t,t as h,e as a,n as r,g as n,a as e,r as s,o as p}from"./app-BgNevrm5.js";const u={},g={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},y=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),w=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),b=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/language/how-to-reverse-sort-an-array">How to reverse sort an array 
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a>
`)],-1);function k(i,_){const o=s("VPCard"),l=s("VidStack");return p(),m("div",null,[t("h1",g,[t("a",d,[t("span",null,h(i.$frontmatter.title)+" 관련",1)])]),a(o,r(n({title:"Array - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/arrays/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,f,a(o,r(n({title:"How to sort an array using sort() | Array - free Swift example code",desc:"How to sort an array using sort()",link:"https://hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,a(l,{src:"youtube/o_zYsGu2Z8U"}),e(" TODO: 작성 "),e(` 
All arrays have built-in \`sort()\` and \`sorted()\` methods that can be used to sort the array, but they are subtly different.

If the array is simple you can just call \`sort()\` directly, like this, to sort an array in place:

\`\`\`swift
var names = ["Jemima", "Peter", "David", "Kelly", "Isabella"]
names.sort()
\`\`\`

If you have a custom struct or class and want to sort them arbitrarily, you should call \`sort()\` using a trailing closure that sorts on a field you specify. Here's an example using an array of custom structs that sorts on a particular property:

\`\`\`swift
struct User {
    var firstName: String
}

var users = [
    User(firstName: "Jemima"),
    User(firstName: "Peter"),
    User(firstName: "David"),
    User(firstName: "Kelly"),
    User(firstName: "Isabella")
]

users.sort {
    $0.firstName < $1.firstName
}
\`\`\`

If you want to return a sorted array rather than sort it in place, use \`sorted()\` like this:

\`\`\`swift
let sortedUsers = users.sorted {
    $0.firstName < $1.firstName
}
\`\`\`

`),b])}const S=c(u,[["render",k],["__file","how-to-sort-an-array-using-sort.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.html","title":"How to sort an array using sort()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to sort an array using sort()","description":"Article(s) > How to sort an array using sort()","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to sort an array using sort()"},{"property":"og:description","content":"How to sort an array using sort()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to sort an array using sort()"}],["meta",{"property":"og:description","content":"Article(s) > How to sort an array using sort()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-06-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to sort an array using sort()\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-06-01T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.md","localizedDate":"2019년 6월 1일","excerpt":"\\n"}');export{S as comp,H as data};
