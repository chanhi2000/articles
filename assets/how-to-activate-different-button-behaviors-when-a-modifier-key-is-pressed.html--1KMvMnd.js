import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as t,t as c,e as s,n as a,g as e,f as l,r,o as u}from"./app-BgNevrm5.js";const d={},h={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),k=l(`<blockquote><p>Updated for Xcode 16</p></blockquote><p><strong>New in macOS 15</strong></p><p>macOS often shows different button actions when the user holds down modifiers such as Command or Option, and we can get this in our own apps using the <code>modifierKeyAlternate()</code> modifier.</p><p>Attach this modifier to a button, specifying which modifiers to watch for, and also what to show when those keys are pressed.</p><p>For example, we might make a button that shows a regular amount of detail normally, but when Option is held down it shows some extra detail:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Details&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Regular button action&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">modifierKeyAlternate</span><span class="token punctuation">(</span><span class="token punctuation">.</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Verbose Details&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hold down Option to see this&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For extra power, you can use multiple <code>modifierKeyAlternate()</code> modifiers to add different behaviors to different keys, or specify an array of keys to watch for several at once:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Details&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Regular button action&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">modifierKeyAlternate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">.</span>option<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Verbose Details&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hold down option to see this&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">modifierKeyAlternate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">.</span>command<span class="token punctuation">,</span> <span class="token punctuation">.</span>option<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Show Maximum Details&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hold down Command and Option to see this&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),g={class:"hint-container details"},b=t("summary",null,"Similar solutions…",-1);function v(i,y){const n=r("VPCard");return u(),p("div",null,[t("h1",h,[t("a",m,[t("span",null,c(i.$frontmatter.title)+" 관련",1)])]),s(n,a(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,w,s(n,a(e({title:"How to activate different button behaviors when a modifier key is pressed | SwiftUI by Example",desc:"How to activate different button behaviors when a modifier key is pressed",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k,t("details",g,[b,s(n,a(e({title:"How to show a menu when a button is pressed | SwiftUI by Example",desc:"How to show a menu when a button is pressed",link:"/hackingwithswift.com/swiftui/how-to-show-a-menu-when-a-button-is-pressed.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"How to make buttons that repeat their action when pressed | SwiftUI by Example",desc:"How to make buttons that repeat their action when pressed",link:"/hackingwithswift.com/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"Customizing Button with ButtonStyle | SwiftUI by Example",desc:"Customizing Button with ButtonStyle",link:"/hackingwithswift.com/swiftui/customizing-button-with-buttonstyle.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"How to create a tappable button | SwiftUI by Example",desc:"How to create a tappable button",link:"/hackingwithswift.com/swiftui/how-to-create-a-tappable-button.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,a(e({title:"How to position and style subviews that come from a different view | SwiftUI by Example",desc:"How to position and style subviews that come from a different view",link:"/hackingwithswift.com/swiftui/how-to-position-and-style-subviews-that-come-from-a-different-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const H=o(d,[["render",v],["__file","how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.html","title":"How to activate different button behaviors when a modifier key is pressed","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to activate different button behaviors when a modifier key is pressed","description":"Article(s) > How to activate different button behaviors when a modifier key is pressed","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to activate different button behaviors when a modifier key is pressed"},{"property":"og:description","content":"How to activate different button behaviors when a modifier key is pressed"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to activate different button behaviors when a modifier key is pressed"}],["meta",{"property":"og:description","content":"Article(s) > How to activate different button behaviors when a modifier key is pressed"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to activate different button behaviors when a modifier key is pressed\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"next":"/hackingwithswift.com/swiftui/introduction-to-using-core-data-with-swiftui.md","date":"2024-06-21T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"hackingwithswift.com/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed.md","localizedDate":"2024년 6월 21일","excerpt":"\\n"}');export{H as comp,S as data};
