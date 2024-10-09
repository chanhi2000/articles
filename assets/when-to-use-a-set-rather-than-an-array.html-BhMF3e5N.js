import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as h,e as o,n,g as r,a as e,r as l,o as m}from"./app-BgNevrm5.js";const u={},p={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray">How to give UITableViewCells a selected color other than gray 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet 
/example-code/system/how-to-set-local-alerts-using-unnotificationcenter">How to set local alerts using UNNotificationCenter 
/example-code/xcode/how-to-set-the-clock-in-the-ios-simulator">How to set the clock in the iOS Simulator</a>
`)],-1);function w(s,k){const a=l("VPCard");return m(),c("div",null,[t("h1",p,[t("a",d,[t("span",null,h(s.$frontmatter.title)+" 관련",1)])]),o(a,n(r({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,o(a,n(r({title:"When to use a set rather than an array | Language - free Swift example code",desc:"When to use a set rather than an array",link:"https://hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e(" TODO: 작성 "),e(` 
Sets and arrays both store objects of your choosing, but they have four important differences:

1. Sets do not store objects in the order they add them.
<li>Instead, they are stored in a way to make them fast to find, which means finding items in sets is extremely efficient.
<li>Sets store each item precisely once.
<li>All items you want to store in a set must conform to \`Hashable\`.

As a result, you should use a set rather than an array if all the following criteria are true:

1. You intend to add each item only once. Sets never allow duplicates.
<li>You don’t care about the order of the items in the set.
<li>You don’t need to use APIs that require arrays.
<li>You’re storing \`Hashable\` types, either your own or one of Swift’s built-in types likes strings and integers. Sets use hash values for fast look up of items.

You can switch between an array and a set simply enough:

\`\`\`swift
let array = [1, 2, 3]
let set = Set(array)
let array2 = Array(set)
\`\`\`

Using \`contains()\` on a set takes the same amount of time if you have one item as it does if you have one thousand items – it’s called an O(1) operation.

`),y])}const S=i(u,[["render",w],["__file","when-to-use-a-set-rather-than-an-array.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array.html","title":"When to use a set rather than an array","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"When to use a set rather than an array","description":"Article(s) > When to use a set rather than an array","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > When to use a set rather than an array"},{"property":"og:description","content":"When to use a set rather than an array"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"When to use a set rather than an array"}],["meta",{"property":"og:description","content":"Article(s) > When to use a set rather than an array"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"When to use a set rather than an array\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array.md","localizedDate":"2019년 11월 28일","excerpt":"\\n"}');export{S as comp,x as data};
