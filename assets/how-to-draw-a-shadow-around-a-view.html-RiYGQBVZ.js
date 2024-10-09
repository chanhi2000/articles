import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as d,e as a,n as o,g as e,d as s,f as p,r as c,o as w}from"./app-BgNevrm5.js";const h={},k={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g=n("nav",{class:"table-of-contents"},[n("ul")],-1),m=n("hr",null,null,-1),b=p(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>Updated in iOS 16</strong></p><p>SwiftUI gives us two ways of creating shadows: we can attach shadows directly to shape styles, but there’s also a dedicated <code>shadow()</code> modifier to draw shadows around views.</p><p>The former option is useful when you’re working with solid shapes, because you can create drop shadows easily:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span><span class="token function">shadow</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token punctuation">.</span>black<span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-1.zip",target:"_blank",rel:"noopener noreferrer"},y=p(`<p>And you can create <em>inner</em> shadows for those shapes just as easily:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">.</span><span class="token function">shadow</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">inner</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token punctuation">.</span>black<span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-2.zip",target:"_blank",rel:"noopener noreferrer"},x=p(`<p>You can control the color, radius, and position of the shadow, and you can also control which parts of the view get shadowed by adjusting your modifier order.</p><p>If you want to attach a shadow to other kinds of views, you should use the <code>shadow()</code> modifier instead. In its basic form, you can add a shadow just by specifying the radius of the blur, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hacking with Swift&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>black<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">shadow</span><span class="token punctuation">(</span>radius<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),S={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip",target:"_blank",rel:"noopener noreferrer"},H=p(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-1~dark@2x.png" alt="The text “Hacking with Swift” in black on a white rectangle with a thick red border. The text has a hazy gray shadow behind it." tabindex="0" loading="lazy"><figcaption>The text “Hacking with Swift” in black on a white rectangle with a thick red border. The text has a hazy gray shadow behind it.</figcaption></figure><p>That adds a very slight shadow with a 5-point blur centered on the text.</p><p>You can also specify which color you want along with the X and Y offset from the original view. For example, this creates a strong red shadow with a 5-point blur, centered on the text:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hacking with Swift&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">shadow</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token punctuation">.</span>red<span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip",target:"_blank",rel:"noopener noreferrer"},j=p(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-2~dark@2x.png" alt="The text “Hacking with Swift” with a hazy red shadow behind it." tabindex="0" loading="lazy"><figcaption>The text “Hacking with Swift” with a hazy red shadow behind it.</figcaption></figure><p>If you want to specify offsets for the shadow, add <code>x</code> and/or <code>y</code> parameters to the modifier, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hacking with Swift&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">shadow</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token punctuation">.</span>red<span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),z={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip",target:"_blank",rel:"noopener noreferrer"},T=p(`<figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-3~dark@2x.png" alt="The text “Hacking with Swift” centered in a red rectangular outline. Along the rectangle&#39;s bottom edge is a hazy red cloud." tabindex="0" loading="lazy"><figcaption>The text “Hacking with Swift” centered in a red rectangular outline. Along the rectangle&#39;s bottom edge is a hazy red cloud.</figcaption></figure><p>Remember, SwiftUI applies modifiers in the order you list them, so if you want you can have your shadow apply to the border as well just by putting the border modifier before the shadow modifier:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hacking with Swift&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">shadow</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token punctuation">.</span>red<span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),I={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-shadow-around-a-view-3.zip",target:"_blank",rel:"noopener noreferrer"},U=n("figure",null,[n("img",{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-4~dark@2x.png",alt:"The text “Hacking with Swift” centered in a red rectangular outline. Behind and to the bottom right is a blurry shadow of the text and outline.",tabindex:"0",loading:"lazy"}),n("figcaption",null,"The text “Hacking with Swift” centered in a red rectangular outline. Behind and to the bottom right is a blurry shadow of the text and outline.")],-1),A=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"Tips"),n("p",null,[s("If you find your shadow effect isn’t strong enough, add another "),n("code",null,"shadow()"),s(" modifier – you can stack them up to create more complex shadow effects.")])],-1),E={class:"hint-container details"},D=n("summary",null,"Similar solutions…",-1);function X(l,B){const t=c("VPCard"),i=c("FontIcon");return w(),u("div",null,[n("h1",k,[n("a",f,[n("span",null,d(l.$frontmatter.title)+" 관련",1)])]),a(t,o(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,m,a(t,o(e({title:"How to draw a shadow around a view | SwiftUI by Example",desc:"How to draw a shadow around a view",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-shadow-around-a-view",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,n("blockquote",null,[n("p",null,[n("a",v,[a(i,{icon:"fas fa-file-zipper"}),s("Download this as an Xcode project")])])]),y,n("blockquote",null,[n("p",null,[n("a",_,[a(i,{icon:"fas fa-file-zipper"}),s("Download this as an Xcode project")])])]),x,n("blockquote",null,[n("p",null,[n("a",S,[a(i,{icon:"fas fa-file-zipper"}),s("Download this as an Xcode project")])])]),H,n("blockquote",null,[n("p",null,[n("a",q,[a(i,{icon:"fas fa-file-zipper"}),s("Download this as an Xcode project")])])]),j,n("blockquote",null,[n("p",null,[n("a",z,[a(i,{icon:"fas fa-file-zipper"}),s("Download this as an Xcode project")])])]),T,n("blockquote",null,[n("p",null,[n("a",I,[a(i,{icon:"fas fa-file-zipper"}),s("Download this as an Xcode project")])])]),U,A,n("details",E,[D,a(t,o(e({title:"How to draw a border around a view | SwiftUI by Example",desc:"How to draw a border around a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-border-around-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(e({title:"How to color the padding around a view | SwiftUI by Example",desc:"How to color the padding around a view",link:"/hackingwithswift.com/swiftui/how-to-color-the-padding-around-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(e({title:"How to control spacing around individual views using padding | SwiftUI by Example",desc:"How to control spacing around individual views using padding",link:"/hackingwithswift.com/swiftui/how-to-control-spacing-around-individual-views-using-padding.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(e({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(e({title:"How to draw a border inside a view | SwiftUI by Example",desc:"How to draw a border inside a view",link:"/hackingwithswift.com/swiftui/how-to-draw-a-border-inside-a-view.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const C=r(h,[["render",X],["__file","how-to-draw-a-shadow-around-a-view.html.vue"]]),N=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.html","title":"How to draw a shadow around a view","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to draw a shadow around a view","description":"Article(s) > How to draw a shadow around a view","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to draw a shadow around a view"},{"property":"og:description","content":"How to draw a shadow around a view"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to draw a shadow around a view"}],["meta",{"property":"og:description","content":"Article(s) > How to draw a shadow around a view"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-1~dark@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to draw a shadow around a view\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-1~dark@2x.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-2~dark@2x.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-3~dark@2x.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-shadow-around-a-view-4~dark@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.23,"words":968},"filePathRelative":"hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.md","excerpt":"\\n"}');export{C as comp,N as data};
