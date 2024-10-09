import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as h,e as s,n as o,g as i,d as t,f as r,r as c,o as d}from"./app-BgNevrm5.js";const m={},g={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),v=r("<p>3D Touch is a new technology that was first trialled in Apple Watch as Force Touch, but introduced fully inside the iPhone 6s. In iOS it&#39;s responsible for multiple interesting technologies: peek and pop (to preview and jump into view controllers), application shortcuts (menus on the home screen for common actions) and also pressure-sensitive taps for <code>UITouch</code>.</p><p>All three of these are surprisingly simple to do, but in this project we&#39;re going to use only the last one, and I think you&#39;ll be impressed by how easy it is. This project is about producing a hoax, and we&#39;re going to make it so that if you press hard on any card it will automatically become a star. This allows you to be able to &quot;guess&quot; correctly even without an Apple Watch around, because any card is the right answer as long as you press correctly.</p><p>To accomplish this, we&#39;re going to use two new properties of <code>UITouch</code>: <code>force</code> and <code>maximumPossibleForce</code>. The first tells us how strongly the user is pressing for the current touch, and the second tells us the maximum recognizable strength for the current touch. For our purposes, we just need to make sure the two match: if the user is pressing as hard as the screen can recognize, we&#39;ll enable our cheat.</p><p>The cheat itself is really simple, because we just need to change the image on the front of the card and set its <code>isCorrect</code> property to be true.</p><p>There is one small problem here, but it&#39;s trivial to fix: devices older than the iPhone 6s devices don&#39;t support 3D Touch, and even 3D Touch devices can have the feature disabled on user request. So, we need to add a simple check to ensure 3D Touch is available and enabled on our current device.</p>",5),y=e("code",null,"touchesMoved()",-1),b=e("code",null,"ViewController.swift",-1),T=e("code",null,"ViewController.swift",-1),_=r(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesMoved</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">touchesMoved</span><span class="token punctuation">(</span>touches<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">guard</span> <span class="token keyword">let</span> touch <span class="token operator">=</span> touches<span class="token punctuation">.</span>first <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> location <span class="token operator">=</span> touch<span class="token punctuation">.</span><span class="token function">location</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> cardContainer<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> card <span class="token keyword">in</span> allCards <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> card<span class="token punctuation">.</span>view<span class="token punctuation">.</span>frame<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> view<span class="token punctuation">.</span>traitCollection<span class="token punctuation">.</span>forceTouchCapability <span class="token operator">==</span> <span class="token punctuation">.</span>available <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> touch<span class="token punctuation">.</span>force <span class="token operator">==</span> touch<span class="token punctuation">.</span>maximumPossibleForce <span class="token punctuation">{</span></span>
<span class="line">                    card<span class="token punctuation">.</span>front<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;cardStar&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">                    card<span class="token punctuation">.</span>isCorrect <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That contains three pieces of code that we haven&#39;t looked at before. The first two are tiny but important, so I want to cover them briefly before moving on. The first is <code>location(in:)</code>, which is the UIKit version of the <code>location(in:)</code> method we&#39;ve used in SpriteKit several times. The second is the <code>contains()</code> method of <code>CGRect</code>, which returns true if a point is inside the rectangle.</p><p>I told you it was tiny, but it&#39;s definitely important: our point is the location of the current touch, and our rectangle is the frame of each card. So, this method returns true if the user&#39;s finger is over a particular card.</p><p>The third piece of new code is the check whether 3D Touch is available, although as you can see the check is actually for &quot;force touch&quot; being available – presumably because Apple&#39;s marketing department got involved after development had completed! This is done by reading the current trait collection for the view and checking whether its <code>forceTouchCapability</code> is set to <code>.available</code>.</p><p>That&#39;s all the code it takes to enable our first cheat, but I&#39;m afraid that you can test it only if you have a 3D Touch-capable device – Xcode&#39;s iOS simulator does not support 3D Touch, so either you test with a real device or just take my word for it!</p><p>Note: in case you were wondering, that code will indeed run every time the user moves their finger, but like I said earlier &quot;<code>UIImage</code> shares image data across image views very efficiently, so there&#39;s no extra cost to this approach.&quot; The same is true here: this code will run very quickly.</p>`,6);function S(p,D){const n=c("VPCard"),a=c("FontIcon");return d(),u("div",null,[e("h1",g,[e("a",k,[e("span",null,h(p.$frontmatter.title)+" 관련",1)])]),s(n,o(i({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,f,s(n,o(i({title:"How to measure touch strength using 3D Touch | Hacking with iOS",desc:"How to measure touch strength using 3D Touch",link:"https://hackingwithswift.com/read/37/7/how-to-measure-touch-strength-using-3d-touch",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),v,e("p",null,[t("That's how it all needs to work in theory, but now for the implementation. To keep things as straightforward as possible, we're going to add all this work to "),y,t(" in "),s(a,{icon:"fa-brands fa-swift"}),b,t(", which will get called every time the user's finger moves on the screen. Inside this method, we'll find where the user's touch was, then loop through all the cards to find which one (if any) they are over. Then, if they are over a card and are pressing hard enough, we'll enable the cheat.")]),e("p",null,[t("Add this method to "),s(a,{icon:"fa-brands fa-swift"}),T,t(" now:")]),_])}const C=l(m,[["render",S],["__file","07-how-to-measure-touch-strength-using-3d-touch.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/read/37/07-how-to-measure-touch-strength-using-3d-touch.html","title":"How to measure touch strength using 3D Touch","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to measure touch strength using 3D Touch","description":"Article(s) > How to measure touch strength using 3D Touch","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to measure touch strength using 3D Touch"},{"property":"og:description","content":"How to measure touch strength using 3D Touch"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/37/07-how-to-measure-touch-strength-using-3d-touch.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/37/07-how-to-measure-touch-strength-using-3d-touch.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to measure touch strength using 3D Touch"}],["meta",{"property":"og:description","content":"Article(s) > How to measure touch strength using 3D Touch"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to measure touch strength using 3D Touch\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.05,"words":915},"filePathRelative":"hackingwithswift.com/read/37/07-how-to-measure-touch-strength-using-3d-touch.md","excerpt":"\\n"}');export{C as comp,H as data};
