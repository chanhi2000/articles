import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as e,t as p,e as t,n as a,g as n,f as u,r as o,o as d}from"./app-BgNevrm5.js";const h={},y={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),k=e("hr",null,null,-1),w=u(`<p>We&#39;re going to use <code>async()</code> twice: once to push some code to a background thread, then once more to push code back to the main thread. This allows us to do any heavy lifting away from the user interface where we don&#39;t block things, but then update the user interface safely on the main thread – which is the only place it can be safely updated.</p><p>How you call <code>async()</code> informs the system where you want the code to run. GCD works with a system of queues, which are much like a real-world queue: they are First In, First Out (FIFO) blocks of code. What this means is that your GCD calls don&#39;t create threads to run in, they just get assigned to one of the existing threads for GCD to manage.</p><p>GCD creates for you a number of queues, and places tasks in those queues depending on how important you say they are. All are FIFO, meaning that each block of code will be taken off the queue in the order they were put in, but more than one code block can be executed at the same time so the finish order isn&#39;t guaranteed.</p><p>“How important” some code is depends on something called “quality of service”, or QoS, which decides what level of service this code should be given. Obviously at the top of this is the main queue, which runs on your main thread, and should be used to schedule any work that must update the user interface immediately even when that means blocking your program from doing anything else. But there are four background queues that you can use, each of which has their own QoS level set:</p><ol><li>User Interactive: this is the highest priority background thread, and should be used when you want a background thread to do work that is important to keep your user interface working. This priority will ask the system to dedicate nearly all available CPU time to you to get the job done as quickly as possible.</li><li>User Initiated: this should be used to execute tasks requested by the user that they are now waiting for in order to continue using your app. It&#39;s not as important as user interactive work – i.e., if the user taps on buttons to do other stuff, that should be executed first – but it is important because you&#39;re keeping the user waiting.</li><li>The Utility queue: this should be used for long-running tasks that the user is aware of, but not necessarily desperate for now. If the user has requested something and can happily leave it running while they do something else with your app, you should use Utility.</li><li>The Background queue: this is for long-running tasks that the user isn&#39;t actively aware of, or at least doesn&#39;t care about its progress or when it completes.</li></ol><p>Those QoS queues affect the way the system prioritizes your work: User Interactive and User Initiated tasks will be executed as quickly as possible regardless of their effect on battery life, Utility tasks will be executed with a view to keeping power efficiency as high as possible without sacrificing too much performance, whereas Background tasks will be executed with power efficiency as its priority.</p><p>GCD automatically balances work so that higher priority queues are given more time than lower priority ones, even if that means temporarily delaying a background task because a user interactive task just came in.</p><p>There’s also one more option, which is the default queue. This is prioritized between user-initiated and utility, and is a good general-purpose choice while you’re learning.</p><p>Enough talking, time for some action: we&#39;re going to use <code>async()</code> to make all our loading code run in the background queue with default quality of service. It&#39;s actually only two lines of code different:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>…before the code you want to run in the background, then a closing brace at the end. If you wanted to specify the user-initiated quality of service rather than use the default queue – which is a good choice for this scenario – you would write this instead:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span>qos<span class="token punctuation">:</span> <span class="token punctuation">.</span>userInitiated<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>async()</code> method takes one parameter, which is a closure to execute asynchronously. We’re using trailing closure syntax, which removes an unneeded set of parentheses.</p><p>Because <code>async()</code> uses closures, you might think to start with <code>[weak self] in</code> to make sure there aren’t any accident strong reference cycles, but it isn’t necessary here because GCD runs the code once then throws it away – it won’t retain things used inside.</p><p>To help you place it correctly, here&#39;s how the loading code should look:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span><span class="token function">global</span><span class="token punctuation">(</span>qos<span class="token punctuation">:</span> <span class="token punctuation">.</span>userInitiated<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> urlString<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">showError</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that because our code is now inside a closure, we need to prefix our method calls with <code>self.</code> otherwise Swift complains.</p><p>If you want to try the other QoS queues, you could also use <code>.userInteractive</code>, <code>.utility</code> or <code>.background</code>.</p>`,18);function f(i,b){const s=o("VPCard"),c=o("VidStack");return d(),l("div",null,[e("h1",y,[e("a",m,[e("span",null,p(i.$frontmatter.title)+" 관련",1)])]),t(s,a(n({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,k,t(s,a(n({title:"GCD 101: async() | Hacking with iOS",desc:"GCD 101: async()",link:"https://hackingwithswift.com/read/9/3/gcd-101-async",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(c,{src:"youtube/SrWWLx5wOEU"}),w])}const q=r(h,[["render",f],["__file","03-gcd-101-async.html.vue"]]),D=JSON.parse('{"path":"/hackingwithswift.com/read/09/03-gcd-101-async.html","title":"GCD 101: async()","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"GCD 101: async()","description":"Article(s) > GCD 101: async()","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > GCD 101: async()"},{"property":"og:description","content":"GCD 101: async()"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/09/03-gcd-101-async.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/09/03-gcd-101-async.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"GCD 101: async()"}],["meta",{"property":"og:description","content":"Article(s) > GCD 101: async()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GCD 101: async()\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.28,"words":984},"filePathRelative":"hackingwithswift.com/read/09/03-gcd-101-async.md","excerpt":"\\n"}');export{q as comp,D as data};
