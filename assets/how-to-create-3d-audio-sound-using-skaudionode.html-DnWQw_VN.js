import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,t as c,e as i,n as a,g as n,a as o,r as u,o as l}from"./app-BgNevrm5.js";const m={},h={id:"frontmatter-title-관련",tabindex:"-1"},p={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 9.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),o(`
/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine">How to control the pitch and speed of audio using AVAudioEngine 
/example-code/media/how-to-record-audio-using-avaudiorecorder">How to record audio using AVAudioRecorder 
/example-code/media/how-to-loop-audio-using-avaudioplayer-and-numberofloops">How to loop audio using AVAudioPlayer and numberOfLoops 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
`)],-1);function k(s,v){const t=u("VPCard");return l(),d("div",null,[e("h1",h,[e("a",p,[e("span",null,c(s.$frontmatter.title)+" 관련",1)])]),i(t,a(n({title:"Games - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/games/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,i(t,a(n({title:"How to create 3D audio sound using SKAudioNode | Games - free Swift example code",desc:"How to create 3D audio sound using SKAudioNode",link:"https://hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,o(" TODO: 작성 "),o(` 
3D audio is a feature where a sound is dynamically altered so that listeners think it comes from a particular location. Obviously they are looking at a flat 2D screen ahead of them, but using some clever mathematics iOS can make sounds "feel" like they are behind you, or at a more basic level adjust the panning so that sounds come from the left or right of the user's audio device.

As of iOS 9.0, you get these features for free: all you need to do is create an \`SKAudioNode\` for your sound and set its \`isPositional\` property to be \`true\`. That's it – iOS will automatically use the position of the node to adjust the way its audio sounds, and it even adjusts the audio as you move it around.

To give you a working example, this creates an audio node from a file called music.m4a (you'll need to provide that), then makes the audio move left and right forever. If you listen to this using headphones (which is the only effective way for 3D sound to work on iOS devices) you'll really hear a pronounced panning effect.

\`\`\`swift
override func didMove(to view: SKView) {
    let music = SKAudioNode(fileNamed: "music.m4a")
    addChild(music)

    music.isPositional = true
    music.position = CGPoint(x: -1024, y: 0)

    let moveForward = SKAction.moveTo(x: 1024, duration: 2)
    let moveBack = SKAction.moveTo(x: -1024, duration: 2)
    let sequence = SKAction.sequence([moveForward, moveBack])
    let repeatForever = SKAction.repeatForever(sequence)

    music.run(repeatForever)
}
\`\`\`

`),y])}const b=r(m,[["render",k],["__file","how-to-create-3d-audio-sound-using-skaudionode.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode.html","title":"How to create 3D audio sound using SKAudioNode","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create 3D audio sound using SKAudioNode","description":"Article(s) > How to create 3D audio sound using SKAudioNode","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-9.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create 3D audio sound using SKAudioNode"},{"property":"og:description","content":"How to create 3D audio sound using SKAudioNode"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create 3D audio sound using SKAudioNode"}],["meta",{"property":"og:description","content":"Article(s) > How to create 3D audio sound using SKAudioNode"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-9.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2019-03-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create 3D audio sound using SKAudioNode\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2019-03-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.66,"words":498},"filePathRelative":"hackingwithswift.com/example-code/games/how-to-create-3d-audio-sound-using-skaudionode.md","localizedDate":"2019년 3월 28일","excerpt":"\\n"}');export{b as comp,_ as data};
