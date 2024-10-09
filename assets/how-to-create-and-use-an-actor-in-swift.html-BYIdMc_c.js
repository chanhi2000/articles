import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as d,e as a,n as e,g as t,d as c,f as p,r as i,o as k}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=n("nav",{class:"table-of-contents"},[n("ul")],-1),v=n("hr",null,null,-1),b=p(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Creating and using an actor in Swift takes two steps: create the type using <code>actor</code> rather than <code>class</code> or <code>struct</code>, then use <code>await</code> when accessing its properties or methods externally. Swift takes care of everything else for us, including ensuring that properties and methods must be accessed safely.</p><p>Let’s look at a simple example: a URL cache that remembers the data for each URL it downloads. Here’s how that would be created and used:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">actor</span> <span class="token class-name">URLCache</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">URL</span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">data</span><span class="token punctuation">(</span><span class="token keyword">for</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token keyword">let</span> cached <span class="token operator">=</span> cache<span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> cached</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">        cache<span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token operator">=</span> data</span>
<span class="line">        <span class="token keyword">return</span> data</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token attribute atrule">@main</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">App</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token class-name">URLCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://apple.com&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">        <span class="token keyword">let</span> apple <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> dataString <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>decoding<span class="token punctuation">:</span> apple<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token punctuation">:</span> UTF8<span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span>dataString<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-an-actor-in-swift-1.zip",target:"_blank",rel:"noopener noreferrer"},g=p(`<p>I marked its internal <code>cache</code> dictionary as <code>private</code>, so the only way we can access cached data is using the <code>data(for:)</code> method. This provides some degree of safety, because we might do some sort of special work inside the method that would be bypassed by accessing the property directly.</p><p>However, the <em>real</em> protection here is that the property and method are both encapsulated inside an <em>actor</em>, which means only a single thread can use them at any given time. In practice, this avoids two problems:</p><ol><li>Attempting to read from a dictionary at the same time we’re writing to it, which can cause your app to crash.</li><li>Two or more simultaneous requests for the same uncached URL coming in, forcing our code to fetch and store the same data repeatedly. This is a data race: whether we make two requests or one depends on the exact way our code is executed.</li></ol><p>If we didn’t have an actor here – if we had used <code>class URLCache</code> or <code>struct URLCache</code> – then we would need to solve those two problems ourselves. It’s not <em>hard</em>, at least not in a simple way, but it’s error-prone and boring to do, so it’s great to be able to hand this work over to the Swift compiler to do for us.</p><p>However, this ease of use does come with some extra responsibility: it’s really important you keep in mind the serial queue behavior of actors, because it’s entirely possible you can create massive speed bumps in your code just because you wrote <code>actor</code> rather than <code>class</code>. Think about the URL cache we just made, for example – just by using <code>actor</code> rather than <code>class</code> when we made it, we forced it to load only a single URL at a time. If that’s what you want then you’re all set, but if not then you’ll be wondering why all its requests are handled one by one.</p><p>The canonical example of why data races are problematic – the one that is often taught in computer science degrees – is about <em>bank accounts</em>, because here data races can result in serious real-world problems. To see why, here’s an example <code>BankAccount</code> class that handles sending and receiving money:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BankAccount</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> balance<span class="token punctuation">:</span> <span class="token class-name">Decimal</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>initialBalance<span class="token punctuation">:</span> <span class="token class-name">Decimal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        balance <span class="token operator">=</span> initialBalance</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">deposit</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">Decimal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        balance <span class="token operator">=</span> balance <span class="token operator">+</span> amount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">Decimal</span><span class="token punctuation">,</span> to other<span class="token punctuation">:</span> <span class="token class-name">BankAccount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Check that we have enough money to pay</span></span>
<span class="line">        <span class="token keyword">guard</span> balance <span class="token operator">&gt;</span> amount <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Subtract it from our balance</span></span>
<span class="line">        balance <span class="token operator">=</span> balance <span class="token operator">-</span> amount</span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Send it to the other account</span></span>
<span class="line">        other<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> amount<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> firstAccount <span class="token operator">=</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span>initialBalance<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> secondAccount <span class="token operator">=</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span>initialBalance<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">firstAccount<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> secondAccount<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),_={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-an-actor-in-swift-2.zip",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>That’s a class, so Swift won’t do anything to stop us from accessing the same piece of data multiple times. So, what could actually happen here?</p><p>Well, in the worst case two parallel calls to <code>transfer()</code> would be called on the same <code>BankAccount</code> instance, and the following would occur:</p><ol><li>The first would check whether the balance was sufficient for the transfer. It is, so the code would continue.</li><li>The second would also check whether the balance was sufficient for the transfer. It still is, so the code would continue.</li><li>The first would then subtract the amount from the balance, and deposit it in the other account.</li><li>The second would then subtract the amount from the balance, and deposit it in the other account.</li></ol><p>Do you see the problem there? Well, what happens if the account we’re transferring from contains $100, and we’re asked to transfer $80 to the other account? If we follow the steps above, both calls to <code>transfer()</code> will happen in parallel and see that there was enough for the transfer to take place, then both will transfer the money across. The end result is that our check for sufficient funds wasn’t useful, and one account ends up with -$60 – something that might incur fees, or perhaps not even be allowed depending on the type of account they have.</p><p>If we switch this type to be an actor, that problem goes away. This means using <code>actor BankAccount</code> rather than <code>class BankAccount</code>, but also using <code>async</code> and <code>await</code> because we can’t directly call <code>deposit()</code> on the other bank account and instead need to post the request as a message to be executed later.</p><p>Here’s how that looks:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">actor</span> <span class="token class-name">BankAccount</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> balance<span class="token punctuation">:</span> <span class="token class-name">Decimal</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>initialBalance<span class="token punctuation">:</span> <span class="token class-name">Decimal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        balance <span class="token operator">=</span> initialBalance</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">deposit</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">Decimal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        balance <span class="token operator">=</span> balance <span class="token operator">+</span> amount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">Decimal</span><span class="token punctuation">,</span> to other<span class="token punctuation">:</span> <span class="token class-name">BankAccount</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Check that we have enough money to pay</span></span>
<span class="line">        <span class="token keyword">guard</span> balance <span class="token operator">&gt;</span> amount <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Subtract it from our balance</span></span>
<span class="line">        balance <span class="token operator">=</span> balance <span class="token operator">-</span> amount</span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Send it to the other account</span></span>
<span class="line">        <span class="token keyword">await</span> other<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> amount<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> firstAccount <span class="token operator">=</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span>initialBalance<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> secondAccount <span class="token operator">=</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span>initialBalance<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">await</span> firstAccount<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span> to<span class="token punctuation">:</span> secondAccount<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),A={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-an-actor-in-swift-3.zip",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"With that change, our bank accounts can no longer fall into negative values by accident, which avoids a potentially nasty result.",-1),B=n("p",null,"In other places, actors can prevent bizarre results that ought to be impossible. For example, what would happen if our example was a basketball team rather than a bank account, and we were transferring players rather than money? Without actors we could end up in the situation where we transfer the same player twice – Team A would end up without them, and Team B would have them twice!",-1),T={class:"hint-container details"},D=n("summary",null,"Similar solutions…",-1);function R(l,C){const s=i("VPCard"),o=i("FontIcon");return k(),u("div",null,[n("h1",m,[n("a",w,[n("span",null,d(l.$frontmatter.title)+" 관련",1)])]),a(s,e(t({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,v,a(s,e(t({title:"How to create and use an actor in Swift | Swift Concurrency by Example",desc:"How to create and use an actor in Swift",link:"https://hackingwithswift.com/quick-start/how-to-create-and-use-an-actor-in-swift",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),b,n("blockquote",null,[n("p",null,[n("a",y,[a(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),g,n("blockquote",null,[n("p",null,[n("a",_,[a(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),S,n("blockquote",null,[n("p",null,[n("a",A,[a(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),x,B,n("details",T,[D,a(s,e(t({title:"What is an actor and why does Swift have them? | Swift Concurrency by Example",desc:"What is an actor and why does Swift have them?",link:"/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,e(t({title:"What is actor hopping and how can it cause problems? | Swift Concurrency by Example",desc:"What is actor hopping and how can it cause problems?",link:"/hackingwithswift.com/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,e(t({title:"Important: Do not use an actor for your SwiftUI data models | Swift Concurrency by Example",desc:"Important: Do not use an actor for your SwiftUI data models",link:"/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,e(t({title:"What’s the difference between a task and a detached task? | Swift Concurrency by Example",desc:"What’s the difference between a task and a detached task?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(s,e(t({title:"How to make parts of an actor nonisolated | Swift Concurrency by Example",desc:"How to make parts of an actor nonisolated",link:"/hackingwithswift.com/concurrency/how-to-make-parts-of-an-actor-nonisolated.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const I=r(h,[["render",R],["__file","how-to-create-and-use-an-actor-in-swift.html.vue"]]),L=JSON.parse('{"path":"/hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.html","title":"How to create and use an actor in Swift","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create and use an actor in Swift","description":"Article(s) > How to create and use an actor in Swift","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create and use an actor in Swift"},{"property":"og:description","content":"How to create and use an actor in Swift"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/how-to-create-and-use-an-actor-in-swift.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create and use an actor in Swift"}],["meta",{"property":"og:description","content":"Article(s) > How to create and use an actor in Swift"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create and use an actor in Swift\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.09,"words":1526},"filePathRelative":"hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.md","localizedDate":"2021년 11월 28일","excerpt":"\\n"}');export{I as comp,L as data};
