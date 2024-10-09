import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as a,n as i,g as n,a as e,r as p,o as h}from"./app-BgNevrm5.js";const d={},g={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},w=t("nav",{class:"table-of-contents"},[t("ul")],-1),u=t("hr",null,null,-1),y=t("blockquote",null,[t("p",null,"Available from iOS 7.0")],-1),f=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/example-code/system/how-to-copy-objects-in-swift-using-copy">How to copy objects in Swift using copy() 
/example-code/system/how-to-copy-text-to-the-clipboard-using-uipasteboard">How to copy text to the clipboard using UIPasteboard 
/example-code/uikit/how-to-disable-undo-redo-copy-and-paste-gestures-using-editinginteractionconfiguration">How to disable undo, redo, copy, and paste gestures using editingInteractionConfiguration 
/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:) 
/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a>
`)],-1);function b(r,k){const o=p("VPCard");return h(),c("div",null,[t("h1",g,[t("a",m,[t("span",null,l(r.$frontmatter.title)+" 관련",1)])]),a(o,i(n({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,u,a(o,i(n({title:"What is copy on write? | Language - free Swift example code",desc:"What is copy on write?",link:"https://hackingwithswift.com/example-code/language/what-is-copy-on-write",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,e(" TODO: 작성 "),e(` 
Copy on write is a common computing technique that helps boost performance when copying structures. To give you an example, imagine an array with 1000 things inside it: if you copied that array into another variable, Swift would have to copy all 1000 elements even if the two arrays ended up being the same.

This problem is solved using copy on write: when you point two variables at the same array they both point to the same underlying data. Swift promises that structs like arrays and dictionaries are copied as values, like numbers, so having two variables point to the same data might seem to contradict that. The solution is simple but clever: if you modify the second variable, Swift takes a full copy at that point so that only the second variable is modified - the first isn't changed.

So, by delaying the copy operation until it's actually needed, Swift can ensure that no wasted work is done.

Warning: copy on write is a feature specifically added to Swift arrays and dictionaries; you don't get it for free in your own data types.

`),f])}const x=s(d,[["render",b],["__file","what-is-copy-on-write.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/what-is-copy-on-write.html","title":"What is copy on write?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What is copy on write?","description":"Article(s) > What is copy on write?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What is copy on write?"},{"property":"og:description","content":"What is copy on write?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-copy-on-write.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/what-is-copy-on-write.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What is copy on write?"}],["meta",{"property":"og:description","content":"Article(s) > What is copy on write?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is copy on write?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.48,"words":445},"filePathRelative":"hackingwithswift.com/example-code/language/what-is-copy-on-write.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{x as comp,S as data};
