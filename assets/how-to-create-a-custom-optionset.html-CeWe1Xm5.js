import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as l,e as a,n,g as s,a as e,r as h,o as m}from"./app-BgNevrm5.js";const u={},p={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},d=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 8.0")],-1),y=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-create-and-compose-custom-views">How to create and compose custom views 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-create-a-custom-transition">How to create a custom transition 
/quick-start/swiftui/how-to-create-custom-animated-drawings-with-timelineview-and-canvas">How to create custom animated drawings with TimelineView and Canvas 
/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics</a>
`)],-1);function k(i,b){const o=h("VPCard");return m(),c("div",null,[t("h1",p,[t("a",g,[t("span",null,l(i.$frontmatter.title)+" 관련",1)])]),a(o,n(s({title:"Language - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/language/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,w,a(o,n(s({title:"How to create a custom OptionSet | Language - free Swift example code",desc:"How to create a custom OptionSet",link:"https://hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(` 
Option sets are similar to enums, but they are designed to work as a set so you can use more than one at a time. For example, when using the \`range(of:)\` method of a string, you can specify \`.caseInsensitive\` to have the search ignore case, you can specify \`.backwards\` to have the search start from the end of the string, or you can combine the two:

\`\`\`swift
let string = "The rain in Spain"
let range = string.range(of: "rain", options: [.caseInsensitive, .backwards])
\`\`\`

That searches through the string backwards and ignoring case – we provided both options at the same time. This functionality looks like an enum, but it can also be treated as an array; Swift figures it out for you.

You can write your own by making a custom struct that conforms to the \`OptionSet\` protocol, and it doesn’t take much:

1. Create a constant describing what the underlying value is – it’s normally an integer, but you need to be specific. 
<li>Make static instances of your struct for each option you want to represent.
<li>Each of those should have a unique raw value, so its common to use bit-shifting to avoid mistakes.
<li>Add any groups of those instances as new statics.

To demonstrate this, let’s create a \`UserRoles\` struct that defines roles a user might have in a GitHub account: they can create things, destroy things, and get the status of things.

All three of those roles need unique raw values, so we’re going to use bit shifting – \`1 << 0\`, \`1 << 1\`, and so on – to make that clear.

Here’s how it looks in Swift:

\`\`\`swift
struct UserRoles: OptionSet {
    let rawValue: Int

    static let status = UserRoles(rawValue: 1 << 0)
    static let create = UserRoles(rawValue: 1 << 1)
    static let destroy = UserRoles(rawValue: 1 << 2)
    static let all: UserRoles = [.status, .create, .destroy]
}
\`\`\`

You can now use any of those roles by themselves or in an array:

\`\`\`swift
let roles1: UserRoles = [.create]
let roles2: UserRoles = [.create, .destroy]
let roles3: UserRoles = [.create, .destroy, .status]
let roles4 = UserRoles.all
\`\`\`

`),y])}const _=r(u,[["render",k],["__file","how-to-create-a-custom-optionset.html.vue"]]),O=JSON.parse('{"path":"/hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset.html","title":"How to create a custom OptionSet","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create a custom OptionSet","description":"Article(s) > How to create a custom OptionSet","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create a custom OptionSet"},{"property":"og:description","content":"How to create a custom OptionSet"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create a custom OptionSet"}],["meta",{"property":"og:description","content":"Article(s) > How to create a custom OptionSet"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create a custom OptionSet\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.96,"words":587},"filePathRelative":"hackingwithswift.com/example-code/language/how-to-create-a-custom-optionset.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,O as data};
