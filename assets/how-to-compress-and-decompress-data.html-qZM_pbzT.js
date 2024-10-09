import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as p,e as a,n as s,g as i,a as t,r as l,o as d}from"./app-BgNevrm5.js";const m={},h={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 13.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a>
`)],-1);function k(n,b){const o=l("VPCard");return d(),c("div",null,[e("h1",h,[e("a",u,[e("span",null,p(n.$frontmatter.title)+" 관련",1)])]),a(o,s(i({title:"System - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/system/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,a(o,s(i({title:"How to compress and decompress data | System - free Swift example code",desc:"How to compress and decompress data",link:"https://hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(` 
Apple gives us dedicated API for compressing binary data, although annoyingly it exists on \`NSData\` without being bridged neatly to Swift’s native \`Data\` type. Fortunately, that conversion is trivial, so this functionality isn’t hard to use.

Here’s how to use it:

\`\`\`swift
do {
    let compressedData = try (yourData as NSData).compressed(using: .lzfse)
    // use your compressed data
} catch {
    print(error.localizedDescription)
}
\`\`\`

Although it’s common for folks to call compression and decompression *zipping* and *unzipping*, zip is one particular file format and the code above uses the LZFSE compression algorithm instead. This an Apple-design compression algorithm that is recommended unless you specifically need one of the others. The alternatives are:

- \`.lz4\` compresses less effectively, but is significantly faster.
<li>\`.zlib\` is the recommended general purpose algorithm to use if you want cross compatibility with non-Apple devices.
<li>\`.lzma\` compresses the most effectively, but should only be used if memory usage and speed are not important. Apple specifically states that this might use a large amount of memory, and so it should be avoided if you’re trying to compress large amounts of data. This is about 10x slower than the alternatives.

If you want to decompress some data, you should use the counterpart method, \`decompressed(using:)\`, which works in the same way.

`),y])}const x=r(m,[["render",k],["__file","how-to-compress-and-decompress-data.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.html","title":"How to compress and decompress data","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to compress and decompress data","description":"Article(s) > How to compress and decompress data","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-13.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to compress and decompress data"},{"property":"og:description","content":"How to compress and decompress data"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to compress and decompress data"}],["meta",{"property":"og:description","content":"Article(s) > How to compress and decompress data"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-13.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-10-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to compress and decompress data\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-10-13T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.md","localizedDate":"2019년 10월 13일","excerpt":"\\n"}');export{x as comp,S as data};
