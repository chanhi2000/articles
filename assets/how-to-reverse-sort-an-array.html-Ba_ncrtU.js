import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as c,e as r,n as a,g as n,a as t,r as h,o as p}from"./app-BgNevrm5.js";const m={},g={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},u=e("nav",{class:"table-of-contents"},[e("ul")],-1),w=e("hr",null,null,-1),y=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),f=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/arrays/how-to-sort-an-array-using-sort">How to sort an array using sort() 
/example-code/arrays/how-to-loop-through-an-array-in-reverse">How to loop through an array in reverse 
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/example-code/strings/how-to-reverse-a-string-using-reversed">How to reverse a string using reversed() 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a>
`)],-1);function v(s,b){const o=h("VPCard");return p(),l("div",null,[e("h1",g,[e("a",d,[e("span",null,c(s.$frontmatter.title)+" 관련",1)])]),r(o,a(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,w,r(o,a(n({title:"How to reverse sort an array | Language - free Swift example code",desc:"How to reverse sort an array",link:"https://hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,t(" TODO: 작성 "),t(` 
Regular sorting on comparable data is as easy as calling the \`sort()\` method, but if you want a *reverse* sort – e.g. highest to lowest numbers, or Z-A alphabetically – there are two options.

The first is to run a regular sort, reverse that sort, then convert the result to an array. For example:

\`\`\`swift
let numbers = [100, 5, 53, 98, 29]
let reversed1 = Array(numbers.sorted().reversed())
\`\`\`

The second option is to provide a custom closure to the \`sorted()\` method that sorts the opposite way to the default, like this:

\`\`\`swift
let reversed2 = numbers.sorted { $0 > $1 }
\`\`\`

Both of those will result in the array 100, 98, 53, 29, 5.

`),f])}const x=i(m,[["render",v],["__file","how-to-reverse-sort-an-array.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array.html","title":"How to reverse sort an array","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to reverse sort an array","description":"Article(s) > How to reverse sort an array","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to reverse sort an array"},{"property":"og:description","content":"How to reverse sort an array"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to reverse sort an array"}],["meta",{"property":"og:description","content":"Article(s) > How to reverse sort an array"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to reverse sort an array\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,H as data};
