import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as l,e as o,n as a,g as s,a as e,r as p,o as d}from"./app-BgNevrm5.js";const m={},h={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},u=t("nav",{class:"table-of-contents"},[t("ul")],-1),g=t("hr",null,null,-1),f=t("blockquote",null,[t("p",null,"Available from iOS 11.0")],-1),k=t("details",{class:"hint-container details"},[t("summary",null,"Similar solutions…"),e(`
/quick-start/swiftui/how-to-add-spacing-between-letters-in-text">How to add spacing between letters in text 
/quick-start/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more">How to style text views with fonts, colors, line spacing, and more 
/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing">How to customize stack layouts with alignment and spacing 
/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding">How to control spacing around individual views using padding 
/example-code/uikit/what-are-the-different-uistackview-distribution-types">What are the different UIStackView distribution types?</a>
`)],-1);function y(n,v){const i=p("VPCard");return d(),r("div",null,[t("h1",h,[t("a",w,[t("span",null,l(n.$frontmatter.title)+" 관련",1)])]),o(i,a(s({title:"UIKit - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/uikit/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),u,g,o(i,a(s({title:"How to add custom spacing to UIStackView items | UIKit - free Swift example code",desc:"How to add custom spacing to UIStackView items",link:"https://hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,e(" TODO: 작성 "),e(`
Each \`UIStackView\` has an overall \`spacing\` property that affects spacing between all of its arranged subviews, but in addition you can add custom spacing after specific views – for example, “put 20 points of space under this button.”

To make that happen, use the \`setCustomSpacing()\` method of your stack view, providing it the number of points of spacing you want and the view that should precede the spacing.

For example, this code creates a stack view and a button, adds the button to the stack view, then requests 20 points of spacing after it:

\`\`\`swift
let stackView = UIStackView()
let btn = UIButton()

stackView.addArrangedSubview(btn)
stackView.setCustomSpacing(20, after: btn)
\`\`\`

`),k])}const _=c(m,[["render",y],["__file","how-to-add-custom-spacing-to-uistackview-items.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items.html","title":"How to add custom spacing to UIStackView items","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to add custom spacing to UIStackView items","description":"Article(s) > How to add custom spacing to UIStackView items","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-11.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to add custom spacing to UIStackView items"},{"property":"og:description","content":"How to add custom spacing to UIStackView items"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to add custom spacing to UIStackView items"}],["meta",{"property":"og:description","content":"Article(s) > How to add custom spacing to UIStackView items"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-11.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to add custom spacing to UIStackView items\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{_ as comp,x as data};
