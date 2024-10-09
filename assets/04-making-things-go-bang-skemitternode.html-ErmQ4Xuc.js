import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as k,e as a,n as i,g as p,d as s,f as c,r as e,o as m}from"./app-BgNevrm5.js";const h={},g={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},v=n("nav",{class:"table-of-contents"},[n("ul")],-1),b=n("hr",null,null,-1),f=c(`<p>This is easily the best bit of the game, mostly because it involves even more particle systems. There are three things we need to create: a method to explode a single firework, a method to explode all the fireworks (which will call the single firework explosion method), and some code to detect and respond the device being shaken.</p><p>First, the code to explode a single firework. Put this somewhere in your game scene:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">explode</span><span class="token punctuation">(</span>firework<span class="token punctuation">:</span> <span class="token class-name">SKNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> emitter <span class="token operator">=</span> <span class="token class-name">SKEmitterNode</span><span class="token punctuation">(</span>fileNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;explode&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        emitter<span class="token punctuation">.</span>position <span class="token operator">=</span> firework<span class="token punctuation">.</span>position</span>
<span class="line">        <span class="token function">addChild</span><span class="token punctuation">(</span>emitter<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    firework<span class="token punctuation">.</span><span class="token function">removeFromParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You should be able to read that once and know exactly what it does: it creates an explosion where the firework was, then removes the firework from the game scene.</p><p>The <code>explodeFireworks()</code> method is next, and is only fractionally more complicated. It will be triggered when the user wants to set off their selected fireworks, so it needs to loop through the <code>fireworks</code> array (backwards again!), pick out any selected ones, then call <code>explode()</code> on it.</p><p>As I said earlier, the player&#39;s score needs to go up by more when they select more fireworks, so about half of the <code>explodeFireworks()</code> method is taken up with figuring out what score to give the player.</p><p>There&#39;s one small piece of extra complexity: remember, the <code>fireworks</code> array stores the firework container node, so we need to read the firework image out of its <code>children</code> array.</p><p>Enough talk – here&#39;s the code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">explodeFireworks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> numExploded <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span>index<span class="token punctuation">,</span> fireworkContainer<span class="token punctuation">)</span> <span class="token keyword">in</span> fireworks<span class="token punctuation">.</span><span class="token function">enumerated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">guard</span> <span class="token keyword">let</span> firework <span class="token operator">=</span> fireworkContainer<span class="token punctuation">.</span>children<span class="token punctuation">.</span>first <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">SKSpriteNode</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">continue</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> firework<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;selected&quot;</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// destroy this firework!</span></span>
<span class="line">            <span class="token function">explode</span><span class="token punctuation">(</span>firework<span class="token punctuation">:</span> fireworkContainer<span class="token punctuation">)</span></span>
<span class="line">            fireworks<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> index<span class="token punctuation">)</span></span>
<span class="line">            numExploded <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">switch</span> numExploded <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment">// nothing – rubbish!</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token label important"></span>
<span class="line">    case</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">        score <span class="token operator">+=</span> <span class="token number">200</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span></span>
<span class="line">        score <span class="token operator">+=</span> <span class="token number">500</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span></span>
<span class="line">        score <span class="token operator">+=</span> <span class="token number">1500</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span></span>
<span class="line">        score <span class="token operator">+=</span> <span class="token number">2500</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">        score <span class="token operator">+=</span> <span class="token number">4000</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, exploding five fireworks is worth 20x more points than exploding just one, hence the incentive to select groups by color!</p>`,10),y=n("code",null,"motionBegan()",-1),_=n("em",null,"that",-1),S=n("code",null,"GameViewController.swift",-1),x=n("code",null,"UIViewController",-1),E=n("code",null,"explodeFireworks()",-1),K=n("code",null,"prefersStatusBarHidden",-1),N=n("code",null,"GameViewController.swift",-1),V=c(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">motionBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> motion<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token punctuation">.</span><span class="token class-name">EventSubtype</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">guard</span> <span class="token keyword">let</span> skView <span class="token operator">=</span> view <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">SKView</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">guard</span> <span class="token keyword">let</span> gameScene <span class="token operator">=</span> skView<span class="token punctuation">.</span>scene <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">GameScene</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line">    gameScene<span class="token punctuation">.</span><span class="token function">explodeFireworks</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s it, your game is done. Obviously you can&#39;t shake your laptop to make the iOS Simulator respond, but you can use the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Z</kbd> to get the same result. If you&#39;re testing on your iPad, make sure you give it a good shake in order to trigger the explosions!</p>`,2);function M(l,C){const t=e("VPCard"),r=e("VidStack"),o=e("FontIcon");return m(),u("div",null,[n("h1",g,[n("a",w,[n("span",null,k(l.$frontmatter.title)+" 관련",1)])]),a(t,i(p({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),v,b,a(t,i(p({title:"Making things go bang: SKEmitterNode | Hacking with iOS",desc:"Making things go bang: SKEmitterNode",link:"https://hackingwithswift.com/read/20/4/making-things-go-bang-skemitternode",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),a(r,{src:"youtube/90dlnvKUy3w"}),f,n("p",null,[s("There's one last thing to do before this game is complete, and that's to detect the device being shaken. This is easy enough to do because iOS will automatically call a method called "),y,s(" on our game when the device is shaken. Well, it's a little more complicated than "),_,s(" – what actually happens is that the method gets called in "),a(o,{icon:"fa-brands fa-swift"}),S,s(", which is the "),x,s(" that hosts our SpriteKit game scene.")]),n("p",null,[s("The default view controller doesn't know that it has a SpriteKit view, and certainly doesn't know what scene is showing, so we need to do a little typecasting. Once we have a reference to our actual game scene, we can call "),E,s(". Put this method just after the "),K,s(" property in "),a(o,{icon:"fa-brands fa-swift"}),N,s(":")]),V])}const T=d(h,[["render",M],["__file","04-making-things-go-bang-skemitternode.html.vue"]]),F=JSON.parse('{"path":"/hackingwithswift.com/read/20/04-making-things-go-bang-skemitternode.html","title":"Making things go bang: SKEmitterNode","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Making things go bang: SKEmitterNode","description":"Article(s) > Making things go bang: SKEmitterNode","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Making things go bang: SKEmitterNode"},{"property":"og:description","content":"Making things go bang: SKEmitterNode"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/20/04-making-things-go-bang-skemitternode.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/20/04-making-things-go-bang-skemitternode.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Making things go bang: SKEmitterNode"}],["meta",{"property":"og:description","content":"Article(s) > Making things go bang: SKEmitterNode"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Making things go bang: SKEmitterNode\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"hackingwithswift.com/read/20/04-making-things-go-bang-skemitternode.md","excerpt":"\\n"}');export{T as comp,F as data};
