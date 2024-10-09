import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as e,t as l,e as n,n as i,g as a,a as t,r as d,o as p}from"./app-BgNevrm5.js";const h={},u={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},m=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),w=e("blockquote",null,[e("p",null,"Available from iOS 8.0")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Similar solutions…"),t(`
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/system/measuring-execution-speed-using-cfabsolutetimegetcurrent">Measuring execution speed using CFAbsoluteTimeGetCurrent() 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
`)],-1);function A(r,k){const o=d("VPCard");return p(),c("div",null,[e("h1",u,[e("a",g,[e("span",null,l(r.$frontmatter.title)+" 관련",1)])]),n(o,i(a({title:"Media - free Swift example code",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/example-code/media/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,f,n(o,i(a({title:"How to control the pitch and speed of audio using AVAudioEngine | Media - free Swift example code",desc:"How to control the pitch and speed of audio using AVAudioEngine",link:"https://hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,t(" TODO: 작성 "),t(` 
Although it’s easy enough to play sound effects and music using AVKit, it’s actually one of the most powerful frameworks in iOS and can easily add some fun and interesting effects to your apps and games.

For example, one of the powerful classes in AVKit is called \`AVAudioEngine\`. Its job is to connect audio processing objects in a chain so that the output of one object is the input for another. You can feed audio into the start, apply processing in the middle, then play the audio as the output, giving you real-time audio manipulation without much effort.

To try this out, we’ll create a simple test that loads an MP3 file and starts playing it, but adjusts the playback speed and pitch of the audio every time the user taps the screen.

First you need a property to store your \`AVAudioEngine\` object, along with properties that store an \`AVAudioUnitTimePitch\` and an \`AVAudioUnitVarispeed\` – the processors that transform the speed and pitch of audio:

\`\`\`swift
let engine = AVAudioEngine()
let speedControl = AVAudioUnitVarispeed()    
let pitchControl = AVAudioUnitTimePitch()
\`\`\`

Next you need a method that will play a URL. This takes six steps:

1. Create an \`AVAudioFile\` that reads from whatever file URL gets passed into the method.
<li>Create an \`AVAudioPlayerNode\` that will read in your \`AVAudioFile\`. This is a like a more advanced \`AVAudioPlayer\`, and we can use it as part of our engine connections.
<li>Connect the audio player, the pitch control, and the speed control to our playback engine.
<li>Arrange the parts so that the audio player feeds into the speed control, the speed control feeds into the pitch control, and the pitch control feeds to the main mixer output – gets played aloud.
<li>Prepare the audio player node to start reading its file.
<li>Start the engine and the player.

Here’s the code for that, with comments matching the numbers above:

\`\`\`swift
func play(_ url: URL) throws {
    // 1: load the file
    let file = try AVAudioFile(forReading: url)

    // 2: create the audio player
    let audioPlayer = AVAudioPlayerNode()

    // 3: connect the components to our playback engine
    engine.attach(audioPlayer)
    engine.attach(pitchControl)
    engine.attach(speedControl)

    // 4: arrange the parts so that output from one is input to another
    engine.connect(audioPlayer, to: speedControl, format: nil)
    engine.connect(speedControl, to: pitchControl, format: nil)
    engine.connect(pitchControl, to: engine.mainMixerNode, format: nil)

    // 5: prepare the player to play its file from the beginning
    audioPlayer.scheduleFile(file, at: nil)

    // 6: start the engine and player
    try engine.start()
    audioPlayer.play()
}
\`\`\`

Now you can call that method using a path to any audio file in your app bundle.

As for changing the pitch and rate, we made \`pitchControl\` and \`speedControl\` properties so we can adjust them at will. For example:

\`\`\`swift
override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    pitchControl.pitch += 50
    speedControl.rate += 0.1
}
\`\`\`

As you’ll see, this processing happens incredibly quickly – it’s all realtime, so you can create fun effects for apps and games in just a few minutes of work!

`),y])}const x=s(h,[["render",A],["__file","how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.html","title":"How to control the pitch and speed of audio using AVAudioEngine","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to control the pitch and speed of audio using AVAudioEngine","description":"Article(s) > How to control the pitch and speed of audio using AVAudioEngine","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.10","ios","ios-8.0","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to control the pitch and speed of audio using AVAudioEngine"},{"property":"og:description","content":"How to control the pitch and speed of audio using AVAudioEngine"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to control the pitch and speed of audio using AVAudioEngine"}],["meta",{"property":"og:description","content":"Article(s) > How to control the pitch and speed of audio using AVAudioEngine"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.10"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"ios-8.0"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-03-23T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to control the pitch and speed of audio using AVAudioEngine\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-23T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-03-23T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.6,"words":780},"filePathRelative":"hackingwithswift.com/example-code/media/how-to-control-the-pitch-and-speed-of-audio-using-avaudioengine.md","localizedDate":"2021년 3월 23일","excerpt":"\\n"}');export{x as comp,_ as data};
