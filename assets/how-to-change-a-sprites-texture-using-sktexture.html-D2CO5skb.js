import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as l,e as a,n as r,g as i,a as t,r as p,o as h}from"./app-BgNevrm5.js";const u={},g={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},d=e("nav",{class:"table-of-contents"},[e("ul")],-1),x=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 7.1")],-1),f=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid 
/example-code/games/how-to-create-a-spritekit-texture-atlas-in-xcode">How to create a SpriteKit texture atlas in Xcode 
/example-code/games/how-to-crop-a-sprite-using-skcropnode">How to crop a sprite using SKCropNode 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path</a>
`)],-1);function k(s,S){const o=p("VPCard");return h(),c("div",null,[e("h1",g,[e("a",m,[e("span",null,l(s.$frontmatter.title)+" 관련",1)])]),a(o,r(i({title:"Games - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/games/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),d,x,a(o,r(i({title:"How to change a sprite’s texture using SKTexture | Games - free Swift example code",desc:"How to change a sprite’s texture using SKTexture",link:"https://hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(` 
Although you can create an \`SKSpriteNode\` from a color and size, most folks create them from textures – image data stored in an asset catalog or texture atlas. SpriteKit’s textures are handled using their own class called \`SKTexture\`, and you can load them individually then use them to change the texture used to draw a sprite.

At its most basic, you can change a sprite’s texture like this:

\`\`\`swift
let texture1 = SKTexture(imageNamed: "newTexture")
someSprite.texture = texture1
\`\`\`

However, that only works if your sprite and the texture are the same size – if they don’t, the texture will get squashed to fit the available space.

If the sprite and texture are *different* sizes then a better thing to do is use the \`setTexture()\` action, passing in true for its \`resize\` parameter like this:

\`\`\`swift
let texture2 = SKTexture(imageNamed: "newTexture")
let action = SKAction.setTexture(texture2, resize: true)
someSprite.run(action)
\`\`\`

That will switch the texture over, then grow the sprite to fit the new texture size.

`),f])}const T=n(u,[["render",k],["__file","how-to-change-a-sprites-texture-using-sktexture.html.vue"]]),K=JSON.parse('{"path":"/hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture.html","title":"How to change a sprite’s texture using SKTexture","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to change a sprite’s texture using SKTexture","description":"Article(s) > How to change a sprite’s texture using SKTexture","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-7.1","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to change a sprite’s texture using SKTexture"},{"property":"og:description","content":"How to change a sprite’s texture using SKTexture"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to change a sprite’s texture using SKTexture"}],["meta",{"property":"og:description","content":"Article(s) > How to change a sprite’s texture using SKTexture"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-7.1"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to change a sprite’s texture using SKTexture\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{T as comp,K as data};
