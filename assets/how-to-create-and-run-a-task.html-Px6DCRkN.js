import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as k,e as s,n as t,g as e,d as c,f as o,r as l,o as d}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},v=n("nav",{class:"table-of-contents"},[n("ul")],-1),g=n("hr",null,null,-1),f=o(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Swift’s <code>Task</code> struct lets us start running some work immediately, and optionally wait for the result to be returned. And it <em>is</em> optional: sometimes you don’t care about the result of the task, or sometimes the task automatically updates some external value when it completes, so you can just use them as “fire and forget” operations if you need to. This makes them a great way to run async code from a synchronous function.</p><p>First, let’s look at an example where we create two tasks back to back, then wait for them both to complete. This will fetch data from two different URLs, decode them into two different structs, then print a summary of the results, all to simulate a user starting up a game – what are the latest news updates, and what are the current highest scores?</p><p>Here’s how that looks:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">NewsItem</span><span class="token punctuation">:</span> <span class="token class-name">Decodable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> id<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line">    <span class="token keyword">let</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">HighScore</span><span class="token punctuation">:</span> <span class="token class-name">Decodable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> score<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">fetchUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> newsTask <span class="token operator">=</span> <span class="token class-name">Task</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">NewsItem</span><span class="token punctuation">]</span> <span class="token keyword">in</span></span>
<span class="line">        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://hws.dev/headlines.json&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">NewsItem</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> highScoreTask <span class="token operator">=</span> <span class="token class-name">Task</span> <span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">HighScore</span><span class="token punctuation">]</span> <span class="token keyword">in</span></span>
<span class="line">        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://hws.dev/scores.json&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">HighScore</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> news <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> newsTask<span class="token punctuation">.</span>value</span>
<span class="line">        <span class="token keyword">let</span> highScores <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> highScoreTask<span class="token punctuation">.</span>value</span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Latest news loaded with </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">news<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> items.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token keyword">let</span> topScore <span class="token operator">=</span> highScores<span class="token punctuation">.</span>first <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">topScore<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> has the highest score with </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">topScore<span class="token punctuation">.</span>score</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, out of </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">highScores<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> total results.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;There was an error loading user data.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">fetchUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-run-a-task-1.zip",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>Let’s unpick the key parts:</p><ol><li>Creating and running a task is done by using its initializer, passing in the work you want to do.</li><li>Tasks don’t always need to return a value, but when they do chances are you’ll need to declare exactly what as you create the task – I’ve said <code>() -&gt; [NewsItem] in</code>, for example.</li><li>As soon as you create the task it will start running – there’s no <code>start()</code> method or similar.</li><li>The entire task is run concurrently with your other code, which means it might be able to run in parallel too. In our case, that means fetching and decoding the data happens inside the task, which keeps our main <code>fetchUpdates()</code> function free.</li><li>If you want to read the return value of a task, you need to access its <code>value</code> property using <code>await</code>. In our case our task could also throw errors because we’re accessing the network, so we need to use <code>try</code> as well.</li><li>Once you’ve copied out the value from your task you can use that normally without needing <code>await</code> or <code>try</code> again, although subsequent accesses to the task itself – e.g. <code>newsTask.value</code> – <em>will</em> need <code>try await</code> because Swift can’t statically determine that the value is already present.</li></ol><p>Both tasks in that example returned a value, but that’s not a requirement – the “fire and forget” approach allows us to create a task without storing it, and Swift will ensure it runs until completion correctly.</p><p>To demonstrate this, we could make a small SwiftUI program to fetch a user’s inbox when a button is pressed. Button actions are <em>not</em> async functions, so we need to launch a new task inside the action. The task <em>can</em> call async functions, but in this instance we don’t actually care about the result so we’re not going to store the task – the function it calls will handle updating our SwiftUI view.</p><p>Here’s the code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Message</span><span class="token punctuation">:</span> <span class="token class-name">Decodable</span><span class="token punctuation">,</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> id<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line">    <span class="token keyword">let</span> from<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> text<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Message</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">NavigationView</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Group</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> messages<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Load Messages&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token class-name">Task</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">await</span> <span class="token function">loadMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">List</span><span class="token punctuation">(</span>messages<span class="token punctuation">)</span> <span class="token punctuation">{</span> message <span class="token keyword">in</span></span>
<span class="line">                        <span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token class-name">Text</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>from<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                            <span class="token class-name">Text</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Inbox&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">loadMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://hws.dev/messages.json&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">            <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">            messages <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">Message</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">            messages <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token class-name">Message</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Failed to load inbox.&quot;</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Please try again later.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-run-a-task-2.zip",target:"_blank",rel:"noopener noreferrer"},_=o("<p>Even though that code isn’t so different from the previous example, I still want to pick out a few things:</p><ol><li>Creating the new task is what allows us to start calling an async function even though the button’s action is a synchronous function.</li><li>The lifetime of the task is <em>not</em> bound by the button’s action closure. So, even though the closure will finish immediately, the task it created will carry on running to completion.</li><li>We aren’t trying to read a return value from the task, or storing it anywhere. This task doesn’t actually return anything, and doesn’t need to.</li></ol><p>I know it’s a not a lot of code, but between <code>Task</code>, async/await, and SwiftUI a lot of work is happening on our behalf. Remember, when we use <code>await</code> we’re signaling a potential suspension point, and when our functions resume they might be on the same thread as before or they might not.</p><p>In this case there are potentially four thread swaps happening in our code:</p><ul><li>All UI work runs on the main thread, so the button’s action closure will fire on the main thread.</li><li>Although we create the task on the main thread, the work we pass to it will execute on a background thread.</li><li>Inside <code>loadMessages()</code> we use <code>await</code> to load our URL data, and when that resumes we have another potential thread switch – we might be on the same background thread as before, or on a different background thread.</li><li>Finally, the <code>messages</code> property uses the <code>@State</code> property wrapper, which will automatically update its value on the main thread. So, even though we assign to it on a background thread, the actual update will get silently pushed back to the main thread.</li></ul><p>Best of all, we don’t have to care about this – we don’t need to know how the system is balancing the threads, or even that the threads exist, because Swift and SwiftUI take care of that for us. In fact, the concept of tasks is so thoroughly baked into SwiftUI that there’s a dedicated <code>task()</code> modifier that makes them even easier to use.</p>",6),x={class:"hint-container details"},T=n("summary",null,"Similar solutions…",-1);function I(i,q){const a=l("VPCard"),p=l("FontIcon");return d(),r("div",null,[n("h1",m,[n("a",w,[n("span",null,k(i.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),v,g,s(a,t(e({title:"How to create and run a task | Swift Concurrency by Example",desc:"How to create and run a task",link:"https://hackingwithswift.com/quick-start/concurrency/how-to-create-and-run-a-task",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,n("blockquote",null,[n("p",null,[n("a",y,[s(p,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),b,n("blockquote",null,[n("p",null,[n("a",S,[s(p,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),_,n("details",x,[T,s(a,t(e({title:"What’s the difference between a task and a detached task? | Swift Concurrency by Example",desc:"What’s the difference between a task and a detached task?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",desc:"How to run tasks using SwiftUI’s task() modifier",link:"/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to create and use task local values | Swift Concurrency by Example",desc:"How to create and use task local values",link:"/hackingwithswift.com/concurrency/how-to-create-and-use-task-local-values.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",desc:"What’s the difference between async let, tasks, and task groups?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to cancel a Task | Swift Concurrency by Example",desc:"How to cancel a Task",link:"/hackingwithswift.com/concurrency/how-to-cancel-a-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const R=u(h,[["render",I],["__file","how-to-create-and-run-a-task.html.vue"]]),C=JSON.parse('{"path":"/hackingwithswift.com/concurrency/how-to-create-and-run-a-task.html","title":"How to create and run a task","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create and run a task","description":"Article(s) > How to create and run a task","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create and run a task"},{"property":"og:description","content":"How to create and run a task"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-create-and-run-a-task.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-create-and-run-a-task.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create and run a task"}],["meta",{"property":"og:description","content":"Article(s) > How to create and run a task"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create and run a task\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":4.89,"words":1467},"filePathRelative":"hackingwithswift.com/concurrency/how-to-create-and-run-a-task.md","localizedDate":"2021년 11월 28일","excerpt":"\\n"}');export{R as comp,C as data};
